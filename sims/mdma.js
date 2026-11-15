// סינפסה של סרוטונין: משווים מצב רגיל, חסם ספיגה חוזרת (SSRI) ו-MDMA לאורך יממתיים.
//
// המודל: שני מאגרים — C = ריכוז הסרוטונין במרווח הסינפטי, S = המלאי בתוך התא.
//   dC/dt = R + E − U − kd·C
//   dS/dt = synth·(1−S) − α·(R + E − U) − γ·M·S
// R = שחרור רגיל בירי של התא: R = kf·f(C)·S, כאשר f = 1/(1+(C/C50)²) הוא משוב
//     הקולטן העצמי (אוטורצפטור 5-HT1A) — ככל שיש יותר סרוטונין במרווח, התא יורה פחות.
// U = ספיגה חוזרת במשאבה, בקינטיקת מיכאליס־מנטן: U = Vmax·C/(Km+C)·(1−b),
//     b = חלק המשאבות החסומות (SSRI: קבוע; MDMA: פרופורציוני לריכוזו).
// E = זרימה הפוכה דרך המשאבה בהשפעת MDMA: E = keff·M·S — אינה תלויה בירי התא,
//     ולכן משוב האוטורצפטור אינו יכול לעצור אותה. זה ההבדל המרכזי מ-SSRI.
// γ·M·S = איבוד מהמלאי בתוך התא (MDMA מרוקן את השלפוחיות, וחלק מהסרוטונין מתפרק).
// M(t) = עקומת הריכוז של MDMA בגוף: A·(e^(−ke·t) − e^(−ka·t)), ka מהיר (ספיגה)
//     ו-ke לפי זמן מחצית חיים של כ-8 שעות — ומכאן שיא סביב שעה וחצי מהנטילה.
//
// הערכים עצמם הם המחשה (יחידות יחסיות, מנורמלות למצב הרגיל), לא מדידה קלינית:
// כיוון התהליכים והיחס ביניהם נכונים — גל גדול ומהיר מול עלייה מתונה, ואחריו ירידה
// שנמשכת ימים — אך הגובה המדויק של השיא ועומק הירידה משתנים בין מדידות ובין אנשים.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const P = { kf: 1.3, Vmax: 2, Km: 0.05, kd: 6, alpha: 0.025, synth: 0.03, gamma: 0.08, keff: 3, C50: 2, bSSRI: 0.8 };
const KA = 2.0, KE = Math.LN2 / 8; // ספיגה מהירה · פינוי לפי זמן מחצית חיים ~8 שעות
const TP = Math.log(KA / KE) / (KA - KE); // זמן השיא של MDMA בגוף: כ-1.6 שעות
const AMP = 1 / (Math.exp(-KE * TP) - Math.exp(-KA * TP)); // נרמול כך שהשיא הוא 1
const T_END = 48, DT = 0.005, STEP = 0.1, N = Math.round(T_END / STEP) + 1;

const mdmaLevel = (t) => AMP * (Math.exp(-KE * t) - Math.exp(-KA * t));

function baseline() {
  let C = 0.04, S = 1;
  for (let i = 0; i < 400000; i++) {
    const f = 1 / (1 + (C / (P.C50 * 0.033)) ** 2);
    const R = P.kf * f * S, U = (P.Vmax * C) / (P.Km + C);
    C += (R - U - P.kd * C) * 0.01;
    S += (P.synth * (1 - S) - P.alpha * (R - U)) * 0.01;
  }
  return { C0: C, S0: S };
}

function series(mode, C0, S0) {
  let C = C0, S = S0;
  const c = new Float64Array(N), s = new Float64Array(N), m = new Float64Array(N);
  let k = 0;
  for (let i = 0; i <= Math.round(T_END / DT); i++) {
    const t = i * DT;
    const M = mode === "mdma" ? mdmaLevel(t) : 0;
    const b = mode === "ssri" ? P.bSSRI : P.keff && mode === "mdma" ? 0.85 * M : 0;
    const f = 1 / (1 + (C / (P.C50 * C0)) ** 2);
    const R = P.kf * f * S, U = ((P.Vmax * C) / (P.Km + C)) * (1 - b), E = mode === "mdma" ? P.keff * M * S : 0;
    if (Math.abs(t - k * STEP) < DT / 2 && k < N) { c[k] = C / C0; s[k] = (S / S0) * 100; m[k] = M; k++; }
    C += (R + E - U - P.kd * C) * DT;
    S += (P.synth * (1 - S) - P.alpha * (R + E - U) - (mode === "mdma" ? P.gamma * M * S : 0)) * DT;
  }
  return { c, s, m };
}

const GX = 196, GY = 22, GW = 116, GH = 122; // תיבת הגרף
const CMAX = 12; // הסקאלה האנכית: עד פי 12 מהבסיס
// ציר הזמן דחוס (שורש): השעות הראשונות נפרשות, היממה השנייה נדחסת
const gx = (t) => GX + Math.sqrt(clamp(t, 0, T_END) / T_END) * GW;
const gyC = (r) => GY + GH - (clamp(r, 0, CMAX) / CMAX) * GH;
const gyS = (p) => GY + GH - (clamp(p, 0, 120) / 120) * GH;

// פיזור קבוע של נקודות הסרוטונין במרווח (כדי שלא "יקפצו" בכל עדכון)
const CLEFT = [[24, 96], [46, 107], [68, 94], [90, 106], [112, 95], [134, 107], [156, 96], [36, 112], [58, 100],
  [80, 112], [102, 101], [124, 112], [146, 101], [168, 109], [30, 103], [94, 92], [160, 112], [118, 104]];

export default {
  title: "השוו: רגיל, SSRI ו-MDMA",
  hint: "המחוון הוא הזמן בשעות. שימו לב להבדל: חסם ספיגה חוזרת מעלה את הסרוטונין במרווח בעדינות ומשאיר את המלאי, ואילו MDMA מהפך את המשאבה — גל גדול ומהיר, ואחריו מלאי מרוקן וירידה שנמשכת ימים. ציר הזמן בגרף דחוס, כדי שגם השעות הראשונות וגם היממה השנייה ייראו. הערכים יחסיים ומדגימים את הכיוון, לא מדידה קלינית.",
  mount(root) {
    root.innerHTML = `
      <style>
        .mx-btn{display:block;width:100%;margin:8px 0 0;min-height:40px;border-radius:12px;border:1px solid var(--line);
          background:var(--card);color:var(--ink);font:inherit;font-weight:700;font-size:15px;cursor:pointer}
        .mx-btn[aria-pressed="true"]{background:var(--c1,#4c8df6);border-color:transparent;color:#fff}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="סינפסה של סרוטונין וגרף של הרמה במרווח לאורך הזמן">
        <!-- התא המשדר -->
        <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M8 84V26Q8 12 22 12H168Q182 12 182 26V84Z"/>
        <path class="wire st-ink" style="stroke-width:2.4" d="M8 84H182"/>
        <g id="ves"></g>
        <!-- משאבת ספיגה חוזרת -->
        <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="84" y="74" width="22" height="22" rx="6"/>
        <rect class="fl-bg" x="92" y="76" width="6" height="18"/>
        <path id="pump-arr" class="arrow st-ink fl-none" style="stroke-width:2.4" d="M117 94V78"/>
        <path id="pump-head" class="fl-ink" d="M113 80l4-6l4 6z"/>
        <g id="blocker" opacity="0"><circle class="fl-hot st-ink" stroke-width="1.2" cx="95" cy="85" r="5.4"/></g>
        <g id="mdma-tag" opacity="0"><path class="fl-warm st-ink" stroke-width="1.2" d="M95 79l4.6 5l-4.6 5l-4.6-5z"/></g>
        <!-- המרווח הסינפטי -->
        <g id="dots"></g>
        <!-- התא המקבל והקולטנים -->
        <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M8 124H182V172Q182 186 168 186H22Q8 186 8 172Z"/>
        <path class="wire st-ink" style="stroke-width:2.4" d="M8 124H182"/>
        <g>
          <rect class="fl-soft st-ink" stroke-width="2" x="38" y="115" width="18" height="11" rx="4"/>
          <rect class="fl-soft st-ink" stroke-width="2" x="86" y="115" width="18" height="11" rx="4"/>
          <rect class="fl-soft st-ink" stroke-width="2" x="134" y="115" width="18" height="11" rx="4"/>
          <circle id="r1" class="fl-none st-violet" stroke-width="2" cx="47" cy="126" r="9" opacity="0"/>
          <circle id="r2" class="fl-none st-violet" stroke-width="2" cx="95" cy="126" r="9" opacity="0"/>
          <circle id="r3" class="fl-none st-violet" stroke-width="2" cx="143" cy="126" r="9" opacity="0"/>
        </g>
        <text id="note" class="sm" x="95" y="178"></text>
        <!-- גרף -->
        <rect class="fl-panel st-line" stroke-width="1.2" x="${GX - 4}" y="${GY - 10}" width="${GW + 10}" height="${GH + 32}" rx="8"/>
        <path class="thin st-line" style="stroke-width:1.1" stroke-dasharray="3 4" d="M${GX} ${gyC(1)}H${GX + GW}"/>
        <path class="thin st-line" style="stroke-width:1.1" d="M${GX} ${GY}V${GY + GH}H${GX + GW}"/>
        <path id="curve-s" class="wire st-line fl-none" style="stroke-width:1.6" stroke-dasharray="3 3" d=""/>
        <path id="curve-c" class="wire st-violet fl-none" style="stroke-width:2.4" d=""/>
        <line id="cursor" class="thin st-ink" style="stroke-width:1" x1="${GX}" y1="${GY}" x2="${GX}" y2="${GY + GH}"/>
        <circle id="mark" class="fl-violet st-ink" stroke-width=".8" r="3.4" cx="${GX}" cy="${gyC(1)}">
          <animate attributeName="opacity" values=".75;1;.75" dur="2s" repeatCount="indefinite"/></circle>
        <path class="thin st-line" style="stroke-width:1" d="M${gx(6)} ${GY + GH}v4M${gx(24)} ${GY + GH}v4"/>
        <text class="sm" x="${GX + 2}" y="${GY + GH + 14}" direction="ltr" style="text-anchor:start">0</text>
        <text class="sm" x="${gx(6)}" y="${GY + GH + 14}" direction="ltr">6</text>
        <text class="sm" x="${gx(24)}" y="${GY + GH + 14}" direction="ltr">24</text>
        <text class="sm" x="${GX + GW}" y="${GY + GH + 14}" direction="ltr" style="text-anchor:end">48</text>
        <text class="sm" x="${GX + GW / 2}" y="${GY - 2}">רמה במרווח · מלאי · שעות</text>
      </svg>
      ${readouts([{ id: "lv", label: "במרווח (× בסיס)" }, { id: "st", label: "מלאי בתא" }])}
      ${choice({ id: "mode", label: "מצב", options: [{ v: "normal", label: "רגיל" }, { v: "ssri", label: "SSRI" }, { v: "mdma", label: "MDMA" }], value: "mdma" })}
      ${range({ id: "t", label: "זמן", min: 0, max: T_END, step: 0.25, value: 1.5 })}
      <button type="button" class="mx-btn" id="play" aria-pressed="false">הרצה לאורך הזמן</button>`;

    const { C0, S0 } = baseline();
    const data = { normal: series("normal", C0, S0), ssri: series("ssri", C0, S0), mdma: series("mdma", C0, S0) };

    // שלפוחיות: גודל המילוי מייצג את גודל המלאי בתא
    const ves = root.querySelector("#ves");
    const VPOS = [[40, 42], [95, 34], [150, 44]];
    ves.innerHTML = VPOS.map(([x, y], i) => `<circle class="fl-bg st-line" stroke-width="1.4" cx="${x}" cy="${y}" r="12.5"/>
      <circle id="vf${i}" class="fl-violet" cx="${x}" cy="${y}" r="9"/>`).join("");
    const vfill = VPOS.map((_, i) => root.querySelector(`#vf${i}`));

    const dots = root.querySelector("#dots");
    dots.innerHTML = CLEFT.map(([x, y], i) => `<circle class="fl-violet" cx="${x}" cy="${y}" r="3" opacity="0">
      <animate attributeName="opacity" values="${i % 2 ? ".6;1;.6" : "1;.6;1"}" dur="${2 + (i % 5) * 0.3}s" repeatCount="indefinite"/></circle>`).join("");
    const dotEls = [...dots.children];

    const path = (arr, fy) => {
      let d = "";
      for (let i = 0; i < N; i += 1) d += (d ? "L" : "M") + gx(i * STEP).toFixed(1) + " " + fy(arr[i]).toFixed(1);
      return d;
    };

    const slider = root.querySelector("#t");
    let playing = false;

    const run = wire(root, ({ mode, t }) => {
      const d = data[mode] || data.normal;
      const i = clamp(Math.round(t / STEP), 0, N - 1);
      const ratio = d.c[i], store = d.s[i], m = d.m[i];

      out(root, "t-out", `${fmt(t, t < 10 ? 1 : 0)} ש׳`);
      out(root, "lv", fmt(ratio, 2));
      out(root, "st", `${fmt(store, 0)}%`);

      // שלפוחיות: שטח המילוי יחסי למלאי
      vfill.forEach((el) => el.setAttribute("r", (9 * Math.sqrt(clamp(store, 0, 120) / 100)).toFixed(2)));
      // נקודות במרווח: כמות יחסית לריכוז (נקודה אחת לכל 0.62 מהבסיס, עד 18)
      const n = clamp(Math.round(ratio * 1.62), 0, CLEFT.length);
      dotEls.forEach((el, k) => el.setAttribute("opacity", k < n ? "1" : "0"));
      // קולטנים: טבעת שגדלה עם הריכוז
      [1, 2, 3].forEach((k) => {
        const el = root.querySelector(`#r${k}`);
        el.setAttribute("opacity", clamp((ratio - 0.6) / 6, 0, 0.9).toFixed(2));
        el.setAttribute("r", (7 + clamp(ratio, 0, 11) * 0.6).toFixed(1));
      });
      // כיוון המשאבה: למעלה = ספיגה חוזרת, למטה = זרימה הפוכה בהשפעת MDMA
      const rev = mode === "mdma" && m > 0.12;
      root.querySelector("#pump-arr").setAttribute("d", rev ? "M117 78V94" : "M117 94V78");
      root.querySelector("#pump-head").setAttribute("d", rev ? "M113 92l4 6l4-6z" : "M113 80l4-6l4 6z");
      root.querySelector("#pump-arr").style.strokeWidth = (1.4 + (rev ? m * 2.6 : clamp(ratio, 0, 6) * 0.35)).toFixed(2);
      root.querySelector("#blocker").setAttribute("opacity", mode === "ssri" ? "1" : "0");
      root.querySelector("#mdma-tag").setAttribute("opacity", mode === "mdma" ? clamp(m * 1.6, 0, 1).toFixed(2) : "0");

      root.querySelector("#curve-c").setAttribute("d", path(d.c, gyC));
      root.querySelector("#curve-s").setAttribute("d", path(d.s, gyS));
      const cx = gx(i * STEP), cy = gyC(ratio);
      root.querySelector("#mark").setAttribute("cx", cx.toFixed(1));
      root.querySelector("#mark").setAttribute("cy", cy.toFixed(1));
      const cur = root.querySelector("#cursor");
      cur.setAttribute("x1", cx.toFixed(1)); cur.setAttribute("x2", cx.toFixed(1));

      out(root, "note", ratio > 5 ? "שיא: המלאי נדחף החוצה"
        : store < 70 ? (ratio < 1 ? "המלאי התרוקן — הרמה נמוכה מהבסיס" : "המלאי מתרוקן בזמן שהגל נמשך")
        : mode === "ssri" ? "המשאבה חסומה, הרמה גבוהה מעט" : ratio > 1.3 ? "עלייה מתונה" : "מצב בסיס");
    });

    const btn = root.querySelector("#play");
    btn.addEventListener("click", () => {
      playing = !playing;
      if (playing && +slider.value >= T_END) slider.value = "0";
      btn.setAttribute("aria-pressed", String(playing));
      btn.textContent = playing ? "עצירה" : "הרצה לאורך הזמן";
      run();
    });

    loop(root, (dt) => {
      if (!playing) return;
      const speed = 4; // שעות בשנייה
      const v = +slider.value + dt * speed;
      slider.value = String(Math.min(T_END, v));
      if (v >= T_END) { playing = false; btn.setAttribute("aria-pressed", "false"); btn.textContent = "הרצה לאורך הזמן"; }
      run();
    });
  },
};
