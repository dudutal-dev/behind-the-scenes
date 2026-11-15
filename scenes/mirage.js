// מיראז׳. 1 האור מתכופף בשכבות אוויר חמות וקרות · 2 שלולית על כביש לוהט היא תמונת השמיים · 3 מעל ים קר הספינה נראית מורמת · 4 שכבות רבות: פטה מורגנה
export default `
<!-- ===== למעלה: ים קר ===== -->
<g class="hl-3 hl-4">
  <rect class="fl-warm" opacity=".22" x="40" y="30" width="280" height="26"/>
  <rect class="fl-cold-soft" x="40" y="56" width="280" height="32"/>
  <text x="56" y="44" class="sm">חם</text>
  <text x="56" y="82" class="sm">קר</text>
</g>
<rect class="fl-cold" x="40" y="88" width="280" height="16"/>
<path class="wire" stroke="#fff" style="stroke-width:1.2;stroke-opacity:.6" d="M60 95q6-3 12 0t12 0M140 98q6-3 12 0t12 0M220 95q6-3 12 0t12 0"/>
<rect class="fl-soft" x="0" y="86" width="40" height="18"/>
<path class="thin" d="M0 86H40"/>
<g  transform="translate(0 0)"><path class="body" style="stroke-width:1.6" d="M262 80H300L295 88H267z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="272" y="74" width="14" height="6"/><path class="wire st-ink" style="stroke-width:1.6" d="M281 74V64M281 66L291 72"/></g>
<g class="hl-3 hl-4">
  <path class="wire st-elec" style="stroke-width:2" d="M281 66Q150 44 27 64"/>
</g>
<g class="only-3">
  <g opacity=".5"><g  transform="translate(0 -44)"><path class="body" style="stroke-width:1.6" d="M262 80H300L295 88H267z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="272" y="74" width="14" height="6"/><path class="wire st-ink" style="stroke-width:1.6" d="M281 74V64M281 66L291 72"/></g></g>
  <path class="thin st-ink" style="stroke-dasharray:3 3" d="M27 64L281 22"/>
  <circle class="fl-elec" r="2.6"><animateMotion dur="1.8s" repeatCount="indefinite" path="M281 66Q150 44 27 64"/></circle>
  <circle class="fl-elec" r="2.6"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M281 66Q150 44 27 64"/></circle>
  <text x="150" y="16">מעל ים קר האור מתכופף מטה,</text>
  <text x="150" y="30">והספינה נראית מורמת</text>
</g>
<g class="only-4">
  <g>
    <animate attributeName="opacity" values=".6;.3;.6;.45;.6" dur="2.6s" repeatCount="indefinite"/>
    <g transform="translate(0 128) scale(1 -1)"><g  transform="translate(0 0)"><path class="body" style="stroke-width:1.6" d="M262 80H300L295 88H267z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="272" y="74" width="14" height="6"/><path class="wire st-ink" style="stroke-width:1.6" d="M281 74V64M281 66L291 72"/></g></g>
    <g  transform="translate(0 -50)"><path class="body" style="stroke-width:1.6" d="M262 80H300L295 88H267z"/><rect class="fl-panel st-ink" stroke-width="1.4" x="272" y="74" width="14" height="6"/><path class="wire st-ink" style="stroke-width:1.6" d="M281 74V64M281 66L291 72"/></g>
  </g>
  <path class="thin st-ink" style="stroke-dasharray:3 3" d="M27 64L262 44M27 64L262 34"/>
  <text x="150" y="16">שכבות רבות: פטה מורגנה,</text>
  <text x="150" y="30">תמונות ישרות והפוכות</text>
</g>
<!-- צופה על החוף -->
<path class="body" d="M16 86V75Q16 69 22 69Q28 69 28 75V86z"/>
<circle class="body" cx="22" cy="63" r="5"/>

<path class="thin" style="stroke-dasharray:1 4" d="M6 108H314"/>

<!-- ===== למטה: כביש לוהט ===== -->
<g class="hl-1 hl-2">
  <rect class="fl-cold-soft" x="0" y="150" width="320" height="16"/>
  <rect class="fl-warm" opacity=".25" x="0" y="166" width="320" height="15"/>
  <rect class="fl-hot" opacity=".3" x="0" y="181" width="320" height="15"/>
  <text x="306" y="162" class="sm">קר</text>
  <text x="306" y="192" class="sm">חם</text>
  <path class="wire st-hot" style="stroke-width:1.4;stroke-opacity:.6" d="M70 192q4-5 8 0t8 0M180 190q4-5 8 0t8 0M250 192q4-5 8 0t8 0">
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="1.4s" repeatCount="indefinite"/>
  </path>
</g>
<rect class="fl-dark" x="0" y="196" width="320" height="18"/>
<path class="wire" stroke="#fff" style="stroke-width:1.5;stroke-dasharray:10 10;stroke-opacity:.7" d="M40 205H320"/>
<!-- השלולית המדומה: כתם שמיים על הכביש -->
<g class="hl-2">
  <ellipse class="fl-cold-soft st-cold" stroke-width="1.5" cx="190" cy="200" rx="50" ry="5">
    <animate attributeName="opacity" values="1;.55;1" dur="1.8s" repeatCount="indefinite"/>
  </ellipse>
</g>
<g class="hl-1 hl-2">
  <path class="wire st-elec" style="stroke-width:2" d="M296 118C222 200 118 198 27 174"/>
  <path class="wire st-elec" style="stroke-width:2" d="M33 170l-7 4 8 2"/>
</g>
<g class="only-1">
  <circle class="fl-elec" r="2.6"><animateMotion dur="2s" repeatCount="indefinite" path="M296 118C222 200 118 198 27 174"/></circle>
  <circle class="fl-elec" r="2.6"><animateMotion dur="2s" begin="-1s" repeatCount="indefinite" path="M296 118C222 200 118 198 27 174"/></circle>
  <text x="160" y="124">האור מתכופף בהדרגה</text>
  <text x="160" y="138">לעבר האוויר הקר והצפוף</text>
</g>
<g class="only-2">
  <path class="thin st-ink" style="stroke-dasharray:3 3" d="M27 174L190 200"/>
  <circle class="fl-elec" r="2.6"><animateMotion dur="2s" repeatCount="indefinite" path="M296 118C222 200 118 198 27 174"/></circle>
  <circle class="ring st-cold" cx="190" cy="200" r="20"/>
  <text x="160" y="124">המוח ממשיך את הקו ישר</text>
  <text x="160" y="138">ורואה שמיים על הכביש</text>
</g>
<!-- צופה על הכביש -->
<path class="body" d="M16 196V182Q16 176 22 176Q28 176 28 182V196z"/>
<circle class="body" cx="22" cy="170" r="5"/>
<!-- עץ רחוק -->
<path class="wire st-ink" style="stroke-width:2.5" d="M288 196V170"/>
<circle class="fl-green st-ink" stroke-width="1.5" cx="288" cy="164" r="9"/>
`;
