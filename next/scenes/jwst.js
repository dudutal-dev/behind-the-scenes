// טלסקופ ג׳יימס ווב: 1 אור מתוח לתת־אדום נכנס · 2 מראה של 18 משושים מצופי זהב · 3 מגן שמש בחמש שכבות שומר על קור · 4 הטלסקופ בנקודת L2 מאחורי כדור הארץ
export default `
<defs>
  <marker id="jwst-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="jwst-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- השמש, מתחת למגן -->
<g class="hl-3"><circle class="fl-elec" cx="18" cy="222" r="30"/></g>

<!-- מגן השמש: חמש שכבות -->
<g class="hl-3">
  <path class="wire st-cold" style="stroke-width:2" d="M40 168L290 150"/>
  <path class="wire st-line" style="stroke-width:2" d="M40 171.4L290 157"/>
  <path class="wire st-line" style="stroke-width:2" d="M40 174.8L290 164"/>
  <path class="wire st-warm" style="stroke-width:2" d="M40 178.2L290 171"/>
  <path class="wire st-hot" style="stroke-width:2" d="M40 181.6L290 178"/>
</g>
<!-- עמוד שמחבר את הטלסקופ למגן -->
<path class="wire st-ink" style="stroke-width:3" d="M112 140L116 160"/>

<!-- מסלול האור: מהגלקסיה אל המראה הראשית, המשנית ואל המכשירים -->
<g class="hl-1 hl-2">
  <path class="wire st-hot" style="stroke-width:1.6" d="M300 72H126L212 96L118 100"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M300 128H126L212 104L118 100"/>
  <path class="flow" d="M300 72H126L212 96L118 100"/>
  <path class="flow" d="M300 128H126L212 104L118 100"/>
</g>

<!-- תמוכות ומראה משנית -->
<path class="thin st-ink" style="stroke-width:1.4" d="M128 60L212 92M128 140L212 108"/>
<g class="hl-2"><path fill="none" stroke="#d9a520" stroke-width="4" stroke-linecap="round" d="M214 90Q209 100 214 110"/></g>

<!-- המכשירים מאחורי המראה -->
<rect class="body" x="86" y="88" width="24" height="24" rx="3"/>
<path class="thin" style="stroke-width:1" d="M92 96h12M92 100h12M92 104h12"/>

<!-- המראה הראשית: שלושה מקטעים נראים מהצד -->
<g class="hl-2">
  <path fill="none" stroke="#d9a520" stroke-width="6" stroke-linecap="butt" d="M130 58Q123 72 120 84"/>
  <path fill="none" stroke="#d9a520" stroke-width="6" stroke-linecap="butt" d="M119 88Q117 94 117 97M117 103Q117 106 119 112"/>
  <path fill="none" stroke="#d9a520" stroke-width="6" stroke-linecap="butt" d="M120 116Q123 128 130 142"/>
</g>

<!-- שלב 1: אור תת־אדום מגלקסיה רחוקה -->
<g class="only-1">
  <g transform="translate(292 30) rotate(-20)"><ellipse class="fl-violet" opacity=".6" rx="13" ry="5"/><ellipse fill="#fff" rx="3.5" ry="2"/></g>
  <path class="wire st-hot" style="stroke-width:1.8" d="M300 72L300 72.0L298 73.2L296 74.2L294 74.6L292 74.4L290 73.6L288 72.4L286 71.1L284 70.0L282 69.5L280 69.5L278 70.2L276 71.3L274 72.6L272 73.7L270 74.4L268 74.6L266 74.1L264 73.1L262 71.8L260 70.6L258 69.7L256 69.4L254 69.7L252 70.6L250 71.8L248 73.1L246 74.1L244 74.6L242 74.4L240 73.7"/>
  <path class="wire st-hot" style="stroke-width:1.8" d="M300 128L300 128.0L298 129.2L296 130.2L294 130.6L292 130.4L290 129.6L288 128.4L286 127.1L284 126.0L282 125.5L280 125.5L278 126.2L276 127.3L274 128.6L272 129.7L270 130.4L268 130.6L266 130.1L264 129.1L262 127.8L260 126.6L258 125.7L256 125.4L254 125.7L252 126.6L250 127.8L248 129.1L246 130.1L244 130.6L242 130.4L240 129.7"/>
  <circle class="fl-hot" r="3"><animateMotion dur="2.4s" repeatCount="indefinite" path="M300 72H126L212 96L118 100"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <text x="206" y="26">האור הגיע מתוח</text>
  <text x="206" y="40">לתת־אדום</text>
  <text x="62" y="76">המכשירים</text>
</g>

<!-- שלב 2: המראה מלפנים -->
<g class="only-2">
  <circle class="fl-panel st-line" stroke-width="1.2" cx="52" cy="48" r="34"/>
  <path fill="#d9a520" class="st-ink" stroke-width=".7" d="M32.9 51.4L27.1 54.8L21.2 51.4L21.2 44.6L27.1 41.2L32.9 44.6Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M39.2 62.2L33.3 65.6L27.4 62.2L27.4 55.4L33.3 52.0L39.2 55.4Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M45.4 73.0L39.5 76.4L33.7 73.0L33.7 66.2L39.5 62.8L45.4 66.2Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M39.2 40.6L33.3 44.0L27.4 40.6L27.4 33.8L33.3 30.4L39.2 33.8Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M45.4 51.4L39.5 54.8L33.7 51.4L33.7 44.6L39.5 41.2L45.4 44.6Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M51.6 62.2L45.8 65.6L39.9 62.2L39.9 55.4L45.8 52.0L51.6 55.4Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M57.9 73.0L52.0 76.4L46.1 73.0L46.1 66.2L52.0 62.8L57.9 66.2Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M45.4 29.8L39.5 33.2L33.7 29.8L33.7 23.0L39.5 19.6L45.4 23.0Z"><animate attributeName="opacity" values="1;.45;1" dur="1.6s" repeatCount="indefinite"/></path><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M51.6 40.6L45.8 44.0L39.9 40.6L39.9 33.8L45.8 30.4L51.6 33.8Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M64.1 62.2L58.2 65.6L52.4 62.2L52.4 55.4L58.2 52.0L64.1 55.4Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M70.3 73.0L64.5 76.4L58.6 73.0L58.6 66.2L64.5 62.8L70.3 66.2Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M57.9 29.8L52.0 33.2L46.1 29.8L46.1 23.0L52.0 19.6L57.9 23.0Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M64.1 40.6L58.2 44.0L52.4 40.6L52.4 33.8L58.2 30.4L64.1 33.8Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M70.3 51.4L64.5 54.8L58.6 51.4L58.6 44.6L64.5 41.2L70.3 44.6Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M76.6 62.2L70.7 65.6L64.8 62.2L64.8 55.4L70.7 52.0L76.6 55.4Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M70.3 29.8L64.5 33.2L58.6 29.8L58.6 23.0L64.5 19.6L70.3 23.0Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M76.6 40.6L70.7 44.0L64.8 40.6L64.8 33.8L70.7 30.4L76.6 33.8Z"/><path fill="#d9a520" class="st-ink" stroke-width=".7" d="M82.8 51.4L76.9 54.8L71.1 51.4L71.1 44.6L76.9 41.2L82.8 44.6Z"/>
  <path class="thin" style="stroke-width:1" d="M86 54L116 70"/>
  <text x="52" y="100">18 משושים</text>
  <text x="52" y="114">מצופים זהב</text>
  <text x="252" y="54">מראה משנית</text>
  <text x="160" y="50">קוטר 6.5 מטרים</text>
</g>

<!-- שלב 3: חום השמש נעצר במגן -->
<g class="only-3">
  <path class="arrow st-hot" style="stroke-width:2.4" marker-end="url(#jwst-a)" d="M40 202L82 186"/>
  <path class="arrow st-hot" style="stroke-width:2.4" marker-end="url(#jwst-a)" d="M56 214L120 183"/>
  <path class="arrow st-warm" style="stroke-width:2" marker-end="url(#jwst-a)" d="M293 160.5h17"><animate attributeName="opacity" values=".25;1;.25" dur="1.4s" begin="-0.00s" repeatCount="indefinite"/></path><path class="arrow st-warm" style="stroke-width:2" marker-end="url(#jwst-a)" d="M293 167.5h17"><animate attributeName="opacity" values=".25;1;.25" dur="1.4s" begin="-0.45s" repeatCount="indefinite"/></path><path class="arrow st-warm" style="stroke-width:2" marker-end="url(#jwst-a)" d="M293 174.5h17"><animate attributeName="opacity" values=".25;1;.25" dur="1.4s" begin="-0.90s" repeatCount="indefinite"/></path>
  <text x="54" y="140">צד מוצל:</text>
  <text x="54" y="154">−233 מעלות</text>
  <text x="244" y="140">חמש שכבות</text>
  <text x="196" y="206">צד מואר: 85 מעלות</text>
</g>

<!-- שלב 4: מיקום בנקודת L2 -->
<g class="only-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="6" y="8" width="96" height="62" rx="8"/>
  <circle class="fl-elec" cx="18" cy="30" r="6"/>
  <circle class="thin" style="stroke-width:.8;stroke-dasharray:1.5 2" cx="62" cy="30" r="8"/>
  <circle class="fl-cold st-ink" stroke-width="1" cx="62" cy="30" r="3.4"/>
  <circle class="fl-line" r="1.6"><animateMotion dur="5s" repeatCount="indefinite" path="M70 30A8 8 0 1 1 54 30A8 8 0 1 1 70 30"/></circle>
  <ellipse class="thin" style="stroke-width:.8" cx="88" cy="30" rx="4" ry="9"/>
  <circle class="fl-ink" r="2"><animateMotion dur="3s" repeatCount="indefinite" path="M92 30A4 9 0 1 1 84 30A4 9 0 1 1 92 30"/><animate attributeName="opacity" values="1;.6;1" dur="3s" repeatCount="indefinite"/></circle>
  <path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M25 30H84"/>
  <text x="18" y="50" class="sm">שמש</text>
  <text x="58" y="50" class="sm">כדור הארץ</text>
  <text x="91" y="50" class="sm">L2</text>
  <text x="54" y="64" class="sm">1.5 מיליון ק״מ מהארץ</text>
  <text x="196" y="206">מגן אחד מסתיר שמש, ארץ וירח</text>
</g>
`;
