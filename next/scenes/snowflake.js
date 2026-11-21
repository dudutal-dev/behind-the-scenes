// פתית שלג. 1 גרגר בענן קר ואדים שקופאים עליו · 2 טבעות משושות של מולקולות מים · 3 הטמפרטורה קובעת צורה (דיאגרמת נקאיה) · 4 מסלול שונה, פתית שונה
export default `
<!-- שלב 1: ענן קר, טיפות קפואות־על וגרעין -->
<g class="hl-1">
  <path class="fl-soft st-line" stroke-width="1.5" d="M18 78Q4 78 4 64Q4 52 16 50Q14 32 32 30Q38 14 58 16Q72 6 88 18Q106 16 108 34Q116 44 110 58Q114 78 96 78z"/>
  <circle class="fl-cold-soft st-cold" stroke-width="1" cx="22" cy="62" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="34" cy="40" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="88" cy="30" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="96" cy="64" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="70" cy="66" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="62" cy="26" r="3"/><circle class="fl-cold-soft st-cold" stroke-width="1" cx="80" cy="48" r="3"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M50 39L42.2 43.5L42.2 52.5L50 57L57.8 52.5L57.8 43.5z">
    <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1" dur="1s"/>
  </path>
  <circle class="fl-dark" cx="50" cy="48" r="3"/>
</g>
<g class="only-1">
  <circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-0.00s" repeatCount="indefinite" path="M14 20L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-0.00s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-0.27s" repeatCount="indefinite" path="M96 24L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-0.27s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-0.54s" repeatCount="indefinite" path="M20 64L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-0.54s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-0.81s" repeatCount="indefinite" path="M100 60L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-0.81s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-1.08s" repeatCount="indefinite" path="M58 12L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-1.08s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.6s" begin="-1.35s" repeatCount="indefinite" path="M70 72L50 48"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur="1.6s" begin="-1.35s" repeatCount="indefinite"/></circle>
  <circle class="ring st-cold" cx="50" cy="48" r="16"/>
</g>

<!-- הגביש: ליבה משושה וזרועות מסועפות -->
<g class="hl-3">
  <path class="wire st-cold" style="stroke-width:2.6" d="M168 64L168 14M168 41.5L179.3 35M168 41.5L156.7 35M168 28L175.9 23.5M168 28L160.1 23.5M168 64L124.7 39M148.5 52.8L148.5 39.8M148.5 52.8L137.2 59.3M136.8 46L136.8 36.9M136.8 46L128.9 50.5M168 64L124.7 89M148.5 75.3L137.2 68.8M148.5 75.3L148.5 88.3M136.8 82L128.9 77.5M136.8 82L136.8 91.1M168 64L168 114M168 86.5L156.7 93M168 86.5L179.3 93M168 100L160.1 104.5M168 100L175.9 104.6M168 64L211.3 89M187.5 75.3L187.5 88.3M187.5 75.3L198.8 68.8M199.2 82L199.2 91.1M199.2 82L207.1 77.5M168 64L211.3 39M187.5 52.8L198.8 59.3M187.5 52.8L187.5 39.8M199.2 46L207.1 50.6M199.2 46L199.2 36.9"/>
</g>
<g class="hl-2">
  <path class="fl-cold-soft st-cold" stroke-width="2" d="M168 40L147.2 52L147.2 76L168 88L188.8 76L188.8 52z"/>
</g>
<g class="only-2">
  <path class="wire st-cold" style="stroke-width:1.2;stroke-dasharray:1.5 2" d="M168 51L156.7 57.5M156.7 57.5L156.7 70.5M156.7 70.5L168 77M168 77L179.3 70.5M179.3 70.5L179.3 57.5M179.3 57.5L168 51"/>
  <path class="wire st-ink" style="stroke-width:1" d="M168 51L164.6 53M168 51L168 44.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="164.6" cy="53" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="168" cy="44.5" r="1.5"/><path class="wire st-ink" style="stroke-width:1" d="M156.7 57.5L156.7 61.4M156.7 57.5L151.1 54.3"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="156.7" cy="61.4" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="151.1" cy="54.3" r="1.5"/><path class="wire st-ink" style="stroke-width:1" d="M156.7 70.5L160.1 72.5M156.7 70.5L151.1 73.8"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="160.1" cy="72.5" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="151.1" cy="73.8" r="1.5"/><path class="wire st-ink" style="stroke-width:1" d="M168 77L171.4 75M168 77L168 83.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="171.4" cy="75" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="168" cy="83.5" r="1.5"/><path class="wire st-ink" style="stroke-width:1" d="M179.3 70.5L179.3 66.6M179.3 70.5L184.9 73.8"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="179.3" cy="66.6" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="184.9" cy="73.8" r="1.5"/><path class="wire st-ink" style="stroke-width:1" d="M179.3 57.5L175.9 55.5M179.3 57.5L184.9 54.3"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="175.9" cy="55.5" r="1.5"/><circle fill="#fff" class="st-ink" stroke-width=".8" cx="184.9" cy="54.3" r="1.5"/>
  <circle class="fl-hot" cx="168" cy="51" r="3.4"/><circle class="fl-hot" cx="156.7" cy="57.5" r="3.4"/><circle class="fl-hot" cx="156.7" cy="70.5" r="3.4"/><circle class="fl-hot" cx="168" cy="77" r="3.4"/><circle class="fl-hot" cx="179.3" cy="70.5" r="3.4"/><circle class="fl-hot" cx="179.3" cy="57.5" r="3.4"/>
  <circle class="ring st-cold" cx="168" cy="64" r="28"/>
</g>
<g class="only-3">
  <circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-0.00s" repeatCount="indefinite" path="M153.7 6.8L168 13"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-0.00s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-0.21s" repeatCount="indefinite" path="M111.3 47.7L123.8 38.5"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-0.21s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-0.42s" repeatCount="indefinite" path="M125.6 105L123.8 89.5"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-0.42s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-0.63s" repeatCount="indefinite" path="M182.3 121.2L168 115"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-0.63s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-0.84s" repeatCount="indefinite" path="M224.7 80.3L212.2 89.5"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-0.84s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.8"><animateMotion dur="1.3s" begin="-1.05s" repeatCount="indefinite" path="M210.4 23L212.2 38.5"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.85;1" dur="1.3s" begin="-1.05s" repeatCount="indefinite"/></circle>
</g>

<!-- דיאגרמת נקאיה: צורה לפי טמפרטורה -->
<g class="hl-3">
  <path class="thin st-ink" d="M14 194H210"/>
  <path class="thin st-ink" d="M22 194v4"/><path class="thin st-ink" d="M58 194v4"/><path class="thin st-ink" d="M94 194v4"/><path class="thin st-ink" d="M130 194v4"/><path class="thin st-ink" d="M166 194v4"/><path class="thin st-ink" d="M202 194v4"/>
  <text x="22" y="210" class="sm" direction="ltr">0°</text><text x="58" y="210" class="sm" direction="ltr">−5°</text><text x="130" y="210" class="sm" direction="ltr">−15°</text><text x="202" y="210" class="sm" direction="ltr">−25°</text>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M45.4 174L40.9 166.2L31.9 166.2L27.4 174L31.9 181.8L40.9 181.8z"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M58.1 163h7v22h-7z"/><path class="wire st-cold" style="stroke-width:1" d="M58.1 166h7M58.1 182h7M61.6 163v22"/>
  <path class="wire st-cold" style="stroke-width:1.8" d="M130 174L130 161M130 167.5L133.4 165.6M130 167.5L126.6 165.6M130 164.3L132.4 162.9M130 164.3L127.6 162.9M130 174L118.7 167.5M124.4 170.8L124.4 166.9M124.4 170.8L121 172.8M121.6 169.1L121.6 166.4M121.6 169.1L119.2 170.5M130 174L118.7 180.5M124.4 177.3L121 175.4M124.4 177.3L124.4 181.2M121.6 178.9L119.2 177.5M121.6 178.9L121.6 181.6M130 174L130 187M130 180.5L126.6 182.4M130 180.5L133.4 182.4M130 183.8L127.6 185.2M130 183.8L132.4 185.2M130 174L141.3 180.5M135.6 177.3L135.6 181.2M135.6 177.3L139 175.4M138.4 178.9L138.4 181.6M138.4 178.9L140.8 177.5M130 174L141.3 167.5M135.6 170.8L139 172.8M135.6 170.8L135.6 166.9M138.4 169.1L140.8 170.5M138.4 169.1L138.4 166.4"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M197.5 169h9v14h-9z"/><path class="wire st-cold" style="stroke-width:1" d="M197.5 172h9M197.5 180h9M202 169v14"/>
</g>

<!-- שלב 4: שני פתיתים, שני מסלולים דרך שכבות שונות -->
<g class="hl-4">
  <rect class="fl-cold-soft" x="228" y="6" width="88" height="56" rx="4"/>
  <rect class="fl-soft" x="228" y="66" width="88" height="56" rx="4"/>
  <rect class="fl-cold-soft" x="228" y="126" width="88" height="56" rx="4"/>
  <text x="272" y="38" class="sm" direction="ltr">−15°</text>
  <text x="272" y="98" class="sm" direction="ltr">−5°</text>
  <text x="272" y="158" class="sm" direction="ltr">−12°</text>
  <path class="thin" style="stroke-dasharray:2 3" d="M246 8C260 30 232 52 246 74C258 96 234 118 248 140C256 156 240 170 246 180"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M298 8C292 40 306 60 296 90C288 120 308 140 298 180"/>
  <path class="wire st-cold" style="stroke-width:2" d="M246 200L246 187M246 194.2L248.9 192.5M246 194.2L243.1 192.5M246 190.6L248 189.4M246 190.6L244 189.4M246 200L234.7 193.5M240.9 197.1L240.9 193.7M240.9 197.1L238 198.8M237.9 195.3L237.9 192.9M237.9 195.3L235.9 196.5M246 200L234.7 206.5M240.9 202.9L238 201.2M240.9 202.9L240.9 206.3M237.9 204.7L235.9 203.5M237.9 204.7L237.9 207.1M246 200L246 213M246 205.8L243.1 207.5M246 205.8L248.9 207.5M246 209.4L244 210.6M246 209.4L248 210.6M246 200L257.3 206.5M251.1 202.9L251.1 206.3M251.1 202.9L254 201.2M254.1 204.7L254.1 207.1M254.1 204.7L256.1 203.5M246 200L257.3 193.5M251.1 197.1L254 198.8M251.1 197.1L251.1 193.7M254.1 195.3L256.1 196.5M254.1 195.3L254.1 192.9"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M294 187h8v18h-8z"/><path class="wire st-cold" style="stroke-width:1" d="M294 190h8M294 202h8M298 187v18"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M306 185L302 178.1L294 178.1L290 185L294 191.9L302 191.9z"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M306 207L302 200.1L294 200.1L290 207L294 213.9L302 213.9z"/>
</g>
<g class="only-4">
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M0 -4.5L-3.9 -2.2L-3.9 2.3L0 4.5L3.9 2.3L3.9 -2.3z"><animateMotion dur="4s" repeatCount="indefinite" path="M246 8C260 30 232 52 246 74C258 96 234 118 248 140C256 156 240 170 246 180"/></path>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M0 -4.5L-3.9 -2.2L-3.9 2.3L0 4.5L3.9 2.3L3.9 -2.3z"><animateMotion dur="4s" begin="-1.5s" repeatCount="indefinite" path="M298 8C292 40 306 60 296 90C288 120 308 140 298 180"/></path>
</g>

<!-- כיתובים -->
<g class="only-1"><text x="112" y="134">גרגר אבק בענן קר:</text><text x="112" y="149">האדים קופאים עליו ישר</text></g>
<g class="only-2"><text x="112" y="134">מולקולות המים נקשרות</text><text x="112" y="149">בטבעות של שש</text></g>
<g class="only-3"><text x="112" y="134">הטמפרטורה קובעת צורה,</text><text x="112" y="149">הלחות מסעפת זרועות</text></g>
<g class="only-4"><text x="112" y="134">כל פתית נופל במסלול אחר</text><text x="112" y="149">ולכן גדל בצורה אחרת</text></g>
`;
