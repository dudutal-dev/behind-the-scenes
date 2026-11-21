// GPS: מקלט שנגרר על מפה, לוויינים שמודדים אליו זמן הגעה, ושעון מקלט לא מדויק שמזיז את המיקום המחושב.
//
// מהירות האור: c = 299,792,458 מ׳/ש, כלומר 0.2998 מ׳ לננו-שנייה (ננו-שנייה אחת ≈ 30 ס״מ).
// המדידה מכל לוויין ("פסאודו-מרחק"): ρᵢ = c·(tᵢ + b) = dᵢ + c·b
//   dᵢ המרחק האמיתי, tᵢ = dᵢ/c זמן המעבר האמיתי, b טעות השעון של המקלט (חיובית = השעון ממהר,
//   ואז כל האותות נראים כאילו נסעו זמן רב יותר וכל המעגלים גדלים באותה מידה).
// שלושה לוויינים: המקלט מניח b = 0 ומחפש את הנקודה שהכי קרובה לשלושת המעגלים
//   (ריבועים פחותים, Gauss–Newton על rᵢ = |p − sᵢ| − ρᵢ). הטעות במיקום יוצאת בסדר גודל של c·b.
// ארבעה לוויינים: פותרים גם את b: rᵢ = |p − sᵢ| + c·b − ρᵢ בשלושה נעלמים (x, y, c·b),
//   והמעגלים המתוקנים (ρᵢ − c·b) חוזרים להיפגש בנקודה אחת.
// דגם מוקטן ושטוח: פיקסל אחד = מטר אחד, וה"לוויינים" במרחק מאות מטרים (זמני מעבר של מאות ננו-שניות)
//   במקום כ-20,000 ק״מ (כ-67 אלפיות שנייה), כדי שהמעגלים והטעות ייראו באותה תמונה. מהירות האור אמיתית.
//   במפה דו-ממדית היו מספיקים שלושה לוויינים גם לשעון; כאן נשמר המניין של העולם התלת-ממדי
//   (שלושה למיקום, רביעי לשעון), כמו בטקסט.
import { range, choice, readouts, wire, out, fmt, clamp, drag } from "./kit.js";

const C = 299792458;        // מ׳/ש
const M_PER_NS = C * 1e-9;  // 0.2998 מ׳ לננו-שנייה
const SATS = [
  { x: 28, y: 30, lx: 40, ly: 52 },
  { x: 160, y: 16, lx: 160, ly: 38 },
  { x: 292, y: 30, lx: 280, ly: 52 },
  { x: 300, y: 118, lx: 290, ly: 140 },
];
const BOX = { x0: 36, x1: 240, y0: 84, y1: 164 }; // התחום שבו המקלט יכול לזוז
const route = (u) => ({ x: 46 + 190 * u, y: 124 + 32 * Math.sin(u * 2 * Math.PI) });

// פתרון מערכת לינארית קטנה (חילוץ גאוס עם ציר)
function solve(A, b) {
  const n = b.length, M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    if (Math.abs(M[c][c]) < 1e-12) return null;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c] / M[c][c];
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((r, i) => r[n] / M[i][i]);
}

// Gauss–Newton: sats עם פסאודו-מרחקים rho; withClock קובע אם פותרים גם את טעות השעון
function fix(sats, rho, start, withClock) {
  let x = start.x, y = start.y, cb = 0;
  const n = withClock ? 3 : 2;
  for (let it = 0; it < 25; it++) {
    const N = Array.from({ length: n }, () => new Array(n).fill(0)), g = new Array(n).fill(0);
    sats.forEach((s, i) => {
      const d = Math.hypot(x - s.x, y - s.y) || 1e-9;
      const r = d + cb - rho[i];
      const J = [(x - s.x) / d, (y - s.y) / d, 1];
      for (let a = 0; a < n; a++) { g[a] -= J[a] * r; for (let b = 0; b < n; b++) N[a][b] += J[a] * J[b]; }
    });
    const dx = solve(N, g);
    if (!dx) break;
    x += dx[0]; y += dx[1]; if (withClock) cb += dx[2];
    if (Math.hypot(dx[0], dx[1]) < 1e-7) break;
  }
  return { x, y, cb };
}

const satIcon = (s, i) => `
  <g id="sat${i}">
    <rect class="fl-cold st-ink" stroke-width="1" x="${s.x - 14}" y="${s.y - 3.500}" width="9" height="7"/>
    <rect class="fl-cold st-ink" stroke-width="1" x="${s.x + 5}" y="${s.y - 3.500}" width="9" height="7"/>
    <rect class="body" stroke-width="1.500" x="${s.x - 5}" y="${s.y - 5}" width="10" height="10" rx="2"/>
    <text x="${s.x}" y="${s.y + 3}" class="sm" style="stroke:none;font-weight:700">${i + 1}</text>
  </g>`;

export default {
  title: "גרור את המקלט על המפה",
  hint: "כל מעגל הוא זמן ההגעה של האות כפול מהירות האור. כשהשעון של המקלט טועה כל המעגלים גדלים או קטנים יחד והמיקום זז: ננו־שנייה (ננ״ש) אחת היא כ־30 ס״מ. הלוויין הרביעי מגלה את הטעות. זהו דגם מוקטן: לוויינים אמיתיים רחוקים כ־20,000 ק״מ.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מפה עם ארבעה לוויינים ומקלט. סביב כל לוויין מעגל מרחק, והמעגלים נפגשים במיקום המחושב">
        <!-- רחובות -->
        <g class="st-line fl-none" stroke-width="5" stroke-linecap="round" opacity=".22">
          <path d="M-5 96H325M-5 150H325M70 60V205M148 60V205M232 60V205"/>
          <path d="M-5 184L120 60"/>
        </g>
        <g id="circs" class="fl-none" stroke-width="1.600">
          ${SATS.map((s, i) => `<circle id="c${i}" cx="${s.x}" cy="${s.y}" r="10" class="${i === 3 ? "st-violet" : "st-cold"}"/>`).join("")}
        </g>
        ${SATS.map(satIcon).join("")}
        ${SATS.map((s, i) => `<text id="t${i}" x="${s.lx}" y="${s.ly}" class="sm" style="font-weight:700"></text><text id="d${i}" x="${s.lx}" y="${s.ly + 10}" class="sm"></text>`).join("")}
        <!-- סרגל קנה מידה -->
        <path class="st-ink fl-none" stroke-width="1.500" d="M264 165v6M264 168H${(264 + 100 * M_PER_NS).toFixed(1)}M${(264 + 100 * M_PER_NS).toFixed(1)} 165v6"/>
        <text x="${(264 + 50 * M_PER_NS).toFixed(1)}" y="161" class="sm">30 מ׳ = 100 ננ״ש</text>
        <!-- המיקום המחושב -->
        <path id="err" class="st-hot fl-none" stroke-width="1.500" stroke-dasharray="3 3"/>
        <g id="est">
          <circle class="st-hot fl-none" stroke-width="2" r="6.500"/>
          <path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H-3.500M3.500 0H10M0 -10V-3.500M0 3.500V10"/>
        </g>
        <!-- המקלט האמיתי (נגרר) -->
        <g id="rx" style="cursor:grab">
          <circle r="19" fill="transparent"/>
          <circle class="fl-green" r="9" opacity=".25"/>
          <circle class="fl-green st-ink" stroke-width="1.500" r="4.500"/>
        </g>
        <text id="n1" x="160" y="183" class="sm"></text>
        <text id="n2" x="160" y="194" class="sm"></text>
      </svg>
      ${readouts([{ id: "perr", label: "טעות במיקום" }, { id: "rerr", label: "טעות בכל מרחק" }])}
      ${range({ id: "b", label: "טעות שעון", min: -100, max: 100, step: 5, value: 50 })}
      ${choice({ id: "n", label: "לוויינים", options: [{ v: 3, label: "שלושה" }, { v: 4, label: "ארבעה" }], value: 3 })}
      ${range({ id: "u", label: "מקום המקלט", min: 0, max: 100, step: 1, value: 45 })}`;

    const q = (s) => root.querySelector(s);
    const svg = q("svg"), rx = q("#rx"), est = q("#est");
    let pos = route(0.45), lastU = 45, V = { b: 50, n: "3" };

    const render = () => {
      const cb = V.b * M_PER_NS;                 // טעות השעון במטרים
      const use = V.n === "4" ? SATS : SATS.slice(0, 3);
      const dist = SATS.map((s) => Math.hypot(pos.x - s.x, pos.y - s.y));
      const rho = dist.map((d) => d + cb);
      const three = fix(SATS.slice(0, 3), rho, pos, false);
      const sol = V.n === "4" ? fix(SATS, rho, three, true) : three;
      const perr = Math.hypot(sol.x - pos.x, sol.y - pos.y);

      SATS.forEach((s, i) => {
        const on = i < use.length;
        const shown = rho[i] - sol.cb;           // רדיוס המעגל: המדידה, אחרי תיקון השעון אם נפתר
        const c = q(`#c${i}`);
        c.setAttribute("r", Math.max(0, shown).toFixed(2));
        c.setAttribute("opacity", on ? 0.9 : 0);
        q(`#sat${i}`).setAttribute("opacity", on ? 1 : 0.3);
        out(root, `t${i}`, on ? `${fmt(shown / M_PER_NS, 0)} ננ״ש` : "כבוי");
        out(root, `d${i}`, on ? `${fmt(shown, 1)} מ׳` : "");
        q(`#t${i}`).setAttribute("opacity", on ? 1 : 0.5);
      });
      rx.setAttribute("transform", `translate(${pos.x.toFixed(2)} ${pos.y.toFixed(2)})`);
      est.setAttribute("transform", `translate(${sol.x.toFixed(2)} ${sol.y.toFixed(2)})`);
      q("#err").setAttribute("d", perr > 0.5 ? `M${pos.x.toFixed(1)} ${pos.y.toFixed(1)}L${sol.x.toFixed(1)} ${sol.y.toFixed(1)}` : "");

      out(root, "perr", `${fmt(perr, 1)} מ׳`);
      out(root, "rerr", `${fmt(Math.abs(cb - sol.cb), 1)} מ׳`);
      out(root, "b-out", `${V.b > 0 ? "+" : V.b < 0 ? "−" : ""}${Math.abs(V.b)} ננ״ש`);
      out(root, "u-out", `${Math.round(pos.x)}, ${Math.round(pos.y)}`);

      const way = V.b > 0 ? "ממהר" : "מפגר";
      let n1, n2 = "";
      if (V.n === "4" && V.b !== 0) {
        n1 = `הלוויין הרביעי גילה שהשעון ${way} ב־${fmt(Math.abs(sol.cb / M_PER_NS), 0)} ננ״ש;`;
        n2 = "אחרי התיקון כל המעגלים שוב נפגשים בנקודה אחת";
      } else if (V.b === 0) {
        n1 = "שעון מדויק: כל המעגלים נפגשים בדיוק במקלט";
      } else {
        n1 = `השעון ${way}: כל מרחק נמדד ${V.b > 0 ? "ארוך" : "קצר"} מדי ב־${fmt(Math.abs(cb), 1)} מ׳,`;
        n2 = "המעגלים לא נפגשים והמיקום המחושב (באדום) זז";
      }
      out(root, "n1", n1); out(root, "n2", n2);
    };

    wire(root, ({ b, n, u }) => {
      V = { b, n };
      if (u !== lastU) { lastU = u; pos = route(u / 100); } // המחוון מזיז את המקלט לאורך מסלול הליכה
      render();
    });

    // גרירה: רק על המקלט עצמו, כדי ששאר המפה תמשיך לאפשר גלילה של הדף
    const target = {
      style: rx.style,
      createSVGPoint: () => svg.createSVGPoint(),
      getScreenCTM: () => svg.getScreenCTM(),
      addEventListener: (t, f) => rx.addEventListener(t, f),
      setPointerCapture: (id) => rx.setPointerCapture(id),
    };
    drag(target, (p) => {
      pos = { x: clamp(p.x, BOX.x0, BOX.x1), y: clamp(p.y, BOX.y0, BOX.y1) };
      render();
    });
  },
};
