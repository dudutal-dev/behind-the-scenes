// לוויין במסלול (מבט מעל הקוטב, לא בקנה מידה): 1 התותח של ניוטון, יריות חזקות יותר נופלות רחוק יותר · 2 במהירות הנכונה הפגז נופל סביב כדור הארץ · 3 לוויין מעל האטמוספרה נע בלי מנוע · 4 מבט רחוק: מסלול נמוך ומהיר מול מסלול גיאוסטציונרי שמסתובב יחד עם הקרקע
export default `
<defs>
  <clipPath id="orbit-eb"><circle cx="112" cy="124" r="61.6"/></clipPath>
  <clipPath id="orbit-es"><circle cx="116" cy="112" r="44"/></clipPath>
</defs>

<!-- ===== מבט קרוב, שלבים 1 עד 3: התותח של ניוטון ===== -->
<g class="only-1 only-2 only-3">
  <circle class="fl-cold-soft" cx="112" cy="124" r="68.6"/>
  <g transform="translate(112 124) scale(1.4)"><path class="body fl-soft" style="stroke-width:1.4" d="M-16 -38L-5 -53H6L16 -38z"/></g>
  <circle class="fl-cold st-ink" stroke-width="2" cx="112" cy="124" r="61.6"/>
  <g clip-path="url(#orbit-eb)"><g class="fl-green st-ink" stroke-width="0.7" stroke-linejoin="round" transform="translate(112 124) scale(1.75) translate(-126 -112)">
    <path d="M131 92C138 88 147 92 149 100C151 108 146 112 141 111C136 110 137 104 132 102C127 100 126 95 131 92z"/>
    <path d="M104 100C109 96 116 99 117 106C118 114 124 118 121 126C118 133 109 134 105 128C101 122 99 105 104 100z"/>
    <path d="M134 124C140 121 148 125 147 132C146 138 138 141 133 137C129 134 129 127 134 124z"/>
  </g></g>
  <circle class="fl-none st-ink" stroke-width="2" cx="112" cy="124" r="61.6"/>
  <g class="hl-1">
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M112 42.8L111.1 42.8L110.2 42.9L109.3 42.9L108.4 43.1L107.5 43.2L106.6 43.4L105.7 43.6L104.8 43.9L103.9 44.1L103.1 44.5L102.2 44.8L101.3 45.2L100.5 45.6L99.6 46L98.7 46.5L97.9 47.1L97 47.6L96.2 48.2L95.3 48.8L94.5 49.5L93.7 50.2L92.9 50.9L92.1 51.7L91.3 52.5L90.5 53.3L89.8 54.2L89 55.2L88.3 56.1L87.6 57.1L86.8 58.1L86.1 59.2L85.5 60.4L84.8 61.5L84.2 62.7L83.5 64L82.9 65.3L82.4 66.6L81.8 68L81.3 69.4L80.8 70.9"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M112 42.8L110.5 42.8L108.9 42.9L107.4 43L105.9 43.2L104.4 43.5L102.8 43.8L101.3 44.1L99.8 44.5L98.3 44.9L96.9 45.4L95.4 46L93.9 46.6L92.5 47.3L91 48L89.6 48.8L88.2 49.6L86.8 50.5L85.4 51.4L84.1 52.4L82.7 53.4L81.4 54.5L80.1 55.7L78.9 56.9L77.7 58.2L76.5 59.5L75.3 60.9L74.2 62.3L73.1 63.8L72 65.3L71 66.9L70 68.6L69 70.3L68.2 72.1L67.3 73.9L66.5 75.8L65.8 77.8L65.1 79.8L64.5 81.8L63.9 83.9L63.4 86.1"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M112 42.8L109.6 42.8L107.3 43L105 43.2L102.7 43.5L100.3 44L98.1 44.5L95.8 45.1L93.5 45.8L91.3 46.6L89.1 47.5L86.9 48.4L84.7 49.5L82.6 50.7L80.5 51.9L78.4 53.3L76.4 54.7L74.5 56.2L72.6 57.8L70.7 59.5L68.9 61.3L67.2 63.2L65.5 65.2L63.9 67.2L62.4 69.4L60.9 71.6L59.5 73.9L58.2 76.3L57 78.7L55.9 81.3L54.9 83.9L54 86.6L53.2 89.3L52.5 92.1L51.9 95L51.5 98L51.2 101L51 104L50.9 107.1L51 110.3L51.3 113.5"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M112 42.8L108.3 42.9L104.6 43.2L101 43.7L97.3 44.4L93.7 45.3L90.2 46.4L86.7 47.7L83.2 49.2L79.9 50.9L76.6 52.7L73.4 54.8L70.3 57L67.4 59.4L64.5 62L61.8 64.8L59.2 67.7L56.8 70.8L54.5 74.1L52.4 77.5L50.6 81L48.8 84.7L47.3 88.5L46 92.5L45 96.5L44.1 100.6L43.5 104.8L43.2 109.1L43.1 113.5L43.3 117.8L43.8 122.2L44.5 126.7L45.5 131.1L46.9 135.4L48.5 139.7L50.4 144L52.7 148.1L55.2 152.2L58 156L61.1 159.7L64.5 163.2"/>
<path class="wire st-hot" style="stroke-width:2" d="M77 66.6l6 6M83 66.6l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M59.2 82.2l6 6M65.2 82.2l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M46.8 110.2l6 6M52.8 110.2l-6 6"/><path class="wire st-hot" style="stroke-width:2" d="M60.4 161.2l6 6M66.4 161.2l-6 6"/>
<circle class="fl-ink" r="3.4"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.057;0.115;0.174;0.234;0.295;0.359;0.425;0.495;0.567;0.644;0.725;0.811;0.903;1;1" keyTimes="0;0.0273;0.0331;0.0389;0.0448;0.0506;0.0564;0.0622;0.0681;0.0739;0.0797;0.0856;0.0914;0.0972;0.1030;0.1089;1" path="M112 42.8L109.4 42.9L106.9 43.3L104.3 44L101.8 45L99.3 46.2L96.9 47.7L94.5 49.5L92.2 51.6L90 54L87.9 56.7L85.9 59.7L84 63.1L82.3 66.8L80.8 70.9"/></circle>
<circle class="fl-ink" r="3.4"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.062;0.125;0.188;0.251;0.316;0.383;0.450;0.520;0.593;0.667;0.745;0.826;0.911;1;1" keyTimes="0;0.1545;0.1619;0.1693;0.1767;0.1841;0.1914;0.1988;0.2062;0.2136;0.2209;0.2283;0.2357;0.2431;0.2504;0.2578;1" path="M112 42.8L107.6 43L103.3 43.7L99 44.7L94.7 46.3L90.6 48.2L86.6 50.6L82.7 53.4L79.1 56.7L75.6 60.5L72.4 64.7L69.6 69.3L67.1 74.4L65 80.1L63.4 86.1"/></circle>
<circle class="fl-ink" r="3.4"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.064;0.128;0.192;0.257;0.323;0.390;0.459;0.529;0.602;0.676;0.752;0.832;0.914;1;1" keyTimes="0;0.3091;0.3189;0.3287;0.3385;0.3483;0.3581;0.3680;0.3778;0.3876;0.3974;0.4072;0.4170;0.4268;0.4366;0.4465;1" path="M112 42.8L105.3 43.2L98.7 44.3L92.2 46.2L85.9 48.9L79.9 52.3L74.2 56.4L68.9 61.3L64.1 66.9L59.9 73.2L56.4 80.2L53.6 87.7L51.8 95.9L51 104.5L51.3 113.5"/></circle>
<circle class="fl-ink" r="3.4"><animateMotion dur="11s" begin="-7.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.000;0.064;0.128;0.192;0.258;0.324;0.392;0.461;0.532;0.604;0.679;0.756;0.835;0.916;1;1" keyTimes="0;0.5091;0.5235;0.5379;0.5522;0.5666;0.5810;0.5954;0.6098;0.6242;0.6386;0.6530;0.6673;0.6817;0.6961;0.7105;1" path="M112 42.8L101.5 43.6L91.2 46.1L81.3 50.1L72.1 55.7L63.7 62.8L56.5 71.3L50.6 81L46.2 91.9L43.7 103.6L43.2 116L44.9 128.5L49 141L55.6 152.7L64.5 163.2"/></circle>
  </g>
  <g transform="translate(112 124) scale(1.4)"><circle class="fl-dark st-ink" stroke-width="0.9" cx="3" cy="-55" r="3"/><rect class="fl-dark st-ink" stroke-width="0.9" x="-9" y="-61" width="16" height="6" rx="1.5"/></g>
</g>
<g class="only-2 only-3"><circle class="wire st-green" style="stroke-width:1.6;stroke-dasharray:4 4" cx="112" cy="124" r="81.2"/></g>
<g class="only-1">
  <text x="244" y="30">יורים חזק יותר —</text>
  <text x="244" y="46">והפגז נופל רחוק יותר</text>
</g>
<g class="only-2">
  <g><animateMotion dur="7s" begin="-.2s" repeatCount="indefinite" rotate="auto" path="M112 42.8A81.2 81.2 0 1 0 112 205.2A81.2 81.2 0 1 0 112 42.8"/>
    <path class="arrow st-hot" style="stroke-width:3" d="M0 -6V-27M-5 -21L0 -28.500L5 -21"/>
    <path class="arrow st-green" style="stroke-width:3" d="M6 0H28M22 -5L29.500 0L22 5"/>
    <circle class="fl-ink" r="4.200"/>
  </g>
  <text x="246" y="30">ב־7.8 ק״מ בשנייה הפגז</text>
  <text x="246" y="46">נופל ולעולם אינו פוגע</text>
  <path class="arrow st-green" style="stroke-width:2.6" d="M308 172H290M295.500 167.500L289 172L295.500 176.500"/>
  <text x="238" y="176">מהירות הצידה</text>
  <path class="arrow st-hot" style="stroke-width:2.6" d="M299 184V201M294.500 195.500L299 202L303.500 195.500"/>
  <text x="238" y="198">נפילה אל המרכז</text>
</g>
<g class="only-3">
  <circle class="fl-none st-cold" stroke-width="1.6" stroke-dasharray="2 3.5" cx="112" cy="124" r="68.6"/>
  <g><animateMotion dur="7s" begin="-1.4s" repeatCount="indefinite" rotate="auto" path="M112 42.8A81.2 81.2 0 1 0 112 205.2A81.2 81.2 0 1 0 112 42.8"/><g transform="scale(1.3)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
  <text x="246" y="30">מעל האטמוספרה אין אוויר</text>
  <text x="246" y="46">שיאט את הלוויין</text>
  <text x="258" y="176">ולכן הוא ממשיך</text>
  <text x="258" y="192">שנים בלי מנוע</text>
</g>

<!-- ===== מבט רחוק, שלב 4 והמבט הכולל: מסלול נמוך מול מסלול גיאוסטציונרי ===== -->
<g class="from-4">
  <circle class="thin" style="stroke-dasharray:2 4" cx="116" cy="112" r="96"/>
  <circle class="fl-cold-soft" cx="116" cy="112" r="49"/>
  <g transform="translate(116 112) scale(1)"><path class="body fl-soft" style="stroke-width:2" d="M-16 -38L-5 -53H6L16 -38z"/></g>
  <circle class="fl-cold st-ink" stroke-width="2" cx="116" cy="112" r="44"/>
  <g><animateTransform attributeName="transform" type="rotate" from="0 116 112" to="-360 116 112" dur="48s" repeatCount="indefinite"/>
    <g clip-path="url(#orbit-es)"><g class="fl-green st-ink" stroke-width="1" stroke-linejoin="round" transform="translate(116 112) scale(1.25) translate(-126 -112)">
    <path d="M131 92C138 88 147 92 149 100C151 108 146 112 141 111C136 110 137 104 132 102C127 100 126 95 131 92z"/>
    <path d="M104 100C109 96 116 99 117 106C118 114 124 118 121 126C118 133 109 134 105 128C101 122 99 105 104 100z"/>
    <path d="M134 124C140 121 148 125 147 132C146 138 138 141 133 137C129 134 129 127 134 124z"/>
  </g></g>
    <circle class="fl-none st-ink" stroke-width="2" cx="116" cy="112" r="44"/>
    <path class="wire st-violet dash rev" style="stroke-width:1.6;stroke-dasharray:3 5" d="M170 112H205"/>
    <path class="thin st-ink" d="M160 112h4"/>
    <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M164 106Q171 112 164 118Q161 112 164 106z"/>
    <circle class="fl-hot st-ink" stroke-width="1" cx="160" cy="112" r="2.800"/>
    <g transform="translate(212 112) rotate(90)"><g transform="scale(1.15)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
  </g>
  <g class="hl-1">
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M116 54L115.4 54L114.7 54L114.1 54.1L113.4 54.2L112.8 54.3L112.2 54.4L111.5 54.6L110.9 54.8L110.2 55L109.6 55.2L109 55.4L108.4 55.7L107.8 56L107.1 56.3L106.5 56.7L105.9 57L105.3 57.4L104.7 57.9L104.1 58.3L103.5 58.8L102.9 59.3L102.4 59.8L101.8 60.3L101.2 60.9L100.7 61.5L100.1 62.2L99.6 62.8L99.1 63.5L98.5 64.2L98 65L97.5 65.7L97 66.5L96.6 67.4L96.1 68.2L95.7 69.1L95.2 70L94.8 71L94.4 72L94.1 73L93.7 74.1"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M116 54L114.9 54L113.8 54.1L112.7 54.2L111.6 54.3L110.5 54.5L109.5 54.7L108.4 54.9L107.3 55.2L106.2 55.5L105.2 55.9L104.1 56.3L103.1 56.7L102 57.2L101 57.7L100 58.3L99 58.9L98 59.5L97 60.1L96.1 60.8L95.1 61.6L94.2 62.4L93.2 63.2L92.4 64.1L91.5 65L90.6 65.9L89.8 66.9L89 67.9L88.2 69L87.4 70.1L86.7 71.2L86 72.4L85.3 73.7L84.7 74.9L84.1 76.2L83.5 77.6L83 79L82.5 80.4L82 81.9L81.6 83.4L81.3 85"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M116 54L114.3 54L112.7 54.1L111 54.3L109.3 54.5L107.7 54.8L106 55.2L104.4 55.6L102.8 56.1L101.2 56.7L99.6 57.3L98 58L96.5 58.8L95 59.6L93.5 60.5L92 61.5L90.6 62.5L89.2 63.6L87.8 64.7L86.5 65.9L85.2 67.2L84 68.6L82.8 70L81.6 71.5L80.5 73L79.5 74.6L78.5 76.2L77.6 77.9L76.7 79.6L75.9 81.5L75.2 83.3L74.6 85.3L74 87.2L73.5 89.2L73.1 91.3L72.8 93.4L72.5 95.6L72.4 97.7L72.4 100L72.5 102.2L72.7 104.5"/>
<path class="thin st-ink" style="stroke-width:1.3;stroke-dasharray:3 3.5" d="M116 54L113.4 54.1L110.7 54.3L108.1 54.6L105.5 55.1L102.9 55.8L100.4 56.6L97.9 57.5L95.5 58.6L93 59.8L90.7 61.1L88.4 62.6L86.2 64.2L84.1 65.9L82.1 67.7L80.1 69.7L78.3 71.8L76.6 74L75 76.4L73.5 78.8L72.1 81.3L70.9 83.9L69.8 86.7L68.9 89.5L68.1 92.4L67.5 95.3L67.1 98.3L66.8 101.4L66.8 104.5L66.9 107.6L67.3 110.7L67.8 113.9L68.5 117L69.5 120.2L70.6 123.2L72 126.3L73.6 129.2L75.4 132.1L77.4 134.9L79.7 137.5L82.1 140"/>

<circle class="fl-ink" r="2.200" cx="93.7" cy="74.1"/><circle class="fl-ink" r="2.200" cx="81.3" cy="85"/><circle class="fl-ink" r="2.200" cx="72.7" cy="104.5"/><circle class="fl-ink" r="2.200" cx="82.1" cy="140"/>  </g>
  <g transform="translate(116 112) scale(1)"><circle class="fl-dark st-ink" stroke-width="1.2" cx="3" cy="-55" r="3"/><rect class="fl-dark st-ink" stroke-width="1.2" x="-9" y="-61" width="16" height="6" rx="1.5"/></g>
  <circle class="wire st-green" style="stroke-width:1.6;stroke-dasharray:4 4" cx="116" cy="112" r="58"/>
  <g><animateMotion dur="3s" begin="-.3s" repeatCount="indefinite" rotate="auto" path="M116 54A58 58 0 1 0 116 170A58 58 0 1 0 116 54"/><g transform="scale(1)"><path class="fl-cold st-ink" stroke-width="1" d="M-11 -2.500H-4V2.500H-11zM4 -2.500H11V2.500H4z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="-4" y="-4" width="8" height="8" rx="1.2"/></g></g>
</g>
<g class="only-4">
  <text x="268" y="24">בגובה 400 ק״מ:</text>
  <text x="268" y="40">הקפה ב־90 דקות</text>
  <text x="257" y="178">בגובה 36,000 ק״מ:</text>
  <text x="257" y="194">הקפה ביממה,</text>
  <text x="257" y="208">מעל אותה נקודה</text>
</g>
`;
