// בדיקת עשן: עובר על כל המסכים בשתי הערכות, נכשל על שגיאת קונסול, ושומר צילומי מסך.
// שימוש: node tools/smoke.cjs [תיקיית צילומים]   (דורש Playwright)
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), OUT = process.argv[2] || path.join(ROOT, ".shots");
const TYPES = { html: "text/html", js: "text/javascript", css: "text/css", json: "application/json", webmanifest: "application/manifest+json", svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", woff2: "font/woff2", mp4: "video/mp4" };
const SEED = { done: { fridge: "2026-01-01", gps: "2026-01-01" }, srs: { "fridge:0": { box: 0, due: "2026-01-02" } }, favs: { gps: "2026-01-01" }, vseen: {}, pos: null, streak: { last: "", count: 0 } };
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch(), errs = [];
  for (const theme of ["light", "dark"]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: "he-IL" });
    await ctx.route("http://bts.local/**", (r) => {
      let f = decodeURIComponent(new URL(r.request().url()).pathname); if (f === "/") f = "/index.html";
      const fp = path.join(ROOT, f);
      if (f === "/sw.js" || !fs.existsSync(fp)) return r.fulfill({ status: 404, body: "" });
      r.fulfill({ status: 200, contentType: TYPES[fp.split(".").pop()] || "application/octet-stream", body: fs.readFileSync(fp) });
    });
    // שרת קישורי ההפעלה: בבדיקה עונים במקומו "האפליקציה פתוחה לכולם"
    await ctx.route("https://lohem-reminders.dudu-tal.workers.dev/**", (r) => r.fulfill({ status: 200, contentType: "application/json", headers: { "Access-Control-Allow-Origin": "*" }, body: '{"enforce":false}' }));
    const p = await ctx.newPage();
    p.on("console", (m) => { if (m.type() === "error") errs.push(`${theme}: ${m.text()}`); });
    p.on("pageerror", (e) => errs.push(`${theme}: ${e.message}`));
    await p.goto("http://bts.local/");
    await p.evaluate(([t, s]) => { localStorage.setItem("eich-ze-oved-intro", "1"); localStorage.setItem("eich-ze-oved-theme", t); localStorage.setItem("eich-ze-oved-v1", JSON.stringify(s)); }, [theme, SEED]);
    const go = async (hash, name, after) => {
      await p.goto("http://bts.local/" + hash); await p.reload(); await p.waitForTimeout(900);
      if (after) await after();
      await p.screenshot({ path: path.join(OUT, `${theme}-${name}.png`) });
    };
    for (const [hash, name] of [["#/", "home"], ["#/feed", "feed"], ["#/lib", "lib"], ["#/lib/fav", "fav"], ["#/me", "me"], ["#/review", "review"], ["#/settings", "settings"]]) await go(hash, name);
    // נושא שלם: שאלת פתיחה, כל השלבים, שאלות הבדיקה ומסך הסיום
    await go("#/t/engine", "topic-end", async () => {
      for (let n = 0; n < 40 && !(await p.$(".card.end")); n++) {
        if (await p.$(".opt:not(:disabled)")) await p.click(".opt:not(:disabled)");
        await p.click("#next"); await p.waitForTimeout(120);
      }
      if (!(await p.$(".card.end"))) errs.push(`${theme}: הנושא לא הגיע למסך הסיום`);
    });
    await ctx.close();
  }
  await b.close();
  if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
  console.log("smoke: תקין ·", OUT);
})();
