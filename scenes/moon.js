// מופעי הירח (מבט מעל הקוטב הצפוני, השמש משמאל): 1 החצי הפונה לשמש מואר תמיד · 2 הירח מקיף את כדור הארץ ב־29.5 ימים · 3 שמונה מקומות במסלול מול מה שרואים מכדור הארץ, ממולד למלא ובחזרה · 4 נעילת גאות: אותו צד פונה תמיד אלינו
export default `
<!-- אור השמש מגיע משמאל -->
<circle class="fl-elec st-ink" stroke-width="2" cx="-44" cy="86" r="52"/>
<path class="wire st-warm" style="stroke-width:2" d="M6 30H30M25.500 26.5L31 30L25.500 33.5"/><path class="wire st-warm" style="stroke-width:2" d="M10 58H30M25.500 54.5L31 58L25.500 61.5"/><path class="wire st-warm" style="stroke-width:2" d="M12 86H30M25.500 82.5L31 86L25.500 89.5"/><path class="wire st-warm" style="stroke-width:2" d="M10 114H30M25.500 110.5L31 114L25.500 117.5"/><path class="wire st-warm" style="stroke-width:2" d="M6 142H30M25.500 138.5L31 142L25.500 145.5"/>
<!-- מסלול הירח וכדור הארץ (מבט מעל הקוטב הצפוני) -->
<circle class="thin" style="stroke-dasharray:2 4" cx="104" cy="86" r="58"/>
<circle class="fl-cold st-ink" stroke-width="2" cx="104" cy="86" r="15"/>
<path class="fl-green" d="M95 81c3 -4 8 -3 8 1c0 4 3 5 2 9c-2 3 -6 2 -8 -1c-1 -3 -4 -6 -2 -9zM107 76c4 -1 7 1 6 4c-1 3 -4 3 -6 1c-1 -1 -2 -4 0 -5z"/>
<path fill="#000" opacity=".4" d="M104 71A15 15 0 0 1 104 101z"/>
<circle class="fl-none st-ink" stroke-width="2" cx="104" cy="86" r="15"/>

<!-- שלב 1: ירח אחד, חציו הפונה לשמש מואר -->
<g class="only-1">
  <path class="wire st-warm dash" style="stroke-width:2;stroke-dasharray:4 5" d="M34 122H51M34 132H51"/>
  <g transform="translate(63 127)"><circle class="fl-dark" r="11"/><path fill="#fff" fill-opacity=".94" d="M0 -11A11 11 0 0 0 0 11z"/><circle class="fl-none st-ink" stroke-width="1.6" r="11"/></g>
  <text x="248" y="40">החצי שפונה אל השמש</text>
  <text x="248" y="56">מואר תמיד</text>
  <text x="248" y="88">והחצי האחר חשוך</text>
</g>

<!-- שלבים 2, 4 והמבט הכולל: הירח מקיף נגד כיוון השעון -->
<g class="only-2 from-4">
  <g class="from-4"><g><animateTransform attributeName="transform" type="rotate" from="0 104 86" to="-360 104 86" dur="16s" repeatCount="indefinite"/>
    <path class="wire st-hot" style="stroke-width:1.5;stroke-dasharray:2 3" d="M87 86H56.5"/></g></g>
  <g><animateMotion dur="16s" repeatCount="indefinite" path="M46 86A58 58 0 1 0 162 86A58 58 0 1 0 46 86"/>
    <circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/>
    <g class="from-4"><g><animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="16s" repeatCount="indefinite"/>
      <path class="wire st-violet" style="stroke-width:3" d="M-5.5 -6.5A8.5 8.5 0 0 0 -5.5 6.5"/>
      <circle class="fl-line" cx="-1.500" cy="-3" r="1.500"/><circle class="fl-line" cx="1" cy="3.500" r="1.200"/>
      <circle class="fl-hot st-ink" stroke-width="1" cx="7" cy="0" r="2.600"/>
    </g></g>
    <circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/>
  </g>
</g>
<g class="only-2">
  <path class="arrow st-ink" style="stroke-width:1.800" d="M91 125.9A42 42 0 0 0 117 125.9M111.5 122.1L117 125.9L111.2 129.3"/>
  <text x="248" y="40">הקפה אחת סביבנו:</text>
  <text x="248" y="56">29 ימים וחצי</text>
  <text x="248" y="88">והזווית לשמש משתנה</text>
</g>

<!-- שלב 3: שמונה מקומות במסלול, ממוספרים -->
<g class="only-3">
  <g transform="translate(46 86)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(63 127)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(104 144)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(145 127)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(162 86)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(145 45)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(104 28)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <g transform="translate(63 45)"><circle class="fl-dark" r="8.5"/><path fill="#fff" fill-opacity=".94" d="M0 -8.5A8.5 8.5 0 0 0 0 8.5z"/><circle class="fl-none st-ink" stroke-width="1.6" r="8.5"/></g>
  <text class="sm" x="64" y="89.2">1</text><text class="sm" x="75.7" y="117.5">2</text><text class="sm" x="104" y="129.2">3</text><text class="sm" x="132.3" y="117.5">4</text><text class="sm" x="144" y="89.2">5</text><text class="sm" x="132.3" y="60.9">6</text><text class="sm" x="104" y="49.2">7</text><text class="sm" x="75.7" y="60.9">8</text>
  <circle class="fl-none st-hot" stroke-width="2.2" r="12"><animate attributeName="cx" calcMode="discrete" values="46;63;104;145;162;145;104;63;46" keyTimes="0.0000;0.0625;0.1875;0.3125;0.4375;0.5625;0.6875;0.8125;0.9375" dur="16s" repeatCount="indefinite"/><animate attributeName="cy" calcMode="discrete" values="86;127;144;127;86;45;28;45;86" keyTimes="0.0000;0.0625;0.1875;0.3125;0.4375;0.5625;0.6875;0.8125;0.9375" dur="16s" repeatCount="indefinite"/></circle>
  <text x="248" y="40">מכדור הארץ רואים</text>
  <text x="248" y="56">רק חלק מהחצי המואר</text>
  <text x="290" y="210" class="sm">מולד</text>
  <text x="216" y="210" class="sm">חצי</text>
  <text x="142" y="210" class="sm">ירח מלא</text>
  <text x="68" y="210" class="sm">חצי</text>
</g>

<!-- רצועת המופעים: מה רואים מכדור הארץ בכל מקום -->
<g class="hl-3">
  <g transform="translate(290 186)"><circle class="fl-dark" r="10"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="290" y="170">1</text>
  <g transform="translate(253 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A7.1 10 0 0 0 0 -10z"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="253" y="170">2</text>
  <g transform="translate(216 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A0 10 0 0 0 0 -10z"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="216" y="170">3</text>
  <g transform="translate(179 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A7.1 10 0 0 1 0 -10z"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="179" y="170">4</text>
  <g transform="translate(142 186)"><circle class="fl-dark" r="10"/><circle fill="#fff" fill-opacity=".94" r="10"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="142" y="170">5</text>
  <g transform="translate(105 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A7.1 10 0 0 1 0 -10z" transform="scale(-1 1)"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="105" y="170">6</text>
  <g transform="translate(68 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A0 10 0 0 0 0 -10z" transform="scale(-1 1)"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="68" y="170">7</text>
  <g transform="translate(31 186)"><circle class="fl-dark" r="10"/><path fill="#fff" fill-opacity=".94" d="M0 -10A10 10 0 0 1 0 10A7.1 10 0 0 0 0 -10z" transform="scale(-1 1)"/><circle class="fl-none st-ink" stroke-width="1.6" r="10"/></g><text class="sm" x="31" y="170">8</text>
  <circle class="fl-none st-hot" stroke-width="2.2" r="13.500" cx="290" cy="186"><animate attributeName="cx" calcMode="discrete" values="290;253;216;179;142;105;68;31;290" keyTimes="0.0000;0.0625;0.1875;0.3125;0.4375;0.5625;0.6875;0.8125;0.9375" dur="16s" repeatCount="indefinite"/></circle>
</g>

<!-- שלב 4: נעילת גאות -->
<g class="only-4">
  <text x="248" y="34">אותו צד פונה תמיד אלינו:</text>
  <text x="248" y="50">סיבוב אחד בכל הקפה</text>
  <circle class="fl-hot st-ink" stroke-width="1" cx="300" cy="82" r="3.200"/>
  <text x="262" y="86">הצד הקרוב</text>
  <path class="wire st-violet" style="stroke-width:3" d="M296 104h9"/>
  <text x="262" y="108">הצד הרחוק</text>
</g>
`;
