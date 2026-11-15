// רמקול: משנים את תדר האות, את עוצמתו ואת גודל הקונוס, ורואים את הקונוס נע ואת גלי הלחץ באוויר.
//
// אורך הגל: λ = c / f, עם c = 343 מ' לשנייה (מהירות הקול באוויר ב־20 מעלות).
//   האוויר שלפני הרמקול מצויר בקנה מידה אמיתי: 1 יחידת ציור = 1 ס"מ, כלומר רוחב של כ־2 מטר.
// תנועת הקונוס (רמקול בתיבה סגורה, מסנן מעביר־גבוהים מסדר שני עם תדר תהודה f0):
//   x(f) = V · x_max / √(1 + (f/f0)⁴)   — מתחת ל־f0 המהלך מלא, מעליו הוא קטן כמו 1/f²
//   V = עוצמת האות (0–1), יחסית לזרם בסליל.
// לחץ הקול במרחק r = 1 מטר (בוכנה קטנה מאורך הגל, שדה חופשי):
//   p_rms = ρ · S · x · (2πf)² / (4π · r · √2),  ρ = 1.2 ק"ג למ"ק
//   עוצמה בדציבלים = 20 · log10(p_rms / 20 מיקרו־פסקל)
// שני קונוסים:
//   גדול (וופר 25 ס"מ): S = 0.035 מ"ר, x_max = 6 מ"מ, f0 = 40 הרץ  → כ־93 דציבל מעל f0
//   קטן (5 ס"מ):         S = 0.0013 מ"ר, x_max = 2 מ"מ, f0 = 250 הרץ → כ־87 דציבל מעל f0, אבל כ־59 ב־50 הרץ
// באיור: עומק הדחיסה של האוויר יחסי ללחץ הקול (ולכן יחסי לעוצמת האות). התנודה מוצגת בהילוך איטי,
// תזוזת חלקיקי האוויר מוגזמת מאוד (במציאות מיקרונים), ומהלך הקונוס מוצג בסולם דחוס (חזקת 0.2)
// כדי שגם רטט של מיקרונים בתדר גבוה ייראה. הכיוון נשמר: תדר נמוך = מהלך גדול.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const C = 343, RHO = 1.2, P0 = 2e-5;
const CONES = {
  big: { S: 0.035, xmax: 0.006, f0: 40, scale: 1, name: "קונוס 25 ס״מ" },
  small: { S: 0.0013, xmax: 0.002, f0: 250, scale: 0.5, name: "קונוס 5 ס״מ" },
};
const excursion = (c, f, V) => (V * c.xmax) / Math.sqrt(1 + (f / c.f0) ** 4); // מטר, ערך שיא
const pressure = (c, f, V) => (RHO * c.S * excursion(c, f, V) * (2 * Math.PI * f) ** 2) / (4 * Math.PI * Math.SQRT2); // פסקל rms במטר אחד
const P_REF = pressure(CONES.big, 2000, 1); // הלחץ שמוצג כדחיסה מלאה
const freqOf = (s) => { const f = 20 * 100 ** (s / 100); return f < 100 ? Math.round(f) : f < 1000 ? Math.round(f / 5) * 5 : Math.round(f / 10) * 10; };

const AX = 112, AW = 202, AY0 = 26, AY1 = 128; // אזור האוויר (1 יחידה = 1 ס"מ)
const STRIP = 3, NS = Math.ceil(AW / STRIP);
const TX = 112, TW = 200, TY = 164, TA = 12, WINDOW = 0.01; // עקומת האות: חלון של 10 אלפיות שנייה

// חלקיקי אוויר: רשת עם פיזור קבוע (מחולל פסאודו־אקראי עם זרע קבוע, כדי שהתמונה תהיה זהה בכל פעם)
const PARTS = (() => {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const a = [];
  for (let i = 0; i < 22; i++) for (let j = 0; j < 6; j++) a.push({ x: (i + rnd()) * (AW / 22), y: AY0 + 4 + (j + rnd()) * ((AY1 - AY0 - 8) / 6) });
  return a;
})();

export default {
  title: "נגן צליל ברמקול",
  hint: "זרם שמתהפך מהר יותר נותן צליל גבוה וגלים צפופים; זרם חזק יותר נותן צליל חזק. נסה צליל נמוך בקונוס הקטן.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של רמקול: מגנט, סליל וקונוס שנעים, וגלי לחץ באוויר שלפניו">
        <!-- האוויר: פסי דחיסה וחלקיקים -->
        <rect class="fl-panel" x="${AX}" y="${AY0}" width="${AW}" height="${AY1 - AY0}" rx="4" opacity=".55"/>
        <g id="bands" class="fl-cold" shape-rendering="crispEdges"></g>
        <g id="parts" class="fl-ink" opacity=".8"></g>
        <!-- סרגל אורך הגל -->
        <path id="lam" class="thin" style="stroke:var(--s-hot);stroke-width:1.6"/>
        <text id="lamt" y="17" class="sm"></text>
        <!-- קנה מידה -->
        <path class="thin" style="stroke:var(--s-ink)" d="M214 138H314M214 135v6M314 135v6"/>
        <text x="194" y="141" class="sm">מטר אחד</text>
        <!-- הרמקול -->
        <text id="cname" x="56" y="16" class="sm"></text>
        <g id="spk">
          <path class="thin st-ink" d="M36 52L102 26V32M36 100L102 126V120"/>
          <rect class="fl-line st-ink" stroke-width="1.5" x="8" y="50" width="10" height="52" rx="1.500"/>
          <rect class="fl-hot st-ink" stroke-width="1.5" x="18" y="50" width="18" height="15"/>
          <rect class="fl-hot st-ink" stroke-width="1.5" x="18" y="87" width="18" height="15"/>
          <rect class="fl-line st-ink" stroke-width="1.5" x="18" y="70" width="24" height="12"/>
          <g id="mov">
            <path class="body" style="stroke-width:1.6" d="M50 67L98 30V122L50 85Q57 76 50 67Z"/>
            <path class="thin st-ink" d="M50 67H26M50 85H26"/>
            <rect id="coil1" class="fl-warm st-ink" stroke-width=".8" x="25" y="65.500" width="15" height="3.400" rx="1"/>
            <rect id="coil2" class="fl-warm st-ink" stroke-width=".8" x="25" y="83.100" width="15" height="3.400" rx="1"/>
          </g>
        </g>
        <text id="slow" x="56" y="141" class="sm"></text>
        <!-- האות החשמלי -->
        <path class="thin" style="stroke-dasharray:2 3" d="M${TX} ${TY}H${TX + TW}"/>
        <path id="trace" class="wire st-warm" style="stroke-width:2"/>
        <circle id="now" class="fl-warm st-ink" stroke-width="1.2" cx="${TX}" r="3.500"/>
        <text x="56" y="161" class="sm">הזרם בסליל</text>
        <text x="56" y="173" class="sm">10 אלפיות שנייה</text>
        <text id="note" x="160" y="194" class="sm"></text>
      </svg>
      ${readouts([{ id: "wl", label: "אורך הגל" }, { id: "db", label: "דציבל (במטר)" }, { id: "kind", label: "סוג הצליל" }])}
      ${range({ id: "f", label: "תדר", min: 0, max: 100, value: 62 })}
      ${range({ id: "vol", label: "עוצמת האות", min: 0, max: 100, step: 5, value: 80 })}
      ${choice({ id: "cone", label: "קונוס", options: [{ v: "big", label: "גדול" }, { v: "small", label: "קטן" }], value: "big" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    $("kind").style.cssText = "font-size:16px;line-height:25.2px;white-space:nowrap";
    $("bands").innerHTML = Array.from({ length: NS }, (_, i) => `<rect x="${AX + i * STRIP}" y="${AY0}" width="${Math.min(STRIP, AW - i * STRIP)}" height="${AY1 - AY0}"/>`).join("");
    $("parts").innerHTML = PARTS.map((p) => `<circle cy="${p.y.toFixed(1)}" r="1.5"/>`).join("");
    const bands = [...$("bands").children], dots = [...$("parts").children];
    const mov = $("mov"), trace = $("trace"), now = $("now");

    // מצב לתצוגה
    let k = 0, depth = 0, amp = 0, conePx = 0, fDisp = 1, cyclesInWindow = 1, V = 0, phase = 0;

    wire(root, ({ f: s, vol, cone }) => {
      const f = freqOf(s), c = CONES[cone];
      V = vol / 100;
      const lam = C / f; // מטר
      const p = pressure(c, f, V), db = p > 0 ? 20 * Math.log10(p / P0) : null;
      const x = excursion(c, f, V);

      out(root, "f-out", `${fmt(f, 0)} הרץ`);
      out(root, "vol-out", `${vol}%`);
      out(root, "wl", lam >= 1 ? `${fmt(lam, lam >= 10 ? 1 : 2)} מ׳` : `${fmt(lam * 100, 0)} ס״מ`);
      out(root, "db", db === null ? "–" : fmt(db, 0));
      out(root, "kind", f < 80 ? "בס עמוק" : f < 300 ? "קול דיבור" : f < 1000 ? "צלילי ביניים" : "צליל גבוה");
      out(root, "cname", c.name);

      // האוויר: מספר הגל בציור (1 יחידה = 1 ס"מ) ועומק הדחיסה יחסית ללחץ הקול
      const lamPx = lam * 100;
      k = (2 * Math.PI) / lamPx;
      depth = clamp(p / P_REF, 0, 1) * 0.9;
      amp = Math.min(depth / k, 16);
      // הקונוס: מהלך יחסי למהלך המרבי, בסולם דחוס
      conePx = x > 0 ? 6 * (x / c.xmax) ** 0.2 : 0;
      fDisp = 0.6 * (f / 20) ** 0.35; // תדר התצוגה: 0.6 עד 3 תנודות בשנייה
      cyclesInWindow = f * WINDOW;
      out(root, "slow", `הילוך איטי פי ${fmt(Math.round(f / fDisp / 10) * 10, 0)}`);
      $("spk").setAttribute("transform", `translate(${(22 * (1 - c.scale)).toFixed(1)} ${(76 * (1 - c.scale)).toFixed(1)}) scale(${c.scale})`);

      // סרגל אורך הגל
      const fits = lamPx <= AW - 8;
      $("lam").setAttribute("d", fits ? `M${AX + 4} 20h${lamPx.toFixed(1)}M${AX + 4} 16v8M${(AX + 4 + lamPx).toFixed(1)} 16v8` : `M${AX + 4} 20H${AX + AW - 4}M${AX + 4} 16v8`);
      $("lam").style.strokeDasharray = fits ? "" : "4 3";
      $("lamt").setAttribute("x", fits ? clamp(AX + 4 + lamPx / 2, AX + 40, AX + AW - 40) + (lamPx < 70 ? 52 : 0) : AX + AW / 2);
      $("lamt").setAttribute("y", fits && lamPx >= 70 ? 13 : fits ? 23 : 13);
      out(root, "lamt", fits ? "גל אחד" : "גל אחד ארוך מהתמונה");

      out(root, "note",
        V === 0 ? "אין זרם בסליל: הקונוס עומד והאוויר שקט"
        : f < c.f0 * 0.9 && cone === "small" ? "הקונוס הקטן מזיז מעט מדי אוויר לצליל נמוך כזה"
        : f < c.f0 * 0.9 ? "מתחת ל־40 הרץ גם הקונוס הגדול מתחיל להיחלש"
        : lam > 2 ? "גל ארוך: כל האוויר שבתמונה נדחס ומתרווח כמעט יחד"
        : lam < 0.35 ? "גלים קצרים וצפופים: הקונוס רק רוטט, כמעט בלי לזוז"
        : "");
    });

    loop(root, (dt) => {
      phase = (phase + dt * fDisp * 2 * Math.PI) % (2 * Math.PI);
      const sn = Math.sin(phase);
      mov.setAttribute("transform", `translate(${(conePx * sn).toFixed(2)} 0)`);
      // חלקיק שמקום המנוחה שלו x0 זז ב־amp·sin(φ − k·x0); הצפיפות היא 1 + amp·k·cos(φ − k·x0)
      for (let i = 0; i < dots.length; i++) {
        const x0 = PARTS[i].x;
        dots[i].setAttribute("cx", (AX + clamp(x0 + amp * Math.sin(phase - k * x0), 1.5, AW - 1.5)).toFixed(1));
      }
      for (let i = 0; i < NS; i++) {
        const x0 = (i + 0.5) * STRIP;
        bands[i].setAttribute("opacity", (0.32 * depth * (1 + Math.cos(phase - k * x0))).toFixed(3));
      }
      // האות: הנקודה השמאלית היא "עכשיו" ונעה יחד עם הקונוס
      const n = Math.max(60, Math.min(400, Math.ceil(cyclesInWindow * 16)));
      let d = "";
      for (let i = 0; i <= n; i++) {
        const u = i / n;
        d += `${i ? "L" : "M"}${(TX + u * TW).toFixed(1)} ${(TY - TA * V * Math.sin(phase - 2 * Math.PI * cyclesInWindow * u)).toFixed(1)}`;
      }
      trace.setAttribute("d", d);
      now.setAttribute("cy", (TY - TA * V * sn).toFixed(1));
    });
  },
};
