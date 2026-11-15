// אבק שריפה: 1 דלק ומקור חמצן באותו גרגר · 2 גז חם דוחף קליע בקנה סגור · 3 בעירה איטית מול גל הלם · 4 מוצקים שיוצאים כעשן
export default `
<defs>
  <marker id="gunpowder-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="gunpowder-grain"><circle cx="62" cy="60" r="40"/></clipPath>
</defs>

<!-- הגרגר בהגדלה -->
<g class="hl-1">
  <circle class="fl-panel st-ink" stroke-width="2" cx="62" cy="60" r="42"/>
  <g clip-path="url(#gunpowder-grain)">
    <g class="fl-dark">
      <circle cx="40" cy="40" r="7"/><circle cx="74" cy="34" r="6"/><circle cx="56" cy="62" r="7.500"/><circle cx="84" cy="68" r="6.500"/>
      <circle cx="36" cy="76" r="6"/><circle cx="64" cy="90" r="6"/><circle cx="92" cy="46" r="4.500"/><circle cx="26" cy="56" r="4.500"/>
    </g>
    <g class="fl-elec">
      <circle cx="58" cy="40" r="3.500"/><circle cx="76" cy="84" r="3.500"/><circle cx="44" cy="92" r="3"/><circle cx="96" cy="62" r="3"/>
    </g>
    <g class="fl-cold-soft st-cold" stroke-width="1.5">
      <rect x="47" y="22" width="9" height="9" transform="rotate(20 51 26)"/>
      <rect x="62" y="48" width="9" height="9" transform="rotate(-15 66 52)"/>
      <rect x="40" y="56" width="8" height="8" transform="rotate(35 44 60)"/>
      <rect x="72" y="70" width="9" height="9" transform="rotate(10 76 74)"/>
      <rect x="44" y="78" width="8" height="8" transform="rotate(-25 48 82)"/>
      <rect x="82" y="50" width="8" height="8" transform="rotate(30 86 54)"/>
    </g>
  </g>
</g>
<g class="only-1">
  <g class="fl-hot">
    <circle r="2.200"><animateMotion dur="1.4s" repeatCount="indefinite" path="M51 27L42 38"/></circle>
    <circle r="2.200"><animateMotion dur="1.4s" begin="-.5s" repeatCount="indefinite" path="M66 52L58 60"/></circle>
    <circle r="2.200"><animateMotion dur="1.4s" begin="-.9s" repeatCount="indefinite" path="M76 74L83 69"/></circle>
    <circle r="2.200"><animateMotion dur="1.4s" begin="-.3s" repeatCount="indefinite" path="M48 82L38 77"/></circle>
    <circle r="2.200"><animateMotion dur="1.4s" begin="-1.1s" repeatCount="indefinite" path="M86 54L91 47"/></circle>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.4s" repeatCount="indefinite"/>
  </g>
  <circle class="fl-dark" cx="26" cy="120" r="5"/>
  <text x="50" y="124">דלק</text>
  <rect class="fl-cold-soft st-cold" stroke-width="1.5" x="80" y="115" width="9" height="9" transform="rotate(20 84 119)"/>
  <text x="114" y="124">מקור חמצן</text>
  <text x="182" y="104">כל מה שהבעירה צריכה</text>
  <text x="182" y="118">כבר בתוך הגרגר</text>
</g>

<!-- הקנה -->
<path class="thin st-line" style="stroke-dasharray:2 3" d="M102 60H128"/>
<g class="hl-2 hl-4">
  <rect class="body" x="118" y="44" width="128" height="32" rx="3"/>
  <rect class="fl-bg st-ink" stroke-width="1.5" x="128" y="53" width="120" height="14"/>
  <path class="fl-none st-ink" stroke-width="2" d="M246 44V76"/>
  <g class="fl-dark"><circle cx="134" cy="57" r="2"/><circle cx="140" cy="62" r="2"/><circle cx="146" cy="57" r="2"/><circle cx="152" cy="63" r="2"/><circle cx="134" cy="64" r="2"/><circle cx="157" cy="58" r="2"/><circle cx="146" cy="64" r="2"/></g>
  <path class="fl-line st-ink" stroke-width="1.5" d="M161 54H172Q182 54 184 60Q182 66 172 66H161Z"/>
</g>

<!-- שלב 2: הגז החם מתפשט ודוחף את הקליע -->
<g class="only-2">
  <rect class="fl-bg" x="129" y="54" width="118" height="12"/>
  <rect class="fl-hot" style="opacity:.7" x="129" y="54" width="32" height="12">
    <animate attributeName="width" values="32;32;117;117;32" keyTimes="0;.15;.45;.85;1" dur="2.2s" repeatCount="indefinite"/>
  </rect>
  <rect class="fl-warm" x="129" y="57" width="20" height="6" rx="3">
    <animate attributeName="width" values="20;20;100;100;20" keyTimes="0;.15;.45;.85;1" dur="2.2s" repeatCount="indefinite"/>
  </rect>
  <path class="fl-line st-ink" stroke-width="1.5" d="M161 54H172Q182 54 184 60Q182 66 172 66H161Z">
    <animateTransform attributeName="transform" type="translate" values="0 0;0 0;84 0;150 -2;150 -2" keyTimes="0;.15;.45;.62;1" dur="2.2s" repeatCount="indefinite"/>
  </path>
  <path class="arrow st-hot" d="M150 88H210" marker-end="url(#gunpowder-a)"/>
  <path class="arrow st-hot" d="M130 34V40M150 34V40M170 34V40" />
  <text x="182" y="26">לחץ הגזים דוחף את הקליע</text>
  <text x="180" y="104">מוצק הופך לגז חם</text>
</g>

<!-- שלב 3: בעירה מול התפוצצות -->
<g class="hl-3">
  <rect class="fl-soft st-ink" stroke-width="1.5" x="22" y="148" width="214" height="18" rx="3"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="22" y="186" width="214" height="18" rx="3"/>
  <text x="278" y="158">בעירה</text>
  <text x="278" y="171" class="sm">לאט ממהירות הקול</text>
  <text x="278" y="196">התפוצצות</text>
  <text x="278" y="209" class="sm">גל הלם מהיר מהקול</text>
</g>
<g class="only-3">
  <rect class="fl-dark" x="23" y="149" width="10" height="16">
    <animate attributeName="width" values="0;212;212" keyTimes="0;.9;1" dur="5s" repeatCount="indefinite"/>
  </rect>
  <path class="fl-warm st-hot" stroke-width="1" d="M0 149Q8 153 4 157Q9 161 0 165Z">
    <animateTransform attributeName="transform" type="translate" values="23 0;235 0;235 0" keyTimes="0;.9;1" dur="5s" repeatCount="indefinite"/>
  </path>
  <rect class="fl-dark" x="23" y="187" width="10" height="16">
    <animate attributeName="width" values="0;212;212" keyTimes="0;.08;1" dur="5s" repeatCount="indefinite"/>
  </rect>
  <path class="wire st-elec" style="stroke-width:3" d="M0 182V208">
    <animateTransform attributeName="transform" type="translate" values="23 0;235 0;235 0" keyTimes="0;.08;1" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.08;.12;1" dur="5s" repeatCount="indefinite"/>
  </path>
  <text x="128" y="138">אותו אורך, זמן שונה מאוד</text>
</g>

<!-- שלב 4: עשן ליד הלוע -->
<g class="only-4">
  <g class="fl-line">
    <animate attributeName="opacity" values=".2;.85;.2" dur="2.4s" repeatCount="indefinite"/>
    <circle cx="262" cy="58" r="11"/><circle cx="280" cy="50" r="14"/><circle cx="298" cy="60" r="11"/><circle cx="278" cy="68" r="12"/><circle cx="268" cy="40" r="8"/><circle cx="294" cy="40" r="9"/>
  </g>
  <g class="fl-dark">
    <circle r="1.800"><animateMotion dur="1.6s" repeatCount="indefinite" path="M248 60L300 48"/></circle>
    <circle r="1.800"><animateMotion dur="1.6s" begin="-.5s" repeatCount="indefinite" path="M248 60L304 66"/></circle>
    <circle r="1.800"><animateMotion dur="1.6s" begin="-1s" repeatCount="indefinite" path="M248 60L290 34"/></circle>
  </g>
  <text x="276" y="96">כמחצית נשארת</text>
  <text x="276" y="110">מוצקה, כעשן</text>
  <text x="182" y="26">ללא עשן: כמעט הכול גז</text>
</g>
`;
