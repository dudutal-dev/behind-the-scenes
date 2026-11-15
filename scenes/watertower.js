// לחץ המים: 1 משאבה מעלה מים למאגר גבוה · 2 כל עשרה מטרים של גובה מוסיפים אטמוספרה · 3 הצנרת מלאה ולכן המים זורמים מיד כשפותחים ברז · 4 המאגר מתרוקן מעט בשעות השיא ומתמלא בלילה
export default `
<defs>
  <marker id="watertower-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="watertower-tank"><rect x="65" y="26" width="44" height="31" rx="2"/></clipPath>
  <clipPath id="watertower-lens"><circle cx="214" cy="54" r="27"/></clipPath>
</defs>
<!-- גבעה, מדרגות ושכונה -->
<path class="fl-soft" d="M0 198H50L66 96H112L142 128H182L204 162H238L248 198H320V220H0z"/>
<path class="wire st-ink" style="stroke-width:2" d="M0 198H50L66 96H112L142 128H182L204 162H238L248 198H320"/>

<!-- מגדל המים -->
<path class="wire st-ink" style="stroke-width:2" d="M69 58L67 96M105 58L107 96"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M68.500 70H105.500M67.500 84H106.500M68.500 70L106.500 84M105.500 70L67.500 84"/>
<rect class="body" x="63" y="24" width="48" height="35" rx="3"/>
<g clip-path="url(#watertower-tank)">
  <g class="only-1"><rect class="fl-cold" x="65" width="44" y="30" height="28"><animate attributeName="y" dur="5s" repeatCount="indefinite" values="46;30;30" keyTimes="0;.85;1"/></rect></g>
  <g class="only-2"><rect class="fl-cold" x="65" width="44" y="30" height="28"></rect></g><g class="only-3"><rect class="fl-cold" x="65" width="44" y="30" height="28"></rect></g>
  <g class="from-4"><rect class="fl-cold" x="65" width="44" y="30" height="28"><animate attributeName="y" dur="10s" repeatCount="indefinite" values="40.5;39.3;38;36.7;35.4;34.1;32.7;31.5;30.2;29.2;28.3;28;28.3;29.4;31.1;33.3;35.6;37.5;38.7;39.3;39.3;38.9;38.4;37.8;37.3;36.7;36.3;35.8;35.2;34.7;34;33.3;32.5;31.8;31.2;30.9;31;31.7;33;34.9;37.1;39.3;41.1;42.4;43;43;42.5;41.6;40.5"/></rect></g>
</g>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M59 24L87 11L115 24z"/>

<!-- תחנת שאיבה וקו עולה -->
<rect class="body" x="8" y="174" width="34" height="24" rx="2"/>
<g class="hl-1 hl-4"><path class="pipe st-cold" d="M0 190H76V58"/></g>
<g class="hl-1 hl-4"><g class="hl-1 hl-4"><g class="hl-1 hl-4"><g class="hl-1 hl-4"><path class="flow" d="M0 190H76V58"/></g></g></g></g>
<circle class="body" cx="25" cy="188" r="8.500"/>
<g class="hl-1 hl-4"><g class="hl-1 hl-4"><g class="hl-1 hl-4"><g class="hl-1 hl-4"><g class="spin fast"><path class="wire st-ink" style="stroke-width:2" d="M25 182.500v11M19.500 188h11"/></g></g></g></g></g>
<g class="only-2"><path class="wire st-ink" style="stroke-width:2" d="M25 182.500v11M19.500 188h11"/></g><g class="only-3"><path class="wire st-ink" style="stroke-width:2" d="M25 182.500v11M19.500 188h11"/></g>
<circle class="fl-ink" cx="25" cy="188" r="1.8"/>

<!-- רשת החלוקה: מלאה תמיד -->
<g class="hl-2 hl-3 hl-4">
  <path class="pipe st-cold" d="M98 58V110H110L140 141H180L204 175H236L248 209H262V112"/>
  <path class="pipe st-cold" style="stroke-width:4" d="M162 141V116H169M221 175V150H228M262 186H269M262 162H269M262 138H269M262 114H269"/>
</g>

<!-- בתים בגבהים שונים ובניין קומות -->
<rect class="body" x="148" y="106" width="28" height="22"/>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M144 106L162 92L180 106z"/>
<rect class="body" x="208" y="140" width="26" height="22"/>
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M204 140L221 126L238 140z"/>
<rect class="body" x="254" y="102" width="42" height="96"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M254 174H296M254 150H296M254 126H296"/>
<path class="fl-cold-soft st-ink" stroke-width="1" d="M276 131h12v12h-12zM276 155h12v12h-12z"/>
<path class="pipe st-cold" style="stroke-width:4" d="M162 128V116H169M221 162V150H228M262 198V112M262 186H269M262 162H269M262 138H269M262 114H269"/>
<path class="wire st-ink" style="stroke-width:1.6" d="M169 113.500v5M228 147.500v5M269 183.500v5M269 159.500v5M269 135.500v5M269 111.500v5"/>

<!-- מדי לחץ: נמוך יותר, לחץ גבוה יותר -->
<g class="from-2"><g class="hl-2">
  <path class="wire st-ink" style="stroke-width:1.5" d="M166 144V153M224 178V187"/>
  <circle class="body" style="stroke-width:1.5" cx="166" cy="160" r="7.5"/><path class="thin st-ink" style="stroke-width:.8" d="M161.4 162.7l-1.300.75M166 154.6v-1.500M170.7 162.7l1.300.75"/><path class="wire st-hot" style="stroke-width:1.8" transform="rotate(24.2 166 160)" d="M166 161.5V154.3"/><circle class="fl-ink" cx="166" cy="160" r="1.2"/><circle class="body" style="stroke-width:1.5" cx="224" cy="194" r="7.5"/><path class="thin st-ink" style="stroke-width:.8" d="M219.4 196.7l-1.300.75M224 188.6v-1.500M228.7 196.7l1.300.75"/><path class="wire st-hot" style="stroke-width:1.8" transform="rotate(68.3 224 194)" d="M224 195.5V188.3"/><circle class="fl-ink" cx="224" cy="194" r="1.2"/><circle class="body" style="stroke-width:1.5" cx="282" cy="186" r="7"/><path class="thin st-ink" style="stroke-width:.8" d="M277.7 188.5l-1.300.75M282 181v-1.500M286.3 188.5l1.300.75"/><path class="wire st-hot" style="stroke-width:1.8" transform="rotate(82.6 282 186)" d="M282 187.5V180.8"/><circle class="fl-ink" cx="282" cy="186" r="1.2"/><circle class="body" style="stroke-width:1.5" cx="282" cy="114" r="7"/><path class="thin st-ink" style="stroke-width:.8" d="M277.7 116.5l-1.300.75M282 109v-1.500M286.3 116.5l1.300.75"/><path class="wire st-hot" style="stroke-width:1.8" transform="rotate(-10.9 282 114)" d="M282 115.5V108.8"/><circle class="fl-ink" cx="282" cy="114" r="1.2"/>
</g></g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="27" y="166">משאבה</text>
  <text x="176" y="34">מאגר גבוה</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M146 31H118" marker-end="url(#watertower-a)"/>
  <path class="arrow st-cold blink" d="M87 150V124M82 130L87 123L92 130"/>
</g>
<!-- שלב 2: סרגל גובה ולחץ -->
<g class="only-2">
  <path class="thin st-cold" style="stroke-dasharray:3 4" d="M113 30H308"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M312 30V198M308 30H316M308 63.6H316M308 97.2H316M308 130.8H316M308 164.4H316M308 198H316"/>
  <rect class="fl-hot" x="310" y="30" width="4" height="0"><animate attributeName="height" dur="4s" repeatCount="indefinite" values="0;168;168" keyTimes="0;.8;1"/></rect>
  <text class="sm" x="302" y="33">0</text><text class="sm" x="302" y="66.6">1</text><text class="sm" x="302" y="100.2">2</text><text class="sm" x="302" y="133.8">3</text><text class="sm" x="302" y="167.4">4</text><text class="sm" x="302" y="195">5</text>
  <text class="sm" x="298" y="20">אטמ׳</text>
  <text x="192" y="52">כל 10 מטר גובה</text>
  <text x="192" y="66">עוד אטמוספרה</text>
</g>
<!-- שלב 3: פותחים ברז בבית התחתון -->
<g class="only-3">
  <path class="flow" d="M98 58V110H110L140 141H180L204 175H221V150H228"/>
  <path class="wire st-cold dash" style="stroke-width:2" d="M229 152V161"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M217 81L226 142"/>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="228" cy="150" r="7"/>
  <circle class="body" cx="214" cy="54" r="27"/>
  <g clip-path="url(#watertower-lens)">
    <rect class="fl-soft" x="186" y="26" width="10" height="56"/>
    <path class="pipe st-cold" style="stroke-width:8" d="M184 44H214"/>
    <path class="flow" d="M184 44H214"/>
    <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M206 38H222Q228 38 228 44V52H220V49H206z"/>
    <path class="wire st-ink" style="stroke-width:2.500" d="M213 38V31M207 31H219"/>
    <path class="wire st-cold" style="stroke-width:5" d="M224 53V74"/>
    <path class="flow" d="M224 53V74"/>
    <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M200 70H240L236 82H204z"/>
    <path class="fl-cold" d="M203 74H237L235.500 79H204.500z"/>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="214" cy="54" r="27"/>
  <text x="150" y="40">פותחים ברז</text>
  <text x="150" y="54">זורם מיד</text>
</g>
<!-- שלב 4: ביקוש משתנה, שאיבה קבועה -->
<g class="from-4"><g opacity=".2"><animate attributeName="opacity" dur="10s" repeatCount="indefinite" values="0.29;0.27;0.26;0.26;0.26;0.26;0.26;0.27;0.29;0.33;0.4;0.52;0.67;0.83;0.95;1;0.96;0.85;0.71;0.58;0.49;0.43;0.41;0.41;0.42;0.43;0.43;0.42;0.41;0.4;0.39;0.37;0.37;0.39;0.43;0.5;0.61;0.74;0.86;0.96;0.99;0.95;0.86;0.73;0.59;0.47;0.38;0.32;0.29"/>
  <path class="flow" d="M98 58V110H110L140 141H180L204 175H236L248 209H262V112"/><path class="flow" d="M162 141V116H169"/><path class="flow" d="M221 175V150H228"/>
  <path class="wire st-cold dash" style="stroke-width:1.6" d="M170 118V126M229 152V160M270 188V196M270 164V172M270 140V148M270 116V124"/>
</g></g>
<g class="only-4">
  <rect class="fl-dark" opacity=".22" x="134" y="24" width="31" height="48"/>
  <rect class="fl-dark" opacity=".22" x="247.7" y="24" width="10.3" height="48"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M134 24V72H258"/>
  <path class="wire st-green" style="stroke-width:1.6;stroke-dasharray:4 4" d="M134 65H258"/>
  <path class="wire st-cold" style="stroke-width:2.2" d="M134 51.7L136.6 49.6L139.2 47.3L141.8 45.1L144.3 42.8L146.9 40.5L149.5 38.2L152.1 36L154.7 33.9L157.3 32L159.8 30.6L162.4 30L165 30.5L167.6 32.4L170.2 35.4L172.8 39.3L175.3 43.1L177.9 46.4L180.5 48.5L183.1 49.5L185.7 49.5L188.3 48.9L190.8 48L193.4 47L196 46L198.6 45.2L201.2 44.3L203.8 43.5L206.3 42.6L208.9 41.5L211.5 40.4L214.1 39.2L216.7 37.8L219.3 36.6L221.8 35.5L224.4 35L227 35.2L229.6 36.4L232.2 38.7L234.8 42L237.3 45.7L239.9 49.5L242.5 52.7L245.1 54.9L247.7 56L250.3 56L252.8 55.1L255.4 53.6L258 51.7"/>
  <circle class="fl-cold st-ink" stroke-width="1.2" r="3.2"><animate attributeName="cx" dur="10s" repeatCount="indefinite" values="134;136.6;139.2;141.8;144.3;146.9;149.5;152.1;154.7;157.3;159.8;162.4;165;167.6;170.2;172.8;175.3;177.9;180.5;183.1;185.7;188.3;190.8;193.4;196;198.6;201.2;203.8;206.3;208.9;211.5;214.1;216.7;219.3;221.8;224.4;227;229.6;232.2;234.8;237.3;239.9;242.5;245.1;247.7;250.3;252.8;255.4;258"/><animate attributeName="cy" dur="10s" repeatCount="indefinite" values="51.7;49.6;47.3;45.1;42.8;40.5;38.2;36;33.9;32;30.6;30;30.5;32.4;35.4;39.3;43.1;46.4;48.5;49.5;49.5;48.9;48;47;46;45.2;44.3;43.5;42.6;41.5;40.4;39.2;37.8;36.6;35.5;35;35.2;36.4;38.7;42;45.7;49.5;52.7;54.9;56;56;55.1;53.6;51.7"/></circle>
  <text x="196" y="17">מפלס המאגר ביממה</text>
  <text class="sm" x="147.4" y="83">לילה</text>
  <text class="sm" x="172.8" y="83">בוקר</text>
  <text class="sm" x="237.3" y="83">ערב</text>
  <text class="sm" x="287" y="68">שאיבה קבועה</text>
</g>
`;
