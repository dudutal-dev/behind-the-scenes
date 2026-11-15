// החומה הסינית: 1 חומות מתקופות שונות על הרכסים · 2 אדמה דחוסה בשכבות בין דפנות עץ · 3 חתך של חומת מינג: יסוד אבן, דפנות לבנים, מילוי, וטיט סיד עם אורז · 4 מגדל אותות שמעביר עשן ואש הלאה
export default `
<defs>
  <clipPath id="greatwall-lens"><circle cx="160" cy="62" r="22"/></clipPath>
</defs>
<!-- רכסים עם חומות מתקופות שונות -->
<g class="hl-1"><path class="fl-soft st-line" stroke-width="1.2" stroke-linejoin="round" d="M0 76L20 62L44 50L66 58L92 44L118 54L146 42L170 52L196 46L222 58L248 48L276 56L300 46L320 52V76Z"/><path class="st-warm fl-none" stroke-width="2.4" stroke-linejoin="round" d="M8 70L30 58L46 54L66 62L92 50L118 60L146 48L170 58L190 54"><animate attributeName="opacity" values=".25;1;1;.25;.25" keyTimes="0;.12;.3;.42;1" dur="4.5s" begin="-4.5s" repeatCount="indefinite"/></path><path class="st-violet fl-none" stroke-width="2.4" stroke-linejoin="round" d="M60 74L84 64L110 68L136 60L162 66L190 60L222 66L250 58L276 64L312 56"><animate attributeName="opacity" values=".25;1;1;.25;.25" keyTimes="0;.12;.3;.42;1" dur="4.5s" begin="-3s" repeatCount="indefinite"/></path><path class="st-ink fl-none" stroke-width="2.4" stroke-linejoin="round" d="M14 64L44 52L66 58L92 46L118 56L146 44L170 54L196 48L222 60L248 50L276 58L300 48"><animate attributeName="opacity" values=".25;1;1;.25;.25" keyTimes="0;.12;.3;.42;1" dur="4.5s" begin="-1.5s" repeatCount="indefinite"/></path>
  <g class="fl-ink"><rect x="88" y="41" width="6" height="6"/><rect x="142" y="39" width="6" height="6"/><rect x="194" y="43" width="6" height="6"/></g>
</g>
<!-- קרקע -->
<rect class="fl-soft" x="0" y="200" width="320" height="20"/>
<path class="thin" d="M0 200H320"/>

<!-- 2 אדמה דחוסה: שתי דפנות עץ, שכבות דקות, מכוש שמהדק -->
<g class="hl-2">
  <rect class="fl-warm" fill-opacity="0.32" x="24" y="192" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.5" x="24" y="184" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.32" x="24" y="176" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.5" x="24" y="168" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.32" x="24" y="160" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.5" x="24" y="152" width="60" height="8"/><rect class="fl-warm" fill-opacity="0.32" x="24" y="144" width="60" height="8"/><path class="st-green fl-none" stroke-width="1.6" stroke-dasharray="4 2" d="M25 176H83M25 160H83"/><path class="thin st-ink" style="stroke-width:.7" stroke-opacity=".45" d="M24 192H84M24 184H84M24 168H84M24 152H84"/>
  <rect class="fl-warm" fill-opacity=".18" x="24" y="138" width="60" height="6"/>
  <path class="thin" style="stroke-width:1" stroke-dasharray="2 3" d="M24 138H84"/>
  <rect class="fl-warm st-ink" stroke-width="1.6" x="17" y="122" width="7" height="78"/>
  <rect class="fl-warm st-ink" stroke-width="1.6" x="84" y="122" width="7" height="78"/>
  <path class="thin st-ink" style="stroke-width:1" d="M17 140h7M17 162h7M17 184h7M84 140h7M84 162h7M84 184h7"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 -16;0 0;0 -16" keyTimes="0;.3;1" calcMode="spline" keySplines=".6 0 1 1;0 0 .4 1" dur=".9s" repeatCount="indefinite"/>
    <path class="st-warm fl-none" stroke-width="3" stroke-linecap="round" d="M54 132V96M46 100H62"/>
    <rect class="fl-dark st-ink" stroke-width="1.4" x="47" y="130" width="14" height="7" rx="1.5"/>
  </g>
  <path class="st-line fl-none" stroke-width="1.2" stroke-linecap="round" d="M43 138l-5-3M65 138l5-3"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.28;.33;.6;1" dur=".9s" repeatCount="indefinite"/></path>
</g>

<!-- 3 חתך של חומת מינג -->
<g class="hl-3">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M112 186L120 112H210L218 186Z"/>
  <path class="fl-warm" fill-opacity=".3" d="M123 186L131 112H199L207 186Z"/>
  <circle class="fl-line" cx="175.2" cy="116" r="2.2"/><circle class="fl-line" cx="176.3" cy="135.4" r="1.2"/><circle class="fl-line" cx="157.8" cy="131.5" r="1.6"/><circle class="fl-line" cx="196.1" cy="160.4" r="2"/><circle class="fl-line" cx="143.1" cy="126.2" r="1.4"/><circle class="fl-line" cx="154.3" cy="158.8" r="1.1"/><circle class="fl-line" cx="152.1" cy="176.5" r="1.1"/><circle class="fl-line" cx="196.6" cy="144.6" r="2"/><circle class="fl-line" cx="174.2" cy="131.2" r="1.7"/><circle class="fl-line" cx="136.1" cy="133.8" r="1.8"/><circle class="fl-line" cx="187.6" cy="152.4" r="1.5"/><circle class="fl-line" cx="177.3" cy="131.7" r="2"/><circle class="fl-line" cx="184" cy="126.8" r="2.5"/><circle class="fl-line" cx="144.7" cy="170.6" r="2.5"/><circle class="fl-line" cx="184.6" cy="156.5" r="1.4"/><circle class="fl-line" cx="141.1" cy="140" r="1.7"/><circle class="fl-line" cx="142.7" cy="140" r="2.3"/><circle class="fl-line" cx="143.1" cy="141.7" r="1.6"/><circle class="fl-line" cx="190.3" cy="168.6" r="1.7"/><circle class="fl-line" cx="168.3" cy="148.2" r="1.5"/><circle class="fl-line" cx="166.6" cy="150.5" r="1.9"/><circle class="fl-line" cx="196.8" cy="155.3" r="1.8"/><circle class="fl-line" cx="161.8" cy="137.8" r="2.2"/><circle class="fl-line" cx="165.2" cy="140.3" r="2.5"/><circle class="fl-line" cx="169.9" cy="141.4" r="2"/><circle class="fl-line" cx="179.2" cy="137.3" r="1.4"/><circle class="fl-line" cx="191.8" cy="169.3" r="1.2"/><circle class="fl-line" cx="134" cy="157.4" r="1.7"/><circle class="fl-line" cx="140.4" cy="138.5" r="2.1"/><circle class="fl-line" cx="201.7" cy="157.4" r="1.7"/><circle class="fl-line" cx="167.1" cy="127" r="2.2"/><circle class="fl-line" cx="198.2" cy="153.4" r="1.4"/><circle class="fl-line" cx="145.8" cy="120" r="1.6"/><circle class="fl-line" cx="177.3" cy="121.1" r="1.5"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M123 186L131 112M207 186L199 112"/>
  <path class="st-hot fl-none" stroke-width=".9" stroke-opacity=".75" d="M112.6 180H122.6M207.4 180H217.4M118.6 180v6M211.4 180v6M113.3 174H123.3M206.7 174H216.7M115.3 174v6M214.7 174v6M113.9 168H123.9M206.1 168H216.1M119.9 168v6M210.1 168v6M114.6 162H124.6M205.4 162H215.4M116.6 162v6M213.4 162v6M115.2 156H125.2M204.8 156H214.8M121.2 156v6M208.8 156v6M115.9 150H125.9M204.1 150H214.1M117.9 150v6M212.1 150v6M116.5 144H126.5M203.5 144H213.5M122.5 144v6M207.5 144v6M117.2 138H127.2M202.8 138H212.8M119.2 138v6M210.8 138v6M117.8 132H127.8M202.2 132H212.2M123.8 132v6M206.2 132v6M118.5 126H128.5M201.5 126H211.5M120.5 126v6M209.5 126v6M119.1 120H129.1M200.9 120H210.9M125.1 120v6M204.9 120v6M119.8 114H129.8M200.2 114H210.2M121.8 114v6M208.2 114v6"/>
  <rect class="fl-panel st-ink" stroke-width="1.6" x="118" y="106" width="94" height="6"/>
  <path class="fl-panel st-ink" stroke-width="1.6" stroke-linejoin="round" d="M198 106V90H203V95H208V90H213V95H218V90H213V90H212V106Z"/>
  <path class="fl-panel st-ink" stroke-width="1.6" d="M118 106V98H128V106"/>
  <rect class="fl-line st-ink" stroke-width="1.6" x="106" y="186" width="118" height="14"/>
  <path class="thin st-ink" style="stroke-width:1" d="M130 186v14M156 186v14M182 186v14M206 186v14"/>
</g>
<g class="only-3">
  <path class="thin st-ink" style="stroke-width:1.2" d="M176 78L210.1 150"/>
  <circle class="fl-bg" cx="160" cy="62" r="22"/>
  <g clip-path="url(#greatwall-lens)">
    <rect class="fl-hot" fill-opacity=".55" x="134" y="40" width="52" height="16"/>
    <rect class="fl-hot" fill-opacity=".55" x="134" y="68" width="52" height="16"/>
    <rect class="fl-panel" x="134" y="56" width="52" height="12"/>
    <g class="fl-line"><circle cx="141" cy="60" r="1"/><circle cx="147" cy="64" r="1"/><circle cx="155" cy="59" r="1"/><circle cx="163" cy="65" r="1"/><circle cx="170" cy="60" r="1"/><circle cx="178" cy="63" r="1"/></g>
    <g class="fl-elec st-ink" stroke-width=".5">
      <ellipse cx="144" cy="62" rx="2.6" ry="1.3" transform="rotate(20 144 62)"/><ellipse cx="158" cy="63" rx="2.6" ry="1.3" transform="rotate(-15 158 63)"/><ellipse cx="173" cy="61" rx="2.6" ry="1.3" transform="rotate(30 173 61)"/>
      <animate attributeName="opacity" values="1;.5;1" dur="1.6s" repeatCount="indefinite"/>
    </g>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="160" cy="62" r="22"/>
</g>

<!-- 4 מגדל אותות: אש ועשן, ומגדל רחוק שמעביר הלאה -->
<g class="hl-4">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M240 200L246 120H284L290 200Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M244 150H286M242 175H288"/>
  <path class="fl-dark st-ink" stroke-width="1.4" d="M260 200V184Q265 178 270 184V200Z"/>
  <rect class="fl-dark" x="262" y="140" width="6" height="9" rx="1"/>
  <path class="fl-panel st-ink" stroke-width="1.6" stroke-linejoin="round" d="M243 120V110H249V114H256V110H262V114H268V110H274V114H281V110H287V120Z"/>
  <path class="fl-hot st-ink" stroke-width="1" stroke-linejoin="round" d="M258 110Q259 100 265 96Q263 102 268 104Q270 100 270 98Q275 104 272 110Z"><animate attributeName="opacity" values="1;.6;1" dur=".5s" repeatCount="indefinite"/></path>
  <path class="fl-elec" d="M262 110Q263 104 266 102Q266 106 269 108V110Z"/>
  <circle class="fl-line" r="5"><animateMotion dur="3.2s" begin="-0.0s" repeatCount="indefinite" path="M265 104C262 88 272 74 266 50"/><animate attributeName="r" values="3;9" dur="3.2s" begin="-0.0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="3.2s" begin="-0.0s" repeatCount="indefinite"/></circle><circle class="fl-line" r="5"><animateMotion dur="3.2s" begin="-0.8s" repeatCount="indefinite" path="M265 104C262 88 272 74 266 50"/><animate attributeName="r" values="3;9" dur="3.2s" begin="-0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="3.2s" begin="-0.8s" repeatCount="indefinite"/></circle><circle class="fl-line" r="5"><animateMotion dur="3.2s" begin="-1.6s" repeatCount="indefinite" path="M265 104C262 88 272 74 266 50"/><animate attributeName="r" values="3;9" dur="3.2s" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="3.2s" begin="-1.6s" repeatCount="indefinite"/></circle><circle class="fl-line" r="5"><animateMotion dur="3.2s" begin="-2.4s" repeatCount="indefinite" path="M265 104C262 88 272 74 266 50"/><animate attributeName="r" values="3;9" dur="3.2s" begin="-2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="3.2s" begin="-2.4s" repeatCount="indefinite"/></circle>
  <g transform="translate(300 54)">
    <path class="fl-panel st-ink" stroke-width="1.2" d="M-4 8L-3 -4H3L4 8Z"/>
    <path class="fl-hot" d="M-2 -4Q0 -10 2 -4Z"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.45;.9;1" dur="3.2s" repeatCount="indefinite"/></path>
  </g>
  <path class="st-hot fl-none" stroke-width="1.2" stroke-dasharray="2 4" d="M276 96L296 60"><animate attributeName="stroke-dashoffset" values="0;-12" dur=".8s" repeatCount="indefinite"/></path>
</g>

<!-- תוויות -->
<g class="only-1"><text x="160" y="22">חומות מתקופות שונות</text><text x="160" y="36">על אותם רכסים</text></g>
<g class="only-2"><text x="54" y="22">אדמה דחוסה</text><text x="54" y="36">שכבה אחר שכבה</text></g>
<g class="only-3"><text x="250" y="22">טיט סיד</text><text x="250" y="36">עם אורז דביק</text><text x="70" y="22">לבנים, אבן</text><text x="70" y="36">ומילוי אדמה</text></g>
<g class="only-4"><text x="200" y="22">אש ועשן</text><text x="200" y="36">ממגדל למגדל</text></g>
`;
