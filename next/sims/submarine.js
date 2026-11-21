// צוללת: ממלאים ומרוקנים את מיכל הנטל ומטים את ההגאים, ורואים אם הצוללת עולה, מרחפת או שוקעת.
// עיקרון ארכימדס: כוח הציפה שווה למשקל המים שהגוף דוחק: B = ρ · V · g
//   ρ = 1,025 ק"ג למ"ק (מי ים) · V = 2,000 מ"ק (נפח הגוף כשהוא שקוע כולו) → ציפה מלאה של 2,050 טון.
//   מסת הצוללת בלי מי נטל: 1,845 טון (כ־10% ״עתודת ציפה״, ולכן היא צפה כשהמיכלים ריקים).
//   מיכלי הנטל: 400 מ"ק = 410 טון מי ים כשהם מלאים. איזון מושלם: מיכלים מלאים בדיוק עד חציים.
//   פישוט: מיכל אחד מייצג כאן גם את מיכלי האיזון (בפועל מלאים או ריקים) וגם את מיכלי הקיזון שמכווננים עדינות.
// תנועה אנכית: m·dv/dt = W − B − ½·ρ·Cd·A·v·|v|, עם Cd = 1 ו־A = 390 מ"ר (צוללת באורך 60 מ' ובקוטר 6.5 מ' נעה הצידה)
//   → מהירות סופית v = √(2·|W − B| / (ρ·Cd·A)): עודף של 20.5 טון → כ־1 מ' לשנייה; מיכל מלא (205 טון) → כ־3.2 מ' לשנייה.
// ההגאים (פישוט קינמטי): הצוללת שטה קדימה ב־2.5 מ' לשנייה (כ־5 קשר), ההגאים מטים אותה בחצי מזוויתם,
//   ונוסף לה רכיב אנכי U·sin(θ): ב־15° → זווית 7.5° → כ־0.33 מ' לשנייה. די לתקן חוסר איזון קטן, לא מיכל מלא.
// ליד פני המים הגוף בולט החוצה, ונפח המים הנדחק קטן באופן ליניארי עם השקיעה (קוטר 7 מ').
// לחץ בעומק h: p = 1 + ρ·g·h / 101,325 אטמוספרות (כולל האוויר שמעל הים): כל 10 מטרים מוסיפים כ־0.99 אטמוספרה.
// הזמן באיור מואץ פי 6, כדי שהשקיעה תיראה בתוך שניות.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const RHO = 1025, G = 9.81, V = 2000, DRY = 1845e3, TANK = 400 * RHO, CD_A = 390, U = 2.5, D = 7, FLOOR = 400, SPEEDUP = 6;
const subFrac = (d) => clamp((d + D / 2) / D, 0, 1); // d: עומק מרכז הגוף במטרים
const SEA = 34, BED = 188;
const Y = (d) => (d < D / 2 ? SEA + (d / (D / 2)) * 7 : SEA + 7 + ((d - D / 2) * (BED - 7 - SEA - 7)) / (FLOOR - D / 2));
const HULL = "M-46 0Q-46 -9 -36 -9H26Q40 -8 48 -2L52 0L48 2Q40 8 26 9H-36Q-46 9 -46 0Z";

export default {
  title: "צלול עם מיכל הנטל",
  hint: "מלא את המיכל עד שהצוללת שוקלת בדיוק כמו המים שהיא דוחקת, והיא תרחף. ההגאים משנים עומק רק בזמן תנועה, ואינם מתגברים על מיכל מלא.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="צוללת בים, מד עומק, ועמודות של משקל מול כוח ציפה">
        <defs><clipPath id="tk"><path d="${HULL}"/></clipPath></defs>
        <rect class="fl-cold-soft" x="0" y="${SEA}" width="250" height="${BED - SEA}"/>
        <path class="fl-soft st-ink" stroke-width="1.5" d="M0 ${BED}H250V200H0Z"/>
        <g id="streaks" class="thin st-cold" style="stroke-width:1.2"></g>
        <path class="wire st-cold" style="stroke-width:2" d="M0 ${SEA}${"q8 -3 16 0t16 0".repeat(8)}"/>
        <!-- סרגל עומק -->
        ${[100, 200, 300].map((m) => `<path class="thin st-ink" d="M0 ${Y(m + 3.5).toFixed(1)}h8"/><text x="24" y="${(Y(m + 3.5) + 3.5).toFixed(1)}" class="sm">${m} מ׳</text>`).join("")}
        <text x="206" y="182" class="sm">קרקעית, 400 מ׳</text>
        <!-- הצוללת -->
        <g id="sub">
          <g id="tilt">
            <path class="fl-dark st-ink" stroke-width="1.2" d="M48 -2L56 -3V3L48 2Z"/>
            <path class="body" style="stroke-width:1.8" d="${HULL}"/>
            <g clip-path="url(#tk)">
              <rect id="wf" class="fl-cold" x="-46" width="16" y="-9" height="18"/>
              <rect id="wa" class="fl-cold" x="30" width="22" y="-9" height="18"/>
            </g>
            <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M-30 -9V9M30 -9V9"/>
            <path class="body" style="stroke-width:1.5" d="M-12 -9L-9 -21H6L9 -9Z"/>
            <g id="plane"><path class="fl-dark st-ink" stroke-width="1" d="M-22 -15Q-16 -17.500 -10 -15Q-16 -12.500 -22 -15Z"/></g>
            <ellipse id="prop" class="fl-line st-ink" stroke-width="1" cx="57" cy="0" rx="1.500" ry="6"/>
          </g>
          <path id="net" class="arrow" style="stroke-width:2.5"/>
          <g id="bub" class="fl-panel st-cold" stroke-width=".8"></g>
        </g>
        <!-- מאזניים: משקל מול ציפה -->
        <path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M286 98L280 150H292Z"/>
        <path class="thin st-ink" d="M266 150H306"/>
        <g id="beam">
          <path class="st-ink fl-none" style="stroke-width:2.5" stroke-linecap="round" d="M262 98H310"/>
        </g>
        <g id="panB"><path class="thin st-ink" d="M0 0L-7 18M0 0L7 18"/><path class="fl-cold st-ink" stroke-width="1.2" d="M-10 18H10Q10 25 0 25Q-10 25 -10 18Z"/></g>
        <g id="panW"><path class="thin st-ink" d="M0 0L-7 18M0 0L7 18"/><path class="fl-hot st-ink" stroke-width="1.2" d="M-10 18H10Q10 25 0 25Q-10 25 -10 18Z"/></g>
        <circle class="fl-dark st-ink" stroke-width="1" cx="286" cy="98" r="2.5"/>
        <text x="263" y="164" class="sm">ציפה</text>
        <text x="309" y="164" class="sm">משקל</text>
        <text x="286" y="178" class="sm">אלפי טונות</text>
        <text id="tB" x="263" y="60" class="sm"></text>
        <text id="tW" x="309" y="60" class="sm"></text>
        <text id="note" x="125" y="13" class="sm"></text>
      </svg>
      ${readouts([{ id: "dep", label: "מטר עומק" }, { id: "atm", label: "אטמוספרות" }, { id: "ex", label: "טון עודף" }])}
      ${range({ id: "fill", label: "מיכל נטל", min: 0, max: 100, step: 1, value: 56 })}
      ${range({ id: "pl", label: "הגאים", min: -15, max: 15, step: 1, value: 0 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const st = { d: 60, v: 0, fill: 0.56, delta: 0, lastFill: 0.56, bubT: 0 };
    const streaks = $("streaks");
    const S = Array.from({ length: 9 }, (_, i) => ({ x: (i * 61) % 250, y: 40 + ((i * 37) % 140) }));
    streaks.innerHTML = S.map(() => "<path/>").join("");
    const sEls = [...streaks.children];
    const bub = $("bub");
    bub.innerHTML = Array.from({ length: 6 }, () => '<circle r="1.6"/>').join("");
    const bEls = [...bub.children];

    wire(root, ({ fill, pl }) => {
      st.fill = fill / 100;
      st.delta = pl;
      out(root, "fill-out", `${fmt(fill, 0)}%`);
      out(root, "pl-out", pl === 0 ? "ישר" : `⁦${Math.abs(pl)}°⁩ ${pl > 0 ? "מטה" : "מעלה"}`);
      const h = 18 * st.fill;
      $("wf").setAttribute("y", (9 - h).toFixed(1)); $("wf").setAttribute("height", h.toFixed(1));
      $("wa").setAttribute("y", (9 - h).toFixed(1)); $("wa").setAttribute("height", h.toFixed(1));
      $("plane").setAttribute("transform", `rotate(${-pl} -16 -15)`);
    });

    let t = 0;
    loop(root, (dt) => {
      t += dt;
      const h = dt * SPEEDUP;
      const m = DRY + TANK * st.fill;              // מסה כוללת, ק"ג
      const B = RHO * V * subFrac(st.d);            // מסת המים הנדחקים, ק"ג
      const F = (m - B) * G;                        // כוח נטו כלפי מטה, ניוטון
      // תת־צעדים קטנים ליציבות
      for (let k = 0; k < 6; k++) {
        // ליד פני המים נוסף ריסון (גלים וגוף שבולט מהמים), כדי שהצוללת תתייצב ולא תיטלטל בלי סוף
        const a = (F - 0.5 * RHO * CD_A * st.v * Math.abs(st.v)) / m - (st.d < D / 2 + 1 ? 0.8 * st.v : 0);
        st.v += (a * h) / 6;
      }
      const theta = ((st.delta / 2) * Math.PI) / 180;
      const submerged = st.d >= D / 2;
      const w = st.v + (submerged ? U * Math.sin(theta) : 0);
      st.d += w * h;
      if (st.d > FLOOR) { st.d = FLOOR; st.v = Math.min(st.v, 0); }
      if (st.d < -D / 2 + 0.5) { st.d = -D / 2 + 0.5; st.v = Math.max(st.v, 0); }

      const depth = Math.max(0, st.d - D / 2);        // עומק החלק העליון של הגוף
      const atm = 1 + (RHO * G * depth) / 101325;
      const excessT = (m - RHO * V) / 1000;           // עודף משקל מול ציפה מלאה, טונות
      out(root, "dep", fmt(depth, 0));
      out(root, "atm", fmt(atm, 1));
      out(root, "ex", Math.abs(excessT) < 0.5 ? "0" : `⁦${excessT > 0 ? "+" : "−"}${fmt(Math.abs(excessT), 0)}⁩`);

      // ציור
      const y = Y(st.d);
      const pitch = submerged ? st.delta / 2 : 0;
      $("sub").setAttribute("transform", `translate(125 ${y.toFixed(2)})`);
      $("tilt").setAttribute("transform", `rotate(${(-pitch).toFixed(2)})`); // החרטום משמאל: זווית צלילה מורידה אותו
      $("prop").setAttribute("ry", (2 + 4 * Math.abs(Math.sin(t * 14))).toFixed(2));
      const netT = (m - B) / 1000;
      const L = Math.abs(netT) < 0.5 ? 0 : 6 + clamp(Math.abs(netT) / 100, 0, 1) * 20;
      $("net").setAttribute("class", `arrow ${netT > 0 ? "st-hot" : "st-cold"}`);
      $("net").setAttribute("d", L < 2 ? "" : netT > 0
        ? `M0 12V${12 + L}M-4 ${8 + L}L0 ${12 + L}L4 ${8 + L}`
        : (() => { const u = Math.min(L, y - 9 - 22); return u < 4 ? "" : `M20 -10V${-10 - u}M16 ${-6 - u}L20 ${-10 - u}L24 ${-6 - u}`; })());
      // מאזניים: נוטים לצד הכבד יותר (מלא בעודף של 60 טון ומעלה)
      const ang = clamp(netT / 60, -1, 1) * 14, rad = (ang * Math.PI) / 180;
      $("beam").setAttribute("transform", `rotate(${ang.toFixed(2)} 286 98)`);
      $("panB").setAttribute("transform", `translate(${(286 - 24 * Math.cos(rad)).toFixed(2)} ${(98 - 24 * Math.sin(rad)).toFixed(2)})`);
      $("panW").setAttribute("transform", `translate(${(286 + 24 * Math.cos(rad)).toFixed(2)} ${(98 + 24 * Math.sin(rad)).toFixed(2)})`);
      out(root, "tB", fmt(B / 1e6, 2)); out(root, "tW", fmt(m / 1e6, 2));

      // זרמי מים חולפים: הצוללת שטה קדימה (שמאלה)
      S.forEach((s, i) => {
        s.x += dt * 30;
        if (s.x > 236) { s.x = -14; }
        const yy = s.y;
        sEls[i].setAttribute("d", yy < SEA + 6 ? "" : `M${s.x.toFixed(1)} ${yy}h12`);
      });
      // בועות כשממלאים את המיכל: המים נכנסים מלמטה והאוויר בורח מלמעלה
      if (st.fill > st.lastFill + 1e-6) st.bubT = 1.2; // מילוי: פתחי האוורור למעלה משחררים אוויר
      st.lastFill = st.fill;
      st.bubT = Math.max(0, st.bubT - dt);
      bEls.forEach((c, i) => {
        const ph = (t * 0.9 + i / 6) % 1;
        c.setAttribute("cx", (-38 + (i % 2) * 74 + Math.sin(ph * 9 + i) * 2).toFixed(1));
        c.setAttribute("cy", (-6 - ph * 24).toFixed(1));
        c.setAttribute("opacity", st.bubT > 0 && submerged ? (1 - ph).toFixed(2) : "0");
      });

      const planesNote = submerged && st.delta !== 0 ? (st.delta > 0 ? " · ההגאים: מטה" : " · ההגאים: מעלה") : "";
      out(root, "note",
        st.d >= FLOOR - 0.01 ? "על הקרקעית: כבדה מהמים שהיא דוחקת"
        : !submerged && excessT < 0 ? "צפה: חלק מהגוף מעל המים"
        : Math.abs(excessT) < 0.5 ? "משקל שווה לציפה: מרחפת" + planesNote
        : excessT > 0 ? "כבדה מהמים: שוקעת" + planesNote
        : "קלה מהמים: עולה" + planesNote);
    });
  },
};
