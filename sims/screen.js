// מסך הטלפון: שלושה תת־פיקסלים (אדום, ירוק, כחול) שהעין מערבבת לצבע אחד.
//
// המודל:
//   הצבע שהעין רואה = ערבוב חיבורי של שלושת הערוצים: rgb(R, G, B), כל ערוץ 0–255.
//   מספר הצירופים   = 256³ = 16,777,216.
//   OLED: כל תת־פיקסל מאיר בעצמו, והאור שהוא פולט (וההספק שהוא צורך) ∝ (ערך/255)^2.2 (עקומת גמא 2.2
//         של sRGB בקירוב). ההספק המוצג הוא הממוצע של שלושת הערוצים, באחוזים מלבן מלא. שחור = 0.
//   LCD:  התאורה האחורית דולקת תמיד במלואה (100%), והגביש הנוזלי רק חוסם אותה. תריס סגור עדיין מדליף
//         מעט אור. יחס ניגודיות אמיתי הוא בערך 1:1000 (דליפה של 0.1%); כאן הדליפה מוגזמת לרמה 16 מתוך 255
//         כדי שתיראה באיור. הפישוט אינו משנה את המגמה: שחור ב-LCD אינו שחור לגמרי.
import { range, choice, readouts, wire, out, fmt } from "./kit.js";

const GAMMA = 2.2;
const LEAK = 16; // רמת האור שדולפת בתצוגת LCD (מוגזם; ראה למעלה)
const MIXES = [
  { v: "yellow", label: "צהוב", rgb: [255, 255, 0] },
  { v: "cyan", label: "טורקיז", rgb: [0, 255, 255] },
  { v: "purple", label: "סגול", rgb: [255, 0, 255] },
  { v: "white", label: "לבן", rgb: [255, 255, 255] },
  { v: "black", label: "שחור", rgb: [0, 0, 0] },
];

// שם הצבע בעברית לפי גוון, רוויה ובהירות
function colourName(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (max < 24) return "שחור";
  if (min > 232) return "לבן";
  const light = (max + min) / 510;
  const sat = d / (255 - Math.abs(max + min - 255));
  if (sat < 0.14 || d < 16) return light > 0.7 ? "אפור בהיר" : light < 0.3 ? "אפור כהה" : "אפור";
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h = (h * 60 + 360) % 360;
  const base = h < 14 ? "אדום" : h < 42 ? "כתום" : h < 68 ? "צהוב" : h < 92 ? "ליים" : h < 160 ? "ירוק"
    : h < 195 ? "טורקיז" : h < 220 ? "תכלת" : h < 258 ? "כחול" : h < 318 ? "סגול" : h < 346 ? "ורוד" : "אדום";
  if (base === "כתום" && light < 0.3) return "חום";
  return light < 0.26 ? `${base} כהה` : light > 0.76 ? `${base} בהיר` : base;
}

const PX = 44, PY = 40, X0 = 16, Y0 = 24; // רשת של 3×3 פיקסלים מוגדלים

export default {
  title: "ערבב צבע משלושה",
  hint: "בכל פיקסל יש רק אדום, ירוק וכחול. הזז את המחוונים וראה איזה צבע העין מרכיבה מהם, ומה קורה לשחור במסך LCD לעומת OLED.",
  mount(root) {
    const cells = [];
    for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) cells.push([X0 + col * PX, Y0 + row * PY]);
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="תקריב של תשעה פיקסלים, בכל אחד תת־פיקסל אדום, ירוק וכחול, ולצידם הצבע שהעין רואה">
        <!-- תקריב של המסך -->
        <rect id="back" x="8" y="16" width="148" height="136" rx="12" fill="#fff" opacity="0"/>
        <rect x="11" y="19" width="142" height="130" rx="10" fill="#050506"/>
        ${cells.map(([x, y]) => `
          <rect class="sr" x="${x + 4}" y="${y + 3}" width="10" height="${PY - 6}" rx="2.500"/>
          <rect class="sg" x="${x + 17}" y="${y + 3}" width="10" height="${PY - 6}" rx="2.500"/>
          <rect class="sb" x="${x + 30}" y="${y + 3}" width="10" height="${PY - 6}" rx="2.500"/>`).join("")}
        <rect x="${X0 + PX + 1}" y="${Y0 + PY}" width="${PX - 2}" height="${PY}" rx="4" fill="none" stroke="#fff" stroke-width="1.200" stroke-dasharray="3 3"/>
        <text x="82" y="164" class="sm">תקריב: 9 פיקסלים (המסומן — פיקסל אחד)</text>
        <!-- העין מערבבת -->
        <path class="arrow st-ink" d="M160 84H176M171 78l6 6l-6 6"/>
        <!-- הצבע שרואים -->
        <rect class="fl-bg st-ink" stroke-width="2" x="184" y="19" width="124" height="130" rx="14"/>
        <rect id="sw" x="188" y="23" width="116" height="122" rx="10"/>
        <text x="246" y="164" class="sm">מה שהעין רואה</text>
        <text id="code" x="246" y="138" class="sm" direction="ltr"></text>
        <text id="note" x="160" y="186"></text>
      </svg>
      ${readouts([{ id: "name", label: "הצבע שנוצר" }, { id: "combos", label: "צירופים אפשריים" }])}
      ${range({ id: "r", label: "אדום", min: 0, max: 255, value: 255 })}
      ${range({ id: "g", label: "ירוק", min: 0, max: 255, value: 150 })}
      ${range({ id: "b", label: "כחול", min: 0, max: 255, value: 0 })}
      <div class="sim-ctl seg" style="grid-template-columns:1fr">
        <div class="seg-btns" data-id="mix" role="group" aria-label="תערובות מוכנות">
          ${MIXES.map((m) => `<button type="button" data-v="${m.v}" aria-pressed="false" style="font-size:13px">${m.label}</button>`).join("")}
        </div>
      </div>
      ${choice({ id: "tech", label: "סוג המסך", options: [{ v: "oled", label: "OLED" }, { v: "lcd", label: "LCD" }], value: "oled" })}`;

    const q = (s) => root.querySelector(s);
    const all = (s) => [...root.querySelectorAll(s)];
    const subs = { r: all(".sr"), g: all(".sg"), b: all(".sb") };
    const sliders = { r: q("#r"), g: q("#g"), b: q("#b") };
    const mixBtns = all('.seg-btns[data-id="mix"] button');

    // תערובת מוכנה: מציבה את שלושת המחוונים. המאזין הזה רץ לפני wire(), שמחשב מחדש מיד אחריו.
    q('.seg-btns[data-id="mix"]').addEventListener("click", (e) => {
      const m = MIXES.find((x) => x.v === e.target.closest("button")?.dataset.v);
      if (m) ["r", "g", "b"].forEach((k, i) => (sliders[k].value = m.rgb[i]));
    });

    wire(root, ({ r, g, b, tech }) => {
      const lcd = tech === "lcd";
      // מה שיוצא מהמסך: ב-LCD תריס סגור עדיין מדליף מעט אור
      const show = (v) => (lcd ? Math.round(LEAK + (v * (255 - LEAK)) / 255) : v);
      const R = show(r), G = show(g), B = show(b);
      subs.r.forEach((el) => el.setAttribute("fill", `rgb(${R},0,0)`));
      subs.g.forEach((el) => el.setAttribute("fill", `rgb(0,${G},0)`));
      subs.b.forEach((el) => el.setAttribute("fill", `rgb(0,0,${B})`));
      q("#sw").setAttribute("fill", `rgb(${R},${G},${B})`);
      q("#back").setAttribute("opacity", lcd ? 0.9 : 0);
      const lum = (0.2126 * R + 0.7152 * G + 0.0722 * B) / 255; // בהירות נתפסת, רק לבחירת צבע הכיתוב
      const code = q("#code");
      code.textContent = `${r} · ${g} · ${b}`;
      code.style.fill = lum > 0.5 ? "#000" : "#fff";
      code.style.stroke = "none";

      out(root, "r-out", String(r));
      out(root, "g-out", String(g));
      out(root, "b-out", String(b));
      out(root, "name", colourName(r, g, b));
      out(root, "combos", fmt(256 ** 3, 0));
      mixBtns.forEach((btn) => {
        const m = MIXES.find((x) => x.v === btn.dataset.v);
        btn.setAttribute("aria-pressed", String(m.rgb[0] === r && m.rgb[1] === g && m.rgb[2] === b));
      });

      // הספק האור: OLED ∝ ממוצע (ערך/255)^2.2 ; LCD קבוע
      const power = ((r / 255) ** GAMMA + (g / 255) ** GAMMA + (b / 255) ** GAMMA) / 3;
      const black = r + g + b === 0;
      out(root, "note", lcd
        ? (black ? "LCD: התריס סגור, אבל מעט אור דולף" : "LCD: התאורה האחורית דולקת ב־100% תמיד")
        : (black ? "OLED: הפיקסל כבוי — שחור מלא, אפס חשמל" : `OLED: הפיקסלים צורכים ${fmt(power * 100, 0)}% מהמרב`));
    });
  },
};
