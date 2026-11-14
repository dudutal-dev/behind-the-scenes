// קשת בענן. 1 קרן נכנסת לטיפה ונשברת · 2 הצבעים נפרדים · 3 החזרה מגב הטיפה ויציאה כמניפה · 4 הצופה, 42 מעלות והקשת
export default `
<!-- אדמה -->
<rect class="fl-soft" x="0" y="212" width="320" height="8"/>
<path class="thin" d="M0 212H320"/>

<!-- גשם ברקע -->
<g class="fl-cold" opacity=".5">
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.200s" repeatCount="indefinite" path="M300 -6V210"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.600s" begin="-1.100s" repeatCount="indefinite" path="M314 -6V210"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.400s" begin="-1.900s" repeatCount="indefinite" path="M264 -6V210"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.300s" begin="-.600s" repeatCount="indefinite" path="M240 -6V210"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.500s" begin="-1.500s" repeatCount="indefinite" path="M286 -6V210"/></path>
</g>

<!-- שמש וקרן אור -->
<g class="spin" style="animation-duration:16s"><path class="wire st-warm" style="stroke-width:2" d="M22 11v5M22 44v5M3 30h5M36 30h5M8.600 16.600l3.500 3.500M31.900 39.900l3.500 3.500M8.600 43.400l3.500-3.500M31.900 20.100l3.500-3.500"/></g>
<circle class="fl-elec st-warm" stroke-width="2" cx="22" cy="30" r="10"/>
<path class="wire st-elec" style="stroke-width:3;stroke-opacity:.4" d="M44 29.850H100.600"/>
<path class="wire st-elec dash" style="stroke-width:3" d="M44 29.850H100.600"/>

<!-- הנוף: הקשת, שתי טיפות, קווי הראייה והזווית -->
<g class="hl-4">
  <g fill="none" stroke-width="3.200">
    <path stroke="#e53935" d="M254.700 212A29.900 83 0 1 1 309.300 212"/>
    <path stroke="#fb8c00" d="M255.900 212A28.800 80 0 1 1 308.100 212"/>
    <path stroke="#fdd835" d="M257.100 212A27.700 77 0 1 1 306.900 212"/>
    <path stroke="#43a047" d="M258.400 212A26.600 74 0 1 1 305.600 212"/>
    <path stroke="#1e88e5" d="M259.500 212A25.600 71 0 1 1 304.500 212"/>
    <path stroke="#8e24aa" d="M260.800 212A24.500 68 0 1 1 303.200 212"/>
  </g>
  <path class="thin" stroke-dasharray="3 4" d="M190 178H250"/>
  <path fill="none" stroke="#e53935" stroke-width="1.800" class="dash" d="M282 95L190 178"/>
  <path fill="none" stroke="#8e24aa" stroke-width="1.800" class="dash" d="M282 110L190 178"/>
  <circle class="fl-cold-soft st-cold" stroke-width="1.500" cx="282" cy="95" r="4"/>
  <circle class="fl-cold-soft st-cold" stroke-width="1.500" cx="282" cy="110" r="4"/>
  <path class="wire st-ink" style="stroke-width:1.500" d="M220 178A30 30 0 0 0 212.300 157.900"/>
  <text x="228" y="194">42°</text>
</g>
<!-- הגדלה: מהטיפה שבקשת אל הטיפה הגדולה -->
<path class="thin" stroke-dasharray="2 4" d="M278 92L132 25M278 97L152 96"/>

<!-- טיפת גשם מוגדלת -->
<circle class="fl-cold-soft st-cold" stroke-width="2" cx="122" cy="66" r="42"/>
<path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".75" d="M87 74A36 36 0 0 0 97 92"/>

<!-- שלב 1: הקרן נשברת בכניסה -->
<g class="only-1">
  <path class="thin" stroke-dasharray="3 3" d="M100.600 29.850H140"/>
  <path class="wire st-ink" style="stroke-width:1.200" stroke-dasharray="2 3" d="M93 17L111.800 49"/>
  <path class="wire st-elec dash" style="stroke-width:3" d="M100.600 29.850L162.400 55.500"/>
  <circle class="ring st-warm" cx="100.600" cy="29.850" r="13"/>
  <text x="84" y="176">הקרן נכנסת לטיפה</text>
  <text x="84" y="192">ונשברת</text>
</g>

<!-- שלב 2 והלאה: הצבעים נפרדים בתוך הטיפה -->
<g class="from-2" fill="none" stroke-width="1.700" stroke-linecap="round">
  <path stroke="#e53935" d="M100.600 29.850L160.900 50.300"/>
  <path stroke="#fb8c00" d="M100.600 29.850L161.700 52.300"/>
  <path stroke="#fdd835" d="M100.600 29.850L162.400 54.400"/>
  <path stroke="#43a047" d="M100.600 29.850L162.900 56.600"/>
  <path stroke="#1e88e5" d="M100.600 29.850L163.400 58.700"/>
  <path stroke="#8e24aa" d="M100.600 29.850L163.700 60.900"/>
</g>
<g class="only-2">
  <circle fill="#e53935" r="3"><animateMotion dur="1.300s" repeatCount="indefinite" path="M100.600 29.850L160.900 50.300"/></circle>
  <circle fill="#43a047" r="3"><animateMotion dur="1.300s" begin="-.450s" repeatCount="indefinite" path="M100.600 29.850L162.900 56.600"/></circle>
  <circle fill="#8e24aa" r="3"><animateMotion dur="1.300s" begin="-.900s" repeatCount="indefinite" path="M100.600 29.850L163.700 60.900"/></circle>
  <text x="84" y="176">הצבעים נפרדים</text>
  <text x="84" y="192">סגול נשבר הכי הרבה</text>
</g>

<!-- שלב 3 והלאה: החזרה מגב הטיפה ויציאה כמניפה -->
<g class="from-3" fill="none" stroke-width="1.700" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#8e24aa" d="M163.700 60.900L110 106.200L71 130.600"/>
  <path stroke="#1e88e5" d="M163.400 58.700L114.300 107.300L76.200 133"/>
  <path stroke="#43a047" d="M162.900 56.600L118.600 107.900L81.400 134.900"/>
  <path stroke="#fdd835" d="M162.400 54.400L123 108L86.800 136.300"/>
  <path stroke="#fb8c00" d="M161.700 52.300L127.400 107.700L92.200 137.300"/>
  <path stroke="#e53935" d="M160.900 50.300L131.700 106.900L97.500 137.700"/>
</g>
<g class="only-3">
  <circle fill="#e53935" r="3"><animateMotion dur="1.800s" repeatCount="indefinite" path="M160.900 50.300L131.700 106.900L97.500 137.700"/></circle>
  <circle fill="#43a047" r="3"><animateMotion dur="1.800s" begin="-.600s" repeatCount="indefinite" path="M162.900 56.600L118.600 107.900L81.400 134.900"/></circle>
  <circle fill="#8e24aa" r="3"><animateMotion dur="1.800s" begin="-1.200s" repeatCount="indefinite" path="M163.700 60.900L110 106.200L71 130.600"/></circle>
  <circle class="ring st-ink" cx="162.500" cy="55.500" r="13"/>
  <text x="84" y="176">מוחזר מגב הטיפה</text>
  <text x="84" y="192">ויוצא כמניפה</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <circle fill="#e53935" r="2.800"><animateMotion dur="1.400s" repeatCount="indefinite" path="M282 95L190 178"/></circle>
  <circle fill="#8e24aa" r="2.800"><animateMotion dur="1.400s" begin="-.700s" repeatCount="indefinite" path="M282 110L190 178"/></circle>
  <circle class="ring st-ink" cx="190" cy="178" r="14"/>
  <text x="84" y="176">השמש מאחורי הגב</text>
  <text x="84" y="192">הקשת בזווית 42°</text>
</g>

<!-- הצופה, פניו אל הגשם -->
<path class="body" d="M174 212V196Q174 187 183 187Q192 187 192 196V212z"/>
<circle class="body" cx="183" cy="179" r="7.500"/>
<circle class="fl-ink" cx="187.600" cy="177.600" r="1.300"/>
`;
