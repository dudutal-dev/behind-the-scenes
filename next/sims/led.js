// נורת LED: משנים את גובה "המדרגה" (פער האנרגיה) ורואים את צבע האור משתנה; מוסיפים זרחן לשבב כחול ומקבלים לבן.
// אנרגיית חלקיק האור שווה לגובה המדרגה: λ (ננומטר) = h·c / E = 1,240 ÷ E (אלקטרון־וולט).
// טווח הראייה שנלקח כאן: 380 עד 750 ננומטר. מעל 750 תת־אדום, מתחת ל־380 על־סגול (לא נראים).
// המרת אורך גל לצבע תצוגה: הקירוב המקובל של Bruton (מקטעים לינאריים ב־RGB, גמא 0.8). זה קירוב למסך, לא צבע ספקטרלי מדויק.
// זרחן צהוב (כמו YAG:Ce) בולע אור כחול, כאן 430 עד 485 ננומטר, ופולט צהוב רחב; כאן הוא מיוצג באורך גל אחד, 578 ננומטר.
// פישוט: בהדמיה כל חלקיק אור שני מומר לצהוב; בצבעים אחרים הזרחן לא מגיב והאור עובר כמו שהוא.
// קביעות מוכנות: אדום 1.9 (653 ננומטר) · ירוק 2.35 (528) · כחול 2.75 (451).
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const HC = 1240, Y0 = 150, PX_PER_EV = 25, JX = 100;
const SX0 = 200, SW = 108, NM_MAX = 775, NM_MIN = 365; // פס הספקטרום: תת־אדום משמאל, כמו במחוון
const DISC = { x: 268, y: 84, r: 17 };

function rgb(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
  else r = 1;
  // עמעום בקצוות, שם העין פחות רגישה (לא עד שחור, כדי שהציור יישאר קריא)
  const f = nm < 420 ? 0.5 + (0.5 * (nm - 380)) / 40 : nm > 700 ? 0.5 + (0.5 * (780 - nm)) / 80 : 1;
  const c = (x) => Math.round(255 * Math.pow(clamp(x, 0, 1) * clamp(f, 0, 1), 0.8));
  return `rgb(${c(r)},${c(g)},${c(b)})`;
}
const visible = (nm) => nm >= 380 && nm <= 750;
const colorName = (nm) => nm > 750 ? "תת־אדום" : nm >= 625 ? "אדום" : nm >= 590 ? "כתום" : nm >= 565 ? "צהוב" : nm >= 500 ? "ירוק"
  : nm >= 485 ? "תכלת" : nm >= 430 ? "כחול" : nm >= 380 ? "סגול" : "על־סגול";
const isBlue = (nm) => nm >= 430 && nm < 485;
const YELLOW_NM = 578, WHITE = "#fffbe6";

export default {
  title: "שנו את גובה המדרגה",
  hint: "כל אלקטרון שנופל לחור פולט חלקיק אור אחד, וגובה המדרגה קובע את צבעו. המדרגה נמדדת באלקטרון־וולט (eV). נסו להוסיף זרחן לכל צבע.",
  mount(root) {
    const strip = Array.from({ length: 54 }, (_, i) => {
      const nm = NM_MAX - ((i + 0.5) / 54) * (NM_MAX - NM_MIN);
      return `<rect x="${SX0 + i * 2}" y="142" width="2.100" height="8" ${visible(nm) ? `fill="${rgb(nm)}"` : `class="fl-line" opacity=".35"`}/>`;
    }).join("");
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שתי שכבות של שבב LED: אלקטרונים נופלים במדרגה אל חורים ופולטים חלקיקי אור בצבע שתלוי בגובה המדרגה">
        <text id="note" x="160" y="14" class="sm"></text>
        <!-- שתי השכבות -->
        <rect class="fl-cold-soft" x="14" y="24" width="86" height="148"/>
        <rect class="fl-soft" x="100" y="24" width="86" height="148"/>
        <rect class="fl-none st-ink" stroke-width="2" x="14" y="24" width="172" height="148" rx="4"/>
        <path class="thin" style="stroke-dasharray:3 4" d="M100 26V170"/>
        <path id="step" class="wire st-ink"/>
        <path id="gapArrow" class="arrow st-violet" style="stroke-width:1.800"/>
        <text id="gapLab" x="62" class="lg" direction="ltr"></text>
        <g id="els" class="fl-elec st-ink" stroke-width=".8"></g>
        <g id="holes" class="fl-bg st-ink" stroke-width="1.500"></g>
        <circle id="fall" class="fl-elec st-ink" stroke-width=".8" r="3.500"/>
        <circle id="flash" r="7" opacity="0"/>
        <text x="57" y="186" class="sm">עודף אלקטרונים</text>
        <text x="143" y="186" class="sm">חורים פנויים</text>
        <!-- זרחן -->
        <g id="phos">
          <rect class="fl-elec st-ink" stroke-width="1.200" x="198" y="40" width="10" height="88" rx="3" opacity=".9"/>
          <text x="203" y="34" class="sm">זרחן</text>
        </g>
        <g id="photons" fill="none" stroke-linecap="round" stroke-linejoin="round"></g>
        <!-- מה שהעין רואה -->
        <text x="${DISC.x}" y="56" class="sm">מה שרואים</text>
        <circle id="disc" cx="${DISC.x}" cy="${DISC.y}" r="${DISC.r}" class="st-ink" stroke-width="1.500"/>
        <text id="name" x="${DISC.x}" y="120" class="lg"></text>
        <!-- פס הספקטרום -->
        ${strip}
        <rect class="fl-none st-ink" stroke-width="1" x="${SX0}" y="142" width="${SW}" height="8"/>
        <path id="mark" class="fl-ink" d="M-4 -7H4L0 0Z"/>
        <path id="mark2" class="fl-ink" d="M-4 -7H4L0 0Z" opacity=".55"/>
        <text x="220" y="164" class="sm">תת־אדום</text>
        <text x="290" y="164" class="sm">על־סגול</text>
      </svg>
      ${readouts([{ id: "nm", label: "אורך גל (ננומטר)" }, { id: "col", label: "צבע האור" }])}
      ${range({ id: "e", label: "מדרגה", min: 1.6, max: 3.4, step: 0.05, value: 1.9 })}
      ${choice({ id: "preset", label: "צבע", options: [{ v: "1.9", label: "אדום" }, { v: "2.35", label: "ירוק" }, { v: "2.75", label: "כחול" }], value: "1.9" })}
      ${choice({ id: "coat", label: "ציפוי", options: [{ v: "off", label: "בלי" }, { v: "on", label: "עם זרחן" }], value: "off" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    $("els").innerHTML = Array.from({ length: 4 }, () => `<circle r="3.500"/>`).join("");
    $("holes").innerHTML = Array.from({ length: 4 }, () => `<circle r="3.500"/>`).join("");
    $("photons").innerHTML = Array.from({ length: 6 }, () => `<g><path class="st-ink" stroke-width="3.600" opacity=".3"/><path stroke-width="2.200"/></g>`).join("");
    const els = [...$("els").children], holes = [...$("holes").children], phEls = [...$("photons").children];
    const presetBtns = [...root.querySelectorAll('.seg-btns[data-id="preset"] button')];
    let lastPreset = "1.9", E = 1.9, nm = HC / 1.9, yT = Y0 - PX_PER_EV * 1.9, white = false;
    const photons = []; // { x, y, dx, dy, convert, done }
    let T = 0, cycle = 0, fallT = -1, flashT = 0, count = 0;
    const paint = (el, wave) => {
      if (visible(wave)) { el.setAttribute("stroke", rgb(wave)); el.removeAttribute("stroke-dasharray"); el.style.stroke = ""; }
      else { el.removeAttribute("stroke"); el.style.stroke = "var(--s-line)"; el.setAttribute("stroke-dasharray", "2 3"); }
    };

    wire(root, (v) => {
      const slider = $("e");
      if (v.preset && v.preset !== lastPreset) slider.value = v.preset;
      E = +slider.value;
      lastPreset = undefined;
      presetBtns.forEach((b) => {
        const on = Math.abs(+b.dataset.v - E) < 0.001;
        b.setAttribute("aria-pressed", String(on));
        if (on) lastPreset = b.dataset.v;
      });
      nm = HC / E;
      yT = Y0 - PX_PER_EV * E;
      const coat = v.coat === "on", vis = visible(nm);
      white = coat && isBlue(nm);
      out(root, "e-out", `\u200e${E.toFixed(2)} eV`);
      out(root, "nm", fmt(nm, 0));
      out(root, "col", white ? "לבן" : colorName(nm));
      $("step").setAttribute("d", `M15 ${yT}H${JX}V${Y0}H185`);
      $("gapArrow").setAttribute("d", `M30 ${yT + 5}V${Y0 - 5}M26 ${yT + 10}l4 -5 4 5M26 ${Y0 - 10}l4 5 4 -5`);
      const gl = $("gapLab");
      gl.textContent = `${E.toFixed(2)} eV`;
      gl.setAttribute("y", ((yT + Y0) / 2 + 5).toFixed(1));
      $("phos").style.display = coat ? "" : "none";
      const disc = $("disc");
      disc.setAttribute("fill", white ? WHITE : vis ? rgb(nm) : "none");
      disc.setAttribute("stroke-dasharray", vis ? "" : "3 3");
      out(root, "name", white ? "לבן" : vis ? colorName(nm) : "לא נראה");
      const mx = (w) => SX0 + ((NM_MAX - w) / (NM_MAX - NM_MIN)) * SW;
      $("mark").setAttribute("transform", `translate(${mx(nm).toFixed(1)} 141)`);
      $("mark2").setAttribute("transform", `translate(${mx(YELLOW_NM).toFixed(1)} 141)`);
      $("mark2").style.display = white ? "" : "none";
      $("flash").setAttribute("fill", vis ? rgb(nm) : "none");
      out(root, "note",
        white ? "הזרחן הופך חלק מהכחול לצהוב, וכחול עם צהוב נראים יחד לבן"
        : coat && nm < 430 ? "הזרחן הזה מגיב לאור כחול. כאן האור לא כחול, ולא מתקבל לבן"
        : coat ? "הזרחן מגיב רק לאור כחול. האור הזה עובר דרכו בלי שינוי"
        : nm > 750 ? "מדרגה נמוכה: תת־אדום, כמו בשלט של הטלוויזיה. העין לא רואה אותו"
        : nm < 380 ? "מדרגה גבוהה מאוד: על־סגול. גם אותו העין לא רואה"
        : `אורך הגל: 1,240 ÷ ${E.toFixed(2)} = ${fmt(nm, 0)} ננומטר. מדרגה גבוהה יותר, גל קצר יותר`);
    });

    loop(root, (dt) => {
      T += dt;
      const PERIOD = 0.6, SP = 20, FALL = 0.3;
      const s = ((T % PERIOD) / PERIOD) * SP, s2 = ((((T - FALL) % PERIOD) + PERIOD) % PERIOD / PERIOD) * SP;
      const c = Math.floor(T / PERIOD);
      if (c !== cycle) { cycle = c; fallT = 0; }
      els.forEach((el, k) => {
        const x = JX - SP * (k + 1) + s;
        el.setAttribute("cx", x.toFixed(1));
        el.setAttribute("cy", yT - 5);
        el.setAttribute("opacity", clamp((x - 16) / 8, 0, 1).toFixed(2));
      });
      holes.forEach((el, k) => {
        const x = JX + 7 + SP * (k + 1) - s2;
        el.setAttribute("cx", x.toFixed(1));
        el.setAttribute("cy", Y0 - 5);
        el.setAttribute("opacity", clamp((184 - x) / 8, 0, 1).toFixed(2));
      });
      // הנפילה במדרגה, ובסופה חלקיק אור
      const fall = $("fall");
      if (fallT >= 0) {
        fallT += dt;
        const u = clamp(fallT / FALL, 0, 1);
        fall.setAttribute("cx", (JX + 7 * u).toFixed(1));
        fall.setAttribute("cy", (yT - 5 + (Y0 - yT) * u * u).toFixed(1));
        fall.setAttribute("opacity", 1);
        if (u >= 1) {
          fallT = -1; flashT = 0.25;
          const ty = DISC.y + [-9, 6, -2, 10, -6, 2][count % 6], x0 = JX + 8, y0 = (yT + Y0) / 2;
          const d = Math.hypot(DISC.x - DISC.r - x0, ty - y0);
          photons.push({ x: x0, y: y0, dx: (DISC.x - DISC.r - x0) / d, dy: (ty - y0) / d, convert: count % 2 === 1, done: false, wave: nm });
          count++;
        }
      } else fall.setAttribute("opacity", 0);
      flashT = Math.max(0, flashT - dt);
      const fl = $("flash");
      fl.setAttribute("cx", JX + 7); fl.setAttribute("cy", Y0 - 5);
      fl.setAttribute("opacity", (flashT * 3).toFixed(2));
      // חלקיקי האור: גל קצר שאורכו בציור יחסי לאורך הגל
      for (const p of photons) {
        p.x += p.dx * 75 * dt; p.y += p.dy * 75 * dt;
        if (!p.done && p.x > 203) { p.done = true; p.wave = white && p.convert ? YELLOW_NM : nm; }
        else if (!p.done) p.wave = nm;
      }
      while (photons.length && photons[0].x > DISC.x - DISC.r) photons.shift();
      phEls.forEach((g, k) => {
        const p = photons[k];
        if (!p) { g.style.display = "none"; return; }
        g.style.display = "";
        const L = p.wave / 40, tail = Math.min(2.5 * L, Math.hypot(p.x - (JX + 8), p.y - (yT + Y0) / 2));
        let d = "";
        for (let i = 0; i <= 24; i++) {
          const q = (tail * i) / 24, a = 3.2 * Math.sin((2 * Math.PI * q) / L) * Math.min(1, q / 3, (tail - q) / 3);
          d += `${i ? "L" : "M"}${(p.x - p.dx * q - p.dy * a).toFixed(1)} ${(p.y - p.dy * q + p.dx * a).toFixed(1)}`;
        }
        g.children[0].setAttribute("d", d);
        g.children[1].setAttribute("d", d);
        paint(g.children[1], p.wave);
      });
    });
  },
};
