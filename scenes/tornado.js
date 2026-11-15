// טורנדו: 1 גזירת רוח מגלגלת אוויר לגליל אופקי · 2 הזרם העולה של הסופה מזקיף את הסיבוב (מזוציקלון) · 3 מתיחה וזרם יורד מהדקים אותו למשפך · 4 סולם EF לפי הנזק
export default `
<defs>
  <marker id="tornado-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="tornado-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
  <marker id="tornado-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <marker id="tornado-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
</defs>

<!-- קרקע -->
<path class="fl-soft" d="M0 196H320V220H0z"/>
<path class="thin st-ink" style="stroke-width:2" d="M0 196H320"/>

<!-- גזירת רוח: חלשה ליד הקרקע, חזקה בגובה -->
<g class="hl-1">
  <path class="arrow st-warm" d="M14 186H46" marker-end="url(#tornado-w)"/>
  <path class="arrow st-cold" style="stroke-width:3" d="M14 106H96" marker-end="url(#tornado-c)"/>
  <path class="flow" d="M14 106H92"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M14 106V186"/>
</g>

<!-- ענן הסופה: מגדל, סדן בגובה וענן קיר מונמך -->
<path class="fl-soft st-ink" style="stroke-width:2;stroke-linejoin:round" d="M112 84Q100 72 116 62Q108 46 132 42L92 38Q74 34 82 24Q100 14 160 14H286Q306 16 302 28Q296 38 262 40Q276 52 266 64Q282 72 272 84Z"/>
<path class="fl-line st-ink" style="stroke-width:1.5;stroke-linejoin:round" d="M170 84L175 96H215L220 84Z"/>

<!-- שלב 1: הגליל המתגלגל -->
<g class="only-1">
  <path class="fl-none st-ink" style="stroke-width:20;stroke-linecap:round" d="M112 178L268 142"/><path class="fl-none" style="stroke:var(--s-cold-soft);stroke-width:16.5;stroke-linecap:round" d="M112 178L268 142"/>
  <ellipse cx="140" cy="171.5" rx="3.5" ry="11" transform="rotate(-13 140 171.5)" class="fl-none st-violet" style="stroke-width:1.8;stroke-dasharray:6 4"><animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite"/></ellipse>
  <ellipse cx="190" cy="160" rx="3.5" ry="11" transform="rotate(-13 190 160)" class="fl-none st-violet" style="stroke-width:1.8;stroke-dasharray:6 4"><animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite"/></ellipse>
  <ellipse cx="240" cy="148.5" rx="3.5" ry="11" transform="rotate(-13 240 148.5)" class="fl-none st-violet" style="stroke-width:1.8;stroke-dasharray:6 4"><animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite"/></ellipse>
  <text x="56" y="98">רוח חזקה בגובה</text>
  <text x="44" y="176">רוח חלשה ולחה</text>
  <text x="236" y="180">האוויר מתגלגל</text>
</g>

<!-- שלב 2: הזרם העולה מרים את אמצע הגליל, והסיבוב נעמד -->
<g class="only-2">
  <path class="fl-none st-ink" style="stroke-width:20;stroke-linecap:round" d="M112 178C150 178 158 104 192 104C226 104 236 150 268 142"/><path class="fl-none" style="stroke:var(--s-cold-soft);stroke-width:16.5;stroke-linecap:round" d="M112 178C150 178 158 104 192 104C226 104 236 150 268 142"/>
  <ellipse cx="150" cy="150" rx="3.5" ry="11" transform="rotate(-55 150 150)" class="fl-none st-violet" style="stroke-width:1.8;stroke-dasharray:6 4"><animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite"/></ellipse>
  <ellipse cx="232" cy="136" rx="3.5" ry="11" transform="rotate(50 232 136)" class="fl-none st-violet" style="stroke-width:1.8;stroke-dasharray:6 4"><animate attributeName="stroke-dashoffset" values="0;20" dur="0.8s" repeatCount="indefinite"/></ellipse>
  <g class="arrow st-warm" style="stroke-width:3">
    <path d="M192 192V122" marker-end="url(#tornado-w)"/>
  </g>
  <path class="flow" d="M192 192V128"/>
  <text x="66" y="136">זרם עולה</text>
  <text x="66" y="150">מזקיף את הסיבוב</text>
</g>
<!-- המזוציקלון: הזרם העולה המסתובב בבסיס הענן -->
<g class="from-2"><g class="hl-2 hl-3">
  <ellipse cx="195" cy="80" rx="44" ry="7" class="fl-none st-violet" style="stroke-width:2;stroke-dasharray:7 5"><animate attributeName="stroke-dashoffset" values="0;-24" dur="1.2s" repeatCount="indefinite"/></ellipse>
</g></g>
<g class="only-2"><text x="282" y="104">מזוציקלון</text></g>

<!-- שלב 3: מתיחה והידוק למשפך צר -->
<g class="from-3">
  <path class="fl-line" style="opacity:.75" d="M181 96L181.9 101L182.7 106L183.5 111L184.3 116L185.1 121L185.8 126L186.5 131L187.1 136L187.8 141L188.4 146L188.9 151L189.5 156L189.9 161L190.4 166L190.8 171L191.2 176L191.5 181L191.7 186L191.9 191L192 196L198 196L198.1 191L198.3 186L198.5 181L198.8 176L199.2 171L199.6 166L200.1 161L200.5 156L201.1 151L201.6 146L202.2 141L202.9 136L203.5 131L204.2 126L204.9 121L205.7 116L206.5 111L207.3 106L208.1 101L209 96Z"/>
  <path class="fl-none st-ink" style="stroke-width:1.5;stroke-linejoin:round" d="M181 96L181.9 101L182.7 106L183.5 111L184.3 116L185.1 121L185.8 126L186.5 131L187.1 136L187.8 141L188.4 146L188.9 151L189.5 156L189.9 161L190.4 166L190.8 171L191.2 176L191.5 181L191.7 186L191.9 191L192 196L198 196L198.1 191L198.3 186L198.5 181L198.8 176L199.2 171L199.6 166L200.1 161L200.5 156L201.1 151L201.6 146L202.2 141L202.9 136L203.5 131L204.2 126L204.9 121L205.7 116L206.5 111L207.3 106L208.1 101L209 96Z"/>
  <g>
    <ellipse cx="195" cy="110" rx="11.6" ry="3.8" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.35s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="195" cy="128" rx="8.9" ry="3.2" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.38s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="195" cy="146" rx="6.6" ry="2.7" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.41s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="195" cy="162" rx="5" ry="2.3" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.44s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="195" cy="176" rx="3.8" ry="2" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.47s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="195" cy="188" rx="3.2" ry="1.9" class="fl-none st-ink" style="stroke-width:1.2;stroke-dasharray:4 3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="0.50s" repeatCount="indefinite"/></ellipse>
  </g>
  <g class="fl-line">
    <circle r="2"><animateMotion dur="1s" repeatCount="indefinite" path="M195 188m-22 0a22 6 0 1 0 44 0a22 6 0 1 0 -44 0"/></circle>
    <circle r="1.6"><animateMotion dur="1s" begin="-.5s" repeatCount="indefinite" path="M195 188m-22 0a22 6 0 1 0 44 0a22 6 0 1 0 -44 0"/></circle>
    <circle r="1.8"><animateMotion dur=".8s" begin="-.3s" repeatCount="indefinite" path="M195 184m-16 0a16 5 0 1 0 32 0a16 5 0 1 0 -32 0"/></circle>
    <circle r="1.4"><animateMotion dur=".8s" begin="-.7s" repeatCount="indefinite" path="M195 184m-16 0a16 5 0 1 0 32 0a16 5 0 1 0 -32 0"/></circle>
  </g>
</g>
<g class="only-3">
  <path class="arrow st-cold" d="M258 88C262 130 250 170 216 188" marker-end="url(#tornado-c)"/>
  <path class="flow" d="M258 88C262 130 250 170 220 186"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M160 140V102" marker-end="url(#tornado-a)"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M160 150V186" marker-end="url(#tornado-a)"/>
  <text x="80" y="138">נמתח ומתהדק:</text>
  <text x="80" y="152">מסתובב מהר יותר</text>
  <text x="290" y="122">זרם יורד</text>
  <text x="290" y="136">מהגשם</text>
</g>

<!-- שלב 4: מדרגים לפי ההרס -->
<g class="only-4">
  <rect class="body" style="stroke-width:1.5" x="236" y="96" width="78" height="96" rx="6"/>
  <text x="275" y="110" class="sm">קמ״ש לפי הנזק</text>
  <rect x="244" y="117" width="14" height="8" rx="2" style="fill:var(--s-green)"/><text x="262" y="124" class="sm" style="text-anchor:start">EF0</text>
  <rect x="244" y="129" width="22" height="8" rx="2" style="fill:var(--s-green)"/><text x="270" y="136" class="sm" style="text-anchor:start">EF1</text>
  <rect x="244" y="141" width="30" height="8" rx="2" style="fill:var(--s-elec)"/><text x="278" y="148" class="sm" style="text-anchor:start">EF2</text>
  <rect x="244" y="153" width="38" height="8" rx="2" style="fill:var(--s-warm)"/><text x="286" y="160" class="sm" style="text-anchor:start">EF3</text>
  <rect x="244" y="165" width="46" height="8" rx="2" style="fill:var(--s-hot)"/><text x="294" y="172" class="sm" style="text-anchor:start">EF4</text>
  <rect x="244" y="177" width="54" height="8" rx="2" style="fill:var(--s-hot)"/><text x="302" y="184" class="sm" style="text-anchor:start">EF5</text>
  <!-- בית שנפגע: הגג נתלש ושברים עפים -->
  <path class="body" d="M112 196V170H146V196"/>
  <path class="thin st-ink" d="M124 196V182H134V196"/>
  <path class="body" style="stroke-width:1.5"><animateTransform attributeName="transform" type="rotate" values="0 146 170;-14 146 170;0 146 170" dur=".6s" repeatCount="indefinite"/><animate attributeName="d" values="M108 170L129 156L150 170Z;M108 168L129 154L150 170Z;M108 170L129 156L150 170Z" dur=".6s" repeatCount="indefinite"/></path>
  <g class="fl-ink">
    <rect width="4" height="2"><animateMotion dur="1.2s" repeatCount="indefinite" rotate="auto" path="M140 160Q160 120 186 112"/><animate attributeName="opacity" values="1;1;0" dur="1.2s" repeatCount="indefinite"/></rect>
    <rect width="3" height="2"><animateMotion dur="1.2s" begin="-.6s" repeatCount="indefinite" rotate="auto" path="M132 158Q150 132 180 128"/><animate attributeName="opacity" values="1;1;0" dur="1.2s" begin="-.6s" repeatCount="indefinite"/></rect>
  </g>
  <text x="60" y="140">הרוח כמעט לא נמדדת:</text>
  <text x="60" y="154">מדרגים לפי ההרס</text>
</g>
`;
