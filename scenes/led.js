// נורת LED: 1 שבב משתי שכבות, אלקטרונים וחורים · 2 המתח דוחף אותם אל הגבול · 3 אלקטרון נופל לחור ופולט חלקיק אור · 4 גודל המדרגה קובע צבע; לבן = שבב כחול וציפוי זרחן
export default `
<!-- קווי הגדלה מהשבב שבנורה אל החתך המוגדל -->
<path class="thin" stroke-dasharray="3 4" d="M181 42L248 91M181 126L248 95"/>

<!-- סוללה וחוטים -->
<g class="hl-2 hl-3">
  <path class="wire st-line" d="M18 68V39H36M36 129H18V100"/>
  <g class="from-2"><path class="wire st-cold dash" d="M18 68V39H36"/><path class="wire st-cold dash" d="M36 129H18V100"/></g>
  <rect class="body" x="10" y="68" width="16" height="32" rx="3"/>
  <rect class="fl-elec" x="12" y="86" width="12" height="12" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M15 75h6M15 92h6M18 89v6"/>
</g>

<!-- השבב בחתך: שכבת n למעלה, שכבת p למטה, והגבול ביניהן -->
<g class="hl-1 hl-2 hl-3">
  <rect class="fl-cold-soft" x="36" y="42" width="144" height="42"/>
  <rect class="fl-panel" x="36" y="84" width="144" height="42"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="36" y="36" width="28" height="6" rx="1"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="36" y="126" width="144" height="6" rx="1"/>
  <rect class="fl-none st-ink" stroke-width="2" x="36" y="42" width="144" height="84"/>
  <path class="st-ink fl-none" stroke-width="1.4" stroke-dasharray="5 4" d="M36 84H180"/>
  <text class="sm" x="172" y="54" style="stroke:none;font-weight:700">n</text>
  <text class="sm" x="172" y="121" style="stroke:none;font-weight:700">p</text>

  <g class="only-1"><circle class="fl-cold st-ink bob" stroke-width=".9" cx="50" cy="56" r="3.3"></circle><circle class="fl-cold st-ink bob d1" stroke-width=".9" cx="70" cy="70" r="3.3"></circle><circle class="fl-cold st-ink bob d2" stroke-width=".9" cx="90" cy="54" r="3.3"></circle><circle class="fl-cold st-ink bob d3" stroke-width=".9" cx="108" cy="72" r="3.3"></circle><circle class="fl-cold st-ink bob d4" stroke-width=".9" cx="126" cy="56" r="3.3"></circle><circle class="fl-cold st-ink bob" stroke-width=".9" cx="146" cy="70" r="3.3"></circle><circle class="fl-cold st-ink bob d1" stroke-width=".9" cx="154" cy="60" r="3.3"></circle><circle class="fl-cold st-ink bob d2" stroke-width=".9" cx="84" cy="74" r="3.3"></circle><circle class="fl-bg st-hot bob d2" stroke-width="1.7" cx="52" cy="112" r="3"></circle><circle class="fl-bg st-hot bob d3" stroke-width="1.7" cx="72" cy="98" r="3"></circle><circle class="fl-bg st-hot bob d4" stroke-width="1.7" cx="92" cy="114" r="3"></circle><circle class="fl-bg st-hot bob" stroke-width="1.7" cx="110" cy="100" r="3"></circle><circle class="fl-bg st-hot bob d1" stroke-width="1.7" cx="128" cy="114" r="3"></circle><circle class="fl-bg st-hot bob d2" stroke-width="1.7" cx="148" cy="98" r="3"></circle><circle class="fl-bg st-hot bob d3" stroke-width="1.7" cx="158" cy="108" r="3"></circle><circle class="fl-bg st-hot bob d4" stroke-width="1.7" cx="60" cy="100" r="3"></circle></g>

  <g class="only-2"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.86;.9;.95;1" dur="3.6s" begin="0s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M50 52V78"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M70 66V70"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M90 50V78"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M108 68V70"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M126 52V78"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M146 66V70"/></circle><circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M154 56V78"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M52 116V91"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M72 102V99"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M92 118V91"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M110 104V99"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M128 118V91"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M148 102V99"/></circle><circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;.5;1" keySplines=".3 0 .5 1;0 0 1 1" path="M158 112V91"/></circle></g>
    <g class="bob"><path class="arrow st-cold" style="stroke-width:2" d="M108 49V62M103 57L108 63L113 57"/></g>
    <g class="bob d3"><path class="arrow st-hot" style="stroke-width:2" d="M108 120V107M103 112L108 106L113 112"/></g>
  </g>

  <g class="from-3"><circle class="fl-cold st-ink" stroke-width=".9" cx="52" cy="58" r="3.3"></circle><circle class="fl-cold st-ink" stroke-width=".9" cx="150" cy="60" r="3.3"></circle><circle class="fl-cold st-ink" stroke-width=".9" cx="112" cy="52" r="3.3"></circle><circle class="fl-bg st-hot" stroke-width="1.7" cx="60" cy="106" r="3"></circle><circle class="fl-bg st-hot" stroke-width="1.7" cx="118" cy="112" r="3"></circle><circle class="fl-bg st-hot" stroke-width="1.7" cx="172" cy="104" r="3"></circle>
    <circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M74 114V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.6;.61;.97;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" keyPoints="0;.76;1;1" keyTimes="0;.5;.6;1" calcMode="linear" path="M74 54V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.61;.63;.97;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-elec" stroke-width="2" cx="74" cy="91" r="3" opacity="0"><animate attributeName="r" values="3;3;11;11" keyTimes="0;.6;.78;1" dur="2.6s" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.59;.6;.78;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></circle>
    <path class="wire st-cold" style="stroke-width:2.4" d="M-10 0q2.5-5 5 0t5 0 5 0 5 0" opacity="0"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M74 86L78 12"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.63;.93;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></path>
    <circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="2.6s" begin="-0.65s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M98 114V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.6;.61;.97;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="2.6s" begin="-0.65s" repeatCount="indefinite" keyPoints="0;.76;1;1" keyTimes="0;.5;.6;1" calcMode="linear" path="M98 54V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.61;.63;.97;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-elec" stroke-width="2" cx="98" cy="91" r="3" opacity="0"><animate attributeName="r" values="3;3;11;11" keyTimes="0;.6;.78;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.59;.6;.78;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></circle>
    <path class="wire st-cold" style="stroke-width:2.4" d="M-10 0q2.5-5 5 0t5 0 5 0 5 0" opacity="0"><animateMotion dur="2.6s" begin="-0.65s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M98 86L92 10"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.63;.93;1" dur="2.6s" begin="-0.65s" repeatCount="indefinite"/></path>
    <circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M134 114V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.6;.61;.97;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" keyPoints="0;.76;1;1" keyTimes="0;.5;.6;1" calcMode="linear" path="M134 54V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.61;.63;.97;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-elec" stroke-width="2" cx="134" cy="91" r="3" opacity="0"><animate attributeName="r" values="3;3;11;11" keyTimes="0;.6;.78;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.59;.6;.78;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle>
    <path class="wire st-cold" style="stroke-width:2.4" d="M-10 0q2.5-5 5 0t5 0 5 0 5 0" opacity="0"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M134 86L142 10"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.63;.93;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></path>
    <circle class="fl-bg st-hot" stroke-width="1.7" r="3"><animateMotion dur="2.6s" begin="-1.95s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear" path="M160 114V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.6;.61;.97;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="2.6s" begin="-1.95s" repeatCount="indefinite" keyPoints="0;.76;1;1" keyTimes="0;.5;.6;1" calcMode="linear" path="M160 54V92"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.61;.63;.97;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-elec" stroke-width="2" cx="160" cy="91" r="3" opacity="0"><animate attributeName="r" values="3;3;11;11" keyTimes="0;.6;.78;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.59;.6;.78;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></circle>
    <path class="wire st-cold" style="stroke-width:2.4" d="M-10 0q2.5-5 5 0t5 0 5 0 5 0" opacity="0"><animateMotion dur="2.6s" begin="-1.95s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M160 86L168 12"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.63;.93;1" dur="2.6s" begin="-1.95s" repeatCount="indefinite"/></path>
  </g>
</g>
<g class="only-3"><path class="wire st-elec dash" style="stroke-width:3" d="M36 84H180"/></g>

<g class="from-4"><circle class="fl-panel pulse" fill-opacity=".75" cx="258" cy="74" r="40"/></g>
<!-- נורת LED לבנה בחתך: שבב כחול בתוך גביע, מכוסה זרחן צהוב -->
<g class="hl-4">
  <rect class="fl-line st-ink" stroke-width="1.2" x="243" y="112" width="5" height="22"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="269" y="112" width="5" height="16"/>
  <path class="body" d="M232 108V72A26 26 0 0 1 284 72V108z"/>
  <rect class="body" x="228" y="107" width="60" height="7" rx="2"/>
  <path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M243 108V101L238 89H266L261 101V108z"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="269" y="82" width="5" height="26"/>
  <path class="thin st-ink" style="stroke-width:1" d="M253 90Q262 70 271.5 82"/>
  <path class="fl-elec st-ink" stroke-width="1.2" stroke-linejoin="round" fill-opacity=".85" d="M239 90Q252 64 265 90z"/>
  <rect class="fl-cold st-ink" stroke-width="1.2" x="246" y="89" width="12" height="6" rx="1"/>
</g>
<!-- אור: כחול מהשבב, צהוב מהזרחן, ויחד לבן -->
<g class="from-4">
  <g class="fl-cold"><circle r="2"><animateMotion dur="1.2s" repeatCount="indefinite" path="M250 84L240 58"/></circle><circle r="2"><animateMotion dur="1.2s" begin="-.4s" repeatCount="indefinite" path="M252 82L258 50"/></circle><circle r="2"><animateMotion dur="1.2s" begin="-.8s" repeatCount="indefinite" path="M254 84L276 58"/></circle></g>
  <g class="fl-elec st-ink" stroke-width=".6"><circle r="2"><animateMotion dur="1.2s" begin="-.6s" repeatCount="indefinite" path="M246 78L236 62"/></circle><circle r="2"><animateMotion dur="1.2s" begin="-1s" repeatCount="indefinite" path="M256 76L264 50"/></circle><circle r="2"><animateMotion dur="1.2s" begin="-.2s" repeatCount="indefinite" path="M260 80L280 64"/></circle></g>
  <g class="fade"><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M258 41V30M238 50L230 42M278 50L286 42M228 68H218M288 68H298"/></g>
</g>

<!-- שלב 3: מדרגת האנרגיה -->
<g class="only-3">
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M212 152H256M256 190H304"/>
  <path class="thin" stroke-dasharray="2 3" d="M256 152V190"/>
  <path class="arrow st-ink" style="stroke-width:1.4" d="M246 157V185M243 160L246 156L249 160M243 182L246 186L249 182"/>
  <circle class="fl-bg st-hot" stroke-width="1.7" cx="266" cy="185.5" r="3"/>
  <circle class="fl-cold st-ink" stroke-width=".9" r="3.3"><animateMotion dur="2.6s" repeatCount="indefinite" keyPoints="0;.57;1;1" keyTimes="0;.4;.6;1" calcMode="linear" path="M218 147.5H266V185.5"/><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.9;.93;.97;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></circle>
  <path class="wire st-cold" style="stroke-width:2.4" d="M-10 0q2.5-5 5 0t5 0 5 0 5 0" opacity="0"><animateMotion dur="2.6s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M272 176L304 150"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.63;.93;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></path>
  <text x="258" y="210">ההפרש יוצא כאור</text>
</g>
<!-- שלב 4 והמבט הכולל: שלוש מדרגות, שלושה צבעים -->
<g class="from-4">
  <path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M204 180H218M218 196H236"/><path class="thin" stroke-dasharray="2 3" d="M218 180V196"/>
    <path class="wire st-hot" style="stroke-width:2.6" d="M211 184V191M207.5 187.5L211 192L214.5 187.5"/>
    <path class="wire st-hot" style="stroke-width:2.4" d="M-9 0q3-5 6 0t6 0 6 0"><animateMotion dur="2s" begin="0s" repeatCount="indefinite" rotate="auto" path="M228 194V144"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.8;1" dur="2s" begin="0s" repeatCount="indefinite"/></path>
  <path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M241 166H255M255 196H273"/><path class="thin" stroke-dasharray="2 3" d="M255 166V196"/>
    <path class="wire st-green" style="stroke-width:2.6" d="M248 170V191M244.5 187.5L248 192L251.5 187.5"/>
    <path class="wire st-green" style="stroke-width:2.4" d="M-9 0q2.25-5 4.5 0t4.5 0 4.5 0 4.5 0"><animateMotion dur="2s" begin="-0.8s" repeatCount="indefinite" rotate="auto" path="M265 187V144"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.8;1" dur="2s" begin="-0.8s" repeatCount="indefinite"/></path>
  <path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M278 150H292M292 196H310"/><path class="thin" stroke-dasharray="2 3" d="M292 150V196"/>
    <path class="wire st-cold" style="stroke-width:2.6" d="M285 154V191M281.5 187.5L285 192L288.5 187.5"/>
    <path class="wire st-cold" style="stroke-width:2.4" d="M-9 0q1.5-5 3 0t3 0 3 0 3 0 3 0 3 0"><animateMotion dur="2s" begin="-1.6s" repeatCount="indefinite" rotate="auto" path="M302 179V144"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.8;1" dur="2s" begin="-1.6s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="108" y="22">אלקטרונים חופשיים</text>
  <text x="108" y="152">״חורים״ — מקומות פנויים</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="108" y="152">המתח דוחף את שניהם</text>
  <text x="108" y="168">אל הגבול שבין השכבות</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="108" y="152">אלקטרון נופל לתוך חור</text>
  <text x="108" y="168">ופולט חלקיק אור</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="258" y="18">כחול + זרחן = לבן</text>
  <text x="226" y="212">מדרגה קטנה: אדום · גדולה: כחול</text>
</g>
`;
