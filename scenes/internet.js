// האינטרנט: 1 ההודעה נחתכת לחבילות ממוספרות עם כתובת · 2 ספר הטלפונים הופך שם לכתובת מספרית · 3 חבילות קופצות מנתב לנתב ועוקפות קו שנפל · 4 היעד מסדר לפי מספר ומבקש שוב את החסרה
export default `
<!-- רשת הנתבים -->
<g class="hl-3">
  <path class="wire st-line" style="stroke-width:2" d="M236 100L196 62M236 100L196 138M236 100L156 100M196 62L156 100M196 138L156 100M196 62L116 62M196 138L116 138M156 100L116 62M156 100L116 138M116 62L76 100M116 138L76 100"/>
</g>
<path class="wire st-line" style="stroke-width:2" d="M282 100H236M76 100H54"/>
<g class="from-3">
  <path d="M172 62H140" style="stroke:var(--s-bg);stroke-width:6;fill:none"/>
  <path class="wire st-hot" d="M151 57l10 10M161 57l-10 10"/>
</g>
<g class="hl-3">
  <circle class="body" cx="236" cy="100" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M232 96l8 8M232 104l8-8"/>
  <circle class="body" cx="196" cy="62" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M192 58l8 8M192 66l8-8"/>
  <circle class="body" cx="196" cy="138" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M192 134l8 8M192 142l8-8"/>
  <circle class="body" cx="156" cy="100" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M152 96l8 8M152 104l8-8"/>
  <circle class="body" cx="116" cy="62" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M112 58l8 8M112 66l8-8"/>
  <circle class="body" cx="116" cy="138" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M112 134l8 8M112 142l8-8"/>
  <circle class="body" cx="76" cy="100" r="9"/><path class="thin st-ink" style="stroke-width:1.4" d="M72 96l8 8M72 104l8-8"/>
</g>

<!-- השולח: טלפון -->
<rect class="body" x="282" y="74" width="26" height="52" rx="5"/>
<rect class="fl-cold-soft" x="285.5" y="80" width="19" height="36" rx="1.5"/>
<path class="thin" d="M290 87h10M290 93h7"/>
<circle class="fl-line" cx="295" cy="121" r="1.8"/>
<!-- המקבל: מחשב נייד -->
<rect class="body" x="14" y="76" width="40" height="30" rx="3"/>
<rect class="fl-cold-soft" x="18" y="80" width="32" height="22" rx="1"/>
<path class="body" d="M8 106H60l-4 7H12z"/>
<text class="sm" x="34" y="129" style="direction:ltr;">192.0.2.7</text>

<!-- ההודעה אצל השולח, מחולקת לחבילות ממוספרות -->
<g class="hl-1">
  <rect class="body" x="216" y="166" width="88" height="18" rx="3"/>
  <path class="thin st-ink" d="M238 166V184M260 166V184M282 166V184"/>
  <text x="293" y="179" style="stroke:none">1</text><text x="271" y="179" style="stroke:none">2</text><text x="249" y="179" style="stroke:none">3</text><text x="227" y="179" style="stroke:none">4</text>
</g>
<!-- מקום להרכבה אצל המקבל -->
<g class="hl-4">
  <rect class="thin" stroke-dasharray="3 3" x="16" y="166" width="88" height="18" rx="3"/>
  <path class="thin" stroke-dasharray="3 3" d="M38 166V184M60 166V184M82 166V184"/>
</g>

<!-- ספר הטלפונים של הרשת -->
<g class="hl-2">
  <path class="wire st-line" style="stroke-width:2" d="M190 44L194 54"/>
  <rect class="body" x="108" y="8" width="96" height="36" rx="3"/>
  <path class="thin st-ink" d="M156 8V44"/>
  <rect class="fl-elec" opacity=".4" x="111" y="20" width="90" height="12" rx="2"/>
  <path class="thin" d="M164 15h32M116 15h32M164 38h32M116 38h32"/>
  <text class="sm" x="180" y="29.5" style="stroke:none;direction:ltr;">site.co.il</text>
  <text class="sm" x="132" y="29.5" style="stroke:none;direction:ltr;">192.0.2.7</text>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <path class="thin st-hot blink" stroke-dasharray="2 3" d="M238 161V189M260 161V189M282 161V189"/>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">1</text><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M293 166L295 132V100H240"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">2</text><animateMotion dur="3.2s" begin="-0.8s" repeatCount="indefinite" path="M271 166L295 132V100H240"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">3</text><animateMotion dur="3.2s" begin="-1.6s" repeatCount="indefinite" path="M249 166L295 132V100H240"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">4</text><animateMotion dur="3.2s" begin="-2.4000000000000004s" repeatCount="indefinite" path="M227 166L295 132V100H240"/></g>
  <rect class="body" x="216" y="6" width="92" height="46" rx="4"/>
  <rect class="fl-cold" x="217.5" y="7.5" width="89" height="5" rx="2"/>
  <text class="sm" x="262" y="24" style="stroke:none">אל: 192.0.2.7</text>
  <text class="sm" x="262" y="35" style="stroke:none">מאת: 10.0.0.5</text>
  <text class="sm" x="262" y="46" style="stroke:none">חבילה 2 מתוך 4</text>
  <text x="56" y="24">חותכים לחבילות</text>
  <text x="56" y="39">כתובת ומספר על כל אחת</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text class="sm" x="284" y="67" style="direction:ltr;">site.co.il</text>
  <circle class="fl-violet st-ink" stroke-width="1" r="4"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.45;1" calcMode="linear" path="M282 100L236 100L196 62L190 44"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.45;.46;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-green st-ink" stroke-width="1" r="4"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.5;1" calcMode="linear" path="M190 44L196 62L236 100L282 100"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.5;.51;1" dur="3s" repeatCount="indefinite"/></circle>
  <rect class="fl-none st-elec pulse" stroke-width="2" x="111" y="20" width="90" height="12" rx="2"/>
  <circle class="ring st-green" cx="34" cy="94" r="30"/>
  <text x="56" y="24">ספר הטלפונים</text>
  <text x="56" y="39">של הרשת</text>
  <text x="160" y="176">שם האתר הופך</text>
  <text x="160" y="191">לכתובת מספרית</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">1</text><animateMotion dur="5.2s" begin="-0.6s" repeatCount="indefinite" path="M282 100L236 100L196 138L116 138L76 100L54 100"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">2</text><animateMotion dur="5.2s" begin="-1.9s" repeatCount="indefinite" path="M282 100L236 100L156 100L116 62L76 100L54 100"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">3</text><animateMotion dur="5.2s" begin="-3.2s" repeatCount="indefinite" path="M282 100L236 100L196 138L156 100L116 138L76 100L54 100"/></g>
  <g><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">4</text><animateMotion dur="5.2s" begin="-4.5s" repeatCount="indefinite" path="M282 100L236 100L196 62L170 62L196 62L156 100L116 62L76 100L54 100"/></g>
  <text x="56" y="24">מנתב לנתב,</text>
  <text x="56" y="39">כל חבילה בדרכה</text>
  <text x="160" y="176">קו נפל?</text>
  <text x="160" y="191">עוקפים אותו</text>
</g>
<!-- שלב 4 -->
<g class="from-4">
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-9" y="-7" width="18" height="14" rx="2"/><rect class="fl-cold" x="-8" y="-6" width="16" height="3"/><text class="sm" y="5.4" style="stroke:none;font-weight:700">2</text><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.04;0.13;1" path="M76 100L40 100L34 120L71 175"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.04;0.05;.97;1" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-9" y="-7" width="18" height="14" rx="2"/><rect class="fl-cold" x="-8" y="-6" width="16" height="3"/><text class="sm" y="5.4" style="stroke:none;font-weight:700">4</text><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.14;0.23;1" path="M76 100L40 100L34 120L27 175"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.14;0.15;.97;1" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-9" y="-7" width="18" height="14" rx="2"/><rect class="fl-cold" x="-8" y="-6" width="16" height="3"/><text class="sm" y="5.4" style="stroke:none;font-weight:700">1</text><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.24;0.33;1" path="M76 100L40 100L34 120L93 175"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.24;0.25;.97;1" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-9" y="-7" width="18" height="14" rx="2"/><rect class="fl-cold" x="-8" y="-6" width="16" height="3"/><text class="sm" y="5.4" style="stroke:none;font-weight:700">3</text><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.76;0.85;1" path="M76 100L40 100L34 120L49 175"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.76;0.77;.97;1" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <rect class="fl-none st-green" stroke-width="2.5" x="14" y="164" width="92" height="22" rx="4" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.86;.88;.97;1" dur="7s" begin="-2.5s" repeatCount="indefinite"/></rect>
</g>
<g class="only-4">
  <g opacity="0"><text class="lg blink" x="49" y="180" style="fill:var(--s-hot)">?</text><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.34;.82" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <circle class="fl-hot st-ink" stroke-width="1" r="4" opacity="0"><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.38;.56;1" path="M54 100L76 100L116 62L156 100L236 100L282 100"/><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.38;.56" dur="7s" begin="-2.5s" repeatCount="indefinite"/></circle>
  <g opacity="0"><rect class="body" style="stroke-width:1.5" x="-7" y="-6" width="14" height="12" rx="2"/><rect class="fl-cold" x="-6" y="-5" width="12" height="3"/><text class="sm" y="4.4" style="stroke:none;font-weight:700">3</text><animateMotion dur="7s" begin="-2.5s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.58;.76;1" path="M282 100L236 100L196 138L116 138L76 100"/><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.58;.76" dur="7s" begin="-2.5s" repeatCount="indefinite"/></g>
  <text x="56" y="24">מגיעות מבולבלות,</text>
  <text x="56" y="39">מסדרים לפי מספר</text>
  <text x="160" y="176">חבילה 3 אבדה:</text>
  <text x="160" y="191">מבקשים אותה שוב</text>
</g>
`;
