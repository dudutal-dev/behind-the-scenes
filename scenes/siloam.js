// ניקבת השילוח: 1 מים מהגיחון אל בריכת השילוח · 2 שני צוותים חוצבים זה לקראת זה · 3 מסלול מתפתל, תיקוני כיוון והכוונה בקול · 4 שיפוע של כ־30 ס"מ לכל האורך
export default `
<defs>
  <marker id="siloam-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="siloam-rock"><rect x="20" y="158" width="280" height="44"/></clipPath>
</defs>

<!-- ===== מבט מלמעלה ===== -->
<!-- רכס עיר דוד -->
<path class="fl-soft" d="M30 132Q20 92 70 70Q120 40 190 30Q262 18 300 40Q312 70 270 92Q210 120 150 128Q90 140 30 132z"/>
<!-- הנקבה החצובה -->
<path class="pipe st-line" d="M262 36C232 40 252 82 204 80C168 78 170 44 136 50C104 56 104 116 66 122"/>

<!-- שלב 1: מים זורמים מהמעיין אל הבריכה -->
<g class="hl-1">
  <circle class="fl-cold-soft st-cold" stroke-width="2" cx="266" cy="34" r="8"/>
  <path class="fl-cold" d="M266 29q-4 5 0 8q4-3 0-8z"/>
  <rect class="fl-cold-soft st-cold" stroke-width="2" x="46" y="116" width="24" height="14" rx="2"/>
  <path class="wire st-cold" style="stroke-width:3" d="M262 36C232 40 252 82 204 80C168 78 170 44 136 50C104 56 104 116 66 122"/>
  <path class="flow" d="M262 36C232 40 252 82 204 80C168 78 170 44 136 50C104 56 104 116 66 122"/>
</g>

<!-- שלב 2: שני צוותים חוצבים מהקצוות אל נקודת המפגש -->
<g class="only-2">
  <path class="wire st-warm" style="stroke-width:4" pathLength="100" stroke-dasharray="100 100" d="M262 36C232 40 252 82 204 80C168 78 170 44 136 50">
    <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;.8;1" dur="4s" repeatCount="indefinite"/>
  </path>
  <path class="wire st-warm" style="stroke-width:4" pathLength="100" stroke-dasharray="100 100" d="M66 122C104 116 104 56 136 50">
    <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;.8;1" dur="4s" repeatCount="indefinite"/>
  </path>
  <g class="fl-ink">
    <circle r="3.4"><animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear" path="M262 36C232 40 252 82 204 80C168 78 170 44 136 50"/></circle>
    <circle r="3.4"><animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear" path="M66 122C104 116 104 56 136 50"/></circle>
  </g>
  <circle class="fl-elec" cx="136" cy="50" r="5"><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.78;.85;1" dur="4s" repeatCount="indefinite"/></circle>
</g>

<!-- שלב 3: קו ישר לעומת המסלול, פניות ללא מוצא וקולות מפני השטח -->
<g class="hl-3">
  <path class="wire st-hot" style="stroke-width:2" d="M131 47L124 40M141 53L148 58M132 54L126 60"/>
</g>
<g class="only-3">
  <path class="wire st-ink" style="stroke-width:1.4" stroke-dasharray="4 4" d="M258 40L72 118"/>
  <circle class="ring st-violet" cx="136" cy="50" r="16"/>
  <circle class="ring st-violet d3" cx="136" cy="50" r="16"/>
</g>

<!-- ===== חתך לאורך הנקבה: השיפוע (מוגדל מאוד) ===== -->
<g class="hl-4">
  <rect class="fl-soft st-line" stroke-width="1.5" x="20" y="158" width="280" height="44" rx="3"/>
  <g clip-path="url(#siloam-rock)">
    <path class="fl-bg st-ink" stroke-width="1.5" stroke-linejoin="round" d="M300 170L20 182V196L300 184z"/>
    <path class="fl-cold-soft" d="M300 178L20 190V196L300 184z"/>
  </g>
  <path class="wire st-ink" style="stroke-width:1.2" d="M300 184L20 196"/>
</g>
<g class="only-4">
  <path class="flow" d="M296 181L24 193"/>
  <path class="wire st-hot" style="stroke-width:1.4" d="M24 184H60M24 184V196"/>
  <path class="thin st-ink" style="stroke-width:1" stroke-dasharray="3 3" d="M300 184H40"/>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="284" y="16">מעיין הגיחון</text>
  <text x="58" y="146">בריכת השילוח</text>
</g>
<g class="only-2">
  <text x="66" y="20">שני צוותים</text>
  <text x="66" y="34">חוצבים זה לקראת זה</text>
  <text x="196" y="112">כ־533 מטר בסלע</text>
</g>
<g class="only-3">
  <text x="66" y="20">מסלול מתפתל</text>
  <text x="66" y="34">ופניות ללא מוצא</text>
  <text x="196" y="112">קו ישר</text>
  <text x="152" y="20">הכוונה בקול?</text>
</g>
<g class="only-4">
  <text x="160" y="150">ירידה של כ־30 ס״מ בלבד</text>
  <text class="sm" x="250" y="212">השיפוע מוגדל באיור</text>
</g>
`;
