// המעבד: מחשב זעיר שמריצים צעד אחר צעד. התוכנית מחשבת 1+2+…+N בעזרת שבע פקודות פשוטות.
//
// התוכנית (שמורה בזיכרון, שורות 0–6):
//   0  A ← 0          A = הסכום
//   1  B ← 1          B = המונה
//   2  A ← A + B
//   3  B ← B + 1
//   4  B ≤ N ?        ההשוואה שומרת תשובה (כן/לא)
//   5  אם כן, קפוץ לשורה 2
//   6  עצור
// כל צעד הוא מחזור אחד של המעבד: מביא את הפקודה שמונה התוכנית מצביע עליה, מפענח, מבצע.
// מספר הצעדים עד העצירה: 2 + 4·N + 1 (23 עבור N=5, 403 עבור 100, 4,003 עבור 1,000).
// התוצאה: N·(N+1)/2 (15, 5,050, 500,500).
// השוואה למעבד אמיתי: כ־3 מיליארד צעדים בשנייה ("כמה מיליארדי פעמים בשנייה" בטקסט), כלומר
// הזמן שהיה נדרש לו = צעדים / 3·10⁹ שניות. פישוט: מעבד אמיתי מבצע לעתים כמה פקודות בפעימת שעון אחת.
import { range, choice, readouts, wire, out, fmt, loop } from "./kit.js";

const REAL = 3e9; // צעדים בשנייה במעבד אמיתי
const speedOf = (s) => { const v = 10 ** ((3 * s) / 100); const m = 10 ** Math.floor(Math.log10(v)); return v < 10 ? Math.round(v * 2) / 2 : Math.round(v / m) * m; };
const program = (N) => [
  { t: "A ← 0", kind: "העתקה" }, { t: "B ← 1", kind: "העתקה" },
  { t: "A ← A + B", kind: "חיבור" }, { t: "B ← B + 1", kind: "חיבור" },
  { t: `B ≤ ${fmt(N, 0)} ?`, kind: "השוואה" }, { t: "אם כן, קפוץ ל־2", kind: "קפיצה", he: true }, { t: "עצור", kind: "עצירה", he: true },
];
const RY = (i) => 22 + i * 17.5; // שורות הזיכרון
const PH = [{ x: 254, label: "מביא" }, { x: 197, label: "מפענח" }, { x: 140, label: "מבצע" }];

export default {
  title: "הרץ מעבד צעד אחר צעד",
  hint: "כל צעד עושה דבר אחד קטן: מעתיק, מחבר, משווה או קופץ. הסכום כולו נבנה רק מחזרה על הצעדים האלה.",
  mount(root) {
    root.innerHTML = `
      <style>
        .cp-btns{display:flex;gap:8px;margin-top:10px}
        .cp-btns button{flex:1;min-height:42px;border-radius:13px;border:1px solid var(--line);background:var(--card);color:var(--ink);font-size:14.5px;font-weight:700;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
        .cp-btns .cp-run{flex:1.3;color:#fff;border-color:transparent;background:linear-gradient(140deg,var(--c1),var(--c2))}
        .cp-btns button:active{filter:brightness(.92)}
        .scene text.cp-nb{stroke:none}
        .cp-lit{transition:opacity .12s}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מחשב זעיר: זיכרון עם תוכנית של שבע פקודות, ומעבד עם מונה תוכנית, שני תאים ויחידת חשבון">
        <!-- זיכרון -->
        <text x="65" y="15" class="sm">הזיכרון: התוכנית</text>
        <rect class="body" x="8" y="20" width="114" height="126.500" rx="6"/>
        ${Array.from({ length: 7 }, (_, i) => `
          <rect id="m${i}" class="cp-lit fl-elec" x="10" y="${RY(i) + 0.5}" width="110" height="16.500" rx="4" opacity="0"/>
          ${i ? `<path class="thin" style="stroke-width:.8" d="M10 ${RY(i)}H120"/>` : ""}
          <text x="19" y="${RY(i) + 12}" class="sm cp-nb" style="fill:var(--s-line)">${i}</text>
          <text id="mt${i}" x="74" y="${RY(i) + 12.5}" class="cp-nb"></text>`).join("")}
        <path class="thin" style="stroke-width:.8" d="M28 21V145.500"/>
        <!-- הקו שעליו הפקודה עוברת מהזיכרון למעבד -->
        <path id="bus" class="wire st-elec" style="stroke-width:3" opacity="0"/>
        <path id="pcarrow" class="fl-hot st-ink" stroke-width="1" stroke-linejoin="round"/>
        <!-- המעבד -->
        <rect class="fl-soft st-ink" stroke-width="2" x="136" y="6" width="176" height="140.500" rx="8"/>
        ${PH.map((p, i) => `
          <rect class="body" style="stroke-width:1.2" x="${p.x}" y="11" width="54" height="17" rx="8.500"/>
          <rect id="ph${i}" class="cp-lit fl-elec" x="${p.x}" y="11" width="54" height="17" rx="8.500" opacity="0"/>
          <text x="${p.x + 27}" y="23.500" class="cp-nb">${p.label}</text>`).join("")}
        <text x="290" y="46.500" class="sm cp-nb">הפקודה</text>
        <rect class="body" style="stroke-width:1.2" x="142" y="34" width="128" height="18" rx="4"/>
        <rect id="irlit" class="cp-lit fl-elec" x="142" y="34" width="128" height="18" rx="4" opacity="0"/>
        <text id="ir" x="206" y="47" class="cp-nb"></text>
        <text x="287" y="65" class="sm cp-nb">שורה</text>
        <text x="241" y="65" class="sm cp-nb">B · מונה</text>
        <text x="174" y="65" class="sm cp-nb">A · סכום</text>
        <rect id="bxpc" class="body" style="stroke-width:1.2" x="268" y="69" width="38" height="21" rx="4"/>
        <rect id="bxb" class="body" style="stroke-width:1.2" x="216" y="69" width="46" height="21" rx="4"/>
        <rect id="bxa" class="body" style="stroke-width:1.2" x="142" y="69" width="68" height="21" rx="4"/>
        <rect id="litpc" class="cp-lit fl-green" x="268" y="69" width="38" height="21" rx="4" opacity="0"/>
        <rect id="litb" class="cp-lit fl-green" x="216" y="69" width="46" height="21" rx="4" opacity="0"/>
        <rect id="lita" class="cp-lit fl-green" x="142" y="69" width="68" height="21" rx="4" opacity="0"/>
        <text id="rpc" x="287" y="84" class="lg cp-nb"></text>
        <text id="rb" x="239" y="84" class="lg cp-nb"></text>
        <text id="ra" x="176" y="84" class="lg cp-nb"></text>
        <path class="body" style="stroke-width:1.2" d="M150 98H298L286 140H162Z"/>
        <path id="alulit" class="cp-lit fl-elec" d="M150 98H298L286 140H162Z" opacity="0"/>
        <text x="224" y="110" class="sm cp-nb">יחידת החשבון</text>
        <text id="alu" x="224" y="129" class="lg cp-nb"></text>
        <!-- הסבר -->
        <text id="cap" x="160" y="165"></text>
        <text id="note" x="160" y="186" class="sm"></text>
      </svg>
      ${readouts([{ id: "steps", label: "צעדים שבוצעו" }, { id: "sum", label: "הסכום עד כה (A)" }])}
      <div class="cp-btns">
        <button type="button" id="step">צעד</button>
        <button type="button" id="run" class="cp-run">הרץ</button>
        <button type="button" id="reset">אפס</button>
      </div>
      ${range({ id: "spd", label: "מהירות", min: 0, max: 100, value: 10 })}
      ${choice({ id: "n", label: "לסכם עד", options: [{ v: 5, label: "5" }, { v: 100, label: "100" }, { v: 1000, label: "1,000" }], value: 5 })}`;

    const $ = (id) => root.querySelector(`#${id}`);
    let N = 5, prog = program(5), speed = 2;
    let pc, a, b, flag, ir, phase, steps, halted, alu, cap, lit, changed; // phase: השלב הבא שיבוצע (0 מביא, 1 מפענח, 2 מבצע)
    let running = false, manual = 0, mTimer = 0, phaseAcc = 0, dirty = true;

    const reset = () => {
      pc = 0; a = 0; b = 0; flag = null; ir = null; phase = 0; steps = 0; halted = false;
      alu = "–"; cap = "לחץ על ״צעד״ כדי לבצע פקודה אחת"; lit = -1; changed = "";
      running = false; manual = 0; phaseAcc = 0; dirty = true;
    };

    const doPhase = () => {
      if (halted) return;
      dirty = true;
      const ins = prog[ir ?? pc];
      if (phase === 0) {
        ir = pc; lit = 0; changed = ""; alu = "–";
        cap = `מביא: קורא מהזיכרון את שורה ${pc}`;
        phase = 1;
      } else if (phase === 1) {
        lit = 1;
        cap = `מפענח: זו פקודת ${ins.kind}`;
        phase = 2;
      } else {
        lit = 2; steps++; phase = 0;
        switch (ir) {
          case 0: a = 0; changed = "a"; cap = "מבצע: שם 0 בתא A"; pc++; break;
          case 1: b = 1; changed = "b"; cap = "מבצע: שם 1 בתא B"; pc++; break;
          case 2: alu = `${fmt(a, 0)} + ${fmt(b, 0)} = ${fmt(a + b, 0)}`; a += b; changed = "a"; cap = "מבצע: מחבר, ושומר את התוצאה ב־A"; pc++; break;
          case 3: alu = `${fmt(b, 0)} + 1 = ${fmt(b + 1, 0)}`; b += 1; changed = "b"; cap = "מבצע: מחבר, ושומר את התוצאה ב־B"; pc++; break;
          case 4: flag = b <= N; alu = `${fmt(b, 0)} ≤ ${fmt(N, 0)} ?  ${flag ? "כן" : "לא"}`; cap = `מבצע: משווה. התשובה: ${flag ? "כן" : "לא"}`; pc++; break;
          case 5: changed = "pc";
            if (flag) { pc = 2; cap = "מבצע: התשובה הייתה כן, חוזר לשורה 2"; }
            else { pc++; cap = "מבצע: התשובה הייתה לא, ממשיך הלאה"; }
            break;
          default: halted = true; running = false; manual = 0; changed = "";
            cap = `נעצר. 1 + 2 + … + ${fmt(N, 0)} = ${fmt(a, 0)}`;
        }
      }
    };

    const render = () => {
      dirty = false;
      out(root, "steps", fmt(steps, 0));
      out(root, "sum", fmt(a, 0));
      out(root, "rpc", String(pc));
      out(root, "ra", fmt(a, 0));
      out(root, "rb", fmt(b, 0));
      out(root, "ir", ir === null ? "–" : prog[ir].t);
      $("ir").setAttribute("direction", ir !== null && prog[ir].he ? "rtl" : "ltr");
      out(root, "alu", alu);
      out(root, "cap", cap);
      const fetching = lit === 0, row = ir ?? pc;
      for (let i = 0; i < 7; i++) $(`m${i}`).setAttribute("opacity", i === row && lit >= 0 && !halted ? (fetching ? 0.6 : 0.28) : halted && i === 6 ? 0.28 : 0);
      for (let i = 0; i < 3; i++) $(`ph${i}`).setAttribute("opacity", lit === i && !halted ? 0.75 : 0);
      $("irlit").setAttribute("opacity", lit === 0 || lit === 1 ? 0.4 : 0);
      $("alulit").setAttribute("opacity", lit === 2 && alu !== "–" ? 0.4 : 0);
      $("lita").setAttribute("opacity", lit === 2 && changed === "a" ? 0.45 : 0);
      $("litb").setAttribute("opacity", lit === 2 && changed === "b" ? 0.45 : 0);
      $("litpc").setAttribute("opacity", lit === 2 && changed === "pc" ? 0.45 : 0);
      const y = RY(pc) + 8.75; // מונה התוכנית מצביע על השורה הבאה שתובא
      $("pcarrow").setAttribute("d", `M123 ${y}l8 -5v10z`);
      $("bus").setAttribute("d", `M122 ${RY(row) + 8.75}H129V43H142`);
      $("bus").setAttribute("opacity", fetching ? 0.9 : 0);
      $("run").textContent = running ? "השהה" : halted ? "הרץ שוב" : "הרץ";
      const ns = (steps / REAL) * 1e9;
      out(root, "note", halted
        ? `מעבד אמיתי מסיים את כל ${fmt(steps, 0)} הצעדים ב־${fmt(ns, ns < 10 ? 1 : 0)} מיליארדיות שנייה`
        : `כאן: ${fmt(speed, 1)} צעדים בשנייה · מעבד אמיתי: כ־3 מיליארד, פי ${ratio(REAL / speed)}`);
    };
    const ratio = (r) => (r >= 1e9 ? `${fmt(r / 1e9, 1)} מיליארד` : `${fmt(r / 1e6, 0)} מיליון`);

    reset();
    wire(root, ({ spd, n }) => {
      speed = speedOf(spd);
      out(root, "spd-out", `${fmt(speed, 1)} בשנ׳`);
      if (+n !== N) {
        N = +n; prog = program(N); reset();
        prog.forEach((p, i) => { const t = $(`mt${i}`); t.textContent = p.t; t.setAttribute("direction", p.he ? "rtl" : "ltr"); });
      }
      dirty = true;
    });
    prog.forEach((p, i) => { const t = $(`mt${i}`); t.textContent = p.t; t.setAttribute("direction", p.he ? "rtl" : "ltr"); });

    $("step").addEventListener("click", () => {
      if (halted) return;
      running = false;
      while (manual > 0) { doPhase(); manual--; } // לחיצה מהירה: משלימים מיד את הצעד הקודם
      manual = 3 - phase; mTimer = 0;
      dirty = true;
    });
    $("run").addEventListener("click", () => {
      if (halted) reset();
      while (manual > 0) { doPhase(); manual--; }
      running = !running; phaseAcc = 1; // השלב הראשון מיד
      dirty = true;
    });
    $("reset").addEventListener("click", reset);

    loop(root, (dt) => {
      if (manual > 0) {
        mTimer -= dt;
        if (mTimer <= 0) { doPhase(); manual--; mTimer = 0.38; }
      } else if (running) {
        phaseAcc += dt * speed * 3; // שלושה שלבים בכל צעד
        while (phaseAcc >= 1 && running) { phaseAcc -= 1; doPhase(); }
      }
      if (dirty) render();
    });
  },
};
