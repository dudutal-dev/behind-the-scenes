// איך השמש מאירה: 1 הכבידה דוחסת את הליבה ל־15 מיליון מעלות · 2 בהגדלה: גרעיני מימן מתנגשים ומתאחדים להליום · 3 ההליום קל מארבעת המימנים, ההפרש יוצא כאור והלחץ החוצה מאזן את הכבידה · 4 פוטון מתפתל החוצה רבבות שנים ואז מגיע לכדור הארץ בשמונה דקות
export default `
<defs>
  <clipPath id="sun-disc"><circle cx="40" cy="110" r="100"/></clipPath>
</defs>
<!-- ===== השמש בחתך: ליבה, אזור הקרינה, אזור ההסעה, פני השמש ===== -->
<circle class="fl-hot" cx="40" cy="110" r="100"/>
<circle class="fl-warm" cx="40" cy="110" r="93"/>
<circle class="fl-elec" cx="40" cy="110" r="66"/>
<circle class="thin st-dark" style="stroke-width:1;stroke-dasharray:2 3" cx="40" cy="110" r="66"/>
<circle class="thin st-dark" style="stroke-width:1;stroke-dasharray:2 3" cx="40" cy="110" r="93"/>
<g class="hl-1 hl-2">
  <circle fill="#fff" cx="40" cy="110" r="26"/>
  <circle class="fl-elec pulse" opacity=".55" cx="40" cy="110" r="19"/>
</g>
<circle class="fl-none st-dark" stroke-width="1.5" cx="40" cy="110" r="26"/>
<circle class="fl-none st-ink" stroke-width="2" cx="40" cy="110" r="100"/>
<!-- תאי הסעה -->
<g>
  <ellipse class="wire st-hot dash" style="stroke-width:1.4;stroke-dasharray:3 3" cx="53.7" cy="32.2" rx="9.500" ry="5.500" transform="rotate(-80 53.7 32.2)"/>
  <ellipse class="wire st-hot dash rev" style="stroke-width:1.4;stroke-dasharray:3 3" cx="94.9" cy="53.2" rx="9.500" ry="5.500" transform="rotate(-46 94.9 53.2)"/>
  <ellipse class="wire st-hot dash" style="stroke-width:1.4;stroke-dasharray:3 3" cx="72.1" cy="182.2" rx="9.500" ry="5.500" transform="rotate(66 72.1 182.2)"/>
  <ellipse class="wire st-hot dash rev" style="stroke-width:1.4;stroke-dasharray:3 3" cx="24.9" cy="187.5" rx="9.500" ry="5.500" transform="rotate(101 24.9 187.5)"/>
</g>
<!-- כבידה פנימה -->
<g class="hl-1 hl-3">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0.5 4;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-dark" style="stroke-width:3" d="M27.7 9.8L31 36.6M26.4 32.1L31 36.6L34.3 31.1"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-1.8 3.6;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-dark" style="stroke-width:3" d="M85.9 20L73.6 44.1M72.3 37.8L73.6 44.1L79.4 41.4"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-3.4 -2.1;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-dark" style="stroke-width:3" d="M125.7 163.5L102.8 149.2M109.1 148.5L102.8 149.2L104.9 155.3"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-0.4 -4;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-dark" style="stroke-width:3" d="M50.6 210.4L47.7 183.6M52.2 188.1L47.7 183.6L44.3 189"/></g>
</g>
<!-- לחץ החוצה -->
<g class="hl-3">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-0.5 -4;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3" d="M35.9 76.3L32.9 52.4M37.5 56.9L32.9 52.4L29.6 57.9"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;1.8 -3.6;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3" d="M55.4 79.7L66.3 58.3M67.6 64.6L66.3 58.3L60.5 61"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;3.4 2.1;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3" d="M68.8 128L89.2 140.7M82.8 141.5L89.2 140.7L87.1 134.7"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0.4 4;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3" d="M43.6 143.8L46.1 167.7M41.6 163.1L46.1 167.7L49.5 162.3"/></g>
</g>
<!-- מסע הפוטון -->
<g class="hl-4">
  <path class="thin st-dark" style="stroke-width:1.600" d="M53.4 124.9L56.8 123.4L55.1 127.6L53.8 131.8L57.3 132.7L61 130.1L67.4 129.1L58.8 141.6L64.3 137.3L65.5 142L64.3 147.4L66.9 148.4L72.9 141.4L66.6 150.6L69.4 152.3L74.4 149.7L81 147.7L79.3 150.2L73.8 158.4L80 152L81.2 153.9L80.4 157.8L83.7 157.5L84.2 162.5L85.5 165.4L88.2 168.8L94.1 166.3L90.1 173.1L90.2 173.9L99.6 167.4L99.7 169.2L96.6 171.8L90.6 176.9L93.9 179.6L104.4 175.9L105.4 171.9L104.3 174.6L101 182.5L108.1 178.9L106.9 184.3"/>
  <path class="wire st-warm" style="stroke-width:1.800;stroke-dasharray:4 4" d="M106.9 184.3L295 194.7"/>
  <circle class="fl-cold st-ink" stroke-width="1.500" cx="304" cy="196" r="7"/>
  <path class="fl-green" d="M300 194c2 -3 5 -2 5 1c0 2 2 3 1 5c-2 2 -5 0 -5 -2c-1 -1 -2 -2 -1 -4z"/>
  <circle fill="#fff" class="st-ink" stroke-width="1.300" r="3.200"><animateMotion dur="9s" begin="-5.400s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.535;1;1" keyTimes="0;.86;.95;1" path="M53.4 124.9L56.8 123.4L55.1 127.6L53.8 131.8L57.3 132.7L61 130.1L67.4 129.1L58.8 141.6L64.3 137.3L65.5 142L64.3 147.4L66.9 148.4L72.9 141.4L66.6 150.6L69.4 152.3L74.4 149.7L81 147.7L79.3 150.2L73.8 158.4L80 152L81.2 153.9L80.4 157.8L83.7 157.5L84.2 162.5L85.5 165.4L88.2 168.8L94.1 166.3L90.1 173.1L90.2 173.9L99.6 167.4L99.7 169.2L96.6 171.8L90.6 176.9L93.9 179.6L104.4 175.9L105.4 171.9L104.3 174.6L101 182.5L108.1 178.9L106.9 184.3L304 196"/></circle>
</g>

<g class="hl-2">
  <path class="thin" style="stroke-dasharray:2 3;stroke-width:1.2" d="M52 100L154 60M52 114L154 136"/>
  <circle class="fl-none st-dark" stroke-width="1.4" cx="46" cy="107" r="8"/>
  <rect class="fl-panel st-line" stroke-width="1.2" x="154" y="54" width="158" height="88" rx="8"/>
  <!-- ארבעה גרעיני מימן -->
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="172" cy="72" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M169.525 72h5M172 69.5v5"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="172" cy="92" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M169.525 92h5M172 89.5v5"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="172" cy="104" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M169.525 104h5M172 101.5v5"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="172" cy="124" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M169.525 124h5M172 121.5v5"/>
  <!-- מתנגשים בזוגות -->
  <path class="thin st-ink" style="stroke-width:1.3" d="M183 78L200 81M183 90L200 85M183 108L200 113M183 122L200 117M228 86L246 93M228 112L246 105M201 77.500l3.500 3.500l-4.500 2.500M201 88.500l3.500 -3.500l-4.500 -2.500M201 109.500l3.500 3.500l-4.500 2.500M201 120.500l3.500 -3.500l-4.500 -2.500M246 89.500l3.500 4l-5 1.500M246 108.500l3.500 -4l-5 -1.500"/>
  <circle class="fl-hot" r="3.200" opacity=".85"><animateMotion dur="2.400s" begin="-0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M172 72L209 79"/></circle><circle class="fl-hot" r="3.200" opacity=".85"><animateMotion dur="2.400s" begin="-0.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M172 92L209 87"/></circle><circle class="fl-hot" r="3.200" opacity=".85"><animateMotion dur="2.400s" begin="-0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M172 104L209 111"/></circle><circle class="fl-hot" r="3.200" opacity=".85"><animateMotion dur="2.400s" begin="-0.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M172 124L209 119"/></circle>
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="214" cy="78" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M211.525 78h5M214 75.5v5"/><circle class="fl-line st-ink" stroke-width="1.2" cx="214" cy="88" r="5.5"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="214" cy="112" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M211.525 112h5M214 109.5v5"/><circle class="fl-line st-ink" stroke-width="1.2" cx="214" cy="122" r="5.5"/>
  <circle class="fl-line" r="3.200" opacity=".9"><animateMotion dur="2.400s" begin="-1.200s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M220 83L258 95"/></circle><circle class="fl-line" r="3.200" opacity=".9"><animateMotion dur="2.400s" begin="-1.200s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".5 0 1 .6" path="M220 117L258 103"/></circle>
  <!-- גרעין הליום ואור -->
  <circle class="ring st-warm" style="stroke-width:2.500" cx="270" cy="99" r="26"/>
  <circle class="ring st-warm d3" style="stroke-width:2.500" cx="270" cy="99" r="26"/>
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="264.5" cy="93.5" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M262.025 93.5h5M264.5 91v5"/><circle class="fl-line st-ink" stroke-width="1.2" cx="275.5" cy="93.5" r="5.5"/><circle class="fl-line st-ink" stroke-width="1.2" cx="264.5" cy="104.5" r="5.5"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="275.5" cy="104.5" r="5.5"/><path stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none" d="M273.025 104.5h5M275.5 102v5"/>
</g>

<g class="hl-3">
  <path class="body fl-soft" style="stroke-width:1.6" d="M230 161L222 185H238z"/>
  <path class="thin st-ink" d="M214 185H246"/>
  <g><animateTransform attributeName="transform" type="rotate" values="-7 230 161;-10 230 161;-7 230 161" dur="2.600s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".4 0 .6 1;.4 0 .6 1"/>
    <path class="wire st-ink" style="stroke-width:2.400" d="M188 161H272"/></g>
  <circle class="fl-ink" cx="230" cy="161" r="2.600"/>
  <g><animateTransform attributeName="transform" type="translate" values="188.3 166.1;188.6 168.3;188.3 166.1" dur="2.600s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".4 0 .6 1;.4 0 .6 1"/><path class="thin st-ink" style="stroke-width:1.2" d="M0 0v11M-13 11h26"/><circle class="fl-hot st-ink" stroke-width="1" cx="-3.5" cy="7.4" r="3.400"/><circle class="fl-hot st-ink" stroke-width="1" cx="3.5" cy="7.4" r="3.400"/><circle class="fl-hot st-ink" stroke-width="1" cx="-3.5" cy="0.8" r="3.400"/><circle class="fl-hot st-ink" stroke-width="1" cx="3.5" cy="0.8" r="3.400"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="271.7 155.9;271.4 153.7;271.7 155.9" dur="2.600s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".4 0 .6 1;.4 0 .6 1"/><path class="thin st-ink" style="stroke-width:1.2" d="M0 0v11M-13 11h26"/><circle class="fl-hot st-ink" stroke-width="1" cx="-3.5" cy="7.4" r="3.400"/><circle class="fl-line st-ink" stroke-width="1" cx="3.5" cy="7.4" r="3.400"/><circle class="fl-line st-ink" stroke-width="1" cx="-3.5" cy="0.8" r="3.400"/><circle class="fl-hot st-ink" stroke-width="1" cx="3.5" cy="0.8" r="3.400"/></g>
  <!-- ההפרש יוצא כאור -->
  <g transform="translate(290 158)">
    <path class="wire st-warm dash" style="stroke-width:1.800;stroke-dasharray:3 4" d="M5 -4L14 -10M7 1H18M5 6L14 12"/>
    <path class="fl-elec st-ink pulse" stroke-width="1" stroke-linejoin="round" d="M0 -6L1.800 -1.800L6 0L1.800 1.800L0 6L-1.800 1.800L-6 0L-1.800 -1.800z"/>
  </g>
</g>
<g class="only-1">
  <text x="216" y="26">הכבידה דוחסת את השמש</text>
  <text x="216" y="42">ובליבה 15 מיליון מעלות</text>
</g>
<g class="only-2">
  <text x="216" y="26">גרעיני מימן מתנגשים ומתאחדים:</text>
  <text x="216" y="42">ארבעה הופכים להליום אחד</text>
</g>
<g class="only-3">
  <text x="216" y="26">ההליום קל מעט מארבעת המימנים</text>
  <text x="216" y="42">והמסה החסרה הופכת לאור</text>
</g>
<g class="only-4">
  <text x="216" y="26">רבבות שנים מהליבה החוצה</text>
  <text x="216" y="42">ועוד 8 דקות עד כדור הארץ</text>
</g>
`;
