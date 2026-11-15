// תשלום בהצמדה: 1 שדה מגנטי מתחלף מסליל המסוף · 2 צימוד בין שני הסלילים · 3 טוקן וקוד חד־פעמי · 4 חברת האשראי מאשרת
export default `
<!-- טלפון -->
<g class="hl-2 hl-3">
  <rect class="body" x="18" y="52" width="44" height="112" rx="8"/>
  <rect class="fl-soft" x="22" y="60" width="36" height="96" rx="3"/>
  <rect class="fl-ink" x="34" y="55" width="12" height="2.4" rx="1.2"/>
  <!-- הכרטיס שבארנק הדיגיטלי -->
  <rect class="fl-cold st-ink" stroke-width="1.5" x="26" y="64" width="28" height="18" rx="3"/>
  <rect class="fl-elec" x="29" y="68" width="7" height="5" rx="1"/>
  <path d="M29 77h12M44 77h7" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  <g class="from-3">
    <path class="fl-none st-ink" stroke-width="1.8" d="M47 63v-3a3.5 3.5 0 0 1 7 0v3"/>
    <rect class="fl-elec st-ink" stroke-width="1.2" x="45" y="63" width="11" height="8" rx="2"/>
  </g>
  <rect class="fl-line" x="33" y="150" width="14" height="2.4" rx="1.2"/>
</g>

<!-- מסוף תשלום -->
<rect class="body" x="98" y="40" width="70" height="136" rx="10"/>
<rect class="fl-cold-soft st-ink" stroke-width="1.5" x="106" y="48" width="54" height="22" rx="4"/>
<path class="thin st-ink" d="M114 55q3.5 4 0 8M119 52.5q5.5 6.5 0 13M124 50q7.5 9 0 18"/>
<path class="arrow st-green from-4" d="M138 59l5 5l9-10"/>
<g class="fl-line">
  <rect x="130" y="146" width="8" height="5" rx="1.5"/><rect x="141" y="146" width="8" height="5" rx="1.5"/><rect x="152" y="146" width="8" height="5" rx="1.5"/>
  <rect x="130" y="154" width="8" height="5" rx="1.5"/><rect x="141" y="154" width="8" height="5" rx="1.5"/><rect x="152" y="154" width="8" height="5" rx="1.5"/>
  <rect x="130" y="162" width="8" height="5" rx="1.5"/><rect x="141" y="162" width="8" height="5" rx="1.5"/><rect class="fl-green" x="152" y="162" width="8" height="5" rx="1.5"/>
</g>

<!-- קווי השדה המגנטי המתחלף, עוברים דרך שני הסלילים -->
<g class="hl-1 hl-2 st-violet" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="5 6">
  <path d="M28 118H134"><animate attributeName="stroke-dashoffset" values="0;-22;0" dur="1.8s" repeatCount="indefinite"/></path>
  <ellipse cx="81" cy="118" rx="44" ry="26"><animate attributeName="stroke-dashoffset" values="0;-22;0" dur="1.8s" repeatCount="indefinite"/></ellipse>
  <ellipse cx="81" cy="118" rx="58" ry="40"><animate attributeName="stroke-dashoffset" values="0;22;0" dur="1.8s" repeatCount="indefinite"/></ellipse>
</g>

<!-- הסלילים -->
<g class="wire st-warm" style="stroke-width:2.2">
  <ellipse cx="107" cy="118" rx="4" ry="16"/><ellipse cx="112" cy="118" rx="4" ry="16"/><ellipse cx="117" cy="118" rx="4" ry="16"/>
</g>
<g class="wire st-warm hl-2 hl-3" style="stroke-width:2.2">
  <ellipse cx="45" cy="118" rx="4" ry="16"/><ellipse cx="50" cy="118" rx="4" ry="16"/><ellipse cx="55" cy="118" rx="4" ry="16"/>
</g>

<!-- הקו לחברת האשראי -->
<g class="hl-4">
  <path class="pipe st-violet" d="M168 104H232"/><path class="flow" d="M168 104H232"/>
  <path class="pipe st-green" d="M232 122H168"/><path class="flow" d="M232 122H168"/>
</g>
<!-- חברת האשראי -->
<g class="hl-4">
  <rect class="fl-soft" x="232" y="86" width="68" height="48"/>
  <rect class="body" x="236" y="86" width="8" height="48"/><rect class="body" x="252" y="86" width="8" height="48"/>
  <rect class="body" x="272" y="86" width="8" height="48"/><rect class="body" x="288" y="86" width="8" height="48"/>
  <rect class="body" x="230" y="78" width="72" height="8"/>
  <path class="body" d="M226 78L266 54L306 78z"/>
  <circle class="fl-elec st-ink" stroke-width="1.5" cx="266" cy="69" r="5"/>
  <rect class="body" x="228" y="134" width="76" height="7"/>
  <rect class="body" x="223" y="141" width="86" height="7"/>
</g>

<!-- שלב 1: זרם מתחלף בסליל המסוף, טווח קצר -->
<g class="only-1">
  <g class="wire st-elec fade" style="stroke-width:2.2">
    <ellipse cx="107" cy="118" rx="4" ry="16"/><ellipse cx="112" cy="118" rx="4" ry="16"/><ellipse cx="117" cy="118" rx="4" ry="16"/>
  </g>
  <path class="thin st-ink" d="M62 184v8M98 184v8M62 188H98"/>
  <text x="80" y="207">סנטימטרים בודדים</text>
  <text x="76" y="26">שדה מגנטי מתחלף</text>
</g>
<!-- שלב 2: השדה משרה זרם בסליל הטלפון, נתונים לשני הכיוונים -->
<g class="only-2">
  <g class="wire st-elec fade" style="stroke-width:2.2">
    <ellipse cx="107" cy="118" rx="4" ry="16"/><ellipse cx="112" cy="118" rx="4" ry="16"/><ellipse cx="117" cy="118" rx="4" ry="16"/>
  </g>
  <g class="wire st-elec fade d3" style="stroke-width:2.2">
    <ellipse cx="45" cy="118" rx="4" ry="16"/><ellipse cx="50" cy="118" rx="4" ry="16"/><ellipse cx="55" cy="118" rx="4" ry="16"/>
  </g>
  <rect class="fl-cold" x="-2.5" y="-2.5" width="5" height="5" rx="1"><animateMotion dur="1.2s" repeatCount="indefinite" path="M102 110H60"/></rect>
  <rect class="fl-cold" x="-2.5" y="-2.5" width="5" height="5" rx="1"><animateMotion dur="1.2s" begin="-.6s" repeatCount="indefinite" path="M102 110H60"/></rect>
  <rect class="fl-green" x="-2.5" y="-2.5" width="5" height="5" rx="1"><animateMotion dur="1.2s" begin="-.3s" repeatCount="indefinite" path="M60 126H102"/></rect>
  <rect class="fl-green" x="-2.5" y="-2.5" width="5" height="5" rx="1"><animateMotion dur="1.2s" begin="-.9s" repeatCount="indefinite" path="M60 126H102"/></rect>
  <text x="80" y="26">שני סלילים קרובים</text>
  <text x="80" y="200">נתונים בשני הכיוונים</text>
</g>
<!-- שלב 3: טוקן וקוד חד־פעמי עוברים מהטלפון למסוף -->
<g class="only-3">
  <g>
    <rect class="fl-violet" x="-17" y="-8" width="34" height="16" rx="8"/>
    <text y="4" style="stroke:none;fill:var(--s-panel)">טוקן</text>
    <animateMotion dur="3s" repeatCount="indefinite" path="M40 44C54 10 112 6 132 32"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.88;1" dur="3s" repeatCount="indefinite"/>
  </g>
  <g>
    <rect class="fl-hot" x="-15" y="-8" width="30" height="16" rx="8"/>
    <text y="4" style="stroke:none;fill:var(--s-panel)">קוד</text>
    <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M40 44C54 10 112 6 132 32"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.88;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/>
  </g>
  <text x="80" y="193">טוקן וקוד חד־פעמי</text>
  <text x="80" y="208">במקום מספר הכרטיס</text>
</g>
<!-- שלב 4: המסוף שואל, חברת האשראי מזהה את הטוקן ומאשרת -->
<g class="only-4">
  <circle class="fl-violet st-ink" stroke-width="1" r="4"><animateMotion dur="1.4s" repeatCount="indefinite" path="M168 104H232"/></circle>
  <circle class="fl-green st-ink" stroke-width="1" r="4"><animateMotion dur="1.4s" begin="-.7s" repeatCount="indefinite" path="M232 122H168"/></circle>
  <rect class="fl-violet" x="212" y="20" width="34" height="16" rx="8"/>
  <text x="229" y="32" style="stroke:none;fill:var(--s-panel)">טוקן</text>
  <path class="arrow st-ink" stroke-width="1.8" d="M250 28H262" marker-end="url(#nfc-a)"/>
  <rect class="fl-cold st-ink" stroke-width="1.5" x="268" y="18" width="30" height="20" rx="3"/>
  <rect class="fl-elec" x="271" y="22" width="7" height="5" rx="1"/>
  <path d="M271 32h12M286 32h8" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  <g class="pulse"><circle class="fl-green st-ink" stroke-width="1.2" cx="300" cy="38" r="7"/><path d="M296.5 38l2.6 2.8l4.6-5.4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>
  <text x="240" y="172">חברת האשראי מאשרת</text>
</g>
<defs>
  <marker id="nfc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-ink"/>
  </marker>
</defs>
`;
