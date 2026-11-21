// ליקויים: מזיזים את הירח לאורך מסלולו ומשנים את גובהו מעל מישור המסלול של כדור הארץ.
// הגדלים לרוחב מצוירים בקנה מידה זוויתי אחד, כפי שהם נראים מכדור הארץ וממרחק הירח (K פיקסלים למעלה):
//   רדיוס כדור הארץ כפי שהוא נראה מהירח: 0.95° · רדיוס הירח: 0.26° · רדיוס השמש: 0.27°
//   רדיוס הצל המלא של כדור הארץ במרחק הירח: 0.70° · נטיית מסלול הירח: עד כ־5° (5.1°)
// המרחקים (ארץ–ירח, ארץ–שמש) מקוצרים מאוד, ולכן הנטייה נראית בציור תלולה בהרבה משהיא באמת.
// הסטייה של הירח מהקו שמש–ארץ: s = √(β² + z²), β הגובה מעל המישור, z הסטייה לעומק (לפי המקום במסלול בציור).
//   ליקוי חמה (הירח בצד השמש): מלא אם s < 0.95° (קצה הצל המלא נוגע בכדור הארץ),
//     חלקי אם s < 0.95 + 0.27 + 0.26 = 1.48° (חצי־הצל נוגע בו).
//   ליקוי לבנה (הירח בצד הרחוק): מלא אם s < 0.70 − 0.26 = 0.44°, חלקי אם s < 0.70 + 0.26 = 0.96°.
// מה רואים: צופה במקום הטוב ביותר על כדור הארץ רואה את הירח רחוק ממרכז השמש ב־max(0, s − 0.95°).
// פישוטים: מרחק הירח קבוע (אין ליקוי טבעתי), וחצי־הצל של כדור הארץ, שכמעט אינו מורגש, אינו נחשב ליקוי.
import { range, readouts, wire, out, clamp } from "./kit.js";

const CYCLE = 29.5, TAU = 2 * Math.PI;
const K = 13; // פיקסלים למעלה
const R_E = 0.95, R_M = 0.26, R_S = 0.267, R_U = 0.70;
const EX = 222, EY = 100, A = 74, B = 14; // כדור הארץ, ומסלול הירח בפרספקטיבה
const RE = R_E * K, RM = 3.4;
const IX = 80, IY = 171; // מרכז החלון "מה רואים"
const LIT = "#f6e7a1", RED = "#b3452e", SKY = "#141830";
const f1 = (n) => n.toFixed(1);

function phaseName(deg) {
  if (deg < 12 || deg > 348) return "מולד";
  if (deg < 84) return "סהר מתמלא";
  if (deg <= 96) return "רבע ראשון";
  if (deg < 168) return "ירח מתמלא";
  if (deg <= 192) return "ירח מלא";
  if (deg < 264) return "ירח מתמעט";
  if (deg <= 276) return "רבע אחרון";
  return "סהר מתמעט";
}

export default {
  title: "העמידו שלושה גופים בקו",
  hint: "הביאו את הירח אל בין השמש לכדור הארץ, או אל מאחורי כדור הארץ, ואז שנו את הגובה שלו. ליקוי יש רק כשהוא גם במקום הנכון במסלול וגם כמעט בדיוק במישור, ולכן לא בכל חודש.",
  mount(root) {
    const orbit = (() => { let d = ""; for (let k = 0; k <= 60; k++) { const t = (k * TAU) / 60; d += `${k ? "L" : "M"}${f1(EX - A * Math.cos(t))} ${f1(EY + B * Math.sin(t))}`; } return d; })();
    const ue = RE - ((RE - R_U * K) / A) * (320 - EX); // חצי רוחב צל כדור הארץ בקצה הציור
    root.innerHTML = `
      <style>
        .ec-row{display:flex;gap:8px;margin-top:10px}
        .ec-row button{flex:1;min-height:42px;border-radius:13px;font-size:14.5px;font-weight:700;border:1px solid var(--line);background:var(--card);color:var(--ink)}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="השמש, כדור הארץ והירח במסלולו עם הצללים שלהם, וחלון קטן שמראה מה רואים מכדור הארץ">
        <defs><clipPath id="ecl-sim-moon"><circle cx="${IX}" cy="${IY}" r="11"/></clipPath></defs>
        <circle class="fl-elec st-ink" stroke-width="2" cx="-24" cy="${EY}" r="50"/>
        <path class="arrow st-elec" style="stroke-width:1.8" d="${[78, 100, 122].map((y) => `M34 ${y}h16m-5-3.500l5 3.500-5 3.500`).join("")}"/>
        <path class="thin" style="stroke-dasharray:4 4" d="M30 ${EY}H${EX - RE - 2}"/>
        <path class="thin" style="stroke-dasharray:2 4" d="${orbit}"/>
        <!-- הצל של כדור הארץ: מצטמצם ל־0.70° במרחק הירח -->
        <path fill="#000" opacity=".28" d="M${EX} ${f1(EY - RE)}L320 ${f1(EY - ue)}V${f1(EY + ue)}L${EX} ${f1(EY + RE)}z"/>
        <g id="back"></g>
        <g id="earth">
          <circle class="fl-cold" cx="${EX}" cy="${EY}" r="${f1(RE)}"/>
          <path class="fl-green" d="M${EX - 6} ${EY - 5}c3-3 7-2 7 1s-2 5-4 6-5-4-3-7zM${EX + 1} ${EY + 4}c2-1 5 0 4 3s-4 3-5 1 0-3 1-4z"/>
          <path fill="#000" opacity=".3" d="M${EX} ${f1(EY - RE)}a${f1(RE)} ${f1(RE)} 0 0 1 0 ${f1(2 * RE)}z"/>
          <circle class="fl-none st-ink" stroke-width="1.8" cx="${EX}" cy="${EY}" r="${f1(RE)}"/>
          <circle id="spot" fill="#000"/>
        </g>
        <g id="front"></g>
        <text id="n1" x="86" y="15" class="sm"></text>
        <text id="n2" x="86" y="26" class="sm"></text>
        <text x="238" y="194" class="sm">לא בקנה מידה: המרחקים קוצרו מאוד</text>
        <!-- מה רואים מכדור הארץ -->
        <rect class="fl-panel st-line" stroke-width="1.2" x="34" y="130" width="92" height="64" rx="9"/>
        <svg x="37" y="146" width="86" height="45" viewBox="37 146 86 45"><g id="view"></g></svg>
        <text id="vt" x="80" y="142" class="sm"></text>
      </svg>
      ${readouts([{ id: "what", label: "מה קורה" }, { id: "ph", label: "מופע הירח" }])}
      ${range({ id: "day", label: "יום בחודש", min: 0, max: CYCLE, step: 0.1, value: 0 })}
      ${range({ id: "h", label: "גובה הירח", min: -5, max: 5, step: 0.1, value: 2.4 })}
      <div class="ec-row">
        <button type="button" data-day="0">אל המולד</button>
        <button type="button" data-day="${CYCLE / 2}">אל הירח המלא</button>
      </div>`;

    const q = (s) => root.querySelector(s);
    const back = q("#back"), front = q("#front"), spot = q("#spot"), view = q("#view");
    for (const id of ["#what", "#ph"]) { q(id).style.fontSize = "17px"; q(id).style.lineHeight = "25px"; }
    root.querySelectorAll(".ec-row button").forEach((b) => b.addEventListener("click", () => {
      const s = q("#day"); s.value = b.dataset.day; s.dispatchEvent(new Event("input", { bubbles: true }));
    }));

    wire(root, ({ day, h }) => {
      const th = (TAU * day) / CYCLE, deg = (th * 360) / TAU, c = Math.cos(th), s = Math.sin(th);
      const z = (A * s) / K;                 // הסטייה לעומק, במעלות של הציור
      const sep = Math.hypot(z, h);          // הסטייה הכוללת מהקו שמש–ארץ
      const near = c > 0;                    // הירח בצד של השמש
      const mx = EX - A * c, fy = EY + B * s, my = fy - h * K;
      out(root, "day-out", `יום ${day.toFixed(1)}`);
      out(root, "h-out", `⁦${h > 0 ? "+" : h < 0 ? "−" : ""}${Math.abs(h).toFixed(1)}°⁩`);

      // מה קורה
      let what = "אין ליקוי", n1, n2;
      const solar = near && sep < R_E + R_S + R_M, solarTotal = near && sep < R_E;
      const lunar = !near && sep < R_U + R_M, lunarTotal = !near && sep < R_U - R_M;
      if (solarTotal) { what = "ליקוי חמה מלא"; n1 = "קצה הצל של הירח נוגע בכדור הארץ:"; n2 = "ברצועה צרה רואים ליקוי מלא"; }
      else if (solar) { what = "ליקוי חמה חלקי"; n1 = "רק חצי־הצל מגיע לכדור הארץ:"; n2 = "הירח מכסה חלק מהשמש"; }
      else if (lunarTotal) { what = "ליקוי לבנה מלא"; n1 = "הירח כולו בצל כדור הארץ, ומאדים"; n2 = "מאור שהתכופף באטמוספרה"; }
      else if (lunar) { what = "ליקוי לבנה חלקי"; n1 = "רק חלק מהירח נכנס"; n2 = "לצל של כדור הארץ"; }
      else if (near && Math.abs(z) < 1.48) { n1 = `מולד, אבל הירח ${h > 0 ? "גבוה" : "נמוך"} מדי:`; n2 = `הצל שלו עובר ${h > 0 ? "מעל " : "מתחת ל"}כדור הארץ`; }
      else if (!near && Math.abs(z) < 1.48) { n1 = "ירח מלא, אבל הוא עובר"; n2 = `${h > 0 ? "מעל ה" : "מתחת ל"}צל של כדור הארץ`; }
      else { n1 = "הירח אינו בקו אחד"; n2 = "עם השמש ועם כדור הארץ"; }
      out(root, "what", what); out(root, "ph", phaseName(deg));
      out(root, "n1", n1); out(root, "n2", n2);

      // הירח, הצל שלו והקו שמראה את גובהו מעל המישור
      const dip = clamp((R_U + R_M - sep) / (2 * R_M), 0, 1) * (near ? 0 : 1); // כמה מהירח בתוך צל כדור הארץ
      const pen = R_E > 0 ? (R_S + R_M) * K : 0; // חצי רוחב חצי־הצל במרחק כדור הארץ
      const g = `
        <path class="thin" style="stroke-width:1;stroke-dasharray:2 2" d="M${f1(mx)} ${f1(my)}V${f1(fy)}"/>
        <circle class="fl-line" cx="${f1(mx)}" cy="${f1(fy)}" r="1.6"/>
        <path fill="#000" opacity=".1" d="M${f1(mx)} ${f1(my - RM)}L${f1(mx + A + RE)} ${f1(my - pen * (1 + RE / A))}V${f1(my + pen * (1 + RE / A))}L${f1(mx)} ${f1(my + RM)}z"/>
        <path fill="#000" opacity=".5" d="M${f1(mx)} ${f1(my - RM)}L${f1(mx + A)} ${f1(my)}L${f1(mx)} ${f1(my + RM)}z"/>
        <circle style="fill:var(--s-dark)" cx="${f1(mx)}" cy="${f1(my)}" r="${RM}"/>
        <path fill="${LIT}" d="M${f1(mx)} ${f1(my - RM)}a${RM} ${RM} 0 0 0 0 ${2 * RM}z"/>
        <circle fill="${RED}" opacity="${f1(dip)}" cx="${f1(mx)}" cy="${f1(my)}" r="${RM}"/>
        <circle class="fl-none st-ink" stroke-width="1.3" cx="${f1(mx)}" cy="${f1(my)}" r="${RM}"/>`;
      (s < 0 ? back : front).innerHTML = g;
      (s < 0 ? front : back).innerHTML = "";

      // כתם הצל על כדור הארץ
      if (solar) {
        const dy = clamp(-h * K, -RE + 1, RE - 1), sx = EX - Math.sqrt(RE * RE - dy * dy) * 0.8;
        spot.setAttribute("cx", f1(sx)); spot.setAttribute("cy", f1(EY + dy * 0.9));
        spot.setAttribute("r", solarTotal ? 2 : 3.6); spot.setAttribute("opacity", solarTotal ? 0.85 : 0.3);
      } else spot.setAttribute("r", 0);

      // החלון: מה רואים מכדור הארץ
      let v;
      if (near) {
        const S1 = 13 / R_S, o = Math.max(0, sep - R_E) * S1, ux = sep ? z / sep : 0, uy = sep ? h / sep : 0;
        const cover = clamp(1 - o / 26, 0, 1);
        v = `<rect class="fl-cold-soft" x="35" y="146" width="90" height="47"/>
          <rect fill="#05060f" opacity="${f1(0.85 * cover * cover)}" x="35" y="146" width="90" height="47"/>
          ${cover > 0.999 ? `<circle fill="#fff" opacity=".28" cx="${IX}" cy="${IY}" r="20"/><circle fill="#fff" opacity=".55" cx="${IX}" cy="${IY}" r="16"/>` : ""}
          <circle class="fl-elec" cx="${IX}" cy="${IY}" r="13"/>
          <circle fill="#1b1d2b" opacity="${cover > 0 ? 1 : 0.22}" cx="${f1(IX + ux * o)}" cy="${f1(IY - uy * o)}" r="13.4"/>`;
        out(root, "vt", "השמש, מכדור הארץ");
      } else {
        const R = 11, S2 = R / R_M, ru = R_U * S2, wax = th <= Math.PI;
        const rx = Math.max(0.01, R * Math.abs(c));
        v = `<rect fill="${SKY}" x="35" y="146" width="90" height="47"/>
          <circle fill="#000" opacity=".35" cx="${f1(IX - z * S2)}" cy="${f1(IY + h * S2)}" r="${f1(ru)}"/>
          <circle fill="#3a3c4a" cx="${IX}" cy="${IY}" r="${R}"/>
          <path fill="${LIT}" transform="translate(${IX} ${IY})${wax ? "" : " scale(-1 1)"}" d="M0 ${-R}A${R} ${R} 0 0 1 0 ${R}A${f1(rx)} ${R} 0 0 1 0 ${-R}z"/>
          <circle fill="${RED}" clip-path="url(#ecl-sim-moon)" cx="${f1(IX - z * S2)}" cy="${f1(IY + h * S2)}" r="${f1(ru)}"/>
          <circle class="fl-none" stroke="#fff" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2 3" cx="${f1(IX - z * S2)}" cy="${f1(IY + h * S2)}" r="${f1(ru)}"/>`;
        out(root, "vt", "הירח, מכדור הארץ");
      }
      view.innerHTML = v;
    });
  },
};
