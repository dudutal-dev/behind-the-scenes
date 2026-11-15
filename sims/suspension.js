// מתלים: מודל רבע רכב שעובר מהמורה. משנים את קשיחות הקפיץ ואת עוצמת הבולם ורואים את המרכב מתנדנד.
// המודל (שתי מסות, משוואות ניוטון, אינטגרציה נומרית אוילר חצי-מרומז בצעדים של 0.5 אלפית שנייה):
//   m_s·z_s'' = −k·(z_s − z_u) − c·(z_s' − z_u')                     (המרכב, רבע מהמשקל)
//   m_u·z_u'' =  k·(z_s − z_u) + c·(z_s' − z_u') + F_t                 (הגלגל, הצמיג והזרועות)
//   F_t = k_t·(z_r − z_u), ולא פחות מ־−(m_s+m_u)·g: צמיג יכול רק לדחוף, ומעליו הגלגל מתנתק מהכביש.
//   הגובה נמדד מנקודת שיווי המשקל, ולכן כוח הכובד מתקזז ואינו מופיע.
// קבועים: m_s = 300 ק"ג (רבע ממכונית של כ־1,300 ק"ג) · m_u = 40 ק"ג · k_t = 200,000 ניוטון למטר (צמיג)
//   k (קפיץ) 10–60 קילוניוטון למטר · c (בולם) 0–8,000 ניוטון·שנייה למטר.
// יחס הריסון ζ = c / (2·√(k·m_s)) ותדירות המרכב f = √(k/m_s)/2π (בהזנחת הצמיג; המקובל במכוניות: ζ ≈ 0.2–0.4, f ≈ 1–1.5 הרץ).
//   ζ < 1 תת-מרוסן (מתנדנד) · ζ = 1 ריסון קריטי · ζ > 1 יתר-ריסון.
// המהמורה: פס האטה בצורת קוסינוס, גובה 8 ס"מ ואורך מטר אחד, במהירות 20 קמ"ש; אחת לארבע שניות.
// באיור: ציר הגובה מוגדל (1 ס"מ = 3 פיקסלים), הכביש נע בקנה מידה אופקי אחר (1 מ' = 50 פיקסלים).
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const MS = 300, MU = 40, KT = 200000, G = 9.81;
const BUMP_H = 0.08, BUMP_L = 1.0, SPEED = 20 / 3.6, PERIOD = 4; // מ', מ', מ'/ש', ש'
const DT = 0.0005;
const PRESETS = { soft: { k: 16, c: 1.3 }, sport: { k: 38, c: 3.4 }, none: { k: 22, c: 0.15 } }; // קילו-יחידות; "בלי בולם" = שארית חיכוך קטנה
const VZ = 300, HX = 50; // פיקסלים למטר: אנכי, אופקי
const WX = 64, ROADY = 182, WR = 17; // מיקום הגלגל באיור
const HUB0 = ROADY - WR, BODY0 = 70; // גובה ציר הגלגל ותחתית המרכב במנוחה
const GX0 = 150, GX1 = 312, GY = 104, GSPAN = 4; // גרף: 4 שניות אחרונות

// קפיץ סליל בין שני גבהים
const coil = (x, y1, y2, n = 8, w = 9) => {
  const dy = (y2 - y1) / (n * 2);
  let d = `M${x} ${y1.toFixed(1)}`;
  for (let i = 1; i < n * 2; i++) d += `L${x + (i % 2 ? w : -w)} ${(y1 + dy * i).toFixed(1)}`;
  return d + `L${x} ${y2.toFixed(1)}`;
};
// פרופיל הכביש בנקודה s (מ') לאורך הדרך
const road = (s) => {
  const p = ((s % (SPEED * PERIOD)) + SPEED * PERIOD) % (SPEED * PERIOD) - 2; // המהמורה מתחילה 2 מ' אחרי תחילת המחזור
  return p > 0 && p < BUMP_L ? (BUMP_H / 2) * (1 - Math.cos((2 * Math.PI * p) / BUMP_L)) : 0;
};

export default {
  title: "כוונן קפיץ ובולם",
  hint: "בלי בולם המרכב ממשיך לקפוץ. בולם חזק מאוד עוצר את הנדנוד אבל מעביר את המכה. בין לבין, סביב ζ של 0.3, נמצאות רוב המכוניות.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="רבע רכב: גלגל, קפיץ, בולם ומרכב שעוברים פס האטה, וגרף של גובה המרכב לאורך הזמן">
        <defs><clipPath id="sus-g"><rect x="${GX0}" y="22" width="${GX1 - GX0}" height="164"/></clipPath></defs>
        <!-- כביש -->
        <path id="road" class="fl-soft"/><path id="roadl" class="wire st-ink" style="stroke-width:1.5"/>
        <!-- המרכב -->
        <g id="body">
          <rect class="body" x="${WX - 44}" y="${BODY0 - 34}" width="88" height="34" rx="6"/>
          <text x="${WX}" y="${BODY0 - 13}" class="sm">מרכב · 300 ק״ג</text>
        </g>
        <!-- קפיץ ובולם -->
        <path id="spr" class="wire st-green" style="stroke-width:2.2"/>
        <rect id="dtube" class="fl-line st-ink" stroke-width="1.2" x="${WX + 16}" width="10" rx="2"/>
        <path id="drod" class="wire st-ink" style="stroke-width:3"/>
        <rect id="dheat" class="fl-hot" x="${WX + 17}" width="8" opacity="0"/>
        <!-- הגלגל -->
        <g id="wheel">
          <circle class="fl-dark st-ink" stroke-width="2" cx="${WX}" cy="${HUB0}" r="${WR}"/>
          <circle class="body" cx="${WX}" cy="${HUB0}" r="6"/>
          <path class="wire st-ink" style="stroke-width:3" d="M${WX} ${HUB0}H${WX + 21}"/>
        </g>
        <!-- גרף -->
        <text x="${GX0 + 44}" y="16" class="sm" style="fill:var(--s-cold)">גובה המרכב (ס״מ)</text>
        <text x="${GX0 + 118}" y="16" class="sm" style="fill:var(--s-line)">הכביש</text>
        <path class="thin" d="M${GX0} ${GY}H${GX1}"/>
        <text x="${GX1 - 4}" y="${GY - 37}" class="sm">⁦+10⁩</text><path class="thin" stroke-dasharray="2 3" d="M${GX0} ${GY - 40}H${GX1 - 20}"/>
        <text x="${GX1 - 4}" y="${GY + 44}" class="sm">⁦−10⁩</text><path class="thin" stroke-dasharray="2 3" d="M${GX0} ${GY + 40}H${GX1 - 20}"/>
        <g clip-path="url(#sus-g)">
          <path id="trr" class="wire st-line" style="stroke-width:1.5" stroke-dasharray="3 3"/>
          <path id="trb" class="wire st-cold" style="stroke-width:2.2"/>
        </g>
        <text id="note" x="${(GX0 + GX1) / 2}" y="194" class="sm"></text>
      </svg>
      ${readouts([{ id: "zeta", label: "יחס ריסון ζ" }, { id: "freq", label: "תדירות המרכב" }])}
      ${choice({ id: "pre", label: "מתלה", options: [{ v: "soft", label: "רך" }, { v: "sport", label: "ספורטיבי" }, { v: "none", label: "בלי בולם" }], value: "soft" })}
      ${range({ id: "k", label: "קפיץ", min: 10, max: 60, step: 1, value: 16 })}
      ${range({ id: "c", label: "בולם", min: 0, max: 8, step: 0.05, value: 1.3 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    // לחיצה על תבנית קובעת את המחוונים (נרשם לפני wire, כדי שהעדכון יקרא את הערכים החדשים)
    root.addEventListener("click", (e) => {
      const b = e.target.closest('.seg-btns button');
      if (!b) return;
      const p = PRESETS[b.dataset.v];
      $("k").value = p.k; $("c").value = p.c;
    });
    // הזזת מחוון מבטלת את סימון התבנית
    root.addEventListener("input", () => root.querySelectorAll(".seg-btns button").forEach((x) => x.setAttribute("aria-pressed", "false")));

    let K = 16000, C = 1300;
    wire(root, ({ k, c }) => {
      K = k * 1000; C = c * 1000;
      const zeta = C / (2 * Math.sqrt(K * MS)), f = Math.sqrt(K / MS) / (2 * Math.PI);
      out(root, "k-out", `${fmt(k, 0)} קנ״מ`);
      out(root, "c-out", `${fmt(c, 2)} קנ״ש/מ`);
      out(root, "zeta", fmt(zeta, 2));
      out(root, "freq", `${fmt(f, 2)} הרץ`);
      out(root, "note",
        zeta < 0.08 ? "כמעט בלי ריסון: ממשיך לקפוץ"
        : zeta < 0.5 ? "תת-מרוסן: נדנוד או שניים ושקט"
        : zeta < 0.95 ? "תת-מרוסן וקשיח: מרגישים את המכה"
        : zeta <= 1.05 ? "ריסון קריטי: חוזר בלי לחצות"
        : "יתר-ריסון: המכה עוברת, חוזר לאט");
      $("dheat").setAttribute("opacity", "0");
    });

    // מצב: גובה ומהירות של המרכב (s) ושל הגלגל (u), מ' ומ'/ש'
    let zs = 0, vs = 0, zu = 0, vu = 0, dist = 0, heat = 0;
    const hist = []; // [זמן, גובה המרכב, גובה הכביש]
    let t = 0;
    const W = (MS + MU) * G;

    loop(root, (dt) => {
      let pDamp = 0;
      for (let n = Math.round(dt / DT); n > 0; n--) {
        dist += SPEED * DT;
        const zr = road(dist);
        const fs = K * (zs - zu), fd = C * (vs - vu);
        const ft = Math.max(-W, KT * (zr - zu));
        vs += ((-fs - fd) / MS) * DT;
        vu += ((fs + fd + ft) / MU) * DT;
        zs += vs * DT; zu += vu * DT;
        pDamp += fd * (vs - vu) * DT; // אנרגיה שהבולם הופך לחום (ג׳אול)
      }
      t += dt;
      heat = heat * Math.exp(-dt * 3) + pDamp; // מדד לחום שנוצר לאחרונה
      hist.push([t, zs, road(dist)]);
      while (hist.length && hist[0][0] < t - GSPAN) hist.shift();

      // ציור: הכביש נע שמאלה; הגלגל במרכז
      let d = "";
      for (let x = 0; x <= 138; x += 3) d += `${x ? "L" : "M"}${x} ${(ROADY - road(dist + (x - WX) / HX) * VZ).toFixed(1)}`;
      $("roadl").setAttribute("d", d);
      $("road").setAttribute("d", d + "V200H0Z");
      const hub = HUB0 - zu * VZ, bot = BODY0 - zs * VZ;
      $("wheel").setAttribute("transform", `translate(0 ${(-zu * VZ).toFixed(1)})`);
      $("body").setAttribute("transform", `translate(0 ${(-zs * VZ).toFixed(1)})`);
      $("spr").setAttribute("d", coil(WX, bot, hub - 7));
      // בולם: הצילינדר צמוד לגלגל, המוט למרכב
      const tubeTop = hub - 30;
      $("dtube").setAttribute("y", tubeTop.toFixed(1)); $("dtube").setAttribute("height", "28");
      $("drod").setAttribute("d", `M${WX + 21} ${bot.toFixed(1)}V${(tubeTop + 6).toFixed(1)}`);
      $("dheat").setAttribute("y", (tubeTop + 2).toFixed(1)); $("dheat").setAttribute("height", "24");
      $("dheat").setAttribute("opacity", clamp(heat / 40, 0, 0.9).toFixed(2));
      // גרף
      const gx = (ti) => GX1 - ((t - ti) / GSPAN) * (GX1 - GX0);
      const gy = (z) => GY - clamp(z * 100, -18, 18) * 4; // ס"מ → פיקסלים (4 לס"מ)
      let pb = "", pr = "";
      hist.forEach(([ti, b, r], i) => { pb += `${i ? "L" : "M"}${gx(ti).toFixed(1)} ${gy(b).toFixed(1)}`; pr += `${i ? "L" : "M"}${gx(ti).toFixed(1)} ${gy(r).toFixed(1)}`; });
      $("trb").setAttribute("d", pb); $("trr").setAttribute("d", pr);
    });
  },
};
