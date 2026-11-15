// תורשה: ריבוע פאנט וסטטיסטיקה של ילדים.
//
// המודל (דוגמה מודל, כמו האפונה של מנדל): גן אחד עם שתי גרסאות.
//   A = "סגול" (גוברת), a = "לבן" (נסגרת). לכל הורה שני עותקים: AA, Aa או aa.
//   מראה: מספיק A אחד כדי שהפרח יהיה סגול; לבן רק ב־aa.
// חוק ההפרדה של מנדל: כל תא מין (ביצית או זרע) נושא עותק אחד מתוך שני העותקים של ההורה,
//   כל אחד בהסתברות 1/2, ובאופן בלתי תלוי בהורה השני.
//   לכן לכל אחת מארבע המשבצות בריבוע פאנט (ביצית × זרע) יש הסתברות 1/2 × 1/2 = 1/4.
//   ההסתברות של כל צירוף גנים = מספר המשבצות שבהן הוא מופיע × 25%.
//   למשל Aa × Aa → AA 25%, Aa 50%, aa 25% (יחס 1:2:1, ובמראה 3 סגולים : 1 לבן).
// "ילד" = הגרלה של עותק אחד מכל הורה (Math.random). הספירה המצטברת מתקרבת לצפוי
//   כמו בהטלת מטבע: הסטייה האופיינית קטנה כמו 1/√n (חוק המספרים הגדולים).
// פישוט: גן אחד בלבד, בלי מוטציות ובלי קשר לגנים אחרים. רוב התכונות האנושיות אינן כאלה.
import { choice, readouts, wire, out, fmt, loop } from "./kit.js";

const WHITE = "#f6f3ea", WHITE_INK = "#2a2620";
const GENO = ["AA", "Aa", "aa"];
const canon = (x, y) => (x === "A" || y !== "A" ? x + y : y + x); // A תמיד ראשון
const isWhite = (g) => g === "aa";

// עיגול צבעוני עם אות: A סגול, a לבן
const chip = (al, x, y, r = 9, extra = "") => {
  x = +x; y = +y;
  const fill = al === "A" ? `class="fl-violet st-ink"` : `fill="${WHITE}" class="st-ink"`;
  const tf = al === "A" ? "#fff" : WHITE_INK;
  return `<g ${extra}><circle ${fill} stroke-width="1.3" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/><text x="${x.toFixed(1)}" y="${(y + r * 0.42).toFixed(1)}" style="stroke:none;fill:${tf};font-size:${Math.round(r * 1.25)}px;font-weight:700">${al}</text></g>`;
};
// פרח אפונה קטן
const flower = (cx, cy, purple) => {
  const f = purple ? `class="fl-violet st-ink"` : `fill="${WHITE}" class="st-ink"`;
  let s = `<path class="wire st-green" style="stroke-width:1.8" d="M${cx} ${cy + 4}v9"/>`;
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * 2 * Math.PI - Math.PI / 2;
    s += `<circle ${f} stroke-width=".9" cx="${(cx + 4.4 * Math.cos(a)).toFixed(1)}" cy="${(cy + 4.4 * Math.sin(a)).toFixed(1)}" r="3.7"/>`;
  }
  return s + `<circle class="fl-elec" cx="${cx}" cy="${cy}" r="2"/>`;
};

// גאומטריה
const FX = [26, 50], MX = [270, 294], PY = 34;         // עותקי האב (משמאל) והאם (מימין)
const GX = 112, GY = 30, CW = 48, CH = 32;              // ריבוע פאנט
const colX = (c) => GX + CW * c + CW / 2, rowY = (r) => GY + CH * r + CH / 2;
const KID = [{ x: 150, y: 120 }, { x: 170, y: 120 }];   // הילד: עותק מהאב, עותק מהאם
const BAR0 = 48, BARW = 200, ROWY = [150, 167, 184];
const ANIM = 0.75; // שניות

export default {
  title: "בחרו הורים והולידו ילדים",
  hint: "כל ילד מקבל עותק אקראי מכל הורה: אחת מארבע המשבצות. ילד בודד יכול להפתיע; אחרי מאות ילדים הפסים מגיעים לקווים.",
  mount(root) {
    const opts = GENO.map((g) => ({ v: g, label: g }));
    root.innerHTML = `
      <style>
        .hd-btns{display:flex;gap:8px;margin-top:12px}
        .hd-btns button{flex:1;min-height:44px;border-radius:13px;font-size:15px;font-weight:700;border:1px solid var(--line);background:var(--card);color:var(--ink);touch-action:manipulation}
        .hd-btns button.go{border:0;color:#fff;background:linear-gradient(140deg,var(--c1),var(--c2))}
        .hd-btns button:active{opacity:.8}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="שני הורים, ריבוע פאנט עם ארבעת הצירופים האפשריים, הילד האחרון וספירה של כל הילדים מול הצפוי">
        <text x="38" y="14">אבא</text><text x="282" y="14">אמא</text>
        <g id="par"></g>
        <text class="sm" x="98" y="24">זרע</text><text class="sm" x="246" y="66">ביצית</text>
        <g id="grid"></g>
        <text id="note" x="160" y="${GY + CH * 2 + 12}" class="sm"></text>
        <text class="sm" x="112" y="124">הילד האחרון</text>
        <g id="kid"></g>
        <g id="tally"></g>
        <g id="fly"></g>
      </svg>
      ${readouts([{ id: "n", label: "ילדים שנולדו" }, { id: "w", label: "לבנים: בפועל / צפוי" }])}
      ${choice({ id: "m", label: "אמא", options: opts, value: "Aa" })}
      ${choice({ id: "f", label: "אבא", options: opts, value: "Aa" })}
      <div class="hd-btns">
        <button type="button" class="go" data-act="one">ילד אחד</button>
        <button type="button" data-act="many">עוד 100</button>
        <button type="button" data-act="reset">איפוס</button>
      </div>`;

    const $ = (s) => root.querySelector(s);
    let M = "Aa", F = "Aa";
    let counts = { AA: 0, Aa: 0, aa: 0 }, n = 0;
    let last = null;          // { r, c, g }
    let anim = null;          // { r, c, t }
    let expect = {};

    const draw = () => {
      // הורים: שני עותקים ופרח
      $("#par").innerHTML =
        chip(F[0], FX[0], PY) + chip(F[1], FX[1], PY) + flower(38, 60, F !== "aa") +
        chip(M[0], MX[0], PY) + chip(M[1], MX[1], PY) + flower(282, 60, M !== "aa");
      // ריבוע פאנט: עמודות = עותקי האב, שורות = עותקי האם
      expect = { AA: 0, Aa: 0, aa: 0 };
      let g = "";
      for (let c = 0; c < 2; c++) g += chip(F[c], colX(c), GY - 9, 7);
      for (let r = 0; r < 2; r++) g += chip(M[r], GX + CW * 2 + 12, rowY(r), 7);
      for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
        const geno = canon(F[c], M[r]);
        expect[geno] += 0.25;
        const hot = last && last.r === r && last.c === c && !anim;
        const x = GX + CW * c, y = GY + CH * r;
        g += `<rect class="fl-panel ${hot ? "st-elec" : "st-line"}" stroke-width="${hot ? 2.5 : 1}" x="${x + 1}" y="${y + 1}" width="${CW - 2}" height="${CH - 2}" rx="5"/>`;
        g += chip(F[c], x + 15, y + 12, 6) + chip(M[r], x + 30, y + 12, 6);
        g += `<text class="sm" x="${x + CW / 2}" y="${y + 28}" style="stroke:none">25%</text>`;
      }
      $("#grid").innerHTML = g;
      // הילד האחרון
      $("#kid").innerHTML = last && !anim
        ? chip(F[last.c], KID[0].x, KID[0].y) + chip(M[last.r], KID[1].x, KID[1].y) + flower(194, 117, !isWhite(last.g))
        : `<circle class="fl-none st-line" stroke-width="1" style="stroke-dasharray:2 2" cx="${KID[0].x}" cy="${KID[0].y}" r="9"/><circle class="fl-none st-line" stroke-width="1" style="stroke-dasharray:2 2" cx="${KID[1].x}" cy="${KID[1].y}" r="9"/>`;
      // ספירה: פס = בפועל, קו = צפוי
      let t = `<text class="sm" x="${BAR0 + BARW / 2}" y="140">פס: בפועל · קו: צפוי</text>`;
      GENO.forEach((geno, i) => {
        const y = ROWY[i], frac = n ? counts[geno] / n : 0, ex = expect[geno];
        const fill = isWhite(geno) ? `fill="${WHITE}" class="st-ink" stroke-width=".8"` : `class="fl-violet"`;
        t += chip(geno[0], 16, y, 6) + chip(geno[1], 32, y, 6);
        t += `<rect class="fl-soft" x="${BAR0}" y="${y - 6}" width="${BARW}" height="12" rx="3"/>`;
        if (frac > 0) t += `<rect ${fill} x="${BAR0}" y="${y - 6}" width="${(BARW * frac).toFixed(1)}" height="12" rx="3"/>`;
        t += `<path class="st-ink fl-none" stroke-width="2" d="M${(BAR0 + BARW * ex).toFixed(1)} ${y - 9}v18"/>`;
        t += `<text class="sm" x="${BAR0 + BARW + 32}" y="${y + 3}">${n ? fmt(frac * 100, 0) + "%" : "–"} / ${fmt(ex * 100, 0)}%</text>`;
      });
      $("#tally").innerHTML = t;
      // נתונים
      out(root, "n", fmt(n, 0));
      out(root, "w", `${n ? fmt((counts.aa / n) * 100, 0) + "%" : "–"} / ${fmt(expect.aa * 100, 0)}%`);
      // הערה לפי המצב
      let note = "";
      if (M === "aa" && F === "aa") note = "שני הורים לבנים: כל הילדים לבנים";
      else if (expect.aa === 0 && expect.Aa === 1) note = "כל הילדים Aa: סגולים, אבל נושאים את a";
      else if (expect.aa === 0) note = "אף ילד לא יהיה לבן: תמיד יש A מהורה אחד";
      else if (n >= 300) note = "הרבה ילדים: היחס כמעט בדיוק כמו בריבוע";
      else if (n >= 1 && n <= 12) note = "מעט ילדים: התוצאה עדיין רחוקה מהצפוי";
      else if (M === "Aa" && F === "Aa") note = "שני הורים סגולים, ובכל זאת רבע מהילדים לבנים";
      else note = "חצי מהילדים לבנים, חצי סגולים";
      out(root, "note", note);
    };

    const birth = (r, c) => { const g = canon(F[c], M[r]); counts[g]++; n++; last = { r, c, g }; };
    const pick = () => ({ r: Math.random() < 0.5 ? 0 : 1, c: Math.random() < 0.5 ? 0 : 1 });

    wire(root, (v) => {
      if (v.m && v.f && (v.m !== M || v.f !== F)) { M = v.m; F = v.f; counts = { AA: 0, Aa: 0, aa: 0 }; n = 0; last = null; anim = null; $("#fly").innerHTML = ""; }
      draw();
    });

    root.querySelector(".hd-btns").addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      if (anim) { birth(anim.r, anim.c); anim = null; $("#fly").innerHTML = ""; }
      const act = b.dataset.act;
      if (act === "one") { const p = pick(); anim = { ...p, t: 0 }; last = { ...p, g: canon(F[p.c], M[p.r]) }; }
      else if (act === "many") { for (let k = 0; k < 100; k++) { const p = pick(); birth(p.r, p.c); } }
      else { counts = { AA: 0, Aa: 0, aa: 0 }; n = 0; last = null; }
      draw();
    });

    // אנימציה: הזרע יוצא מעותק האב שנבחר, הביצית מעותק האם, ושניהם נפגשים אצל הילד
    loop(root, (dt) => {
      if (!anim) return;
      anim.t += dt / ANIM;
      const e = Math.min(1, anim.t), s = e * e * (3 - 2 * e);
      const from1 = { x: FX[anim.c], y: PY }, from2 = { x: MX[anim.r], y: PY };
      const lerp = (a, b) => ({ x: a.x + (b.x - a.x) * s, y: a.y + (b.y - a.y) * s - Math.sin(Math.PI * s) * 18 });
      const p1 = lerp(from1, KID[0]), p2 = lerp(from2, KID[1]);
      $("#fly").innerHTML = chip(F[anim.c], p1.x, p1.y) + chip(M[anim.r], p2.x, p2.y);
      if (e >= 1) { birth(anim.r, anim.c); anim = null; $("#fly").innerHTML = ""; draw(); }
    });
  },
};
