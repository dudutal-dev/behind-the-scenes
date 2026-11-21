import { CATEGORIES, TOPICS } from "./content.js";
import { SIM_IDS } from "./sims/index.js";
import { initLicense, onLicenseChange, allowed, licenseText } from "./lic.js";

const VERSION = "3.0";
// ?sim=<id> בכתובת מפעיל הדמיה שעוד לא רשומה ב-sims/index.js (לפיתוח)
const SIMS = new Set([...SIM_IDS, ...new URLSearchParams(location.search).getAll("sim")]);

const KEY = "mk2-v1";
const INTERVALS = [1, 3, 7, 16, 35]; // ימים בין חזרות, לפי "קופסה"
const LETTERS = ["א", "ב", "ג", "ד"];
const app = document.getElementById("app");
const byId = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
// סדר התצוגה: לפי קטגוריה
const ORDERED = CATEGORIES.flatMap((c) => TOPICS.filter((t) => t.cat === c.id));

// מתגי הקישור (נקבעים בניהול, לכל קישור הפעלה): feed, sims, review, ותחום cat-<id>. בלי קישור — הכול פתוח.
const openT = (t) => allowed(`cat-${t.cat}`);
const PERM_KEYS = ["feed", "sims", "review", ...CATEGORIES.map((c) => `cat-${c.id}`)];
const permSig = () => PERM_KEYS.map((k) => +allowed(k)).join("");

// ---------- מצב ----------
const EMPTY = () => ({ done: {}, srs: {}, favs: {}, vseen: {}, pos: null, streak: { last: "", count: 0 } });
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
  if (!allowed("review")) return [];
  const today = dayKey();
  return Object.entries(state.srs)
    .filter(([, v]) => v.due <= today)
    .map(([k]) => { const [tid, i] = k.split(":"); return { key: k, topic: byId[tid], q: byId[tid]?.quiz[+i] }; })
    .filter((c) => c.q && openT(c.topic));
}
function todaysTopic() {
  const avail = TOPICS.filter(openT);
  const pool = avail.filter((t) => !state.done[t.id]);
  const list = pool.length ? pool : avail.length ? avail : TOPICS;
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
  settings: icon('<path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2.600"/><circle cx="8" cy="17" r="2.600"/>'),
  lock: icon('<rect x="5" y="10.500" width="14" height="9.500" rx="2.500"/><path d="M8 10.500V8a4 4 0 0 1 8 0v2.500"/>'),
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
// ההקראה מוקפאת בינתיים: הכפתור לא מוצג. כדי להחזיר — לשנות ל-true.
const NARRATION = false;
const canSpeak = NARRATION && "speechSynthesis" in window;

// ---------- איורים ----------
const sceneCache = {};
async function loadScene(id) {
  if (!(id in sceneCache)) {
    try { sceneCache[id] = (await import(`./scenes/${id}.js`)).default; }
    catch { sceneCache[id] = null; } // אין איור — נופלים חזרה לאימוג'י
  }
  return sceneCache[id];
}
const simCache = {};
async function loadSim(id) {
  if (!SIMS.has(id) || !allowed("sims")) return null;
  if (!(id in simCache)) {
    try { simCache[id] = (await import(`./sims/${id}.js`)).default; }
    catch { simCache[id] = null; }
  }
  return simCache[id];
}
const sceneSvg = (scene, step, label) =>
  `<svg class="scene" viewBox="0 0 320 220" data-step="${step}" role="img" aria-label="${h(label)}">${scene}</svg>`;

// ---------- אייקונים צבעוניים ----------
// גליף דו-גוני: צורות מלאות בלבן, והשכבה האחורית שקופה למחצה, על רקע מדורג בצבע התחום
const glyph = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const CAT_GLYPH = {
  home: '<path opacity=".5" d="M4 10.6 12 4l8 6.6V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9.6 21v-5a2.4 2.4 0 0 1 4.8 0v5z"/><path d="M12 2.6c.3 0 .6.1.8.3l8.7 7.3a1.1 1.1 0 0 1-1.4 1.700L12 5.1l-8.100 6.800a1.100 1.100 0 0 1-1.400-1.700l8.700-7.300c.2-.2.500-.3.800-.3z"/>',
  move: '<circle opacity=".5" cx="12" cy="12" r="9.5"/><path d="M16.9 7.1 14.200 14.200 7.100 16.900 9.800 9.800z"/>',
  tech: '<rect opacity=".5" x="6" y="2.500" width="12" height="19" rx="3.200"/><rect x="8.700" y="5.500" width="6.600" height="9" rx="1.400"/><circle cx="12" cy="17.800" r="1.300"/>',
  energy: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M13.300 3.200 6.300 13.300h4.400l-1 7.500 7.500-10.300h-4.700z"/>',
  infra: '<path opacity=".5" d="M3 20.500V10a1.500 1.500 0 0 1 1.500-1.500H11v12z"/><path d="M11 20.500V5a1.500 1.500 0 0 1 1.500-1.500h7A1.500 1.500 0 0 1 21 5v15.500z"/>',
  nature: '<path opacity=".5" d="M20.500 3.500C11 3.500 4.500 8 4.500 15a5.500 5.500 0 0 0 5.500 5.500c7 0 10.500-7.500 10.500-17z"/><path d="M3.800 21.200a1.100 1.100 0 0 1-.800-1.900l8.600-8.600a1.100 1.100 0 0 1 1.600 1.600l-8.600 8.600a1.100 1.100 0 0 1-.800.300z"/>',
  ai: '<rect opacity=".5" x="3" y="3" width="18" height="18" rx="6"/><path d="M12 5.500l1.700 4.800 4.800 1.700-4.800 1.700L12 18.500l-1.700-4.800L5.500 12l4.800-1.700z"/>',
  frontier: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M12 4.500c2.600 1.900 4 4.500 4 7.700v3.300H8v-3.300c0-3.200 1.400-5.800 4-7.700z"/><path d="M10 17h4l-.700 2.500h-2.600z"/>',
  psy: '<path opacity=".5" d="M2.500 12.500C2.500 6.800 6.800 3 12 3s9.500 3.800 9.500 9.500z"/><path d="M9.300 12.500h5.400l.800 7a1.500 1.500 0 0 1-1.500 1.700h-4a1.500 1.500 0 0 1-1.500-1.700z"/><circle cx="8" cy="8.500" r="1.300"/><circle cx="14.500" cy="6.800" r="1.100"/><circle cx="17" cy="10" r="1"/>',
  arms: '<path opacity=".5" d="M12 2.500 4 5.500v6c0 4.800 3.400 8.700 8 10 4.600-1.300 8-5.200 8-10v-6z"/><path d="M12 6.500 8 8v4c0 2.600 1.700 4.800 4 5.700z"/>',
  life: '<path opacity=".5" d="M7 3c0 4 10 5 10 9s-10 5-10 9h2.400c0-2.600 10-3.800 10-9S9.400 5.600 9.400 3z"/><path d="M17 3c0 4-10 5-10 9s10 5 10 9h-2.400c0-2.600-10-3.800-10-9s10-6.400 10-9z"/>',
  cars: '<path opacity=".5" d="M5.200 10.500 7 6.300A2.500 2.500 0 0 1 9.300 4.800h5.400A2.500 2.500 0 0 1 17 6.300l1.800 4.200z"/><path d="M3 12.500a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V17a1 1 0 0 1-1 1h-1v1.500a1.500 1.500 0 0 1-3 0V18H8v1.500a1.500 1.500 0 0 1-3 0V18H4a1 1 0 0 1-1-1zm3.500 3a1.300 1.300 0 1 0 0-2.600 1.300 1.300 0 0 0 0 2.600zm11 0a1.300 1.300 0 1 0 0-2.600 1.300 1.300 0 0 0 0 2.600z"/>',
  wonders: '<path opacity=".5" d="M12 2.500 2.500 8v1.500h19V8z"/><path d="M4.500 11h2.500v7.500H4.500zM10.750 11h2.500v7.500h-2.500zM17 11h2.500v7.500H17zM3 19.800h18v1.700H3z"/>',
  secrets: '<path opacity=".5" d="M6 3.500h11a2.500 2.500 0 0 1 2.500 2.500v12.500H8.500A2.500 2.500 0 0 1 6 16z"/><path d="M4 16a2.500 2.500 0 0 0 2.500 2.500h11V21h-11A4.500 4.500 0 0 1 2 16.500V6a2.500 2.500 0 0 1 2-2.450zM9.500 7.500h6.500V9H9.500zM9.500 11h6.500v1.500H9.500z"/>',
  invent: '<path opacity=".5" d="M12 2.500a7 7 0 0 0-4 12.700V17h8v-1.800a7 7 0 0 0-4-12.700z"/><path d="M9 18.500h6V20a1.500 1.500 0 0 1-1.500 1.500h-3A1.500 1.500 0 0 1 9 20zM11 9h2v6h-2z"/>',
  body: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M12 17.800s-5.300-3.200-5.300-7.100a3 3 0 0 1 5.300-1.900 3 3 0 0 1 5.300 1.900c0 3.900-5.300 7.100-5.300 7.100z"/>',
  space: '<ellipse opacity=".5" cx="12" cy="12" rx="10.500" ry="3.700" transform="rotate(-20 12 12)"/><circle cx="12" cy="12" r="5.600"/>',
  digital: '<rect opacity=".5" x="5" y="5" width="14" height="14" rx="3"/><rect x="9" y="9" width="6" height="6" rx="1.200"/><path d="M9 2.500h1.500V5H9zM13.500 2.500H15V5h-1.500zM9 19h1.500v2.500H9zM13.500 19H15v2.500h-1.500zM2.500 9H5v1.500H2.500zM2.500 13.500H5V15H2.500zM19 9h2.500v1.500H19zM19 13.500h2.500V15H19z"/>',
};
// סרטונים מונפשים: videos/<id>.mp4 + videos/<id>.jpg
const VIDEOS = new Map([ // id → כותרת הכרטיס (סרטון ראשי לנושא)
]);
// סרטונים נוספים לנושא (למשל מערכון): videos/<vid>.mp4, מוצגים בכרטיס נוסף ובפיד
const EXTRA_FILMS = new Map([ // vid → { topic, title }
  ["smoke-sketch", { topic: "smoke", title: "מערכון: הריח יעיר אותי" }],
  ["ac-sketch", { topic: "ac", title: "מערכון: מזגן על שש עשרה" }],
  ["wifi-sketch", { topic: "wifi", title: "מערכון: יש קליטה, אין אינטרנט" }],
]);
const FILMS = [
  ...[...VIDEOS].map(([vid, title]) => ({ vid, topic: vid, title })),
  ...[...EXTRA_FILMS].map(([vid, o]) => ({ vid, ...o })),
];
const filmsOf = (topic) => FILMS.filter((f) => f.topic === topic);
// בדף הנושא: קישור קטן לכל סרטון, שפותח אותו בפיד במסך מלא
const filmLinks = (topic) => {
  const fs = allowed("feed") ? filmsOf(topic) : [];
  return fs.length ? `<div class="vlinks">${fs.map((f) => `<a class="vlink" href="#/feed/${f.vid}">
    <img src="videos/${f.vid}.jpg" alt="" loading="lazy"><span class="vplay-s">${glyph(GLYPH.play)}</span>
    <span><b>${f.vid.endsWith("-sketch") ? "מערכון" : "סרטון"} · דקה</b><small>${h(f.title.replace(/^מערכון:\s*/, ""))}</small></span></a>`).join("")}</div>` : "";
};
const GLYPH = {
  heart: '<path d="M12 20.300s-7.800-4.700-7.800-10.500a4.500 4.500 0 0 1 7.800-3 4.500 4.500 0 0 1 7.800 3c0 5.800-7.800 10.500-7.800 10.500z"/>',
  sound: '<path d="M4 9.500v5h3.500L12 18.500v-13L7.500 9.500z"/><path opacity=".6" d="M15 8.600a4.600 4.600 0 0 1 0 6.800l-1.100-1.100a3 3 0 0 0 0-4.600zM17.400 6.200a8 8 0 0 1 0 11.600l-1.100-1.100a6.400 6.400 0 0 0 0-9.400z"/>',
  play: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M10 8.200v7.600L16.200 12z"/>',
  flame: '<path opacity=".5" d="M12 2.500c.500 3.500 5.500 6 5.500 11.500a5.500 5.500 0 0 1-11 0c0-2 .800-3.500 1.800-4.800.300 1.300 1 2.300 2 2.800-.300-3.500.200-7 1.700-9.500z"/><path d="M12 12.500c1.500 1.500 2.500 2.800 2.500 4.500a2.500 2.500 0 0 1-5 0c0-1.700 1-3 2.500-4.500z"/>',
  book: '<path opacity=".5" d="M4 5.500A2.500 2.500 0 0 1 6.500 3H18a2 2 0 0 1 2 2v13H6.500A2.500 2.500 0 0 0 4 20.500z"/><path d="M6.500 16.500H20V21H6.500a2.250 2.250 0 0 1 0-4.500zM8 7h8v2H8z"/>',
  loop: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M12 6.500a5.500 5.500 0 0 1 4.900 3h-2.400l3.500 3.500 3.500-3.500h-2.500A7.500 7.500 0 0 0 5.500 8.300l1.500 1.300A5.500 5.500 0 0 1 12 6.500zM12 17.500a5.500 5.500 0 0 1-4.900-3h2.400L6 11l-3.500 3.500H5a7.500 7.500 0 0 0 13.500 1.200L17 14.400a5.500 5.500 0 0 1-5 3.100z"/>',
  spark: '<path d="M12 2.500l2.300 6.200 6.200 2.300-6.200 2.300L12 19.500l-2.300-6.200L3.500 11l6.200-2.300z"/><path opacity=".55" d="M19 15.500l.900 2.100 2.100.900-2.100.900-.900 2.100-.900-2.100-2.100-.900 2.100-.900z"/>',
  clock: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M11 6.500h2v5.100l3.600 2.100-1 1.700L11 12.700z"/>',
  mark: '<path d="M7 3.500h10A1.500 1.500 0 0 1 18.500 5v15.200a.600.600 0 0 1-.950.490L12 16.700l-5.550 3.990a.600.600 0 0 1-.950-.490V5A1.500 1.500 0 0 1 7 3.500z"/>',
  tune: '<rect opacity=".5" x="3" y="3" width="18" height="18" rx="5"/><path d="M6.500 8.200h6.200a2.300 2.300 0 0 1 4.400 0h.400v1.600h-.400a2.300 2.300 0 0 1-4.400 0H6.500zM6.500 14.200h.400a2.300 2.300 0 0 1 4.400 0h6.200v1.600h-6.200a2.300 2.300 0 0 1-4.400 0h-.400z"/>',
  check: '<circle opacity=".45" cx="12" cy="12" r="9.500"/><path d="M10.700 16.300 6.900 12.500l1.500-1.500 2.300 2.300 5-5 1.500 1.500z"/>',
  share: '<path d="M12 2.800 7.200 7.600l1.400 1.400L11 6.600V15h2V6.600l2.400 2.400 1.400-1.400z"/><path opacity=".6" d="M5 11h3v2H6v6h12v-6h-2v-2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/>',
  sim: '<rect opacity=".5" x="3" y="3" width="18" height="18" rx="5"/><path d="M6.500 8.200h6.200a2.300 2.300 0 0 1 4.400 0h.400v1.600h-.400a2.300 2.300 0 0 1-4.400 0H6.500zM6.500 14.200h.400a2.300 2.300 0 0 1 4.400 0h6.200v1.600h-6.200a2.300 2.300 0 0 1-4.400 0h-.400z"/>',
};
const badge = (d, cls = "") => `<span class="badge ${cls}">${glyph(d)}</span>`;
const catBadge = (cat, cls = "") => badge(CAT_GLYPH[cat], `c-${cat} ${cls}`);
const catName = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]));

const TAB_IC = {
  home: CAT_GLYPH.home,
  feed: '<rect opacity=".5" x="5" y="2.500" width="14" height="19" rx="4"/><path d="M10 8.300v7.400l5.800-3.700z"/>',
  lib: '<rect opacity=".5" x="3.500" y="3.500" width="7.500" height="7.500" rx="2.200"/><rect x="13" y="3.500" width="7.500" height="7.500" rx="2.200"/><rect x="3.500" y="13" width="7.500" height="7.500" rx="2.200"/><rect opacity=".5" x="13" y="13" width="7.500" height="7.500" rx="2.200"/>',
  review: GLYPH.loop,
  settings: '<circle opacity=".5" cx="12" cy="12" r="8.200"/><path d="M12 8.600a3.400 3.400 0 1 0 0 6.800 3.400 3.400 0 0 0 0-6.800zM10.700 2.500h2.600l.500 2.600h-3.600zM10.700 21.500h2.600l.500-2.600h-3.600zM2.500 10.700v2.600l2.600.500v-3.600zM21.500 10.700v2.600l-2.600.500v-3.600zM4.400 6.200l1.800-1.800 2.200 1.500-2.500 2.500zM19.600 17.800l-1.800 1.800-2.200-1.500 2.500-2.500zM6.200 19.600l-1.800-1.800 1.500-2.200 2.500 2.500zM17.800 4.400l1.800 1.800-1.500 2.200-2.500-2.500z"/>',
  me: '<rect opacity=".5" x="4" y="12" width="4.200" height="8.500" rx="1.600"/><rect x="9.900" y="4" width="4.200" height="16.500" rx="1.600"/><rect opacity=".5" x="15.800" y="8.500" width="4.200" height="12" rx="1.600"/>',
};
// ארבעה טאבים. "אני" מרכז את ההתקדמות ואת החזרה; ההגדרות נפתחות מגלגל השיניים שבראש המסך.
const TABS = [
  { id: "home", href: "#/", label: "בית" },
  { id: "feed", href: "#/feed", label: "פיד" },
  { id: "lib", href: "#/lib", label: "ספרייה" },
  { id: "me", href: "#/me", label: "אני" },
];
let backTo = "#/"; // לאן כפתור הסגירה בנגן מחזיר
const backLink = (href) => `<a class="icon-btn" href="${href}" aria-label="חזרה">${icon('<path d="M10 6l6 6-6 6"/>')}</a>`;
const gearLink = `<a class="icon-btn" href="#/settings" aria-label="הגדרות">${glyph(TAB_IC.settings).replace("<svg", '<svg fill="currentColor"')}</a>`;

// ---------- מעטפת ----------
function tabbar(active) {
  const due = dueCards().length;
  return `<nav class="tabbar" aria-label="ניווט ראשי">${TABS.filter((t) => t.id !== "feed" || allowed("feed")).map((t) => `
    <a href="${t.href}" class="tab${t.id === active ? " on" : ""}" ${t.id === active ? 'aria-current="page"' : ""}>
      <span class="tab-ic">${glyph(TAB_IC[t.id])}${t.id === "me" && due ? `<i class="dot"></i>` : ""}</span>
      <span>${t.label}</span>
    </a>`).join("")}</nav>`;
}

// חלונית תחתונה במקום חלונות הדפדפן (confirm / prompt), והודעה קצרה שנעלמת לבד
function sheet(html, bind) {
  const ov = document.createElement("div");
  ov.className = "ov";
  ov.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
  const close = () => ov.remove();
  ov.addEventListener("click", (e) => { if (e.target === ov || e.target.closest("[data-close]")) close(); });
  document.body.append(ov);
  bind?.(ov, close);
  return close;
}
const ask = (title, text, yes, onYes, danger) => sheet(
  `<h3>${h(title)}</h3><p>${h(text)}</p><div class="btn-row"><button class="btn sm${danger ? " danger" : ""}" data-yes>${h(yes)}</button><button class="btn sm ghost" data-close>ביטול</button></div>`,
  (ov, close) => ov.querySelector("[data-yes]").addEventListener("click", () => { close(); onYes(); }));
function toast(text) {
  document.querySelector(".toast")?.remove();
  const el = Object.assign(document.createElement("div"), { className: "toast", textContent: text });
  el.setAttribute("role", "status");
  document.body.append(el);
  setTimeout(() => el.remove(), 2200);
}
// שיתוף: חלונית השיתוף של המכשיר, ואם אין — העתקת הקישור
async function share(title, text, hash) {
  const url = `${location.origin}${location.pathname}${hash}`;
  try {
    if (navigator.share) return await navigator.share({ title, text, url });
    await navigator.clipboard.writeText(`${text}\n${url}`);
    toast("הקישור הועתק");
  } catch (e) { if (e?.name !== "AbortError") toast("השיתוף לא זמין במכשיר הזה"); }
}
function page(active, html) {
  app.className = "with-tabs";
  app.innerHTML = `<div class="view">${html}</div>${tabbar(active)}`;
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

// ---------- מסך פתיחה (בכניסה הראשונה) ----------
const INTRO_KEY = "mk2-intro";
const seenIntro = () => { try { return !!localStorage.getItem(INTRO_KEY); } catch { return true; } };
function renderWelcome() {
  app.className = "welcome";
  const feature = (g, cls, title, text) => `<li>${badge(g, `${cls} sm`)}<span><b>${title}</b><small>${text}</small></span></li>`;
  app.innerHTML = `
    <div class="w-scroll">
      <div class="w-hero">
        <img src="icon-192.png" alt="" width="84" height="84">
        <h1 class="brand">מאחורי <em>הקלעים</em></h1>
        <p>איך דברים עובדים באמת — בשתי דקות לכל דבר</p>
        <p class="w-stats"><b>${TOPICS.length}</b> דברים · <b>${CATEGORIES.length}</b> תחומים · <b>${SIMS.size}</b> הדמיות</p>
      </div>
      <ul class="w-list">
        ${feature(GLYPH.spark, "c-move", "המנגנון, לא הכותרת", "ארבעה שלבים קצרים ואיור מונפש לכל דבר.")}
        ${feature(GLYPH.tune, "c-energy", "נסה בעצמך", "הדמיות שמזיזים בהן, ורואים מיד מה משתנה.")}
        ${feature(GLYPH.clock, "c-invent", "הסיפור שמאחור", "קצת היסטוריה, וטעות נפוצה אחת.")}
        ${feature(GLYPH.loop, "c-done", "כדי שזה יישאר", "שאלות קצרות שחוזרות אליך מדי פעם.")}
      </ul>
    </div>
    <div class="w-foot">
      <button id="start" class="btn">בואו נתחיל ${IC.fwd}</button>
      <small>בלי הרשמה. הכול נשמר במכשיר, ועובד גם בלי רשת.</small>
    </div>`;
  document.getElementById("start").addEventListener("click", () => {
    try { localStorage.setItem(INTRO_KEY, "1"); } catch { /* מצב פרטי */ }
    if (location.hash && location.hash !== "#/") location.hash = "#/"; else route();
  });
}

// ---------- פיד: כל הסרטונים בסדר אקראי, אחד אחרי השני ----------
const SOUND_KEY = "mk2-sound";
let feedSound = (() => { try { return localStorage.getItem(SOUND_KEY) === "1"; } catch { return false; } })(); // הבחירה נשמרת במכשיר
function renderFeed(start) {
  // קודם סרטונים שעוד לא נצפו, כל קבוצה בסדר אקראי
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const all = FILMS.filter((f) => byId[f.topic] && openT(byId[f.topic]));
  const list = [...shuffle(all.filter((f) => !state.vseen[f.vid])), ...shuffle(all.filter((f) => state.vseen[f.vid]))];
  // הגעה מדף נושא: הסרטון המבוקש ראשון
  const si = list.findIndex((f) => f.vid === start);
  if (si > 0) list.unshift(...list.splice(si, 1));
  const act = (cls, g, label, attrs = "") => `<button type="button" class="fact ${cls}" aria-label="${label}" ${attrs}>${glyph(g)}</button>`;
  page("feed", `<div class="feed" id="feed">${list.map((f, n) => {
    const t = byId[f.topic], id = t.id, vid = f.vid;
    return `<section class="fslide" data-id="${vid}" data-topic="${id}">
      <div class="fbg" style="background-image:url(videos/${vid}.jpg)"></div>
      <img class="fposter" src="videos/${vid}.jpg" alt="" ${n > 1 ? 'loading="lazy"' : ""}>
      <div class="fshade"></div>
      <div class="fpause" hidden>${glyph(GLYPH.play)}</div>
      <div class="fmeta">
        <a class="ftitle" href="#/t/${id}" aria-label="לנושא המלא: ${h(t.title)}"><b>${h(t.title)} ${IC.fwd}</b><small>${h(catName[t.cat])} · ${h(f.title)}</small></a>
        <div class="facts">
          ${act(`fheart${state.favs[id] ? " on" : ""}`, GLYPH.heart, "שמירה במועדפים", `aria-pressed="${!!state.favs[id]}"`)}
          ${act("fshare", GLYPH.share, "שיתוף")}
          ${act("fsnd", GLYPH.sound, "קול")}
        </div>
      </div>
      <div class="fend" hidden>
        <b>רוצים להבין לעומק?</b>
        <a class="btn" href="#/t/${id}">ספר לי עוד ${IC.fwd}</a>
        <button type="button" class="btn ghost fnext">לסרטון הבא <span class="fcount"></span></button>
      </div>
      <span class="fbar"><i></i></span>
    </section>`;
  }).join("")}</div>
  <div class="fhint" id="fhint">${feedSound ? "החליקו למעלה לסרטון הבא" : "הקול כבוי · הרמקול שלמטה מפעיל אותו"}</div>`);
  app.classList.add("feed-mode");
  const feed = document.getElementById("feed");
  // נגן אחד שעובר בין השקפים: כך באייפון הקול נשאר פעיל אחרי נגיעה אחת
  const v = document.createElement("video");
  v.playsInline = true; v.setAttribute("playsinline", ""); v.preload = "auto"; v.muted = !feedSound;
  v.className = "fvid";
  let cur = null;
  const setSnd = () => feed.classList.toggle("muted", v.muted);
  setSnd();
  const pauseMark = () => { const p = cur?.querySelector(".fpause"); if (p) p.hidden = !v.paused || v.ended || !cur.querySelector(".fend").hidden; };
  v.addEventListener("pause", pauseMark); v.addEventListener("play", pauseMark);
  const activate = (slide) => {
    if (cur === slide) return;
    cur?.querySelector(".fpause")?.setAttribute("hidden", "");
    cur = slide;
    slide.prepend(v);
    v.src = `videos/${slide.dataset.id}.mp4`;
    v.poster = `videos/${slide.dataset.id}.jpg`;
    v.currentTime = 0;
    v.play().catch(() => { v.muted = true; setSnd(); v.play().catch(() => {}); });
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && e.intersectionRatio > 0.6) activate(e.target); }), { root: feed, threshold: [0.6] });
  feed.querySelectorAll(".fslide").forEach((s) => io.observe(s));
  v.addEventListener("timeupdate", () => { const b = cur?.querySelector(".fbar i"); if (b) b.style.width = `${(100 * v.currentTime) / (v.duration || 60)}%`; });
  // סימון כ"נצפה" אחרי 10 שניות; בסוף: מסך "ספר לי עוד" ומעבר אוטומטי לבא אחרי 5 שניות
  let endTimer = 0;
  const goNext = () => { clearInterval(endTimer); const n = cur?.nextElementSibling; if (n) n.scrollIntoView({ behavior: "smooth" }); };
  v.addEventListener("timeupdate", () => { if (v.currentTime > 10 && cur && !state.vseen[cur.dataset.id]) { state.vseen[cur.dataset.id] = dayKey(); save(); } });
  v.addEventListener("ended", () => {
    const end = cur?.querySelector(".fend"); if (!end) return;
    end.hidden = false;
    let n = 5; const c = end.querySelector(".fcount"); c.textContent = `(${n})`;
    clearInterval(endTimer);
    endTimer = setInterval(() => { n--; c.textContent = `(${n})`; if (n <= 0) goNext(); }, 1000);
  });
  feed.addEventListener("scroll", () => { clearInterval(endTimer); feed.querySelectorAll(".fend").forEach((e) => { if (!e.closest(".fslide").contains(v)) e.hidden = true; }); }, { passive: true });
  // נגיעה בסרטון: עצירה / המשך; כפתורי הצד: שמירה, שיתוף, מעבר לנושא
  feed.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const slide = e.target.closest(".fslide"); if (!slide) return;
    const id = slide.dataset.topic;
    const heart = e.target.closest(".fheart");
    if (heart) {
      if (state.favs[id]) delete state.favs[id]; else state.favs[id] = dayKey();
      save();
      heart.classList.toggle("on", !!state.favs[id]); heart.setAttribute("aria-pressed", String(!!state.favs[id]));
      return;
    }
    if (e.target.closest(".fshare")) { share(byId[id].title, `${byId[id].title} — ${byId[id].sub}`, `#/feed/${slide.dataset.id}`); return; }
    if (e.target.closest(".fsnd")) {
      v.muted = !v.muted; feedSound = !v.muted; setSnd();
      try { localStorage.setItem(SOUND_KEY, feedSound ? "1" : "0"); } catch { /* מצב פרטי */ }
      if (v.paused) v.play().catch(() => {});
      document.getElementById("fhint")?.remove();
      return;
    }
    if (e.target.closest(".fnext")) { goNext(); return; }
    if (e.target.closest(".fend")) return;
    if (v.paused) v.play().catch(() => {}); else v.pause();
  });
  feed.addEventListener("scroll", () => document.getElementById("fhint")?.remove(), { once: true });
  setTimeout(() => document.getElementById("fhint")?.remove(), 4500);
}

// ---------- בית ----------
function renderHome() {
  const today = todaysTopic();
  const due = dueCards().length;
  const streak = liveStreak();
  const doneCount = Object.keys(state.done).length;
  // נושא שנעצר באמצע
  const pos = state.pos && byId[state.pos.id] && !state.done[state.pos.id] && openT(byId[state.pos.id]) ? state.pos : null;
  const cont = pos && byId[pos.id];
  // הצעה אחת מכל תחום, מתוך מה שעוד לא נקרא
  const picks = CATEGORIES.map((c) => allowed(`cat-${c.id}`) && ORDERED.find((t) => t.cat === c.id && !state.done[t.id] && t.id !== today.id)).filter(Boolean);
  // סרטונים: החדשים קודם, ומה שעוד לא נצפה לפני מה שנצפה
  const newest = allowed("feed") ? [...FILMS].reverse().filter((f) => byId[f.topic] && openT(byId[f.topic])) : [];
  const films = [...newest.filter((f) => !state.vseen[f.vid]), ...newest.filter((f) => state.vseen[f.vid])].slice(0, 10);

  page("home", `
    <header class="hello">
      <div>
        <span class="hello-sub">${greeting()} · איך דברים עובדים</span>
        <h1 class="brand">מאחורי <em>הקלעים</em></h1>
      </div>
      <div class="hello-side">
        <a class="streak c-flame" href="#/me" aria-label="${streak} ימים ברצף">${glyph(GLYPH.flame)}<b>${streak}</b></a>
        ${gearLink}
      </div>
    </header>

    ${cont ? `<a class="notice c-${cont.cat}" href="#/t/${cont.id}" style="margin:0 0 12px">
      ${catBadge(cont.cat, "sm")}
      <span class="notice-text"><small>להמשיך מאיפה שעצרת</small><b>${h(cont.title)}</b>
        <span class="bar"><i style="width:${Math.round((100 * (pos.i + 1)) / (pos.n || 10))}%"></i></span></span>
      ${IC.fwd}</a>` : ""}

    <a class="hero c-${today.cat}" href="#/t/${today.id}">
      <div class="thumb" data-scene="${today.id}"></div>
      <span class="chip-float">${glyph(GLYPH.spark)} הדבר של היום</span>
      <div class="hero-body">
        <div>
          <span class="tag">${h(catName[today.cat])}</span>
          <h2>${h(today.title)}</h2>
          <p>${h(today.sub)}</p>
        </div>
        <span class="fab" aria-hidden="true">${IC.fwd}</span>
      </div>
    </a>

    ${due ? `<a class="notice" href="#/review">
      ${badge(GLYPH.loop, "c-review sm")}
      <span class="notice-text"><b>${due} שאלות לחזרה</b><small>כמה דקות, כדי שזה יישאר</small></span>
      ${IC.fwd}</a>` : ""}

    ${films.length ? `<section>
      <div class="sec-head"><h2>דקה של סרטון</h2><a href="#/feed">לפיד ${IC.fwd}</a></div>
      <div class="rail">
        ${films.map((f) => `<a class="vcard" href="#/feed/${f.vid}">
          <img src="videos/${f.vid}.jpg" alt="" loading="lazy">
          <span class="vplay-s">${glyph(GLYPH.play)}</span>
          <span class="vcap"><b>${h(byId[f.topic].title)}</b><small>${h(f.title.replace(/ ב־60 שניות$/, ""))}</small></span>
        </a>`).join("")}
      </div>
    </section>` : ""}

    <section>
      <div class="sec-head" style="margin-top:14px"><h2>תחומים</h2><a href="#/lib">הכול ${IC.fwd}</a></div>
      <div class="rail">
        ${CATEGORIES.map((c) => {
          const n = countIn(c.id), d = doneIn(c.id);
          return `<a class="tile c-${c.id}" href="#/lib/${c.id}">
            ${catBadge(c.id, "sm")}
            <b>${h(c.name)}</b>
            <small>${!allowed(`cat-${c.id}`) ? "לא כלול בקישור" : d ? `${d} מתוך ${n}` : `${n} דברים`}</small>
            <span class="bar"><i style="width:${(d / n) * 100}%"></i></span>
          </a>`;
        }).join("")}
      </div>
    </section>

    ${picks.length ? `<section>
      <div class="sec-head" style="margin-top:14px"><h2>אולי יעניין אותך</h2></div>
      <div class="rail">
        ${picks.map((t) => `<a class="mini c-${t.cat}" href="#/t/${t.id}">
          <div class="thumb" data-scene="${t.id}"></div>
          <span class="tag">${h(catName[t.cat])}</span>
          <b>${h(t.title)}</b><small>${h(t.sub)}</small>
        </a>`).join("")}
      </div>
    </section>` : ""}
    <p class="foot-note">${doneCount} מתוך ${TOPICS.length} דברים נקראו</p>`);
  lazyScenes(app);
}

// ---------- ספרייה ----------
let query = "";
// טקסט מלא של כל דבר, לחיפוש בתוכן
const HAY = Object.fromEntries(TOPICS.map((t) => [t.id,
  [t.title, t.sub, ...t.steps.flatMap((s) => [s.t, s.x]), t.history || "", t.myth.claim, t.myth.truth, t.take].join(" · ")]));
function snippet(text, q) {
  const i = text.indexOf(q);
  if (i < 0) return "";
  const a = Math.max(0, i - 26), b = Math.min(text.length, i + q.length + 38);
  return `${a ? "…" : ""}${h(text.slice(a, i))}<mark>${h(q)}</mark>${h(text.slice(i + q.length, b))}${b < text.length ? "…" : ""}`;
}
function topicRow(t, q = "") {
  const done = !!state.done[t.id];
  const inHead = !q || t.title.includes(q) || t.sub.includes(q);
  const lock = !openT(t);
  const film = allowed("feed") && filmsOf(t.id).length, sim = allowed("sims") && SIMS.has(t.id);
  return `<a class="row${done ? " done" : ""}${lock ? " locked" : ""}" href="#/t/${t.id}">
    <span class="row-thumb" data-scene="${t.id}"></span>
    <span class="row-text"><b>${h(t.title)}${
      state.favs[t.id] ? `<i class="fav-mark">${glyph(GLYPH.mark)}</i>` : ""}</b><small>${inHead ? h(t.sub) : snippet(HAY[t.id], q)}</small>${
      film || sim ? `<span class="row-pills">${film ? `<i class="pill">${glyph(GLYPH.play)}סרטון</i>` : ""}${sim ? `<i class="pill">${glyph(GLYPH.sim)}הדמיה</i>` : ""}</span>` : ""}</span>
    <span class="row-mark">${lock ? IC.lock : done ? glyph(GLYPH.check) : IC.fwd}</span>
  </a>`;
}
function listHtml(filter) {
  const q = query.trim();
  if (q) {
    // חיפוש: בכל התוכן, כותרות קודם
    const rank = (t) => (t.title.includes(q) ? 0 : t.sub.includes(q) ? 1 : 2);
    const found = ORDERED.filter((t) => HAY[t.id].includes(q)).sort((a, b) => rank(a) - rank(b));
    return found.length
      ? `<h2 class="group">תוצאות <span>${found.length}</span></h2><div class="rows">${found.map((t) => topicRow(t, q)).join("")}</div>`
      : `<p class="empty">לא נמצא דבר שמזכיר את ״${h(q)}״.</p>`;
  }
  if (filter === "fav") {
    const favs = ORDERED.filter((t) => state.favs[t.id]);
    return favs.length
      ? `<div class="rows">${favs.map((t) => topicRow(t)).join("")}</div>`
      : `<p class="empty">עוד אין מועדפים.<br>כדי להוסיף, פותחים דבר ולוחצים על הסימנייה שבראש המסך.</p>`;
  }
  const match = (t) => filter === "all" || t.cat === filter;
  const html = CATEGORIES.map((c) => {
    const items = ORDERED.filter((t) => t.cat === c.id && match(t));
    if (!items.length) return "";
    const head = filter === "all" ? `<h2 class="group c-${c.id}"><i></i>${h(c.name)} <span>${items.length}</span></h2>` : "";
    return `<section>${head}<div class="rows">${items.map((t) => topicRow(t)).join("")}</div></section>`;
  }).join("");
  return html || `<p class="empty">לא נמצא דבר כזה.</p>`;
}
function renderLibrary(cat) {
  const filter = cat === "fav" || CATEGORIES.some((c) => c.id === cat) ? cat : "all";
  page("lib", `
    <header class="page-head">
      <h1>ספרייה</h1>
      <span class="meta">${Object.keys(state.done).length} מתוך ${TOPICS.length} נקראו</span>
    </header>
    <div class="tools">
      <label class="search">${IC.search}<input id="search" type="search" placeholder="חיפוש בשמות ובתוכן" value="${h(query)}" autocomplete="off" aria-label="חיפוש"></label>
      <div class="chips" role="group" aria-label="סינון לפי תחום">
        ${[{ id: "all", name: "הכול" }, { id: "fav", name: "מועדפים" }, ...CATEGORIES].map((c) =>
          `<a class="chip${c.id === "all" ? "" : ` c-${c.id}`}" href="#/lib${c.id === "all" ? "" : `/${c.id}`}" aria-current="${filter === c.id}">${
            c.id === "all" ? "" : c.id === "fav" ? glyph(GLYPH.mark) : `<i></i>`}${h(c.name)}</a>`).join("")}
      </div>
    </div>
    <div id="list">${listHtml(filter)}</div>`);
  const list = document.getElementById("list");
  lazyScenes(list);
  document.getElementById("search").addEventListener("input", (e) => { query = e.target.value; list.innerHTML = listHtml(filter); lazyScenes(list); });
  app.querySelector('.chip[aria-current="true"]')?.scrollIntoView({ block: "nearest", inline: "center" });
}

// ---------- התקדמות ----------
function renderMe() {
  const doneCount = Object.keys(state.done).length;
  const streak = liveStreak();
  const waiting = Object.keys(state.srs).length;
  const due = dueCards().length;
  const favs = Object.keys(state.favs).length;
  const pct = Math.round((doneCount / TOPICS.length) * 100);
  page("me", `
    <header class="page-head"><h1>אני</h1>${gearLink}</header>
    <div class="summary">
      <div class="pring" style="--p:${pct}"><b>${pct}%</b></div>
      <div>
        <b>${doneCount} מתוך ${TOPICS.length}</b>
        <small>${doneCount ? "דברים שכבר הבנת איך הם עובדים" : "עוד לא התחלת — הדבר של היום מחכה בבית"}</small>
      </div>
    </div>
    <div class="figures">
      <div>${badge(GLYPH.flame, "c-flame sm")}<b>${streak}</b><span>${streak === 1 ? "יום ברצף" : "ימים ברצף"}</span></div>
      <div>${badge(GLYPH.book, "c-done sm")}<b>${doneCount}</b><span>דברים נקראו</span></div>
      <div>${badge(GLYPH.loop, "c-review sm")}<b>${waiting}</b><span>שאלות בחזרה</span></div>
    </div>
    ${allowed("review") ? `<a class="notice" href="#/review">
      ${badge(GLYPH.loop, "c-review sm")}
      <span class="notice-text"><b>${due ? `${due} שאלות לחזרה היום` : "חזרה"}</b><small>${due ? "כמה דקות, כדי שזה יישאר" : waiting ? "אין מה לחזור עליו היום" : "שאלות מופיעות כאן אחרי שמסיימים דבר"}</small></span>
      ${IC.fwd}</a>` : ""}
    <a class="notice" href="#/lib/fav">
      ${badge(GLYPH.mark, "c-energy sm")}
      <span class="notice-text"><b>מועדפים</b><small>${favs ? `${favs} דברים ששמרת` : "עוד לא שמרת דבר"}</small></span>
      ${IC.fwd}</a>
    <section>
      <div class="sec-head"><h2>לפי תחום</h2></div>
      <div class="rows">
      ${CATEGORIES.map((c) => {
        const n = countIn(c.id), d = doneIn(c.id);
        return `<a class="prog c-${c.id}" href="#/lib/${c.id}">
          ${catBadge(c.id, "sm")}
          <span class="prog-body">
            <span class="prog-top"><b>${h(c.name)}</b><small>${d} מתוך ${n}</small></span>
            <span class="bar"><i style="width:${(d / n) * 100}%"></i></span>
          </span>
        </a>`;
      }).join("")}
      </div>
    </section>
    `);
}

// ---------- הגדרות, גיבוי ואודות ----------
function importState(raw) {
  const data = typeof raw === "string" ? JSON.parse(raw) : raw;
  const s = data && data.state ? data.state : data;
  if (!s || typeof s !== "object" || typeof s.done !== "object" || typeof s.srs !== "object") throw new Error("bad");
  const known = (o) => Object.fromEntries(Object.entries(o || {}).filter(([k]) => byId[k.split(":")[0]]));
  return {
    ...EMPTY(),
    done: known(s.done), srs: known(s.srs), favs: known(s.favs), vseen: known(s.vseen),
    pos: s.pos && byId[s.pos.id] ? { id: s.pos.id, i: Number(s.pos.i) || 0, n: Number(s.pos.n) || 10 } : null,
    streak: { last: String(s.streak?.last || ""), count: Number(s.streak?.count) || 0 },
  };
}
function renderSettings() {
  const doneCount = Object.keys(state.done).length;
  page("me", `
    <header class="page-head"><div class="lead">${backLink("#/me")}<h1>הגדרות</h1></div></header>

    <section>
      <div class="sec-head"><h2>תצוגה</h2></div>
      <div class="panel">
        <div class="seg-btns" id="theme" role="group" aria-label="ערכת צבעים">
          ${[["light", "בהירה"], ["dark", "כהה"], ["auto", "לפי המכשיר"]].map(([v, l]) => `<button type="button" data-v="${v}" aria-pressed="${v === window.applyTheme()}">${l}</button>`).join("")}
        </div>
      </div>
    </section>

    ${licenseText() ? `<section>
      <div class="sec-head"><h2>קישור הפעלה</h2></div>
      <div class="panel"><p>${h(licenseText())}. הקישור עובד בטלפון הזה בלבד.</p></div>
    </section>` : ""}

    <section>
      <div class="sec-head"><h2>גיבוי ושחזור</h2></div>
      <div class="panel">
        <p>ההתקדמות, הרצף, החזרות והמועדפים שמורים רק במכשיר הזה. גיבוי שומר אותם בקובץ, שאפשר לשחזר ממנו אחרי החלפת טלפון, ניקוי הדפדפן או התקנה מחדש.</p>
        <div class="btn-row">
          <button id="export" class="btn sm">שמירת גיבוי לקובץ</button>
          <button id="import" class="btn sm ghost">שחזור מקובץ</button>
        </div>
        <div class="btn-row">
          <button id="copy" class="link">העתקת הגיבוי כטקסט</button>
          <button id="paste" class="link">שחזור מטקסט</button>
        </div>
        <input id="file" type="file" accept="application/json,.json" hidden>
        <p id="msg" class="msg" role="status" hidden></p>
      </div>
    </section>

    <section>
      <div class="sec-head"><h2>איפוס</h2></div>
      <div class="panel">
        <p>מוחק את כל מה שנקרא (${doneCount} דברים), את הרצף, את שאלות החזרה ואת המועדפים. אי אפשר לבטל.</p>
        <button id="reset" class="btn sm danger">איפוס ההתקדמות</button>
      </div>
    </section>

    <section>
      <div class="sec-head"><h2>אודות</h2></div>
      <div class="panel about">
        <img src="icon-192.png" alt="" width="64" height="64">
        <div>
          <b>מאחורי הקלעים</b>
          <small>גרסה ${VERSION} · ${TOPICS.length} דברים ב־${CATEGORIES.length} תחומים · ${SIMS.size} הדמיות</small>
          <small class="dev">פיתוח: דודו טל</small>
        </div>
      </div>
      <div class="panel">
        <p>הסברים קצרים ומאוירים על איך דברים עובדים — מהמקרר ועד מופעי הירח. כל דבר עומד בפני עצמו: שאלת פתיחה, ארבעה שלבים של המנגנון, קצת היסטוריה, טעות נפוצה ושאלות בדיקה שחוזרות במרווחים הולכים וגדלים.</p>
        <p><b>פרטיות.</b> ההתקדמות, הרצף, החזרות והמועדפים נשמרים במכשיר בלבד, והאפליקציה עובדת גם בלי רשת. בפתיחה היא שואלת את השרת רק אם נדרש קישור הפעלה. למי שהפעיל קישור אישי, השרת רושם מתי האפליקציה נפתחה (יום ושעה) — ולא מה נקרא או נצפה בה.</p>
        <p><b>על התוכן.</b> הטקסטים והאיורים נוצרו בעזרת בינה מלאכותית. הפרטים ההיסטוריים נבדקו מול מקורות ותוקנו, אבל ייתכנו אי־דיוקים; ההסברים מפושטים בכוונה ואינם תחליף לספר לימוד או לייעוץ מקצועי.</p>
        <p class="muted">הגופן Heebo מופץ ברישיון Open Font License.</p>
        <button id="intro" class="link">הצגת מסך הפתיחה</button>
      </div>
    </section>`);

  const msg = (text, bad) => { const m = document.getElementById("msg"); m.hidden = false; m.textContent = text; m.classList.toggle("bad", !!bad); };
  const payload = () => JSON.stringify({ app: "behind-the-scenes", format: 1, exported: new Date().toISOString(), state }, null, 1);
  const restore = (raw) => {
    let next;
    try { next = importState(raw); } catch { return msg("הקובץ אינו גיבוי תקין של האפליקציה.", true); }
    const n = Object.keys(next.done).length;
    ask("שחזור גיבוי", `לשחזר גיבוי עם ${n} דברים שנקראו? ההתקדמות הנוכחית במכשיר תוחלף.`, "שחזור", () => {
      state = next; save(); renderSettings();
      toast(`הגיבוי שוחזר: ${n} דברים שנקראו`);
    });
  };
  document.getElementById("export").addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([payload()], { type: "application/json" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: `behind-the-scenes-backup-${dayKey()}.json` });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    msg("קובץ הגיבוי נשמר בתיקיית ההורדות.");
  });
  const file = document.getElementById("file");
  document.getElementById("import").addEventListener("click", () => file.click());
  file.addEventListener("change", async () => { if (file.files[0]) restore(await file.files[0].text()); file.value = ""; });
  document.getElementById("copy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(payload()); msg("הגיבוי הועתק. אפשר להדביק אותו בפתק או בהודעה לעצמך."); }
    catch { msg("ההעתקה נחסמה במכשיר הזה. אפשר להשתמש בשמירה לקובץ.", true); }
  });
  document.getElementById("paste").addEventListener("click", () => {
    sheet(`<h3>שחזור מטקסט</h3><p>מדביקים כאן את טקסט הגיבוי שהועתק.</p><textarea id="rawIn" aria-label="טקסט הגיבוי"></textarea>
      <div class="btn-row"><button class="btn sm" data-yes>שחזור</button><button class="btn sm ghost" data-close>ביטול</button></div>`,
      (ov, close) => ov.querySelector("[data-yes]").addEventListener("click", () => { const raw = ov.querySelector("#rawIn").value.trim(); close(); if (raw) restore(raw); }));
  });
  document.getElementById("reset").addEventListener("click", () => {
    ask("איפוס ההתקדמות", "למחוק את כל ההתקדמות, הרצף, החזרות והמועדפים? אי אפשר לבטל.", "איפוס", () => { state = EMPTY(); save(); renderSettings(); toast("ההתקדמות אופסה"); }, true);
  });
  document.getElementById("theme").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    try { localStorage.setItem("mk2-theme", b.dataset.v); } catch { /* מצב פרטי */ }
    window.applyTheme();
    b.parentNode.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  });
  document.getElementById("intro").addEventListener("click", () => { renderWelcome(); window.scrollTo(0, 0); });
}

// ---------- נגן ----------
function questionCard(label, q, onDone, extra = "") {
  return {
    html: `<div class="card">
        <span class="tag">${h(label)}</span>
        <h3>${h(q.q)}</h3>
        <div class="opts">${q.o.map((o, i) => `<button class="opt" data-i="${i}"><i>${LETTERS[i]}</i><span>${h(o)}</span></button>`).join("")}</div>
        <div class="reveal" hidden></div>
        ${extra}
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
            else x.classList.add("dim");
          });
          const r = root.querySelector(".reveal");
          r.hidden = false;
          r.className = `reveal ${ok ? "ok" : "no"}`;
          r.innerHTML = `<b>${ok ? "נכון" : "לא בדיוק"}</b><span>${h(q.x)}</span>`;
          r.scrollIntoView({ block: "nearest", behavior: "smooth" }); // ההסבר תמיד נראה, גם במסך נמוך
          onDone?.(ok);
          unlock();
        })
      );
    },
  };
}

function buildCards(t, scene, sim) {
  const cards = [questionCard("לפני שמתחילים", t.hook, null, filmLinks(t.id))];
  t.steps.forEach((s, i) =>
    cards.push({
      html: `<div class="card top">
          ${scene ? sceneSvg(scene, i + 1, `איור: ${s.t}`) : `<div class="big">${s.e}</div>`}
          <span class="tag">שלב ${i + 1} מתוך ${t.steps.length}</span>
          <h3>${h(s.t)}</h3>
          <p>${h(s.x)}</p>
          ${canSpeak ? `<button class="speak">${IC.speak} הקראה</button>` : ""}
        </div>`,
      bind(root) { root.querySelector(".speak")?.addEventListener("click", () => speak(`${s.t}. ${s.x}`)); },
    })
  );
  if (sim) cards.push({
    html: `<div class="card sim top">
        <span class="tag">${glyph(GLYPH.spark)} נסה בעצמך</span>
        <h3>${h(sim.title)}</h3>
        <div class="sim-root"></div>
        <p class="muted">${h(sim.hint)}</p>
      </div>`,
    bind(root) { sim.mount(root.querySelector(".sim-root")); },
  });
  if (t.history) cards.push({
    html: `<div class="card past">
        <span class="tag past-tag">${glyph(GLYPH.clock)} קצת היסטוריה</span>
        <p>${h(t.history)}</p>
      </div>`,
  });
  cards.push({
    html: `<div class="card myth">
        <span class="tag warn">טעות נפוצה</span>
        <blockquote>${h(t.myth.claim.replace(/\.$/, ""))}</blockquote>
        <div class="truth"><b>בפועל</b><p>${h(t.myth.truth)}</p></div>
      </div>`,
  });
  t.quiz.forEach((q) => cards.push(questionCard("בדיקת הבנה", q)));
  cards.push({
    end: true,
    html: `<div class="card end top">
        ${scene ? sceneSvg(scene, "all", `איור: ${t.title}`) : `<div class="big">${t.emoji}</div>`}
        <span class="tag done">${glyph(GLYPH.check)} סיימת · בשורה אחת</span>
        <h3>${h(t.take)}</h3>
        <p class="muted">שאלות הבדיקה יחזרו אליך מחר, ואחר כך במרווחים הולכים וגדלים.</p>
        <div class="end-acts"><button type="button" id="shareT" class="btn sm ghost">${glyph(GLYPH.share).replace("<svg", '<svg fill="currentColor"')} שיתוף</button></div>
        ${filmLinks(t.id)}
        <div id="upnext"></div>
      </div>`,
  });
  return cards;
}

const playerTop = (i, n, title, favId) => `
  <header class="p-top">
    <a class="icon-btn" href="${backTo}" aria-label="סגירה">${IC.close}</a>
    <div class="p-mid">
      <span class="p-title">${h(title)}</span>
      <div class="segs" role="progressbar" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${i + 1}">
        ${Array.from({ length: n }, (_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}
      </div>
    </div>
    ${favId ? `<button id="fav" class="icon-btn fav${state.favs[favId] ? " on" : ""}" aria-pressed="${!!state.favs[favId]}" aria-label="מועדפים">${glyph(GLYPH.mark)}</button>` : ""}
  </header>`;

// מקשי החיצים והחלקה לצדדים בנגן. בכיוון הקריאה מימין לשמאל: שמאלה = הלאה.
let playerNav = null; // { next(), back() } של המסך הפעיל
window.addEventListener("keydown", (e) => {
  if (!playerNav || e.target.closest?.("input,textarea") || document.querySelector(".ov")) return;
  if (e.key === "ArrowLeft") playerNav.next(); else if (e.key === "ArrowRight") playerNav.back();
});
let sx = 0, sy = 0, sOk = false;
app.addEventListener("touchstart", (e) => {
  sOk = !!playerNav && e.touches.length === 1 && !!e.target.closest(".stage") && !e.target.closest(".sim-root,input,.rail");
  if (sOk) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }
}, { passive: true });
app.addEventListener("touchend", (e) => {
  if (!sOk || !playerNav) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 60 && Math.abs(dx) > 2 * Math.abs(dy)) { if (dx > 0) playerNav.next(); else playerNav.back(); }
}, { passive: true });

async function renderTopic(id) {
  const t = byId[id];
  if (!t) return (location.hash = "#/");
  if (!openT(t)) {
    app.className = "player";
    app.innerHTML = `${playerTop(0, 1, t.title)}
      <main class="stage"><div class="card center-card">${badge(CAT_GLYPH[t.cat], `c-${t.cat} lg`)}
        <h3>${h(t.title)}</h3><p class="muted">התחום ״${h(catName[t.cat])}״ לא כלול בקישור ההפעלה שלך.</p></div></main>
      <nav class="p-nav"><a class="btn" href="#/lib">לספרייה ${IC.fwd}</a></nav>`;
    return;
  }
  const [scene, sim] = await Promise.all([loadScene(id), loadSim(id)]);
  if (!location.hash.startsWith(`#/t/${id}`)) return; // המשתמש כבר עבר למסך אחר
  const cards = buildCards(t, scene, sim);
  // ממשיכים מהשלב שבו נעצרנו בפעם הקודמת
  let i = state.pos?.id === id && !state.done[id] ? Math.max(0, Math.min(state.pos.i, cards.length - 2)) : 0, dir = 1;
  app.className = `player c-${t.cat}`;

  function finish() {
    state.done[t.id] = dayKey();
    t.quiz.forEach((_, qi) => {
      const k = `${t.id}:${qi}`;
      if (!state.srs[k]) state.srs[k] = { box: 0, due: addDays(1) };
    });
    state.pos = null;
    touchStreak();
    save();
  }
  const go = (d) => {
    if (d > 0 && (i >= cards.length - 1 || cards[i].locked)) return;
    if (d < 0 && i === 0) return;
    i += d; dir = d; show();
  };
  playerNav = { next: () => go(1), back: () => go(-1) };

  function show() {
    const c = cards[i];
    const last = i === cards.length - 1;
    if (c.end) finish();
    else if (i > 0 && !state.done[t.id]) { state.pos = { id: t.id, i, n: cards.length }; save(); }
    // "הבא": הדבר הבא שלא נקרא אחרי הנוכחי — קודם באותו תחום, ואז בתחומים הבאים
    const at = ORDERED.indexOf(t);
    const next = [...ORDERED.slice(at + 1), ...ORDERED.slice(0, at)].find((x) => !state.done[x.id] && x.id !== t.id && openT(x));
    app.innerHTML = `
      ${playerTop(i, cards.length, t.title, t.id)}
      <main class="stage">${c.html}</main>
      <nav class="p-nav">
        <button id="back" class="back" ${i === 0 ? "disabled" : ""}>הקודם</button>
        ${last
          ? `<a class="icon-btn home-btn" href="#/" aria-label="לדף הבית">${glyph(CAT_GLYPH.home)}</a>
             <a class="btn" href="${next ? `#/t/${next.id}` : "#/lib"}">${next ? "לדבר הבא" : "לספרייה"} ${IC.fwd}</a>`
          : `<button id="next" class="btn" ${c.locked ? "disabled" : ""}>המשך ${IC.fwd}</button>`}
      </nav>`;
    if (dir < 0) app.querySelector(".card")?.classList.add("rev");
    const unlock = () => { c.locked = false; const n = document.getElementById("next"); if (n) n.disabled = false; };
    c.bind?.(app.querySelector(".stage"), unlock);
    const fav = document.getElementById("fav");
    fav.addEventListener("click", () => {
      if (state.favs[t.id]) delete state.favs[t.id]; else state.favs[t.id] = dayKey();
      save();
      fav.classList.toggle("on", !!state.favs[t.id]);
      fav.setAttribute("aria-pressed", !!state.favs[t.id]);
      toast(state.favs[t.id] ? "נשמר במועדפים" : "הוסר מהמועדפים");
    });
    document.getElementById("shareT")?.addEventListener("click", () => share(t.title, `${t.title}: ${t.take}`, `#/t/${t.id}`));
    const up = document.getElementById("upnext");
    if (up && next) up.innerHTML = `<a class="upnext c-${next.cat}" href="#/t/${next.id}">
        ${catBadge(next.cat, "sm")}
        <span class="row-text"><small>${next.cat === t.cat ? "הבא בתחום" : "הבא"} · ${h(catName[next.cat])}</small><b>${h(next.title)}</b></span>
        ${IC.fwd}</a>`;
    document.getElementById("back").addEventListener("click", () => go(-1));
    document.getElementById("next")?.addEventListener("click", () => go(1));
    window.scrollTo(0, 0);
    app.querySelector(".stage").scrollTop = 0;
    if (canSpeak) speechSynthesis.cancel();
  }
  show();
}

// ---------- חזרה מרווחת ----------
function renderReview() {
  const queue = dueCards();
  const total = Object.keys(state.srs).length;
  const intro = (title, text, action) => page("me", `
    <header class="page-head"><div class="lead">${backLink("#/me")}<h1>חזרה</h1></div></header>
    <div class="center">
      ${badge(GLYPH.loop, "c-review lg")}
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
      `<a class="btn" href="#/lib">לספרייה ${IC.fwd}</a>`);
  }
  intro(`${queue.length} שאלות מחכות לך`, "כמה דקות של חזרה על מה שכבר קראת. מה שתדע יחזור בעוד זמן רב יותר; מה שלא — מחר.",
    `<button id="start" class="btn">להתחיל ${IC.fwd}</button>`);
  document.getElementById("start").addEventListener("click", () => runReview(queue));
}

function runReview(queue) {
  let i = 0, right = 0;
  app.className = "player c-review";
  function show() {
    if (i >= queue.length) {
      touchStreak(); save();
      app.innerHTML = `${playerTop(0, 1, "חזרה")}
        <main class="stage"><div class="card end center-card">${badge(GLYPH.check, "c-done lg")}
        <h3>${right} מתוך ${queue.length} נכונות</h3>
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
      <nav class="p-nav"><button id="next" class="btn" disabled>המשך ${IC.fwd}</button></nav>`;
    card.bind(app.querySelector(".stage"), () => (document.getElementById("next").disabled = false));
    document.getElementById("next").addEventListener("click", () => { i++; show(); });
    window.scrollTo(0, 0);
  }
  show();
}

// ---------- ניתוב ----------
function route() {
  const [, view, id, sub] = location.hash.split("/");
  playerNav = null;
  document.querySelector(".ov")?.remove();
  if (view !== "t" && !seenIntro()) { renderWelcome(); window.scrollTo(0, 0); return; }
  if (view === "t" && sub === "v" && filmsOf(id).length) { location.replace(`#/feed/${filmsOf(id)[0].vid}`); return; }
  if (view === "t") renderTopic(id);
  else {
    backTo = location.hash || "#/";
    if (view === "lib") renderLibrary(id);
    else if (view === "review" && allowed("review")) renderReview();
    else if (view === "review") renderMe();
    else if (view === "me") renderMe();
    else if (view === "settings") renderSettings();
    else if (view === "feed" && allowed("feed")) renderFeed(id);
    else renderHome();
  }
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();
// קישור הפעלה: כשהמתגים של הקישור משתנים, מציירים מחדש את המסך (לא באמצע נושא או חזרה)
let sig = permSig();
onLicenseChange(() => { const s = permSig(); if (s !== sig) { sig = s; if (!app.classList.contains("player")) route(); } });
initLicense();

// עדכון אוטומטי: כשגרסה חדשה מותקנת ברקע, האפליקציה נטענת מחדש בפעם הבאה שנמצאים במסך הבית
// (לא באמצע נושא או חזרה). בודקים אם יש גרסה חדשה בכל חזרה לאפליקציה ובכל מעבר לבית.
if ("serviceWorker" in navigator) {
  const sw = navigator.serviceWorker;
  const hadController = !!sw.controller;
  const onHome = () => { const v = location.hash.split("/")[1]; return !v && app.className !== "welcome"; };
  let reg = null, pending = false, lastCheck = 0;
  const check = () => {
    if (pending && onHome() && document.visibilityState === "visible") { pending = false; location.reload(); return; }
    if (reg && Date.now() - lastCheck > 60000) { lastCheck = Date.now(); reg.update().catch(() => {}); }
  };
  sw.register("./sw.js").then((r) => { reg = r; lastCheck = Date.now(); }).catch(() => {});
  sw.addEventListener("controllerchange", () => { if (hadController) { pending = true; check(); } });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") check(); });
  window.addEventListener("hashchange", check);
}
