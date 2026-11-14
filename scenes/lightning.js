// ברק ורעם. 1 גרגרי קרח מתנגשים בענן · 2 הפרדת מטענים · 3 האוויר נפרץ · 4 אור מיד, רעם אחריו
export default `
<!-- אדמה, בית וצופה -->
<rect class="fl-soft" x="0" y="196" width="320" height="24"/>
<path class="wire st-ink" d="M0 196H320" style="stroke-width:1.5"/>
<path class="body" d="M24 196V177L41 164L58 177V196z"/>
<rect class="fl-warm" x="36" y="182" width="9" height="14"/>
<path class="wire st-ink" d="M294 165V182L288 196M294 182L300 196M294 170L286 178M294 170L302 178" style="stroke-width:2"/>
<circle class="body" cx="294" cy="158" r="6.500"/>

<!-- ענן סערה -->
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M40 80Q18 80 18 62Q18 46 36 44Q36 24 60 22Q72 8 96 14Q116 4 136 16Q162 10 170 32Q198 30 200 54Q204 80 180 80z"/>
<path fill="#fff" opacity=".1" d="M44 46Q44 30 62 28Q74 16 96 21Q116 12 134 22Q156 18 163 36Q120 26 44 46z"/>

<!-- שלב 1: גרגרי קרח עולים, ברד יורד, והם מתנגשים -->
<g class="hl-1">
  <g>
    <path fill="#fff" d="M0-5L4 0L0 5L-4 0z"><animateMotion dur="3s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <path fill="#fff" d="M0-4L3.200 0L0 4L-3.200 0z"><animateMotion dur="3s" begin="-1.500s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="5"><animateMotion dur="2.300s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="3.800"><animateMotion dur="2.900s" begin="-1.700s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <path class="fl-elec blink" d="M62 42l2 6l6 2l-6 2l-2 6l-2-6l-6-2l6-2z"/>
  </g>
  <g transform="translate(46 -4)">
    <path fill="#fff" d="M0-5L4 0L0 5L-4 0z"><animateMotion dur="2.700s" begin="-.700s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <path fill="#fff" d="M0-4L3.200 0L0 4L-3.200 0z"><animateMotion dur="2.700s" begin="-2s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="5"><animateMotion dur="2.100s" begin="-1s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="3.800"><animateMotion dur="2.900s" begin="-1.700s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <path class="fl-elec blink d2" d="M62 42l2 6l6 2l-6 2l-2 6l-2-6l-6-2l6-2z"/>
  </g>
  <g transform="translate(92 0)">
    <path fill="#fff" d="M0-5L4 0L0 5L-4 0z"><animateMotion dur="3.200s" begin="-1.200s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <path fill="#fff" d="M0-4L3.200 0L0 4L-3.200 0z"><animateMotion dur="3.200s" begin="-2.600s" repeatCount="indefinite" path="M52 70Q48 46 62 32Q74 46 68 68Q60 76 52 70"/></path>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="5"><animateMotion dur="2.500s" begin="-.400s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <circle class="fl-cold-soft st-cold" stroke-width="1.500" r="3.800"><animateMotion dur="2.900s" begin="-1.700s" repeatCount="indefinite" path="M72 34Q80 52 62 70Q50 52 72 34"/></circle>
    <path class="fl-elec blink d4" d="M62 42l2 6l6 2l-6 2l-2 6l-2-6l-6-2l6-2z"/>
  </g>
</g>

<!-- שלב 2 והלאה: מטענים. פלוס בראש הענן, מינוס בבסיסו, פלוס מושרה באדמה -->
<g class="from-2">
  <g class="fl-hot">
    <circle cx="64" cy="33" r="5.200"/><circle cx="100" cy="25" r="5.200"/><circle cx="136" cy="27" r="5.200"/><circle cx="170" cy="45" r="5.200"/>
    <circle cx="74" cy="208" r="5.200"/><circle cx="100" cy="208" r="5.200"/><circle cx="126" cy="208" r="5.200"/><circle cx="152" cy="208" r="5.200"/><circle cx="178" cy="208" r="5.200"/>
  </g>
  <g class="fl-cold">
    <circle cx="42" cy="70" r="5.200"/><circle cx="68" cy="71" r="5.200"/><circle cx="94" cy="71" r="5.200"/><circle cx="120" cy="71" r="5.200"/><circle cx="146" cy="71" r="5.200"/><circle cx="172" cy="70" r="5.200"/>
  </g>
  <path fill="none" stroke="#fff" stroke-width="1.700" stroke-linecap="round" d="M61 33h6M64 30v6M97 25h6M100 22v6M133 27h6M136 24v6M167 45h6M170 42v6M71 208h6M74 205v6M97 208h6M100 205v6M123 208h6M126 205v6M149 208h6M152 205v6M175 208h6M178 205v6M39 70h6M65 71h6M91 71h6M117 71h6M143 71h6M169 70h6"/>
</g>
<g class="only-2">
  <path class="thin dash" d="M74 192V88M100 192V88M152 192V88M178 192V88"/>
  <circle class="ring st-cold" cx="107" cy="71" r="20"/>
  <circle class="ring st-hot d3" cx="126" cy="208" r="11"/>
</g>

<!-- שלב 3: מוביל מדורג מתפתל מטה, ואז מכת הזרם -->
<g class="only-3">
  <path class="wire st-violet" pathLength="100" stroke-dasharray="100" d="M118 112L134 124L130 140" style="stroke-width:1.600">
    <animate attributeName="stroke-dashoffset" values="100;100;0;0" keyTimes="0;.18;.36;1" dur="2.400s" repeatCount="indefinite"/></path>
  <path class="wire st-violet" pathLength="100" stroke-dasharray="100" d="M106 130L92 142L96 156" style="stroke-width:1.600">
    <animate attributeName="stroke-dashoffset" values="100;100;0;0" keyTimes="0;.26;.44;1" dur="2.400s" repeatCount="indefinite"/></path>
  <path class="wire st-violet" pathLength="100" stroke-dasharray="100" d="M122 146L138 158L136 168" style="stroke-width:1.600">
    <animate attributeName="stroke-dashoffset" values="100;100;0;0" keyTimes="0;.34;.5;1" dur="2.400s" repeatCount="indefinite"/></path>
  <path class="wire st-violet" pathLength="100" stroke-dasharray="100" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196" style="stroke-width:2.200">
    <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;.55;1" dur="2.400s" repeatCount="indefinite"/></path>
  <g opacity="0">
    <animate attributeName="opacity" values="0;0;1;.35;1;1;0" keyTimes="0;.56;.6;.68;.74;.9;1" dur="2.400s" repeatCount="indefinite"/>
    <path class="wire st-elec" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196" style="stroke-width:6"/>
    <path class="wire" stroke="#fff" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196" style="stroke-width:2"/>
    <path class="fl-elec" d="M118 186l3 7l8 3l-8 3l-3 7l-3-7l-8-3l8-3z"/>
  </g>
  <text x="262" y="30">האוויר נפרץ</text>
  <text x="262" y="46">זרם עצום עובר</text>
</g>

<!-- שלב 4: הערוץ הלוהט, אור מהיר וגלי קול איטיים -->
<g class="from-4">
  <path class="wire st-elec" d="M118 112L134 124L130 140M106 130L92 142L96 156M122 146L138 158L136 168" style="stroke-width:1.500"/>
  <path class="wire st-hot fade" style="stroke-width:10;stroke-opacity:.45" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196"/>
  <path class="wire st-elec" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196" style="stroke-width:5"/>
  <path class="wire blink" stroke="#fff" d="M112 80L104 100L118 112L106 130L122 146L112 164L122 180L118 196" style="stroke-width:1.800"/>
  <g clip-path="url(#lightning-c)">
    <circle class="fl-none st-violet" stroke-width="2.500" cx="116" cy="140" r="14">
      <animate attributeName="r" values="14;190" dur="4.500s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;.15" dur="4.500s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-violet" stroke-width="2.500" cx="116" cy="140" r="14">
      <animate attributeName="r" values="14;190" dur="4.500s" begin="-1.500s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;.15" dur="4.500s" begin="-1.500s" repeatCount="indefinite"/></circle>
    <circle class="fl-none st-violet" stroke-width="2.500" cx="116" cy="140" r="14">
      <animate attributeName="r" values="14;190" dur="4.500s" begin="-3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;.15" dur="4.500s" begin="-3s" repeatCount="indefinite"/></circle>
  </g>
  <path class="wire st-elec" stroke-dasharray="1 5" d="M126 132L285 157" style="stroke-width:1.5"/>
  <circle class="fl-elec" r="2.800"><animateMotion dur=".320s" repeatCount="indefinite" path="M126 132L285 157"/></circle>
  <circle class="fl-elec" r="2.800"><animateMotion dur=".320s" begin="-.160s" repeatCount="indefinite" path="M126 132L285 157"/></circle>
</g>

<g class="only-1">
  <text x="262" y="30">גרגרי קרח מתנגשים</text>
  <text x="262" y="46">ומחליפים מטען</text>
</g>
<g class="only-2">
  <text x="262" y="30">מינוס בתחתית הענן</text>
  <text x="262" y="46">פלוס על האדמה</text>
</g>
<g class="only-4">
  <text x="262" y="30">האור מגיע מיד</text>
  <text x="262" y="46">הרעם מגיע אחריו</text>
</g>
<defs>
  <clipPath id="lightning-c"><rect x="128" y="86" width="192" height="109"/></clipPath>
</defs>
`;
