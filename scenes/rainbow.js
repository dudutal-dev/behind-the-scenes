// קשת בענן. 1 קרן נכנסת לטיפה ונשברת · 2 הצבעים נפרדים · 3 החזרה מגב הטיפה ויציאה כמניפה · 4 הצופה, 42 מעלות והקשת
export default `
<!-- אדמה -->
<rect class="fl-soft" x="0" y="214" width="320" height="6"/>
<path class="thin" d="M0 214H320"/>

<!-- גשם ברקע -->
<g class="fl-cold" opacity=".55">
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.200s" repeatCount="indefinite" path="M292 -6V212"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.600s" begin="-1.100s" repeatCount="indefinite" path="M303 -6V212"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.400s" begin="-1.900s" repeatCount="indefinite" path="M313 -6V212"/></path>
  <path d="M0-4q3 4 0 6q-3-2 0-6z"><animateMotion dur="2.300s" begin="-.600s" repeatCount="indefinite" path="M282 110V212"/></path>
</g>

<!-- שמש וקרן אור -->
<g class="spin" style="animation-duration:16s"><path class="wire st-warm" stroke-width="2" d="M24 13v5M24 46v5M5 32h5M38 32h5M10.600 18.600l3.500 3.500M33.900 41.900l3.500 3.500M10.600 45.400l3.500-3.500M33.900 22.100l3.500-3.500"/></g>
<circle class="fl-elec st-warm" stroke-width="2" cx="24" cy="32" r="10"/>
<path class="wire st-elec" stroke-width="3" style="stroke-opacity:.4" d="M44 31.600H211.600"/>
<path class="wire st-elec dash" stroke-width="3" d="M44 31.600H211.600"/>

<!-- הקשת: כל הטיפות שבאותה זווית מהצופה -->
<g class="from-4" fill="none" stroke-width="3.400" opacity=".85">
  <path stroke="#e53935" d="M222.900 214A22 67 0 1 1 257.100 214"/>
  <path stroke="#fb8c00" d="M224.300 214A20.900 63.600 0 1 1 255.700 214"/>
  <path stroke="#fdd835" d="M225.800 214A19.800 60.200 0 1 1 254.200 214"/>
  <path stroke="#43a047" d="M227.400 214A18.700 56.800 0 1 1 252.600 214"/>
  <path stroke="#1e88e5" d="M229.200 214A17.500 53.400 0 1 1 250.800 214"/>
  <path stroke="#8e24aa" d="M231.100 214A16.400 50 0 1 1 248.900 214"/>
</g>

<!-- טיפת גשם מוגדלת -->
<circle class="fl-cold-soft st-cold" stroke-width="2" cx="232" cy="66" r="40"/>
<path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".75" d="M199 76A34 34 0 0 0 210 93"/>

<!-- שלב 1: הקרן נשברת בכניסה -->
<g class="only-1">
  <path class="thin" stroke-dasharray="3 3" d="M211.600 31.600H252"/>
  <path class="thin st-ink" stroke-dasharray="2 3" d="M203.400 17.800L222.800 50.500"/>
  <path class="wire st-elec dash" stroke-width="3" d="M211.600 31.600L270.300 54.300"/>
  <circle class="ring st-warm" cx="211.600" cy="31.600" r="13"/>
  <text x="96" y="78">הקרן נכנסת לטיפה</text>
  <text x="96" y="94">ונשברת</text>
</g>

<!-- שלב 2 והלאה: הצבעים נפרדים בתוך הטיפה -->
<g class="from-2" fill="none" stroke-width="1.800" stroke-linecap="round">
  <path stroke="#e53935" d="M211.600 31.600L269.300 51.700"/>
  <path stroke="#fb8c00" d="M211.600 31.600L269.800 53"/>
  <path stroke="#fdd835" d="M211.600 31.600L270.300 54.300"/>
  <path stroke="#43a047" d="M211.600 31.600L270.600 55.600"/>
  <path stroke="#1e88e5" d="M211.600 31.600L271 57"/>
  <path stroke="#8e24aa" d="M211.600 31.600L271.300 58.400"/>
</g>
<g class="only-2">
  <circle fill="#e53935" r="3"><animateMotion dur="1.300s" repeatCount="indefinite" path="M211.600 31.600L269.300 51.700"/></circle>
  <circle fill="#43a047" r="3"><animateMotion dur="1.300s" begin="-.450s" repeatCount="indefinite" path="M211.600 31.600L270.600 55.600"/></circle>
  <circle fill="#8e24aa" r="3"><animateMotion dur="1.300s" begin="-.900s" repeatCount="indefinite" path="M211.600 31.600L271.300 58.400"/></circle>
  <circle class="ring st-ink" cx="240" cy="43" r="14"/>
  <text x="96" y="78">הצבעים נפרדים</text>
  <text x="96" y="94">סגול נשבר הכי הרבה</text>
</g>

<!-- שלב 3 והלאה: החזרה מגב הטיפה ויציאה כמניפה -->
<g class="from-3" fill="none" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#8e24aa" d="M271.300 58.400L226 105.600L180.400 136.400"/>
  <path stroke="#1e88e5" d="M271 57L228.800 105.900L184.100 137.900"/>
  <path stroke="#43a047" d="M270.600 55.600L231.600 106L187.800 139.300"/>
  <path stroke="#fdd835" d="M270.300 54.300L234.400 105.900L191.500 140.400"/>
  <path stroke="#fb8c00" d="M269.800 53L237.200 105.700L195.300 141.300"/>
  <path stroke="#e53935" d="M269.300 51.700L239.900 105.200L199 142"/>
</g>
<g class="only-3">
  <circle fill="#e53935" r="3"><animateMotion dur="1.800s" repeatCount="indefinite" path="M269.300 51.700L239.900 105.200L199 142"/></circle>
  <circle fill="#43a047" r="3"><animateMotion dur="1.800s" begin="-.600s" repeatCount="indefinite" path="M270.600 55.600L231.600 106L187.800 139.300"/></circle>
  <circle fill="#8e24aa" r="3"><animateMotion dur="1.800s" begin="-1.200s" repeatCount="indefinite" path="M271.300 58.400L226 105.600L180.400 136.400"/></circle>
  <circle class="ring st-ink" cx="270.500" cy="55" r="13"/>
  <text x="96" y="78">מוחזר מגב הטיפה</text>
  <text x="96" y="94">ויוצא כמניפה</text>
</g>

<!-- שלב 4: טיפה נמוכה יותר שולחת סגול, הזווית והצופה -->
<g class="from-4">
  <path class="thin st-ink" stroke-dasharray="3 4" d="M165.700 172H214"/>
  <path fill="none" stroke="#e53935" stroke-width="1.800" class="dash" d="M199 142L165.700 172"/>
  <path fill="none" stroke="#8e24aa" stroke-width="1.800" class="dash" d="M234.200 125.900L165.700 172"/>
  <circle class="fl-cold-soft st-cold" stroke-width="1.500" cx="240" cy="122" r="7"/>
  <path class="thin st-ink" d="M193.700 172A28 28 0 0 0 186.500 153.300"/>
  <text x="199" y="190">42°</text>
</g>
<g class="only-4">
  <circle class="ring st-ink" cx="165.700" cy="172" r="15"/>
  <text x="84" y="78">השמש מאחורי הגב</text>
  <text x="84" y="94">הקשת בזווית 42°</text>
</g>

<!-- הצופה, פניו אל הגשם -->
<path class="body" d="M148 214V193Q148 183 157 183Q166 183 166 193V214z"/>
<circle class="body" cx="158" cy="173" r="7.500"/>
<circle class="fl-ink" cx="162.800" cy="171.600" r="1.300"/>
`;
