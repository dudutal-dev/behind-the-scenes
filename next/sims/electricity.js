// זרם חשמלי: משנים מתח והתנגדות, ורואים את הזרם, את מהירות האלקטרונים ואת עוצמת הנורה.
import { range, readouts, wire, out, fmt, clamp, loop } from "./kit.js";

const LOOP = "M52 60H268V150H52Z"; // המעגל, בכיוון תנועת האלקטרונים (מהמינוס אל הפלוס)

export default {
  title: "שחק עם המתח וההתנגדות",
  hint: "מתח גבוה יותר דוחף חזק יותר; התנגדות גבוהה יותר בולמת. הזרם הוא המתח חלקי ההתנגדות.",
  mount(root) {
    root.innerHTML = `
      <svg class="scene sim-stage" viewBox="0 0 320 200" role="img" aria-label="מעגל חשמלי עם סוללה, נגד ונורה">
        <path id="wire" class="wire st-ink" style="stroke-width:3" d="${LOOP}"/>
        <!-- סוללה -->
        <rect class="fl-bg" x="38" y="84" width="28" height="42"/>
        <rect class="body" x="40" y="86" width="24" height="38" rx="4"/>
        <rect class="fl-warm" x="42" y="88" width="20" height="10" rx="2"/>
        <text x="52" y="97" class="sm" style="stroke:none;fill:#fff">+</text>
        <text x="52" y="117" class="sm">−</text>
        <text id="vlab" x="24" y="109" class="lg">6V</text>
        <!-- נגד -->
        <rect class="fl-bg" x="126" y="50" width="68" height="20"/>
        <path id="res" class="wire st-hot" style="stroke-width:3" d="M128 60l6-9 10 18 10-18 10 18 10-18 10 18 6-9"/>
        <text id="rlab" x="160" y="40">8Ω</text>
        <!-- נורה -->
        <circle id="glow" class="fl-elec" cx="268" cy="105" r="30" opacity="0"/>
        <circle class="fl-bg" cx="268" cy="105" r="15"/>
        <circle class="body" cx="268" cy="105" r="15"/>
        <path class="wire st-ink" style="stroke-width:2" d="M260 112l5-13 3 9 3-9 5 13"/>
        <text id="note" x="160" y="186" class="sm"></text>
        <g id="dots" class="fl-elec st-ink" stroke-width=".8"></g>
      </svg>
      ${readouts([{ id: "i", label: "זרם (אמפר)" }, { id: "p", label: "הספק בנורה (ואט)" }])}
      ${range({ id: "v", label: "מתח", min: 1, max: 12, value: 6 })}
      ${range({ id: "r", label: "התנגדות", min: 1, max: 24, value: 8 })}`;

    const path = root.querySelector("#wire");
    const len = path.getTotalLength();
    const dots = root.querySelector("#dots");
    const N = 16;
    dots.innerHTML = Array.from({ length: N }, () => `<circle r="3.2"/>`).join("");
    const els = [...dots.children];
    let offset = 0, current = 0;

    wire(root, ({ v, r }) => {
      current = v / r;
      const power = v * current;
      out(root, "v-out", `${v} וולט`);
      out(root, "r-out", `${r} אוהם`);
      out(root, "i", fmt(current, 2));
      out(root, "p", fmt(power, 1));
      out(root, "vlab", `${v}V`);
      out(root, "rlab", `${r}Ω`);
      root.querySelector("#glow").setAttribute("opacity", clamp(power / 36, 0, 1).toFixed(2));
      root.querySelector("#res").style.strokeWidth = clamp(1.5 + r / 6, 1.5, 5.5);
      out(root, "note", power > 60 ? "זרם גבוה מאוד: החוטים מתחממים" : current < 0.3 ? "זרם חלש: הנורה כמעט כבויה" : "");
    });

    loop(root, (dt) => {
      offset = (offset + dt * current * 26) % len; // מהירות האלקטרונים יחסית לזרם
      els.forEach((c, k) => {
        const p = path.getPointAtLength((offset + (k * len) / N) % len);
        c.setAttribute("cx", p.x);
        c.setAttribute("cy", p.y);
      });
    });
  },
};
