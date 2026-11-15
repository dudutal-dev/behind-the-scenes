// בלוקצ׳יין: 1 אותו פנקס אצל כל המחשבים, ועסקה חדשה מתפשטת לכולם · 2 חתימה במפתח סודי, בדיקה במפתח ציבורי, זיוף נדחה · 3 כל בלוק מכיל את טביעת האצבע של קודמו, ושינוי ישן שובר את כל ההמשך · 4 כרייה: מי שפותר ראשון מוסיף בלוק ומקבל מטבע, והשרשרת הישרה ארוכה משל הרמאי
export default `
<defs>
  <g id="blockchain-key" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle r="4.5"/><path d="M4.5 0H19M13.5 0v4.5M18.5 0v4.5"/></g>
</defs>

<!-- רשת מחשבים, לכל אחד עותק מלא של הפנקס -->
<g class="hl-1 hl-4">
  <path class="wire st-line" style="stroke-width:2" d="M52 23H79M115 23H142M178 23H205M241 23H268M40 42Q97 62 154 42M166 42Q223 62 280 42"/>
  <rect class="body" x="16" y="10" width="36" height="26" rx="3"/><path class="body" style="stroke-width:1.5" d="M30 36v4h-5h18h-5v-4"/><path class="thin" style="stroke-width:1.3" d="M22 17h24M22 22h24M22 27h24"/>
  <rect class="body" x="79" y="10" width="36" height="26" rx="3"/><path class="body" style="stroke-width:1.5" d="M93 36v4h-5h18h-5v-4"/><path class="thin" style="stroke-width:1.3" d="M85 17h24M85 22h24M85 27h24"/>
  <rect class="body" x="142" y="10" width="36" height="26" rx="3"/><path class="body" style="stroke-width:1.5" d="M156 36v4h-5h18h-5v-4"/><path class="thin" style="stroke-width:1.3" d="M148 17h24M148 22h24M148 27h24"/>
  <rect class="body" x="205" y="10" width="36" height="26" rx="3"/><path class="body" style="stroke-width:1.5" d="M219 36v4h-5h18h-5v-4"/><path class="thin" style="stroke-width:1.3" d="M211 17h24M211 22h24M211 27h24"/>
  <rect class="body" x="268" y="10" width="36" height="26" rx="3"/><path class="body" style="stroke-width:1.5" d="M282 36v4h-5h18h-5v-4"/><path class="thin" style="stroke-width:1.3" d="M274 17h24M274 22h24M274 27h24"/>
</g>

<!-- עסקה חתומה: מפתח סודי חותם, מפתח ציבורי בודק -->
<g class="hl-2">
  <rect class="body" x="204" y="80" width="56" height="38" rx="3"/>
  <path class="thin" style="stroke-width:1.3" d="M211 88h42M211 94h42M211 100h26"/>
  <path class="wire st-hot" style="stroke-width:2" d="M211 111q4-8 8-2t8-2t8 2t6-4"/>
  <use href="#blockchain-key" class="st-hot" transform="translate(300 99) scale(-1 1)"/>
  <use href="#blockchain-key" class="st-green" transform="translate(160 86) rotate(90)"/>
  <circle class="fl-green st-ink" stroke-width="1.5" cx="186" cy="99" r="8"/>
  <path class="arrow" style="stroke:#fff;stroke-width:2.2" d="M182 99l3 3l5-6"/>
</g>

<!-- שרשרת הבלוקים -->
<g class="hl-3 hl-4">
  <path class="wire st-ink" style="stroke-width:1.8" d="M257 159.5H247V139.5H237"/><path class="wire st-ink" style="stroke-width:1.8" d="M199 159.5H189V139.5H179"/><path class="wire st-ink" style="stroke-width:1.8" d="M141 159.5H131V139.5H121"/>
  <rect class="body" x="253" y="132" width="46" height="34" rx="4"/><path class="thin" style="stroke-width:1.3" d="M258 139.5h36M258 146h36M258 152h22"/><rect class="fl-violet st-ink" stroke-width="1" x="257" y="156" width="9" height="7" rx="1.5"/>
  <rect class="body" x="195" y="132" width="46" height="34" rx="4"/><rect class="fl-violet st-ink" stroke-width="1" x="228" y="136" width="9" height="7" rx="1.5"/><path class="thin" style="stroke-width:1.3" d="M200 139.5h24M200 146h36M200 152h22"/><rect class="fl-cold st-ink" stroke-width="1" x="199" y="156" width="9" height="7" rx="1.5"/>
  <rect class="body" x="137" y="132" width="46" height="34" rx="4"/><rect class="fl-cold st-ink" stroke-width="1" x="170" y="136" width="9" height="7" rx="1.5"/><path class="thin" style="stroke-width:1.3" d="M142 139.5h24M142 146h36M142 152h22"/><rect class="fl-warm st-ink" stroke-width="1" x="141" y="156" width="9" height="7" rx="1.5"/>
  <rect class="body" x="79" y="132" width="46" height="34" rx="4"/><rect class="fl-warm st-ink" stroke-width="1" x="112" y="136" width="9" height="7" rx="1.5"/><path class="thin" style="stroke-width:1.3" d="M84 139.5h24M84 146h36M84 152h22"/><rect class="fl-green st-ink" stroke-width="1" x="83" y="156" width="9" height="7" rx="1.5"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <g><path class="wire st-warm fade" style="stroke-width:2;animation-delay:-0.6000000000000001s" d="M22 31h17"/></g><g><path class="wire st-warm fade" style="stroke-width:2;animation-delay:-0.8500000000000001s" d="M85 31h17"/></g><g><path class="wire st-warm fade" style="stroke-width:2;animation-delay:-1.1s" d="M148 31h17"/></g><g><path class="wire st-warm fade" style="stroke-width:2;animation-delay:-1.35s" d="M211 31h17"/></g><g><path class="wire st-warm fade" style="stroke-width:2;animation-delay:-1.6s" d="M274 31h17"/></g>
  <circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="0s" repeatCount="indefinite" path="M268 23H241"/></circle><circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="-0.5s" repeatCount="indefinite" path="M205 23H178"/></circle><circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="-1s" repeatCount="indefinite" path="M142 23H115"/></circle><circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="-1.5s" repeatCount="indefinite" path="M79 23H52"/></circle><circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="-0.3s" repeatCount="indefinite" path="M280 42Q223 62 166 42"/></circle><circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="2s" begin="-1.1s" repeatCount="indefinite" path="M154 42Q97 62 40 42"/></circle>
  <text x="100" y="92">אין בנק באמצע:</text>
  <text x="100" y="107">כל מחשב שומר עותק מלא</text>
  <text x="160" y="208">עסקה חדשה מתפשטת מיד לכל העותקים</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="fl-hot" r="3"><animateMotion dur="1.6s" repeatCount="indefinite" path="M281 99Q262 99 244 108"/></circle>
  <rect class="body" x="60" y="80" width="56" height="38" rx="3"/>
  <path class="thin" style="stroke-width:1.3" d="M67 88h42M67 94h42M67 100h26"/>
  <path class="wire st-dark" style="stroke-width:2" d="M67 110l6-5l5 6l6-7l5 5l7-3"/>
  <circle class="fl-hot st-ink" stroke-width="1.5" cx="134" cy="99" r="8"/>
  <path class="arrow" style="stroke:#fff;stroke-width:2.2" d="M130.5 95.5l7 7M137.5 95.5l-7 7"/>
  <circle class="ring st-green" cx="186" cy="99" r="15"/>
  <text x="250" y="73">חותמים במפתח סודי</text>
  <text x="88" y="73">חתימה מזויפת נדחית</text>
  <text x="160" y="208">כל אחד יכול לבדוק, בלי לדעת את הסוד</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <path class="wire st-hot blink" style="stroke-width:2.5" d="M200 146h36"/>
  <rect class="fl-hot st-ink" stroke-width="1" x="199" y="156" width="9" height="7" rx="1.5"><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.95;1" dur="4s" repeatCount="indefinite"/></rect>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.3;.35;.95;1" dur="4s" repeatCount="indefinite"/>
    <path d="M186 139.5H190" style="stroke:var(--s-panel);stroke-width:5;fill:none"/>
    <path class="wire st-hot" style="stroke-width:2.2" d="M184 145l8 8M192 145l-8 8"/>
    <rect class="fl-none st-hot" stroke-width="3" x="137" y="132" width="46" height="34" rx="4"/>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.5;.55;.95;1" dur="4s" repeatCount="indefinite"/>
    <path class="wire st-hot" style="stroke-width:2.2" d="M126 145l8 8M134 145l-8 8"/>
    <rect class="fl-none st-hot" stroke-width="3" x="79" y="132" width="46" height="34" rx="4"/>
  </g>
  <text x="100" y="92">בכל בלוק: טביעת האצבע</text>
  <text x="100" y="107">של הבלוק שלפניו</text>
  <text x="160" y="186">שינוי קטן בעסקה ישנה</text>
  <text x="160" y="208">הטביעה משתנה, וכל ההמשך נפסל</text>
</g>
<!-- שלב 4 -->
<g class="from-4">
  <rect class="thin" stroke-dasharray="3 3" x="21" y="132" width="46" height="34" rx="4"/>
  <g opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.62;.98" dur="6s" begin="-2.2s" repeatCount="indefinite"/>
    <path class="wire st-ink" style="stroke-width:1.8" d="M83 159.5H73V139.5H63"/><rect class="body" x="21" y="132" width="46" height="34" rx="4"/><rect class="fl-green st-ink" stroke-width="1" x="54" y="136" width="9" height="7" rx="1.5"/><path class="thin" style="stroke-width:1.3" d="M26 139.5h24M26 146h36M26 152h22"/>
  </g>
  <!-- שרשרת קצרה של רמאי -->
  <path class="wire st-hot" style="stroke-width:1.8" stroke-dasharray="3 3" d="M218 166V184H184"/>
  <rect class="fl-panel st-hot" stroke-width="2" x="137" y="174" width="46" height="20" rx="4"/>
  <path class="thin" style="stroke-width:1.3" d="M143 181h34M143 187h20"/>
</g>
<g class="only-4">
  <rect class="fl-panel" x="19" y="13" width="30" height="20"/><text class="sm" x="34" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">4821<animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="0.50s" begin="0s" repeatCount="indefinite"/></text><text class="sm" x="34" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">0937<animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="0.50s" begin="0s" repeatCount="indefinite"/></text><text class="sm" x="34" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">7715<animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="0.50s" begin="0s" repeatCount="indefinite"/></text>
  <rect class="fl-panel" x="82" y="13" width="30" height="20"/><text class="sm" x="97" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">4821<animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="0.57s" begin="-0.13s" repeatCount="indefinite"/></text><text class="sm" x="97" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">0937<animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="0.57s" begin="-0.13s" repeatCount="indefinite"/></text><text class="sm" x="97" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">7715<animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="0.57s" begin="-0.13s" repeatCount="indefinite"/></text>
  <rect class="fl-panel" x="145" y="13" width="30" height="20"/><text class="sm" x="160" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">4821<animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="0.64s" begin="-0.26s" repeatCount="indefinite"/></text><text class="sm" x="160" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">0937<animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="0.64s" begin="-0.26s" repeatCount="indefinite"/></text><text class="sm" x="160" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">7715<animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="0.64s" begin="-0.26s" repeatCount="indefinite"/></text>
  <rect class="fl-panel" x="208" y="13" width="30" height="20"/><text class="sm" x="223" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">4821<animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="0.71s" begin="-0.39s" repeatCount="indefinite"/></text><text class="sm" x="223" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">0937<animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="0.71s" begin="-0.39s" repeatCount="indefinite"/></text><text class="sm" x="223" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">7715<animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="0.71s" begin="-0.39s" repeatCount="indefinite"/></text>
  <rect class="fl-panel" x="271" y="13" width="30" height="20"/><text class="sm" x="286" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">4821<animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="0.78s" begin="-0.52s" repeatCount="indefinite"/></text><text class="sm" x="286" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">0937<animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="0.78s" begin="-0.52s" repeatCount="indefinite"/></text><text class="sm" x="286" y="27" style="stroke:none;direction:ltr;font-weight:700;font-family:ui-monospace,monospace" opacity="0">7715<animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="0.78s" begin="-0.52s" repeatCount="indefinite"/></text>
  <rect class="fl-none st-green" stroke-width="3" x="79" y="10" width="36" height="26" rx="3" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.45;.98" dur="6s" begin="-2.2s" repeatCount="indefinite"/></rect>
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-9" y="-7" width="18" height="14" rx="2"/><path class="thin" style="stroke-width:1.2" d="M-5 -2h10M-5 2h6"/>
    <animateMotion dur="6s" begin="-2.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.47;.62;1" path="M97 40Q60 80 44 140"/><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.47;.62" dur="6s" begin="-2.2s" repeatCount="indefinite"/></g>
  <g opacity="0"><circle class="fl-elec st-ink" stroke-width="1.5" r="6"/><circle class="fl-none st-ink" stroke-width="1" r="3.2"/>
    <animateMotion dur="6s" begin="-2.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.64;.78;1" path="M44 132Q50 80 97 48"/><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.64;.98" dur="6s" begin="-2.2s" repeatCount="indefinite"/></g>
  <rect class="thin st-hot blink" stroke-dasharray="3 3" x="79" y="174" width="46" height="20" rx="4"/>
  <text x="100" y="92">כולם מנחשים במרוץ;</text>
  <text x="100" y="107">הראשון מוסיף בלוק וזוכה</text>
  <text class="sm" x="230" y="189">שרשרת הרמאי מפגרת</text>
  <text x="160" y="212">הרוב הישר תמיד מהיר יותר</text>
</g>
`;
