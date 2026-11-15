// איך ספינה צפה: מעמיסים מטען, בוחרים צורת גוף ומרימים את המטען. רואים את השקיעה עולה עם המשקל,
// את קו המים מול סימן פלימסול, ומבחן הטיה שבו הזרוע המיישרת מחזירה את הספינה או מהפכת אותה.
//
// המודל: דוברה בחתך מלבני (ארגז) באורך L = 80 מ', במי ים (ρ = 1.025 טון למ"ק). שני גופים עם אותו שטח חתך B·D ≈ 128 מ"ר:
//   רחבה ושטוחה: רוחב B = 16 מ', גובה דופן D = 8 מ' · צרה ועמוקה: B = 11 מ', D = 11.6 מ'.
//   משקל הספינה הריקה M0 = 2,000 טון, ומרכז הכובד שלה בגובה 0.4·D מעל השדרית (KG0).
// ציפה (ארכימדס): הספינה שוקעת עד שמשקל המים שנדחקו שווה למשקלה:
//   Δ = M0 + מטען,  T = Δ / (ρ · L · B)   (T = השקיעה, עומק הגוף במים)
// סימן פלימסול: מותר לשקוע עד T_max = 0.75·D (פישוט: גובה רזרבי של רבע מגובה הדופן). T ≥ D: המים עולים על הסיפון והספינה טובעת.
// יציבות (מודל הגובה המטצנטרי):
//   KB = T/2 (מרכז הציפה של ארגז = מחצית השקיעה)
//   BM = I/V = (L·B³/12) / (L·B·T) = B² / (12·T)
//   KM = KB + BM   (גובה המטצנטר מעל השדרית)
//   KG = (M0·KG0 + מטען·h) / Δ   (h = גובה מרכז המטען מעל השדרית)
//   GM = KM − KG   (הגובה המטצנטרי). GM > 0: יציבה · GM ≤ 0: מתהפכת.
//   זרוע מיישרת: GZ(θ) = GM · sin θ   (המודל הפשוט, מדויק בזוויות קטנות)
// מבחן ההטיה: θ'' = −g·GZ(θ)/k² − 2ζω₀·θ',  רדיוס סיבוב k = 0.4·B, ריסון ζ = 0.08.
//   זמן מחזור הנדנוד: 2π·k / √(g·GM). באיור הזמן מואץ פי 3.
// פישוטים: GZ = GM·sinθ גם בזוויות גדולות (בלי השפעת שקיעת שפת הסיפון), והספינה מסתובבת סביב נקודת קו המים.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const L = 80, RHO = 1.025, M0 = 2000, G = 9.81, ZETA = 0.08, SPEED = 3;
const HULLS = {
  wide: { B: 16, D: 8 },
  narrow: { B: 11, D: 11.6 },
};
const S = 6.5;              // פיקסלים למטר
const CX = 96, W = 100;     // מרכז הספינה וגובה פני המים באיור
const CAP = (60 * Math.PI) / 180; // מעבר לזווית הזו הספינה כבר לא חוזרת (בתצוגה: נחשבת התהפכה)
const PUSH = (12 * Math.PI) / 180;

// גרף הזרוע המיישרת: 0°–60° על ציר X, GZ במטרים על ציר Y
const PX0 = 212, PX1 = 306, PY0 = 74, PYS = 7; // ציר האפס ו־7 פיקסלים למטר
const px = (deg) => PX0 + ((PX1 - PX0) * deg) / 60;
const py = (gz) => PY0 - clamp(gz, -5.5, 5.5) * PYS;

function model(hullId, cargo, h) {
  const { B, D } = HULLS[hullId];
  const disp = M0 + cargo;
  const T = disp / (RHO * L * B);
  const KB = T / 2, BM = (B * B) / (12 * T), KM = KB + BM;
  const KG = (M0 * 0.4 * D + cargo * h) / disp;
  const GM = KM - KG;
  return { B, D, disp, T, TMAX: 0.75 * D, KB, BM, KM, KG, GM, sinks: T >= D };
}

export default {
  title: "העמס, הרם והטה את הספינה",
  hint: "כל טון מטען מוריד את הספינה עוד, עד קו פלימסול. מטען גבוה מרים את מרכז הכובד: כשהוא עובר את המטצנטר, ההטיה כבר לא מתיישרת.",
  mount(root) {
    root.innerHTML = `
      <style>
        .sh-push{display:block;margin:10px auto 0;min-height:40px;padding:0 22px;border-radius:14px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;font-weight:700;font-size:14.5px;box-shadow:var(--shadow);touch-action:manipulation}
        .sh-push:active{background:var(--soft)}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="ספינה בחתך רוחב צפה במים, עם מרכז הכובד, מרכז הציפה וגרף הזרוע המיישרת">
        <!-- גרף הזרוע המיישרת -->
        <text x="256" y="16">זרוע מיישרת (מ׳)</text>
        <path class="thin" d="M${PX0} 34V114"/>
        <path class="thin st-ink" d="M${PX0} ${PY0}H${PX1}"/>
        <path class="thin" style="stroke-dasharray:2 3" d="M${px(30)} 34V114M${px(60)} 34V114"/>
        <text x="${PX0}" y="126" class="sm">0°</text><text x="${px(30)}" y="126" class="sm">30°</text><text x="${px(60)}" y="126" class="sm">60°</text>
        <text x="${PX0 - 8}" y="${PY0 - 18}" class="sm">+</text><text x="${PX0 - 8}" y="${PY0 + 24}" class="sm">−</text>
        <path id="curve" class="wire st-green"/>
        <circle id="cdot" class="fl-ink" r="3.5"/>
        <text x="256" y="138" class="sm">זווית ההטיה</text>
        <!-- מים: מאחורי הספינה -->
        <rect class="fl-cold-soft" x="0" y="${W}" width="200" height="${200 - W}" opacity=".6"/>
        <!-- הספינה -->
        <g id="ship">
          <path id="hullp" class="body"/>
          <path id="anti" class="st-hot fl-none" stroke-width="2.5" opacity=".6"/>
          <path id="deck" class="thin"/>
          <g id="cargo"></g>
          <g id="plim" class="st-hot fl-none" stroke-width="1.5"><circle r="3.2"/><path d="M-5 0H5"/></g>
        </g>
        <!-- מים: מלפנים, שקופים למחצה, כדי שהחלק השקוע ייראה מתחתם -->
        <rect class="fl-cold" x="0" y="${W}" width="200" height="${200 - W}" opacity=".28"/>
        <path class="st-cold fl-none" stroke-width="1.5" d="M0 ${W}H200"/>
        <!-- כוחות -->
        <path id="gz" class="st-green fl-none" stroke-width="3" stroke-linecap="round"/>
        <path id="mline" class="thin st-ink" style="stroke-dasharray:2 3"/>
        <path id="warrow" class="wire st-hot" style="stroke-width:2"/>
        <path id="barrow" class="wire st-cold" style="stroke-width:2"/>
        <circle id="gdot" class="fl-hot st-ink" stroke-width="1.2" r="3.4"/>
        <circle id="bdot" class="fl-cold st-ink" stroke-width="1.2" r="3.4"/>
        <circle id="mdot" class="fl-bg st-ink" stroke-width="1.4" r="2.6"/>
        <!-- מקרא -->
        <circle class="fl-hot" cx="212" cy="156" r="3.4"/><text x="250" y="160" class="sm">מרכז הכובד</text>
        <circle class="fl-cold" cx="212" cy="170" r="3.4"/><text x="250" y="174" class="sm">מרכז הציפה</text>
        <circle class="fl-bg st-ink" stroke-width="1.4" cx="212" cy="184" r="2.6"/><text x="246" y="188" class="sm">מטצנטר</text>
        <text id="note" x="${CX + 8}" y="14" class="sm"></text>
      </svg>
      ${readouts([{ id: "t", label: "שקיעה (מ׳)" }, { id: "fb", label: "עד הקו (מ׳)" }, { id: "gm", label: "גובה מטצנטרי" }])}
      ${range({ id: "load", label: "מטען", min: 0, max: 9000, step: 100, value: 4000 })}
      ${range({ id: "h", label: "גובה המטען", min: 1, max: 14, step: 0.5, value: 4 })}
      ${choice({ id: "hull", label: "צורת הגוף", options: [{ v: "wide", label: "רחבה ושטוחה" }, { v: "narrow", label: "צרה ועמוקה" }], value: "wide" })}
      <button type="button" class="sh-push">הטה את הספינה</button>`;

    const $ = (id) => root.querySelector(`#${id}`);
    let m = model("wide", 4000, 4), cargoT = 4000, cargoH = 4;
    let th = PUSH, om = 0, capsized = false, lastHull = "wide";

    // נקודה במערכת הספינה (x לרוחב, z לגובה מעל השדרית, במטרים) אל האיור, אחרי הטיה בזווית th סביב נקודת קו המים
    const Tdraw = () => (m.sinks ? m.D + 0.4 : m.T);
    const world = (x, z) => {
      const dx = x * S, dy = -(z - Tdraw()) * S, c = Math.cos(th), s = Math.sin(th);
      return [CX + dx * c - dy * s, W + dx * s + dy * c];
    };

    const drawStatic = () => {
      const { B, D } = m, hb = (B * S) / 2, d = D * S, r = 6;
      // בתוך הקבוצה: ראשית בשדרית, y כלפי מטה
      $("hullp").setAttribute("d", `M${-hb} ${-d}V${-r}Q${-hb} 0 ${-hb + r} 0H${hb - r}Q${hb} 0 ${hb} ${-r}V${-d}z`);
      const ta = Math.min(m.TMAX, D) * S;
      $("anti").setAttribute("d", `M${-hb} ${-ta}V${-r}Q${-hb} 0 ${-hb + r} 0H${hb - r}Q${hb} 0 ${hb} ${-r}V${-ta}`);
      $("deck").setAttribute("d", `M${-hb + 3} ${-d + 5}H${hb - 3}`);
      $("plim").setAttribute("transform", `translate(${hb + 6} ${-m.TMAX * S})`);
      // מטען: מכולות ברוחב 0.6·B, גובה 3 מ' (מרכז בגובה h); מספר השורות לפי המשקל
      // מעל הסיפון המכולות נערמות מהסיפון ומעלה עד h + 1.5 מ' (האיור בלבד; החישוב משתמש ב־h)
      const top = cargoH + 1.5, bot = Math.max(0.3, Math.min(cargoH - 1.5, D));
      const cw = B * S * 0.6, ch = (top - bot) * S, y = -((top + bot) / 2) * S;
      const n = Math.round(clamp(cargoT / 1500, 0, 6));
      const rows = Math.max(1, Math.round((top - bot) / 3));
      $("cargo").innerHTML = cargoT <= 0 ? "" :
        `<rect class="fl-hot st-ink" stroke-width="1.2" x="${(-cw / 2).toFixed(1)}" y="${(y - ch / 2).toFixed(1)}" width="${cw.toFixed(1)}" height="${ch.toFixed(1)}" rx="1"/>` +
        Array.from({ length: n }, (_, i) => `<path class="st-ink" stroke-width="1" d="M${(-cw / 2 + ((i + 1) * cw) / (n + 1)).toFixed(1)} ${(y - ch / 2).toFixed(1)}v${ch.toFixed(1)}"/>`).join("") +
        Array.from({ length: rows - 1 }, (_, i) => `<path class="st-ink" stroke-width="1" d="M${(-cw / 2).toFixed(1)} ${(y - ch / 2 + ((i + 1) * ch) / rows).toFixed(1)}h${cw.toFixed(1)}"/>`).join("");
    };

    const curve = () => {
      let d = "";
      for (let a = 0; a <= 60; a += 3) d += `${a ? "L" : "M"}${px(a).toFixed(1)} ${py(m.GM * Math.sin((a * Math.PI) / 180)).toFixed(1)}`;
      $("curve").setAttribute("d", d);
      $("curve").setAttribute("class", `wire ${m.GM > 0 ? "st-green" : "st-hot"}`);
    };

    const note = () => {
      let t;
      if (m.sinks) t = "עמוס מדי: המים עולים על הסיפון והספינה טובעת";
      else if (capsized) t = "מרכז הכובד מעל המטצנטר: הספינה התהפכה";
      else if (m.GM <= 0) t = "מרכז הכובד מעל המטצנטר: היא מתהפכת";
      else if (m.T > m.TMAX) t = "מעבר לקו פלימסול: לא נשאר גובה רזרבי לגלים";
      else if (m.GM < 0.5) t = "רכה מאוד: מתיישרת לאט, קרוב לגבול";
      else t = "יציבה: הכובד והעילוי מחזירים אותה";
      out(root, "note", t);
    };

    wire(root, ({ load, h, hull }) => {
      cargoT = load; cargoH = h;
      m = model(hull, load, h);
      out(root, "load-out", `${fmt(load, 0)} טון`);
      out(root, "h-out", `${fmt(h, 1)} מ׳`);
      out(root, "t", m.sinks ? "טובעת" : fmt(m.T, 2));
      const fb = m.TMAX - m.T;
      out(root, "fb", m.sinks ? "–" : fmt(fb, 2));
      $("fb").style.color = fb < 0 ? "var(--s-hot, #e5482d)" : "";
      out(root, "gm", fmt(m.GM, 2));
      $("gm").style.color = m.GM <= 0 ? "var(--s-hot, #e5482d)" : "";
      if (hull !== lastHull) { lastHull = hull; capsized = false; th = PUSH; om = 0; }
      if (m.sinks) { capsized = false; th = 0; om = 0; }
      else if (capsized && m.GM > 0) { capsized = false; th = PUSH; om = 0; } // יציבה שוב: מיישרים ונותנים דחיפה
      else if (!capsized && m.GM <= 0 && Math.abs(th) < 0.01) th = 0.01; // שיווי משקל לא יציב: כל הפרעה קטנה מפילה
      drawStatic(); curve(); note();
    });

    root.querySelector(".sh-push").addEventListener("click", () => {
      if (m.sinks) return;
      if (capsized) capsized = false;
      th = PUSH; om = 0; note();
    });

    loop(root, (dt) => {
      if (!m.sinks) {
        const k = 0.4 * m.B, w0 = Math.sqrt(G * Math.abs(m.GM)) / k;
        for (let i = 0; i < 4; i++) {
          const h = (dt * SPEED) / 4;
          if (capsized) {
            // אחרי ההתהפכות: נשכבת על הצד (100°) ונעצרת שם
            const target = Math.sign(th || 1) * (100 * Math.PI) / 180;
            th += (target - th) * Math.min(1, h * 1.2); om = 0;
          } else {
            const acc = (-G * m.GM * Math.sin(th)) / (k * k) - 2 * ZETA * w0 * om;
            om += acc * h; th += om * h;
            if (Math.abs(th) > CAP) { capsized = true; note(); }
          }
        }
      }
      // ציור
      const T = Tdraw();
      $("ship").setAttribute("transform", `translate(${CX} ${W}) rotate(${((th * 180) / Math.PI).toFixed(2)}) translate(0 ${(T * S).toFixed(2)})`);
      const [gx, gy] = world(0, m.KG), [mx, my] = world(0, m.KM);
      const by = world(0, m.KB)[1];
      const show = !m.sinks && !capsized;
      ["gz", "mline", "warrow", "barrow", "bdot", "mdot"].forEach((id) => ($(id).style.display = show ? "" : "none"));
      $("gdot").setAttribute("cx", gx.toFixed(1)); $("gdot").setAttribute("cy", gy.toFixed(1));
      $("warrow").setAttribute("d", `M${gx.toFixed(1)} ${gy.toFixed(1)}v24m-3.5 -5l3.5 5 3.5-5`);
      if (show) {
        // מרכז הציפה נמצא על האנך שעובר דרך המטצנטר; המרחק האופקי בינו לבין מרכז הכובד הוא GZ = GM·sinθ
        $("bdot").setAttribute("cx", mx.toFixed(1)); $("bdot").setAttribute("cy", by.toFixed(1));
        $("mdot").setAttribute("cx", mx.toFixed(1)); $("mdot").setAttribute("cy", my.toFixed(1));
        $("barrow").setAttribute("d", `M${mx.toFixed(1)} ${(by + 26).toFixed(1)}V${(by + 4).toFixed(1)}m-3.5 5l3.5-5 3.5 5`);
        $("mline").setAttribute("d", `M${mx.toFixed(1)} ${Math.min(my, by).toFixed(1)}V${Math.max(my, by).toFixed(1)}`);
        $("gz").setAttribute("d", `M${gx.toFixed(1)} ${gy.toFixed(1)}H${mx.toFixed(1)}`);
        $("gz").setAttribute("class", `fl-none ${m.GM > 0 ? "st-green" : "st-hot"}`);
      }
      const deg = clamp((Math.abs(th) * 180) / Math.PI, 0, 60);
      $("cdot").setAttribute("cx", px(deg).toFixed(1));
      $("cdot").setAttribute("cy", py(m.GM * Math.sin((deg * Math.PI) / 180)).toFixed(1));
    });
  },
};
