// חור שחור: 1 מהירות המילוט גדלה כשמתקרבים · 2 האופק: מכאן גם אור אינו יוצא · 3 ליבה של כוכב ענק קורסת · 4 מגלים אותו לפי כוכבים מקיפים, גלי כבידה וצל על רקע גז
export default `
<defs>
  <marker id="blackhole-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="blackhole-ae" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
</defs>

<!-- בור הכבידה: מעגלים שווי־פוטנציאל -->
<g class="hl-1 hl-2">
  <circle class="thin" style="stroke-dasharray:1 5;stroke-width:1" cx="128" cy="112" r="48"/>
  <circle class="thin" style="stroke-dasharray:1 6;stroke-width:1" cx="128" cy="112" r="90"/>
</g>

<!-- מסלול הכוכב S2 -->
<g class="from-4"><g class="hl-4">
  <ellipse class="wire st-violet" style="stroke-width:1.6;stroke-dasharray:5 4" cx="184.6" cy="112" rx="90" ry="70"/>
</g></g>

<!-- גלי כבידה משני חורים שחורים מתמזגים -->
<g class="from-4"><g class="hl-4">
  <circle class="ring st-violet" cx="40" cy="44" r="34"/>
  <circle class="ring st-violet d2" cx="40" cy="44" r="34"/>
  <circle class="ring st-violet d4" cx="40" cy="44" r="34"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 40 44" to="360 40 44" dur="1.1s" repeatCount="indefinite"/>
    <circle fill="#000" class="st-line" stroke-width="1" cx="33" cy="44" r="4.5"/>
    <circle fill="#000" class="st-line" stroke-width="1" cx="47" cy="44" r="4"/>
  </g>
</g></g>

<!-- דיסקת הגז: החלק האחורי -->
<g class="hl-4"><path class="fl-none st-warm" style="stroke-width:5;stroke-linecap:round" opacity=".55" d="M74 112A54 11 0 0 1 182 112"/></g>

<!-- שלב 3: כוכב ענק קורס, השכבות נזרקות -->
<g class="only-3">
  <circle class="fl-warm" opacity=".35" cx="128" cy="112" r="70">
    <animate attributeName="r" values="70;70;24;24" keyTimes="0;.25;.55;1" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".45;.45;.9;0" keyTimes="0;.25;.55;.7" dur="3.2s" repeatCount="indefinite"/>
  </circle>
  <circle class="fl-none st-hot" stroke-width="2.5" cx="128" cy="112" r="30">
    <animate attributeName="r" values="30;30;104" keyTimes="0;.55;1" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.54;.6;1" dur="3.2s" repeatCount="indefinite"/>
  </circle>
  <g class="st-ink">
    <path class="arrow st-ink" style="stroke-width:2" marker-end="url(#blackhole-a)" d="M128 46v20"/>
    <path class="arrow st-ink" style="stroke-width:2" marker-end="url(#blackhole-a)" d="M128 178v-20"/>
    <path class="arrow st-ink" style="stroke-width:2" marker-end="url(#blackhole-a)" d="M62 112h20"/>
    <path class="arrow st-ink" style="stroke-width:2" marker-end="url(#blackhole-a)" d="M194 112h-20"/>
  </g>
</g>

<!-- החור השחור -->
<circle fill="#000" class="st-line" stroke-width="1" cx="128" cy="112" r="24"/>

<!-- טבעת הגז הזוהר סביב הצל (כמו בתמונות טלסקופ אופק האירועים) -->
<g class="from-4"><g class="hl-4">
  <circle class="fl-none st-warm" stroke-width="4" opacity=".85" cx="128" cy="112" r="28"/>
  <circle class="fl-none st-elec" stroke-width="1.4" cx="128" cy="112" r="28"><animate attributeName="opacity" values=".3;1;.3" dur="2.4s" repeatCount="indefinite"/></circle>
</g></g>

<!-- דיסקת הגז: החלק הקדמי -->
<g class="hl-4"><path class="fl-none st-warm" style="stroke-width:5;stroke-linecap:round" d="M182 112A54 11 0 0 1 74 112"/></g>

<!-- שלב 1: מהירות המילוט -->
<g class="only-1">
  
  <circle class="fl-ink" cx="176" cy="112" r="3"/>
  <path class="arrow st-hot" marker-end="url(#blackhole-ae)" style="stroke-width:3" d="M176 107v-46"/>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2">
    <animateMotion dur="1.10s" repeatCount="indefinite" path="M176 108V32"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.7;1" dur="1.10s" repeatCount="indefinite"/>
  </circle>
  <circle class="fl-ink" cx="218" cy="112" r="3"/>
  <path class="arrow st-hot" marker-end="url(#blackhole-ae)" style="stroke-width:3" d="M218 107v-33"/>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2">
    <animateMotion dur="1.35s" repeatCount="indefinite" path="M218 108V45"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.7;1" dur="1.35s" repeatCount="indefinite"/>
  </circle>
  <circle class="fl-ink" cx="276" cy="112" r="3"/>
  <path class="arrow st-hot" marker-end="url(#blackhole-ae)" style="stroke-width:3" d="M276 107v-26"/>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2">
    <animateMotion dur="1.60s" repeatCount="indefinite" path="M276 108V52"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.7;1" dur="1.60s" repeatCount="indefinite"/>
  </circle>
  <text x="176" y="134">קרוב</text>
  <text x="276" y="134">רחוק</text>
  <text x="226" y="162">כדי לא ליפול בחזרה</text>
  <text x="226" y="176">צריך מהירות גבוהה יותר</text>
  <text x="226" y="190">ככל שמתקרבים</text>
</g>

<!-- שלב 2: האופק -->
<g class="only-2">
  <circle class="fl-none st-hot" stroke-width="2.4" style="stroke-dasharray:4 3" cx="128" cy="112" r="24"><animate attributeName="opacity" values=".4;1;.4" dur="1.6s" repeatCount="indefinite"/></circle>
  <path class="wire st-elec" style="stroke-width:1.8" d="M128 112L111 95"/>
  <circle class="fl-elec" cx="128" cy="112" r="2"/>
  <path class="thin" style="stroke-width:1" d="M116 100L84 62"/>
  <text x="64" y="54">רדיוס שוורצשילד</text>
  <text x="128" y="158">אופק האירועים</text>
  <!-- אור שנפלט מחוץ לאופק נמלט -->
  <path class="thin st-elec" style="stroke-dasharray:3 4" d="M160 94Q220 62 300 40"/>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.4"><animateMotion dur="1.8s" repeatCount="indefinite" path="M160 94Q220 62 300 40"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="1.8s" repeatCount="indefinite"/></circle>
  <text x="262" y="68">האור נמלט</text>
  <!-- אור שחוצה את האופק פנימה אינו יוצא -->
  <path class="thin st-hot" style="stroke-dasharray:3 4" d="M300 178Q196 172 146 128"/>
  <circle class="fl-hot" r="3.4"><animateMotion dur="2s" repeatCount="indefinite" path="M300 178Q196 172 144 126"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.9;1" dur="2s" repeatCount="indefinite"/></circle>
  <text x="252" y="196">חצה פנימה — לא יוצא</text>
</g>

<!-- שלב 3: תוויות -->
<g class="only-3">
  <text x="54" y="22">הדלק נגמר:</text>
  <text x="54" y="36">הליבה קורסת</text>
  <text x="262" y="166">השכבות החיצוניות</text>
  <text x="262" y="180">נזרקות בסופרנובה</text>
</g>

<!-- שלב 4: כוכב מקיף במהירות משתנה (חוק קפלר) -->
<g class="from-4"><g class="hl-4">
  <circle class="fl-elec st-ink" stroke-width="1.2" r="4.2">
    <animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" values="94.6,112.0;97.0,95.9;103.3,81.9;112.1,70.5;121.9,61.8;131.9,55.2;141.9,50.4;151.6,46.9;160.9,44.5;169.7,43.0;178.2,42.2;186.2,42.0;193.7,42.4;200.8,43.2;207.6,44.3;213.9,45.8;219.9,47.6;225.5,49.7;230.8,51.9;235.7,54.4;240.3,57.0;244.6,59.8;248.6,62.8;252.2,65.8;255.6,69.0;258.7,72.3;261.5,75.6;264.0,79.1;266.2,82.6;268.2,86.1;269.9,89.7;271.3,93.4;272.5,97.1;273.4,100.8;274.1,104.5;274.4,108.3;274.6,112.0;274.4,115.7;274.1,119.5;273.4,123.2;272.5,126.9;271.3,130.6;269.9,134.3;268.2,137.9;266.2,141.4;264.0,144.9;261.5,148.4;258.7,151.7;255.6,155.0;252.2,158.2;248.6,161.2;244.6,164.2;240.3,167.0;235.7,169.6;230.8,172.1;225.5,174.3;219.9,176.4;213.9,178.2;207.6,179.7;200.8,180.8;193.7,181.6;186.2,182.0;178.2,181.8;169.7,181.0;160.9,179.5;151.6,177.1;141.9,173.6;131.9,168.8;121.9,162.2;112.1,153.5;103.3,142.1;97.0,128.1;94.6,112.0"/>
  </circle>
</g></g>
<g class="only-4">
  <text x="40" y="96">גלי כבידה</text>
  <text x="276" y="40">כוכב מקיף</text>
  <path class="thin" style="stroke-width:1" d="M66 160L106 130"/>
  <text x="50" y="174">צל על רקע</text>
  <text x="50" y="188">גז זוהר</text>
</g>
`;
