// מגדלור אלכסנדריה: 1 מגדל שמסמן את פתח הנמל · 2 שלוש קומות וכבש פנימי · 3 אש בלילה ומראה (לפי מקורות מאוחרים) · 4 רעידות אדמה ושרידים בקרקעית
export default `
<defs>
  <marker id="pharos-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- 3 לילה: כוכבים ואלומות אור -->
<rect class="only-3 fl-dark" fill-opacity=".14" x="0" y="0" width="320" height="160"/>
<g class="only-3">
  <g class="fl-ink"><circle cx="190" cy="22" r="1"/><circle cx="262" cy="16" r="1"/><circle cx="296" cy="40" r="1"/><circle cx="34" cy="66" r="1"/><circle cx="20" cy="100" r="1"/></g>
  <path class="fl-elec" fill-opacity=".28" d="M134 27L314 6V74Z"><animate attributeName="fill-opacity" values=".12;.34;.12" dur="1.4s" repeatCount="indefinite"/></path>
  <path class="st-elec fl-none" stroke-width="1.6" stroke-dasharray="3 5" d="M136 27L300 22"><animate attributeName="stroke-dashoffset" values="0;-16" dur=".8s" repeatCount="indefinite"/></path>
  <path class="st-elec fl-none" stroke-width="1.6" stroke-dasharray="3 5" d="M136 29L300 56"><animate attributeName="stroke-dashoffset" values="0;-16" dur=".8s" repeatCount="indefinite"/></path>
</g>

<!-- ים וקרקעית -->
<rect class="fl-cold-soft" x="0" y="160" width="320" height="60"/>
<path class="st-cold fl-none" stroke-width="1.5" d="M0 160q8-3 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0"><animateTransform attributeName="transform" type="translate" values="0 0;-16 0" dur="2s" repeatCount="indefinite"/></path>
<path class="fl-soft st-line" stroke-width="1" d="M150 220L190 196Q215 188 250 200T320 206V220Z"/>

<!-- האי -->
<path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M22 176Q30 160 52 160H168Q186 160 194 176Z"/>

<!-- המגדל: בסיס רבוע, קומה מתומנת, קומה עגולה -->
<g class="hl-2">
  <path class="body" d="M78 160L88 96H152L162 160Z"/>
  <path class="thin" style="stroke-width:1" d="M85 116H155M82 138H158"/>
  <rect class="fl-dark" x="117" y="146" width="6" height="14" rx="3"/>
  <g class="fl-dark"><rect x="98" y="103" width="4" height="7"/><rect x="138" y="103" width="4" height="7"/><rect x="98" y="124" width="4" height="7"/><rect x="138" y="124" width="4" height="7"/></g>
  <path class="body" d="M84 96H156V91H84Z"/>
  <path class="body" d="M100 91L103 58H137L140 91Z"/>
  <path class="thin" style="stroke-width:1" d="M111 91L112 58M129 91L128 58"/>
  <path class="body" d="M99 58H141V54H99Z"/>
  <path class="body" d="M111 54V36H129V54Z"/>
  <path class="thin" style="stroke-width:1" d="M116 54V36M124 54V36"/>
  <path class="body" d="M108 36H132V33H108Z"/>
</g>

<!-- 2 כבש מתפתל בתוך הבסיס, וחומרי בעירה שעולים -->
<g class="only-2">
  <path class="st-warm fl-none dash" stroke-width="1.4" d="M92 154L148 140L94 126L146 112L96 100"/>
  <g><animateMotion dur="4s" repeatCount="indefinite" path="M92 154L148 140L94 126L146 112L96 100"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.88;1" dur="4s" repeatCount="indefinite"/>
    <rect class="fl-warm st-ink" stroke-width="1" x="-3" y="-6" width="6" height="5" rx="1"/></g>
</g>

<!-- 3 אש ומראה בראש המגדל -->
<g class="hl-3">
  <path class="fl-hot" d="M120 33c-6-4-5-9-1-14 0 4 3 5 4 3 1-3 0-5 2-8 3 5 5 11-1 19z"><animate attributeName="opacity" values="1;.7;1" dur=".5s" repeatCount="indefinite"/></path>
  <path class="fl-elec" d="M121 33c-2-2-2-5 0-8 1 3 3 3 3 6z"><animate attributeName="opacity" values=".6;1;.6" dur=".4s" repeatCount="indefinite"/></path>
  <path class="st-line fl-none" stroke-width="2.4" stroke-linecap="round" d="M108 32Q105 24 109 16"/>
</g>

<!-- 1 ספינה מגיעה מהים הפתוח, עוקפת שרטון -->
<g class="hl-1">
  <path class="fl-dark" fill-opacity=".7" d="M244 168q4-7 9-5t6 5zM262 169q3-5 7-4t5 4zM278 168q3-4 6-3t4 3z"/>
  <path class="st-ink fl-none" stroke-width="1.2" stroke-dasharray="4 4" d="M312 140Q262 128 232 146T198 156" marker-end="url(#pharos-a)"/>
  <g><animateMotion dur="7s" repeatCount="indefinite" path="M60 0Q10 -12 -20 6"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="7s" repeatCount="indefinite"/>
    <g transform="translate(250 146)">
      <path class="body" style="stroke-width:1.6" d="M-16 6H16L11 13H-11Z"/>
      <path class="st-ink fl-none" stroke-width="1.6" d="M0 6V-16"/>
      <path class="fl-panel st-ink" stroke-width="1.2" d="M1 -15Q11 -6 1 3Z"/>
    </g>
  </g>
</g>

<!-- 4 רעידה: סדק, גושים שנופלים לים, שרידים וצוללן -->
<g class="only-4">
  <path class="st-hot fl-none" stroke-width="2" stroke-linejoin="round" d="M150 98L143 112L152 122L144 136L154 150"/>
  <g><animateMotion dur="2.4s" repeatCount="indefinite" path="M158 120Q178 130 190 196"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="2.4s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.2" x="-5" y="-4" width="10" height="7" transform="rotate(20)"/></g>
</g>
<g class="hl-4">
  <rect class="fl-panel st-ink" stroke-width="1.4" x="196" y="192" width="22" height="10" transform="rotate(-8 207 197)"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="222" y="196" width="16" height="9" transform="rotate(12 230 200)"/>
  <rect class="fl-panel st-ink" stroke-width="1.4" x="176" y="200" width="16" height="8"/>
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" d="M244 210V204H258L262 198H266V210Z"/>
</g>
<g class="only-4">
  <g transform="translate(286 186) rotate(-20)">
    <rect class="fl-line" x="-6" y="-7" width="10" height="4" rx="2"/><ellipse class="fl-dark" cx="0" cy="0" rx="11" ry="3.4"/>
    <circle class="fl-panel st-ink" stroke-width="1.4" cx="-12" cy="-1" r="3.4"/>
    <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M10 0L19 -3M10 1L19 4"/>
  </g>
  <g class="fl-panel st-cold" stroke-width="1">
    <circle cx="272" cy="178" r="1.6"><animate attributeName="cy" values="180;164" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.4s" repeatCount="indefinite"/></circle>
    <circle cx="275" cy="178" r="1.2"><animate attributeName="cy" values="180;164" dur="1.4s" begin="-.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.4s" begin="-.7s" repeatCount="indefinite"/></circle>
  </g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="250" y="88">פתח הנמל</text><text x="250" y="102">חוף נמוך ושרטונות</text></g>
<g class="only-2">
  <text x="44" y="48">קומה עגולה</text><path class="thin" d="M74 45H106"/>
  <text x="44" y="78">קומה מתומנת</text><path class="thin" d="M78 75H100"/>
  <text x="44" y="122">בסיס רבוע</text><path class="thin" d="M70 119H86"/>
  <text x="230" y="110">כבש פנימי</text><text x="230" y="124">להעלאת דלק</text>
</g>
<g class="only-3"><text x="232" y="98">אש בלילה</text><text x="52" y="22">מראה?</text><text x="52" y="36" class="sm">מקורות מאוחרים</text></g>
<g class="only-4"><text x="44" y="112">רעידות אדמה</text><text x="92" y="200">שרידים בקרקעית</text><text x="92" y="213">מאז 1994</text><path class="arrow st-ink" style="stroke-width:1.4" d="M136 203H168" marker-end="url(#pharos-a)"/></g>
`;
