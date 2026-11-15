// תחנת החלל: 1 נופלת סביב כדור הארץ בגובה 400 ק״מ · 2 הכול נופל יחד ולכן מרחפים · 3 מים ממוחזרים וחמצן מאלקטרוליזה · 4 חשמל מהשמש וסוללות בצל
export default `
<defs>
  <marker id="iss-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="iss-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <clipPath id="iss-earth"><circle cx="160" cy="552" r="400"/></clipPath>
  <clipPath id="iss-in2"><circle cx="54" cy="58" r="40"/></clipPath>
</defs>


<!-- כדור הארץ -->
<circle class="fl-cold-soft" cx="160" cy="552" r="400"/>
<ellipse class="fl-green" opacity=".8" cx="90" cy="172.2" rx="34" ry="7"/>
<ellipse class="fl-green" opacity=".8" cx="230" cy="170.2" rx="40" ry="8"/>
<ellipse class="fl-green" opacity=".8" cx="160" cy="194" rx="22" ry="5"/>
<g class="from-4"><g class="hl-4"><rect fill="#000" opacity=".3" clip-path="url(#iss-earth)" x="0" y="140" width="96" height="80"/></g></g>

<circle class="fl-none st-ink" stroke-width="2" cx="160" cy="552" r="400"/>
<!-- המסלול -->
<g class="hl-1"><circle class="thin" style="stroke-dasharray:2 6" cx="160" cy="552" r="462"/></g>

<!-- התחנה -->
<g class="hl-4">
  <rect class="fl-warm st-ink" stroke-width="1" x="114" y="56" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M119 56v30M114 62h10M114 68h10M114 74h10M114 80h10M114 86h10"/><rect class="fl-warm st-ink" stroke-width="1" x="114" y="94" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M119 94v30M114 100h10M114 106h10M114 112h10M114 118h10M114 124h10"/>
  <rect class="fl-warm st-ink" stroke-width="1" x="128" y="56" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M133 56v30M128 62h10M128 68h10M128 74h10M128 80h10M128 86h10"/><rect class="fl-warm st-ink" stroke-width="1" x="128" y="94" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M133 94v30M128 100h10M128 106h10M128 112h10M128 118h10M128 124h10"/>
  <rect class="fl-warm st-ink" stroke-width="1" x="182" y="56" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M187 56v30M182 62h10M182 68h10M182 74h10M182 80h10M182 86h10"/><rect class="fl-warm st-ink" stroke-width="1" x="182" y="94" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M187 94v30M182 100h10M182 106h10M182 112h10M182 118h10M182 124h10"/>
  <rect class="fl-warm st-ink" stroke-width="1" x="196" y="56" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M201 56v30M196 62h10M196 68h10M196 74h10M196 80h10M196 86h10"/><rect class="fl-warm st-ink" stroke-width="1" x="196" y="94" width="10" height="30"/><path class="st-ink" stroke-width=".5" opacity=".6" d="M201 94v30M196 100h10M196 106h10M196 112h10M196 118h10M196 124h10"/>
</g>
<path class="wire st-ink" style="stroke-width:3" d="M108 90H212"/>
<g class="hl-4"><path class="flow" d="M110 90H150M210 90H170"/></g>
<g>
  <rect class="body" x="144" y="85" width="32" height="10" rx="3"/>
  <rect class="body" x="155" y="74" width="10" height="38" rx="3"/>
  <rect class="fl-panel st-line" stroke-width="1" x="168" y="100" width="8" height="16"/>
  <rect class="fl-panel st-line" stroke-width="1" x="144" y="100" width="8" height="16"/>
</g>

<!-- שלב 1: נופלת סביב כדור הארץ -->
<g class="only-1">
  <path class="arrow st-ink" style="stroke-width:2.2" marker-end="url(#iss-a)" d="M218 82H270"/>
  <path class="arrow st-hot" style="stroke-width:2.2" marker-end="url(#iss-h)" d="M160 114V146"/>
  <path class="wire st-cold dash" style="stroke-width:2" d="M218 93.7A462 462 0 0 1 300 111.7"/>
  <circle class="fl-cold" r="3"><animateMotion dur="2.4s" repeatCount="indefinite" path="M214 93.2A462 462 0 0 1 306 113.7"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <text x="270" y="68">28,000 קמ״ש</text>
  <text x="270" y="128">נופלת, ומחטיאה</text>
  <text x="270" y="142">את כדור הארץ</text>
  <text x="180" y="140">משיכה</text>
  <path class="arrow st-ink" style="stroke-width:1.4" marker-start="url(#iss-a)" marker-end="url(#iss-a)" d="M40 108.9V167.4"/>
  <text x="68" y="146">400 ק״מ</text>
  <text x="58" y="40">הקפה בשעה וחצי</text>
  <text x="58" y="54">16 זריחות ביום</text>
</g>

<!-- שלב 2: בתוך המודול -->
<g class="only-2">
  <path class="thin" style="stroke-width:1" d="M90 74L144 90"/>
  <circle class="fl-panel" cx="54" cy="58" r="40"/>
  <g clip-path="url(#iss-in2)">
    <path class="thin" style="stroke-width:1" d="M14 30H94M14 88H94"/>
    <g class="bob">
      <circle class="fl-panel st-ink" stroke-width="1.6" cx="44" cy="48" r="6"/>
      <path class="wire st-ink" style="stroke-width:3" d="M44 54L46 70M45 58L36 52M45 58L56 54M46 70L40 80M46 70L54 78"/>
    </g>
    <g class="bob d2"><rect class="fl-warm st-ink" stroke-width="1" x="66" y="46" width="10" height="6" rx="1" transform="rotate(20 71 49)"/></g>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="54" cy="58" r="40"/>
  <path class="arrow st-hot" style="stroke-width:1.8" marker-end="url(#iss-h)" d="M24 40V56"/>
  <path class="arrow st-hot" style="stroke-width:1.8" marker-end="url(#iss-h)" d="M71 58V74"/>
  <text x="60" y="114">אדם, חפצים ותחנה</text>
  <text x="60" y="128">נופלים יחד</text>
  <text x="250" y="60">המשיכה כאן:</text>
  <text x="250" y="74">כ־90% מעל הקרקע</text>
</g>

<!-- שלב 3: מים וחמצן -->
<g class="only-3">
  <path class="thin" style="stroke-width:1" d="M226 66L176 86"/>
  <rect class="fl-panel st-ink" stroke-width="1.6" x="228" y="18" width="84" height="92" rx="8"/>
  <!-- תא אלקטרוליזה -->
  <rect class="fl-cold-soft st-ink" stroke-width="1.2" x="242" y="54" width="56" height="34" rx="3"/>
  <rect class="fl-ink" x="254" y="44" width="4" height="40"/>
  <rect class="fl-ink" x="282" y="44" width="4" height="40"/>
  <path class="wire st-elec" style="stroke-width:2" d="M256 44V34H268M272 34H284V44"/>
  <path class="st-elec" stroke-width="2" d="M268 30v8M272 31v6"/>
  <circle class="fl-panel st-cold" stroke-width="1" cx="262" r="2.2"><animate attributeName="cy" values="84;56" dur="1.6s" begin="-0s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="1.6s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-panel st-cold" stroke-width="1" cx="262" r="2.2"><animate attributeName="cy" values="84;56" dur="1.6s" begin="-0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="1.6s" begin="-0.8s" repeatCount="indefinite"/></circle>
  <circle class="fl-panel st-line" stroke-width="1" cx="276" r="1.6"><animate attributeName="cy" values="84;56" dur="1.2s" begin="-0s" repeatCount="indefinite"/></circle><circle class="fl-panel st-line" stroke-width="1" cx="278" r="1.6"><animate attributeName="cy" values="84;56" dur="1.2s" begin="-0.3s" repeatCount="indefinite"/></circle><circle class="fl-panel st-line" stroke-width="1" cx="276" r="1.6"><animate attributeName="cy" values="84;56" dur="1.2s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-panel st-line" stroke-width="1" cx="278" r="1.6"><animate attributeName="cy" values="84;56" dur="1.2s" begin="-0.8999999999999999s" repeatCount="indefinite"/></circle>
  <text x="250" y="102" class="sm">חמצן</text>
  <text x="290" y="102" class="sm">מימן</text>
  <text x="254" y="126">זרם מפרק מים לגזים</text>
  <text x="254" y="140">98% מהמים ממוחזרים</text>
</g>

<!-- שלב 4: שמש וסוללות -->
<g class="only-4">
  <circle class="fl-elec" cx="300" cy="22" r="13"/>
  <path class="arrow st-elec" style="stroke-width:2" d="M282 30L232 52M286 42L226 76"/>
  <path class="arrow st-elec dash" style="stroke-width:2" d="M282 30L232 52M286 42L226 76"/>
  <text x="256" y="132">מוטה: 73 מטרים</text>
  <path class="wire st-dark" style="stroke-width:4" d="M8 115.7A462 462 0 0 1 92 95.0"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="38" y="80" width="26" height="14" rx="2"/>
  <rect class="fl-ink" x="64" y="84" width="3" height="6"/>
  <rect class="fl-green" x="41" y="83" width="14" height="8"><animate attributeName="width" values="20;4;20" dur="3s" repeatCount="indefinite"/></rect>
  <text x="52" y="60">בצד הלילה:</text>
  <text x="52" y="74">סוללות</text>
  <text x="66" y="140">כ־35 דקות בכל הקפה</text>
</g>
`;
