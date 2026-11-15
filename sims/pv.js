// פאנל סולארי: משנים את זווית השמש, את חום הפאנל ואת העננות, ורואים כמה חשמל יוצא.
// הספק = הספק נקוב · cos(זווית) · (1 − 0.004 · (T − 25)) · מקדם עננות
//   הספק נקוב: 400 ואט, נמדד בתנאי התקן: שמש ישרה מול הפאנל (1,000 ואט למ"ר) ותא ב־25°.
//   הזווית נמדדת בין קרני השמש לבין הניצב לפאנל: 0° = השמש בדיוק מולו. האור שפוגע בפאנל יחסי ל־cos.
//   מקדם טמפרטורה: −0.4% לכל מעלה (אופייני לסיליקון גבישי; בפאנלים חדשים 0.3 עד 0.4).
//   עננות: בהיר 1 · מעונן חלקית 0.6 · מעונן 0.25 (ערכים אופייניים, לא מדידה).
// פישוטים: מתעלמים מהחזרה מהזכוכית בזוויות שטוחות (שמקטינה עוד קצת את ההספק) ומכך שביום מעונן
// האור מפוזר ולכן הזווית חשובה פחות. מספר הקרניים שפוגעות בפאנל בציור יחסי ל־cos של הזווית.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const RATED = 400, COEF = 0.004, CLOUD = { clear: 1, part: 0.6, over: 0.25 };
const CX = 110, CY = 136, TILT = 20, HALF = 35, GROUND = 180;
const rad = (d) => (d * Math.PI) / 180;
const U = [Math.cos(rad(TILT)), Math.sin(rad(TILT))];  // לאורך הפאנל
const NRM = [Math.sin(rad(TILT)), -Math.cos(rad(TILT))]; // הניצב לפאנל
const DC = "M141 149V170H196", AC = [228, 256];

export default {
  title: "כוונו את הפאנל אל השמש",
  hint: "הפאנל צריך אור, לא חום. הזיזו את השמש וראו כמה קרניים פוגעות בו, ואז חממו אותו וראו מה קורה להספק.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שמש, פאנל סולארי נטוי, ממיר ובית. קרני השמש פוגעות בפאנל והחשמל זורם אל הבית">
        <text id="note" x="160" y="14" class="sm"></text>
        <path class="thin" d="M6 ${GROUND}H314"/>
        <g id="rays"></g>
        <!-- שמש וענן -->
        <g id="sun">
          <path class="wire st-warm" style="stroke-width:2" d="M0 -17V-14M0 14V17M-17 0H-14M14 0H17M-12 -12l2 2M10 10l2 2M-12 12l2 -2M10 -10l2 -2"/>
          <circle class="fl-elec st-warm" stroke-width="2" r="10"/>
        </g>
        <g id="cloud"><path class="fl-panel st-line" stroke-width="1.500" stroke-linejoin="round" d="M-18 8a8 8 0 0 1 0-16 11 11 0 0 1 20-5 9 9 0 0 1 16 5 8 8 0 0 1 0 16z"/></g>
        <!-- הפאנל על מעמד -->
        <path class="wire st-ink" style="stroke-width:2" d="M${(CX - 20 * U[0]).toFixed(1)} ${(CY - 20 * U[1]).toFixed(1)}V${GROUND}M${(CX + 20 * U[0]).toFixed(1)} ${(CY + 20 * U[1]).toFixed(1)}V${GROUND}"/>
        <g transform="translate(${CX} ${CY}) rotate(${TILT})">
          <rect class="fl-cold st-ink" stroke-width="2" x="${-HALF}" y="-3.500" width="${2 * HALF}" height="7" rx="1.500"/>
          <rect id="tint" x="${-HALF}" y="-3.500" width="${2 * HALF}" height="7" rx="1.500" opacity="0"/>
          <path class="st-ink" fill="none" stroke-width="1" d="M-21 -3.500v7M-7 -3.500v7M7 -3.500v7M21 -3.500v7"/>
          <g id="heat" class="thin st-hot" style="stroke-width:1.500"><path class="fade" d="M-22 -8q-3 -3 0 -6t0 -6"/><path class="fade d2" d="M0 -8q-3 -3 0 -6t0 -6"/><path class="fade d4" d="M22 -8q-3 -3 0 -6t0 -6"/></g>
        </g>
        <text id="tlab" x="106" y="194" class="sm"></text>
        <!-- חוטים, ממיר ובית -->
        <path id="dc" class="wire st-ink" d="${DC}"/>
        <path class="wire st-ink" d="M${AC[0]} 170H${AC[1]}"/>
        <text x="168" y="163" class="sm">זרם ישר</text>
        <g id="e1" class="fl-elec st-ink" stroke-width=".8"></g>
        <g id="e2" class="fl-elec st-ink" stroke-width=".8"></g>
        <rect class="body" x="196" y="156" width="32" height="24" rx="4"/>
        <path class="wire st-violet" style="stroke-width:1.800" d="M202 168q5 -9 10 0t10 0"/>
        <text x="212" y="150" class="sm">ממיר</text>
        <path class="body" d="M256 ${GROUND}V142H306V${GROUND}Z"/>
        <path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M250 143L281 120L312 143Z"/>
        <rect class="fl-dark" x="269" y="150" width="24" height="20" rx="2"/>
        <rect id="lamp" class="fl-elec" x="269" y="150" width="24" height="20" rx="2" opacity="0"/>
        <path class="st-ink" fill="none" stroke-width="1.500" d="M269 150h24v20h-24zM281 150v20M269 160h24"/>
        <text id="wlab" x="281" y="110" class="lg"></text>
      </svg>
      ${readouts([{ id: "w", label: "הספק (ואט)" }, { id: "pct", label: "מההספק הנקוב" }])}
      ${range({ id: "a", label: "זווית השמש", min: 0, max: 90, value: 30 })}
      ${range({ id: "t", label: "חום הפאנל", min: 0, max: 75, value: 45 })}
      ${choice({ id: "sky", label: "שמיים", options: [{ v: "clear", label: "בהיר" }, { v: "part", label: "חלקי" }, { v: "over", label: "מעונן" }], value: "clear" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const K = [-5.5, -4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5];
    $("rays").innerHTML = K.map(() => `<path/>`).join("");
    const rayEls = [...$("rays").children];
    const dcPath = $("dc"), dcLen = dcPath.getTotalLength();
    $("e1").innerHTML = Array.from({ length: 5 }, () => `<circle r="2.800"/>`).join("");
    $("e2").innerHTML = Array.from({ length: 2 }, () => `<circle r="2.800" cy="170"/>`).join("");
    const e1 = [...$("e1").children], e2 = [...$("e2").children];
    let frac = 0, offset = 0, ph = 0;

    wire(root, ({ a, t, sky }) => {
      const th = rad(a), cos = Math.max(0, Math.cos(th)), sin = Math.sin(th);
      const kT = 1 - COEF * (t - 25), kC = CLOUD[sky];
      const p = RATED * cos * kT * kC;
      frac = p / RATED;
      out(root, "a-out", `${a}°`);
      out(root, "t-out", `${t}°`);
      out(root, "w", fmt(p, 0));
      out(root, "pct", `${fmt(100 * frac, 0)}%`);
      out(root, "wlab", `${fmt(p, 0)} ואט`);
      out(root, "tlab", `הפאנל: ${t}°`);

      // כיוון השמש d והניצב לקרניים e
      const d = [NRM[0] * cos - U[0] * sin, NRM[1] * cos - U[1] * sin];
      const e = [U[0] * cos + NRM[0] * sin, U[1] * cos + NRM[1] * sin];
      $("sun").setAttribute("transform", `translate(${(CX + 92 * d[0]).toFixed(1)} ${(CY + 92 * d[1]).toFixed(1)})`);
      const cl = $("cloud");
      cl.style.display = sky === "clear" ? "none" : "";
      cl.setAttribute("transform", `translate(${(CX + 64 * d[0]).toFixed(1)} ${(CY + 64 * d[1]).toFixed(1)}) scale(${sky === "over" ? 1.5 : 0.9})`);
      cl.firstElementChild.setAttribute("class", sky === "over" ? "fl-line st-ink" : "fl-panel st-line");
      rayEls.forEach((el, i) => {
        const off = K[i] * 7, bx = CX + e[0] * off, by = CY + e[1] * off;
        const hit = Math.abs(off) <= HALF * cos + 1e-9 && cos > 0.01;
        // קרן שפוגעת נעצרת על הפאנל; קרן שמחטיאה ממשיכה עד הקרקע (או עד קצה האזור)
        let s = hit ? -off * (sin / cos) + 4.5 : (GROUND - by) / d[1];
        if (!hit && d[0] < -0.01) s = Math.max(s, (188 - bx) / d[0]);
        if (!hit && d[0] > 0.01) s = Math.max(s, (4 - bx) / d[0]);
        el.setAttribute("d", `M${(bx + d[0] * 74).toFixed(1)} ${(by + d[1] * 74).toFixed(1)}L${(bx + d[0] * s).toFixed(1)} ${(by + d[1] * s).toFixed(1)}`);
        el.setAttribute("class", hit ? "wire st-elec dash" : "thin st-elec dash");
        el.style.strokeWidth = hit ? 2.2 : 1.2;
        el.setAttribute("opacity", ((hit ? 1 : 0.45) * (0.25 + 0.75 * kC)).toFixed(2));
      });
      const tint = $("tint");
      tint.setAttribute("class", t >= 25 ? "fl-hot" : "fl-panel");
      tint.setAttribute("opacity", (t >= 25 ? (t - 25) / 65 : (25 - t) / 60).toFixed(2));
      $("heat").setAttribute("opacity", clamp((t - 35) / 40, 0, 1).toFixed(2));
      $("lamp").setAttribute("opacity", clamp(frac, 0, 1).toFixed(2));

      // ההערה מתארת את הגורם שמשפיע הכי הרבה כרגע
      const lossA = 1 - cos, lossT = Math.abs(1 - kT), lossC = 1 - kC, top = Math.max(lossA, lossT, lossC);
      const dT = fmt(Math.abs(100 * (kT - 1)), 1);
      out(root, "note",
        top < 0.005 ? "שמש ישרה מול הפאנל ו־25°: בדיוק ההספק הנקוב, 400 ואט"
        : a >= 85 ? "האור מחליק לאורך הפאנל וכמעט לא פוגע בו: אין כמעט חשמל"
        : top === lossT ? (t > 25 ? `פאנל חם מייצר פחות: ${dT}% פחות (0.4% לכל מעלה מעל 25°)`
          : p > RATED ? `קר ובהיר: ${dT}% יותר, אפילו מעל ההספק הנקוב` : `פאנל קר מייצר יותר: ${dT}% יותר מאשר ב־25°`)
        : top === lossC ? (sky === "over" ? "שמיים מעוננים: רק כרבע מהאור מגיע אל הפאנל" : "עננות חלקית: כ־60% מהאור מגיע אל הפאנל")
        : a === 60 ? "ב־60° רק חצי מהקרניים פוגעות בפאנל: חצי מההספק"
        : `בזווית של ${a}° פוגע בפאנל ${fmt(100 * cos, 0)}% מהאור`);
    });

    loop(root, (dt) => {
      // זרם ישר מהפאנל אל הממיר: זרימה קבועה. אחרי הממיר: חילופין, האלקטרונים רוטטים במקומם
      offset = (offset + dt * frac * 45) % dcLen;
      e1.forEach((c, k) => {
        const q = (offset + (k * dcLen) / e1.length) % dcLen, p = dcPath.getPointAtLength(q);
        c.setAttribute("cx", p.x.toFixed(1));
        c.setAttribute("cy", p.y.toFixed(1));
        c.setAttribute("opacity", clamp(Math.min(q, dcLen - q) / 5, 0, 1).toFixed(2));
      });
      ph += dt * 7;
      e2.forEach((c, k) => c.setAttribute("cx", (AC[0] + 9 + 10 * k + 4 * clamp(frac, 0, 1) * Math.sin(ph)).toFixed(1)));
    });
  },
};
