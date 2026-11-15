// טורבינת רוח: 1 חתך הלהב הוא כנף ועילוי מסובב · 2 ציר איטי, תיבת הילוכים, גנרטור מהיר · 3 חיישן רוח, סבסוב הראש וזווית הלהב · 4 הספק בחזקת שלוש וגובה המגדל
export default `
<defs>
  <clipPath id="wind-c1"><rect x="138" y="48" width="27" height="8"/></clipPath>
  <clipPath id="wind-c2"><rect x="208" y="50" width="22" height="4"/></clipPath>
  <clipPath id="wind-c3"><rect x="238" y="47" width="32" height="10" rx="1.5"/></clipPath>
</defs>

<!-- הטורבינה כולה, מבט מלפנים -->
<path class="thin" d="M8 204H94"/>
<path class="thin" style="stroke-dasharray:2 3" d="M58 63L104 53"/>
<g class="hl-4">
  <path class="thin st-cold" d="M33 190C30 172 24 146 17 122"/>
  <path class="wire st-cold dash" style="stroke-width:2;animation-duration:1.6s" d="M33 190H40"/>
  <path class="wire st-cold dash" style="stroke-width:2;animation-duration:1.1s" d="M29 168H40"/>
  <path class="wire st-cold dash" style="stroke-width:2;animation-duration:.7s" d="M24 145H40"/>
  <path class="wire st-cold dash" style="stroke-width:2;animation-duration:.45s" d="M17 122H40"/>
  <path class="fl-cold" d="M43 190l-5-3v6zM43 168l-5-3v6zM43 145l-5-3v6zM43 122l-5-3v6z"/>
</g>
<path class="body" d="M47.5 72L45 204H55L52.5 72z"/>
<g class="hl-2 hl-4"><path class="wire st-elec dash" style="stroke-width:1.6" d="M50 78V198H62"/></g>
<rect class="body" x="62" y="193" width="12" height="11" rx="1.5"/>
<path class="fl-elec" d="M69 195l-4 5h3l-1 3 4-5h-3z"/>
<rect class="fl-soft st-ink" stroke-width="2" x="44" y="60" width="12" height="12" rx="3.5"/>
<g transform="translate(50 66)"><g>
  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
  <g class="fl-panel st-ink" stroke-width="1.6" stroke-linejoin="round">
    <path d="M-2.6 -3C-4.4 -14 -3 -30 -.6 -41L.8 -41C2.8 -28 3.2 -12 2.2 -3z"/>
    <path transform="rotate(120)" d="M-2.6 -3C-4.4 -14 -3 -30 -.6 -41L.8 -41C2.8 -28 3.2 -12 2.2 -3z"/>
    <path transform="rotate(240)" d="M-2.6 -3C-4.4 -14 -3 -30 -.6 -41L.8 -41C2.8 -28 3.2 -12 2.2 -3z"/>
  </g>
  <g class="only-1">
    <g class="arrow st-green" style="stroke-width:2.2">
      <path d="M3 -25H13M9.5 -28.5L13.5 -25L9.5 -21.5"/>
      <path transform="rotate(120)" d="M3 -25H13M9.5 -28.5L13.5 -25L9.5 -21.5"/>
      <path transform="rotate(240)" d="M3 -25H13M9.5 -28.5L13.5 -25L9.5 -21.5"/>
    </g>
  </g>
</g></g>
<circle class="body" cx="50" cy="66" r="4.6"/>
<circle class="fl-ink" cx="50" cy="66" r="1.4"/>

<!-- ראש המגדל בחתך: רכזת, ציר איטי, תיבת הילוכים, ציר מהיר, גנרטור -->
<path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M140 30H286Q300 30 300 44V62Q300 76 286 76H140z"/>
<path class="body" d="M243 81L242 104H266L265 81z"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M240 104l5 3 5-5 5 5 5-5 5 4 3-2"/>
<g class="hl-3"><rect class="fl-dark st-ink" stroke-width="1.5" x="237" y="76" width="34" height="6" rx="1.5"/></g>
<g class="hl-2">
  <path class="wire st-elec dash" style="stroke-width:2" d="M254 68V103"/>
</g>
<g class="hl-1 hl-2 hl-3">
  <path class="body" d="M117.5 40L119 11H125L126.5 40z"/>
  <path class="body" d="M117.5 64L119 93H125L126.5 64z"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M116 11l3-2 3 3 3-3 3 2M116 93l3 2 3-3 3 3 3-2"/>
  <path class="body" d="M139 35C121 35 108 44 106 52C108 60 121 69 139 69z"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M131 35.5V68.5"/>
</g>
<g class="hl-2">
  <!-- ציר איטי ומסב -->
  <rect class="fl-line st-ink" stroke-width="1.5" x="138" y="48" width="27" height="8"/>
  <g clip-path="url(#wind-c1)"><path class="st-ink fl-none" stroke-width="1.6" d="M126 46l4 12M132 46l4 12M138 46l4 12M144 46l4 12M150 46l4 12M156 46l4 12M162 46l4 12">
    <animateTransform attributeName="transform" type="translate" from="0 0" to="6 0" dur="2.2s" repeatCount="indefinite"/></path></g>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="145" y="42" width="9" height="20" rx="2"/>
  <!-- תיבת הילוכים: גלגל גדול ואיטי מסובב גלגל קטן ומהיר -->
  <rect class="body" x="163" y="33" width="48" height="38" rx="4"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 182 52" to="360 182 52" dur="6s" repeatCount="indefinite"/>
    <circle class="fl-none st-ink" stroke-width="3" stroke-dasharray="3.1416 3.1416" cx="182" cy="52" r="15"/>
    <circle class="fl-soft st-ink" stroke-width="1.5" cx="182" cy="52" r="13.4"/>
    <path class="st-ink fl-none" stroke-width="1.4" d="M182 39.5V64.5M169.5 52H194.5"/>
    <circle class="fl-cold" cx="182" cy="43" r="2.4"/>
  </g>
  <circle class="fl-ink" cx="182" cy="52" r="2.6"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" from="18 202 52" to="-342 202 52" dur="2s" repeatCount="indefinite"/>
    <circle class="fl-none st-ink" stroke-width="3" stroke-dasharray="3.1416 3.1416" cx="202" cy="52" r="5"/>
    <circle class="fl-soft st-ink" stroke-width="1.5" cx="202" cy="52" r="3.6"/>
    <circle class="fl-hot" cx="202" cy="49.6" r="1.5"/>
  </g>
  <!-- ציר מהיר ודיסק בלם -->
  <rect class="fl-line st-ink" stroke-width="1.2" x="208" y="50" width="22" height="4"/>
  <g clip-path="url(#wind-c2)"><path class="st-ink fl-none" stroke-width="1.2" d="M200 49l3 6M205 49l3 6M210 49l3 6M215 49l3 6M220 49l3 6M225 49l3 6">
    <animateTransform attributeName="transform" type="translate" from="0 0" to="5 0" dur=".3s" repeatCount="indefinite"/></path></g>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="217" y="43" width="4" height="18" rx="1"/>
  <!-- גנרטור: מגנטים מסתובבים בין סלילי נחושת -->
  <rect class="body" x="230" y="35" width="48" height="34" rx="6"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="236" y="39" width="36" height="6" rx="2"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="236" y="59" width="36" height="6" rx="2"/>
  <path class="thin st-ink" style="stroke-width:1" d="M241 39v6M246 39v6M251 39v6M256 39v6M261 39v6M266 39v6M241 59v6M246 59v6M251 59v6M256 59v6M261 59v6M266 59v6"/>
  <rect class="fl-cold" x="238" y="47" width="32" height="10" rx="1.5"/>
  <g clip-path="url(#wind-c3)"><path class="st-hot fl-none" stroke-width="4" d="M226 45l5 14M234 45l5 14M242 45l5 14M250 45l5 14M258 45l5 14M266 45l5 14">
    <animateTransform attributeName="transform" type="translate" from="0 0" to="8 0" dur=".35s" repeatCount="indefinite"/></path></g>
  <rect class="fl-none st-ink" stroke-width="1.4" x="238" y="47" width="32" height="10" rx="1.5"/>
</g>
<!-- חיישני רוח על הגג: מד מהירות ושבשבת -->
<g class="hl-3">
  <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M277 30V21M292 30V19"/>
  <g transform="translate(277 21)"><g>
    <animateTransform attributeName="transform" type="scale" values="1 1;-1 1;1 1" dur=".9s" repeatCount="indefinite"/>
    <path class="st-ink fl-none" stroke-width="1.3" d="M-6 0H6"/>
    <circle class="fl-panel st-ink" stroke-width="1.2" cx="-6" cy="0" r="2.3"/><circle class="fl-ink" cx="6" cy="0" r="2.3"/>
  </g></g>
  <path class="fl-cold st-ink" stroke-width="1.2" stroke-linejoin="round" d="M283 19L287 17.2H297L302 13.5V24.5L297 20.8H287z"/>
</g>

<!-- חתך הלהב: כנף. האוויר שמעליה מהיר יותר, ונוצר עילוי -->
<g class="hl-1">
  <path class="thin" style="stroke-dasharray:2 3" d="M122 98L133 152"/>
  <path class="wire st-hot" style="stroke-width:2" d="M115 88H129"/>
  <path class="wire st-cold dash" style="stroke-width:1.8;animation-duration:.55s" d="M104 139C120 139 130 129 146 128C168 127 186 139 206 149"/>
  <path class="wire st-cold dash" style="stroke-width:1.8;animation-duration:.55s" d="M104 151C118 151 124 141 142 139C164 137 182 151 206 163"/>
  <path class="wire st-cold dash" style="stroke-width:1.8;animation-duration:1.2s" d="M104 171C116 171 124 175 140 175C162 175 184 175 206 181"/>
  <path class="wire st-cold dash" style="stroke-width:1.8;animation-duration:1.2s" d="M104 183C120 183 140 187 160 187C178 187 192 189 206 193"/>
  <path class="body" d="M128 162C128 152 146 146 160 149C172 152 182 160 189 168C172 167 150 169 138 168C131 167 128 165 128 162z"/>
  <path class="arrow st-green" style="stroke-width:3" d="M156 144V115M149.5 122L156 114L162.500 122"/>
</g>

<!-- שלב 3: הלהב מסתובב סביב עצמו (pitch) -->
<g class="only-3">
  <rect class="fl-bg" x="99" y="106" width="112" height="92"/>
  <path class="wire st-cold dash" style="stroke-width:1.8" d="M104 134H206M104 148H206M104 174H206M104 188H206"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-4 158 160;26 158 160;-4 158 160" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/>
    <path class="body" d="M128 160C128 150 146 146 160 149C172 152 182 157 190 162C172 163 150 167 138 166C131 165 128 163 128 160z"/>
    <circle class="fl-ink" cx="158" cy="158" r="2"/>
  </g>
  <path class="arrow st-green" d="M193 132A40 40 0 0 1 199 172M187.500 133.500L193 131L196 136.500M202 166L199.500 173L193.500 169.500"/>
  <path class="arrow st-green" d="M112 25A10 3.6 0 0 0 132 25M128 30.500L133 24.500L135 31M112 80A10 3.6 0 0 0 132 80M128 85.500L133 79.500L135 86"/>
  <text x="155" y="209">הלהב משנה זווית</text>
</g>

<!-- שלב 3: מבט מלמעלה, הראש מסתובב אל הרוח -->
<g class="only-3">
  <path class="wire st-violet dash" style="stroke-width:1.6" d="M292 32V72H268V79"/>
  <circle class="ring st-cold" cx="292" cy="19" r="13"/>
  <path class="arrow st-green" d="M231 90A23 6.5 0 0 0 277 90M272 96L278 89.500L279.500 97.500M236 96L230 89.500L228.500 97.500"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 268 156;18 268 156;18 268 156;-16 268 156;-16 268 156;0 268 156;0 268 156" keyTimes="0;.08;.33;.41;.66;.74;1" dur="9s" repeatCount="indefinite"/>
    <path class="arrow st-cold dash" style="stroke-width:2.2" d="M221 142H236M221 156H236M221 170H236"/>
    <path class="fl-cold" d="M241 142l-6-3.500v7zM241 156l-6-3.500v7zM241 170l-6-3.500v7z"/>
  </g>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 268 156;0 268 156;18 268 156;18 268 156;-16 268 156;-16 268 156;0 268 156;0 268 156" keyTimes="0;.12;.28;.45;.61;.78;.94;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1" dur="9s" repeatCount="indefinite"/>
    <rect class="body" x="256" y="149" width="42" height="14" rx="4.500"/>
    <path class="body" d="M256 151L251 153V159L256 161z"/>
    <ellipse class="body" cx="249.500" cy="156" rx="2" ry="25"/>
    <circle class="thin st-ink" style="stroke-dasharray:2 2.500" cx="268" cy="156" r="5"/>
  </g>
  <text x="236" y="21">חיישן רוח</text>
  <text x="266" y="209">פונה אל הרוח</text>
</g>

<!-- שלב 4: ההספק עולה בחזקה שלישית של מהירות הרוח, ובסערה הטורבינה נעצרת -->
<g class="from-4">
  <path class="thin st-ink" d="M228 116V192H312M225 120.500L228 115L231 120.500M307.500 189L313 192L307.500 195"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M249 192V184.500M270 192V132H228M249 184.500H228"/>
  <path class="wire st-green" d="M228 192C242 192 256 192 270 132H298"/>
  <path class="wire st-hot" style="stroke-width:2;stroke-dasharray:3 4" d="M298 132V192"/>
  <circle class="fl-green" cx="249" cy="184.500" r="2.600"/><circle class="fl-green" cx="270" cy="132" r="2.600"/>
  <circle class="fl-elec st-ink" stroke-width="1.2" r="3.600"><animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;.62;.86;1;1" keyTimes="0;.5;.7;.8;1" calcMode="linear" path="M228 192C242 192 256 192 270 132H298V192"/></circle>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="181" y="123">עילוי</text>
  <text x="116" y="209">רוח</text>
</g>
<g class="only-2">
  <rect class="fl-elec fade" x="236" y="39" width="36" height="6" rx="2"/>
  <rect class="fl-elec fade d3" x="236" y="59" width="36" height="6" rx="2"/>
  <text x="160" y="21">סיבוב איטי</text>
  <text x="238" y="21">סיבוב מהיר</text>
  <text x="186" y="93">תיבת הילוכים</text>
</g>
<g class="only-4">
  <text x="182" y="97">למעלה הרוח חזקה</text>
  <text x="266" y="125">פי 8 חשמל</text>
  <text x="262" y="209">פי 2 רוח</text>
</g>
`;
