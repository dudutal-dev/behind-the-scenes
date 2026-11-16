// פטרה: 1 חזית האוצר נחצבת מלמעלה למטה · 2 מפה: סכר בפתח הסיק ומנהרה שמסיטה את השיטפון · 3 תעלה עם צינורות חרס לאורך דופן הסיק · 4 נגר מהסלע דרך אגן שיקוע אל בור מים חצוב
export default `
<defs>
  <clipPath id="petra-map"><rect x="150" y="8" width="164" height="88" rx="6"/></clipPath>
</defs>
<!-- צוק אבן החול -->
<rect class="fl-warm" fill-opacity=".45" x="6" y="8" width="136" height="198" rx="6"/>
<path class="fl-hot" fill-opacity=".12" d="M6 40Q40 30 80 46T142 40V80Q100 70 60 84T6 76ZM6 140Q50 128 90 146T142 136V170Q100 160 60 176T6 168Z"/>
<rect class="fl-none st-ink" stroke-width="2" x="6" y="8" width="136" height="198" rx="6"/>
<path class="thin" d="M0 206H320"/>

<!-- 1 החזית -->
<g>
  <rect class="fl-warm" fill-opacity=".25" x="18" y="30" width="110" height="170"/>
  <!-- קומה עליונה: ביתן עגול עם כד, וחצאי גמלונים -->
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M71 38q-4 0-4 5t4 6h4q4-1 4-6t-4-5Z"/>
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M62 62L73 49L84 62Z"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="60" y="62" width="26" height="34"/>
  <path class="thin st-ink" style="stroke-width:1" d="M66 62v34M73 62v34M80 62v34"/>
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M26 70L52 58V70ZM120 70L94 58V70Z"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="27.5" y="73" width="5" height="23"/><rect class="fl-panel st-ink" stroke-width="1" x="26" y="70" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="43.5" y="73" width="5" height="23"/><rect class="fl-panel st-ink" stroke-width="1" x="42" y="70" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="97.5" y="73" width="5" height="23"/><rect class="fl-panel st-ink" stroke-width="1" x="96" y="70" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="113.5" y="73" width="5" height="23"/><rect class="fl-panel st-ink" stroke-width="1" x="112" y="70" width="8" height="3"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="22" y="96" width="102" height="6"/>
  <!-- קומה תחתונה: גמלון, שישה עמודים ופתח -->
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M40 118L73 104L106 118Z"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="22" y="118" width="102" height="8"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="25.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="24" y="126" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="41.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="40" y="126" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="55.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="54" y="126" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="85.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="84" y="126" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="99.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="98" y="126" width="8" height="3"/><rect class="fl-panel st-ink" stroke-width="1.2" x="115.5" y="129" width="5" height="67"/><rect class="fl-panel st-ink" stroke-width="1" x="114" y="126" width="8" height="3"/>
  <path class="fl-dark st-ink" stroke-width="1.4" d="M65 196V152H81V196Z"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="18" y="196" width="110" height="4"/>
  <g class="fl-ink"><circle cx="70" cy="42" r=".8"/><circle cx="75" cy="44" r=".8"/><circle cx="72" cy="46" r=".7"/></g></g>
<g class="only-1">
  <rect class="fl-bg" x="16" y="34" width="114" height="168"><animate attributeName="y" values="34;34;200;200" dur="7s" repeatCount="indefinite" keyTimes="0;.08;.8;1"/><animate attributeName="height" values="168;168;2;2" dur="7s" repeatCount="indefinite" keyTimes="0;.08;.8;1"/></rect>
  <rect class="fl-warm" fill-opacity=".45" x="16" y="34" width="114" height="168"><animate attributeName="y" values="34;34;200;200" dur="7s" repeatCount="indefinite" keyTimes="0;.08;.8;1"/><animate attributeName="height" values="168;168;2;2" dur="7s" repeatCount="indefinite" keyTimes="0;.08;.8;1"/></rect>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 166;0 166" dur="7s" repeatCount="indefinite" keyTimes="0;.08;.8;1"/>
    <path class="st-ink fl-none" stroke-width="1.2" stroke-dasharray="3 3" d="M16 34H130"/>
    <circle class="fl-ink" cx="100" cy="24" r="2.6"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M100 27v5l-3 2M100 32l3 2M100 29l-6 3"/>
    <path class="fl-ink" d="M92 36l2 2-2 1zM96 38l1 2-2 0z"><animate attributeName="opacity" values="0;1;0" dur=".6s" repeatCount="indefinite"/></path>
  </g>
</g>
<g class="hl-1"><g class="fl-dark"><circle cx="13" cy="60" r="1.4"/><circle cx="13" cy="100" r="1.4"/><circle cx="13" cy="140" r="1.4"/><circle cx="135" cy="60" r="1.4"/><circle cx="135" cy="100" r="1.4"/><circle cx="135" cy="140" r="1.4"/></g></g>

<!-- 2 מפה: הסיק, הסכר והמנהרה -->
<g class="hl-2">
  <rect class="body" x="150" y="8" width="164" height="88" rx="6"/>
  <g clip-path="url(#petra-map)">
    <path class="fl-warm" fill-opacity=".35" d="M150 40Q200 34 236 50T314 44V8H150ZM150 96V80Q190 88 230 76T314 82V96Z"/>
    <path class="st-warm fl-none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" d="M162 64Q180 58 196 66T232 62T270 64"/>
    <path class="st-line fl-none" stroke-width="1" stroke-dasharray="2 3" d="M162 64Q180 58 196 66T232 62T270 64"/>
    <path class="st-cold fl-none" stroke-width="5" stroke-linecap="round" d="M314 64H280"/>
    <path class="st-cold fl-none" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 3" d="M280 60V30Q280 22 272 22H200"/>
    <circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-0.0s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-0.0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-0.5s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-1.0s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-1.0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-2.0s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-2.0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="2"><animateMotion dur="3s" begin="-2.5s" repeatCount="indefinite" path="M314 64H284Q280 64 280 58V30Q280 22 272 22H206"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="3s" begin="-2.5s" repeatCount="indefinite"/></circle>
  </g>
  <rect class="fl-dark st-ink" stroke-width="1" x="275" y="54" width="5" height="20" rx="1"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="156" y="59" width="8" height="10"/>
</g>

<!-- 3 דופן הסיק: תעלה וצינור חרס שמובילים מים מהמעיין -->
<g class="hl-3">
  <rect class="fl-warm" fill-opacity=".45" x="150" y="132" width="78" height="74" rx="3"/>
  <path class="fl-hot" fill-opacity=".12" d="M150 150Q180 142 228 152V168Q190 160 150 170Z"/>
  <path class="fl-bg st-ink" stroke-width="1.2" d="M150 158L228 150V158L150 166Z"/>
  <path class="st-hot fl-none" stroke-width="5" stroke-linecap="butt" d="M152 162L226 154"/>
  <path class="st-ink fl-none" stroke-width="1" d="M166 156.5v8M182 155v8M198 153v8M214 151.5v8"/>
  <path class="flow" d="M226 154L152 162"/>
  <circle class="fl-ink" cx="190" cy="186" r="2.6"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M190 189v8l-3 6M190 197l3 6"/>
</g>

<!-- 4 בור מים: גשם, נגר בתעלה, אגן שיקוע ובור מקורה -->
<g class="hl-4">
  <path class="fl-warm" fill-opacity=".45" d="M236 206V150L262 142L314 140V206Z"/>
  <path class="st-cold fl-none" stroke-width="2" stroke-linecap="round" d="M240 149L252 146"/>
  <path class="fl-bg st-ink" stroke-width="1.2" d="M252 146V158H262V144Z"/>
  <g class="fl-line"><circle cx="255" cy="156" r="1"/><circle cx="258" cy="157" r="1"/><circle cx="256.5" cy="154" r=".9"/></g>
  <path class="fl-bg st-ink" stroke-width="1.4" d="M266 148H306V202H266Z"/>
  <rect class="fl-cold" x="267" y="170" width="38" height="31"><animate attributeName="y" values="190;170;190" dur="6s" repeatCount="indefinite"/><animate attributeName="height" values="11;31;11" dur="6s" repeatCount="indefinite"/></rect>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="262" y="142" width="48" height="6"/>
  <path class="st-cold fl-none" stroke-width="2" stroke-linecap="round" d="M261 151Q265 151 268 156"><animate attributeName="opacity" values="1;.3;1" dur=".9s" repeatCount="indefinite"/></path>
  <path class="flow" d="M240 149L252 146"/>
  <path class="st-cold fl-none" stroke-width="1.2" stroke-linecap="round" d="M244 130l-1.5 6"><animateTransform attributeName="transform" type="translate" values="0 0;-2 12" dur=".7s" begin="-0.00s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur=".7s" begin="-0.00s" repeatCount="indefinite"/></path><path class="st-cold fl-none" stroke-width="1.2" stroke-linecap="round" d="M258 130l-1.5 6"><animateTransform attributeName="transform" type="translate" values="0 0;-2 12" dur=".7s" begin="-0.29s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur=".7s" begin="-0.29s" repeatCount="indefinite"/></path><path class="st-cold fl-none" stroke-width="1.2" stroke-linecap="round" d="M272 130l-1.5 6"><animateTransform attributeName="transform" type="translate" values="0 0;-2 12" dur=".7s" begin="-0.58s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur=".7s" begin="-0.58s" repeatCount="indefinite"/></path><path class="st-cold fl-none" stroke-width="1.2" stroke-linecap="round" d="M286 130l-1.5 6"><animateTransform attributeName="transform" type="translate" values="0 0;-2 12" dur=".7s" begin="-0.87s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur=".7s" begin="-0.87s" repeatCount="indefinite"/></path><path class="st-cold fl-none" stroke-width="1.2" stroke-linecap="round" d="M300 130l-1.5 6"><animateTransform attributeName="transform" type="translate" values="0 0;-2 12" dur=".7s" begin="-0.16s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur=".7s" begin="-0.16s" repeatCount="indefinite"/></path>
</g>

<!-- תוויות -->
<g class="only-1"><text x="232" y="112">חוצבים מלמעלה</text><text x="232" y="126">כלפי מטה</text></g>
<g class="only-2"><text x="232" y="112">סכר ומנהרה מסיטים</text><text x="232" y="126">את השיטפון מהסיק</text></g>
<g class="only-3"><text x="232" y="112">צינורות חרס</text><text x="232" y="126">לאורך דופן הסיק</text></g>
<g class="only-4"><text x="232" y="112">נגר מהסלע</text><text x="232" y="126">אל בור מים מקורה</text></g>
`;
