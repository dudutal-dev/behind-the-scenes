// טרבושה: משנים את משקל משקולת הנגד, את יחס הזרועות ואת זווית השחרור, ורואים את מהירות האבן ואת הטווח.
// מודל (פשוט, בלי גרר אוויר):
//   קורה באורך L = 10 מ' על ציר בגובה 7 מ'. יחס זרועות R: זרוע קצרה a = L/(R+1), זרוע ארוכה L−a.
//   הזרוע הארוכה מסתובבת מ־230° (מטה ואחורה) עד 60° ברגע השחרור, ולכן המשקולת יורדת h = a·(sin50°+sin60°) ≈ 1.63·a.
//   קלע באורך 0.75 מהזרוע הארוכה. ברגע השחרור הקלע ניצב לכיוון הטיסה, ולכן גובה השחרור
//   y0 = 7 + (L−a)·sin60° + קלע·cos(זווית).
//   שימור אנרגיה: E = η·M·g·h − m·g·y0, עם η = 0.7 (חיכוך בציר, מסת הקורה, אוויר; מספר עגול סביר, לא מדוד).
//   חלוקת האנרגיה: גם המשקולת עדיין נעה ברגע השחרור. במנוף קשיח עם יחס אפקטיבי Re = (זרוע ארוכה + קלע)/a
//   חלקה של האבן באנרגיה הקינטית הוא m·Re² / (m·Re² + M). לכן הגדלת המשקולת מוסיפה פחות ופחות מהירות.
//   v = √(2·חלק·E / m). אבן m = 100 ק"ג, g = 9.81.
//   טווח מגובה y0: x = v·cosθ/g · (v·sinθ + √(v²·sin²θ + 2·g·y0)). הזווית המיטבית יוצאת מעט מתחת ל־45°, בגלל גובה השחרור.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const G = 9.81, L = 10, HP = 7, ETA = 0.7, M_STONE = 100, SLING = 0.75;
const RAD = Math.PI / 180;

function model(Mt, R, th) {
  const M = Mt * 1000, a = L / (R + 1), Ll = L - a, S = SLING * Ll, h = 1.632 * a, t = th * RAD;
  const y0 = HP + Ll * Math.sin(60 * RAD) + S * Math.cos(t);
  const Re = (Ll + S) / a;
  const share = (M_STONE * Re * Re) / (M_STONE * Re * Re + M);
  const E = ETA * M * G * h - M_STONE * G * y0;
  const v = Math.sqrt((2 * Math.max(0, share * E)) / M_STONE);
  const x = ((v * Math.cos(t)) / G) * (v * Math.sin(t) + Math.sqrt(v * v * Math.sin(t) ** 2 + 2 * G * y0));
  return { v, x, y0, E, a, Ll, S };
}
const bestAngle = (Mt, R) => {
  let b = { th: 45, x: 0 };
  for (let th = 10; th <= 80; th += 0.5) { const x = model(Mt, R, th).x; if (x > b.x) b = { th, x }; }
  return b;
};
const bestRatio = (Mt, th) => {
  let b = { R: 4, x: 0 };
  for (let R = 2; R <= 10; R += 0.5) { const x = model(Mt, R, th).x; if (x > b.x) b = { R, x }; }
  return b;
};

// גרף הטיסה: מטרים לפיקסלים
const OX = 130, GY = 182, K = 0.7;
const PX = (x) => OX + x * K, PY = (y) => GY - y * K;
const path = (v, th, y0) => {
  const t = th * RAD, vx = v * Math.cos(t), vy = v * Math.sin(t);
  const T = (vy + Math.sqrt(vy * vy + 2 * G * y0)) / G;
  let d = "";
  for (let i = 0; i <= 40; i++) {
    const s = (T * i) / 40, x = vx * s, y = Math.max(0, y0 + vy * s - 0.5 * G * s * s);
    d += `${i ? "L" : "M"}${PX(x).toFixed(1)} ${PY(y).toFixed(1)}`;
  }
  return { d, T, vx, vy };
};
// המכונה בפאנל השמאלי: 9 פיקסלים למטר (קנה מידה אחר מהגרף)
const MX = 84, MY = GY, MK = 9;
const P = (x, y) => [MX + x * MK, MY - y * MK];

export default {
  title: "כוונו את הטרבושה",
  hint: "הזווית הטובה ביותר קרובה ל־45°. הכפלת המשקולת אינה מכפילה את הטווח, ויחס הזרועות הטוב ביותר תלוי במשקולת.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="טרבושה ומסלול האבן לפי משקל המשקולת, יחס הזרועות וזווית השחרור">
        <text id="note" x="160" y="14" class="sm"></text>
        <text id="note2" x="160" y="27" class="sm"></text>
        <path class="thin st-ink" d="M6 ${GY}H314"/>
        <!-- צירי הגרף -->
        <path class="thin st-ink" style="stroke-width:1" d="${[50, 100, 150, 200, 250].map((x) => `M${PX(x)} ${GY}v4`).join("")}"/>
        ${[50, 100, 150, 200, 250].map((x) => `<text x="${PX(x)}" y="${GY + 14}" class="sm">${x}</text>`).join("")}
        <text x="${OX + 4}" y="${GY + 14}" class="sm">מ׳</text>
        <!-- מסלולים -->
        <path id="hgt" class="thin" style="stroke-dasharray:2 3"/>
        <path id="best" class="wire st-violet" style="stroke-width:1.4;stroke-dasharray:3 3;opacity:.8"/>
        <path id="traj" class="wire st-hot" style="stroke-width:1.8;stroke-dasharray:4 3"/>
        <path id="land" class="wire st-hot" style="stroke-width:2"/>
        <text id="landT" class="sm" y="${GY - 8}"></text>
        <circle id="stoneF" class="fl-line st-ink" stroke-width="1.3" r="3.200"/>
        <!-- המכונה -->
        <path class="body" d="M${MX - 24} ${GY}L${MX - 2} ${MY - HP * MK}H${MX + 2}L${MX + 24} ${GY}H${MX + 17}L${MX} ${MY - HP * MK + 13}L${MX - 17} ${GY}Z"/>
        <path id="sling" class="wire st-ink" style="stroke-width:1.2"/>
        <circle id="stoneS" class="fl-line st-ink" stroke-width="1.3" r="3.200"/>
        <path id="hang" class="wire st-ink" style="stroke-width:1.6"/>
        <rect id="cw" class="body" style="fill:var(--s-dark)" rx="1.500"/>
        <path id="beam" class="wire st-ink" style="stroke-width:4.500;stroke-linecap:round"/>
        <path id="beamIn" class="wire st-warm" style="stroke-width:2.200;stroke-linecap:round"/>
        <circle cx="${MX}" cy="${MY - HP * MK}" r="2.200" class="fl-ink"/>
      </svg>
      ${readouts([{ id: "spd", label: "מהירות (מ׳/ש׳)" }, { id: "rng", label: "טווח (מ׳)" }, { id: "rat", label: "משקולת:אבן" }])}
      ${range({ id: "M", label: "משקולת", min: 1, max: 20, step: 0.5, value: 8 })}
      ${range({ id: "R", label: "יחס זרועות", min: 2, max: 10, step: 0.5, value: 4 })}
      ${range({ id: "th", label: "זווית", min: 10, max: 80, step: 1, value: 45 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let st = null, clock = 0;

    wire(root, ({ M, R, th }) => {
      const r = model(M, R, th);
      const ba = bestAngle(M, R), br = bestRatio(M, th);
      const r2 = model(M * 2, R, th);
      out(root, "M-out", `${fmt(M, 1)} ט׳`);
      out(root, "R-out", `${fmt(R, 1)}:1`);
      out(root, "th-out", `${fmt(th, 0)}°`);
      out(root, "spd", fmt(r.v, 1));
      out(root, "rng", fmt(r.x, 0));
      out(root, "rat", `${fmt((M * 1000) / M_STONE, 0)}:1`);

      const p = path(r.v, th, r.y0), pb = path(Math.max(r.v, 0.01), ba.th, model(M, R, ba.th).y0);
      $("traj").setAttribute("d", p.d);
      $("best").setAttribute("d", Math.abs(ba.th - th) > 1.5 && r.v > 1 ? pb.d : "");
      $("hgt").setAttribute("d", `M${OX} ${GY}V${PY(r.y0)}`);
      $("land").setAttribute("d", `M${PX(r.x)} ${GY - 4}V${GY + 3}`);
      const lx = clamp(PX(r.x), OX + 18, 296);
      $("landT").setAttribute("x", lx);
      $("landT").textContent = `${fmt(r.x, 0)} מ׳`;

      let note;
      if (r.E <= 0 || r.v < 1) note = "המשקולת קלה מדי: נפילתה בקושי מרימה את האבן";
      else if (Math.abs(ba.th - th) > 5) note = `בזווית ${fmt(ba.th, 0)}° הטווח היה ${fmt(ba.x, 0)} מ׳ (הקו הסגול)`;
      else if (br.x > r.x * 1.04) note = `ביחס זרועות ${fmt(br.R, 1)}:1 הטווח היה ${fmt(br.x, 0)} מ׳`;
      else note = "קרוב לטווח המרבי של המשקולת הזו";
      out(root, "note", note);
      out(root, "note2", r.v >= 1 ? `משקולת כפולה, ${fmt(M * 2, 1)} טון: ${fmt(r2.x, 0)} מ׳, רק פי ${fmt(r2.x / r.x, 2)}` : "");

      st = { ...r, th, R, M, T: p.T, vx: p.vx, vy: p.vy };
      clock = 0;
    });

    // לולאת ההדמיה: המתנה, הנפה, טיסה (מואצת פי 2.5), המתנה
    const HOLD = 0.6, SWING = 0.7, PAUSE = 1.0, SPEEDUP = 2.5;
    const ease = (u) => u * u;
    const set = (el, a, v) => el.setAttribute(a, v);
    loop(root, (dt) => {
      if (!st) return;
      clock += dt;
      const fl = st.v > 1 ? st.T / SPEEDUP : 0;
      const cyc = HOLD + SWING + fl + PAUSE;
      const c = clock % cyc;
      // זווית הזרוע הארוכה (מעלות, נגד כיוון השעון מהאופק, ציר y למעלה)
      let phi, sdir, inSling = true;
      if (c < HOLD) { phi = 230; sdir = -15; }
      else if (c < HOLD + SWING) {
        const u = ease((c - HOLD) / SWING);
        phi = 230 - 170 * u;
        sdir = -15 + (st.th + 90 - 360 + 15) * u;
      } else {
        const u = Math.min(1, (c - HOLD - SWING) / 0.35);
        phi = 60 - 15 * u; sdir = st.th + 90 - 360 - 120 * u; inSling = false;
      }
      const pr = phi * RAD, a = st.a, Ll = st.Ll, S = st.S;
      const piv = [0, HP];
      const tip = [piv[0] + Ll * Math.cos(pr), piv[1] + Ll * Math.sin(pr)];
      const sh = [piv[0] - a * Math.cos(pr), piv[1] - a * Math.sin(pr)];
      const sd = sdir * RAD;
      let stn = [tip[0] + S * Math.cos(sd), tip[1] + S * Math.sin(sd)];
      if (inSling) stn = [stn[0], Math.max(0.5, stn[1])]; // האבן נגררת על הקרקע בתחילת ההנפה
      const [tx, ty] = P(...tip), [sx, sy] = P(...sh), [nx, ny] = P(...stn);
      const bd = `M${sx.toFixed(1)} ${sy.toFixed(1)}L${tx.toFixed(1)} ${ty.toFixed(1)}`;
      set($("beam"), "d", bd); set($("beamIn"), "d", bd);
      const side = 5 + 4.2 * Math.cbrt(st.M);
      set($("hang"), "d", `M${sx.toFixed(1)} ${sy.toFixed(1)}v5`);
      set($("cw"), "x", (sx - side / 2).toFixed(1)); set($("cw"), "y", (sy + 5).toFixed(1));
      set($("cw"), "width", side.toFixed(1)); set($("cw"), "height", side.toFixed(1));
      set($("sling"), "d", `M${tx.toFixed(1)} ${ty.toFixed(1)}L${nx.toFixed(1)} ${ny.toFixed(1)}`);
      $("stoneS").style.display = inSling ? "" : "none";
      set($("stoneS"), "cx", nx.toFixed(1)); set($("stoneS"), "cy", ny.toFixed(1));
      // האבן בטיסה
      const f = $("stoneF");
      if (!inSling && st.v > 1) {
        const s = Math.min(st.T, (c - HOLD - SWING) * SPEEDUP);
        const x = st.vx * s, y = Math.max(0, st.y0 + st.vy * s - 0.5 * G * s * s);
        f.style.display = "";
        set(f, "cx", PX(x).toFixed(1)); set(f, "cy", PY(y).toFixed(1));
      } else f.style.display = "none";
    });
  },
};
