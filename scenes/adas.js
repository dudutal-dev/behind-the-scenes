// מערכות סיוע לנהג: 1 מכ״ם (צר וארוך) ומצלמה (רחבה) מסתכלים קדימה · 2 שיוט אדפטיבי שומר מרווח זמן מהרכב שלפנים · 3 הולך רגל, זמן להתנגשות ובלימה אוטומטית · 4 סטייה מהנתיב וההגה מחזיר
export default `
<defs>
  <g id="adas-car">
    <rect class="st-ink" stroke-width="2" x="-22" y="-11" width="44" height="22" rx="6.500"/>
    <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-11 -8Q-14.500 0 -11 8L-4 6.500V-6.500z"/>
    <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M13 -7.500Q15 0 13 7.500L8.500 6V-6z"/>
    <path class="st-ink fl-none" stroke-width="1" d="M-4 -6.500H8.500M-4 6.500H8.500"/>
  </g>
  <marker id="adas-ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="adas-ag" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-green"/></marker>
</defs>

<!-- כביש במבט מלמעלה, נע לאחור -->
<rect class="fl-soft" x="0" y="60" width="320" height="110"/>
<path class="st-ink fl-none" stroke-width="2" d="M0 60H320M0 170H320"/>
<path class="st-line fl-none" stroke-width="2.5" stroke-dasharray="14 12" d="M0 115H340"><animate attributeName="stroke-dashoffset" from="0" to="26" dur=".7s" repeatCount="indefinite"/></path>

<!-- שלב 1: שדות הראייה -->
<g class="hl-1">
  <path class="fl-cold" opacity=".18" d="M84 140L230 64V168Z"/>
  <path class="thin st-cold" stroke-dasharray="4 4" d="M230 64L84 140L230 168"/>
  <path class="fl-violet" opacity=".2" d="M88 142L312 130V154Z"/>
</g>
<g class="only-1">
  <g class="st-violet fl-none" stroke-width="2">
    <path d="M100 135Q104 142 100 149"><animateTransform attributeName="transform" type="translate" values="0 0;100 0" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.2s" repeatCount="indefinite"/></path>
    <path d="M100 135Q104 142 100 149"><animateTransform attributeName="transform" type="translate" values="0 0;100 0" dur="1.2s" begin="-.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.2s" begin="-.6s" repeatCount="indefinite"/></path>
  </g>
  <text x="250" y="24">מכ״ם: מרחק ומהירות</text>
  <text x="250" y="40" class="sm">גם בחושך ובערפל</text>
  <text x="100" y="190">מצלמה: נתיבים, אנשים ותמרורים</text>
  <text x="100" y="206" class="sm">המחשב ממזג את שניהם</text>
</g>

<!-- הרכב שלפנים: מאט ומאיץ מעט -->
<g>
  <animateTransform attributeName="transform" type="translate" values="0 0;-26 0;-26 0;0 0" keyTimes="0;.4;.6;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1" dur="5s" repeatCount="indefinite"/>
  <use href="#adas-car" class="fl-line" transform="translate(232 142)"/>
  <g class="only-2"><g class="blink"><rect class="fl-hot" x="208" y="132" width="3" height="5" rx="1"/><rect class="fl-hot" x="208" y="147" width="3" height="5" rx="1"/></g></g>
</g>

<!-- שלב 2: מרווח הזמן -->
<g class="only-2">
  <path class="thin st-ink" d="M86 174V184"/>
  <path class="thin st-ink" d="M210 174V184"><animateTransform attributeName="transform" type="translate" values="0 0;-26 0;-26 0;0 0" keyTimes="0;.4;.6;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1" dur="5s" repeatCount="indefinite"/></path>
  <path class="thin st-ink" style="stroke-width:1.5" d="M90 179H206" marker-start="url(#adas-ah)" marker-end="url(#adas-ah)"><animate attributeName="d" values="M90 179H206;M90 179H180;M90 179H180;M90 179H206" keyTimes="0;.4;.6;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1" dur="5s" repeatCount="indefinite"/></path>
  <text x="148" y="200">מרווח של כשתי שניות</text>
  <text x="160" y="24">הרכב שלפנים מאט?</text>
  <text x="160" y="40">השיוט מוריד גז ובולם בעצמו</text>
</g>

<!-- שלב 3: הולך רגל חוצה, התרעה ובלימה -->
<g class="only-3">
  <g>
    <animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.7;1" calcMode="linear" path="M0 0V58"/>
    <circle class="fl-warm st-ink" stroke-width="1.5" cx="166" cy="76" r="5"/>
    <path class="st-ink fl-none" stroke-width="2.5" stroke-linecap="round" d="M160 76H156M172 76H176"/>
  </g>
  <g class="ring st-hot"><circle cx="166" cy="110" r="22" class="st-hot fl-none"/></g>
  <path class="thin st-hot" style="stroke-dasharray:3 3;stroke-width:1.5" d="M88 142H150"/>
  <g class="blink"><rect class="fl-hot" x="40" y="132" width="3" height="5" rx="1"/><rect class="fl-hot" x="40" y="147" width="3" height="5" rx="1"/></g>
  <text x="160" y="24">המחשב מחשב זמן להתנגשות</text>
  <text x="160" y="40">אין תגובה? הוא בולם לבד</text>
  <text x="80" y="194" class="lg" style="fill:var(--s-hot)">בלימה</text>
</g>

<!-- הרכב שלנו -->
<g class="hl-1 hl-2 hl-3">
  <use href="#adas-car" class="fl-cold" transform="translate(64 142)"/>
  <circle class="fl-violet st-ink" stroke-width="1" cx="86" cy="142" r="2.5"><animate attributeName="opacity" values="1;.35;1" dur="1.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" cx="70" cy="142" r="2.5"/>
</g>

<!-- שלב 4: סטייה מהנתיב ותיקון -->
<g class="only-4">
  <path class="wire st-green" style="stroke-width:3.5" d="M14 168H130"/>
  <path class="wire st-green" style="stroke-width:3.5" stroke-dasharray="14 12" d="M14 115H130"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 13;0 13;0 0;0 0" keyTimes="0;.4;.5;.85;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3.4s" repeatCount="indefinite"/>
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 64 142;7 64 142;-6 64 142;0 64 142;0 64 142" keyTimes="0;.35;.55;.85;1" dur="3.4s" repeatCount="indefinite"/>
      <use href="#adas-car" class="fl-cold" transform="translate(64 142)"/>
      <circle class="fl-elec st-ink" stroke-width="1" cx="70" cy="142" r="2.5"/>
    </g>
  </g>
  <g><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.38;.45;.7;.8;1" dur="3.4s" repeatCount="indefinite"/>
    <path class="arrow st-green" style="stroke-width:3" d="M104 168Q118 150 112 132" marker-end="url(#adas-ag)"/>
  </g>
  <text x="160" y="24">הרכב נסחף בלי איתות</text>
  <text x="160" y="40">ההגה החשמלי מחזיר אותו לנתיב</text>
  <text x="70" y="194">ידיים על ההגה</text>
</g>

`;
