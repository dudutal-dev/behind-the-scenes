import { CATEGORIES, TOPICS } from "./content.js";

const KEY = "eich-ze-oved-v1";
const INTERVALS = [1, 3, 7, 16, 35]; // ימים בין חזרות, לפי "קופסה"
const app = document.getElementById("app");
const byId = Object.fromEntries(TOPICS.map((t) => [t.id, t]));

// ---------- מצב ----------
function load() {
  try {
    return { done: {}, srs: {}, streak: { last: "", count: 0 }, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return { done: {}, srs: {}, streak: { last: "", count: 0 } };
  }
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
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "he-IL";
  u.rate = 0.95;
  speechSynthesis.speak(u);
}
const canSpeak = "speechSynthesis" in window;

// ---------- מסך הבית ----------
function topicRow(t) {
  return `<a class="row" href="#/t/${t.id}">
    <span class="row-emoji">${t.emoji}</span>
    <span class="row-text"><b>${h(t.title)}</b><small>${h(t.sub)}</small></span>
    <span class="row-mark">${state.done[t.id] ? "✓" : "›"}</span>
  </a>`;
}

function renderHome(query = "") {
  const today = todaysTopic();
  const due = dueCards().length;
  const doneCount = Object.keys(state.done).length;
  const q = query.trim();
  const match = (t) => !q || t.title.includes(q) || t.sub.includes(q);

  const sections = CATEGORIES.map((c) => {
    const items = TOPICS.filter((t) => t.cat === c.id && match(t));
    if (!items.length) return "";
    return `<section><h2>${c.emoji} ${h(c.name)}</h2><div class="list">${items.map(topicRow).join("")}</div></section>`;
  }).join("");

  app.innerHTML = `
    <header class="top">
      <h1>איך זה עובד?</h1>
      <div class="stats">
        <span title="רצף ימים">🔥 ${liveStreak()}</span>
        <span title="דברים שהבנת">✓ ${doneCount}/${TOPICS.length}</span>
      </div>
    </header>

    ${q ? "" : `
    <a class="hero" href="#/t/${today.id}">
      <span class="hero-label">הדבר של היום</span>
      <span class="hero-emoji">${today.emoji}</span>
      <b>${h(today.title)}</b>
      <span>${h(today.sub)}</span>
      <span class="btn">בוא נבין ←</span>
    </a>
    ${due ? `<a class="review-banner" href="#/review">🧠 ${due} שאלות מחכות לחזרה <span>›</span></a>` : ""}`}

    <input id="search" class="search" type="search" placeholder="חיפוש: מקרר, GPS, ברק…" value="${h(q)}" autocomplete="off">
    ${sections || `<p class="empty">לא נמצא דבר כזה.</p>`}

    <footer>
      <button id="reset" class="link">איפוס ההתקדמות</button>
    </footer>`;

  const s = document.getElementById("search");
  s.addEventListener("input", () => {
    renderHome(s.value);
    const n = document.getElementById("search");
    n.focus();
    n.setSelectionRange(n.value.length, n.value.length);
  });
  document.getElementById("reset").addEventListener("click", () => {
    if (confirm("למחוק את כל ההתקדמות, הרצף והחזרות?")) {
      state = { done: {}, srs: {}, streak: { last: "", count: 0 } };
      save();
      renderHome();
    }
  });
}

// ---------- נגן ----------
function questionCard(label, q, onDone) {
  return {
    html: `<div class="card">
        <span class="tag">${label}</span>
        <h3>${h(q.q)}</h3>
        <div class="opts">${q.o.map((o, i) => `<button class="opt" data-i="${i}">${h(o)}</button>`).join("")}</div>
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
          r.innerHTML = `<b>${ok ? "בדיוק." : "לא בדיוק."}</b> ${h(q.x)}`;
          onDone?.(ok);
          unlock();
        })
      );
    },
  };
}

function buildCards(t) {
  const cards = [questionCard("מה דעתך?", t.hook)];
  t.steps.forEach((s, i) =>
    cards.push({
      html: `<div class="card">
          <span class="tag">שלב ${i + 1} מתוך ${t.steps.length}</span>
          <div class="big">${s.e}</div>
          <h3>${h(s.t)}</h3>
          <p>${h(s.x)}</p>
          ${canSpeak ? `<button class="link speak">🔊 הקרא לי</button>` : ""}
        </div>`,
      bind(root) { root.querySelector(".speak")?.addEventListener("click", () => speak(`${s.t}. ${s.x}`)); },
    })
  );
  cards.push({
    html: `<div class="card myth">
        <span class="tag">טעות נפוצה</span>
        <h3>״${h(t.myth.claim)}״</h3>
        <p><b>בפועל:</b> ${h(t.myth.truth)}</p>
      </div>`,
  });
  t.quiz.forEach((q) => cards.push(questionCard("בדיקת הבנה", q)));
  cards.push({
    end: true,
    html: `<div class="card end">
        <div class="big">${t.emoji}</div>
        <span class="tag">משפט אחד לקחת</span>
        <h3>${h(t.take)}</h3>
        <p class="muted">שאלות הבדיקה יחזרו אליך מחר, כדי שזה יישאר.</p>
      </div>`,
  });
  return cards;
}

function renderTopic(id) {
  const t = byId[id];
  if (!t) return (location.hash = "#/");
  const cards = buildCards(t);
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
    const next = TOPICS.find((x) => !state.done[x.id]);
    app.innerHTML = `
      <header class="player-top">
        <a class="close" href="#/" aria-label="סגירה">✕</a>
        <div class="bar"><i style="width:${((i + 1) / cards.length) * 100}%"></i></div>
        <span class="count">${t.emoji} ${h(t.title)}</span>
      </header>
      <main class="stage">${c.html}</main>
      <nav class="player-nav">
        <button id="back" class="btn ghost" ${i === 0 ? "disabled" : ""}>הקודם</button>
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
  if (!queue.length) {
    app.innerHTML = `<header class="player-top"><a class="close" href="#/">✕</a><span class="count">חזרה</span></header>
      <main class="stage"><div class="card end"><div class="big">🌤️</div><h3>אין מה לחזור עליו היום</h3>
      <p class="muted">שאלות מופיעות כאן יום אחרי שסיימת דבר, ואז במרווחים הולכים וגדלים.</p></div></main>
      <nav class="player-nav"><a class="btn" href="#/">חזרה לבית</a></nav>`;
    return;
  }
  function show() {
    if (i >= queue.length) {
      touchStreak(); save();
      app.innerHTML = `<header class="player-top"><a class="close" href="#/">✕</a><span class="count">חזרה</span></header>
        <main class="stage"><div class="card end"><div class="big">🧠</div><h3>${right} מתוך ${queue.length} נכונות</h3>
        <p class="muted">מה שידעת יחזור בעוד זמן רב יותר. מה שלא — מחר.</p></div></main>
        <nav class="player-nav"><a class="btn" href="#/">סיום</a></nav>`;
      return;
    }
    const c = queue[i];
    const card = questionCard(`${c.topic.emoji} ${c.topic.title}`, c.q, (ok) => {
      const s = state.srs[c.key];
      s.box = ok ? Math.min(s.box + 1, INTERVALS.length - 1) : 0;
      s.due = addDays(INTERVALS[s.box]);
      if (ok) right++;
      save();
    });
    app.innerHTML = `
      <header class="player-top">
        <a class="close" href="#/" aria-label="סגירה">✕</a>
        <div class="bar"><i style="width:${(i / queue.length) * 100}%"></i></div>
        <span class="count">${i + 1}/${queue.length}</span>
      </header>
      <main class="stage">${card.html}</main>
      <nav class="player-nav"><span></span><button id="next" class="btn" disabled>המשך</button></nav>`;
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
