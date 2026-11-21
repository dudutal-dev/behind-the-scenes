// סיר לחץ: משנים את הלחץ שמעל המים ורואים את נקודת הרתיחה ואת זמן הבישול.
// נקודת הרתיחה לפי משוואת אנטואן למים: log10(P) = A − B/(C + T), P במ"מ כספית, T במעלות צלזיוס,
//   A = 8.07131, B = 1730.63, C = 233.426 (מכוילת ל־1 עד 100 מעלות; עד 2.5 אטמוספרות השגיאה קטנה מ־0.2 מעלות).
//   1 אטמוספרה = 760 מ"מ כספית. תוצאות: 0.33 → 71.7° · 1 → 100.0° · 2 → 120.5° · 2.5 → 127.7°.
// זמן הבישול היחסי הוא כלל אצבע בלבד: כל 20 מעלות נוספות מקצרות את הבישול לשליש בערך (כמו בטקסט של הדבר),
//   ולכן זמן = 2^((100 − T)/10) יחסית לסיר פתוח בגובה פני הים. בישול אמיתי תלוי גם בסוג המזון ובזמן החימום.
// הבועות גדלות כשהלחץ יורד (נפח הגז הפוך ללחץ, ולכן הרדיוס יחסי ל־P בחזקת מינוס שליש).
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const A = 8.07131, B = 1730.63, C = 233.426;
const boil = (atm) => B / (A - Math.log10(atm * 760)) - C;
const PX = (p) => 44 + ((p - 0.3) / 2.2) * 256; // סרגל הלחץ
const TY = (t) => 124 - ((t - 60) * 88) / 70; // מדחום: 60 עד 130 מעלות
const WATER = "M38 84H174V124Q174 130 168 130H44Q38 130 38 124Z";
const flame = (x) => `<g class="pulse${x % 28 ? " d2" : ""}"><path class="fl-warm" d="M${x} 134q5 6 3 10q-3 4-6 0q-2-4 3-10z"/><path class="fl-hot" d="M${x} 139q2.500 3 1.500 5q-1.500 2-3 0q-1-2 1.500-5z"/></g>`;

export default {
  title: "שחק עם הלחץ בסיר",
  hint: "ככל שהלחץ מעל המים גבוה יותר, הם רותחים בטמפרטורה גבוהה יותר, והאוכל מתבשל מהר יותר.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="סיר מים רותחים על להבה, מדחום וסרגל לחץ">
        <text id="note" x="160" y="14" class="sm"></text>
        <!-- הר: מופיע כשהלחץ נמוך -->
        <g id="hill"><path class="fl-soft" d="M6 148L62 44L92 86L118 58L204 148Z"/><path class="fl-panel" d="M62 44L74 61L64 58L56 66L51 64Z"/></g>
        <path class="thin" d="M6 148H206"/>
        ${[78, 92, 106, 120, 134].map(flame).join("")}
        <!-- סיר, מים ואוכל -->
        <rect class="body" x="24" y="70" width="14" height="7" rx="2"/><rect class="body" x="174" y="70" width="14" height="7" rx="2"/>
        <path class="body" d="M36 62V124Q36 132 44 132H168Q176 132 176 124V62Z"/>
        <path class="fl-cold-soft" d="${WATER}"/>
        <rect class="fl-warm st-ink" stroke-width="1.2" x="58" y="114" width="20" height="12" rx="3"/>
        <rect class="fl-green st-ink" stroke-width="1.2" x="98" y="117" width="16" height="10" rx="4"/>
        <rect class="fl-warm st-ink" stroke-width="1.2" x="132" y="113" width="22" height="13" rx="3"/>
        <g id="bubbles" class="fl-panel st-cold" stroke-width="1"></g>
        <path class="wire st-cold" style="stroke-width:1.5" d="M38 84H174"/>
        <!-- הלחץ שמעל המים -->
        <path id="press" class="arrow st-violet" style="stroke-width:2"/>
        <text x="107" y="77" class="sm">לחץ</text>
        <!-- אדים מסיר פתוח -->
        <g id="steam"><g class="thin fade"><path d="M70 56q-5-7 0-13t0-13"/><path d="M106 50q-5-7 0-13t0-11"/><path d="M142 56q-5-7 0-13t0-13"/></g></g>
        <!-- מכסה נעול ושסתום -->
        <g id="lid">
          <path class="body" d="M30 63H182V57Q182 52 176 52H36Q30 52 30 57Z"/>
          <path class="fl-dark" d="M32 61h148v3H32z"/>
          <rect class="fl-line st-ink" stroke-width="1.2" x="103" y="45" width="6" height="7"/>
          <g id="valve"><rect class="fl-dark st-ink" stroke-width="1.5" x="98" y="36" width="16" height="10" rx="2.500"/></g>
          <g id="jet" class="thin fade" style="stroke-width:2"><path d="M94 38l-9-8M118 38l9-8M106 33v-9"/></g>
        </g>
        <!-- מדחום -->
        <rect class="body" x="246" y="28" width="10" height="104" rx="5"/>
        <circle class="fl-hot st-ink" stroke-width="2" cx="251" cy="137" r="8.500"/>
        <rect id="merc" class="fl-hot" x="248.500" width="5" y="60" height="70"/>
        <path class="thin st-ink" d="M258 ${TY(70)}h5M258 ${TY(100)}h5M258 ${TY(120)}h5"/>
        <text x="279" y="${TY(70) + 3.5}" class="sm">70°</text>
        <text x="281" y="${TY(100) + 3.5}" class="sm">100°</text>
        <text x="281" y="${TY(120) + 3.5}" class="sm">120°</text>
        <text id="tlab" x="222" y="80" class="lg"></text>
        <!-- סרגל לחץ עם ציוני דרך -->
        <path class="wire st-line" d="M44 170H300"/>
        <path class="thin st-ink" d="M${PX(0.33)} 166v8M${PX(1)} 166v8M${PX(2)} 166v8"/>
        <text x="${PX(0.33)}" y="184" class="sm">אוורסט</text><text x="${PX(0.33)}" y="194" class="sm">0.33</text>
        <text x="${PX(1)}" y="184" class="sm">גובה פני הים</text><text x="${PX(1)}" y="194" class="sm">1</text>
        <text x="${PX(2)}" y="184" class="sm">סיר לחץ</text><text x="${PX(2)}" y="194" class="sm">2</text>
        <path id="ptr" class="fl-violet st-ink" stroke-width="1.2" stroke-linejoin="round" d="M0 168l-5-9h10z"/>
      </svg>
      ${readouts([{ id: "t", label: "מעלות ברתיחה" }, { id: "rel", label: "זמן בישול יחסי" }, { id: "hr", label: "דקות במקום שעה" }])}
      ${range({ id: "p", label: "לחץ", min: 0.3, max: 2.5, step: 0.01, value: 1 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const bub = $("bubbles");
    const BS = Array.from({ length: 11 }, (_, i) => ({ x: 46 + ((i * 53) % 120), y: 90 + ((i * 17) % 38), r: 1.5 + (i % 3) * 0.5, s: 20 + ((i * 7) % 12) }));
    bub.innerHTML = BS.map(() => "<circle/>").join("");
    const bEls = [...bub.children];
    let grow = 1;
    ["lid", "steam", "hill"].forEach((id) => ($(id).style.transition = "opacity .25s"));

    wire(root, ({ p }) => {
      const t = boil(p), rel = 3 ** ((100 - t) / 20); // כלל אצבע: כל 20 מעלות מקצרות את הבישול לשליש בערך, כמו בטקסט של הדבר
      out(root, "p-out", `${p.toFixed(2)} אטמ׳`);
      out(root, "t", fmt(t, 1));
      out(root, "rel", `⁦×${fmt(rel, rel < 1 ? 2 : 1)}⁩`);
      out(root, "hr", fmt(60 * rel, 0));
      out(root, "tlab", `${fmt(t, 0)}°`);
      const y = TY(t);
      $("merc").setAttribute("y", y.toFixed(1));
      $("merc").setAttribute("height", (130 - y).toFixed(1));
      $("tlab").setAttribute("y", (y + 4.5).toFixed(1));
      $("ptr").setAttribute("transform", `translate(${PX(p).toFixed(1)} 0)`);
      // חצי הלחץ: אורך יחסי ללחץ
      const len = 3.5 + 6 * p;
      $("press").setAttribute("d", [58, 84, 130, 156].map((x) => `M${x} ${(81 - len).toFixed(1)}V81M${x - 3} 77.500L${x} 81L${x + 3} 77.500`).join(""));
      const closed = p > 1.05, hiss = p >= 1.95;
      $("lid").style.opacity = closed ? 1 : 0;
      $("steam").style.opacity = closed ? 0 : 1;
      $("jet").style.display = hiss ? "" : "none";
      $("valve").setAttribute("class", p > 2.1 ? "shake" : "");
      $("hill").style.opacity = clamp((0.95 - p) / 0.5, 0, 1);
      grow = p ** (-1 / 3);
      out(root, "note",
        p <= 0.36 ? "פסגת האוורסט: המים רותחים כבר ב־72 מעלות, והאוכל כמעט לא מתבשל"
        : p < 0.95 ? "בהרים הלחץ נמוך: המים רותחים מוקדם והבישול מתארך"
        : p <= 1.05 ? "גובה פני הים: בסיר פתוח המים נעצרים ב־100 מעלות"
        : p < 1.9 ? "מכסה נעול: האדים נכלאים, והלחץ ונקודת הרתיחה עולים"
        : p <= 2.1 ? "סיר לחץ: לחץ כפול מבחוץ, והמים רותחים רק בכ־120 מעלות"
        : "מעל הלחץ הרצוי: השסתום משחרר אדים ושורק");
    });

    loop(root, (dt) => {
      BS.forEach((b, i) => {
        b.y -= dt * b.s;
        if (b.y < 86) { b.y = 128; b.x = 46 + ((b.x - 46 + 37) % 120); }
        bEls[i].setAttribute("cx", (b.x + Math.sin(b.y / 5 + i) * 1.5).toFixed(1));
        bEls[i].setAttribute("cy", b.y.toFixed(1));
        bEls[i].setAttribute("r", (b.r * grow * (1 + (128 - b.y) / 90)).toFixed(2));
      });
    });
  },
};
