// מנוע חשמלי: 1 סליל עם זרם הופך למגנט · 2 הסליל מסתובב אל הקטבים ההפוכים · 3 מחלף הופך את הזרם רגע לפני · 4 מנוע בלי מברשות: סלילים קבועים יוצרים שדה מסתובב
export default `
<!-- מגנטים קבועים: צפון משמאל, דרום מימין -->
<g class="hl-2 hl-3">
  <path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M20 62H71.4A46 46 0 0 0 71.4 134H20z"/>
  <path class="fl-cold st-ink" stroke-width="2" stroke-linejoin="round" d="M180 62H128.6A46 46 0 0 1 128.6 134H180z"/>
  <text x="36" y="102" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">N</text><text x="164" y="102" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">S</text>
</g>

<!-- סוללה וחוטים אל המברשות -->
<g class="hl-1 hl-2 hl-3">
  <path class="wire st-elec" d="M116 183H121V146L105.2 110"/>
  <path class="wire st-elec" d="M94.8 86L79 50V34H10V183H84"/>
  <path class="flow" style="stroke:var(--s-ink);stroke-opacity:.75;stroke-width:1.6" d="M116 183H121V146L105.2 110"/>
  <path class="flow" style="stroke:var(--s-ink);stroke-opacity:.75;stroke-width:1.6" d="M94.8 86L79 50V34H10V183H84"/>
  <rect class="body" x="84" y="174" width="32" height="18" rx="3"/>
  <rect class="fl-elec" x="101" y="176" width="13" height="14" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M105 183h5M107.5 180.5v5M90 183h5"/>
</g>

<!-- שלב 1: סליל עומד; זרם דולק וכבה, והמגנט מופיע ונעלם -->
<g class="only-1">
  <g transform="rotate(-90 100 98)"><rect class="fl-soft st-ink" stroke-width="2" x="60" y="87" width="80" height="22" rx="3"/>
    <path class="st-warm fl-none" stroke-width="2.4" stroke-linecap="round" d="M75 88l3 20M80 88l3 20M85 88l3 20M112 88l3 20M117 88l3 20M122 88l3 20"/><g transform="rotate(-23.6 100 98)"><path class="st-elec fl-none" stroke-width="5" d="M101.8 89.2A9 9 0 0 1 101.8 106.8M98.2 89.2A9 9 0 0 0 98.2 106.8"/></g><circle class="fl-dark st-ink" stroke-width="1.2" cx="100" cy="98" r="4"/></g>
  <g>
    <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.62;.66;.94;.98" dur="4.5s" repeatCount="indefinite"/>
    <g transform="rotate(-90 100 98)"><path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M128 87h9a3 3 0 0 1 3 3v16a3 3 0 0 1 -3 3h-9z"></path><path class="fl-cold st-ink" stroke-width="2" stroke-linejoin="round" d="M72 87h-9a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h9z"></path></g>
    <text x="100" y="69.5" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">N</text><text x="100" y="133.5" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">S</text>
    <g class="wire st-violet dash" style="stroke-width:1.6">
      <path d="M92 58C76 42 67 70 67 98S76 154 92 138"/>
      <path d="M108 58C124 42 133 70 133 98S124 154 108 138"/>
      <path d="M96 56C86 34 57 46 57 98S86 162 96 140" style="stroke-opacity:.6"/>
      <path d="M104 56C114 34 143 46 143 98S114 162 104 140" style="stroke-opacity:.6"/>
    </g>
  </g>
</g>

<!-- שלב 2: הסליל נמשך אל הקטבים ההפוכים ומתיישר -->
<g class="only-2"><g>
  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.86;.9;.95;1" dur="4.5s" repeatCount="indefinite"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-78 100 98;-78 100 98;7 100 98;-4 100 98;2 100 98;0 100 98;0 100 98;-78 100 98;-78 100 98" keyTimes="0;.1;.42;.52;.6;.66;.92;.93;1" calcMode="spline" keySplines="0 0 1 1;.5 0 .7 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1;0 0 1 1;0 0 1 1;0 0 1 1" dur="4.5s" repeatCount="indefinite"/>
    <rect class="fl-soft st-ink" stroke-width="2" x="60" y="87" width="80" height="22" rx="3"/>
    <path class="st-warm fl-none" stroke-width="2.4" stroke-linecap="round" d="M75 88l3 20M80 88l3 20M85 88l3 20M112 88l3 20M117 88l3 20M122 88l3 20"/><g transform="rotate(-23.6 100 98)"><path class="st-elec fl-none" stroke-width="5" d="M101.8 89.2A9 9 0 0 1 101.8 106.8M98.2 89.2A9 9 0 0 0 98.2 106.8"/></g><circle class="fl-dark st-ink" stroke-width="1.2" cx="100" cy="98" r="4"/><path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M128 87h9a3 3 0 0 1 3 3v16a3 3 0 0 1 -3 3h-9z"></path><path class="fl-cold st-ink" stroke-width="2" stroke-linejoin="round" d="M72 87h-9a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h9z"></path>
  </g>
</g></g>

<!-- שלב 3 והלאה: סיבוב רציף; בכל חצי סיבוב המחלף הופך את הזרם והקטבים מתחלפים -->
<g class="hl-3"><g class="from-3">
  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 100 98" to="360 100 98" dur="3.2s" repeatCount="indefinite"/>
    <rect class="fl-soft st-ink" stroke-width="2" x="60" y="87" width="80" height="22" rx="3"/>
    <path class="st-warm fl-none" stroke-width="2.4" stroke-linecap="round" d="M75 88l3 20M80 88l3 20M85 88l3 20M112 88l3 20M117 88l3 20M122 88l3 20"/><g transform="rotate(-23.6 100 98)"><path class="st-elec fl-none" stroke-width="5" d="M101.8 89.2A9 9 0 0 1 101.8 106.8M98.2 89.2A9 9 0 0 0 98.2 106.8"/></g><circle class="fl-dark st-ink" stroke-width="1.2" cx="100" cy="98" r="4"/>
    <path class="fl-cold st-ink" stroke-width="2" stroke-linejoin="round" d="M128 87h9a3 3 0 0 1 3 3v16a3 3 0 0 1 -3 3h-9z"></path><path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M72 87h-9a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h9z"></path>
    <g><animate attributeName="opacity" calcMode="discrete" values="0;1" dur="3.2s" repeatCount="indefinite"/><path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M128 87h9a3 3 0 0 1 3 3v16a3 3 0 0 1 -3 3h-9z"></path><path class="fl-cold st-ink" stroke-width="2" stroke-linejoin="round" d="M72 87h-9a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h9z"></path></g>
  </g>
</g></g>
<g class="only-3">
  <circle class="fl-none st-elec" stroke-width="2.5" cx="100" cy="98" r="6" opacity="0">
    <animate attributeName="r" values="6;22;22;6;22;22" keyTimes="0;.12;.5;.5;.62;1" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0;0;1;0;0" keyTimes="0;.12;.5;.5;.62;1" dur="3.2s" repeatCount="indefinite"/>
  </circle>
</g>

<!-- מברשות קבועות שנוגעות במחלף -->
<g class="hl-1 hl-2 hl-3">
  <rect class="fl-dark st-ink" stroke-width="1.2" x="97" y="81" width="6" height="7" rx="1" transform="rotate(-23.6 100 98)"/>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="97" y="108" width="6" height="7" rx="1" transform="rotate(-23.6 100 98)"/>
</g>

<!-- מנוע בלי מברשות: סטטור עם שישה סלילים ורוטור של מגנט קבוע -->
<g class="hl-4">
  <circle class="fl-soft st-ink" stroke-width="2" cx="254" cy="96" r="51"/>
  <circle class="fl-bg st-ink" stroke-width="1.5" cx="254" cy="96" r="43.5"/>
  <g transform="rotate(0 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g transform="rotate(60 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;1;0" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g transform="rotate(120 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;1;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;1" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g transform="rotate(180 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g transform="rotate(240 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;1;0" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g transform="rotate(300 254 96)">
    <rect class="fl-soft st-ink" stroke-width="1.5" x="280" y="91" width="18" height="10"/>
    <rect class="fl-warm st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2"/>
    <rect class="fl-cold st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;1" dur="3s" repeatCount="indefinite"/></rect>
    <rect class="fl-hot st-ink" stroke-width="1.2" x="283" y="87" width="11" height="18" rx="2" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;0;1;0;0;0" dur="3s" repeatCount="indefinite"/></rect>
    <path class="st-ink fl-none" stroke-width=".8" stroke-opacity=".55" d="M286 87v18M288.5 87v18M291 87v18"/>
  </g>
  <g>
    <animateTransform attributeName="transform" type="rotate" from="-90 254 96" to="270 254 96" dur="3s" repeatCount="indefinite"/>
    <path class="fl-hot" d="M254 77A19 19 0 0 1 254 115z"/>
    <path class="fl-cold" d="M254 77A19 19 0 0 0 254 115z"/>
    <circle class="fl-none st-ink" stroke-width="2" cx="254" cy="96" r="19"/>
    <text x="264" y="99.5" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">N</text><text x="244" y="99.5" style="fill:#fff;stroke:none;font-size:10px;font-weight:800">S</text>
    <circle class="fl-dark st-ink" stroke-width="1.2" cx="254" cy="96" r="3.5"/>
  </g>
  <!-- בקר אלקטרוני -->
  <path class="thin st-ink" d="M246 147v9M254 147v9M262 147v9"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="239" y="156" width="30" height="13" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1.2" d="M235 160h4M235 165h4M269 160h4M269 165h4"/>
</g>
<g class="only-4">
  <g fill="#fff"><circle cx="246" cy="162.5" r="1.6" class="blink"/><circle cx="254" cy="162.5" r="1.6" class="blink d2"/><circle cx="262" cy="162.5" r="1.6" class="blink d4"/></g>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="104" y="18">סליל עם זרם הוא מגנט</text>
  <text x="104" y="210">בלי זרם — אין מגנט</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="104" y="18">קטבים הפוכים נמשכים</text>
  <text x="104" y="210">הסליל מסתובב ומתיישר</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="104" y="18">הזרם מתהפך — הקטבים מתחלפים</text>
  <text x="104" y="210">והסיבוב לא נעצר</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="254" y="190">הסלילים נדלקים בתור</text>
  <text x="254" y="206">והרוטור רודף אחריו</text>
  <text x="254" y="30">בלי מברשות</text>
</g>
`;
