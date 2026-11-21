// הטלסקופ: 1 עדשה רחבה אוספת הרבה קרניים מול אישון זעיר · 2 הקרניים נשברות ונפגשות במוקד · 3 עינית מגדילה את התמונה (יחס מרחקי המוקד) · 4 טלסקופ מראות של ניוטון: מראה קעורה ומראה אלכסונית
export default `
<defs>
  <g id="telescope-eye">
    <ellipse class="fl-cold-soft st-ink" stroke-width="1.200" cx="-8.500" cy="0" rx="4.800" ry="6.800"/>
    <circle class="fl-panel st-ink" stroke-width="1.500" r="10"/>
    <ellipse class="fl-cold-soft st-ink" stroke-width=".8" cx="-4.600" cy="0" rx="2" ry="4.600"/>
    <path class="wire st-cold" style="stroke-width:2.600;stroke-linecap:butt" d="M-7.400 -6.700V-3.900M-7.400 3.900V6.700"/>
    <path class="thin st-ink" style="stroke-width:1" d="M4 -9.200Q11 0 4 9.200" opacity=".35"/>
    <path class="wire st-ink" style="stroke-width:1.500" d="M-8 -9L-12.500 -12.500M-8 9L-12.500 12.500"/>
  </g>
</defs>
<!-- ===== כוכב רחוק: האור מגיע בקרניים מקבילות ===== -->
<g class="pulse"><path class="fl-elec st-ink" stroke-width="1" stroke-linejoin="round" d="M16 9l2.200 5.800l5.800 2.200l-5.800 2.200l-2.200 5.800l-2.200-5.800l-5.800-2.200l5.800-2.200z"/></g>
<!-- ===== טלסקופ עדשות בחתך ===== -->
<rect class="fl-elec st-ink" stroke-width="2" stroke-linejoin="round" x="70" y="30" width="136" height="64" rx="2"/>
<rect class="fl-elec st-ink" stroke-width="2" stroke-linejoin="round" x="198" y="44" width="54" height="36" rx="2"/>
<rect class="fl-dark" x="68.500" y="35" width="131.500" height="54"/>
<rect class="fl-dark" x="196" y="49" width="57.500" height="26"/>
<path class="st-ink fl-none" stroke-width="1" opacity=".5" d="M84 31V34M84 90V93M190 31V34M190 90V93M228 45V48M228 76V79"/>
<g class="hl-1 hl-2 hl-3"><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 38H78"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 50H78"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 62H78"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 74H78"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 86H78"/></g>
<g class="hl-2 hl-3"><path class="fl-warm" fill-opacity=".28" d="M78 38L218 62L78 86z"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M78 38L218 62"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M78 50L218 62"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M78 62L218 62"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M78 74L218 62"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M78 86L218 62"/></g>
<g class="hl-3"><path class="fl-warm" fill-opacity=".2" d="M218 62L238 65.43H272V58.57H238z"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M218 62L238 65.43H273"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M218 62L238 63.71H273"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M218 62L238 62H273"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M218 62L238 60.29H273"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M218 62L238 58.57H273"/></g>
<ellipse class="fl-cold-soft st-ink" stroke-width="1.500" cx="78" cy="62" rx="5" ry="27"/>
<g class="hl-3"><ellipse class="fl-cold-soft st-ink" stroke-width="1.200" cx="238" cy="62" rx="3" ry="12"/>
  <use href="#telescope-eye" transform="translate(282 62)"/></g>
<g class="from-2"><path class="thin" style="stroke-width:1" stroke-dasharray="2 2.500" d="M218 51V73"/><circle class="fl-elec st-ink pulse" stroke-width=".8" cx="218" cy="62" r="2.600"/></g>
<text class="sm" x="292" y="40" direction="ltr">1609</text>
<!-- ===== עין חשופה: אישון זעיר קולט קרן אחת ===== -->
<g class="hl-1">
  <path class="wire st-warm dash" style="stroke-width:1.500" d="M10 110H58"/>
  <path class="wire st-warm dash" style="stroke-width:1.500" opacity=".45" d="M10 98H92M10 122H92"/>
  <use href="#telescope-eye" transform="translate(66 110)"/>
</g>
<!-- ===== טלסקופ מראות של ניוטון ===== -->
<g class="hl-4">
  <rect class="fl-warm st-ink" stroke-width="2" stroke-linejoin="round" x="44" y="146" width="256" height="52" rx="2"/>
  <rect class="fl-elec st-ink" stroke-width="1.500" stroke-linejoin="round" x="166.500" y="121" width="19" height="26" rx="1.500"/>
  <rect class="fl-dark" x="42.500" y="150" width="252" height="44"/>
  <rect class="fl-dark" x="170" y="119.500" width="12" height="32"/>
  <path class="st-ink fl-none" stroke-width="1" opacity=".5" d="M60 147V149M60 195V197M270 147V149M270 195V197"/>
  <path class="thin" style="stroke-width:1.200" d="M176 173V194"/>
  <path class="fl-warm" fill-opacity=".3" d="M289.02 153L172.11 168.11L181.05 177.05L289.02 191z"/>
  <path class="fl-warm" fill-opacity=".4" d="M172.11 168.11L176 138L181.05 177.05z"/>
  <path class="wire st-warm dash" style="stroke-width:1.500" d="M10 153H289.02"/><path class="wire st-warm dash" style="stroke-width:1.200" d="M289.02 153L172.11 168.11L177.55 126V116"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 163H291.33"/><path class="wire st-warm dash" style="stroke-width:1.200" d="M291.33 163L174.07 170.07L176.72 126V116"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 181H291.33"/><path class="wire st-warm dash" style="stroke-width:1.200" d="M291.33 181L178.18 174.18L175.28 126V116"/><path class="wire st-warm dash" style="stroke-width:1.500" d="M10 191H289.02"/><path class="wire st-warm dash" style="stroke-width:1.200" d="M289.02 191L181.05 177.05L174.45 126V116"/>
  <path class="fl-soft st-ink" stroke-width="1.500" stroke-linejoin="round" d="M288 150Q296 172 288 194H297V150z"/>
  <path class="wire st-cold" style="stroke-width:2.200" d="M288 151Q295.500 172 288 193"/>
  <path class="wire st-ink" style="stroke-width:4" d="M170.500 166.500L182.500 178.500"/>
  <path class="wire st-cold" style="stroke-width:1.400" d="M171.300 165.700L183.300 177.700"/>
  <circle class="fl-elec st-ink pulse" stroke-width=".8" cx="176" cy="138" r="2.200"/>
  <ellipse class="fl-cold-soft st-ink" stroke-width="1.200" cx="176" cy="126" rx="6" ry="2.300"/>
  <use href="#telescope-eye" transform="translate(176 107) rotate(-90)"/>
  <text class="sm" x="66" y="209" direction="ltr">1668</text>
</g>
<!-- ===== תוויות ===== -->
<text class="only-1" x="122" y="21">עדשה רחבה</text>
<text class="only-1" x="118" y="114">אישון זעיר</text>
<text class="only-2" x="226" y="38">מוקד</text>
<text class="only-2" x="258" y="103">תמונה קטנה ובהירה</text>
<g class="only-3">
  <path class="thin st-ink" style="stroke-width:1.300" d="M78 18V26M78 22H218M218 18V26"/>
  <path class="wire st-hot" style="stroke-width:1.600" d="M218 22H238M238 18V26"/>
  <path class="thin" style="stroke-width:1" stroke-dasharray="2 2.500" d="M218 28V49M238 28V43"/>
  <text class="sm" x="148" y="14">מרחק מוקד ארוך</text><text class="sm" x="228" y="14">קצר</text>
  <text x="258" y="103">הגדלה = ארוך ÷ קצר</text>
</g>
<text class="only-4" x="240" y="138">מראה אלכסונית</text>
<text class="only-4" x="262" y="210">מראה קעורה</text>
`;
