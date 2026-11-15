// ההריון: 1 השרשה — הבלסטוציסט מתחפר ברירית ומפריש hCG · 2 השליה — דם האם ודם העובר נפרדים במחיצה דקה · 3 עד שבוע 10 נבנים האיברים והלב פועם · 4 גדילה — רוב המשקל נצבר בשליש השלישי
export default `
<defs><clipPath id="pregnancy-zoom"><circle cx="250" cy="86" r="55"/></clipPath></defs>

<!-- הרחם בחתך -->
<path class="body" d="M22 72 C22 28 60 12 92 12 C124 12 162 28 162 72 C162 122 136 160 114 178 L110 208 H74 L70 178 C48 160 22 122 22 72 Z"/>
<path class="fl-hot" opacity=".22" d="M22 72 C22 28 60 12 92 12 C124 12 162 28 162 72 C162 122 136 160 114 178 L110 208 H74 L70 178 C48 160 22 122 22 72 Z"/>
<path class="fl-cold-soft st-line" stroke-width="1.2" d="M36 74 C36 40 64 26 92 26 C120 26 148 40 148 74 C148 116 126 150 104 166 H80 C58 150 36 116 36 74 Z"/>
<text class="sm" x="92" y="196" style="stroke:none;fill:var(--s-ink)" opacity=".7">צוואר</text>

<!-- שלב 1: הבלסטוציסט בדופן -->
<g class="only-1">
  <circle class="fl-violet st-ink" stroke-width="1" cx="58" cy="36" r="4" fill-opacity=".7"/>
  <path class="thin st-violet" style="stroke-dasharray:3 3;stroke-width:1.2" d="M62 33 L200 60 M61 40 L202 116"/>
</g>

<!-- השליה וחבל הטבור -->
<g class="from-2"><g class="hl-2 hl-4">
  <path class="fl-hot st-ink" stroke-width="1.6" d="M38 66 C40 42 58 30 82 27 L84 40 C66 42 54 52 50 68 Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M44 60 l6 2 M50 46 l5 4 M60 38 l3 5 M72 32 l1 6"/>
</g></g>
<g class="only-2 from-9">
  <circle class="fl-none st-violet" stroke-width="1.2" style="stroke-dasharray:3 3" cx="64" cy="44" r="11"/>
  <path class="thin st-violet" style="stroke-dasharray:3 3;stroke-width:1.2" d="M72 36 L198 68 M70 54 L198 104"/>
</g>
<g class="only-2 only-4 from-9">
  <path class="pipe st-ink" style="stroke-width:6" d="M58 50 C70 66 60 80 68 90 C72 95 76 98 80 100"/>
  <path class="pipe st-cold" style="stroke-width:3.4" d="M58 50 C70 66 60 80 68 90 C72 95 76 98 80 100"/>
  <path class="flow" d="M82 95 C78 96 72 95 68 90 C60 80 70 66 58 50"/>
  <g transform="translate(100 106) rotate(196) scale(.8) translate(-56 -64)">
  <path class="body" style="fill:var(--s-warm)" d="M50 2 C70 2 84 18 82 36 C81 44 77 49 74 52 C78 54 80 58 78 62 C76 66 76 68 80 70 C92 72 100 80 98 90 C96 98 90 100 88 104 C88 110 92 116 98 118 C102 120 102 126 96 127 C80 128 60 128 44 124 C26 120 14 104 14 84 C14 66 18 54 22 46 C16 38 18 20 30 10 C36 5 43 2 50 2Z"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M46 114 C62 104 78 92 90 86 M58 60 C64 70 72 70 78 62 M40 26 a6 7 0 0 0 0 12"/>
  <circle class="fl-ink" cx="66" cy="30" r="2"/></g>
</g>


<!-- שלב 3: עובר זעיר בשק -->
<g class="only-3">
  <path class="wire st-cold" style="stroke-width:1.6" d="M62 50 C66 56 64 62 70 64"/>
  <path class="fl-warm st-ink" stroke-width="1" d="M70 58 c6 -4 12 0 11 7 c-1 6 -6 8 -10 6 c-3 -2 -4 -8 -1 -13z"/>
  <path class="thin st-violet" style="stroke-dasharray:3 3;stroke-width:1.2" d="M78 58 L200 60 M76 70 L202 116"/>
</g>

<!-- חלון ההגדלה -->
<circle class="fl-panel st-violet" stroke-width="1.6" cx="250" cy="86" r="56"/>

<g clip-path="url(#pregnancy-zoom)">
  <!-- 1: השרשה ו־hCG -->
  <g class="only-1">
    <path class="fl-hot" opacity=".25" d="M190 92 C220 86 280 98 310 92 V150 H190 Z"/>
    <path class="thin st-hot" style="stroke-width:1.4" d="M204 120 q4 -10 0 -18 M296 124 q-4 -10 0 -18 M222 136 q3 -8 0 -14"/>
    <circle class="fl-violet st-ink" stroke-width="1.4" cx="250" cy="80" r="20" fill-opacity=".18"/>
    <path class="fl-violet" opacity=".55" d="M236 70 a14 14 0 0 1 22 -4 a10 10 0 0 0 -22 4z"/>
    <path class="fl-violet st-ink" stroke-width="1" d="M232 92 C238 104 262 104 268 92 C262 96 238 96 232 92z" fill-opacity=".8"/>
    <text class="sm" x="250" y="52">עובר בן שבוע</text>
    <circle class="fl-violet" r="2.2"><animateMotion path="M244 100 C240 110 230 118 220 124" dur="2.8s" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.2"><animateMotion path="M248 100 C246 110 242 118 238 124" dur="2.8s" begin="-0.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin="-0.7s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.2"><animateMotion path="M252 100 C252 110 254 118 256 124" dur="2.8s" begin="-1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin="-1.4s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.2"><animateMotion path="M256 100 C258 110 266 118 274 124" dur="2.8s" begin="-2.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin="-2.1s" repeatCount="indefinite"/></circle>
    <text x="276" y="114" style="fill:var(--s-violet)">hCG</text>
    <text class="sm" x="250" y="129">רירית הרחם</text>
  </g>
  <!-- 2: שלוחה של השליה בתוך דם האם -->
  <g class="only-2 from-9">
    <rect class="fl-hot" opacity=".2" x="190" y="28" width="120" height="120"/>
    <ellipse class="fl-hot" rx="3.4" ry="2.2" opacity=".8"><animateMotion path="M196 60 H306" dur="4s" begin="0s" repeatCount="indefinite"/></ellipse><ellipse class="fl-hot" rx="3.4" ry="2.2" opacity=".8"><animateMotion path="M196 78 H306" dur="4s" begin="-1s" repeatCount="indefinite"/></ellipse><ellipse class="fl-hot" rx="3.4" ry="2.2" opacity=".8"><animateMotion path="M196 96 H306" dur="4s" begin="-2s" repeatCount="indefinite"/></ellipse><ellipse class="fl-hot" rx="3.4" ry="2.2" opacity=".8"><animateMotion path="M196 114 H306" dur="4s" begin="-3s" repeatCount="indefinite"/></ellipse>
    <path class="fl-soft st-ink" stroke-width="1.6" d="M226 28 V96 C226 120 274 120 274 96 V28 Z"/>
    <path class="pipe st-cold" style="stroke-width:5" d="M238 30 V96 C238 108 250 108 250 96"/>
    <path class="pipe st-hot" style="stroke-width:5" d="M250 96 C250 108 262 108 262 96 V30"/>
    <path class="flow" d="M238 30 V96 C238 110 262 110 262 96 V30"/>
    <circle class="fl-elec st-ink" stroke-width=".6" r="2.4"><animateMotion path="M300 82 L258 82" dur="2.4s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-elec st-ink" stroke-width=".6" r="2.4"><animateMotion path="M300 82 L258 82" dur="2.4s" begin="-1.2s" repeatCount="indefinite"/></circle>
    <circle class="fl-line" r="2.2"><animateMotion path="M228 102 L198 102" dur="2.4s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-line" r="2.2"><animateMotion path="M228 102 L198 102" dur="2.4s" begin="-1.8s" repeatCount="indefinite"/></circle>
    <text class="sm" x="290" y="98">O₂</text>
    <text class="sm" x="214" y="90">CO₂</text>
    <text class="sm" x="250" y="130">דם האם</text>
  </g>
  <!-- 3: עובר בשבוע 7 בערך: ראש גדול, גוף מקומר, ניצני גפיים והלב פועם -->
  <g class="only-3">
    <path class="wire st-cold" style="stroke-width:3" d="M240 104 C224 110 212 122 204 136"/>
    <path style="fill:none;stroke:var(--s-ink);stroke-width:21;stroke-linecap:round" d="M252 74 C276 80 278 106 256 110 C246 112 238 106 236 98"/>
    <circle style="fill:var(--s-ink)" cx="244" cy="62" r="17.8"/>
    <path style="fill:none;stroke:var(--s-warm);stroke-width:18;stroke-linecap:round" d="M252 74 C276 80 278 106 256 110 C246 112 238 106 236 98"/>
    <circle class="fl-warm" cx="244" cy="62" r="16"/>
    <path class="wire st-ink" style="stroke-width:2" d="M232 96 C228 92 230 86 234 86"/>
    <circle class="fl-ink" cx="236" cy="60" r="2"/>
    <ellipse class="fl-warm st-ink" stroke-width="1.2" cx="276" cy="90" rx="6" ry="3.4" transform="rotate(60 276 90)"/>
    <ellipse class="fl-warm st-ink" stroke-width="1.2" cx="262" cy="118" rx="6" ry="3.4" transform="rotate(20 262 118)"/>
    <circle class="fl-hot st-ink" stroke-width="1" cx="258" cy="86" r="6"><animate attributeName="r" values="6;4.4;6" dur=".42s" repeatCount="indefinite"/></circle>
  </g>
  <!-- 4: עקומת משקל -->
  <g class="only-4">
    <path class="thin" d="M216 56 V112 H288"/>
    <path class="thin" style="stroke-dasharray:2 3" d="M216 85 H288"/>
    <path class="wire st-hot" style="stroke-width:2.4" d="M216.0 111.9L220.7 111.8L225.3 111.3L230.0 110.3L234.7 109.0L239.3 107.2L244.0 105.1L248.7 102.5L253.3 99.7L258.0 97.0L262.7 92.5L267.3 86.5L272.0 80.5L281.3 68.5L286.0 61.0"/>
    <circle class="fl-hot st-ink" stroke-width="1" r="3.6"><animateMotion path="M216.0 111.9L220.7 111.8L225.3 111.3L230.0 110.3L234.7 109.0L239.3 107.2L244.0 105.1L248.7 102.5L253.3 99.7L258.0 97.0L262.7 92.5L267.3 86.5L272.0 80.5L281.3 68.5L286.0 61.0" dur="4s" repeatCount="indefinite"/></circle>
    <text class="sm" x="216" y="123">10</text><text class="sm" x="251" y="123">25</text><text class="sm" x="286" y="123">40</text>
    <text class="sm" x="251" y="134">שבוע</text>
    <text class="sm" x="228" y="52">ק״ג</text>
    <text class="sm" x="230" y="81">1.8</text>
    <text class="sm" x="272" y="63">3.4</text>
  </g>
</g>
<circle class="fl-none st-violet" stroke-width="1.6" cx="250" cy="86" r="56"/>
<circle class="fl-none st-violet" stroke-width="2" cx="250" cy="86" r="56" opacity=".3"><animate attributeName="opacity" values=".1;.5;.1" dur="2.4s" repeatCount="indefinite"/></circle>

<!-- תוויות -->
<g class="only-1"><text x="250" y="166">מתחפר ברירית</text><text x="250" y="182">ומפריש hCG</text></g>
<g class="only-2"><text class="sm" x="250" y="22">שלוחה ובה דם העובר</text><text x="250" y="166">שני מחזורי דם</text><text x="250" y="182">ומחיצה דקה ביניהם</text></g>
<g class="only-3"><text x="250" y="166">שבוע 6: לב פועם</text><text x="250" y="182">שבוע 10: האיברים בנויים</text></g>
<g class="only-4"><text x="250" y="166">משקל לפי שבוע הריון</text><text x="250" y="182">רובו בשליש השלישי</text></g>
`;
