// המקלע: 1 גטלינג — ידית שמסובבת קנים · 2 מקסים — הרתע הודף את הבריח לאחור וקפיץ מחזיר · 3 מחזור: הזנה, ירייה, שליפה, זריקה · 4 מעטפת מים רותחת, ותעלות
export default `
<defs>
  <marker id="machinegun-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="machinegun-win"><rect x="158" y="62" width="66" height="22"/></clipPath>
</defs>
<!-- קרקע -->
<path class="thin" d="M10 140H310"/>

<!-- ===== מקלע מקסים על חצובה ===== -->
<g class="hl-2 hl-3 hl-4">
  <!-- חצובה -->
  <path class="st-dark fl-none" style="stroke-width:3" stroke-linecap="round" d="M196 92L160 139M196 92L236 139M196 92V139"/>
  <!-- תיבת תחמושת וחגור -->
  <rect class="fl-green st-ink" stroke-width="2" x="94" y="112" width="38" height="27" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1.2" d="M100 121h26"/>
  <path class="st-line fl-none" stroke-width="9" stroke-linecap="round" d="M113 112C116 98 140 94 166 91"/>
  <path class="st-warm fl-none" stroke-width="6" stroke-dasharray="3 3" d="M113 112C116 98 140 94 166 91">
    <animate attributeName="stroke-dashoffset" values="0;-6" dur="1.2s" repeatCount="indefinite"/>
  </path>
  <!-- הקנה ומעטפת המים -->
  <path class="st-dark fl-none" style="stroke-width:5" d="M18 72H160"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="16" y="67" width="8" height="10" rx="1.5"/>
  <rect class="body" x="32" y="58" width="120" height="28" rx="5"/>
  <rect class="fl-cold-soft" x="36" y="62" width="112" height="20" rx="3"/>
  <path class="st-dark fl-none" style="stroke-width:5" d="M36 72H148"/>
  <circle class="fl-dark st-ink" stroke-width="1.2" cx="60" cy="56" r="3"/>
  <!-- גוף הנשק עם חלון חתך -->
  <rect class="body" x="150" y="54" width="82" height="38" rx="3"/>
  <rect class="fl-soft st-line" stroke-width="1" x="158" y="62" width="66" height="22"/>
  <g clip-path="url(#machinegun-win)">
    <!-- קפיץ ההחזרה נדחס כשהבריח זז לאחור -->
    <path class="st-ink fl-none" stroke-width="1.5" stroke-linejoin="round" d="M184 72l4 -5l4 10l4 -10l4 10l4 -10l4 10l4 -10l4 10l4 -5">
      <animate attributeName="d" values="M184 72l4 -5l4 10l4 -10l4 10l4 -10l4 10l4 -10l4 10l4 -5;M194 72l3 -5l3 10l3 -10l3 10l3 -10l3 10l3 -10l3 10l4 -5;M194 72l3 -5l3 10l3 -10l3 10l3 -10l3 10l3 -10l3 10l4 -5;M184 72l4 -5l4 10l4 -10l4 10l4 -10l4 10l4 -10l4 10l4 -5;M184 72l4 -5l4 10l4 -10l4 10l4 -10l4 10l4 -10l4 10l4 -5" keyTimes="0;.15;.3;.75;1" dur="1.2s" repeatCount="indefinite"/>
    </path>
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0;10 0;10 0;0 0;0 0" keyTimes="0;.15;.3;.75;1" dur="1.2s" repeatCount="indefinite"/>
      <path class="st-dark fl-none" style="stroke-width:5" d="M150 72H162"/>
      <rect class="fl-line st-ink" stroke-width="1.5" x="160" y="65" width="24" height="14" rx="2"/>
      <path class="st-ink fl-none" stroke-width="1" d="M166 68v8M172 68v8M178 68v8"/>
    </g>
  </g>
  <!-- ידיות אחיזה -->
  <path class="body" style="stroke-width:2" d="M232 60h10q4 0 4 4v18q0 4 -4 4h-10"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="244" y="66" width="6" height="14" rx="2"/>
  <!-- הבזק לוע: מופיע עם כל ירייה -->
  <path class="fl-elec st-warm" stroke-width="1" stroke-linejoin="round" d="M15 72l-7 -6l2 4l-7 -1l6 3l-6 3l7 -1l-2 4z" opacity="0">
    <animate attributeName="opacity" values="1;0;0" keyTimes="0;.12;1" dur="1.2s" repeatCount="indefinite"/>
  </path>
  <!-- תרמילים נזרקים מתחת לגוף הנשק -->
  <rect class="fl-warm st-ink" stroke-width=".8" x="-1.5" y="-4" width="3" height="8" rx="1" opacity="0">
    <animateMotion dur="1.2s" begin="0s" repeatCount="indefinite" path="M206 92Q214 104 218 136" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.2;.7;1" calcMode="linear"/>
    <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.2;.22;.7;.72" dur="1.2s" repeatCount="indefinite"/>
  </rect>
  <path class="fl-warm st-ink" stroke-width=".6" d="M210 138h7v-2.500h-7zM222 139h7v-2.500h-7z"/>
</g>

<!-- שלב 1: מקלע גטלינג, מבט מקדימה -->
<g class="only-1">
  <g class="spin" style="transform-origin:120px 180px;transform-box:view-box">
    <circle class="body" cx="120" cy="180" r="22"/>
    <circle class="fl-dark" cx="120" cy="164" r="4"/><circle class="fl-dark" cx="134" cy="172" r="4"/><circle class="fl-dark" cx="134" cy="188" r="4"/>
    <circle class="fl-dark" cx="120" cy="196" r="4"/><circle class="fl-dark" cx="106" cy="188" r="4"/><circle class="fl-dark" cx="106" cy="172" r="4"/>
    <circle class="fl-hot" cx="120" cy="164" r="2"/>
    <circle class="fl-line st-ink" stroke-width="1.5" cx="120" cy="180" r="4"/>
  </g>
  <!-- הידית מסתובבת עם הקנים -->
  <g class="spin" style="transform-origin:120px 180px;transform-box:view-box">
    <path class="st-ink fl-none" style="stroke-width:3" stroke-linecap="round" d="M120 180L98 164"/>
    <circle class="fl-warm st-ink" stroke-width="1.5" cx="98" cy="164" r="4.500"/>
  </g>
  <text x="236" y="168">גטלינג: יד מסובבת</text>
  <text x="236" y="184">ידית, וכל קנה</text>
  <text x="236" y="200">יורה בתורו</text>
  <text x="160" y="30">מקסים ייתר את הידית</text>
</g>

<!-- שלב 2: רתע -->
<g class="only-2">
  <text x="200" y="22">הרתע הודף את הבריח</text>
  <path class="arrow st-hot" d="M176 38H226" marker-end="url(#machinegun-a)"/>
  <text x="70" y="36">הקליע — קדימה</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M96 46H30" marker-end="url(#machinegun-a)"/>
  <text x="274" y="112">קפיץ נדחס</text>
  <text x="274" y="126">ומחזיר קדימה</text>
  <path class="thin st-ink" d="M256 102L214 80"/>
</g>

<!-- שלב 3: מחזור הירי -->
<g class="only-3">
  <text x="58" y="104">חגור כדורים</text>
  <text x="270" y="118">תרמיל נזרק</text>
  <g>
    <rect class="body" style="stroke-width:1.5" x="244" y="162" width="56" height="24" rx="5"/>
    <rect class="body" style="stroke-width:1.5" x="170" y="162" width="56" height="24" rx="5"/>
    <rect class="body" style="stroke-width:1.5" x="96" y="162" width="56" height="24" rx="5"/>
    <rect class="body" style="stroke-width:1.5" x="22" y="162" width="56" height="24" rx="5"/>
    <rect class="fl-warm" x="244" y="162" width="56" height="24" rx="5" opacity=".55">
      <animate attributeName="x" values="244;170;96;22" keyTimes="0;.25;.5;.75" calcMode="discrete" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".55;.35;.55" dur="1.2s" repeatCount="indefinite"/>
    </rect>
    <text x="272" y="178">הזנה</text>
    <text x="198" y="178">ירייה</text>
    <text x="124" y="178">שליפה</text>
    <text x="50" y="178">זריקה</text>
    <path class="arrow st-ink" style="stroke-width:1.5" d="M243 174H229M169 174H155M95 174H81" marker-end="url(#machinegun-a)"/>
    <path class="arrow st-line" style="stroke-width:1.5" d="M50 188V198Q50 204 56 204H266Q272 204 272 198V190" marker-end="url(#machinegun-a)"/>
  </g>
</g>

<!-- שלב 4: מעטפת המים רותחת, ותעלות -->
<g class="only-4">
  <path class="st-hot fl-none" style="stroke-width:5" d="M36 72H148"><animate attributeName="opacity" values=".4;1;.4" dur="1.4s" repeatCount="indefinite"/></path>
  <g class="fl-panel st-cold" stroke-width="1">
    <circle cx="56" cy="80" r="1.8"><animate attributeName="cy" values="81;64" dur="1.1s" repeatCount="indefinite"/></circle>
    <circle cx="88" cy="80" r="1.5"><animate attributeName="cy" values="81;64" dur="1.1s" begin="-.4s" repeatCount="indefinite"/></circle>
    <circle cx="118" cy="80" r="1.8"><animate attributeName="cy" values="81;64" dur="1.1s" begin="-.8s" repeatCount="indefinite"/></circle>
    <circle cx="136" cy="80" r="1.4"><animate attributeName="cy" values="81;64" dur="1.1s" begin="-.2s" repeatCount="indefinite"/></circle>
  </g>
  <g class="thin fade"><path d="M60 50q-4 -5 0 -10t0 -10"/><path d="M66 50q4 -5 0 -10t0 -10"/></g>
  <text x="128" y="30">המים רותחים ונושאים את החום</text>
</g>
<!-- חזית של תעלות (גם במבט הכולל) -->
<g class="from-4">
  <path class="fl-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M10 172H34V196H52V172H262V196H280V172H310V212H10Z"/>
  <circle class="fl-dark" cx="43" cy="172" r="4"/><circle class="fl-dark" cx="271" cy="172" r="4"/>
  <path class="st-ink fl-none" stroke-width="1" d="M120 172l6 -8l6 8l6 -8l6 8l6 -8l6 8l6 -8l6 8M120 166h54"/>
  <path class="wire st-hot dash" style="stroke-width:1.5" d="M262 161H56"/>
  <g class="only-4"><text x="160" y="152">שטח הפקר בין התעלות</text></g>
</g>
`;
