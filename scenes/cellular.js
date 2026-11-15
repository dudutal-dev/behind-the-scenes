// רשת סלולרית: 1 השטח מחולק לתאים ובכל תא אנטנה · 2 רדיו רק עד האנטנה הקרובה ומשם בסיב דרך מרכז הרשת · 3 תאים רחוקים חוזרים על אותם תדרים · 4 מעבר שיחה בין תאים בתנועה
export default `
<!-- תאים: גוון לכל קבוצת תדרים -->
<polygon class="fl-cold hl-3" style="fill-opacity:.36" points="51,8 82.18,26 82.18,62 51,80 19.82,62 19.82,26"/>
<polygon class="fl-green hl-3" style="fill-opacity:.36" points="113.35,8 144.53,26 144.53,62 113.35,80 82.18,62 82.18,26"/>
<polygon class="fl-warm hl-3" style="fill-opacity:.36" points="175.71,8 206.88,26 206.88,62 175.71,80 144.53,62 144.53,26"/>
<polygon class="fl-cold hl-3" style="fill-opacity:.36" points="238.06,8 269.24,26 269.24,62 238.06,80 206.88,62 206.88,26"/>
<polygon class="fl-warm hl-3" style="fill-opacity:.36" points="82.18,62 113.35,80 113.35,116 82.18,134 51,116 51,80"/>
<polygon class="fl-cold hl-3" style="fill-opacity:.36" points="144.53,62 175.71,80 175.71,116 144.53,134 113.35,116 113.35,80"/>
<polygon class="fl-green hl-3" style="fill-opacity:.36" points="206.88,62 238.06,80 238.06,116 206.88,134 175.71,116 175.71,80"/>
<polygon class="fl-warm hl-3" style="fill-opacity:.36" points="269.24,62 300.42,80 300.42,116 269.24,134 238.06,116 238.06,80"/>
<polygon class="thin" points="51,8 82.18,26 82.18,62 51,80 19.82,62 19.82,26"/>
<polygon class="thin" points="113.35,8 144.53,26 144.53,62 113.35,80 82.18,62 82.18,26"/>
<polygon class="thin" points="175.71,8 206.88,26 206.88,62 175.71,80 144.53,62 144.53,26"/>
<polygon class="thin" points="238.06,8 269.24,26 269.24,62 238.06,80 206.88,62 206.88,26"/>
<polygon class="thin" points="82.18,62 113.35,80 113.35,116 82.18,134 51,116 51,80"/>
<polygon class="thin" points="144.53,62 175.71,80 175.71,116 144.53,134 113.35,116 113.35,80"/>
<polygon class="thin" points="206.88,62 238.06,80 238.06,116 206.88,134 175.71,116 175.71,80"/>
<polygon class="thin" points="269.24,62 300.42,80 300.42,116 269.24,134 238.06,116 238.06,80"/>

<!-- כביש -->
<path class="thin hl-4" style="stroke-dasharray:7 5;stroke-width:2" d="M54 119H298"/>

<!-- סיבים אופטיים ומרכז הרשת -->
<g class="hl-2">
  <path class="pipe st-line" style="stroke-width:2.4" d="M51 48V162M113.35 48V162M175.71 48V162M238.06 48V162M82.18 102V162M144.53 102V162M206.88 102V162M269.24 102V162M51 162H269.24"/>
  <path class="pipe st-dark" style="stroke-width:4" d="M51 48V162H140M180 162H238.06V48"/>
  <path class="flow" style="stroke-width:1.4" d="M51 48V162H140"/>
  <path class="flow" style="stroke-width:1.4" d="M180 162H238.06V48"/>
  <rect class="body" x="138" y="149" width="44" height="27" rx="4"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M138 158H182M138 167H182"/>
  <circle class="fl-green blink" cx="145" cy="153.5" r="1.6"/><circle class="fl-green blink d2" cx="145" cy="162.5" r="1.6"/><circle class="fl-green blink d3" cx="145" cy="171.5" r="1.6"/>
  <path class="st-line fl-none" stroke-width="1.6" stroke-linecap="round" d="M152 153.5h24M152 162.5h24M152 171.5h24"/>
  <circle r="2.8" class="fl-elec st-ink" stroke-width=".9"><animateMotion dur="2.4s" repeatCount="indefinite" path="M51 48V162H138"/></circle>
  <circle r="2.8" class="fl-elec st-ink" stroke-width=".9"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M51 48V162H138"/></circle>
  <circle r="2.8" class="fl-elec st-ink" stroke-width=".9"><animateMotion dur="2.4s" begin="-.4s" repeatCount="indefinite" path="M182 162H238.06V48"/></circle>
  <circle r="2.8" class="fl-elec st-ink" stroke-width=".9"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M182 162H238.06V48"/></circle>
</g>

<!-- אנטנות -->
<g class="hl-1 hl-2 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M45.5 48L51 27L56.5 48M47 41h8M48.6 34h4.8M47 41L53.4 34M55 41L48.6 34M51 27V21"/><rect class="fl-panel st-ink" stroke-width="1.2" x="45.5" y="23" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="53.1" y="23" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="51" cy="20" r="1.7"/></g>
<g class="hl-1 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M107.85 48L113.35 27L118.85 48M109.35 41h8M110.95 34h4.8M109.35 41L115.75 34M117.35 41L110.95 34M113.35 27V21"/><rect class="fl-panel st-ink" stroke-width="1.2" x="107.85" y="23" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="115.45" y="23" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="113.35" cy="20" r="1.7"/></g>
<g class="hl-1 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M170.21 48L175.71 27L181.21 48M171.71 41h8M173.31 34h4.8M171.71 41L178.11 34M179.71 41L173.31 34M175.71 27V21"/><rect class="fl-panel st-ink" stroke-width="1.2" x="170.21" y="23" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="177.81" y="23" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="175.71" cy="20" r="1.7"/></g>
<g class="hl-1 hl-2 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M232.56 48L238.06 27L243.56 48M234.06 41h8M235.66 34h4.8M234.06 41L240.46 34M242.06 41L235.66 34M238.06 27V21"/><rect class="fl-panel st-ink" stroke-width="1.2" x="232.56" y="23" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="240.16" y="23" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="238.06" cy="20" r="1.7"/></g>
<g class="hl-1 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M76.68 102L82.18 81L87.68 102M78.18 95h8M79.78 88h4.8M78.18 95L84.58 88M86.18 95L79.78 88M82.18 81V75"/><rect class="fl-panel st-ink" stroke-width="1.2" x="76.68" y="77" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="84.28" y="77" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="82.18" cy="74" r="1.7"/></g>
<g class="hl-1 hl-3 hl-4"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M139.03 102L144.53 81L150.03 102M140.53 95h8M142.13 88h4.8M140.53 95L146.93 88M148.53 95L142.13 88M144.53 81V75"/><rect class="fl-panel st-ink" stroke-width="1.2" x="139.03" y="77" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="146.63" y="77" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="144.53" cy="74" r="1.7"/></g>
<g class="hl-1 hl-3 hl-4"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M201.38 102L206.88 81L212.38 102M202.88 95h8M204.48 88h4.8M202.88 95L209.28 88M210.88 95L204.48 88M206.88 81V75"/><rect class="fl-panel st-ink" stroke-width="1.2" x="201.38" y="77" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="208.98" y="77" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="206.88" cy="74" r="1.7"/></g>
<g class="hl-1 hl-3"><path class="st-ink fl-none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" d="M263.74 102L269.24 81L274.74 102M265.24 95h8M266.84 88h4.8M265.24 95L271.64 88M273.24 95L266.84 88M269.24 81V75"/><rect class="fl-panel st-ink" stroke-width="1.2" x="263.74" y="77" width="3.4" height="8" rx="1"/><rect class="fl-panel st-ink" stroke-width="1.2" x="271.34" y="77" width="3.4" height="8" rx="1"/><circle class="fl-hot" cx="269.24" cy="74" r="1.7"/></g>

<!-- שני הטלפונים וקשר הרדיו הקצר שלהם -->
<g class="hl-2">
  <rect class="fl-dark st-ink" stroke-width="1.5" x="26" y="40" width="10" height="16" rx="2.2"/><rect class="fl-cold-soft" x="27.8" y="42.2" width="6.4" height="10" rx=".8"/><rect class="fl-dark st-ink" stroke-width="1.5" x="253" y="40" width="10" height="16" rx="2.2"/><rect class="fl-cold-soft" x="254.8" y="42.2" width="6.4" height="10" rx=".8"/>
  <path class="wire st-violet dash" d="M35 39L45 29"/>
  <path class="wire st-violet dash" d="M244.06 29L255 39"/>
</g>
<g class="only-2">
  <circle class="ring st-violet" cx="31" cy="40" r="15"/><circle class="ring st-violet d3" cx="31" cy="40" r="15"/>
  <circle class="ring st-violet d2" cx="238.06" cy="26" r="15"/><circle class="ring st-violet d4" cx="238.06" cy="26" r="15"/>
</g>

<!-- שלב 1: כל אנטנה מכסה את התא שלה -->
<g class="only-1">
<circle class="ring st-violet" cx="51" cy="44" r="29"/><circle class="ring st-violet d2" cx="113.35" cy="44" r="29"/><circle class="ring st-violet d4" cx="175.71" cy="44" r="29"/><circle class="ring st-violet d1" cx="238.06" cy="44" r="29"/><circle class="ring st-violet d3" cx="82.18" cy="98" r="29"/><circle class="ring st-violet" cx="144.53" cy="98" r="29"/><circle class="ring st-violet d2" cx="206.88" cy="98" r="29"/><circle class="ring st-violet d4" cx="269.24" cy="98" r="29"/>
</g>
<!-- שלב 3: תאים באותו צבע משדרים באותם תדרים, באותו רגע -->
<g class="only-3">
<circle class="ring st-cold" style="stroke-width:3" cx="51" cy="44" r="29"/><circle class="ring st-green d2" style="stroke-width:3" cx="113.35" cy="44" r="29"/><circle class="ring st-warm d4" style="stroke-width:3" cx="175.71" cy="44" r="29"/><circle class="ring st-cold" style="stroke-width:3" cx="238.06" cy="44" r="29"/><circle class="ring st-warm d4" style="stroke-width:3" cx="82.18" cy="98" r="29"/><circle class="ring st-cold" style="stroke-width:3" cx="144.53" cy="98" r="29"/><circle class="ring st-green d2" style="stroke-width:3" cx="206.88" cy="98" r="29"/><circle class="ring st-warm d4" style="stroke-width:3" cx="269.24" cy="98" r="29"/>
</g>

<!-- מכונית שחוצה גבול בין תאים, והשיחה עוברת מאנטנה לאנטנה -->
<g class="hl-4"><g>
  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.05;.93;1" dur="6s" repeatCount="indefinite"/>
  <line class="thin" style="stroke-dasharray:2 4" x1="120" y1="103" x2="206.88" y2="80"><animate attributeName="x1" values="120;232;232" keyTimes="0;0.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="discrete" values="1;0;0" keyTimes="0;0.42;1" dur="6s" repeatCount="indefinite"/></line>
  <line class="thin" style="stroke-dasharray:2 4" x1="120" y1="103" x2="144.53" y2="80"><animate attributeName="x1" values="120;232;232" keyTimes="0;0.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="discrete" values="0;1;1" keyTimes="0;0.42;1" dur="6s" repeatCount="indefinite"/></line>
  <line class="wire st-violet dash" style="" x1="120" y1="103" x2="144.53" y2="80"><animate attributeName="x1" values="120;232;232" keyTimes="0;0.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="discrete" values="1;0;0" keyTimes="0;0.42;1" dur="6s" repeatCount="indefinite"/></line>
  <line class="wire st-violet dash" style="" x1="120" y1="103" x2="206.88" y2="80"><animate attributeName="x1" values="120;232;232" keyTimes="0;0.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="discrete" values="0;1;1" keyTimes="0;0.42;1" dur="6s" repeatCount="indefinite"/></line>
  <circle class="fl-none st-violet" stroke-width="2.5" cx="206.88" cy="80" r="4" opacity="0"><animate attributeName="r" values="4;4;22;22" keyTimes="0;0.42;0.56;1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.42;0.42;0.56;1" dur="6s" repeatCount="indefinite"/></circle>
  <g><animateTransform attributeName="transform" type="translate" values="120 111;232 111;232 111" keyTimes="0;0.85;1" dur="6s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width="1.4" stroke-linejoin="round" d="M-13 3V-1.5q0-2 2-2h3.5l3.5-4.5h8l4.5 4.5h2.5q2 0 2 2V3z"/>
    <path class="fl-cold-soft" d="M-5.5-3.5l2.4-3h2.3v3zM1-6.5h2.6l3 3H1z"/>
    <circle class="fl-dark st-ink" stroke-width="1.2" cx="-7" cy="3.4" r="2.8"/><circle class="fl-dark st-ink" stroke-width="1.2" cx="7" cy="3.4" r="2.8"/>
  </g>
</g></g>

<g class="only-1"><text x="160" y="194">השטח מחולק לתאים קטנים,</text><text x="160" y="209">ובכל תא אנטנה משלו</text></g>
<g class="only-2"><text x="160" y="194">רדיו רק עד האנטנה הקרובה,</text><text x="160" y="209">ומשם בסיב אופטי דרך מרכז הרשת</text></g>
<g class="only-3"><text x="160" y="194">תאים רחוקים חוזרים</text><text x="160" y="209">על אותם תדרים בלי להפריע</text></g>
<g class="only-4"><text x="160" y="194">האנטנה הבאה חזקה יותר,</text><text x="160" y="209">והשיחה עוברת אליה בלי שתרגיש</text></g>
`;
