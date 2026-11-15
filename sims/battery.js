// סוללת ליתיום־יון: טוענים ופורקים, ורואים את היונים עוברים בפנים ואת האלקטרונים עוקפים בחוט.
// תא של 4 אמפר־שעה (טלפון גדול). אחוז הטעינה משתנה לפי הזרם: d(טעינה)/dt = I / 4Ah.
// הזמן מואץ: שנייה אחת בהדמיה = 10 דקות.
// מתח התא במנוחה (מעגל פתוח) לפי עקומה אופיינית לליתיום־יון, באינטרפולציה לינארית בין הנקודות:
//   0% 3.0V · 5% 3.3V · 10% 3.45V · 20% 3.55V · 50% 3.7V · 80% 3.95V · 90% 4.05V · 100% 4.2V
// מתח ההדקים תחת זרם: V = מתח המנוחה ± I·R, עם התנגדות פנימית R = 0.05 אוהם.
// טעינה בשיטת זרם קבוע ואז מתח קבוע: המטען לא עובר 4.2 וולט, ולכן קרוב למלא הזרם יורד: I = min(I, (4.2 − מתח המנוחה) / R).
// פריקה נעצרת כשמתח ההדקים יורד ל־3.0 וולט (המכשיר כבה), ואז המתח מתאושש מעט כי הזרם נפסק.
// בלאי: איכותי בלבד. קצב הבלאי מוכפל ב־3 באזורי הקצה (טעינה מעל 80%, פריקה מתחת ל־20%)
// וב־4 בחום של 45° (כלל אצבע: קצב התגובות מוכפל בערך בכל 10 מעלות). השכבה האדומה על הגרפיט גדלה בהתאם.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const CAP = 4, R = 0.05, VMAX = 4.2, VMIN = 3.0, HOURS_PER_S = 1 / 6;
const OCV = [[0, 3.0], [0.05, 3.3], [0.1, 3.45], [0.2, 3.55], [0.5, 3.7], [0.8, 3.95], [0.9, 4.05], [1, 4.2]];
const ocv = (s) => {
  for (let i = 1; i < OCV.length; i++) if (s <= OCV[i][0]) {
    const [a, va] = OCV[i - 1], [b, vb] = OCV[i];
    return va + ((vb - va) * (s - a)) / (b - a);
  }
  return VMAX;
};
const N = 20, ROWS = [76.5, 95.5, 114.5, 133.5], BARS = [64, 83, 102, 121, 140];
const WIRE = "M46 44V30Q46 26 50 26H270Q274 26 274 30V44"; // מהגרפיט אל התחמוצת (כיוון האלקטרונים בפריקה)
const ION = `<circle class="fl-green st-ink" stroke-width="1" r="4"/><path fill="none" stroke="#fff" stroke-width="1.200" stroke-linecap="round" d="M-2 0h4M0 -2v4"/>`;

export default {
  title: "טענו ופרקו את הסוללה",
  hint: "היונים עוברים בתוך התא, והאלקטרונים נאלצים לעקוף בחוט שבחוץ. שימו לב למתח ולבלאי בקצוות. הזמן מואץ: שנייה היא עשר דקות.",
  mount(root) {
    const bars = BARS.map((y) => `<rect class="fl-dark st-ink" stroke-width="1" x="54" y="${y}" width="68" height="6" rx="1.500"/>`).join("");
    const oxide = BARS.map((y) => `<path class="fl-violet st-ink" stroke-width="1" stroke-linejoin="round" d="${[0, 1, 2, 3, 4, 5].map((k) => `M${(198 + k * 11.33).toFixed(2)} ${y + 3}l5.670 -4 5.670 4-5.670 4z`).join("")}"/>`).join("");
    const sep = [[60, 10], [83, 6], [102, 6], [121, 6], [140, 10]].map(([y, h]) => `<rect class="fl-panel st-ink" stroke-width="1.200" x="155" y="${y}" width="10" height="${h}" rx="1.500"/>`).join("");
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="חתך של סוללת ליתיום: גרפיט, קרום מפריד ותחמוצת מתכת, ומעגל חיצוני עם מטען או טלפון">
        <text id="wear" x="92" y="15" class="sm"></text>
        <!-- המעגל החיצוני -->
        <path id="path" class="wire st-ink" d="${WIRE}"/>
        <g id="els" class="fl-elec st-ink" stroke-width=".8"></g>
        <path id="dir" class="arrow st-ink" style="stroke-width:1.800"/>
        <!-- מטען -->
        <g id="charger">
          <path class="wire st-ink" style="stroke-width:2" d="M204 11C190 11 192 20 175 20"/>
          <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M224 8h6M224 14h6"/>
          <rect class="body" x="204" y="4" width="20" height="14" rx="3"/>
        </g>
        <!-- טלפון, ועל המסך מד הטעינה -->
        <rect class="fl-dark st-ink" stroke-width="2" x="145" y="5" width="30" height="40" rx="5"/>
        <rect id="screen" class="fl-cold-soft" x="148.500" y="9" width="23" height="29" rx="2"/>
        <rect class="fl-none st-ink" stroke-width="1.200" x="152" y="17" width="14" height="9" rx="2"/>
        <rect class="fl-ink" x="166.500" y="19.500" width="2" height="4" rx=".8"/>
        <rect id="gauge" class="fl-green" x="153.500" y="18.500" height="6" rx="1"/>
        <path id="bolt" class="fl-elec st-ink" stroke-width=".8" stroke-linejoin="round" d="M160 27.500l-4 6h3l-1 4.500 4.500-6.500h-3z"/>
        <path fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.500" stroke-linecap="round" d="M155 41.500h10"/>
        <!-- התא -->
        <rect class="fl-warm st-ink" stroke-width="1.500" x="43" y="42" width="6" height="16"/>
        <rect class="fl-line st-ink" stroke-width="1.500" x="271" y="42" width="6" height="16"/>
        <rect class="body" x="36" y="56" width="248" height="98" rx="6"/>
        <rect class="fl-cold-soft" x="52" y="60" width="216" height="90"/>
        <rect class="fl-warm st-ink" stroke-width="1.200" x="40" y="60" width="12" height="90" rx="2"/>
        <rect class="fl-line st-ink" stroke-width="1.200" x="268" y="60" width="12" height="90" rx="2"/>
        ${bars}${oxide}${sep}
        <rect id="sei" class="fl-hot" x="124" y="61" width="1" height="88" rx="1.500" opacity=".85"/>
        <g id="trap" class="fl-line st-ink" stroke-width="1"><circle cx="128" cy="70" r="2.600"/><circle cx="128.500" cy="105" r="2.600"/><circle cx="128" cy="141" r="2.600"/></g>
        <g id="ions">${Array.from({ length: N }, () => `<g>${ION}</g>`).join("")}</g>
        <text x="88" y="168">גרפיט</text>
        <text x="160" y="168" class="sm">קרום מפריד</text>
        <text x="232" y="168">תחמוצת מתכת</text>
        <text id="note" x="160" y="189" class="sm"></text>
      </svg>
      ${readouts([{ id: "pct", label: "טעינה" }, { id: "volt", label: "מתח התא (וולט)" }])}
      ${choice({ id: "mode", label: "מצב", options: [{ v: "charge", label: "טעינה" }, { v: "rest", label: "מנוחה" }, { v: "discharge", label: "פריקה" }], value: "charge" })}
      ${range({ id: "i", label: "זרם", min: 0.5, max: 4, step: 0.5, value: 2 })}
      ${choice({ id: "temp", label: "סביבה", options: [{ v: "25", label: "25° נעים" }, { v: "45", label: "45° חם" }], value: "25" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const path = $("path"), len = path.getTotalLength();
    const M = 9;
    $("els").innerHTML = Array.from({ length: M }, () => `<circle r="2.800"/>`).join("");
    const els = [...$("els").children], ions = [...$("ions").children], traps = [...$("trap").children];
    let st = { mode: "charge", i: 2, temp: "25" };
    let soc = 0.35, offset = 0, wear = 0, last = "";

    wire(root, (v) => {
      st = v;
      out(root, "i-out", `${fmt(v.i, 1)} אמפר`);
      $("charger").style.display = v.mode === "charge" ? "" : "none";
      $("bolt").style.display = v.mode === "charge" ? "" : "none";
      $("screen").setAttribute("class", v.mode === "rest" ? "fl-soft" : "fl-cold-soft");
    });

    loop(root, (dt) => {
      const e0 = ocv(soc), hot = st.temp === "45";
      let cur = 0, done = ""; // זרם חיובי = טעינה
      if (st.mode === "charge") {
        cur = Math.min(st.i, (VMAX - e0) / R);
        if (cur < 0.1) { cur = 0; done = "full"; }
      } else if (st.mode === "discharge") {
        if (soc <= 0 || e0 - st.i * R <= VMIN) done = "empty"; else cur = -st.i;
      }
      soc = clamp(soc + (cur / CAP) * HOURS_PER_S * dt, 0, 1);
      const volt = ocv(soc) + cur * R;

      // בלאי (איכותי): אזורי הקצה וחום
      const edge = (cur > 0 && soc > 0.8) || (cur < 0 && soc < 0.2) || (cur === 0 && soc > 0.8 && hot);
      const factor = (edge ? 3 : 1) * (hot ? 4 : 1);
      wear = clamp(wear + dt * factor * (cur ? Math.abs(cur) / 2 : soc > 0.8 ? 0.15 : 0.02) * 0.006, 0, 1);
      $("sei").setAttribute("width", (1 + 7 * wear).toFixed(2));
      traps.forEach((t, k) => t.setAttribute("opacity", clamp((wear - 0.2 - 0.25 * k) * 8, 0, 1).toFixed(2)));

      // יונים: יון k נמצא בגרפיט כשהטעינה עברה את k/N, ובדרך כשהיא בדיוק שם
      ions.forEach((g, k) => {
        const p = clamp(soc * N - k, 0, 1), e = p * p * (3 - 2 * p), c = Math.floor(k / 4);
        const x = 206 + 13 * c + (62 - 206) * e;
        g.setAttribute("transform", `translate(${x.toFixed(1)} ${ROWS[k % 4]})`);
      });
      // אלקטרונים בחוט: בפריקה מהגרפיט אל התחמוצת, בטעינה להפך
      offset = (((offset - dt * cur * 15) % len) + len) % len;
      els.forEach((c, k) => {
        const p = path.getPointAtLength((offset + (k * len) / M) % len);
        c.setAttribute("cx", p.x.toFixed(1));
        c.setAttribute("cy", p.y.toFixed(1));
      });

      // טקסטים ומחוונים: מתעדכנים רק כשמשהו השתנה
      const pct = Math.round(soc * 100);
      const zone = done || (cur > 0 ? (soc > 0.8 ? "top" : "mid") : cur < 0 ? (soc < 0.2 ? "low" : "mid") : "rest");
      const key = [pct, volt.toFixed(2), st.mode, zone, factor, cur > 0 && cur < st.i - 0.05].join("|");
      if (key === last) return;
      last = key;
      out(root, "pct", `${pct}%`);
      out(root, "volt", volt.toFixed(2));
      $("gauge").setAttribute("width", (11 * soc).toFixed(1));
      $("gauge").setAttribute("class", pct < 20 ? "fl-hot" : "fl-green");
      $("dir").setAttribute("d", cur > 0 ? "M103 37H89m5 -4l-5 4 5 4M231 37H217m5 -4l-5 4 5 4" : cur < 0 ? "M89 37H103m-5 -4l5 4-5 4M217 37H231m-5 -4l5 4-5 4" : "");
      const w = $("wear");
      w.textContent = factor === 1 ? "קצב בלאי: רגיל" : `קצב בלאי: פי ${factor}`;
      w.style.fill = factor > 1 ? "var(--s-hot)" : "";
      out(root, "note",
        zone === "full" ? "מלאה: 4.2 וולט. המטען מפסיק לדחוף, וכל היונים חונים בגרפיט"
        : zone === "empty" ? "ריקה: המתח ירד ל־3.0 וולט והמכשיר כבה. עברו לטעינה"
        : zone === "top" ? (cur < st.i - 0.05 ? `קרוב למלא המטען מאט: רק ${fmt(cur, 1)} אמפר. מעל 80% הבלאי מואץ` : "מעל 80%: המתח מטפס מהר, והבלאי מואץ")
        : zone === "low" ? "מתחת ל־20%: המתח צונח, ופריקה עמוקה מזיקה לסוללה"
        : zone === "rest" ? (hot && soc > 0.8 ? "מנוחה, אבל חום ושהייה בטעינה גבוהה ממשיכים לשחוק את התא" : "מנוחה: המעגל פתוח, ושום דבר לא זז")
        : cur > 0 ? "המטען דוחף את היונים אל הגרפיט, והאלקטרונים עוקפים בחוט"
        : "היונים חוזרים מעצמם, והאלקטרונים עוברים דרך המכשיר");
    });
  },
};
