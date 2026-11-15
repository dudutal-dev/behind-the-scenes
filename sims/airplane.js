// מטוס: משנים מהירות טיסה וזווית התקפה ורואים את הזרימה סביב חתך הכנף, את העילוי מול המשקל ואת ההזדקרות.
//
// נוסחת העילוי: L = ½·ρ·v²·S·CL
//   ρ = 1.225 ק״ג/מ״ק (אוויר בגובה פני הים) · S = 122.6 מ״ר ומסה 65 טון (מטוס נוסעים צר-גוף)
//   משקל: W = 65,000 × 9.81 = 637,650 ניוטון.
//   CL = 0.09·(α + 2°) עד זווית ההזדקרות α = 15° (כנף מעוקלת: עילוי אפס ב-−2°, שיא CL = 1.53).
//   מעבר ל-15° הזרימה ניתקת מגב הכנף ו-CL קורס: CL = 1.53·(0.55 + 0.45·e^−(α−15)/1.5).
//   מהירות ההזדקרות בטיסה ישרה: √(2W/(ρ·S·1.53)) = 74.5 מ׳/ש = 268 קמ״ש.
// ציור הזרימה סכמטי: קווי הזרם עוקפים את החתך, נוטים מטה מאחוריו בזווית ε = 6.5°·CL (שטיפה מטה
// יחסית לעילוי), ובהזדקרות הקווים העליונים מפסיקים לעקוב אחרי גב הכנף. מהירות הקווקווים יחסית ל-v,
// ומעל הכנף הם מהירים יותר (שם הלחץ נמוך). חץ העילוי בקנה מידה מול חץ המשקל, עד 250%.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const RHO = 1.225, S_WING = 122.6, MASS = 65000, G = 9.81, W = MASS * G;
const SLOPE = 0.09, A0 = -2, A_STALL = 15, CL_MAX = SLOPE * (A_STALL - A0);
const V_STALL = Math.sqrt((2 * W) / (RHO * S_WING * CL_MAX)) * 3.6; // קמ״ש
const cl = (a) => (a <= A_STALL ? SLOPE * (a - A0) : CL_MAX * (0.55 + 0.45 * Math.exp(-(a - A_STALL) / 1.5)));
const smooth = (x) => { const t = clamp(x, 0, 1); return t * t * (3 - 2 * t); };

const XC = 150, YC = 100, HALF = 55;          // מרכז החתך וחצי מיתר
const WLEN = 30;                               // אורך חץ המשקל (= 100%)
const OFFS = [-58, -42, -28, -16, -6, 6, 16, 28, 42, 58]; // גובה קווי הזרם יחסית לכנף, הרחק ממנה
// חצי עובי החתך לאורך המיתר (t בין 0 בשפת ההתקפה ל-1 בשפת הזרימה)
const thick = (t, k) => (t <= 0 || t >= 1 ? 0 : k * 2.6 * Math.sqrt(t) * (1 - t) * (1 + 0.6 * (1 - t)));
const TU = 7, TL = 2.6;

const airfoil = (() => {
  const up = [], lo = [];
  for (let i = 0; i <= 24; i++) {
    const t = (i / 24) ** 1.6, x = -HALF + 2 * HALF * t;
    up.push(`${x.toFixed(1)} ${(-thick(t, TU)).toFixed(1)}`);
    lo.push(`${x.toFixed(1)} ${thick(t, TL).toFixed(1)}`);
  }
  return `M${up.join("L")}L${lo.reverse().join("L")}z`;
})();

export default {
  title: "שחק עם המהירות והזווית",
  hint: "העילוי גדל עם ריבוע המהירות ועם זווית הכנף. בטיסה איטית צריך זווית גדולה כדי להישאר באוויר, אבל מעל כ־15° הזרימה ניתקת מהכנף והעילוי קורס.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של כנף מטוס בזרם אוויר: קווי הזרם נוטים כלפי מטה מאחורי הכנף, וחיצים מראים את העילוי ואת המשקל">
        <g id="lines">${OFFS.map(() => `<path class="thin" stroke-dasharray="11 8"/>`).join("")}</g>
        <g id="wake" class="st-hot fl-none" stroke-width="1.300" stroke-linecap="round" opacity="0">
          ${Array.from({ length: 9 }, () => `<path/>`).join("")}
        </g>
        <path id="sepz" class="fl-hot" opacity="0"/>
        <path class="thin st-ink" stroke-width=".8" stroke-dasharray="3 3" d="M${XC - HALF - 4} ${YC}H${XC + HALF + 16}"/>
        <path id="wing" class="body" d="${airfoil}"/>
        <text id="alab" class="sm" direction="ltr" x="${XC - HALF - 16}"></text>
        <!-- משקל -->
        <path class="arrow st-violet" stroke-width="3.500" d="M${XC} ${YC + 6}V${YC + 6 + WLEN - 6}"/>
        <path class="fl-violet" d="M${XC - 5.500} ${YC + WLEN - 1}h11l-5.500 8z"/>
        <text x="${XC + 24}" y="${YC + WLEN + 5}" style="fill:var(--s-violet)">משקל</text>
        <!-- עילוי -->
        <path id="lift" class="arrow st-cold" stroke-width="3.500"/>
        <path id="lhead" class="fl-cold"/>
        <text id="llab" style="fill:var(--s-cold)">עילוי</text>
        <text x="266" y="14" class="sm">מטוס נוסעים · 65 טון</text>
        <text x="38" y="14" class="sm">זרימת האוויר</text>
        <path class="arrow st-ink" stroke-width="1.500" d="M70 11H86M82 7.500L86 11L82 14.500"/>
        <text id="n1" x="160" y="181" class="sm"></text>
        <text id="n2" x="160" y="192" class="sm"></text>
      </svg>
      ${readouts([{ id: "pct", label: "עילוי מתוך המשקל" }, { id: "state", label: "מצב" }])}
      ${range({ id: "v", label: "מהירות", min: 150, max: 700, step: 10, value: 450 })}
      ${range({ id: "a", label: "זווית הכנף", min: -2, max: 20, step: 0.5, value: 4 })}`;

    const q = (s) => root.querySelector(s);
    const lines = [...q("#lines").children], wake = [...q("#wake").children];
    const offsets = lines.map(() => 0);
    let S = { v: 450, a: 4, CL: 0, sep: 0 };
    q("#state").style.fontSize = "19px"; q("#state").style.lineHeight = "25px";

    // גובה קו זרם: y0 הרחק מהכנף, ועליו הסטה שתלויה במיקום לאורך הזרימה
    const lineY = (x, off, a, CL, sep) => {
      const tanA = Math.tan((a * Math.PI) / 180), A = HALF * tanA;
      const tanE = Math.tan((6.5 * CL * Math.PI) / 180);
      const xl = XC - HALF, xt = XC + HALF, upper = off < 0, d = Math.abs(off);
      const w = Math.exp(-(d - 6) / 55);
      let g;
      if (x < xl) g = -A * Math.exp(-(((x - xl) / HALF) ** 2));       // האוויר עולה לקראת שפת ההתקפה
      else if (x <= xt) g = -A * Math.cos((Math.PI * (x - xl)) / (2 * HALF)); // עוקב אחרי הכנף הנטויה
      else g = A + tanE * (x - xt) * (1 - Math.exp(-(x - xt) / 30));   // ומאחוריה ממשיך כלפי מטה
      if (upper && sep > 0 && x > xl) {
        // זרימה מנותקת: הקו העליון ממשיך כמעט ישר משפת ההתקפה במקום לרדת עם גב הכנף
        const gs = -A - 3 + 0.04 * (x - xl);
        g += (gs - g) * sep * (1 - Math.exp(-(x - xl) / 14)) * Math.exp(-(d - 6) / 45);
      }
      const bump = (upper ? 11 : 5) * Math.exp(-(((x - XC + 12) / (HALF * 0.8)) ** 2));
      return YC + off + w * g + (upper ? -1 : 1) * bump * Math.exp(-(d - 6) / 22);
    };

    const draw = () => {
      const { a, CL, sep } = S;
      lines.forEach((p, i) => {
        let d = "";
        for (let x = -12; x <= 332; x += 6) d += `${x === -12 ? "M" : "L"}${x} ${lineY(x, OFFS[i], a, CL, sep).toFixed(1)}`;
        p.setAttribute("d", d);
      });
      // האזור המנותק: בין הקו העליון הקרוב לבין גב הכנף, ונמשך מאחוריה
      let top = "", bot = "";
      const tanA = Math.tan((a * Math.PI) / 180);
      for (let x = XC - HALF + 10; x <= 334; x += 6) {
        top += `${top ? "L" : "M"}${x} ${(lineY(x, -6, a, CL, sep) + 3).toFixed(1)}`;
        const yb = x <= XC + HALF ? YC + (x - XC) * tanA : lineY(x, 6, a, CL, sep) - 3;
        bot = `L${x} ${yb.toFixed(1)}` + bot;
      }
      q("#sepz").setAttribute("d", sep > 0.01 ? top + bot + "z" : "");
      q("#sepz").setAttribute("opacity", (0.2 * sep).toFixed(2));
    };

    wire(root, ({ v, a }) => {
      const ms = v / 3.6, CL = cl(a);
      const lift = 0.5 * RHO * ms * ms * S_WING * CL;
      const ratio = lift / W;
      const stalled = a > A_STALL;
      S = { v, a, CL, sep: smooth((a - 14.5) / 2.5) };
      out(root, "v-out", `${v} קמ״ש`);
      out(root, "a-out", `${fmt(a, 1)}°`);
      out(root, "pct", `${fmt(ratio * 100, 0)}%`);
      out(root, "state", stalled ? "הזדקרות" : ratio < 0.95 ? "שוקע" : ratio <= 1.05 ? "טיסה ישרה" : "מטפס");

      q("#wing").setAttribute("transform", `translate(${XC} ${YC}) rotate(${a})`);
      // הזווית כתובה ליד שפת ההתקפה; הקו המקווקו הוא האופק
      const ar = (a * Math.PI) / 180;
      out(root, "alab", `${fmt(a, 1)}°`);
      q("#alab").setAttribute("y", (YC + 3 - (HALF + 16) * Math.sin(ar)).toFixed(1));

      // חץ העילוי: 100% = אורך חץ המשקל
      const len = Math.max(0, WLEN * Math.min(ratio, 2.5));
      const tip = YC - 8 - len;
      q("#lift").setAttribute("d", len > 9 ? `M${XC} ${YC - 8}V${(tip + 7).toFixed(1)}` : "");
      q("#lhead").setAttribute("d", len > 2 ? `M${XC - 5.500} ${(tip + Math.min(8, len)).toFixed(1)}h11L${XC} ${tip.toFixed(1)}z` : "");
      const ll = q("#llab");
      ll.setAttribute("x", XC + 22); ll.setAttribute("y", (clamp(tip + 6, 22, YC - 14)).toFixed(1));
      ll.textContent = ratio > 2.5 ? "עילוי (מעל 250%)" : len > 4 ? "עילוי" : "";
      if (ratio > 2.5) { ll.setAttribute("x", XC - 50); ll.setAttribute("y", 32); }
      q("#wake").setAttribute("opacity", S.sep.toFixed(2));
      draw();

      let n1, n2 = "";
      if (stalled) { n1 = "הזדקרות: הזרימה ניתקה מגב הכנף"; n2 = "והעילוי קרס. מקטינים זווית כדי להתאושש"; }
      else if (ratio < 0.95 && v < V_STALL) { n1 = `מתחת ל־${fmt(V_STALL, 0)} קמ״ש שום זווית לא תספיק:`; n2 = "המטוס חייב מהירות כדי להישאר באוויר"; }
      else if (ratio < 0.95) { n1 = "העילוי קטן מהמשקל: המטוס שוקע."; n2 = "הגדל את המהירות או את הזווית"; }
      else if (ratio <= 1.05) { n1 = a >= 10 ? "טיסה איטית: רק זווית גדולה מחזיקה את המטוס," : "העילוי שווה למשקל: טיסה ישרה ואופקית"; n2 = a >= 10 ? "וההזדקרות כבר קרובה" : ""; }
      else { n1 = "העילוי גדול מהמשקל: המטוס מטפס"; n2 = a >= 12 ? "זהירות: מעל 15° הזרימה תינתק" : ""; }
      out(root, "n1", n1); out(root, "n2", n2);
    });

    let time = 0;
    loop(root, (dt) => {
      const { v, a, CL, sep } = S;
      time += dt;
      // הקווקווים זורמים עם האוויר; מעל הכנף מהר יותר, מתחתיה לאט יותר
      lines.forEach((p, i) => {
        const near = Math.exp(-(Math.abs(OFFS[i]) - 6) / 25);
        const k = OFFS[i] < 0 ? 1 + 0.3 * CL * near * (1 - sep) : 1 - 0.12 * CL * near;
        offsets[i] = (offsets[i] - dt * v * 0.16 * k) % 19;
        p.style.strokeDashoffset = offsets[i].toFixed(1);
      });
      if (sep > 0.01) {
        // מערבולות באזור המנותק שמעל גב הכנף ומאחוריו
        const ar = (a * Math.PI) / 180;
        wake.forEach((p, j) => {
          const u = ((time * (0.25 + v / 2500) + j / wake.length) % 1);
          const along = -HALF * 0.45 + u * HALF * 2.1, rise = 5 + (4 + 8 * u) * (0.5 + 0.5 * Math.sin(j * 2.4));
          const cx = XC + along * Math.cos(ar) + rise * Math.sin(ar);
          const cy = YC + along * Math.sin(ar) - rise * Math.cos(ar) - 2;
          const r = 2 + 3 * u, ph = time * 7 + j * 2;
          const x1 = cx + r * Math.cos(ph), y1 = cy + r * Math.sin(ph), x2 = cx + r * Math.cos(ph + 4.4), y2 = cy + r * Math.sin(ph + 4.4);
          p.setAttribute("d", `M${x1.toFixed(1)} ${y1.toFixed(1)}A${r.toFixed(1)} ${r.toFixed(1)} 0 1 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`);
          p.setAttribute("opacity", (Math.sin(Math.PI * u)).toFixed(2));
        });
      }
    });
  },
};
