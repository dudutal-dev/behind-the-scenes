// גאות ושפל: מבט מעל הקוטב הצפוני. מזיזים את הירח סביב כדור הארץ ורואים את שתי בליטות המים.
// גאות שיווי משקל: גובה המים בזווית φ הוא סכום של שני איברי cos(2θ), אחד לכל גוף מושך:
//   h(φ) = cos 2(φ − θ_ירח) + S · cos 2(φ − θ_שמש),   S = 0.46 (כוח הגאות של השמש ביחס לזה של הירח)
// המשרעת המשותפת: A = √(1 + S² + 2S · cos 2(θ_ירח − θ_שמש))
//   מולד וירח מלא: A = 1.46 (גאות גדולה) · רבע ראשון ואחרון: A = 0.54 (גאות קטנה)
//   הממוצע של A על פני חודש הוא 1.053, והטווח מוצג באחוזים ממנו: 139% בשיא, 51% בשפל.
// הירח מקיף נגד כיוון השעון במחזור מופעים של 29.5 ימים; השמש קבועה משמאל.
// החוף המסומן מסתובב עם כדור הארץ (נגד כיוון השעון), ובצהריים הוא פונה אל השמש.
// פישוטים: הבליטות בציור מוגזמות מאוד (באוקיינוס הפתוח מדובר בפחות ממטר); הירח אינו זז בתוך היממה
// המוצגת, ולכן שתי הגאויות רחוקות זו מזו 12 שעות בדיוק (במציאות 12 שעות ו־25 דקות); אין יבשות ואין עיכוב.
import { range, choice, readouts, wire, out, fmt, clamp, loop, drag } from "./kit.js";

const S_SUN = 0.46, CYCLE = 29.5, TAU = 2 * Math.PI;
const EX = 94, EY = 98, RE = 21, W0 = 32, AMP = 5.6, RO = 64;
const CX0 = 192, CW = 116, CY = 94, CS = 28; // הגרף: 24 שעות לרוחב, 28 פיקסלים ליחידת גובה
const LIT = "#f6e7a1";
const DAY_SEC = 10; // יממה אחת נמשכת 10 שניות
const MEAN = (() => { let s = 0; for (let k = 0; k < 360; k++) s += Math.sqrt(1 + S_SUN ** 2 + 2 * S_SUN * Math.cos((k * TAU) / 360)); return s / 360; })();

const hx = (h) => CX0 + (h / 24) * CW;

export default {
  title: "הזיזו את הירח סביב הים",
  hint: "גררו את הירח או הזיזו את המחוון. המים מתנפחים בקו של הירח, משני הצדדים. כשהשמש והירח בקו אחד הבליטות גדלות; כשהם בניצב, הן קטנות.",
  mount(root) {
    const rays = [70, 98, 126].map((y) => `M20 ${y}h-14m5-4l-5 4 5 4`).join("");
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="כדור הארץ מלמעלה עם שכבת מים שמתנפחת לעבר הירח ולצד הנגדי, ולצדו גרף של גובה הים בחוף אחד במשך יממה">
        <g id="sunrays"><path class="arrow st-elec" style="stroke-width:2" d="${rays}"/><text x="26" y="18" class="sm">אל השמש</text></g>
        <circle class="thin" style="stroke-dasharray:3 5" cx="${EX}" cy="${EY}" r="${RO}"/>
        <path id="axis" class="thin st-violet" style="stroke-dasharray:2 3"/>
        <path id="water" class="fl-cold st-ink" stroke-width="1.6" stroke-linejoin="round"/>
        <!-- כדור הארץ מסתובב; החוף המסומן צמוד אליו -->
        <g id="earth">
          <circle class="fl-green" cx="0" cy="0" r="${RE}"/>
          <path class="fl-panel" opacity=".55" d="M-12 -6c4-5 10-4 11 1s-3 8-7 8-7-5-4-9zM4 4c4-2 9 0 9 4s-4 7-8 6-4-8-1-10zM3 -15c3-1 6 1 5 4s-5 3-6 1 0-4 1-5z"/>
          <circle class="fl-none st-ink" stroke-width="1.6" r="${RE}"/>
        </g>
        <path style="fill:#000" opacity=".28" d="M${EX} ${EY - RE}a${RE} ${RE} 0 0 1 0 ${2 * RE}Z"/>
        <path id="depth" class="wire st-hot" style="stroke-width:3"/>
        <circle id="mark" class="fl-hot st-ink" stroke-width="1.4" r="3.6"/>
        <g id="moon">
          <circle style="fill:var(--s-dark)" r="8"/>
          <path fill="${LIT}" d="M0 -8a8 8 0 0 0 0 16Z"/>
          <circle class="fl-none st-ink" stroke-width="1.5" r="8"/>
          <circle id="grab" r="22" fill="transparent" style="cursor:grab"/>
        </g>
        <circle class="fl-hot st-ink" stroke-width="1.2" cx="134" cy="186" r="3.2"/>
        <text x="84" y="189" class="sm">החוף שאחריו עוקבים</text>
        <!-- גרף היממה -->
        <text x="${CX0 + CW / 2}" y="16" class="sm">גובה הים בחוף במשך יממה</text>
        <path class="thin" style="stroke-dasharray:2 4" d="M${CX0} ${CY}H${CX0 + CW}"/>
        <path id="band" class="thin" style="stroke-dasharray:1 4;stroke-width:1"/>
        <path class="thin st-ink" d="M${CX0} ${CY - 46}V${CY + 46}H${CX0 + CW}"/>
        <path class="thin st-ink" d="${[6, 12, 18, 24].map((h) => `M${hx(h)} ${CY + 46}v3`).join("")}"/>
        ${[0, 6, 12, 18, 24].map((h) => `<text x="${hx(h)}" y="${CY + 58}" class="sm">${h}</text>`).join("")}
        <text x="${CX0 + CW / 2}" y="${CY + 70}" class="sm">שעה ביממה</text>
        <path id="curve" class="wire st-cold" style="stroke-width:2.4"/>
        <path id="cur" class="thin st-hot" style="stroke-dasharray:3 3"/>
        <circle id="dot" class="fl-hot st-ink" stroke-width="1.4" r="4"/>
        <text id="n1" x="${CX0 + CW / 2}" y="181" class="sm"></text>
        <text id="n2" x="${CX0 + CW / 2}" y="192" class="sm"></text>
      </svg>
      ${readouts([{ id: "rng", label: "טווח הגאות, מהממוצע" }, { id: "type", label: "סוג הגאות" }])}
      ${range({ id: "day", label: "יום בחודש", min: 0, max: CYCLE, step: 0.1, value: 3.7 })}
      ${choice({ id: "sun", label: "מי מושך", value: "on", options: [{ v: "on", label: "ירח ושמש" }, { v: "off", label: "ירח בלבד" }] })}`;

    const q = (s) => root.querySelector(s);
    const svg = q("svg"), moon = q("#moon"), grab = q("#grab"), slider = q("#day");
    const earth = q("#earth"), mark = q("#mark"), depth = q("#depth"), dot = q("#dot"), cur = q("#cur");
    q("#type").style.fontSize = "18px"; q("#type").style.lineHeight = "25px";
    let thM = Math.PI, S = S_SUN, hour = 7;

    // גובה המים (ביחידות של גאות הירח לבדה) בזווית φ
    const height = (phi) => Math.cos(2 * (phi - thM)) + S * Math.cos(2 * (phi - Math.PI));
    const phiOf = (h) => (TAU * h) / 24; // בחצות החוף פונה הרחק מהשמש (זווית 0), בצהריים אל השמש

    const place = () => {
      const phi = phiOf(hour), c = Math.cos(phi), s = Math.sin(phi), hgt = height(phi);
      earth.setAttribute("transform", `translate(${EX} ${EY}) rotate(${(-phi * 360 / TAU).toFixed(1)})`);
      const mx = EX + RE * c, my = EY - RE * s, rw = W0 + AMP * hgt;
      mark.setAttribute("cx", mx.toFixed(1)); mark.setAttribute("cy", my.toFixed(1));
      depth.setAttribute("d", `M${mx.toFixed(1)} ${my.toFixed(1)}L${(EX + rw * c).toFixed(1)} ${(EY - rw * s).toFixed(1)}`);
      const x = hx(hour), y = CY - CS * hgt;
      dot.setAttribute("cx", x.toFixed(1)); dot.setAttribute("cy", y.toFixed(1));
      cur.setAttribute("d", `M${x.toFixed(1)} ${CY + 46}V${y.toFixed(1)}`);
    };

    wire(root, ({ day, sun }) => {
      S = sun === "on" ? S_SUN : 0;
      const el = (TAU * day) / CYCLE; // זווית ההתרחקות של הירח מהשמש
      thM = Math.PI + el;
      const mx = EX + RO * Math.cos(thM), my = EY - RO * Math.sin(thM);
      moon.setAttribute("transform", `translate(${mx.toFixed(1)} ${my.toFixed(1)})`);
      q("#axis").setAttribute("d", `M${mx.toFixed(1)} ${my.toFixed(1)}L${(2 * EX - mx).toFixed(1)} ${(2 * EY - my).toFixed(1)}`);
      q("#sunrays").style.opacity = S ? 1 : 0.25;
      // שכבת המים
      let d = "";
      for (let k = 0; k < 90; k++) {
        const phi = (k * TAU) / 90, r = W0 + AMP * height(phi);
        d += `${k ? "L" : "M"}${(EX + r * Math.cos(phi)).toFixed(1)} ${(EY - r * Math.sin(phi)).toFixed(1)}`;
      }
      q("#water").setAttribute("d", d + "Z");
      // גרף היממה
      let c = "";
      for (let k = 0; k <= 96; k++) c += `${k ? "L" : "M"}${hx(k / 4).toFixed(1)} ${(CY - CS * height(phiOf(k / 4))).toFixed(1)}`;
      q("#curve").setAttribute("d", c);
      const A = Math.sqrt(1 + S * S + 2 * S * Math.cos(2 * el));
      q("#band").setAttribute("d", `M${CX0} ${(CY - CS * A).toFixed(1)}h${CW}M${CX0} ${(CY + CS * A).toFixed(1)}h${CW}`);
      // נתונים
      const mean = S ? MEAN : 1;
      out(root, "rng", `${fmt((A / mean) * 100, 0)}%`);
      out(root, "day-out", `יום ${day.toFixed(1)}`);
      const deg = ((el * 360) / TAU) % 180, off = Math.min(deg, 180 - deg); // מרחק זוויתי מהקו שמש–ארץ
      const full = Math.abs(((el * 360) / TAU) - 180) < 90;
      let type, n1, n2;
      if (!S) { type = "קבועה"; n1 = "בלי השמש שתי הבליטות"; n2 = "שוות בכל ימות החודש"; }
      else if (off < 20) { type = "גאות גדולה"; n1 = `${full ? "ירח מלא" : "מולד"}: השמש והירח בקו אחד,`; n2 = "והמשיכות שלהם מצטרפות"; }
      else if (off > 70) { type = "גאות קטנה"; n1 = "חצי ירח: השמש מושכת בניצב"; n2 = "לירח ומקטינה את הבליטות"; }
      else { type = "ביניים"; n1 = "בין לבין: השמש מוסיפה"; n2 = "לבליטות רק חלק מכוחה"; }
      out(root, "type", type);
      out(root, "n1", n1); out(root, "n2", n2);
      place();
    });

    loop(root, (dt) => { hour = (hour + (dt * 24) / DAY_SEC) % 24; place(); });

    // גרירה: רק על הירח עצמו, כדי ששאר האיור ימשיך לאפשר גלילה של הדף
    const target = {
      style: grab.style,
      createSVGPoint: () => svg.createSVGPoint(),
      getScreenCTM: () => svg.getScreenCTM(),
      addEventListener: (t, f) => grab.addEventListener(t, f),
      setPointerCapture: (id) => grab.setPointerCapture(id),
    };
    drag(target, (p) => {
      let th = Math.atan2(-(p.y - EY), p.x - EX) - Math.PI;
      th = ((th % TAU) + TAU) % TAU;
      slider.value = clamp((th / TAU) * CYCLE, 0, CYCLE).toFixed(1);
      slider.dispatchEvent(new Event("input", { bubbles: true }));
    });
  },
};
