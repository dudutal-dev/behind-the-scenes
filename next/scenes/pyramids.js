// הפירמידות: 1 חציבה במחצבה שליד האתר · 2 מזחלת על חול רטוב · 3 מדרון שעולה אל הפירמידה (השערה) · 4 יישור לצפון וחבורות עבודה
export default `
<defs>
  <marker id="pyramids-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="pyramids-inset"><rect x="100" y="10" width="78" height="66" rx="4"/></clipPath>
</defs>
<!-- קרקע וחול -->
<rect class="fl-soft" x="0" y="166" width="320" height="54"/>
<path class="thin" d="M0 166H320"/>

<!-- הפירמידה בבנייה: שכבות גיר, והחלק שעוד לא נבנה בקו מקווקו -->
<path class="body" d="M150 166L200.8 100H259.2L310 166Z"/>
<path class="thin" style="stroke-width:1" d="M157.7 156H302.3M165.4 146H294.6M173.1 136H286.9M180.8 126H279.2M188.5 116H271.5M196.2 106H263.8"/>
<path class="st-line fl-none" stroke-width="1.4" stroke-dasharray="3 4" d="M200.8 100L230 62L259.2 100"/>

<!-- 1 מחצבה: מדרגות בסלע, גוש שתעלות נחצבו סביבו, וחוצב עם פטיש -->
<g class="hl-1">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M6 166V112H42V128H90V166Z"/>
  <path class="thin" style="stroke-width:1" d="M6 124H42M6 140H50M6 154H90M24 112V124M30 140V154M62 154V166"/>
  <rect class="fl-dark" x="48" y="128" width="3" height="18"/>
  <rect class="fl-dark" x="77" y="128" width="3" height="18"/>
  <rect class="fl-dark" x="48" y="146" width="32" height="3"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="51" y="128" width="26" height="18"/>
  <g transform="translate(36 112) rotate(0)"><circle class="fl-ink" cx="0" cy="-17" r="3.2"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M0 -13.5V-6M0 -6L-3 0M0 -6L3 0"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="-40 38 101;10 38 101;-40 38 101" keyTimes="0;.25;1" dur="1s" repeatCount="indefinite"/>
    <path class="st-warm fl-none" stroke-width="2" stroke-linecap="round" d="M38 101L47 110"/><rect class="fl-dark" x="44" y="107" width="6" height="5" rx="1"/></g>
  <g class="only-1">
    <path class="fl-ink" d="M48 120l3 2-3 1zM53 118l2 3-3 0z"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.24;.3;.6;1" dur="1s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- 3 מדרון: סוללה של לבני בוץ שנשענת על הפירמידה, וגוש שנגרר במעלה -->
<g class="hl-3">
  <path class="fl-warm st-ink" stroke-width="2" stroke-linejoin="round" fill-opacity=".55" d="M95 166L200.8 100L150 166Z"/>
  <path class="thin st-ink" style="stroke-width:.8" stroke-opacity=".5" d="M120 166V150M140 166V138M108 158H150M130 145H160M154 133H172M170 120H185"/>
  <g>
    <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path="M104 160L197.8 101"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="5s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.4" x="-8" y="-11" width="15" height="9"/>
    <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M-10 -1H8q2 0 3-3"/>
  </g>
</g>

<!-- 2 מזחלת: גוש על מזחלת, אדם שופך מים לפניה, חול רטוב -->
<g class="hl-2">
  <path class="st-line fl-none dash" stroke-width="1.2" d="M234 210H110"/>
  <ellipse class="fl-cold-soft st-cold" stroke-width="1" cx="216" cy="205" rx="16" ry="3.5"/>
  <rect class="fl-panel st-ink" stroke-width="2" x="142" y="176" width="44" height="22"/>
  <path class="thin" style="stroke-width:1" d="M142 187H186M164 176V187"/>
  <path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M132 202H194q7 0 9-7M140 198v4M188 198v4"/>
  <g transform="translate(196 194) rotate(6)"><circle class="fl-ink" cx="0" cy="-17" r="3.2"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M0 -13.5V-6M0 -6L-3 0M0 -6L3 0"/></g>
  <path class="fl-warm st-ink" stroke-width="1.2" d="M198 179q6-2 8 2l-1 5q-5 2-8-1z"/>
  <g class="fl-cold">
    <circle cx="207" cy="188" r="1.4"><animate attributeName="cy" values="188;203" dur=".7s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur=".7s" repeatCount="indefinite"/></circle>
    <circle cx="209" cy="188" r="1.2"><animate attributeName="cy" values="188;203" dur=".7s" begin="-.35s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur=".7s" begin="-.35s" repeatCount="indefinite"/></circle>
  </g>
</g>
<!-- חבל והגוררים -->
<g class="hl-2 hl-4">
  <path class="st-warm fl-none" stroke-width="1.8" d="M201 197L236 187H300"/>
  <g class="bob"><g transform="translate(244 200) rotate(22)"><circle class="fl-ink" cx="0" cy="-17" r="3.2"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M0 -13.5V-6M0 -6L-3 0M0 -6L3 0"/></g></g>
  <g class="bob d2"><g transform="translate(266 200) rotate(22)"><circle class="fl-ink" cx="0" cy="-17" r="3.2"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M0 -13.5V-6M0 -6L-3 0M0 -6L3 0"/></g></g>
  <g class="bob d4"><g transform="translate(288 200) rotate(22)"><circle class="fl-ink" cx="0" cy="-17" r="3.2"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M0 -13.5V-6M0 -6L-3 0M0 -6L3 0"/></g></g>
</g>

<!-- 4 מבט מלמעלה: בסיס ריבועי שמכוון לצפון -->
<g class="hl-4">
  <rect class="body" x="100" y="10" width="78" height="66" rx="4"/>
  <g clip-path="url(#pyramids-inset)">
    <path class="st-hot fl-none dash" stroke-width="1.4" d="M126 72V14"/>
    <rect class="fl-soft st-ink" stroke-width="1.6" x="112" y="29" width="28" height="28"/>
    <path class="thin st-ink" style="stroke-width:1" d="M112 29L140 57M140 29L112 57"/>
    <path class="arrow st-ink" style="stroke-width:1.8" d="M162 64V28" marker-end="url(#pyramids-a)"/>
    <path class="fl-elec st-ink" stroke-width=".8" d="M126 15l1.4 3 3.2.4-2.4 2.2.7 3.2-2.9-1.6-2.9 1.6.7-3.2-2.4-2.2 3.2-.4z"><animate attributeName="opacity" values="1;.35;1" dur="1.6s" repeatCount="indefinite"/></path>
  </g>
  <text x="162" y="22" class="sm">צ</text>
</g>

<!-- תוויות -->
<g class="only-1"><text x="52" y="186">מחצבה ליד האתר</text><text x="52" y="200">אזמלי נחושת</text></g>
<g class="only-2"><text x="58" y="186">מזחלת על</text><text x="58" y="200">חול רטוב</text><path class="arrow st-ink" style="stroke-width:1.6" d="M92 196H126" marker-end="url(#pyramids-a)"/></g>
<g class="only-3"><text x="56" y="186">מדרון לבני בוץ</text><text x="56" y="200">ההשערה המקובלת</text></g>
<g class="only-4"><text x="56" y="38">מכוונת</text><text x="56" y="52">לצפון</text><text x="56" y="186">חבורות עבודה</text><text x="56" y="200">עם שמות</text></g>
`;
