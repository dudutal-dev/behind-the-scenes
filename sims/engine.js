// מנוע ארבע פעימות: מסובבים את גל הארכובה לאורך 720° ורואים את הבוכנה, השסתומים, הניצוץ והלחץ.
//
// גיאומטריה (מנגנון ארכובה–טלטל אמיתי, צילינדר של 500 סמ״ק):
//   קדח 86 מ״מ, מהלך 86 מ״מ (רדיוס ארכובה r = 43 מ״מ), טלטל l = 145 מ״מ, יחס דחיסה 10 ("לכעשירית מנפחה").
//   מרחק הבוכנה מהנקודה העליונה: s(θ) = r(1 − cos θ) + l − √(l² − r² sin² θ)
//   נפח: V(θ) = Vc + A·s(θ),  A = π·(קדח/2)²,  Vc = Vd/(CR − 1) = 55.5 סמ״ק,  Vmax = 555 סמ״ק.
// זוויות: 0–180 יניקה · 180–360 דחיסה · 360–540 עבודה · 540–720 פליטה (0 ו-360 = הבוכנה למעלה).
//
// לחץ (מודל חד-אזורי של גז אידיאלי, γ = 1.35, מחושב בצעדים של רבע מעלה):
//   יניקה: 0.9 בר (תת-לחץ קל). דחיסה והתפשטות: dp = −γ·p·dV/V + (γ − 1)·dQ/V.
//   בעירה: Q = 950 ג׳אול משתחררים לפי פונקציית Wiebe (a = 5, m = 2) בין 350° ל-400°;
//   הניצוץ ב-350°, עשר מעלות לפני סוף הדחיסה, כמו במנוע אמיתי (לבעירה נדרש זמן).
//   פליטה: הלחץ צונח אל 1.1 בר (קבוע דעיכה של 12°).
//   העבודה על הבוכנה בכל פעימה: W = ∫(p − 1 בר)·dV (מצד הארכובה יש לחץ אטמוספרי).
// פישוטים: השסתומים נפתחים ונסגרים בדיוק בגבולות הפעימות (במנוע אמיתי הם מקדימים ומאחרים מעט),
// ואין הפסדי חום לדפנות מעבר למה שכבר נוכה מ-Q.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const BORE = 0.086, R = 0.043, L = 0.145, CR = 10, GAMMA = 1.35;
const AREA = Math.PI * (BORE / 2) ** 2;
const VD = AREA * 2 * R, VC = VD / (CR - 1);
const P_IN = 0.9e5, P_EX = 1.1e5, P_ATM = 1.0e5;
const Q_BURN = 950, SPARK = 350, BURN_END = 400;
const rad = (d) => (d * Math.PI) / 180;
const travel = (deg) => { const t = rad(deg); return R * (1 - Math.cos(t)) + L - Math.sqrt(L * L - (R * Math.sin(t)) ** 2); };
const volume = (deg) => VC + AREA * travel(deg);
const wiebe = (deg) => (deg <= SPARK ? 0 : deg >= BURN_END ? 1 : 1 - Math.exp(-5 * ((deg - SPARK) / (BURN_END - SPARK)) ** 3));

// טבלת לחץ לכל רבע מעלה, והעבודה בכל פעימה
const STEP = 0.25, NT = 720 / STEP;
const PT = new Float64Array(NT + 1);
const WORK = [0, 0, 0, 0];
(() => {
  let p = P_IN;
  PT[0] = p;
  for (let i = 1; i <= NT; i++) {
    const a0 = (i - 1) * STEP, a1 = i * STEP;
    const v0 = volume(a0), v1 = volume(a1), vm = (v0 + v1) / 2;
    const p0 = p;
    if (a1 <= 180) p = P_IN;
    else if (a1 <= 540) p += (-GAMMA * p * (v1 - v0)) / vm + ((GAMMA - 1) * Q_BURN * (wiebe(a1) - wiebe(a0))) / vm;
    else p = P_EX + (p - P_EX) * Math.exp(-STEP / 12);
    PT[i] = p;
    WORK[Math.min(3, Math.floor(a0 / 180))] += ((p0 + p) / 2 - P_ATM) * (v1 - v0);
  }
})();
const PMAX = Math.max(...PT);
const pressure = (deg) => {
  const f = clamp(deg / STEP, 0, NT), i = Math.min(NT - 1, Math.floor(f));
  return PT[i] + (PT[i + 1] - PT[i]) * (f - i);
};

// ציור: הצילינדר
const CXL = 46, CXR = 98, CXM = 72, HEAD = 34;   // דפנות, ציר, תחתית הראש
const RPX = 22, SCALE = RPX / R;                   // 22 פיקסלים = 43 מ״מ
const LPX = L * SCALE, GAP = (2 * RPX) / (CR - 1); // טלטל, מרווח הדחיסה
const PIN = 12, PH = 20;                           // פין הבוכנה מתחת לפניה, גובה הבוכנה
const CY = HEAD + GAP + PIN + RPX + LPX;           // מרכז גל הארכובה
const LIFT = 5;                                    // מהלך שסתום
// ציור: גרף הלחץ
const GX = 164, GW = 144, GY0 = 128, GH = 92;
const PTOP = 50e5;
const gx = (deg) => GX + (deg / 720) * GW;
const gy = (p) => GY0 - (p / PTOP) * GH;
const NAMES = ["יניקה", "דחיסה", "עבודה", "פליטה"];
const SPEEDS = { 0: 0, 1: 90, 2: 420 }; // מעלות ארכובה לשנייה

export default {
  title: "סובב את גל הארכובה",
  hint: "שני סיבובים מלאים הם מחזור אחד של ארבע פעימות, ורק באחת מהן הגז דוחף את הבוכנה. במנוע אמיתי כל המחזור נמשך כמה מאיות שנייה.",
  mount(root) {
    let curve = `M${gx(0)} ${GY0}`;
    for (let d = 0; d <= 720; d += 2) curve += `L${gx(d).toFixed(1)} ${gy(pressure(d)).toFixed(1)}`;
    curve += `L${gx(720)} ${GY0}z`;
    const sign = (w) => `${w >= 0 ? "+" : "−"}${fmt(Math.abs(w), 0)}`;

    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של צילינדר במנוע ארבע פעימות עם בוכנה, טלטל וגל ארכובה, ולצידו גרף הלחץ בצילינדר לאורך המחזור">
        <!-- גז בצילינדר -->
        <rect class="fl-soft" x="${CXL}" y="${HEAD}" width="${CXR - CXL}" height="${CY - 20 - HEAD}"/>
        <rect id="gasbg" class="fl-bg" x="${CXL}" y="${HEAD}" width="${CXR - CXL}" height="10"/>
        <rect id="gas" x="${CXL}" y="${HEAD}" width="${CXR - CXL}" height="10"/>
        <!-- בית הארכובה -->
        <circle class="fl-soft st-ink" stroke-width="2" cx="${CXM}" cy="${CY}" r="31"/>
        <!-- דפנות הצילינדר -->
        <path class="st-ink fl-none" stroke-width="5" d="M${CXL - 2.500} ${HEAD - 1}V${CY - 24}M${CXR + 2.500} ${HEAD - 1}V${CY - 24}"/>
        <!-- ראש המנוע ותעלות היניקה והפליטה -->
        <rect class="fl-soft st-ink" stroke-width="2" x="${CXL - 5}" y="12" width="${CXR - CXL + 10}" height="${HEAD - 12}" rx="2"/>
        <path class="st-ink fl-none" stroke-width="11" stroke-linejoin="round" d="M8 22H${CXM - 14}V${HEAD - 1}M132 22H${CXM + 14}V${HEAD - 1}"/>
        <path id="pin" fill="none" stroke-width="8" stroke-linejoin="round" style="stroke:var(--s-cold-soft)" d="M6 22H${CXM - 14}V${HEAD + 1}"/>
        <path id="pex" fill="none" stroke-width="8" stroke-linejoin="round" style="stroke:var(--s-bg)" d="M134 22H${CXM + 14}V${HEAD + 1}"/>
        <g id="din" class="fl-cold"><circle r="2.200"/><circle r="2.200"/><circle r="2.200"/></g>
        <g id="dex" class="fl-dark"><circle r="2.200"/><circle r="2.200"/><circle r="2.200"/></g>
        <text x="27" y="10" class="sm">אוויר ודלק</text>
        <text x="118" y="10" class="sm">פליטה</text>
        <!-- מצת -->
        <rect class="fl-panel st-ink" stroke-width="1.200" x="${CXM - 3}" y="3" width="6" height="26" rx="1.500"/>
        <rect class="fl-ink" x="${CXM - 1.200}" y="29" width="2.400" height="${HEAD - 27}"/>
        <!-- שסתומים -->
        <g id="vin"><path class="st-ink fl-none" stroke-width="2" d="M${CXM - 14} 4V${HEAD}"/><rect class="fl-cold st-ink" stroke-width="1.200" x="${CXM - 21}" y="${HEAD - 1.500}" width="14" height="3.600" rx="1.500"/></g>
        <g id="vex"><path class="st-ink fl-none" stroke-width="2" d="M${CXM + 14} 4V${HEAD}"/><rect class="fl-hot st-ink" stroke-width="1.200" x="${CXM + 7}" y="${HEAD - 1.500}" width="14" height="3.600" rx="1.500"/></g>
        <!-- גל הארכובה, טלטל ובוכנה -->
        <circle class="thin" cx="${CXM}" cy="${CY}" r="${RPX}" stroke-dasharray="2 4"/>
        <path id="web" class="fl-line st-ink" stroke-width="1.500" stroke-linejoin="round"/>
        <path id="rod" class="st-ink fl-none" stroke-width="6" stroke-linecap="round"/>
        <path id="rod2" class="st-line fl-none" stroke-width="3" stroke-linecap="round"/>
        <g id="piston">
          <rect class="body" x="${CXL + 0.500}" y="0" width="${CXR - CXL - 1}" height="${PH}" rx="2"/>
          <path class="st-ink fl-none" stroke-width="1" d="M${CXL + 1} 4H${CXR - 1}M${CXL + 1} 7H${CXR - 1}"/>
          <circle class="fl-ink" cx="${CXM}" cy="${PIN}" r="2.600"/>
        </g>
        <circle class="fl-ink" cx="${CXM}" cy="${CY}" r="3.500"/>
        <circle id="cpin" class="fl-panel st-ink" stroke-width="1.500" r="3.200"/>
        <path id="spark" class="fl-elec st-ink" stroke-width=".8" stroke-linejoin="round" opacity="0"
          d="M${CXM} ${HEAD - 4}l2.600 5.400 5.900-1.400-3.400 5 4.400 4.200-6 .5-.5 6-3-5.200-3 5.200-.5-6-6-.5 4.400-4.200-3.400-5 5.900 1.400z"/>
        <!-- גרף הלחץ -->
        <text x="${GX + GW / 2}" y="13">הלחץ בצילינדר (בר)</text>
        <rect id="band" class="fl-panel" x="${GX}" y="${GY0 - GH - 6}" width="${GW / 4}" height="${GH + 34}" rx="4"/>
        ${[0, 10, 20, 30, 40].map((b) => `<path class="thin" stroke-width=".7" opacity=".6" d="M${GX} ${gy(b * 1e5)}H${GX + GW}"/><text x="${GX - 8}" y="${gy(b * 1e5) + 3}" class="sm">${b}</text>`).join("")}
        ${[1, 2, 3].map((k) => `<path class="thin" stroke-width=".7" stroke-dasharray="2 3" d="M${GX + (k * GW) / 4} ${GY0 - GH - 4}V${GY0 + 26}"/>`).join("")}
        <path class="fl-hot" opacity=".3" d="${curve}"/>
        <path class="st-hot fl-none" stroke-width="1.800" stroke-linejoin="round" d="${curve.slice(0, curve.lastIndexOf("L"))}"/>
        ${NAMES.map((n, k) => `<text x="${GX + ((k + 0.5) * GW) / 4}" y="${GY0 + 12}" class="sm">${n}</text>
          <text x="${GX + ((k + 0.5) * GW) / 4}" y="${GY0 + 23}" class="sm" direction="ltr" style="font-weight:700;fill:var(${WORK[k] > 0 ? "--s-green" : "--s-hot"})">${sign(WORK[k])}</text>`).join("")}
        <text x="${GX + GW / 2}" y="${GY0 + 37}" class="sm">העבודה על הבוכנה בכל פעימה (ג׳אול)</text>
        <path id="mline" class="st-ink fl-none" stroke-width="1"/>
        <circle id="mdot" class="fl-ink" r="3.200"/>
        <text id="n1" x="${GX + GW / 2 - 6}" y="181" class="sm"></text>
        <text id="n2" x="${GX + GW / 2 - 6}" y="192" class="sm"></text>
      </svg>
      ${readouts([{ id: "st", label: "פעימה" }, { id: "vol", label: "נפח (סמ״ק)" }, { id: "pr", label: "לחץ (בר)" }])}
      ${range({ id: "a", label: "זווית הגל", min: 0, max: 720, step: 1, value: 60 })}
      ${choice({ id: "spd", label: "סיבוב", options: [{ v: 0, label: "עצור" }, { v: 1, label: "איטי" }, { v: 2, label: "מהיר" }], value: 1 })}`;

    const q = (s) => root.querySelector(s);
    const E = {};
    ["gas", "gasbg", "pin", "pex", "din", "dex", "spark", "vin", "vex", "web", "rod", "rod2", "piston", "cpin", "band", "mline", "mdot"].forEach((k) => (E[k] = q(`#${k}`)));
    const slider = q("#a");
    const dIn = [...E.din.children], dEx = [...E.dex.children];
    let angle = 60, speed = SPEEDS[1];

    // נקודה לאורך תעלה: u=0 בקצה החיצוני, u=1 בפתח השסתום
    const along = (side, u) => {
      const xo = side < 0 ? 8 : 132, xi = CXM + side * 14, hl = Math.abs(xi - xo), tot = hl + 12;
      const d = u * tot;
      return d < hl ? [xo - side * d, 22] : [xi, 22 + (d - hl)];
    };

    const render = (a) => {
      const k = Math.min(3, Math.floor(a / 180));       // הפעימה
      const f = (a - k * 180) / 180;                     // התקדמות בתוך הפעימה
      const s = travel(a) * SCALE, top = HEAD + GAP + s; // פני הבוכנה
      const th = rad(a);
      const px = CXM + RPX * Math.sin(th), py = CY - RPX * Math.cos(th);
      const p = pressure(a), v = volume(a);

      E.piston.setAttribute("transform", `translate(0 ${top.toFixed(2)})`);
      const rodD = `M${CXM} ${(top + PIN).toFixed(2)}L${px.toFixed(2)} ${py.toFixed(2)}`;
      E.rod.setAttribute("d", rodD); E.rod2.setAttribute("d", rodD);
      E.cpin.setAttribute("cx", px.toFixed(2)); E.cpin.setAttribute("cy", py.toFixed(2));
      // זרוע הארכובה ומשקל האיזון שמולה
      const ux = Math.sin(th), uy = -Math.cos(th), nx = -uy, ny = ux;
      const P = (r, t) => `${(CXM + ux * r + nx * t).toFixed(2)} ${(CY + uy * r + ny * t).toFixed(2)}`;
      E.web.setAttribute("d", `M${P(RPX, -4.500)}L${P(RPX, 4.500)}L${P(0, 6)}L${P(-12, 13)}L${P(-19, 7)}L${P(-19, -7)}L${P(-12, -13)}L${P(0, -6)}z`);

      // שסתומים: יניקה פתוח ב-0–180, פליטה ב-540–720 (פרופיל sin²)
      const lift = Math.sin(Math.PI * f) ** 2;
      const li = k === 0 ? lift : 0, le = k === 3 ? lift : 0;
      E.vin.setAttribute("transform", `translate(0 ${(li * LIFT).toFixed(2)})`);
      E.vex.setAttribute("transform", `translate(0 ${(le * LIFT).toFixed(2)})`);

      // הגז: כחול = תערובת טרייה (מתעבה בדחיסה), אדום = גז בוער, אפור = גזים שרופים
      const burn = wiebe(a);
      let col, op;
      if (k === 0) { col = "--s-cold"; op = 0.3; }
      else if (a < SPARK) { col = "--s-cold"; op = 0.3 + 0.6 * ((VC + VD - v) / VD); }
      else if (k < 3 && burn < 1) { col = burn > 0.12 ? "--s-hot" : "--s-warm"; op = 0.95; }
      else if (k < 3) { col = "--s-hot"; op = clamp(0.35 + 0.6 * (p / PMAX), 0.35, 0.95); }
      else { col = "--s-dark"; op = 0.5; }
      E.gas.setAttribute("height", (top - HEAD + 1).toFixed(2));
      E.gasbg.setAttribute("height", (top - HEAD + 1).toFixed(2));
      E.gas.style.fill = `var(${col})`;
      E.gas.setAttribute("opacity", op.toFixed(2));
      E.pex.style.stroke = le > 0.02 ? "var(--s-line)" : "var(--s-bg)";
      E.spark.setAttribute("opacity", a >= SPARK && a < SPARK + 16 ? 1 : 0);

      // חלקיקים בתעלות: זזים עם הארכובה, לא עם השעון
      const ph = (a / 36) % 1;
      dIn.forEach((c, j) => {
        const [x, y] = along(-1, (ph + j / 3) % 1);
        c.setAttribute("cx", x.toFixed(1)); c.setAttribute("cy", y.toFixed(1));
      });
      dEx.forEach((c, j) => {
        const [x, y] = along(1, 1 - ((ph + j / 3) % 1));
        c.setAttribute("cx", x.toFixed(1)); c.setAttribute("cy", y.toFixed(1));
      });
      E.din.setAttribute("opacity", Math.min(1, li * 4).toFixed(2));
      E.dex.setAttribute("opacity", Math.min(1, le * 4).toFixed(2));

      // גרף
      const mx = gx(a), my = gy(p);
      E.band.setAttribute("x", (GX + (k * GW) / 4).toFixed(1));
      E.mline.setAttribute("d", `M${mx.toFixed(1)} ${GY0}V${my.toFixed(1)}`);
      E.mdot.setAttribute("cx", mx.toFixed(1)); E.mdot.setAttribute("cy", my.toFixed(1));

      out(root, "st", NAMES[k]);
      out(root, "vol", fmt(v * 1e6, 0));
      out(root, "pr", fmt(p / 1e5, p < 9.95e5 ? 1 : 0));
      out(root, "a-out", `${Math.round(a)}°`);
      let n1, n2;
      if (k === 0) { n1 = "שסתום היניקה פתוח: הבוכנה יורדת"; n2 = "ושואבת פנימה אוויר ודלק, כמו מזרק"; }
      else if (a < SPARK) { n1 = "שני השסתומים סגורים: התערובת"; n2 = `נדחסת לאחד חלקי ${fmt((VC + VD) / v, 1)} מנפחה`; }
      else if (k === 1) { n1 = "ניצוץ! מעט לפני סוף הדחיסה,"; n2 = "כי הבעירה צריכה זמן להתפשט"; }
      else if (k === 2) { n1 = "הגז הלוהט מתפשט ודוחף את הבוכנה:"; n2 = "הפעימה היחידה שמייצרת כוח"; }
      else { n1 = "שסתום הפליטה פתוח: הבוכנה העולה"; n2 = "דוחפת החוצה את הגזים השרופים"; }
      out(root, "n1", n1); out(root, "n2", n2);
    };

    // נגיעה במחוון עוצרת את הסיבוב האוטומטי: עכשיו הקורא הוא שמסובב
    root.addEventListener("input", (e) => {
      if (e.target !== slider) return;
      root.querySelectorAll('.seg-btns[data-id="spd"] button').forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === "0")));
    });
    wire(root, ({ a, spd }) => {
      speed = SPEEDS[spd] ?? 0;
      if (Math.abs(a - Math.round(angle)) > 0.5 || speed === 0) angle = a;
      render(angle);
    });
    loop(root, (dt) => {
      if (!speed) return;
      angle = (angle + speed * dt) % 720;
      slider.value = Math.round(angle);
      render(angle);
    });
  },
};
