// טורבינת רוח: משנים את מהירות הרוח ורואים את מהירות הרוטור ואת ההספק על עקומת ההספק.
// הספק הרוח שהטורבינה קולטת: P = ½ · ρ · A · v³ · Cp
//   ρ = 1.225 ק"ג למ"ק (אוויר בגובה פני הים) · A = π·40² מ"ר (רוטור בקוטר 80 מ')
//   Cp ≈ 0.38 (נבחר כך שההספק המלא, 2,000 קילוואט, מתקבל בדיוק ב־12 מ' לשנייה; גבול בץ הוא 0.59)
// מתחת ל־3 מ' לשנייה (מהירות חיתוך) אין ייצור · מ־12 עד 25 ההספק מוגבל להספק המלא (שינוי זווית הלהבים)
// מעל 25 מ' לשנייה הטורבינה נעצרת להגנה. פישוט: בפועל המעבר סביב 12 מ' לשנייה מעוגל.
// מהירות הרוטור: יחסית לרוח (יחס מהירות קצה קבוע ≈ 6.3) עד 18 סל"ד ב־12 מ' לשנייה, ומשם קבועה.
// הרוטור באיור מסתובב בקצב האמיתי.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const CUT_IN = 3, RATED_V = 12, CUT_OUT = 25, RATED_KW = 2000, MAX_RPM = 18;
const RHO = 1.225, AREA = Math.PI * 40 * 40;
const CP = (RATED_KW * 1000) / (0.5 * RHO * AREA * RATED_V ** 3); // ≈ 0.376
const power = (v) => (v < CUT_IN || v > CUT_OUT ? 0 : Math.min(RATED_KW, (0.5 * RHO * AREA * v ** 3 * CP) / 1000));
const rotorRpm = (v) => (v < CUT_IN || v > CUT_OUT ? 0 : (MAX_RPM * Math.min(v, RATED_V)) / RATED_V);

const X = (v) => 150 + v * 5.2, Y = (p) => 150 - (p / RATED_KW) * 104;
const CURVE = (() => {
  let d = `M${X(0)} ${Y(0)}H${X(CUT_IN)}`;
  for (let v = CUT_IN; v <= RATED_V + 1e-9; v += 0.25) d += `L${X(v).toFixed(1)} ${Y(power(v)).toFixed(1)}`;
  return d + `H${X(CUT_OUT)}V${Y(0)}`;
})();
const BLADE = "M-2.800 0Q-6.500 -16 -1 -50L1 -50Q4.500 -18 2.800 0Z";

export default {
  title: "שחק עם מהירות הרוח",
  hint: "ההספק גדל כמו מהירות הרוח בחזקת שלוש, עד ההספק המלא. ברוח חלשה מדי או בסערה אין חשמל בכלל.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="טורבינת רוח ועקומת ההספק שלה לפי מהירות הרוח">
        <text id="note" x="160" y="14" class="sm"></text>
        <!-- רוח -->
        <g id="streaks" class="wire st-cold" style="stroke-width:1.6"></g>
        <!-- טורבינה -->
        <path class="thin" d="M8 186H112"/>
        <path class="body" d="M55.500 96L53 186H63L60.500 96z"/>
        <rect class="fl-soft st-ink" stroke-width="2" x="51" y="86" width="14" height="12" rx="3.500"/>
        <g id="rotor">
          <g transform="rotate(0)"><path class="blade body" style="stroke-width:1.5" d="${BLADE}"/></g>
          <g transform="rotate(120)"><path class="blade body" style="stroke-width:1.5" d="${BLADE}"/></g>
          <g transform="rotate(240)"><path class="blade body" style="stroke-width:1.5" d="${BLADE}"/></g>
          <circle class="fl-dark st-ink" stroke-width="1.5" r="4.500"/>
        </g>
        <!-- עקומת ההספק -->
        <path class="fl-cold-soft" d="${CURVE}Z"/>
        <path class="thin st-ink" d="M150 38V150H308"/>
        <path class="thin" style="stroke-dasharray:2 3" d="M150 ${Y(RATED_KW)}H${X(RATED_V)}"/>
        <path class="wire st-cold" d="${CURVE}H${X(30)}"/>
        <path class="thin st-ink" d="M${X(CUT_IN)} 150v4M${X(RATED_V)} 150v4M${X(CUT_OUT)} 150v4"/>
        <text x="${X(CUT_IN)}" y="164" class="sm">3</text>
        <text x="${X(RATED_V)}" y="164" class="sm">12</text>
        <text x="${X(CUT_OUT)}" y="164" class="sm">25</text>
        <text x="229" y="180" class="sm">מהירות הרוח (מטר לשנייה)</text>
        <text x="133" y="${Y(RATED_KW) + 3}" class="sm">2,000</text>
        <text x="131" y="${Y(RATED_KW) + 14}" class="sm">קילוואט</text>
        <text x="229" y="30" class="sm">הספק החשמל</text>
        <!-- נקודת השוואה (חצי או כפל מהירות) והנקודה הנוכחית -->
        <g id="ghost"><path id="gline" class="thin st-violet" style="stroke-dasharray:3 3"/><circle id="gdot" class="fl-bg st-violet" stroke-width="2" r="3.500"/></g>
        <path id="guide" class="thin st-hot" style="stroke-dasharray:3 3"/>
        <circle id="dot" class="fl-hot st-ink" stroke-width="1.5" r="4.500"/>
      </svg>
      ${readouts([{ id: "kw", label: "הספק (קילוואט)" }, { id: "pct", label: "מההספק המלא" }, { id: "rpm", label: "סיבובים בדקה" }])}
      ${range({ id: "v", label: "מהירות רוח", min: 0, max: 30, step: 0.5, value: 8 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const rotor = $("rotor"), blades = [...root.querySelectorAll(".blade")];
    const streaks = $("streaks");
    const S = [44, 62, 80, 104, 122, 142, 164].map((y, i) => ({ y, x: (i * 37) % 112 }));
    streaks.innerHTML = S.map(() => "<path/>").join("");
    const sEls = [...streaks.children];
    let wind = 8, target = 0, omega = 0, angle = 0;

    wire(root, ({ v }) => {
      wind = v;
      const p = power(v);
      target = rotorRpm(v);
      out(root, "v-out", `${fmt(v, 1)} מ׳ לשנ׳`);
      out(root, "kw", fmt(p, 0));
      out(root, "pct", `${fmt((100 * p) / RATED_KW, p && p < 200 ? 1 : 0)}%`);
      out(root, "rpm", fmt(target, 1));
      $("dot").setAttribute("cx", X(v));
      $("dot").setAttribute("cy", Y(p));
      $("guide").setAttribute("d", `M${X(v)} 150V${Y(p)}H150`);
      // זווית הלהבים: רוחב מלא עד ההספק המלא, מצטמצם בהדרגה עד 25, ובסערה הלהב פונה בצדו אל הרוח
      const w = v <= RATED_V ? 1 : v <= CUT_OUT ? 1 - (0.45 * (v - RATED_V)) / (CUT_OUT - RATED_V) : 0.22;
      blades.forEach((b) => b.setAttribute("transform", `scale(${w.toFixed(2)} 1)`));

      // חזקה שלישית: משווים למהירות כפולה (אם גם היא מתחת להספק המלא) או לחצי מהמהירות
      const other = v >= CUT_IN && v <= RATED_V / 2 ? 2 * v : v > RATED_V / 2 && v <= RATED_V ? v / 2 : null;
      $("ghost").style.display = other ? "" : "none";
      let note;
      if (other) {
        const po = power(other);
        $("gdot").setAttribute("cx", X(other));
        $("gdot").setAttribute("cy", Y(po));
        $("gline").setAttribute("d", `M${X(other)} 150V${Y(po)}`);
        note = other > v
          ? `רוח כפולה, ${fmt(other, 1)} מ׳ לשנייה, תיתן פי 8: ${fmt(po, 0)} קילוואט`
          : other < CUT_IN ? `בחצי מהרוח, ${fmt(other, 2)} מ׳ לשנייה, הטורבינה בכלל לא מייצרת`
          : `חצי מהרוח, ${fmt(other, 2)} מ׳ לשנייה, נותן רק שמינית: ${fmt(po, 0)} קילוואט`;
      } else {
        note = v < CUT_IN ? "רוח חלשה מדי: אין מספיק כוח לייצר חשמל"
          : v <= CUT_OUT ? "הספק מלא: הלהבים משנים זווית ומוותרים על עודף הרוח"
          : "סערה: הלהבים פונים בצדם אל הרוח והטורבינה נעצרת";
      }
      out(root, "note", note);
    });

    loop(root, (dt) => {
      omega += (target - omega) * Math.min(1, dt * 1.6); // התמדה: הרוטור מאיץ ומאט בהדרגה
      angle = (angle + dt * omega * 6) % 360; // סל"ד · 6 = מעלות בשנייה
      rotor.setAttribute("transform", `translate(58 92) rotate(${angle.toFixed(2)})`);
      const len = 5 + wind * 0.7, op = clamp(wind / 4, 0, 1) * 0.75;
      S.forEach((s, i) => {
        s.x = (s.x + dt * wind * 7) % 112;
        const x0 = 4 + s.x, x1 = Math.min(118, x0 + len);
        sEls[i].setAttribute("d", `M${x0.toFixed(1)} ${s.y}H${x1.toFixed(1)}`);
        sEls[i].setAttribute("opacity", (op * Math.min(1, s.x / 12, (112 - s.x) / 12)).toFixed(2));
      });
    });
  },
};
