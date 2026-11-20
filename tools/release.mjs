// לפני כל העלאה: node tools/release.mjs
// מעלה את מספר המטמון ב-sw.js (כך האפליקציות המותקנות מתעדכנות לבד), ומוודא שכל איור והדמיה רשומים בו.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
const root = new URL("../", import.meta.url);
let sw = readFileSync(new URL("sw.js", root), "utf8");
const m = /const CACHE = "eich-ze-oved-v(\d+)";/.exec(sw);
if (!m) throw new Error("CACHE לא נמצא ב-sw.js");
sw = sw.replace(m[0], `const CACHE = "eich-ze-oved-v${+m[1] + 1}";`);
writeFileSync(new URL("sw.js", root), sw);
const ids = (dir, skip) => readdirSync(new URL(dir, root)).filter((f) => f.endsWith(".js") && !skip.includes(f)).map((f) => f.slice(0, -3));
const missing = [...ids("scenes/", []), ...ids("sims/", ["index.js", "kit.js"])].filter((id) => !sw.includes(`"${id}"`));
console.log(`release: מטמון v${+m[1] + 1}`);
if (missing.length) { console.error("חסרים ב-sw.js:", missing.join(", ")); process.exit(1); }
