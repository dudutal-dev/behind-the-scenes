// הגרסה שבתיקייה הזאת עברה לכתובת הראשית. ה-service worker הזה רק מסיר את עצמו.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  const ks = await caches.keys(); await Promise.all(ks.filter((k) => k.startsWith("mk2-")).map((k) => caches.delete(k)));
  await self.registration.unregister();
  (await self.clients.matchAll()).forEach((c) => c.navigate(c.url));
})()));
