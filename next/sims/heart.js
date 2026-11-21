// הלב: משנים את הדופק ורואים את מחזור הפעימה בזמן אמת, עם רישום חשמלי (אק"ג) מסונכרן.
//
// המודל:
//   משך פעימה T = 60 / דופק (שניות). האיור פועם בקצב האמיתי.
//   האות יוצא מהקוצב בתחילת המחזור; העליות מתכווצות עד שהאות מגיע לחדרים, אחרי
//   PR = 0.19·T, תחום ל־0.10–0.16 שנייה (0.16 במנוחה).
//   התכווצות החדרים נמשכת Ts = 0.34·√T שנייה (לפי קשר בַּזֶט בין משך הפעימה למשך ההתכווצות):
//   0.31 שנייה ב־70 פעימות לדקה, 0.20 ב־180. כלומר כשהדופק עולה מתקצר בעיקר זמן המנוחה והמילוי.
//   נפח פעימה: 70 מ"ל עד דופק 70, עולה בקו ישר עד 100 מ"ל בדופק 120 ונשאר שם (מבוגר בריא לא מאומן).
//   תפוקת הלב = דופק × נפח פעימה: כ־4.9 ליטר לדקה במנוחה (70), 18 ליטר לדקה ב־180.
//   פעימות ביממה = דופק × 1,440.
// אק"ג סכמטי: גל P (העליות), קומפלקס QRS (החדרים) וגל T (התאוששות החדרים), כסכום של פעמוני גאוס.
// פישוטים: הדופק מתואר כאילו נובע ממאמץ; בדופק גבוה מאוד נפח הפעימה יורד מעט במציאות, וכאן לא.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const PRESET = { rest: 70, walk: 110, run: 160 };
const strokeVolume = (hr) => 70 + 30 * clamp((hr - 70) / 50, 0, 1); // מ"ל
const timing = (hr) => { const T = 60 / hr; return { T, pr: clamp(0.19 * T, 0.1, 0.16), ts: 0.34 * Math.sqrt(T) }; };
const bell = (t, c, w) => Math.exp(-0.5 * ((t - c) / w) ** 2);
const ecg = (t, { pr, ts }) =>
  0.14 * bell(t, pr * 0.35, pr * 0.16) - 0.12 * bell(t, pr - 0.018, 0.008) + bell(t, pr, 0.011) - 0.22 * bell(t, pr + 0.022, 0.009) + 0.28 * bell(t, pr + ts * 0.8, ts * 0.16);
const ease = (u) => { u = clamp(u, 0, 1); return u * u * (3 - 2 * u); };

// גיאומטריה: צד ימין של הלב משמאל לצופה, כמו באיור של הנושא
const CH = {
  ra: { x: 110, y: 34, w: 44, h: 34, cls: "fl-cold" }, la: { x: 166, y: 34, w: 44, h: 34, cls: "fl-hot" },
  rv: { x: 110, y: 78, w: 44, h: 54, cls: "fl-cold" }, lv: { x: 166, y: 78, w: 44, h: 54, cls: "fl-hot" },
};
const EX0 = 10, EW = 300, EY = 186, EA = 30, ESPAN = 3, EDT = 0.01, EN = ESPAN / EDT; // אק"ג: 3 שניות, דגימה כל 10 אלפיות שנייה

const chamber = (id, c, wall) => `
  <g id="${id}">
    <rect class="${c.cls}" x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="12"/>
    <rect class="fl-none st-ink" stroke-width="${wall}" x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="12"/>
  </g>`;
const pipe = (d, cls) => `<path class="pipe st-ink" style="stroke-width:11;stroke-linecap:butt" d="${d}"/><path class="pipe ${cls}" style="stroke-width:7.5;stroke-linecap:butt" d="${d}"/>`;

export default {
  title: "שנה את קצב הלב",
  hint: "הסדר לא משתנה אף פעם: עליות, ואז חדרים. כשהדופק עולה מתקצרת בעיקר המנוחה שבין הפעימות.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="ארבעת חללי הלב מתכווצים לפי הסדר, השסתומים נפתחים ונסגרים, ומתחת רישום חשמלי של הפעימות">
        <text id="note" x="160" y="15" class="sm"></text>
        <!-- כלי דם: כחול = דל בחמצן, אדום = עשיר בחמצן -->
        ${pipe("M22 51H110", "st-cold")}${pipe("M110 105H22", "st-cold")}
        ${pipe("M298 51H210", "st-hot")}${pipe("M210 105H298", "st-hot")}
        <path id="f-vc" class="flow" style="animation:none" d="M22 51H108"/>
        <path id="f-pa" class="flow" style="animation:none" d="M108 105H22"/>
        <path id="f-pv" class="flow" style="animation:none" d="M298 51H212"/>
        <path id="f-ao" class="flow" style="animation:none" d="M212 105H298"/>
        <text x="50" y="38">מהגוף</text>
        <text x="50" y="124">אל הריאות</text>
        <text x="270" y="38">מהריאות</text>
        <text x="270" y="124">אל הגוף</text>
        <!-- מעברים בין העליות לחדרים -->
        <rect class="fl-cold st-ink" stroke-width="1.5" x="124" y="66" width="16" height="14"/>
        <rect class="fl-hot st-ink" stroke-width="1.5" x="180" y="66" width="16" height="14"/>
        ${chamber("ra", CH.ra, 2)}${chamber("la", CH.la, 2)}${chamber("rv", CH.rv, 2.5)}${chamber("lv", CH.lv, 6)}
        <!-- שסתומים: שני עלים שנפתחים עם הזרם -->
        <g class="wire st-ink" style="stroke-width:2.4" id="valves">
          <path id="v-tri"/><path id="v-mit"/><path id="v-pul"/><path id="v-aor"/>
        </g>
        <circle id="sa" class="fl-elec st-ink" stroke-width="1.2" cx="119" cy="42" r="3.500"/>
        <text x="132" y="54" class="sm" style="stroke:none;fill:#fff">עלייה</text>
        <text x="188" y="54" class="sm" style="stroke:none;fill:#fff">עלייה</text>
        <text x="132" y="103" class="sm" style="stroke:none;fill:#fff">חדר</text>
        <text x="132" y="113" class="sm" style="stroke:none;fill:#fff">ימני</text>
        <text x="188" y="103" class="sm" style="stroke:none;fill:#fff">חדר</text>
        <text x="188" y="113" class="sm" style="stroke:none;fill:#fff">שמאלי</text>
        <text id="phase" x="160" y="147" class="lg"></text>
        <!-- אק"ג -->
        <path class="thin" style="stroke-dasharray:1 4" d="M${EX0} ${EY}H${EX0 + EW}"/>
        <path id="ecg" class="wire st-green" style="stroke-width:1.8;stroke-linejoin:round"/>
      </svg>
      ${readouts([{ id: "co", label: "ליטר דם בדקה" }, { id: "day", label: "פעימות ביממה" }])}
      ${range({ id: "hr", label: "דופק", min: 40, max: 180, value: 70 })}
      ${choice({ id: "state", label: "מצב", options: [{ v: "rest", label: "מנוחה" }, { v: "walk", label: "הליכה" }, { v: "run", label: "ריצה" }], value: "rest" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const slider = $("hr"), segs = [...root.querySelectorAll(".seg-btns button")];
    let hr = 70, tm = timing(70), sv = 70, lastState = "rest", lastHr = 70;
    let tau = 0, acc = 0; // tau: הזמן מתחילת הפעימה
    const buf = new Float32Array(EN);
    let head = 0;
    const off = { vc: 0, pa: 0, pv: 0, ao: 0 };

    wire(root, (v) => {
      if (v.state && v.state !== lastState) slider.value = PRESET[v.state]; // נלחץ כפתור מצב
      else if (+slider.value !== lastHr) { // המחוון הוזז: מסמנים מצב רק אם הדופק תואם אותו
        segs.forEach((b) => b.setAttribute("aria-pressed", String(PRESET[b.dataset.v] === +slider.value)));
      }
      lastState = segs.find((b) => b.getAttribute("aria-pressed") === "true")?.dataset.v;
      hr = lastHr = +slider.value;
      tm = timing(hr);
      sv = strokeVolume(hr);
      out(root, "hr-out", `${hr} לדקה`);
      out(root, "co", fmt((hr * sv) / 1000, 1));
      out(root, "day", fmt(hr * 1440, 0));
      out(root, "note", `בכל פעימה ${fmt(sv, 0)} מ״ל מכל חדר · ${
        hr < 55 ? "דופק אטי: שינה, או לב של ספורטאי"
        : hr <= 90 ? "דופק של מנוחה"
        : hr <= 135 ? "מאמץ מתון: כל פעימה גם גדולה יותר"
        : "מאמץ עצים: כמעט אין מנוחה בין הפעימות"}`);
    });

    const scaleAbout = (el, c, s) => el.setAttribute("transform", `translate(${c.x + c.w / 2} ${c.y + c.h / 2}) scale(${s.toFixed(3)}) translate(${-(c.x + c.w / 2)} ${-(c.y + c.h / 2)})`);
    // שסתום עם שני עלים סביב הנקודה (x,y): פתוח = העלים צמודים לדפנות ופונים עם הזרם, סגור = נפגשים באמצע
    const leaf = (x, y, dir, open, vertical) => {
      const g = 6.5, a = 1 - open; // a=1 סגור
      const tip = g * (1 - a * 0.92), fw = 6 * open + 1.5; // מרחק קצה העלה מהציר, והתקדמות עם הזרם
      return vertical
        ? `M${x - g} ${y}L${x - tip} ${y + dir * fw}M${x + g} ${y}L${x + tip} ${y + dir * fw}`
        : `M${x} ${y - g}L${x + dir * fw} ${y - tip}M${x} ${y + g}L${x + dir * fw} ${y + tip}`;
    };

    loop(root, (dt) => {
      // מתקדמים בצעדים של 10 אלפיות שנייה, כדי שהאק"ג יידגם באופן אחיד
      acc += dt;
      while (acc >= EDT) {
        acc -= EDT;
        tau += EDT;
        if (tau >= tm.T) tau -= tm.T;
        buf[head] = ecg(tau, tm);
        head = (head + 1) % EN;
      }
      const { T, pr, ts } = tm, t = tau;
      const sysEnd = pr + ts;
      // עליות: מתכווצות מתחילת המחזור עד שהאות מגיע לחדרים, ואז נרפות ומתמלאות
      const atr = t < pr ? ease(t / pr) : 1 - ease((t - pr) / 0.12);
      // חדרים: מתרוקנים בזמן ההתכווצות (הפליטה מתחילה מעט אחרי תחילתה), ומתמלאים בחזרה עד הפעימה הבאה
      const ej0 = pr + 0.04, eject = t >= ej0 && t < sysEnd;
      const sinceEnd = t >= sysEnd ? t - sysEnd : t + T - sysEnd; // המילוי נמשך גם בזמן התכווצות העליות של הפעימה הבאה
      const ven = eject ? ease((t - ej0) / (ts - 0.04)) : 1 - ease(sinceEnd / (T - sysEnd + ej0));
      const systole = t >= pr && t < sysEnd;
      const efScale = 0.24 * (sv / 100); // כיווץ גדול יותר כשנפח הפעימה גדול יותר
      scaleAbout($("ra"), CH.ra, 1 - 0.16 * atr); scaleAbout($("la"), CH.la, 1 - 0.16 * atr);
      scaleAbout($("rv"), CH.rv, 1 - efScale * ven); scaleAbout($("lv"), CH.lv, 1 - efScale * ven);

      // שסתומים: בין עלייה לחדר פתוחים כל עוד החדר נרפה; שסתומי היציאה פתוחים רק בזמן הפליטה
      const avOpen = systole ? 0 : t < pr ? 1 : ease((t - sysEnd) / 0.05);
      const outOpen = eject ? Math.min(ease((t - ej0) / 0.03), ease((sysEnd - t) / 0.03)) : 0;
      $("v-tri").setAttribute("d", leaf(132, 73, 1, avOpen, true));
      $("v-mit").setAttribute("d", leaf(188, 73, 1, avOpen, true));
      $("v-pul").setAttribute("d", leaf(108, 105, -1, outOpen, false));
      $("v-aor").setAttribute("d", leaf(212, 105, 1, outOpen, false));
      $("sa").setAttribute("r", t < 0.07 ? 6 : 3.5);

      // זרימה: בעורקים בפעימות (רק בזמן הפליטה), בוורידים זרם רציף. המרחק בכל פעימה יחסי לנפח הפעימה.
      const perBeat = 30 * (sv / 70);
      const pulse = eject ? (Math.PI / 2) * Math.sin((Math.PI * (t - ej0)) / (ts - 0.04)) / (ts - 0.04) : 0;
      off.pa -= dt * perBeat * pulse; off.ao -= dt * perBeat * pulse;
      off.vc -= (dt * perBeat) / T; off.pv -= (dt * perBeat) / T;
      for (const k in off) { off[k] %= 12; $(`f-${k}`).style.strokeDashoffset = off[k].toFixed(2); }

      out(root, "phase", t < pr ? "העליות מתכווצות" : systole ? (t - pr < 0.1 ? "״לאב״ · החדרים מתכווצים" : "החדרים מתכווצים") : t - sysEnd < 0.1 ? "״דאב״ · הלב נרפה ומתמלא" : "הלב נרפה ומתמלא");

      // אק"ג נגלל: הדגימה האחרונה בצד ימין
      let d = "";
      const sub = acc / EDT;
      for (let i = 0; i < EN; i++) {
        const x = EX0 + ((i + 1 - sub) / EN) * EW;
        if (x < EX0) continue;
        d += `${d ? "L" : "M"}${x.toFixed(1)} ${(EY - EA * buf[(head + i) % EN]).toFixed(1)}`;
      }
      $("ecg").setAttribute("d", d);
    });
  },
};
