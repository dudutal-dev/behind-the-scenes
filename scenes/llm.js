// מודל שפה: 1 טקסט מפורק לטוקנים ולמספרים · 2 שכבות עם קשרי קשב · 3 הסתברויות, בחירה והוספה לטקסט · 4 אימון: ניחוש מול הטקסט האמיתי מתקן משקלים
export default `
<defs>
  <marker id="llm-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-green"/>
  </marker>
  <marker id="llm-b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-elec"/>
  </marker>
</defs>

<!-- שורת הטקסט: טוקנים מימין לשמאל, ומקום פנוי לטוקן הבא -->
<g class="hl-1 hl-3">
  <rect class="body" x="266" y="12" width="44" height="18" rx="6"/><text x="288" y="25" style="stroke:none">החתול</text>
  <rect class="body" x="218" y="12" width="44" height="18" rx="6"/><text x="240" y="25" style="stroke:none">יושב</text>
  <rect class="body" x="170" y="12" width="44" height="18" rx="6"/><text x="192" y="25" style="stroke:none">על</text>
</g>
<rect class="thin" stroke-dasharray="3 3" x="122" y="12" width="44" height="18" rx="6"/>
<g class="from-4"><g class="hl-1 hl-3">
  <rect class="fl-green st-ink" stroke-width="2" x="122" y="12" width="44" height="18" rx="6"/><text x="144" y="25" style="stroke:none;fill:var(--s-panel)">הספה</text>
</g></g>

<!-- כל טוקן הופך לרשימת מספרים -->
<g class="hl-1 hl-2">
  <path class="thin" d="M288 46V62M240 46V62M192 46V62"/>
  <g class="fl-violet"><rect x="271" y="37" width="7" height="7" rx="1.5"/><rect x="232" y="37" width="7" height="7" rx="1.5"/><rect x="202" y="37" width="7" height="7" rx="1.5"/><rect x="175" y="37" width="7" height="7" rx="1.5"/></g>
  <g class="fl-cold"><rect x="280" y="37" width="7" height="7" rx="1.5"/><rect x="250" y="37" width="7" height="7" rx="1.5"/><rect x="223" y="37" width="7" height="7" rx="1.5"/><rect x="193" y="37" width="7" height="7" rx="1.5"/></g>
  <g class="fl-warm"><rect x="289" y="37" width="7" height="7" rx="1.5"/><rect x="241" y="37" width="7" height="7" rx="1.5"/><rect x="184" y="37" width="7" height="7" rx="1.5"/></g>
  <g class="fl-line"><rect x="298" y="37" width="7" height="7" rx="1.5"/></g>
</g>

<!-- הרשת: שלוש שכבות, כל טוקן מקבל קשרים מהטוקנים שלפניו -->
<g class="hl-2 hl-4 wire st-violet dash">
  <path style="stroke-width:2.6" d="M288 76V98"/><path style="stroke-width:1.2" d="M284 75L245 99"/><path style="stroke-width:2" d="M283 73L197 100"/>
  <path style="stroke-width:1.4" d="M240 76V98"/><path style="stroke-width:2.8" d="M236 75L197 99"/><path style="stroke-width:1.8" d="M192 76V98"/>
  <path style="stroke-width:1.4" d="M288 110V132"/><path style="stroke-width:2.4" d="M284 109L245 133"/><path style="stroke-width:1.2" d="M283 107L197 134"/>
  <path style="stroke-width:2.2" d="M240 110V132"/><path style="stroke-width:1.6" d="M236 109L197 133"/><path style="stroke-width:3" d="M192 110V132"/>
</g>
<g class="hl-2 hl-4">
  <g class="fl-panel st-ink" stroke-width="2">
    <circle cx="288" cy="70" r="6"/><circle cx="240" cy="70" r="6"/><circle cx="192" cy="70" r="6"/>
    <circle cx="288" cy="104" r="6"/><circle cx="240" cy="104" r="6"/><circle cx="192" cy="104" r="6"/>
    <circle cx="288" cy="138" r="6"/><circle cx="240" cy="138" r="6"/>
  </g>
</g>
<circle class="fl-elec st-ink hl-2 hl-3 hl-4" stroke-width="2" cx="192" cy="138" r="6"/>

<!-- מהטוקן האחרון יוצאת רשימת הסתברויות -->
<g class="hl-3">
  <path class="wire st-elec dash" d="M185 138H140Q128 138 128 126V105H118" marker-end="url(#llm-b)"/>
  <rect class="body" x="10" y="60" width="104" height="90" rx="8"/>
  <rect class="fl-soft" x="18" y="68" width="56" height="12" rx="3"/><rect class="fl-soft" x="18" y="88" width="56" height="12" rx="3"/>
  <rect class="fl-soft" x="18" y="108" width="56" height="12" rx="3"/><rect class="fl-soft" x="18" y="128" width="56" height="12" rx="3"/>
  <rect class="fl-green" x="24" y="68" width="50" height="12" rx="3"/>
  <rect class="fl-line" x="52" y="88" width="22" height="12" rx="3"/>
  <rect class="fl-line" x="62" y="108" width="12" height="12" rx="3"/>
  <rect class="fl-line" x="68" y="128" width="6" height="12" rx="3"/>
  <text x="93" y="78" style="stroke:none">הספה</text><text x="93" y="98" style="stroke:none">הגג</text>
  <text x="93" y="118" style="stroke:none">העץ</text><text x="93" y="138" style="stroke:none">הדשא</text>
  <!-- הטוקן שנבחר חוזר אל הטקסט -->
  <path class="wire st-green dash" d="M40 60V21H117" marker-end="url(#llm-a)"/>
</g>

<!-- שלב 1: חותכים לטוקנים, כל אחד נהיה מספרים -->
<g class="only-1">
  <path class="thin st-hot blink" stroke-dasharray="2 3" d="M264 7V35M216 7V35"/>
  <rect class="fl-violet" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.3s" repeatCount="indefinite" path="M288 30V60"/></rect>
  <rect class="fl-cold" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.3s" begin="-.45s" repeatCount="indefinite" path="M240 30V60"/></rect>
  <rect class="fl-warm" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.3s" begin="-.9s" repeatCount="indefinite" path="M192 30V60"/></rect>
  <text x="62" y="176">מפרקים לטוקנים</text>
  <text x="62" y="192">כל טוקן נהיה מספרים</text>
</g>
<!-- שלב 2: מידע עובר בין המילים דרך השכבות -->
<g class="only-2">
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M283 73L197 100"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" begin="-.5s" repeatCount="indefinite" path="M236 75L197 99"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" begin="-1s" repeatCount="indefinite" path="M284 75L245 99"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M284 109L245 133"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" begin="-.2s" repeatCount="indefinite" path="M236 109L197 133"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.2"><animateMotion dur="1.6s" begin="-1.3s" repeatCount="indefinite" path="M192 110V132"/></circle>
  <text x="62" y="176">כל מילה מביטה</text>
  <text x="62" y="192">בשאר המילים</text>
</g>
<!-- שלב 3: בוחרים טוקן, מוסיפים לטקסט, וחוזרים -->
<g class="only-3">
  <rect class="fl-none st-green pulse" stroke-width="2" x="15" y="65" width="96" height="18" rx="5"/>
  <g>
    <rect class="fl-green st-ink" stroke-width="2" x="-22" y="-9" width="44" height="18" rx="6"/>
    <text y="4" style="stroke:none;fill:var(--s-panel)">הספה</text>
    <animateMotion dur="3.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.15;.7;1" path="M49 74H40V21H144"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.92;1" dur="3.2s" repeatCount="indefinite"/>
  </g>
  <text x="62" y="176">בוחרים את הבא</text>
  <text x="62" y="192">ומוסיפים לטקסט</text>
</g>
<!-- שלב 4: אימון. ניחוש שגוי מול הטקסט האמיתי מזיז מעט את המשקלים -->
<g class="only-4">
  <g class="wire st-hot">
    <path d="M284 109L245 133"><animate attributeName="stroke-width" values="1;4.5;1" dur="1.6s" repeatCount="indefinite"/></path>
    <path d="M236 109L197 133"><animate attributeName="stroke-width" values="4;1;4" dur="1.6s" repeatCount="indefinite"/></path>
    <path d="M283 73L197 100"><animate attributeName="stroke-width" values="1;3.5;1" dur="1.6s" begin="-.5s" repeatCount="indefinite"/></path>
    <path d="M240 76V98"><animate attributeName="stroke-width" values="3.5;1;3.5" dur="1.6s" begin="-.5s" repeatCount="indefinite"/></path>
  </g>
  <rect class="fl-panel st-hot" stroke-width="2" x="176" y="164" width="44" height="18" rx="6"/><text x="198" y="177" style="stroke:none">הגג</text>
  <path class="arrow st-hot" d="M228 168l10 10M238 168l-10 10"/>
  <rect class="fl-panel st-green" stroke-width="2" x="246" y="164" width="44" height="18" rx="6"/><text x="268" y="177" style="stroke:none">הספה</text>
  <circle class="fl-hot" r="3"><animateMotion dur="1.4s" repeatCount="indefinite" path="M233 162L216 122"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.4s" begin="-.5s" repeatCount="indefinite" path="M233 162L264 122"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.4s" begin="-.9s" repeatCount="indefinite" path="M233 162Q224 130 216 88"/></circle>
  <circle class="fl-hot" r="3"><animateMotion dur="1.4s" begin="-.2s" repeatCount="indefinite" path="M233 162Q254 130 264 88"/></circle>
  <text class="sm" x="198" y="197">ניחוש</text>
  <text class="sm" x="268" y="197">הטקסט האמיתי</text>
  <text x="62" y="176">אימון: כל טעות</text>
  <text x="62" y="192">מתקנת משקלים</text>
</g>
`;
