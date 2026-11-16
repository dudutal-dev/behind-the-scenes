// אש יוונית: 1 דלק על בסיס נפט במכל · 2 חימום ומשאבה מעלים לחץ · 3 ברז נפתח וסילון בוער יוצא מהסיפון · 4 הנוזל צף ובוער על המים סביב ספינת האויב
export default `
<defs>
  <clipPath id="greekfire-tank"><rect x="40" y="112" width="44" height="28" rx="8"/></clipPath>
</defs>
<!-- ים -->
<rect class="fl-cold-soft" x="0" y="166" width="320" height="54"/>
<path class="thin st-cold" d="M0 166H320"/>

<!-- הספינה הביזנטית בחתך -->
<path class="fl-warm st-ink" fill-opacity=".4" stroke-width="2" stroke-linejoin="round" d="M6 84Q8 98 22 100H138Q150 98 160 82Q158 118 146 150Q136 176 112 178H44Q20 176 12 150Q6 120 6 84Z"/>
<path class="fl-panel" d="M18 106H136Q132 140 122 158Q114 168 104 168H50Q32 168 24 150Q18 130 18 106Z"/>
<path class="thin st-ink" style="stroke-width:1" d="M22 100H138"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M26 162H120"/>

<!-- 1 המכל והדלק -->
<g class="hl-1 hl-2">
  <rect class="fl-warm st-ink" stroke-width="2" x="40" y="112" width="44" height="28" rx="8"/>
  <g clip-path="url(#greekfire-tank)">
    <path class="fl-dark" d="M38 126Q50 123 62 126T86 126V142H38Z"><animate attributeName="d" values="M38 126Q50 123 62 126T86 126V142H38Z;M38 126Q50 129 62 126T86 126V142H38Z;M38 126Q50 123 62 126T86 126V142H38Z" dur="1.6s" repeatCount="indefinite"/></path>
  </g>
  <rect class="fl-none st-ink" stroke-width="2" x="40" y="112" width="44" height="28" rx="8"/>
</g>
<g class="hl-1">
  <path class="fl-warm st-ink" fill-opacity=".7" stroke-width="1.5" stroke-linejoin="round" d="M20 118Q16 128 22 140Q26 146 32 140Q36 130 32 120Z"/>
  <path class="fl-warm st-ink" fill-opacity=".7" stroke-width="1.5" d="M21 118Q26 112 31 118"/>
</g>

<!-- 2 כירה ומשאבה -->
<g class="hl-2">
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M42 146H82L78 156H46Z"/>
  <path class="thin st-ink" d="M50 156L46 162M74 156L78 162"/>
  <path class="fl-hot" d="M49 146Q49 141.5 52 137Q52.75 141.5 55 143Q55 146 52 146Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.125;0 0" dur="0.70s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="0.90s" repeatCount="indefinite"/></path><path class="fl-warm" d="M58.4 146Q58.4 140.6 62 135.2Q62.9 140.6 65.6 142.4Q65.6 146 62 146Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.35;0 0" dur="0.90s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.10s" repeatCount="indefinite"/></path><path class="fl-hot" d="M69 146Q69 141.5 72 137Q72.75 141.5 75 143Q75 146 72 146Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.125;0 0" dur="0.80s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.00s" repeatCount="indefinite"/></path>
  <rect class="fl-panel st-ink" stroke-width="1.6" x="96" y="108" width="10" height="32" rx="2"/>
  <path class="pipe st-ink" style="stroke-width:3" d="M101 140V144H84"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-10 101 101;12 101 101;-10 101 101" dur="1.4s" repeatCount="indefinite"/>
    <path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M88 101H120"/>
    <path class="st-ink fl-none" stroke-width="2" d="M101 101V110"/>
  </g>
  <circle class="fl-ink" cx="101" cy="101" r="1.8"/>
</g>

<!-- 3 הסיפון: צינור, ברז ופייה -->
<g class="hl-3">
  <path class="pipe st-ink" style="stroke-width:5" d="M62 112V92H156"/>
  <path class="pipe st-warm" style="stroke-width:3" d="M62 112V92H156"/>
  <circle class="fl-warm st-ink" stroke-width="1.5" cx="122" cy="92" r="4.5"/>
  <path class="fl-warm st-ink" stroke-width="1.5" stroke-linejoin="round" d="M152 86L164 84V96L152 98Z"/>
</g>
<g class="only-1 only-2"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M122 92V82"/></g>
<g class="from-3"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M122 92H132"/></g>

<!-- ספינת האויב -->
<g>
  <path class="thin st-ink" style="stroke-width:2" d="M276 150V70"/>
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M258 78H294L298 130H254Z"/>
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M228 146Q240 150 256 150H314V158Q310 174 296 178H248Q234 170 228 146Z"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M252 168L246 190M268 170L263 192M284 170L281 192M300 168L298 190"/>
</g>

<!-- 3-4 הסילון -->
<g class="hl-3 hl-4">
  <path class="fl-none st-warm" style="stroke-width:7;stroke-linecap:round" opacity=".8" d="M162 90Q206 62 238 158"/>
  <path class="fl-none st-hot" style="stroke-width:3;stroke-linecap:round" d="M162 90Q206 62 238 158"/>
</g>

<!-- 4 שכבה בוערת על המים -->
<g class="hl-4">
  <path class="fl-hot" opacity=".4" d="M186 166Q250 163 314 166V170Q250 172 186 170Z"/>
  <path class="fl-hot" d="M192 165Q192 159 196 153Q197 159 200 161Q200 165 196 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="0.70s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="0.90s" repeatCount="indefinite"/></path><path class="fl-warm" d="M208.4 165Q208.4 159.6 212 154.2Q212.9 159.6 215.6 161.4Q215.6 165 212 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.35;0 0" dur="0.87s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.07s" repeatCount="indefinite"/></path><path class="fl-hot" d="M221.2 165Q221.2 157.8 226 150.6Q227.2 157.8 230.8 160.2Q230.8 165 226 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.7999999999999998;0 0" dur="1.04s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.24s" repeatCount="indefinite"/></path><path class="fl-warm" d="M240.8 165Q240.8 157.2 246 149.4Q247.3 157.2 251.2 159.8Q251.2 165 246 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.9500000000000002;0 0" dur="0.70s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="0.90s" repeatCount="indefinite"/></path><path class="fl-hot" d="M259.6 165Q259.6 158.4 264 151.8Q265.1 158.4 268.4 160.6Q268.4 165 264 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.6500000000000001;0 0" dur="0.87s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.07s" repeatCount="indefinite"/></path><path class="fl-warm" d="M277.2 165Q277.2 157.8 282 150.6Q283.2 157.8 286.8 160.2Q286.8 165 282 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.7999999999999998;0 0" dur="1.04s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="1.24s" repeatCount="indefinite"/></path><path class="fl-hot" d="M296 165Q296 159 300 153Q301 159 304 161Q304 165 300 165Z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="0.70s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.55;1" dur="0.90s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="78" y="24">דלק על בסיס נפט</text>
  <text x="78" y="40">המתכון המדויק לא שרד</text>
  <path class="thin st-ink" style="stroke-width:1" d="M70 46L62 120"/>
  <circle class="fl-dark" r="1.8"><animateMotion dur=".9s" repeatCount="indefinite" path="M32 116Q38 112 44 120"/></circle>
  <circle class="fl-dark" r="1.8"><animateMotion dur=".9s" begin="-.45s" repeatCount="indefinite" path="M32 116Q38 112 44 120"/></circle>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <g class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round">
    <path d="M62 120V116M54 124L50 121M70 124L74 121">
      <animate attributeName="opacity" values=".2;1;.2" dur="1s" repeatCount="indefinite"/>
    </path>
  </g>
  <path class="wire st-warm" style="stroke-width:1.2" d="M50 112q2-4 0-8t0-8M62 112q2-4 0-8M74 112q2-4 0-8t0-8"><animate attributeName="opacity" values="0;1;0" dur="1.4s" repeatCount="indefinite"/></path>
  <text x="78" y="24">חום ומשאבה</text>
  <text x="78" y="40">מעלים את הלחץ</text>
  <path class="thin st-ink" style="stroke-width:1" d="M90 46L100 96"/>
</g>

<!-- שלב 3 -->
<g class="only-3">
  <path class="flow" d="M62 112V92H156"/>
  <circle class="fl-warm" r="3"><animateMotion dur="1.2s" begin="-0.0s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle><circle class="fl-elec" r="2.2"><animateMotion dur="1.2s" begin="-0.2s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle><circle class="fl-warm" r="3"><animateMotion dur="1.2s" begin="-0.4s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle><circle class="fl-elec" r="2.2"><animateMotion dur="1.2s" begin="-0.6s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle><circle class="fl-warm" r="3"><animateMotion dur="1.2s" begin="-0.8s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle><circle class="fl-elec" r="2.2"><animateMotion dur="1.2s" begin="-1.0s" repeatCount="indefinite" path="M162 90Q206 62 238 158"/></circle>
  <text x="236" y="24">ברז נפתח</text>
  <text x="236" y="40">וסילון בוער יוצא</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <text x="236" y="24">נפט צף על המים</text>
  <text x="236" y="40">ובוער סביב הדופן</text>
  <path class="fl-dark" opacity=".7" d="M200 166H222V169H200Z"><animate attributeName="opacity" values=".2;.8;.2" dur="1.5s" repeatCount="indefinite"/></path>
</g>
`;
