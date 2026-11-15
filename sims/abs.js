// בלמים ו‑ABS: מהירות, מצב הכביש וזמן התגובה קובעים את מרחק העצירה.
// מרחק תגובה = v · t (הרכב ממשיך במלוא המהירות עד שהרגל מגיעה לדוושה)
// מרחק בלימה = v² / (2 · μ · g)  — האטה קבועה a = μ·g, כשהצמיגים אוחזים בכביש עד הגבול
//   g = 9.81 מ' לשנייה² · אורך מכונית לסרגל: 4.5 מ'
//   μ (מקדם האחיזה בין הצמיג לכביש, ערכים מקובלים בטבלאות הנדסיות): יבש 0.8 · רטוב 0.5 · קרח 0.1
// v בחזקה שנייה: מהירות כפולה = מרחק בלימה פי 4. מרחק התגובה רק מוכפל.
// ABS: המודל מניח שהגלגלים לא ננעלים, כלומר שהבלימה מנצלת את האחיזה של צמיג מתגלגל. ABS שומר על כך
// ובעיקר על היכולת לנווט. הוא לא "מקצר" את המרחק מעבר לאחיזה שיש — על קרח שום מערכת לא תעצור קצר (ראו הנושא).
// פישוטים: האטה קבועה מרגע הלחיצה (בפועל יש עוד כחצי שנייה עד שהלחץ נבנה), כביש מישורי, ללא רוח.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const G = 9.81, CAR = 4.5;
const MU = { dry: 0.8, wet: 0.5, ice: 0.1 };
const ROAD = { dry: "יבש", wet: "רטוב", ice: "קרח" };
const X0 = 44, X1 = 306; // תחילת הסרגל וסופו (פיקסלים)
const RANGES = [25, 50, 100, 200, 400, 800, 1600]; // אורך הסרגל במטרים: נבחר הקטן שמכיל הכול
const dist = (kmh, mu, t) => { const v = kmh / 3.6; return { v, react: v * t, brake: (v * v) / (2 * mu * G) }; };

// מכונית במבט צד, החזית בראשית (פונה ימינה)
const CAR_SVG = `
  <path class="body" style="stroke-width:1.6" d="M0 -6V-11Q0 -14 -4 -15L-9 -16L-14 -23H-28L-34 -16H-40Q-43 -16 -43 -12V-6Z"/>
  <path class="fl-cold-soft st-ink" stroke-width="1" d="M-13.500 -16.500L-17 -21.500H-21V-16.500ZM-24 -16.500V-21.500H-27.500L-31.500 -16.500Z"/>
  <rect id="blight" class="fl-line" x="-44" y="-14" width="3" height="4" rx="1"/>
  <g id="w1" transform="translate(-9 -5)"><circle class="fl-dark st-ink" stroke-width="1.4" r="5"/><path class="st-panel" style="stroke:var(--s-panel)" stroke-width="1.4" d="M-3 0H3"/></g>
  <g id="w2" transform="translate(-34 -5)"><circle class="fl-dark st-ink" stroke-width="1.4" r="5"/><path style="stroke:var(--s-panel)" stroke-width="1.4" d="M-3 0H3"/></g>`;

export default {
  title: "עצור את המכונית בזמן",
  hint: "מהירות כפולה פירושה מרחק בלימה פי ארבעה. על קרח שום בלם לא יעזור — האחיזה בכביש היא שעוצרת, ו‑ABS בעיקר שומר שתוכל לנווט.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מכונית בולמת: מרחק התגובה ומרחק הבלימה על סרגל של אורכי מכונית">
        <text id="note1" x="160" y="16" class="sm"></text>
        <!-- כביש -->
        <rect id="roadfill" class="fl-soft" x="6" y="76" width="308" height="10" rx="2"/>
        <path class="thin st-ink" d="M6 76H314"/>
        <path id="flag" class="wire st-hot" style="stroke-width:2" d=""/>
        <text id="phase" x="160" y="36" class="sm"></text>
        <g id="car">${CAR_SVG}</g>
        <!-- סרגל עיקרי: תגובה + בלימה -->
        <rect id="br" class="fl-warm" x="${X0}" y="98" width="0" height="12"/>
        <rect id="bb" class="fl-hot" x="${X0}" y="98" width="0" height="12"/>
        <text id="lr" x="0" y="124" class="sm"></text>
        <text id="lb" x="0" y="124" class="sm"></text>
        <path class="thin st-ink" style="stroke-width:1.2" d="M${X0} 94V114"/>
        <!-- סרגל של אורכי מכונית -->
        <path id="ticks" class="thin st-ink" style="stroke-width:.8" d=""/>
        <text id="tlab" x="${X1}" y="144" class="sm" style="text-anchor:start"></text>
        <!-- השוואה: מהירות כפולה או חצי -->
        <rect id="gr" class="fl-warm" x="${X0}" y="150" width="0" height="8" opacity=".55"/>
        <rect id="gb" class="fl-violet" x="${X0}" y="150" width="0" height="8" opacity=".75"/>
        <text id="glab" x="${X0 - 4}" y="157" class="sm" style="text-anchor:start"></text>
        <text id="note2" x="160" y="178" class="sm"></text>
        <text id="note3" x="160" y="192" class="sm"></text>
      </svg>
      ${readouts([{ id: "dt", label: "עצירה (מ׳)" }, { id: "db", label: "בלימה (מ׳)" }, { id: "nc", label: "אורכי רכב" }])}
      ${range({ id: "v", label: "מהירות", min: 20, max: 130, step: 5, value: 50 })}
      ${choice({ id: "road", label: "כביש", value: "dry", options: [{ v: "dry", label: "יבש 0.8" }, { v: "wet", label: "רטוב 0.5" }, { v: "ice", label: "קרח 0.1" }] })}
      ${range({ id: "t", label: "זמן תגובה", min: 0.5, max: 2.5, step: 0.1, value: 1 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const car = $("car"), w1 = $("w1"), w2 = $("w2"), blight = $("blight");
    let S = null; // מצב נוכחי
    let range_m = 50, scale = (X1 - X0) / 50; // פיקסלים למטר (מוחלק)
    let tau = 0; // זמן הדמיה בתוך הנסיעה (שניות אמיתיות)
    const X = (m) => X0 + m * scale;

    function layout() {
      const { react, brake, other } = S;
      const total = react + brake;
      out(root, "lr", react * scale > 62 ? `תגובה: ${fmt(react, 0)} מ׳` : react * scale > 26 ? `${fmt(react, 0)} מ׳` : "");
      out(root, "lb", brake * scale > 62 ? `בלימה: ${fmt(brake, 0)} מ׳` : brake * scale > 26 ? `${fmt(brake, 0)} מ׳` : "");
      $("br").setAttribute("width", (react * scale).toFixed(1));
      $("bb").setAttribute("x", X(react).toFixed(1));
      $("bb").setAttribute("width", (brake * scale).toFixed(1));
      $("lr").setAttribute("x", X(react / 2).toFixed(1));
      $("lb").setAttribute("x", X(react + brake / 2).toFixed(1));
      // שנתות: כל אורך מכונית, או כל 10 כשהן צפופות מדי
      const per = CAR * scale >= 4 ? 1 : 10;
      let d = "";
      for (let k = 0, m = 0; (m = k * per * CAR) <= range_m + 1e-6; k++) {
        const big = per === 1 ? k % 5 === 0 : true;
        d += `M${X(m).toFixed(1)} 128v${big ? 6 : 3}`;
      }
      $("ticks").setAttribute("d", d);
      out(root, "tlab", per === 1 ? "שנתה = מכונית (4.5 מ׳)" : "שנתה = 10 מכוניות");
      // סרגל ההשוואה
      $("gr").setAttribute("width", (other.react * scale).toFixed(1));
      $("gb").setAttribute("x", X(other.react).toFixed(1));
      $("gb").setAttribute("width", (other.brake * scale).toFixed(1));
      // דגל העצירה
      const xs = X(total);
      $("flag").setAttribute("d", `M${xs.toFixed(1)} 76V54`);
    }

    wire(root, ({ v, road, t }) => {
      const mu = MU[road];
      const cur = dist(v, mu, t);
      const twice = v * 2 <= 130; // משווים למהירות כפולה אם היא בטווח, אחרת לחצי
      const ov = twice ? v * 2 : v / 2;
      const other = dist(ov, mu, t);
      const total = cur.react + cur.brake;
      const f = (m) => fmt(m, m < 10 ? 1 : 0);
      S = { ...cur, mu, t, total, other, a: mu * G, T: t + cur.v / (mu * G) };
      range_m = RANGES.find((r) => r >= 1.04 * Math.max(total, other.react + other.brake)) || 1600;
      tau = 0;
      out(root, "v-out", `${v} קמ״ש`);
      out(root, "t-out", `${fmt(t, 1)} שנ׳`);
      out(root, "dt", fmt(total, 0));
      out(root, "db", fmt(cur.brake, 0));
      out(root, "nc", fmt(total / CAR, total / CAR < 10 ? 1 : 0));
      out(root, "glab", `${ov}`);
      out(root, "note2", twice
        ? `ב־${ov} קמ״ש הבלימה פי 4: ${f(other.brake)} מ׳ במקום ${f(cur.brake)}`
        : `בחצי מהמהירות, ${ov} קמ״ש, הבלימה רק רבע: ${f(other.brake)} מ׳`);
      out(root, "note3", `סגול: הבלימה ב־${ov} קמ״ש · כתום בהיר: התגובה`);
      const dry = dist(v, MU.dry, t).brake;
      out(root, "note1", road === "ice" ? `על קרח הבלימה ארוכה פי ${fmt(cur.brake / dry, 0)} מאשר בכביש יבש`
        : road === "wet" ? `בכביש רטוב הבלימה ארוכה פי ${fmt(cur.brake / dry, 1)} מאשר ביבש`
        : t >= 1.8 ? `נהג מוסח: ${fmt(cur.react, 0)} מ׳ בלי לגעת בבלם`
        : `עוד לפני הבלימה: ${fmt(cur.react, 0)} מ׳ של תגובה`);
      $("roadfill").setAttribute("class", road === "ice" ? "fl-cold-soft" : road === "wet" ? "fl-line" : "fl-soft");
      $("roadfill").setAttribute("opacity", road === "wet" ? ".45" : "1");
    });

    let hold = 0, spin = 0, lastPos = 0;
    loop(root, (dt) => {
      if (!S) return;
      // הסרגל מתכווץ/מתרחב בהדרגה כשהטווח משתנה
      const target = (X1 - X0) / range_m;
      scale += (target - scale) * Math.min(1, dt * 6);
      layout();
      // הנסיעה מוצגת בזמן מואץ: כ־1.2 שניות + 0.35 מכל שנייה אמיתית, בין 2.2 ל־6 שניות
      const Ta = clamp(1.2 + 0.35 * S.T, 2.2, 6), rate = S.T / Ta;
      if (tau < S.T) tau = Math.min(S.T, tau + dt * rate);
      else if ((hold += dt) > 1.3) { tau = 0; hold = 0; }
      let pos, phase;
      if (tau < S.t) { pos = S.v * tau; phase = "תגובה: הרגל עוד בדרך לבלם"; }
      else { const u = tau - S.t; pos = S.react + S.v * u - 0.5 * S.a * u * u; phase = tau < S.T ? "בלימה" : "עצר"; }
      if (tau >= S.T) pos = S.total;
      const x = X(pos);
      car.setAttribute("transform", `translate(${x.toFixed(1)} 76)`);
      spin = (spin + ((pos - lastPos) * scale * 360) / (2 * Math.PI * 5)) % 360;
      lastPos = tau === 0 ? 0 : pos;
      w1.setAttribute("transform", `translate(-9 -5) rotate(${spin.toFixed(1)})`);
      w2.setAttribute("transform", `translate(-34 -5) rotate(${spin.toFixed(1)})`);
      blight.setAttribute("class", tau >= S.t ? "fl-hot" : "fl-line");
      const ph = $("phase");
      ph.textContent = phase;
      ph.setAttribute("x", clamp(x - 20, 70, 250).toFixed(1));
    });
  },
};
