// גאות ושפל (מבט מעל הקוטב): 1 הירח מושך חזק יותר את הצד הקרוב · 2 המים הרחוקים נשארים מאחור ונוצרת בליטה שנייה · 3 כדור הארץ מסתובב בתוך שתי הבליטות · 4 השמש מצטרפת: בקו אחד גאות חזקה, בניצב חלשה
export default `
<!-- מים, שלבים 1 עד 3: הירח קבוע מימין -->
<g class="only-1 only-2 only-3">
  <path class="thin" style="stroke-dasharray:3 4" d="M48 112H205"/>
  <circle class="fl-cold" cx="126" cy="112" r="46"/>
  <g transform="translate(214 112)"><circle class="fl-soft st-ink" stroke-width="1.8" r="9"/><circle class="fl-line" cx="-2.500" cy="-2" r="1.800"/><circle class="fl-line" cx="2.500" cy="2.500" r="1.400"/><circle class="fl-line" cx="2" cy="-3.500" r="1"/></g>
</g>
<g class="only-1"><g transform="translate(126 112) scale(-1 1)"><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" d="M0 -46A46 46 0 0 1 0 46"/></g><g transform="translate(126 112)"><g transform="scale(1 1)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.304 1;1.304 1;1 1" keyTimes="0;.45;.85;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1" dur="5s" begin="-2s" repeatCount="indefinite"/><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" vector-effect="non-scaling-stroke" d="M0 -46A46 46 0 0 1 0 46"/></g></g></g></g>
<g class="only-2"><g transform="translate(126 112)"><g transform="scale(1 1)"><g transform="scale(1.304 1)"><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" vector-effect="non-scaling-stroke" d="M0 -46A46 46 0 0 1 0 46"/></g></g></g><g transform="translate(126 112)"><g transform="scale(-1 1)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.304 1;1.304 1;1 1" keyTimes="0;.45;.85;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1" dur="5s" begin="-2s" repeatCount="indefinite"/><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" vector-effect="non-scaling-stroke" d="M0 -46A46 46 0 0 1 0 46"/></g></g></g></g>
<g class="only-3"><g transform="translate(126 112)"><g transform="scale(1 1)"><g transform="scale(1.304 1)"><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" vector-effect="non-scaling-stroke" d="M0 -46A46 46 0 0 1 0 46"/></g></g></g><g transform="translate(126 112)"><g transform="scale(-1 1)"><g transform="scale(1.304 1)"><path class="fl-cold" d="M0 -46A46 46 0 0 1 0 46z"/><path class="fl-none st-ink" stroke-width="1.6" vector-effect="non-scaling-stroke" d="M0 -46A46 46 0 0 1 0 46"/></g></g></g></g>

<!-- שלב 4 והמבט הכולל: הירח מקיף, השמש משמאל, והבליטה היא סכום שתי המשיכות -->
<g class="from-4">
  <circle class="thin" style="stroke-dasharray:2 4" cx="126" cy="112" r="88"/>
  <path class="wire st-warm" style="stroke-width:1.6;stroke-dasharray:3 4" d="M24 112H62M190 112H228"/>
  <circle class="fl-elec st-ink" stroke-width="2" cx="-18" cy="112" r="38"/>
  <path class="wire st-elec" style="stroke-width:2.4" d="M23 97l5 -2M24.500 112h5.500M23 127l5 2M18 83l4 -3.500M18 141l4 3.500"/>
  <ellipse class="fl-cold st-ink" stroke-width="1.6" cx="126" cy="112" rx="65" ry="43">
    <animate attributeName="rx" values="64.9;64.8;64.5;63.9;63.2;62.3;61.2;60.1;58.8;57.6;56.4;55.6;55.3;55.6;56.4;57.6;58.8;60.1;61.2;62.3;63.2;63.9;64.5;64.8;64.9;64.8;64.5;63.9;63.2;62.3;61.2;60.1;58.8;57.6;56.4;55.6;55.3;55.6;56.4;57.6;58.8;60.1;61.2;62.3;63.2;63.9;64.5;64.8;64.9" dur="24s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="43.3;43.4;43.5;43.8;44.2;44.6;45.1;45.7;46.3;47;47.5;47.9;48.1;47.9;47.5;47;46.3;45.7;45.1;44.6;44.2;43.8;43.5;43.4;43.3;43.4;43.5;43.8;44.2;44.6;45.1;45.7;46.3;47;47.5;47.9;48.1;47.9;47.5;47;46.3;45.7;45.1;44.6;44.2;43.8;43.5;43.4;43.3" dur="24s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="0 126 112;-5 126 112;-10.1 126 112;-15.2 126 112;-20.4 126 112;-25.9 126 112;-31.7 126 112;-38 126 112;-45 126 112;-53.2 126 112;-63.1 126 112;-75.5 126 112;-90 126 112;-104.5 126 112;-116.9 126 112;-126.8 126 112;-135 126 112;-142 126 112;-148.3 126 112;-154.1 126 112;-159.6 126 112;-164.8 126 112;-169.9 126 112;-175 126 112;-180 126 112;-185 126 112;-190.1 126 112;-195.2 126 112;-200.4 126 112;-205.9 126 112;-211.7 126 112;-218 126 112;-225 126 112;-233.2 126 112;-243.1 126 112;-255.5 126 112;-270 126 112;-284.5 126 112;-296.9 126 112;-306.8 126 112;-315 126 112;-322 126 112;-328.3 126 112;-334.1 126 112;-339.6 126 112;-344.8 126 112;-349.9 126 112;-355 126 112;-360 126 112" dur="24s" repeatCount="indefinite"/>
  </ellipse>
  <g><animateMotion dur="24s" repeatCount="indefinite" path="M214 112A88 88 0 1 0 38 112A88 88 0 1 0 214 112"/>
    <circle class="fl-dark st-ink" stroke-width="1.8" r="9"/><path fill="#fff" fill-opacity=".92" d="M0 -8.100A8.100 8.100 0 0 0 0 8.100z"/><circle class="fl-none st-ink" stroke-width="1.8" r="9"/>
  </g>
</g>

<!-- כדור הארץ מלמעלה: מסתובב נגד כיוון השעון, עם סימון של חוף אחד -->
<circle class="fl-cold-soft st-ink" stroke-width="2" cx="126" cy="112" r="40"/>
<g><animateTransform attributeName="transform" type="rotate" from="0 126 112" to="-360 126 112" dur="6s" repeatCount="indefinite"/>
  <g class="fl-green st-ink" stroke-width="1.2" stroke-linejoin="round" transform="translate(126 112) scale(1.22) translate(-126 -112)">
    <path d="M131 92C138 88 147 92 149 100C151 108 146 112 141 111C136 110 137 104 132 102C127 100 126 95 131 92z"/>
    <path d="M104 100C109 96 116 99 117 106C118 114 124 118 121 126C118 133 109 134 105 128C101 122 99 105 104 100z"/>
    <path d="M134 124C140 121 148 125 147 132C146 138 138 141 133 137C129 134 129 127 134 124z"/>
  </g>
  <circle class="fl-ink" cx="126" cy="112" r="1.800"/>
  <path class="fl-hot st-ink" stroke-width="1.4" stroke-linejoin="round" d="M164 112L174 107V117z"/>
</g>
<g class="only-3"><path class="arrow st-ink" style="stroke-width:1.8" d="M137 116A12 12 0 1 0 121 122M124.500 126L120 122.500L122 117"/></g>

<!-- גרף גובה המים בחוף המסומן לאורך יממה -->
<g class="hl-3">
  <path class="thin st-ink" d="M240 130V172H310"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M240 151H310"/>
  <path class="wire st-cold" d="M240 138C246.2 138 250.8 164 257 164C263.2 164 267.8 138 274 138C280.2 138 284.8 164 291 164C297.2 164 301.8 138 308 138"/>
  <circle class="fl-hot st-ink" stroke-width="1.4" r="3.400"><animateMotion dur="6s" repeatCount="indefinite" path="M240 138C246.2 138 250.8 164 257 164C263.2 164 267.8 138 274 138C280.2 138 284.8 164 291 164C297.2 164 301.8 138 308 138"/></circle>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;4 0;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3.4" d="M173 112H199M194 107.5L200 112L194 116.5"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;2.500 0;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:3" d="M126 112H146M141 107.5L147 112L141 116.5"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;1.200 0;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-hot" style="stroke-width:2.6" d="M82 112H93M88 107.5L94 112L88 116.5"/></g>
  <text x="176" y="30">בצד הקרוב לירח</text>
  <text x="176" y="46">המשיכה חזקה יותר</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <path class="arrow st-hot" style="stroke-width:3" d="M126 112H146M141 107.5L147 112L141 116.5"/><path class="arrow st-hot" style="stroke-width:2.6" d="M82 112H93M88 107.5L94 112L88 116.5"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-4 0;0 0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-violet" style="stroke-width:3" d="M60 112H42M47 107.500L41 112L47 116.500"/></g>
  <text x="120" y="30">כדור הארץ נמשך יותר</text>
  <text x="120" y="46">והמים הרחוקים נשארים מאחור</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="160" y="30">הבליטות נשארות מול הירח</text>
  <text x="160" y="46">וכדור הארץ מסתובב בתוכן</text>
  <text x="274" y="120">פעמיים ביממה</text>
  <text class="sm" x="275" y="186">יממה אחת</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="272" y="36" opacity="0">בקו אחד<animate attributeName="opacity" values="1;1;0;0;1;1;0;0;1;1" keyTimes="0;.07;.11;.39;.43;.57;.61;.89;.93;1" dur="24s" repeatCount="indefinite"/></text><text x="272" y="52" opacity="0">גאות חזקה<animate attributeName="opacity" values="1;1;0;0;1;1;0;0;1;1" keyTimes="0;.07;.11;.39;.43;.57;.61;.89;.93;1" dur="24s" repeatCount="indefinite"/></text>
  <text x="272" y="36" opacity="0">בזווית ישרה<animate attributeName="opacity" values="0;0;1;1;0;0;1;1;0;0" keyTimes="0;.14;.18;.32;.36;.64;.68;.82;.86;1" dur="24s" repeatCount="indefinite"/></text><text x="272" y="52" opacity="0">גאות חלשה<animate attributeName="opacity" values="0;0;1;1;0;0;1;1;0;0" keyTimes="0;.14;.18;.32;.36;.64;.68;.82;.86;1" dur="24s" repeatCount="indefinite"/></text>
</g>
`;
