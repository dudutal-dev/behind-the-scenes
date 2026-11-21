// רעידת אדמה: 1 שני לוחות נעים לאט בכיוונים מנוגדים · 2 השבר נעול והסלע מתעקם כקפיץ · 3 החלקה פתאומית ואנרגיה מהמוקד · 4 גלי P מהירים וחלשים ואחריהם גלי S מטלטלים
export default `
<defs>
  <clipPath id="quake-face"><rect x="14" y="112" width="182" height="84"/></clipPath>
  <clipPath id="quake-rec"><rect x="230" y="138" width="0" height="52"><animate attributeName="width" values="0;0;76;76;0" keyTimes="0;.05;.85;.97;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/></rect></clipPath>
  <g id="quake-bld">
    <path class="fl-soft st-ink" stroke-width="1.6" stroke-linejoin="round" d="M9 -25l6 -6v25l-6 6zM-9 -25l6 -6h18l-6 6z"/>
    <rect class="body" style="stroke-width:1.6" x="-9" y="-25" width="18" height="25"/>
    <path class="fl-cold" d="M-6 -21h4v4h-4zM2 -21h4v4h-4zM-6 -13h4v4h-4zM2 -13h4v4h-4z"/>
    <path class="fl-ink" d="M-2 0v-6h4v6z"/>
  </g>
  <g id="quake-tree">
    <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M0 0V-9"/>
    <circle class="fl-green st-ink" stroke-width="1.5" cx="0" cy="-14" r="6.500"/>
  </g>
</defs>

<!-- גוש הקרקע: פני השטח וחתך לעומק -->
<path class="body" d="M14 112L50 76H232L196 112z"/>
<path class="fl-green" fill-opacity=".3" d="M14 112L50 76H232L196 112z"/>
<rect class="fl-soft" x="14" y="112" width="182" height="16"/>
<rect class="fl-warm" fill-opacity=".38" x="14" y="128" width="182" height="32"/>
<rect class="fl-line" fill-opacity=".45" x="14" y="160" width="182" height="36"/>
<path class="thin" style="stroke-width:1" d="M14 128H196M14 160H196"/>
<rect class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" x="14" y="112" width="182" height="84"/>

<!-- מתח שנאגר סביב השבר -->
<g class="only-2"><path class="fl-hot" opacity="0" d="M91 112L127 76H155L119 112z"><animate attributeName="opacity" values="0;.5;.5" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/></path></g>
<g class="only-3"><path class="fl-hot" opacity="0" d="M91 112L127 76H155L119 112z"><animate attributeName="opacity" values=".5;.5;.8;0;0" keyTimes="0;.3;.32;.4;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></path></g>

<!-- קו השבר -->
<path class="wire st-ink" style="stroke-width:2.4" d="M141 76L105 112V196"/>
<g class="only-2"><path class="wire st-ink" style="stroke-width:1.6" d="M108 101l8 3M115 94l8 3M122 87l8 3M129 80l8 3M100 124h10M100 138h10M100 152h10M100 166h10M100 180h10"/></g>

<!-- כביש וגדר שחוצים את השבר, בית ועץ -->
<g class="only-1"><path class="wire st-ink" style="stroke-width:5;stroke-linecap:butt" d="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94"></path><path class="wire" style="stroke:var(--s-bg);stroke-width:1;stroke-dasharray:4 4;stroke-linecap:butt" d="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94"></path><path class="wire st-ink" style="stroke-width:1.2" d="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8"></path><path class="wire st-ink" style="stroke-width:5;stroke-dasharray:1.2 6;stroke-linecap:butt" d="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8"></path><use href="#quake-tree" x="83" y="83"/><use href="#quake-bld" x="171" y="83"/></g>
<g class="only-2"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.92;0.9600000000000001;.98;1" dur="6s" begin="-3s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:5;stroke-linecap:butt" d="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94"><animate attributeName="d" values="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/></path><path class="wire" style="stroke:var(--s-bg);stroke-width:1;stroke-dasharray:4 4;stroke-linecap:butt" d="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94"><animate attributeName="d" values="M35 94C77 94 108 94 123 94M123 94C138 94 169 94 211 94;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:1.2" d="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8"><animate attributeName="d" values="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:5;stroke-dasharray:1.2 6;stroke-linecap:butt" d="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8"><animate attributeName="d" values="M24.2 104.8C66.2 104.8 97.2 104.8 112.2 104.8M112.2 104.8C127.2 104.8 158.2 104.8 200.2 104.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/></path>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;5 -5;5 -5" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/><use href="#quake-tree" x="83" y="83"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-5 5;-5 5" keyTimes="0;.78;1" dur="6s" begin="-3s" repeatCount="indefinite"/><use href="#quake-bld" x="171" y="83"/></g>
</g></g>
<g class="only-3"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.92;0.9600000000000001;.98;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:5;stroke-linecap:butt" d="M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101"><animate attributeName="d" values="M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101;M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101" keyTimes="0;.3;.325;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></path><path class="wire" style="stroke:var(--s-bg);stroke-width:1;stroke-dasharray:4 4;stroke-linecap:butt" d="M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101"><animate attributeName="d" values="M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 108.8 93.2 123 94M123 94C137.2 94.8 162 101 204 101;M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101;M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101" keyTimes="0;.3;.325;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:1.2" d="M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8"><animate attributeName="d" values="M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8" keyTimes="0;.3;.325;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:5;stroke-dasharray:1.2 6;stroke-linecap:butt" d="M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8"><animate attributeName="d" values="M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 98 104 112.2 104.8M112.2 104.8C126.4 105.6 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8;M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8" keyTimes="0;.3;.325;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></path>
  <g><animateTransform attributeName="transform" type="translate" values="5 -5;5 -5;7 -7;7 -7" keyTimes="0;.3;.325;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><use href="#quake-tree" x="83" y="83"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="-5 5;-5 5;-7 7;-5.500 7;-8.500 7;-6 7;-8 7;-7 7;-7 7" keyTimes="0;.3;.325;.36;.4;.44;.48;.53;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><use href="#quake-bld" x="171" y="83"/></g>
  <g clip-path="url(#quake-face)"><circle class="fl-none st-hot" stroke-width="3" cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;130;130" keyTimes="0;0.31;0.7;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.305;0.31;0.7;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></circle><circle class="fl-none st-hot" stroke-width="3" cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;130;130" keyTimes="0;0.37;0.76;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.365;0.37;0.76;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></circle><circle class="fl-none st-hot" stroke-width="3" cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;130;130" keyTimes="0;0.43;0.82;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.425;0.43;0.82;1" dur="5s" begin="-1.6s" repeatCount="indefinite"/></circle></g>
</g></g>
<g class="from-4"><path class="wire st-ink" style="stroke-width:5;stroke-linecap:butt" d="M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101"></path><path class="wire" style="stroke:var(--s-bg);stroke-width:1;stroke-dasharray:4 4;stroke-linecap:butt" d="M42 87C84 87 115 87 130 87M116 101C131 101 162 101 204 101"></path><path class="wire st-ink" style="stroke-width:1.2" d="M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8"></path><path class="wire st-ink" style="stroke-width:5;stroke-dasharray:1.2 6;stroke-linecap:butt" d="M31.2 97.8C73.2 97.8 104.2 97.8 119.2 97.8M105.2 111.8C120.2 111.8 151.2 111.8 193.2 111.8"></path><use href="#quake-tree" x="90" y="76"/>
  <g transform="translate(164 90)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0.6;0 0.8;0 -0.2;0 -0.9;0 -0.3;0 0.8;0 0.6;0 -0.5;0 -0.9;0 0;0 0.9;0 0.4;0 -0.7;0 -0.7;0 0.3;0 0.9;0 0.1;0 -0.8;0 -0.6;0 0.5;0 0.8;0 -0.1;0 -0.9;0 -0.3;0 0.7;0 0.7;0 -0.4;0 -0.9;0 0;0 0.7;0 0.3;0 -0.4;0 -0.4;0 0.1;0 0.2;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0" dur="7s" begin="-0.6s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="rotate" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1.8;4.6;6;5.9;4.4;1.9;-0.8;-3.1;-4.5;-4.7;-3.7;-2;0.1;2;3.2;3.6;3.1;1.9;0.3;-1.2;-2.3;-2.8;-2.6;-1.7;-0.6;0.6;1.6;2.1;2.1;1.5;0.7;-0.3;-1.1;-1.6;-1.6;-1.3;-0.7;0;0.7;1.1;1.3;1.1;0.7;0.1;-0.4;-0.8;-1;-0.9;-0.6;-0.2;0.2;0.5;0.6;0.6;0.4;0.2;-0.1;-0.2;-0.2;-0.2;-0.1;-0.1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="7s" begin="-0.6s" repeatCount="indefinite"/><use href="#quake-bld"/></g></g></g>
  <!-- גלים מהמוקד: P מהיר וחלש, S איטי וחזק -->
  <g clip-path="url(#quake-face)">
    <circle class="fl-none st-cold" stroke-width="1.8" stroke-dasharray="5 3" cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;150;150" keyTimes="0;0.05;0.418;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.045000000000000005;0.05;0.318;0.418;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-none st-cold" stroke-width="1.8" stroke-dasharray="5 3" cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;150;150" keyTimes="0;0.085;0.453;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.08;0.085;0.353;0.453;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-hot" stroke-width="4"  cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;150;150" keyTimes="0;0.05;0.808;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.045000000000000005;0.05;0.708;0.808;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-none st-hot" stroke-width="4"  cx="105" cy="160" r="0"><animate attributeName="r" values="0;0;150;150" keyTimes="0;0.11;0.868;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.105;0.11;0.768;0.868;1" dur="7s" begin="-0.6s" repeatCount="indefinite"/></circle>
  </g>
</g>

<!-- כיוון התנועה של כל לוח -->
<g class="hl-1 hl-2">
  <path class="arrow st-violet dash" style="stroke-width:3;animation-duration:2.4s" d="M37 107L57 87"/>
  <path class="fl-violet" d="M63.500 80.500L60.500 91L53 83.500z"/>
  <path class="arrow st-violet dash" style="stroke-width:3;animation-duration:2.4s" d="M213 81L193 101"/>
  <path class="fl-violet" d="M186.500 107.500L189.500 97L197 104.500z"/>
  <circle class="body" style="stroke-width:1.6" cx="58" cy="144" r="7"/><path class="wire st-ink" style="stroke-width:1.6" d="M53.500 139.500l9 9M62.500 139.500l-9 9"/>
  <circle class="body" style="stroke-width:1.6" cx="152" cy="144" r="7"/><circle class="fl-ink" cx="152" cy="144" r="2.400"/>
</g>

<!-- המוקד -->
<g class="from-3">
  <path class="fl-elec st-ink" stroke-width="1.4" stroke-linejoin="round" d="M105 150l2.800 6.200 6.700-.900-4.300 5.200 3.300 5.900-6.300-2.300-4.700 4.900.500-6.800-6.200-2.800 6.500-1.800z"/>
</g>

<!-- סיסמוגרף -->
<g class="hl-4">
  <rect class="body" x="224" y="136" width="88" height="56" rx="5"/>
  <path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M230 164H306"/>
  <g clip-path="url(#quake-rec)">
    <path class="wire st-cold" style="stroke-width:1.8" d="M230 164H248l2 -4l3 8l3 -7l3 6l3 -6l3 5l2 -2"/>
    <path class="wire st-hot" style="stroke-width:2" d="M267 164l2 -16l3 30l3 -28l3 24l3 -20l3 16l3 -12l3 8l3 -4l2 2H306"/>
  </g>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="104" y="32">שני לוחות נעים</text>
  <text x="104" y="48">כמה ס״מ בשנה</text>
</g>
<g class="only-2">
  <text x="104" y="32">השבר נעול</text>
  <text x="104" y="48">הסלע מתעקם כמו קפיץ</text>
</g>
<g class="only-3">
  <text x="104" y="32">החלקה בבת אחת</text>
  <text x="104" y="48">האנרגיה יוצאת מהמוקד</text>
</g>
<g class="only-4">
  <text x="104" y="32">קודם גל מהיר וחלש</text>
  <text x="104" y="48">ואחריו הגל המטלטל</text>
  <path class="wire st-ink" style="stroke-width:1.4" d="M248 131v-4H267v4"/>
  <text x="264" y="120">חלון ההתרעה</text>
</g>
`;
