// מיקרוגל בחתך: 1 מגנטרון ומוליך גלים · 2 מולקולות מים מסתובבות (זכוכית מגדלת) · 3 שכבה חיצונית חמה ומרכז קר · 4 הרשת בדלת מחזירה גלים והאור עובר
export default `
<defs>
  <clipPath id="microwave-c1"><rect x="0" y="-8" width="74" height="16"/></clipPath>
  <clipPath id="microwave-c2"><rect x="0" y="-8" width="132" height="16"/></clipPath>
  <clipPath id="microwave-c3"><rect x="0" y="-8" width="29" height="16"/></clipPath>
</defs>

<!-- גוף התנור -->
<rect class="fl-line" x="40" y="195" width="18" height="5" rx="1.5"/>
<rect class="fl-line" x="190" y="195" width="18" height="5" rx="1.5"/>
<rect class="body" x="26" y="40" width="196" height="156" rx="8"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="38" y="50" width="122" height="136" rx="3"/>

<!-- דלת: זכוכית, רשת מתכת מחוררת, ידית -->
<rect class="fl-cold-soft" x="29" y="52" width="4.5" height="132" rx="1.5"/>
<path class="st-ink fl-none" stroke-width="3" stroke-dasharray="5 2.5" d="M36 52V184"/>
<rect class="fl-dark" x="20" y="60" width="6" height="34" rx="2.5"/>

<!-- צלחת מסתובבת ואוכל -->
<path class="fl-line" d="M94 168h12l3 18h-18z"/>
<rect class="fl-cold-soft st-ink" stroke-width="1.5" x="54" y="164" width="92" height="5" rx="2.5"/>
<rect class="fl-warm st-ink" stroke-width="2" x="64" y="126" width="72" height="38" rx="10"/>
<g class="hl-3">
  <rect class="fl-hot" x="65" y="127" width="70" height="36" rx="9"/>
  <rect class="fl-cold-soft" x="74" y="136" width="52" height="18" rx="5"/>
</g>

<!-- מוליך הגלים והמגנטרון -->
<g class="hl-1">
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M160 52H202V78H184V68H160z"/>
  <path class="wire st-violet dash" stroke-width="2" d="M191 72V60H162"/>
  <rect class="fl-hot st-ink" stroke-width="1.5" x="188" y="69" width="6" height="10" rx="2"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="170" y="78" width="42" height="40" rx="4"/>
  <path class="thin" d="M174 88h7M174 98h7M174 108h7M201 88h7M201 98h7M201 108h7"/>
  <circle class="fl-elec pulse" cx="191" cy="98" r="8"/>
  <circle class="fl-hot" cx="191" cy="98" r="3"/>
  <!-- כבל ושקע -->
  <path class="wire st-elec dash" d="M246 64V90Q246 98 238 98H212"/>
  <rect class="body" x="236" y="46" width="20" height="16" rx="3"/>
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M242 51v6M250 51v6"/>
</g>

<!-- גלי מיקרו בתא: ישר אל האוכל -->
<g class="hl-1 hl-2 hl-3">
  <g transform="translate(158 66) rotate(127.5)" clip-path="url(#microwave-c1)">
    <path class="wire st-violet" stroke-width="2" d="M-16 0q4-6 8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="16 0" dur=".7s" repeatCount="indefinite"/>
    </path>
  </g>
</g>
<!-- גל שפוגע בדלת ומוחזר אל האוכל -->
<g class="hl-1 hl-4">
  <g transform="translate(158 62) rotate(155)" clip-path="url(#microwave-c2)">
    <path class="wire st-violet" stroke-width="2" d="M-16 0q4-6 8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0t8 0">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="16 0" dur=".7s" repeatCount="indefinite"/>
    </path>
  </g>
  <g transform="translate(38 118) rotate(25)" clip-path="url(#microwave-c3)">
    <path class="wire st-violet" stroke-width="2" d="M-16 0q4-6 8 0t8 0t8 0t8 0t8 0t8 0">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="16 0" dur=".7s" repeatCount="indefinite"/>
    </path>
  </g>
</g>

<!-- זכוכית מגדלת: מולקולות מים והשדה החשמלי המתהפך -->
<g class="hl-2">
  <circle class="thin st-ink" cx="128" cy="146" r="6"/>
  <path class="thin" stroke-dasharray="3 3" d="M134 143L238 128M134 150L240 178"/>
  <circle class="body" cx="270" cy="152" r="40"/>
  <g transform="translate(270 152)"><g>
    <animateTransform attributeName="transform" type="scale" values="1 1;1 -1;1 1" dur=".9s" repeatCount="indefinite"/>
    <path class="arrow st-violet" d="M0 24V-24M-6 -16L0 -25L6 -16"/>
  </g></g>
  <g transform="translate(251 138)"><g>
    <animateTransform attributeName="transform" type="rotate" values="-80;80;-80" dur=".9s" repeatCount="indefinite"/>
    <circle class="fl-panel st-ink" stroke-width="1.5" cx="-6" cy="5.5" r="3.6"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="6" cy="5.5" r="3.6"/>
    <circle class="fl-cold st-ink" stroke-width="1.5" r="6.5"/>
  </g></g>
  <g transform="translate(289 138)"><g>
    <animateTransform attributeName="transform" type="rotate" values="-80;80;-80" dur=".9s" begin="-.08s" repeatCount="indefinite"/>
    <circle class="fl-panel st-ink" stroke-width="1.5" cx="-6" cy="5.5" r="3.6"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="6" cy="5.5" r="3.6"/>
    <circle class="fl-cold st-ink" stroke-width="1.5" r="6.5"/>
  </g></g>
  <g transform="translate(252 168)"><g>
    <animateTransform attributeName="transform" type="rotate" values="-80;80;-80" dur=".9s" begin="-.14s" repeatCount="indefinite"/>
    <circle class="fl-panel st-ink" stroke-width="1.5" cx="-6" cy="5.5" r="3.6"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="6" cy="5.5" r="3.6"/>
    <circle class="fl-cold st-ink" stroke-width="1.5" r="6.5"/>
  </g></g>
  <g transform="translate(288 167)"><g>
    <animateTransform attributeName="transform" type="rotate" values="-80;80;-80" dur=".9s" begin="-.05s" repeatCount="indefinite"/>
    <circle class="fl-panel st-ink" stroke-width="1.5" cx="-6" cy="5.5" r="3.6"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="6" cy="5.5" r="3.6"/>
    <circle class="fl-cold st-ink" stroke-width="1.5" r="6.5"/>
  </g></g>
</g>

<!-- עין מציצה ואור שעובר ברשת -->
<g class="hl-4">
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M2 131Q11 122 20 131Q11 140 2 131z"/>
  <circle class="fl-ink" cx="12" cy="131" r="3.2"/>
  <path class="wire st-elec dash" stroke-width="2" style="stroke-dasharray:2 4" d="M64 156L21 136"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <circle class="ring st-violet" cx="160" cy="60" r="16"/>
  <circle class="ring st-violet d3" cx="160" cy="60" r="16"/>
  <text x="150" y="28">המגנטרון משדר גלי מיקרו</text>
  <text x="288" y="60">חשמל</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-cold" cx="128" cy="146" r="14"/>
  <text x="250" y="14">השדה מתהפך</text>
  <text x="250" y="29">והמים מסתובבים איתו</text>
</g>
<!-- שלב 3: החום זוחל פנימה בהולכה -->
<g class="only-3">
  <rect class="fl-hot fade" x="65" y="127" width="70" height="36" rx="9" style="opacity:.5"/>
  <rect class="fl-cold-soft" x="74" y="136" width="52" height="18" rx="5"/>
  <circle class="fl-hot" r="2.4"><animateMotion dur="2.2s" repeatCount="indefinite" path="M70 145H97"/><animate attributeName="opacity" values="1;0" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.4"><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite" path="M130 145H103"/><animate attributeName="opacity" values="1;0" dur="2.2s" begin="-1.1s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.4"><animateMotion dur="2.2s" begin="-.5s" repeatCount="indefinite" path="M100 131V144"/><animate attributeName="opacity" values="1;0" dur="2.2s" begin="-.5s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.4"><animateMotion dur="2.2s" begin="-1.6s" repeatCount="indefinite" path="M100 159V146"/><animate attributeName="opacity" values="1;0" dur="2.2s" begin="-1.6s" repeatCount="indefinite"/></circle>
  <text x="104" y="28">מתחמם רק בשכבה החיצונית</text>
  <text x="100" y="211">המרכז נשאר קר</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <circle class="ring st-violet" cx="38" cy="118" r="13"/>
  <circle class="ring st-violet d3" cx="38" cy="118" r="13"/>
  <text x="96" y="28">הרשת מחזירה את הגלים</text>
  <text x="44" y="211">האור עובר</text>
</g>
`;
