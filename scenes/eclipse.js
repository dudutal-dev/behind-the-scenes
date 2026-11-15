// ליקויים (לא בקנה מידה): 1 הירח בין השמש לכדור הארץ וצלו המלא נוגע ברצועה צרה · 2 משולשים דומים מהעין: הירח והשמש באותה זווית, ובתצוגה מהקרקע נשארת ההילה · 3 הירח בצל כדור הארץ ומאדים מאור שהתכופף באטמוספרה · 4 מסלול נטוי: הצל עובר מעל או מתחת
export default `
<defs>
  <clipPath id="eclipse-earth"><circle cx="224" cy="108" r="21"/></clipPath>
  <clipPath id="eclipse-inset"><rect x="98" y="154" width="76" height="56" rx="8"/></clipPath>
</defs>

<!-- השמש (חלקה מחוץ למסגרת) -->
<path class="wire st-warm" style="stroke-width:2.200" d="M47 92l6 -2.500M49 108h6.500M47 124l6 2.500M40 77l5 -4.500M40 139l5 4.500"/>
<circle class="fl-elec st-ink" stroke-width="2" cx="6" cy="108" r="38"/>

<!-- קווי הראייה מהעין אל שולי השמש: שני משולשים דומים -->
<g class="hl-2">
  <path class="wire st-violet" style="stroke-width:1.5" d="M13.3 70.7L203 108L13.3 145.3"/>
</g>

<!-- הצל של כדור הארץ -->
<g class="hl-3 hl-4"><path class="fl-dark" opacity=".55" d="M226 87.2L320 94.5V121.5L226 128.8z"/></g>

<!-- שלב 4: מסלול נטוי, החצי הרחוק מאחורי כדור הארץ -->
<g class="from-4">
  <path class="thin" style="stroke-dasharray:4 4" d="M64 108H199M249 108H318"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M161.9 80.3L162.4 82.5L165.2 85.6L170.3 89.6L177.5 94.3L186.4 99.5L196.8 105L208.3 110.7L220.3 116.2L232.5 121.5L244.4 126.2L255.5 130.2L265.3 133.4L273.6 135.6L280 136.7L284.2 136.7L286.1 135.7L285.6 133.5L282.8 130.4L277.7 126.4L270.5 121.7L261.6 116.5L251.2 111L239.7 105.3L227.7 99.8L215.5 94.5L203.6 89.8L192.5 85.8L182.7 82.6L174.4 80.4L168 79.3L163.8 79.3L161.9 80.3"/>
  <g>
    <g><animateMotion dur="12s" begin="-11.4s" repeatCount="indefinite" calcMode="linear" path="M161.9 80.3L162.4 82.5L165.2 85.6L170.3 89.6L177.5 94.3L186.4 99.5L196.8 105L208.3 110.7L220.3 116.2L232.5 121.5L244.4 126.2L255.5 130.2L265.3 133.4L273.6 135.6L280 136.7L284.2 136.7L286.1 135.7L285.6 133.5L282.8 130.4L277.7 126.4L270.5 121.7L261.6 116.5L251.2 111L239.7 105.3L227.7 99.8L215.5 94.5L203.6 89.8L192.5 85.8L182.7 82.6L174.4 80.4L168 79.3L163.8 79.3L161.9 80.3"/>
      <path class="thin" style="stroke-dasharray:2 3;stroke-width:1.2" d="M33 0h26"/>
      <path class="fl-dark" opacity=".7" d="M1 -6.2L33 0L1 6.2z"/>
      <g transform="translate(0 0)"><circle class="fl-soft st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g><path class="fl-dark" opacity=".55" d="M0 -6.4A6.4 6.4 0 0 1 0 6.4z"/>
    </g></g>
</g>

<!-- שלב 1: חצי־צל, מתחת לכדור הארץ -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path class="fl-dark" opacity=".22" d="M168.3 101.9L220 87.3V128.7L168.3 114.1z"/></g>
</g>
<g class="only-2"><path class="fl-dark" opacity=".22" d="M168.3 101.9L220 87.3V128.7L168.3 114.1z"/></g>

<!-- כדור הארץ -->
<circle class="fl-none st-cold" stroke-width="3" opacity=".45" cx="224" cy="108" r="22.5"/>
<circle class="fl-cold st-ink" stroke-width="2" cx="224" cy="108" r="21"/>
<g clip-path="url(#eclipse-earth)">
  <path class="fl-green" d="M211 100c4 -5 10 -3 10 2c0 5 4 7 2 12c-2 4 -8 3 -10 -1c-2 -4 -5 -8 -2 -13zM228 93c5 -2 9 1 9 5c0 4 -5 5 -8 3c-3 -2 -4 -6 -1 -8zM227 116c4 -2 8 1 7 5c-1 3 -6 4 -8 1c-1 -2 -1 -5 1 -6z"/>
  <path class="fl-dark" opacity=".5" d="M225 87A21 21 0 0 1 225 129z"/>
  <g class="only-1"><g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path class="fl-dark" opacity=".3" d="M168.3 101.9L220 87.3V128.7L168.3 114.1z"/><ellipse class="fl-ink" cx="205.2" cy="108" rx="2.200" ry="3"/></g></g>
  <g class="only-2"><path class="fl-dark" opacity=".3" d="M168.3 101.9L220 87.3V128.7L168.3 114.1z"/><ellipse class="fl-ink" cx="205.2" cy="108" rx="2.200" ry="3"/></g>
</g>
<circle class="fl-none st-ink" stroke-width="2" cx="224" cy="108" r="21"/>

<!-- שלב 1: הירח עובר בין השמש לכדור הארץ, והצל המלא נוגע בנקודה צרה -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path class="fl-dark" opacity=".8" d="M171.2 101.8L203 108L171.2 114.2z"/>
    <g transform="translate(170 108)"><circle class="fl-soft st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g><path class="fl-dark" opacity=".55" transform="translate(170 108)" d="M0 -6.4A6.4 6.4 0 0 1 0 6.4z"/>
  </g>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M170 126v10M166.5 132l3.500 4.500l3.500 -4.500"/>
  <text x="166" y="24">צל הירח נופל על כדור הארץ</text>
  <text x="166" y="40">ליקוי מלא רק ברצועה צרה</text>
</g>
<!-- שלב 2: הירח בדיוק בקו, והעין בקודקוד -->
<g class="only-2">
  <path class="fl-dark" opacity=".8" d="M171.2 101.8L203 108L171.2 114.2z"/>
  <g transform="translate(170 108)"><circle class="fl-soft st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g><path class="fl-dark" opacity=".55" transform="translate(170 108)" d="M0 -6.4A6.4 6.4 0 0 1 0 6.4z"/>
  <path class="flow slow" style="stroke:var(--s-violet);stroke-opacity:1;stroke-width:2.400;stroke-dasharray:1 11" d="M13.3 70.7L203 108M13.3 145.3L203 108"/>
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="203" cy="108" r="3"/>
  <text x="166" y="24">השמש רחבה פי 400 מהירח</text>
  <text x="166" y="40">אבל גם רחוקה פי 400</text>
  <text x="236" y="176">ולכן הירח מכסה</text>
  <text x="236" y="192">אותה בדיוק</text>
</g>

<!-- תצוגה מהקרקע: הירח מכסה את השמש ונשארת ההילה -->
<g class="hl-2">
  <rect class="fl-dark st-ink" stroke-width="1.5" x="98" y="154" width="76" height="56" rx="8"/>
  <g clip-path="url(#eclipse-inset)">
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.37;.73;.8;1" dur="9s" begin="-3.6s" repeatCount="indefinite"/>
      <circle class="fl-elec" opacity=".16" cx="136" cy="182" r="25"/><circle class="fl-elec" opacity=".22" cx="136" cy="182" r="20.500"/><circle fill="#fff" opacity=".5" cx="136" cy="182" r="16.500"/>
      <path class="wire st-elec" style="stroke-width:1.4" opacity=".7" d="M136 160v-4M136 204v4M112 182h-5M160 182h5M119 165l-3.500 -3.500M153 165l3.500 -3.500M119 199l-3.500 3.500M153 199l3.500 3.500"/>
    </g>
    <circle class="fl-elec" cx="136" cy="182" r="13"/>
    <g><animateTransform attributeName="transform" type="translate" values="40 0;0 0;0 0;-40 0" keyTimes="0;.35;.75;1" dur="9s" begin="-3.6s" repeatCount="indefinite"/>
      <circle class="fl-dark" cx="136" cy="182" r="13.400"/><circle fill="#000" opacity=".5" cx="136" cy="182" r="13.400"/></g>
  </g>
  <rect class="fl-none st-ink" stroke-width="1.5" x="98" y="154" width="76" height="56" rx="8"/>
</g>

<!-- שלב 3: ליקוי לבנה -->
<g class="only-3">
  <path class="wire st-warm" style="stroke-width:1.6" d="M96 79.5L222 85.4"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M222 85.4Q238 86 284 105"/>
  <path class="flow" style="stroke-width:1.4" d="M96 79.5L222 85.4Q238 86 284 105"/>
  <path class="wire st-warm" style="stroke-width:1.6" d="M96 136.5L222 130.6"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M222 130.6Q238 130 284 111"/>
  <path class="flow" style="stroke-width:1.4" d="M96 136.5L222 130.6Q238 130 284 111"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 -30;0 30" dur="10s" begin="-4s" repeatCount="indefinite"/>
    <g transform="translate(284 108)"><circle class="fl-soft st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.13;.33;.67;.87;1" dur="10s" begin="-4s" repeatCount="indefinite"/><g transform="translate(284 108)"><circle class="fl-hot st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g></g>
  </g>
  <text x="166" y="24">כדור הארץ מטיל צל על הירח</text>
  <text x="166" y="40">ואור שהתכופף באטמוספרה מאדים אותו</text>
</g>

<!-- שלב 4: החצי הקרוב של המסלול, מעל כדור הארץ -->
<g class="from-4"><g opacity="0"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.501;1" dur="12s" begin="-11.4s" repeatCount="indefinite"/>
    <g><animateMotion dur="12s" begin="-11.4s" repeatCount="indefinite" calcMode="linear" path="M161.9 80.3L162.4 82.5L165.2 85.6L170.3 89.6L177.5 94.3L186.4 99.5L196.8 105L208.3 110.7L220.3 116.2L232.5 121.5L244.4 126.2L255.5 130.2L265.3 133.4L273.6 135.6L280 136.7L284.2 136.7L286.1 135.7L285.6 133.5L282.8 130.4L277.7 126.4L270.5 121.7L261.6 116.5L251.2 111L239.7 105.3L227.7 99.8L215.5 94.5L203.6 89.8L192.5 85.8L182.7 82.6L174.4 80.4L168 79.3L163.8 79.3L161.9 80.3"/>
      <path class="thin" style="stroke-dasharray:2 3;stroke-width:1.2" d="M33 0h26"/>
      <path class="fl-dark" opacity=".7" d="M1 -6.2L33 0L1 6.2z"/>
      <g transform="translate(0 0)"><circle class="fl-soft st-ink" stroke-width="1.6" r="6.4"/><circle class="fl-line" cx="-2" cy="-1.500" r="1.300"/><circle class="fl-line" cx="1.800" cy="2" r="1"/></g><path class="fl-dark" opacity=".55" d="M0 -6.4A6.4 6.4 0 0 1 0 6.4z"/>
    </g></g></g>
<g class="only-4">
  <path class="thin st-ink" style="stroke-width:1.3" d="M264 108A40 40 0 0 1 260.5 124.3"/>
  <text x="166" y="24">מסלול הירח נטוי בכ־5°</text>
  <text x="166" y="40">ולרוב הצל מחטיא</text>
  <text class="sm" x="246" y="192">הנטייה מוגזמת באיור</text>
</g>
`;
