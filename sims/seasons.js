// עונות השנה: בוחרים תאריך וקו רוחב ורואים את גובה השמש בצהריים ואת אורך היום.
// נטיית השמש (דקלינציה) ביום N בשנה, נוסחת קופר:  δ = 23.44° · sin(360° · (284 + N) / 365)
// גובה השמש בצהריים בקו רוחב φ:                  h = 90° − |φ − δ|
// אורך היום:                                     (24/π) · arccos(−tan φ · tan δ)   (מוגבל ל-0 עד 24 שעות)
// עוצמת הקרינה על קרקע אופקית יחסית לקרן ניצבת:  sin h  (אותה אלומה נמרחת על שטח גדול פי 1/sin h)
// פישוטים: מסלול מעגלי, בלי שבירת האור באטמוספרה ובלי רוחב גלגל השמש (מוסיפים במציאות כ-7 דקות ליום).
import { range, choice, readouts, wire, out, fmt, clamp } from "./kit.js";

const TILT = 23.44, RAD = Math.PI / 180;
const OX = 84, OY = 92, RX = 60, RY = 40, ER = 13;   // המסלול וכדור הארץ בציור
const PX = 236, PY = 172, RS = 70;                    // נקודת הקרקע ורדיוס כיפת השמיים
const BW = 20, BL = 46;                               // רוחב האלומה ואורכה
const MONTHS = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dateOf = (n) => { let m = 0; while (n > DAYS[m]) n -= DAYS[m++]; return `${n} ב${MONTHS[m]}`; };
const season = (n, lat) => {
  if (Math.abs(lat) < 1) return "אין כמעט";
  const i = n < 79 || n >= 355 ? 0 : n < 172 ? 1 : n < 265 ? 2 : 3; // חורף, אביב, קיץ, סתיו בצפון
  return ["חורף", "אביב", "קיץ", "סתיו"][lat > 0 ? i : (i + 2) % 4];
};

export default {
  title: "שנו תאריך וקו רוחב",
  hint: "ביוני השמש בישראל גבוהה והיום ארוך; בדצמבר להפך, ובדרום הכול הפוך. בקו המשווה אורך היום כמעט אינו משתנה.",
  mount(root) {
    const t = TILT * RAD, ax = Math.sin(t), ay = -Math.cos(t); // כיוון הציר (הקוטב הצפוני), נטוי ימינה
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="כדור הארץ הנטוי במסלולו סביב השמש, ולצדו השמש בצהריים מעל הקרקע ואלומת האור שלה">
        <defs><clipPath id="sky"><rect x="158" y="56" width="156" height="${PY - 56}"/></clipPath></defs>
        <text x="84" y="16" class="sm">הציר נוטה 23°, תמיד לאותו כיוון</text>
        <ellipse class="thin" style="stroke-dasharray:3 5" cx="${OX}" cy="${OY}" rx="${RX}" ry="${RY}"/>
        <circle class="fl-elec st-warm" stroke-width="2" cx="${OX}" cy="${OY}" r="9"/>
        <text x="${OX - 32}" y="${OY + 3}" class="sm">יוני</text>
        <text x="${OX + 30}" y="${OY + 3}" class="sm">דצמבר</text>
        <text x="${OX + 36}" y="${OY - RY - 6}" class="sm">מרץ</text>
        <text x="${OX - 38}" y="${OY + RY + 12}" class="sm">ספטמבר</text>
        <g id="earth">
          <circle class="fl-cold" r="${ER}"/>
          <path id="night" style="fill:var(--s-dark)" opacity=".8" d="M0 ${-ER}A${ER} ${ER} 0 0 0 0 ${ER}Z"/>
          <path class="thin st-ink" style="stroke-width:1;opacity:.6" d="M${(-ER * Math.cos(t)).toFixed(1)} ${(-ER * Math.sin(t)).toFixed(1)}L${(ER * Math.cos(t)).toFixed(1)} ${(ER * Math.sin(t)).toFixed(1)}"/>
          <path id="latline" class="wire st-hot" style="stroke-width:2.5"/>
          <circle class="fl-none st-ink" stroke-width="1.5" r="${ER}"/>
          <path class="wire st-ink" style="stroke-width:1.5" d="M${(ax * ER).toFixed(1)} ${(ay * ER).toFixed(1)}L${(ax * (ER + 7)).toFixed(1)} ${(ay * (ER + 7)).toFixed(1)}M${(-ax * ER).toFixed(1)} ${(-ay * ER).toFixed(1)}L${(-ax * (ER + 7)).toFixed(1)} ${(-ay * (ER + 7)).toFixed(1)}"/>
        </g>
        <text id="n1" x="84" y="178" class="sm"></text>
        <text id="n2" x="84" y="190" class="sm"></text>
        <!-- פס אורך היום -->
        <text x="${PX}" y="17" class="sm">שעות האור ביממה</text>
        <rect style="fill:var(--s-dark)" x="176" y="23" width="120" height="11" rx="3"/>
        <rect id="daybar" class="fl-elec" y="23" height="11" rx="3"/>
        <rect class="fl-none st-ink" stroke-width="1.2" x="176" y="23" width="120" height="11" rx="3"/>
        <text x="178" y="46" class="sm">0</text><text x="${PX}" y="46" class="sm">12</text><text x="294" y="46" class="sm">24</text>
        <!-- הקרקע והשמש בצהריים -->
        <path class="thin" style="stroke-dasharray:2 5" d="M${PX - RS} ${PY}A${RS} ${RS} 0 0 1 ${PX + RS} ${PY}"/>
        <g clip-path="url(#sky)">
          <path id="beam" class="fl-elec" opacity=".38"/>
          <path id="rays" class="thin st-warm" style="stroke-width:1.2"/>
        </g>
        <path class="wire st-ink" style="stroke-width:2" d="M160 ${PY}H312"/>
        <path id="foot" class="wire st-hot" style="stroke-width:5"/>
        <path id="arc" class="thin st-ink"/>
        <circle id="sun" class="fl-elec st-warm" stroke-width="2" r="7"/>
        <text id="deg" class="lg"></text>
        <text x="176" y="187" class="sm">צפון</text><text x="296" y="187" class="sm">דרום</text>
      </svg>
      ${readouts([{ id: "el", label: "שמש בצהריים" }, { id: "len", label: "אורך היום" }, { id: "sea", label: "עונה" }])}
      ${range({ id: "d", label: "תאריך", min: 1, max: 365, step: 1, value: 172 })}
      ${choice({ id: "lat", label: "מקום", value: "32", options: [
        { v: "0", label: "קו המשווה" }, { v: "32", label: "ישראל" }, { v: "66.6", label: "חוג הקוטב" }, { v: "-32", label: "דרום 32°" }] })}`;

    const q = (s) => root.querySelector(s);
    const sea = q("#sea"); sea.style.fontSize = "18px"; sea.style.lineHeight = "25px";
    root.querySelectorAll(".seg-btns button").forEach((b) => { b.style.fontSize = "12.5px"; b.style.lineHeight = "1.15"; });

    wire(root, ({ d, lat }) => {
      const phi = +lat;
      const dec = TILT * Math.sin((2 * Math.PI * (284 + d)) / 365);
      const el = 90 - Math.abs(phi - dec);
      const hours = (24 / Math.PI) * Math.acos(clamp(-Math.tan(phi * RAD) * Math.tan(dec * RAD), -1, 1));
      const mins = Math.round(hours * 60);
      const sinEl = Math.sin(Math.max(0, el) * RAD);

      out(root, "d-out", dateOf(d));
      out(root, "el", `${fmt(Math.max(0, el), 1)}°`);
      out(root, "len", `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, "0")}`);
      out(root, "sea", season(d, phi));

      // כדור הארץ במסלול: ב-21 ביוני משמאל לשמש (הצפון נוטה אליה), ומשם נגד כיוון השעון
      const a = Math.PI + (2 * Math.PI * (d - 172)) / 365;
      const ex = OX + RX * Math.cos(a), ey = OY - RY * Math.sin(a);
      q("#earth").setAttribute("transform", `translate(${ex.toFixed(1)} ${ey.toFixed(1)})`);
      q("#night").setAttribute("transform", `rotate(${(Math.atan2(OY - ey, OX - ex) / RAD).toFixed(1)})`);
      // קו הרוחב שנבחר על הכדור
      const off = ER * Math.sin(phi * RAD), half = ER * Math.cos(phi * RAD);
      const lx = ax * off, ly = ay * off, cx = Math.cos(t) * half, cy = Math.sin(t) * half;
      q("#latline").setAttribute("d", `M${(lx - cx).toFixed(1)} ${(ly - cy).toFixed(1)}L${(lx + cx).toFixed(1)} ${(ly + cy).toFixed(1)}`);

      // פס אורך היום, ממורכז סביב הצהריים
      const w = 5 * hours;
      q("#daybar").setAttribute("x", PX - w / 2);
      q("#daybar").setAttribute("width", w);

      // השמש בצהריים: הזווית נמדדת מהאופק הדרומי (מימין); מעל 90° השמש בצד הצפוני
      const al = (90 - (phi - dec)) * RAD;
      const ux = Math.cos(al), uy = -Math.sin(al);
      const sx = PX + RS * ux, sy = PY + RS * uy;
      q("#sun").setAttribute("cx", sx); q("#sun").setAttribute("cy", sy);
      const deg = q("#deg");
      deg.textContent = `${fmt(Math.max(0, el), 0)}°`;
      deg.setAttribute("x", clamp(sx, 176, 298)); deg.setAttribute("y", sy - 12);
      const up = el > 0.5;
      if (up) {
        const f = BW / (2 * sinEl);
        q("#beam").setAttribute("d", `M${PX - f} ${PY}L${PX + f} ${PY}L${PX + f + BL * ux} ${PY + BL * uy}L${PX - f + BL * ux} ${PY + BL * uy}Z`);
        q("#rays").setAttribute("d", [-1, 0, 1].map((k) => `M${PX + k * f + BL * ux} ${PY + BL * uy}L${PX + k * f} ${PY}`).join(""));
        q("#foot").setAttribute("d", `M${Math.max(162, PX - f)} ${PY}H${Math.min(310, PX + f)}`);
        q("#foot").style.opacity = (0.2 + 0.8 * sinEl).toFixed(2);
        const r = 17, side = ux >= 0 ? 1 : -1;
        q("#arc").setAttribute("d", `M${PX + side * r} ${PY}A${r} ${r} 0 0 ${side > 0 ? 0 : 1} ${PX + r * ux} ${PY + r * uy}`);
      } else {
        ["beam", "rays", "foot", "arc"].forEach((id) => q(`#${id}`).setAttribute("d", ""));
      }

      out(root, "n1",
        mins === 0 ? "ליל קוטב: השמש אינה זורחת כלל"
        : mins >= 1440 ? "שמש חצות: היום נמשך 24 שעות"
        : el > 70 ? "קרניים תלולות: האנרגיה מרוכזת"
        : el < 40 ? "קרניים נמוכות: האנרגיה נמרחת"
        : "קרניים בזווית בינונית");
      out(root, "n2", up ? `אותה אלומה מכסה שטח גדול פי ${fmt(1 / sinEl, 1)}` : "");
    });
  },
};
