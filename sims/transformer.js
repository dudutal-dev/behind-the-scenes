// שנאי: משנים את מספר הליפופים בכל סליל ורואים את מתח היציאה ואת הזרם הזמין.
// שנאי אידאלי (בלי הפסדים): Vout = Vin · N2/N1, וההספק נשמר (Vin·Iin = Vout·Iout),
// ולכן הזרם הזמין ביציאה הוא Iin · N1/N2. מתח הכניסה קבוע: 230 וולט, 50 הרץ.
// הגלים מצוירים באותו קנה מידה ליניארי: הגבוה מבין שני המתחים ממלא את המסך.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const VIN = 230;
const ltr = (s) => `⁦${s}⁩`; // שומר על סדר הסימנים בתוך טקסט עברי
// מספר הליפופים המצוירים: סולם לוגריתמי, 2 עד 14 (המספר האמיתי כתוב ליד הסליל)
const drawn = (n) => clamp(Math.round(2 + 5.2 * Math.log10(n / 10)), 2, 14);

// ליפופים אלכסוניים על זרוע הליבה, בין x0 ל-x1, סביב y=80
function coil(n, x0, x1) {
  const k = drawn(n), s = Math.min(8, 64 / k), top = 80 - (s * (k - 1)) / 2;
  let d = "";
  for (let i = 0; i < k; i++) d += `M${x0} ${(top + i * s + 2.5).toFixed(1)}L${x1} ${(top + i * s - 2.5).toFixed(1)}`;
  return { d, w: clamp(s * 0.6, 2.2, 4.8), top: top + 2.5, bot: top + (k - 1) * s + 2.5 };
}

const wave = (x0, amp, phase) => {
  let d = "";
  for (let x = 0; x <= 88; x += 2) d += `${x ? "L" : "M"}${x0 + x} ${(163 - amp * Math.sin((x / 44) * 2 * Math.PI - phase)).toFixed(1)}`;
  return d;
};

export default {
  title: "שחק עם מספר הליפופים",
  hint: "המתח משתנה לפי יחס הליפופים בין הסלילים. מה שמרוויחים במתח מפסידים בזרם, כי ההספק נשמר.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שנאי: שני סלילים על ליבת ברזל, וגלי המתח בכניסה וביציאה">
        <text id="note" x="160" y="14"></text>
        <!-- ליבת ברזל -->
        <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" fill-rule="evenodd" d="M116 34H204V126H116zM138 56V104H182V56z"/>
        <path class="thin" style="stroke-width:1" d="M122 40H198V120H122zM130 48H190V112H130z"/>
        <path id="flux" class="wire st-violet" style="stroke-width:3" stroke-dasharray="6 8" d="M133 45H187Q193 45 193 51V109Q193 115 187 115H133Q127 115 127 109V51Q127 45 133 45z"/>
        <!-- סליל ראשון -->
        <path id="lead1" class="wire st-warm"/>
        <path id="c1b" class="wire st-ink"/>
        <path id="c1" class="wire st-warm"/>
        <circle class="body" cx="40" cy="62" r="3.5"/><circle class="body" cx="40" cy="98" r="3.5"/>
        <text x="62" y="78" class="lg">230V</text>
        <text x="62" y="92" class="sm">מתח הכניסה</text>
        <text id="n1lab" x="58" y="30"></text>
        <!-- סליל שני -->
        <path id="lead2" class="wire st-hot"/>
        <path id="c2b" class="wire st-ink"/>
        <path id="c2" class="wire st-hot"/>
        <circle class="body" cx="280" cy="62" r="3.5"/><circle class="body" cx="280" cy="98" r="3.5"/>
        <text id="vlab" x="256" y="78" class="lg"></text>
        <text x="256" y="92" class="sm">מתח היציאה</text>
        <text id="n2lab" x="262" y="30"></text>
        <!-- מסכי הגל -->
        <rect class="fl-dark st-ink" stroke-width="2" x="10" y="134" width="96" height="58" rx="5"/>
        <rect class="fl-dark st-ink" stroke-width="2" x="214" y="134" width="96" height="58" rx="5"/>
        <path fill="none" stroke="#fff" stroke-opacity=".3" d="M14 163H102M218 163H306"/>
        <path id="w1" class="wire st-warm" style="stroke-width:2"/>
        <path id="w2" class="wire st-hot" style="stroke-width:2"/>
        <text id="kv" x="160" y="152"></text>
        <text id="ki" x="160" y="168"></text>
        <text x="160" y="186" class="sm">הגלים באותו קנה מידה</text>
      </svg>
      ${readouts([{ id: "vout", label: "מתח ביציאה (וולט)" }, { id: "iout", label: "זרם זמין לעומת הכניסה" }])}
      ${range({ id: "n1", label: "סליל ראשון", min: 10, max: 1000, step: 10, value: 100 })}
      ${range({ id: "n2", label: "סליל שני", min: 10, max: 2000, step: 10, value: 300 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let a1 = 8, a2 = 24;

    wire(root, ({ n1, n2 }) => {
      const k = n2 / n1, vout = VIN * k; // יחס הליפופים ומתח היציאה
      out(root, "n1-out", `${fmt(n1)} ליפ׳`);
      out(root, "n2-out", `${fmt(n2)} ליפ׳`);
      out(root, "n1lab", `${fmt(n1)} ליפופים`);
      out(root, "n2lab", `${fmt(n2)} ליפופים`);
      out(root, "vout", fmt(vout, vout < 100 ? 1 : 0));
      out(root, "vlab", `${fmt(vout, vout < 100 ? 1 : 0)}V`);
      const f = k >= 1 ? k : 1 / k, fs = fmt(f, f < 10 ? 2 : 1);
      out(root, "iout", k === 1 ? ltr("×1") : ltr(`${k > 1 ? "÷" : "×"}${fs}`));
      out(root, "kv", k === 1 ? "המתח לא משתנה" : `המתח ${k > 1 ? "גדל" : "קטן"} פי ${fs}`);
      out(root, "ki", k === 1 ? "הזרם לא משתנה" : `הזרם ${k > 1 ? "קטן" : "גדל"} פי ${fs}`);

      const p = coil(n1, 110, 144), s = coil(n2, 176, 210);
      $("c1").setAttribute("d", p.d); $("c1b").setAttribute("d", p.d);
      $("c2").setAttribute("d", s.d); $("c2b").setAttribute("d", s.d);
      $("c1").style.strokeWidth = p.w; $("c1b").style.strokeWidth = p.w + 1.8;
      $("c2").style.strokeWidth = s.w; $("c2b").style.strokeWidth = s.w + 1.8;
      $("lead1").style.strokeWidth = clamp(p.w * 0.7, 1.8, 3.4);
      $("lead2").style.strokeWidth = clamp(s.w * 0.7, 1.8, 3.4);
      $("lead1").setAttribute("d", `M43.500 62H92Q104 62 104 ${p.top}H110M43.500 98H92Q104 98 104 ${p.bot}H110`);
      $("lead2").setAttribute("d", `M276.500 62H228Q216 62 216 ${s.top - 5}H210M276.500 98H228Q216 98 216 ${s.bot - 5}H210`);

      // משרעות הגלים, באותו קנה מידה ליניארי (מינימום קטן כדי שהקו לא ייעלם)
      const top = Math.max(VIN, vout);
      a1 = Math.max(0.6, (24 * VIN) / top);
      a2 = Math.max(0.6, (24 * vout) / top);

      out(root, "note",
        vout >= 20000 ? "עשרות אלפי וולט: כמו קו מתח גבוה"
        : Math.abs(vout - 5) <= 0.6 ? "כ־5 וולט: כמו מטען טלפון"
        : Math.abs(vout - 12) <= 0.8 ? "כ־12 וולט: כמו ספק כוח של נתב"
        : k === 1 ? "אותו מספר ליפופים: אותו מתח"
        : k > 1 ? "יותר ליפופים בסליל השני: שנאי מעלה מתח"
        : "פחות ליפופים בסליל השני: שנאי מוריד מתח");
    });

    let phase = 0;
    loop(root, (dt) => {
      phase = (phase + dt * 2.6) % (2 * Math.PI);
      $("w1").setAttribute("d", wave(14, a1, phase));
      $("w2").setAttribute("d", wave(218, a2, phase));
      // השדה בליבה מתחזק, נחלש ומתהפך יחד עם זרם החילופין
      const flux = $("flux");
      flux.setAttribute("stroke-dashoffset", (14 * Math.cos(phase)).toFixed(1));
      flux.setAttribute("stroke-opacity", (0.2 + 0.8 * Math.abs(Math.sin(phase))).toFixed(2));
    });
  },
};
