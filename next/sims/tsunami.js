// צונאמי בדרך לחוף: בוחרים את עומק האוקיינוס ואת גובה הגל ההתחלתי, ורואים את הגל חוצה ים עמוק, מדף רדוד, ומגיע לחוף.
// מהירות גל במים רדודים (הגל ארוך בהרבה מהעומק, וזה נכון לצונאמי גם באוקיינוס הפתוח):
//   v = √(g · d)   g = 9.81 מ׳/שנ׳², d = העומק במטרים. ב־4,000 מ׳: 198 מ׳/שנ׳ = 713 קמ״ש.
// גובה הגל לפי חוק גרין (שימור שטף האנרגיה בגל שמאט, בלי חיכוך ובלי החזרה):
//   H = H₀ · (d₀ / d)^¼   למשל H₀ = 0.5 מ׳, d₀ = 4,000 מ׳: ב־150 מ׳ → 1.14 מ׳, ב־10 מ׳ → 2.24 מ׳.
// חוק גרין מפסיק לחול כשהגל נשבר. כאן מניחים שבירה כש־H ≥ 0.78·d (קריטריון מקובל לגל בודד);
// מאותה נקודה הגובה לא מחושב עוד, והגל שוטף את החוף (הציור של ההצפה איכותי בלבד).
// אורך הגל קצר יחד עם המהירות (זמן מחזור קבוע של כ־15 דקות), ולכן הגל "נדחס" כשהוא מאט.
// פרופיל: ים עמוק בעומק d₀ לאורך 140 ק״מ, מדרון יבשתי של 20 ק״מ עד 150 מ׳, ומדף של 90 ק״מ שמשתפל עד קו החוף.
// פישוטים: אין שקע מוביל (נסיגת הים), אין התפשטות לצדדים, והציור לא בקנה מידה:
// העומק מוצג בסולם שורש והגובה מוגזם מאוד. הזמן מואץ: שנייה על המסך = 10 דקות.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const G = 9.81, BREAK = 0.78, SHELF = 150, TS = 600; // TS: שניות אמיתיות לכל שנייה על המסך
const K_DEEP = 140, K_SLOPE = 160, K_SHORE = 250, K_START = 12;
const SURF = 72, X0 = 10, PXK = (300 - X0) / K_SHORE; // ק״מ → פיקסלים, אחיד לאורך כל הציור
const X = (k) => X0 + k * PXK;
const Y = (d) => SURF + 112 * Math.sqrt(d / 7000); // עומק בסולם שורש, כדי שהמדף הרדוד ייראה
const kmh = (d) => Math.sqrt(G * d) * 3.6;

export default {
  title: "שלחו צונאמי אל החוף",
  hint: "בלב ים הגל מהיר ונמוך. על המדף הרדוד הוא מאט, מתקצר ומתרומם, עד שהוא נשבר ושוטף את החוף. כל שינוי במחוונים שולח גל חדש.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של אוקיינוס, מדף יבשתי וחוף, וגל צונאמי שנע מהים העמוק אל החוף">
        <text id="note" x="160" y="15" class="sm"></text>
        <text id="clock" x="54" y="31" class="sm"></text>
        <path id="sea" class="fl-cold-soft"/>
        <path id="surf" class="wire st-cold" style="stroke-width:1.8"/>
        <path id="run" class="fl-cold st-cold" style="stroke-width:1;fill-opacity:.55"/>
        <path id="floor" class="fl-soft st-ink" style="stroke-width:2;stroke-linejoin:round"/>
        <g id="ship"><path class="body" style="stroke-width:1.4" d="M-10 -5H10L7 0H-7Z"/><path class="thin st-ink" d="M-2 -5V-11H4V-5"/></g>
        <path id="probe" class="thin st-hot" style="stroke-dasharray:2 3"/>
        <circle id="crest" class="fl-hot st-ink" style="stroke-width:1.2" r="3"/>
        <path class="body" style="stroke-width:1.4" d="M309 59V51L314 47L319 51V59"/>
      </svg>
      ${readouts([{ id: "v", label: "מהירות (קמ״ש)" }, { id: "h", label: "גובה הגל (מ׳)" }, { id: "dd", label: "עומק כאן (מ׳)" }])}
      ${range({ id: "d0", label: "עומק הים", min: 500, max: 7000, step: 100, value: 4000 })}
      ${range({ id: "h0", label: "גובה הגל", min: 0.1, max: 3, step: 0.1, value: 0.5 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let d0 = 4000, h0 = 0.5, k = K_START, simT = 0, broken = null, after = 0;

    // עומק המים לפי המרחק מהרעידה (ק״מ)
    const depth = (x) => {
      if (x <= K_DEEP) return d0;
      if (x <= K_SLOPE) { const t = (x - K_DEEP) / (K_SLOPE - K_DEEP); return d0 + (SHELF - d0) * (1 - Math.cos(Math.PI * t)) / 2; }
      return Math.max(0, (SHELF * (K_SHORE - x)) / (K_SHORE - K_SLOPE));
    };
    const green = (d) => h0 * Math.pow(d0 / d, 0.25);

    const drawBed = () => {
      let fl = `M${X0 - 12} 202V${Y(d0).toFixed(1)}`, sea = `M${X0 - 12} ${SURF}`;
      for (let x = 0; x <= K_SHORE; x += 2) fl += `L${X(x).toFixed(1)} ${Y(depth(x)).toFixed(1)}`;
      fl += "L310 60L322 50V202Z";
      sea += `H${X(K_SHORE)}V202H${X0 - 12}Z`;
      $("floor").setAttribute("d", fl);
      $("sea").setAttribute("d", sea);
    };

    const restart = () => { k = K_START; simT = 0; broken = null; after = 0; };

    const frame = () => {
      const d = Math.max(depth(k), 0.01), v = kmh(d);
      let H = broken ? broken.H : green(d);
      const amp = clamp(3 + 6 * H, 3, 40); // גובה מוגזם על המסך
      const sig = Math.max(4, (v * 0.25 / 6) * PXK); // רוחב הגל: v · 15 דק׳ / 6, בפיקסלים
      const cx = X(k);
      // פני הים: גבעת מים סביב החזית. אחרי השבירה הגבעה נשטחת והמים עולים על החוף.
      const fade = broken ? clamp(1 - after / 0.8, 0, 1) : 1;
      let s = "";
      for (let px = X0 - 12; px <= X(K_SHORE); px += 2) {
        const e = amp * fade * Math.exp(-((px - cx) ** 2) / (2 * sig * sig));
        s += `${s ? "L" : "M"}${px.toFixed(1)} ${(SURF - e).toFixed(1)}`;
      }
      $("surf").setAttribute("d", s);
      // הצפה: לשון מים שמטפסת על החוף אחרי השבירה
      if (broken) {
        // היבשה עולה מ־(300,72) אל (310,60) ו־(322,50): הלשון מטפסת לאורכה
        const r = clamp(after / 1.4, 0, 1), xr = X(K_SHORE) + clamp(broken.H * 4, 6, 18) * r, yr = xr <= 310 ? SURF - (xr - 300) * 1.2 : 60 - (xr - 310) * 0.83;
        const x0 = X(broken.k) - 30, top = SURF - 8 * r;
        $("run").setAttribute("d", `M${x0.toFixed(1)} ${SURF}C${(x0 + 14).toFixed(1)} ${top.toFixed(1)} ${(xr - 12).toFixed(1)} ${(yr - 3 * r).toFixed(1)} ${xr.toFixed(1)} ${yr.toFixed(1)}L300 ${SURF}Z`);
      } else $("run").setAttribute("d", "");
      $("crest").setAttribute("cx", cx.toFixed(1));
      $("crest").setAttribute("cy", (SURF - amp * fade).toFixed(1));
      $("probe").setAttribute("d", broken ? "" : `M${cx.toFixed(1)} ${(SURF + 3).toFixed(1)}V${Y(d).toFixed(1)}`);
      // ספינה בלב ים: עולה ויורדת עם הגל, כמעט בלי להרגיש
      const sx = X(45), se = amp * fade * Math.exp(-((sx - cx) ** 2) / (2 * sig * sig));
      $("ship").setAttribute("transform", `translate(${sx} ${(SURF - se + 1).toFixed(1)})`);

      out(root, "v", broken ? "–" : fmt(v, 0));
      out(root, "h", broken ? fmt(broken.H, 1) : fmt(H, H < 10 ? 2 : 1));
      out(root, "dd", broken ? fmt(broken.d, 1) : fmt(d, d < 20 ? 1 : 0));
      const min = Math.floor(simT / 60);
      out(root, "clock", `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")} שעות מהרעידה`);
      let note;
      if (broken) note = `נשבר בעומק ${fmt(broken.d, 1)} מ׳. מכאן חוק גרין לא תקף: הגל שוטף את החוף`;
      else if (k < K_DEEP) { const fast = v > 500 ? "מהיר כמו מטוס" : `${fmt(v, 0)} קמ״ש`; note = H < 1 ? `בלב ים: ${fast}, ונמוך ממטר. הספינה כמעט לא מרגישה` : `בלב ים: ${fast}, בגובה ${fmt(H, 1)} מ׳ בלבד`; }
      else if (k < K_SLOPE) note = "המדרון היבשתי: הים נעשה רדוד, והגל מתחיל להאט";
      else note = `על המדף: האט פי ${fmt(kmh(d0) / v, 0)} וגבוה פי ${fmt(H / h0, 1)} מבלב ים`;
      out(root, "note", note);
    };

    wire(root, (val) => {
      if (val.d0 !== d0 || val.h0 !== h0) { d0 = val.d0; h0 = val.h0; restart(); }
      out(root, "d0-out", `${fmt(d0, 0)} מ׳`);
      out(root, "h0-out", `${fmt(h0, 1)} מ׳`);
      drawBed();
      frame();
    });

    loop(root, (dt) => {
      if (broken) {
        after += dt;
        if (after > 3.2) restart();
      } else {
        // צעדים קטנים: במים רדודים המהירות משתנה מהר
        let rem = dt * TS;
        while (rem > 0 && !broken) {
          const step = Math.min(rem, 20), d = Math.max(depth(k), 0.01);
          k += (Math.sqrt(G * d) * step) / 1000;
          simT += step; rem -= step;
          const dn = Math.max(depth(k), 0.01), H = green(dn);
          if (H >= BREAK * dn || k >= K_SHORE - 0.05) broken = { k, d: dn, H };
        }
      }
      frame();
    });
  },
};
