// טלפון עם משדר גרגרי פחם: 1 גלי הקול מרעידים את קרום הפומית · 2 הגרגרים נדחסים והזרם עולה ויורד כמו הקול · 3 הזרם המשתנה עובר בקו · 4 האלקטרומגנט באפרכסת מרעיד לוחית ברזל ומחזיר את הקול
export default `
<defs>
  <marker id="telephone-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="telephone-c1"><rect x="16" y="142" width="80" height="30"/></clipPath>
  <clipPath id="telephone-c2"><rect x="121" y="40" width="75" height="50"/></clipPath>
  <clipPath id="telephone-c3"><rect x="218" y="142" width="80" height="30"/></clipPath>
  <clipPath id="telephone-horn"><path d="M11 42C26 46 38 54 48 63V73C38 82 26 90 11 94z"/></clipPath>
</defs>

<!-- ===== הקו: חוט הלוך, חוט חזור וסוללה בטור ===== -->
<g class="hl-2 hl-3 hl-4">
  <path class="wire st-ink" d="M57 41V24H256V55M256 82V112H165M151 112H104V68H93"/>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-0s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-0.82s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-1.64s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-2.46s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-3.28s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-4.1s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-4.92s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-5.74s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-6.56s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8.2s" begin="-7.38s" repeatCount="indefinite" path="M57 41V24H256V55"/></circle>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-0s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-0.8s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-1.6s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-2.4s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-3.2s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-4s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-4.8s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-5.6s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-6.4s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="8s" begin="-7.2s" repeatCount="indefinite" path="M256 82V112H104V68H93"/></circle>
</g>
<!-- סוללה: תא רטוב בצנצנת זכוכית -->
<g class="hl-2 hl-3">
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="145" y="117" width="26" height="19" rx="2"/>
  <rect class="fl-line st-ink" stroke-width=".8" x="150.5" y="107" width="4.5" height="25" rx="1"/>
  <rect class="fl-warm st-ink" stroke-width=".8" x="161" y="107" width="4.5" height="25" rx="1"/>
  <path class="thin st-ink" style="stroke-width:1" d="M145.5 121.5H170.5"/>
</g>

<!-- ===== הפומית בחתך: משפך, קרום, תא גרגרי פחם ===== -->
<g class="hl-1 hl-2">
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M11 35C28 40 40 48 48 58V63C38 54 26 46 11 42zM11 101C28 96 40 88 48 78V73C38 82 26 90 11 94z"/>
  <rect class="fl-panel st-ink" stroke-width="2" x="48" y="34" width="50" height="68" rx="3"/>
  <rect class="fl-warm" opacity=".5" x="48" y="34" width="50" height="68" rx="3"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="53" y="41" width="40" height="54" rx="2"/>
  <rect class="fl-panel" x="47" y="63.8" width="7" height="8.4"/>
  <path class="thin st-ink" d="M48 63H53M48 73H53"/>
  <rect class="fl-dark st-ink" stroke-width="1" x="55" y="41" width="4" height="4.5"/><rect class="fl-dark st-ink" stroke-width="1" x="55" y="90.5" width="4" height="4.5"/>
  <path class="fl-none st-ink" stroke-width="2.4" stroke-linecap="round" d="M57 44Q57 68 57 92"><animate attributeName="d" values="M57 44Q52.28 68 57 92;M57 44Q52.43 68 57 92;M57 44Q53.59 68 57 92;M57 44Q55.23 68 57 92;M57 44Q56.72 68 57 92;M57 44Q57.58 68 57 92;M57 44Q57.73 68 57 92;M57 44Q57.45 68 57 92;M57 44Q57.15 68 57 92;M57 44Q57.17 68 57 92;M57 44Q57.57 68 57 92;M57 44Q58.13 68 57 92;M57 44Q58.56 68 57 92;M57 44Q58.7 68 57 92;M57 44Q58.6 68 57 92;M57 44Q58.5 68 57 92;M57 44Q58.63 68 57 92;M57 44Q59.02 68 57 92;M57 44Q59.42 68 57 92;M57 44Q59.42 68 57 92;M57 44Q58.66 68 57 92;M57 44Q57.1 68 57 92;M57 44Q55.09 68 57 92;M57 44Q53.28 68 57 92;M57 44Q52.28 68 57 92" dur="2.2s" repeatCount="indefinite"/></path>
</g>
<g class="hl-2">
  <rect class="fl-soft" x="60" y="57" width="21" height="22"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M60 57H81M60 79H81"/>
  <g class="fl-dark st-ink" stroke-width=".5"><g><animateTransform attributeName="transform" type="translate" values="-2.01 0;-1.94 0;-1.45 0;-0.75 0;-0.12 0;0.25 0;0.31 0;0.19 0;0.06 0;0.07 0;0.24 0;0.48 0;0.66 0;0.72 0;0.68 0;0.64 0;0.69 0;0.86 0;1.03 0;1.03 0;0.71 0;0.04 0;-0.81 0;-1.58 0;-2.01 0" dur="2.2s" repeatCount="indefinite"/><circle cx="64.6" cy="60.4" r="1.75"/><circle cx="64.6" cy="64.3" r="1.75"/><circle cx="64.6" cy="68.2" r="1.75"/><circle cx="64.6" cy="72.1" r="1.75"/><circle cx="64.6" cy="76" r="1.75"/></g><g><animateTransform attributeName="transform" type="translate" values="-1.42 0;-1.37 0;-1.02 0;-0.53 0;-0.09 0;0.17 0;0.22 0;0.13 0;0.05 0;0.05 0;0.17 0;0.34 0;0.47 0;0.51 0;0.48 0;0.45 0;0.49 0;0.61 0;0.73 0;0.73 0;0.5 0;0.03 0;-0.57 0;-1.12 0;-1.42 0" dur="2.2s" repeatCount="indefinite"/><circle cx="68.6" cy="60.4" r="1.75"/><circle cx="68.6" cy="64.3" r="1.75"/><circle cx="68.6" cy="68.2" r="1.75"/><circle cx="68.6" cy="72.1" r="1.75"/><circle cx="68.6" cy="76" r="1.75"/></g><g><animateTransform attributeName="transform" type="translate" values="-0.85 0;-0.82 0;-0.61 0;-0.32 0;-0.05 0;0.1 0;0.13 0;0.08 0;0.03 0;0.03 0;0.1 0;0.2 0;0.28 0;0.31 0;0.29 0;0.27 0;0.29 0;0.36 0;0.44 0;0.44 0;0.3 0;0.02 0;-0.34 0;-0.67 0;-0.85 0" dur="2.2s" repeatCount="indefinite"/><circle cx="72.6" cy="60.4" r="1.75"/><circle cx="72.6" cy="64.3" r="1.75"/><circle cx="72.6" cy="68.2" r="1.75"/><circle cx="72.6" cy="72.1" r="1.75"/><circle cx="72.6" cy="76" r="1.75"/></g><g><animateTransform attributeName="transform" type="translate" values="-0.33 0;-0.32 0;-0.24 0;-0.12 0;-0.02 0;0.04 0;0.05 0;0.03 0;0.01 0;0.01 0;0.04 0;0.08 0;0.11 0;0.12 0;0.11 0;0.1 0;0.11 0;0.14 0;0.17 0;0.17 0;0.12 0;0.01 0;-0.13 0;-0.26 0;-0.33 0" dur="2.2s" repeatCount="indefinite"/><circle cx="76.6" cy="60.4" r="1.75"/><circle cx="76.6" cy="64.3" r="1.75"/><circle cx="76.6" cy="68.2" r="1.75"/><circle cx="76.6" cy="72.1" r="1.75"/><circle cx="76.6" cy="76" r="1.75"/></g></g>
  <rect class="fl-elec st-ink" stroke-width=".9" x="58.3" y="61.5" width="3" height="13" rx=".8"><animateTransform attributeName="transform" type="translate" values="-2.36 0;-2.29 0;-1.71 0;-0.88 0;-0.14 0;0.29 0;0.37 0;0.22 0;0.08 0;0.09 0;0.28 0;0.56 0;0.78 0;0.85 0;0.8 0;0.75 0;0.81 0;1.01 0;1.21 0;1.21 0;0.83 0;0.05 0;-0.95 0;-1.86 0;-2.36 0" dur="2.2s" repeatCount="indefinite"/></rect>
  <rect class="fl-elec st-ink" stroke-width=".9" x="81" y="56" width="4" height="24" rx=".8"/>
  <rect class="fl-line st-ink" stroke-width=".9" x="85" y="66" width="8.5" height="4"/>
</g>
<!-- גלי לחץ שנכנסים למשפך -->
<g class="hl-1" clip-path="url(#telephone-horn)">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;10 0" dur="1.1s" repeatCount="indefinite"/>
    <path class="wire st-violet" style="stroke-width:1.8" d="M4 36Q10 68 4 100M14 36Q20 68 14 100M24 36Q30 68 24 100M34 36Q40 68 34 100M44 36Q50 68 44 100"/>
  </g>
</g>

<!-- ===== האפרכסת בחתך: אלקטרומגנט ולוחית ברזל דקה ===== -->
<g class="hl-4">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M276 38H218a4 4 0 0 0-4 4V94a4 4 0 0 0 4 4H276V92H220V44H276z"/>
  <path class="fl-warm" opacity=".5" d="M276 38H218a4 4 0 0 0-4 4V94a4 4 0 0 0 4 4H276V92H220V44H276z"/>
  <rect class="fl-panel" x="220.8" y="44.8" width="54" height="46.4"/>
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M277 38H292Q300 38 302 46V50Q292 52 286 63H277zM277 98H292Q300 98 302 90V86Q292 84 286 73H277z"/>
  <path class="wire st-ink" style="stroke-width:1.8" d="M256 44V55M256 81V92"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="220" y="64" width="50" height="8"/>
  <rect class="fl-warm st-ink" stroke-width="1.3" x="240" y="54" width="27" height="28" rx="2"/>
  <path class="st-ink fl-none" stroke-width=".7" opacity=".55" d="M243.4 54.5V81.5M246.8 54.5V81.5M250.2 54.5V81.5M253.6 54.5V81.5M257 54.5V81.5M260.4 54.5V81.5M263.8 54.5V81.5"/>
  <path class="wire st-hot" style="stroke-width:1.3" d="M270.8 65.2H273.6M270.8 68H273.6M270.8 70.8H273.6"><animate attributeName="opacity" values="0.11;0.12;0.23;0.38;0.52;0.6;0.62;0.59;0.56;0.57;0.6;0.66;0.7;0.71;0.7;0.69;0.7;0.74;0.78;0.78;0.71;0.56;0.37;0.2;0.11" dur="2.2s" repeatCount="indefinite"/></path>
  <path class="fl-none st-ink" stroke-width="2.2" stroke-linecap="round" d="M275 44Q275 68 275 92"><animate attributeName="d" values="M275 44Q278.54 68 275 92;M275 44Q278.43 68 275 92;M275 44Q277.56 68 275 92;M275 44Q276.33 68 275 92;M275 44Q275.21 68 275 92;M275 44Q274.57 68 275 92;M275 44Q274.45 68 275 92;M275 44Q274.66 68 275 92;M275 44Q274.89 68 275 92;M275 44Q274.87 68 275 92;M275 44Q274.58 68 275 92;M275 44Q274.16 68 275 92;M275 44Q273.83 68 275 92;M275 44Q273.72 68 275 92;M275 44Q273.8 68 275 92;M275 44Q273.88 68 275 92;M275 44Q273.78 68 275 92;M275 44Q273.49 68 275 92;M275 44Q273.18 68 275 92;M275 44Q273.18 68 275 92;M275 44Q273.75 68 275 92;M275 44Q274.93 68 275 92;M275 44Q276.43 68 275 92;M275 44Q277.79 68 275 92;M275 44Q278.54 68 275 92" dur="2.2s" repeatCount="indefinite"/></path>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;5 0" dur="1.1s" repeatCount="indefinite"/>
    <path class="wire st-violet" style="stroke-width:1.8" d="M302.5 61Q306 68 302.5 75"><animate attributeName="opacity" values="0;1" dur="1.1s" repeatCount="indefinite"/></path>
    <path class="wire st-violet" style="stroke-width:1.8" d="M307.5 59Q311.5 68 307.5 77"/>
    <path class="wire st-violet" style="stroke-width:1.8" d="M312.5 57Q317 68 312.5 79"><animate attributeName="opacity" values="1;0" dur="1.1s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- ===== שלושה גרפים באותה צורה: לחץ הקול, הזרם בקו, הקול שיוצא ===== -->
<g class="hl-1 hl-2">
  <rect class="fl-panel st-line" stroke-width="1.2" x="12" y="140" width="88" height="34" rx="5"/>
  <path class="thin" d="M17 157H95"/>
  <g clip-path="url(#telephone-c1)"><g><animateTransform attributeName="transform" type="translate" values="0 0;44 0" dur="2.2s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:2.2" d="M-28 152.55L-27 151.78L-26 151.53L-25 151.7L-24 152.13L-23 152.68L-22 153.18L-21 153.54L-20 153.71L-19 153.7L-18 153.56L-17 153.39L-16 153.28L-15 153.33L-14 153.58L-13 154.04L-12 154.65L-11 155.33L-10 155.97L-9 156.46L-8 156.72L-7 156.72L-6 156.48L-5 156.09L-4 155.68L-3 155.4L-2 155.41L-1 155.84L0 156.75L1 158.13L2 159.9L3 161.87L4 163.85L5 165.58L6 166.85L7 167.46L8 167.32L9 166.42L10 164.84L11 162.74L12 160.36L13 157.94L14 155.71L15 153.87L16 152.55L17 151.78L18 151.53L19 151.7L20 152.13L21 152.68L22 153.18L23 153.54L24 153.71L25 153.7L26 153.56L27 153.39L28 153.28L29 153.33L30 153.58L31 154.04L32 154.65L33 155.33L34 155.97L35 156.46L36 156.72L37 156.72L38 156.48L39 156.09L40 155.68L41 155.4L42 155.41L43 155.84L44 156.75L45 158.13L46 159.9L47 161.87L48 163.85L49 165.58L50 166.85L51 167.46L52 167.32L53 166.42L54 164.84L55 162.74L56 160.36L57 157.94L58 155.71L59 153.87L60 152.55L61 151.78L62 151.53L63 151.7L64 152.13L65 152.68L66 153.18L67 153.54L68 153.71L69 153.7L70 153.56L71 153.39L72 153.28L73 153.33L74 153.58L75 154.04L76 154.65L77 155.33L78 155.97L79 156.46L80 156.72L81 156.72L82 156.48L83 156.09L84 155.68L85 155.4L86 155.41L87 155.84L88 156.75L89 158.13L90 159.9L91 161.87L92 163.85L93 165.58L94 166.85L95 167.46L96 167.32"/></g></g>
</g>
<g class="hl-2 hl-3 hl-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="112" y="38" width="88" height="54" rx="5"/>
  <path class="thin st-ink" d="M120 43V86H196"/>
  <path class="thin" stroke-dasharray="2 3" d="M121 62H196"/>
  <g clip-path="url(#telephone-c2)"><g><animateTransform attributeName="transform" type="translate" values="0 0;44 0" dur="2.2s" repeatCount="indefinite"/><path class="wire st-warm" style="stroke-width:2.4" d="M77 56.49L78 55.54L79 55.23L80 55.44L81 55.98L82 56.65L83 57.27L84 57.72L85 57.93L86 57.91L87 57.74L88 57.53L89 57.4L90 57.46L91 57.77L92 58.33L93 59.09L94 59.93L95 60.72L96 61.33L97 61.65L98 61.65L99 61.36L100 60.88L101 60.36L102 60.02L103 60.03L104 60.56L105 61.69L106 63.4L107 65.58L108 68.03L109 70.48L110 72.63L111 74.19L112 74.95L113 74.78L114 73.66L115 71.71L116 69.11L117 66.16L118 63.16L119 60.4L120 58.12L121 56.49L122 55.54L123 55.23L124 55.44L125 55.98L126 56.65L127 57.27L128 57.72L129 57.93L130 57.91L131 57.74L132 57.53L133 57.4L134 57.46L135 57.77L136 58.33L137 59.09L138 59.93L139 60.72L140 61.33L141 61.65L142 61.65L143 61.36L144 60.88L145 60.36L146 60.02L147 60.03L148 60.56L149 61.69L150 63.4L151 65.58L152 68.03L153 70.48L154 72.63L155 74.19L156 74.95L157 74.78L158 73.66L159 71.71L160 69.11L161 66.16L162 63.16L163 60.4L164 58.12L165 56.49L166 55.54L167 55.23L168 55.44L169 55.98L170 56.65L171 57.27L172 57.72L173 57.93L174 57.91L175 57.74L176 57.53L177 57.4L178 57.46L179 57.77L180 58.33L181 59.09L182 59.93L183 60.72L184 61.33L185 61.65L186 61.65L187 61.36L188 60.88L189 60.36L190 60.02L191 60.03L192 60.56L193 61.69L194 63.4L195 65.58L196 68.03"/></g></g>
</g>
<g class="hl-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="214" y="140" width="88" height="34" rx="5"/>
  <path class="thin" d="M219 157H297"/>
  <g clip-path="url(#telephone-c3)"><g><animateTransform attributeName="transform" type="translate" values="0 0;44 0" dur="2.2s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:2.2" d="M174 152.55L175 151.78L176 151.53L177 151.7L178 152.13L179 152.68L180 153.18L181 153.54L182 153.71L183 153.7L184 153.56L185 153.39L186 153.28L187 153.33L188 153.58L189 154.04L190 154.65L191 155.33L192 155.97L193 156.46L194 156.72L195 156.72L196 156.48L197 156.09L198 155.68L199 155.4L200 155.41L201 155.84L202 156.75L203 158.13L204 159.9L205 161.87L206 163.85L207 165.58L208 166.85L209 167.46L210 167.32L211 166.42L212 164.84L213 162.74L214 160.36L215 157.94L216 155.71L217 153.87L218 152.55L219 151.78L220 151.53L221 151.7L222 152.13L223 152.68L224 153.18L225 153.54L226 153.71L227 153.7L228 153.56L229 153.39L230 153.28L231 153.33L232 153.58L233 154.04L234 154.65L235 155.33L236 155.97L237 156.46L238 156.72L239 156.72L240 156.48L241 156.09L242 155.68L243 155.4L244 155.41L245 155.84L246 156.75L247 158.13L248 159.9L249 161.87L250 163.85L251 165.58L252 166.85L253 167.46L254 167.32L255 166.42L256 164.84L257 162.74L258 160.36L259 157.94L260 155.71L261 153.87L262 152.55L263 151.78L264 151.53L265 151.7L266 152.13L267 152.68L268 153.18L269 153.54L270 153.71L271 153.7L272 153.56L273 153.39L274 153.28L275 153.33L276 153.58L277 154.04L278 154.65L279 155.33L280 155.97L281 156.46L282 156.72L283 156.72L284 156.48L285 156.09L286 155.68L287 155.4L288 155.41L289 155.84L290 156.75L291 158.13L292 159.9L293 161.87L294 163.85L295 165.58L296 166.85L297 167.46L298 167.32"/></g></g>
</g>

<g class="only-1">
  <text x="56" y="187" class="sm">לחץ האוויר: גל הקול</text>
  <text x="160" y="205">גלי הקול מרעידים קרום דק</text>
</g>
<g class="only-2">
  <text x="56" y="187" class="sm">גל הקול</text>
  <text x="156" y="104" class="sm">הזרם בקו</text>
  <text x="190" y="130" class="sm">סוללה</text>
  <rect class="fl-soft st-ink" stroke-width="1.2" x="108" y="141" width="42" height="20" rx="2"/><circle class="fl-dark st-ink" stroke-width=".5" cx="114.6" cy="146" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="125.16" cy="147.44" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="135.24" cy="145.52" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="143.4" cy="147.92" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="119.4" cy="151.76" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="129.96" cy="150.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="139.56" cy="152.24" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="115.08" cy="156.08" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="124.68" cy="155.6" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="134.76" cy="156.56" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="143.4" cy="155.12" r="2.1"/><rect class="fl-soft st-ink" stroke-width="1.2" x="164" y="141" width="42" height="20" rx="2"/><circle class="fl-dark st-ink" stroke-width=".5" cx="170.6" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="175.4" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="180.2" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="185" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="189.8" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="194.6" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="199.4" cy="146.2" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="170.6" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="175.4" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="180.2" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="185" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="189.8" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="194.6" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="199.4" cy="151" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="170.6" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="175.4" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="180.2" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="185" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="189.8" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="194.6" cy="155.8" r="2.1"/><circle class="fl-dark st-ink" stroke-width=".5" cx="199.4" cy="155.8" r="2.1"/>
  <path class="fl-warm st-ink" stroke-width=".8" stroke-linejoin="round" d="M114 167.2H136V165L142 168L136 171V168.8H114z"/>
  <path class="fl-warm st-ink" stroke-width=".8" stroke-linejoin="round" d="M170 165.5H190V162L199 168L190 174V170.5H170z"/>
  <text x="129" y="187" class="sm">זרם חלש</text>
  <text x="185" y="187" class="sm">זרם חזק</text>
  <text x="160" y="205">הקרום דוחס גרגרי פחם, והזרם עולה ויורד</text>
</g>
<g class="only-3">
  <text x="156" y="104" class="sm">הזרם בקו</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M140 16H180" marker-end="url(#telephone-a)"/>
  <text x="157" y="156" class="sm">השיחה הראשונה</text>
  <text x="157" y="170" class="lg">בוסטון · 1876</text>
  <text x="160" y="205">הזרם נושא בחוט את צורת הגל כולה</text>
</g>
<g class="only-4">
  <text x="156" y="104" class="sm">הזרם בקו</text>
  <text x="258" y="187" class="sm">אותו גל קול בדיוק</text>
  <text x="243" y="126" class="sm" >אלקטרומגנט</text>
  <text x="160" y="205">האלקטרומגנט מושך לוחית ברזל, והיא רוטטת</text>
</g>
`;
