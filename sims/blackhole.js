// חור שחור: בוחרים מסה ומרחק, ורואים את גודל האופק ואם אור שנשלח משם יוצא החוצה.
// רדיוס שוורצשילד: Rs = 2GM/c².
//   G = 6.674×10⁻¹¹ מ׳³/(ק״ג·שנ׳²) · c = 299,792.458 ק״מ/ש · מסת השמש M☉ = 1.989×10³⁰ ק״ג
//   ⇒ Rs = 2.953 ק״מ לכל מסת שמש (ביחס ישר למסה).
// מהירות המילוט במרחק r ממרכז: v = √(2GM/r) = c·√(Rs/r).
//   (בתורת היחסות זו גם המהירות המדויקת שמודד צופה נייח במקום, ולכן היא מגיעה ל־c בדיוק באופק.)
// הבזק האור בציור נע במהירות הקואורדינטית של אור רדיאלי בגאומטריית שוורצשילד, כפי שנראית מרחוק:
//   dr/dt = c·(1 − Rs/r) — הוא מאט ככל שהוא יוצא מקרוב יותר לאופק. בתוך האופק כל כיוון מוביל פנימה.
// המבט התחתון בקנה מידה ליניארי אמיתי; הסרגל העליון לוגריתמי (1 ק״מ עד 100 מיליארד ק״מ).
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const RS_SUN = 2.953; // ק״מ למסת שמש
const C = 299792.458; // ק״מ לשנייה

// סרגל לוגריתמי: log10(ק״מ) מ־0 עד 11 על פני x = 20..300
const LX0 = 20, LX1 = 300, LMAX = 11, LY = 34;
const lx = (km) => LX0 + ((LX1 - LX0) * clamp(Math.log10(km), 0, LMAX)) / LMAX;
// גדלים מוכרים (ק״מ): גובה האוורסט, מרתון, קוטר כדור הארץ, קוטר השמש, המרחק לשמש, קוטר מסלול נפטון
const ITEMS = [
  [8.849, "אוורסט", 13], [42.195, "מרתון", 24], [12742, "כדור הארץ", 13],
  [1.3927e6, "השמש", 24], [1.496e8, "עד השמש", 13], [9.0e9, "מסלול נפטון", 24],
];

// המבט התחתון
const PX0 = 30, PY = 114, PW = 252; // מרכז החור השחור, ורוחב המבט בפיקסלים

const big = (n) => {
  if (n < 1e3) return fmt(n, n < 10 ? 1 : 0);
  if (n < 1e6) return `${fmt(n / 1e3, n < 1e4 ? 1 : 0)} אלף`;
  if (n < 1e9) return `${fmt(n / 1e6, n < 1e7 ? 1 : 0)} מיליון`;
  return `${fmt(n / 1e9, n < 1e10 ? 1 : 0)} מיליארד`;
};

export default {
  title: "דחסו מסה לחור שחור",
  hint: "המסה במסות שמש. האופק גדל ביחס ישר למסה: כ־3 ק״מ לכל שמש. קרבו את החללית: מהירות המילוט עולה, ובאופק היא מגיעה למהירות האור.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="סרגל שמשווה את קוטר האופק לגדלים מוכרים, ומתחתיו חור שחור וחללית ששולחת הבזק אור">
        <defs><clipPath id="bh-clip"><rect x="8" y="62" width="304" height="104" rx="10"/></clipPath></defs>
        <!-- סרגל לוגריתמי -->
        <path class="thin" d="M${LX0} ${LY}H${LX1}"/>
        ${[0, 3, 6, 9].map((k) => `<path class="thin" style="stroke-width:1" d="M${lx(10 ** k)} ${LY - 3}v6"/>`).join("")}
        ${ITEMS.map(([km, name, y]) => `<circle class="fl-line" cx="${lx(km).toFixed(1)}" cy="${LY}" r="2.6"/>
          <text class="sm" x="${lx(km).toFixed(1)}" y="${y}">${name}</text>`).join("")}
        <g id="mark">
          <path class="fl-ink" d="M0 ${LY + 3}l-4.5 7h9z"/>
          <circle class="fl-ink" cx="0" cy="${LY}" r="3.4"/>
        </g>
        <text id="markt" x="160" y="52" class="sm"></text>
        <!-- מבט בקנה מידה -->
        <rect class="fl-soft" x="8" y="62" width="304" height="104" rx="10"/>
        <g clip-path="url(#bh-clip)">
          <circle id="hole" fill="#000" cx="${PX0}" cy="${PY}"/>
          <circle id="hor" class="fl-none st-warm" style="stroke-dasharray:3 3" stroke-width="1.6" cx="${PX0}" cy="${PY}"/>
          <path id="dist" class="thin" style="stroke-dasharray:2 4"/>
          <circle id="ph" r="3.4" class="fl-elec"/>
          <g id="probe">
            <rect class="fl-cold st-ink" stroke-width="1" x="-9" y="-2.5" width="5" height="5"/>
            <rect class="fl-cold st-ink" stroke-width="1" x="4" y="-2.5" width="5" height="5"/>
            <rect class="body" style="stroke-width:1.4" x="-4" y="-4" width="8" height="8" rx="1.5"/>
          </g>
        </g>
        <text id="holet" x="160" y="78" class="sm"></text>
        <text id="probet" x="160" y="146" class="sm">חללית</text>
        <!-- מד מהירות המילוט -->
        <rect class="fl-soft" x="40" y="172" width="250" height="6" rx="3"/>
        <rect id="bar" class="fl-warm" x="40" y="172" width="0" height="6" rx="3"/>
        <path class="st-ink" stroke-width="1.6" d="M290 169v12"/>
        <text x="300" y="179" class="sm">c</text>
        <text x="22" y="179" class="sm">מילוט</text>
        <text id="note" x="160" y="194" class="sm"></text>
      </svg>
      ${readouts([{ id: "rs", label: "רדיוס האופק (ק״מ)" }, { id: "ve", label: "מהירות מילוט (ק״מ/ש)" }])}
      ${range({ id: "m", label: "מסה", min: 0.5, max: 10, step: 0.05, value: 1 })}
      ${range({ id: "r", label: "מרחק (ק״מ)", min: 0, max: 11, step: 0.05, value: 2 })}`;

    const q = (s) => root.querySelector(s);
    const hole = q("#hole"), hor = q("#hor"), ph = q("#ph"), probe = q("#probe"), dist = q("#dist");
    let st = { rs: 1, r: 1, s: 1, x: PX0 }; // ערכים נוכחיים: ק״מ, פיקסלים לק״מ
    let phr = 0, wait = 0; // מיקום ההבזק (ק״מ ממרכז), והשהיה בין הבזקים

    wire(root, ({ m, r }) => {
      const M = 10 ** m, R = 10 ** r, Rs = RS_SUN * M, D = 2 * Rs;
      out(root, "m-out", M < 1e3 ? `${fmt(M, M < 10 ? 1 : 0)} שמשות` : big(M));
      out(root, "r-out", big(R));
      out(root, "rs", big(Rs));
      const inside = R <= Rs;
      const v = C * Math.sqrt(Rs / R);
      out(root, "ve", inside ? "אין מילוט" : big(v));

      // הסרגל: קוטר האופק מול גדלים מוכרים
      const mx = lx(D);
      q("#mark").setAttribute("transform", `translate(${mx.toFixed(1)} 0)`);
      // משווים לפריט הגדול ביותר שקטן מהקוטר (או לקטן ביותר, אם הקוטר קטן מכולם)
      const smaller = ITEMS.filter((it) => it[0] <= D * 1.15).sort((a, b) => b[0] - a[0]);
      const near = smaller[0] || ITEMS[0];
      const nm = near[1] === "עד השמש" ? "המרחק לשמש" : near[1] === "אוורסט" ? "גובה האוורסט" : near[1] === "מרתון" ? "מרתון" : `קוטר ${near[1]}`;
      const ratio = D / near[0];
      const cmp = ratio >= 1.15 ? `פי ${fmt(ratio, ratio < 10 ? 1 : 0)} מ${nm}` : ratio <= 0.87 ? `${fmt(ratio * 100, 0)}% מ${nm}` : `בערך כמו ${nm}`;
      const known = Math.abs(m - Math.log10(4.3e6)) < 0.12 ? " · כמו קשת A*" : Math.abs(m - Math.log10(6.5e9)) < 0.12 ? " · כמו M87*" : "";
      const tx = q("#markt");
      tx.textContent = `קוטר האופק ${big(D)} ק״מ: ${cmp}${known}`;
      tx.setAttribute("x", "160");

      // מבט בקנה מידה אמיתי
      const s = PW / Math.max(3 * Rs, 1.12 * R);
      const rp = Rs * s, x = PX0 + R * s;
      hole.setAttribute("r", Math.max(1.6, rp).toFixed(2));
      hor.setAttribute("r", Math.max(1.6, rp).toFixed(2));
      probe.setAttribute("transform", `translate(${x.toFixed(1)} ${PY})`);
      dist.setAttribute("d", `M${PX0} ${PY}H${x.toFixed(1)}`);
      const pt = q("#probet");
      pt.setAttribute("x", clamp(inside ? Math.max(x, PX0 + rp + 52) : x, 40, 280).toFixed(1));
      pt.textContent = inside ? "החללית בתוך האופק" : "חללית";
      const ht = q("#holet");
      if (rp < 4) { ht.textContent = "החור השחור, בקנה מידה: כמעט נקודה"; ht.setAttribute("x", "120"); }
      else if (rp < 150) { ht.textContent = "אופק האירועים"; ht.setAttribute("x", clamp(PX0 + rp + 34, 70, 270).toFixed(1)); }
      else ht.textContent = "";

      // מד המהירות
      q("#bar").setAttribute("width", (250 * clamp(Math.sqrt(Rs / R), 0, 1)).toFixed(1));
      q("#bar").setAttribute("class", inside ? "fl-hot" : "fl-warm");

      let note;
      if (inside) note = "בתוך האופק: גם אור שנשלח החוצה נופל פנימה";
      else if (R < 1.5 * Rs) note = "האור יוצא, אבל לאט ומוסט חזק לאדום";
      else if (v > 0.1 * C) note = `מהירות המילוט: ${fmt((100 * v) / C, 0)}% ממהירות האור`;
      else note = "רחוק מהאופק: המשיכה כמו של כוכב באותה מסה";
      out(root, "note", note);

      st = { rs: Rs, r: R, s, x };
      phr = R; wait = 0;
    });

    loop(root, (dt) => {
      const { rs, r, s } = st;
      if (wait > 0) { wait -= dt; ph.setAttribute("opacity", "0"); if (wait <= 0) phr = r; return; }
      ph.setAttribute("opacity", "1");
      const k = 1 / s; // ק״מ לפיקסל
      if (r > rs) {
        // אור רדיאלי יוצא: dr/dt ∝ (1 − Rs/r). 120 פיקסלים בשנייה רחוק מהאופק.
        phr += 120 * k * dt * Math.max(0.03, 1 - rs / phr);
        ph.setAttribute("class", 1 / Math.sqrt(1 - rs / r) > 1.6 ? "fl-hot" : "fl-elec");
        if (PX0 + phr * s > 316) wait = 0.5;
      } else {
        phr -= 70 * k * dt; // בתוך האופק: פנימה, תמיד
        ph.setAttribute("class", "fl-hot");
        if (phr <= 0) { phr = 0; wait = 0.5; }
      }
      ph.setAttribute("cx", (PX0 + phr * s).toFixed(1));
      ph.setAttribute("cy", PY);
    });
  },
};
