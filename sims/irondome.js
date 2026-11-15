// כיפת ברזל: רקטה עפה בקשת, המכ״ם עוקב, המחשב חוזה את נקודת הפגיעה ומחליט אם ליירט.
// זהו מודל להמחשה בלבד, ולא האלגוריתם של המערכת האמיתית.
// הרקטה: תנועה בליסטית אידיאלית בלי אוויר, g = 9.81 מ׳/שנ׳²:
//   x(t) = v·cosθ·t,  y(t) = v·sinθ·t − g·t²/2
//   טווח R = v²·sin2θ / g · זמן טיסה T = 2·v·sinθ / g · גובה שיא H = v²·sin²θ / (2g)
// המכ״ם מוסיף נקודת מדידה כל T/20. אחרי 4 מדידות המחשב "מתאים" קשת (כאן היא ידועה במדויק, כי המודל אידיאלי)
// ובודק אם נקודת הפגיעה בתוך האזור המיושב. אם כן, משוגר מיירט מהסוללה.
// המיירט: קו ישר במהירות קבועה של 1,000 מ׳/שנ׳ (ערך להמחשה) אל נקודת יירוט חזויה —
//   הזמן t הראשון שבו |r(t) − B| = v_i·(t − t_launch), בתנאי שהרקטה עדיין בגובה 100 מ׳ לפחות.
// קנה מידה: אותו קנה מידה לאורך ולגובה, 10.4 פיקסלים לק״מ (0–28 ק״מ).
import { range, readouts, wire, out, fmt, clamp, loop, drag } from "./kit.js";

const G = 9.81, VI = 1000, MINH = 0.1, ZW = 8; // ק״מ: רוחב האזור המיושב
const S = 10.4, X0 = 12, Y0 = 178;
const px = (xkm) => X0 + xkm * S, py = (hkm) => Y0 - hkm * S;
const P = (x, h) => `${px(x).toFixed(1)} ${py(h).toFixed(1)}`;
const NS = "http://www.w3.org/2000/svg";

function flight(deg, v) {
  const th = (deg * Math.PI) / 180, vx = v * Math.cos(th), vy = v * Math.sin(th);
  const T = (2 * vy) / G;
  const at = (t) => [(vx * t) / 1000, (vy * t - (G * t * t) / 2) / 1000]; // ק״מ
  return { T, at, R: (vx * T) / 1000, H: (vy * vy) / (2 * G) / 1000 };
}
const arc = (f, t0, t1, n = 60) => {
  let d = "";
  for (let i = 0; i <= n; i++) { const [x, h] = f.at(t0 + ((t1 - t0) * i) / n); d += `${i ? "L" : "M"}${P(x, Math.max(0, h))}`; }
  return d;
};

export default {
  title: "החליטו מה ליירט",
  hint: "המחשב אינו מיירט כל רקטה: הוא חוזה היכן תיפול, ומשגר מיירט רק אם הנפילה בתוך האזור המיושב. הזיזו את האזור וראו מתי נחסך מיירט.",
  mount(root) {
    const btn = "min-height:42px;border-radius:13px;font-size:15px;font-weight:700;border:1px solid var(--line);";
    const ticks = [0, 5, 10, 15, 20, 25].map((k) => `<path class="thin" d="M${px(k)} ${Y0}v4"/><text x="${px(k) + (k === 25 ? -4 : k === 0 ? 4 : 0)}" y="${Y0 + 15}" class="sm">${k === 25 ? "25 ק״מ" : k}</text>`).join("");
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="רקטה בקשת בליסטית, אזור מיושב שאפשר להזיז, מכ״ם וסוללת יירוט">
        <g id="zone">
          <path id="zdome" class="fl-cold-soft st-cold" stroke-width="1.2" stroke-dasharray="4 3"/>
          <g id="city"></g>
          <rect id="zhit" x="0" y="${Y0 - 34}" width="${ZW * S}" height="40" fill="transparent" style="cursor:grab;touch-action:none"/>
        </g>
        <path class="thin" style="stroke-width:1.6" d="M6 ${Y0}H314"/>
        ${ticks}
        <path id="aim" class="arrow st-ink" style="stroke-width:1.6"/>
        <path class="fl-dark st-ink" stroke-width="1.5" d="M${X0 - 6} ${Y0}L${X0} ${Y0 - 9}L${X0 + 6} ${Y0}Z"/>
        <g id="bat">
          <rect class="fl-cold st-ink" stroke-width="1.5" x="-12" y="-14" width="9" height="10" rx="1" transform="rotate(-14 -7.500 -9)"/>
          <path class="st-ink" stroke-width="1.5" d="M-7.500 -4V0"/>
          <rect class="fl-dark st-ink" stroke-width="1.2" x="1" y="-11" width="12" height="7" rx="1" transform="rotate(-55 7 -4)"/>
        </g>
        <path id="ghost" class="thin" style="stroke-width:1;opacity:.6" stroke-dasharray="1 3"/>
        <path id="track" class="wire st-ink" style="stroke-width:1.4"/>
        <path id="pred" class="wire st-warm" style="stroke-width:1.6" stroke-dasharray="4 3"/>
        <path id="beam" class="wire st-cold" style="stroke-width:1" stroke-dasharray="2 3"/>
        <g id="dots" class="fl-elec st-ink" stroke-width=".6"></g>
        <path id="ix" class="st-hot" stroke-width="2.6" stroke-linecap="round"/>
        <path id="ipath" class="thin" stroke-dasharray="2 2"/>
        <g id="rk"><path class="fl-dark st-ink" stroke-width="1" d="M-6 -1.800H3L7 0L3 1.800H-6Z"/><path class="fl-ink" d="M-6 -1.800L-9 -3.500V3.500L-6 1.800Z"/></g>
        <g id="tm"><path class="fl-panel st-ink" stroke-width="1" d="M-5 -1.500H3L6 0L3 1.500H-5Z"/><path class="fl-warm" d="M-5 -1.200L-11 0L-5 1.200Z"/></g>
        <circle id="boom" class="fl-warm" r="0" opacity="0"/>
        <circle id="puff" class="fl-line" r="0" opacity="0"/>
        <text id="n1" x="160" y="16"></text>
        <text id="n2" x="160" y="30" class="sm"></text>
      </svg>
      ${readouts([{ id: "imp", label: "נקודת פגיעה צפויה" }, { id: "dec", label: "החלטה" }])}
      ${range({ id: "ang", label: "זווית", min: 20, max: 65, value: 55 })}
      ${range({ id: "spd", label: "מהירות", min: 200, max: 500, step: 10, value: 420 })}
      ${range({ id: "zc", label: "אזור מיושב", min: 4, max: 24, step: 0.5, value: 16 })}
      <div style="display:flex;margin-top:12px">
        <button type="button" id="fire" style="${btn}flex:1;background:linear-gradient(140deg,var(--c1),var(--c2));border-color:transparent;color:#fff">שיגור רקטה</button>
      </div>`;

    const q = (s) => root.querySelector(s);
    const svg = q("svg");
    const set = (el, a, v) => q(el).setAttribute(a, v);
    const dec = q("#dec"); dec.style.fontSize = "18px"; dec.style.lineHeight = "25px";
    let V = { ang: 55, spd: 420, zc: 16 }, shot = null;

    const bx = () => clamp(V.zc + ZW / 2 + 1.2, 1, 27.5); // הסוללה בקצה האזור
    const inZone = (x) => Math.abs(x - V.zc) <= ZW / 2;

    const drawZone = () => {
      const a = px(V.zc - ZW / 2), b = px(V.zc + ZW / 2), m = (a + b) / 2;
      set("#zdome", "d", `M${a} ${Y0}V${Y0 - 20}Q${m} ${Y0 - 40} ${b} ${Y0 - 20}V${Y0}Z`);
      set("#zhit", "x", a);
      const w = (b - a) / 6;
      q("#city").innerHTML = [10, 16, 8, 13, 18, 11].map((h, i) => `<rect class="body" style="stroke-width:1.2" x="${(a + 3 + i * w * 0.93).toFixed(1)}" y="${Y0 - h}" width="${(w * 0.75).toFixed(1)}" height="${h}" rx="1"/>`).join("");
      set("#bat", "transform", `translate(${px(bx()).toFixed(1)} ${Y0})`);
    };
    const placeAt = (id, x, h, ang) => set(id, "transform", `translate(${P(x, h)}) rotate(${ang.toFixed(1)})`);
    const hide = (id) => set(id, "transform", "translate(-50 -50)");
    const note = (a, b = "") => { out(root, "n1", a); out(root, "n2", b); };

    const reset = () => {
      ["#track", "#pred", "#beam", "#ipath", "#ix", "#ghost"].forEach((s) => set(s, "d", ""));
      q("#dots").innerHTML = "";
      hide("#rk"); hide("#tm");
      set("#boom", "opacity", 0); set("#puff", "opacity", 0);
    };

    const fire = () => {
      reset();
      const f = flight(V.ang, V.spd);
      shot = { f, t: 0, rate: f.T / clamp(f.T / 9, 4, 9), dots: 0, decided: false, threat: false, ti: null, tl: 0, B: bx(), done: false, end: 0 };
      out(root, "imp", "—"); dec.textContent = "עוקב…";
      note("המכ״ם עוקב אחרי הרקטה");
    };

    const decide = (s) => {
      s.decided = true;
      const { f } = s;
      const hit = f.R;
      out(root, "imp", `${fmt(hit, 1)} ק״מ`);
      set("#pred", "d", arc(f, s.t, f.T));
      const X = px(hit), Y = Y0 - 4;
      set("#ix", "d", `M${X - 4} ${Y - 4}l8 8M${X + 4} ${Y - 4}l-8 8`);
      s.threat = inZone(hit);
      s.B = bx();
      if (!s.threat) {
        dec.textContent = "לא מיירטים";
        note("החיזוי: נפילה בשטח פתוח", "המיירט נחסך");
        q("#ix").setAttribute("class", "st-green");
        return;
      }
      q("#ix").setAttribute("class", "st-hot");
      // נקודת יירוט חזויה: הזמן הראשון שבו המיירט, שיוצא עכשיו, מגיע לאותה נקודה עם הרקטה
      s.tl = s.t;
      for (let t = s.t + 0.05; t <= f.T; t += 0.05) {
        const [x, h] = f.at(t);
        if (h < MINH) continue;
        if (VI * (t - s.tl) >= Math.hypot(x - s.B - 0.7, h - 0.8) * 1000) { s.ti = t; break; }
      }
      if (s.ti == null) {
        dec.textContent = "מאיימת";
        note("הנפילה באזור המיושב, אבל במודל הזה", "המיירט לא מגיע בזמן");
        return;
      }
      const [xi, hi] = f.at(s.ti);
      s.pi = [xi, hi];
      set("#ipath", "d", `M${P(s.B + 0.7, 0.8)}L${P(xi, hi)}`);
      dec.textContent = "מיירטים";
      note("החיזוי: נפילה באזור המיושב", `מיירט יוצא אל נקודת מפגש בגובה ${fmt(hi, 1)} ק״מ`);
    };

    wire(root, (v) => {
      V = v;
      out(root, "ang-out", `${v.ang}°`);
      out(root, "spd-out", `${v.spd} מ׳/ש`);
      out(root, "zc-out", `${fmt(v.zc, 1)} ק״מ`);
      drawZone();
      const th = (v.ang * Math.PI) / 180, L = 10 + (v.spd - 200) / 18;
      const x1 = X0 + L * Math.cos(th), y1 = Y0 - 9 - L * Math.sin(th);
      set("#aim", "d", `M${X0} ${Y0 - 9}L${x1.toFixed(1)} ${y1.toFixed(1)}`);
      // תצוגה מקדימה: היכן תיפול רקטה בזווית ובמהירות שנבחרו
      if (!shot || shot.done) {
        const f = flight(v.ang, v.spd);
        set("#ghost", "d", arc(f, 0, f.T));
      }
    });

    // גרירה: רק על האזור המיושב עצמו
    const zhit = q("#zhit");
    const target = {
      style: zhit.style,
      createSVGPoint: () => svg.createSVGPoint(),
      getScreenCTM: () => svg.getScreenCTM(),
      addEventListener: (t, fn) => zhit.addEventListener(t, fn),
      setPointerCapture: (id) => zhit.setPointerCapture(id),
    };
    drag(target, (p) => {
      const zc = clamp(Math.round(((p.x - X0) / S) * 2) / 2, 4, 24);
      const el = q("#zc");
      if (+el.value !== zc) { el.value = zc; el.dispatchEvent(new Event("input", { bubbles: true })); }
    });

    q("#fire").addEventListener("click", fire);
    fire();

    loop(root, (dt) => {
      const s = shot;
      if (!s || s.done) {
        if (s && s.end > 0) { // דעיכת הפיצוץ
          s.end -= dt;
          const k = clamp(s.end / 0.8, 0, 1);
          set("#boom", "opacity", (0.9 * k).toFixed(2)); set("#puff", "opacity", (0.7 * k).toFixed(2));
        }
        return;
      }
      const { f } = s;
      s.t = Math.min(f.T, s.t + dt * s.rate);
      const [x, h] = f.at(s.t);
      // הרקטה
      const [x2, h2] = f.at(Math.min(f.T, s.t + 0.2));
      const dirA = (Math.atan2(-(h2 - h), x2 - x || 1e-6) * 180) / Math.PI;
      placeAt("#rk", x, Math.max(0, h), dirA);
      set("#track", "d", arc(f, 0, s.t, 40));
      // נקודות מכ״ם
      const want = Math.min(20, Math.floor(s.t / (f.T / 20)));
      while (s.dots < want) {
        s.dots++;
        const [dx, dh] = f.at((s.dots * f.T) / 20);
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("cx", px(dx).toFixed(1)); c.setAttribute("cy", py(dh).toFixed(1)); c.setAttribute("r", "2.2");
        q("#dots").appendChild(c);
      }
      set("#beam", "d", `M${P((s.decided ? s.B : bx()) - 0.75, 1.2)}L${P(x, Math.max(0, h))}`);
      if (!s.decided && s.dots >= 4) decide(s);
      // המיירט
      if (s.ti != null && s.t >= s.tl) {
        const k = clamp((s.t - s.tl) / (s.ti - s.tl), 0, 1);
        const a = [s.B + 0.7, 0.8], b = s.pi;
        const ang = (Math.atan2(-(b[1] - a[1]), b[0] - a[0]) * 180) / Math.PI;
        placeAt("#tm", a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, ang);
        if (k >= 1) {
          hide("#rk"); hide("#tm"); set("#beam", "d", "");
          set("#boom", "cx", px(b[0]).toFixed(1)); set("#boom", "cy", py(b[1]).toFixed(1)); set("#boom", "r", 9); set("#boom", "opacity", .9);
          dec.textContent = "יורטה";
          note("יורטה באוויר", `בגובה ${fmt(b[1], 1)} ק״מ, ${fmt(Math.abs(b[0] - f.R), 1)} ק״מ לפני נקודת הנפילה`);
          s.done = true; s.end = 1.6;
          return;
        }
      }
      if (s.t >= f.T) {
        hide("#rk"); set("#beam", "d", "");
        set("#puff", "cx", px(f.R).toFixed(1)); set("#puff", "cy", Y0 - 3); set("#puff", "r", 6); set("#puff", "opacity", .7);
        if (!s.threat) note("נפלה בשטח פתוח", "בלי מיירט, ובלי נזק לאזור המיושב");
        else dec.textContent = "פגיעה";
        s.done = true; s.end = 1.6;
      }
    });
  },
};
