// מסך מגע: 1 רשת שקופה של שורות ועמודות · 2 האצבע מושכת מטען · 3 השבב סורק ומוצא את הנקודה · 4 שתי נגיעות נמדדות בנפרד
export default `
<defs>
  <pattern id="touch-dots" patternUnits="userSpaceOnUse" x="20" y="20" width="18" height="18"><circle class="fl-elec st-ink" stroke-width=".8" cx="9" cy="9" r="2.6"/></pattern>
  <pattern id="touch-glow" patternUnits="userSpaceOnUse" x="20" y="20" width="18" height="18"><circle class="fl-elec" opacity=".45" cx="9" cy="9" r="6"/></pattern>
  <g id="touch-finger">
    <rect class="fl-soft st-ink" stroke-width="2" x="-10" y="-11" width="340" height="22" rx="11"/>
    <rect class="fl-panel st-line" stroke-width="1.2" x="-6.5" y="-6.5" width="14" height="13" rx="5"/>
    <path class="thin" d="M40 -7q3 7 0 14M72 -7q3 7 0 14"/>
  </g>
  <clipPath id="touch-screen"><rect x="22" y="16" width="104" height="188" rx="6"/></clipPath>
  <marker id="touch-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- הטלפון והזכוכית -->
<rect class="body" x="14" y="6" width="120" height="208" rx="14"/>
<rect class="fl-cold-soft" x="22" y="16" width="104" height="188" rx="6"/>
<rect class="fl-line" x="64" y="9.5" width="20" height="3" rx="1.5"/>
<!-- רשת שקופה: עמודות ושורות -->
<g clip-path="url(#touch-screen)">
  <path class="fl-none st-cold" stroke-width="4.5" stroke-opacity=".5" d="M29 16V204M47 16V204M65 16V204M83 16V204M101 16V204M119 16V204"/>
  <path class="fl-none st-violet" stroke-width="4.5" stroke-opacity=".5" d="M22 29H126M22 47H126M22 65H126M22 83H126M22 101H126M22 119H126M22 137H126M22 155H126M22 173H126M22 191H126"/>
  <g class="only-1"><rect class="fade" x="20" y="20" width="108" height="180" fill="url(#touch-glow)"/></g>
  <rect x="20" y="20" width="108" height="180" fill="url(#touch-dots)"/>
  <!-- שלב 3: פס הסריקה עובר שורה אחרי שורה -->
  <g class="only-3">
    <rect class="fl-elec" opacity=".55" x="22" y="24" width="104" height="10" rx="2"><animate attributeName="y" values="24;42;60;78;96;114;132;150;168;186" dur="1.6s" repeatCount="indefinite" calcMode="discrete"/></rect>
  </g>
</g>

<!-- מוליכים אל השבב -->
<g class="hl-3 hl-4">
  <path class="wire st-cold" d="M134 77H168M134 83H168"/>
  <path class="wire st-violet" d="M134 89H168M134 95H168"/>
  <path class="flow" d="M134 77H168M134 83H168M134 89H168M134 95H168"/>
  <!-- שבב הבקרה -->
  <path class="fl-none st-line" stroke-width="2.5" d="M176 66v-5M184 66v-5M192 66v-5M200 66v-5M176 106v5M184 106v5M192 106v5M200 106v5"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="168" y="66" width="40" height="40" rx="4"/>
  <rect fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" x="176" y="74" width="24" height="24" rx="2"/>
  <circle fill="#fff" fill-opacity=".5" cx="174" cy="72" r="1.5"/>
  <path class="arrow st-ink" stroke-width="1.8" d="M213 86H242" marker-end="url(#touch-a)"/>
  <!-- מפת הקיבול שהשבב רואה -->
  <rect class="body" x="246" y="58" width="56" height="88" rx="6"/>
  <path class="thin" stroke-width=".8" d="M250 62V142M258 62V142M266 62V142M274 62V142M282 62V142M290 62V142M298 62V142M250 62H298M250 70H298M250 78H298M250 86H298M250 94H298M250 102H298M250 110H298M250 118H298M250 126H298M250 134H298M250 142H298"/>
</g>
<g class="only-3"><circle class="fl-green blink" cx="188" cy="86" r="4"/></g>
<g class="only-3">
  <rect class="fl-elec" opacity=".6" x="250" y="62" width="48" height="8"><animate attributeName="y" values="62;70;78;86;94;102;110;118;126;134" dur="1.6s" repeatCount="indefinite" calcMode="discrete"/></rect>
</g>
<g class="from-3">
  <rect class="fl-hot" opacity=".35" x="266" y="78" width="24" height="24"/>
  <rect class="fl-hot" x="274" y="86" width="8" height="8"/>
</g>
<g class="from-4">
  <rect class="fl-hot" opacity=".35" x="250" y="102" width="24" height="24"/>
  <rect class="fl-hot" x="258" y="110" width="8" height="8"/>
</g>

<!-- האצבעות -->
<use class="only-2" href="#touch-finger" transform="translate(83 83) rotate(35)"/>
<use class="only-3" href="#touch-finger" transform="translate(83 83) rotate(35)"/>
<g class="from-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;5 -8;0 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="2.2s" repeatCount="indefinite"/><use href="#touch-finger" transform="translate(47 137) rotate(28) scale(1.15)"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-5 8;0 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="2.2s" repeatCount="indefinite"/><use href="#touch-finger" transform="translate(83 83) rotate(35)"/></g>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="228" y="22">רשת שקופה של שורות ועמודות</text>
  <text x="228" y="38">מטען זעיר בכל הצטלבות</text>
</g>
<!-- שלב 2: המטען נמשך אל האצבע -->
<g class="only-2">
  <circle class="ring st-elec" cx="83" cy="83" r="22"/>
  <circle class="ring st-elec d3" cx="83" cy="83" r="22"/>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" repeatCount="indefinite" path="M65 83H83L150 130"/></circle>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" begin="-.35s" repeatCount="indefinite" path="M83 65V83L150 130"/></circle>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" begin="-.7s" repeatCount="indefinite" path="M65 65L83 83L150 130"/></circle>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" begin="-1.05s" repeatCount="indefinite" path="M83 101V83L150 130"/></circle>
  <text x="228" y="22">האצבע מושכת אליה מטען</text>
  <text x="228" y="38">והקיבול בנקודה משתנה</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="228" y="22">השבב סורק את כל הרשת</text>
  <text x="228" y="38">מאות פעמים בשנייה</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <circle class="ring st-hot" cx="83" cy="83" r="22"/>
  <circle class="ring st-hot d3" cx="47" cy="137" r="22"/>
  <text x="228" y="22">כל הצטלבות נמדדת בנפרד</text>
  <text x="228" y="38">וכך מזוהות שתי נגיעות</text>
</g>
`;
