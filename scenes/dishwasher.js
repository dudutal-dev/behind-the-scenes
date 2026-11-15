// מדיח כלים (חתך צד): 1 כמה ליטרים בתחתית ומתחממים · 2 המשאבה דוחפת מים לזרועות המסתובבות · 3 המים חוזרים דרך המסנן ונשאבים שוב · 4 הטבלית נפתחת ונמסה ולבסוף: ייבוש בחום
export default `
<defs>
  <clipPath id="dishwasher-ch"><path d="M28 18H164V157L84 161V184H50V161L28 158Z"/></clipPath>
  <clipPath id="dishwasher-lens"><circle cx="250" cy="136" r="45"/></clipPath>
  <marker id="dishwasher-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<path class="thin" d="M4 210H316"/>

<!-- גוף המדיח: דלת משמאל, תא השטיפה, אגן ניקוז בתחתית -->
<rect class="fl-line" x="18" y="205" width="14" height="5" rx="1.5"/><rect class="fl-line" x="156" y="205" width="14" height="5" rx="1.5"/>
<rect class="body" x="8" y="10" width="172" height="196" rx="5"/>
<path class="st-ink" style="fill:var(--s-soft)" stroke-width="1.4" stroke-linejoin="round" d="M8 176V15Q8 10 13 10H28V176z"/>
<rect class="fl-dark" x="12" y="15" width="12" height="7" rx="1.5"/><path class="wire st-ink" style="stroke-width:2.4" d="M4.5 34V56"/>
<path class="fl-bg st-ink" stroke-width="1.4" stroke-linejoin="round" d="M28 18H164V157L84 161V184H50V161L28 158Z"/>

<!-- ניקוז -->
<path class="pipe st-ink" style="stroke-width:4" d="M52 177H40V200H180"/><path class="pipe" style="stroke-width:1.4;stroke:var(--s-panel)" d="M52 177H40V200H180"/>
<circle class="body" style="stroke-width:1.5" cx="40" cy="190" r="5"/>

<!-- כניסת מים -->
<g class="hl-1"><path class="pipe st-ink" style="stroke-width:5" d="M180 40H165"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-panel)" d="M180 40H165"/><rect class="fl-line st-ink" stroke-width="1.3" x="168" y="35" width="9" height="10" rx="1.5"/></g>

<!-- משאבת סחרור וצנרת לזרועות -->
<g class="hl-2 hl-3 hl-4">
  <path class="pipe st-ink" style="stroke-width:5" d="M67 183V192H92"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-panel)" d="M67 183V192H92"/><path class="pipe st-ink" style="stroke-width:5" d="M100 184V147"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-panel)" d="M100 184V147"/><path class="pipe st-ink" style="stroke-width:5" d="M108 192H172V74H100V70"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-panel)" d="M108 192H172V74H100V70"/>
  <circle class="body" cx="100" cy="192" r="8.5"/>
</g>
<g class="only-1"><path class="st-ink fl-none" stroke-width="1.5" stroke-linecap="round" opacity=".3" d="M100 187V197M95 192H105"/></g>

<!-- גוף חימום -->
<g class="hl-1 hl-4"><path class="wire st-line" style="stroke-width:3" d="M33 153.5H52M84 155H95M105 154.5H158"/></g>

<!-- מסנן -->
<g class="hl-3">
  <rect class="fl-panel st-ink" stroke-width="1.4" x="58" y="152" width="18" height="29" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 2" d="M62.5 155V179M67 155V179M71.5 155V179"/>
</g>

<!-- סלים וכלים -->
<g class="hl-2 hl-3 hl-4">
  <path class="wire st-line" style="stroke-width:1.6" d="M38 46V58H156V46M36 120V134H158V120"/>
  <circle class="fl-line" cx="160" cy="58" r="2.6"/><circle class="fl-line" cx="42" cy="137" r="2.6"/><circle class="fl-line" cx="152" cy="137" r="2.6"/>
  <path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" fill-opacity=".8" d="M45.5 58L47.5 34H56.5L58.5 58"/><path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" fill-opacity=".8" d="M67.5 58L69.5 34H78.5L80.5 58"/><path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" fill-opacity=".8" d="M111.5 58L113.5 34H122.5L124.5 58"/><path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" fill-opacity=".8" d="M133.5 58L135.5 34H144.5L146.5 58"/><path class="fl-panel st-ink" stroke-width="1.4" stroke-linejoin="round" fill-opacity=".8" d="M86 58Q86 42 96 42Q106 42 106 58"/>
  <ellipse class="fl-panel st-ink" stroke-width="1.4" cx="48" cy="114" rx="2.5" ry="19" transform="rotate(12 48 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="64" cy="114" rx="2.5" ry="19" transform="rotate(12 64 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="80" cy="114" rx="2.5" ry="19" transform="rotate(12 80 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="96" cy="114" rx="2.5" ry="19" transform="rotate(12 96 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="112" cy="114" rx="2.5" ry="19" transform="rotate(12 112 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="128" cy="114" rx="2.5" ry="19" transform="rotate(12 128 114)"/><ellipse class="fl-panel st-ink" stroke-width="1.4" cx="144" cy="114" rx="2.5" ry="19" transform="rotate(12 144 114)"/>
</g>

<!-- תא הטבלית בדלת -->
<g class="hl-4">
  <rect class="fl-panel st-ink" stroke-width="1.4" x="14" y="86" width="14" height="24" rx="2"/>
</g>
<g class="only-1 only-2 only-3"><rect class="fl-violet st-ink" stroke-width="1" x="17" y="92" width="8" height="12" rx="2" opacity=".5"/><path class="wire st-ink" style="stroke-width:2" d="M28.5 86V110"/></g>

<!-- עדשת ההגדלה -->
<circle class="fl-bg st-ink" stroke-width="2" cx="250" cy="136" r="46"/>

<!-- שלב 1: מים נאספים בתחתית וגוף החימום מחמם אותם -->
<g class="only-1">
  <g transform="translate(100 144)"><g>
    
    <rect class="fl-line st-ink" stroke-width="1.4" x="-52" y="-2.6" width="104" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g transform="translate(100 68)"><g>
    
    <rect class="fl-line st-ink" stroke-width="1.4" x="-47" y="-2.6" width="94" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.93;.95;.985;1" dur="7s" repeatCount="indefinite"/>
    <g clip-path="url(#dishwasher-ch)"><rect class="fl-cold" fill-opacity=".6" x="26" y="184" width="140" height="40"><animate attributeName="y" values="184;161;149;149" keyTimes="0;.3;.55;1" dur="7s" repeatCount="indefinite"/></rect></g>
    <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.58;1" dur="7s" repeatCount="indefinite"/>
      <path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M180 40H165"/><path class="flow" style="stroke-width:1.2" d="M180 40H165"/><path class="wire st-cold" style="stroke-width:2.4" d="M162 42V152"/><path class="flow" style="stroke-width:1.2" d="M162 42V152"/>
    </g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.4;.55;1" dur="7s" repeatCount="indefinite"/><g class="fade"><path class="wire st-hot" style="stroke-width:3.4" d="M33 153.5H52M84 155H95M105 154.5H158"/></g></g>
  </g>
  <g clip-path="url(#dishwasher-lens)">
    <rect class="fl-panel st-ink" stroke-width="1.6" x="229" y="100" width="10" height="58" rx="5"/>
    <rect class="fl-hot" x="232" y="140" width="4" height="16"><animate attributeName="y" values="148;148;116;116" keyTimes="0;.25;.8;1" dur="7s" repeatCount="indefinite"/><animate attributeName="height" values="10;10;42;42" keyTimes="0;.25;.8;1" dur="7s" repeatCount="indefinite"/></rect>
    <circle class="fl-hot st-ink" stroke-width="1.6" cx="234" cy="162" r="8"/>
    <path class="thin st-ink" style="stroke-width:1.2" d="M241 112H247M241 120H245M241 128H247M241 136H245M241 144H247"/>
    <path class="wire st-hot" style="stroke-width:3" d="M251 112V128"/>
    <text x="270" y="116">70°</text><text x="270" y="132">50°</text>
  </g>
  <text x="250" y="30">כמה ליטרים בתחתית</text>
  <text x="250" y="46">וגוף חימום מחמם</text>
  <text x="250" y="200">חם מכדי לגעת</text>
</g>

<!-- שלבים 2–3: סחרור המים אל הזרועות -->
<g class="only-2 only-3">
  <g clip-path="url(#dishwasher-ch)"><rect class="fl-cold" fill-opacity=".6" x="26" y="155" width="140" height="40"></rect></g>
  <path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M67 183V192H92"/><path class="flow" style="stroke-width:1.2" d="M67 183V192H92"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M100 184V147"/><path class="flow" style="stroke-width:1.2" d="M100 184V147"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M108 192H172V74H100V70"/><path class="flow" style="stroke-width:1.2" d="M108 192H172V74H100V70"/><g><animateTransform attributeName="transform" type="rotate" from="0 100 192" to="360 100 192" dur=".7s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.5" stroke-linecap="round" d="M100 187V197M95 192H105"/></g>
  <g transform="translate(100 144)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1" dur="3s" begin="-2.6s" repeatCount="indefinite"/>
    <g class="wire st-cold dash" style="stroke-width:1.8;stroke-dasharray:4 4;vector-effect:non-scaling-stroke"><path d="M-46 -3L-51.83 -40"/><path d="M-30 -3L-34.5 -40"/><path d="M-14 -3L-17.17 -40"/><path d="M14 -3L17.17 -40"/><path d="M30 -3L34.5 -40"/><path d="M46 -3L51.83 -40"/></g>
    <rect class="fl-line st-ink" stroke-width="1.4" x="-52" y="-2.6" width="104" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g transform="translate(100 68)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1" dur="3.6s" begin="-1.2s" repeatCount="indefinite"/>
    <g class="wire st-cold dash" style="stroke-width:1.8;stroke-dasharray:4 4;vector-effect:non-scaling-stroke"><path d="M-41 -3L-46.42 -30"/><path d="M-41 3L-35.58 19"/><path d="M-26 -3L-30.17 -30"/><path d="M-26 3L-21.83 19"/><path d="M-11 -3L-13.92 -30"/><path d="M-11 3L-8.08 19"/><path d="M11 -3L13.92 -30"/><path d="M11 3L8.08 19"/><path d="M26 -3L30.17 -30"/><path d="M26 3L21.83 19"/><path d="M41 -3L46.42 -30"/><path d="M41 3L35.58 19"/></g>
    <rect class="fl-line st-ink" stroke-width="1.4" x="-47" y="-2.6" width="94" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
</g>

<!-- שלב 2: מבט מלמעלה על זרוע, הסילונים שבזווית מסובבים אותה -->
<g class="only-2">
  <g clip-path="url(#dishwasher-lens)">
    <g><animateTransform attributeName="transform" type="rotate" from="0 250 136" to="-360 250 136" dur="2.6s" repeatCount="indefinite"/>
      <g class="wire st-cold dash" style="stroke-width:2"><path d="M283 136l7 24"/><path d="M270 136l6 20"/><path d="M217 136l-7-24"/><path d="M230 136l-6-20"/></g>
      <rect class="fl-line st-ink" stroke-width="1.6" x="213" y="132" width="74" height="8" rx="4"/>
      <circle class="fl-panel st-ink" stroke-width="1.6" cx="250" cy="136" r="5.5"/>
      <circle class="fl-ink" cx="283" cy="136" r="1.5"/><circle class="fl-ink" cx="270" cy="136" r="1.5"/><circle class="fl-ink" cx="217" cy="136" r="1.5"/><circle class="fl-ink" cx="230" cy="136" r="1.5"/>
    </g>
  </g>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M295.63 160.93A52 52 0 0 0 295.63 111.07" marker-end="url(#dishwasher-a)"/>
  <text x="250" y="30">המשאבה דוחפת מים</text>
  <text x="250" y="46">לזרועות המסתובבות</text>
  <text x="250" y="72">כמו ממטרה בגינה</text>
  <text x="250" y="200">זרוע במבט מלמעלה</text>
</g>

<!-- שלב 3: המים חוזרים לתחתית עוברים במסנן ונשאבים שוב -->
<g class="only-3">
  <circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0s" repeatCount="indefinite" path="M44 136V153"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.23s" repeatCount="indefinite" path="M60 136V158"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.46s" repeatCount="indefinite" path="M76 136V158"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.69s" repeatCount="indefinite" path="M92 136V153"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.12s" repeatCount="indefinite" path="M112 136V153"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.35s" repeatCount="indefinite" path="M128 136V153"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.58s" repeatCount="indefinite" path="M144 136V153"/></circle><circle class="fl-cold" r="1.6"><animateMotion dur=".8s" begin="-0.01s" repeatCount="indefinite" path="M154 136V153"/></circle>
  <path class="flow" style="stroke-width:1.4" d="M158 155L80 158.5M30 155.5L55 158"/>
  <path class="wire st-cold" style="stroke-width:2.4" d="M67 157V181"/><path class="flow" style="stroke-width:1.2" d="M67 157V181"/>
  <g class="fl-warm st-ink" stroke-width=".8">
    <circle cx="79.5" cy="156" r="2.3"/><circle cx="54.5" cy="156" r="2.1"/><circle cx="80" cy="151.5" r="1.8"/>
    <circle r="2.2"><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.7;1" path="M150 152L84 156"/></circle>
    <circle r="1.9"><animateMotion dur="4s" begin="-2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.7;1" path="M120 153L83 152.5"/></circle>
  </g>
  <g clip-path="url(#dishwasher-lens)">
    <circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M204 105.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-0.37s" repeatCount="indefinite" path="M204 123.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-0.74s" repeatCount="indefinite" path="M204 141.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-1.11s" repeatCount="indefinite" path="M204 159.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-1.48s" repeatCount="indefinite" path="M204 114.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-1.85s" repeatCount="indefinite" path="M204 150.5H298"/></circle><circle class="fl-cold" r="2.3"><animateMotion dur="2.4s" begin="-2.22s" repeatCount="indefinite" path="M204 132.5H298"/></circle>
    <circle class="fl-ink" cx="252" cy="92" r="2.7"/><circle class="fl-ink" cx="252" cy="101" r="2.7"/><circle class="fl-ink" cx="252" cy="110" r="2.7"/><circle class="fl-ink" cx="252" cy="119" r="2.7"/><circle class="fl-ink" cx="252" cy="128" r="2.7"/><circle class="fl-ink" cx="252" cy="137" r="2.7"/><circle class="fl-ink" cx="252" cy="146" r="2.7"/><circle class="fl-ink" cx="252" cy="155" r="2.7"/><circle class="fl-ink" cx="252" cy="164" r="2.7"/><circle class="fl-ink" cx="252" cy="173" r="2.7"/><circle class="fl-ink" cx="252" cy="182" r="2.7"/>
    <path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M-5 0L-2-4L3-4L5 1L1 5L-4 3z" transform="translate(243 112)"></path><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M-4-2L1-5L5-1L3 4L-3 4z" transform="translate(244 139)"></path><path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M-5 0L-2-4L3-4L5 1L1 5L-4 3z" transform="translate(243 164)"></path>
    <path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M-4-2L1-5L5-1L3 4L-3 4z" transform="translate(0 0)"><animateMotion dur="3.6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.6;1" path="M200 126H243"/></path>
    <path class="fl-warm st-ink" stroke-width="1" stroke-linejoin="round" d="M-5 0L-2-4L3-4L5 1L1 5L-4 3z" transform="translate(0 0)"><animateMotion dur="3.6s" begin="-1.8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.6;1" path="M200 152H243"/></path>
  </g>
  <text x="250" y="30">המים חוזרים לתחתית</text>
  <text x="250" y="46">ונשאבים שוב לזרועות</text>
  <text x="250" y="200">המסנן עוצר שאריות</text>
</g>

<!-- שלב 4 והמבט הכולל: הטבלית נפתחת, שטיפה חמה, ואז ייבוש -->
<g class="from-4">
  <path class="wire st-ink" style="stroke-width:2" d="M28.5 110L43 117"/>
  <g clip-path="url(#dishwasher-ch)"><rect class="fl-cold" fill-opacity=".6" x="26" y="155" width="140" height="40"></rect></g>
  <g transform="translate(100 144)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;1 1" keyTimes="0;0.03;0.06;0.09;0.13;0.16;0.19;0.22;0.25;0.28;0.31;0.34;0.38;0.41;0.44;0.47;0.5;1" dur="10s" repeatCount="indefinite"/>
    
    <rect class="fl-line st-ink" stroke-width="1.4" x="-52" y="-2.6" width="104" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g transform="translate(100 68)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;1 1" keyTimes="0;0.03;0.06;0.09;0.13;0.16;0.19;0.22;0.25;0.28;0.31;0.34;0.38;0.41;0.44;0.47;0.5;1" dur="10s" repeatCount="indefinite"/>
    
    <rect class="fl-line st-ink" stroke-width="1.4" x="-47" y="-2.6" width="94" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.5;.54;.97;1" dur="10s" repeatCount="indefinite"/>
    <path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M67 183V192H92"/><path class="flow" style="stroke-width:1.2" d="M67 183V192H92"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M100 184V147"/><path class="flow" style="stroke-width:1.2" d="M100 184V147"/><path class="pipe" style="stroke-width:2.4;stroke:var(--s-cold)" d="M108 192H172V74H100V70"/><path class="flow" style="stroke-width:1.2" d="M108 192H172V74H100V70"/><g><animateTransform attributeName="transform" type="rotate" from="0 100 192" to="360 100 192" dur=".7s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.5" stroke-linecap="round" d="M100 187V197M95 192H105"/></g>
    <g transform="translate(100 144)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;1 1" keyTimes="0;0.03;0.06;0.09;0.13;0.16;0.19;0.22;0.25;0.28;0.31;0.34;0.38;0.41;0.44;0.47;0.5;1" dur="10s" repeatCount="indefinite"/>
    <g class="wire st-cold dash" style="stroke-width:1.8;stroke-dasharray:4 4;vector-effect:non-scaling-stroke"><path d="M-46 -3L-51.83 -40"/><path d="M-30 -3L-34.5 -40"/><path d="M-14 -3L-17.17 -40"/><path d="M14 -3L17.17 -40"/><path d="M30 -3L34.5 -40"/><path d="M46 -3L51.83 -40"/></g>
    <rect class="fl-line st-ink" stroke-width="1.4" x="-52" y="-2.6" width="104" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
  <g transform="translate(100 68)"><g><animateTransform attributeName="transform" type="scale" values="1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;.71 1;0 1;-.71 1;-1 1;-.71 1;0 1;.71 1;1 1;1 1" keyTimes="0;0.03;0.06;0.09;0.13;0.16;0.19;0.22;0.25;0.28;0.31;0.34;0.38;0.41;0.44;0.47;0.5;1" dur="10s" repeatCount="indefinite"/>
    <g class="wire st-cold dash" style="stroke-width:1.8;stroke-dasharray:4 4;vector-effect:non-scaling-stroke"><path d="M-41 -3L-46.42 -30"/><path d="M-41 3L-35.58 19"/><path d="M-26 -3L-30.17 -30"/><path d="M-26 3L-21.83 19"/><path d="M-11 -3L-13.92 -30"/><path d="M-11 3L-8.08 19"/><path d="M11 -3L13.92 -30"/><path d="M11 3L8.08 19"/><path d="M26 -3L30.17 -30"/><path d="M26 3L21.83 19"/><path d="M41 -3L46.42 -30"/><path d="M41 3L35.58 19"/></g>
    <rect class="fl-line st-ink" stroke-width="1.4" x="-47" y="-2.6" width="94" height="5.2" rx="2.6" style="vector-effect:non-scaling-stroke"/>
  </g><rect class="fl-line st-ink" stroke-width="1.4" x="-4" y="-3.6" width="8" height="7.2" rx="1.5"/></g>
    <g class="fade"><path class="wire st-hot" style="stroke-width:3.4" d="M33 153.5H52M84 155H95M105 154.5H158"/></g>
    <rect class="fl-violet st-ink" stroke-width="1" x="-4" y="-6" width="8" height="12" rx="2"><animateMotion dur="10s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.02;.12;1" path="M21 98C34 96 38 120 40 149"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.14;.4;1" dur="10s" repeatCount="indefinite"/></rect>
    <circle class="fl-violet" r="1.7"><animateMotion dur="2s" begin="-0s" repeatCount="indefinite" path="M67 172V192H100V150"/></circle><circle class="fl-violet" r="1.7"><animateMotion dur="3s" begin="-0s" repeatCount="indefinite" path="M67 172V192H172V74H102"/></circle><circle class="fl-violet" r="1.7"><animateMotion dur="2s" begin="-0.66s" repeatCount="indefinite" path="M67 172V192H100V150"/></circle><circle class="fl-violet" r="1.7"><animateMotion dur="3s" begin="-1s" repeatCount="indefinite" path="M67 172V192H172V74H102"/></circle><circle class="fl-violet" r="1.7"><animateMotion dur="2s" begin="-1.32s" repeatCount="indefinite" path="M67 172V192H100V150"/></circle><circle class="fl-violet" r="1.7"><animateMotion dur="3s" begin="-2s" repeatCount="indefinite" path="M67 172V192H172V74H102"/></circle>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.54;.6;.95;1" dur="10s" repeatCount="indefinite"/>
    <g class="wire st-line" style="stroke-width:1.6"><path d="M56 90q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-0s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-0s" repeatCount="indefinite"/></path><path d="M88 88q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-0.31s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-0.31s" repeatCount="indefinite"/></path><path d="M120 90q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-0.62s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-0.62s" repeatCount="indefinite"/></path><path d="M146 92q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-0.93s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-0.93s" repeatCount="indefinite"/></path><path d="M63 30q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-1.24s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-1.24s" repeatCount="indefinite"/></path><path d="M107 36q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-1.55s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-1.55s" repeatCount="indefinite"/></path><path d="M129 30q-3-4 0-8t0-8"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin="-1.86s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 4;0 -6" dur="2s" begin="-1.86s" repeatCount="indefinite"/></path></g>
  </g>
  <g clip-path="url(#dishwasher-lens)">
    <path class="fl-panel st-ink" stroke-width="1.6" d="M196 155H304V190H196z"/>
    <path class="thin" style="stroke-width:1.2" d="M206 163H294"/>
    <circle class="fl-warm st-ink" stroke-width="1" cx="222" cy="150" r="4"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-16 -30" keyTimes="0;0.15;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="3.2s" repeatCount="indefinite"/></circle><circle class="fl-warm st-ink" stroke-width="1" cx="230" cy="150" r="4"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-9 -24" keyTimes="0;0.45;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="3.2s" repeatCount="indefinite"/></circle><circle class="fl-warm st-ink" stroke-width="1" cx="238" cy="150" r="4"></circle><circle class="fl-warm st-ink" stroke-width="1" cx="246" cy="150" r="4"></circle><circle class="fl-warm st-ink" stroke-width="1" cx="254" cy="150" r="4"></circle><circle class="fl-warm st-ink" stroke-width="1" cx="262" cy="150" r="4"></circle><circle class="fl-warm st-ink" stroke-width="1" cx="270" cy="150" r="4"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;9 -24" keyTimes="0;0.45;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="3.2s" repeatCount="indefinite"/></circle><circle class="fl-warm st-ink" stroke-width="1" cx="278" cy="150" r="4"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;16 -30" keyTimes="0;0.15;1" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.6;1" dur="3.2s" repeatCount="indefinite"/></circle>
    <g transform="translate(234 139)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur=".7s" begin="0s" repeatCount="indefinite"/><path class="fl-violet st-ink" stroke-width="1.2" stroke-linejoin="round" d="M0 0L-4 6.9A8 8 0 1 1 4 6.9Z"/><circle class="fl-ink" cx="-3" cy="-2.5" r="1.1"/></g></g><g transform="translate(266 139)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur=".7s" begin="-0.35s" repeatCount="indefinite"/><path class="fl-violet st-ink" stroke-width="1.2" stroke-linejoin="round" d="M0 0L-4 6.9A8 8 0 1 1 4 6.9Z"/><circle class="fl-ink" cx="-3" cy="-2.5" r="1.1"/></g></g>
  </g>
</g>
<g class="only-4">
  <text x="250" y="30">הטבלית נפתחת ונמסה</text>
  <text x="250" y="46">ולבסוף: ייבוש בחום</text>
  <text x="250" y="200">אנזים מפרק עמילן</text>
</g>
`;
