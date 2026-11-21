// לפני כל העלאה: node tools/release.mjs
// מעלה את מספר המטמון ב-sw.js (כך האפליקציות המותקנות מתעדכנות לבד), ומוודא שכל איור והדמיה רשומים בו.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
// node tools/release.mjs next  ← הגרסה החדשה שבתיקייה next/ (מטמון mk2-vN)
const sub = process.argv[2] === "next" ? "next/" : "";
const root = new URL("../" + sub, import.meta.url);
const PFX = sub ? "mk2" : "eich-ze-oved";
let sw = readFileSync(new URL("sw.js", root), "utf8");
const m = new RegExp(`const CACHE = "${PFX}-v(\\d+)";`).exec(sw);
if (!m) throw new Error("CACHE לא נמצא ב-sw.js");
sw = sw.replace(m[0], `const CACHE = "${PFX}-v${+m[1] + 1}";`);
writeFileSync(new URL("sw.js", root), sw);
const ids = (dir, skip) => readdirSync(new URL(dir, root)).filter((f) => f.endsWith(".js") && !skip.includes(f)).map((f) => f.slice(0, -3));
const missing = [...ids("scenes/", []), ...ids("sims/", ["index.js", "kit.js"])].filter((id) => !sw.includes(`"${id}"`));
console.log(`release: ${sub || "ראשי"} מטמון v${+m[1] + 1}`);
if (missing.length) { console.error("חסרים ב-sw.js:", missing.join(", ")); process.exit(1); }
