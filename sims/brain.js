// זמן תגובה: לוחצים כשהמשטח מתחלף לירוק, מודדים את הזמן, ואז רואים בהילוך איטי את הדרך שהאות עבר במוח.
//
// החלוקה לשלבים היא קירוב לסדר הגודל המקובל, לא מדידה:
//   עין ורשתית ~10% · עד קליפת הראייה (דרך התלמוס) ~25% · זיהוי והחלטה (קדמת המוח) ~35%
//   · קליפת התנועה ~10% · חוט השדרה, עצב ושריר ~20%.
// זמן תגובה פשוט לאות חזותי הוא בדרך כלל כרבע שנייה; במסך מגע מתווספות עוד כמה עשרות אלפיות שנייה של המכשיר.
import { readouts, out, fmt, loop } from "./kit.js";

const STAGES = [
  { id: "eye", name: "העין קולטת את השינוי", share: 0.1 },
  { id: "vis", name: "האות מגיע לקליפת הראייה", share: 0.25 },
  { id: "dec", name: "המוח מזהה ומחליט ללחוץ", share: 0.35 },
  { id: "mot", name: "קליפת התנועה שולחת פקודה", share: 0.1 },
  { id: "arm", name: "חוט השדרה, העצב והשריר", share: 0.2 },
];
// הדרך: עין → תלמוס → אחורי המוח → קדמת המוח → פס התנועה → גזע המוח וחוט השדרה → יד
const PTS = [[78, 104], [202, 116], [248, 98], [118, 62], [176, 36], [203, 124], [200, 168], [262, 176]];
const PATH = "M" + PTS.map((p) => p.join(" ")).join(" L");
// איזה קטע בנתיב שייך לכל שלב: [נקודת התחלה, נקודת סוף] (בשלב העין הנקודה נשארת בעין)
const STAGE_PTS = [[0, 0], [0, 2], [2, 3], [3, 4], [4, 7]];

export default {
  title: "מדדו את זמן התגובה שלכם",
  hint: "לחצו על המשטח, חכו שיהפוך לירוק ולחצו מהר ככל האפשר. אחר כך האות יעבור בהילוך איטי בדרך שהוא עשה במוח. החלוקה לשלבים היא קירוב; במסך מגע המכשיר מוסיף עוד כמה עשרות אלפיות שנייה.",
  mount(root) {
    root.innerHTML = `
      <style>
        .rt-pad{display:grid;place-items:center;min-height:86px;margin-top:10px;border-radius:18px;font-size:19px;font-weight:800;
          color:#fff;user-select:none;-webkit-user-select:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;
          background:var(--a1);transition:background .08s}
        .rt-pad[data-s="wait"]{background:#d23b34}
        .rt-pad[data-s="go"]{background:#12a150}
        .rt-pad[data-s="early"]{background:#b45309}
        .rt-pad small{display:block;font-size:13px;font-weight:600;opacity:.9;text-align:center}
        .rt-stage{min-height:1.5em;margin:-4px 0 8px;text-align:center;font-weight:700;font-size:15px;color:var(--muted)}
      </style>
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מבט צד על המוח והדרך של האות מהעין אל היד">
        <!-- ראש ומוח -->
        <path class="fl-bg st-line" stroke-width="1.5" d="M60 120C48 70 92 18 160 16C232 14 280 52 276 104C274 130 256 146 232 150L214 152L212 196H150L148 170C126 168 100 162 88 150L66 150C58 146 58 132 60 120Z"/>
        <path class="fl-soft st-line" stroke-width="1.2" d="M84 96C80 56 116 26 164 24C222 22 264 54 262 98C260 124 240 138 214 138C186 140 170 132 150 134C120 136 88 130 84 96Z"/>
        <!-- אונות (צביעה עדינה) -->
        <path id="z-dec" fill="#4c8df6" opacity=".16" d="M86 92C82 58 112 30 152 26L170 34L160 92C130 100 104 104 86 92Z"/>
        <path id="z-mot" fill="#f29a2e" opacity=".18" d="M152 26L186 24L182 92L160 92Z"/>
        <path id="z-vis" fill="#8b5cf6" opacity=".18" d="M222 34C250 46 264 72 262 98C260 120 244 134 222 136Z"/>
        <!-- קפלים -->
        <g fill="none" class="st-line" stroke-width="1" opacity=".55">
          <path d="M110 70C122 60 136 64 146 56"/><path d="M200 44C206 58 198 70 208 82"/><path d="M228 58C236 70 230 82 240 92"/>
          <path d="M100 112C116 104 132 112 148 106"/><path d="M216 74C222 86 214 96 224 106"/>
        </g>
        <!-- המוח הקטן וגזע המוח -->
        <path class="fl-soft st-line" stroke-width="1.2" d="M214 130C222 120 250 118 258 128C262 140 240 150 222 146C214 144 210 138 214 130Z"/>
        <path fill="none" class="st-line" stroke-width=".9" opacity=".6" d="M220 134C232 128 246 128 254 132M222 140C234 136 246 136 252 138"/>
        <path class="fl-panel st-line" stroke-width="1.2" d="M190 118C190 108 204 104 214 108L216 140L196 140Z"/>
        <text x="203" y="128" style="font-size:7.5px">תלמוס</text>
        <!-- חוט השדרה והזרוע -->
        <path class="wire st-line" stroke-width="7" stroke-linecap="round" d="M198 128V170"/>
        <path class="wire st-line" stroke-width="2" d="M198 168C220 172 244 174 262 176"/>
        <rect class="fl-panel st-line" x="262" y="166" width="30" height="20" rx="6"/>
        <!-- עין -->
        <circle class="fl-panel st-ink" stroke-width="1.5" cx="72" cy="104" r="7"/>
        <circle class="fl-ink" cx="70" cy="104" r="3"/>
        <!-- הנתיב -->
        <path id="rt-path" d="${PATH}" fill="none" class="st-line" stroke-width="1.4" stroke-dasharray="3 4" opacity=".7"/>
        <path id="rt-done" d="${PATH}" fill="none" class="st-elec" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0 999"/>
        <circle id="rt-dot" r="5.5" class="fl-elec st-ink" stroke-width="1" opacity="0"/>
        <!-- תוויות -->
        <text x="118" y="50" class="sm">החלטה</text>
        <text x="172" y="20" class="sm">תנועה</text>
        <text x="246" y="84" class="sm">ראייה</text>
        <text x="58" y="124" class="sm">עין</text>
        <text x="236" y="196" class="sm">יד</text>
      </svg>
      <p class="rt-stage" id="rt-stage">בהילוך איטי תראו כאן את הדרך של האות</p>
      ${readouts([{ id: "rt-last", label: "אחרון" }, { id: "rt-best", label: "הכי מהיר" }, { id: "rt-avg", label: "ממוצע" }])}
      <div class="rt-pad" id="rt-pad" data-s="idle" role="button" tabindex="0">לחצו כדי להתחיל</div>`;

    const pad = root.querySelector("#rt-pad");
    const path = root.querySelector("#rt-path");
    const done = root.querySelector("#rt-done");
    const dot = root.querySelector("#rt-dot");
    const LEN = path.getTotalLength();
    const cum = [0];
    for (let i = 1; i < PTS.length; i++) cum.push(cum[i - 1] + Math.hypot(PTS[i][0] - PTS[i - 1][0], PTS[i][1] - PTS[i - 1][1]));
    const scale = LEN / cum[cum.length - 1];
    const tEnd = []; STAGES.reduce((a, st) => (tEnd.push(a + st.share), a + st.share), 0);
    let state = "idle", timer = 0, t0 = 0, times = [];
    let anim = null; // { ms, t }

    const setPad = (s, html) => { state = s; pad.dataset.s = s; pad.innerHTML = html; };
    const reset = () => {
      anim = null; dot.setAttribute("opacity", "0"); done.setAttribute("stroke-dasharray", `0 ${LEN}`);
      out(root, "rt-stage", "\u00a0");
    };
    const arm = () => {
      reset();
      setPad("wait", "חכו לירוק…");
      timer = setTimeout(() => { setPad("go", "עכשיו!"); t0 = performance.now(); }, 1200 + Math.random() * 2600);
    };
    const finish = (ms) => {
      times.push(ms);
      out(root, "rt-last", fmt(ms, 0));
      out(root, "rt-best", fmt(Math.min(...times), 0));
      out(root, "rt-avg", fmt(times.reduce((a, b) => a + b, 0) / times.length, 0));
      const note = ms < 200 ? "מהיר מאוד" : ms < 300 ? "בטווח הרגיל" : ms < 450 ? "קצת איטי — אולי הסחת דעת" : "איטי — נסו שוב בריכוז";
      setPad("idle", `${fmt(ms, 0)} אלפיות שנייה · ${note}<small>לחצו לניסיון נוסף</small>`);
      anim = { ms, t: 0 };
    };

    pad.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (state === "idle" || state === "early") arm();
      else if (state === "wait") {
        clearTimeout(timer);
        reset();
        setPad("early", "מוקדם מדי — לחצתם לפני הירוק<small>לחצו כדי לנסות שוב</small>");
      } else if (state === "go") finish(performance.now() - t0);
    });

    // הילוך איטי: כל אלפית שנייה אמיתית נמשכת 10 אלפיות שנייה על המסך
    loop(root, (dt) => {
      if (!anim) return;
      anim.t += dt * 1000 / 10;
      const f = Math.min(1, anim.t / anim.ms); // חלק הזמן שעבר
      // השלב הנוכחי לפי חלקו של כל שלב מהזמן שנמדד, והמקום בנתיב בתוך הקטע של אותו שלב
      const k = Math.min(STAGES.length - 1, tEnd.findIndex((e) => f <= e + 1e-9));
      const t0k = k ? tEnd[k - 1] : 0;
      const u = (f - t0k) / (tEnd[k] - t0k);
      const [a, b] = STAGE_PTS[k];
      const len = (cum[a] + u * (cum[b] - cum[a])) * scale;
      const p = path.getPointAtLength(len);
      dot.setAttribute("cx", p.x); dot.setAttribute("cy", p.y); dot.setAttribute("opacity", "1");
      dot.setAttribute("r", k === 0 ? 4 + 3 * Math.abs(Math.sin(u * Math.PI * 2)) : 5.5);
      done.setAttribute("stroke-dasharray", `${len} ${LEN}`);
      out(root, "rt-stage", f < 1 ? `${STAGES[k].name} · ${fmt(anim.ms * f, 0)}` : `מהירוק ועד הלחיצה: ${fmt(anim.ms, 0)} אלפיות שנייה`);
      root.querySelector("#z-vis").setAttribute("opacity", k === 1 && f < 1 ? ".5" : ".18");
      root.querySelector("#z-dec").setAttribute("opacity", k === 2 && f < 1 ? ".45" : ".16");
      root.querySelector("#z-mot").setAttribute("opacity", k === 3 && f < 1 ? ".55" : ".18");
      if (f >= 1) { anim = null; dot.setAttribute("opacity", "0"); }
    });
  },
};
