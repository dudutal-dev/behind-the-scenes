// כיריים אינדוקציה בחתך: 1 סליל נחושת וזרם מתחלף · 2 שדה מגנטי מתחלף דרך הזכוכית · 3 זרמי מערבולת וחום בתחתית הסיר · 4 שליטה מיידית בעוצמה
export default `
<!-- גוף הכיריים והזכוכית -->
<rect class="body" x="22" y="138" width="276" height="58" rx="6"/>
<rect class="fl-cold-soft st-ink" stroke-width="1.5" x="14" y="130" width="292" height="8" rx="2"/>

<!-- סיר -->
<path class="st-ink fl-none" stroke-width="5" stroke-linecap="round" d="M55 62H44M185 62H196"/>
<path class="body" d="M56 50V120Q56 130 66 130H174Q184 130 184 120V50"/>
<rect class="fl-cold-soft" x="58" y="68" width="124" height="46"/>
<path class="thin st-cold" d="M58 68H182"/>
<path class="fl-dark" d="M57 114H183V120Q183 129 174 129H66Q57 129 57 120z"/>
<path class="fl-hot from-3" d="M57 114H183V120Q183 129 174 129H66Q57 129 57 120z"/>

<!-- שדה מגנטי מתחלף: לולאות סביב הסליל, דרך הזכוכית אל תחתית הסיר -->
<g class="hl-2 hl-3">
  <ellipse class="wire st-violet" stroke-width="2" stroke-dasharray="6 6" cx="84" cy="152" rx="33" ry="32"><animate attributeName="stroke-dashoffset" values="0;-36;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
  <ellipse class="wire st-violet" stroke-width="2" stroke-dasharray="6 6" cx="84" cy="152" rx="23" ry="25"><animate attributeName="stroke-dashoffset" values="0;-36;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
  <ellipse class="wire st-violet" stroke-width="2" stroke-dasharray="6 6" cx="156" cy="152" rx="33" ry="32"><animate attributeName="stroke-dashoffset" values="0;36;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
  <ellipse class="wire st-violet" stroke-width="2" stroke-dasharray="6 6" cx="156" cy="152" rx="23" ry="25"><animate attributeName="stroke-dashoffset" values="0;36;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
</g>

<!-- סליל נחושת שטוח (במבט אלכסוני) על מגש פריט; הזרם בו מתהפך -->
<g class="hl-1 hl-2">
  <rect class="fl-line" x="58" y="168" width="124" height="4" rx="2"/>
  <g class="st-ink fl-none" stroke-width="5">
    <ellipse cx="120" cy="157" rx="55" ry="8.500"/><ellipse cx="120" cy="157" rx="42" ry="6.200"/><ellipse cx="120" cy="157" rx="29" ry="4"/>
  </g>
  <g class="st-warm fl-none" stroke-width="3">
    <ellipse cx="120" cy="157" rx="55" ry="8.500"/><ellipse cx="120" cy="157" rx="42" ry="6.200"/><ellipse cx="120" cy="157" rx="29" ry="4"/>
  </g>
  <g class="st-elec fl-none" stroke-width="1.6" stroke-dasharray="3 9" stroke-linecap="round">
    <ellipse cx="120" cy="157" rx="55" ry="8.500"/><ellipse cx="120" cy="157" rx="42" ry="6.200"/><ellipse cx="120" cy="157" rx="29" ry="4"/>
    <animate attributeName="stroke-dashoffset" values="0;-48;0" dur="1.4s" repeatCount="indefinite"/>
  </g>
  <ellipse class="fl-dark" cx="120" cy="157" rx="13" ry="1.800"/>
</g>

<!-- יחידת ההספק: זרם מתחלף אל הסליל -->
<g class="hl-1 hl-4">
  <path class="wire st-elec" stroke-dasharray="5 5" d="M214 172H190Q178 172 176 161"><animate attributeName="stroke-dashoffset" values="0;-30;0" dur="1.4s" repeatCount="indefinite"/></path>
  <path class="wire st-elec dash" d="M306 172H278"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="214" y="152" width="64" height="36" rx="4"/>
  <path class="wire st-elec" stroke-dasharray="5 5" d="M221 170q5-13 10 0t10 0t10 0t10 0t10 0"><animate attributeName="stroke-dashoffset" values="0;-30;0" dur="1.4s" repeatCount="indefinite"/></path>
</g>

<!-- זרמי מערבולת בתחתית הסיר -->
<g class="hl-3">
  <ellipse class="st-elec fl-none" stroke-width="2" stroke-dasharray="5 5" cx="120" cy="121.5" rx="55" ry="4.6"><animate attributeName="stroke-dashoffset" values="0;-40;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
  <ellipse class="st-elec fl-none" stroke-width="1.6" stroke-dasharray="4 4" cx="120" cy="121.5" rx="30" ry="2.2"><animate attributeName="stroke-dashoffset" values="0;-32;0" dur="1.4s" repeatCount="indefinite"/></ellipse>
</g>

<!-- לוח שליטה -->
<g class="hl-4">
  <path class="thin" stroke-dasharray="3 3" d="M266 108V152"/>
  <rect class="body" x="232" y="58" width="68" height="50" rx="6"/>
  <rect class="fl-hot" x="240" y="84" width="8" height="8" rx="1.5"/>
  <rect class="fl-hot" x="251" y="79" width="8" height="13" rx="1.5"/>
  <g class="fl-hot">
    <rect x="262" y="74" width="8" height="18" rx="1.5"/><rect x="273" y="69" width="8" height="23" rx="1.5"/><rect x="284" y="64" width="8" height="28" rx="1.5"/>
    <animate attributeName="opacity" values="1;.18" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/>
  </g>
  <path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M240 100H292"/>
  <circle class="fl-ink" cy="100" r="4.2" cx="288"><animate attributeName="cx" values="288;288;254;254;288" keyTimes="0;.46;.5;.96;1" dur="4s" repeatCount="indefinite"/></circle>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="120" y="211">זרם מתחלף בסליל נחושת</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="120" y="30">שדה מגנטי מתחלף</text>
  <text x="120" y="211">עובר דרך הזכוכית</text>
</g>
<!-- שלב 3: חום נוצר בתחתית ועולה למים -->
<g class="only-3">
  <circle class="fl-hot" r="3"><animateMotion dur="1.8s" repeatCount="indefinite" path="M76 110V82"/><animate attributeName="opacity" values="1;0" dur="1.8s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M100 110V78"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-.9s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.8s" begin="-.4s" repeatCount="indefinite" path="M124 110V82"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-.4s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.8s" begin="-1.3s" repeatCount="indefinite" path="M146 110V78"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-1.3s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.8s" begin="-.7s" repeatCount="indefinite" path="M166 110V84"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-.7s" repeatCount="indefinite"/></circle>
  <text x="120" y="30">זרמי מערבולת בתחתית</text>
  <text x="120" y="211">ההתנגדות הופכת לחום</text>
</g>
<!-- שלב 4: העוצמה יורדת ועולה, והחום בסיר איתה מיד -->
<g class="only-4">
  <path class="fl-dark" d="M57 114H183V120Q183 129 174 129H66Q57 129 57 120z"><animate attributeName="opacity" values="0;.78" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/></path>
  <g>
    <animate attributeName="opacity" values="1;.12" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/>
    <circle class="thin st-ink" r="2.6"><animateMotion dur="1.2s" repeatCount="indefinite" path="M74 110V72"/></circle>
    <circle class="thin st-ink" r="2"><animateMotion dur="1.2s" begin="-.5s" repeatCount="indefinite" path="M92 110V72"/></circle>
    <circle class="thin st-ink" r="2.6"><animateMotion dur="1.2s" begin="-.9s" repeatCount="indefinite" path="M110 110V72"/></circle>
    <circle class="thin st-ink" r="2"><animateMotion dur="1.2s" begin="-.3s" repeatCount="indefinite" path="M128 110V72"/></circle>
    <circle class="thin st-ink" r="2.6"><animateMotion dur="1.2s" begin="-.7s" repeatCount="indefinite" path="M148 110V72"/></circle>
    <circle class="thin st-ink" r="2"><animateMotion dur="1.2s" begin="-.1s" repeatCount="indefinite" path="M166 110V72"/></circle>
  </g>
  <text x="266" y="46">משנים עוצמה</text>
  <text x="120" y="211">החום בסיר משתנה מיד</text>
</g>
`;
