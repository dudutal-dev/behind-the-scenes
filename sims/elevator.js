// מעלית: משנים את מספר הנוסעים ואת משקולת הנגד, שולחים את התא למעלה או למטה, ורואים כמה המנוע צריך לעבוד.
//
// מסות: תא ריק 1,000 ק״ג · נוסע 75 ק״ג · עומס מרבי 10 נוסעים = 750 ק״ג.
//   משקולת הנגד = התא הריק + אחוז נבחר מהעומס המרבי (ברירת המחדל 50%, כמו בטקסט: "כמו התא ועוד כחצי מהעומס").
// ההפרש שהמנוע מחזיק: Δm = m(תא + נוסעים) − m(משקולת).
// הספק המנוע במהירות קבועה: P = Δm · g · v · (כיוון),  g = 9.81 מ׳/ש²,  v = 1.5 מ׳/ש (מהירות אופיינית לבניין מגורים).
//   כיוון = +1 בעלייה, −1 בירידה. P חיובי: המנוע מרים את ההפרש. P שלילי: הצד הכבד יורד מעצמו והמנוע רק בולם
//   (במעליות חדשות הוא אף מחזיר אז חשמל לרשת).
// פישוטים: בלי חיכוך, בלי משקל הכבלים ובלי האצה בתחילת הנסיעה. התנועה בציור מואצת פי כמה לעומת 1.5 מ׳/ש.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const CAR = 1000, PERSON = 75, MAXN = 10, RATED = PERSON * MAXN, G = 9.81, V = 1.5;
const SX = 96, SY = 36, SR = 26;         // גלגל ההנעה
const CARX = SX - SR, CWX = SX + SR;     // ציר התא וציר המשקולת
const CW_W = 24, CAR_W = 46, CAR_H = 40;
const TOP = 66, RUN = 58;                // גובה גג התא בקומה העליונה, ואורך הנסיעה בפיקסלים
const BX = 256, BY = 46, BARM = 34;      // מאזניים
const GXC = 256, GY = 134, GHALF = 44;   // מד ההספק
const PMAX = RATED * G * V / 1000;       // 11.0 קילוואט: ההספק הגדול ביותר האפשרי כאן

const person = (k) => {
  const x = -17 + (k % 5) * 8.500, y = k < 5 ? 0 : -14;
  return `<g data-p="${k}"><circle class="fl-ink" cx="${x}" cy="${y + CAR_H - 15}" r="2.800"/><path class="fl-ink" d="M${x - 3.200} ${y + CAR_H - 3}v-5.500a3.200 3.200 0 0 1 6.400 0v5.500z"/></g>`;
};

export default {
  title: "העמס את המעלית ושלח אותה",
  hint: "המנוע מזיז רק את ההפרש בין התא למשקולת. חפש את מספר הנוסעים שבו הוא כמעט לא עובד, ובדוק מה קורה כשתא ריק צריך לרדת.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="פיר מעלית: גלגל הנעה למעלה, תא עם נוסעים בצד אחד ומשקולת נגד בצד השני, ולצידם מאזניים ומד הספק של המנוע">
        <!-- פיר -->
        <rect class="fl-soft st-line" stroke-width="1.500" x="42" y="52" width="${CWX + 18 - 42}" height="122" rx="3"/>
        ${[0, 1, 2, 3].map((k) => `<path class="thin" d="M30 ${TOP + CAR_H + (k * RUN) / 3}H42"/><text x="22" y="${TOP + CAR_H + (k * RUN) / 3 + 3}" class="sm">${4 - k}</text>`).join("")}
        <!-- כבלים -->
        <path id="rope" class="st-ink fl-none" stroke-width="2"/>
        <!-- גלגל ההנעה והמנוע -->
        <rect class="fl-dark st-ink" stroke-width="1.500" x="${SX + 22}" y="${SY - 12}" width="34" height="24" rx="4"/>
        <text x="${SX + 39}" y="${SY + 3.500}" class="sm" style="stroke:none;fill:#fff">מנוע</text>
        <g id="sheave">
          <circle class="body" cx="${SX}" cy="${SY}" r="${SR - 3}"/>
          <path class="st-line fl-none" stroke-width="2" d="M${SX - SR + 6} ${SY}H${SX + SR - 6}M${SX} ${SY - SR + 6}V${SY + SR - 6}"/>
          <circle class="fl-ink" cx="${SX}" cy="${SY}" r="3.500"/>
        </g>
        <path id="tq" class="arrow fl-none" stroke-width="3"/>
        <path id="tqh"/>
        <!-- משקולת -->
        <g id="cw">
          <rect id="cwbody" class="fl-violet st-ink" stroke-width="1.500" x="${CWX - CW_W / 2}" y="0" width="${CW_W}" height="30" rx="2"/>
          <g id="cwl" class="st-ink fl-none" stroke-width=".8" opacity=".5"></g>
        </g>
        <!-- תא -->
        <g id="car">
          <rect class="body" x="${CARX - CAR_W / 2}" y="0" width="${CAR_W}" height="${CAR_H}" rx="3"/>
          <g transform="translate(${CARX} 0)">${Array.from({ length: MAXN }, (_, k) => person(k)).join("")}</g>
          <path id="going" class="arrow st-ink" stroke-width="2"/>
        </g>
        <!-- מאזניים -->
        <text x="${BX}" y="13">מי כבד יותר?</text>
        <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M${BX} ${BY}V${BY + 34}M${BX - 12} ${BY + 34}H${BX + 12}"/>
        <g id="beam">
          <path class="st-ink fl-none" stroke-width="2.500" stroke-linecap="round" d="M${BX - BARM} ${BY}H${BX + BARM}"/>
          <circle class="fl-ink" cx="${BX}" cy="${BY}" r="3"/>
        </g>
        <g id="panL"><path class="thin st-ink" stroke-width="1" d="M0 0L-9 13M0 0L9 13"/><rect class="body" stroke-width="1.500" x="-11" y="13" width="22" height="8" rx="2"/></g>
        <g id="panR"><path class="thin st-ink" stroke-width="1" d="M0 0L-9 13M0 0L9 13"/><rect class="fl-violet st-ink" stroke-width="1.500" x="-11" y="13" width="22" height="8" rx="2"/></g>
        <text x="${BX - BARM}" y="${BY + 50}" class="sm">תא</text>
        <text id="mcar" x="${BX - BARM}" y="${BY + 61}" class="sm" style="font-weight:700"></text>
        <text x="${BX + BARM - 2}" y="${BY + 50}" class="sm">משקולת</text>
        <text id="mcw" x="${BX + BARM - 2}" y="${BY + 61}" class="sm" style="font-weight:700"></text>
        <!-- מד ההספק -->
        <text x="${GXC}" y="${GY - 9}">מאמץ המנוע</text>
        <rect class="fl-panel st-line" stroke-width="1" x="${GXC - GHALF}" y="${GY}" width="${2 * GHALF}" height="12" rx="6"/>
        <rect id="pbar" x="${GXC}" y="${GY + 1.500}" width="0" height="9" rx="3"/>
        <path class="st-ink fl-none" stroke-width="1.500" d="M${GXC} ${GY - 3}V${GY + 15}"/>
        <text x="${GXC - GHALF + 12}" y="${GY + 24}" class="sm">בולם</text>
        <text x="${GXC + GHALF - 12}" y="${GY + 24}" class="sm">מרים</text>
        <text id="n1" x="160" y="185" class="sm"></text>
        <text id="n2" x="160" y="195" class="sm"></text>
      </svg>
      ${readouts([{ id: "dm", label: "ק״ג" }, { id: "pw", label: "קילוואט" }])}
      ${range({ id: "n", label: "נוסעים", min: 0, max: MAXN, value: 8 })}
      ${range({ id: "cwp", label: "משקולת", min: 0, max: 100, step: 5, value: 50 })}
      ${choice({ id: "dir", label: "נסיעה", options: [{ v: "up", label: "למעלה" }, { v: "down", label: "למטה" }], value: "up" })}`;

    const q = (s) => root.querySelector(s);
    const car = q("#car"), cw = q("#cw"), rope = q("#rope"), sheave = q("#sheave");
    const dmLabel = q("#dm").nextElementSibling, pwLabel = q("#pw").nextElementSibling;
    let S = { dir: 1, cwH: 30, power: 0 };
    let pos = 0.25, wait = 0, spin = 0; // pos: 0 = קומה תחתונה, 1 = עליונה

    wire(root, ({ n, cwp, dir }) => {
      const mCar = CAR + PERSON * n, mCw = CAR + (RATED * cwp) / 100;
      const dm = mCar - mCw;                       // חיובי: התא כבד יותר
      const d = dir === "up" ? 1 : -1;
      const power = (dm * G * V * d) / 1000;       // קילוואט
      const cwH = 18 + 0.3 * cwp;
      if (d !== S.dir) wait = 0;
      S = { dir: d, cwH, power };

      out(root, "n-out", n === 0 ? "תא ריק" : `${n} · ${fmt(n * PERSON, 0)} ק״ג`);
      out(root, "cwp-out", `תא + ${cwp}%`);
      out(root, "dm", fmt(Math.abs(dm), 0));
      dmLabel.textContent = Math.abs(dm) < 1 ? "ק״ג · מאוזן בדיוק" : dm > 0 ? "ק״ג · התא כבד יותר" : "ק״ג · המשקולת כבדה";
      out(root, "pw", fmt(Math.abs(power), 1));
      pwLabel.textContent = Math.abs(power) < 0.05 ? "קילוואט · המנוע נח" : power > 0 ? "קילוואט · המנוע מרים" : "קילוואט · המנוע בולם";
      out(root, "mcar", `${fmt(mCar, 0)} ק״ג`);
      out(root, "mcw", `${fmt(mCw, 0)} ק״ג`);

      root.querySelectorAll("[data-p]").forEach((g) => g.setAttribute("opacity", +g.dataset.p < n ? 1 : 0));
      q("#cwbody").setAttribute("height", cwH);
      let lines = "";
      for (let y = 6; y < cwH - 2; y += 6) lines += `<path d="M${CWX - CW_W / 2 + 2} ${y}H${CWX + CW_W / 2 - 2}"/>`;
      q("#cwl").innerHTML = lines;

      // מאזניים: נוטים אל הצד הכבד
      const tilt = clamp((dm / RATED) * 20, -20, 20), tr = (tilt * Math.PI) / 180;
      q("#beam").setAttribute("transform", `rotate(${(-tilt).toFixed(2)} ${BX} ${BY})`);
      q("#panL").setAttribute("transform", `translate(${(BX - BARM * Math.cos(tr)).toFixed(2)} ${(BY + BARM * Math.sin(tr)).toFixed(2)})`);
      q("#panR").setAttribute("transform", `translate(${(BX + BARM * Math.cos(tr)).toFixed(2)} ${(BY - BARM * Math.sin(tr)).toFixed(2)})`);

      // מד ההספק: ימינה = המנוע מרים, שמאלה = המנוע בולם
      const w = (Math.abs(power) / PMAX) * (GHALF - 2), bar = q("#pbar");
      bar.setAttribute("width", w.toFixed(1));
      bar.setAttribute("x", (power >= 0 ? GXC : GXC - w).toFixed(1));
      bar.setAttribute("class", power >= 0 ? "fl-hot" : "fl-green");

      // חץ המומנט על גלגל ההנעה: הכיוון שבו המנוע דוחף, בעובי יחסי להפרש
      const tq = q("#tq"), tqh = q("#tqh");
      if (Math.abs(dm) < 1) { tq.setAttribute("d", ""); tqh.setAttribute("d", ""); }
      else {
        const cls = power >= 0 ? "hot" : "green", s = dm > 0 ? 1 : -1; // התא כבד: המנוע מושך את צד התא למעלה
        const r = SR + 4, a0 = -90 + s * 28, a1 = -90 - s * 28;
        const pt = (deg, rr = r) => `${(SX + rr * Math.cos((deg * Math.PI) / 180)).toFixed(1)} ${(SY + rr * Math.sin((deg * Math.PI) / 180)).toFixed(1)}`;
        tq.setAttribute("d", `M${pt(a1)}A${r} ${r} 0 0 ${s > 0 ? 1 : 0} ${pt(a0)}`);
        tq.setAttribute("class", `arrow fl-none st-${cls}`);
        tq.setAttribute("stroke-width", (1.5 + 3 * Math.abs(dm) / RATED).toFixed(1));
        tqh.setAttribute("d", `M${pt(a0, r - 5.500)}L${pt(a0, r + 5.500)}L${pt(a0 + s * 16)}z`);
        tqh.setAttribute("class", `fl-${cls}`);
      }
      q("#going").setAttribute("d", d > 0 ? `M${CARX - 13} -3V-11M${CARX - 16.500} -7.500l3.500-4 3.500 4` : `M${CARX - 13} -11V-3M${CARX - 16.500} -6.500l3.500 4 3.500-4`);

      let n1, n2 = "";
      const kw = fmt(Math.abs(power), 1), alone = fmt((mCar * G * V) / 1000, 1);
      if (Math.abs(dm) < 1) { n1 = "התא והמשקולת שוקלים אותו דבר: המנוע רק מניע, לא מרים."; n2 = `בלי משקולת הוא היה צריך ${alone} קילוואט כדי לעלות`; }
      else if (dm > 0 && d > 0) { n1 = `המנוע מרים רק את ההפרש, ${fmt(dm, 0)} ק״ג, ולא את כל התא.`; n2 = cwp > 0 ? `בלי משקולת הוא היה צריך ${alone} קילוואט במקום ${kw}` : "בלי משקולת עודפת המנוע מרים את כל הנוסעים לבדו"; }
      else if (dm > 0) { n1 = "התא הכבד יורד מעצמו ומרים את המשקולת;"; n2 = "המנוע רק בולם כדי לשמור על מהירות קבועה"; }
      else if (d < 0) { n1 = "התא קל מהמשקולת: כדי להוריד אותו"; n2 = `המנוע צריך להרים ${fmt(-dm, 0)} ק״ג של משקולת`; }
      else { n1 = "המשקולת הכבדה יורדת ומושכת את התא למעלה;"; n2 = "המנוע רק בולם כדי לשמור על מהירות קבועה"; }
      out(root, "n1", n1); out(root, "n2", n2);
    });

    loop(root, (dt) => {
      // נסיעה אחרי נסיעה בכיוון שנבחר; בסוף כל נסיעה עצירה קצרה וחזרה לנקודת ההתחלה
      if (wait > 0) {
        wait -= dt;
        if (wait <= 0) pos = S.dir > 0 ? 0 : 1;
      } else {
        const step = (dt / 3.6) * S.dir;
        pos += step;
        spin += (step * RUN) / (SR - 3);
        if (pos >= 1 || pos <= 0) { pos = clamp(pos, 0, 1); wait = 0.9; }
      }
      const carTop = TOP + RUN * (1 - pos), cwTop = TOP + RUN * pos;
      car.setAttribute("transform", `translate(0 ${carTop.toFixed(2)})`);
      cw.setAttribute("transform", `translate(0 ${cwTop.toFixed(2)})`);
      car.setAttribute("opacity", wait > 0 && wait < 0.25 ? (wait / 0.25).toFixed(2) : 1);
      rope.setAttribute("d", `M${CARX} ${carTop.toFixed(2)}V${SY}A${SR} ${SR} 0 0 1 ${CWX} ${SY}V${cwTop.toFixed(2)}`);
      // התא עולה ← צד התא של הכבל עולה ← הגלגל מסתובב עם כיוון השעון
      sheave.setAttribute("transform", `rotate(${((spin * 180) / Math.PI).toFixed(1)} ${SX} ${SY})`);
    });
  },
};
