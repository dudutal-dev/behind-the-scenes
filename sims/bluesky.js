// למה השמיים כחולים: מורידים את השמש מהזנית אל האופק ורואים איך הדרך באוויר מתארכת, והכחול נעלם מקרן השמש.
// המודל:
//   מסת אוויר (כמה פעמים יותר אוויר מאשר במבט ישר למעלה), נוסחת Kasten–Young 1989:
//     AM(h) = 1 / (sin h + 0.50572 · (h + 6.07995°)^−1.6364)      h = גובה השמש במעלות
//     בגובה רב זה בערך 1/sin h; ליד האופק התיקון מביא בחשבון את עקמומיות האטמוספרה: AM(0°) ≈ 38 ולא אינסוף.
//   עומק אופטי של פיזור ריילי באוויר נקי בגובה פני הים, ביחס הפוך לאורך הגל בחזקת ארבע:
//     τ(λ) = 0.0973 · (550 ננומטר / λ)⁴      (τ(550) ≈ 0.097 הוא הערך המקובל לאטמוספרה סטנדרטית; τ(450) ≈ 0.22, τ(700) ≈ 0.037)
//   אור ישיר מהשמש (חוק באר–למברט):   I(λ) = S(λ) · e^(−τ(λ)·AM)
//   השמיים סביב השמש (פיזור יחיד לאורך אותה דרך):   L(λ) ∝ S(λ) · τ(λ)·AM · e^(−τ(λ)·AM)
//   S(λ) — ספקטרום השמש מחוץ לאטמוספרה, כקרינת גוף שחור ב־5,778 קלווין.
//   צבע: ספקטרום → XYZ בפונקציות ההתאמה של CIE 1931 (קירוב אנליטי של Wyman, Sloan ו־Shirley, 2013) → sRGB,
//     מאוזן כך שאור השמש מחוץ לאטמוספרה הוא לבן, ומנורמל לבהירות מלאה (הצבע מוצג, לא העוצמה).
// פישוטים: אין אבק, אוזון או פיזור כפול; האיור של כדור הארץ והאטמוספרה אינו בקנה מידה (האטמוספרה מוגדלת מאוד).
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const DEG = Math.PI / 180;
const airMass = (h) => 1 / (Math.sin(h * DEG) + 0.50572 * Math.pow(h + 6.07995, -1.6364));
const tau = (nm) => 0.0973 * Math.pow(550 / nm, 4);
const planck = (nm) => { const l = nm * 1e-9; return 1 / (Math.pow(l, 5) * (Math.exp(1.4388e-2 / (l * 5778)) - 1)); };

// פונקציות ההתאמה של CIE 1931, קירוב רב־אונות
const g = (x, m, s1, s2) => { const t = (x - m) / (x < m ? s1 : s2); return Math.exp(-0.5 * t * t); };
const cmf = (l) => [
  1.056 * g(l, 599.8, 37.9, 31.0) + 0.362 * g(l, 442.0, 16.0, 26.7) - 0.065 * g(l, 501.1, 20.4, 26.2),
  0.821 * g(l, 568.8, 46.9, 40.5) + 0.286 * g(l, 530.9, 16.3, 31.1),
  1.217 * g(l, 437.0, 11.8, 36.0) + 0.681 * g(l, 459.0, 26.0, 13.8),
];
const WL = []; for (let l = 380; l <= 720; l += 5) WL.push(l);
const SUN = WL.map(planck), SMAX = Math.max(...SUN);
const toLin = (spec) => {
  let X = 0, Y = 0, Z = 0;
  spec.forEach((p, i) => { const c = cmf(WL[i]); X += p * c[0]; Y += p * c[1]; Z += p * c[2]; });
  return { rgb: [3.2406 * X - 1.5372 * Y - 0.4986 * Z, -0.9689 * X + 1.8758 * Y + 0.0415 * Z, 0.0557 * X - 0.204 * Y + 1.057 * Z], Y };
};
const WHITE = toLin(SUN.map((s) => s / SMAX)).rgb; // איזון לבן: השמש מחוץ לאטמוספרה
const gam = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
const colour = (spec) => {
  const lin = toLin(spec).rgb.map((c, i) => Math.max(0, c / WHITE[i]));
  const m = Math.max(...lin) || 1;
  return "rgb(" + lin.map((c) => Math.round(255 * gam(c / m))).join(",") + ")";
};
const directSpec = (am) => SUN.map((s, i) => (s / SMAX) * Math.exp(-tau(WL[i]) * am));
const skySpec = (am) => SUN.map((s, i) => { const t = tau(WL[i]) * am; return (s / SMAX) * t * Math.exp(-t); });

// עמודות הספקטרום
const BARS = [400, 450, 500, 550, 600, 650, 700];
const BCOL = ["#8e24aa", "#1e88e5", "#00acc1", "#43a047", "#fdd835", "#fb8c00", "#e53935"];
const BX = (i) => 212 + i * 14.5, BASE = 132, BH = 92;

// גאומטריה סכמטית: כדור ארץ ברדיוס 220 ואטמוספרה בעובי 44 (פיקסלים)
const O = [26, 168], RE = 220, HA = 44, C = [O[0], O[1] + RE];
const pathLen = (h) => { const s = Math.sin(h * DEG), c = Math.cos(h * DEG); return Math.sqrt((RE + HA) ** 2 - RE * RE * c * c) - RE * s; };

export default {
  title: "הורידו את השמש לאופק",
  hint: "ככל שהשמש נמוכה, האור עובר יותר אוויר והכחול מתפזר הצידה ראשון. האיור אינו בקנה מידה: ליד האופק הדרך ארוכה פי 38.",
  mount(root) {
    const arcE = `M0 ${(C[1] - Math.sqrt(RE * RE - 26 * 26)).toFixed(1)}A${RE} ${RE} 0 0 1 ${C[0] + 170} ${(C[1] - Math.sqrt(RE * RE - 170 * 170)).toFixed(1)}`;
    const xa = 200 - C[0], arcA = `M0 ${(C[1] - Math.sqrt((RE + HA) ** 2 - 26 * 26)).toFixed(1)}A${RE + HA} ${RE + HA} 0 0 1 200 ${(C[1] - Math.sqrt((RE + HA) ** 2 - xa * xa)).toFixed(1)}`;
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שמש מעל כדור הארץ, קרן האור שעוברת באטמוספרה, ועמודות שמראות כמה מכל צבע עובר ישר">
        <defs><clipPath id="bs-clip"><rect x="0" y="0" width="202" height="200"/></clipPath></defs>
        <g clip-path="url(#bs-clip)">
          <path id="air" d="${arcA}L200 200H0z"/>
          <path class="thin" style="stroke-dasharray:3 4" d="${arcA}"/>
          <path class="fl-soft" d="${arcE}L200 200H0z"/>
          <path class="thin st-ink" d="${arcE}"/>
          <path id="rayOut" class="thin" style="stroke-dasharray:2 3"/>
          <path id="rayU" class="wire st-ink" style="stroke-width:5.5"/>
          <path id="rayIn" class="wire" style="stroke-width:3.5"/>
          <g id="ph"></g>
          <circle id="sun" r="9" class="st-ink" stroke-width="1"/>
        </g>
        <path class="body" style="stroke-width:1.5" d="M${O[0] - 5} ${O[1] + 1}v-9q0-4 5-4t5 4v9z"/>
        <circle class="body" style="stroke-width:1.5" cx="${O[0]}" cy="${O[1] - 16}" r="3.6"/>
        <text x="58" y="194" class="sm">אטמוספרה (מוגדלת)</text>
        <text id="note" x="102" y="14" class="sm"></text>
        <text id="note2" x="102" y="26" class="sm"></text>
        <!-- עמודות: כמה אחוז מכל אורך גל עובר ישר -->
        <text x="263" y="14" class="sm">כמה עובר ישר</text>
        ${BARS.map((l, i) => `<rect x="${BX(i) - 5}" y="${BASE - BH}" width="10" height="${BH}" rx="2" class="fl-none st-line" stroke-width="1" style="stroke-dasharray:2 2"/><rect id="b${i}" x="${BX(i) - 5}" width="10" rx="2" fill="${BCOL[i]}"/>`).join("")}
        <path class="thin st-ink" d="M205 ${BASE}H314"/>
        <text x="${BX(0)}" y="144" class="sm">400</text>
        <text x="${BX(3)}" y="144" class="sm">ננומטר</text>
        <text x="${BX(6)}" y="144" class="sm">700</text>
        <!-- צבעים -->
        <circle id="swS" cx="236" cy="166" r="10" class="st-line" stroke-width="1"/>
        <circle id="swK" cx="292" cy="166" r="10" class="st-line" stroke-width="1"/>
        <text x="236" y="192" class="sm">השמש</text>
        <text x="292" y="192" class="sm">השמיים סביבה</text>
      </svg>
      ${readouts([{ id: "am", label: "דרך באוויר" }, { id: "tb", label: "כחול עובר" }, { id: "tr", label: "אדום עובר" }])}
      ${range({ id: "el", label: "גובה השמש", min: 0, max: 90, step: 1, value: 35 })}`;

    const q = (s) => root.querySelector(s);
    const ph = q("#ph");
    const N = 36;
    ph.innerHTML = Array.from({ length: N }, () => `<circle r="2.1" opacity="0"/>`).join("");
    const dots = [...ph.children];
    const parts = [];
    let geo = null, am = 1;

    wire(root, ({ el }) => {
      am = airMass(el);
      out(root, "el-out", `${el}°`);
      out(root, "am", `פי ${fmt(am, am < 10 ? 1 : 0)}`);
      const tb = 100 * Math.exp(-tau(450) * am);
      out(root, "tb", `${fmt(tb, tb < 1 ? 2 : 0)}%`);
      out(root, "tr", `${fmt(100 * Math.exp(-tau(650) * am), 0)}%`);
      const sunC = colour(directSpec(am)), skyC = colour(skySpec(am));
      q("#sun").setAttribute("fill", sunC);
      q("#swS").setAttribute("fill", sunC);
      q("#swK").setAttribute("fill", skyC);
      q("#air").setAttribute("fill", skyC);
      q("#air").setAttribute("opacity", "0.55");
      BARS.forEach((l, i) => {
        const h = BH * Math.exp(-tau(l) * am);
        const b = q(`#b${i}`);
        b.setAttribute("y", (BASE - h).toFixed(1));
        b.setAttribute("height", Math.max(0.01, h).toFixed(1));
      });
      // גאומטריה: מהצופה לכיוון השמש
      const L = pathLen(el), d = [Math.cos(el * DEG), -Math.sin(el * DEG)];
      const A = [O[0] + d[0] * L, O[1] - 16 + d[1] * L];
      const Sx = [O[0] + d[0] * (L + 16), O[1] - 16 + d[1] * (L + 16)];
      const E = [O[0] + d[0] * 5, O[1] - 16 + d[1] * 5];
      geo = { S: Sx, A, E, L };
      q("#sun").setAttribute("cx", Sx[0].toFixed(1));
      q("#sun").setAttribute("cy", Sx[1].toFixed(1));
      const rd = `M${A[0].toFixed(1)} ${A[1].toFixed(1)}L${E[0].toFixed(1)} ${E[1].toFixed(1)}`;
      q("#rayIn").setAttribute("d", rd);
      q("#rayU").setAttribute("d", rd);
      q("#rayIn").style.stroke = sunC;
      q("#rayOut").setAttribute("d", `M${Sx[0].toFixed(1)} ${Sx[1].toFixed(1)}L${A[0].toFixed(1)} ${A[1].toFixed(1)}`);
      let n1, n2;
      if (el >= 60) { n1 = "שמש גבוהה: דרך קצרה באוויר,"; n2 = "רוב הצבעים עוברים והשמש לבנה"; }
      else if (el >= 20) { n1 = "הכחול מתחיל להתפזר הצידה"; n2 = "ומצבע את השמיים"; }
      else if (el >= 5) { n1 = "שמש נמוכה: הכחול נחלש מאוד,"; n2 = "השמש מצהיבה ומכתימה"; }
      else { n1 = "ליד האופק: דרך ארוכה פי עשרות,"; n2 = "כמעט רק אדום וכתום עוברים"; }
      out(root, "note", n1); out(root, "note2", n2);
    });

    // פוטונים: כל אחד באורך גל אקראי. נקודת הפיזור נדגמת כך שהסיכוי לעבור את כל הדרך הוא בדיוק e^(−τ·AM)
    let acc = 0;
    loop(root, (dt) => {
      if (!geo) return;
      acc += dt * 14;
      while (acc >= 1 && parts.length < N) {
        acc -= 1;
        const k = Math.floor(Math.random() * BARS.length);
        const depth = -Math.log(1 - Math.random()) / tau(BARS[k]); // במונחי מסות אוויר
        const side = Math.random() < 0.5 ? -1 : 1;
        parts.push({ k, s: 0, depth, side, t: 0, f: 0 });
      }
      if (acc > 1) acc = 1;
      const { S, A, E } = geo;
      const segOut = Math.hypot(A[0] - S[0], A[1] - S[1]), segIn = Math.hypot(E[0] - A[0], E[1] - A[1]);
      const tot = segOut + segIn, v = 110; // פיקסלים לשנייה
      const nx = -(E[1] - A[1]) / segIn, ny = (E[0] - A[0]) / segIn;
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.s += (dt * v) / tot;
        // החלק שעבר מהקטע שבתוך האוויר, מהכניסה (A) אל הצופה. גם נקודת הפיזור נמדדת מהכניסה
        const inFrac = clamp((p.s * tot - segOut) / segIn, 0, 1);
        // מקום הפיזור כחלק מהדרך באוויר; מחושב מחדש מול מסת האוויר הנוכחית, כך ששינוי במחוון משפיע מיד
        if (p.t > 0) p.t += dt;
        else if (p.depth < am && p.s * tot > segOut && inFrac >= p.depth / am) { p.t = dt; p.f = p.depth / am; } // התפזר: עף הצידה
        if (p.s >= 1 || p.t > 0.7) parts.splice(i, 1);
      }
      dots.forEach((c, i) => {
        const p = parts[i];
        if (!p) { c.setAttribute("opacity", "0"); return; }
        let x, y;
        const d = p.s * tot;
        if (p.t > 0) {
          const f = p.f; // הנקודה שבה התפזר
          x = A[0] + (E[0] - A[0]) * f + nx * p.side * p.t * 60;
          y = A[1] + (E[1] - A[1]) * f + ny * p.side * p.t * 60;
        } else if (d < segOut) { x = S[0] + ((A[0] - S[0]) * d) / segOut; y = S[1] + ((A[1] - S[1]) * d) / segOut; }
        else { const f = (d - segOut) / segIn; x = A[0] + (E[0] - A[0]) * f; y = A[1] + (E[1] - A[1]) * f; }
        c.setAttribute("cx", x.toFixed(1));
        c.setAttribute("cy", y.toFixed(1));
        c.setAttribute("fill", BCOL[p.k]);
        c.setAttribute("opacity", p.t > 0 ? (1 - p.t / 0.7).toFixed(2) : "1");
      });
    });
  },
};
