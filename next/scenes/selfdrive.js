// רכב אוטונומי: 1 מצלמה, רדאר ולידאר · 2 זיהוי וסיווג העצמים ומיקום הרכב · 3 חיזוי מסלולים אפשריים של האחרים · 4 תכנון מסלול ופקודות הגה ובלם
export default `
<defs>
  <marker id="selfdrive-ah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker><marker id="selfdrive-aw" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker><marker id="selfdrive-ad" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-dark"/></marker>
  <g id="selfdrive-car">
    <rect class="st-ink" stroke-width="2" x="-22" y="-11" width="44" height="22" rx="6.500"/>
    <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-11 -8Q-14.500 0 -11 8L-4 6.500V-6.500z"/>
    <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M13 -7.500Q15 0 13 7.500L8.500 6V-6z"/>
    <path class="st-ink fl-none" stroke-width="1" d="M-4 -6.500H8.500M-4 6.500H8.500"/>
    <rect class="fl-ink" x="-9" y="-13.500" width="3.500" height="2.500" rx="1"/><rect class="fl-ink" x="-9" y="11" width="3.500" height="2.500" rx="1"/>
  </g>
</defs>
<!-- כביש במבט מלמעלה -->
<rect class="fl-panel" x="-2" y="34" width="324" height="142"/>
<path class="thin" d="M-2 34H322M-2 176H322"/>
<rect class="fl-soft" x="-2" y="52" width="324" height="108"/>
<path class="st-ink fl-none" stroke-width="2" d="M-2 52H322M-2 160H322"/>
<path class="thin" style="stroke-width:2" stroke-dasharray="12 9" d="M120 106H322M-2 106H76"/>
<g class="fl-panel st-line" stroke-width=".8"><rect x="84" y="56.5" width="24" height="5"/><rect x="84" y="64.5" width="24" height="5"/><rect x="84" y="72.5" width="24" height="5"/><rect x="84" y="80.5" width="24" height="5"/><rect x="84" y="88.5" width="24" height="5"/><rect x="84" y="96.5" width="24" height="5"/><rect x="84" y="104.5" width="24" height="5"/><rect x="84" y="112.5" width="24" height="5"/><rect x="84" y="120.5" width="24" height="5"/><rect x="84" y="128.5" width="24" height="5"/><rect x="84" y="136.5" width="24" height="5"/><rect x="84" y="144.5" width="24" height="5"/><rect x="84" y="152.5" width="24" height="5"/></g>

<!-- חיישנים -->
<g class="hl-1">
  <path class="fl-cold" fill-opacity=".2" d="M240 79L80 37V121z"/>
  <path class="thin st-cold" stroke-dasharray="4 4" d="M80 37L240 79L80 121"/>
  <path class="fl-warm" fill-opacity=".38" d="M240 79L14 69V89z"/>
  <circle class="fl-none st-violet" stroke-width="1.6" stroke-dasharray="2 5" cx="262" cy="79" r="58"/>
</g>

<!-- משתמשי הדרך -->
<g>
  <path class="st-ink fl-none" stroke-width="3" stroke-linecap="round" d="M92.500 46V49M99.500 44V47"/>
  <ellipse class="fl-warm st-ink" stroke-width="1.6" cx="96" cy="43" rx="8.500" ry="4.200"/><circle class="fl-panel st-ink" stroke-width="1.6" cx="96" cy="43" r="3.400"/>
  <path class="st-dark fl-none" stroke-width="4" stroke-linecap="round" d="M183 64h9M209 64h9"/>
  <path class="st-ink fl-none" stroke-width="1.8" d="M188 64H213M193 59V69"/>
  <ellipse class="fl-elec st-ink" stroke-width="1.6" cx="203" cy="64" rx="5" ry="6.500"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="198.500" cy="64" r="3"/>
  <use href="#selfdrive-car" class="fl-line" transform="translate(56 133) rotate(180)"/>
</g>
<!-- הרכב האוטונומי -->
<use href="#selfdrive-car" class="fl-cold" transform="translate(262 79)"/>
<circle class="fl-violet st-ink" stroke-width="1.5" cx="264" cy="79" r="3.600"/>

<!-- שלב 2: תיבות זיהוי -->
<g class="from-2"><g class="hl-2 hl-3">
  <rect class="wire st-green dash" style="stroke-width:1.8" x="84" y="35.500" width="24" height="16" rx="2"/>
  <rect class="wire st-green dash" style="stroke-width:1.8" x="179" y="54.500" width="43" height="19" rx="2"/>
  <rect class="wire st-green dash" style="stroke-width:1.8" x="30" y="118" width="52" height="30" rx="3"/>
</g></g>

<!-- שלב 3: מסלולים חזויים -->
<g class="from-3"><g class="hl-3">
  <path class="wire st-hot" style="stroke-width:3.2" stroke-dasharray="6 4" d="M96 54V142" marker-end="url(#selfdrive-ah)"/>
  <path class="wire st-hot" style="stroke-width:1.3" stroke-dasharray="3 3" d="M82 42H44" marker-end="url(#selfdrive-ah)"/>
  <path class="wire st-warm" style="stroke-width:3.2" stroke-dasharray="6 4" d="M177 64H126" marker-end="url(#selfdrive-aw)"/>
  <path class="wire st-warm" style="stroke-width:1.3" stroke-dasharray="3 3" d="M177 68Q158 70 142 88" marker-end="url(#selfdrive-aw)"/>
  <path class="wire st-dark" style="stroke-width:3.2" stroke-dasharray="6 4" d="M84 133H150" marker-end="url(#selfdrive-ad)"/>
</g></g>

<!-- שלב 4: המסלול המתוכנן והפקודות -->
<g class="from-4"><g class="hl-4">
  <path class="wire st-green" style="stroke-width:5" d="M238 79C218 79 216 93 196 93H172C152 93 150 79 134 79H118"/>
  <path class="flow" d="M238 79C218 79 216 93 196 93H172C152 93 150 79 134 79H118"/>
  <path class="wire st-green" style="stroke-width:4" d="M114 67V91"/>
  <rect class="fl-hot st-ink" stroke-width="1.5" x="264" y="188" width="9" height="18" rx="2"/>
  <path class="thin st-ink" d="M266.500 193H270.500M266.500 197H270.500M266.500 201H270.500"/>
  <g class="sway"><circle class="fl-none st-ink" stroke-width="2.500" cx="296" cy="197" r="10"/><path class="st-ink fl-none" stroke-width="2" d="M286 197H306M296 197V207"/><circle class="fl-ink" cx="296" cy="197" r="2.500"/></g>
</g></g>

<g class="only-1">
  <path class="wire st-violet" d="M262 79V21"><animateTransform attributeName="transform" type="rotate" from="0 262 79" to="360 262 79" dur="2.400s" repeatCount="indefinite"/></path>
    <circle class="fl-warm st-ink" stroke-width=".8" r="2.800"><animateMotion dur="1.400s" repeatCount="indefinite" path="M240 79H30"/></circle>
  <path class="fl-cold" d="M222 188L208 184V192z"/><text x="186" y="192">מצלמה</text>
  <rect class="fl-warm" x="134" y="186" width="16" height="4" rx="2"/><text x="116" y="192">רדאר</text>
  <circle class="fl-none st-violet" stroke-width="1.6" stroke-dasharray="2 3" cx="68" cy="188" r="6"/><text x="44" y="192">לידאר</text>
  <text x="124" y="209">כל חיישן משלים את האחרים</text>
</g>
<g class="only-2">
  <circle class="ring st-green" cx="262" cy="79" r="30"/>
  <text x="96" y="24">הולך רגל</text>
  <text x="200" y="24">רוכב אופניים</text>
  <text x="56" y="192">רכב</text>
  <text x="176" y="192">כל עצם מזוהה ומסווג</text>
  <text x="176" y="208">והרכב ממוקם במפה</text>
</g>
<g class="only-3">
  <circle class="fl-hot st-ink" stroke-width=".8" r="3.200"><animateMotion dur="2s" repeatCount="indefinite" path="M96 54V140"/></circle>
  <circle class="fl-warm st-ink" stroke-width=".8" r="3.200"><animateMotion dur="2s" begin="-.7s" repeatCount="indefinite" path="M177 64H130"/></circle>
  <circle class="fl-dark st-ink" stroke-width=".8" r="3.200"><animateMotion dur="2s" begin="-1.3s" repeatCount="indefinite" path="M84 133H148"/></circle>
  <text x="140" y="192">לכל אחד כמה מסלולים אפשריים</text>
  <text x="140" y="208">קו עבה — סביר יותר</text>
</g>
<g class="only-4">
  <g class="blink"><path class="wire st-hot" style="stroke-width:4" d="M114 67V91"/></g>
  <text x="140" y="192">נבחר מסלול בטוח ונוח</text>
  <text x="140" y="208">הגה, גז ובלם — שוב ושוב</text>
</g>
`;
