// מפסק פחת: 1 הזרם יוצא בפאזה וחוזר כולו באפס · 2 שני החוטים עוברים בטבעת ברזל והשדות מתבטלים · 3 דליפה דרך אדם: חוזר פחות זרם ונשאר שדה · 4 סליל החישה משחרר קפיץ והמגעים נפתחים
export default `
<!-- גוף המפסק -->
<rect class="fl-panel st-line" stroke-width="1.5" x="40" y="20" width="120" height="130" rx="8"/>
<path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M58 26H70"/>

<!-- מכשיר חשמלי עם גוף מתכת, על משטח -->
<path class="thin" d="M196 186H316"/>
<path class="thin st-ink" d="M198 111H254M204 111V186M248 111V186"/>
<rect class="body" x="204" y="44" width="44" height="64" rx="6"/>
<rect class="fl-dark st-ink" stroke-width="1.5" x="210" y="51" width="32" height="34" rx="3"/>
<g class="only-1 only-2 only-3"><g class="fade"><path class="wire st-hot" style="stroke-width:2.6" d="M215 59H237M215 68H237M215 77H237"/></g></g>
<g class="from-4"><path class="wire st-hot" style="stroke-width:2.6" d="M215 59H237M215 68H237M215 77H237"><animate attributeName="opacity" values="1;1;.12;.12;1" keyTimes="0;.39;.5;.97;1" dur="5s" repeatCount="indefinite"/></path></g>
<circle class="fl-line st-ink" stroke-width="1.2" cx="216" cy="97" r="3.5"/><circle class="fl-line st-ink" stroke-width="1.2" cx="236" cy="97" r="3.5"/>
<path class="st-ink fl-none" stroke-width="3" stroke-linecap="round" d="M211 110H217M235 110H241"/>

<!-- אדם שנוגע במכשיר ועומד על הרצפה -->
<g class="from-3">
  <circle class="fl-ink" cx="276" cy="91" r="8"/>
  <path class="st-ink fl-none" stroke-width="10" stroke-linecap="round" d="M276 108V142"/>
  <path class="st-ink fl-none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M276 106L251 97M277 106L289 132M274 144L269 183M278 144L283 183"/>
  <path class="thin st-ink" d="M266 191H294M270 195H290M275 199H285"/>
</g>

<!-- טבעת הברזל: החצי האחורי -->
<g class="hl-2 hl-3 hl-4"><path class="st-dark fl-none" stroke-width="12" d="M128 38A15 38 0 0 1 128 114"/><path class="st-ink fl-none" stroke-width="1.5" d="M128 32A21 44 0 0 1 128 120"/><path class="st-ink fl-none" stroke-width="1.5" d="M128 44A9 32 0 0 1 128 108"/></g>
<g class="only-2"><path class="wire st-hot dash" style="stroke-width:2.4" d="M128 41A12 35 0 0 1 128 111"/><path class="wire st-cold dash rev" style="stroke-width:2.4" d="M128 35A18 41 0 0 1 128 117"/></g>
<g class="only-3"><path class="wire st-elec dash" style="stroke-width:3" d="M128 38A15 38 0 0 1 128 114"/></g>
<g class="from-4"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.39;.42;.97;1" dur="5s" repeatCount="indefinite"/><path class="wire st-elec dash" style="stroke-width:3" d="M128 38A15 38 0 0 1 128 114"/></g></g>

<!-- פאזה (יוצא) ואפס (חוזר) -->
<path class="pipe st-hot" style="stroke-width:5" d="M6 64H52M78 64H201"/>
<path class="pipe st-cold" style="stroke-width:5" d="M6 88H52M78 88H201"/>
<circle class="fl-ink" cx="78" cy="64" r="2.6"/><circle class="fl-ink" cx="78" cy="88" r="2.6"/>

<!-- מגעים סגורים (שלבים 1-3) -->
<g class="only-1 only-2 only-3">
  <g style="opacity:.4"><path class="st-dark fl-none" stroke-width="3.5" stroke-linecap="round" d="M64 47V134"/><path class="st-dark fl-none" stroke-width="3.5" stroke-linecap="round" d="M60 134H68"/><circle class="fl-ink" cx="64" cy="64" r="2"/><circle class="fl-ink" cx="64" cy="88" r="2"/><g transform="translate(64 26)"><g><path class="st-ink fl-none" stroke-width="1.5" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M0 0L4 2L-4 5L4 8L-4 11L4 14L-4 17L4 20L0 22"/></g></g><path class="st-ink fl-none" stroke-width="3" stroke-linecap="round" d="M84 130H69"/></g>
  <path class="pipe st-hot" style="stroke-width:5" d="M52 64H76"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="52" cy="64" r="3.2"/><path class="pipe st-cold" style="stroke-width:5" d="M52 88H76"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="52" cy="88" r="3.2"/>
</g>
<g class="only-1 only-2"><path class="flow" d="M6 64H204"/><path class="flow" d="M204 88H6"/><g fill="#fff" class="st-ink" stroke-width=".9"><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.60s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.20s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.80s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.60s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.20s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.80s" repeatCount="indefinite" path="M204 88H6"/></circle></g></g>
<g class="only-3"><path class="flow" d="M6 64H204"/><path class="flow" d="M204 88H6"/><g fill="#fff" class="st-ink" stroke-width=".9"><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.60s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.20s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.80s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.80s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.60s" repeatCount="indefinite" path="M204 88H6"/></circle></g>
    <path class="wire st-elec dash" style="stroke-width:3" d="M249 97L276 108V146L280 184"/><g class="fl-elec st-ink" stroke-width=".9"><circle r="2.7"><animateMotion dur="1.2s" begin="-0.00s" repeatCount="indefinite" path="M249 97L276 108V146L280 184"/></circle><circle r="2.7"><animateMotion dur="1.2s" begin="-0.60s" repeatCount="indefinite" path="M249 97L276 108V146L280 184"/></circle></g>
    <g class="blink"><path class="fl-elec st-ink" stroke-width="1" stroke-linejoin="round" d="M243 84l-5 8h4l-2 7 6-9h-4l2-6z"/></g></g>

<!-- שלב 4 והמבט הכולל: דליפה, שחרור הקפיץ, המגעים נפתחים -->
<g class="from-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -6;0 -6;0 0;0 0" keyTimes="0;.36;.39;.92;.96;1" dur="5s" repeatCount="indefinite"/><path class="st-dark fl-none" stroke-width="3.5" stroke-linecap="round" d="M64 47V134"/><path class="st-dark fl-none" stroke-width="3.5" stroke-linecap="round" d="M60 134H68"/><circle class="fl-ink" cx="64" cy="64" r="2"/><circle class="fl-ink" cx="64" cy="88" r="2"/></g>
  <g transform="translate(64 26)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1 1;1 .73;1 .73;1 1;1 1" keyTimes="0;.36;.39;.92;.96;1" dur="5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.5" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M0 0L4 2L-4 5L4 8L-4 11L4 14L-4 17L4 20L0 22"/></g></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;7 0;7 0;0 0;0 0" keyTimes="0;.33;.36;.92;.96;1" dur="5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="3" stroke-linecap="round" d="M84 130H69"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 52 64;0 52 64;-30 52 64;-30 52 64;0 52 64;0 52 64" keyTimes="0;.36;.39;.92;.96;1" dur="5s" repeatCount="indefinite"/><path class="pipe st-hot" style="stroke-width:5" d="M52 64H76"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="52" cy="64" r="3.2"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 52 88;0 52 88;-30 52 88;-30 52 88;0 52 88;0 52 88" keyTimes="0;.36;.39;.92;.96;1" dur="5s" repeatCount="indefinite"/><path class="pipe st-cold" style="stroke-width:5" d="M52 88H76"/><circle class="fl-panel st-ink" stroke-width="1.5" cx="52" cy="88" r="3.2"/></g>
  <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.385;.4;.97;1" dur="5s" repeatCount="indefinite"/><path class="flow" d="M6 64H204"/><path class="flow" d="M204 88H6"/><g fill="#fff" class="st-ink" stroke-width=".9"><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.60s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.20s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.80s" repeatCount="indefinite" path="M6 64H204"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.00s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-0.80s" repeatCount="indefinite" path="M204 88H6"/></circle><circle r="2.7"><animateMotion dur="2.4s" begin="-1.60s" repeatCount="indefinite" path="M204 88H6"/></circle></g>
    <path class="wire st-elec dash" style="stroke-width:3" d="M249 97L276 108V146L280 184"/><g class="fl-elec st-ink" stroke-width=".9"><circle r="2.7"><animateMotion dur="1.2s" begin="-0.00s" repeatCount="indefinite" path="M249 97L276 108V146L280 184"/></circle><circle r="2.7"><animateMotion dur="1.2s" begin="-0.60s" repeatCount="indefinite" path="M249 97L276 108V146L280 184"/></circle></g>
    <g class="blink"><path class="fl-elec st-ink" stroke-width="1" stroke-linejoin="round" d="M243 84l-5 8h4l-2 7 6-9h-4l2-6z"/></g></g>
  <path class="st-elec fl-none" stroke-width="1.8" stroke-linecap="round" opacity="0" d="M80 59l4-5M82 63l6-2M80 83l4-5M82 87l6-2"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.38;.4;.5;1" dur="5s" repeatCount="indefinite"/></path>
</g>

<!-- טבעת הברזל: החצי הקדמי -->
<g class="hl-2 hl-3 hl-4"><path class="st-dark fl-none" stroke-width="12" d="M128 114A15 38 0 0 1 128 38"/><path class="st-ink fl-none" stroke-width="1.5" d="M128 120A21 44 0 0 1 128 32"/><path class="st-ink fl-none" stroke-width="1.5" d="M128 108A9 32 0 0 1 128 44"/></g>
<g class="only-2"><path class="wire st-hot dash" style="stroke-width:2.4" d="M128 111A12 35 0 0 1 128 41"/><path class="wire st-cold dash rev" style="stroke-width:2.4" d="M128 117A18 41 0 0 1 128 35"/></g>
<g class="only-3"><path class="wire st-elec dash" style="stroke-width:3" d="M128 114A15 38 0 0 1 128 38"/><circle class="ring st-elec" cx="128" cy="76" r="52"/></g>
<g class="from-4"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.39;.42;.97;1" dur="5s" repeatCount="indefinite"/><path class="wire st-elec dash" style="stroke-width:3" d="M128 114A15 38 0 0 1 128 38"/></g></g>

<!-- סליל החישה ויחידת הניתוק -->
<g class="hl-4">
  <path class="wire st-warm" style="stroke-width:2.6" d="M117 105.5L115 119M122.5 107.5L121.5 121M128 108V121.5M133.5 107.5L134.5 121M139 105.5L141 119"/>
  <path class="wire st-warm" style="stroke-width:2" d="M115 119V128M141 119V128"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="84" y="122" width="62" height="20" rx="3"/>
  <path fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.3" d="M92 128v8M96 128v8M100 128v8M104 128v8M108 128v8"/>
</g>
<g class="from-4">
  <rect class="fl-elec" x="84" y="122" width="62" height="20" rx="3" opacity="0"><animate attributeName="opacity" values="0;0;.9;0;0" keyTimes="0;.3;.34;.44;1" dur="5s" repeatCount="indefinite"/></rect>
  <g class="fl-elec st-ink" stroke-width=".8" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.22;.24;.33;.35;1" dur="5s" repeatCount="indefinite"/>
    <circle r="2.4"><animateMotion dur=".5s" repeatCount="indefinite" path="M115 112V128"/></circle>
    <circle r="2.4"><animateMotion dur=".5s" begin="-.25s" repeatCount="indefinite" path="M141 112V128"/></circle>
  </g>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text class="sm" x="22" y="54">פאזה</text>
  <text class="sm" x="22" y="103">אפס</text>
  <text class="sm" x="182" y="55" style="direction:ltr;unicode-bidi:isolate">10 A</text>
  <text class="sm" x="182" y="103" style="direction:ltr;unicode-bidi:isolate">10 A</text>
  <text x="100" y="172">כל הזרם שיוצא בפאזה</text>
  <text x="100" y="188">חוזר באפס</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="100" y="172">שני שדות מנוגדים בטבעת</text>
  <text x="100" y="188">מבטלים זה את זה</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text class="sm" x="182" y="55" style="direction:ltr;unicode-bidi:isolate">10 A</text>
  <text class="sm" x="182" y="103" style="direction:ltr;unicode-bidi:isolate">9.97 A</text>
  <text class="sm" x="300" y="164" style="direction:ltr;unicode-bidi:isolate">0.03 A</text>
  <text x="100" y="172">חלק מהזרם בורח דרך הגוף</text>
  <text x="100" y="188">ובטבעת נשאר שדה</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="100" y="172">סליל החישה משחרר קפיץ</text>
  <text x="100" y="188">והמגעים נפתחים מיד</text>
  <text class="sm" x="100" y="203">די ב־30 אלפיות אמפר</text>
</g>
`;
