// רקטה: 1 גז נזרק למטה והרקטה נדחפת למעלה · 2 דלק ומחמצן זורמים לתא הבעירה והנחיר מאיץ את הגז · 3 פס המסה: כ־90% דלק, מטען זעיר · 4 השלב הריק מתנתק ונופל, השלב השני ממשיך ונוטה הצידה
export default `
<defs>
  <clipPath id="rocket-sky"><rect x="124.6" y="96.6" width="186.800" height="114.800" rx="7.500"/></clipPath>
  <clipPath id="rocket-bar"><rect x="125" y="57" width="186" height="14" rx="4"/></clipPath>
</defs>

<!-- ===== הרקטה בחתך ===== -->
<!-- להבה וגז נפלט -->
<path class="fl-warm" opacity=".85" d="M68 195Q70 210 84 220Q98 210 100 195z"><animate attributeName="d" values="M68 195Q70 210 84 220Q98 210 100 195z;M68 195Q72 207 84 215Q96 207 100 195z;M68 195Q70 210 84 220Q98 210 100 195z" dur=".35s" repeatCount="indefinite"/></path>
<path class="fl-elec" d="M75 195Q77 205 84 211Q91 205 93 195z"/>
<circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M82 178L76 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.25s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M84 178L84 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M86 178L92 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.75s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M83.2 178L80.8 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.12s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M85.2 178L88.8 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M81.2 178L72.8 220"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur=".9s" begin="-0.62s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".6 0 1 1" path="M86.8 178L95.2 220"/></circle>
<!-- סנפירים וגוף -->
<path class="body fl-soft" d="M60 138L49 162V166H60zM108 138L119 162V166H108z"/>
<path class="body" d="M84 7C72 17 62 31 60 47V162H108V47C106 31 96 17 84 7z"/>
<!-- מטען: לוויין מתחת לחרטום -->
<g class="hl-3">
  <path class="fl-cold st-ink" stroke-width="1.2" d="M69 33H78V39H69zM90 33H99V39H90z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M73.500 33V39M94.500 33V39"/>
  <rect class="fl-green st-ink" stroke-width="1.4" x="78" y="29" width="12" height="14" rx="1.5"/>
</g>
<path class="thin st-ink" d="M60 47H108M60 101H108"/>
<!-- שלב שני: מכלים ומנוע -->
<rect class="fl-cold st-ink" stroke-width="1.5" x="64" y="51" width="40" height="16" rx="6"/>
<rect class="fl-warm st-ink" stroke-width="1.5" x="64" y="70" width="40" height="13" rx="5"/>
<g class="hl-4">
  <path class="fl-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M81 85H87V89L92 99H76L81 89z"/>
</g>
<!-- שלב ראשון: מחמצן למעלה, דלק למטה -->
<rect class="fl-cold st-ink" stroke-width="1.5" x="64" y="105" width="40" height="22" rx="7"/>
<rect class="fl-warm st-ink" stroke-width="1.5" x="64" y="130" width="40" height="20" rx="7"/>
<!-- קווי הזנה -->
<path class="pipe st-ink" style="stroke-width:5.500" d="M74 126V153L79 160M95 149V154L89 160"/>
<path class="pipe st-cold" style="stroke-width:3.500" d="M74 126V153L79 160"/>
<path class="pipe st-warm" style="stroke-width:3.500" d="M95 149V154L89 160"/>
<g class="hl-2">
  <path class="flow" style="stroke-width:1.6;stroke-dasharray:2 6" d="M74 126V153L79 160"/>
  <path class="flow" style="stroke-width:1.6;stroke-dasharray:2 6" d="M95 149V154L89 160"/>
</g>
<!-- תא בעירה ונחיר פעמון -->
<path class="fl-warm st-ink" stroke-width="2" stroke-linejoin="round" d="M77 157H91Q95 157 95 161V166Q95 172 88 176Q96 183 100 195H68Q72 183 80 176Q73 172 73 166V161Q73 157 77 157z"/>
<ellipse class="fl-hot pulse" cx="84" cy="165" rx="8" ry="6"/>
<ellipse class="fl-elec" cx="84" cy="165" rx="3.500" ry="2.600"/>
<g class="hl-2">
  <path class="flow" style="stroke-width:1.6;stroke-dasharray:2 5;animation-duration:.5s" d="M84 172V194M81 177L75 193M87 177L93 193"/>
</g>

<!-- שלב 1: פעולה ותגובה -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="1.4s" repeatCount="indefinite"/>
    <path class="arrow st-green" style="stroke-width:4.500" d="M28 150V108M19 118L28 106L37 118"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 5;0 0" dur="1.4s" repeatCount="indefinite"/>
    <path class="arrow st-hot" style="stroke-width:4.500" d="M28 166V208M19 198L28 210L37 198"/></g>
  <text x="217" y="34" style="fill:var(--s-green)">הרקטה נדחפת למעלה</text>
  <text x="217" y="50" style="fill:var(--s-hot)">כי היא זורקת גז למטה</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="32" y="120">מחמצן</text>
  <text x="34" y="144">דלק</text>
  <text x="217" y="34">השניים נשרפים בתא הבעירה</text>
  <text x="217" y="50">והנחיר מאיץ את הגז החוצה</text>
</g>

<!-- ===== פס המסה: מטען, מבנה, דלק ===== -->
<g class="hl-3">
  <g clip-path="url(#rocket-bar)">
    <rect class="fl-panel" x="125" y="57" width="186" height="14"/>
    <rect class="fl-green" x="125" y="57" width="7.500" height="14"/>
    <rect class="fl-line" x="132.500" y="57" width="11" height="14"/>
    <rect class="fl-warm" x="143.500" y="57" width="167.500" height="14"><animate attributeName="width" values="167.5;167.5;0;0" keyTimes="0;.3;.85;1" dur="9s" repeatCount="indefinite"/></rect>
  </g>
  <rect class="fl-none st-ink" stroke-width="2" x="125" y="57" width="186" height="14" rx="4"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M132.500 57V71M143.500 57V71"/>
</g>
<g class="only-3">
  <text x="217" y="34">כ־90% מהמשקל: דלק ומחמצן</text>
  <text x="217" y="50">רק אחוזים בודדים הם המטען</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M129 74V79"/>
  <text class="sm" x="137" y="88">מטען</text>
  <text class="sm" x="228" y="88">דלק ומחמצן</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <g><path class="wire st-hot blink" style="stroke-width:2;stroke-dasharray:4 4" d="M52 101H116"/></g>
  <text x="217" y="34">השלב הריק מתנתק ונופל</text>
  <text x="217" y="50">והשלב השני מצית מנוע משלו</text>
</g>

<g class="hl-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="124" y="96" width="188" height="116" rx="8"/>
  <g clip-path="url(#rocket-sky)">
    <path class="fl-cold-soft" d="M124 150H312V212H124z"/>
    <circle class="fl-soft st-line" stroke-width="1.5" cx="218" cy="620" r="424"/>
    <path class="thin" style="stroke-dasharray:2 4" d="M124 150H312"/>
    <path class="fl-dark" d="M146 198h12v-3h-12z"/>
    <path class="thin st-ink" style="stroke-dasharray:3 4;stroke-width:1.3" d="M152 198C152 174 158.5 153.5 180.3 138.3"/>
    <path class="wire st-green" style="stroke-dasharray:3 4;stroke-width:1.6" d="M180.3 138.3C202 123 239 113 300 110"/>
    <path class="thin" style="stroke-dasharray:1.5 3.5" d="M180.3 138.3Q214.6 114.1 242.3 197"/>
    <!-- הרקטה השלמה עד נקודת ההפרדה -->
    <g opacity="0"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.401;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/>
      <g><animateMotion dur="10s" begin="-5.2s" repeatCount="indefinite" rotate="auto" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.4;1" path="M152 198C152 174 158.5 153.5 180.3 138.3"/><g transform="scale(1.4)">
        <path class="fl-warm" d="M-15 -2.6L-26 0L-15 2.6z"><animate attributeName="d" values="M-15 -2.6L-26 0L-15 2.6z;M-15 -2.6L-21 0L-15 2.6z;M-15 -2.6L-26 0L-15 2.6z" dur=".3s" repeatCount="indefinite"/></path>
        <path class="fl-soft st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-15 -3.2H0V3.2H-15z"/>
        <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M0 -3.2H8L13 0L8 3.2H0z"/></g>
      </g></g>
    <!-- השלב הריק נופל -->
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.4;.401;.84;.86;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/>
      <g><animateMotion dur="10s" begin="-5.2s" repeatCount="indefinite" calcMode="spline" keyPoints="0;0;1;1" keyTimes="0;.4;.85;1" keySplines="0 0 1 1;.3 0 .9 .7;0 0 1 1" path="M180.3 138.3Q214.6 114.1 242.3 197"/>
        <g><animateTransform attributeName="transform" type="rotate" values="-52;-52;150;150" keyTimes="0;.4;.85;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/>
          <path class="fl-soft st-ink" stroke-width="1.7" stroke-linejoin="round" d="M-10.5 -4.5H10.5V4.5H-10.5z"/></g>
      </g></g>
    <!-- השלב השני מצית וממשיך -->
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.4;.401;.93;.95;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/>
      <g><animateMotion dur="10s" begin="-5.2s" repeatCount="indefinite" rotate="auto" calcMode="spline" keyPoints="0;0;1;1" keyTimes="0;.4;.93;1" keySplines="0 0 1 1;.4 0 1 1;0 0 1 1" path="M180.3 138.3C202 123 239 113 300 110"/><g transform="scale(1.4)">
        <path class="fl-warm" d="M0 -2.2L-9 0L0 2.2z"><animate attributeName="d" values="M0 -2.2L-9 0L0 2.2z;M0 -2.2L-5 0L0 2.2z;M0 -2.2L-9 0L0 2.2z" dur=".3s" repeatCount="indefinite"/></path>
        <path class="fl-panel st-ink" stroke-width="1.2" stroke-linejoin="round" d="M0 -3.2H8L13 0L8 3.2H0z"/></g>
      </g></g>
    <!-- הבהוב בנקודת ההפרדה -->
    <circle class="st-hot fl-none" stroke-width="1.6" cx="180.3" cy="138.3" r="3" opacity="0"><animate attributeName="r" values="3;3;11;11" keyTimes="0;.4;.5;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.399;.4;.5;1" dur="10s" begin="-5.2s" repeatCount="indefinite"/></circle>
  </g>
</g>
`;
