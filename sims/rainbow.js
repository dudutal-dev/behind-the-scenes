// קשת בענן: קרן שמש אחת בתוך טיפת מים בחתך. משנים את גובה הפגיעה ורואים לאן הקרן חוזרת.
// מעקב קרניים מדויק לפי חוק סנל: sin i = b (גובה הפגיעה חלקי הרדיוס) · sin r = b / n
//   שבירה בכניסה, החזרה פנימית אחת, שבירה ביציאה. סטייה כוללת: D = 180° + 2i − 4r
//   זווית החזרה (בין כיוון השמש לקרן היוצאת): φ = 180° − D = 4r − 2i
//   φ מגיעה לשיא כאשר cos² i = (n² − 1) / 3; סביב השיא הקרניים מצטופפות, וזו "זווית הקשת".
// מקדמי השבירה של מים: אדום 1.331 · ירוק 1.335 · סגול 1.343
//   שיא: אדום 42.4° (ב־b = 0.86) · ירוק 41.8° · סגול 40.6°
// הצבעים כאן הם הנושא; הם נלקחים ממשתני הסגנון כדי להיראות טוב גם במצב כהה.
import { range, choice, readouts, wire, out, fmt, clamp } from "./kit.js";

const N = { red: 1.331, green: 1.335, violet: 1.343 };
const COL = { red: "var(--s-hot)", green: "var(--s-green)", violet: "var(--s-violet)" };
const KEYS = ["red", "green", "violet"];
const CX = 98, CY = 82, R = 56;
const DEG = 180 / Math.PI;
const PX = (b) => 212 + b * 96, PY = (phi) => 126 - phi * 2.1; // הגרף

const P = (a) => [CX + R * Math.cos(a), CY - R * Math.sin(a)];
function trace(b, n) {
  const i = Math.asin(b), r = Math.asin(b / n);
  const D = Math.PI + 2 * i - 4 * r;
  return {
    p1: P(Math.PI - i), p2: P(2 * r - i), p3: P(4 * r - i - Math.PI),
    dir: [Math.cos(D), Math.sin(D)], // כיוון היציאה בקואורדינטות המסך
    D, phi: (4 * r - 2 * i) * DEG,
  };
}
const peak = (n) => {
  const i = Math.acos(Math.sqrt((n * n - 1) / 3)), b = Math.sin(i);
  return { b, phi: trace(b, n).phi };
};
const PEAK = Object.fromEntries(KEYS.map((k) => [k, peak(N[k])]));
const curve = (n) => {
  let d = "";
  for (let k = 0; k <= 100; k++) d += `${k ? "L" : "M"}${PX(k / 100).toFixed(1)} ${PY(trace(k / 100, n).phi).toFixed(1)}`;
  return d;
};
const f1 = (p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;

export default {
  title: "כוונו קרן אל הטיפה",
  hint: "הזיזו את גובה הפגיעה וחפשו את נקודת המפנה: שם קרניים רבות יוצאות כמעט באותה זווית, כ־42° לאדום וכ־40.5° לסגול. מקדמי השבירה: אדום 1.331, ירוק 1.335, סגול 1.343.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="טיפת מים בחתך עם קרן אור שנשברת, מוחזרת ויוצאת, ולצדה גרף של זווית החזרה לפי גובה הפגיעה">
        <g id="fan"></g>
        <circle class="fl-cold-soft st-cold" stroke-width="2" cx="${CX}" cy="${CY}" r="${R}"/>
        <path class="thin" style="stroke-dasharray:2 4" d="M${CX - R - 30} ${CY}H${CX + R}"/>
        <text x="${CX + 22}" y="${CY - 6}" class="sm">טיפת מים</text>
        <path id="in" class="wire" style="stroke-width:2.6"/>
        <text id="sun" x="24" y="20" class="sm">אור שמש</text>
        <g id="rays"></g>
        <path id="ref" class="thin st-ink" style="stroke-dasharray:3 3"/>
        <path id="arc" class="thin st-ink" style="stroke-width:1.6"/>
        <text id="ang" class="lg"></text>
        <!-- גרף: זווית החזרה לפי גובה הפגיעה -->
        <text x="260" y="16" class="sm">זווית החזרה לפי גובה הפגיעה</text>
        <path class="thin st-ink" d="M212 ${PY(46)}V126H308"/>
        <path id="pk" class="thin" style="stroke-dasharray:2 3"/>
        <text id="pkl" x="198" class="sm"></text>
        <text x="204" y="129" class="sm">0°</text>
        ${KEYS.map((k) => `<path id="c-${k}" class="wire" style="stroke:${COL[k]};stroke-width:2" d="${curve(N[k])}"/>`).join("")}
        <path id="guide" class="thin st-ink" style="stroke-dasharray:3 3"/>
        ${KEYS.map((k) => `<circle id="d-${k}" r="4" class="st-ink" stroke-width="1.5" style="fill:${COL[k]}"/>`).join("")}
        <text x="212" y="138" class="sm">0</text>
        <text x="308" y="138" class="sm">1</text>
        <text x="260" y="138" class="sm">גובה הפגיעה</text>
        <text id="n1" x="260" y="160" class="sm"></text>
        <text id="n2" x="260" y="171" class="sm"></text>
        <text id="nl" x="260" y="190" class="sm"></text>
      </svg>
      ${readouts([{ id: "phi", label: "זווית החזרה" }, { id: "st", label: "ביחס לזווית הקשת" }])}
      ${range({ id: "b", label: "גובה", min: 0, max: 1, step: 0.01, value: 0.6 })}
      ${choice({ id: "col", label: "צבע", value: "all", options: [{ v: "red", label: "אדום" }, { v: "green", label: "ירוק" }, { v: "violet", label: "סגול" }, { v: "all", label: "הכול" }] })}`;

    const q = (s) => root.querySelector(s);
    const st = q("#st"), phiEl = q("#phi");
    st.style.fontSize = "17px"; st.style.lineHeight = "25px";
    phiEl.style.lineHeight = "25px";

    wire(root, ({ b, col }) => {
      const all = col === "all";
      const act = all ? KEYS : [col];
      const main = all ? "green" : col; // הצבע שלפיו מצוירים המניפה, הזווית וההערות
      const y0 = CY - R * b;
      out(root, "b-out", b.toFixed(2));

      // קרן נכנסת
      const inEl = q("#in");
      const p1 = trace(b, N[main]).p1;
      inEl.style.stroke = all ? "var(--s-elec)" : COL[col];
      inEl.setAttribute("d", `M4 ${y0.toFixed(1)}H${p1[0].toFixed(1)}M24 ${(y0 - 4).toFixed(1)}l6 4-6 4`);
      q("#sun").setAttribute("y", clamp(y0 - 7, 12, 190).toFixed(1));

      // הקרניים בתוך הטיפה והקרן היוצאת
      let rays = "";
      const T = {};
      for (const k of act) {
        const t = (T[k] = trace(b, N[k]));
        const L = Math.min(t.dir[0] < -1e-6 ? (t.p3[0] - 2) / -t.dir[0] : 999, t.dir[1] > 1e-6 ? (198 - t.p3[1]) / t.dir[1] : 999, 260);
        const e = [t.p3[0] + t.dir[0] * L, t.p3[1] + t.dir[1] * L];
        const m = [t.p3[0] + t.dir[0] * L * 0.62, t.p3[1] + t.dir[1] * L * 0.62];
        const [dx, dy] = t.dir;
        rays += `<path class="wire" style="stroke:${COL[k]};stroke-width:${all ? 1.3 : 2.2}" d="M${f1(t.p1)}L${f1(t.p2)}L${f1(t.p3)}L${f1(e)}M${f1([m[0] - dx * 6 + dy * 4, m[1] - dy * 6 - dx * 4])}L${f1(m)}L${f1([m[0] - dx * 6 - dy * 4, m[1] - dy * 6 + dx * 4])}"/>`;
      }
      q("#rays").innerHTML = rays;

      // מניפה חיוורת: לאן יוצאות קרניים מכל הגבהים. ליד זווית הקשת הן מצטופפות
      let fan = "";
      for (let k = 1; k <= 25; k++) {
        const t = trace(k / 25, N[main]);
        fan += `M${f1(t.p3)}l${(t.dir[0] * 260).toFixed(1)} ${(t.dir[1] * 260).toFixed(1)}`;
      }
      q("#fan").innerHTML = `<path class="thin" style="stroke:${COL[main]};stroke-width:1;opacity:.3" d="${fan}"/>`;

      // סימון הזווית בין כיוון השמש לקרן היוצאת
      const t = T[main], phi = t.phi;
      const v = [t.p3[0] + t.dir[0] * 14, t.p3[1] + t.dir[1] * 14];
      const ra = 30;
      q("#ref").setAttribute("d", `M${f1(v)}H${Math.max(4, v[0] - 52).toFixed(1)}`);
      q("#arc").setAttribute("d", phi > 1 ? `M${(v[0] - ra).toFixed(1)} ${v[1].toFixed(1)}A${ra} ${ra} 0 0 0 ${f1([v[0] + t.dir[0] * ra, v[1] + t.dir[1] * ra])}` : "");
      const ang = q("#ang");
      ang.setAttribute("x", clamp(v[0] - 44, 24, 300).toFixed(1));
      ang.setAttribute("y", (v[1] - 6).toFixed(1));
      ang.textContent = `${phi.toFixed(1)}°`;

      // גרף
      for (const k of KEYS) {
        const on = act.includes(k);
        q(`#c-${k}`).style.opacity = on ? 1 : 0.22;
        const d = q(`#d-${k}`);
        d.style.display = on ? "" : "none";
        if (on) { d.setAttribute("cx", PX(b)); d.setAttribute("cy", PY(T[k].phi)); }
      }
      const pk = PEAK[main];
      q("#guide").setAttribute("d", `M${PX(b)} 126V${PY(Math.max(...act.map((k) => T[k].phi))).toFixed(1)}`);
      q("#pk").setAttribute("d", `M212 ${PY(pk.phi).toFixed(1)}H${PX(pk.b).toFixed(1)}V126`);
      const pkl = q("#pkl");
      pkl.setAttribute("y", (PY(pk.phi) + 3).toFixed(1));
      pkl.textContent = `${pk.phi.toFixed(1)}°`;

      // נתונים והערות
      phiEl.textContent = all ? `\u2066${T.red.phi.toFixed(1)}°–${T.violet.phi.toFixed(1)}°\u2069` : `${phi.toFixed(1)}°`;
      phiEl.style.fontSize = all ? "17px" : "";
      phiEl.nextElementSibling.textContent = all ? "זווית החזרה: אדום עד סגול" : "זווית החזרה";
      const at = pk.phi - phi < 0.3;
      st.textContent = at ? "בזווית הקשת" : `${fmt(pk.phi - phi, 1)}° מתחתיה`;
      let n1, n2;
      if (at) { n1 = "נקודת המפנה: כאן הקרניים"; n2 = "מצטופפות, והאור חזק"; }
      else if (b < 0.08) { n1 = "פגיעה במרכז: הקרן חוזרת"; n2 = "כמעט ישר לאחור"; }
      else if (b < pk.b) { n1 = "פגיעה גבוהה יותר,"; n2 = "זווית חזרה גדולה יותר"; }
      else { n1 = "מעבר לשיא: הזווית"; n2 = "כבר קטנה בחזרה"; }
      out(root, "n1", n1); out(root, "n2", n2);
      out(root, "nl", all ? `מקדם שבירה ${N.red} עד ${N.violet}` : `מקדם שבירה ${N[col]}`);
    });
  },
};
