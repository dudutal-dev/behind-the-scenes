// זוהר צפוני: 1 רוח השמש נודפת ומוסטת סביב השדה המגנטי · 2 מהזנב, אלקטרונים יורדים לאורך קווי השדה אל הקטבים · 3 בגובה 100–300 ק״מ חמצן וחנקן זוהרים בצבעים קבועים · 4 סערה סולארית מרחיבה את הטבעת
export default `
<defs>
  <marker id="aurora-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="aurora-col"><rect x="44" y="60" width="20" height="132.9" rx="3"/></clipPath>
</defs>

<!-- השמש ורוח השמש -->
<g class="hl-1 hl-4">
  <circle class="fl-elec st-warm" style="stroke-width:2" cx="-34" cy="112" r="54"/>
</g>
<!-- קווי השדה: דחוסים בצד היום, נמתחים לזנב בצד הלילה -->
<g class="fl-none st-violet hl-2" style="stroke-width:1.3">
  <path d="M181.9 125.9L181 125.8L180.1 125.7L179.2 125.5L178.3 125.2L177.4 124.9L176.6 124.4L175.7 123.9L175 123.3L174.2 122.6L173.6 121.9L172.9 121.1L172.4 120.3L171.8 119.3L171.4 118.4L171 117.4L170.7 116.4L170.4 115.3L170.2 114.2L170.1 113.1L170.1 112L170.1 110.9L170.2 109.8L170.4 108.7L170.7 107.6L171 106.6L171.4 105.6L171.8 104.7L172.4 103.7L172.9 102.9L173.6 102.1L174.2 101.4L175 100.7L175.7 100.1L176.6 99.6L177.4 99.1L178.3 98.8L179.2 98.5L180.1 98.3L181 98.2L181.9 98.1"/><path d="M224.4 125.9L226.3 125.8L228.1 125.7L229.9 125.5L231.7 125.2L233.5 124.9L235.2 124.4L236.8 123.9L238.3 123.3L239.8 122.6L241.2 121.9L242.5 121.1L243.6 120.3L244.7 119.3L245.6 118.4L246.4 117.4L247 116.4L247.5 115.3L247.9 114.2L248.1 113.1L248.2 112L248.1 110.9L247.9 109.8L247.5 108.7L247 107.6L246.4 106.6L245.6 105.6L244.7 104.7L243.6 103.7L242.5 102.9L241.2 102.1L239.8 101.4L238.3 100.7L236.8 100.1L235.2 99.6L233.5 99.1L231.7 98.8L229.9 98.5L228.1 98.3L226.3 98.2L224.4 98.1"/><path d="M184.3 129.7L182.7 130.6L181 131.3L179.3 131.8L177.5 132.2L175.6 132.3L173.8 132.3L172 132L170.2 131.5L168.5 130.8L166.9 129.8L165.3 128.7L163.9 127.4L162.6 125.9L161.4 124.2L160.4 122.4L159.5 120.5L158.9 118.5L158.4 116.4L158.1 114.2L158 112L158.1 109.8L158.4 107.6L158.9 105.5L159.5 103.5L160.4 101.6L161.4 99.8L162.6 98.1L163.9 96.6L165.3 95.3L166.9 94.2L168.5 93.2L170.2 92.5L172 92L173.8 91.7L175.6 91.7L177.5 91.8L179.3 92.2L181 92.7L182.7 93.4L184.3 94.3"/><path d="M219.5 129.7L222.7 130.6L226.2 131.3L229.7 131.8L233.3 132.2L237 132.3L240.7 132.3L244.3 132L247.9 131.5L251.3 130.8L254.6 129.8L257.8 128.7L260.7 127.4L263.3 125.9L265.7 124.2L267.7 122.4L269.4 120.5L270.8 118.5L271.8 116.4L272.4 114.2L272.6 112L272.4 109.8L271.8 107.6L270.8 105.5L269.4 103.5L267.7 101.6L265.7 99.8L263.3 98.1L260.7 96.6L257.8 95.3L254.6 94.2L251.3 93.2L247.9 92.5L244.3 92L240.7 91.7L237 91.7L233.3 91.8L229.7 92.2L226.2 92.7L222.7 93.4L219.5 94.3"/><path d="M186.2 131.8L184 133.8L181.6 135.6L179.1 137.3L176.4 138.6L173.5 139.6L170.6 140.3L167.6 140.6L164.7 140.5L161.7 140L158.8 139.1L156.1 137.8L153.4 136.1L151 134L148.9 131.5L147 128.8L145.4 125.8L144.1 122.5L143.2 119.1L142.6 115.6L142.4 112L142.6 108.4L143.2 104.9L144.1 101.5L145.4 98.2L147 95.2L148.9 92.5L151 90L153.4 87.9L156.1 86.2L158.8 84.9L161.7 84L164.7 83.5L167.6 83.4L170.6 83.7L173.5 84.4L176.4 85.4L179.1 86.7L181.6 88.4L184 90.2L186.2 92.2"/><path d="M215.8 131.8L220.1 133.8L224.9 135.6L230.1 137.3L235.5 138.6L241.2 139.6L247.1 140.3L253.1 140.6L259.1 140.5L265.1 140L270.9 139.1L276.5 137.8L281.7 136.1L286.5 134L290.9 131.5L294.7 128.8L298 125.8L300.5 122.5L302.4 119.1L303.5 115.6L303.9 112L303.5 108.4L302.4 104.9L300.5 101.5L298 98.2L294.7 95.2L290.9 92.5L286.5 90L281.7 87.9L276.5 86.2L270.9 84.9L265.1 84L259.1 83.5L253.1 83.4L247.1 83.7L241.2 84.4L235.5 85.4L230.1 86.7L224.9 88.4L220.1 90.2L215.8 92.2"/>
  <path d="M200 90C226 58 276 78 316 78"/><path d="M200 90C226 44 276 64 316 64"/><path d="M200 134C226 166 276 146 316 146"/><path d="M200 134C226 180 276 160 316 160"/>
</g>
<path class="thin hl-1" style="stroke-dasharray:5 4" d="M206 8C152 10 126 60 126 112C126 164 152 214 206 216"/>

<!-- כדור הארץ, צד הלילה מוצל -->
<circle class="fl-cold-soft st-ink" style="stroke-width:2" cx="196" cy="112" r="24"/>
<path class="fl-dark" style="opacity:.35" d="M196 88A24 24 0 0 1 196 136Z"/>
<path class="fl-green" style="opacity:.55" d="M186 104q6-6 12-2t4 8q-6 6-12 2t-4-8zM204 118q4-2 6 2t-2 6q-4 0-6-4t2-4z"/>
<circle class="fl-none st-ink" style="stroke-width:2" cx="196" cy="112" r="24"/>
<!-- אליפסות הזוהר סביב שני הקטבים -->
<g class="from-2">
  <g class="hl-2 hl-3"><g style="stroke:var(--s-green);fill:none;stroke-width:2.5"><animate attributeName="opacity" values=".5;1;.5" dur="1.6s" repeatCount="indefinite"/>
    <ellipse cx="198" cy="92" rx="9" ry="2.6"/><ellipse cx="198" cy="132" rx="9" ry="2.6"/>
  </g></g>
</g>

<!-- שלב 1: רוח השמש מוסטת סביב השדה -->
<g class="only-1">
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" path="M26 64H129.2C138.4 44 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M26 64H129.2C138.4 44 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></circle>
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-0.45s" repeatCount="indefinite" path="M26 86H120.4C131.8 66 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-0.45s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-1.75s" repeatCount="indefinite" path="M26 86H120.4C131.8 66 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-1.75s" repeatCount="indefinite"/></circle>
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-0.9s" repeatCount="indefinite" path="M26 104H113.2C126.4 84 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-0.9s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-2.2s" repeatCount="indefinite" path="M26 104H113.2C126.4 84 150 22 210 10"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-2.2s" repeatCount="indefinite"/></circle>
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-1.35s" repeatCount="indefinite" path="M26 120H113.2C126.4 140 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-1.35s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-2.6500000000000004s" repeatCount="indefinite" path="M26 120H113.2C126.4 140 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-2.6500000000000004s" repeatCount="indefinite"/></circle>
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-1.8s" repeatCount="indefinite" path="M26 138H120.4C131.8 158 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-1.8s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-3.1s" repeatCount="indefinite" path="M26 138H120.4C131.8 158 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-3.1s" repeatCount="indefinite"/></circle>
  <circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-2.25s" repeatCount="indefinite" path="M26 160H129.2C138.4 180 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-2.25s" repeatCount="indefinite"/></circle><circle r="2" class="fl-elec"><animateMotion dur="2.6s" begin="-3.55s" repeatCount="indefinite" path="M26 160H129.2C138.4 180 150 202 210 214"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-3.55s" repeatCount="indefinite"/></circle>
  <text x="76" y="24">רוח השמש:</text>
  <text x="76" y="40">כ־400 ק״מ בשנייה</text>
  <text x="262" y="24">השדה המגנטי</text>
  <text x="262" y="40">הודף את רובה</text>
</g>

<!-- שלב 2: אלקטרונים מואצים בזנב ויורדים לאורך קווי השדה אל הקטבים -->
<g class="only-2">
  <circle r="2.2" class="fl-green"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M303.9 112L303.5 108.4L302.4 104.9L300.5 101.5L298 98.2L294.7 95.2L290.9 92.5L286.5 90L281.7 87.9L276.5 86.2L270.9 84.9L265.1 84L259.1 83.5L253.1 83.4L247.1 83.7L241.2 84.4L235.5 85.4L230.1 86.7L224.9 88.4L220.1 90.2L215.8 92.2"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="0s" repeatCount="indefinite"/></circle><circle r="2.2" class="fl-green"><animateMotion dur="1.6s" begin="-0.8s" repeatCount="indefinite" path="M303.9 112L303.5 108.4L302.4 104.9L300.5 101.5L298 98.2L294.7 95.2L290.9 92.5L286.5 90L281.7 87.9L276.5 86.2L270.9 84.9L265.1 84L259.1 83.5L253.1 83.4L247.1 83.7L241.2 84.4L235.5 85.4L230.1 86.7L224.9 88.4L220.1 90.2L215.8 92.2"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-0.8s" repeatCount="indefinite"/></circle><circle r="2.2" class="fl-green"><animateMotion dur="1.6s" begin="-0.4s" repeatCount="indefinite" path="M303.9 112L303.5 115.6L302.4 119.1L300.5 122.5L298 125.8L294.7 128.8L290.9 131.5L286.5 134L281.7 136.1L276.5 137.8L270.9 139.1L265.1 140L259.1 140.5L253.1 140.6L247.1 140.3L241.2 139.6L235.5 138.6L230.1 137.3L224.9 135.6L220.1 133.8L215.8 131.8"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-0.4s" repeatCount="indefinite"/></circle><circle r="2.2" class="fl-green"><animateMotion dur="1.6s" begin="-1.2s" repeatCount="indefinite" path="M303.9 112L303.5 115.6L302.4 119.1L300.5 122.5L298 125.8L294.7 128.8L290.9 131.5L286.5 134L281.7 136.1L276.5 137.8L270.9 139.1L265.1 140L259.1 140.5L253.1 140.6L247.1 140.3L241.2 139.6L235.5 138.6L230.1 137.3L224.9 135.6L220.1 133.8L215.8 131.8"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-1.2s" repeatCount="indefinite"/></circle>
  <text x="262" y="24">קווי השדה מובילים</text>
  <text x="262" y="40">אלקטרונים לקטבים</text>
  <text x="196" y="64">טבעת הזוהר</text>
</g>

<!-- שלב 3: חתך באטמוספרה: איזה אטום זוהר באיזה גובה -->
<g class="only-3">
  <rect class="body" style="stroke-width:1.5" x="6" y="36" width="132" height="174" rx="8"/>
  <path class="thin st-ink" style="stroke-dasharray:3 3" d="M138 56L188 88"/>
  <g clip-path="url(#aurora-col)">
    <rect x="44" y="60" width="20" height="61.8" style="fill:var(--s-hot);opacity:.55"/>
    <rect x="44" y="121.8" width="20" height="61.8" style="fill:var(--s-green)"><animate attributeName="opacity" values=".6;1;.6" dur="1.4s" repeatCount="indefinite"/></rect>
    <rect x="44" y="183.6" width="20" height="9.3" style="fill:var(--s-violet)"/>
  </g>
  <circle r="1.8" class="fl-ink"><animateMotion dur="1.4s" begin="0s" repeatCount="indefinite" path="M54 54V191.1"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.4s" begin="0s" repeatCount="indefinite"/></circle><circle r="1.8" class="fl-ink"><animateMotion dur="1.4s" begin="-0.6s" repeatCount="indefinite" path="M50 54V152.7"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.4s" begin="-0.6s" repeatCount="indefinite"/></circle><circle r="1.8" class="fl-ink"><animateMotion dur="1.4s" begin="-1s" repeatCount="indefinite" path="M58 54V177.5"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.4s" begin="-1s" repeatCount="indefinite"/></circle>
  <path class="thin st-ink" d="M38 60H34M38 121.8H34M38 183.6H34"/>
  <text x="22" y="63" class="sm">300</text>
  <text x="22" y="124.8" class="sm">200</text>
  <text x="22" y="186.6" class="sm">100</text>
  <text x="72" y="50" class="sm">גובה (ק״מ)</text>
  <text x="100" y="87.8">אדום</text><text x="100" y="99.8" class="sm">חמצן, אוויר דליל</text>
  <text x="100" y="149.6">ירוק</text><text x="100" y="161.6" class="sm">חמצן</text>
  <text x="100" y="184.9">כחול־סגול</text><text x="100" y="196.9" class="sm">חנקן</text>
  <text x="262" y="24">אלקטרונים מעוררים</text>
  <text x="262" y="40">אטומים, והם זוהרים</text>
</g>

<!-- שלב 4: ענן מהשמש דוחס את השדה, והטבעת מתרחבת אל קו המשווה -->
<g class="only-4">
  <path class="fl-warm" style="opacity:.45"><animate attributeName="d" values="M22 70Q40 60 52 80Q62 112 52 144Q40 164 22 154Z;M80 56Q112 44 124 80Q134 112 124 144Q112 180 80 168Z;M80 56Q112 44 124 80Q134 112 124 144Q112 180 80 168Z" keyTimes="0;.6;1" dur="3s" repeatCount="indefinite"/></path>
  <path class="wire st-hot" style="stroke-width:1.8;stroke-dasharray:5 4" d="M206 14C166 16 146 64 146 112C146 160 166 208 206 210"/>
  <g style="stroke:var(--s-green);fill:none;stroke-width:3"><animate attributeName="opacity" values=".55;1;.55" dur="1s" repeatCount="indefinite"/>
    <ellipse cx="198" cy="97" rx="17" ry="4.5"/><ellipse cx="198" cy="127" rx="17" ry="4.5"/>
  </g>
  <text x="62" y="24">ענן ענק מהשמש</text>
  <text x="262" y="24">הטבעת מתרחבת</text>
  <text x="262" y="40">הרחק מהקטבים</text>
</g>
`;
