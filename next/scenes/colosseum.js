// הקולוסיאום: 1 שלד של עמודי טרוורטין, קשתות וקמרונות שנושא את היציע · 2 קהל נכנס בקשת ממוספרת ועולה במסלול משלו · 3 כננת מרימה מעלית מההיפוגאום דרך פתח ברצפה · 4 הוולאריום נמתח מתרנים על ראש הקיר
export default `
<defs>
  <marker id="colosseum-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- קרקע וחפירה -->
<rect class="fl-soft" x="0" y="168" width="320" height="52"/>
<path class="thin" d="M0 168H176"/>

<!-- 1 המבנה בחתך: קיר חיצוני, מסדרונות מקומרים, ויציע משופע -->
<g class="hl-1 hl-2">
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M18 168V30H34V64L172 148V168Z"/>
  <rect class="fl-panel st-ink" stroke-width="2" x="18" y="30" width="12" height="138"/>
  <path class="thin st-ink" style="stroke-width:1" d="M18 132H30M18 98H30M18 64H34"/>
  <path class="fl-bg st-ink" stroke-width="1.4" stroke-linejoin="round" d="M20 168V145A5 5 0 0 1 30 145V168ZM20 128V111A5 5 0 0 1 30 111V128ZM20 94V77A5 5 0 0 1 30 77V94ZM36 168V149A11 11 0 0 1 58 149V168ZM64 168V149A11 11 0 0 1 86 149V168ZM92 168V149A11 11 0 0 1 114 149V168ZM120 168V153A11 11 0 0 1 142 153V168ZM36 128V115A11 11 0 0 1 58 115V128ZM64 128V118A10 10 0 0 1 84 118V128ZM36 94V84A8 8 0 0 1 52 84V94Z"/>
  <path class="thin st-ink" style="stroke-width:1.1" d="M50 67.9h8v5.3M58 73.2h8v5.3M66 78.4h8v5.3M74 83.7h8v5.3M82 88.9h8v5.3M90 94.2h8v5.3M98 99.4h8v5.3M106 104.7h8v5.3M114 109.9h8v5.3M122 115.2h8v5.3M130 120.4h8v5.3M138 125.7h8v5.3M146 130.9h8v5.3M154 136.2h8v5.3M162 141.4h8v5.3"/>
  <path class="fl-bg st-ink" stroke-width="1.4" d="M106 104.7L106 113.7H118L118 112.6Z"/>
  <path class="fl-panel st-ink" stroke-width="1.6" d="M168 148H176V168H168Z"/>
</g>
<g class="only-1">
  <path class="st-hot fl-none dash" stroke-width="1.8" d="M61 80V166M89 98V166M117 116V166M145 132V166"/>
</g>

<!-- 2 מסלול הקהל מהכניסה אל היציע -->
<g class="only-2">
  <path class="st-violet fl-none" stroke-width="1.4" stroke-dasharray="2 3" d="M4 162H44L68 132H92L110 112L118 104"/>
  <circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-0.00s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-0.00s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-0.66s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-0.66s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-1.32s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-1.32s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-1.98s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-1.98s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-2.64s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-2.64s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.3"><animateMotion dur="4s" begin="-3.30s" repeatCount="indefinite" path="M4 162H44L68 132H92L110 112L118 104"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.92;1" dur="4s" begin="-3.30s" repeatCount="indefinite"/></circle>
</g>

<!-- 3 זירה והיפוגאום -->
<g class="hl-3">
  <rect class="fl-dark" fill-opacity=".18" x="176" y="172" width="138" height="42"/>
  <path class="thin st-ink" style="stroke-width:1.6" d="M176 172V214H314V172"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M176 193H246M296 193H314"/>
  <!-- כננת דו־קומתית -->
  <rect class="fl-warm st-ink" stroke-width="1.4" x="206" y="176" width="8" height="36" rx="2"/>
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M196 186H224M196 204H224"/>
  <circle class="fl-ink" cx="200" cy="186" r="1.8"><animate attributeName="cx" values="196;224;196" dur="1.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-ink" cx="200" cy="204" r="1.8"><animate attributeName="cx" values="224;196;224" dur="1.4s" repeatCount="indefinite"/></circle>
  <!-- חבל וגלגלת -->
  <circle class="fl-panel st-ink" stroke-width="1.4" cx="250" cy="177" r="3.5"/>
  <path class="st-warm fl-none" stroke-width="1.4" d="M214 180L247 175M253.5 177V180"/>
  <!-- מעלית: עולה עם חיה עד הפתח שבזירה -->
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -30;0 -30;0 0" dur="6s" repeatCount="indefinite" keyTimes="0;.15;.5;.75;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1;0 0 1 1;.45 0 .55 1"/>
    <path class="st-warm fl-none" stroke-width="1.4" d="M276 182V170"/>
    <rect class="fl-panel st-ink" stroke-width="1.6" x="258" y="182" width="36" height="30"/>
    <path class="thin st-ink" style="stroke-width:1" d="M264 182v30M270 182v30M282 182v30M288 182v30"/>
    <path class="fl-ink" d="M266 206l2-6q4-4 10-3l4-3 2 3-2 2v7h-2v-4h-9v4h-2z"/>
  </g>
  <!-- דלת סתר בזירה -->
  <path class="fl-warm st-ink" stroke-width="1.4" d="M256 168H296V172H256Z"><animateTransform attributeName="transform" type="rotate" values="0 256 170;0 256 170;-80 256 170;-80 256 170;0 256 170" dur="6s" repeatCount="indefinite" keyTimes="0;.15;.5;.75;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1;0 0 1 1;.45 0 .55 1"/></path>
</g>
<!-- רצפת הזירה: עץ וחול -->
<path class="fl-warm st-ink" stroke-width="1.4" d="M176 168H256V172H176ZM296 168H314V172H296Z"/>
<path class="thin" d="M176 168H314"/>

<!-- 4 וולאריום: תרנים על ראש הקיר, חבלים ובד שנפרש מעל היציע -->
<g class="hl-4">
  <path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M24 30V8"/>
  <path class="thin st-ink" style="stroke-width:1" d="M24 9L262 74M24 9L30 30"/>
  <ellipse class="fl-none st-ink" stroke-width="1.4" cx="266" cy="76" rx="8" ry="3"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 1.6;0 0" dur="3s" repeatCount="indefinite"/>
    <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M30 24Q100 50 184 62L184 70Q100 60 30 31Z"/>
    <path class="thin st-ink" style="stroke-width:.9" d="M50 32.4l-.6 6.2M70 40.2l-.7 6.6M90 46.6l-.8 7M110 51.6l-.8 7.3M130 55.6l-.8 7.6M150 58.6l-.8 7.8M170 60.8l-.8 7.9"/>
  </g>
  <path class="st-warm fl-none" stroke-width="1.6" stroke-dasharray="3 5" d="M24 9L262 74"><animate attributeName="stroke-dashoffset" values="0;16" dur="1s" repeatCount="indefinite"/></path>
  <path class="fl-ink" fill-opacity=".14" d="M34 66L168 148H172V140L60 64Z"><animate attributeName="opacity" values=".5;1;.5" dur="3s" repeatCount="indefinite"/></path>
  <circle class="fl-elec st-warm" stroke-width="1.4" cx="296" cy="24" r="9"/>
  <path class="st-warm fl-none" stroke-width="1.6" stroke-linecap="round" d="M296 8v-3M296 43v-3M280 24h-3M315 24h-3M285 13l-2-2M307 13l2-2M285 35l-2 2M307 35l2 2"><animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/></path>
</g>

<!-- תוויות -->
<g class="only-1"><text x="252" y="106">טרוורטין, טוף ובטון</text><text x="252" y="120">קשתות וקמרונות</text></g>
<g class="only-2"><text x="252" y="106">80 קשתות כניסה</text><text x="252" y="120">מסלול לכל גזרה</text></g>
<g class="only-3"><text x="252" y="106">כננת מרימה מעלית</text><text x="252" y="120">אל פתח בזירה</text></g>
<g class="only-4"><text x="252" y="106">גגון בד על תרנים</text><text x="252" y="120">מעל היציעים</text></g>
`;
