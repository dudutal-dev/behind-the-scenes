// סיר לחץ בחתך על להבה: 1 סיר פתוח נעצר ב־100 מעלות · 2 מכסה ואטם כולאים אדים והלחץ עולה · 3 נקודת הרתיחה עולה ל־120 · 4 משקולת משחררת אדים ושסתום ביטחון
export default `
<defs>
  <marker id="pressure-v" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
</defs>
<!-- כיריים ולהבה -->
<path class="thin" d="M6 204H314"/>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M90 204L97 192H147L154 204Z"/>
<path class="wire st-ink" style="stroke-width:2.5" d="M62 204V176M182 204V176"/>
<g class="pulse"><path class="fl-warm" d="M102 176q5 8 3 13q-3 4-6 0q-2-5 3-13z"/><path class="fl-hot" d="M102 183q2.5 4 1.5 6.500q-1.5 2-3 0q-1-2.5 1.5-6.500z"/></g><g class="pulse d2"><path class="fl-warm" d="M112 176q5 8 3 13q-3 4-6 0q-2-5 3-13z"/><path class="fl-hot" d="M112 183q2.5 4 1.5 6.500q-1.5 2-3 0q-1-2.5 1.5-6.500z"/></g><g class="pulse"><path class="fl-warm" d="M122 176q5 8 3 13q-3 4-6 0q-2-5 3-13z"/><path class="fl-hot" d="M122 183q2.5 4 1.5 6.500q-1.5 2-3 0q-1-2.5 1.5-6.500z"/></g><g class="pulse d2"><path class="fl-warm" d="M132 176q5 8 3 13q-3 4-6 0q-2-5 3-13z"/><path class="fl-hot" d="M132 183q2.5 4 1.5 6.500q-1.5 2-3 0q-1-2.5 1.5-6.500z"/></g><g class="pulse"><path class="fl-warm" d="M142 176q5 8 3 13q-3 4-6 0q-2-5 3-13z"/><path class="fl-hot" d="M142 183q2.5 4 1.5 6.500q-1.5 2-3 0q-1-2.5 1.5-6.500z"/></g>

<!-- מים, אוכל ובועות רתיחה -->
<path class="fl-cold-soft" d="M54 124H190V164Q190 172 182 172H62Q54 172 54 164Z"/>
<path class="wire st-cold" style="stroke-width:1.5" d="M54 124H190"/>
<rect class="fl-warm st-ink" stroke-width="1.2" x="72" y="158" width="20" height="9" rx="4"/>
<ellipse class="fl-elec st-ink" stroke-width="1.2" cx="118" cy="161" rx="12" ry="7"/>
<circle class="fl-green st-ink" stroke-width="1.2" cx="146" cy="164" r="4"/><circle class="fl-green st-ink" stroke-width="1.2" cx="156" cy="163" r="4"/><circle class="fl-green st-ink" stroke-width="1.2" cx="166" cy="165" r="4"/>
<g class="fl-none st-cold" stroke-width="1.2">
  <circle cx="66" r="2.2"><animate attributeName="cy" values="168;128" dur="1.5s" begin="-0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.5s" begin="-0s" repeatCount="indefinite"/></circle><circle cx="100" r="3"><animate attributeName="cy" values="168;128" dur="1.5s" begin="-0.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.5s" begin="-0.7s" repeatCount="indefinite"/></circle><circle cx="134" r="2.4"><animate attributeName="cy" values="168;128" dur="1.5s" begin="-0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.5s" begin="-0.3s" repeatCount="indefinite"/></circle><circle cx="152" r="3"><animate attributeName="cy" values="168;128" dur="1.5s" begin="-1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.5s" begin="-1.1s" repeatCount="indefinite"/></circle><circle cx="178" r="2.2"><animate attributeName="cy" values="168;128" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></circle>
</g>

<!-- גוף הסיר והידית -->
<path class="fl-dark st-ink" stroke-width="2" d="M192 92H240Q246 92 246 97Q246 102 240 102H192Z"/>
<path class="fl-dark st-ink" stroke-width="2" d="M52 92H40Q36 92 36 96Q36 100 40 100H52Z"/>
<path class="wire st-ink" style="stroke-width:4;stroke-linecap:butt" d="M52 86V164Q52 174 62 174H182Q192 174 192 164V86"/>

<!-- מד חום: חיישן במים -->
<path class="thin st-ink" style="stroke-width:1.2" d="M180 146H258Q280 146 283 176"/><circle class="fl-ink" cx="180" cy="146" r="2.5"/>
<rect class="body" x="283" y="28" width="10" height="160" rx="5"/><circle class="body" cx="288" cy="190" r="9"/>
<rect class="fl-panel" x="284.5" y="170" width="7" height="14"/>
<circle class="fl-hot" cx="288" cy="190" r="6"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M277 176h6M277 153h6M277 130h6M277 107h6M277 84h6M277 61h6M277 38h6"/>
<text class="sm" x="264" y="87" style="direction:ltr;unicode-bidi:isolate">100°</text>
<text class="sm" x="264" y="64" style="direction:ltr;unicode-bidi:isolate">120°</text>
<g class="only-1"><rect class="fl-hot" x="286" y="135.8" width="4" height="54.19999999999999"><animate attributeName="y" values="135.8;84;84" keyTimes="0;.45;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="height" values="54.19999999999999;106;106" keyTimes="0;.45;1" dur="3.2s" repeatCount="indefinite"/></rect></g>
<g class="only-2"><rect class="fl-hot" x="286" y="84" width="4" height="106"/></g>
<g class="only-3"><rect class="fl-hot" x="286" y="84" width="4" height="106"><animate attributeName="y" values="84;61;61" keyTimes="0;.5;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="height" values="106;129;129" keyTimes="0;.5;1" dur="3.2s" repeatCount="indefinite"/></rect></g>
<g class="from-4"><rect class="fl-hot" x="286" y="61" width="4" height="129"/></g>

<!-- שלב 1: סיר פתוח. האדים בורחים והטמפרטורה נעצרת -->
<g class="only-1">
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M72 122Q66 100 76 80Q84 62 74 44"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.4s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.6s" begin="-0.9s" repeatCount="indefinite" path="M94 122Q100 100 92 78Q86 60 96 42"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.6s" begin="-0.9s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.2s" begin="-0.4s" repeatCount="indefinite" path="M116 122Q110 98 120 78Q128 60 118 40"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.2s" begin="-0.4s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.5s" begin="-1.5s" repeatCount="indefinite" path="M138 122Q146 100 136 80Q130 62 140 44"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.5s" begin="-1.5s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.3s" begin="-1.1s" repeatCount="indefinite" path="M160 122Q154 100 162 82Q168 66 160 50"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.3s" begin="-1.1s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.7s" begin="-1.9s" repeatCount="indefinite" path="M84 122Q90 104 82 84Q76 66 86 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.7s" begin="-1.9s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.4s" begin="-1.7s" repeatCount="indefinite" path="M128 122Q134 102 126 82Q120 62 130 46"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.4s" begin="-1.7s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="2.6s" begin="-0.2s" repeatCount="indefinite" path="M150 122Q144 102 152 84Q158 66 148 50"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="2.6s" begin="-0.2s" repeatCount="indefinite"/></circle>
  <g class="blink"><path class="wire st-hot" style="stroke-width:2" d="M272 84H304"/></g>
  <text x="212" y="20">בסיר פתוח המים</text>
  <text x="212" y="34">נעצרים ב־100 מעלות</text>
</g>

<!-- מכסה נעול, אטם, מד לחץ ושסתומים -->
<g class="from-2">
  <path class="pipe st-line" style="stroke-width:4" d="M46 60L68 76"/>
  <path class="body" d="M46 88Q46 78 60 76Q122 62 184 76Q198 78 198 88Z"/>
  <path class="fl-dark st-ink" stroke-width="2" d="M197 80H240Q246 80 246 85Q246 90 240 90H197Z"/>
  <rect class="body" x="118.5" y="58" width="7" height="12"/>
  <g class="hl-2"><rect class="fl-violet st-ink" stroke-width="1.2" x="48" y="84" width="10" height="5" rx="2"/><rect class="fl-violet st-ink" stroke-width="1.2" x="186" y="84" width="10" height="5" rx="2"/></g>
  <g class="hl-4"><path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M158 73V67Q158 64 161 64H165Q168 64 168 67V74.500Z"/></g>
  <g class="hl-2 hl-3">
    <circle class="body" cx="34" cy="44" r="22"/>
    <path class="thin st-ink" style="stroke-width:1.2" d="M19.9 58.100l2.8-2.800M14 44h4M19.9 29.900l2.8 2.800M34 24v4M48.1 29.900l-2.8 2.800M54 44h-4M48.1 58.100l-2.8-2.8"/>
    <path class="wire st-hot" style="stroke-width:3" d="M50.3 35.300A18.5 18.5 0 0 1 47.1 57.1"/>
  </g>
  <!-- אדים כלואים מעל המים -->
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.70s" begin="-0.00s" repeatCount="indefinite" path="M66 104l6 -4l5 5l-7 3z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.85s" begin="-0.13s" repeatCount="indefinite" path="M80 96l-5 4l-3 -6l7 -2z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.00s" begin="-0.26s" repeatCount="indefinite" path="M94 110l4 5l-8 1l2 -6z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.70s" begin="-0.39s" repeatCount="indefinite" path="M106 92l-6 -3l3 -5l5 6z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.85s" begin="-0.52s" repeatCount="indefinite" path="M118 104l6 -4l5 5l-7 3z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.00s" begin="-0.65s" repeatCount="indefinite" path="M130 88l-5 4l-3 -6l7 -2z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.70s" begin="-0.78s" repeatCount="indefinite" path="M142 108l4 5l-8 1l2 -6z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.85s" begin="-0.91s" repeatCount="indefinite" path="M154 96l-6 -3l3 -5l5 6z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.00s" begin="-1.04s" repeatCount="indefinite" path="M168 106l6 -4l5 5l-7 3z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.70s" begin="-1.17s" repeatCount="indefinite" path="M176 96l-5 4l-3 -6l7 -2z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="0.85s" begin="-1.30s" repeatCount="indefinite" path="M100 84l4 5l-8 1l2 -6z"/></circle>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.00s" begin="-1.43s" repeatCount="indefinite" path="M146 84l-6 -3l3 -5l5 6z"/></circle>
</g>
<g class="only-2"><g><animateTransform attributeName="transform" type="rotate" values="-110 34 44;55 34 44;55 34 44" keyTimes="0;.6;1" dur="3.200s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:2.5" d="M34 48V28"/></g><circle class="fl-ink" cx="34" cy="44" r="3"/></g>
<g class="from-3"><g transform="rotate(55 34 44)"><path class="wire st-ink" style="stroke-width:2.5" d="M34 48V28"/></g><circle class="fl-ink" cx="34" cy="44" r="3"/></g>

<!-- שלב 2: עוד ועוד אדים מצטרפים ולוחצים על הדפנות -->
<g class="only-2">
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.1s" begin="-0s" repeatCount="indefinite" path="M78 122V104"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.3s" begin="-0.5s" repeatCount="indefinite" path="M112 122V100"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.2s" begin="-0.9s" repeatCount="indefinite" path="M150 122V104"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.8"><animateMotion dur="1.4s" begin="-0.2s" repeatCount="indefinite" path="M172 122V108"/></circle>
  <path class="arrow st-violet" style="stroke-width:2" d="M84 96L78 84M122 90V76M160 96L166 84" marker-end="url(#pressure-v)"/>
  <text x="212" y="20">האדים נכלאים בסיר</text>
  <text x="212" y="34">והלחץ עולה פי שניים</text>
</g>
<g class="only-2 only-3"><path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M113 46Q113 42 117 42H127Q131 42 131 46L134 60H110Z"/><path class="thin" style="stroke:#fff;stroke-opacity:.5" d="M114 52H130"/></g>

<!-- שלב 3: הלחץ דוחק מולקולות חזרה אל המים -->
<g class="only-3">
  <circle class="fl-cold st-ink" stroke-width="1" r="2.8"><animateMotion dur="1.3s" begin="-0s" repeatCount="indefinite" path="M70 126V113V126"/></circle><circle class="fl-cold st-ink" stroke-width="1" r="2.8"><animateMotion dur="1.1s" begin="-0.4s" repeatCount="indefinite" path="M96 126V113V126"/></circle><circle class="fl-cold st-ink" stroke-width="1" r="2.8"><animateMotion dur="1.2s" begin="-0.8s" repeatCount="indefinite" path="M134 126V113V126"/></circle><circle class="fl-cold st-ink" stroke-width="1" r="2.8"><animateMotion dur="1.4s" begin="-0.2s" repeatCount="indefinite" path="M158 126V113V126"/></circle><circle class="fl-cold st-ink" stroke-width="1" r="2.8"><animateMotion dur="1.1s" begin="-0.6s" repeatCount="indefinite" path="M180 126V113V126"/></circle>
  <path class="arrow st-violet" style="stroke-width:2" d="M84 100V116M122 96V116M166 100V116" marker-end="url(#pressure-v)"/>
  <text x="212" y="20">קשה למולקולות לברוח</text>
  <text x="212" y="34">והרתיחה רק ב־120 מעלות</text>
</g>

<!-- שלב 4: המשקולת מתרוממת ופולטת אדים -->
<g class="from-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 -4;0 -5;0 0;0 0" keyTimes="0;.15;.4;.6;.75;1" dur="1.600s" repeatCount="indefinite"/><path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M113 46Q113 42 117 42H127Q131 42 131 46L134 60H110Z"/><path class="thin" style="stroke:#fff;stroke-opacity:.5" d="M114 52H130"/></g>
  <circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.6"><animateMotion dur="1.600s" begin="-0s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.6;1" calcMode="linear" path="M116 60Q100 58 90 44"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.12;.6;1" dur="1.600s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.6"><animateMotion dur="1.600s" begin="-0.2s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.6;1" calcMode="linear" path="M128 60Q144 58 152 46"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.12;.6;1" dur="1.600s" begin="-0.2s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.6"><animateMotion dur="1.600s" begin="-0.5s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.6;1" calcMode="linear" path="M116 60Q104 52 100 36"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.12;.6;1" dur="1.600s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-cold-soft st-cold" stroke-width="1.2" r="2.6"><animateMotion dur="1.600s" begin="-0.7s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.6;1" calcMode="linear" path="M128 60Q140 52 142 38"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.12;.6;1" dur="1.600s" begin="-0.7s" repeatCount="indefinite"/></circle>
</g>
<g class="only-4">
  <circle class="ring st-hot" cx="163" cy="69" r="13"/>
  <text x="212" y="20">משקולת משחררת אדים</text>
  <text x="212" y="34">ולידה שסתום ביטחון</text>
</g>
`;
