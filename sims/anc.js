// ביטול רעשים: רעש, גל הפוך והסכום שמגיע לאוזן.
// הרעש: sin(θ). הגל ההפוך: −a·sin(θ − φ), כש-a עוצמתו (0–1) ו-φ האיחור שלו (0° = היפוך מושלם).
// סכום של שני סינוסים באותו תדר הוא סינוס שמשרעתו (ביחס לרעש):
//   R = √(1 + a² − 2a·cos φ)          ובדציבלים: 20·log10(R)
// a=1, φ=0 → R=0 (שקט) · a=1, φ=60° → R=1 (אין רווח) · a=1, φ=180° → R=2 (פי 2, ‎+6 דציבלים).
import { range, readouts, wire, out, fmt, loop } from "./kit.js";

const X0 = 12, X1 = 238, N = 76;      // תחום הציור של הגלים
const AMP = 15;                        // פיקסלים למשרעת 1
const K = (2 * Math.PI) / 92;          // אורך גל של 92 פיקסלים
const Y = { n: 28, a: 78, s: 140 };    // מרכזי שלוש השורות
const XM = 124;                        // קו הסימון האנכי

export default {
  title: "כוונו את הגל ההפוך",
  hint: "גל הפוך בדיוק ובאותה עוצמה נותן שקט. ככל שהוא מאחר הביטול נחלש, ומעבר ל־60° הוא כבר מגביר את הרעש.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שלושה גלים: הרעש, הגל ההפוך שמשמיעה האוזנייה, והסכום שמגיע לאוזן">
        <path class="thin" style="stroke-dasharray:2 4" d="M${X0} ${Y.n}H${X1}M${X0} ${Y.a}H${X1}M${X0} ${Y.s}H${X1}"/>
        <path class="thin" style="stroke-dasharray:3 3" d="M${XM} 8V174"/>
        <path id="wn" class="wire st-warm"/>
        <path id="wa" class="wire st-cold"/>
        <path id="wg" class="thin st-warm" style="stroke-dasharray:3 4;opacity:.7"/>
        <path id="ws" class="wire st-ink" style="stroke-width:3"/>
        <circle id="dn" class="fl-warm st-ink" stroke-width="1" r="3.5" cx="${XM}"/>
        <circle id="da" class="fl-cold st-ink" stroke-width="1" r="3.5" cx="${XM}"/>
        <circle id="ds" class="fl-ink" r="4" cx="${XM}"/>
        <text x="278" y="${Y.n + 4}">רעש</text>
        <text x="278" y="${Y.a + 4}">גל הפוך</text>
        <text x="278" y="${Y.s - 4}">מגיע לאוזן</text>
        <text id="tag" x="278" y="${Y.s + 12}" class="lg"></text>
        <text id="note" x="160" y="191"></text>
      </svg>
      ${readouts([{ id: "res", label: "מהרעש נשאר" }, { id: "db", label: "שינוי בדציבלים" }])}
      ${range({ id: "a", label: "עוצמה", min: 0, max: 100, step: 1, value: 100 })}
      ${range({ id: "ph", label: "איחור", min: 0, max: 180, step: 1, value: 20 })}`;

    const q = (s) => root.querySelector(s);
    const el = { wn: q("#wn"), wa: q("#wa"), wg: q("#wg"), ws: q("#ws"), dn: q("#dn"), da: q("#da"), ds: q("#ds") };
    let a = 1, phi = 0, t = 0;

    wire(root, (v) => {
      a = v.a / 100;
      phi = (v.ph * Math.PI) / 180;
      const R = Math.sqrt(Math.max(0, 1 + a * a - 2 * a * Math.cos(phi)));
      out(root, "a-out", `${v.a}%`);
      out(root, "ph-out", `${v.ph}°`);
      out(root, "res", `${fmt(R * 100, 0)}%`);
      const dB = 20 * Math.log10(R);
      out(root, "db", R < 0.005 ? "שקט" : `\u200e${dB > 0.05 ? "+" : dB < -0.05 ? "−" : ""}${fmt(Math.abs(dB), 1)}`);
      out(root, "tag", `${fmt(R * 100, 0)}%`);
      el.ws.setAttribute("class", `wire ${R > 1.005 ? "st-hot" : R < 0.3 ? "st-green" : "st-ink"}`);
      out(root, "note",
        a === 0 ? "בלי גל הפוך: הרעש מגיע במלואו"
        : R < 0.02 ? "דחיסה פוגשת ריווח: שקט"
        : v.ph >= 178 ? `הגלים צועדים יחד: הרעש חזק פי ${fmt(R, 1)}`
        : R > 1.005 ? "הגל ההפוך מאחר מדי, ועכשיו הוא מגביר את הרעש"
        : R > 0.995 && a > 0.5 ? "בדיוק על הגבול: הגל ההפוך לא עוזר ולא מזיק"
        : R < 0.3 ? "ביטול טוב: נשאר מעט מהרעש"
        : "ביטול חלקי: חלק מהרעש עדיין עובר");
    });

    const draw = () => {
      const w = t * 2.4; // קצב הגלילה (רדיאנים בשנייה)
      let dn = "", da = "", ds = "";
      for (let i = 0; i <= N; i++) {
        const x = X0 + ((X1 - X0) * i) / N;
        const th = K * x - w;
        const n = Math.sin(th), an = -a * Math.sin(th - phi);
        const c = i ? "L" : "M";
        dn += `${c}${x.toFixed(1)} ${(Y.n - AMP * n).toFixed(1)}`;
        da += `${c}${x.toFixed(1)} ${(Y.a - AMP * an).toFixed(1)}`;
        ds += `${c}${x.toFixed(1)} ${(Y.s - AMP * (n + an)).toFixed(1)}`;
      }
      el.wn.setAttribute("d", dn);
      el.wa.setAttribute("d", da);
      el.ws.setAttribute("d", ds);
      el.wg.setAttribute("d", dn.replace(/ (-?[\d.]+)(?=L|$)/g, (m, y) => ` ${(+y + Y.s - Y.n).toFixed(1)}`));
      const th = K * XM - w, n = Math.sin(th), an = -a * Math.sin(th - phi);
      el.dn.setAttribute("cy", Y.n - AMP * n);
      el.da.setAttribute("cy", Y.a - AMP * an);
      el.ds.setAttribute("cy", Y.s - AMP * (n + an));
    };
    draw();
    loop(root, (dt) => { t += dt; draw(); });
  },
};
