// התותח של ניוטון: יורים פגז אופקית מהר בגובה 200 ק״מ ורואים היכן הוא נופל, או שאינו נופל.
// כבידה לפי חוק הריבוע ההפוך: a = −GM·r/|r|³, בלי אוויר.
//   GM = 398,600.44 ק״מ³/שנ׳² · רדיוס כדור הארץ 6,371 ק״מ · גובה הירי 200 ק״מ (r0 = 6,571 ק״מ)
//   מהירות מעגלית בגובה הזה: √(GM/r0) = 7.79 ק״מ/ש (על פני הקרקע ממש: 7.91)
//   מהירות מילוט מהגובה הזה: √(2GM/r0) = 11.01 ק״מ/ש (מפני הקרקע: 11.19)
// המסלול מחושב באינטגרציית velocity-Verlet בצעד של שנייה (גדל עם המרחק), ומוצג בקנה מידה אמיתי.
// סוג המסלול נקבע אנליטית: אנרגיה ε = v²/2 − GM/r0; ε ≥ 0 מילוט; אחרת a = −GM/2ε,
// הקצה השני של האליפסה r2 = 2a − r0, וזמן ההקפה T = 2π·√(a³/GM).
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const GM = 398600.4418, RE = 6371, H = 200, R0 = RE + H;
const VC = Math.sqrt(GM / R0), VE = Math.sqrt((2 * GM) / R0);
const CX = 160, CY = 68, RP = 38, S = RP / RE; // פיקסלים לק״מ
const TAU = 2 * Math.PI;

// מיפוי לציור: קנה מידה אמיתי, ועוד "הגבהה" של עד 10 פיקסלים לגבהים נמוכים (אחרת 200 ק״מ הם פחות מפיקסל
// ומסלולי הנפילה נבלעים בקו המתאר של כדור הארץ). ההגבהה רוויה מעל כ-1,000 ק״מ, כך שצורת המסלולים הגדולים נשמרת.
const BUMP = 10, HS = 300;
const px = (x, y) => {
  const r = Math.hypot(x, y) || 1;
  const rp = RP + (r - RE) * S + BUMP * (1 - Math.exp(-Math.max(0, r - RE) / HS));
  return [CX + (x / r) * rp, CY - (y / r) * rp];
};
const pt = (x, y) => { const p = px(x, y); return `${p[0].toFixed(1)} ${p[1].toFixed(1)}`; };
const TOP = px(0, R0)[1]; // גובה נקודת הירי בציור

function simulate(v) {
  let x = 0, y = R0, vx = v, vy = 0, t = 0, ang = 0, pa = Math.PI / 2;
  const pts = [[x, y, 0]];
  let lx = x, ly = y, end = "out";
  const gap = 0.7 / S; // נקודה כל 0.7 פיקסל
  for (let i = 0; i < 4e6; i++) {
    const r = Math.hypot(x, y);
    const h = Math.min(60, Math.pow(r / R0, 1.5));
    let k = -GM / (r * r * r);
    vx += (k * x * h) / 2; vy += (k * y * h) / 2;
    const nx = x + vx * h, ny = y + vy * h, nr = Math.hypot(nx, ny);
    k = -GM / (nr * nr * nr);
    vx += (k * nx * h) / 2; vy += (k * ny * h) / 2;
    const a = Math.atan2(ny, nx);
    let da = pa - a; // התנועה עם כיוון השעון
    if (da > Math.PI) da -= TAU; else if (da < -Math.PI) da += TAU;
    if (nr <= RE) { // פגיעה בקרקע: אינטרפולציה אל פני השטח
      const f = (r - RE) / (r - nr);
      x += (nx - x) * f; y += (ny - y) * f; t += h * f; ang += da * f;
      pts.push([x, y, t]); end = "land"; break;
    }
    x = nx; y = ny; t += h; ang += da; pa = a;
    if (ang >= TAU) { pts.push([0, R0, t]); end = "orbit"; break; }
    if (nr * S > 230) { pts.push([x, y, t]); end = "out"; break; }
    if (Math.hypot(x - lx, y - ly) >= gap) { pts.push([x, y, t]); lx = x; ly = y; }
  }
  const eps = (v * v) / 2 - GM / R0;
  const sma = eps < 0 ? -GM / (2 * eps) : Infinity;
  const r2 = 2 * sma - R0;
  let kind;
  if (end === "land") kind = "land";
  else if (eps >= 0) kind = "escape";
  else kind = Math.abs(r2 - R0) / (r2 + R0) < 0.01 ? "circle" : "ellipse";
  return { v, pts, end, kind, T: t, dist: RE * ang, ang, r2, period: eps < 0 ? TAU * Math.sqrt(sma ** 3 / GM) : Infinity };
}

const dur = (s) => {
  const m = s / 60;
  if (m < 1) return `${fmt(s, 0)} שניות`;
  if (m < 120) return `${fmt(m, 0)} דקות`;
  if (m < 48 * 60) return `${fmt(m / 60, 1)} שעות`;
  return `${fmt(m / 1440, m / 1440 < 20 ? 1 : 0)} ימים`;
};
const pathOf = (pts, n = pts.length) => {
  let d = "";
  for (let i = 0; i < n; i++) d += `${i ? "L" : "M"}${pt(pts[i][0], pts[i][1])}`;
  return d;
};

export default {
  title: "ירו את התותח של ניוטון",
  hint: `ככל שיורים מהר יותר הפגז נופל רחוק יותר, כי כדור הארץ מתעקל מתחתיו. מגובה ${H} ק״מ, ב־${VC.toFixed(1)} ק״מ בשנייה הוא כבר אינו פוגע בקרקע, ומעל ${VE.toFixed(1)} הוא אינו חוזר.`,
  mount(root) {
    const btn = "flex:1;min-height:42px;border-radius:13px;font-size:15px;font-weight:700;border:1px solid var(--line);";
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="כדור הארץ ותותח על הר שיורה פגז אופקית; מסלול הפגז מצויר בזמן הטיסה">
        <circle class="fl-cold st-ink" stroke-width="2" cx="${CX}" cy="${CY}" r="${RP}"/>
        <path class="fl-green" opacity=".85" transform="translate(${CX} ${CY}) scale(${RP / 30}) translate(-160 -60)" d="M146 44c6-5 14-4 17 1 2 5-3 8-2 13 1 6-6 9-10 5-3-4 1-8-2-11-2-3-5-5-3-8zM171 62c5-2 10 1 10 6s-4 10-8 9c-4-2-1-6-3-9-1-2-2-5 1-6zM140 70c3-1 6 1 6 4s-2 5-4 4c-3-1-4-7-2-8z"/>
        <path class="fl-ink" d="M154 ${CY - RP + 0.8}L160 ${(TOP + 0.5).toFixed(1)} 166 ${CY - RP + 0.8}Z"/>
        <g id="old"></g>
        <path id="aim" class="arrow st-hot" style="stroke-width:1.8"/>
        <path id="cur" class="wire st-hot" style="stroke-width:2.2"/>
        <circle id="ball" class="fl-ink" r="3" cx="${CX}" cy="${TOP.toFixed(1)}"/>
        <text x="64" y="15" class="sm">תותח על הר בגובה ${H} ק״מ</text>
        <text x="64" y="26" class="sm">(ההר אינו בקנה מידה)</text>
        <text id="n1" x="66" y="179" class="sm"></text>
        <text id="n2" x="66" y="190" class="sm"></text>
      </svg>
      ${readouts([{ id: "res", label: "תוצאה" }, { id: "val", label: "זמן טיסה" }])}
      ${range({ id: "v", label: "מהירות", min: 0, max: 11.5, step: 0.1, value: 7.4 })}
      <div style="display:flex;gap:8px;margin-top:12px">
        <button type="button" id="fire" style="${btn}flex:2;background:linear-gradient(140deg,var(--c1),var(--c2));border-color:transparent;color:#fff">ירי</button>
        <button type="button" id="clear" style="${btn}background:var(--card);color:var(--muted)">ניקוי</button>
      </div>`;

    const q = (s) => root.querySelector(s);
    const old = q("#old"), cur = q("#cur"), ball = q("#ball"), aim = q("#aim");
    const res = q("#res"), val = q("#val"), valLabel = val.nextElementSibling;
    res.style.fontSize = "18px"; res.style.lineHeight = "25px";
    let speed = 7.4, shot = null; // shot: { sim, tp, i, d, done }

    const addOld = (sim) => {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("class", "thin");
      p.setAttribute("style", "stroke-width:1.2;opacity:.75");
      p.setAttribute("d", pathOf(sim.pts));
      old.appendChild(p);
      while (old.children.length > 6) old.firstChild.remove();
    };
    const place = (x, y) => { const p = px(x, y); ball.setAttribute("cx", p[0]); ball.setAttribute("cy", p[1]); };

    const finish = () => {
      const s = shot.sim;
      shot.done = true;
      cur.setAttribute("d", pathOf(s.pts));
      let n1 = "", n2 = "";
      if (s.kind === "land") {
        res.textContent = "נפל";
        val.textContent = `${fmt(s.dist, 0)} ק״מ`;
        valLabel.textContent = "מרחק מההר על הקרקע";
        n1 = `פגע בקרקע אחרי ${dur(s.T)}`;
        n2 = s.ang > Math.PI ? "כמעט השלים הקפה שלמה" : s.v < 0.05 ? "בלי מהירות הצידה: נפילה ישרה" : "האדמה התעקלה מעט מדי";
      } else if (s.kind === "escape") {
        res.textContent = "נמלט";
        val.textContent = `${fmt(Math.sqrt(Math.max(0, s.v * s.v - VE * VE)), 1)} ק״מ/ש`;
        valLabel.textContent = "המהירות שתישאר לו";
        n1 = "מהר ממהירות המילוט:";
        n2 = "כוח המשיכה לא יחזיר אותו";
      } else {
        res.textContent = s.kind === "circle" ? "מסלול מעגלי" : "מסלול אליפטי";
        val.textContent = dur(s.period);
        valLabel.textContent = "זמן הקפה";
        if (s.kind === "circle") { n1 = "נופל בלי הפסקה,"; n2 = "ומחטיא את כדור הארץ"; }
        else if (s.end === "out") { n1 = "יוצא מהתמונה וחוזר"; n2 = `אחרי ${dur(s.period)}`; }
        else { n1 = `מתרחק עד גובה ${fmt(s.r2 - RE, 0)} ק״מ`; n2 = "וחוזר אל נקודת הירי"; }
      }
      out(root, "n1", n1); out(root, "n2", n2);
    };

    const fire = (v) => {
      if (shot) addOld(shot.sim);
      const sim = simulate(v);
      // משך ההצגה: בערך פי 1,500 מהר מהמציאות, אבל לא פחות מ-1.2 שניות ולא יותר מ-12
      shot = { sim, tp: 0, i: 0, d: `M${pt(0, R0)}`, done: false, rate: sim.T / clamp(sim.T / 1500, 1.2, 12) };
      cur.setAttribute("d", "");
      res.textContent = "בטיסה…";
      val.textContent = "0 שניות";
      valLabel.textContent = "זמן טיסה";
      out(root, "n1", ""); out(root, "n2", "");
    };

    q("#fire").addEventListener("click", () => fire(speed));
    q("#clear").addEventListener("click", () => { old.innerHTML = ""; });

    wire(root, ({ v }) => {
      speed = v;
      out(root, "v-out", `${v.toFixed(1)} ק״מ/ש`);
      const x1 = CX + 5 + v * 3.2, y = TOP - 5;
      aim.setAttribute("d", v > 0 ? `M${CX + 3} ${y}H${x1}M${x1 - 4} ${y - 3}L${x1} ${y}L${x1 - 4} ${y + 3}` : "");
    });

    // שתי יריות חלשות לדוגמה, ואז ירייה ראשונה חיה
    addOld(simulate(5)); addOld(simulate(6.6));
    fire(speed);

    loop(root, (dt) => {
      if (!shot) return;
      const { sim } = shot, pts = sim.pts, last = pts.length - 1;
      shot.tp += dt * shot.rate;
      if (shot.done) {
        if (sim.end !== "orbit") return;
        if (shot.tp >= sim.T) { shot.tp %= sim.T; shot.i = 0; } // ממשיך להקיף
      } else if (shot.tp >= sim.T) {
        place(pts[last][0], pts[last][1]);
        finish();
        if (sim.end === "orbit") { shot.tp = 0; shot.i = 0; }
        else if (sim.end === "out") ball.setAttribute("cx", -50);
        return;
      }
      let moved = false;
      while (shot.i < last && pts[shot.i + 1][2] <= shot.tp) {
        shot.i++;
        if (!shot.done) { shot.d += `L${pt(pts[shot.i][0], pts[shot.i][1])}`; moved = true; }
      }
      const a = pts[shot.i], b = pts[Math.min(last, shot.i + 1)];
      const f = b[2] > a[2] ? clamp((shot.tp - a[2]) / (b[2] - a[2]), 0, 1) : 0;
      place(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f);
      if (!shot.done) {
        if (moved) cur.setAttribute("d", shot.d);
        val.textContent = dur(shot.tp);
      }
    });
  },
};
