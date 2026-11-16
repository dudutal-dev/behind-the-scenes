// מגדל פיזה: 1 חרסית רכה נדחסת יותר בצד אחד · 2 הפסקה ארוכה: מים נסחטים והחרסית מתחזקת · 3 קומות עליונות מתעקמות חזרה · 4 שליפת אדמה מתחת לצד הצפוני
export default `
<defs>
  <marker id="pisa-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="pisa-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
</defs>

<!-- קרקע: סחף וחול, מתחתם חרסית ימית רכה -->
<rect class="fl-soft" x="0" y="130" width="320" height="90"/>
<g class="hl-1 hl-2">
  <path class="fl-cold-soft st-line" stroke-width="1.5" d="M0 160H112Q160 172 210 162H320V200H0z"/>
  <path class="thin" style="stroke-width:1" stroke-dasharray="6 5" d="M10 180H110M128 186H200M220 180H310"/>
</g>
<path class="wire st-ink" style="stroke-width:2" d="M0 130H320"/>

<!-- שלב 1: לחץ גדול יותר בצד הדרומי -->
<g class="only-1">
  <path class="wire st-hot dash" style="stroke-width:2" d="M164 142V164M178 142V160" marker-end="url(#pisa-h)"/>
  <path class="wire st-line dash" style="stroke-width:1.6" d="M136 142V156" marker-end="url(#pisa-a)"/>
</g>

<!-- שלב 2: מים נסחטים מהחרסית אל פני השטח -->
<g class="only-2">
  <g class="fl-cold">
    <circle r="2.2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M100 176V136"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M200 176L204 136"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M60 174V136"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M240 174V136"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.4s" repeatCount="indefinite" path="M150 184L112 140"/></circle>
  </g>
  <!-- שעון חול -->
  <path class="body" style="stroke-width:1.6" d="M252 48H276L264 64L276 80H252L264 64z"/>
  <path class="fl-warm"><animate attributeName="d" values="M255 50H273L264 61z;M261 57H267L264 61z;M261 57H267L264 61z" keyTimes="0;.9;1" dur="3s" repeatCount="indefinite"/></path>
  <path class="fl-warm"><animate attributeName="d" values="M264 78L264 78L264 78z;M255 78H273L264 70z;M255 78H273L264 70z" keyTimes="0;.9;1" dur="3s" repeatCount="indefinite"/></path>
  <path class="wire st-warm" style="stroke-width:1" d="M264 62V77"><animate attributeName="opacity" values="1;1;0" keyTimes="0;.9;1" dur="3s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 4: משקולות עופרת וקידוח אלכסוני מתחת לצד הצפוני -->
<g class="hl-4">
  <rect class="fl-dark st-ink" stroke-width="1.5" x="96" y="118" width="12" height="12" rx="1"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="110" y="118" width="12" height="12" rx="1"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="103" y="106" width="12" height="12" rx="1"/>
  <path class="pipe st-dark" d="M54 130L130 150"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M48 118L60 122L56 132L44 128z"/>
</g>
<g class="only-4">
  <g class="fl-warm st-ink" stroke-width=".8">
    <circle r="2.4"><animateMotion dur="2s" repeatCount="indefinite" path="M130 150L56 130"/></circle>
    <circle r="2.4"><animateMotion dur="2s" begin="-.7s" repeatCount="indefinite" path="M130 150L56 130"/></circle>
    <circle r="2.4"><animateMotion dur="2s" begin="-1.4s" repeatCount="indefinite" path="M130 150L56 130"/></circle>
  </g>
  <path class="arrow st-hot" style="stroke-width:2" d="M196 30Q186 20 172 22" marker-end="url(#pisa-h)"><animate attributeName="opacity" values=".3;1;.3" dur="1.6s" repeatCount="indefinite"/></path>
</g>

<!-- המגדל: נוטה דרומה, והקומות העליונות מתעקמות מעט חזרה -->
<g transform="rotate(10 150 130)">
  <g class="hl-1 hl-2 hl-4">
    <rect class="fl-line st-ink" stroke-width="1.5" x="124" y="130" width="52" height="8"/>
    <rect class="body" x="130" y="106" width="40" height="24"/>
    <path class="thin st-ink" style="stroke-width:1" d="M138 130V112M146 130V112M154 130V112M162 130V112"/>
    <rect class="body" x="130" y="94" width="40" height="12"/><rect class="body" x="130" y="82" width="40" height="12"/><rect class="body" x="130" y="70" width="40" height="12"/>
    <path class="thin st-ink" style="stroke-width:1" d="M136 82V94M143 82V94M150 82V94M157 82V94M164 82V94M136 94V106M143 94V106M150 94V106M157 94V106M164 94V106M136 70V82M143 70V82M150 70V82M157 70V82M164 70V82"/>
  </g>
  <g transform="rotate(-6 150 70)">
    <g class="hl-3">
      <rect class="body" x="130" y="58" width="40" height="12"/><rect class="body" x="130" y="46" width="40" height="12"/>
      <path class="thin st-ink" style="stroke-width:1" d="M136 46V70M143 46V70M150 46V70M157 46V70M164 46V70"/>
      <g transform="rotate(-4 150 46)">
        <rect class="body" x="136" y="32" width="28" height="14"/>
        <path class="thin st-ink" style="stroke-width:1" d="M143 32V46M150 32V46M157 32V46"/>
      </g>
    </g>
  </g>
  <!-- שלב 3: הציר הישר לעומת הציר המתעקם -->
  <g class="only-3">
    <path class="wire st-line" style="stroke-width:1.6" stroke-dasharray="4 4" d="M150 70V24"/>
    <path class="wire st-hot" style="stroke-width:2.2" d="M150 130V70Q149 52 145 30"><animate attributeName="opacity" values=".5;1;.5" dur="1.8s" repeatCount="indefinite"/></path>
  </g>
</g>

<text class="sm" x="20" y="122">צפון</text>
<text class="sm" x="298" y="122">דרום</text>
<text class="sm" x="264" y="212">ההטיה מוגדלת באיור</text>

<!-- תוויות -->
<g class="only-1">
  <text x="62" y="30">יסוד רדוד</text>
  <text x="62" y="46">על חרסית רכה</text>
  <text x="252" y="84">נדחסת יותר</text>
  <text x="252" y="98">בצד אחד</text>
</g>
<g class="only-2">
  <text x="62" y="30">כמאה שנות הפסקה</text>
  <text x="62" y="46">מים נסחטים</text>
  <text x="62" y="62">והחרסית מתחזקת</text>
</g>
<g class="only-3">
  <text x="62" y="30">קומות עליונות</text>
  <text x="62" y="46">גבוהות יותר</text>
  <text x="62" y="62">בצד הנמוך</text>
  <text x="252" y="84">הציר מתעקם</text>
</g>
<g class="only-4">
  <text x="252" y="30">מזדקף</text>
  <text x="252" y="46">כ־40 ס״מ בראשו</text>
  <text x="62" y="62">שולפים אדמה</text>
  <text x="62" y="78">מתחת לצפון</text>
  <text x="62" y="100">עופרת</text>
</g>
`;
