// מנעול צילינדר: "חותכים" מפתח — קובעים גובה לכל אחת מחמש השיניים, עד שכל חמשת זוגות הפינים מתיישרים על קו הגזירה.
//
// המודל (גיאומטרי, מדויק): לכל קידוח i יש פין מפתח באורך L_i ומעליו פין נעילה וקפיץ.
// שן המפתח בגובה h (0–9) מרימה את תחתית פין המפתח; נקודת המפגש בין שני הפינים נמצאת
// בגובה h + L_i. המנעול בנוי כך ש-L_i = קו הגזירה − c_i, כאשר c_i הוא הגובה הנכון של השן.
//   h = c  → המפגש בדיוק על קו הגזירה, הזוג חופשי.
//   h < c  → המפגש מתחת לקו: פין הנעילה (העליון) חוצה את הקו וחוסם.
//   h > c  → המפגש מעל הקו: פין המפתח (התחתון) חוצה את הקו וחוסם.
// הגליל מסתובב רק כשכל חמשת הזוגות חופשיים.
// מספר המפתחות האפשריים = גבהים בחזקת מספר הפינים = 10^5 = 100,000 (כמו בטקסט: "כעשרה גבהים" לכל פין).
import { readouts, out, fmt, clamp, loop } from "./kit.js";

const N = 5;            // פינים
const LEVELS = 10;      // גבהים אפשריים לכל שן: 0..9
const STEP = 3;         // פיקסלים לכל מדרגת גובה
const X0 = 50, DX = 44; // מרכזי הקידוחים
const SHEAR = 92;       // קו הגזירה
const KEY0 = 132;       // גובה פני השן כש-h=0
const DRIVER = 32;      // אורך פין הנעילה (ארוך מספיק כדי לחצות תמיד את הקו כשהשן נמוכה מדי)
const BORE_TOP = 14;
const TOL = 0.12;       // סף "מיושר" לתצוגה בזמן התנועה (במדרגות)
const colX = (i) => X0 + i * DX;

const spring = (x, y1, y2) => {
  const n = 7, dy = (y2 - y1) / n;
  let d = `M${x} ${y1.toFixed(1)}`;
  for (let k = 1; k < n; k++) d += `L${x + (k % 2 ? 4 : -4)} ${(y1 + dy * k).toFixed(1)}`;
  return d + `L${x} ${y2.toFixed(1)}`;
};

export default {
  title: "חתוך מפתח שפותח",
  hint: "קבע גובה לכל שן עד שהמפגש בין שני הפינים יושב בדיוק על קו הגזירה. פין אדום חוצה את הקו וחוסם; מספיק אחד כזה כדי שהגליל לא יסתובב.",
  mount(root) {
    const cols = Array.from({ length: N }, (_, i) => i);
    root.innerHTML = `
      <style>
        .lk-pad{direction:ltr;display:grid;grid-template-columns:8.75% repeat(5,13.75%) 2.5% 18.75%;grid-template-rows:42px 42px;margin-top:10px}
        .lk-pad button{margin:3px;border-radius:13px;border:1px solid var(--line);background:var(--card);box-shadow:var(--shadow);font-size:22px;font-weight:700;line-height:1;color:var(--ink);touch-action:manipulation;-webkit-tap-highlight-color:transparent}
        .lk-pad button:active{background:var(--soft)}
        .lk-pad button:disabled{opacity:.35}
        .lk-pad .lk-new{grid-column:8;grid-row:1/3;font-size:13.5px;line-height:1.25;color:#fff;border-color:transparent;background:linear-gradient(140deg,var(--c1),var(--c2))}
        .lk-pin{transition:fill .15s}
        .lk-tap{fill:transparent;cursor:pointer}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של מנעול צילינדר: גליל, גוף, קו גזירה וחמישה זוגות פינים שהמפתח מרים">
        <!-- גוף קבוע -->
        <rect class="fl-soft st-ink" stroke-width="2" x="24" y="8" width="228" height="150" rx="6"/>
        <!-- הגליל המסתובב -->
        <rect class="body" x="24" y="${SHEAR}" width="228" height="58"/>
        <rect id="tint" class="fl-green" x="25" y="${SHEAR + 1}" width="226" height="56" opacity="0"/>
        <!-- קידוחים ותעלת המפתח -->
        ${cols.map((i) => `<rect class="fl-bg st-line" stroke-width="1" x="${colX(i) - 8}" y="${BORE_TOP}" width="16" height="${104 - BORE_TOP}"/>`).join("")}
        <path class="fl-bg st-line" stroke-width="1" d="M24 102H244V144H24"/>
        <rect class="fl-bg" x="20" y="102.500" width="8" height="41"/>
        <!-- המפתח -->
        <path id="key" class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round"/>
        <!-- זוגות הפינים -->
        ${cols.map((i) => `<g>
          <path id="sp${i}" class="st-ink fl-none" stroke-width="1.300" stroke-linejoin="round"/>
          <rect id="dr${i}" class="lk-pin fl-cold st-ink" stroke-width="1.200" x="${colX(i) - 6}" width="12" height="${DRIVER}" rx="1.500"/>
          <path id="kp${i}" class="lk-pin fl-warm st-ink" stroke-width="1.200" stroke-linejoin="round"/>
          <path id="ok${i}" class="fl-green" opacity="0" d="M${colX(i) - 15} ${SHEAR - 4.500}l6 4.500l-6 4.500zM${colX(i) + 15} ${SHEAR - 4.500}l-6 4.500l6 4.500z"/>
        </g>`).join("")}
        <!-- קו הגזירה -->
        <path class="st-ink fl-none" stroke-width="1.500" stroke-dasharray="5 4" d="M14 ${SHEAR}H262"/>
        <text x="289" y="${SHEAR + 3.500}" class="sm">קו הגזירה</text>
        <!-- גובה כל שן -->
        ${cols.map((i) => `<text id="h${i}" x="${colX(i)}" y="174" class="lg" direction="ltr"></text>`).join("")}
        <!-- מבט מלפנים: הגליל מסתובב כשהוא חופשי -->
        <circle class="fl-soft st-ink" stroke-width="2" cx="288" cy="40" r="24"/>
        <rect class="fl-bg st-line" stroke-width="1" x="284.500" y="18" width="7" height="12"/>
        <rect class="fl-cold st-ink" stroke-width="1" x="285.500" y="19" width="5" height="10.500"/>
        <g id="plug">
          <circle class="body" cx="288" cy="40" r="14"/>
          <rect class="fl-warm st-ink" stroke-width="1" x="285.500" y="27" width="5" height="6.500"/>
          <rect class="fl-line st-ink" stroke-width="1" x="285.500" y="33.500" width="5" height="16" rx="1"/>
        </g>
        <rect id="stub" class="fl-hot st-ink" stroke-width="1" x="285.500" y="22" width="5" height="9"/>
        <text x="288" y="77" class="sm">מבט מלפנים</text>
        <!-- הלשון -->
        <rect class="fl-soft st-ink" stroke-width="1.500" x="296" y="106" width="18" height="36" rx="2"/>
        <rect class="fl-bg st-line" stroke-width="1" x="296" y="114" width="13" height="20"/>
        <rect id="bolt" class="fl-line st-ink" stroke-width="1.500" x="272" y="116" width="34" height="16" rx="2"/>
        <rect class="body" x="262" y="108" width="14" height="32" rx="2"/>
        <text x="288" y="154" class="sm">הלשון</text>
        <text id="state" x="288" y="174" class="lg"></text>
        <text id="note" x="138" y="192" class="sm"></text>
        <!-- אזורי הקשה: הקשה על קידוח מרימה את השן -->
        ${cols.map((i) => `<rect class="lk-tap" data-tap="${i}" x="${colX(i) - 22}" y="8" width="44" height="172"/>`).join("")}
      </svg>
      ${readouts([{ id: "n", label: "פינים מיושרים" }, { id: "keys", label: "מפתחות אפשריים" }])}
      <div class="lk-pad">
        ${cols.map((i) => `<button type="button" data-i="${i}" data-d="1" style="grid-column:${i + 2};grid-row:1" aria-label="הרם את שן ${i + 1}">+</button>
          <button type="button" data-i="${i}" data-d="-1" style="grid-column:${i + 2};grid-row:2" aria-label="הנמך את שן ${i + 1}">−</button>`).join("")}
        <button type="button" class="lk-new">מנעול<br>חדש</button>
      </div>`;

    const q = (s) => root.querySelector(s);
    const el = (p) => cols.map((i) => q(`#${p}${i}`));
    const E = { sp: el("sp"), dr: el("dr"), kp: el("kp"), ok: el("ok"), h: el("h") };
    const keyEl = q("#key"), plug = q("#plug"), bolt = q("#bolt"), tint = q("#tint"), stub = q("#stub");

    let code = [4, 7, 2, 8, 5];           // הצירוף הסודי של המנעול הראשון
    const cut = [4, 4, 4, 4, 4];          // המפתח שהקורא חותך
    const shown = cut.slice();            // הגובה המוצג (נע בהדרגה אל cut)
    let turn = 0;                         // 0 נעול .. 1 פתוח

    const refresh = () => {
      const aligned = cols.filter((i) => cut[i] === code[i]).length;
      const low = cols.filter((i) => cut[i] < code[i]).length;
      const high = N - aligned - low;
      out(root, "n", `${aligned} מתוך ${N}`);
      out(root, "keys", fmt(LEVELS ** N, 0));
      cols.forEach((i) => out(root, `h${i}`, String(cut[i])));
      out(root, "state", aligned === N ? "פתוח" : "נעול");
      out(root, "note",
        aligned === N ? "כל הזוגות על הקו: שום פין לא חוסם, והגליל מסתובב"
        : aligned === N - 1 ? "פין אחד עדיין חוצה את הקו — וזה מספיק כדי לנעול"
        : low && high ? "פין עליון אדום: השן נמוכה מדי. תחתון אדום: גבוהה מדי"
        : low ? "פין נעילה (העליון) חוצה את הקו: השן נמוכה מדי"
        : "פין מפתח (התחתון) חוצה את הקו: השן גבוהה מדי");
      root.querySelectorAll(".lk-pad button[data-i]").forEach((b) => {
        const v = cut[+b.dataset.i];
        b.disabled = +b.dataset.d > 0 ? v >= LEVELS - 1 : v <= 0;
      });
    };

    const draw = () => {
      let free = 0;
      const tops = [];
      cols.forEach((i) => {
        const x = colX(i);
        const keyTop = KEY0 - STEP * shown[i];
        const gap = SHEAR + STEP * (code[i] - shown[i]); // נקודת המפגש בין שני הפינים
        tops.push(keyTop);
        E.kp[i].setAttribute("d", `M${x - 6} ${gap.toFixed(2)}V${(keyTop - 5).toFixed(2)}Q${x - 6} ${keyTop.toFixed(2)} ${x} ${keyTop.toFixed(2)}Q${x + 6} ${keyTop.toFixed(2)} ${x + 6} ${(keyTop - 5).toFixed(2)}V${gap.toFixed(2)}z`);
        E.dr[i].setAttribute("y", (gap - DRIVER).toFixed(2));
        E.sp[i].setAttribute("d", spring(x, BORE_TOP + 1, gap - DRIVER));
        const off = shown[i] - code[i];
        const ok = Math.abs(off) <= TOL;
        if (ok) free++;
        E.dr[i].setAttribute("class", `lk-pin st-ink ${off < -TOL ? "fl-hot" : "fl-cold"}`);
        E.kp[i].setAttribute("class", `lk-pin st-ink ${off > TOL ? "fl-hot" : "fl-warm"}`);
        E.ok[i].setAttribute("opacity", ok ? 1 : 0);
      });
      // פרופיל המפתח: מדף שטוח מתחת לכל פין ושיפועים ביניהם
      let d = `M-4 104H30`;
      tops.forEach((t, i) => { d += `L${colX(i) - 7} ${t.toFixed(2)}H${colX(i) + 7}`; });
      keyEl.setAttribute("d", d + `L245 138V142H-4z`);
      return free === N;
    };

    loop(root, (dt) => {
      cols.forEach((i) => {
        const d = cut[i] - shown[i];
        shown[i] = Math.abs(d) < 0.01 ? cut[i] : shown[i] + d * Math.min(1, dt * 16);
      });
      const open = draw();
      turn = clamp(turn + (open ? 1 : -1) * dt * 2.6, 0, 1);
      const e = turn * turn * (3 - 2 * turn);
      plug.setAttribute("transform", `rotate(${(90 * e).toFixed(1)} 288 40)`);
      bolt.setAttribute("width", (34 - 24 * e).toFixed(1));
      tint.setAttribute("opacity", (0.38 * e).toFixed(2));
      stub.setAttribute("opacity", open ? 0 : 1);
    });

    const set = (i, v) => { cut[i] = v; refresh(); };
    root.addEventListener("click", (e) => {
      const b = e.target.closest(".lk-pad button");
      if (b) {
        if (b.classList.contains("lk-new")) {
          // צירוף אקראי חדש; המפתח חוזר להיות "גולמי" באמצע הטווח, ולכל היותר פין אחד כבר מיושר
          do { code = cols.map(() => Math.floor(Math.random() * LEVELS)); }
          while (code.filter((c) => c === 4).length > 1);
          cols.forEach((i) => (cut[i] = 4));
          refresh();
        } else {
          const i = +b.dataset.i;
          set(i, clamp(cut[i] + +b.dataset.d, 0, LEVELS - 1));
        }
        return;
      }
      const t = e.target.closest("[data-tap]");
      if (t) { const i = +t.dataset.tap; set(i, (cut[i] + 1) % LEVELS); } // הקשה על הקידוח: מעלה מדרגה, ואחרי 9 חוזר ל-0
    });

    refresh();
    draw();
  },
};
