// דוד שמש: 1 קולט כהה בולע קרינה · 2 צינורות מים בתוך הלוח · 3 תרמוסיפון: חם עולה לדוד, קר יורד לקולט · 4 בידוד וגוף חימום לגיבוי
export default `
<defs>
  <linearGradient id="solar-heater-r" gradientUnits="userSpaceOnUse" x1="0" y1="174" x2="0" y2="102">
    <stop offset="0" style="stop-color:var(--s-cold)"/><stop offset=".55" style="stop-color:var(--s-warm)"/><stop offset="1" style="stop-color:var(--s-hot)"/>
  </linearGradient>
  <linearGradient id="solar-heater-t" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" style="stop-color:var(--s-hot)"/><stop offset=".5" style="stop-color:var(--s-warm)"/><stop offset="1" style="stop-color:var(--s-cold)"/>
  </linearGradient>
</defs>

<!-- גג ורגלי הדוד -->
<path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M8 196H304"/>
<path class="st-line fl-none" stroke-width="3" stroke-linecap="round" d="M238 78V195M290 78V195"/>
<path class="thin" d="M238 112L290 160"/>

<!-- שמש וקרניים -->
<g class="hl-1">
  <path class="st-elec fl-none" stroke-width="2.5" stroke-linecap="round" d="M34 10v6M34 52v6M10 34h6M12 17l4 4M52 13l-4 4M14 53l4-4"/>
  <circle class="fl-elec pulse" cx="34" cy="34" r="14"/>
  <path class="wire st-elec dash" d="M48 48L82 124"/>
  <path class="wire st-elec dash" d="M52 42L116 116"/>
  <path class="wire st-elec dash" d="M56 36L150 110"/>
</g>

<!-- קולט: לוח כהה -->
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M28 180H138L180 96H70z"/>

<!-- צינור קר: מתחתית הדוד אל תחתית הקולט -->
<g class="hl-3">
  <path class="pipe st-cold" d="M218 70V188H148V174H38"/>
  <path class="flow" d="M218 70V188H148V174H38"/>
</g>
<!-- צינורות עולים בתוך הלוח -->
<g class="hl-2 hl-3">
  <g stroke="url(#solar-heater-r)" stroke-width="4" stroke-linecap="round" fill="none">
    <path d="M44 174L80 102"/><path d="M62 174L98 102"/><path d="M80 174L116 102"/><path d="M98 174L134 102"/><path d="M116 174L152 102"/><path d="M134 174L170 102"/>
  </g>
  <path class="flow slow" d="M44 174L80 102"/><path class="flow slow" d="M62 174L98 102"/><path class="flow slow" d="M80 174L116 102"/>
  <path class="flow slow" d="M98 174L134 102"/><path class="flow slow" d="M116 174L152 102"/><path class="flow slow" d="M134 174L170 102"/>
</g>
<!-- צינור חם: מראש הקולט אל הדוד -->
<g class="hl-3">
  <path class="pipe st-hot" d="M76 102H188V46H206"/>
  <path class="flow" d="M76 102H188V46H206"/>
</g>

<!-- זכוכית הקולט -->
<path class="hl-1 st-cold" fill="none" stroke-width="2" stroke-linejoin="round" stroke-dasharray="2 4" d="M33 177H136L175 99H72z"/>

<!-- דוד: מעטפת, בידוד, מים -->
<rect class="body" x="196" y="22" width="110" height="56" rx="28"/>
<rect class="hl-4 st-warm" fill="none" stroke-width="5" x="199.5" y="25.5" width="103" height="49" rx="24.5"/>
<rect class="fl-cold-soft st-ink" stroke-width="1.5" x="203" y="29" width="96" height="42" rx="21"/>
<rect class="hl-3 hl-4" fill="url(#solar-heater-t)" x="204" y="30" width="94" height="40" rx="20" style="fill-opacity:.8"/>

<!-- גוף חימום חשמלי -->
<g class="hl-4">
  <path class="wire st-elec dash" d="M313 196V58H302"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="296" y="50" width="8" height="16" rx="2"/>
  <path class="wire st-ink" stroke-width="4.5" d="M296 54H262Q256 54 256 58Q256 62 262 62H296"/>
  <path class="wire st-hot" d="M296 54H262Q256 54 256 58Q256 62 262 62H296"/>
</g>

<!-- שלב 1: החום נכלא מתחת לזכוכית -->
<g class="only-1">
  <circle class="fl-hot" r="3"><animateMotion dur="1.6s" repeatCount="indefinite" path="M70 160L62 146L78 150L70 160"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.6s" begin="-.5s" repeatCount="indefinite" path="M108 150L100 136L116 140L108 150"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.6s" begin="-1s" repeatCount="indefinite" path="M138 128L130 114L146 118L138 128"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M96 122L88 110L104 113L96 122"/></circle>
  <text x="120" y="20">הלוח הכהה בולע שמש</text>
  <text x="94" y="211">הזכוכית כולאת את החום</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" repeatCount="indefinite" path="M60 150L66 144"/><animate attributeName="opacity" values="1;0" dur="1.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-.7s" repeatCount="indefinite" path="M100 132L106 126"/><animate attributeName="opacity" values="1;0" dur="1.4s" begin="-.7s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-.3s" repeatCount="indefinite" path="M132 144L138 138"/><animate attributeName="opacity" values="1;0" dur="1.4s" begin="-.3s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-1s" repeatCount="indefinite" path="M88 164L94 158"/><animate attributeName="opacity" values="1;0" dur="1.4s" begin="-1s" repeatCount="indefinite"/></circle>
  <text x="100" y="211">המים בצינורות מתחממים</text>
</g>
<!-- שלב 3: הסיבוב -->
<g class="only-3">
  <circle class="fl-hot st-ink" stroke-width="1" r="4"><animateMotion dur="3s" repeatCount="indefinite" path="M134 174L170 102H188V46H206"/></circle>
  <circle class="fl-hot st-ink" stroke-width="1" r="4"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M134 174L170 102H188V46H206"/></circle>
  <circle class="fl-cold st-ink" stroke-width="1" r="4"><animateMotion dur="3s" repeatCount="indefinite" path="M218 74V188H148V174H134"/></circle>
  <circle class="fl-cold st-ink" stroke-width="1" r="4"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M218 74V188H148V174H134"/></circle>
  <text x="120" y="20">מים חמים עולים לדוד</text>
  <text x="170" y="211">מים קרים יורדים לקולט</text>
</g>
<!-- שלב 4: ענן, בידוד וגיבוי -->
<g class="only-4">
  <path class="body bob" d="M18 50Q8 50 8 40Q8 31 18 30Q21 18 34 18Q47 18 50 29Q62 29 62 40Q62 50 52 50z"/>
  <path class="wire st-elec fade" stroke-width="5" d="M296 54H262Q256 54 256 58Q256 62 262 62H296"/>
  <circle class="ring st-hot" cx="262" cy="58" r="14"/>
  <text x="120" y="20">בידוד שומר על החום</text>
  <text x="236" y="211">גוף חימום חשמלי לגיבוי</text>
</g>
`;
