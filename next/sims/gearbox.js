// תיבת הילוכים: בוחרים הילוך וסיבובי מנוע, ורואים את מהירות הנסיעה ואת כוח הסיבוב בגלגלים.
// יחס ההילוך = שיני הגלגל המונע / שיני הגלגל המניע. סכום השיניים קבוע (36), כמו בתיבה אמיתית
// שבה המרחק בין הצירים קבוע: 8/28=3.5 · 12/24=2.0 · 15/21=1.4 · 18/18=1.0 · 20/16=0.8.
// הינע סופי (דיפרנציאל) 4.0. היקף גלגל 1.95 מ' (צמיג 205/55R16 בקירוב).
// סל"ד גלגל = סל"ד מנוע / (יחס · 4) · מהירות = סל"ד גלגל · היקף · 60/1000 קמ"ש.
// כוח הסיבוב (מומנט) בגלגלים = מומנט המנוע · יחס · 4, בהזנחת הפסדי חיכוך.
// הסיבוב באיור מואט פי 125 (6,000 סל"ד מוצגים כ־0.8 סיבוב בשנייה), אבל היחסים בין החלקים מדויקים.
import { range, choice, readouts, wire, out, fmt, loop } from "./kit.js";

const GEARS = { 1: [8, 28], 2: [12, 24], 3: [15, 21], 4: [18, 18], 5: [20, 16] };
const FINAL = 4, CIRC = 1.95, M = 3.6; // M: פיקסלים לשן (מודול)
const X1 = 50, X2 = X1 + 18 * M, CY = 83, WX = 268, WR = 32; // מרחק הצירים: (8+28)·M/2
const ltr = (s) => `⁦${s}⁩`;

// גלגל שיניים עם n שיניים טרפזיות סביב הראשית; שן ראשונה בזווית 0
function gear(n) {
  const r = (n * M) / 2, ro = r + 2.6, ri = r - 2.8, p = (2 * Math.PI) / n;
  const pt = (rad, a) => `${(rad * Math.cos(a)).toFixed(2)} ${(rad * Math.sin(a)).toFixed(2)}`;
  let d = "";
  for (let k = 0; k < n; k++) {
    const a = k * p;
    d += `${k ? "L" : "M"}${pt(ri, a - 0.31 * p)}L${pt(ro, a - 0.15 * p)}L${pt(ro, a + 0.15 * p)}L${pt(ri, a + 0.31 * p)}`;
  }
  return d + "Z";
}

export default {
  title: "שחק עם ההילוכים והסיבובים",
  hint: "הילוך נמוך נותן הרבה כוח ומעט מהירות; הילוך גבוה להפך. הסיבוב באיור מואט, אבל היחסים אמיתיים.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="גלגל שיניים של המנוע מסובב גלגל שיניים של ציר היציאה, שמסובב את גלגל הרכב">
        <!-- צירים -->
        <rect class="fl-line st-ink" stroke-width="1.2" x="4" y="${CY - 2.5}" width="${X1 - 4}" height="5"/>
        <rect class="fl-line st-ink" stroke-width="1.2" x="${X2}" y="${CY - 2.5}" width="${WX - X2}" height="5"/>
        <!-- גלגל הרכב והכביש -->
        <path class="thin" d="M226 ${CY + WR + 1.5}H314"/>
        <path id="road" class="wire st-line" style="stroke-width:2" stroke-dasharray="7 9" d="M226 ${CY + WR + 6}H314"/>
        <g id="wheel">
          <circle class="fl-dark st-ink" stroke-width="2" r="${WR}"/>
          <circle class="body" r="20"/>
          <path class="wire st-ink" style="stroke-width:3" d="M0 -19V19M-16.500 -9.500L16.500 9.500M-16.500 9.500L16.500 -9.500"/>
          <circle class="fl-warm st-ink" stroke-width="1.5" cy="-26" r="3"/>
          <circle class="body" r="5"/>
        </g>
        <text x="270" y="${CY + WR + 22}" class="sm">הינע סופי: עוד פי 4 האטה</text>
        <!-- גלגלי השיניים -->
        <g id="g2"><path id="g2p" class="fl-cold st-ink" stroke-width="1.5" stroke-linejoin="round"/><circle class="body" r="6"/><circle id="g2m" class="fl-bg st-ink" stroke-width="1.2" r="2.6"/></g>
        <g id="g1"><path id="g1p" class="fl-warm st-ink" stroke-width="1.5" stroke-linejoin="round"/><circle class="body" r="5"/><circle id="g1m" class="fl-bg st-ink" stroke-width="1.2" r="2.2"/></g>
        <text x="42" y="12" class="sm">מנוע</text><text id="r1" x="42" y="24"></text>
        <text x="124" y="12" class="sm">ציר היציאה</text><text id="r2" x="124" y="24"></text>
        <text x="${WX}" y="12" class="sm">גלגל הרכב</text><text id="r3" x="${WX}" y="24"></text>
        <text id="teeth" x="${(X1 + X2) / 2}" y="150" class="sm"></text>
        <!-- מדי כוח ומהירות -->
        <text x="82" y="168" class="sm">כוח סיבוב בגלגלים</text>
        <rect class="fl-soft" x="12" y="172" width="140" height="8" rx="4"/>
        <rect id="bf" class="fl-warm" x="12" y="172" width="0" height="8" rx="4"/>
        <text x="238" y="168" class="sm">מהירות נסיעה</text>
        <rect class="fl-soft" x="168" y="172" width="140" height="8" rx="4"/>
        <rect id="bs" class="fl-cold" x="168" y="172" width="0" height="8" rx="4"/>
        <text id="note" x="160" y="196" class="sm"></text>
      </svg>
      ${readouts([{ id: "kmh", label: "מהירות (קמ״ש)" }, { id: "tq", label: "כוח סיבוב בגלגלים" }])}
      ${choice({ id: "gear", label: "הילוך", options: [1, 2, 3, 4, 5].map((v) => ({ v, label: v })), value: 2 })}
      ${range({ id: "rpm", label: "סיבובי מנוע", min: 1000, max: 6000, step: 100, value: 3000 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let n1 = 12, n2 = 24, engine = 3000, shown = 0;
    let a1 = 0, aw = 0, roadOff = 0;

    wire(root, ({ gear: g, rpm }) => {
      [n1, n2] = GEARS[g];
      engine = rpm;
      const ratio = n2 / n1, shaft = rpm / ratio, wheel = shaft / FINAL;
      const kmh = (wheel * CIRC * 60) / 1000, mult = ratio * FINAL;
      if (shown !== +g) { // מחליפים את זוג גלגלי השיניים
        shown = +g;
        $("g1p").setAttribute("d", gear(n1));
        $("g2p").setAttribute("d", gear(n2));
        $("g1m").setAttribute("cx", (n1 * M) / 2 - 7);
        $("g2m").setAttribute("cx", (n2 * M) / 2 - 8);
      }
      out(root, "rpm-out", `${fmt(rpm)} סל״ד`);
      out(root, "r1", `${fmt(rpm)} סל״ד`);
      out(root, "r2", `${fmt(shaft, 0)} סל״ד`);
      out(root, "r3", `${fmt(wheel, 0)} סל״ד`);
      out(root, "teeth", `${n1} שיניים מסובבות ${n2}`);
      out(root, "kmh", fmt(kmh, 0));
      out(root, "tq", ltr(`×${fmt(mult, 1)}`));
      $("bf").setAttribute("width", ((140 * mult) / 14).toFixed(1));
      $("bs").setAttribute("width", ((140 * kmh) / 220).toFixed(1));
      out(root, "note",
        rpm >= 5500 && g < 5 ? "המנוע בקצה הסיבובים שלו: זמן להעלות הילוך"
        : rpm <= 1300 && g > 1 ? "סיבובים נמוכים מדי, המנוע חלש כאן: כדאי להוריד הילוך"
        : g == 1 ? "הילוך ראשון: הרבה כוח ומעט מהירות, לזינוק ולעלייה"
        : g == 4 ? "הילוך ישיר: ציר היציאה מסתובב בדיוק כמו המנוע"
        : g == 5 ? "הילוך חמישי: הציר מהיר מהמנוע. מעט כוח, הרבה מהירות"
        : "כל הילוך מחליף חלק מהכוח במהירות");
    });

    loop(root, (dt) => {
      const w1 = (engine / 6000) * 0.8 * 360; // מעלות בשנייה של הגלגל המניע (מואט פי 125)
      a1 = (a1 + dt * w1) % 360000;
      // הגלגל המונע מסתובב בכיוון ההפוך, לאט פי n2/n1, ומוסט בחצי שן כדי שהשיניים ישתלבו
      const a2 = 180 - 180 / n2 - (a1 * n1) / n2;
      const ww = (w1 * n1) / n2 / FINAL;
      aw = (aw + dt * ww) % 360;
      roadOff = (roadOff - dt * ((ww * Math.PI) / 180) * WR) % 16; // הכביש נע לאחור בקצב הגלגול
      $("g1").setAttribute("transform", `translate(${X1} ${CY}) rotate(${a1.toFixed(2)})`);
      $("g2").setAttribute("transform", `translate(${X2} ${CY}) rotate(${a2.toFixed(2)})`);
      $("wheel").setAttribute("transform", `translate(${WX} ${CY}) rotate(${aw.toFixed(2)})`);
      $("road").setAttribute("stroke-dashoffset", (-roadOff).toFixed(1));
    });
  },
};
