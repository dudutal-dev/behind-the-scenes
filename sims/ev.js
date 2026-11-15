// טווח של רכב חשמלי: משנים מהירות, טמפרטורה בחוץ ומיזוג, ורואים כמה אנרגיה הולכת לכל ק"מ ומה נשאר מהטווח.
// מודל נסיעה במהירות קבועה על כביש מישורי, בלי רוח:
//   כוח גלגול   F_r = m · g · C_rr
//   גרר אוויר   F_a = ½ · ρ · C_d·A · v²       (ρ = p / (R·T), צפיפות האוויר לפי הטמפרטורה)
//   אנרגיה לק"מ מהסוללה = (F_r + F_a) · 1000 / η  +  (P_מערכות + P_מיזוג) · (1000 / v)
//   צריכה (קוט"ש ל־100 ק"מ) = אנרגיה לק"מ [J] · 100 / 3.6e6 ;  טווח = קיבולת זמינה / צריכה · 100
// קבועים (רכב משפחתי חשמלי טיפוסי):
//   m = 1,900 ק"ג · C_rr = 0.010 (צמיג על אספלט) · C_d·A = 0.25 × 2.3 מ"ר ≈ 0.575 מ"ר
//   η = 0.85 — יעילות מהסוללה לגלגל (ממיר, מנוע, תמסורת) · קיבולת זמינה 75 קוט"ש
//   מערכות קבועות (מחשבים, משאבות, אורות) 0.3 קילוואט
//   חימום (התנגדותי): 0.1 קילוואט לכל מעלה מתחת ל־21°, בין 0.4 ל־4 קילוואט
//   מיזוג: 0.3 קילוואט + 0.06 לכל מעלה מעל 21°, עד 3 קילוואט
//   קור: הסוללה מאבדת 0.4% מהקיבולת הזמינה לכל מעלה מתחת ל־20° (התנגדות פנימית וחימום הסוללה) — פישוט.
//   הכיול נבדק מול מבחן AAA מ־2019: בכ־‎-7° ובנסיעה עירונית המודל נותן ירידה של כ־13% בלי חימום ושל כ־45% איתו
//   (במבחן: 12% ו־41%); ב־35° עם מיזוג כ־20% (במבחן: 17%).
// פישוטים: אין האצות ובלימות (שבהן רכב חשמלי מחזיר אנרגיה), אין עליות ורוח, היעילות קבועה בכל מהירות.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const M = 1900, G = 9.81, CRR = 0.010, CDA = 0.575, ETA = 0.85, BATT = 75, AUX = 0.3;
const rho = (t) => 101325 / (287.05 * (t + 273.15));
const climateKW = (mode, t) =>
  mode === "heat" ? clamp(0.1 * (21 - t), 0.4, 4) : mode === "ac" ? (t > 21 ? Math.min(3, 0.3 + 0.06 * (t - 21)) : 0.3) : 0;
const usable = (t) => BATT * (1 - 0.004 * Math.max(0, 20 - t));

// מחזיר פירוק של האנרגיה ל־100 ק"מ (קוט"ש) במהירות kmh
function model(kmh, t, mode) {
  const v = kmh / 3.6;
  const Fr = M * G * CRR, Fa = 0.5 * rho(t) * CDA * v * v;
  const k = 100000 / 3.6e6;                 // ג'אול לק"מ ← קוט"ש ל־100 ק"מ
  const roll = Fr * k, air = Fa * k;
  const loss = (roll + air) * (1 / ETA - 1);
  const secPer100 = 100000 / v;
  const clim = (climateKW(mode, t) * 1000 * secPer100) / 3.6e6;
  const aux = (AUX * 1000 * secPer100) / 3.6e6;
  const total = roll + air + loss + clim + aux;
  return { roll, air, loss: loss + aux, clim, total, range: (usable(t) / total) * 100, fa: Fa, fr: Fr };
}

// גרף הטווח לפי המהירות
const GX = (kmh) => 186 + ((kmh - 30) / 130) * 120, GY = (km) => 100 - (Math.min(km, 1000) / 1000) * 74;
const curve = (t, mode) => {
  let d = "";
  for (let s = 30; s <= 160; s += 5) d += (d ? "L" : "M") + `${GX(s).toFixed(1)} ${GY(model(s, t, mode).range).toFixed(1)}`;
  return d;
};
// פס האנרגיה: 40 קוט"ש ל־100 ק"מ על פני 292 פיקסלים
const BX = 14, BW = 292, BMAX = 40;

export default {
  title: "שחק עם המהירות והחימום",
  hint: "גרר האוויר גדל כמו ריבוע המהירות, ולכן בכביש מהיר הטווח צונח. בנסיעה איטית בחורף דווקא החימום הוא הצרכן הגדול.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="רכב חשמלי בנסיעה, גרף הטווח לפי המהירות ופס שמראה לאן הולכת האנרגיה">
        <text id="note" x="160" y="13" class="sm"></text>
        <!-- זרמי אוויר וכביש -->
        <g id="streaks" class="thin st-cold" style="stroke-width:1.4"></g>
        <path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M8 100H160"/>
        <path id="road" class="thin" style="stroke-dasharray:8 10" d="M8 104H160"/>
        <!-- הרכב -->
        <path class="body" d="M20 88V78Q20 73 25 72L42 68Q60 52 75 51H108Q119 51 132 67L146 71Q152 72 152 79V88Q152 91 149 91H23Q20 91 20 88z"/>
        <path class="fl-cold-soft st-ink" stroke-width="1.3" stroke-linejoin="round" d="M50 67Q64 56 76 55H90V67z"/>
        <path class="fl-cold-soft st-ink" stroke-width="1.3" stroke-linejoin="round" d="M94 55H107Q116 56 126 67H94z"/>
        <rect class="fl-green st-ink" stroke-width="1" x="58" y="84" width="54" height="5" rx="1.5"/>
        <rect id="battfill" class="fl-green" x="58" y="84" width="54" height="5" rx="1.5"/>
        <g id="w1"><circle class="fl-dark st-ink" stroke-width="1.5" r="9.5"/><path class="fl-none" style="stroke:var(--s-soft)" stroke-width="2" d="M0 -6V6M-6 0H6"/></g>
        <g id="w2"><circle class="fl-dark st-ink" stroke-width="1.5" r="9.5"/><path class="fl-none" style="stroke:var(--s-soft)" stroke-width="2" d="M0 -6V6M-6 0H6"/></g>
        <!-- מיזוג בתא -->
        <g id="clim" transform="translate(84 61)"></g>
        <!-- כוחות -->
        <path id="aero" class="arrow st-cold"/>
        <path id="aeroH" class="fl-cold"/>
        <text id="aeroT" y="33" class="sm"></text>
        <path id="rollA" class="arrow st-green"/>
        <path id="rollH" class="fl-green"/>
        <text id="rollT" y="117" class="sm"></text>
        <!-- גרף הטווח -->
        <path class="thin st-ink" d="M186 22V100H308"/>
        <path class="thin" style="stroke-dasharray:2 3" d="M186 ${GY(500)}H306"/>
        <text x="176" y="${GY(500) + 3}" class="sm">500</text>
        <text x="174" y="${GY(1000) + 6}" class="sm">1000</text>
        <path id="ref" class="wire st-line" style="stroke-dasharray:3 3;stroke-width:1.5"/>
        <path id="cur" class="wire st-green"/>
        <path id="guide" class="thin st-hot" style="stroke-dasharray:2 3"/>
        <circle id="dot" class="fl-hot st-ink" stroke-width="1.5" r="4"/>
        <text x="${GX(30)}" y="111" class="sm">30</text>
        <text x="${GX(100)}" y="111" class="sm">100</text>
        <text x="${GX(160)}" y="111" class="sm">160</text>
        <text x="247" y="21" class="sm">טווח (ק״מ) לפי מהירות</text>
        <!-- לאן הולכת האנרגיה -->
        <text x="160" y="128" class="sm">לאן הולכת האנרגיה, קוט״ש ל־100 ק״מ</text>
        <rect class="fl-soft" x="${BX}" y="133" width="${BW}" height="14" rx="3"/>
        <rect id="bRoll" class="fl-green" y="133" height="14"/>
        <rect id="bAir" class="fl-cold" y="133" height="14"/>
        <rect id="bClim" class="fl-warm" y="133" height="14"/>
        <rect id="bLoss" class="fl-line" y="133" height="14"/>
        <rect class="fl-none st-ink" stroke-width="1.2" x="${BX}" y="133" width="${BW}" height="14" rx="3"/>
        <rect class="fl-green" x="76" y="155" width="8" height="8" rx="2"/><text id="lRoll" x="50" y="163" class="sm"></text>
        <rect class="fl-cold" x="150" y="155" width="8" height="8" rx="2"/><text id="lAir" x="124" y="163" class="sm"></text>
        <rect class="fl-warm" x="230" y="155" width="8" height="8" rx="2"/><text id="lClim" x="200" y="163" class="sm"></text>
        <rect class="fl-line" x="300" y="155" width="8" height="8" rx="2"/><text id="lLoss" x="272" y="163" class="sm"></text>
        <text id="batt" x="160" y="186" class="sm"></text>
      </svg>
      ${readouts([{ id: "rng", label: "טווח בטעינה מלאה (ק״מ)" }, { id: "use", label: "קוט״ש ל־100 ק״מ" }])}
      ${range({ id: "spd", label: "מהירות", min: 30, max: 160, step: 5, value: 100 })}
      ${range({ id: "tmp", label: "בחוץ", min: -10, max: 40, step: 1, value: 20 })}
      ${choice({ id: "cl", label: "מיזוג", value: "off", options: [{ v: "off", label: "כבוי" }, { v: "ac", label: "קירור" }, { v: "heat", label: "חימום" }] })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    $("ref").setAttribute("d", curve(20, "off"));
    const streaks = $("streaks");
    const S = [43, 47, 43, 47, 45].map((y, i) => ({ y, x: (i * 31) % 150 })); // זרמי אוויר מעל הגג
    streaks.innerHTML = S.map(() => "<path/>").join("");
    const sEls = [...streaks.children];
    let kmh = 100, roadOff = 0, wheelA = 0;

    const setBar = (id, x, w) => { $(id).setAttribute("x", x.toFixed(1)); $(id).setAttribute("width", Math.max(0, w).toFixed(1)); };
    const arrow = (line, head, label, y, len, text) => {
      // חץ שמצביע אחורה (שמאלה), מתחיל ליד חזית הרכב
      const x1 = 160, x0 = x1 - len;
      $(line).setAttribute("d", `M${x1} ${y}H${(x0 + 4).toFixed(1)}`);
      $(head).setAttribute("d", `M${x0.toFixed(1)} ${y}l7 -4.5v9z`);
      $(label).setAttribute("x", Math.max(26, x0 - 18).toFixed(1));
      out(root, label, text);
    };

    wire(root, ({ spd, tmp, cl }) => {
      kmh = spd;
      const r = model(spd, tmp, cl);
      out(root, "spd-out", `${fmt(spd, 0)} קמ״ש`);
      out(root, "tmp-out", `${fmt(tmp, 0)}°`);
      out(root, "rng", fmt(Math.round(r.range / 5) * 5, 0));
      out(root, "use", fmt(r.total, 1));

      // כוחות: אורך החץ יחסי לכוח בניוטון (1 פיקסל ל־8 ניוטון)
      arrow("aero", "aeroH", "aeroT", 36, 8 + r.fa / 8, `אוויר ${fmt(r.fa, 0)} נ׳`);
      arrow("rollA", "rollH", "rollT", 112, 8 + r.fr / 8, `גלגול ${fmt(r.fr, 0)} נ׳`);

      // גרף
      $("cur").setAttribute("d", curve(tmp, cl));
      const x = GX(spd), y = GY(r.range);
      $("dot").setAttribute("cx", x.toFixed(1));
      $("dot").setAttribute("cy", y.toFixed(1));
      $("guide").setAttribute("d", `M${x.toFixed(1)} 100V${y.toFixed(1)}H186`);

      // פס האנרגיה
      const sc = BW / BMAX;
      let bx = BX;
      for (const [id, val] of [["bRoll", r.roll], ["bAir", r.air], ["bClim", r.clim], ["bLoss", r.loss]]) {
        const w = Math.min(val * sc, BX + BW - bx);
        setBar(id, bx, w);
        bx += w;
      }
      const pct = (v) => `${fmt((100 * v) / r.total, 0)}%`;
      out(root, "lRoll", `גלגול ${pct(r.roll)}`);
      out(root, "lAir", `אוויר ${pct(r.air)}`);
      out(root, "lClim", `${cl === "heat" ? "חימום" : cl === "ac" ? "קירור" : "מיזוג"} ${pct(r.clim)}`);
      out(root, "lLoss", `הפסדים ${pct(r.loss)}`);
      const u = usable(tmp);
      out(root, "batt", tmp < 20 ? `סוללה של ${BATT} קוט״ש · בקור הזה זמינים כ־${fmt(u, 0)}` : `סוללה של ${BATT} קוט״ש, כולה זמינה`);
      $("battfill").setAttribute("width", ((54 * u) / BATT).toFixed(1));

      // סמל המיזוג בתא
      const kw = climateKW(cl, tmp);
      $("clim").innerHTML = cl === "off" ? "" : cl === "heat"
        ? `<path class="fl-hot" d="M0 -6Q5 -1 3 3Q2 6 0 6Q-3 6 -3 2Q-3 -1 0 -6z"/>`
        : `<path class="wire st-cold" style="stroke-width:1.6" d="M0 -6V6M-5.2 -3L5.2 3M-5.2 3L5.2 -3"/>`;

      // הערה דינמית
      const climShare = r.clim / r.total, airShare = r.air / r.total;
      const base100 = model(100, tmp, cl).range;
      let note;
      if (climShare > 0.3) note = `${cl === "heat" ? "החימום" : "המיזוג"} לוקח ${pct(r.clim)} מהאנרגיה: הוא פועל לפי זמן, לא לפי ק״מ`;
      else if (spd >= 120) note = `ב־${fmt(spd, 0)} קמ״ש הטווח קטן ב־${fmt(100 * (1 - r.range / base100), 0)}% לעומת 100 קמ״ש`;
      else if (airShare > 0.4) note = `גרר האוויר הוא כבר ${pct(r.air)} מהצריכה`;
      else if (tmp < 5 && cl !== "heat") note = "קר: האוויר צפוף יותר והסוללה מוסרת פחות";
      else if (kw > 0) note = `${cl === "heat" ? "חימום" : "קירור"} של ${fmt(kw, 1)} קילוואט`;
      else note = "בנסיעה איטית רוב האנרגיה הולכת לגלגול";
      out(root, "note", note);
    });

    loop(root, (dt) => {
      const v = kmh / 3.6;                     // מטר לשנייה
      roadOff = (roadOff + dt * v * 4) % 18;   // הכביש זז בקצב יחסי למהירות
      $("road").style.strokeDashoffset = roadOff.toFixed(1);
      wheelA = (wheelA + dt * v * 40) % 360;
      $("w1").setAttribute("transform", `translate(44 91) rotate(${wheelA.toFixed(1)})`);
      $("w2").setAttribute("transform", `translate(128 91) rotate(${wheelA.toFixed(1)})`);
      const len = 6 + kmh / 9, op = clamp(kmh / 100, 0.25, 0.85);
      S.forEach((s, i) => {
        s.x = (s.x + dt * v * 5) % 150;
        const x0 = 160 - s.x, x1 = Math.max(8, x0 - len);
        sEls[i].setAttribute("d", `M${x0.toFixed(1)} ${s.y}H${x1.toFixed(1)}`);
        sEls[i].setAttribute("opacity", (op * Math.min(1, s.x / 15, (150 - s.x) / 15)).toFixed(2));
      });
    });
  },
};
