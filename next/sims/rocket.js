// רקטה: משוואת הרקטה של ציולקובסקי, Δv = ve · ln(m0 / m1).
//   m0 המסה לפני הבעירה, m1 המסה אחריה, ve מהירות פליטת הגז.
// המודל (מסת השיגור = 1):
//   דלק f מתוך מסת השיגור · מבנה (מְכלים ומנועים) = 6% ממסת הדלק שהוא מחזיק (K = 0.06, קרוב לרקטות אמיתיות)
//   מטען = 1 − 1.06·f
// שלבים: מחלקים את הרקטה ל־N שלבים בעלי אותו יחס מסות (החלוקה המיטבית כשכל השלבים זהים בדלק ובמבנה).
//   λ = מטען^(1/N) · שלב i שוקל M_i·(1 − λ), מתוכו דלק M_i·(1 − λ)/1.06, ואחרי הבעירה המבנה שלו נזרק.
//   Δv = N · ve · ln( 1 / (1 − (1 − λ)/1.06) ). סך הדלק נשאר f בכל מספר שלבים.
// אבני דרך: כ־9.4 ק״מ/ש כדי להיכנס למסלול נמוך (7.8 מהירות המסלול ועוד הפסדי כבידה ואוויר),
//   וכ־12.5 ק״מ/ש כדי להימלט מכדור הארץ.
// מהירויות פליטה אופייניות: דלק מוצק כ־2.5 · קרוסין וחמצן 3.0 עד 3.4 · מתאן וחמצן כ־3.6 · מימן וחמצן כ־4.4 ק״מ/ש.
// פישוט: אותה מהירות פליטה ואותו יחס מבנה בכל השלבים; ההפסדים כלולים באבני הדרך ולא מחושבים בנפרד.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const K = 0.06, ORBIT = 9.4, ESCAPE = 12.5;
const GROUND = 172, Y = (v) => GROUND - v * 8.5; // ציר המהירות
const RX = 20, RW = 28, RTOP = 36, RH = GROUND - 4 - RTOP; // הרקטה בחתך: גובה הגוף שווה למסה 1
const SC = ["var(--s-warm)", "var(--s-hot)", "var(--s-violet)"]; // צבע הדלק של כל שלב
const BURN = 2.8; // שניות להצגת הבעירה כולה

function design(f, n, ve) {
  const payload = 1 - (1 + K) * f, lam = Math.pow(payload, 1 / n);
  const stages = [];
  let M = 1, v = 0;
  for (let i = 0; i < n; i++) {
    const own = M * (1 - lam), prop = own / (1 + K);
    const dv = ve * Math.log(M / (M - prop));
    stages.push({ M, prop, str: own - prop, v0: v, dv });
    v += dv; M *= lam;
  }
  return { payload, stages, dv: v };
}
const fuelName = (ve) => (ve <= 2.7 ? "דלק מוצק" : ve <= 3.4 ? "קרוסין וחמצן" : ve <= 3.8 ? "מתאן וחמצן" : "מימן וחמצן");

export default {
  title: "בנו רקטה ושגרו אותה",
  hint: "נסו להגיע למסלול בשלב אחד, ואז הוסיפו שלבים. כל תוספת מהירות דורשת הרבה יותר דלק, ולכן כמעט כל הרקטה היא דלק; שלב שהתרוקן ונזרק חוסך את המשקל המת.",
  mount(root) {
    root.innerHTML = `
      <style>
        .rk-go{min-height:44px;padding:0 22px;border-radius:13px;font-size:15px;font-weight:700;border:0;color:#fff;background:linear-gradient(140deg,var(--c1),var(--c2))}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="רקטה בחתך שמראה כמה ממנה דלק, מבנה ומטען, ולצדה ציר מהירות עם הקו של כניסה למסלול והקו של מילוט">
        <!-- הרקטה בחתך: הגובה של כל חלק יחסי למסה שלו -->
        <path class="body fl-soft" d="M${RX} ${GROUND - 22}l-8 18v4h8zM${RX + RW} ${GROUND - 22}l8 18v4h-8z"/>
        <path class="fl-dark" d="M${RX + 8} ${GROUND - 4}h12l3 7h-18z"/>
        <path id="nose" class="body" d="M${RX} ${RTOP}C${RX + 2} ${RTOP - 12} ${RX + 9} ${RTOP - 20} ${RX + RW / 2} ${RTOP - 24}C${RX + RW - 9} ${RTOP - 20} ${RX + RW - 2} ${RTOP - 12} ${RX + RW} ${RTOP}z"/>
        <rect class="fl-panel" x="${RX}" y="${RTOP}" width="${RW}" height="${RH}"/>
        <g id="parts"></g>
        <rect class="fl-none st-ink" stroke-width="2" x="${RX}" y="${RTOP}" width="${RW}" height="${RH}"/>
        <rect class="fl-green" x="62" y="33" width="7" height="7" rx="1.5"/>
        <text x="84" y="40" class="sm">מטען</text><text id="l-pay" x="78" y="52"></text>
        <rect class="fl-warm" x="62" y="89" width="7" height="7" rx="1.5"/>
        <text x="82" y="96" class="sm">דלק</text><text id="l-prop" x="78" y="108"></text>
        <rect class="fl-dark" x="62" y="141" width="7" height="7" rx="1.5"/>
        <text x="84" y="148" class="sm">מבנה</text><text id="l-str" x="78" y="160"></text>
        <text id="fuel" x="52" y="193" class="sm"></text>
        <!-- ציר המהירות -->
        <text x="150" y="13" class="sm">המהירות שהרקטה צוברת</text>
        <path class="thin" style="stroke-dasharray:4 4" d="M106 ${Y(ORBIT)}H314M106 ${Y(ESCAPE)}H314"/>
        <text x="256" y="${Y(ORBIT) + 11}" class="sm">9.4 ק״מ/ש: נכנסים למסלול</text>
        <text x="256" y="${Y(ESCAPE) - 4}" class="sm">12.5 ק״מ/ש: נמלטים מכדור הארץ</text>
        <rect class="fl-soft" x="110" y="19" width="9" height="${GROUND - 19}" rx="2"/>
        <g id="bar"></g>
        <rect class="fl-none st-ink" stroke-width="1.4" x="110" y="19" width="9" height="${GROUND - 19}" rx="2"/>
        <path id="ptr" class="fl-ink" d="M0 0l7-4.500v9z"/>
        <path id="level" class="thin st-ink" style="stroke-dasharray:1 4"/>
        <path class="thin st-ink" d="M124 ${GROUND}H316"/>
        <path class="thin" d="M132 ${GROUND + 5}h10M150 ${GROUND + 5}h30M196 ${GROUND + 5}h14"/>
        <text id="note" x="222" y="191" class="sm"></text>
        <!-- אזור הטיסה (svg פנימי חותך את מה שיוצא ממנו) -->
        <svg x="122" y="0" width="198" height="${GROUND}" viewBox="122 0 198 ${GROUND}">
          <g id="junk"></g>
          <g id="ship">
            <path id="flame" class="fl-warm" d="M-3 8L0 22 3 8z"/>
            <path class="fl-dark" d="M-3 8h6l1.500 3h-9z"/>
            <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M-3.500 8V-5C-3.500 -9 -1.500 -12 0 -14C1.500 -12 3.500 -9 3.500 -5V8z"/>
            <path class="fl-soft st-ink" stroke-width="1" stroke-linejoin="round" d="M-3.500 3l-3.500 5h3.500zM3.500 3l3.500 5h-3.500z"/>
          </g>
        </svg>
      </svg>
      ${readouts([{ id: "dv", label: "תוספת מהירות, ק״מ/ש" }, { id: "pay", label: "מטען מתוך המשקל" }])}
      ${range({ id: "f", label: "דלק", min: 50, max: 94, step: 1, value: 90 })}
      ${range({ id: "ve", label: "מהירות הגז", min: 2.5, max: 4.5, step: 0.1, value: 3.3 })}
      <div class="sim-ctl seg" style="grid-template-columns:auto 1fr auto">
        <span>שלבים</span>
        <div class="seg-btns" data-id="n" role="group" aria-label="מספר השלבים">
          ${[1, 2, 3].map((v) => `<button type="button" data-v="${v}" aria-pressed="${v === 1}">${v}</button>`).join("")}
        </div>
        <button type="button" class="rk-go" id="go">שיגור</button>
      </div>`;

    const q = (s) => root.querySelector(s);
    const ship = q("#ship"), flame = q("#flame"), junk = q("#junk"), note = q("#note");
    const X0 = 168, Y0 = GROUND - 11; // הרקטה על כן השיגור
    let D = null, verdict = "", fl = null; // fl: מצב הטיסה

    const put = (x, y, a) => ship.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(1)})`);
    const reset = () => {
      fl = null; junk.innerHTML = "";
      put(X0, Y0, 0); flame.style.display = "none"; ship.style.opacity = 1;
      note.textContent = verdict;
    };

    wire(root, ({ f, ve, n }) => {
      n = +n;
      D = design(f / 100, n, ve);
      const { stages, payload, dv } = D;
      out(root, "f-out", `${f}%`);
      out(root, "ve-out", `${ve.toFixed(1)} ק״מ/ש`);
      out(root, "dv", fmt(dv, 1));
      out(root, "pay", `${fmt(payload * 100, 1)}%`);
      out(root, "l-pay", `${fmt(payload * 100, 1)}%`);
      out(root, "l-prop", `${f}%`);
      out(root, "l-str", `${fmt((1 - payload) * 100 - f, 1)}%`);
      out(root, "fuel", fuelName(ve));

      // הרקטה בחתך: מלמטה למעלה, לכל שלב מבנה (כהה) ומעליו דלק; המטען בראש
      let parts = "", y = RTOP + RH;
      stages.forEach((s, i) => {
        const hs = s.str * RH, hp = s.prop * RH;
        parts += `<rect class="fl-dark" x="${RX}" y="${(y - hs).toFixed(1)}" width="${RW}" height="${hs.toFixed(1)}"/>`;
        parts += `<rect style="fill:${SC[i]}" x="${RX}" y="${(y - hs - hp).toFixed(1)}" width="${RW}" height="${hp.toFixed(1)}"/>`;
        y -= hs + hp;
        if (i < n - 1) parts += `<path class="thin st-ink" style="stroke-width:1.6" d="M${RX - 3} ${y.toFixed(1)}h${RW + 6}"/>`;
      });
      parts += `<rect class="fl-green" x="${RX}" y="${RTOP}" width="${RW}" height="${Math.max(0, y - RTOP).toFixed(1)}"/>`;
      q("#parts").innerHTML = parts;
      q("#nose").style.fill = payload > 0.002 ? "var(--s-green)" : "";

      // עמודת המהירות: התרומה של כל שלב
      q("#bar").innerHTML = stages.map((s, i) => {
        const y1 = Math.max(19, Y(s.v0 + s.dv)), y0 = Math.max(19, Y(s.v0));
        return `<rect style="fill:${SC[i]}" x="110" y="${y1.toFixed(1)}" width="9" height="${(y0 - y1).toFixed(1)}"/>`;
      }).join("");
      const yv = Math.max(19, Y(dv));
      q("#ptr").setAttribute("transform", `translate(121 ${yv.toFixed(1)})`);
      q("#level").setAttribute("d", `M130 ${yv.toFixed(1)}H314`);

      verdict = dv < ORBIT ? `חסרים ${fmt(ORBIT - dv, 1)} ק״מ/ש: הרקטה תיפול בחזרה`
        : dv < ESCAPE ? `מספיק למסלול, עם עודף של ${fmt(dv - ORBIT, 1)} ק״מ/ש`
        : "מספיק כדי להימלט מכדור הארץ";
      reset();
    });

    q("#go").addEventListener("click", () => {
      reset();
      const total = D.stages.reduce((s, x) => s + x.prop, 0);
      fl = { t: 0, phase: "burn", si: 0, x: X0, y: Y0, a: 0, vy: 0, bounds: D.stages.map((s) => s.prop / total), pieces: [] };
      note.textContent = "המנועים בוערים…";
    });

    loop(root, (dt) => {
      if (!fl) return;
      fl.t += dt;
      if (fl.phase === "burn") {
        // איזה שלב בוער עכשיו, וכמה מהדלק שלו כבר נשרף
        let u = fl.t / BURN, i = 0;
        while (i < fl.bounds.length - 1 && u > fl.bounds[i]) { u -= fl.bounds[i]; i++; }
        const s = D.stages[i], frac = clamp(u / fl.bounds[i], 0, 1);
        const v = s.v0 + (s.dv / Math.log(s.M / (s.M - s.prop))) * Math.log(s.M / (s.M - frac * s.prop));
        const ny = Math.min(Y0, Y(v));
        fl.vy = (ny - fl.y) / Math.max(dt, 1e-3);
        fl.y = ny;
        if (i > fl.si) { // שלב התרוקן ונזרק
          fl.si = i;
          const el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          el.setAttribute("class", "fl-dark st-ink");
          el.setAttribute("stroke-width", "1"); el.setAttribute("width", "6"); el.setAttribute("height", "8"); el.setAttribute("rx", "1");
          junk.appendChild(el);
          fl.pieces.push({ el, x: fl.x - 3, y: fl.y + 8, vy: -20, vx: -14 - 10 * i });
        }
        flame.style.display = "";
        flame.setAttribute("d", `M-3 8L0 ${(18 + 6 * Math.random()).toFixed(1)} 3 8z`);
        put(fl.x, fl.y, 0);
        if (fl.t >= BURN) {
          flame.style.display = "none";
          fl.t = 0; fl.y0 = fl.y;
          fl.phase = D.dv < ORBIT ? "fall" : D.dv < ESCAPE ? "orbit" : "escape";
          note.textContent = fl.phase === "fall" ? "הדלק נגמר מוקדם מדי…" : fl.phase === "orbit" ? "נכנסת למסלול" : "ממשיכה הלאה";
        }
      } else if (fl.phase === "fall") {
        // בלי מהירות מסלולית הרקטה חוזרת לקרקע
        const T = 1.8, u = clamp(fl.t / T, 0, 1);
        fl.x = X0 + 44 * u;
        fl.y = fl.y0 - 14 * Math.sin(Math.PI * Math.min(1, u * 2)) * (u < 0.5 ? 1 : 0) + (Y0 + 6 - fl.y0) * u * u;
        put(fl.x, Math.min(fl.y, Y0 + 6), 170 * u);
        if (u >= 1) { fl.phase = "done"; note.textContent = `נפלה בחזרה: חסרו ${fmt(ORBIT - D.dv, 1)} ק״מ/ש`; }
      } else if (fl.phase === "orbit") {
        // נוטה הצידה ומקיפה: יוצאת מימין וחוזרת משמאל
        const a = 90 * clamp(fl.t / 0.7, 0, 1);
        fl.x += dt * 70 * clamp(fl.t / 0.7, 0.15, 1);
        if (fl.x > 334) fl.x = 108;
        put(fl.x, fl.y, a);
        if (fl.t > 0.7) note.textContent = `במסלול סביב כדור הארץ, מטען ${fmt(D.payload * 100, 1)}%`;
      } else if (fl.phase === "escape") {
        fl.y -= dt * 60; fl.x += dt * 14;
        put(fl.x, fl.y, 12);
        if (fl.y < -24) { fl.phase = "done"; note.textContent = "נמלטה מכדור הארץ ולא תחזור"; }
      }
      // שלבים ריקים נופלים
      for (const p of fl.pieces) {
        p.vy += 130 * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        p.el.setAttribute("x", p.x.toFixed(1)); p.el.setAttribute("y", Math.min(p.y, GROUND - 8).toFixed(1));
        p.el.setAttribute("opacity", p.y > GROUND - 8 ? 0.35 : 1);
      }
    });
  },
};
