// MDMA בסינפסה: 1 נכנס דרך משאבת הסרוטונין · 2 המשאבה מתהפכת והמלאי נדחף למרווח · 3 הקולטנים בצד השני מוצפים · 4 המלאי התרוקן והרמה צונחת
export default `
<defs>
  <marker id="mdma-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- ===== התא המשדר (קצה האקסון) ===== -->
<path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M12 110V40Q12 24 28 24H170Q186 24 186 40V110Z"/>
<path class="wire st-ink" style="stroke-width:2.6" d="M12 110H186"/>

<!-- שלפוחיות עם סרוטונין -->
<g>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="45" cy="62" r="13"/>
  <circle class="fl-violet" cx="40" cy="58" r="2.4"/><circle class="fl-violet" cx="49" cy="57" r="2.4"/><circle class="fl-violet" cx="43" cy="67" r="2.4"/><circle class="fl-violet" cx="51" cy="66" r="2.4"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="99" cy="47" r="13"/>
  <circle class="fl-violet" cx="94" cy="43" r="2.4"/><circle class="fl-violet" cx="103" cy="42" r="2.4"/><circle class="fl-violet" cx="97" cy="52" r="2.4"/><circle class="fl-violet" cx="105" cy="51" r="2.4"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="152" cy="64" r="13"/>
  <circle class="fl-violet" cx="147" cy="60" r="2.4"/><circle class="fl-violet" cx="156" cy="59" r="2.4"/><circle class="fl-violet" cx="150" cy="69" r="2.4"/><circle class="fl-violet" cx="158" cy="68" r="2.4"/>
</g>
<!-- סרוטונין חופשי בתוך התא -->
<g class="hl-1 hl-2 hl-3">
  <circle class="fl-violet" cx="70" cy="86" r="2.8"><animate attributeName="opacity" values=".55;1;.55" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="122" cy="80" r="2.8"><animate attributeName="opacity" values="1;.55;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="168" cy="92" r="2.8"><animate attributeName="opacity" values=".6;1;.6" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="30" cy="92" r="2.8"><animate attributeName="opacity" values="1;.6;1" dur="3s" repeatCount="indefinite"/></circle>
</g>

<!-- ===== שתי משאבות ספיגה חוזרת במעטפת התא ===== -->
<g class="hl-1 hl-2">
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="45" y="99" width="22" height="22" rx="6"/>
  <rect class="fl-bg" x="53" y="101" width="6" height="18"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="133" y="99" width="22" height="22" rx="6"/>
  <rect class="fl-bg" x="141" y="101" width="6" height="18"/>
</g>

<!-- ===== התא המקבל, עם קולטנים ===== -->
<path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M12 146H186V194Q186 208 170 208H28Q12 208 12 194Z"/>
<path class="wire st-ink" style="stroke-width:2.6" d="M12 146H186"/>
<g class="hl-3">
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="31" y="137" width="20" height="12" rx="4"/><path class="fl-bg" d="M38 137h6v5h-6z"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="89" y="137" width="20" height="12" rx="4"/><path class="fl-bg" d="M96 137h6v5h-6z"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="147" y="137" width="20" height="12" rx="4"/><path class="fl-bg" d="M154 137h6v5h-6z"/>
</g>

<!-- ===== שלב 1: MDMA מגיע למרווח ונכנס דרך המשאבה ===== -->
<g class="only-1">
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" path="M56 142V96"/><animate attributeName="opacity" values="0;1;1;.2" keyTimes="0;.12;.7;1" dur="2.6s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M56 142V96"/><animate attributeName="opacity" values="0;1;1;.2" keyTimes="0;.12;.7;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="3.4s" begin="-.6s" repeatCount="indefinite" path="M120 136Q86 144 56 142"/><animate attributeName="opacity" values=".3;1;1" keyTimes="0;.3;1" dur="3.4s" begin="-.6s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="3.4s" begin="-2.1s" repeatCount="indefinite" path="M26 138Q40 144 56 142"/><animate attributeName="opacity" values=".3;1;1" keyTimes="0;.3;1" dur="3.4s" begin="-2.1s" repeatCount="indefinite"/></path></g>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M74 128V108"/>
  <text x="56" y="92">משאבת סרוטונין</text>
  <text x="130" y="166">MDMA נכנס פנימה</text>
</g>

<!-- ===== שלב 2: המשאבה בכיוון ההפוך — סרוטונין נדחף אל המרווח ===== -->
<g class="only-2">
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M74 104V126"/>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M162 104V126"/>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M56 98V138"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.6s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M56 98V128Q58 138 94 141"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.6s" begin="-.8s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.9s" begin="-.4s" repeatCount="indefinite" path="M56 98V128Q54 138 24 141"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.9s" begin="-.4s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" begin="-.2s" repeatCount="indefinite" path="M144 98V138"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" begin="-.2s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" begin="-1s" repeatCount="indefinite" path="M144 98V128Q146 138 172 141"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" begin="-1s" repeatCount="indefinite"/></circle></g>
  <!-- המלאי בשלפוחיות נדחף אל גוף התא -->
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite" path="M45 74Q50 88 56 96"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.2s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite" path="M99 60Q80 84 58 95"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.2s" begin="-1.1s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.4s" begin="-.5s" repeatCount="indefinite" path="M152 77Q150 88 146 96"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.4s" begin="-.5s" repeatCount="indefinite"/></circle></g>
  <text x="108" y="118">המשאבה בכיוון ההפוך</text>
  <text x="99" y="34">המלאי משתחרר</text>
</g>

<!-- ===== שלב 3: המרווח מוצף והקולטנים נקשרים ===== -->
<g class="only-3">
  <circle class="fl-violet" cx="26" cy="124" r="3"><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="48" cy="131" r="3"><animate attributeName="opacity" values="1;.5;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="68" cy="121" r="3"><animate attributeName="opacity" values=".6;1;.6" dur="2.8s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="88" cy="130" r="3"><animate attributeName="opacity" values="1;.6;1" dur="2.1s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="110" cy="122" r="3"><animate attributeName="opacity" values=".5;1;.5" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="130" cy="131" r="3"><animate attributeName="opacity" values="1;.55;1" dur="2.3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="152" cy="123" r="3"><animate attributeName="opacity" values=".6;1;.6" dur="2.9s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="172" cy="130" r="3"><animate attributeName="opacity" values="1;.6;1" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="41" cy="133" r="2.8"><animateMotion dur="2.6s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="99" cy="133" r="2.8"><animateMotion dur="2.2s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="157" cy="133" r="2.8"><animateMotion dur="2.9s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.9s" repeatCount="indefinite"/></circle>
  <g><circle class="ring st-violet" cx="41" cy="143" r="13"/><circle class="ring st-violet d2" cx="99" cy="143" r="13"/><circle class="ring st-violet d3" cx="157" cy="143" r="13"/></g>
  <text x="99" y="202">הקולטנים מוצפים</text>
</g>

<!-- ===== שלב 4: השלפוחיות ריקות, המרווח מתרוקן ===== -->
<g class="only-4">
  <circle class="fl-bg st-line" stroke-width="1.4" cx="45" cy="62" r="13"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="99" cy="47" r="13"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="152" cy="64" r="13"/>
  <path class="thin st-line" style="stroke-width:1.2" stroke-dasharray="2 3" d="M38 62h14M92 47h14M145 64h14"/>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M74 126V106"/>
  <circle class="fl-violet" cx="64" cy="128" r="3"><animate attributeName="opacity" values=".4;1;.4" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="138" cy="131" r="3"><animate attributeName="opacity" values="1;.4;1" dur="3.4s" repeatCount="indefinite"/></circle>
  <text x="99" y="34">המלאי התרוקן</text>
  <text x="112" y="170">מעט סרוטונין במרווח</text>
</g>

<!-- ===== לוח: רמת הסרוטונין במרווח לאורך הזמן ===== -->
<g class="hl-2 hl-4">
  <text x="256" y="34">במרווח, לאורך זמן</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="200" y="40" width="112" height="112" rx="8"/>
  <path class="thin st-line" style="stroke-width:1.1" stroke-dasharray="3 4" d="M208 116H306"/>
  <path class="thin st-line" style="stroke-width:1.1" d="M208 48V142H306"/>
  <path class="wire st-violet fl-none" style="stroke-width:2.4" d="M208 116C218 116 226 62 238 60C250 58 258 126 272 131C286 135 296 124 306 119"/>
  <circle class="fl-violet st-ink" stroke-width=".8" r="3.4"><animateMotion dur="7s" repeatCount="indefinite" path="M208 116C218 116 226 62 238 60C250 58 258 126 272 131C286 135 296 124 306 119"/><animate attributeName="opacity" values=".7;1;.7" dur="2s" repeatCount="indefinite"/></circle>
  <text class="sm" x="294" y="150">זמן</text>
</g>
<g class="only-2"><text class="sm" x="252" y="54">שיא</text></g>
<g class="only-4"><text class="sm" x="284" y="106">ירידה</text></g>
`;
