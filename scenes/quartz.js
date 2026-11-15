// שעון קוורץ: 1 גביש שמתעוות במתח ולהפך · 2 מזלג קול שרוטט 32,768 פעמים בשנייה · 3 שבב חוצה בשתיים 15 פעמים · 4 פעימה בשנייה מניעה מנוע צעד ומחוג
export default `
<defs>
  <clipPath id="quartz-lens"><circle cx="252" cy="50" r="39"/></clipPath>
  <clipPath id="quartz-rows"><rect x="225" y="98" width="79" height="76"/></clipPath>
</defs>
<!-- רצועה, כתר וגוף השעון -->
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M70 24V5h40v19zM70 156v19h40v-19z"/>
<rect class="fl-soft st-ink" stroke-width="2" x="160" y="84" width="11" height="12" rx="2"/>
<circle class="fl-soft st-ink" stroke-width="2" cx="90" cy="90" r="74"/>
<circle class="body" cx="90" cy="90" r="66"/>
<path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M90 31L90 26"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M120.25 37.61L122 34.57"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M142.39 59.75L145.43 58"/><path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M149 90L154 90"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M142.39 120.25L145.43 122"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M120.25 142.39L122 145.43"/><path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M90 149L90 154"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M59.75 142.39L58 145.43"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M37.61 120.25L34.57 122"/><path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M31 90L26 90"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M37.61 59.75L34.57 58"/><path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M59.75 37.61L58 34.57"/>

<!-- סוללה -->
<g class="hl-2">
  <circle class="fl-soft st-ink" stroke-width="2" cx="114" cy="64" r="21"/>
  <circle class="thin" cx="114" cy="64" r="16"/>
  <path class="st-ink fl-none" stroke-width="1.8" stroke-linecap="round" d="M109 64h10M114 59v10"/>
  <path class="wire st-elec dash" style="stroke-width:2" d="M106 84V116"/>
</g>
<!-- גביש הקוורץ בתוך הגליל שלו -->
<g class="hl-1 hl-2">
  <path class="wire st-line" style="stroke-width:1.6" d="M128 111V120H115M136 111V132H115"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="112" y="100" width="32" height="11" rx="5.5"/>
  <path class="st-ink fl-none" stroke-width="1.2" d="M116 103.5h24M116 107.5h24M116 103.5v4"/>
</g>
<!-- שבב -->
<g class="hl-3">
  <path class="st-ink fl-none" stroke-width="1.5" d="M87 120h3M87 126h3M87 132h3M112 120h3M112 126h3M112 132h3"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="90" y="116" width="22" height="20" rx="2"/>
  <circle fill="#fff" fill-opacity=".6" cx="94" cy="120" r="1.3"/>
</g>
<!-- מנוע צעד: סליל, ליבה, רוטור מגנטי -->
<g class="hl-4">
  <path class="wire st-elec" style="stroke-width:2" d="M87 126H42V102"/>
  <path class="wire st-line" style="stroke-width:5" d="M58 96V60H44V108H52"/>
  <rect class="fl-soft st-ink" stroke-width="1.2" x="52" y="95" width="20" height="20" rx="4"/>
  <rect class="fl-warm st-ink" stroke-width="1.5" x="38" y="66" width="12" height="36" rx="3"/>
  <path class="st-ink fl-none" stroke-width=".8" d="M38 71h12M38 75.5h12M38 80h12M38 84.5h12M38 89h12M38 93.5h12M38 98h12"/>
  <rect class="fl-elec" x="38" y="66" width="12" height="36" rx="3" opacity="0"><animate attributeName="opacity" values=".9;0;0" keyTimes="0;.35;1" dur="1s" repeatCount="indefinite"/></rect>
  <circle class="fl-panel st-ink" stroke-width="1" cx="63" cy="105" r="6.5"/>
  <g><animateTransform attributeName="transform" type="rotate" values="0 63 105;180 63 105;180 63 105;360 63 105;360 63 105" keyTimes="0;0.07;0.5;0.57;1" dur="2s" repeatCount="indefinite"/><path class="fl-hot" d="M63 100A5 5 0 0 1 63 110z"/><path class="fl-cold" d="M63 100A5 5 0 0 0 63 110z"/><circle class="fl-none st-ink" stroke-width="1" cx="63" cy="105" r="5"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 75 98;-36 75 98;-36 75 98;-72 75 98;-72 75 98;-108 75 98;-108 75 98;-144 75 98;-144 75 98;-180 75 98;-180 75 98;-216 75 98;-216 75 98;-252 75 98;-252 75 98;-288 75 98;-288 75 98;-324 75 98;-324 75 98;-360 75 98;-360 75 98" keyTimes="0;0.014;0.1;0.114;0.2;0.214;0.3;0.314;0.4;0.414;0.5;0.514;0.6;0.614;0.7;0.714;0.8;0.814;0.9;0.914;1" dur="10s" repeatCount="indefinite"/><circle class="fl-none st-ink" stroke-width="2.6" stroke-dasharray="2.36 2.36" cx="75" cy="98" r="9"/><circle class="fl-panel st-ink" stroke-width="1.2" cx="75" cy="98" r="8"/><path class="st-ink fl-none" stroke-width="1.2" d="M67 98h16M75 90v16"/><circle class="fl-ink" cx="75" cy="98" r="1.6"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 90 90;6 90 90;6 90 90;12 90 90;12 90 90;18 90 90;18 90 90;24 90 90;24 90 90;30 90 90;30 90 90;36 90 90;36 90 90;42 90 90;42 90 90;48 90 90;48 90 90;54 90 90;54 90 90;60 90 90;60 90 90;66 90 90;66 90 90;72 90 90;72 90 90;78 90 90;78 90 90;84 90 90;84 90 90;90 90 90;90 90 90;96 90 90;96 90 90;102 90 90;102 90 90;108 90 90;108 90 90;114 90 90;114 90 90;120 90 90;120 90 90;126 90 90;126 90 90;132 90 90;132 90 90;138 90 90;138 90 90;144 90 90;144 90 90;150 90 90;150 90 90;156 90 90;156 90 90;162 90 90;162 90 90;168 90 90;168 90 90;174 90 90;174 90 90;180 90 90;180 90 90;186 90 90;186 90 90;192 90 90;192 90 90;198 90 90;198 90 90;204 90 90;204 90 90;210 90 90;210 90 90;216 90 90;216 90 90;222 90 90;222 90 90;228 90 90;228 90 90;234 90 90;234 90 90;240 90 90;240 90 90;246 90 90;246 90 90;252 90 90;252 90 90;258 90 90;258 90 90;264 90 90;264 90 90;270 90 90;270 90 90;276 90 90;276 90 90;282 90 90;282 90 90;288 90 90;288 90 90;294 90 90;294 90 90;300 90 90;300 90 90;306 90 90;306 90 90;312 90 90;312 90 90;318 90 90;318 90 90;324 90 90;324 90 90;330 90 90;330 90 90;336 90 90;336 90 90;342 90 90;342 90 90;348 90 90;348 90 90;354 90 90;354 90 90;360 90 90;360 90 90" keyTimes="0;0.0023;0.0167;0.019;0.0333;0.0357;0.05;0.0523;0.0667;0.069;0.0833;0.0857;0.1;0.1023;0.1167;0.119;0.1333;0.1357;0.15;0.1523;0.1667;0.169;0.1833;0.1857;0.2;0.2023;0.2167;0.219;0.2333;0.2357;0.25;0.2523;0.2667;0.269;0.2833;0.2857;0.3;0.3023;0.3167;0.319;0.3333;0.3357;0.35;0.3523;0.3667;0.369;0.3833;0.3857;0.4;0.4023;0.4167;0.419;0.4333;0.4357;0.45;0.4523;0.4667;0.469;0.4833;0.4857;0.5;0.5023;0.5167;0.519;0.5333;0.5357;0.55;0.5523;0.5667;0.569;0.5833;0.5857;0.6;0.6023;0.6167;0.619;0.6333;0.6357;0.65;0.6523;0.6667;0.669;0.6833;0.6857;0.7;0.7023;0.7167;0.719;0.7333;0.7357;0.75;0.7523;0.7667;0.769;0.7833;0.7857;0.8;0.8023;0.8167;0.819;0.8333;0.8357;0.85;0.8523;0.8667;0.869;0.8833;0.8857;0.9;0.9023;0.9167;0.919;0.9333;0.9357;0.95;0.9523;0.9667;0.969;0.9833;0.9857;1" dur="60s" repeatCount="indefinite"/><circle class="fl-none st-ink" stroke-width="2.6" stroke-dasharray="2.51 2.51" cx="90" cy="90" r="8"/><circle class="fl-panel st-ink" stroke-width="1.2" cx="90" cy="90" r="7"/><path class="st-ink fl-none" stroke-width="1.2" d="M83 90h14M90 83v14"/><circle class="fl-ink" cx="90" cy="90" r="1.6"/></g>
  <circle r="2.6" class="fl-elec st-ink" stroke-width=".8"><animateMotion dur="1s" repeatCount="indefinite" path="M87 126H42V102"/></circle>
</g>
<!-- מחוג השניות -->
<g class="hl-4">
  <g><animateTransform attributeName="transform" type="rotate" values="0 90 90;6 90 90;6 90 90;12 90 90;12 90 90;18 90 90;18 90 90;24 90 90;24 90 90;30 90 90;30 90 90;36 90 90;36 90 90;42 90 90;42 90 90;48 90 90;48 90 90;54 90 90;54 90 90;60 90 90;60 90 90;66 90 90;66 90 90;72 90 90;72 90 90;78 90 90;78 90 90;84 90 90;84 90 90;90 90 90;90 90 90;96 90 90;96 90 90;102 90 90;102 90 90;108 90 90;108 90 90;114 90 90;114 90 90;120 90 90;120 90 90;126 90 90;126 90 90;132 90 90;132 90 90;138 90 90;138 90 90;144 90 90;144 90 90;150 90 90;150 90 90;156 90 90;156 90 90;162 90 90;162 90 90;168 90 90;168 90 90;174 90 90;174 90 90;180 90 90;180 90 90;186 90 90;186 90 90;192 90 90;192 90 90;198 90 90;198 90 90;204 90 90;204 90 90;210 90 90;210 90 90;216 90 90;216 90 90;222 90 90;222 90 90;228 90 90;228 90 90;234 90 90;234 90 90;240 90 90;240 90 90;246 90 90;246 90 90;252 90 90;252 90 90;258 90 90;258 90 90;264 90 90;264 90 90;270 90 90;270 90 90;276 90 90;276 90 90;282 90 90;282 90 90;288 90 90;288 90 90;294 90 90;294 90 90;300 90 90;300 90 90;306 90 90;306 90 90;312 90 90;312 90 90;318 90 90;318 90 90;324 90 90;324 90 90;330 90 90;330 90 90;336 90 90;336 90 90;342 90 90;342 90 90;348 90 90;348 90 90;354 90 90;354 90 90;360 90 90;360 90 90" keyTimes="0;0.0023;0.0167;0.019;0.0333;0.0357;0.05;0.0523;0.0667;0.069;0.0833;0.0857;0.1;0.1023;0.1167;0.119;0.1333;0.1357;0.15;0.1523;0.1667;0.169;0.1833;0.1857;0.2;0.2023;0.2167;0.219;0.2333;0.2357;0.25;0.2523;0.2667;0.269;0.2833;0.2857;0.3;0.3023;0.3167;0.319;0.3333;0.3357;0.35;0.3523;0.3667;0.369;0.3833;0.3857;0.4;0.4023;0.4167;0.419;0.4333;0.4357;0.45;0.4523;0.4667;0.469;0.4833;0.4857;0.5;0.5023;0.5167;0.519;0.5333;0.5357;0.55;0.5523;0.5667;0.569;0.5833;0.5857;0.6;0.6023;0.6167;0.619;0.6333;0.6357;0.65;0.6523;0.6667;0.669;0.6833;0.6857;0.7;0.7023;0.7167;0.719;0.7333;0.7357;0.75;0.7523;0.7667;0.769;0.7833;0.7857;0.8;0.8023;0.8167;0.819;0.8333;0.8357;0.85;0.8523;0.8667;0.869;0.8833;0.8857;0.9;0.9023;0.9167;0.919;0.9333;0.9357;0.95;0.9523;0.9667;0.969;0.9833;0.9857;1" dur="60s" repeatCount="indefinite"/><path class="st-hot fl-none" stroke-width="1.8" stroke-linecap="round" d="M90 102V35"/><circle class="fl-hot" cx="90" cy="99" r="2.6"/></g>
  <circle class="fl-ink" cx="90" cy="90" r="3"/>
</g>

<!-- מבט מוגדל על הגביש -->
<g class="hl-1 hl-2">
  <path class="thin st-ink" style="stroke-width:1.2" d="M145 99L215 35"/>
  <circle class="body" cx="252" cy="50" r="40"/>
  <path class="wire st-line" style="stroke-width:1.6" d="M222 44H212M222 57H212"/>
</g>
<g class="only-1" clip-path="url(#quartz-lens)">
  <path class="wire st-elec dash" style="stroke-width:2" d="M212 44H222M212 57H222"/>
  
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z"><animate attributeName="d" values="M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z;M236 36Q258 36 282 39.5L282 47.5Q258 44 236 44Z;M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="2s" repeatCount="indefinite"/></path>
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z"><animate attributeName="d" values="M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z;M236 56Q258 56 282 52.5L282 60.5Q258 64 236 64Z;M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="2s" repeatCount="indefinite"/></path>
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 36H222V64H236"/><path class="st-ink fl-none" stroke-width="1.5" d="M236 44V56"/>
  <rect class="fl-elec st-ink" stroke-width=".8" x="225" y="39" width="8" height="5" rx="1"/><rect class="fl-elec st-ink" stroke-width=".8" x="225" y="56" width="8" height="5" rx="1"/>
  <g><animate attributeName="opacity" values="1;0;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="2s" repeatCount="indefinite"/>
    <path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M254 24h8M258 20v8"/><path class="st-cold fl-none" stroke-width="2" stroke-linecap="round" d="M254 76h8"/></g>
  <g opacity="0"><animate attributeName="opacity" values="0;1;0" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="2s" repeatCount="indefinite"/>
    <path class="st-cold fl-none" stroke-width="2" stroke-linecap="round" d="M254 24h8"/><path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M254 76h8M258 72v8"/></g>
</g>
<g class="from-2"><g class="hl-2" clip-path="url(#quartz-lens)">
  <path class="thin" style="stroke-width:1;stroke-dasharray:2 2" d="M236 36Q258 36 282 31.5L282 39.5Q258 44 236 44ZM236 56Q258 56 282 60.5L282 68.5Q258 64 236 64Z"/>
  
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z"><animate attributeName="d" values="M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z;M236 36Q258 36 282 39.5L282 47.5Q258 44 236 44Z;M236 36Q258 36 282 32.5L282 40.5Q258 44 236 44Z" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="0.28s" repeatCount="indefinite"/></path>
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z"><animate attributeName="d" values="M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z;M236 56Q258 56 282 52.5L282 60.5Q258 64 236 64Z;M236 56Q258 56 282 59.5L282 67.5Q258 64 236 64Z" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="0.28s" repeatCount="indefinite"/></path>
  <path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M236 36H222V64H236"/><path class="st-ink fl-none" stroke-width="1.5" d="M236 44V56"/>
  <rect class="fl-elec st-ink" stroke-width=".8" x="225" y="39" width="8" height="5" rx="1"/><rect class="fl-elec st-ink" stroke-width=".8" x="225" y="56" width="8" height="5" rx="1"/>
  <g class="only-2"><path class="st-ink fl-none fade" stroke-width="1.4" stroke-linecap="round" d="M286 27q3 5 0 10M286 63q3 5 0 10"/></g>
</g></g>
<circle class="fl-none st-ink hl-1 hl-2" stroke-width="2" cx="252" cy="50" r="40"/>

<!-- שרשרת החלוקה בשתיים -->
<g class="hl-3">
  <path class="thin st-ink" style="stroke-width:1.2" d="M113 135L220 151"/>
  <rect class="fl-panel st-line" stroke-width="1.5" x="221" y="96" width="87" height="80" rx="6"/>
  <g clip-path="url(#quartz-rows)">
    <g><animateTransform attributeName="transform" type="translate" values="0 0;5 0" dur="0.20833333333333334s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8;stroke-linecap:butt" d="M219 111v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5v-8h2.5v8h2.5"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;10 0" dur="0.4166666666666667s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8;stroke-linecap:butt" d="M214 126v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5v-8h5v8h5"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;20 0" dur="0.8333333333333334s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8;stroke-linecap:butt" d="M204 141v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;79 0" dur="1s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8;stroke-linecap:butt" d="M145 169v-8h12v8h67v-8h12v8h67v-8h12v8h67"/></g>
  </g>
  <circle class="fl-line" cx="264.5" cy="147" r="1.3"/><circle class="fl-line" cx="264.5" cy="151.5" r="1.3"/><circle class="fl-line" cx="264.5" cy="156" r="1.3"/>
</g>

<g class="only-1"><text x="160" y="193">מתח מעוות את הגביש,</text><text x="160" y="208">ועיוות שלו מייצר מתח</text></g>
<g class="only-2"><text x="160" y="193">מזלג קול זעיר שרוטט</text><text x="160" y="208">32,768 פעמים בשנייה</text></g>
<g class="only-3">
  <text x="201" y="111" class="sm">32,768</text><text x="201" y="126" class="sm">16,384</text><text x="201" y="141" class="sm">8,192</text><text x="201" y="169" class="sm">1</text>
  <text x="160" y="193">השבב חוצה את הקצב בשתיים</text><text x="160" y="208">15 פעמים, עד פעימה בשנייה</text></g>
<g class="only-4"><text x="160" y="193">כל פעימה מסובבת את המנוע</text><text x="160" y="208">צעד אחד, והמחוג מתקדם</text></g>
`;
