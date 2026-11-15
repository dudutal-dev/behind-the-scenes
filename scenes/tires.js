// צמיגים ואחיזה: 1 משקל ולחץ יוצרים כתם מגע בגודל כף יד · 2 הגומי נכנס לבליטות האספלט · 3 חריצים מפנים מים מהכתם · 4 חתך צמיג רדיאלי: שלד מצד לצד וחגורות פלדה
export default `
<defs>
  <clipPath id="tires-lensA"><circle cx="176" cy="58" r="39"/></clipPath>
  <clipPath id="tires-lensB"><circle cx="270" cy="58" r="39"/></clipPath>
  <clipPath id="tires-print"><rect x="182" y="132" width="88" height="58" rx="16"/></clipPath>
  <marker id="tires-ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="tires-ac" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
</defs>

<!-- כביש מתחת לגלגל (מבט מהצד) -->
<path class="thin st-ink" style="stroke-width:2" d="M8 164H146"/>
<path class="st-line fl-none" stroke-width="1.5" stroke-dasharray="10 14" d="M146 172H8"><animate attributeName="stroke-dashoffset" from="0" to="24" dur=".9s" repeatCount="indefinite"/></path>
<g class="only-3"><rect class="fl-cold" opacity=".55" x="8" y="160" width="52" height="4" rx="2"/><rect class="fl-cold" opacity=".55" x="100" y="160" width="46" height="3" rx="1.5"/></g>

<!-- הגלגל: צמיג משוטח בתחתית, חישוק ותוף -->
<path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M58.800 164A58 58 0 1 1 101.200 164Z"/>
<circle class="fl-none st-ink" stroke-width="5" stroke-dasharray="3 6" cx="80" cy="106" r="54" opacity=".55"><animate attributeName="stroke-dashoffset" from="0" to="-9" dur=".45s" repeatCount="indefinite"/></circle>
<circle class="fl-soft st-ink" stroke-width="2" cx="80" cy="106" r="32"/>
<g class="spin-rev" style="animation-duration:1.2s"><path class="thin st-ink" style="stroke-width:3" d="M80 80V132M54 106H106M62 88L98 124M98 88L62 124"/></g>
<circle class="fl-panel st-ink" stroke-width="2" cx="80" cy="106" r="9"/>

<!-- שלב 4: חוטי שלד רדיאליים בדופן -->
<g class="hl-4"><path class="thin st-violet" style="stroke-width:1.2" d="M80 74V50M80 138V160M48 106H24M112 106H136M57 83L40 66M103 83L120 66M57 129L41 145M103 129L119 145"/></g>

<!-- כתם המגע בצד -->
<g class="hl-1"><path class="wire st-hot" style="stroke-width:4" d="M60 164H100"/></g>

<!-- שלב 1: משקל ולחץ -->
<g class="only-1">
  <path class="arrow st-hot" style="stroke-width:3" d="M80 20V38" marker-end="url(#tires-ah)"/>
  <text x="80" y="14">משקל</text>
  <g class="pulse"><path class="arrow st-cold" style="stroke-width:2" d="M80 64V56M80 148V156M38 106H30M122 106H130" marker-end="url(#tires-ac)"/></g>
  <text x="80" y="200">משקל חלקי לחץ האוויר</text>
  <text x="80" y="214">קובע את שטח הכתם</text>
</g>

<!-- זכוכית מגדלת א: גומי מול אספלט -->
<path class="thin" style="stroke-dasharray:3 3" d="M103 160L147 87"/>
<g class="hl-2">
  <circle class="fl-panel" cx="176" cy="58" r="39"/>
  <g clip-path="url(#tires-lensA)">
    <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M134 100V70L142 62L148 70L154 58L162 68L168 60L176 72L184 57L192 67L200 61L206 70L212 59L220 70V100Z"/>
    <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M134 16V60L142 54L148 60L154 50L162 58L168 52L176 62L184 48L192 58L200 52L206 60L212 50L220 60V16Z">
      <animate attributeName="d" dur="2.6s" repeatCount="indefinite" values="M134 16V60L142 54L148 60L154 50L162 58L168 52L176 62L184 48L192 58L200 52L206 60L212 50L220 60V16Z;M134 16V70L142 62L148 70L154 58L162 68L168 60L176 72L184 57L192 67L200 61L206 70L212 59L220 70V16Z;M134 16V70L142 62L148 70L154 58L162 68L168 60L176 72L184 57L192 67L200 61L206 70L212 59L220 70V16Z;M134 16V60L142 54L148 60L154 50L162 58L168 52L176 62L184 48L192 58L200 52L206 60L212 50L220 60V16Z" keyTimes="0;.35;.75;1"/>
    </path>
    <text x="176" y="38" style="fill:#fff;stroke:none">גומי</text>
    <text x="176" y="93" class="sm">אספלט</text>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="176" cy="58" r="39"/>
</g>
<g class="only-2">
  <path class="arrow st-hot" d="M150 44H128" marker-end="url(#tires-ah)"/>
  <text x="200" y="114">הגומי נכנס לבליטות</text>
  <text x="200" y="128">ונתפס בהן</text>
</g>

<!-- זכוכית מגדלת ב: חתך של צמיג רדיאלי -->
<g class="hl-4">
  <circle class="fl-panel" cx="270" cy="58" r="39"/>
  <g clip-path="url(#tires-lensB)">
    <path class="fl-soft st-ink" stroke-width="1.5" d="M226 90H314V100H226Z"/>
    <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M246 30Q238 34 238 50Q238 74 244 84Q248 89 256 89H284Q292 89 296 84Q302 74 302 50Q302 34 294 30L288 32Q294 38 294 52Q294 72 290 78Q287 81 282 81H258Q253 81 250 78Q246 72 246 52Q246 38 252 32Z"/>
    <path class="fl-dark" d="M252 82H288V89H252Z"/>
    <path class="fl-bg" d="M258 86h4v3h-4zM268 86h4v3h-4zM278 86h4v3h-4z"/>
    <g class="fade"><path class="wire st-violet" style="stroke-width:1.6" d="M251 31Q242 36 242 52Q242 74 247 80Q250 84 256 84H284Q290 84 293 80Q298 74 298 52Q298 36 289 31"/></g>
    <path class="wire st-line" style="stroke-width:2.2" d="M255 77H285M255 74H285"/>
    <path class="fl-line st-ink" stroke-width="1.5" d="M226 18H314V27H300V31H240V27H226Z"/>
    <text x="270" y="47" class="sm">אוויר</text>
    <g class="pulse"><path class="arrow st-cold" style="stroke-width:1.6" d="M270 54V64M260 58H250M280 58H290" marker-end="url(#tires-ac)"/></g>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="270" cy="58" r="39"/>
</g>
<g class="only-4">
  <text x="270" y="114">שלד מצד לצד</text>
  <text x="270" y="128">וחגורות פלדה</text>
  <text x="80" y="200">לחץ נכון שומר</text>
  <text x="80" y="214">על כתם שטוח וקריר</text>
</g>

<!-- כתם המגע במבט מלמעלה: חריצים ומים -->
<g class="hl-1 hl-3">
  <g class="only-3"><rect class="fl-cold-soft" x="150" y="138" width="34" height="46" rx="6"/></g>
  <rect class="fl-dark st-ink" stroke-width="2" x="182" y="132" width="88" height="58" rx="16"/>
  <g clip-path="url(#tires-print)">
    <path class="fl-none st-bg" style="stroke:var(--s-bg)" stroke-width="4" d="M176 147H276M176 161H276M176 175H276"/>
    <path class="fl-none" style="stroke:var(--s-bg)" stroke-width="2.5" d="M196 128L206 147M222 128L232 147M248 128L258 147M196 175L206 194M222 175L232 194M248 175L258 194"/>
  </g>
</g>
<g class="only-1">
  <text x="226" y="122">כתם בגודל כף יד</text>
  <text x="226" y="206">מבט מלמעלה</text>
</g>
<g class="only-3">
  <g class="fl-cold">
    <circle r="2"><animateMotion dur="1s" repeatCount="indefinite" path="M164 147H286"/></circle>
    <circle r="2"><animateMotion dur="1s" begin="-.5s" repeatCount="indefinite" path="M164 147H286"/></circle>
    <circle r="2"><animateMotion dur="1s" begin="-.2s" repeatCount="indefinite" path="M164 161H286"/></circle>
    <circle r="2"><animateMotion dur="1s" begin="-.7s" repeatCount="indefinite" path="M164 161H286"/></circle>
    <circle r="2"><animateMotion dur="1s" begin="-.35s" repeatCount="indefinite" path="M164 175H286"/></circle>
    <circle r="2"><animateMotion dur="1s" begin="-.85s" repeatCount="indefinite" path="M164 175H286"/></circle>
    <circle r="2"><animateMotion dur=".8s" begin="-.3s" repeatCount="indefinite" path="M226 147L216 124"/></circle>
    <circle r="2"><animateMotion dur=".8s" begin="-.6s" repeatCount="indefinite" path="M252 175L262 198"/></circle>
  </g>
  <path class="arrow st-cold" d="M282 161H300" marker-end="url(#tires-ac)"/>
  <text x="226" y="122">החריצים מפנים מים</text>
  <text x="226" y="210">כיוון הנסיעה ←</text>
</g>
`;
