// רשת החשמל: 1 טורבינה מסובבת מגנט בתוך סלילים · 2 שנאי מעלה מתח · 3 קווי מתח עליון · 4 שנאי מוריד עד 230 וולט בשקע
export default `
<path class="thin" d="M6 157H314"/>

<!-- תחנת כוח: קיטור, טורבינה, רצועה, גנרטור -->
<g class="hl-1">
  <path class="pipe st-line" d="M6 46H22"/><path class="flow" d="M6 46H22"/>
  <path class="wire st-dark dash" style="stroke-width:2" d="M35 72V102M45 102V72"/>
  <circle class="body" cx="40" cy="54" r="19"/>
  <g class="spin">
    <g class="fl-cold st-ink" stroke-width="1.2" stroke-linejoin="round">
      <path d="M40 54Q47 44 40 37Q35 46 40 54z"/>
      <path transform="rotate(60 40 54)" d="M40 54Q47 44 40 37Q35 46 40 54z"/>
      <path transform="rotate(120 40 54)" d="M40 54Q47 44 40 37Q35 46 40 54z"/>
      <path transform="rotate(180 40 54)" d="M40 54Q47 44 40 37Q35 46 40 54z"/>
      <path transform="rotate(240 40 54)" d="M40 54Q47 44 40 37Q35 46 40 54z"/>
      <path transform="rotate(300 40 54)" d="M40 54Q47 44 40 37Q35 46 40 54z"/>
    </g>
    <circle class="fl-ink" cx="40" cy="54" r="3"/>
  </g>
  <!-- גנרטור: מגנט מסתובב בין סלילי נחושת -->
  <circle class="body" cx="40" cy="126" r="25"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="18" y="113" width="8" height="26" rx="3"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="54" y="113" width="8" height="26" rx="3"/>
  <path class="thin st-ink" style="stroke-width:1" d="M18 119h8M18 124h8M18 129h8M18 134h8M54 119h8M54 124h8M54 129h8M54 134h8"/>
  <g class="spin">
    <rect class="fl-hot" x="28" y="121" width="12" height="10"/><rect class="fl-cold" x="40" y="121" width="12" height="10"/>
    <rect class="fl-none st-ink" stroke-width="1.5" x="28" y="121" width="24" height="10" rx="1"/>
    <circle class="fl-ink" cx="40" cy="126" r="2"/>
  </g>
</g>

<!-- מהגנרטור לשנאי: מתח נמוך יחסית, זרם גדול -->
<g class="hl-1 hl-2">
  <path class="pipe st-warm" d="M65 128H76"/><path class="flow" d="M65 128H76"/>
</g>

<!-- שנאי מעלה: מעט כריכות בכניסה, הרבה ביציאה -->
<g class="hl-2">
  <rect class="fl-bg st-dark" stroke-width="5" x="78" y="112" width="26" height="38" rx="3"/>
  <path class="wire st-warm" style="stroke-width:3" d="M73 124h10M73 131h10M73 138h10"/>
  <path class="wire st-hot" style="stroke-width:2" d="M99 117h10M99 121h10M99 125h10M99 129h10M99 133h10M99 137h10M99 141h10M99 145h10"/>
  <path class="wire st-ink" style="stroke-width:2" d="M104 109V100"/><path class="thin st-ink" d="M100 106h8M101 102h6"/>
</g>

<!-- קווי מתח עליון -->
<g class="hl-3">
  <g class="wire st-hot" style="stroke-width:1.8">
    <path d="M104 100Q110 78 124 60"/><path d="M104 100Q108 88 120 80"/>
    <path d="M124 60Q156 72 188 60"/><path d="M156 60Q188 72 220 60"/>
    <path d="M120 80Q152 92 184 80"/><path d="M160 80Q192 92 224 80"/>
    <path d="M220 60Q232 76 238 100"/><path d="M224 80Q234 86 238 100"/>
  </g>
</g>
<g class="hl-3">
  <!-- עמוד 1 -->
  <path class="wire st-ink" style="stroke-width:2" d="M130 157L137 44L140 30L143 44L150 157"/>
  <path class="thin st-ink" d="M143 44L135.8 64L145.5 84L133.3 104L148 124L130.8 144L150 157M137 44L144.2 64L134.5 84L146.7 104L132 124L149.2 144L130 157"/>
  <path class="wire st-ink" style="stroke-width:2" d="M124 54H156M120 74H160"/>
  <path class="thin st-ink" d="M124 54L137 46M156 54L143 46M120 74L136 64M160 74L144 64M124 54v6M156 54v6M120 74v6M160 74v6"/>
  <!-- עמוד 2 -->
  <path class="wire st-ink" style="stroke-width:2" d="M194 157L201 44L204 30L207 44L214 157"/>
  <path class="thin st-ink" d="M207 44L199.8 64L209.5 84L197.3 104L212 124L194.8 144L214 157M201 44L208.2 64L198.5 84L210.7 104L196 124L213.2 144L194 157"/>
  <path class="wire st-ink" style="stroke-width:2" d="M188 54H220M184 74H224"/>
  <path class="thin st-ink" d="M188 54L201 46M220 54L207 46M184 74L200 64M224 74L208 64M188 54v6M220 54v6M184 74v6M224 74v6"/>
  <!-- האנרגיה נעה לאורך הקווים -->
  <g class="fl-elec st-ink" stroke-width=".8">
    <circle r="3"><animateMotion dur="1.2s" repeatCount="indefinite" path="M104 100Q110 78 124 60"/></circle>
    <circle r="3"><animateMotion dur="1.2s" begin="-.6s" repeatCount="indefinite" path="M104 100Q108 88 120 80"/></circle>
    <circle r="3"><animateMotion dur="1.8s" repeatCount="indefinite" path="M124 60Q156 72 188 60"/></circle>
    <circle r="3"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M156 60Q188 72 220 60"/></circle>
    <circle r="3"><animateMotion dur="1.8s" begin="-.45s" repeatCount="indefinite" path="M120 80Q152 92 184 80"/></circle>
    <circle r="3"><animateMotion dur="1.8s" begin="-1.35s" repeatCount="indefinite" path="M160 80Q192 92 224 80"/></circle>
    <circle r="3"><animateMotion dur="1.2s" begin="-.3s" repeatCount="indefinite" path="M220 60Q232 76 238 100"/></circle>
    <circle r="3"><animateMotion dur="1.2s" begin="-.9s" repeatCount="indefinite" path="M224 80Q234 86 238 100"/></circle>
  </g>
</g>

<!-- שנאי מוריד: הרבה כריכות בכניסה, מעט ביציאה -->
<g class="hl-4">
  <rect class="fl-bg st-dark" stroke-width="5" x="238" y="112" width="24" height="38" rx="3"/>
  <path class="wire st-hot" style="stroke-width:2" d="M233 117h10M233 121h10M233 125h10M233 129h10M233 133h10M233 137h10M233 141h10M233 145h10"/>
  <path class="wire st-green" style="stroke-width:3" d="M257 124h10M257 131h10M257 138h10"/>
  <path class="wire st-ink" style="stroke-width:2" d="M238 109V100"/><path class="thin st-ink" d="M234 106h8M235 102h6"/>
</g>
<!-- בית ושקע -->
<g class="hl-4">
  <path class="pipe st-green" style="stroke-width:4" d="M267 136H281"/>
  <path class="body" d="M274 116V157H310V116"/>
  <path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M268 117L292 95L314 117z"/>
  <circle class="body" cx="292" cy="136" r="11"/>
  <circle class="thin st-ink" cx="292" cy="136" r="7.5"/>
  <circle class="fl-ink" cx="288.5" cy="136" r="1.7"/><circle class="fl-ink" cx="295.5" cy="136" r="1.7"/>
  <path class="flow" d="M267 136H280"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <rect class="fl-elec fade" x="18" y="113" width="8" height="26" rx="3"/>
  <rect class="fl-elec fade d3" x="54" y="113" width="8" height="26" rx="3"/>
  <circle class="fl-panel st-line" stroke-width="1" r="3"><animateMotion dur=".9s" repeatCount="indefinite" path="M6 46H22"/></circle>
  <circle class="fl-panel st-line" stroke-width="1" r="2.4"><animateMotion dur=".9s" begin="-.45s" repeatCount="indefinite" path="M6 44H22"/></circle>
  <text x="68" y="180">טורבינה מסובבת מגנט</text>
  <text x="68" y="196">ובסלילים נוצר זרם</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-hot" cx="91" cy="131" r="30"/>
  <g class="bob"><path class="arrow st-hot" d="M84 98V78M77 85L84 77L91 85"/></g>
  <text x="96" y="180">השנאי מעלה מתח</text>
  <text x="96" y="196">והזרם קטן</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="172" y="180">קווי מתח עליון</text>
  <text x="172" y="196">מאות קילומטרים</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <g class="bob"><path class="arrow st-green" d="M256 76V96M249 89L256 97L263 89"/></g>
  <circle class="ring st-green" cx="292" cy="136" r="22"/>
  <text x="246" y="180">שנאים מורידים מתח</text>
  <text x="246" y="196">עד 230 וולט בשקע</text>
</g>
`;
