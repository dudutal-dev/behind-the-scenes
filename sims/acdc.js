// זרם ישר וזרם חילופין: בוחרים מקור, תדר ושלב יישור, ורואים את האלקטרונים בחוט ואת המתח לאורך הזמן.
// מקור חילופין: v(t) = V · sin(2π·f·t). מקור ישר: v = V קבוע.
// מיישר אידיאלי (בלי מפל מתח על הדיודות):
//   חצי גל: max(0, v) · ממוצע = V/π = 31.8% מהשיא
//   גל מלא: |v| · ממוצע = 2V/π = 63.7% מהשיא
//   מוחלק: גל מלא ואחריו קבל. הקבל נטען עד השיא ומתפרק דרך המכשיר לפי e^(−t/τ) עד שהפעימה הבאה משיגה אותו.
//          τ = 50 אלפיות שנייה (קבוע), ולכן בתדר גבוה יותר האדווה קטנה יותר. ב־50 הרץ הממוצע הוא כ־93% מהשיא.
//          נקודת ההתנתקות מהגל: tan φ = −ω·τ (שם שיפוע הסינוס שווה לשיפוע הדעיכה).
// הממוצע מחושב מספרית על פני מחזור שלם. מספר היפוכי הכיוון בשנייה = 2·f (רק כשהזרם ביציאה באמת מתהפך).
// תנועת האלקטרונים: המהירות יחסית לזרם הרגעי, כך שההעתק הוא האינטגרל שלו (בחילופין: רטט במקום).
// התצוגה מואטת פי 50: 50 הרץ נראים כמחזור אחד בשנייה. חלון הגרף: 40 אלפיות שנייה.
// פישוט: בחוט שלפני המיישר מוצג הזרם שהמקור דוחף (בחצי גל: אותן פעימות, כי המעגל טורי);
// במצב המוחלק הזרם האמיתי מהמקור מגיע בפעימות טעינה קצרות, וזה לא מוצג.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const TAU = 2 * Math.PI, SLOW = 50, TC = 0.05, WINDOW = 0.04;
const GX0 = 34, GX1 = 300, GY = 136, GA = 34; // הגרף: ציר הזמן, קו האפס והמשרעת בפיקסלים
const W1 = [40, 132], W2 = [188, 280], WY = 44; // שני קטעי החוט

// מתח היציאה (ביחידות של השיא) לפי המופע φ
function makeOutput(kind, rect, f) {
  if (kind === "dc") return () => 1;
  if (rect === "none") return (p) => Math.sin(p);
  if (rect === "half") return (p) => Math.max(0, Math.sin(p));
  if (rect === "full") return (p) => Math.abs(Math.sin(p));
  const wt = TAU * f * TC;
  const pd = Math.PI - Math.atan(wt), vd = Math.sin(pd); // נקודת ההתנתקות, מעט אחרי השיא
  const decay = (p) => vd * Math.exp(-(p - pd) / wt);
  let a = 0, b = Math.PI / 2; // נקודת המפגש עם הפעימה הבאה (חצייה)
  for (let i = 0; i < 40; i++) { const m = (a + b) / 2; if (Math.sin(m) < decay(m + Math.PI)) a = m; else b = m; }
  const pc = (a + b) / 2;
  return (p) => {
    const q = ((p % Math.PI) + Math.PI) % Math.PI;
    return q < pc ? decay(q + Math.PI) : q <= pd ? Math.sin(q) : decay(q);
  };
}
const average = (fn) => { let s = 0; for (let i = 0; i < 720; i++) s += fn(((i + 0.5) * TAU) / 720); return s / 720; };

export default {
  title: "הפכו חילופין לזרם ישר",
  hint: "בזרם חילופין האלקטרונים רק רוטטים במקומם. הוסיפו מיישר שלב אחר שלב, כמו במטען, וראו איך הרטט הופך לזרימה בכיוון אחד.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חוט עם אלקטרונים לפני ואחרי מיישר, ומתחתיו גרף של המתח לאורך הזמן">
        <text id="note" x="160" y="14" class="sm"></text>
        <!-- החוט -->
        <path class="pipe st-line" style="stroke-width:11;opacity:.35" d="M${W1[0] - 6} ${WY}H${W2[1] + 6}"/>
        <g id="e1" class="fl-elec st-ink" stroke-width=".8"></g>
        <g id="e2" class="fl-elec st-ink" stroke-width=".8"></g>
        <path id="a1" class="arrow st-ink" style="stroke-width:1.8"/>
        <path id="a2" class="arrow st-ink" style="stroke-width:1.8"/>
        <!-- המקור: שקע או סוללה -->
        <g id="socket">
          <rect class="body" x="8" y="29" width="28" height="30" rx="6"/>
          <circle class="fl-ink" cx="17" cy="44" r="2.4"/><circle class="fl-ink" cx="27" cy="44" r="2.4"/>
        </g>
        <g id="cell">
          <rect class="body" x="8" y="33" width="28" height="22" rx="4"/>
          <rect class="fl-warm" x="26" y="35" width="8" height="18" rx="2"/>
          <text x="30" y="47.500" class="sm" style="stroke:none;fill:#fff">+</text>
          <text x="16" y="47.500" class="sm">−</text>
        </g>
        <text id="srcLab" x="24" y="74" class="sm"></text>
        <!-- המיישר -->
        <g id="box">
          <rect class="body" x="138" y="29" width="44" height="30" rx="6"/>
          <path class="wire st-ink" style="stroke-width:2" d="M146 44H174M167 36V52"/>
          <path class="fl-ink" d="M153 36V52L167 44Z"/>
          <path id="cap" class="wire st-cold" style="stroke-width:2.500" d="M171 33V39M177 33V39"/>
        </g>
        <text id="boxLab" x="160" y="74" class="sm"></text>
        <!-- המכשיר -->
        <rect class="fl-dark st-ink" stroke-width="2" x="286" y="26" width="22" height="36" rx="4"/>
        <rect id="scr" class="fl-cold-soft" x="289" y="30" width="16" height="25" rx="1.500"/>
        <text x="296" y="74" class="sm">מכשיר</text>
        <!-- גרף המתח -->
        <path class="thin st-ink" d="M${GX0} ${GY - GA - 8}V${GY + GA + 8}"/>
        <path class="thin" d="M${GX0} ${GY}H${GX1}"/>
        <path class="thin" style="stroke-dasharray:2 4;stroke-width:1" d="M${GX0} ${GY - GA}H${GX1}M${GX0} ${GY + GA}H${GX1}"/>
        <text x="20" y="${GY - GA + 3}" class="sm">שיא</text>
        <text x="22" y="${GY + 3}" class="sm">0</text>
        <text x="20" y="${GY + GA + 3}" class="sm">הפוך</text>
        <path id="vin" class="thin" style="stroke-dasharray:3 3"/>
        <path id="avg" class="wire st-green" style="stroke-width:1.800;stroke-dasharray:6 4"/>
        <path id="vout" class="wire st-hot"/>
        <circle id="now" class="fl-hot st-ink" stroke-width="1.200" r="3.500" cx="${GX1}"/>
        <text id="avgLab" x="60" y="100" class="sm"></text>
        <path class="thin st-ink" style="stroke-width:1" d="M${GX0} 186v6M${GX1} 186v6M${GX0} 189H112M222 189H${GX1}"/>
        <text x="167" y="192" class="sm">40 אלפיות שנייה (מואט פי 50)</text>
      </svg>
      ${readouts([{ id: "rev", label: "היפוכי כיוון בשנייה" }, { id: "dc", label: "ממוצע, מתוך השיא" }])}
      ${choice({ id: "kind", label: "מקור", options: [{ v: "ac", label: "זרם חילופין" }, { v: "dc", label: "זרם ישר" }], value: "ac" })}
      ${range({ id: "f", label: "תדר", min: 10, max: 100, step: 5, value: 50 })}
      ${choice({ id: "rect", label: "מיישר", options: [{ v: "none", label: "בלי" }, { v: "half", label: "חצי גל" }, { v: "full", label: "גל מלא" }, { v: "smooth", label: "מוחלק" }], value: "none" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const N = 9, SP = (W1[1] - W1[0]) / N;
    const mk = (g) => { g.innerHTML = Array.from({ length: N }, () => `<circle r="3.200" cy="${WY}"/>`).join(""); return [...g.children]; };
    const d1 = mk($("e1")), d2 = mk($("e2"));
    let st = { kind: "ac", rect: "none", f: 50 }, vOut = Math.sin, vIn = Math.sin, phase = 0, x1 = 0, x2 = 0;

    wire(root, ({ kind, rect, f }) => {
      st = { kind, rect, f };
      const ac = kind === "ac";
      vOut = makeOutput(kind, rect, f);
      vIn = !ac ? () => 1 : rect === "half" ? vOut : (p) => Math.sin(p);
      const avg = average(vOut);
      const reversing = ac && rect === "none";
      out(root, "f-out", ac ? `${f} הרץ` : "—");
      $("f").disabled = !ac;
      out(root, "rev", fmt(reversing ? 2 * f : 0, 0));
      out(root, "dc", `${fmt(100 * avg, 1)}%`);
      $("socket").style.display = ac ? "" : "none";
      $("cell").style.display = ac ? "none" : "";
      out(root, "srcLab", ac ? "שקע" : "סוללה");
      $("box").style.display = rect === "none" ? "none" : "";
      $("cap").style.display = rect === "smooth" ? "" : "none";
      out(root, "boxLab", rect === "none" ? "" : rect === "smooth" ? "מיישר וקבל" : "מיישר");
      $("avg").setAttribute("d", `M${GX0} ${(GY - GA * avg).toFixed(1)}H${GX1}`);
      $("avg").style.display = reversing ? "none" : "";
      $("vin").style.display = ac && rect !== "none" ? "" : "none";
      const al = $("avgLab");
      al.textContent = reversing ? "" : "ממוצע";
      al.setAttribute("y", (GY - GA * avg + (avg > 0.6 ? 12 : -5)).toFixed(1)); // מתחת לקו כשהוא קרוב לשיא
      out(root, "note",
        !ac ? (rect === "none" ? "זרם ישר: האלקטרונים נדחפים תמיד לאותו כיוון, והמתח קבוע" : "זרם ישר עובר במיישר בלי שינוי: אין מה ליישר")
        : rect === "none" ? (f === 50 ? "50 הרץ, כמו בשקע בישראל: הכיוון מתהפך 100 פעמים בשנייה"
          : f === 60 ? "60 הרץ, כמו בשקע בארצות הברית: 120 היפוכים בשנייה"
          : "האלקטרונים רק רוטטים במקומם, ובממוצע לא מתקדמים לשום מקום")
        : rect === "half" ? "המיישר חוסם את החצי ההפוך: פעימות בכיוון אחד, עם הפסקות"
        : rect === "full" ? "גם החצי ההפוך מנוצל: פעימות צפופות, כולן באותו כיוון"
        : avg > 0.85 ? "קבל ממלא את הרווחים בין הפעימות: כמעט זרם ישר, כמו שהשבב צריך"
        : "בתדר נמוך הקבל מתרוקן בין פעימה לפעימה, והמתח גלי יותר");
    });

    const place = (els, [a, b], x) => els.forEach((c, k) => {
      const u = (((x + k * SP) % (b - a)) + (b - a)) % (b - a);
      c.setAttribute("cx", (a + u).toFixed(1));
      c.setAttribute("opacity", clamp(Math.min(u, b - a - u) / 6, 0, 1).toFixed(2));
    });
    const arrow = (el, cx, i) => {
      const L = 16 * clamp(i, -1, 1), h = Math.sign(L) * Math.min(4, Math.abs(L));
      el.setAttribute("d", Math.abs(L) < 1.5 ? "" : `M${cx - L / 2} 26H${cx + L / 2}m${-h} -3l${h} 3l${-h} 3`);
    };

    loop(root, (dt) => {
      const w = (TAU * st.f) / SLOW; // מהירות זוויתית בתצוגה
      phase += dt * w;
      if (phase > 1e4) phase -= TAU * 1000;
      const i1 = vIn(phase), i2 = vOut(phase);
      x1 += dt * 46 * i1;
      x2 += dt * 46 * i2;
      place(d1, W1, x1);
      place(d2, W2, x2);
      arrow($("a1"), (W1[0] + W1[1]) / 2, i1);
      arrow($("a2"), (W2[0] + W2[1]) / 2, i2);
      $("scr").setAttribute("opacity", clamp(0.25 + 0.75 * Math.abs(i2), 0, 1).toFixed(2));
      // הגרף: הרגע הנוכחי בקצה הימני
      const span = WINDOW * TAU * st.f, n = 133;
      let a = "", b = "";
      for (let k = 0; k <= n; k++) {
        const p = phase - span * (1 - k / n), x = (GX0 + ((GX1 - GX0) * k) / n).toFixed(1);
        a += `${k ? "L" : "M"}${x} ${(GY - GA * vOut(p)).toFixed(1)}`;
        b += `${k ? "L" : "M"}${x} ${(GY - GA * Math.sin(p)).toFixed(1)}`;
      }
      $("vout").setAttribute("d", a);
      if (st.kind === "ac" && st.rect !== "none") $("vin").setAttribute("d", b);
      $("now").setAttribute("cy", (GY - GA * i2).toFixed(1));
    });
  },
};
