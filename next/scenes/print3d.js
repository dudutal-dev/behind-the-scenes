// מדפסת תלת־ממד: 1 המודל נפרס לשכבות במחשב · 2 חוט פלסטיק נמס בראש החם · 3 הפייה מניחה קו אחר קו · 4 המשטח יורד ושכבה נבנית על שכבה
export default `
<defs>
  <clipPath id="print3d-vase"><path transform="translate(210 0)" d="M-22 0L22 0C44 -14 38 -30 20 -36L24 -50L-24 -50L-20 -36C-38 -30 -44 -14 -22 0Z"/></clipPath>
  <clipPath id="print3d-model"><path d="M-22 0L22 0C44 -14 38 -30 20 -36L24 -50L-24 -50L-20 -36C-38 -30 -44 -14 -22 0Z"/></clipPath>
  <clipPath id="print3d-in"><rect x="128" y="34" width="170" height="156"/></clipPath>
  <marker id="print3d-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- המחשב והמודל הפרוס -->
<g class="hl-1">
  <path class="body" d="M48 112h16v10h-16z"/>
  <rect class="fl-dark" x="38" y="121" width="36" height="5" rx="2"/>
  <rect class="body" x="12" y="40" width="88" height="72" rx="6"/>
  <rect class="fl-cold-soft" x="17" y="45" width="78" height="62" rx="3"/>
  <g transform="translate(56 102) scale(.78)">
    <path class="fl-panel" d="M-22 0L22 0C44 -14 38 -30 20 -36L24 -50L-24 -50L-20 -36C-38 -30 -44 -14 -22 0Z"/>
    <g clip-path="url(#print3d-model)"><path class="thin" style="stroke-width:1" d="M-44 -5H44M-44 -10H44M-44 -15H44M-44 -20H44M-44 -25H44M-44 -30H44M-44 -35H44M-44 -40H44M-44 -45H44"/></g>
    <path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M-22 0L22 0C44 -14 38 -30 20 -36L24 -50L-24 -50L-20 -36C-38 -30 -44 -14 -22 0Z"/>
  </g>
  <path class="thin" d="M100 98h9v100h5"/>
</g>
<g class="only-1">
  <g transform="translate(56 102) scale(.78)">
    <g clip-path="url(#print3d-model)">
      <rect class="fl-warm" x="-44" y="0" width="88" height="0"><animate attributeName="y" values="0;-50;-50" keyTimes="0;.8;1" dur="3s" repeatCount="indefinite"/><animate attributeName="height" values="0;50;50" keyTimes="0;.8;1" dur="3s" repeatCount="indefinite"/></rect>
      <path class="fl-none" stroke="var(--s-bg)" stroke-width="1" d="M-44 -5H44M-44 -10H44M-44 -15H44M-44 -20H44M-44 -25H44M-44 -30H44M-44 -35H44M-44 -40H44M-44 -45H44"/>
    </g>
    <path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M-22 0L22 0C44 -14 38 -30 20 -36L24 -50L-24 -50L-20 -36C-38 -30 -44 -14 -22 0Z"/>
    <path class="wire st-hot" d="M-46 0H46"><animateTransform attributeName="transform" type="translate" values="0 0;0 -50;0 -50" keyTimes="0;.8;1" dur="3s" repeatCount="indefinite"/></path>
  </g>
  <path class="wire st-elec dash" d="M100 98h9v100h5"/>
  <text x="55" y="150">התוכנה פורסת</text>
  <text x="55" y="164">את המודל לשכבות</text>
</g>

<!-- שלד המדפסת -->
<rect class="fl-soft" x="128" y="34" width="170" height="156"/>
<path class="st-line fl-none" stroke-width="4" d="M128 91H298"/>

<!-- משטח ההדפסה והחפץ: יורדים שכבה אחר שכבה -->
<g clip-path="url(#print3d-in)"><g class="hl-3 hl-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 123;0 128;0 133;0 138;0 143;0 148;0 153;0 158;0 163;0 168;0 168;0 168" calcMode="discrete" dur="12s" begin="-5.4s" repeatCount="indefinite"/>
    <rect class="fl-line" x="205" y="5" width="10" height="90"/>
    <rect class="fl-dark st-ink" stroke-width="2" x="150" y="0" width="120" height="6" rx="2"/>
    <g clip-path="url(#print3d-vase)">
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-5" width="0" height="5"><animate attributeName="width" values="0;80;80" keyTimes="0;0.0833;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-10" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.0833;0.1667;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/><animate attributeName="x" values="250;250;170;170" keyTimes="0;0.0833;0.1667;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-15" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.1667;0.25;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-20" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.25;0.3333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/><animate attributeName="x" values="250;250;170;170" keyTimes="0;0.25;0.3333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-25" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.3333;0.4167;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-30" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.4167;0.5;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/><animate attributeName="x" values="250;250;170;170" keyTimes="0;0.4167;0.5;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-35" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.5;0.5833;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-40" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.5833;0.6667;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/><animate attributeName="x" values="250;250;170;170" keyTimes="0;0.5833;0.6667;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-45" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.6667;0.75;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    <rect class="fl-warm" stroke="var(--s-bg)" stroke-width=".7" x="170" y="-50" width="0" height="5"><animate attributeName="width" values="0;0;80;80" keyTimes="0;0.75;0.8333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/><animate attributeName="x" values="250;250;170;170" keyTimes="0;0.75;0.8333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></rect>
    </g>
  </g>
</g></g>

<!-- גליל החוט -->
<g class="hl-2">
  <line class="wire st-warm" x1="262" y1="60" x2="170" y2="80"><animate attributeName="x2" values="170;250;170;250;170;250;170;250;170;250;170;170" keyTimes="0;0.0833;0.1667;0.25;0.3333;0.4167;0.5;0.5833;0.6667;0.75;0.8333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></line>
  <circle class="fl-warm st-ink" stroke-width="2" cx="276" cy="54" r="15"/>
  <circle class="fl-none" stroke="var(--s-bg)" stroke-opacity=".6" stroke-width="1" cx="276" cy="54" r="11"/>
  <circle class="fl-none" stroke="var(--s-bg)" stroke-opacity=".6" stroke-width="1" cx="276" cy="54" r="8"/>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="276" cy="54" r="4.5"/>
</g>
<g class="only-2"><line class="flow" x1="262" y1="60" x2="170" y2="80"><animate attributeName="x2" values="170;250;170;250;170;250;170;250;170;250;170;170" keyTimes="0;0.0833;0.1667;0.25;0.3333;0.4167;0.5;0.5833;0.6667;0.75;0.8333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/></line></g>

<!-- ראש ההדפסה: נע ימינה ושמאלה לאורך המסילה -->
<g class="hl-2 hl-3 hl-4">
  <g><animateTransform attributeName="transform" type="translate" values="170 0;250 0;170 0;250 0;170 0;250 0;170 0;250 0;170 0;250 0;170 0;170 0" keyTimes="0;0.0833;0.1667;0.25;0.3333;0.4167;0.5;0.5833;0.6667;0.75;0.8333;1" dur="12s" begin="-5.4s" repeatCount="indefinite"/>
    <rect class="body" x="-13" y="80" width="26" height="22" rx="3"/>
    <path class="thin" d="M-8 87H8M-8 91.500H8M-8 96H8"/>
    <path class="wire st-warm" style="stroke-width:2" d="M0 80V103"/>
    <rect class="fl-hot st-ink" stroke-width="1.5" x="-7" y="102" width="14" height="8" rx="1.5"/>
    <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-5 110H5L1.500 118H-1.500Z"/>
    <g class="only-2">
      <circle class="ring st-hot" cx="0" cy="106" r="16"/><circle class="ring st-hot d3" cx="0" cy="106" r="16"/>
      <path class="flow" d="M0 80V103"/>
    </g>
    <g class="only-3"><circle class="fl-hot pulse" cx="0" cy="119" r="3.200"/></g>
    <g class="only-4"><circle class="fl-hot" cx="0" cy="119" r="2.400"/></g>
  </g>
</g>

<!-- מסגרת -->
<rect class="body" x="120" y="30" width="8" height="162"/>
<rect class="body" x="298" y="30" width="8" height="162"/>
<rect class="body" x="116" y="24" width="194" height="10" rx="3"/>
<rect class="body" x="114" y="190" width="198" height="16" rx="4"/>
<circle class="fl-green" cx="126" cy="198" r="2.200"><animate attributeName="opacity" values="1;.3;1" dur="2.400s" repeatCount="indefinite"/></circle>
<path class="thin" d="M136 198h20"/>

<g class="only-2">
  <text x="55" y="150">חוט פלסטיק נדחף</text>
  <text x="55" y="164">לראש החם ונמס</text>
</g>
<g class="only-3">
  <text x="55" y="150">הפייה מניחה</text>
  <text x="55" y="164">קו אחר קו</text>
</g>
<g class="only-4">
  <path class="arrow st-ink dash" style="stroke-width:2" d="M284 128V166" marker-end="url(#print3d-a)"/>
  <text x="55" y="150">המשטח יורד,</text>
  <text x="55" y="164">ושכבה נבנית</text>
  <text x="55" y="178">על שכבה</text>
</g>
`;
