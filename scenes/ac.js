// מזגן מפוצל: 1 היחידה הפנימית והסליל הקר · 2 עיבוי הלחות וניקוז · 3 המדחס והיחידה החיצונית · 4 בחורף שסתום הופך את הזרימה
export default `
<!-- קיר בחתך, רצפה וקרקע -->
<rect class="fl-soft" x="152" y="0" width="14" height="220"/>
<path class="thin" style="stroke-width:1" d="M152 16l14-10M152 40l14-10M152 64l14-10M152 88l14-10M152 112l14-10M152 136l14-10M152 160l14-10M152 184l14-10M152 208l14-10"/>
<path class="wire st-ink" style="stroke-width:2" d="M152 0V220M166 0V220"/>
<path class="thin" d="M6 204H152M166 204H314"/>

<!-- כורסה בחדר -->
<path class="body" style="fill:var(--s-soft)" d="M12 204V160Q12 154 18 154H22Q28 154 28 160V180H50Q56 180 56 186V204Z"/>
<path class="thin st-ink" d="M28 190H56"/>

<!-- שמש בחוץ -->
<circle class="fl-warm" cx="292" cy="30" r="10"/>
<path class="wire st-warm" style="stroke-width:2" d="M292 14v-5M292 46v5M276 30h-5M308 30h5M281 19l-3.5-3.500M303 19l3.5-3.500M281 41l-3.5 3.500M303 41l3.5 3.5"/>

<!-- יחידה פנימית -->
<rect class="body" x="58" y="20" width="94" height="66" rx="7"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M70 20v4M78 20v4M86 20v4M94 20v4M102 20v4M110 20v4M118 20v4M126 20v4M134 20v4"/>
<path class="fl-bg" d="M62 84h22v4h-22z"/><path class="wire st-ink" style="stroke-width:2" d="M84 86L71 94"/>
<!-- יחידה חיצונית -->
<rect class="body" x="196" y="110" width="106" height="86" rx="6"/>
<path class="wire st-ink" style="stroke-width:3" d="M206 196v8M292 196v8"/>
<path class="thin" style="stroke-width:1.2" d="M302 136h-6M302 146h-6M302 156h-6M302 166h-6M302 176h-6"/>

<!-- מעגל הקירור במצב קירור -->
<g class="hl-1 hl-2"><path class="pipe st-cold" style="stroke-width:4" d="M152 30H70V38H142V46H70V54H152"/><path class="flow" style="stroke-width:1.6" d="M152 30H70V38H142V46H70V54H152"/></g>
<g class="hl-1 hl-3"><path class="pipe st-cold" style="stroke-width:4;stroke-opacity:.55" d="M152 54H178V125H200"/><path class="flow" style="stroke-width:1.6" d="M152 54H178V125H200"/></g>
<g class="hl-3"><path class="pipe st-hot" style="stroke-width:4" d="M222 125H230V184H237V128H244V184H251V128H258V104"/><path class="flow" style="stroke-width:1.6" d="M222 125H230V184H237V128H244V184H251V128H258V104"/></g>
<g class="hl-3 hl-1"><path class="pipe st-warm" style="stroke-width:4" d="M258 104H186V66"/><path class="flow" style="stroke-width:1.6" d="M258 104H186V66"/><path class="pipe st-cold" style="stroke-width:4" d="M186 66V30H152"/><path class="flow" style="stroke-width:1.6" d="M186 66V30H152"/></g>

<!-- מדחס ושסתום היפוך -->
<g class="hl-3 hl-4">
  <path class="pipe st-cold" style="stroke-width:4;stroke-opacity:.55" d="M206 134V152"/><path class="pipe st-hot" style="stroke-width:4" d="M216 152V134"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="200" y="150" width="22" height="42" rx="6"/>
  <path class="thin" style="stroke:#fff;stroke-opacity:.5" d="M204 162h14M204 180h14"/>
  <rect class="body" x="200" y="116" width="22" height="18" rx="3"/>
</g>
<g class="hl-3">
  <path class="wire st-cold" d="M200 125Q206 125 206 134"/><path class="wire st-hot" d="M216 134Q216 125 222 125"/>
</g>
<!-- שסתום התפשטות -->
<path class="body" d="M181 60L191 72V60L181 72Z"/>

<!-- מאווררים -->
<g class="hl-1 hl-4">
  <circle class="body fl-soft" cx="96" cy="70" r="10"/>
  <g class="spin fast"><path class="wire st-ink" style="stroke-width:2" d="M96 62v16M88 70h16M90.3 64.300l11.4 11.400M90.3 75.700l11.4-11.4"/></g>
  <circle class="fl-ink" cx="96" cy="70" r="2"/>
</g>
<g class="hl-3 hl-4">
  <circle class="body fl-soft" cx="280" cy="156" r="16"/>
  <g class="spin"><g class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round">
    <path d="M280 156Q288 148 280 141Q273 148 280 156z"/><path transform="rotate(120 280 156)" d="M280 156Q288 148 280 141Q273 148 280 156z"/><path transform="rotate(240 280 156)" d="M280 156Q288 148 280 141Q273 148 280 156z"/>
  </g></g>
  <circle class="fl-ink" cx="280" cy="156" r="2.5"/>
</g>

<!-- מגש ניקוז וצינור ניקוז החוצה -->
<g class="hl-2">
  <path class="pipe st-line" style="stroke-width:4" d="M150 71L171 75V104"/>
  <path class="wire st-ink" style="stroke-width:2" d="M112 64V70H150"/>
  <path class="fl-cold" d="M113 67h36v2h-36z"/>
</g>

<!-- שלב 1: אוויר החדר נשאב, מתקרר על הסליל וחוזר -->
<g class="only-1">
  <circle class="fl-warm" r="2.6"><animateMotion dur="2.6s" begin="-0s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="2.6"><animateMotion dur="2.6s" begin="-0.65s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="2.6"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="2.6"><animateMotion dur="2.6s" begin="-1.95s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.53s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0.53s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.07s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-1.07s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.53s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0.53s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.07s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-1.07s" repeatCount="indefinite"/></circle>
  <text x="92" y="152">אוויר החדר עובר</text>
  <text x="92" y="166">על סליל קר מאוד</text>
</g>

<!-- שלב 2: טיפות מתעבות על הסליל, נאספות במגש ויוצאות בצינור -->
<g class="only-2 fl-cold">
  <path d="M118 57q2.2 3.6 0 5q-2.2-1.4 0-5z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 7" keyTimes="0;.5;1" dur="1.2s" begin="-0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.4;1" dur="1.2s" begin="-0s" repeatCount="indefinite"/></path><path d="M128 57q2.2 3.6 0 5q-2.2-1.4 0-5z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 7" keyTimes="0;.5;1" dur="1.2s" begin="-0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.4;1" dur="1.2s" begin="-0.3s" repeatCount="indefinite"/></path><path d="M138 57q2.2 3.6 0 5q-2.2-1.4 0-5z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 7" keyTimes="0;.5;1" dur="1.2s" begin="-0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.4;1" dur="1.2s" begin="-0.6s" repeatCount="indefinite"/></path><path d="M146 57q2.2 3.6 0 5q-2.2-1.4 0-5z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 7" keyTimes="0;.5;1" dur="1.2s" begin="-0.8999999999999999s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.4;1" dur="1.2s" begin="-0.8999999999999999s" repeatCount="indefinite"/></path>
  <circle class="fl-cold" r="1.8"><animateMotion dur="1.4s" begin="-0s" repeatCount="indefinite" path="M150 71L171 75V104"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.4s" begin="-0.47s" repeatCount="indefinite" path="M150 71L171 75V104"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.4s" begin="-0.93s" repeatCount="indefinite" path="M150 71L171 75V104"/></circle>
  <path d="M171 104q3 5 0 7q-3-2 0-7z"><animateTransform attributeName="transform" type="translate" values="0 0;0 90" dur="1.5s" begin="-0s" repeatCount="indefinite"/></path><path d="M171 104q3 5 0 7q-3-2 0-7z"><animateTransform attributeName="transform" type="translate" values="0 0;0 90" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></path><path d="M171 104q3 5 0 7q-3-2 0-7z"><animateTransform attributeName="transform" type="translate" values="0 0;0 90" dur="1.5s" begin="-1s" repeatCount="indefinite"/></path>
  <ellipse cx="171" cy="204" rx="5" ry="1.5"/>
</g>
<g class="only-2">
  <text x="92" y="152">הלחות מתעבה</text>
  <text x="92" y="166">ומטפטפת החוצה</text>
</g>

<!-- שלב 3: המדחס דוחס, הסליל החם מוסר חום לאוויר שבחוץ -->
<g class="only-3">
  <circle class="ring st-hot" cx="211" cy="171" r="26"/><circle class="ring st-hot d3" cx="211" cy="171" r="26"/>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-0s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-1s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-0s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-1s" repeatCount="indefinite"/></circle>
  <text x="252" y="74">המדחס מחמם את הגז</text>
  <text x="252" y="88">והחום נפלט החוצה</text>
</g>

<!-- שלב 4: חימום. השסתום מצליב, הזרימה מתהפכת והסליל הפנימי הוא החם -->
<g class="only-4">
  <rect class="fl-bg" x="268" y="6" width="48" height="48"/>
  <g class="spin" style="animation-duration:9s"><path class="wire st-cold" style="stroke-width:2.2" d="M292 16v28M279.9 23l24.2 14M279.9 37l24.2-14M292 21l-3-3M292 21l3-3M292 39l-3 3M292 39l3 3"/></g>
  <path class="pipe st-hot" style="stroke-width:4.6" d="M152 54H70V46H142V38H70V30H152"/><path class="flow" style="stroke-width:1.6" d="M152 54H70V46H142V38H70V30H152"/>
  <path class="pipe st-hot" style="stroke-width:4.6" d="M200 125H178V54H152"/><path class="flow" style="stroke-width:1.6" d="M200 125H178V54H152"/>
  <path class="pipe st-warm" style="stroke-width:4.6" d="M152 30H186V66"/><path class="flow" style="stroke-width:1.6" d="M152 30H186V66"/>
  <path class="pipe st-cold" style="stroke-width:4.6" d="M186 66V104H258V128H251V184H244V128H237V184H230V125H222"/><path class="flow" style="stroke-width:1.6" d="M186 66V104H258V128H251V184H244V128H237V184H230V125H222"/>
  <path class="body" d="M181 60L191 72V60L181 72Z"/>
  <rect class="body" x="200" y="116" width="22" height="18" rx="3"/>
  <path class="wire st-hot" d="M216 134L200 125"/><path class="wire st-cold" d="M222 125L206 134"/>
  <g class="pulse"><rect class="fl-none st-violet" stroke-width="2" x="197" y="113" width="28" height="24" rx="5"/></g>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-0s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-0.53s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0.53s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-1.07s" repeatCount="indefinite" path="M76 92Q70 112 52 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-1.07s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-0s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-0.53s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-0.53s" repeatCount="indefinite"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.6s" begin="-1.07s" repeatCount="indefinite" path="M68 90Q46 100 28 130"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.6s" begin="-1.07s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-0s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-0.65s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.6s" begin="-1.95s" repeatCount="indefinite" path="M12 132Q8 22 48 10H100V24"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-0s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M282 150Q304 140 311 106"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-1s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-0s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M282 162Q302 172 314 152"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.7;1" dur="1.5s" begin="-1s" repeatCount="indefinite"/></circle>
  <text x="252" y="74">השסתום הופך כיוון</text>
  <text x="252" y="88">והחום נשאב פנימה</text>
</g>
`;
