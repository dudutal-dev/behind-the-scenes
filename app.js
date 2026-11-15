import { CATEGORIES, TOPICS } from "./content.js";

const KEY = "eich-ze-oved-v1";
const INTERVALS = [1, 3, 7, 16, 35]; // ימים בין חזרות, לפי "קופסה"
const LETTERS = ["א", "ב", "ג", "ד"];
const app = document.getElementById("app");
const byId = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
// סדר התצוגה: לפי קטגוריה, עם מספר רץ קבוע לכל דבר
const ORDERED = CATEGORIES.flatMap((c) => TOPICS.filter((t) => t.cat === c.id));
const numOf = Object.fromEntries(ORDERED.map((t, i) => [t.id, String(i + 1).padStart(2, "0")]));

// ---------- מצב ----------
const EMPTY = () => ({ done: {}, srs: {}, streak: { last: "", count: 0 } });
function load() {
  try { return { ...EMPTY(), ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
  catch { return EMPTY(); }
}
let state = load();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* מצב פרטי — ממשיכים בלי שמירה */ }
}

const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return dayKey(d); };

function touchStreak() {
  const today = dayKey();
  if (state.streak.last === today) return;
  state.streak.count = state.streak.last === addDays(-1) ? state.streak.count + 1 : 1;
  state.streak.last = today;
}
function liveStreak() {
  const l = state.streak.last;
  return l === dayKey() || l === addDays(-1) ? state.streak.count : 0;
}
function dueCards() {
  const today = dayKey();
  return Object.entries(state.srs)
    .filter(([, v]) => v.due <= today)
    .map(([k]) => { const [tid, i] = k.split(":"); return { key: k, topic: byId[tid], q: byId[tid]?.quiz[+i] }; })
    .filter((c) => c.q);
}
function todaysTopic() {
  const pool = TOPICS.filter((t) => !state.done[t.id]);
  const list = pool.length ? pool : TOPICS;
  const dayNum = Math.floor(new Date(dayKey()).getTime() / 864e5);
  return list[dayNum % list.length];
}

// ---------- עזרי תצוגה ----------
const h = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icon = (d) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const IC = {
  close: icon('<path d="M6 6l12 12M18 6L6 18"/>'),
  fwd: icon('<path d="M14 6l-6 6 6 6"/>'), // "קדימה" בכיוון הקריאה מימין לשמאל
  check: icon('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  search: icon('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
  speak: icon('<path d="M4 10v4h3.5l4.5 4V6l-4.5 4z"/><path d="M15.5 9a4.2 4.2 0 010 6M18 6.5a7.8 7.8 0 010 11"/>'),
};
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "he-IL";
  u.rate = 0.95;
  speechSynthesis.speak(u);
}
const canSpeak = "speechSynthesis" in window;

// ---------- איורים ----------
const sceneCache = {};
async function loadScene(id) {
  if (!(id in sceneCache)) {
    try { sceneCache[id] = (await import(`./scenes/${id}.js`)).default; }
    catch { sceneCache[id] = null; } // אין איור — נופלים חזרה לאימוג'י
  }
  return sceneCache[id];
}
const sceneSvg = (scene, step, label) =>
  `<svg class="scene" viewBox="0 0 320 220" data-step="${step}" role="img" aria-label="${h(label)}">${scene}</svg>`;

// ---------- מסך הבית ----------
let filter = "all";
let query = "";

function topicRow(t) {
  const done = !!state.done[t.id];
  return `<a class="row${done ? " done" : ""}" href="#/t/${t.id}">
    <span class="row-n">${numOf[t.id]}</span>
    <span class="row-text"><b>${h(t.title)}</b><small>${h(t.sub)}</small></span>
    <span class="row-mark">${done ? IC.check : IC.fwd}</span>
  </a>`;
}

function listHtml() {
  const q = query.trim();
  const match = (t) => (!q || t.title.includes(q) || t.sub.includes(q)) && (filter === "all" || q || t.cat === filter);
  const html = CATEGORIES.map((c) => {
    const items = ORDERED.filter((t) => t.cat === c.id && match(t));
    if (!items.length) return "";
    return `<section><h2 class="group">${h(c.name)}</h2>${items.map(topicRow).join("")}</section>`;
  }).join("");
  return html || `<p class="empty">לא נמצא דבר כזה.</p>`;
}

function renderHome() {
  const today = todaysTopic();
  const due = dueCards().length;
  const doneCount = Object.keys(state.done).length;
  const streak = liveStreak();

  app.innerHTML = `
    <header class="mast">
      <h1 class="brand">איך זה עובד</h1>
      <div class="stats">${streak ? `רצף <b>${streak}</b> ימים · ` : ""}<b>${doneCount}</b> מתוך ${TOPICS.length}</div>
    </header>

    <a class="hero" href="#/t/${today.id}">
      <div id="hero-scene" class="hero-ph"></div>
      <div class="hero-body">
        <span class="kicker">הדבר של היום</span>
        <h2>${h(today.title)}</h2>
        <p>${h(today.sub)}</p>
        <div class="hero-foot">
          <span class="meta">כשתי דקות · ארבעה שלבים</span>
          <span class="btn sm">לקריאה</span>
        </div>
      </div>
    </a>
    ${due ? `<a class="review" href="#/review"><span style="color:inherit;font-weight:400"><b>${due}</b> שאלות לחזרה היום</span><span>להתחיל ${IC.fwd}</span></a>` : ""}

    <div class="tools">
      <label class="search">${IC.search}<input id="search" type="search" placeholder="חיפוש" value="${h(query)}" autocomplete="off" aria-label="חיפוש"></label>
      <div class="chips" role="group" aria-label="סינון לפי תחום">
        ${[{ id: "all", name: "הכול" }, ...CATEGORIES].map((c) =>
          `<button class="chip" data-cat="${c.id}" aria-pressed="${filter === c.id}">${h(c.name)}</button>`).join("")}
      </div>
    </div>
    <div id="list">${listHtml()}</div>

    <footer><button id="reset" class="link">איפוס ההתקדמות</button></footer>`;

  loadScene(today.id).then((scene) => {
    const el = document.getElementById("hero-scene");
    if (el && scene) { el.className = ""; el.innerHTML = sceneSvg(scene, "all", `איור: ${today.title}`); }
  });

  const list = document.getElementById("list");
  document.getElementById("search").addEventListener("input", (e) => { query = e.target.value; list.innerHTML = listHtml(); });
  app.querySelectorAll(".chip").forEach((b) =>
    b.addEventListener("click", () => {
      filter = b.dataset.cat;
      app.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
      list.innerHTML = listHtml();
    })
  );
  document.getElementById("reset").addEventListener("click", () => {
    if (confirm("למחוק את כל ההתקדמות, הרצף והחזרות?")) { state = EMPTY(); save(); renderHome(); }
  });
}

// ---------- נגן ----------
function questionCard(label, q, onDone) {
  return {
    html: `<div class="card">
        <span class="kicker">${h(label)}</span>
        <h3>${h(q.q)}</h3>
        <div class="opts">${q.o.map((o, i) => `<button class="opt" data-i="${i}"><i>${LETTERS[i]}</i><span>${h(o)}</span></button>`).join("")}</div>
        <div class="reveal" hidden></div>
      </div>`,
    locked: true,
    bind(root, unlock) {
      root.querySelectorAll(".opt").forEach((b) =>
        b.addEventListener("click", () => {
          const i = +b.dataset.i;
          const ok = i === q.c;
          root.querySelectorAll(".opt").forEach((x, j) => {
            x.disabled = true;
            if (j === q.c) x.classList.add("right");
            else if (j === i) x.classList.add("wrong");
          });
          const r = root.querySelector(".reveal");
          r.hidden = false;
          r.innerHTML = `<b>${ok ? "נכון." : "לא בדיוק."}</b> ${h(q.x)}`;
          onDone?.(ok);
          unlock();
        })
      );
    },
  };
}

function buildCards(t, scene) {
  const cards = [questionCard("לפני שמתחילים", t.hook)];
  t.steps.forEach((s, i) =>
    cards.push({
      html: `<div class="card">
          ${scene ? sceneSvg(scene, i + 1, `איור: ${s.t}`) : `<div class="big">${s.e}</div>`}
          <span class="kicker">שלב ${i + 1} מתוך ${t.steps.length}</span>
          <h3>${h(s.t)}</h3>
          <p>${h(s.x)}</p>
          ${canSpeak ? `<button class="speak">${IC.speak} הקראה</button>` : ""}
        </div>`,
      bind(root) { root.querySelector(".speak")?.addEventListener("click", () => speak(`${s.t}. ${s.x}`)); },
    })
  );
  cards.push({
    html: `<div class="card myth">
        <span class="kicker">טעות נפוצה</span>
        <blockquote>${h(t.myth.claim.replace(/\.$/, ""))}</blockquote>
        <p><span class="label">בפועל.</span> ${h(t.myth.truth)}</p>
      </div>`,
  });
  t.quiz.forEach((q) => cards.push(questionCard("בדיקת הבנה", q)));
  cards.push({
    end: true,
    html: `<div class="card end">
        ${scene ? sceneSvg(scene, "all", `איור: ${t.title}`) : `<div class="big">${t.emoji}</div>`}
        <span class="kicker">בשורה אחת</span>
        <h3>${h(t.take)}</h3>
        <p class="muted">שאלות הבדיקה יחזרו אליך מחר, ואחר כך במרווחים הולכים וגדלים.</p>
      </div>`,
  });
  return cards;
}

const playerTop = (i, n, title) => `
  <header class="p-top">
    <a class="close" href="#/" aria-label="סגירה">${IC.close}</a>
    <div class="segs" role="progressbar" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${i + 1}">
      ${Array.from({ length: n }, (_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}
    </div>
    <span class="p-title">${h(title)}</span>
  </header>`;

async function renderTopic(id) {
  const t = byId[id];
  if (!t) return (location.hash = "#/");
  const scene = await loadScene(id);
  if (location.hash !== `#/t/${id}`) return; // המשתמש כבר עבר למסך אחר
  const cards = buildCards(t, scene);
  let i = 0;

  function finish() {
    state.done[t.id] = dayKey();
    t.quiz.forEach((_, qi) => {
      const k = `${t.id}:${qi}`;
      if (!state.srs[k]) state.srs[k] = { box: 0, due: addDays(1) };
    });
    touchStreak();
    save();
  }

  function show() {
    const c = cards[i];
    const last = i === cards.length - 1;
    if (c.end) finish();
    const next = ORDERED.find((x) => !state.done[x.id]);
    app.innerHTML = `
      ${playerTop(i, cards.length, t.title)}
      <main class="stage">${c.html}</main>
      <nav class="p-nav">
        <button id="back" class="back" ${i === 0 ? "disabled" : ""}>הקודם</button>
        ${last
          ? `<a class="btn" href="${next ? `#/t/${next.id}` : "#/"}">${next ? `הבא: ${h(next.title)}` : "לכל הדברים"}</a>`
          : `<button id="next" class="btn" ${c.locked ? "disabled" : ""}>המשך</button>`}
      </nav>`;
    const unlock = () => { c.locked = false; const n = document.getElementById("next"); if (n) n.disabled = false; };
    c.bind?.(app.querySelector(".stage"), unlock);
    document.getElementById("back").addEventListener("click", () => { i--; show(); });
    document.getElementById("next")?.addEventListener("click", () => { i++; show(); });
    window.scrollTo(0, 0);
    if (canSpeak) speechSynthesis.cancel();
  }
  show();
}

// ---------- חזרה מרווחת ----------
function renderReview() {
  const queue = dueCards();
  let i = 0, right = 0;
  const message = (title, text, btn) => {
    app.innerHTML = `${playerTop(0, 1, "חזרה")}
      <main class="stage"><div class="card end"><span class="kicker">חזרה</span><h3>${title}</h3><p class="muted">${text}</p></div></main>
      <nav class="p-nav"><a class="btn" href="#/">${btn}</a></nav>`;
  };
  if (!queue.length) {
    return message("אין מה לחזור עליו היום", "שאלות מופיעות כאן יום אחרי שסיימת דבר, ואז במרווחים הולכים וגדלים.", "חזרה לרשימה");
  }
  function show() {
    if (i >= queue.length) {
      touchStreak(); save();
      return message(`${right} מתוך ${queue.length} נכונות`, "מה שידעת יחזור בעוד זמן רב יותר. מה שלא — מחר.", "סיום");
    }
    const c = queue[i];
    const card = questionCard(c.topic.title, c.q, (ok) => {
      const s = state.srs[c.key];
      s.box = ok ? Math.min(s.box + 1, INTERVALS.length - 1) : 0;
      s.due = addDays(INTERVALS[s.box]);
      if (ok) right++;
      save();
    });
    app.innerHTML = `
      ${playerTop(i, queue.length, `${i + 1} מתוך ${queue.length}`)}
      <main class="stage">${card.html}</main>
      <nav class="p-nav"><button id="next" class="btn" disabled>המשך</button></nav>`;
    card.bind(app.querySelector(".stage"), () => (document.getElementById("next").disabled = false));
    document.getElementById("next").addEventListener("click", () => { i++; show(); });
  }
  show();
}

// ---------- ניתוב ----------
function route() {
  const [, view, id] = location.hash.split("/");
  if (view === "t") renderTopic(id);
  else if (view === "review") renderReview();
  else renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
