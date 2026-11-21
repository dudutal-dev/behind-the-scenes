// חיסון. 1 הוראות mRNA והתא מציג חלבון לא מזיק · 2 תא חיסון מזהה זר · 3 נוגדנים מותאמים · 4 תאי זיכרון והנגיף האמיתי
export default `
<defs>
  <g id="vaccine-sp"><path class="fl-hot st-ink" stroke-width="1" stroke-linejoin="round" d="M0-1.700H6.500Q6.500-5.600 10.500-5.600Q14.200-5.600 14.200 0Q14.200 5.600 10.500 5.600Q6.500 5.600 6.500 1.700H0z"/></g>
  <g id="vaccine-ab"><path class="wire st-cold" d="M-12 0H0M0 0L9-6.200M0 0L9 6.200" style="stroke-width:3"/></g>
</defs>

<!-- מזרק עם הוראות mRNA -->
<g class="hl-1" transform="rotate(-22 52 88)">
  <path class="wire st-ink" d="M52 88V58" style="stroke-width:1.5"/>
  <rect class="body" x="45" y="26" width="14" height="32" rx="2"/>
  <rect class="fl-green" opacity=".6" x="47" y="36" width="10" height="20" rx="1"/>
  <path class="wire st-ink" d="M45 34h4M45 42h4M45 50h4" style="stroke-width:1"/>
  <rect class="fl-ink" x="41" y="23" width="22" height="3" rx="1"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 7;0 7;0 0" keyTimes="0;.5;.8;1" dur="2.400s" repeatCount="indefinite"/>
    <rect class="fl-ink" x="50.500" y="8" width="3" height="20"/>
    <rect class="fl-ink" x="44" y="5" width="16" height="3.500" rx="1"/>
  </g>
</g>

<!-- תא גוף: mRNA בציטופלזמה, הריבוזום מייצר חלבון, הגרעין לא מעורב -->
<g class="hl-1 hl-2">
  <circle class="fl-soft st-ink" stroke-width="2" cx="58" cy="132" r="42"/>
  <circle class="fl-violet" opacity=".35" cx="43" cy="146" r="15"/>
  <circle class="wire st-ink" cx="43" cy="146" r="15" style="stroke-width:1.5"/>
  <path class="wire st-violet" d="M35 142q4-4 8 0t8 0M35 150q4-4 8 0t8 0" style="stroke-width:1.5"/>
  <path class="wire st-green" d="M57 95q5 4 0 8t0 8t7 6" style="stroke-width:2.200"/>
  <ellipse class="fl-warm st-ink" stroke-width="1" cx="69" cy="122" rx="7.500" ry="5"/>
  <ellipse class="fl-warm st-ink" stroke-width="1" cx="69" cy="115.500" rx="5" ry="3.500"/>
</g>
<g class="hl-1 hl-2 hl-3">
  <use href="#vaccine-sp" transform="translate(100 132)"/>
  <use href="#vaccine-sp" transform="translate(92.400 107.900) rotate(-35)"/>
  <use href="#vaccine-sp" transform="translate(92.400 156.100) rotate(35)"/>
</g>
<g class="from-2">
  <use href="#vaccine-sp" transform="translate(150 58) rotate(90)"/>
  <use href="#vaccine-sp" transform="translate(206 58) rotate(90)"/>
</g>

<!-- תא חיסון (תא B) עם קולטנים -->
<g class="hl-2 hl-3">
  <use href="#vaccine-ab" transform="translate(149.400 134) rotate(180) scale(.55)"/>
  <use href="#vaccine-ab" transform="translate(157.800 154.200) rotate(135) scale(.55)"/>
  <use href="#vaccine-ab" transform="translate(157.800 113.800) rotate(225) scale(.55)"/>
  <use href="#vaccine-ab" transform="translate(206.600 134) scale(.55)"/>
  <use href="#vaccine-ab" transform="translate(198.200 154.200) rotate(45) scale(.55)"/>
  <use href="#vaccine-ab" transform="translate(198.200 113.800) rotate(-45) scale(.55)"/>
  <circle class="fl-cold-soft st-ink" stroke-width="2" cx="178" cy="134" r="22"/>
  <circle class="fl-cold" opacity=".45" cx="178" cy="134" r="11.500"/>
</g>

<!-- שלב 1: ההוראות נכנסות, חלבון נבנה ועולה אל פני התא -->
<g class="only-1">
  <path class="wire st-green" d="M-4 0q2-3 4 0t4 0" style="stroke-width:2"><animateMotion dur="1.500s" repeatCount="indefinite" path="M51 86Q50 96 57 104"/></path>
  <path class="wire st-green" d="M-4 0q2-3 4 0t4 0" style="stroke-width:2"><animateMotion dur="1.500s" begin="-.750s" repeatCount="indefinite" path="M51 86Q50 96 57 104"/></path>
  <g><animateMotion dur="2s" repeatCount="indefinite" rotate="auto" path="M76 122L92 130"/><use href="#vaccine-sp" transform="scale(.65)"/></g>
  <g><animateMotion dur="2s" begin="-1s" repeatCount="indefinite" rotate="auto" path="M75 118L86 110"/><use href="#vaccine-sp" transform="scale(.65)"/></g>
  <text x="152" y="24">הוראות לחלבון לא מזיק</text>
  <text x="62" y="194">התא מייצר ומציג</text>
</g>

<!-- שלב 2: חלבון נתפס בקולטן, התא מזהה שהוא זר -->
<g class="only-2">
  <g><animateMotion dur="2.200s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.7;1" calcMode="linear" path="M106 114C118 106 120 134 132.500 134"/><use href="#vaccine-sp"/></g>
  <circle class="ring st-warm" cx="178" cy="134" r="35"/>
  <circle class="ring st-warm d3" cx="178" cy="134" r="35"/>
  <text x="178" y="186">תא חיסון מזהה: זר!</text>
</g>

<!-- שלב 3: נוגדנים שמתלבשים בדיוק על החלבון -->
<g class="only-3">
  <g><animateMotion dur="2.600s" begin="-1.300s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.6;1" calcMode="linear" path="M170 110C166 98 150 100 150 88V75"/><use href="#vaccine-ab"/></g>
  <g><animateMotion dur="2.600s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.6;1" calcMode="linear" path="M186 110C190 98 206 100 206 88V75"/><use href="#vaccine-ab"/></g>
  <g><animateMotion dur="2.200s" repeatCount="indefinite" rotate="auto" path="M212 126Q236 112 262 122"/><use href="#vaccine-ab" transform="scale(.8)"/></g>
  <g><animateMotion dur="2.200s" begin="-1.100s" repeatCount="indefinite" rotate="auto" path="M212 144Q238 160 266 150"/><use href="#vaccine-ab" transform="scale(.8)"/></g>
  <circle class="ring st-cold" cx="178" cy="134" r="35"/>
  <text x="178" y="24">נוגדנים מותאמים בדיוק</text>
</g>

<!-- שלב 4: תאי זיכרון, הנגיף האמיתי ונוגדנים שמסתערים -->
<g class="from-4">
  <use href="#vaccine-ab" transform="translate(150 75) rotate(-90)"/>
  <use href="#vaccine-ab" transform="translate(206 75) rotate(-90)"/>
  <use href="#vaccine-ab" transform="translate(236 143.500) rotate(-90) scale(.5)"/>
  <use href="#vaccine-ab" transform="translate(284 143.500) rotate(-90) scale(.5)"/>
  <circle class="fl-panel st-ink" stroke-width="2" cx="236" cy="162" r="13"/>
  <circle class="fl-violet" opacity=".45" cx="236" cy="162" r="9"/>
  <use href="#vaccine-sp" transform="translate(232.500 162) scale(.5)"/>
  <circle class="fl-panel st-ink" stroke-width="2" cx="284" cy="162" r="13"/>
  <circle class="fl-violet" opacity=".45" cx="284" cy="162" r="9"/>
  <use href="#vaccine-sp" transform="translate(280.500 162) scale(.5)"/>
  <g class="shake">
    <use href="#vaccine-sp" transform="translate(275 72) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(270 84) rotate(45) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(258 89) rotate(90) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(246 84) rotate(135) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(241 72) rotate(180) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(246 60) rotate(225) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(258 55) rotate(270) scale(.75)"/>
    <use href="#vaccine-sp" transform="translate(270 60) rotate(315) scale(.75)"/>
    <circle class="fl-dark st-ink" stroke-width="2" cx="258" cy="72" r="17"/>
    <path fill="none" stroke="#fff" stroke-width="1.500" stroke-linecap="round" opacity=".7" d="M249 68q3-5 6 0t6 0t6 0M250 77q3-5 6 0t6 0"/>
    <use href="#vaccine-ab" transform="translate(288.500 72) rotate(180) scale(.75)"/>
    <use href="#vaccine-ab" transform="translate(227.500 72) scale(.75)"/>
    <use href="#vaccine-ab" transform="translate(258 41.500) rotate(90) scale(.75)"/>
  </g>
</g>
<g class="only-4">
  <g><animateMotion dur="1.200s" begin="-.100s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M240 146C240 130 258 126 258 112V102.500"/><use href="#vaccine-ab" transform="scale(.75)"/></g>
  <g><animateMotion dur="1.200s" begin="-.500s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M288 146C298 130 292 106 286 100L279.600 93.600"/><use href="#vaccine-ab" transform="scale(.75)"/></g>
  <g><animateMotion dur="1.200s" begin="-.800s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M230 146C218 130 224 106 230 100L236.400 93.600"/><use href="#vaccine-ab" transform="scale(.75)"/></g>
  <circle class="ring st-violet" cx="236" cy="162" r="21"/>
  <circle class="ring st-violet d3" cx="284" cy="162" r="21"/>
  <text x="258" y="200">תאי זיכרון נשארים</text>
  <text x="170" y="24">הנגיף מזוהה מיד</text>
</g>
`;
