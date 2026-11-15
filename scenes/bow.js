// קשת וחץ: 1 מתיחה ואגירת אנרגיה (עקומת כוח) · 2 שחרור, החץ יוצא · 3 קשת מורכבת וקצה רפלקסי · 4 נוצות מייצבות ומסובבות את החץ
export default `
<defs>
  <marker id="bow-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="bow-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="bow-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <clipPath id="bow-clip"><rect x="178" y="30" width="0" height="90"><animate attributeName="width" values="0;122;122;0" keyTimes="0;.55;.9;1" dur="3s" repeatCount="indefinite"/></rect></clipPath>
</defs>

<!-- שלב 1: מותחים לאט, הזרועות מתכופפות -->
<g class="only-1">
  <path class="fl-none st-ink" stroke-width="7" stroke-linecap="round" d="M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198">
    <animate attributeName="d" dur="3s" repeatCount="indefinite" keyTimes="0;.55;.9;1" values="M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198"/>
  </path>
  <path class="fl-none st-warm" stroke-width="4" stroke-linecap="round" d="M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198">
    <animate attributeName="d" dur="3s" repeatCount="indefinite" keyTimes="0;.55;.9;1" values="M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198"/>
  </path>
  <!-- הצד החיצוני נמתח, הפנימי נדחס -->
  <g>
    <path class="fl-none st-hot" stroke-width="2" stroke-dasharray="3 3" d="M96 40Q110 70 117 110Q110 150 96 180"/>
    <path class="fl-none st-cold" stroke-width="2" stroke-dasharray="3 3" d="M84 46Q100 74 106 110Q100 146 84 174"/>
    <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.3;.55;.9;1" dur="3s" repeatCount="indefinite"/>
  </g>
  <path class="wire st-ink" style="stroke-width:1.4" d="M86 34L86 110L86 186">
    <animate attributeName="d" dur="3s" repeatCount="indefinite" keyTimes="0;.55;.9;1" values="M86 34L86 110L86 186;M76 46L40 110L76 174;M76 46L40 110L76 174;M86 34L86 110L86 186"/>
  </path>
  <g>
    <animateTransform attributeName="transform" type="translate" dur="3s" repeatCount="indefinite" keyTimes="0;.55;.9;1" values="0 0;-46 0;-46 0;0 0"/>
    <path class="fl-none st-ink" stroke-width="2.2" d="M86 110H170"/>
    <path class="fl-dark st-ink" stroke-width="1" d="M168 105L180 110L168 115z"/>
    <path class="fl-hot" d="M88 110L94 104H104L100 110zM88 110L94 116H104L100 110z"/>
  </g>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="108" y="100" width="9" height="20" rx="3"/>
  <text x="30" y="138" style="fill:var(--s-cold)">צד פנימי</text>
  <text x="30" y="152" style="fill:var(--s-cold)">נדחס</text>
  <text x="146" y="138" style="fill:var(--s-hot)">צד חיצוני</text>
  <text x="146" y="152" style="fill:var(--s-hot)">נמתח</text>
  <!-- עקומת כוח-מתיחה: האנרגיה היא השטח שמתחתיה -->
  <path class="fl-warm" style="opacity:.55" clip-path="url(#bow-clip)" d="M180 112Q240 82 298 52V112Z"/>
  <path class="wire st-warm" clip-path="url(#bow-clip)" d="M180 112Q240 82 298 52"/>
  <path class="thin st-ink" d="M180 34V112H304" marker-end="url(#bow-a)"/>
  <path class="thin st-ink" d="M180 112V32" marker-end="url(#bow-a)"/>
  <text x="194" y="26" class="sm">כוח</text>
  <text x="280" y="126" class="sm">אורך המתיחה</text>
  <text x="256" y="106" class="sm">אנרגיה שנאגרה</text>
</g>

<!-- שלב 2: שחרור. הזרועות מתיישרות והמיתר דוחף את החץ -->
<g class="only-2">
  <path class="fl-none st-ink" stroke-width="7" stroke-linecap="round" d="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186">
    <animate attributeName="d" dur="2.4s" repeatCount="indefinite" keyTimes="0;.35;.42;1" values="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198"/>
  </path>
  <path class="fl-none st-warm" stroke-width="4" stroke-linecap="round" d="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186">
    <animate attributeName="d" dur="2.4s" repeatCount="indefinite" keyTimes="0;.35;.42;1" values="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198;M92 22Q84 26 86 34Q104 62 112 110Q104 158 86 186Q84 194 92 198"/>
  </path>
  <path class="wire st-ink" style="stroke-width:1.4" d="M76 46L40 110L76 174">
    <animate attributeName="d" dur="2.4s" repeatCount="indefinite" keyTimes="0;.35;.42;.48;.54;.6;1" values="M76 46L40 110L76 174;M76 46L40 110L76 174;M86 34L93 110L86 186;M86 34L81 110L86 186;M86 34L88 110L86 186;M86 34L86 110L86 186;M86 34L86 110L86 186"/>
  </path>
  <g>
    <animateTransform attributeName="transform" type="translate" dur="2.4s" repeatCount="indefinite" keyTimes="0;.35;.42;.7;1" values="-46 0;-46 0;0 0;240 0;240 0"/>
    <path class="fl-none st-ink" stroke-width="2.2" d="M86 110H170"/>
    <path class="fl-dark st-ink" stroke-width="1" d="M168 105L180 110L168 115z"/>
    <path class="fl-hot" d="M88 110L94 104H104L100 110zM88 110L94 116H104L100 110z"/>
  </g>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="108" y="100" width="9" height="20" rx="3"/>
  <g class="st-warm" stroke-width="2" fill="none" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.4;.48;.7;1" dur="2.4s" repeatCount="indefinite"/>
    <path d="M190 100H290M200 120H300M215 92H260M215 128H270"/>
  </g>
  <text x="32" y="140">הזרועות</text>
  <text x="32" y="154">מתיישרות</text>
  <text x="244" y="76">האנרגיה עוברת לחץ</text>
</g>

<!-- שלבים 3, 4 ומבט כולל: קשת דרוכה -->
<g class="from-3">
  <g class="hl-3">
    <path class="fl-none st-ink" stroke-width="7" stroke-linecap="round" d="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186"/>
    <path class="fl-none st-warm" stroke-width="4" stroke-linecap="round" d="M84 34Q74 38 76 46Q104 70 112 110Q104 150 76 174Q74 182 84 186"/>
    <rect class="fl-dark st-ink" stroke-width="1.5" x="108" y="100" width="9" height="20" rx="3"/>
  </g>
  <path class="wire st-ink" style="stroke-width:1.4" d="M76 46L40 110L76 174"/>
  <path class="fl-none st-ink" stroke-width="2.2" d="M40 110H124"/>
  <path class="fl-dark st-ink" stroke-width="1" d="M122 105L134 110L122 115z"/>
  <path class="fl-hot" d="M42 110L48 104H58L54 110zM42 110L48 116H58L54 110z"/>
</g>

<!-- שלב 3: חתך בזרוע של קשת מורכבת -->
<g class="only-3">
  <circle class="ring st-violet" cx="80" cy="40" r="14"/>
  <text x="40" y="20">קצה מעוקל</text>
  <path class="thin st-ink" style="stroke-dasharray:2 3" d="M108 80L188 54"/>
  <circle class="fl-ink" cx="108" cy="80" r="2.5"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="190" y="40" width="30" height="56" rx="6"/>
  <rect class="fl-warm st-ink" stroke-width="1.5" x="220" y="40" width="34" height="56"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="254" y="40" width="28" height="56" rx="6"/>
  <path class="thin st-ink" style="stroke-width:1" d="M260 46V90M266 46V90M272 46V90M277 46V90"/>
  <path class="thin st-ink" style="stroke-width:1;opacity:.5" d="M226 50Q237 56 248 50M226 68Q237 74 248 68M226 86Q237 92 248 86"/>
  <text x="205" y="110">קרן</text>
  <text x="237" y="110">עץ</text>
  <text x="268" y="110">גידים</text>
  <g class="pulse">
    <path class="arrow st-cold" d="M188 130H200" marker-end="url(#bow-c)"/>
    <path class="arrow st-cold" d="M222 130H210" marker-end="url(#bow-c)"/>
  </g>
  <g class="pulse">
    <path class="arrow st-hot" d="M264 130H252" marker-end="url(#bow-h)"/>
    <path class="arrow st-hot" d="M274 130H286" marker-end="url(#bow-h)"/>
  </g>
  <text x="205" y="148" style="fill:var(--s-cold)">דחיסה</text>
  <text x="269" y="148" style="fill:var(--s-hot)">מתיחה</text>
  <text x="236" y="24" class="sm">חתך בזרוע</text>
</g>

<!-- שלב 4: החץ בטיסה. הנוצות מיישרות אותו ומסובבות אותו -->
<g class="hl-4">
  <g>
    <animateTransform attributeName="transform" type="rotate" dur="2.2s" repeatCount="indefinite" keyTimes="0;.2;.4;.6;.8;1" values="7 230 190;-5 230 190;3 230 190;-1.5 230 190;0 230 190;0 230 190"/>
    <path class="fl-none st-ink" stroke-width="2.2" d="M164 190H290"/>
    <path class="fl-dark st-ink" stroke-width="1" d="M288 185L302 190L288 195z"/>
    <path class="fl-hot st-ink" stroke-width=".8" d="M166 190L172 180H190L184 190zM166 190L172 200H190L184 190z"/>
    <path class="fl-warm" d="M168 190H188" stroke="none"/>
  </g>
</g>
<g class="only-4">
  <path class="flow slow st-cold" style="stroke:var(--s-cold);stroke-dasharray:6 8" d="M310 170H170"/>
  <path class="flow slow st-cold" style="stroke:var(--s-cold);stroke-dasharray:6 8" d="M310 210H170"/>
  <ellipse class="fl-none st-violet" stroke-width="1.5" cx="200" cy="190" rx="5" ry="16" stroke-dasharray="3 2"/>
  <circle class="fl-violet" r="2.6"><animateMotion dur="1s" repeatCount="indefinite" path="M200 174A5 16 0 1 1 200 206A5 16 0 1 1 200 174"/></circle>
  <text x="246" y="160">הנוצות מיישרות את הזנב</text>
  <text x="136" y="186">סיבוב</text>
  <text x="136" y="199">סביב הציר</text>
</g>
`;
