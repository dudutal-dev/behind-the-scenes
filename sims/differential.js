// דיפרנציאל: רכב בפנייה שמאלה, מבט מלמעלה. משנים את רדיוס הפנייה ורואים כמה מהר כל גלגל מונע צריך להסתובב.
// גיאומטריה: מרכז הפנייה נמצא על המשך הציר האחורי. רדיוס כל גלגל אחורי = R ∓ T/2.
//   יחס המהירויות חיצוני/פנימי = (R + T/2) / (R − T/2), כש־R הוא רדיוס מרכז הציר האחורי.
//   T = 1.55 מ' (רוחב מסלול טיפוסי) · בסיס גלגלים 2.6 מ' · היקף גלגל 1.95 מ' (כמו בהדמיית תיבת ההילוכים)
//   מהירות מרכז הציר: 15 קמ"ש קבועה. סל"ד גלגל = מהירות הגלגל / היקף · 60.
// דיפרנציאל: כל גלגל מסתובב בדיוק במהירות הדרך שלו (בלי החלקה), והממוצע שווה למהירות התושבת.
// ציר נעול: שני הגלגלים חייבים את אותה מהירות (הממוצע), ולכן כל צמיג מחליק ב־(T/2)/R
//   (פישוט: מניחים החלקה סימטרית; במציאות הצמיג עם האחיזה הפחותה מחליק יותר).
// גלגלים קדמיים: זוויות אקרמן atan(L/(R ∓ T/2)). קנה המידה באיור אמיתי (1 מ' = 19.4 פיקסלים).
// הקווים המקווקווים על המסלולים זזים במהירות האמיתית של הקרקע תחת כל גלגל (מואטת פי 2.5),
// והפסים על הצמיגים זזים במהירות ההיקפית של הגלגל: כשהן שוות, אין החלקה.
import { range, choice, readouts, wire, out, fmt, loop } from "./kit.js";

const T = 1.55, WB = 2.6, CIRC = 1.95, V = 15 / 3.6;
const S = 30 / T; // פיקסלים למטר: רוחב המסלול באיור 30 פיקסלים
const CXC = 196, RY = 150, FY = RY - WB * S; // מרכז הציר האחורי והציר הקדמי
const SLOW = 0.4; // האטה של התנועה באיור
const GAP = 10; // מרווח הפסים על הצמיג

export default {
  title: "שנה את רדיוס הפנייה",
  hint: "בפנייה חדה הגלגל החיצוני חייב להסתובב הרבה יותר מהר. נעל את הציר וראה מה קורה לצמיגים כשאין דיפרנציאל.",
  mount(root) {
    const wheel = (id) => `
      <g id="${id}">
        <clipPath id="${id}-c"><rect x="-4.5" y="-10" width="9" height="20" rx="2.5"/></clipPath>
        <rect class="fl-dark st-ink" stroke-width="1.6" x="-4.5" y="-10" width="9" height="20" rx="2.5"/>
        <g clip-path="url(#${id}-c)"><g id="${id}-t">${[-2, -1, 0, 1, 2].map((k) => `<rect class="fl-line" x="-4.5" y="${k * GAP - 1}" width="9" height="2.2"/>`).join("")}</g></g>
      </g>`;
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="רכב מלמעלה בפנייה שמאלה: מסלולי שני הגלגלים האחוריים, המהירות של כל אחד מהם, ומה קורה כשהציר נעול">
        <!-- מסלולי הגלגלים: עיגולים סביב מרכז הפנייה -->
        <circle id="pi" class="fl-none st-cold" stroke-width="2.5" stroke-dasharray="8 8"/>
        <circle id="po" class="fl-none st-hot" stroke-width="2.5" stroke-dasharray="8 8"/>
        <path id="ray" class="thin" stroke-dasharray="2 4"/>
        <circle id="ctr" class="fl-violet" r="3.5"/>
        <!-- סימני גרירה בציר נעול -->
        <g id="skid" opacity="0">
          <path class="wire st-hot" style="stroke-width:2" stroke-dasharray="2 3" d="M${CXC - 15} ${RY + 12}v22"/>
          <path class="wire st-hot" style="stroke-width:2" stroke-dasharray="2 3" d="M${CXC + 15} ${RY + 12}v22"/>
        </g>
        <!-- המרכב -->
        <rect class="body" x="${CXC - 21}" y="${FY - 16}" width="42" height="${RY - FY + 34}" rx="10"/>
        <rect class="fl-cold-soft st-ink" stroke-width="1" x="${CXC - 15}" y="${FY + 6}" width="30" height="14" rx="3"/>
        <path class="wire st-ink" style="stroke-width:2.5" d="M${CXC - 15} ${RY}H${CXC + 15}"/>
        <rect id="diff" class="fl-warm st-ink" stroke-width="1.2" x="${CXC - 5}" y="${RY - 5}" width="10" height="10" rx="2"/>
        <path id="lockx" class="wire st-hot" style="stroke-width:2" d="M${CXC - 3.5} ${RY - 3.5}l7 7m0 -7l-7 7" opacity="0"/>
        <g id="fl" transform="translate(${CXC - 15} ${FY})"><rect class="fl-dark st-ink" stroke-width="1.6" x="-4" y="-9" width="8" height="18" rx="2.5"/></g>
        <g id="fr" transform="translate(${CXC + 15} ${FY})"><rect class="fl-dark st-ink" stroke-width="1.6" x="-4" y="-9" width="8" height="18" rx="2.5"/></g>
        ${wheel("wl")}${wheel("wr")}
        <!-- מדי מהירות הגלגלים (סל"ד) -->
        <text x="282" y="30" class="sm">סל״ד</text>
        <rect class="fl-soft" x="258" y="36" width="12" height="110" rx="4"/><rect id="bl" class="fl-cold" x="258" y="146" width="12" height="0" rx="4"/>
        <rect class="fl-soft" x="292" y="36" width="12" height="110" rx="4"/><rect id="br" class="fl-hot" x="292" y="146" width="12" height="0" rx="4"/>
        <text id="tl" x="264" y="162" class="sm" style="fill:var(--s-cold)"></text>
        <text id="tr" x="298" y="162" class="sm" style="fill:var(--s-hot)"></text>
        <text x="264" y="176" class="sm">פנימי</text>
        <text x="298" y="176" class="sm">חיצוני</text>
        <text id="note" x="160" y="14" class="sm"></text>
      </svg>
      ${readouts([{ id: "ratio", label: "חיצוני ÷ פנימי" }, { id: "slip", label: "החלקת הצמיגים" }])}
      ${range({ id: "r", label: "רדיוס הפנייה", min: 3.5, max: 40, step: 0.5, value: 6 })}
      ${choice({ id: "ax", label: "ציר אחורי", options: [{ v: "diff", label: "דיפרנציאל" }, { v: "lock", label: "ציר נעול" }], value: "diff" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let st = { vi: V, vo: V, wi: V, wo: V, R: 6 }; // מהירות קרקע (v) ומהירות היקפית של הגלגל (w), מ' לשנייה
    let di = 0, dO = 0, ti = 0, to = 0;

    wire(root, ({ r: R, ax }) => {
      const locked = ax === "lock";
      const ri = R - T / 2, ro = R + T / 2, ratio = ro / ri;
      const vi = (V * ri) / R, vo = (V * ro) / R;
      const avg = (vi + vo) / 2; // = V
      const wi = locked ? avg : vi, wo = locked ? avg : vo;
      st = { vi, vo, wi, wo, R };
      const cx = CXC - R * S;
      $("pi").setAttribute("cx", cx.toFixed(1)); $("pi").setAttribute("cy", RY); $("pi").setAttribute("r", (ri * S).toFixed(1));
      $("po").setAttribute("cx", cx.toFixed(1)); $("po").setAttribute("cy", RY); $("po").setAttribute("r", (ro * S).toFixed(1));
      $("ctr").setAttribute("cx", cx.toFixed(1)); $("ctr").setAttribute("cy", RY);
      $("ctr").style.display = cx > 6 ? "" : "none";
      $("ray").setAttribute("d", `M${Math.max(cx, -20).toFixed(1)} ${RY}H${CXC - 20}`);
      // זוויות אקרמן לגלגלים הקדמיים (פנייה שמאלה = סיבוב נגד כיוון השעון)
      const di_ = (Math.atan(WB / ri) * 180) / Math.PI, do_ = (Math.atan(WB / ro) * 180) / Math.PI;
      $("fl").setAttribute("transform", `translate(${CXC - 15} ${FY}) rotate(${(-di_).toFixed(1)})`);
      $("fr").setAttribute("transform", `translate(${CXC + 15} ${FY}) rotate(${(-do_).toFixed(1)})`);
      const rpm = (w) => (w / CIRC) * 60;
      out(root, "tl", fmt(rpm(wi), 0));
      out(root, "tr", fmt(rpm(wo), 0));
      // עמודות: 110 פיקסלים = 200 סל"ד
      const bar = (id, w) => { const h = (110 * rpm(w)) / 200; $(id).setAttribute("height", h.toFixed(1)); $(id).setAttribute("y", (146 - h).toFixed(1)); };
      bar("bl", wi); bar("br", wo);
      out(root, "r-out", `${fmt(R)} מ׳`);
      out(root, "ratio", fmt(ratio, 2));
      const slip = locked ? (T / 2 / R) * 100 : 0;
      out(root, "slip", locked ? `${fmt(slip, 0)}%` : "0%");
      $("skid").setAttribute("opacity", locked ? Math.min(1, slip / 8).toFixed(2) : "0");
      $("lockx").setAttribute("opacity", locked ? "1" : "0");
      out(root, "note",
        locked && slip >= 10 ? "ציר נעול בפנייה חדה: הצמיגים נגררים והרכב מתנגד לפנייה"
        : locked ? "ציר נעול: הפנימי מסתובב מהר מדי והחיצוני לאט מדי"
        : R <= 6 ? `פנייה חדה: החיצוני עובר ${fmt((ratio - 1) * 100, 0)}% יותר דרך`
        : R >= 30 ? "פנייה רחבה: ההבדל קטן, אבל הוא קיים בכל פנייה"
        : "הדיפרנציאל נותן לכל גלגל את המהירות של המסלול שלו");
    });

    loop(root, (dt) => {
      // הקרקע זזה תחת כל גלגל במהירות שלו; הצמיג מסתובב במהירות ההיקפית שלו
      di = (di + dt * SLOW * st.vi * S) % 1000;
      dO = (dO + dt * SLOW * st.vo * S) % 1000;
      ti = (ti + dt * SLOW * st.wi * S) % GAP;
      to = (to + dt * SLOW * st.wo * S) % GAP;
      $("pi").setAttribute("stroke-dashoffset", (-di).toFixed(1));
      $("po").setAttribute("stroke-dashoffset", (-dO).toFixed(1));
      // מבט מלמעלה: החלק העליון של הצמיג נע קדימה (למעלה) יחסית לרכב
      $("wl-t").setAttribute("transform", `translate(0 ${(-ti).toFixed(2)})`);
      $("wr-t").setAttribute("transform", `translate(0 ${(-to).toFixed(2)})`);
      $("wl").setAttribute("transform", `translate(${CXC - 15} ${RY})`);
      $("wr").setAttribute("transform", `translate(${CXC + 15} ${RY})`);
    });
  },
};
