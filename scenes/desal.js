// התפלה באוסמוזה הפוכה. 1 שאיבה וסינון גס · 2 משאבת לחץ · 3 הקרום · 4 מינרלים, תמלחת והשבת אנרגיה
export default `
<!-- ים וחוף -->
<path class="fl-cold-soft" d="M0 196q8-5 16 0t16 0t16 0t16 0t16 0t16 0L86 220H0z"/>
<path class="wire st-cold" d="M0 196q8-5 16 0t16 0t16 0t16 0t16 0t16 0" style="stroke-width:1.5"/>
<path class="fl-cold" opacity=".55" d="M48 210q6-5 12 0q-6 5-12 0zM48 210l-5-3.5v7z"/>
<path class="fl-soft" d="M94 188H320V220H84z"/>
<path class="thin" d="M84 220L94 188H320"/>

<!-- שלב 1: צינור יניקה ומסנן גס -->
<g class="hl-1">
  <path class="pipe st-cold" style="stroke-opacity:.6" d="M16 208H30V56H48"/>
  <path class="flow" d="M16 208H30V56H48"/>
  <rect class="body" x="5" y="202" width="12" height="12" rx="2"/>
  <path class="wire st-ink" d="M9 204v8M13 204v8" style="stroke-width:1"/>
  <rect class="body" x="48" y="34" width="34" height="44" rx="5"/>
  <rect class="fl-cold-soft" x="51" y="37" width="28" height="38" rx="3"/>
  <path class="wire st-ink" stroke-dasharray="2 2.5" d="M63 37V75M68 37V75M73 37V75" style="stroke-width:1.5"/>
  <circle class="fl-warm" cx="55" cy="70" r="2.4"/><circle class="fl-warm" cx="59" cy="66" r="2"/><circle class="fl-warm" cx="55" cy="61" r="1.8"/>
  <circle class="fl-warm" cx="59" cy="72" r="1.8"/>
  <path class="fl-green" d="M53 52q3-5 6 0q-3 5-6 0zM56 44q3-4 5 0q-2 4-5 0z"/>
</g>
<g class="hl-1 hl-2">
  <path class="pipe st-cold" style="stroke-opacity:.6" d="M82 56H104"/>
  <path class="flow" d="M82 56H104"/>
</g>

<!-- שלב 2: משאבת לחץ גבוה -->
<g class="hl-2 hl-3">
  <path class="pipe st-violet" d="M136 56H148V70H166" style="stroke-width:8"/>
  <path class="flow" style="animation-duration:.45s" d="M136 56H148V70H166"/>
</g>
<g class="hl-2">
  <circle class="fl-dark st-ink" stroke-width="2" cx="120" cy="56" r="16"/>
  <g class="spin fast"><path class="arrow" stroke="#fff" d="M120 46v20M110 56h20"/></g>
  <circle class="fl-ink" cx="120" cy="56" r="2.5"/>
  <path class="wire st-ink" d="M148 47V53" style="stroke-width:1.5"/>
  <circle class="body" cx="148" cy="40" r="7.5" style="stroke-width:1.5"/>
  <path class="arrow st-hot" d="M148 40V34.5" style="stroke-width:1.8">
    <animateTransform attributeName="transform" type="rotate" values="25 148 40;70 148 40;40 148 40;75 148 40;25 148 40" dur="1.3s" repeatCount="indefinite"/>
  </path>
</g>

<!-- שלב 3: כלי הלחץ והקרום -->
<g class="hl-3">
  <rect class="body" x="162" y="30" width="128" height="56" rx="14"/>
  <rect class="fl-cold-soft" x="168" y="36" width="116" height="44" rx="8"/>
  <rect class="fl-violet" x="168" y="54" width="116" height="5"/>
  <path class="wire st-ink" stroke-dasharray="1 4" d="M170 56.5H282" style="stroke-width:1"/>
  <!-- מלח שנשאר בצד הלחץ -->
  <g class="fl-warm">
    <rect x="176" y="74" width="4" height="4"/><rect x="198" y="63" width="4" height="4"/><rect x="222" y="75" width="4" height="4"/>
    <rect x="240" y="64" width="4" height="4"/><rect x="262" y="72" width="4" height="4"/><rect x="270" y="63" width="4" height="4"/>
  </g>
  <!-- מולקולות מים עוברות את הקרום -->
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" repeatCount="indefinite" path="M170 70H196Q204 70 204 58V50Q204 45 212 45H284"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-.9s" repeatCount="indefinite" path="M170 73H226Q234 73 234 58V50Q234 45 242 45H284"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-1.7s" repeatCount="indefinite" path="M170 67H180Q187 67 187 58V50Q187 42 196 42H284"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-2.2s" repeatCount="indefinite" path="M170 70H250Q258 70 258 58V50Q258 47 264 47H284"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-.4s" repeatCount="indefinite" path="M170 76H248Q256 76 256 84"/></circle>
  <!-- מלח נהדף מהקרום ויוצא עם התמלחת -->
  <rect class="fl-warm" x="-2.2" y="-2.2" width="4.4" height="4.4"><animateMotion dur="2.8s" repeatCount="indefinite" path="M170 71H206L213 62L220 72H248Q256 74 256 84"/></rect>
  <rect class="fl-warm" x="-2.2" y="-2.2" width="4.4" height="4.4"><animateMotion dur="2.8s" begin="-1.4s" repeatCount="indefinite" path="M170 75H184L190 62L197 70L236 63L244 72Q254 74 256 84"/></rect>
  <rect class="fl-warm" x="-2.2" y="-2.2" width="4.4" height="4.4"><animateMotion dur="2.8s" begin="-2.1s" repeatCount="indefinite" path="M170 68H224L230 62L238 74H250Q256 76 256 84"/></rect>
</g>

<!-- מים מתוקים אל המכל -->
<g class="hl-3 hl-4">
  <path class="pipe st-cold" d="M288 45H304V126"/>
  <path class="flow" d="M288 45H304V126"/>
  <path class="pipe st-warm" d="M256 87V104H134"/>
  <path class="flow" d="M256 87V104H134"/>
</g>

<!-- שלב 4: מינרלים, מכל, כוס, והשבת אנרגיה מהתמלחת -->
<g class="hl-4">
  <rect class="body" x="262" y="124" width="50" height="64" rx="5"/>
  <rect class="fl-cold" opacity=".55" x="264" y="142" width="46" height="44" rx="3"/>
  <path class="wire st-ink" d="M264 142H310" style="stroke-width:1"/>
  <path class="body" d="M266 98H286L281 114H271z" style="stroke-width:1.5"/>
  <circle class="fl-green" cx="273" cy="103" r="2"/><circle class="fl-green" cx="279" cy="103" r="2"/><circle class="fl-green" cx="276" cy="108" r="2"/>
  <path class="wire st-ink" d="M276 114V124" style="stroke-width:1.5"/>
  <circle class="fl-green" r="2.2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M276 114V150Q276 164 286 172"/></circle>
  <circle class="fl-green" r="2.2"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M276 114V150Q276 160 268 176"/></circle>
  <path class="wire st-ink" d="M262 164H250V169"/>
  <path class="fl-cold" d="M244.5 178h11l-1.5 9h-8z"/>
  <path class="wire st-ink" d="M243 173l2 15h10l2-15" style="stroke-width:1.5"/>
  <circle class="fl-cold" r="1.8"><animateMotion dur=".9s" repeatCount="indefinite" path="M250 170V182"/></circle>

  <path class="pipe st-warm" style="stroke-opacity:.6" d="M120 118V176H78V202"/>
  <path class="flow slow" d="M120 118V176H78V202"/>
  <circle class="body" cx="120" cy="104" r="14"/>
  <g class="spin"><path class="fl-warm" d="M120 104q-2-9 4-11q3 5-4 11zM120 104q9 3 7.500 9.500q-6-.5-7.500-9.500zM120 104q-7 6-11.500 1.500q2.500-5 11.500-1.500z"/></g>
  <circle class="fl-ink" cx="120" cy="104" r="2"/>
  <path class="wire st-elec dash" d="M120 90V79" style="stroke-width:4"/>
  <path class="fl-elec" d="M114.500 80L120 72.500L125.500 80z"/>
</g>

<!-- תוויות -->
<g class="only-1">
  <circle class="fl-warm" r="2.3"><animateMotion dur="2.4s" repeatCount="indefinite" path="M12 208H30V56H56"/></circle>
  <circle class="fl-green" r="2.3"><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M12 208H30V56H56"/></circle>
  <circle class="fl-warm" r="1.9"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M12 208H30V56H56"/></circle>
  <text x="66" y="19">שאיבה וסינון גס</text>
</g>
<g class="only-2">
  <circle class="ring st-violet" cx="120" cy="56" r="26"/>
  <circle class="ring st-violet d3" cx="120" cy="56" r="26"/>
  <text x="96" y="19">לחץ: כ־70 אטמוספרות</text>
</g>
<g class="only-3">
  <text x="226" y="19">מים עוברים, מלח נשאר</text>
</g>
<g class="only-4">
  <circle class="ring st-elec" cx="120" cy="104" r="22"/>
  <text x="212" y="131">מוסיפים מינרלים</text>
  <text x="182" y="160">תמלחת חוזרת לים</text>
  <text class="sm" x="68" y="108">לחץ התמלחת</text>
  <text class="sm" x="68" y="119">ממוחזר</text>
</g>
`;
