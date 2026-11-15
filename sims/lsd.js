// כמה זמן המולקולה נשארת בקולטן: בוחרים סרוטונין או LSD, מזיזים את הזמן, ורואים את תפוסת הקולטנים.
//
// המודל: אחרי שהמולקולה נקשרה, שיעור הקולטנים שעדיין תפוסים דועך מעריכית
//   O(t) = exp(-t / τ)   ·   τ = זמן השהייה בקולטן = 1/koff
// ערכי τ (מדידות קשירה במעבדה על קולטן 5-HT2A אנושי, Wacker ואחרים, Cell 2017):
//   LSD, קולטן רגיל:               τ ≈ 221 דקות
//   LSD, לולאת ה״מכסה״ משובשת:     τ ≈ 50 דקות (מוטציה שהגבירה את ניידות המכסה)
//   סרוטונין:                      τ ≈ 5 שניות — ערך להמחשה בלבד, לסדר הגודל:
//     סרוטונין משתחרר מהקולטן תוך שניות, והמוליך עצמו נשאב מהמרווח הסינפטי במהירות.
// ציר הזמן לוגריתמי (משנייה עד יממה) כדי ששני סדרי הגודל ייראו באותו גרף.
// פישוט: המודל מתאר רק את ההשתחררות מהקולטן, לא את פינוי החומר מהדם; משך החוויה בפועל
// נקבע משני הגורמים יחד.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const TAU = { sero: 5 / 3600, lsdLocked: 221 / 60, lsdLoose: 50 / 60 }; // בשעות
const T_MIN = 1 / 3600, T_MAX = 24; // שנייה עד יממה
const L0 = Math.log10(T_MIN), L1 = Math.log10(T_MAX), SPAN = L1 - L0;
const tOf = (s) => Math.pow(10, L0 + (s / 100) * SPAN); // מיקום המחוון (0-100) לשעות
const X = (t) => 172 + ((Math.log10(t) - L0) / SPAN) * 134;
const Y = (o) => 152 - o * 112;

const curve = (tau) => {
  let d = "";
  for (let s = 0; s <= 100; s += 1.25) {
    const t = tOf(s);
    d += (d ? "L" : "M") + X(t).toFixed(1) + " " + Y(Math.exp(-t / tau)).toFixed(1);
  }
  return d;
};

const timeText = (h) => {
  if (h < 1 / 60) return `${fmt(h * 3600, 0)} שניות`;
  if (h < 1) return `${fmt(h * 60, 0)} דקות`;
  return `${fmt(h, 1)} שעות`;
};

export default {
  title: "כמה זמן המולקולה נשארת בקולטן",
  hint: "הזיזו את הזמן ועברו בין החומרים: סרוטונין משתחרר מהקולטן תוך שניות, LSD נשאר שעות — המכסה נועל אותו. ערכי LSD ממדידות מעבדה; ערך הסרוטונין להמחשת סדר הגודל, והגרף מתאר את הקולטן בלבד, לא את פינוי החומר מהדם.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="קולטן סרוטונין עם כיס קשירה ומכסה, לצד גרף תפוסת הקולטנים לאורך הזמן">
        <!-- קרום התא -->
        <rect class="fl-soft" x="6" y="52" width="150" height="20"/>
        <g class="fl-line" id="heads"></g>
        <!-- הקולטן הגדול -->
        <g>
          <rect class="body" x="36" y="30" width="9" height="62" rx="4.5"/>
          <rect class="body" x="48" y="30" width="9" height="62" rx="4.5"/>
          <rect class="body" x="104" y="30" width="9" height="62" rx="4.5"/>
          <rect class="body" x="116" y="30" width="9" height="62" rx="4.5"/>
          <rect class="body" x="76" y="62" width="10" height="30" rx="5"/>
        </g>
        <!-- המכסה -->
        <path id="lidArc" class="wire st-warm" style="stroke-width:4" d="M58 30C64 18 98 18 104 30"/>
        <!-- המולקולה הקשורה -->
        <g id="bound">
          <circle class="fl-violet st-ink" style="stroke-width:1" cx="78" cy="56" r="5.5"/>
          <circle class="fl-violet st-ink" style="stroke-width:1" cx="87" cy="51" r="4"/>
        </g>
        <!-- מולקולות שהשתחררו -->
        <g id="free"></g>
        <text x="81" y="100" class="sm">כיס הקשירה</text>
        <!-- שורת קולטנים: כמה עדיין תפוסים -->
        <g id="row"></g>
        <text id="rowlab" x="81" y="190" class="sm">10 מתוך 10 תפוסים</text>
        <!-- גרף -->
        <path class="thin" d="M172 152H308M172 152V36"/>
        <path id="g-sero" class="wire st-cold" style="stroke-width:2;opacity:.45" d="${curve(TAU.sero)}"/>
        <path id="g-lsd" class="wire st-violet" style="stroke-width:2;opacity:.45" d="${curve(TAU.lsdLocked)}"/>
        <path id="mark" class="thin" style="stroke-dasharray:3 3" d="M172 36V152"/>
        <circle id="dot" class="fl-ink" cx="172" cy="40" r="3.5"/>
        <text x="${X(1 / 3600).toFixed(0)}" y="166" class="sm">שנייה</text>
        <text x="${X(1 / 60).toFixed(0)}" y="166" class="sm">דקה</text>
        <text x="${X(1).toFixed(0)}" y="166" class="sm">שעה</text>
        <text x="${X(24).toFixed(0) - 6}" y="166" class="sm">יממה</text>
        <text x="240" y="30" class="sm">תפוסת הקולטנים</text>
        <text id="note" x="81" y="124" class="sm"></text>
      </svg>
      ${readouts([{ id: "occ", label: "קולטנים תפוסים (%)" }, { id: "tt", label: "זמן מאז הקשירה" }])}
      ${choice({ id: "mol", label: "החומר", options: [{ v: "sero", label: "סרוטונין" }, { v: "lsd", label: "LSD" }], value: "lsd" })}
      ${choice({ id: "lid", label: "המכסה", options: [{ v: "shut", label: "נעול" }, { v: "loose", label: "רופף" }], value: "shut" })}
      ${range({ id: "t", label: "זמן", min: 0, max: 100, step: 1, value: 42 })}`;

    // ראשי השומנים של הקרום
    let heads = "";
    for (let x = 9; x <= 154; x += 6) heads += `<circle cx="${x}" cy="53.5" r="2.2"/><circle cx="${x}" cy="70.5" r="2.2"/>`;
    root.querySelector("#heads").innerHTML = heads;

    // שורה של עשרה קולטנים קטנים: כמה מהם עדיין תפוסים
    const N = 10;
    let row = "";
    for (let i = 0; i < N; i++) {
      const x = 12 + i * 14;
      row += `<g><rect class="body" style="stroke-width:1.2" x="${x}" y="148" width="10" height="26" rx="5"/>` +
        `<circle class="fl-violet st-ink dot${i}" style="stroke-width:.8" cx="${x + 5}" cy="156" r="3.2"/></g>`;
    }
    root.querySelector("#row").innerHTML = row;
    const dots = Array.from({ length: N }, (_, i) => root.querySelector(`.dot${i}`));

    const freeG = root.querySelector("#free");
    freeG.innerHTML = Array.from({ length: 5 }, () => `<circle class="fl-violet st-ink" style="stroke-width:1" r="4.5"/>`).join("");
    const frees = [...freeG.children];
    const seeds = frees.map((_, i) => ({ x: 70 + i * 11, p: i * 0.2 }));

    let occ = 1, freeAlpha = 0;

    wire(root, ({ mol, lid, t }) => {
      const hours = tOf(+t);
      const tau = mol === "sero" ? TAU.sero : lid === "loose" ? TAU.lsdLoose : TAU.lsdLocked;
      occ = Math.exp(-hours / tau);
      freeAlpha = 1 - occ;

      // גרף: מדגישים את החומר הנבחר, ומעדכנים את עקומת LSD לפי מצב המכסה
      root.querySelector("#g-lsd").setAttribute("d", curve(lid === "loose" ? TAU.lsdLoose : TAU.lsdLocked));
      root.querySelector("#g-lsd").style.opacity = mol === "lsd" ? "1" : ".3";
      root.querySelector("#g-sero").style.opacity = mol === "sero" ? "1" : ".3";
      const x = X(hours);
      root.querySelector("#mark").setAttribute("d", `M${x.toFixed(1)} 36V152`);
      root.querySelector("#dot").setAttribute("cx", x.toFixed(1));
      root.querySelector("#dot").setAttribute("cy", Y(occ).toFixed(1));

      // המכסה: נעול = קשת סגורה מעל הכיס; רופף = קשת פתוחה, וגם לסרוטונין הכיס פתוח
      const shut = mol === "lsd" && lid === "shut";
      root.querySelector("#lidArc").setAttribute("d", shut ? "M58 30C64 16 98 16 104 30" : "M58 30C62 20 72 14 80 13");
      root.querySelector("#lidArc").style.opacity = mol === "lsd" ? "1" : ".45";

      // המולקולה בכיס
      const b = root.querySelector("#bound");
      b.style.opacity = clamp(occ, 0.05, 1).toFixed(2);
      b.setAttribute("class", mol === "sero" ? "fl-cold" : "");
      b.querySelectorAll("circle").forEach((c) => c.setAttribute("class", `${mol === "sero" ? "fl-cold" : "fl-violet"} st-ink`));
      frees.forEach((c) => c.setAttribute("class", `${mol === "sero" ? "fl-cold" : "fl-violet"} st-ink`));

      // שורת הקולטנים
      const filled = Math.round(occ * N);
      dots.forEach((d, i) => {
        d.style.opacity = i < filled ? "1" : "0.08";
        d.setAttribute("fill", "");
        d.setAttribute("class", `${mol === "sero" ? "fl-cold" : "fl-violet"} st-ink dot${i}`);
      });
      out(root, "rowlab", `${filled} מתוך ${N} תפוסים`);

      out(root, "t-out", timeText(hours));
      out(root, "occ", fmt(occ * 100, occ * 100 < 10 ? 1 : 0));
      out(root, "tt", timeText(hours));
      out(root, "note",
        occ > 0.5 ? "רוב הקולטנים תפוסים" : occ > 0.05 ? "משתחרר לאט" : "הקולטנים התפנו");
    });

    loop(root, (dt, now) => {
      frees.forEach((c, i) => {
        const s = seeds[i];
        const ph = (now * 0.22 + s.p) % 1;
        c.setAttribute("cx", (s.x + Math.sin((now + i) * 1.3) * 5).toFixed(1));
        c.setAttribute("cy", (28 - ph * 22).toFixed(1));
        c.style.opacity = (freeAlpha * (1 - ph) * 0.9).toFixed(2);
      });
    });
  },
};
