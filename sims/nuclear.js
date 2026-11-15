// כור גרעיני: קובעים כמה עמוק מוטות הבקרה בתוך הליבה, ורואים את מקדם ההכפלה k ואת ההספק לאורך זמן.
//
// המודל (קינטיקה נקודתית בקבוצה אחת):
//   k = 1 + 0.06 · (0.5 − d)       d = עומק המוטות, 0 (בחוץ) עד 1 (בפנים). k = 1 בדיוק בעומק 50%,
//                                   1.03 כשהמוטות בחוץ, 0.97 כשהם בפנים עד הסוף.
//   dP/dt = P · (k − 1) / Λ        Λ = 0.1 שנייה: זמן הדור האפקטיבי.
//   כלומר P(t) = P0 · e^((k−1)·t/Λ): מעריכי למעלה כש־k > 1, קבוע כש־k = 1, דועך כש־k < 1.
//   זמן הכפלה (או חצייה) = ln2 · Λ / |k − 1|.
// Λ = 0.1 שנייה קרוב לערך האמיתי כשהסטייה מ־1 קטנה (בזכות הנייטרונים המושהים); בסטיות הגדולות
// שבקצות המחוון כור אמיתי היה מגיב מהר בהרבה, וכאן הקצב נשאר אטי כדי שאפשר יהיה לעקוב.
// פישוטים: אין משוב טמפרטורה (שמייצב כור אמיתי), אין חום שיורי אחרי כיבוי; ההספק לא יורד מתחת ל־0.5%
// (מקור נייטרונים), כדי שאפשר יהיה להתניע מחדש.
// הגנה: מעל 120% מההספק הנקוב המוטות נופלים אוטומטית. כפתור "כיבוי חירום" מפיל אותם ביוזמת הקורא.
// הנייטרונים באיור הם המחשה: מספרם יחסי להספק, והם נבלעים רק בחלק של מוט הבקרה שנמצא בתוך הליבה.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const LAMBDA = 0.1, TRIP = 120, P_MIN = 0.5, P_START = 40;
const kOf = (d) => 1 + 0.06 * (0.5 - d);

const CX0 = 30, CX1 = 186, CY0 = 44, CY1 = 140, CL = CY1 - CY0; // הליבה
const FUEL = [44, 76, 108, 140, 172], RODS = [60, 92, 124, 156], FW = 10, RW = 7;
const GX0 = 216, GX1 = 312, GY0 = 30, GY1 = 122, GMAX = 150, SPAN = 30, DT_S = 0.25; // גרף ההספק
const gy = (p) => GY1 - (clamp(p, 0, GMAX) / GMAX) * (GY1 - GY0);
const MAXN = 60;

export default {
  title: "החזק את הכור יציב",
  hint: "נסה להביא את ההספק ל־100% ולייצב אותו שם. בסטיות גדולות כור אמיתי מגיב מהר בהרבה מכאן.",
  mount(root) {
    root.innerHTML = `
      <style>
        .nu-btns{display:flex;gap:8px;margin-top:10px}
        .nu-btns button{flex:1;min-height:42px;border-radius:13px;border:1px solid var(--line);background:var(--card);color:var(--ink);font-size:14.5px;font-weight:700;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
        .nu-btns .nu-scram{flex:1.4;color:#fff;border-color:transparent;background:#d6402b}
        .nu-btns button:active{filter:brightness(.92)}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="ליבת כור גרעיני עם מוטות דלק, מוטות בקרה ונייטרונים, וגרף של ההספק לאורך זמן">
        <!-- מכל הליבה והמים -->
        <rect class="fl-cold-soft st-ink" stroke-width="2" x="${CX0 - 6}" y="${CY0 - 6}" width="${CX1 - CX0 + 12}" height="${CL + 12}" rx="8"/>
        <!-- מוטות דלק -->
        ${FUEL.map((x) => `<rect class="fl-warm st-ink" stroke-width="1.200" x="${x - FW / 2}" y="${CY0 + 2}" width="${FW}" height="${CL - 4}" rx="2.500"/>`).join("")}
        <g id="heat" class="fl-hot" opacity="0">${FUEL.map((x) => `<rect x="${x - FW / 2 + 0.6}" y="${CY0 + 2.6}" width="${FW - 1.2}" height="${CL - 5.2}" rx="2"/>`).join("")}</g>
        <!-- קו המצב הקריטי -->
        <path class="thin" style="stroke:var(--s-green);stroke-dasharray:4 3;stroke-width:1.8" d="M${CX0 - 12} ${CY0 + CL / 2}H${CX1 + 12}"/>
        <text x="15" y="${CY0 + CL / 2 - 5}" class="sm">קריטי</text>
        <!-- נייטרונים והבזקי ביקוע -->
        <g id="flash" class="fl-elec"></g>
        <g id="neut" class="fl-ink"></g>
        <!-- מוטות בקרה -->
        <g id="rods" class="fl-dark st-ink" stroke-width="1.200">${RODS.map((x) => `<rect x="${x - RW / 2}" y="6" width="${RW}" height="40" rx="1.500"/>`).join("")}</g>
        <path id="bar" class="wire st-ink" style="stroke-width:3" d="M${RODS[0] - 8} 8H${RODS[3] + 8}"/>
        <text x="108" y="158" class="sm">כתום: דלק · כהה: מוטות בקרה</text>
        <!-- גרף ההספק -->
        <text x="262" y="14" class="sm">הספק ב־30 השניות האחרונות</text>
        <rect class="fl-panel" x="${GX0}" y="${GY0 - 8}" width="${GX1 - GX0}" height="${GY1 - GY0 + 8}" rx="4" opacity=".6"/>
        <path class="thin" style="stroke:var(--s-hot);stroke-dasharray:3 3" d="M${GX0} ${gy(TRIP)}H${GX1}"/>
        <path class="thin" style="stroke:var(--s-ink);stroke-dasharray:1 3" d="M${GX0} ${gy(100)}H${GX1}"/>
        <path class="thin st-ink" d="M${GX0} ${GY0 - 8}V${GY1}H${GX1}"/>
        <text x="${GX0 - 10}" y="${gy(100) + 4}" class="sm">100</text>
        <text x="${GX0 - 10}" y="${gy(TRIP) + 1}" class="sm" style="fill:var(--s-hot)">120</text>
        <text x="${GX0 - 6}" y="${GY1 + 3}" class="sm">0</text>
        <path id="plot" class="wire st-hot" style="stroke-width:2"/>
        <circle id="pdot" class="fl-hot st-ink" stroke-width="1.2" cx="${GX1}" r="3.200"/>
        <text id="trend" x="260" y="138" class="lg"></text>
        <text id="dbl" x="260" y="154" class="sm"></text>
        <text id="note" x="160" y="186" class="lg"></text>
      </svg>
      ${readouts([{ id: "k", label: "מקדם ההכפלה k" }, { id: "p", label: "הספק (% מהנקוב)" }])}
      ${range({ id: "d", label: "מוטות בקרה", min: 0, max: 100, value: 50 })}
      <div class="nu-btns">
        <button type="button" class="nu-scram" id="scram">כיבוי חירום</button>
        <button type="button" id="reset">התחל מחדש</button>
      </div>`;

    const $ = (id) => root.querySelector(`#${id}`);
    const slider = $("d"), rodEls = [...$("rods").children];
    $("neut").innerHTML = Array.from({ length: MAXN }, () => `<circle r="1.800" opacity="0"/>`).join("");
    $("flash").innerHTML = Array.from({ length: 10 }, () => `<circle r="1" opacity="0"/>`).join("");
    const nEls = [...$("neut").children], fEls = [...$("flash").children];

    let depth = 0.5, k = 1, P = P_START, dropping = false, tripped = false;
    let hist = [P_START], acc = 0, lastK = null, lastP = null;
    const neutrons = [], flashes = fEls.map(() => ({ t: 1 }));
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const spawn = (x, y) => {
      const a = rnd() * 2 * Math.PI, v = 45 + rnd() * 25;
      neutrons.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, cool: 0.25 });
    };
    const flashAt = (x, y) => { const f = flashes.reduce((a, b) => (b.t > a.t ? b : a)); f.t = 0; f.x = x; f.y = y; };

    const setDepth = (d) => {
      depth = clamp(d, 0, 1);
      k = kOf(depth);
      rodEls.forEach((r) => r.setAttribute("height", (CY0 - 6 + depth * CL).toFixed(1)));
      out(root, "d-out", `${Math.round(depth * 100)}% בפנים`);
    };

    wire(root, ({ d }) => { dropping = false; tripped = false; setDepth(d / 100); });
    $("scram").addEventListener("click", () => { dropping = true; });
    $("reset").addEventListener("click", () => {
      dropping = false; tripped = false; P = P_START; hist = [P_START]; acc = 0;
      slider.value = 50; setDepth(0.5);
    });

    loop(root, (dt) => {
      if (dropping) { // המוטות נופלים: כשנייה מלמעלה עד למטה
        setDepth(depth + dt * 1.1);
        slider.value = Math.round(depth * 100);
        if (depth >= 1) dropping = false;
      }
      P = clamp(P * Math.exp(((k - 1) / LAMBDA) * dt), P_MIN, 400);
      if (P > TRIP && !tripped && depth < 1) { tripped = true; dropping = true; }
      acc += dt;
      while (acc >= DT_S) { acc -= DT_S; hist.push(P); if (hist.length > SPAN / DT_S + 1) hist.shift(); }

      // מספרים וטקסט (רק כשמשהו השתנה)
      const kTxt = k.toFixed(3), pTxt = fmt(P, P < 10 ? 1 : 0);
      if (kTxt !== lastK || pTxt !== lastP) {
        lastK = kTxt; lastP = pTxt;
        out(root, "k", kTxt);
        out(root, "p", `${pTxt}%`);
        const rho = k - 1, flat = Math.abs(rho) < 1e-9;
        const t2 = flat ? 0 : (Math.LN2 * LAMBDA) / Math.abs(rho);
        out(root, "trend", flat ? "k = 1 · יציב" : rho > 0 ? "k > 1 · מתגבר" : "k < 1 · דועך");
        out(root, "dbl", flat ? "ההספק עומד במקום" : P <= P_MIN && rho < 0 ? "התגובה כבתה" : `${rho > 0 ? "מוכפל" : "נחצה"} כל ${fmt(t2, t2 < 10 ? 1 : 0)} שניות`);
        out(root, "note",
          tripped ? "כיבוי אוטומטי: ההספק עבר 120%"
          : rho > 0 && P > 100 ? "ההספק בורח! הורד את המוטות"
          : flat && P >= 95 && P <= 105 ? "כור יציב בהספק מלא"
          : flat ? "קריטי: ביקוע אחד לכל ביקוע"
          : rho > 0 ? "יותר מביקוע אחד לכל ביקוע"
          : P <= P_MIN ? "הכור כבוי"
          : "המוטות בולעים יותר מדי נייטרונים");
        $("note").style.fill = tripped || (rho > 0 && P > 100) ? "var(--s-hot)" : "";
        $("heat").setAttribute("opacity", clamp(P / 140, 0, 1).toFixed(2));
      }

      // הגרף: הנקודה הימנית היא עכשיו
      const n = hist.length;
      let dstr = "";
      for (let i = 0; i < n; i++) {
        const x = GX1 - (((n - 1 - i) * DT_S + acc) / SPAN) * (GX1 - GX0);
        if (x < GX0) continue;
        dstr += `${dstr ? "L" : "M"}${x.toFixed(1)} ${gy(hist[i]).toFixed(1)}`;
      }
      dstr += `${dstr ? "L" : "M"}${GX1} ${gy(P).toFixed(1)}`;
      $("plot").setAttribute("d", dstr);
      $("pdot").setAttribute("cy", gy(P).toFixed(1));

      // נייטרונים: מספרם יחסי להספק; נבלעים במוט בקרה, גורמים לביקוע במוט דלק
      const target = Math.round(clamp(P * 0.3, P > 1 ? 2 : 0, MAXN));
      const rodBottom = CY0 + depth * CL;
      for (let i = neutrons.length - 1; i >= 0; i--) {
        const q = neutrons[i];
        q.x += q.vx * dt; q.y += q.vy * dt; q.cool -= dt;
        if (q.x < CX0 || q.x > CX1) { q.vx = -q.vx; q.x = clamp(q.x, CX0, CX1); }
        if (q.y < CY0 || q.y > CY1) { q.vy = -q.vy; q.y = clamp(q.y, CY0, CY1); }
        if (q.y < rodBottom && RODS.some((x) => Math.abs(q.x - x) < RW / 2 + 1)) { neutrons.splice(i, 1); continue; }
        if (q.cool <= 0 && FUEL.some((x) => Math.abs(q.x - x) < FW / 2)) {
          flashAt(q.x, q.y);
          neutrons.splice(i, 1);
          if (neutrons.length < target) { spawn(q.x, q.y); if (neutrons.length < target) spawn(q.x, q.y); }
        }
      }
      let guard = 3;
      while (neutrons.length < target && guard--) spawn(FUEL[Math.floor(rnd() * 5)], CY0 + 6 + rnd() * (CL - 12));
      if (neutrons.length > target + 2) neutrons.shift();
      for (let i = 0; i < MAXN; i++) {
        const q = neutrons[i];
        if (q) { nEls[i].setAttribute("cx", q.x.toFixed(1)); nEls[i].setAttribute("cy", q.y.toFixed(1)); nEls[i].setAttribute("opacity", "1"); }
        else nEls[i].setAttribute("opacity", "0");
      }
      flashes.forEach((f, i) => {
        if (f.t >= 1) { fEls[i].setAttribute("opacity", "0"); return; }
        f.t += dt * 3.5;
        fEls[i].setAttribute("cx", f.x.toFixed(1)); fEls[i].setAttribute("cy", f.y.toFixed(1));
        fEls[i].setAttribute("r", (2 + 7 * f.t).toFixed(1));
        fEls[i].setAttribute("opacity", clamp(0.8 * (1 - f.t), 0, 1).toFixed(2));
      });
    });
  },
};
