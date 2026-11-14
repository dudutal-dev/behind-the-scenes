// המנעול בדפדפן: 1 מפתח ציבורי ומפתח פרטי · 2 תעודה חתומה נבדקת · 3 סוד משותף עובר נעול · 4 הכול מוצפן והמאזין רואה ערבוב
export default `
<defs>
  <g id="https-key" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle r="4.5"/><path d="M4.5 0H19M13.5 0v4.5M18.5 0v4.5"/>
  </g>
</defs>

<!-- הקו בין הדפדפן לשרת -->
<path class="pipe st-dark" d="M102 100H236"/>
<path class="flow slow hl-4" d="M102 100H236"/>

<!-- דפדפן -->
<rect class="body" x="12" y="52" width="90" height="94" rx="8"/>
<path class="thin st-ink" d="M12 66H102"/>
<circle class="fl-hot" cx="21" cy="59" r="2.3"/><circle class="fl-warm" cx="28.5" cy="59" r="2.3"/><circle class="fl-green" cx="36" cy="59" r="2.3"/>
<rect class="fl-soft" x="18" y="71" width="78" height="13" rx="6.5"/>
<path class="thin" d="M38 77.5H84"/>
<g class="from-4">
  <path class="fl-none st-green" stroke-width="1.8" d="M24.5 76v-2a2.5 2.5 0 0 1 5 0v2"/>
  <rect class="fl-green" x="23" y="76" width="8" height="6" rx="1.5"/>
</g>
<path class="thin" d="M22 94H66M22 104H86M22 114H56"/>
<!-- התעודה שהתקבלה -->
<g class="from-2">
  <rect class="body" stroke-width="1.5" style="stroke-width:1.5" x="74" y="112" width="18" height="24" rx="2"/>
  <path class="thin" d="M78 118h10M78 123h10"/>
  <circle class="fl-warm st-ink" stroke-width="1" cx="86" cy="130" r="3.5"/>
</g>
<!-- המפתח המשותף אצל הדפדפן -->
<use href="#https-key" class="st-violet from-3" x="26" y="130"/>

<!-- שרת האתר -->
<rect class="body" x="236" y="56" width="64" height="92" rx="6"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="242" y="62" width="52" height="14" rx="3"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="242" y="80" width="52" height="14" rx="3"/>
<circle class="fl-green blink" cx="249" cy="69" r="2"/><circle class="fl-green blink d2" cx="249" cy="87" r="2"/>
<path class="thin" d="M258 69H288M258 87H288"/>
<!-- המפתח הפרטי נשאר בתוך השרת -->
<use href="#https-key" class="st-hot hl-1 hl-3" x="254" y="110"/>
<use href="#https-key" class="st-violet from-3" x="254" y="132"/>
<!-- המפתח הציבורי -->
<use href="#https-key" class="st-green hl-1 hl-2 hl-3" x="256" y="40"/>

<!-- גוף מאשר -->
<g class="hl-2">
  <path class="fl-warm st-ink" stroke-width="1.5" stroke-linejoin="round" d="M158 46l-5 14l7-3l5 6l5-6l7 3l-5-14z"/>
  <circle class="fl-elec st-ink" stroke-width="2" cx="165" cy="38" r="12"/>
  <path class="arrow st-ink" stroke-width="2" d="M159.5 38l4 4l7-8"/>
</g>

<!-- המאזין על הקו -->
<path class="thin st-hot" stroke-dasharray="3 3" d="M165 104V122"/>
<circle class="fl-hot st-ink" stroke-width="1.5" cx="165" cy="100" r="4.5"/>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M141 181q2-30 24-33q22 3 24 33z"/>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M165 120c-12 0-17 9-17 19v8h34v-8c0-10-5-19-17-19z"/>
<ellipse class="fl-panel" cx="165" cy="138" rx="9" ry="7"/>
<circle class="fl-ink" cx="161.5" cy="138" r="1.5"/><circle class="fl-ink" cx="168.5" cy="138" r="1.5"/>
<path class="wire st-hot" d="M149 137a16 16 0 0 1 32 0"/>
<rect class="fl-hot st-ink" stroke-width="1" x="145" y="134" width="6" height="11" rx="2"/><rect class="fl-hot st-ink" stroke-width="1" x="179" y="134" width="6" height="11" rx="2"/>
<!-- מה שהמאזין מבין -->
<g class="only-3 only-4">
  <path class="body" style="stroke-width:1.5" d="M199 124h20a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-16l-8 6l2-8a6 6 0 0 1-4-6v-6a6 6 0 0 1 6-6z"/>
  <text class="blink" x="209" y="138" style="stroke:none">???</text>
</g>

<!-- שלב 1: המפתח הציבורי מחולק לכל מי שמבקש, הפרטי לא יוצא -->
<g class="only-1">
  <g><use href="#https-key" class="st-green"/>
    <animateMotion dur="3s" repeatCount="indefinite" path="M214 100H108"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3s" repeatCount="indefinite"/></g>
  <g><use href="#https-key" class="st-green"/>
    <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M214 100H158V124"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></g>
  <circle class="ring st-hot" cx="263" cy="111" r="17"/>
  <text x="266" y="24">מפתח ציבורי</text>
  <text x="66" y="170">הציבורי גלוי לכולם</text>
  <text x="262" y="170">הפרטי נשאר בשרת</text>
</g>
<!-- שלב 2: תעודה חתומה בדרך לדפדפן, והדפדפן בודק את החתימה -->
<g class="only-2">
  <g>
    <rect class="body" x="-10" y="-13" width="20" height="26" rx="2"/>
    <path class="thin" d="M-6 -8h12"/>
    <g transform="translate(-6 -2) scale(.6)"><use href="#https-key" class="st-green"/></g>
    <circle class="fl-warm st-ink" stroke-width="1" cx="4" cy="7" r="4"/>
    <animateMotion dur="2.8s" repeatCount="indefinite" path="M224 100H114"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.88;1" dur="2.8s" repeatCount="indefinite"/>
  </g>
  <path class="thin st-warm dash" d="M92 110Q104 52 151 40"/>
  <circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="1.6s" repeatCount="indefinite" path="M92 110Q104 52 151 40"/></circle>
  <g class="pulse"><circle class="fl-green st-ink" stroke-width="1.2" cx="76" cy="113" r="6.5"/><path d="M72.6 113l2.5 2.7l4.4-5.2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>
  <text x="165" y="17">גוף מוכר חתם</text>
  <text x="66" y="170">הדפדפן בודק חתימה</text>
</g>
<!-- שלב 3: הדפדפן שולח סוד נעול במפתח הציבורי, רק הפרטי פותח -->
<g class="only-3">
  <g>
    <rect class="fl-violet st-ink" stroke-width="1.5" x="-12" y="-7" width="24" height="15" rx="3"/>
    <path class="fl-none st-green" stroke-width="2.2" d="M-3.5 -7v-3a3.5 3.5 0 0 1 7 0v3"/>
    <rect class="fl-green st-ink" stroke-width="1" x="-5.5" y="-7" width="11" height="8" rx="2"/>
    <animateMotion dur="2.8s" repeatCount="indefinite" path="M114 100H224"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.88;1" dur="2.8s" repeatCount="indefinite"/>
  </g>
  <circle class="ring st-violet" cx="35" cy="131" r="15"/>
  <circle class="ring st-violet d3" cx="263" cy="133" r="15"/>
  <text x="66" y="170">סוד נעול בציבורי</text>
  <text x="262" y="170">רק הפרטי פותח</text>
</g>
<!-- שלב 4: כל ההודעות עוברות כבלוקים מעורבלים -->
<g class="only-4">
  <g><rect class="body" style="stroke-width:1.5" x="-14" y="-6" width="28" height="12" rx="3"/>
    <path class="fl-violet" d="M-11 -3h4v3h-4zM-3 0h4v3h-4zM5 -3h3v3h-3z"/><path class="fl-dark" d="M-7 0h3v3h-3zM1 -3h3v3h-3zM9 0h3v3h-3z"/><path class="fl-warm" d="M-11 0h3v3h-3zM-3 -3h3v3h-3zM5 0h3v3h-3z"/>
    <animateMotion dur="2.4s" repeatCount="indefinite" path="M116 92H222"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-14" y="-6" width="28" height="12" rx="3"/>
    <path class="fl-violet" d="M-11 0h4v3h-4zM-3 -3h4v3h-4zM5 0h3v3h-3z"/><path class="fl-dark" d="M-7 -3h3v3h-3zM1 0h3v3h-3zM9 -3h3v3h-3z"/><path class="fl-warm" d="M-11 -3h3v3h-3zM5 -3h3v3h-3z"/>
    <animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M222 108H116"/></g>
  <text x="60" y="170">הכול מוצפן</text>
  <text x="165" y="204">המאזין לא מצליח לקרוא</text>
</g>
`;
