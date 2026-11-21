// חמקנות: 1 שטח חתך מכ״ם: מטוס רגיל מחזיר הד חזק, חמקן חלש · 2 משטח נטוי מחזיר את הגל הצידה · 3 ציפוי בולע הופך גל לחום · 4 פליטה מוסתרת, וטווח הגילוי מתקצר
export default `
<defs>
  <marker id="stealth-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="stealth-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <clipPath id="stealth-in"><circle cx="262" cy="166" r="35"/></clipPath>
</defs>
<path class="thin" d="M6 204H120"/>

<!-- שלב 4: טווחי גילוי -->
<g class="only-4">
  <path class="wire st-green" style="stroke-width:1.6" stroke-dasharray="5 4" d="M156 204A120 120 0 0 0 73.1 89.9"/>
  <path class="wire st-hot" style="stroke-width:1.6" stroke-dasharray="5 4" d="M316 204A280 280 0 0 0 285.5 76.9"/>
</g>

<!-- המכ״ם -->
<path class="fl-soft st-ink" stroke-width="1.5" d="M14 204L22 186H48L56 204Z"/>
<path class="st-ink fl-none" stroke-width="2.5" d="M35 186V158"/>
<g transform="translate(36 150) rotate(-27)">
  <path class="body" d="M5 -18Q-15 0 5 18L8 15Q-7 0 8 -15Z"/>
  <path class="st-ink fl-none" stroke-width="1.5" d="M0 0H10M0 -5L10 0M0 5L10 0"/>
  <circle class="fl-ink" cx="10" cy="0" r="2"/>
</g>

<!-- שלב 1: מטוס רגיל מתחת, הד חזק -->
<g class="only-1">
  <path class="wire st-cold dash" style="stroke-width:1.6" d="M48 148L176 168"/>
  <path class="arrow st-hot" style="stroke-width:5" marker-end="url(#stealth-h)" d="M172 178L60 160"/>
  <g transform="translate(218 170)">
    <path class="body" d="M-35 2Q-35 -6 -22 -7L20 -7L27 -24L34 -24L33 -6Q38 -2 36 3L-28 6Q-35 6 -35 2Z"/>
    <path class="fl-line" d="M-6 0L10 0L2 13L-6 13Z"/>
    <path class="st-hot fl-none" stroke-width="2.4" d="M27 -7.500H33L33 -22"/>
  </g>
  <path class="wire st-cold dash" style="stroke-width:1.6" d="M48 144L176 76"/>
  <path class="arrow st-hot" style="stroke-width:1.4" marker-end="url(#stealth-h)" d="M150 96L118 113"/>
  <text x="246" y="210">מטוס רגיל: הד חזק</text>
  <text x="270" y="112">חמקן: הד חלש</text>
  <text x="84" y="24">כמה ״גדול״ המטוס</text><text x="84" y="38">בעיני המכ״ם</text>
  <text x="246" y="134" class="sm">פינה ישרה מחזירה</text>
</g>

<!-- שלב 2: גל פוגע במשטח נטוי ומוחזר הצידה -->
<g class="only-2">
  <path class="wire st-cold" style="stroke-width:2" d="M48 144L182 75"/>
  <path class="arrow st-hot" style="stroke-width:2.4" marker-end="url(#stealth-h)" d="M186 73L250 22"/>
  <circle class="fl-cold" r="3"><animateMotion dur="2s" repeatCount="indefinite" path="M48 144L184 74L250 22"/></circle>
  <circle class="fl-cold" r="3"><animateMotion dur="2s" begin="-1s" repeatCount="indefinite" path="M48 144L184 74L250 22"/></circle>
  <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M184 74L166 46"/>
  <text x="84" y="24">משטח נטוי מחזיר</text><text x="84" y="38">כמו מראה, הצידה</text>
  <text x="282" y="44">ההד הולך</text><text x="282" y="58">לכיוון אחר</text>
  <text x="110" y="128">אל המכ״ם כמעט כלום</text>
</g>

<!-- המטוס החמקן -->
<g class="hl-1 hl-2 hl-3 hl-4">
  <g transform="translate(220 70)">
    <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M-42 8L-14 -10L16 -11L25 -26L34 -26L32 -10L42 -2L36 6L-12 10Z"/>
    <path class="fl-none st-line" stroke-width="1" d="M-14 -10L-8 4L36 6M-8 4L-12 10M16 -11L12 2"/>
    
  </g>
</g>
<!-- שלב 2: הדגשת המשטח -->
<g class="only-2"><path class="st-elec fl-none" stroke-width="3" stroke-linecap="round" d="M178 78L206 60"/></g>

<!-- שלב 3: ציפוי בולע -->
<g class="only-3">
  <path class="thin" stroke-dasharray="2 3" d="M210 80L238 136"/>
  <circle class="fl-elec" cx="210" cy="79" r="3"/>
  <circle class="fl-panel st-ink" stroke-width="2" cx="262" cy="166" r="35"/>
  <g clip-path="url(#stealth-in)">
    <rect class="fl-dark" x="220" y="182" width="90" height="30"/>
    <rect class="fl-violet" opacity=".55" x="220" y="164" width="90" height="18"/>
    <path class="wire st-cold" style="stroke-width:1.8" d="M250 128q-6 3.500 0 7t0 7 0 7 0 7 0 7"/>
    <path class="wire st-cold" style="stroke-width:1.5" d="M250 163q-3 2.500 0 5t0 5"/>
    <path class="wire st-cold" style="stroke-width:1" d="M250 173q-1.200 2.500 0 5"/>
    <path class="arrow st-cold" style="stroke-width:1" marker-end="url(#stealth-a)" d="M276 160V146"/>
    <g class="fade"><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M260 178q2 -3 0 -6M270 178q2 -3 0 -6M280 178q2 -3 0 -6"/></g>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="262" cy="166" r="35"/>
  <text x="84" y="24">ציפוי שבולע</text><text x="84" y="38">את הגל והופך לחום</text>
  <text x="168" y="176">שכבה בולעת</text>
  <text x="178" y="198">גוף המטוס</text>
</g>

<!-- שלב 4: פליטה מוסתרת וטווח -->
<g class="only-4">
  <g class="fade"><path class="fl-warm" opacity=".7" d="M262 70q12 -4 22 1q-10 5 -22 1z"/></g>
  <text x="84" y="24">הד חלש פי 10,000:</text><text x="84" y="38">טווח קצר פי 10 בלבד</text>
  <text x="110" y="192">גילוי חמקן</text>
  <text x="270" y="188">גילוי מטוס רגיל</text>
  <text x="240" y="102">פליטה מצוננת</text>
</g>
`;
