// השכפ״ץ: 1 קליע — אנרגיה בנקודה קטנה · 2 שכבות סיבי ארמיד נמתחות, פורסות את המכה, והקליע מתרחב ונעצר · 3 לוח קרמי מנפץ ומקהה קליע רובה · 4 השריון נדחק פנימה וגורם חבלה בגוף
export default `
<defs>
  <clipPath id="bodyarmor-weave"><rect x="24" y="136" width="80" height="60" rx="4"/></clipPath>
</defs>
<!-- הגוף: עור וצלעות -->
<g class="hl-4">
  <path class="fl-soft" d="M198 22H312V200H198Z"/>
  <path class="fl-warm" opacity=".22" d="M198 22H312V200H198Z"/>
  <g class="fl-panel st-line" stroke-width="1.5">
    <ellipse cx="222" cy="44" rx="7" ry="9"/><ellipse cx="222" cy="77" rx="7" ry="9"/><ellipse cx="222" cy="110" rx="7" ry="9"/>
    <ellipse cx="222" cy="143" rx="7" ry="9"/><ellipse cx="222" cy="176" rx="7" ry="9"/>
  </g>
  <path class="st-warm fl-none" style="stroke-width:3" d="M198 22V78C198 98 198 100 198 110C198 120 198 122 198 142V200"><animate attributeName="d" values="M198 22V78C198 98 198 100 198 110C198 120 198 122 198 142V200;M198 22V78C198 98 198 100 198 110C198 120 198 122 198 142V200;M198 22V78C198 98 206 100 206 110C206 120 206 122 198 142V200;M198 22V78C198 98 206 100 206 110C206 120 206 122 198 142V200;M198 22V78C198 98 198 100 198 110C198 120 198 122 198 142V200" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path>
</g>
<!-- האפוד: כיסוי בד ושכבות ארמיד -->
<g class="hl-2">
  <path class="st-line fl-none" stroke-width="1.5" d="M154 26V194M192 26V194"/>
  <g class="st-elec fl-none" style="stroke-width:2.2"><path d="M158.0 30V78C158.0 98 158.0 100 158.0 110C158.0 120 158.0 122 158.0 142V190"><animate attributeName="d" values="M158.0 30V78C158.0 98 158.0 100 158.0 110C158.0 120 158.0 122 158.0 142V190;M158.0 30V78C158.0 98 158.0 100 158.0 110C158.0 120 158.0 122 158.0 142V190;M158.0 30V78C158.0 98 171.0 100 171.0 110C171.0 120 158.0 122 158.0 142V190;M158.0 30V78C158.0 98 171.0 100 171.0 110C171.0 120 158.0 122 158.0 142V190;M158.0 30V78C158.0 98 158.0 100 158.0 110C158.0 120 158.0 122 158.0 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M161.6 30V78C161.6 98 161.6 100 161.6 110C161.6 120 161.6 122 161.6 142V190"><animate attributeName="d" values="M161.6 30V78C161.6 98 161.6 100 161.6 110C161.6 120 161.6 122 161.6 142V190;M161.6 30V78C161.6 98 161.6 100 161.6 110C161.6 120 161.6 122 161.6 142V190;M161.6 30V78C161.6 98 174.1 100 174.1 110C174.1 120 161.6 122 161.6 142V190;M161.6 30V78C161.6 98 174.1 100 174.1 110C174.1 120 161.6 122 161.6 142V190;M161.6 30V78C161.6 98 161.6 100 161.6 110C161.6 120 161.6 122 161.6 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M165.2 30V78C165.2 98 165.2 100 165.2 110C165.2 120 165.2 122 165.2 142V190"><animate attributeName="d" values="M165.2 30V78C165.2 98 165.2 100 165.2 110C165.2 120 165.2 122 165.2 142V190;M165.2 30V78C165.2 98 165.2 100 165.2 110C165.2 120 165.2 122 165.2 142V190;M165.2 30V78C165.2 98 177.2 100 177.2 110C177.2 120 165.2 122 165.2 142V190;M165.2 30V78C165.2 98 177.2 100 177.2 110C177.2 120 165.2 122 165.2 142V190;M165.2 30V78C165.2 98 165.2 100 165.2 110C165.2 120 165.2 122 165.2 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M168.8 30V78C168.8 98 168.8 100 168.8 110C168.8 120 168.8 122 168.8 142V190"><animate attributeName="d" values="M168.8 30V78C168.8 98 168.8 100 168.8 110C168.8 120 168.8 122 168.8 142V190;M168.8 30V78C168.8 98 168.8 100 168.8 110C168.8 120 168.8 122 168.8 142V190;M168.8 30V78C168.8 98 180.3 100 180.3 110C180.3 120 168.8 122 168.8 142V190;M168.8 30V78C168.8 98 180.3 100 180.3 110C180.3 120 168.8 122 168.8 142V190;M168.8 30V78C168.8 98 168.8 100 168.8 110C168.8 120 168.8 122 168.8 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M172.4 30V78C172.4 98 172.4 100 172.4 110C172.4 120 172.4 122 172.4 142V190"><animate attributeName="d" values="M172.4 30V78C172.4 98 172.4 100 172.4 110C172.4 120 172.4 122 172.4 142V190;M172.4 30V78C172.4 98 172.4 100 172.4 110C172.4 120 172.4 122 172.4 142V190;M172.4 30V78C172.4 98 183.4 100 183.4 110C183.4 120 172.4 122 172.4 142V190;M172.4 30V78C172.4 98 183.4 100 183.4 110C183.4 120 172.4 122 172.4 142V190;M172.4 30V78C172.4 98 172.4 100 172.4 110C172.4 120 172.4 122 172.4 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M176.0 30V78C176.0 98 176.0 100 176.0 110C176.0 120 176.0 122 176.0 142V190"><animate attributeName="d" values="M176.0 30V78C176.0 98 176.0 100 176.0 110C176.0 120 176.0 122 176.0 142V190;M176.0 30V78C176.0 98 176.0 100 176.0 110C176.0 120 176.0 122 176.0 142V190;M176.0 30V78C176.0 98 186.5 100 186.5 110C186.5 120 176.0 122 176.0 142V190;M176.0 30V78C176.0 98 186.5 100 186.5 110C186.5 120 176.0 122 176.0 142V190;M176.0 30V78C176.0 98 176.0 100 176.0 110C176.0 120 176.0 122 176.0 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M179.6 30V78C179.6 98 179.6 100 179.6 110C179.6 120 179.6 122 179.6 142V190"><animate attributeName="d" values="M179.6 30V78C179.6 98 179.6 100 179.6 110C179.6 120 179.6 122 179.6 142V190;M179.6 30V78C179.6 98 179.6 100 179.6 110C179.6 120 179.6 122 179.6 142V190;M179.6 30V78C179.6 98 189.6 100 189.6 110C189.6 120 179.6 122 179.6 142V190;M179.6 30V78C179.6 98 189.6 100 189.6 110C189.6 120 179.6 122 179.6 142V190;M179.6 30V78C179.6 98 179.6 100 179.6 110C179.6 120 179.6 122 179.6 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M183.2 30V78C183.2 98 183.2 100 183.2 110C183.2 120 183.2 122 183.2 142V190"><animate attributeName="d" values="M183.2 30V78C183.2 98 183.2 100 183.2 110C183.2 120 183.2 122 183.2 142V190;M183.2 30V78C183.2 98 183.2 100 183.2 110C183.2 120 183.2 122 183.2 142V190;M183.2 30V78C183.2 98 192.7 100 192.7 110C192.7 120 183.2 122 183.2 142V190;M183.2 30V78C183.2 98 192.7 100 192.7 110C192.7 120 183.2 122 183.2 142V190;M183.2 30V78C183.2 98 183.2 100 183.2 110C183.2 120 183.2 122 183.2 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path><path d="M186.8 30V78C186.8 98 186.8 100 186.8 110C186.8 120 186.8 122 186.8 142V190"><animate attributeName="d" values="M186.8 30V78C186.8 98 186.8 100 186.8 110C186.8 120 186.8 122 186.8 142V190;M186.8 30V78C186.8 98 186.8 100 186.8 110C186.8 120 186.8 122 186.8 142V190;M186.8 30V78C186.8 98 195.8 100 195.8 110C195.8 120 186.8 122 186.8 142V190;M186.8 30V78C186.8 98 195.8 100 195.8 110C195.8 120 186.8 122 186.8 142V190;M186.8 30V78C186.8 98 186.8 100 186.8 110C186.8 120 186.8 122 186.8 142V190" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/></path></g>
</g>
<!-- לוח קרמי ושכבת גיבוי -->
<g class="from-3"><g class="hl-3">
  <rect class="fl-panel st-ink" stroke-width="2" x="128" y="40" width="16" height="140" rx="2"/>
  <path class="thin" d="M128 60l16 0M128 82l16 0M128 104l16 0M128 126l16 0M128 148l16 0M128 170l16 0"/>
  <rect class="fl-line st-ink" stroke-width="1.5" x="144" y="40" width="7" height="140" rx="1"/>
</g></g>

<!-- שלב 1: קליע אקדח בדרך -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="16 110;146 110;146 110;146 110;146 110" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/>
    <g><animate attributeName="opacity" values="1;0;0;0;1" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="st-line fl-none" stroke-width="1.5" d="M-30 -4H-12M-36 0H-12M-30 4H-12"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-8 -4H3Q9 -4 9 0Q9 4 3 4H-8Z"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-4 -4H2Q8 -9 9 0Q8 9 2 4H-4Z"/></g>
  </g>
  <text x="76" y="40">כל האנרגיה של הקליע</text>
  <text x="76" y="55">מרוכזת בכמה מ״מ רבועים</text>
  <text x="255" y="214" class="sm">גוף</text>
</g>

<!-- שלב 2: הסיבים נמתחים, הקליע מתרחב ונעצר -->
<g class="only-2">
  <g><animateTransform attributeName="transform" type="translate" values="16 110;146 110;146 110;146 110;146 110" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/>
    <g><animate attributeName="opacity" values="1;0;0;0;1" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-8 -4H3Q9 -4 9 0Q9 4 3 4H-8Z"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-2 -4H2Q8 -11 10 0Q8 11 2 4H-2Z"/></g>
  </g>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="24" y="136" width="80" height="60" rx="4"/>
  <g clip-path="url(#bodyarmor-weave)">
    <path class="st-line fl-none" stroke-width="1.5" d="M28 136V196M37 136V196M46 136V196M55 136V196M64 136V196M73 136V196M82 136V196M91 136V196M100 136V196M24 140H104M24 149H104M24 158H104M24 167H104M24 176H104M24 185H104M24 194H104"/>
    <path class="st-hot fl-none fade" style="stroke-width:2.5" d="M64 136V196M24 166H104"/>
    <circle class="ring st-hot" cx="64" cy="166" r="34"/>
    <circle class="ring st-hot d3" cx="64" cy="166" r="34"/>
    <circle class="fl-warm st-ink" stroke-width="1" cx="64" cy="166" r="4"/>
  </g>
  <text x="64" y="128">מבט מלפנים:</text>
  <text x="64" y="214">הסיבים נמתחים</text>
  <text x="110" y="40">שכבות ארמיד</text>
  <path class="thin st-ink" d="M134 44L160 60"/>
</g>

<!-- שלב 3: קליע רובה נשבר על הקרמיקה -->
<g class="only-3">
  <g><animateTransform attributeName="transform" type="translate" values="16 110;120 110;120 110;120 110;120 110" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/>
    <g><animate attributeName="opacity" values="1;0;0;0;1" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="st-line fl-none" stroke-width="1.5" d="M-40 -4H-20M-46 0H-20M-40 4H-20"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-16 -3.500H0L9 0L0 3.500H-16Z"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.4;.41;.85;1" calcMode="discrete" dur="3s" repeatCount="indefinite"/><path class="fl-warm st-ink" stroke-width="1.2" d="M-14 -3.500H2Q7 -6 7 0Q7 6 2 3.500H-14Z"/>
      <path class="fl-line" d="M-4 -12l3 2l-3 2zM-6 10l3 2l-4 1zM-10 -8l2 2l-3 1z"/></g>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/>
    <path class="st-ink fl-none" stroke-width="1.2" d="M129 110l6 -9l4 -8M129 110l7 10l3 9M129 110l12 -2M129 110l9 4l5 7"/>
  </g>
  <text x="68" y="40">קרמיקה קשה שוברת</text>
  <text x="68" y="55">ומקהה את חוד הקליע</text>
  <text x="66" y="168">שכבת גיבוי</text>
  <text x="66" y="183">תופסת את השברים</text>
  <path class="thin st-ink" d="M102 162L144 150"/>
</g>

<!-- שלב 4: המכה שעוברת לגוף -->
<g class="only-4">
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.5;.85;1" dur="3s" repeatCount="indefinite"/>
    <ellipse class="fl-hot" opacity=".35" cx="208" cy="110" rx="9" ry="22"/>
  </g>
  <path class="arrow st-hot" style="stroke-width:2.5" d="M60 110H112M100 102L112 110L100 118"/>
  <text x="80" y="80">הקליע נעצר,</text>
  <text x="80" y="95">אבל המכה ממשיכה</text>
  <text x="255" y="16" class="sm">השקע בגוף: חבלה</text>
  <text x="255" y="214" class="sm">צלעות עלולות להישבר</text>
</g>
`;
