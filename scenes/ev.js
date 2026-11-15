// רכב חשמלי: 1 מארז סוללה מאלפי תאים · 2 הממיר הופך זרם ישר לחילופין תלת־פאזי · 3 מנוע שנותן כוח מלא מאפס, יחס קבוע לגלגל · 4 טעינה, והאטה מעל 80%
export default `
<defs>
  <clipPath id="ev-clip"><rect x="52" y="30" width="80" height="36"/></clipPath>
  <marker id="ev-h" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.6" markerHeight="3.6" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-line"/></marker>
</defs>

<!-- סקירה: מסלול האנרגיה (נראה ב"הכול"; מוסתר מאחורי חלונות השלבים) -->
<g>
  <rect class="fl-panel st-line" stroke-width="1.2" x="230" y="34" width="40" height="22" rx="5"/><text x="250" y="49">שקע</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="184" y="34" width="40" height="22" rx="5"/><text x="204" y="49">סוללה</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="138" y="34" width="44" height="22" rx="5"/><text x="160" y="49">ממיר</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="96" y="34" width="40" height="22" rx="5"/><text x="116" y="49">מנוע</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="46" y="34" width="44" height="22" rx="5"/><text x="68" y="49">גלגלים</text>
  <path class="wire st-warm" d="M229 45H225M183 45H182M137 45H136M95 45H90" style="stroke-width:2"/>
  <text x="160" y="72" class="sm">זרם ישר ← זרם חילופין ← סיבוב</text>
</g>

<!-- כביש -->
<path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M8 206H312"/>

<!-- מרכב -->
<path class="body" d="M30 174V150Q30 140 40 138L64 132Q98 94 124 92H188Q208 92 236 132L282 141Q296 144 296 158V174Q296 180 290 180H36Q30 180 30 174z"/>
<path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M78 130Q104 102 126 100H152V130z"/>
<path class="fl-cold-soft st-ink" stroke-width="1.5" stroke-linejoin="round" d="M158 100H186Q202 101 224 130H158z"/>
<path class="fl-hot" d="M30 150h4v10h-4z"/>
<path class="fl-elec" d="M292 148h4v9h-4z"/>
<path class="fl-bg st-ink" stroke-width="2" d="M51 180A27 27 0 0 1 105 180z"/>
<path class="fl-bg st-ink" stroke-width="2" d="M219 180A27 27 0 0 1 273 180z"/>

<!-- גלגלים -->
<circle class="fl-dark st-ink" stroke-width="2" cx="78" cy="180" r="23"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="78" cy="180" r="14"/>
<circle class="fl-dark st-ink" stroke-width="2" cx="246" cy="180" r="23"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="246" cy="180" r="14"/>
<g class="only-3"><g class="spin fast"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M78 167v26M65 180h26M68.8 170.8l18.4 18.4M68.8 189.2l18.4-18.4"/></g>
  <g class="spin fast"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M246 167v26M233 180h26M236.8 170.8l18.4 18.4M236.8 189.2l18.4-18.4"/></g></g>
<g class="only-1 only-2 only-4"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M78 167v26M65 180h26M68.8 170.8l18.4 18.4M68.8 189.2l18.4-18.4M246 167v26M233 180h26M236.8 170.8l18.4 18.4M236.8 189.2l18.4-18.4"/></g>

<!-- מארז הסוללה ברצפה, עם צינור קירור -->
<g class="hl-1 hl-4">
  <rect class="fl-panel st-ink" stroke-width="1.5" x="126" y="159" width="90" height="18" rx="3"/>
  <g class="fl-green"><circle cx="132" cy="166" r="3.2"/><circle cx="140" cy="166" r="3.2"/><circle cx="148" cy="166" r="3.2"/><circle cx="156" cy="166" r="3.2"/><circle cx="164" cy="166" r="3.2"/><circle cx="172" cy="166" r="3.2"/><circle cx="180" cy="166" r="3.2"/><circle cx="188" cy="166" r="3.2"/><circle cx="196" cy="166" r="3.2"/><circle cx="204" cy="166" r="3.2"/><circle cx="212" cy="166" r="3.2"/></g>
  <path class="wire st-cold" style="stroke-width:2" d="M130 173H212"/>
</g>
<path class="flow only-1" d="M130 173H212"/>
<!-- תאים שמתמלאים בזמן טעינה -->
<g class="only-4 fl-elec"><circle cx="132" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.00;0.08;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="140" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.07;0.15;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="148" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.15;0.23;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="156" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.22;0.30;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="164" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.29;0.37;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="172" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.36;0.44;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="180" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.44;0.52;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="188" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.51;0.59;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="196" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.58;0.66;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="204" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.65;0.73;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="212" cy="166" r="3.2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.73;0.81;1" dur="3s" repeatCount="indefinite"/></circle></g>

<!-- ממיר: זרם ישר נכנס, שלוש פאזות יוצאות אל המנוע -->
<g class="hl-2">
  <path class="wire st-warm" d="M150 159V150"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M132 139H119V153"/>
  <path class="wire st-elec" style="stroke-width:1.6" d="M132 143H115V151"/>
  <path class="wire st-violet" style="stroke-width:1.6" d="M132 147H111V151"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="132" y="135" width="28" height="15" rx="2.5"/>
  <path class="thin st-ink" d="M137 142.5h5l4-4M146 142.5h8"/>
</g>
<g class="only-2"><path class="flow" d="M150 159V150"/><path class="flow" style="stroke-width:1.5" d="M132 139H119V153"/><path class="flow" style="stroke-width:1.5" d="M132 147H111V151"/></g>

<!-- מנוע, ציר ויחס הפחתה קבוע אל הגלגל האחורי -->
<g class="hl-2 hl-3">
  <path class="st-green fl-none" stroke-width="4.5" stroke-linecap="round" d="M112 160L78 180"/>
  <circle class="fl-soft st-ink" stroke-width="2" cx="112" cy="160" r="9.5"/>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="78" cy="180" r="6"/>
</g>
<path class="flow only-3" d="M112 160L78 180"/>
<g class="spin fast only-3"><path class="fl-hot" d="M105 160a7 7 0 0 1 14 0z"/><path class="fl-cold" d="M105 160a7 7 0 0 0 14 0z"/></g>
<g class="only-1 only-2 only-4"><path class="fl-hot" d="M105 160a7 7 0 0 1 14 0z"/><path class="fl-cold" d="M105 160a7 7 0 0 0 14 0z"/></g>
<circle class="fl-ink" cx="112" cy="160" r="2"/>

<!-- שקע טעינה, מטען מובנה וכבל אל הסוללה -->
<g class="hl-4">
  <path class="wire st-warm" d="M50 146H70M84 146H90V136H168V159"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="40" y="141" width="10" height="10" rx="2"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="70" y="141" width="14" height="10" rx="2"/>
</g>
<g class="only-4">
  <path class="flow" d="M50 146H70M84 146H90V136H168V159"/>
  <path class="wire st-ink" style="stroke-width:3" d="M8 158Q22 158 30 150H40"/>
</g>

<!-- חלונות השלבים -->
<g class="only-1">
  <rect class="fl-panel st-line" stroke-width="1.2" x="40" y="6" width="240" height="80" rx="10"/>
  <text x="160" y="22">תקריב: מאות תאים במודולים</text>
  <g class="fl-green"><circle cx="84" cy="38" r="5"/><circle cx="98" cy="38" r="5"/><circle cx="112" cy="38" r="5"/><circle cx="126" cy="38" r="5"/><circle cx="140" cy="38" r="5"/><circle cx="154" cy="38" r="5"/><circle cx="168" cy="38" r="5"/><circle cx="182" cy="38" r="5"/><circle cx="196" cy="38" r="5"/><circle cx="210" cy="38" r="5"/><circle cx="224" cy="38" r="5"/><circle cx="238" cy="38" r="5"/><circle cx="84" cy="50" r="5"/><circle cx="98" cy="50" r="5"/><circle cx="112" cy="50" r="5"/><circle cx="126" cy="50" r="5"/><circle cx="140" cy="50" r="5"/><circle cx="154" cy="50" r="5"/><circle cx="168" cy="50" r="5"/><circle cx="182" cy="50" r="5"/><circle cx="196" cy="50" r="5"/><circle cx="210" cy="50" r="5"/><circle cx="224" cy="50" r="5"/><circle cx="238" cy="50" r="5"/><circle cx="84" cy="62" r="5"/><circle cx="98" cy="62" r="5"/><circle cx="112" cy="62" r="5"/><circle cx="126" cy="62" r="5"/><circle cx="140" cy="62" r="5"/><circle cx="154" cy="62" r="5"/><circle cx="168" cy="62" r="5"/><circle cx="182" cy="62" r="5"/><circle cx="196" cy="62" r="5"/><circle cx="210" cy="62" r="5"/><circle cx="224" cy="62" r="5"/><circle cx="238" cy="62" r="5"/></g>
  <path class="thin" d="M77 31H131V69H77zM133 31H187V69H133zM189 31H243V69H189z"/>
  <rect class="fl-none st-elec" stroke-width="2" y="30" width="56" height="40" rx="3"><animate attributeName="x" values="76;132;188;76" keyTimes="0;.33;.66;1" calcMode="discrete" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.4;1" dur=".8s" repeatCount="indefinite"/></rect>
  <text x="160" y="81" class="sm">מחשב הסוללה בודק כל מודול · קירור בנוזל</text>
</g>

<g class="only-2">
  <rect class="fl-panel st-line" stroke-width="1.2" x="40" y="6" width="240" height="80" rx="10"/>
  <text x="160" y="20">מזרם ישר לזרם חילופין</text>
  <path class="wire st-warm" d="M268 48H196"/>
  <path class="flow" d="M268 48H196"/>
  <text x="236" y="40" class="sm">ישר, מהסוללה</text>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="140" y="32" width="54" height="32" rx="4"/>
  <path class="thin st-ink" d="M150 52h8l8-8M168 52h16"/>
  <circle class="fl-ink" cx="158" cy="52" r="1.5"/><circle class="fl-ink" cx="168" cy="52" r="1.5"/>
  <path class="wire st-ink" style="stroke-width:1.2" d="M138 48H134"/>
  <g clip-path="url(#ev-clip)"><g>
    <animateTransform attributeName="transform" type="translate" values="0 0;30 0" dur="1s" repeatCount="indefinite"/>
    <path class="wire st-hot" style="stroke-width:1.8" d="M20 56.7L22 57.9L24 57.5L26 55.4L28 52.1L30 48L32 43.9L34 40.6L36 38.5L38 38.1L40 39.3L42 42.1L44 45.9L46 50.1L48 53.9L50 56.7L52 57.9L54 57.5L56 55.4L58 52.1L60 48L62 43.9L64 40.6L66 38.5L68 38.1L70 39.3L72 42.1L74 45.9L76 50.1L78 53.9L80 56.7L82 57.9L84 57.5L86 55.4L88 52.1L90 48L92 43.9L94 40.6L96 38.5L98 38.1L100 39.3L102 42.1L104 45.9L106 50.1L108 53.9L110 56.7L112 57.9L114 57.5L116 55.4L118 52.1L120 48L122 43.9L124 40.6L126 38.5L128 38.1L130 39.3L132 42.1L134 45.9L136 50.1L138 53.9L140 56.7"/>
    <path class="wire st-elec" style="stroke-width:1.8" d="M20 39.3L22 42.1L24 45.9L26 50.1L28 53.9L30 56.7L32 57.9L34 57.5L36 55.4L38 52.1L40 48L42 43.9L44 40.6L46 38.5L48 38.1L50 39.3L52 42.1L54 45.9L56 50.1L58 53.9L60 56.7L62 57.9L64 57.5L66 55.4L68 52.1L70 48L72 43.9L74 40.6L76 38.5L78 38.1L80 39.3L82 42.1L84 45.9L86 50.1L88 53.9L90 56.7L92 57.9L94 57.5L96 55.4L98 52.1L100 48L102 43.9L104 40.6L106 38.5L108 38.1L110 39.3L112 42.1L114 45.9L116 50.1L118 53.9L120 56.7L122 57.9L124 57.5L126 55.4L128 52.1L130 48L132 43.9L134 40.6L136 38.5L138 38.1L140 39.3"/>
    <path class="wire st-violet" style="stroke-width:1.8" d="M20 48L22 43.9L24 40.6L26 38.5L28 38.1L30 39.3L32 42.1L34 45.9L36 50.1L38 53.9L40 56.7L42 57.9L44 57.5L46 55.4L48 52.1L50 48L52 43.9L54 40.6L56 38.5L58 38.1L60 39.3L62 42.1L64 45.9L66 50.1L68 53.9L70 56.7L72 57.9L74 57.5L76 55.4L78 52.1L80 48L82 43.9L84 40.6L86 38.5L88 38.1L90 39.3L92 42.1L94 45.9L96 50.1L98 53.9L100 56.7L102 57.9L104 57.5L106 55.4L108 52.1L110 48L112 43.9L114 40.6L116 38.5L118 38.1L120 39.3L122 42.1L124 45.9L126 50.1L128 53.9L130 56.7L132 57.9L134 57.5L136 55.4L138 52.1L140 48"/>
  </g></g>
  <text x="92" y="78" class="sm">חילופין, 3 פאזות</text>
  <text x="167" y="78" class="sm">ממיר: מתגים מהירים</text>
</g>

<g class="only-3">
  <rect class="fl-panel st-line" stroke-width="1.2" x="40" y="6" width="240" height="80" rx="10"/>
  <path class="thin st-ink" d="M70 16V74H256"/>
  <path class="wire st-line" style="stroke-dasharray:4 3;stroke-width:2" d="M92 66L96 61.5L100 58.2L104 55.4L108 52.9L112 50.6L116 48.6L120 46.8L124 45.3L128 43.9L132 42.8L136 41.9L140 41.1L144 40.6L148 40.2L152 40L156 40L160 40.2L164 40.5L168 41L172 41.6L176 42.3L180 43.2L184 44.2L188 45.3L192 46.5L196 47.9L200 49.3L204 50.7L208 52.3L212 53.9L216 55.5L220 57.2L224 58.9L228 60.7L232 62.5L236 64.2L240 66"/>
  <path class="wire st-green" d="M70 34H140L145 36.7L150 39L155 41.1L160 42.9L165 44.5L170 46L175 47.3L180 48.5L185 49.7L190 50.7L195 51.6L200 52.5L205 53.3L210 54L215 54.7L220 55.3L225 55.9L230 56.5L235 57L240 57.5L245 58L250 58.4"/>
  <circle class="fl-green st-ink" stroke-width="1" r="3.5"><animateMotion dur="3s" repeatCount="indefinite" path="M70 34H140L145 36.7L150 39L155 41.1L160 42.9L165 44.5L170 46L175 47.3L180 48.5L185 49.7L190 50.7L195 51.6L200 52.5L205 53.3L210 54L215 54.7L220 55.3L225 55.9L230 56.5L235 57L240 57.5L245 58L250 58.4"/></circle>
  <text x="112" y="27">חשמלי: מלא מאפס</text>
  <text x="118" y="66" class="sm">בנזין</text>
  <text x="56" y="45" class="sm">כוח</text>
  <text x="160" y="83" class="sm">סיבובים בדקה</text>
</g>

<g class="only-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="40" y="6" width="240" height="80" rx="10"/>
  <path class="thin st-ink" d="M70 16V74H256"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M214 26V74"/>
  <path class="wire st-warm" d="M70 32H214L218 40.9L222 47.7L226 52.7L230 56.5L234 59.4L238 61.5L242 63.1L246 64.3L250 65.2"/>
  <circle class="fl-warm st-ink" stroke-width="1" r="3.5"><animateMotion dur="3s" repeatCount="indefinite" path="M70 32H214L218 40.9L222 47.7L226 52.7L230 56.5L234 59.4L238 61.5L242 63.1L246 64.3L250 65.2"/></circle>
  <text x="128" y="25">הספק הטעינה</text>
  <text x="142" y="56" class="sm">ליד המלא מורידים את הזרם</text>
  <text x="214" y="83" class="sm">80%</text>
  <text x="70" y="83" class="sm">0%</text>
  <text x="250" y="83" class="sm">100%</text>
</g>
`;
