// אסטרולב: 1 היטל סטריאוגרפי מהקוטב הדרומי אל מישור המשווה · 2 רשת הכוכבים מסתובבת מעל לוח של קו רוחב · 3 האלידדה בגב מודדת גובה של כוכב · 4 הכוכב מוצב על מעגל הגובה והסרגל מראה את השעה
export default `
<defs>
  <clipPath id="astrolabe-plate"><circle cx="86" cy="122" r="68"/></clipPath>
</defs>
<!-- כס וטבעת -->
<circle class="fl-none st-ink" stroke-width="2" cx="86" cy="25" r="5"/>
<path class="fl-warm st-ink" fill-opacity=".55" stroke-width="2" stroke-linejoin="round" d="M71 48Q74 34 86 30Q98 34 101 48Z"/>
<!-- גוף המכשיר והשוליים -->
<circle class="fl-warm st-ink" fill-opacity=".45" stroke-width="2" cx="86" cy="122" r="76"/>
<path class="st-ink fl-none" stroke-width="1" d="M86 53L86 46M92.3 49.8L92.6 46.3M98.6 50.6L99.2 47.2M103.9 55.4L105.7 48.6M110.8 53.9L112 50.6M116.6 56.3L118.1 53.1M120.5 62.2L124 56.2M127.6 62.6L129.6 59.7M132.6 66.5L134.9 63.8M134.8 73.2L139.7 68.3M141.5 75.4L144.2 73.1M145.4 80.4L148.3 78.4M145.8 87.5L151.8 84M151.7 91.4L154.9 89.9M154.1 97.2L157.4 96M152.6 104.1L159.4 102.3M157.4 109.4L160.8 108.8M158.2 115.7L161.7 115.4M155 122L162 122M158.2 128.3L161.7 128.6M157.4 134.6L160.8 135.2M152.6 139.9L159.4 141.7M154.1 146.8L157.4 148M151.7 152.6L154.9 154.1M145.8 156.5L151.8 160M145.4 163.6L148.3 165.6M141.5 168.6L144.2 170.9M134.8 170.8L139.7 175.7M132.6 177.5L134.9 180.2M127.6 181.4L129.6 184.3M120.5 181.8L124 187.8M116.6 187.7L118.1 190.9M110.8 190.1L112 193.4M103.9 188.6L105.7 195.4M98.6 193.4L99.2 196.8M92.3 194.2L92.6 197.7M86 191L86 198M79.7 194.2L79.4 197.7M73.4 193.4L72.8 196.8M68.1 188.6L66.3 195.4M61.2 190.1L60 193.4M55.4 187.7L53.9 190.9M51.5 181.8L48 187.8M44.4 181.4L42.4 184.3M39.4 177.5L37.1 180.2M37.2 170.8L32.3 175.7M30.5 168.6L27.8 170.9M26.6 163.6L23.7 165.6M26.2 156.5L20.2 160M20.3 152.6L17.1 154.1M17.9 146.8L14.6 148M19.4 139.9L12.6 141.7M14.6 134.6L11.2 135.2M13.8 128.3L10.3 128.6M17 122L10 122M13.8 115.7L10.3 115.4M14.6 109.4L11.2 108.8M19.4 104.1L12.6 102.3M17.9 97.2L14.6 96M20.3 91.4L17.1 89.9M26.2 87.5L20.2 84M26.6 80.4L23.7 78.4M30.5 75.4L27.8 73.1M37.2 73.2L32.3 68.3M39.4 66.5L37.1 63.8M44.4 62.6L42.4 59.7M51.5 62.2L48 56.2M55.4 56.3L53.9 53.1M61.2 53.9L60 50.6M68.1 55.4L66.3 48.6M73.4 50.6L72.8 47.2M79.7 49.8L79.4 46.3"/>

<!-- הלוח: מעגלי הגובה, האופק והמשווה -->
<g class="hl-1 hl-2 hl-4">
  <circle class="fl-panel st-ink" stroke-width="1.2" cx="86" cy="122" r="68"/>
  <g clip-path="url(#astrolabe-plate)" class="fl-none st-line" stroke-width=".9"><circle cx="86" cy="68.2" r="62.5"/><circle cx="86" cy="78.6" r="48.1"/><circle cx="86" cy="85.2" r="37.5"/><circle cx="86" cy="89.7" r="29.2"/><circle cx="86" cy="92.8" r="22.1"/><circle cx="86" cy="94.9" r="16"/><circle cx="86" cy="96.2" r="10.4"/><circle cx="86" cy="97" r="5.1"/></g>
  <g clip-path="url(#astrolabe-plate)"><circle class="fl-none st-cold" stroke-width="1.8" cx="86" cy="50.6" r="84.2"/></g>
  <circle class="fl-none st-ink" stroke-width=".8" stroke-dasharray="2 2" cx="86" cy="122" r="44.6"/>
  <circle class="fl-none st-ink" stroke-width=".8" stroke-dasharray="2 2" cx="86" cy="122" r="29.3"/>
  <path class="thin" style="stroke-width:.8" d="M86 54V190"/>
  <circle class="fl-cold" cx="86" cy="97.3" r="1.8"/>
</g>

<!-- הרשת -->
<g class="hl-2 hl-4">
  <g>
    <animateTransform attributeName="transform" type="rotate" values="55 86 122;0 86 122;0 86 122;55 86 122" keyTimes="0;.42;.85;1" dur="8s" repeatCount="indefinite"/>
    <circle class="fl-none st-warm" stroke-width="3" cx="86" cy="122" r="66.5"/>
    <path class="fl-none st-warm" stroke-width="2.4" stroke-linejoin="round" d="M41.4 122L43.4 117.9L45.7 114.1L48.2 110.7L50.9 107.7L53.8 104.9L56.7 102.5L59.8 100.4L62.9 98.5L66.2 96.9L69.4 95.6L72.7 94.6L76 93.7L79.3 93.2L82.7 92.8L86 92.7L89.3 92.8L92.7 93.2L96 93.7L99.3 94.6L102.6 95.6L105.8 96.9L109.1 98.5L112.2 100.4L115.3 102.5L118.2 104.9L121.1 107.7L123.8 110.7L126.3 114.1L128.6 117.9L130.6 122L132.3 126.5L133.6 131.3L134.4 136.4L134.6 141.9L134.3 147.6L133.1 153.4L131.2 159.3L128.4 165.2L124.7 170.9L120 176.1L114.5 180.8L108.2 184.6L101.2 187.6L93.7 189.4L86 190L78.3 189.4L70.8 187.6L63.8 184.6L57.5 180.8L52 176.1L47.3 170.9L43.6 165.2L40.8 159.3L38.9 153.4L37.7 147.6L37.4 141.9L37.6 136.4L38.4 131.3L39.7 126.5L41.4 122Z"/>
    <path class="fl-none st-warm" stroke-width="2.2" d="M35.4 76.5L48 87.8M22.1 145.3L53.7 133.8M120 180.9L120 180.9M146 90.1L113.4 107.4M149 147.5L127 138.6M62.7 185.9L63.7 183.3M86 54V190"/>
    <path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M49.7 85.9Q54.7 90.1 57.6 96.5Q50.9 94.3 46.2 89.8Z"/><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M52.8 131.3Q58.8 128.9 65.9 129.3Q60.8 134.2 54.6 136.2Z"/><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M117.7 182.2Q115.6 178.8 116 174Q120.4 176 122.3 179.6Z"/><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M114.6 109.7Q109 113 101.9 113.5Q106.3 108 112.2 105.1Z"/><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M126.1 141Q120 138.7 115 133.7Q122.1 133.5 128 136.2Z"/><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M61.2 182.4Q63.3 176.3 68.1 171.1Q68.5 178.2 66.1 184.2Z"/>
    <circle class="fl-hot st-ink" stroke-width="1" cx="57.6" cy="96.5" r="2.4"/>
    <g class="hl-4"><circle class="fl-elec st-ink" stroke-width="1" cx="133.4" cy="152.4" r="4"/></g>
    <g class="only-4"><path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M60.8 105.8L148.3 162"/></g>
  </g>
</g>
<circle class="fl-warm st-ink" stroke-width="1.5" cx="86" cy="122" r="4.5"/>

<!-- גב המכשיר עם האלידדה -->
<g class="hl-3">
  <circle class="fl-none st-ink" stroke-width="2" cx="242" cy="21" r="4.5"/>
  <path class="fl-warm st-ink" fill-opacity=".55" stroke-width="1.6" stroke-linejoin="round" d="M234 36Q236 28 242 26Q248 28 250 36Z"/>
  <circle class="fl-warm st-ink" fill-opacity=".45" stroke-width="2" cx="242" cy="64" r="30"/>
  <path class="st-ink fl-none" stroke-width="1" d="M266 64L272 64M268.1 59.4L271.5 58.8M266.9 54.9L270.2 53.7M262.8 52L268 49M262.3 47L265 44.7M259 43.7L261.3 41M254 43.2L257 38M251.1 39.1L252.3 35.8M246.6 37.9L247.2 34.5M242 40L242 34"/>
  <path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M212 64H272"/>
  <path class="fl-elec st-ink" stroke-width=".8" stroke-linejoin="round" d="M281.8 25.6L283.1 28.8L286.6 29.1L283.9 31.3L284.7 34.6L281.8 32.9L278.9 34.6L279.7 31.3L277 29.1L280.5 28.8Z"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-8 242 64;-40 242 64;-40 242 64;-8 242 64" keyTimes="0;.4;.85;1" dur="5s" repeatCount="indefinite"/>
    <rect class="fl-ink" x="214" y="62" width="56" height="4" rx="1.5"/>
    <rect class="fl-ink" x="263" y="58" width="3" height="12"/>
    <rect class="fl-ink" x="218" y="58" width="3" height="12"/>
  </g>
  <circle class="fl-warm st-ink" stroke-width="1.2" cx="242" cy="64" r="3"/>
</g>

<!-- שלב 1: ההיטל -->
<g class="only-1">
  <circle class="fl-cold-soft st-ink" stroke-width="1.5" cx="242" cy="132" r="25"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M192 132H294"/>
  <circle class="fl-hot" cx="242" cy="157" r="2.6"/>
  <circle class="fl-ink" cx="242" cy="107" r="1.8"/>
  <line class="wire st-hot" style="stroke-width:1.4;stroke-dasharray:3 3" x1="242" y1="157" x2="267" y2="132"><animate attributeName="x2" values="267;266.1;263.7;259.7;254.5;248.5;254.5;259.7;263.7;266.1;267" dur="6s" repeatCount="indefinite"/><animate attributeName="y2" values="132;125.5;119.5;114.3;110.3;107.9;110.3;114.3;119.5;125.5;132" dur="6s" repeatCount="indefinite"/></line>
  <circle class="fl-elec st-ink" stroke-width="1" r="3"><animate attributeName="cx" values="267;266.1;263.7;259.7;254.5;248.5;254.5;259.7;263.7;266.1;267" dur="6s" repeatCount="indefinite"/><animate attributeName="cy" values="132;125.5;119.5;114.3;110.3;107.9;110.3;114.3;119.5;125.5;132" dur="6s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot st-ink" stroke-width="1" r="2.6" cy="132"><animate attributeName="cx" values="267;261.2;256.4;252.4;248.7;245.3;248.7;252.4;256.4;261.2;267" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.6;1" dur="2s" repeatCount="indefinite"/></circle>
  <text x="242" y="182">היטל מהקוטב הדרומי</text>
  <text x="242" y="198">אל מישור המשווה</text>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-warm" cx="57.6" cy="96.5" r="10"/>
  <text x="242" y="166">רשת: מפת כוכבים</text>
  <text x="242" y="182">לוח: אופק לקו רוחב</text>
  <path class="thin st-ink" style="stroke-width:1" d="M188 162L146 140M186 180L122 133.8"/>
</g>

<!-- שלב 3 -->
<g class="only-3">
  <path class="wire st-elec" style="stroke-width:1.3;stroke-dasharray:2 3" d="M265 44.7L277.8 33.6"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.38;.45;.85;1" dur="5s" repeatCount="indefinite"/></path>
  <path class="fl-none st-hot" stroke-width="1.6" d="M256 64A14 14 0 0 0 252.7 55"/>
  <text x="242" y="166">מכוונים אל כוכב</text>
  <text x="242" y="182">וקוראים את זווית הגובה</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <circle class="ring st-hot" cx="57.6" cy="96.5" r="9"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.45;.85;.9" dur="8s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" cx="146.6" cy="160.9" r="3"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.45;.85;.9" dur="8s" repeatCount="indefinite"/></circle>
  <text x="242" y="166">הכוכב על מעגל הגובה</text>
  <text x="242" y="182">והסרגל מראה שעה</text>
</g>
`;
