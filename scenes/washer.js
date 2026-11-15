// מכונת כביסה: 1 מים נכנסים דרך מגירת האבקה אל המְכל · 2 התוף מרים ומפיל את הכביסה וגוף החימום מחמם · 3 המשאבה מרוקנת ומים נקיים נכנסים · 4 סחיטה מהירה, המים מושלכים דרך החורים
export default `
<defs>
  <clipPath id="washer-tubclip"><circle cx="99" cy="110" r="57"/></clipPath>
  <g id="washer-tub">
    <rect class="fl-line st-ink" stroke-width="1.6" x="74" y="40" width="50" height="18" rx="2"/>
    <rect class="fl-line st-ink" stroke-width="1.6" x="152" y="92" width="15" height="36" rx="2"/>
    <circle class="st-ink" style="fill:var(--s-soft)" stroke-width="2" cx="99" cy="110" r="58"/>
    <path class="wire st-line" style="stroke-width:3" d="M118.9,159.1A53 53 0 0 1 79.1,159.1"/>
  </g>
  <g id="washer-drum">
    <circle class="fl-panel" cx="99" cy="110" r="48"/>
    <circle class="st-ink fl-none" stroke-width="2.6" stroke-dasharray="5.5 2.8" cx="99" cy="110" r="48"/>
    <path class="fl-line st-ink" stroke-width="1.4" stroke-linejoin="round" d="M128.2,147.4L117.3,141.6L116.8,154z"/><path class="fl-line st-ink" stroke-width="1.4" stroke-linejoin="round" d="M52,116.6L62.5,110L52,103.4z"/><path class="fl-line st-ink" stroke-width="1.4" stroke-linejoin="round" d="M116.8,66L117.3,78.4L128.2,72.6z"/>
    <circle class="fl-line" cx="99" cy="110" r="2.5"/>
  </g>
  <g id="washer-c1" ><g transform="scale(1.35)"><path class="fl-violet st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-8 2C-9-4-3-7 1-5C6-7 9-2 7 3C5 7-5 7-8 2z"/><path class="st-ink fl-none" stroke-width="1" stroke-linecap="round" stroke-opacity=".55" d="M-4 0q3-3 7 0"/></g></g>
  <g id="washer-c2" ><g transform="scale(1.35)"><path class="fl-green st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-7-3C-3-7 5-6 8-2C9 3 4 6-1 5C-6 7-10 2-7-3z"/><path class="st-ink fl-none" stroke-width="1" stroke-linecap="round" stroke-opacity=".55" d="M-3 1q3 2 7-1"/></g></g>
  <g id="washer-c3" ><g transform="scale(1.35)"><path class="fl-warm st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-8 0C-7-5-1-6 3-5C8-5 9 1 6 4C1 7-6 6-8 0z"/><path class="st-ink fl-none" stroke-width="1" stroke-linecap="round" stroke-opacity=".55" d="M-4-1q4 2 8 0"/></g></g>
  <g id="washer-imp"><path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M99 186.5V197.5M93.5 192H104.5"/></g>
</defs>
<path class="thin" d="M4 210H316"/>

<!-- גוף המכונה -->
<rect class="fl-line" x="20" y="203" width="14" height="7" rx="1.5"/><rect class="fl-line" x="164" y="203" width="14" height="7" rx="1.5"/>
<rect class="body" x="8" y="10" width="182" height="194" rx="5"/>
<rect class="st-ink" style="fill:var(--s-soft)" stroke-width="1.4" x="14" y="16" width="40" height="20" rx="3"/>
<circle class="fl-panel st-ink" stroke-width="1.4" cx="25" cy="26" r="6"/><path class="st-ink" stroke-width="1.6" stroke-linecap="round" d="M25 26L28.5 22.5"/>
<rect class="fl-dark" x="36" y="21" width="14" height="10" rx="1.5"/>

<!-- מנוע ורצועה -->
<g class="hl-2 hl-4">
  <path class="wire st-dark" style="stroke-width:2" d="M64.4 186.5L73.4 105.5M73.6 190L118.9 126.7"/>
  <rect class="body" x="54" y="178" width="30" height="20" rx="4"/>
  <path class="thin" style="stroke-width:1.2" d="M60 182V194M79 182V194"/>
  <circle class="fl-line st-ink" stroke-width="1.5" cx="69" cy="188" r="5"/><circle class="fl-ink" cx="69" cy="188" r="1.4"/>
</g>
<g class="only-2 from-4"><path class="wire dash" style="stroke-width:2;stroke:var(--s-elec);stroke-dasharray:3 7" d="M64.4 186.5L73.4 105.5M73.6 190L118.9 126.7"/></g>

<!-- קפיצים ובולמים -->
<g class="hl-4">
  <path class="wire st-ink" style="stroke-width:1.6" d="M64 11V15l-5 2.8l10 5.6l-10 5.6l10 5.6l-10 5.6l10 5.6l-10 5.6l10 5.6l5 2.8V66"/><path class="wire st-ink" style="stroke-width:1.6" d="M134 11V15l-5 2.8l10 5.6l-10 5.6l10 5.6l-10 5.6l10 5.6l-10 5.6l10 5.6l5 2.8V66"/>
  <path class="wire st-ink" style="stroke-width:2" d="M58,151L48,170.5"/><path class="pipe st-ink" style="stroke-width:7;stroke-linecap:butt" d="M48,170.5L38,190"/><path class="pipe" style="stroke-width:3.6;stroke:var(--s-panel);stroke-linecap:butt" d="M47.2 172.1L38.8 188.4"/><circle class="fl-ink" cx="38" cy="190" r="2.6"/><path class="wire st-ink" style="stroke-width:2" d="M140,151L150,170.5"/><path class="pipe st-ink" style="stroke-width:7;stroke-linecap:butt" d="M150,170.5L160,190"/><path class="pipe" style="stroke-width:3.6;stroke:var(--s-panel);stroke-linecap:butt" d="M150.8 172.1L159.2 188.4"/><circle class="fl-ink" cx="160" cy="190" r="2.6"/>
</g>

<!-- משאבת ניקוז, צינור ניקוז וביוב -->
<g class="hl-3 hl-4">
  <path class="pipe st-ink" style="stroke-width:12;stroke-linecap:butt" d="M232 148V196H318"/><path class="pipe" style="stroke-width:9;stroke:var(--s-panel);stroke-linecap:butt" d="M232 148V196H318"/>
  <path class="pipe st-ink" style="stroke-width:7" d="M99 167V184"/><path class="pipe" style="stroke-width:4;stroke:var(--s-panel)" d="M99 167V184"/>
  <path class="pipe st-ink" style="stroke-width:6" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/><path class="pipe" style="stroke-width:3;stroke:var(--s-panel)" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/>
  <circle class="body" cx="99" cy="192" r="9"/>
</g>
<g class="only-1 only-2"><use href="#washer-imp" opacity=".3"/></g>

<!-- ברז, שסתום, מגירת אבקה וצינור מילוי -->
<g class="hl-1 hl-3">
  <path class="pipe st-ink" style="stroke-width:6" d="M318 26H192"/><path class="pipe" style="stroke-width:3;stroke:var(--s-panel)" d="M318 26H192"/>
  <path class="wire st-ink" style="stroke-width:2" d="M296 23V14M290 14H302"/><circle class="fl-line st-ink" stroke-width="1.5" cx="296" cy="26" r="4.5"/>
  <path class="pipe st-ink" style="stroke-width:6" d="M178 26H172"/><path class="pipe" style="stroke-width:3;stroke:var(--s-panel)" d="M178 26H172"/><path class="pipe st-ink" style="stroke-width:6" d="M164 36C164 56 156 64 149.5 79"/><path class="pipe" style="stroke-width:3;stroke:var(--s-panel)" d="M164 36C164 56 156 64 149.5 79"/>
  <rect class="fl-line st-ink" stroke-width="1.5" x="178" y="19" width="14" height="14" rx="2"/>
  <rect class="body" style="stroke-width:1.6" x="142" y="16" width="30" height="20" rx="2"/><path class="st-ink" stroke-width="1.2" d="M156 16V36"/>
</g>

<!-- המְכל האטום, המשקולות וגוף החימום (נח) -->
<g class="only-1 only-2 only-3"><use href="#washer-tub"/></g>

<!-- שלב 1: מילוי דרך מגירת האבקה -->
<g class="only-1"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.92;.95;.985;1" dur="6s" repeatCount="indefinite"/>
  <use href="#washer-drum"/><use href="#washer-c2" x="91.5" y="145.2"/><use href="#washer-c1" x="110.1" y="144.2"/><use href="#washer-c3" x="74.9" y="136.8"/>
  <g clip-path="url(#washer-tubclip)"><rect class="fl-cold" fill-opacity=".55" x="38" y="166" width="124" height="40"><animate attributeName="y" values="166;140;140" keyTimes="0;.7;1" dur="6s" repeatCount="indefinite"/></rect></g>
  <rect class="fl-violet" x="158.5" y="26" width="12" height="8" rx="1"><animate attributeName="opacity" values="1;.1;.1" keyTimes="0;.6;1" dur="6s" repeatCount="indefinite"/></rect>
  <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.7;.73;1" dur="6s" repeatCount="indefinite"/>
    <path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M318 26H192"/><path class="flow" style="stroke-width:1.4" d="M318 26H192"/><path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M178 26H172"/><path class="flow" style="stroke-width:1.4" d="M178 26H172"/><path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M164 36C164 56 156 64 149.5 79"/><path class="flow" style="stroke-width:1.4" d="M164 36C164 56 156 64 149.5 79"/>
    <rect class="fl-cold" fill-opacity=".45" x="157" y="22" width="14" height="13"/>
    <rect class="fl-cold st-ink" stroke-width="1.5" x="178" y="19" width="14" height="14" rx="2"/>
    <path class="wire st-cold" style="stroke-width:3" d="M144,82.1A53 53 0 0 1 115.4,160.4"/><path class="flow" style="stroke-width:1.4" d="M144,82.1A53 53 0 0 1 115.4,160.4"/>
  </g>
</g></g>

<!-- שלב 2: התוף מסתובב לאט לשני הכיוונים, הבליטות מרימות ומפילות -->
<g class="only-2">
  <g><animateTransform attributeName="transform" type="rotate" values="0 99 110;240 99 110;240 99 110;0 99 110;0 99 110" keyTimes="0;.4;.5;.9;1" dur="8s" repeatCount="indefinite"/><use href="#washer-drum"/></g>
  <g>
    <use href="#washer-c2"><animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;0.2762;0.5001;0.5001;0.7763;1;1" keyTimes="0;0.0025;0.2125;0.265;0.5687;0.7788;0.8325;1" path="M91.5,145.2A36 36 0 0 1 74.9,83.2L91.5,145.2A36 36 0 0 0 131.9,95.4L91.5,145.2"/></use>
    <use href="#washer-c1"><animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;0.2763;0.4999;0.4999;0.7763;1;1" keyTimes="0;0.0025;0.2125;0.265;0.5687;0.7788;0.8325;1" path="M110.1,144.2A36 36 0 0 1 64.8,98.9L110.1,144.2A36 36 0 0 0 120.2,80.9L110.1,144.2"/></use>
    <use href="#washer-c3"><animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;0.2762;0.5;0.5;0.7762;1;1" keyTimes="0;0.0025;0.2125;0.265;0.5687;0.7788;0.8325;1" path="M74.9,136.8A36 36 0 0 1 91.5,74.8L74.9,136.8A36 36 0 0 0 134.8,113.8L74.9,136.8"/></use>
  </g>
  <g clip-path="url(#washer-tubclip)"><rect class="fl-cold" fill-opacity=".55" x="38" y="140" width="124" height="40"></rect></g>
  <g><path class="wire st-hot fade" style="stroke-width:3.4" d="M118.9,159.1A53 53 0 0 1 79.1,159.1"/></g>
  <g class="wire st-hot" style="stroke-width:1.4">
    <path d="M86 153q-2-3 0-5t0-5"><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 2;0 -4" dur="1.6s" repeatCount="indefinite"/></path>
    <path d="M99 154q-2-3 0-5t0-5"><animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="-.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 2;0 -4" dur="1.6s" begin="-.5s" repeatCount="indefinite"/></path>
    <path d="M112 153q-2-3 0-5t0-5"><animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="-1s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 2;0 -4" dur="1.6s" begin="-1s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- שלב 3: ריקון המים המלוכלכים ומילוי במים נקיים -->
<g class="only-3"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.94;.96;.985;1" dur="9s" repeatCount="indefinite"/>
  <g><animateTransform attributeName="transform" type="rotate" from="0 99 110" to="360 99 110" dur="6s" repeatCount="indefinite"/><use href="#washer-drum"/></g>
  <use href="#washer-c2" x="91.5" y="145.2"/><use href="#washer-c1" x="110.1" y="144.2"/><use href="#washer-c3" x="74.9" y="136.8"/>
  <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.41;.43;1" dur="9s" repeatCount="indefinite"/>
    <g clip-path="url(#washer-tubclip)"><rect class="fl-line" fill-opacity=".7" x="38" y="140" width="124" height="40"><animate attributeName="y" values="140;166;166" keyTimes="0;.4;1" dur="9s" repeatCount="indefinite"/></rect></g>
    <path class="pipe" style="stroke-width:4;stroke:var(--s-line)" d="M99 167V184"/><path class="flow" style="stroke-width:1.4" d="M99 167V184"/><path class="pipe" style="stroke-width:3;stroke:var(--s-line)" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/><path class="flow" style="stroke-width:1.4" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/>
    <path class="flow" style="stroke-width:2" d="M232 152V196H316"/>
    <circle class="st-ink" style="fill:var(--s-line)" stroke-width="2" cx="99" cy="192" r="9"/>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.45;.47;1" dur="9s" repeatCount="indefinite"/>
    <g clip-path="url(#washer-tubclip)"><rect class="fl-cold" fill-opacity=".55" x="38" y="166" width="124" height="40"><animate attributeName="y" values="166;166;140;140" keyTimes="0;.47;.87;1" dur="9s" repeatCount="indefinite"/></rect></g>
    <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.87;.89;1" dur="9s" repeatCount="indefinite"/>
      <path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M318 26H192"/><path class="flow" style="stroke-width:1.4" d="M318 26H192"/><path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M178 26H172"/><path class="flow" style="stroke-width:1.4" d="M178 26H172"/><path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M164 36C164 56 156 64 149.5 79"/><path class="flow" style="stroke-width:1.4" d="M164 36C164 56 156 64 149.5 79"/>
      <rect class="fl-cold" fill-opacity=".45" x="157" y="22" width="14" height="13"/>
      <rect class="fl-cold st-ink" stroke-width="1.5" x="178" y="19" width="14" height="14" rx="2"/>
      <path class="wire st-cold" style="stroke-width:3" d="M144,82.1A53 53 0 0 1 115.4,160.4"/><path class="flow" style="stroke-width:1.4" d="M144,82.1A53 53 0 0 1 115.4,160.4"/>
    </g>
  </g>
</g></g>

<!-- שלב 4 והמבט הכולל: סחיטה -->
<g class="from-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;1 .5;-.9 -.4;.7 -.6;-.6 .5;0 0" dur=".32s" repeatCount="indefinite"/>
    <use href="#washer-tub"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0 99 110" to="360 99 110" dur=".5s" repeatCount="indefinite"/><use href="#washer-drum"/><path class="pipe st-ink" style="stroke-width:10.5" d="M139.1,115.6A40.5 40.5 0 0 1 116.8,146.4"/><path class="pipe" style="stroke-width:8;stroke:var(--s-violet)" d="M139.1,115.6A40.5 40.5 0 0 1 116.8,146.4"/><path class="pipe st-ink" style="stroke-width:10.5" d="M106,149.9A40.5 40.5 0 0 1 69.9,138.1"/><path class="pipe" style="stroke-width:8;stroke:var(--s-green)" d="M106,149.9A40.5 40.5 0 0 1 69.9,138.1"/><path class="pipe st-ink" style="stroke-width:10.5" d="M63.2,129A40.5 40.5 0 0 1 63.2,91"/><path class="pipe" style="stroke-width:8;stroke:var(--s-warm)" d="M63.2,129A40.5 40.5 0 0 1 63.2,91"/><path class="pipe st-ink" style="stroke-width:10.5" d="M69.9,81.9A40.5 40.5 0 0 1 106,70.1"/><path class="pipe" style="stroke-width:8;stroke:var(--s-violet)" d="M69.9,81.9A40.5 40.5 0 0 1 106,70.1"/><path class="pipe st-ink" style="stroke-width:10.5" d="M116.8,73.6A40.5 40.5 0 0 1 139.1,104.4"/><path class="pipe" style="stroke-width:8;stroke:var(--s-green)" d="M116.8,73.6A40.5 40.5 0 0 1 139.1,104.4"/></g>
    <g clip-path="url(#washer-tubclip)"><rect class="fl-cold" fill-opacity=".6" x="38" y="161" width="124" height="40"></rect></g>
    <path class="wire st-cold" style="stroke-width:2.6" d="M147,87.6A53 53 0 0 1 110,161.8M51,87.6A53 53 0 0 0 88,161.8"/><path class="flow" style="stroke-width:1.3" d="M147,87.6A53 53 0 0 1 110,161.8M51,87.6A53 53 0 0 0 88,161.8"/>
    <circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0s" repeatCount="indefinite" path="M147.7,118.6L149.3,134.5"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.2s" repeatCount="indefinite" path="M133.4,145.6L125.3,159.4"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.3s" repeatCount="indefinite" path="M105.9,159L91.2,165.5"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.5s" repeatCount="indefinite" path="M75.8,153.7L60.1,150.3"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.1s" repeatCount="indefinite" path="M54.5,131.7L43.9,119.7"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.3s" repeatCount="indefinite" path="M50.3,101.4L48.7,85.5"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.4s" repeatCount="indefinite" path="M64.6,74.4L72.7,60.6"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.6s" repeatCount="indefinite" path="M92.1,61L106.8,54.5"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.2s" repeatCount="indefinite" path="M122.2,66.3L137.9,69.7"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".6s" begin="-0.3s" repeatCount="indefinite" path="M143.5,88.3L154.1,100.3"/></circle>
  </g>
  <path class="pipe" style="stroke-width:4;stroke:var(--s-cold)" d="M99 167V184"/><path class="flow" style="stroke-width:1.4" d="M99 167V184"/><path class="pipe" style="stroke-width:3;stroke:var(--s-cold)" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/><path class="flow" style="stroke-width:1.4" d="M107 196C116 199 122 199 130 199H210V140C210 128 232 128 232 140V152"/>
  <path class="flow" style="stroke-width:2" d="M232 152V196H316"/>
</g>
<g class="only-3 from-4"><g><animateTransform attributeName="transform" type="rotate" from="0 99 192" to="360 99 192" dur=".7s" repeatCount="indefinite"/><use href="#washer-imp"/></g></g>

<!-- כיתובים -->
<g class="only-1">
  <text x="257" y="62">המים נכנסים דרך</text>
  <text x="257" y="78">מגירת אבקת הכביסה</text>
  <text x="257" y="108">תוף מחורר במְכל אטום</text>
</g>
<g class="only-2">
  <text x="257" y="62">התוף מרים את הכביסה</text>
  <text x="257" y="78">ומפיל אותה אל המים</text>
  <text x="257" y="108">גוף חימום מחמם</text>
</g>
<g class="only-3">
  <text x="257" y="62">המשאבה מרוקנת לביוב</text>
  <text x="257" y="78">ומים נקיים נכנסים</text>
  <text x="282" y="180">לביוב</text>
</g>
<g class="only-4">
  <text x="257" y="56">הכביסה נצמדת לדופן</text>
  <text x="257" y="72">והמים מושלכים החוצה</text>
  <text x="257" y="98">משקולות ובולמים</text>
  <text x="257" y="114">מייצבים את המְכל</text>
</g>
`;
