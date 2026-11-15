// לוויין במסלול (מבט מעל הקוטב, לא בקנה מידה): 1 התותח של ניוטון, יריות חזקות יותר נופלות רחוק יותר · 2 במהירות הנכונה הפגז נופל סביב כדור הארץ · 3 לוויין מעל האטמוספרה נע בלי מנוע · 4 מסלול נמוך ומהיר מול מסלול גיאוסטציונרי שמסתובב יחד עם הקרקע
export default `
<defs>
  <clipPath id="orbit-earth"><circle cx="104" cy="114" r="44"/></clipPath>
</defs>
<!-- אטמוספרה דקה -->
<circle class="fl-cold-soft" cx="104" cy="114" r="49"/>
<g class="only-3"><circle class="fl-none st-cold" stroke-width="1.5" stroke-dasharray="2 3" cx="104" cy="114" r="49"/></g>

<!-- מסלול גיאוסטציונרי ונקודה קבועה על הקרקע: מסתובבים יחד פעם ביממה -->
<g class="from-4">
  <circle class="thin" style="stroke-dasharray:2 4" cx="104" cy="114" r="96"/>
</g>

<!-- ההר והתותח -->
<path class="body fl-soft" d="M88 76L99 61H110L120 76z"/>
<!-- כדור הארץ -->
<circle class="fl-cold st-ink" stroke-width="2" cx="104" cy="114" r="44"/>
<g class="only-1 only-2 only-3" clip-path="url(#orbit-earth)"><g class="fl-green st-ink" stroke-width="1.2" stroke-linejoin="round" transform="translate(104 114) scale(1.25) translate(-126 -112)">
    <path d="M131 92C138 88 147 92 149 100C151 108 146 112 141 111C136 110 137 104 132 102C127 100 126 95 131 92z"/>
    <path d="M104 100C109 96 116 99 117 106C118 114 124 118 121 126C118 133 109 134 105 128C101 122 99 105 104 100z"/>
    <path d="M134 124C140 121 148 125 147 132C146 138 138 141 133 137C129 134 129 127 134 124z"/>
  </g></g>
<g class="from-4">
  <g><animateTransform attributeName="transform" type="rotate" from="0 104 114" to="-360 104 114" dur="48s" repeatCount="indefinite"/>
    <g clip-path="url(#orbit-earth)"><g class="fl-green st-ink" stroke-width="1.2" stroke-linejoin="round" transform="translate(104 114) scale(1.25) translate(-126 -112)">
    <path d="M131 92C138 88 147 92 149 100C151 108 146 112 141 111C136 110 137 104 132 102C127 100 126 95 131 92z"/>
    <path d="M104 100C109 96 116 99 117 106C118 114 124 118 121 126C118 133 109 134 105 128C101 122 99 105 104 100z"/>
    <path d="M134 124C140 121 148 125 147 132C146 138 138 141 133 137C129 134 129 127 134 124z"/>
  </g></g>
    <path class="wire st-violet dash rev" style="stroke-width:1.6;stroke-dasharray:3 5" d="M157 114H192"/>
    <!-- צלחת קליטה על הקרקע -->
    <path class="thin st-ink" d="M148 114h4"/>
    <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M152 108Q159 114 152 120Q149 114 152 108z"/>
    <circle class="fl-hot st-ink" stroke-width="1" cx="148" cy="114" r="2.600"/>
    <!-- לוויין גיאוסטציונרי -->
    <g transform="translate(200 114) rotate(90)"><g transform="scale(1.15)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
  </g>
</g>
<circle class="fl-none st-ink" stroke-width="2" cx="104" cy="114" r="44"/>
<!-- תותח -->
<circle class="fl-dark st-ink" stroke-width="1.2" cx="107" cy="59" r="3"/>
<rect class="fl-dark st-ink" stroke-width="1.2" x="95" y="53" width="16" height="6" rx="1.5"/>

<!-- שלב 1: יריות במהירות הולכת וגדלה -->
<g class="hl-1">
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M104 56L103.4 56L102.7 56L102.1 56.1L101.4 56.2L100.8 56.3L100.2 56.4L99.5 56.6L98.9 56.8L98.2 57L97.6 57.2L97 57.4L96.4 57.7L95.8 58L95.1 58.3L94.5 58.7L93.9 59L93.3 59.4L92.7 59.9L92.1 60.3L91.5 60.8L90.9 61.3L90.4 61.8L89.8 62.3L89.2 62.9L88.7 63.5L88.1 64.2L87.6 64.8L87.1 65.5L86.5 66.2L86 67L85.5 67.7L85 68.5L84.6 69.4L84.1 70.2L83.7 71.1L83.2 72L82.8 73L82.4 74L82.1 75L81.7 76.1"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M104 56L102.9 56L101.8 56.1L100.7 56.2L99.6 56.3L98.5 56.5L97.5 56.7L96.4 56.9L95.3 57.2L94.2 57.5L93.2 57.9L92.1 58.3L91.1 58.7L90 59.2L89 59.7L88 60.3L87 60.9L86 61.5L85 62.1L84.1 62.8L83.1 63.6L82.2 64.4L81.2 65.2L80.4 66.1L79.5 67L78.6 67.9L77.8 68.9L77 69.9L76.2 71L75.4 72.1L74.7 73.2L74 74.4L73.3 75.7L72.7 76.9L72.1 78.2L71.5 79.6L71 81L70.5 82.4L70 83.9L69.6 85.4L69.3 87"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M104 56L102.3 56L100.7 56.1L99 56.3L97.3 56.5L95.7 56.8L94 57.2L92.4 57.6L90.8 58.1L89.2 58.7L87.6 59.3L86 60L84.5 60.8L83 61.6L81.5 62.5L80 63.5L78.6 64.5L77.2 65.6L75.8 66.7L74.5 67.9L73.2 69.2L72 70.6L70.8 72L69.6 73.5L68.5 75L67.5 76.6L66.5 78.2L65.6 79.9L64.7 81.6L63.9 83.5L63.2 85.3L62.6 87.3L62 89.2L61.5 91.2L61.1 93.3L60.8 95.4L60.5 97.6L60.4 99.7L60.4 102L60.5 104.2L60.7 106.5"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M104 56L101.4 56.1L98.7 56.3L96.1 56.6L93.5 57.1L90.9 57.8L88.4 58.6L85.9 59.5L83.5 60.6L81 61.8L78.7 63.1L76.4 64.6L74.2 66.2L72.1 67.9L70.1 69.7L68.1 71.7L66.3 73.8L64.6 76L63 78.4L61.5 80.8L60.1 83.3L58.9 85.9L57.8 88.7L56.9 91.5L56.1 94.4L55.5 97.3L55.1 100.3L54.8 103.4L54.8 106.5L54.9 109.6L55.3 112.7L55.8 115.9L56.5 119L57.5 122.2L58.6 125.2L60 128.3L61.6 131.2L63.4 134.1L65.4 136.9L67.7 139.5L70.1 142"/>
<path class="wire st-hot" style="stroke-width:2" d="M78.2 72.2l6 6M84.2 72.2l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M65.5 83.3l6 6M71.5 83.3l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M56.7 103.3l6 6M62.7 103.3l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M66.3 139.7l6 6M72.3 139.7l-6 6"/>
<circle class="fl-ink" r="3"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.057;0.115;0.174;0.234;0.295;0.359;0.425;0.495;0.567;0.644;0.725;0.811;0.903;1;1" keyTimes="0;0.0273;0.0331;0.0389;0.0448;0.0506;0.0564;0.0622;0.0681;0.0739;0.0797;0.0856;0.0914;0.0972;0.1030;0.1089;1" path="M104 56L102.2 56.1L100.3 56.4L98.5 56.9L96.7 57.5L95 58.4L93.2 59.5L91.5 60.8L89.9 62.3L88.3 64L86.8 65.9L85.3 68.1L84 70.5L82.8 73.2L81.7 76.1"/></circle>
<circle class="fl-ink" r="3"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.062;0.125;0.188;0.251;0.316;0.383;0.450;0.520;0.593;0.667;0.745;0.826;0.911;1;1" keyTimes="0;0.1545;0.1619;0.1693;0.1767;0.1841;0.1914;0.1988;0.2062;0.2136;0.2209;0.2283;0.2357;0.2431;0.2504;0.2578;1" path="M104 56L100.9 56.2L97.8 56.6L94.7 57.4L91.7 58.5L88.7 59.9L85.9 61.6L83.1 63.6L80.5 65.9L78 68.6L75.7 71.6L73.7 74.9L71.9 78.6L70.4 82.6L69.3 87"/></circle>
<circle class="fl-ink" r="3"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.064;0.128;0.192;0.257;0.323;0.390;0.459;0.529;0.602;0.676;0.752;0.832;0.914;1;1" keyTimes="0;0.3091;0.3189;0.3287;0.3385;0.3483;0.3581;0.3680;0.3778;0.3876;0.3974;0.4072;0.4170;0.4268;0.4366;0.4465;1" path="M104 56L99.2 56.3L94.5 57.1L89.9 58.4L85.4 60.3L81.1 62.8L77 65.7L73.2 69.2L69.8 73.2L66.8 77.7L64.3 82.7L62.3 88.1L61 93.9L60.4 100L60.7 106.5"/></circle>
<circle class="fl-ink" r="3"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.064;0.128;0.192;0.258;0.324;0.392;0.461;0.532;0.604;0.679;0.756;0.835;0.916;1;1" keyTimes="0;0.5091;0.5235;0.5379;0.5522;0.5666;0.5810;0.5954;0.6098;0.6242;0.6386;0.6530;0.6673;0.6817;0.6961;0.7105;1" path="M104 56L96.5 56.6L89.1 58.3L82.1 61.2L75.5 65.2L69.5 70.3L64.3 76.4L60.1 83.3L57 91.1L55.2 99.4L54.8 108.3L56.1 117.2L59 126.1L63.7 134.5L70.1 142"/></circle>
</g>

<!-- המסלול המעגלי -->
<g class="from-2"><circle class="wire st-green" style="stroke-width:1.6;stroke-dasharray:4 4" cx="104" cy="114" r="58"/></g>
<g class="only-2">
  <g><animateMotion dur="7s" begin="-.6s" repeatCount="indefinite" rotate="auto" path="M104 56A58 58 0 1 0 104 172A58 58 0 1 0 104 56"/>
    <path class="arrow st-hot" style="stroke-width:2.6" d="M0 -5V-23M-4.500 -17.500L0 -24L4.500 -17.500"/>
    <path class="arrow st-green" style="stroke-width:2.6" d="M5 0H25M19.500 -4.500L26 0L19.500 4.500"/>
    <circle class="fl-ink" r="3.600"/>
  </g>
  <text x="246" y="30">ב־7.8 ק״מ בשנייה הפגז</text>
  <text x="246" y="46">נופל ולעולם אינו פוגע</text>
  <path class="arrow st-green" style="stroke-width:2.6" d="M306 170H286M291.500 165.500L285 170L291.500 174.500"/>
  <text x="278" y="174" text-anchor="end">מהירות הצידה</text>
  <path class="arrow st-hot" style="stroke-width:2.6" d="M296 182V200M291.500 194.500L296 201L300.500 194.500"/>
  <text x="278" y="196" text-anchor="end">נפילה אל המרכז</text>
</g>
<g class="only-3">
  <g><animateMotion dur="7s" begin="-.5s" repeatCount="indefinite" rotate="auto" path="M104 56A58 58 0 1 0 104 172A58 58 0 1 0 104 56"/><g transform="scale(1)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
  <text x="246" y="30">מעל האטמוספרה אין אוויר</text>
  <text x="246" y="46">ולכן לא צריך מנוע</text>
</g>
<g class="from-4">
  <g><animateMotion dur="3s" begin="-.3s" repeatCount="indefinite" rotate="auto" path="M104 56A58 58 0 1 0 104 172A58 58 0 1 0 104 56"/><g transform="scale(1)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
</g>
<g class="only-1">
  <text x="246" y="30">יורים חזק יותר —</text>
  <text x="246" y="46">והפגז נופל רחוק יותר</text>
</g>
<g class="only-4">
  <text x="262" y="24">בגובה 400 ק״מ</text>
  <text x="262" y="40">הקפה ב־90 דקות</text>
  <text x="260" y="176">בגובה 36,000 ק״מ</text>
  <text x="260" y="192">הקפה ביממה —</text>
  <text x="260" y="208">תמיד מעל אותה נקודה</text>
</g>
`;
