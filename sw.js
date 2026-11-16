// מטמון לעבודה בלי רשת. מעלים את המספר בכל שינוי בקבצים.
const CACHE = "eich-ze-oved-v54";
// בהתקנה מביאים את הקבצים ישר מהרשת (cache: "reload"), כדי שגרסה חדשה לא תיבנה מעותקים ישנים של הדפדפן.
const SCENES = [
  "pyramids", "machupicchu", "greatwall", "colosseum", "pantheon", "petra", "stonehenge", "tajmahal", "pisa", "panama", "burj", "siloam",
  "fridge", "microwave", "induction", "solar-heater", "airplane", "ev-brake", "elevator", "gps", "touch", "wifi", "qr", "nfc", "https", "llm", "grid", "pv", "desal", "bridge", "lightning", "rainbow", "vaccine", "engine", "gearbox", "abs", "electricity", "acdc", "battery", "emotor", "led", "rcd", "wind", "nuclear", "toilet", "lock", "quartz", "cellular", "camera", "anc", "quake", "tides", "heart",
  "airbag", "jet", "ac", "pressure", "smoke", "screen", "fingerprint", "flash", "speaker", "transformer", "fiber", "watertower", "wastewater", "seasons", "eye", "rain", "antibiotics",
  "rocket", "orbit", "eclipse", "sun", "moon", "lungs", "digestion", "neuron", "ear", "xray",
  "internet", "search", "cpu", "blockchain", "compression", "washer", "dishwasher", "soap",
  "press", "steam", "telegraph", "telephone", "bulb", "radio", "phonograph", "photo", "transistor", "telescope",
  "neural", "training", "imagegen", "recommend", "facerec", "selfdrive", "speech", "translate",
  "quantum", "crispr", "mrna", "fusion", "print3d", "drone", "vr", "mri",
  "brain", "memory", "sleep", "reward",
  "mdma", "psilocybin", "lsd",
  "bow", "trebuchet", "gunpowder", "rifle", "machinegun", "tank", "submarine", "bodyarmor", "radar", "irondome", "stealth", "atomicbomb",
  "blackhole", "bigbang", "jwst", "iss", "hurricane", "volcano", "ship", "cardpay",
  "tsunami", "tornado", "geyser", "aurora", "bluesky", "snowflake", "mirage", "bioluminescence",
  "fertilization", "pregnancy", "birth", "ivf", "dna", "heredity", "twins", "evolution",
  "ev", "hybrid", "turbo", "catalytic", "differential", "clutch", "steering", "suspension", "tires", "crumple", "adas", "assemblyline",
];
const FILES = [
  "./", "index.html", "app.js", "content.js", "content-more.js", "content-extra.js", "content-inventions.js", "history.js", "content-wave3.js", "content-ai-a.js", "content-ai-b.js", "content-frontier-a.js", "content-frontier-b.js", "content-brain-a.js", "content-brain-b.js", "content-psy-mdma.js", "content-psy-mushrooms.js", "content-psy-lsd.js", "content-arms-a.js", "content-arms-b.js", "content-arms-c.js", "content-space2.js", "content-mix2.js", "content-nature2-a.js", "content-nature2-b.js", "content-life-a.js", "content-life-b.js", "content-cars-a.js", "content-cars-b.js", "content-cars-c.js", "content-wonders-a.js", "content-wonders-b.js", "manifest.webmanifest", "icon.svg", "sims/index.js", "sims/kit.js", ...["electricity", "transformer", "gearbox", "wind", "pressure", "anc", "orbit", "moon", "seasons", "lock", "telescope", "screen", "engine", "airplane", "gps", "elevator", "acdc", "battery", "led", "pv", "speaker", "nuclear", "heart", "cpu", "rocket", "tides", "eclipse", "rainbow", "brain", "mdma", "psilocybin", "lsd", "trebuchet", "submarine", "irondome", "blackhole", "ship", "tsunami", "bluesky", "pregnancy", "heredity", "ev", "differential", "suspension", "abs"].map((id) => `sims/${id}.js`), "icon-180.png", "icon-192.png", "icon-512.png", "scenes/scene.css",
  "fonts/heebo-hebrew-wght-normal.woff2", "fonts/heebo-latin-wght-normal.woff2",
  ...SCENES.map((id) => `scenes/${id}.js`),
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// קודם מהמטמון, ובמקביל מרעננים מהרשת לפעם הבאה.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  // סרטונים: ישר מהרשת (הדפדפן מבקש אותם בחלקים, והמטמון לא מתאים לזה)
  if (new URL(e.request.url).pathname.includes("/videos/")) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const fresh = fetch(e.request)
        .then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
