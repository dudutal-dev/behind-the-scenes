// פטריות הזיה: משנים את תפוסת קולטני 5-HT2A על ידי פסילוצין, מוסיפים חוסם או סבילות, ורואים את רשתות המוח מאבדות גבולות.
//
// מה מבוסס על מדידה ומה המחשה:
// · תפוסת קולטני 5-HT2A (המחוון, 0–75%): ב־PET אצל מתנדבים (Madsen et al., Neuropsychopharmacology 2019; Stenbæk et al. 2021)
//   פסילוסיבין הגיע לתפוסה של עד כ־72%, עוצמת החוויה עלתה עם התפוסה (R² ≈ 0.8), ועד כ־15% תפוסה לא דווחו השפעות תפיסתיות.
//   לכן: עוצמה I = (S − 0.15) / (0.70 − 0.15), חסומה בין 0 ל־1, כאשר S הוא שיעור הקולטנים המופעלים ביחס למספר הרגיל.
// · חוסם (קטנסרין): חוסם 5-HT2A שבניסויים ביטל או החליש מאוד את החוויה. המחשה: הוא תופס כ־85% מהקולטנים,
//   ותפוסת הפסילוצין יורדת לעשירית.
// · סבילות: אחרי גירוי חזק קולטנים נמשכים לתוך התא. בחולדות הירידה בקולטנים נראתה עוד 48 שעות אחרי המנה האחרונה ונעלמה
//   בתוך 96 שעות. שיעורי הקולטנים הזמינים כאן (אתמול 45%, לפני שבוע 90%) הם המחשה של הכיוון, לא מדידה באדם.
// · רשתות: בסריקות fMRI (Carhart-Harris 2012; Siegel et al., Nature 2024) הקישוריות בתוך רשת ברירת המחדל ירדה הכי הרבה,
//   הגבולות בין הרשתות היטשטשו, וגודל השינוי היה קשור לעוצמת החוויה. המספרים כאן (בתוך: 80% → 42%, בין: 20% → 44%)
//   הם סולם המחשה בלבד; הכיוון והיחס (ברירת המחדל משתנה יותר מהשאר) הם מה שהמחקר מראה.
// · ההבהובים של הצמתים: צמתים של אותה רשת מהבהבים יחד (תיאום); ככל ש־I עולה, הפאזות מתפזרות. הקצב מואט להמחשה.
import { range, choice, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const THRESH = 0.15, FULL = 0.70;                     // Madsen 2019: סף ~15%, תפוסה ~70% ≈ עוצמה מרבית
const AVAIL = { none: 1, day: 0.45, week: 0.9 };      // המחשה: שיעור הקולטנים על פני התא
const K_BLOCK = 0.85, P_BLOCK_FACTOR = 0.1;           // המחשה: תפוסת החוסם, והירידה בתפוסת הפסילוצין
const NREC = 5;

// רשתות: מרכז, רדיוס, מספר צמתים, צבע, ועוצמת התגובה (ברירת המחדל מגיבה הכי חזק)
const NETS = [
  { key: "dmn", name: "ברירת המחדל", cx: 222, cy: 62, r: 25, n: 5, cls: "violet", gain: 1, lx: 222, ly: 22 },
  { key: "vis", name: "ראייה", cx: 160, cy: 134, r: 21, n: 4, cls: "cold", gain: 0.6, lx: 160, ly: 172 },
  { key: "att", name: "קשב", cx: 284, cy: 134, r: 21, n: 4, cls: "green", gain: 0.6, lx: 284, ly: 172 },
];
const NODES = [];
NETS.forEach((net, ni) => {
  for (let i = 0; i < net.n; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / net.n + ni * 0.4;
    NODES.push({ net: ni, x: +(net.cx + net.r * Math.cos(a)).toFixed(1), y: +(net.cy + net.r * Math.sin(a)).toFixed(1), off: ((i * 7 + ni * 3) % 11) / 11 - 0.5 });
  }
});
const WITHIN = [], BETWEEN = [];
NODES.forEach((a, i) => NODES.forEach((b, j) => {
  if (j <= i) return;
  if (a.net === b.net) WITHIN.push([i, j]);
}));
// קשרים בין רשתות: בכל זוג רשתות, שלושת הזוגות הקרובים ביותר
for (let p = 0; p < 3; p++) for (let q = p + 1; q < 3; q++) {
  const pairs = [];
  NODES.forEach((a, i) => NODES.forEach((b, j) => { if (a.net === p && b.net === q) pairs.push([Math.hypot(a.x - b.x, a.y - b.y), i, j]); }));
  pairs.sort((u, v) => u[0] - v[0]).slice(0, 3).forEach(([, i, j]) => BETWEEN.push([i, j]));
}
const hexPath = (r) => Array.from({ length: 6 }, (_, k) => `${k ? "L" : "M"}${(r * Math.cos(k * Math.PI / 3)).toFixed(2)} ${(r * Math.sin(k * Math.PI / 3)).toFixed(2)}`).join("") + "Z";
const REC = "M-6 0V18Q-6 23 -1.5 23H1.5Q6 23 6 18V0H2.5V5Q0 7.5 -2.5 5V0Z"; // קולטן עם כיס קישור למעלה

export default {
  title: "שחקו עם הקולטן והרשתות",
  hint: "מתחת לכ־15% תפוסה כמעט אין השפעה; מעליה רשת ברירת המחדל מתרופפת והרשתות מתערבבות. נסו גם חוסם וסבילות. התפוסה והסף מבוססים על מדידות PET; גודל השינוי ברשתות הוא המחשה.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="קולטני 5-HT2A על קרום תא עצב, ולצדם שלוש רשתות מוח שהקישורים בתוכן ובינן משתנים">
        <rect class="fl-panel" x="6" y="6" width="104" height="188" rx="10"/>
        <text x="58" y="20" class="sm">קולטני ⁦5-HT2A⁩</text>
        <rect class="fl-cold-soft" x="10" y="80" width="96" height="84" rx="6"/>
        <path class="wire st-line" style="stroke-width:2" d="M10 74H106M10 80H106"/>
        <text x="58" y="158" class="sm">בתוך התא</text>
        <g id="free"></g>
        <g id="recs"></g>
        <g transform="translate(22 180)"><path class="fl-warm st-ink" stroke-width="1.2" d="${hexPath(4.2)}"/></g>
        <text x="46" y="183" class="sm">פסילוצין</text>
        <rect class="fl-line st-ink" stroke-width="1.2" x="70" y="176" width="8" height="8" rx="1.5"/>
        <text x="93" y="183" class="sm">חוסם</text>
        <g id="between" class="wire st-ink" style="stroke-width:1.4;stroke-dasharray:3 3"></g>
        <g id="within"></g>
        <g id="nodes"></g>
        ${NETS.map((n) => `<text x="${n.lx}" y="${n.ly}" class="sm">${n.name}</text>`).join("")}
        <text id="note" x="216" y="194" class="sm"></text>
      </svg>
      ${readouts([{ id: "win", label: "תיאום בתוך הרשתות" }, { id: "btw", label: "תיאום בין הרשתות" }])}
      ${range({ id: "occ", label: "תפוסה", min: 0, max: 75, value: 45 })}
      ${choice({ id: "tol", label: "חשיפה", options: [{ v: "none", label: "אין" }, { v: "day", label: "אתמול" }, { v: "week", label: "לפני שבוע" }], value: "none" })}
      ${choice({ id: "blk", label: "חוסם", options: [{ v: "off", label: "בלי" }, { v: "on", label: "קטנסרין" }], value: "off" })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    const ns = "http://www.w3.org/2000/svg";
    const mk = (parent, tag, attrs) => { const e = document.createElementNS(ns, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };

    // רשתות
    const wEls = WITHIN.map(([i, j]) => mk($("within"), "path", { class: `wire st-${NETS[NODES[i].net].cls}`, style: "stroke-width:2.6", d: `M${NODES[i].x} ${NODES[i].y}L${NODES[j].x} ${NODES[j].y}` }));
    const bEls = BETWEEN.map(([i, j]) => mk($("between"), "path", { d: `M${NODES[i].x} ${NODES[i].y}L${NODES[j].x} ${NODES[j].y}` }));
    const nEls = NODES.map((n) => {
      const g = mk($("nodes"), "g", { transform: `translate(${n.x} ${n.y})` });
      mk(g, "circle", { class: "fl-panel", r: 6 });
      const c = mk(g, "circle", { class: `fl-${NETS[n.net].cls}`, r: 6 });
      mk(g, "circle", { class: "fl-none st-ink", "stroke-width": 1.4, r: 6 });
      return c;
    });

    // קולטנים: 0 = פנוי, 1 = פסילוצין, 2 = חוסם
    const recs = Array.from({ length: NREC }, (_, i) => {
      const x = 20 + i * 19;
      const g = mk($("recs"), "g", {});
      const glow = mk(g, "circle", { class: "fl-elec", cx: 0, cy: 31, r: 5, opacity: 0 });
      mk(g, "path", { class: "body", style: "fill:var(--s-cold);stroke-width:1.4", d: REC });
      const lig = mk(g, "path", { class: "fl-warm st-ink", "stroke-width": 1.2, d: hexPath(3.6), transform: "translate(0 1)", opacity: 0 });
      const blk = mk(g, "rect", { class: "fl-line st-ink", "stroke-width": 1.2, x: -3.5, y: -3, width: 7, height: 7, rx: 1.5, opacity: 0 });
      return { x, g, glow, lig, blk, state: 0, y: 68, ty: 68, glowA: 0 };
    });
    // מולקולות חופשיות מעל הקרום
    const free = Array.from({ length: 12 }, (_, i) => {
      const e = mk($("free"), "path", { class: "fl-warm st-ink", "stroke-width": 1, d: hexPath(3.2), opacity: 0 });
      return { e, x: 16 + ((i * 37) % 84), y: 30 + ((i * 23) % 34), a: i * 1.7 };
    });

    let S = 0, I = 0, pP = 0, pK = 0, avail = 1, shownI = 0;

    wire(root, ({ occ, tol, blk }) => {
      const o = occ / 100;
      avail = AVAIL[tol];
      const blocked = blk === "on";
      pP = blocked ? o * P_BLOCK_FACTOR : o;
      pK = blocked ? K_BLOCK : 0;
      S = pP * avail;                                     // קולטנים מופעלים ביחס למספר הרגיל
      I = clamp((S - THRESH) / (FULL - THRESH), 0, 1);
      const within = 80 - 38 * I, between = 20 + 24 * I;
      out(root, "occ-out", `${occ}%`);
      out(root, "win", `${fmt(within, 0)}%`);
      out(root, "btw", `${fmt(between, 0)}%`);
      // קולטנים שנמשכו פנימה
      const inside = Math.round(NREC * (1 - avail));
      recs.forEach((r, i) => { r.in = i >= NREC - inside; r.ty = r.in ? 112 + (i % 2) * 14 : 68; if (r.in) r.state = 0; });
      free.forEach((f, i) => (f.on = i < Math.round(o * 14 * (blocked ? 0.6 : 1))));
      out(root, "note",
        blocked && o > THRESH ? "החוסם תופס את הקולטנים: כמעט אין שינוי"
        : tol === "day" && o > THRESH ? "פחות קולטנים בקרום: אותה תפוסה, אות חלש"
        : S <= THRESH ? "עד כ־15% תפוסה כמעט אין השפעה נתפסת"
        : I > 0.8 ? "הגבולות בין הרשתות כמעט נעלמים"
        : "ברירת המחדל מתרופפת, והרשתות מדברות יותר");
    });

    loop(root, (dt, t) => {
      shownI += (I - shownI) * Math.min(1, dt * 3);       // מעבר רך
      // קישורים: עובי ושקיפות לפי התיאום
      wEls.forEach((e, k) => {
        const g = NETS[NODES[WITHIN[k][0]].net].gain;
        const w = 1 - 0.75 * g * shownI;
        e.setAttribute("opacity", (0.15 + 0.85 * w).toFixed(2));
        e.style.strokeWidth = (1 + 2.2 * w).toFixed(2);
      });
      bEls.forEach((e) => e.setAttribute("opacity", (0.12 + 0.8 * shownI).toFixed(2)));
      // הבהובים: אותה פאזה בתוך רשת; הפאזות מתפזרות עם העוצמה
      nEls.forEach((c, k) => {
        const n = NODES[k], g = NETS[n.net].gain;
        const ph = n.net * 2.1 + n.off * 5.5 * shownI * (0.5 + 0.5 * g);
        c.setAttribute("opacity", (0.55 + 0.45 * Math.sin(t * 2.6 + ph)).toFixed(2));
      });
      // קישור ושחרור אקראיים: שיווי המשקל = התפוסה שנבחרה (קצב שחרור 1.2 לשנייה)
      const kOff = 1.2, pFree = Math.max(0.05, 1 - pP - pK);
      recs.forEach((r) => {
        r.y += (r.ty - r.y) * Math.min(1, dt * 4);
        if (!r.in) {
          if (r.state === 0) {
            const u = Math.random();
            if (u < dt * kOff * pP / pFree) r.state = 1;
            else if (u < dt * kOff * (pP + pK) / pFree) r.state = 2;
          } else if (Math.random() < dt * kOff) r.state = 0;
        }
        r.glowA += ((r.state === 1 ? 0.75 : 0) - r.glowA) * Math.min(1, dt * 6);
        r.g.setAttribute("transform", `translate(${r.x} ${r.y.toFixed(1)})`);
        r.g.setAttribute("opacity", r.in ? 0.45 : 1);
        r.lig.setAttribute("opacity", r.state === 1 ? 1 : 0);
        r.blk.setAttribute("opacity", r.state === 2 ? 1 : 0);
        r.glow.setAttribute("opacity", r.glowA.toFixed(2));
      });
      free.forEach((f) => {
        f.a += dt * 0.9;
        f.x = 16 + ((f.x - 16 + dt * 6 * Math.cos(f.a) + 84) % 84);
        const y = f.y + 4 * Math.sin(f.a * 1.3);
        f.e.setAttribute("transform", `translate(${f.x.toFixed(1)} ${y.toFixed(1)})`);
        f.e.setAttribute("opacity", f.on ? 0.85 : 0);
      });
    });
  },
};
