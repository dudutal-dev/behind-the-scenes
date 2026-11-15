// הטלסקופ: משנים את קוטר העדשה, את מרחק המוקד שלה ואת העינית, ורואים מה משתנה בחתך ובמראה שבעינית.
//
// נוסחאות וקבועים:
//   הגדלה            M = F / f          (מרחק המוקד של העדשה הקדמית חלקי מרחק המוקד של העינית)
//   איסוף אור        (D / 7 מ״מ)²       ביחס לעין חשופה; 7 מ״מ = אישון מורחב לגמרי בחושך
//   הגדלה מועילה     עד כ-2 × D במ״מ    (כלל אצבע; מעליה "הגדלה ריקה" — גבול העקיפה של הקוטר)
//   אישון יציאה      D / M              רוחב אלומת האור שיוצאת מהעינית. מעל 7 מ״מ חלק מהאור לא נכנס לעין.
//   בהירות פני הירח  ∝ (אישון יציאה / 7)², לכל היותר 1 — עצם מורחב אף פעם לא בהיר יותר מבעין חשופה.
//   מספר הכוכבים     ∝ D^2.5            (גבול הבהירות עולה ב-5·log10(D), ומספר הכוכבים גדל בערך פי 10^0.5 לכל דרגה)
// המראה בעינית: שדה נראה של 50°; קוטר הירח 0.5°, ולכן הוא ממלא את השדה בהגדלה ×100.
// פישוטים (לא הופכים שום מגמה): החתך אינו בקנה מידה (הקוטר מוגדל לעומת האורך); הטשטוש והעמעום
// במראה מוגזמים/דחוסים כדי שייראו על מסך; הכוכבים נשארים במקומם כשההגדלה משתנה.
import { range, readouts, wire, out, fmt, clamp } from "./kit.js";

const PUPIL = 7;                 // מ״מ
const CY = 80, X_LENS = 20;      // ציר הטלסקופ ומיקום העדשה הקדמית
const VX = 268, VY = 78, VR = 40; // עיגול "המראה בעינית"
const RAYS = [-1, -0.5, 0, 0.5, 1];

// מחולל אקראי קבוע, כדי ששדה הכוכבים יהיה זהה בכל פעם
const rnd = (() => { let s = 20240; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
const STARS = Array.from({ length: 70 }, (_, k) => {
  const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * (VR - 3);
  // need = הקוטר הקטן ביותר (ס״מ) שבו הכוכב נראה; התפלגות שנותנת מספר כוכבים ∝ D^2.5
  const need = k < 3 ? 4 : 40 * Math.pow(rnd(), 1 / 2.5);
  return { x: VX + r * Math.cos(a), y: VY + r * Math.sin(a), need };
});

export default {
  title: "בנה טלסקופ משלך",
  hint: "העינית קובעת כמה התמונה גדולה; הקוטר קובע כמה אור נאסף וכמה פרטים יש בה. האור מושווה לאישון עין של 7 מ״מ בחושך.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="טלסקופ בחתך עם קרני אור שמתכנסות למוקד, ולצידו המראה בעינית">
        <defs>
          <clipPath id="view"><circle cx="${VX}" cy="${VY}" r="${VR}"/></clipPath>
          <filter id="soft" filterUnits="userSpaceOnUse" x="${VX - VR - 14}" y="${VY - VR - 14}" width="${2 * VR + 28}" height="${2 * VR + 28}">
            <feGaussianBlur id="blur" stdDeviation="0"/>
          </filter>
        </defs>
        <!-- הטלסקופ בחתך -->
        <path id="tube" class="fl-elec st-ink" stroke-width="1.500" stroke-linejoin="round"/>
        <path id="dark" class="fl-dark"/>
        <path id="cone" class="fl-warm" fill-opacity=".28"/>
        <g id="rays" class="wire st-warm" style="stroke-width:1.300">${RAYS.map(() => "<path/>").join("")}</g>
        <ellipse id="obj" class="fl-cold-soft st-ink" stroke-width="1.500" cx="${X_LENS}" cy="${CY}" rx="4"/>
        <ellipse id="eyep" class="fl-cold-soft st-ink" stroke-width="1.200" cy="${CY}" rx="2.600"/>
        <circle id="focus" class="fl-elec st-ink" stroke-width=".8" cy="${CY}" r="2.400"/>
        <path id="ftick" class="thin" style="stroke-width:1" stroke-dasharray="2 2.500"/>
        <g id="eye">
          <path class="body" style="stroke-width:1.500" d="M0 -9Q12 0 0 9Q-5 0 0 -9z"/>
          <ellipse class="fl-ink" cx="1.500" cy="0" rx="1.600" ry="3.600"/>
        </g>
        <!-- מידות -->
        <path id="dimF" class="thin st-ink" style="stroke-width:1"/>
        <text id="labF" y="150" class="sm"></text>
        <text id="labFocus" class="sm">מוקד</text>
        <text id="labD" class="sm"></text>
        <!-- המראה בעינית -->
        <circle cx="${VX}" cy="${VY}" r="${VR}" fill="#070a16"/>
        <g clip-path="url(#view)">
          <g id="stars" fill="#fff">${STARS.map((s) => `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="1"/>`).join("")}</g>
          <g filter="url(#soft)">
            <g id="moon">
              <circle r="1" fill="#ecebe3"/>
              <g fill="#b7b5a8">
                <ellipse cx="-.32" cy="-.36" rx=".3" ry=".24"/><ellipse cx=".3" cy="-.2" rx=".22" ry=".28"/>
                <ellipse cx="-.42" cy=".2" rx=".2" ry=".26"/><ellipse cx=".1" cy=".34" rx=".3" ry=".17"/>
              </g>
              <g fill="#cfcdc2" stroke="#a09e92" stroke-width=".012">
                <circle cx=".02" cy="-.03" r=".05"/><circle cx="-.1" cy="-.6" r=".035"/><circle cx=".52" cy=".3" r=".05"/>
                <circle cx="-.12" cy=".66" r=".07"/><circle cx=".12" cy=".05" r=".022"/><circle cx="-.06" cy=".12" r=".028"/>
                <circle cx=".1" cy="-.12" r=".018"/><circle cx="-.14" cy="-.02" r=".016"/><circle cx=".66" cy="-.4" r=".04"/>
                <circle cx="-.7" cy="-.1" r=".04"/><circle cx=".04" cy=".2" r=".014"/><circle cx="-.03" cy="-.16" r=".012"/>
              </g>
            </g>
          </g>
          <circle id="dim" cx="${VX}" cy="${VY}" r="${VR + 1}" fill="#070a16" opacity="0"/>
        </g>
        <circle class="st-ink fl-none" stroke-width="3" cx="${VX}" cy="${VY}" r="${VR}"/>
        <text x="${VX}" y="${VY + VR + 15}" class="sm">המראה בעינית</text>
        <text id="note" x="160" y="186"></text>
        <text id="note2" x="160" y="170" class="sm"></text>
      </svg>
      ${readouts([{ id: "m", label: "הגדלה" }, { id: "light", label: "אור מול העין" }, { id: "max", label: "גבול ההגדלה" }])}
      ${range({ id: "d", label: "קוטר", min: 5, max: 40, value: 10 })}
      ${range({ id: "fo", label: "אורך מוקד", min: 60, max: 200, step: 10, value: 120 })}
      ${range({ id: "fe", label: "עינית", min: 4, max: 40, value: 24 })}`;

    const q = (s) => root.querySelector(s);
    const set = (s, a, v) => q(s).setAttribute(a, v);
    const rays = [...q("#rays").children];
    const stars = [...q("#stars").children];
    const n = (x) => x.toFixed(1);

    wire(root, ({ d, fo, fe }) => {
      const Dmm = d * 10, Fmm = fo * 10;
      const M = Fmm / fe;                         // הגדלה
      const light = (Dmm / PUPIL) ** 2;           // איסוף אור ביחס לעין
      const maxM = 2 * Dmm;                       // הגדלה מועילה מרבית
      const exitPupil = Dmm / M;                  // מ״מ

      out(root, "d-out", `${d} ס״מ`);
      out(root, "fo-out", `${fo} ס״מ`);
      out(root, "fe-out", `${fe} מ״מ`);
      out(root, "m", `×${fmt(M, M < 100 ? 1 : 0)}`);
      out(root, "light", `×${fmt(light, 0)}`);
      out(root, "max", `×${fmt(maxM, 0)}`);

      // --- החתך ---
      const h = 5 + d * 0.9;                      // חצי גובה העדשה: 9.5..41 פיקסלים
      const L = fo * 0.75;                        // אורך עד המוקד: 45..150 פיקסלים
      const le = 4 + fe * 0.45;                   // מהמוקד עד העינית: 5.8..22
      const xf = X_LENS + L, xe = xf + le, xEye = xe + 15;
      const hb = h * le / L;                      // חצי רוחב האלומה היוצאת (משולשים דומים) — קטן ככל שההגדלה גדלה
      const he = Math.max(7, hb + 3);             // חצי גובה העינית
      const wall = h + 4, neck = Math.max(10, he + 3), xn = Math.max(X_LENS + 8, xf - 12);
      set("#tube", "d", `M${X_LENS - 3} ${n(CY - wall)}H${n(xn)}V${n(CY - neck)}H${n(xe + 4)}V${n(CY + neck)}H${n(xn)}V${n(CY + wall)}H${X_LENS - 3}z`);
      set("#dark", "d", `M${X_LENS - 3} ${n(CY - wall + 3)}H${n(xn - 3)}V${n(CY - neck + 3)}H${n(xe + 4.800)}V${n(CY + neck - 3)}H${n(xn - 3)}V${n(CY + wall - 3)}H${X_LENS - 3}z`);
      set("#cone", "d", `M${X_LENS} ${n(CY - h)}L${n(xe)} ${n(CY + hb)}H${n(xEye)}V${n(CY - hb)}H${n(xe)}L${X_LENS} ${n(CY + h)}z`);
      rays.forEach((p, k) => {
        const y = CY + RAYS[k] * h, y2 = CY - RAYS[k] * hb;
        p.setAttribute("d", `M3 ${n(y)}H${X_LENS}L${n(xe)} ${n(y2)}H${n(xEye)}`);
      });
      set("#obj", "ry", n(h));
      set("#eyep", "cx", n(xe)); set("#eyep", "ry", n(he));
      set("#focus", "cx", n(xf));
      set("#eye", "transform", `translate(${n(xEye + 1)} ${CY})`);
      const yDim = 138;
      set("#ftick", "d", `M${n(xf)} ${CY + 4}V${yDim}`);
      set("#dimF", "d", `M${X_LENS} ${yDim - 3}V${yDim + 3}M${X_LENS} ${yDim}H${n(xf)}M${n(xf)} ${yDim - 3}V${yDim + 3}`);
      set("#labF", "x", n(clamp((X_LENS + xf) / 2, 46, 200)));
      out(root, "labF", `מרחק מוקד ${fo} ס״מ`);
      set("#labFocus", "x", n(clamp(xf, 20, 196))); set("#labFocus", "y", n(CY - neck - 5));
      // תווית הקוטר מעל הצינור, רק כשיש לה מקום משמאל ל"מוקד"
      set("#labD", "x", 40); set("#labD", "y", n(Math.max(12, CY - wall - 5)));
      out(root, "labD", xf > 96 ? `קוטר ${d} ס״מ` : "");

      // --- המראה בעינית ---
      const rMoon = VR * (M * 0.5) / 50;          // 0.5° של ירח מתוך שדה נראה של 50°
      set("#moon", "transform", `translate(${VX} ${VY}) scale(${rMoon.toFixed(2)})`);
      // טשטוש: מתחיל כשהעין מתחילה לראות את גבול ההפרדה (M ≈ D) וגדל עם M/D. מוגזם לצורך התצוגה.
      const blur = clamp(1.1 * (M / Dmm - 1), 0, 6);
      set("#blur", "stdDeviation", blur.toFixed(2));
      // בהירות הפנים ∝ (אישון יציאה/7)², מוצגת בסולם לוגריתמי דחוס
      const surf = Math.min(1, (exitPupil / PUPIL) ** 2);
      set("#dim", "opacity", clamp(-0.24 * Math.log10(surf), 0, 0.72).toFixed(2));
      stars.forEach((c, k) => {
        const s = STARS[k], on = d >= s.need;
        c.setAttribute("opacity", on ? clamp(0.45 + 0.55 * (d - s.need) / 12, 0, 1).toFixed(2) : 0);
        c.setAttribute("r", (0.55 + 0.9 * clamp((d - s.need) / 30, 0, 1)).toFixed(2));
      });

      const empty = M > maxM, wide = exitPupil > PUPIL;
      out(root, "note", empty ? "הגדלה ריקה: גדול יותר, אבל מטושטש וחיוור"
        : wide ? "הגדלה נמוכה מדי: חלק מהאור לא נכנס לאישון"
        : M > Dmm ? "קרוב לגבול: התמונה גדולה אך מתחילה להתרכך" : "");
      out(root, "note2", `אלומת האור שיוצאת לעין: ${fmt(exitPupil, 1)} מ״מ`);
    });
  },
};
