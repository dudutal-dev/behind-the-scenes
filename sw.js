// מטמון לעבודה בלי רשת. מעלים את המספר בכל שינוי בקבצים.
const CACHE = "eich-ze-oved-v15";
const SCENES = [
  "fridge", "microwave", "induction", "solar-heater", "airplane", "ev-brake", "elevator", "gps", "touch", "wifi", "qr", "nfc", "https", "llm", "grid", "pv", "desal", "bridge", "lightning", "rainbow", "vaccine", "engine", "gearbox", "abs", "electricity", "acdc", "battery", "emotor", "led", "rcd", "wind", "nuclear", "toilet", "lock", "quartz", "cellular", "camera", "anc", "quake", "tides", "heart",
  "airbag", "jet", "ac", "pressure", "smoke", "screen", "fingerprint", "flash", "speaker", "transformer", "fiber", "watertower", "wastewater", "seasons", "eye", "rain", "antibiotics",
  "rocket", "orbit", "eclipse", "sun", "moon", "lungs", "digestion", "neuron", "ear", "xray",
  "internet", "search", "cpu", "blockchain", "compression", "washer", "dishwasher", "soap",
  "press", "steam", "telegraph", "telephone", "bulb", "radio", "phonograph", "photo", "transistor", "telescope",
];
const FILES = [
  "./", "index.html", "app.js", "content.js", "content-more.js", "content-extra.js", "content-inventions.js", "history.js", "content-wave3.js", "manifest.webmanifest", "icon.svg", "sims/index.js", "sims/kit.js", ...["electricity", "transformer", "gearbox", "wind", "pressure", "anc", "orbit", "moon", "seasons", "lock", "telescope", "screen"].map((id) => `sims/${id}.js`), "icon-180.png", "icon-192.png", "icon-512.png", "scenes/scene.css",
  "fonts/heebo-hebrew-wght-normal.woff2", "fonts/heebo-latin-wght-normal.woff2",
  ...SCENES.map((id) => `scenes/${id}.js`),
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
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
