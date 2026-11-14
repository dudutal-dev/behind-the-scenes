// GPS: 1 לוויינים משדרים מיקום ושעה · 2 מדידת עיכוב האות · 3 שלושה מרחקים מצטלבים ורביעי מתקן שעון · 4 שעון הלוויין ממהר
export default `
<defs>
  <g id="gps-sat">
    <rect class="fl-cold st-ink" stroke-width="1.5" x="-23" y="-5" width="14" height="10" rx="1"/>
    <rect class="fl-cold st-ink" stroke-width="1.5" x="9" y="-5" width="14" height="10" rx="1"/>
    <path fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1" d="M-18.3 -5v10M-13.7 -5v10M13.7 -5v10M18.3 -5v10"/>
    <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-5 8q5 8 10 0z"/>
    <rect class="body" x="-7" y="-8" width="14" height="16" rx="3"/>
    <circle class="fl-elec" cx="0" cy="-1" r="4"/>
    <path class="st-ink fl-none" stroke-width="1.1" stroke-linecap="round" d="M0 -1V-3.800M0 -1h2.2"/>
  </g>
  <marker id="gps-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- מסלול וכדור הארץ -->
<path class="thin" stroke-dasharray="1 6" d="M-10 62Q160 -24 330 86"/>
<circle class="fl-cold-soft st-ink" stroke-width="2" cx="160" cy="560" r="370"/>
<ellipse class="fl-green" cx="84" cy="215" rx="34" ry="9"/>
<ellipse class="fl-green" cx="238" cy="217" rx="40" ry="9"/>
<ellipse class="fl-green" cx="160" cy="204" rx="26" ry="6"/>

<!-- האותות: מהלוויינים אל הטלפון בלבד -->
<g class="hl-1 hl-2 hl-3"><path class="wire st-hot dash" d="M36 36L160 154"/></g>
<g class="hl-1 hl-3"><path class="wire st-warm dash" d="M112 22L160 154"/></g>
<g class="hl-1 hl-3"><path class="wire st-violet dash" d="M208 24L160 154"/></g>
<g class="hl-1 hl-3"><path class="wire st-green dash" d="M284 52L160 154"/></g>

<!-- קשתות המרחק (משלב 3) -->
<g class="from-3"><g class="hl-3">
  <path class="fl-none st-hot" stroke-width="2.2" stroke-linecap="round" d="M215.3 61.2A181.1 181.1 0 0 1 126.6 192.8"/>
  <path class="fl-none st-warm" stroke-width="2.2" stroke-linecap="round" d="M214.8 136.2A153.7 153.7 0 0 1 101.3 175.3"/>
  <path class="fl-none st-violet" stroke-width="2.2" stroke-linecap="round" d="M223.9 175A151.8 151.8 0 0 1 65.4 75.9"/>
</g></g>

<!-- הלוויינים -->
<g class="hl-1 hl-2 hl-3"><use href="#gps-sat" transform="translate(36 36) rotate(-43.2)"/></g>
<g class="hl-1 hl-3"><use href="#gps-sat" transform="translate(112 22) rotate(-18.2)"/></g>
<g class="hl-1 hl-3"><use href="#gps-sat" transform="translate(208 24) rotate(18.4)"/></g>
<g class="hl-1 hl-3 hl-4"><use href="#gps-sat" transform="translate(284 52) rotate(46.9)"/></g>

<!-- הטלפון -->
<ellipse class="fl-ink" opacity=".18" cx="160" cy="190" rx="13" ry="2.5"/>
<rect class="body" x="151" y="153" width="18" height="35" rx="3.5"/>
<rect class="fl-cold-soft" x="153.5" y="157" width="13" height="25" rx="1.5"/>
<circle class="fl-line" cx="160" cy="185" r="1.2"/>
<g class="from-3">
  <path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M160 168c-6-8-9.5-11.5-9.5-16.500a9.5 9.5 0 0 1 19 0c0 5-3.5 8.5-9.5 16.500z"/>
  <circle fill="#fff" cx="160" cy="151.5" r="3.2"/>
</g>

<!-- שלב 1: שידור רציף -->
<g class="only-1">
  <circle class="ring st-hot" cx="36" cy="36" r="22"/><circle class="ring st-hot d3" cx="36" cy="36" r="22"/>
  <circle class="ring st-warm d2" cx="112" cy="22" r="22"/><circle class="ring st-warm d4" cx="112" cy="22" r="22"/>
  <circle class="ring st-violet" cx="208" cy="24" r="22"/><circle class="ring st-violet d3" cx="208" cy="24" r="22"/>
  <circle class="ring st-green d2" cx="284" cy="52" r="22"/><circle class="ring st-green d4" cx="284" cy="52" r="22"/>
  <circle class="fl-hot" r="2.8"><animateMotion dur="1.800s" begin="-0s" repeatCount="indefinite" path="M36 36L160 152"/></circle>
  <circle class="fl-warm" r="2.8"><animateMotion dur="1.800s" begin="-0.5s" repeatCount="indefinite" path="M112 22L160 152"/></circle>
  <circle class="fl-violet" r="2.8"><animateMotion dur="1.800s" begin="-0.9s" repeatCount="indefinite" path="M208 24L160 152"/></circle>
  <circle class="fl-green" r="2.8"><animateMotion dur="1.800s" begin="-1.4s" repeatCount="indefinite" path="M284 52L160 152"/></circle>
  <text x="52" y="151">משדרים כל הזמן</text>
  <text x="52" y="165">מיקום ושעה</text>
  <text x="270" y="150">הטלפון רק מקשיב</text>
</g>

<!-- שלב 2: מדידת העיכוב -->
<g class="only-2">
  <circle class="fl-hot st-ink" stroke-width="1.2" r="4.5"><animateMotion dur="2s" repeatCount="indefinite" path="M36 36L160 152"/></circle>
  <path class="arrow st-ink" stroke-width="1.5" d="M59 47.300L137 130.4" marker-start="url(#gps-a)" marker-end="url(#gps-a)"/>
  <rect class="fl-ink" x="57.5" y="84" width="5" height="5" rx="1"/>
  <circle class="fl-panel st-ink" stroke-width="2" cx="60" cy="100" r="11"/>
  <path class="thin st-ink" stroke-width="1" d="M60 91v2.500M60 109v-2.500M51 100h2.500M69 100h-2.5"/>
  <path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M60 100V92"><animateTransform attributeName="transform" type="rotate" from="0 60 100" to="330 60 100" dur="2s" repeatCount="indefinite"/></path>
  <circle class="fl-ink" cx="60" cy="100" r="1.6"/>
  <text x="270" y="138">כמה זמן האות</text>
  <text x="270" y="152">היה בדרך</text>
  <text x="52" y="151">זמן כפול מהירות</text>
  <text x="52" y="165">האור הוא המרחק</text>
</g>

<!-- שלב 3: הצטלבות ותיקון שעון -->
<g class="only-3">
  <circle class="ring st-hot" cx="160" cy="168" r="18"/>
  <circle class="ring st-hot d3" cx="160" cy="168" r="18"/>
  <circle class="fl-green" r="3"><animateMotion dur="1.600s" repeatCount="indefinite" path="M284 52L171 158"/></circle>
  <circle class="fl-panel st-green" stroke-width="2" cx="190" cy="176" r="8"/>
  <g class="sway"><path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M190 176V170.500M190 176v5.5" stroke-opacity="1"/></g>
  <circle class="fl-ink" cx="190" cy="176" r="1.3"/>
  <text x="52" y="151">שלושה מרחקים</text>
  <text x="52" y="165">נפגשים בנקודה</text>
  <text x="270" y="138">לוויין רביעי</text>
  <text x="270" y="152">מתקן את השעון</text>
</g>

<!-- שלב 4: שעון הלוויין ממהר -->
<g class="only-4">
  
  <circle class="fl-panel st-ink" stroke-width="2" cx="52" cy="100" r="12"/>
  <path class="thin st-ink" stroke-width="1" d="M52 90v2M52 110v-2M42 100h2M62 100h-2"/>
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M52 100V92"><animateTransform attributeName="transform" type="rotate" from="0 52 100" to="360 52 100" dur="5s" repeatCount="indefinite"/></path>
  <circle class="fl-ink" cx="52" cy="100" r="1.6"/>
  
  <circle class="fl-panel st-hot" stroke-width="2" cx="266" cy="102" r="12"/>
  <path class="thin st-ink" stroke-width="1" d="M266 92v2M266 112v-2M256 102h2M276 102h-2"/>
  <path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M266 102V94"><animateTransform attributeName="transform" type="rotate" from="0 266 102" to="360 266 102" dur="2.600s" repeatCount="indefinite"/></path>
  <circle class="fl-ink" cx="266" cy="102" r="1.6"/>
  <path class="thin st-ink" stroke-width="1.2" d="M270 89L277 73"/>
  <path class="thin st-hot dash" d="M163 168L206 174"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;46 6" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="3s" repeatCount="indefinite"/>
    <path class="fl-bg st-hot" stroke-width="1.6" stroke-dasharray="2.5 2" stroke-linejoin="round" d="M160 168c-6-8-9.5-11.5-9.5-16.500a9.5 9.5 0 0 1 19 0c0 5-3.5 8.5-9.5 16.500z"/>
  </g>
  <text x="52" y="151">בלי תיקון הטעות</text>
  <text x="52" y="165">גדלה 10 ק״מ ביום</text>
  <text x="267" y="134">שעון הלוויין ממהר</text>
  <text x="264" y="148">ב־38 מיליוניות</text>
  <text x="264" y="162">שנייה ביום</text>
</g>
`;
