// בלמים ו-ABS: 1 הדוושה דוחפת בוכנה והנוזל מעביר לחץ · 2 צבת מהדקת רפידות על הדיסק · 3 גלגל נעול מחליק · 4 חיישן ויחידת ABS מפעימים את הלחץ
export default `
<defs>
  <clipPath id="abs-lens"><circle cx="158" cy="56" r="35"/></clipPath>
</defs>
<!-- כביש שנע מתחת לרכב -->
<path class="thin" d="M150 168H314"/>
<path class="st-line fl-none" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="12 18" d="M314 177H150"><animate attributeName="stroke-dashoffset" from="0" to="-30" dur=".5s" repeatCount="indefinite"/></path>

<!-- משאבת הבלם הראשית ומכל הנוזל -->
<g class="hl-1 hl-4" transform="translate(12 0)">
  <rect class="fl-ink" x="18" y="9" width="8" height="6" rx="1"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="66" y="18" width="10" height="5" rx="1"/>
  <rect class="body" x="60" y="22" width="22" height="17" rx="2"/>
  <rect class="fl-warm" x="62" y="29" width="18" height="9" opacity=".8"/>
  <rect class="body" x="42" y="38" width="56" height="16" rx="3"/>
  <rect class="fl-warm" x="52" y="41" width="44" height="10" opacity=".8"/>
  <g class="only-1"><g><animateTransform attributeName="transform" type="translate" values="0 0;4.5 0;4.5 0;0 0;0 0" keyTimes="0;.2;.72;.86;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M18 46H47"/><rect class="fl-dark st-ink" stroke-width="1.2" x="46" y="40" width="6" height="12" rx="1"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 22 18;-9 22 18;-9 22 18;0 22 18;0 22 18" keyTimes="0;.2;.72;.86;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="4" stroke-linecap="round" d="M22 18L12.5 90"/><path class="st-dark fl-none" stroke-width="6" stroke-linecap="round" d="M14.5 76L12.5 93"/><path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-9 101L8 99.5Q11.5 99 11 94.5Q9 89.5 4 87.5L-1 84.5V74H-8.5L-9.5 90Z"/><path class="thin st-ink" style="stroke-width:1.2" d="M-9 97.5L10 95.5"/><circle class="fl-panel st-ink" stroke-width="1.2" cx="18.2" cy="46" r="2.2"/></g></g>
  <g class="hl-2 hl-3"><g class="hl-2 hl-3"><g class="hl-2 hl-3"><g class="hl-2 hl-3"><g transform="translate(4.5 0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M18 46H47"/><rect class="fl-dark st-ink" stroke-width="1.2" x="46" y="40" width="6" height="12" rx="1"/></g>
  <g transform="rotate(-9 22 18)"><path class="st-ink fl-none" stroke-width="4" stroke-linecap="round" d="M22 18L12.5 90"/><path class="st-dark fl-none" stroke-width="6" stroke-linecap="round" d="M14.5 76L12.5 93"/><path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-9 101L8 99.5Q11.5 99 11 94.5Q9 89.5 4 87.5L-1 84.5V74H-8.5L-9.5 90Z"/><path class="thin st-ink" style="stroke-width:1.2" d="M-9 97.5L10 95.5"/><circle class="fl-panel st-ink" stroke-width="1.2" cx="18.2" cy="46" r="2.2"/></g></g></g></g></g>
  <g class="only-4"><g class="shake"><g transform="translate(4.5 0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M18 46H47"/><rect class="fl-dark st-ink" stroke-width="1.2" x="46" y="40" width="6" height="12" rx="1"/></g>
  <g transform="rotate(-9 22 18)"><path class="st-ink fl-none" stroke-width="4" stroke-linecap="round" d="M22 18L12.5 90"/><path class="st-dark fl-none" stroke-width="6" stroke-linecap="round" d="M14.5 76L12.5 93"/><path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-9 101L8 99.5Q11.5 99 11 94.5Q9 89.5 4 87.5L-1 84.5V74H-8.5L-9.5 90Z"/><path class="thin st-ink" style="stroke-width:1.2" d="M-9 97.5L10 95.5"/><circle class="fl-panel st-ink" stroke-width="1.2" cx="18.2" cy="46" r="2.2"/></g></g></g>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="22" cy="18" r="3"/>
</g>

<!-- יחידת ABS -->
<g class="hl-4" transform="translate(4 0)">
  <rect class="body" x="96" y="110" width="46" height="34" rx="4"/>
  <rect class="fl-dark st-ink" stroke-width="1" x="125" y="133" width="13" height="8" rx="1"/>
  <path class="thin st-ink" style="stroke-width:1" d="M127 133v-2.5M131.5 133v-2.5M136 133v-2.5"/>
</g>
<!-- צינור הנוזל: מהמשאבה, דרך יחידת ה-ABS, אל הצבת -->
<g class="hl-1 hl-2 hl-4">
  <path class="pipe st-warm" style="stroke-width:4" d="M110 46H118V125H132.5V70"/>
</g>
<g class="hl-4" transform="translate(4 0)">
  <rect class="fl-dark st-ink" stroke-width="1.2" x="114.5" y="119.5" width="9" height="11" rx="1.5"/>
</g>

<!-- מבט מוגדל על הצבת: דיסק בחתך, רפידה מכל צד ובוכנה -->
<g class="hl-2 hl-3 hl-4" transform="translate(4 0)">
  <path class="thin st-ink" style="stroke-width:1.2" d="M185 79L213 110"/>
  <circle class="fl-panel" cx="158" cy="56" r="35"/>
  <g clip-path="url(#abs-lens)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="155" y="14" width="6" height="84"/>
    <g class="hl-1 hl-2 hl-4"><g class="hl-1 hl-2 hl-4"><g class="hl-1 hl-2 hl-4"><g class="hl-1 hl-2 hl-4"><path class="st-ink fl-none dash" stroke-width="2.5" d="M158 16V96"/></g></g></g></g>
    <g class="only-3"><path class="st-ink fl-none" stroke-width="2.5" stroke-dasharray="5 6" d="M158 16V96"/></g>
    <g class="only-2"><rect class="fl-hot fade" x="155" y="36" width="6" height="40"/></g>
    <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M126 30H178V78H170.5V37H148V44H131V68H148V78H126Z"/>
    <g class="only-1"><rect class="fl-warm" x="131" y="44" width="2" height="24"><animate attributeName="width" values="2;4.5;4.5;2;2" keyTimes="0;.2;.72;.86;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/></rect>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;2.5 0;2.5 0;0 0;0 0" keyTimes="0;.2;.72;.86;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/><rect class="fl-panel st-ink" stroke-width="1.5" x="133" y="46" width="12.5" height="20" rx="1.5"/><rect class="fl-dark" x="145.5" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="148" y="40" width="4.5" height="32"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;-2.5 0;-2.5 0;0 0;0 0" keyTimes="0;.2;.72;.86;1" calcMode="spline" keySplines=".4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/><rect class="fl-dark" x="168" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="163.5" y="40" width="4.5" height="32"/></g></g>
    <g class="hl-2 hl-3"><g class="hl-2 hl-3"><g class="hl-2 hl-3"><g class="hl-2 hl-3"><rect class="fl-warm" x="131" y="44" width="4.5" height="24"></rect>
    <g transform="translate(2.5 0)"><rect class="fl-panel st-ink" stroke-width="1.5" x="133" y="46" width="12.5" height="20" rx="1.5"/><rect class="fl-dark" x="145.5" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="148" y="40" width="4.5" height="32"/></g>
    <g transform="translate(-2.5 0)"><rect class="fl-dark" x="168" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="163.5" y="40" width="4.5" height="32"/></g></g></g></g></g>
    <g class="only-4"><rect class="fl-warm" x="131" y="44" width="2" height="24"><animate attributeName="width" values="4.5;2.6;4.5" dur=".28s" repeatCount="indefinite"/></rect>
    <g><animateTransform attributeName="transform" type="translate" values="2.5 0;.6 0;2.5 0" dur=".28s" repeatCount="indefinite"/><rect class="fl-panel st-ink" stroke-width="1.5" x="133" y="46" width="12.5" height="20" rx="1.5"/><rect class="fl-dark" x="145.5" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="148" y="40" width="4.5" height="32"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="-2.5 0;-.6 0;-2.5 0" dur=".28s" repeatCount="indefinite"/><rect class="fl-dark" x="168" y="39" width="2.5" height="34"/><rect class="fl-warm st-ink" stroke-width="1" x="163.5" y="40" width="4.5" height="32"/></g></g>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="158" cy="56" r="35"/>
</g>
<g class="hl-1 hl-2 hl-4"><path class="pipe st-warm" style="stroke-width:4" d="M132.5 92V70"/></g>
<g class="only-1"><path class="flow" d="M110 46H118V125H132.5V70"/></g>
<g class="only-4"><path class="pipe st-hot" style="stroke-width:4" d="M132.5 110V70"><animate attributeName="opacity" values="1;0;1" dur=".28s" repeatCount="indefinite"/></path>
  <rect class="fl-hot" x="120.5" y="121.5" width="5" height="7" rx="1"><animate attributeName="opacity" values="1;0;1" dur=".28s" repeatCount="indefinite"/></rect></g>

<!-- הגלגל: צמיג, דיסק, צבת וחיישן מהירות -->
<g class="hl-2 hl-3 hl-4">
  <circle class="fl-dark st-ink" stroke-width="2" cx="250" cy="120" r="48"/>
  <circle class="fl-bg st-ink" stroke-width="1.5" cx="250" cy="120" r="35"/>
  <circle class="fl-soft st-ink" stroke-width="1.5" cx="250" cy="120" r="30"/>
  <g class="only-2"><circle class="fl-none st-hot fade" stroke-width="13" stroke-opacity=".7" cx="250" cy="120" r="22.5"/></g>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="250" cy="120" r="9.5"/>
  <g class="hl-1 hl-2"><g class="hl-1 hl-2"><g class="hl-1 hl-2"><g class="hl-1 hl-2"><g><animateTransform attributeName="transform" type="rotate" from="0 250 120" to="360 250 120" dur="5s" repeatCount="indefinite"/><path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" d="M291 120L296 120M288.53 134.02L293.23 135.73M281.41 146.35L285.24 149.57M270.5 155.51L273 159.84M257.12 160.38L257.99 165.3M242.88 160.38L242.01 165.3M229.5 155.51L227 159.84M218.59 146.35L214.76 149.57M211.47 134.02L206.77 135.73M209 120L204 120M211.47 105.98L206.77 104.27M218.59 93.65L214.76 90.43M229.5 84.49L227 80.16M242.88 79.62L242.01 74.7M257.12 79.62L257.99 74.7M270.5 84.49L273 80.16M281.41 93.65L285.24 90.43M288.53 105.98L293.23 104.27"/><circle class="fl-elec" cx="250" cy="81.5" r="2.4"/><circle class="fl-bg st-line" stroke-width="1" cx="272.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="142.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="227.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="104.09" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="97.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="104.09" r="2.6"/><path class="st-ink fl-none" stroke-width="1.2" d="M250 109L250 91"/><circle class="fl-none st-ink" stroke-width="3" stroke-dasharray="2 2.19" cx="250" cy="120" r="12"/><circle class="fl-ink" cx="255.5" cy="120" r="1.4"/><circle class="fl-ink" cx="251.7" cy="125.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="123.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="116.77" r="1.4"/><circle class="fl-ink" cx="251.7" cy="114.77" r="1.4"/></g></g></g></g></g>
  <g class="only-3"><g><path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" d="M291 120L296 120M288.53 134.02L293.23 135.73M281.41 146.35L285.24 149.57M270.5 155.51L273 159.84M257.12 160.38L257.99 165.3M242.88 160.38L242.01 165.3M229.5 155.51L227 159.84M218.59 146.35L214.76 149.57M211.47 134.02L206.77 135.73M209 120L204 120M211.47 105.98L206.77 104.27M218.59 93.65L214.76 90.43M229.5 84.49L227 80.16M242.88 79.62L242.01 74.7M257.12 79.62L257.99 74.7M270.5 84.49L273 80.16M281.41 93.65L285.24 90.43M288.53 105.98L293.23 104.27"/><circle class="fl-elec" cx="250" cy="81.5" r="2.4"/><circle class="fl-bg st-line" stroke-width="1" cx="272.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="142.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="227.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="104.09" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="97.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="104.09" r="2.6"/><path class="st-ink fl-none" stroke-width="1.2" d="M250 109L250 91"/><circle class="fl-none st-ink" stroke-width="3" stroke-dasharray="2 2.19" cx="250" cy="120" r="12"/><circle class="fl-ink" cx="255.5" cy="120" r="1.4"/><circle class="fl-ink" cx="251.7" cy="125.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="123.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="116.77" r="1.4"/><circle class="fl-ink" cx="251.7" cy="114.77" r="1.4"/></g></g>
  <g class="only-4"><g><animateTransform attributeName="transform" type="rotate" values="0 250 120;19 250 120;24 250 120;43 250 120;48 250 120;67 250 120;72 250 120;91 250 120;96 250 120;115 250 120;120 250 120;139 250 120;144 250 120;163 250 120;168 250 120;187 250 120;192 250 120;211 250 120;216 250 120;235 250 120;240 250 120;259 250 120;264 250 120;283 250 120;288 250 120;307 250 120;312 250 120;331 250 120;336 250 120;355 250 120;360 250 120" keyTimes="0;0.03;0.07;0.1;0.13;0.17;0.2;0.23;0.27;0.3;0.33;0.37;0.4;0.43;0.47;0.5;0.53;0.57;0.6;0.63;0.67;0.7;0.73;0.77;0.8;0.83;0.87;0.9;0.93;0.97;1" dur="4.2s" repeatCount="indefinite"/><path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" d="M291 120L296 120M288.53 134.02L293.23 135.73M281.41 146.35L285.24 149.57M270.5 155.51L273 159.84M257.12 160.38L257.99 165.3M242.88 160.38L242.01 165.3M229.5 155.51L227 159.84M218.59 146.35L214.76 149.57M211.47 134.02L206.77 135.73M209 120L204 120M211.47 105.98L206.77 104.27M218.59 93.65L214.76 90.43M229.5 84.49L227 80.16M242.88 79.62L242.01 74.7M257.12 79.62L257.99 74.7M270.5 84.49L273 80.16M281.41 93.65L285.24 90.43M288.53 105.98L293.23 104.27"/><circle class="fl-elec" cx="250" cy="81.5" r="2.4"/><circle class="fl-bg st-line" stroke-width="1" cx="272.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="142.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="135.91" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="227.5" cy="120" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="234.09" cy="104.09" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="250" cy="97.5" r="2.6"/><circle class="fl-bg st-line" stroke-width="1" cx="265.91" cy="104.09" r="2.6"/><path class="st-ink fl-none" stroke-width="1.2" d="M250 109L250 91"/><circle class="fl-none st-ink" stroke-width="3" stroke-dasharray="2 2.19" cx="250" cy="120" r="12"/><circle class="fl-ink" cx="255.5" cy="120" r="1.4"/><circle class="fl-ink" cx="251.7" cy="125.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="123.23" r="1.4"/><circle class="fl-ink" cx="245.55" cy="116.77" r="1.4"/><circle class="fl-ink" cx="251.7" cy="114.77" r="1.4"/></g></g>
  <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M218.52 131.46A33.5 33.5 0 0 1 222.23 101.27L237.56 111.61A15 15 0 0 0 235.9 125.13Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M231.14 117.68L220.22 116.34"/>
</g>
<g class="hl-4">
  <path class="wire st-violet dash" style="stroke-width:2" d="M238.73 141.19L224 142.5H146"/>
  <rect class="fl-violet st-ink" stroke-width="1.2" x="-5.5" y="-3.2" width="11" height="6.4" rx="1.5" transform="translate(240.85 137.22) rotate(118)"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="160" y="194">הדוושה דוחפת בוכנה קטנה</text>
  <text x="160" y="208">והנוזל מעביר את הלחץ לגלגל</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <path class="thin st-hot" style="stroke-width:2" d="M240 66q-4-6 0-12t0-12M252 62q-4-6 0-12t0-12M264 66q-4-6 0-12t0-12"><animate attributeName="opacity" values=".15;1;.15" dur="1.6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -4" dur="1.6s" repeatCount="indefinite"/></path>
  <text x="160" y="194">הצבת מהדקת רפידות על הדיסק</text>
  <text x="160" y="208">והחיכוך הופך תנועה לחום</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <path class="st-ink fl-none" stroke-width="4" stroke-linecap="round" d="M154 172.5H244"/>
  <g class="fl-line">
    <circle r="3" opacity="0"><animateMotion dur="1.4s" repeatCount="indefinite" path="M238 164L196 150"/><animate attributeName="r" values="2;7" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.4s" repeatCount="indefinite"/></circle>
    <circle r="3" opacity="0"><animateMotion dur="1.4s" begin="-.5s" repeatCount="indefinite" path="M240 165L204 158"/><animate attributeName="r" values="2;6" dur="1.4s" begin="-.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.4s" begin="-.5s" repeatCount="indefinite"/></circle>
    <circle r="3" opacity="0"><animateMotion dur="1.4s" begin="-.95s" repeatCount="indefinite" path="M236 163L186 156"/><animate attributeName="r" values="2;7" dur="1.4s" begin="-.95s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.4s" begin="-.95s" repeatCount="indefinite"/></circle>
  </g>
  <text x="160" y="194">הגלגל ננעל והצמיג מחליק</text>
  <text x="160" y="208">פחות אחיזה ואי אפשר לנווט</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="160" y="194">חיישן מודד את סיבוב הגלגל</text>
  <text x="160" y="208">והיחידה משחררת ולוחצת 15 פעמים בשנייה</text>
</g>
`;
