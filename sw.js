// מטמון לעבודה בלי רשת. מעלים את המספר בכל שינוי בקבצים.
const CACHE = "eich-ze-oved-v2";
const SCENES = ["fridge", "microwave", "induction", "solar-heater", "airplane", "ev-brake", "elevator", "gps", "touch", "wifi", "qr", "nfc", "https", "llm", "grid", "pv", "desal", "bridge", "lightning", "rainbow", "vaccine"];
const FILES = [
  "./", "index.html", "app.js", "content.js", "manifest.webmanifest", "icon.svg", "scenes/scene.css",
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
