// ההריון: מזיזים את שבוע ההריון ורואים את העובר בגודלו האמיתי, ליד חפץ מוכר באותו קנה מידה.
//
// מקורות הנתונים (שבועות הריון, כלומר מהיום הראשון של הווסת האחרונה):
//   אורך ראש–עכוז (CRL), שבועות 6–13: נוסחת Robinson & Fleming (1975), שבה משתמשים לתארוך באולטרסאונד:
//     גיל ההריון בימים = 8.052·√CRL[מ"מ] + 23.73  ⇒  CRL = ((7·שבוע − 23.73) / 8.052)²
//     (16 מ"מ בשבוע 8, 56 מ"מ בשבוע 12).
//   אורך ראש–עכוז ומשקל משבוע 11 ואילך: הטבלה של Moore (The Developing Human), שמצוטטת גם בדפי
//     ההתפתחות של Mayo Clinic (למשל 61 מ"מ ו־14 גרם בשבוע 12, 120 מ"מ ו־110 גרם בשבוע 16,
//     1,300 גרם בשבוע 30). שם הגיל נמדד מההפריה, ולכן הוספנו שבועיים. בין הנקודות: אינטרפולציה,
//     ליניארית לאורך ולוגריתמית למשקל. בשבוע 40 זה נותן 36 ס"מ ו־3.4 ק"ג
//     (עקומת Hadlock 1991 נותנת 3.6 ק"ג; הערכים ממוצעים, והשונות בין עוברים כ־±13%).
//   שבועות 4–5: הערכה גסה (העובר עדיין דסקית של עשיריות מילימטר עד כ־2 מ"מ), ומשקל לפני שבוע 11
//     מוצג רק כטווח, כי אין לו מדידה אמינה.
// אבני דרך: פעימות לב באולטרסאונד נרתיקי מסביבות שבוע 6; תום בניית האיברים בסביבות שבוע 10;
//   תנועות מורגשות בין 16 ל־24 (NHS); תקופת סף החיות 22–25 (ACOG מגדיר 20 עד 25+6 כ"פריוויאבילי");
//   מועד מ־37. שלישים: עד 13, 14–27, 28 ואילך.
// חפצים להשוואה (מ"מ): גרגר אורז ~7, מטבע שקל 18 (קוטר), כרטיס אשראי 85.6×54 (ISO/IEC 7810),
//   טלפון ~150×72 (טיפוסי), דף A4 297×210.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const MOORE = [ // [שבוע הריון, אורך ראש–עכוז במ"מ, משקל בגרם]
  [11, 50, 8], [12, 61, 14], [14, 87, 45], [16, 120, 110], [18, 140, 200], [20, 160, 320], [22, 190, 460],
  [24, 210, 630], [26, 230, 820], [28, 250, 1000], [30, 270, 1300], [32, 280, 1700], [34, 300, 2100],
  [38, 340, 2900], [40, 360, 3400],
];
const lerpTable = (w, col, log) => {
  for (let i = 0; i < MOORE.length - 1; i++) {
    const [w0, ...a] = MOORE[i], [w1, ...b] = MOORE[i + 1];
    if (w <= w1) {
      const t = clamp((w - w0) / (w1 - w0), 0, 1);
      return log ? Math.exp(Math.log(a[col]) + t * (Math.log(b[col]) - Math.log(a[col]))) : a[col] + t * (b[col] - a[col]);
    }
  }
  return MOORE[MOORE.length - 1][col + 1];
};
const robinson = (w) => ((7 * w - 23.73) / 8.052) ** 2;
// אורך ראש–עכוז במ"מ
function crl(w) {
  if (w <= 4) return 0.3;
  if (w < 6) return 0.3 + (w - 4) * 0.95; // ~2 מ"מ בשבוע 5.5
  if (w <= 13) return robinson(w);
  if (w < 14) return robinson(13) + (w - 13) * (87 - robinson(13)); // מעבר רציף לטבלה
  return lerpTable(w, 0, false);
}
const weight = (w) => (w >= 11 ? lerpTable(w, 1, true) : null);

const MILESTONES = [
  [4, "השרשה: נוצר hCG, ובדיקה ביתית יכולה להגיב"],
  [5, "מתחילים להיווצר צינור העצבים והלב"],
  [6, "פעימות לב נראות באולטרסאונד נרתיקי"],
  [8, "נבנים כל האיברים העיקריים"],
  [11, "האיברים קיימים; מכאן בעיקר גדילה והבשלה"],
  [16, "בין שבוע 16 ל־24 מתחילים להרגיש תנועות"],
  [22, "סף החיות: לידה כאן רק בטיפול נמרץ ובסיכון גבוה"],
  [26, "צבירת שומן; הריאות מתחילות לייצר סורפקטנט"],
  [34, "הריאות קרובות להבשלה"],
  [37, "מועד: הריאות בשלות לנשימה"],
];
const milestone = (w) => MILESTONES.filter(([s]) => w >= s).pop()[1];
const trimester = (w) => (w <= 13 ? 1 : w <= 27 ? 2 : 3);

// חפצים, במ"מ. h = גובה כשהוא עומד על הקו.
const OBJECTS = [
  { len: 7, w: 7, h: 2.6, name: "גרגר אורז" },
  { len: 18, w: 18, h: 18, name: "מטבע של שקל" },
  { len: 85.6, w: 85.6, h: 54, name: "כרטיס אשראי" },
  { len: 150, w: 72, h: 150, name: "טלפון נייד" },
  { len: 297, w: 210, h: 297, name: "דף A4" },
];
const RANGES = [1, 2, 3, 5, 8, 10, 15, 20, 30, 40, 50, 60, 80]; // אורכי סרגל אפשריים, בס"מ
const X0 = 20, XW = 280, BASE = 172, FX = 222, OX = 92, MAXPX = 112;

// צללית העובר בתנוחת ישיבה מקופלת (כמו באיור הנושא). מהכתר (y=2) עד העכוז (y≈124): 122 יחידות.
const FETUS_D = "M50 2 C70 2 84 18 82 36 C81 44 77 49 74 52 C78 54 80 58 78 62 C76 66 76 68 80 70 C92 72 100 80 98 90 C96 98 90 100 88 104 C88 110 92 116 98 118 C102 120 102 126 96 127 C80 128 60 128 44 124 C26 120 14 104 14 84 C14 66 18 54 22 46 C16 38 18 20 30 10 C36 5 43 2 50 2Z";
// עובר מוקדם (שבועות 5–9): ראש גדול, גוף מקומר וזנב. מהכתר (y=2) עד העכוז (y≈112): 110 יחידות.
const EMB_BODY = "M52 44 C84 54 84 96 56 104 C44 108 34 100 32 90";
const EMB_TAIL = "M32 90 C26 84 28 76 36 76";

const fmtLen = (mm) => (mm < 1 ? "פחות ממ״מ" : mm < 10 ? `${fmt(mm, 1)} מ״מ` : `${fmt(mm / 10, 1)} ס״מ`);
const fmtW = (w, g) => (g == null ? (w < 8 ? "פחות מגרם" : "כמה גרמים") : g < 1000 ? `${fmt(g, 0)} גרם` : `${fmt(g / 1000, 2)} ק״ג`);

export default {
  title: "גדלו את העובר שבוע אחר שבוע",
  hint: "בעשרת השבועות הראשונים העובר כמעט לא נראה, אבל אז נבנים כל האיברים. במצב קנה מידה קבוע רואים כמה מהגדילה נדחסת לסוף.",
  mount(root) {
    const segs = [[0, 13, "שליש ראשון"], [13, 27, "שליש שני"], [27, 40, "שליש שלישי"]];
    const wx = (w) => X0 + (w / 40) * XW;
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="העובר בגודלו בשבוע הנבחר, ליד חפץ מוכר ובאותו קנה מידה, עם סרגל">
        ${segs.map(([a, b, t], i) => `<rect id="tri${i + 1}" x="${wx(a) + 1}" y="8" width="${wx(b) - wx(a) - 2}" height="13" rx="4" class="fl-soft"/>
          <text id="trt${i + 1}" class="sm" x="${(wx(a) + wx(b)) / 2}" y="18">${t}</text>`).join("")}
        <path id="wmark" class="fl-ink" d="M0 0l-4 -5h8z"/>
        <text id="mile" x="160" y="38"></text>
        <text id="objname" class="sm" x="${OX}" y="52"></text>
        <!-- החפץ להשוואה -->
        <g id="obj"></g>
        <!-- העובר -->
        <g id="fetus"></g>
        <circle id="heart" class="fl-hot" r="2" opacity="0"/>
        <!-- סימון אורך ראש–עכוז -->
        <path id="dim" class="thin st-violet" style="stroke-width:1.2"/>
        <text id="dimt" class="sm" style="fill:var(--s-violet);text-anchor:end"></text>
        <!-- סרגל -->
        <path class="thin st-ink" style="stroke-width:1.2" d="M${X0} ${BASE + 6}H${X0 + XW}"/>
        <path id="ticks" class="thin st-ink" style="stroke-width:1"/>
        <text id="r0" class="sm" x="${X0}" y="194">0</text>
        <text id="r1" class="sm" x="${X0 + XW / 2}" y="194"></text>
        <text id="r2" class="sm" x="${X0 + XW}" y="194"></text>
      </svg>
      ${readouts([{ id: "len", label: "אורך ראש–עכוז" }, { id: "wt", label: "משקל ממוצע" }])}
      ${range({ id: "wk", label: "שבוע", min: 4, max: 40, value: 12 })}
      ${choice({ id: "scale", label: "קנה מידה", options: [{ v: "fit", label: "מתאים את עצמו" }, { v: "fixed", label: "קבוע" }], value: "fit" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let heart = null; // מיקום הלב, בפיקסלים, ורדיוס בסיס

    wire(root, (v) => {
      const w = v.wk;
      const L = crl(w), g = weight(w);
      const obj = OBJECTS.reduce((a, b) => (Math.abs(Math.log(b.len / L)) < Math.abs(Math.log(a.len / L)) ? b : a));
      // קנה המידה: הסרגל הקטן ביותר שבו גם העובר וגם החפץ נכנסים לבמה
      const need = (Math.max(L, obj.h, obj.w) / 10) * (XW / MAXPX);
      const R = v.scale === "fixed" ? 80 : RANGES.find((r) => r >= need) || 80;
      const px = XW / (R * 10); // פיקסלים למ"מ

      out(root, "wk-out", `${w} שבועות`);
      out(root, "len", fmtLen(L));
      out(root, "wt", fmtW(w, g));
      out(root, "mile", milestone(w));
      const t = trimester(w);
      for (let i = 1; i <= 3; i++) {
        $(`tri${i}`).setAttribute("class", i === t ? "fl-violet" : "fl-soft");
        $(`trt${i}`).style.fill = i === t ? "#fff" : "";
        $(`trt${i}`).style.stroke = i === t ? "none" : "";
      }
      $("wmark").setAttribute("transform", `translate(${wx(w)} 30)`);

      // סרגל: עשר שנתות
      let d = "";
      for (let i = 0; i <= 10; i++) d += `M${X0 + (i * XW) / 10} ${BASE + 6}v${i % 5 ? 3 : 6}`;
      $("ticks").setAttribute("d", d);
      out(root, "r1", `${fmt(R / 2, 1)}`);
      out(root, "r2", `${fmt(R, 0)} ס״מ`);

      // החפץ
      const ow = obj.w * px, oh = obj.h * px, ox = OX - ow / 2, oy = BASE - oh;
      let o = "";
      if (obj.name === "גרגר אורז") o = `<ellipse class="fl-panel st-ink" stroke-width="1" cx="${OX}" cy="${BASE - oh / 2}" rx="${ow / 2}" ry="${oh / 2}"/>`;
      else if (obj.name === "מטבע של שקל") o = `<circle class="fl-soft st-ink" stroke-width="1.2" cx="${OX}" cy="${BASE - oh / 2}" r="${ow / 2}"/><circle class="fl-none st-line" stroke-width="1" cx="${OX}" cy="${BASE - oh / 2}" r="${ow * 0.4}"/>`;
      else if (obj.name === "כרטיס אשראי") o = `<rect class="fl-cold-soft st-ink" stroke-width="1.2" x="${ox}" y="${oy}" width="${ow}" height="${oh}" rx="${3 * px}"/><rect class="fl-elec" x="${ox + 9 * px}" y="${oy + 20 * px}" width="${11 * px}" height="${9 * px}" rx="${1.5 * px}"/>`;
      else if (obj.name === "טלפון נייד") o = `<rect class="fl-dark st-ink" stroke-width="1.2" x="${ox}" y="${oy}" width="${ow}" height="${oh}" rx="${9 * px}"/><rect class="fl-soft" x="${ox + 4 * px}" y="${oy + 10 * px}" width="${ow - 8 * px}" height="${oh - 20 * px}" rx="${3 * px}"/>`;
      else o = `<rect class="fl-panel st-ink" stroke-width="1.2" x="${ox}" y="${oy}" width="${ow}" height="${oh}"/>` +
        Array.from({ length: 9 }, (_, i) => `<path class="thin" style="stroke-width:${Math.max(0.6, 3 * px)}" d="M${ox + 25 * px} ${oy + (40 + i * 25) * px}h${(i === 8 ? 90 : 160) * px}"/>`).join("");
      $("obj").innerHTML = o;
      out(root, "objname", `${obj.name} · ${fmtLen(obj.len)}`);
      $("objname").setAttribute("y", Math.max(52, oy - 6).toFixed(1));

      // העובר: הצללית משתנה לפי השלב; גובה הציור = אורך ראש–עכוז בקנה המידה
      const Lpx = L * px;
      let f = "";
      heart = null;
      if (w < 5) {
        const r = Math.max(1.2, Lpx / 2);
        f = `<circle class="fl-warm st-ink" stroke-width=".8" cx="${FX}" cy="${BASE - r}" r="${r}"/>`;
      } else if (w < 10) {
        const k = Lpx / 110, sw = 1.4 / k; // קו מתאר של כ־1.4 פיקסלים בכל גודל
        const T = `translate(${FX - 56 * k} ${BASE - 112 * k}) scale(${k})`;
        f = `<g transform="${T}">
          <circle style="fill:var(--s-ink)" cx="40" cy="28" r="${26 + sw}"/>
          <path style="fill:none;stroke:var(--s-ink);stroke-linecap:round;stroke-width:${26 + 2 * sw}" d="${EMB_BODY}"/>
          <path style="fill:none;stroke:var(--s-ink);stroke-linecap:round;stroke-width:${8 + 2 * sw}" d="${EMB_TAIL}"/>
          <ellipse style="fill:var(--s-ink)" cx="80" cy="74" rx="${9 + sw}" ry="${5 + sw}" transform="rotate(60 80 74)"/>
          <ellipse style="fill:var(--s-ink)" cx="66" cy="110" rx="${9 + sw}" ry="${5 + sw}" transform="rotate(20 66 110)"/>
          <circle class="fl-warm" cx="40" cy="28" r="26"/>
          <path style="fill:none;stroke:var(--s-warm);stroke-linecap:round;stroke-width:26" d="${EMB_BODY}"/>
          <path style="fill:none;stroke:var(--s-warm);stroke-linecap:round;stroke-width:8" d="${EMB_TAIL}"/>
          <ellipse class="fl-warm" cx="80" cy="74" rx="9" ry="5" transform="rotate(60 80 74)"/>
          <ellipse class="fl-warm" cx="66" cy="110" rx="9" ry="5" transform="rotate(20 66 110)"/>
          ${w >= 7 ? `<circle class="fl-ink" cx="30" cy="26" r="3.4"/>` : ""}</g>`;
        if (w >= 6) heart = { x: FX - 56 * k + 64 * k, y: BASE - 112 * k + 62 * k, r: Math.max(1, 6 * k) };
      } else {
        const k = Lpx / 122;
        const T = `translate(${FX - 56 * k} ${BASE - 126 * k}) scale(${k})`;
        f = `<g transform="${T}"><path class="fl-warm st-ink" style="stroke-width:${1.5 / k}" d="${FETUS_D}"/>
          ${k > 0.25 ? `<path class="fl-none st-ink" style="stroke-width:${1 / k};opacity:.5" d="M46 114 C62 104 78 92 90 86 M58 60 C64 70 72 70 78 62"/><circle class="fl-ink" cx="66" cy="30" r="2.2"/>` : ""}</g>`;
        heart = { x: FX - 56 * k + 60 * k, y: BASE - 126 * k + 76 * k, r: Math.max(1, 3.5 * k) };
      }
      $("fetus").innerHTML = f;

      // קו מידה מהכתר עד העכוז
      const dx = FX + Math.max(40 * (Lpx / 110), 6) + 4, top = BASE - Lpx;
      $("dim").setAttribute("d", Lpx > 8 ? `M${dx} ${top}V${BASE}M${dx - 3} ${top}h6M${dx - 3} ${BASE}h6` : "");
      $("dimt").setAttribute("x", dx + 5);
      $("dimt").setAttribute("y", Math.max(BASE - Lpx / 2 + 3, 62));
      out(root, "dimt", Lpx > 8 ? "ראש–עכוז" : "");
    });

    // דופק העובר: כ־150 פעימות לדקה (2.5 בשנייה)
    loop(root, (dt, t) => {
      const h = $("heart");
      if (!heart) { h.setAttribute("opacity", "0"); return; }
      const beat = Math.pow(Math.max(0, Math.sin(t * 2.5 * Math.PI * 2)), 6);
      h.setAttribute("cx", heart.x.toFixed(1));
      h.setAttribute("cy", heart.y.toFixed(1));
      h.setAttribute("r", (heart.r * (1 + 0.45 * beat)).toFixed(2));
      h.setAttribute("opacity", "0.9");
    });
  },
};
