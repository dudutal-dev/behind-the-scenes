// MDMA בסינפסה: 1 נכנס דרך משאבת הסרוטונין · 2 המשאבה מתהפכת והמלאי נדחף למרווח · 3 הקולטנים בצד השני מוצפים · 4 המלאי התרוקן והרמה צונחת
export default `
<defs>
  <marker id="mdma-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- ===== התא המשדר (קצה האקסון) ===== -->
<path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M12 104V36Q12 20 28 20H170Q186 20 186 36V104Z"/>
<path class="wire st-ink" style="stroke-width:2.6" d="M12 104H186"/>

<!-- שלפוחיות עם מלאי הסרוטונין -->
<g>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="45" cy="56" r="12.5"/>
  <circle class="fl-violet" cx="40" cy="52" r="2.4"/><circle class="fl-violet" cx="49" cy="51" r="2.4"/><circle class="fl-violet" cx="43" cy="61" r="2.4"/><circle class="fl-violet" cx="51" cy="60" r="2.4"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="99" cy="42" r="12.5"/>
  <circle class="fl-violet" cx="94" cy="38" r="2.4"/><circle class="fl-violet" cx="103" cy="37" r="2.4"/><circle class="fl-violet" cx="97" cy="47" r="2.4"/><circle class="fl-violet" cx="105" cy="46" r="2.4"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="152" cy="56" r="12.5"/>
  <circle class="fl-violet" cx="147" cy="52" r="2.4"/><circle class="fl-violet" cx="156" cy="51" r="2.4"/><circle class="fl-violet" cx="150" cy="61" r="2.4"/><circle class="fl-violet" cx="158" cy="60" r="2.4"/>
</g>
<!-- סרוטונין חופשי בתוך התא -->
<g class="hl-1 hl-2 hl-3">
  <circle class="fl-violet" cx="26" cy="86" r="2.8"><animate attributeName="opacity" values=".55;1;.55" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="70" cy="66" r="2.8"><animate attributeName="opacity" values="1;.55;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="128" cy="64" r="2.8"><animate attributeName="opacity" values=".6;1;.6" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="174" cy="86" r="2.8"><animate attributeName="opacity" values="1;.6;1" dur="3s" repeatCount="indefinite"/></circle>
</g>

<!-- ===== שתי משאבות ספיגה חוזרת במעטפת התא ===== -->
<g class="hl-1 hl-2">
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="45" y="93" width="22" height="22" rx="6"/>
  <rect class="fl-bg" x="53" y="95" width="6" height="18"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="133" y="93" width="22" height="22" rx="6"/>
  <rect class="fl-bg" x="141" y="95" width="6" height="18"/>
</g>

<!-- ===== התא המקבל, עם קולטנים ===== -->
<path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M12 150H186V190Q186 204 170 204H28Q12 204 12 190Z"/>
<path class="wire st-ink" style="stroke-width:2.6" d="M12 150H186"/>
<g class="hl-3">
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="31" y="141" width="20" height="12" rx="4"/><path class="fl-bg" d="M38 141h6v5h-6z"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="89" y="141" width="20" height="12" rx="4"/><path class="fl-bg" d="M96 141h6v5h-6z"/>
  <rect class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" x="147" y="141" width="20" height="12" rx="4"/><path class="fl-bg" d="M154 141h6v5h-6z"/>
</g>

<!-- ===== שלב 1: MDMA מגיע למרווח ונכנס דרך המשאבה ===== -->
<g class="only-1">
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" path="M56 134V90"/><animate attributeName="opacity" values="0;1;1;.2" keyTimes="0;.12;.7;1" dur="2.6s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M56 134V90"/><animate attributeName="opacity" values="0;1;1;.2" keyTimes="0;.12;.7;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="3.4s" begin="-.6s" repeatCount="indefinite" path="M118 126Q86 134 56 134"/><animate attributeName="opacity" values=".3;1;1" keyTimes="0;.3;1" dur="3.4s" begin="-.6s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="3.4s" begin="-2.1s" repeatCount="indefinite" path="M24 126Q40 134 56 134"/><animate attributeName="opacity" values=".3;1;1" keyTimes="0;.3;1" dur="3.4s" begin="-2.1s" repeatCount="indefinite"/></path></g>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M78 132V112"/>
  <text x="99" y="15">MDMA מגיע אל המרווח</text>
  <text x="100" y="88">משאבת סרוטונין</text>
</g>

<!-- ===== שלב 2: המשאבה בכיוון ההפוך — סרוטונין נדחף אל המרווח ===== -->
<g class="only-2">
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M78 110V132"/>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M166 110V132"/>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M56 90V134"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.6s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M56 90V124Q58 134 98 136"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.6s" begin="-.8s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.9s" begin="-.4s" repeatCount="indefinite" path="M56 90V124Q54 134 22 136"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.9s" begin="-.4s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" begin="-.2s" repeatCount="indefinite" path="M144 90V134"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" begin="-.2s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" begin="-1s" repeatCount="indefinite" path="M144 90V124Q146 134 176 136"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" begin="-1s" repeatCount="indefinite"/></circle></g>
  <!-- המלאי שבשלפוחיות נדחף אל גוף התא ומשם החוצה -->
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite" path="M45 69Q50 80 56 88"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.2s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite" path="M99 55Q80 76 58 87"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.2s" begin="-1.1s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.4s" begin="-.5s" repeatCount="indefinite" path="M152 69Q150 80 146 88"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.4s" begin="-.5s" repeatCount="indefinite"/></circle></g>
  <text x="99" y="15">המלאי משתחרר</text>
  <text x="100" y="88">המשאבה בכיוון ההפוך</text>
</g>

<!-- ===== שלב 3: המרווח מוצף והקולטנים נקשרים ===== -->
<g class="only-3">
  <circle class="fl-violet" cx="24" cy="122" r="3"><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="48" cy="131" r="3"><animate attributeName="opacity" values="1;.5;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="68" cy="120" r="3"><animate attributeName="opacity" values=".6;1;.6" dur="2.8s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="86" cy="130" r="3"><animate attributeName="opacity" values="1;.6;1" dur="2.1s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="110" cy="121" r="3"><animate attributeName="opacity" values=".5;1;.5" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="130" cy="131" r="3"><animate attributeName="opacity" values="1;.55;1" dur="2.3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="152" cy="120" r="3"><animate attributeName="opacity" values=".6;1;.6" dur="2.9s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="174" cy="129" r="3"><animate attributeName="opacity" values="1;.6;1" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="41" cy="132" r="2.8"><animateMotion dur="2.6s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="99" cy="132" r="2.8"><animateMotion dur="2.2s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="157" cy="132" r="2.8"><animateMotion dur="2.9s" repeatCount="indefinite" path="M0 0V5"/><animate attributeName="opacity" values=".7;1;.7" dur="2.9s" repeatCount="indefinite"/></circle>
  <g><circle class="ring st-violet" cx="41" cy="147" r="14"/><circle class="ring st-violet d2" cx="99" cy="147" r="14"/><circle class="ring st-violet d3" cx="157" cy="147" r="14"/></g>
  <text x="99" y="15">גל סרוטונין במרווח</text>
  <text x="99" y="182">הקולטנים מוצפים</text>
</g>

<!-- ===== שלב 4: השלפוחיות ריקות, המרווח מתרוקן ===== -->
<g class="only-4">
  <circle class="fl-bg st-line" stroke-width="1.4" cx="45" cy="56" r="12.5"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="99" cy="42" r="12.5"/>
  <circle class="fl-bg st-line" stroke-width="1.4" cx="152" cy="56" r="12.5"/>
  <path class="thin st-line" style="stroke-width:1.2" stroke-dasharray="2 3" d="M38 56h14M92 42h14M145 56h14"/>
  <path class="arrow st-ink fl-none" style="stroke-width:2" marker-end="url(#mdma-arr)" d="M78 132V112"/>
  <circle class="fl-violet" cx="62" cy="128" r="3"><animate attributeName="opacity" values=".4;1;.4" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" cx="140" cy="131" r="3"><animate attributeName="opacity" values="1;.4;1" dur="3.4s" repeatCount="indefinite"/></circle>
  <text x="99" y="15">המלאי התרוקן</text>
  <text x="100" y="88">המשאבה חוזרת לכיוונה</text>
</g>

<!-- ===== תצוגת סקירה (״הכול״): כניסה מצד אחד, שחרור מהצד השני ===== -->
<g class="from-1">
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="2.6s" repeatCount="indefinite" path="M56 134V90"/><animate attributeName="opacity" values="0;1;1;.2" keyTimes="0;.12;.7;1" dur="2.6s" repeatCount="indefinite"/></path></g>
  <g><path class="fl-warm st-ink" stroke-width="1.2" d="M0 -4.4L4.4 0L0 4.4L-4.4 0z"><animateMotion dur="3.4s" begin="-1.2s" repeatCount="indefinite" path="M24 126Q40 134 56 134"/><animate attributeName="opacity" values=".3;1;1" keyTimes="0;.3;1" dur="3.4s" begin="-1.2s" repeatCount="indefinite"/></path></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" repeatCount="indefinite" path="M144 90V134"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="3"><animateMotion dur="1.7s" begin="-.85s" repeatCount="indefinite" path="M144 90V124Q146 134 176 136"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.7s" begin="-.85s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-violet" r="2.6"><animateMotion dur="2.4s" begin="-.5s" repeatCount="indefinite" path="M152 69Q150 80 146 88"/><animate attributeName="opacity" values="0;1;1" keyTimes="0;.2;1" dur="2.4s" begin="-.5s" repeatCount="indefinite"/></circle></g>
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
