// הצוללת: 1 מים ממלאים את מיכלי האיזון והיא שוקעת, אוויר דוחס אותם החוצה והיא עולה · 2 הגאים מטים את החרטום ומיכלי קיזון מאזנים · 3 הלחץ לוחץ מכל צד על גוף הלחץ העגול · 4 מצברים מניעים מנוע חשמלי, וסונאר מקשיב
export default `
<defs>
  <clipPath id="submarine-ft"><path d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120Z"/></clipPath>
  <clipPath id="submarine-at"><path d="M226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/></clipPath>
  <marker id="submarine-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="submarine-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
</defs>
<!-- ים ופני המים -->
<rect class="fl-cold-soft" x="0" y="24" width="320" height="196"/>
<path class="wire st-cold" style="stroke-width:2" d="M0 24q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0"/>

<!-- שלב 1: הצוללת שוקעת ועולה -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 -6;0 -6;0 26;0 26;0 -6" keyTimes="0;.12;.5;.62;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1;0 0 1 1;.45 0 .55 1" dur="8s" repeatCount="indefinite"/><path class="fl-dark" d="M276 112V128" style="stroke:var(--s-ink);stroke-width:1.5"/>
    <ellipse class="fl-line st-ink" stroke-width="1.5" cx="285" cy="120" rx="3" ry="11"><animate attributeName="ry" values="11;3;11" dur=".5s" repeatCount="indefinite"/></ellipse>
    <path class="body" d="M30 120Q30 98 66 96H232Q262 98 276 116L280 120L276 124Q262 142 232 144H66Q30 142 30 120Z"/>
    <path class="st-ink fl-none" stroke-width="1.5" d="M166 70V56H174"/>
    <path class="body" d="M140 97L146 70H178L184 97Z"/>
    <!-- מיכלי איזון בין שני הגופים -->
    <g class="hl-1">
      <path class="fl-soft" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120Z"/><path class="fl-soft" d="M226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
      <g clip-path="url(#submarine-ft)"><rect class="fl-cold" x="30" y="140" width="250" height="44" opacity=".85">
        <animate attributeName="y" values="140;101;101;140;140" keyTimes="0;.4;.5;.9;1" dur="8s" repeatCount="indefinite"/></rect></g>
      <g clip-path="url(#submarine-at)"><rect class="fl-cold" x="30" y="140" width="250" height="44" opacity=".85">
        <animate attributeName="y" values="140;101;101;140;140" keyTimes="0;.4;.5;.9;1" dur="8s" repeatCount="indefinite"/></rect></g>
      <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120ZM226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
    </g>
    <!-- גוף הלחץ -->
    <g class="hl-3"><rect class="fl-panel st-ink" style="stroke-width:3.5" x="74" y="102" width="152" height="36" rx="18"/></g>
    <!-- מיכלי קיזון -->
    <g class="hl-2">
      <rect class="fl-panel st-ink" stroke-width="1" x="80" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-panel st-ink" stroke-width="1" x="202" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-cold" x="80" y="129" width="16" height="5"/><rect class="fl-cold" x="202" y="129" width="16" height="5"/>
    </g>
    <!-- הנעה: דיזל, מצברים ומנוע חשמלי -->
    <g class="hl-4">
      <rect class="fl-warm st-ink" stroke-width="1.2" x="150" y="110" width="26" height="13" rx="2"/>
      <path class="st-ink fl-none" stroke-width="1" d="M156 110v13M163 110v13M170 110v13"/>
      <rect class="fl-elec st-ink" stroke-width="1.2" x="104" y="124" width="40" height="10" rx="1.5"/>
      <path class="st-ink fl-none" stroke-width="1" d="M114 124v10M124 124v10M134 124v10"/>
      <circle class="fl-line st-ink" stroke-width="1.2" cx="192" cy="120" r="7"/>
      <path class="st-ink fl-none" stroke-width="1.5" d="M199 120H222"/>
    </g>
    <g class="hl-2"><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M124 84Q134 80 146 84Q134 88 124 84Z"/><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M252 120Q264 116 276 120Q264 124 252 120Z"/></g></g>
  <g class="fl-panel st-cold" stroke-width="1">
    <circle cx="60" cy="96" r="2.500"><animate attributeName="cy" values="96;40" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.5;.6;1" dur="8s" repeatCount="indefinite"/></circle>
    <circle cx="240" cy="96" r="2.500"><animate attributeName="cy" values="96;40" dur="1.4s" begin="-.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.5;.6;1" dur="8s" repeatCount="indefinite"/></circle>
  </g>
  <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="8s" repeatCount="indefinite"/>
    <text x="160" y="196">מי ים ממלאים את המיכלים:</text><text x="160" y="211">הצוללת כבדה מהמים ושוקעת</text></g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.5;.95;1" dur="8s" repeatCount="indefinite"/>
    <text x="160" y="196">אוויר דחוס דוחף את המים החוצה:</text><text x="160" y="211">הצוללת קלה מהמים ועולה</text></g>
</g>

<!-- שלב 2: הגאים וקיזון -->
<g class="only-2">
  <g><animateTransform attributeName="transform" type="rotate" values="0 160 120;-7 160 120;-7 160 120;0 160 120;0 160 120" keyTimes="0;.3;.5;.8;1" calcMode="spline" keySplines=".45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1" dur="6s" repeatCount="indefinite"/><path class="fl-dark" d="M276 112V128" style="stroke:var(--s-ink);stroke-width:1.5"/>
    <ellipse class="fl-line st-ink" stroke-width="1.5" cx="285" cy="120" rx="3" ry="11"><animate attributeName="ry" values="11;3;11" dur=".5s" repeatCount="indefinite"/></ellipse>
    <path class="body" d="M30 120Q30 98 66 96H232Q262 98 276 116L280 120L276 124Q262 142 232 144H66Q30 142 30 120Z"/>
    <path class="st-ink fl-none" stroke-width="1.5" d="M166 70V56H174"/>
    <path class="body" d="M140 97L146 70H178L184 97Z"/>
    <!-- מיכלי איזון בין שני הגופים -->
    <g class="hl-1">
      <path class="fl-soft" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120Z"/><path class="fl-soft" d="M226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
      <g clip-path="url(#submarine-ft)"><rect class="fl-cold" x="30" y="101" width="250" height="44" opacity=".85"/></g>
      <g clip-path="url(#submarine-at)"><rect class="fl-cold" x="30" y="101" width="250" height="44" opacity=".85"/></g>
      <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120ZM226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
    </g>
    <!-- גוף הלחץ -->
    <g class="hl-3"><rect class="fl-panel st-ink" style="stroke-width:3.5" x="74" y="102" width="152" height="36" rx="18"/></g>
    <!-- מיכלי קיזון -->
    <g class="hl-2">
      <rect class="fl-panel st-ink" stroke-width="1" x="80" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-panel st-ink" stroke-width="1" x="202" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-cold" x="80" y="126" width="16" height="8"><animate attributeName="height" values="3;8;8;3;3" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/><animate attributeName="y" values="131;126;126;131;131" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/></rect>
      <rect class="fl-cold" x="202" y="131" width="16" height="3"><animate attributeName="height" values="8;3;3;8;8" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/><animate attributeName="y" values="126;131;131;126;126" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/></rect>
    </g>
    <!-- הנעה: דיזל, מצברים ומנוע חשמלי -->
    <g class="hl-4">
      <rect class="fl-warm st-ink" stroke-width="1.2" x="150" y="110" width="26" height="13" rx="2"/>
      <path class="st-ink fl-none" stroke-width="1" d="M156 110v13M163 110v13M170 110v13"/>
      <rect class="fl-elec st-ink" stroke-width="1.2" x="104" y="124" width="40" height="10" rx="1.5"/>
      <path class="st-ink fl-none" stroke-width="1" d="M114 124v10M124 124v10M134 124v10"/>
      <circle class="fl-line st-ink" stroke-width="1.2" cx="192" cy="120" r="7"/>
      <path class="st-ink fl-none" stroke-width="1.5" d="M199 120H222"/>
    </g>
    <g class="hl-2"><g><animateTransform attributeName="transform" type="rotate" values="0 144 84;24 144 84;24 144 84;0 144 84;0 144 84" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M124 84Q134 80 146 84Q134 88 124 84Z"/></g><g><animateTransform attributeName="transform" type="rotate" values="0 262 120;-20 262 120;-20 262 120;0 262 120;0 262 120" keyTimes="0;.25;.5;.75;1" dur="6s" repeatCount="indefinite"/><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M252 120Q264 116 276 120Q264 124 252 120Z"/></g></g></g>
  <path class="thin st-cold dash" d="M8 70H110M8 92H40M8 148H40"/>
  <text x="78" y="44">הגאים מטים</text>
  <text x="78" y="58">את החרטום</text>
  <text x="200" y="184">מיכלי קיזון מעבירים מים</text>
  <text x="200" y="199">עד שהיא מרחפת במאוזן</text>
</g>

<!-- משלב 3: צוללת יציבה -->
<g class="only-3 from-4">
  <path class="fl-dark" d="M276 112V128" style="stroke:var(--s-ink);stroke-width:1.5"/>
    <ellipse class="fl-line st-ink" stroke-width="1.5" cx="285" cy="120" rx="3" ry="11"><animate attributeName="ry" values="11;3;11" dur=".5s" repeatCount="indefinite"/></ellipse>
    <path class="body" d="M30 120Q30 98 66 96H232Q262 98 276 116L280 120L276 124Q262 142 232 144H66Q30 142 30 120Z"/>
    <path class="st-ink fl-none" stroke-width="1.5" d="M166 70V56H174"/>
    <path class="body" d="M140 97L146 70H178L184 97Z"/>
    <!-- מיכלי איזון בין שני הגופים -->
    <g class="hl-1">
      <path class="fl-soft" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120Z"/><path class="fl-soft" d="M226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
      <g clip-path="url(#submarine-ft)"><rect class="fl-cold" x="30" y="101" width="250" height="44" opacity=".85"/></g>
      <g clip-path="url(#submarine-at)"><rect class="fl-cold" x="30" y="101" width="250" height="44" opacity=".85"/></g>
      <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M34 120Q34 101 66 100H72V140H66Q34 139 34 120ZM226 100H232Q258 102 270 118V122Q258 138 232 140H226Z"/>
    </g>
    <!-- גוף הלחץ -->
    <g class="hl-3"><rect class="fl-panel st-ink" style="stroke-width:3.5" x="74" y="102" width="152" height="36" rx="18"/></g>
    <!-- מיכלי קיזון -->
    <g class="hl-2">
      <rect class="fl-panel st-ink" stroke-width="1" x="80" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-panel st-ink" stroke-width="1" x="202" y="125" width="16" height="10" rx="1.5"/>
      <rect class="fl-cold" x="80" y="129" width="16" height="5"/><rect class="fl-cold" x="202" y="129" width="16" height="5"/>
    </g>
    <!-- הנעה: דיזל, מצברים ומנוע חשמלי -->
    <g class="hl-4">
      <rect class="fl-warm st-ink" stroke-width="1.2" x="150" y="110" width="26" height="13" rx="2"/>
      <path class="st-ink fl-none" stroke-width="1" d="M156 110v13M163 110v13M170 110v13"/>
      <rect class="fl-elec st-ink" stroke-width="1.2" x="104" y="124" width="40" height="10" rx="1.5"/>
      <path class="st-ink fl-none" stroke-width="1" d="M114 124v10M124 124v10M134 124v10"/>
      <circle class="fl-line st-ink" stroke-width="1.2" cx="192" cy="120" r="7"/>
      <path class="st-ink fl-none" stroke-width="1.5" d="M199 120H222"/>
    </g>
    <g class="hl-2"><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M124 84Q134 80 146 84Q134 88 124 84Z"/><path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M252 120Q264 116 276 120Q264 124 252 120Z"/></g>
</g>

<!-- שלב 3: לחץ המים -->
<g class="only-3">
  <g><animate attributeName="opacity" values="1;.35;1" dur="1.4s" repeatCount="indefinite"/>
    <path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M100 76L100 92"/><path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M210 76L210 92"/><path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M100 166L100 150"/><path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M160 166L160 150"/><path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M220 166L220 150"/><path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#submarine-h)" d="M6 120L22 120"/>
  </g>
  <text x="62" y="52">גוף לחץ עגול</text>
  <path class="thin st-ink" d="M74 58L88 104"/>
  <text x="160" y="186">כל עשרה מטרים: עוד אטמוספרה</text>
  <text x="160" y="202">ב־300 מטר — כ־30 אטמוספרות</text>
</g>

<!-- שלב 4: הנעה וסונאר -->
<g class="only-4">
  <path class="wire st-elec dash" style="stroke-width:1.5" d="M144 129H188"/>
  <circle class="ring st-cold" cx="30" cy="120" r="28"/>
  <circle class="ring st-cold d2" cx="30" cy="120" r="28"/>
  <circle class="ring st-cold d4" cx="30" cy="120" r="28"/>
  <g class="spin fast" style="transform-origin:192px 120px;transform-box:view-box"><path class="st-ink fl-none" stroke-width="1.5" d="M192 115v10M187 120h10"/></g>
  <text x="54" y="180">סונאר: מקשיבים</text>
  <text x="200" y="174">מצברים מניעים</text>
  <text x="200" y="189">מנוע חשמלי שקט</text>
  <text x="200" y="204">הדיזל טוען אותם ליד פני הים</text>
  <path class="thin st-ink" d="M200 164L196 130"/>
</g>
`;
