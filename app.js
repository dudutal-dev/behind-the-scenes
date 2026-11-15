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

// ---------- מסכים ראשיים ----------
const CAT_ICON = {
  home: '<path d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z"/>',
  move: '<path d="M4 16v-3l2-5h12l2 5v3zM6 16v2.5M18 16v2.5M4.5 13h15"/><circle cx="8" cy="14.5" r=".6"/><circle cx="16" cy="14.5" r=".6"/>',
  tech: '<rect x="7" y="3" width="10" height="18" rx="2.2"/><path d="M11 17.8h2"/>',
  energy: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
  infra: '<path d="M3 17h18M6 17V6M18 17V6M6 7c2.2 5.5 9.8 5.5 12 0M10 17v-5.8M14 17v-5.8"/>',
  nature: '<path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14zM5 19l8-8"/>',
};
const TABS = [
  { id: "home", href: "#/", label: "בית", d: CAT_ICON.home },
  { id: "lib", href: "#/lib", label: "ספרייה", d: '<path d="M5 4h6v7H5zM13 4h6v4h-6zM13 11h6v9h-6zM5 14h6v6H5z"/>' },
  { id: "review", href: "#/review", label: "חזרה", d: '<path d="M17 3l3 3-3 3M20 6H8a4 4 0 00-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 004-4v-1"/>' },
  { id: "me", href: "#/me", label: "התקדמות", d: '<path d="M5 20v-8M12 20V5M19 20v-5"/>' },
];
let backTo = "#/"; // לאן כפתור הסגירה בנגן מחזיר

function tabbar(active) {
  const due = dueCards().length;
  return `<nav class="tabbar" aria-label="ניווט ראשי">${TABS.map((t) => `
    <a href="${t.href}" class="tab${t.id === active ? " on" : ""}" ${t.id === active ? 'aria-current="page"' : ""}>
      <span class="tab-ic">${icon(t.d)}${t.id === "review" && due ? `<i class="dot"></i>` : ""}</span>
      <span>${t.label}</span>
    </a>`).join("")}</nav>`;
}
function page(active, html) {
  app.className = "with-tabs";
  app.innerHTML = `${html}${tabbar(active)}`;
}
function greeting() {
  const hr = new Date().getHours();
  return hr >= 5 && hr < 12 ? "בוקר טוב" : hr < 17 ? "צהריים טובים" : hr < 22 ? "ערב טוב" : "לילה טוב";
}
const doneIn = (catId) => ORDERED.filter((t) => t.cat === catId && state.done[t.id]).length;
const countIn = (catId) => ORDERED.filter((t) => t.cat === catId).length;

// מציג איור בכרטיס רק כשהוא נכנס למסך, ומסיר אותו כשהוא יוצא — כדי לא להריץ אנימציות שלא רואים
function lazyScenes(root) {
  const fill = async (el) => {
    const scene = await loadScene(el.dataset.scene);
    if (scene && el.isConnected && !el.firstChild) el.innerHTML = sceneSvg(scene, "all", "");
  };
  if (!("IntersectionObserver" in window)) return root.querySelectorAll("[data-scene]").forEach(fill);
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) fill(e.target); else e.target.innerHTML = "";
  }), { rootMargin: "80px" });
  root.querySelectorAll("[data-scene]").forEach((el) => io.observe(el));
}

// ---------- בית ----------
function renderHome() {
  const today = todaysTopic();
  const due = dueCards().length;
  const streak = liveStreak();
  const doneCount = Object.keys(state.done).length;
  // הצעה אחת מכל תחום, מתוך מה שעוד לא נקרא
  const picks = CATEGORIES.map((c) => ORDERED.find((t) => t.cat === c.id && !state.done[t.id] && t.id !== today.id)).filter(Boolean);

  page("home", `
    <header class="hello">
      <div>
        <span class="hello-sub">${greeting()}</span>
        <h1 class="brand">איך זה עובד</h1>
      </div>
      <a class="pill" href="#/me">${streak ? `רצף ${streak === 1 ? "יום אחד" : `${streak} ימים`}` : `${doneCount} מתוך ${TOPICS.length}`}</a>
    </header>

    <a class="hero" href="#/t/${today.id}">
      <div class="thumb" data-scene="${today.id}"></div>
      <div class="hero-body">
        <div>
          <span class="kicker">הדבר של היום</span>
          <h2>${h(today.title)}</h2>
          <p>${h(today.sub)}</p>
        </div>
        <span class="btn sm">לקריאה</span>
      </div>
    </a>

    ${due ? `<a class="notice" href="#/review">
      <span><b>${due}</b> שאלות מחכות לחזרה</span><span class="go">להתחיל ${IC.fwd}</span></a>` : ""}

    <section>
      <div class="sec-head"><h2>תחומים</h2><a href="#/lib">כל ${TOPICS.length} הדברים ${IC.fwd}</a></div>
      <div class="tiles">
        ${CATEGORIES.map((c) => {
          const n = countIn(c.id), d = doneIn(c.id);
          return `<a class="tile" href="#/lib/${c.id}">
            <span class="tile-ic">${icon(CAT_ICON[c.id])}</span>
            <b>${h(c.name)}</b>
            <small>${d ? `${d} מתוך ${n}` : `${n} דברים`}</small>
            <span class="bar"><i style="width:${(d / n) * 100}%"></i></span>
          </a>`;
        }).join("")}
      </div>
    </section>

    ${picks.length ? `<section>
      <div class="sec-head"><h2>אולי יעניין אותך</h2></div>
      <div class="rail">
        ${picks.map((t) => `<a class="mini" href="#/t/${t.id}">
          <div class="thumb" data-scene="${t.id}"></div>
          <b>${h(t.title)}</b><small>${h(t.sub)}</small>
        </a>`).join("")}
      </div>
    </section>` : ""}`);
  lazyScenes(app);
}

// ---------- ספרייה ----------
let query = "";
function topicRow(t) {
  const done = !!state.done[t.id];
  return `<a class="row${done ? " done" : ""}" href="#/t/${t.id}">
    <span class="row-n">${numOf[t.id]}</span>
    <span class="row-text"><b>${h(t.title)}</b><small>${h(t.sub)}</small></span>
    <span class="row-mark">${done ? IC.check : IC.fwd}</span>
  </a>`;
}
function listHtml(filter) {
  const q = query.trim();
  const match = (t) => (!q || t.title.includes(q) || t.sub.includes(q)) && (filter === "all" || q || t.cat === filter);
  const html = CATEGORIES.map((c) => {
    const items = ORDERED.filter((t) => t.cat === c.id && match(t));
    if (!items.length) return "";
    const head = filter === "all" || q ? `<h2 class="group">${h(c.name)}</h2>` : "";
    return `<section>${head}${items.map(topicRow).join("")}</section>`;
  }).join("");
  return html || `<p class="empty">לא נמצא דבר כזה.</p>`;
}
function renderLibrary(cat) {
  const filter = CATEGORIES.some((c) => c.id === cat) ? cat : "all";
  page("lib", `
    <header class="page-head">
      <h1>ספרייה</h1>
      <span class="meta">${Object.keys(state.done).length} מתוך ${TOPICS.length} נקראו</span>
    </header>
    <div class="tools">
      <label class="search">${IC.search}<input id="search" type="search" placeholder="חיפוש בכל הדברים" value="${h(query)}" autocomplete="off" aria-label="חיפוש"></label>
      <div class="chips" role="group" aria-label="סינון לפי תחום">
        ${[{ id: "all", name: "הכול" }, ...CATEGORIES].map((c) =>
          `<a class="chip" href="#/lib${c.id === "all" ? "" : `/${c.id}`}" aria-current="${filter === c.id}">${h(c.name)}</a>`).join("")}
      </div>
    </div>
    <div id="list">${listHtml(filter)}</div>`);
  const list = document.getElementById("list");
  document.getElementById("search").addEventListener("input", (e) => { query = e.target.value; list.innerHTML = listHtml(filter); });
  app.querySelector('.chip[aria-current="true"]')?.scrollIntoView({ block: "nearest", inline: "center" });
}

// ---------- התקדמות ----------
function renderMe() {
  const doneCount = Object.keys(state.done).length;
  const streak = liveStreak();
  const waiting = Object.keys(state.srs).length;
  page("me", `
    <header class="page-head"><h1>התקדמות</h1></header>
    <div class="figures">
      <div><b>${doneCount}</b><span>דברים נקראו</span></div>
      <div><b>${streak}</b><span>${streak === 1 ? "יום ברצף" : "ימים ברצף"}</span></div>
      <div><b>${waiting}</b><span>שאלות בחזרה</span></div>
    </div>
    <section>
      <div class="sec-head"><h2>לפי תחום</h2></div>
      ${CATEGORIES.map((c) => {
        const n = countIn(c.id), d = doneIn(c.id);
        return `<a class="prog" href="#/lib/${c.id}">
          <span class="prog-top"><b>${h(c.name)}</b><small>${d} מתוך ${n}</small></span>
          <span class="bar"><i style="width:${(d / n) * 100}%"></i></span>
        </a>`;
      }).join("")}
    </section>
    <footer><button id="reset" class="link">איפוס ההתקדמות</button></footer>`);
  document.getElementById("reset").addEventListener("click", () => {
    if (confirm("למחוק את כל ההתקדמות, הרצף והחזרות?")) { state = EMPTY(); save(); renderMe(); }
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
    <a class="close" href="${backTo}" aria-label="סגירה">${IC.close}</a>
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
          ? `<a class="btn" href="${next ? `#/t/${next.id}` : "#/lib"}">${next ? `הבא: ${h(next.title)}` : "לספרייה"}</a>`
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
  const total = Object.keys(state.srs).length;
  const intro = (title, text, action) => page("review", `
    <header class="page-head"><h1>חזרה</h1></header>
    <div class="center">
      <span class="kicker">חזרה מרווחת</span>
      <h2>${title}</h2>
      <p>${text}</p>
      ${action}
    </div>`);
  if (!queue.length) {
    return intro(
      total ? "אין מה לחזור עליו היום" : "עדיין אין שאלות לחזרה",
      total
        ? "השאלות הבאות יופיעו כאן כשיגיע זמנן. המרווחים גדלים בכל פעם שעונים נכון: יום, שלושה, שבוע, ואז יותר."
        : "אחרי שמסיימים דבר, שאלות הבדיקה שלו מופיעות כאן למחרת, ואז במרווחים הולכים וגדלים — כך זה נשאר בזיכרון.",
      `<a class="btn" href="#/lib">לספרייה</a>`);
  }
  intro(`${queue.length} שאלות מחכות לך`, "כמה דקות של חזרה על מה שכבר קראת. מה שתדע יחזור בעוד זמן רב יותר; מה שלא — מחר.",
    `<button id="start" class="btn">להתחיל</button>`);
  document.getElementById("start").addEventListener("click", () => runReview(queue));
}

function runReview(queue) {
  let i = 0, right = 0;
  app.className = "";
  function show() {
    if (i >= queue.length) {
      touchStreak(); save();
      app.innerHTML = `${playerTop(0, 1, "חזרה")}
        <main class="stage"><div class="card end"><span class="kicker">סיימת</span><h3>${right} מתוך ${queue.length} נכונות</h3>
        <p class="muted">מה שידעת יחזור בעוד זמן רב יותר. מה שלא — מחר.</p></div></main>
        <nav class="p-nav"><a class="btn" href="#/">סיום</a></nav>`;
      return;
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
    window.scrollTo(0, 0);
  }
  show();
}

// ---------- ניתוב ----------
function route() {
  const [, view, id] = location.hash.split("/");
  if (view === "t") { app.className = ""; renderTopic(id); }
  else {
    backTo = location.hash || "#/";
    if (view === "lib") renderLibrary(id);
    else if (view === "review") renderReview();
    else if (view === "me") renderMe();
    else renderHome();
  }
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
