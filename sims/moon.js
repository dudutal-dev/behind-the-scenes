// מופעי הירח: מזיזים את הירח סביב כדור הארץ ורואים איך הוא נראה מכאן.
// מבט מלמעלה (מעל הקוטב הצפוני): אור השמש מגיע משמאל, והירח מקיף נגד כיוון השעון.
// θ = זווית ההתרחקות מהשמש = 360° · יום / 29.5 (מחזור המופעים, 29.5 ימים).
// החלק המואר של הפנים שרואים: k = (1 − cos θ) / 2.
// קו הגבול בין אור לחושך נראה כחצי אליפסה שרוחבה R·|cos θ|.
// לצופה בחצי הכדור הצפוני: כשהירח מתמלא (θ < 180°) הצד הימני מואר, וכשהוא מתמעט, השמאלי.
import { range, readouts, wire, out, fmt, clamp, drag } from "./kit.js";

const CYCLE = 29.5;
const EX = 100, EY = 100, RO = 58;     // כדור הארץ ורדיוס מסלול הירח בציור
const MX = 252, MY = 94, MR = 40;      // הירח הגדול, כפי שנראה מהארץ
const LIT = "#f6e7a1";                 // הצד המואר (צבע הוא הנושא כאן)
const TAU = 2 * Math.PI;

function phase(deg) {
  if (deg < 8 || deg > 352) return ["מולד", "הצד המואר פונה הרחק מאיתנו,", "ולכן לא רואים את הירח"];
  if (deg < 84) return ["סהר מתמלא", "רואים רק פס צר", "מהחצי המואר"];
  if (deg <= 96) return ["רבע ראשון", "רואים חצי מהחצי המואר:", "רבע מהכדור כולו"];
  if (deg < 172) return ["ירח מתמלא", "רוב החצי המואר", "כבר פונה אלינו"];
  if (deg <= 188) return ["ירח מלא", "כל החצי המואר פונה אלינו.", "הירח זורח בשקיעה"];
  if (deg < 264) return ["ירח מתמעט", "החלק המואר שרואים", "הולך וקטן"];
  if (deg <= 276) return ["רבע אחרון", "שוב חצי,", "אבל עכשיו הצד השמאלי מואר"];
  return ["סהר מתמעט", "פס צר שנראה לפני הזריחה,", "רגע לפני המולד הבא"];
}

export default {
  title: "הזיזו את הירח במסלולו",
  hint: "גררו את הירח או הזיזו את המחוון. חצי מהירח מואר תמיד, זה שפונה אל השמש; מה שמשתנה הוא כמה מהחצי הזה פונה אלינו.",
  mount(root) {
    const rays = [36, 68, 100, 132, 164].map((y) => `M8 ${y}h17m-5-4l5 4-5 4`).join("");
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מבט מלמעלה על כדור הארץ והירח במסלולו, ולצדו הירח כפי שהוא נראה מכדור הארץ">
        <path class="arrow st-elec" style="stroke-width:2" d="${rays}"/>
        <text x="36" y="18" class="sm">אור השמש</text>
        <circle class="thin" style="stroke-dasharray:3 5" cx="${EX}" cy="${EY}" r="${RO}"/>
        <path id="sight" class="thin st-violet" style="stroke-dasharray:2 3"/>
        <!-- כדור הארץ: הצד שפונה לשמש מואר -->
        <circle class="fl-cold" cx="${EX}" cy="${EY}" r="11"/>
        <path style="fill:var(--s-dark)" d="M${EX} ${EY - 11}a11 11 0 0 1 0 22Z"/>
        <circle class="fl-none st-ink" stroke-width="2" cx="${EX}" cy="${EY}" r="11"/>
        <!-- הירח במסלול: החצי השמאלי (הפונה לשמש) מואר תמיד -->
        <g id="moon">
          <circle style="fill:var(--s-dark)" r="9"/>
          <path fill="${LIT}" d="M0 -9a9 9 0 0 0 0 18Z"/>
          <circle class="fl-none st-ink" stroke-width="1.5" r="9"/>
          <path id="near" class="wire st-violet" style="stroke-width:3"/>
          <circle id="grab" r="22" fill="transparent" style="cursor:grab"/>
        </g>
        <path class="wire st-violet" style="stroke-width:3" d="M22 188h12"/>
        <text x="88" y="191" class="sm">הצד של הירח שפונה אלינו</text>
        <!-- הירח כפי שנראה מהארץ -->
        <text x="${MX}" y="38">כך הוא נראה מכאן</text>
        <circle style="fill:var(--s-dark)" cx="${MX}" cy="${MY}" r="${MR}"/>
        <path id="lit" fill="${LIT}"/>
        <g class="fl-ink" opacity=".13">
          <circle cx="${MX - 14}" cy="${MY - 12}" r="9"/><circle cx="${MX + 12}" cy="${MY - 20}" r="5"/>
          <circle cx="${MX + 16}" cy="${MY + 8}" r="8"/><circle cx="${MX - 8}" cy="${MY + 18}" r="6"/>
          <circle cx="${MX - 26}" cy="${MY + 8}" r="4"/><circle cx="${MX + 2}" cy="${MY + 2}" r="3"/>
        </g>
        <circle class="fl-none st-ink" stroke-width="2" cx="${MX}" cy="${MY}" r="${MR}"/>
        <text id="n1" x="${MX}" y="152" class="sm"></text>
        <text id="n2" x="${MX}" y="163" class="sm"></text>
      </svg>
      ${readouts([{ id: "name", label: "מופע" }, { id: "pct", label: "מהפנים מואר" }])}
      ${range({ id: "day", label: "יום בחודש", min: 0, max: CYCLE, step: 0.1, value: 4.5 })}`;

    const q = (s) => root.querySelector(s);
    const svg = q("svg"), moon = q("#moon"), grab = q("#grab"), slider = q("#day");
    q("#name").style.fontSize = "19px"; q("#name").style.lineHeight = "25px";

    wire(root, ({ day }) => {
      const th = (TAU * day) / CYCLE, deg = (th * 180) / Math.PI;
      const k = (1 - Math.cos(th)) / 2;
      // מקום הירח במסלול: במולד הוא בצד השמש (שמאל), ומשם נגד כיוון השעון
      const a = Math.PI + th;
      const mx = EX + RO * Math.cos(a), my = EY - RO * Math.sin(a);
      moon.setAttribute("transform", `translate(${mx.toFixed(1)} ${my.toFixed(1)})`);
      // קשת על הצד שפונה אל כדור הארץ
      const ux = (EX - mx) / RO, uy = (EY - my) / RO, r = 12.5;
      q("#near").setAttribute("d", `M${(-uy * r).toFixed(1)} ${(ux * r).toFixed(1)}A${r} ${r} 0 0 0 ${(uy * r).toFixed(1)} ${(-ux * r).toFixed(1)}`);
      q("#sight").setAttribute("d", `M${EX - 13 * Math.cos(th)} ${EY + 13 * Math.sin(th)}L${mx + ux * 15} ${my + uy * 15}`);
      // החלק המואר בירח הגדול
      const waxing = th <= Math.PI;
      const c = Math.cos(th), rx = Math.max(0.01, MR * Math.abs(c));
      q("#lit").setAttribute("d", `M${MX} ${MY - MR}A${MR} ${MR} 0 0 1 ${MX} ${MY + MR}A${rx.toFixed(2)} ${MR} 0 0 ${c > 0 ? 0 : 1} ${MX} ${MY - MR}Z`);
      q("#lit").setAttribute("transform", waxing ? "" : `translate(${2 * MX} 0) scale(-1 1)`);
      const [name, n1, n2] = phase(deg);
      out(root, "name", name);
      out(root, "pct", `${fmt(k * 100, 0)}%`);
      out(root, "n1", n1); out(root, "n2", n2);
      out(root, "day-out", `יום ${day.toFixed(1)}`);
    });

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
