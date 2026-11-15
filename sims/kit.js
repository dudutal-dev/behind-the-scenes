// ערכת עזר להדמיות. כל הדמיה היא קובץ sims/<id>.js שמייצא:
//   export default { title, hint, mount(root) }
// mount בונה בתוך root איור SVG ופקדים, ומעדכן את האיור בכל שינוי.

// מחוון: מחזיר HTML. את הערך המוצג ליד המחוון מעדכנים עם out().
export const range = ({ id, label, min, max, step = 1, value }) => `
  <label class="sim-ctl">
    <span>${label}</span>
    <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
    <output id="${id}-out"></output>
  </label>`;

// בחירה בין כמה אפשרויות (כפתורים צמודים).
export const choice = ({ id, label, options, value }) => `
  <div class="sim-ctl seg">
    <span>${label}</span>
    <div class="seg-btns" data-id="${id}" role="group" aria-label="${label}">
      ${options.map((o) => `<button type="button" data-v="${o.v}" aria-pressed="${String(o.v) === String(value)}">${o.label}</button>`).join("")}
    </div>
  </div>`;

// שורת נתונים: [{ id, label }] — את הערכים מעדכנים עם out().
export const readouts = (items) => `
  <div class="sim-read">${items.map((r) => `<div><b id="${r.id}">–</b><span>${r.label}</span></div>`).join("")}</div>`;

// מחבר את הפקדים: קורא את כל הערכים וקורא ל-update(values) עכשיו ובכל שינוי.
export function wire(root, update) {
  const read = () => {
    const v = {};
    root.querySelectorAll('input[type="range"]').forEach((i) => (v[i.id] = +i.value));
    root.querySelectorAll(".seg-btns").forEach((g) => (v[g.dataset.id] = g.querySelector('[aria-pressed="true"]')?.dataset.v));
    return v;
  };
  const run = () => update(read());
  root.addEventListener("input", run);
  root.addEventListener("click", (e) => {
    const b = e.target.closest(".seg-btns button");
    if (!b) return;
    b.parentNode.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    run();
  });
  run();
  return run;
}

export const out = (root, id, text) => { const el = root.querySelector(`#${id}`); if (el) el.textContent = text; };
export const fmt = (n, digits = 1) => Number(n).toLocaleString("he-IL", { maximumFractionDigits: digits });
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// לולאת אנימציה שנעצרת מעצמה כשההדמיה יורדת מהמסך. fn מקבל את הזמן שעבר בשניות.
export function loop(root, fn) {
  let last = performance.now();
  const tick = (now) => {
    if (!root.isConnected) return;
    fn(Math.min(0.05, (now - last) / 1000), now / 1000);
    last = now;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// גרירה באצבע או בעכבר על רכיב SVG: fn מקבל נקודה בקואורדינטות של ה-viewBox.
export function drag(svg, fn) {
  const at = (e) => {
    const p = svg.createSVGPoint();
    p.x = e.clientX; p.y = e.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  };
  let down = false;
  svg.style.touchAction = "none";
  svg.addEventListener("pointerdown", (e) => { down = true; svg.setPointerCapture(e.pointerId); fn(at(e), "start"); });
  svg.addEventListener("pointermove", (e) => { if (down) fn(at(e), "move"); });
  const up = () => { down = false; };
  svg.addEventListener("pointerup", up);
  svg.addEventListener("pointercancel", up);
}
