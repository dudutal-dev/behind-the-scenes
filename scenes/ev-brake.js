// בלימה רגנרטיבית: רכב חשמלי שקוף. 1 הסוללה מזינה את המנוע · 2 מרפים מהדוושה והגלגל מסובב את המנוע · 3 המנוע מתנגד לסיבוב ובולם · 4 הזרם חוזר וטוען את הסוללה
export default `
<defs>
  <marker id="ev-brake-h" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
</defs>

<!-- כביש -->
<path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M8 177H312"/>
<path class="thin dash" style="stroke-dasharray:4 8" d="M312 184H8"/>

<!-- מרכב -->
<path class="body" d="M30 146V122Q30 112 40 110L64 104Q98 66 124 64H188Q208 64 236 104L282 113Q296 116 296 130V146Q296 152 290 152H36Q30 152 30 146z"/>
<path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M78 102Q104 74 126 72H152V102z"/>
<path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M158 72H186Q202 73 224 102H158z"/>
<path class="fl-hot" d="M30 122h4v10h-4z"/>
<path class="fl-elec" d="M292 120h4v9h-4z"/>
<path class="fl-bg st-ink" stroke-width="2" d="M51 152A27 27 0 0 1 105 152z"/>
<path class="fl-bg st-ink" stroke-width="2" d="M219 152A27 27 0 0 1 273 152z"/>

<!-- גלגלים -->
<circle class="fl-dark st-ink" stroke-width="2" cx="78" cy="152" r="23"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="78" cy="152" r="14"/>
<g class="spin"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M78 139v26M65 152h26M68.800 142.800l18.400 18.400M68.800 161.200l18.400-18.400"/></g>
<circle class="fl-dark st-ink" stroke-width="2" cx="246" cy="152" r="23"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="246" cy="152" r="14"/>
<g class="spin"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M246 139v26M233 152h26M236.800 142.800l18.400 18.400M236.800 161.200l18.400-18.400"/></g>

<!-- בלם חיכוך בגלגל האחורי -->
<g class="hl-4">
  <path class="fl-hot st-ink" stroke-width="1.2" stroke-linejoin="round" d="M68 137A18 18 0 0 1 88 137L85 143A11 11 0 0 0 71 143z"/>
</g>

<!-- סוללה ברצפה -->
<rect class="fl-panel st-ink" stroke-width="1.5" x="104" y="134" width="82" height="15" rx="3"/>
<g class="fl-green">
  <rect x="108" y="137" width="11" height="9" rx="1.5"/><rect x="121" y="137" width="11" height="9" rx="1.5"/><rect x="134" y="137" width="11" height="9" rx="1.5"/>
</g>
<g class="fl-green hl-4">
  <rect x="147" y="137" width="11" height="9" rx="1.5"><animate attributeName="opacity" values="0;1;1;1" keyTimes="0;.2;.9;1" dur="2.4s" repeatCount="indefinite"/></rect>
  <rect x="160" y="137" width="11" height="9" rx="1.5"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.35;.55;1" dur="2.4s" repeatCount="indefinite"/></rect>
  <rect x="173" y="137" width="11" height="9" rx="1.5"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.65;.85;1" dur="2.4s" repeatCount="indefinite"/></rect>
</g>

<!-- כבל מתח גבוה: סוללה, ממיר, מנוע -->
<path class="pipe st-warm" stroke-width="5" d="M193 130H184V120H174M148 120H120V134"/>
<g class="only-1">
  <path class="flow" d="M120 134V120H148"/><path class="flow" d="M174 120H184V130H193"/>
</g>
<g class="from-2 hl-2 hl-4">
  <path class="flow" d="M193 130H184V120H174"/><path class="flow" d="M148 120H120V134"/>
</g>
<rect class="fl-soft st-ink hl-1 hl-2 hl-4" stroke-width="1.5" x="148" y="112" width="26" height="16" rx="3"/>
<path class="thin st-ink hl-1 hl-2 hl-4" d="M154 117h14M154 123h9"/>

<!-- ציר בין הגלגל הקדמי למנוע -->
<path class="st-green fl-none" stroke-width="5" stroke-linecap="round" d="M246 152L206 130"/>
<path class="flow only-1" d="M206 130L246 152"/>
<path class="flow from-2" d="M246 152L206 130"/>
<circle class="fl-ink" cx="246" cy="152" r="4"/>

<!-- מנוע / גנרטור -->
<circle class="fl-soft st-ink" stroke-width="2" cx="206" cy="130" r="13.5"/>
<g class="spin fast">
  <path class="fl-hot" d="M197 130a9 9 0 0 1 18 0z"/>
  <path class="fl-cold" d="M197 130a9 9 0 0 0 18 0z"/>
</g>
<circle class="fl-ink" cx="206" cy="130" r="2.2"/>

<!-- רגל ודוושה -->
<g class="hl-2">
  <g><animateTransform attributeName="transform" type="rotate" values="0 224 114;0 224 114;-12 224 114;-12 224 114;0 224 114" keyTimes="0;.2;.4;.85;1" dur="2.6s" repeatCount="indefinite"/>
    <path class="st-ink fl-none" stroke-width="2.5" stroke-linecap="round" d="M224 114L217 101"/>
    <path class="st-ink fl-none" stroke-width="4.5" stroke-linecap="round" d="M219.500 104L215 96"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 198 113;0 198 113;-28 198 113;-28 198 113;0 198 113" keyTimes="0;.2;.4;.85;1" dur="2.6s" repeatCount="indefinite"/>
    <path class="st-line fl-none" stroke-width="7" stroke-linecap="round" d="M198 108L186 88"/>
    <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M196 115L193 108Q196 102 203 104L212 97Q217 96 216 101L202 115z"/></g>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <circle class="ring st-elec" cx="206" cy="130" r="24"/>
  <text x="160" y="30">המנוע הוא גם גנרטור</text>
  <text x="200" y="202">חשמל הופך לסיבוב</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-green" cx="246" cy="152" r="30"/>
  <text x="160" y="30">מרפים מהדוושה</text>
  <text x="188" y="202">הגלגלים מסובבים את המנוע</text>
</g>
<!-- שלב 3: מומנט נגדי וכוח בלימה -->
<g class="only-3">
  <path class="arrow st-hot blink" stroke-width="3" d="M224.500 121A20.500 20.500 0 0 0 196 112" marker-end="url(#ev-brake-h)"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-8 0;0 0" dur="1.2s" repeatCount="indefinite"/>
    <path class="arrow st-hot" stroke-width="4" d="M214 46H126" marker-end="url(#ev-brake-h)"/></g>
  <text x="170" y="32">כוח בלימה</text>
  <text x="200" y="202">המנוע מתנגד לסיבוב</text>
</g>
<!-- שלב 4: הזרם נטען לסוללה -->
<g class="only-4">
  <circle class="fl-elec st-ink" stroke-width="1" r="3.4"><animateMotion dur="1.6s" repeatCount="indefinite" path="M193 130H184V120H120V136"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.4"><animateMotion dur="1.6s" begin="-.53s" repeatCount="indefinite" path="M193 130H184V120H120V136"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.4"><animateMotion dur="1.6s" begin="-1.06s" repeatCount="indefinite" path="M193 130H184V120H120V136"/></circle>
  <text x="160" y="30">הזרם חוזר וטוען את הסוללה</text>
  <text x="92" y="202">בלמי חיכוך לעצירה חזקה</text>
</g>
`;
