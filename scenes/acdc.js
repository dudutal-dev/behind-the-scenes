// זרם ישר וזרם חילופין: 1 סוללה, אלקטרונים בכיוון אחד ומתח קבוע · 2 גנרטור, אלקטרונים רוטטים וגל סינוס · 3 תחנה כל 1.5 ק״מ מול שנאים וקו מתח גבוה · 4 שקע, מטען ממיר, סוללה
export default `
<defs>
  <marker id="acdc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="acdc-tube"><rect x="21" y="133" width="120" height="16" rx="8"/></clipPath>
</defs>

<!-- ===== זרם ישר: סוללה, מנורה, אלקטרונים שנסחפים בכיוון אחד ===== -->
<g class="hl-1 hl-3">
  <path class="wire st-ink" d="M27 88V112H134V20H27V40"/>
  <g><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-0s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-1s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-2s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-3s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-4s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-5s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-6s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-7s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-8s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-9s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-10s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-11s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-12s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-13s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-14s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-15s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-16s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-17s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-18s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-19s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-20s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-21s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-22s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="24s" begin="-23s" repeatCount="indefinite" path="M27 88V112H134V20H27V40"/></circle></g>
  <!-- סוללה: הקוטב החיובי למעלה -->
  <rect class="fl-ink" x="22" y="39" width="10" height="6" rx="1.5"/>
  <rect class="body" x="14" y="44" width="26" height="44" rx="4"/>
  <path class="fl-hot" d="M15 59V48a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v11z"/>
  <path class="thin st-ink" d="M14 59H40"/>
  <rect class="fl-none st-ink" stroke-width="2" x="14" y="44" width="26" height="44" rx="4"/>
  <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M23 52h8M27 48v8"/>
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M22 75h10"/>
  
  <circle class="fl-elec pulse" opacity=".3" cx="134" cy="66" r="18"/>
  <circle class="fl-panel" cx="134" cy="66" r="12"/>
  <circle class="fl-elec st-ink" fill-opacity=".8" stroke-width="2" cx="134" cy="66" r="12"/>
  <path class="st-ink fl-none" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M134 78V74L130 71L138 67L130 63L138 59L134 57V54"/>
</g>
<!-- גרף מתח מול זמן: קו ישר -->
<g class="hl-1 hl-3 hl-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="52" y="34" width="62" height="64" rx="5"/>
  <path class="thin" d="M59 41V91M59 66H109"/>
  <path class="wire st-warm" d="M60 48H108"/>
  <circle class="fl-warm st-ink" stroke-width=".8" r="2.6" cx="60" cy="48"><animate attributeName="cx" values="60;108" dur="4.8s" repeatCount="indefinite"/></circle>
</g>

<!-- ===== זרם חילופין: גנרטור, מנורה, אלקטרונים שרוטטים במקומם ===== -->
<g class="hl-2 hl-3">
  <path class="wire st-ink" d="M187 88V112H294V20H187V44"/>
  <g><animateTransform attributeName="transform" type="translate" values="5 0;-5 0;5 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="201" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="214.5" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="228" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="241.5" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="255" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="268.5" cy="20" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="282" cy="20" r="2.6"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="-5 0;5 0;-5 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="201" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="214.5" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="228" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="241.5" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="255" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="268.5" cy="112" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="282" cy="112" r="2.6"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 5;0 -5;0 5" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="294" cy="33" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="294" cy="45" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="294" cy="87" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="294" cy="99" r="2.6"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 -5;0 5;0 -5" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="187" cy="32" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="187" cy="100" r="2.6"/></g>
  <!-- גנרטור: מגנט מסתובב בין שני סלילים, סיבוב אחד לכל מחזור -->
  <circle class="body" cx="187" cy="66" r="22"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="167.5" y="57" width="6" height="18" rx="2"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="200.5" y="57" width="6" height="18" rx="2"/>
  <path class="thin st-ink" style="stroke-width:1" d="M167.5 61.5h6M167.5 66h6M167.5 70.5h6M200.5 61.5h6M200.5 66h6M200.5 70.5h6"/>
  <g><animateTransform attributeName="transform" type="rotate" from="0 187 66" to="360 187 66" dur="2.4s" repeatCount="indefinite"/>
    <rect class="fl-hot" x="176" y="61.5" width="11" height="9"/><rect class="fl-cold" x="187" y="61.5" width="11" height="9"/>
    <rect class="fl-none st-ink" stroke-width="1.5" x="176" y="61.5" width="22" height="9" rx="1"/>
    <circle class="fl-ink" cx="187" cy="66" r="2"/>
  </g>
  
  <circle class="fl-elec pulse" opacity=".3" cx="294" cy="66" r="18"/>
  <circle class="fl-panel" cx="294" cy="66" r="12"/>
  <circle class="fl-elec st-ink" fill-opacity=".8" stroke-width="2" cx="294" cy="66" r="12"/>
  <path class="st-ink fl-none" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M294 78V74L290 71L298 67L290 63L298 59L294 57V54"/>
</g>
<!-- גרף מתח מול זמן: גל סינוס באותו קצב של האלקטרונים -->
<g class="hl-2 hl-3 hl-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="214" y="34" width="62" height="64" rx="5"/>
  <path class="thin" d="M221 41V80M221 60H271"/>
  <path class="wire st-violet" d="M222 60L223 56.12L224 52.5L225 49.39L226 47.01L227 45.51L228 45L229 45.51L230 47.01L231 49.39L232 52.5L233 56.12L234 60L235 63.88L236 67.5L237 70.61L238 72.99L239 74.49L240 75L241 74.49L242 72.99L243 70.61L244 67.5L245 63.88L246 60L247 56.12L248 52.5L249 49.39L250 47.01L251 45.51L252 45L253 45.51L254 47.01L255 49.39L256 52.5L257 56.12L258 60L259 63.88L260 67.5L261 70.61L262 72.99L263 74.49L264 75L265 74.49L266 72.99L267 70.61L268 67.5L269 63.88L270 60"/>
  <circle class="fl-violet st-ink" stroke-width=".8" r="2.6" cx="222" cy="60"><animate attributeName="cx" values="222;270" dur="4.8s" repeatCount="indefinite"/><animate attributeName="cy" values="60;45;60;75;60" keyTimes="0;.25;.5;.75;1" calcMode="spline" keySplines=".333 .524 .667 1;.333 0 .667 .476;.333 .524 .667 1;.333 0 .667 .476" dur="2.4s" repeatCount="indefinite"/></circle>
</g>

<!-- ===== שלב 1 ===== -->
<g class="only-1">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M100 27H64" marker-end="url(#acdc-a)"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M64 105H100" marker-end="url(#acdc-a)"/>
  <!-- מבט מקרוב על החוט: כולם נסחפים לאותו כיוון -->
  <rect class="fl-soft st-ink" stroke-width="1.5" x="21" y="133" width="120" height="16" rx="8"/>
  <g clip-path="url(#acdc-tube)"><g><animateTransform attributeName="transform" type="translate" values="0 0;20 0" dur="1.6s" repeatCount="indefinite"/>
    <circle class="fl-elec st-ink" stroke-width=".8" cx="-9" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="11" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="31" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="51" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="71" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="91" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="111" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="131" cy="141" r="3.6"/>
  </g></g>
  <rect class="fl-none st-ink" stroke-width="1.5" x="21" y="133" width="120" height="16" rx="8"/>
  <text x="81" y="170">האלקטרונים נעים לכיוון אחד</text>
  <text x="81" y="186">והמתח נשאר קבוע</text>
  <!-- נורת להט של התקופה -->
  <path class="fl-elec fade" opacity=".5" d="M190 136C177 136 174 151 181 161C184 166 185 169 185 174H195C195 169 196 166 199 161C206 151 203 136 190 136z"/>
  <path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M190 136C177 136 174 151 181 161C184 166 185 169 185 174H195C195 169 196 166 199 161C206 151 203 136 190 136z"/>
  <path class="fl-none st-hot" stroke-width="1.4" stroke-linecap="round" d="M187.5 174V156C187.5 147 192.5 147 192.5 156V174"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="184.5" y="174" width="11" height="11" rx="1.5"/>
  <path fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1" d="M185.5 177.5h9M185.5 181h9"/>
  <path class="fl-ink" d="M187.5 185h5l-1 3.5h-3z"/>
  <text x="190" y="204" class="lg">1882</text>
  <text x="258" y="156">הרשת הראשונה</text>
  <text x="258" y="172">של אדיסון</text>
  <text x="258" y="188" class="sm">ניו יורק</text>
</g>

<!-- ===== שלב 2 ===== -->
<g class="only-2">
  <path class="thin st-ink" d="M222 80V83H246V80"/>
  <text x="245" y="94" class="sm" style="stroke:var(--s-panel)">1/50 שנייה</text>
  <!-- מבט מקרוב: כל אלקטרון רוטט סביב מקומו -->
  <rect class="fl-soft st-ink" stroke-width="1.5" x="180" y="133" width="120" height="16" rx="8"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M200 129v3M200 150v3M220 129v3M220 150v3M240 129v3M240 150v3M260 129v3M260 150v3M280 129v3M280 150v3"/>
  <g><animateTransform attributeName="transform" type="translate" values="-6 0;6 0;-6 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="200" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="220" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="240" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="260" cy="141" r="3.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="280" cy="141" r="3.6"/></g>
  <text x="240" y="172">האלקטרונים רוטטים במקומם</text>
  <text x="240" y="188">50 מחזורים בשנייה</text>
  <text x="240" y="205" class="sm">מגנט מסתובב ליד סלילים: גנרטור</text>
</g>

<!-- ===== שלב 3: שתי שיטות חלוקה ===== -->
<g class="only-3">
  <text x="81" y="139">אדיסון</text>
  <text x="240" y="139">טסלה · וסטינגהאוס</text>
  <!-- זרם ישר במתח נמוך: תחנה קטנה כל קילומטר וחצי, והאספקה דועכת עם המרחק -->
  <path class="thin" d="M8 186H154"/>
  <circle class="ring st-warm" cx="32" cy="180" r="23"/>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M32 190H23"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M23 190H15"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M15 190H9"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M32 190H9"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="-.9s" repeatCount="indefinite"/></circle>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M32 190H41"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M41 190H49"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M49 190H56.5"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M32 190H56"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="0s" repeatCount="indefinite"/></circle>
  <circle class="ring st-warm" cx="81" cy="180" r="23"/>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M81 190H72"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M72 190H64"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M64 190H56.5"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M81 190H57"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="-.9s" repeatCount="indefinite"/></circle>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M81 190H90"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M90 190H98"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M98 190H105.5"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M81 190H105"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="0s" repeatCount="indefinite"/></circle>
  <circle class="ring st-warm" cx="130" cy="180" r="23"/>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M130 190H121"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M121 190H113"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M113 190H105.5"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="-.9s" repeatCount="indefinite" path="M130 190H106"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="-.9s" repeatCount="indefinite"/></circle>
  <path class="wire st-warm" stroke-opacity="1" style="stroke-linecap:butt" d="M130 190H139"/><path class="wire st-warm" stroke-opacity="0.55" style="stroke-linecap:butt" d="M139 190H147"/><path class="wire st-warm" stroke-opacity="0.22" style="stroke-linecap:butt" d="M147 190H153"/>
  <circle class="fl-warm" r="2.2"><animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M130 190H153"/><animate attributeName="opacity" values="1;.05" dur="1.8s" begin="0s" repeatCount="indefinite"/></circle>
  <rect class="body" style="stroke-width:1.2" x="14" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M12.5 177L18 171.5L23.5 177z"/><rect class="fl-elec" opacity="1" x="16" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="40" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M38.5 177L44 171.5L49.5 177z"/><rect class="fl-elec" opacity="1" x="42" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="52.5" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M51 177L56.5 171.5L62 177z"/><rect class="fl-elec" opacity="0.25" x="54.5" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="65" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M63.5 177L69 171.5L74.5 177z"/><rect class="fl-elec" opacity="1" x="67" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="89" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M87.5 177L93 171.5L98.5 177z"/><rect class="fl-elec" opacity="1" x="91" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="101.5" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M100 177L105.5 171.5L111 177z"/><rect class="fl-elec" opacity="0.25" x="103.5" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="114" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M112.5 177L118 171.5L123.5 177z"/><rect class="fl-elec" opacity="1" x="116" y="179.5" width="4" height="4"/><rect class="body" style="stroke-width:1.2" x="140" y="177" width="8" height="9"/><path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M138.5 177L144 171.5L149.5 177z"/><rect class="fl-elec" opacity="1" x="142" y="179.5" width="4" height="4"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="33.5" y="162" width="4" height="11"/><rect class="fl-dark st-ink" stroke-width="1.5" x="25" y="172" width="14" height="14" rx="1"/><path class="fl-elec" d="M31.5 174.5l-4 5.5h3l-1.5 4.5 4.5-6h-3l1.5-4z"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="82.5" y="162" width="4" height="11"/><rect class="fl-dark st-ink" stroke-width="1.5" x="74" y="172" width="14" height="14" rx="1"/><path class="fl-elec" d="M80.5 174.5l-4 5.5h3l-1.5 4.5 4.5-6h-3l1.5-4z"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="131.5" y="162" width="4" height="11"/><rect class="fl-dark st-ink" stroke-width="1.5" x="123" y="172" width="14" height="14" rx="1"/><path class="fl-elec" d="M129.5 174.5l-4 5.5h3l-1.5 4.5 4.5-6h-3l1.5-4z"/>
  <path class="thin st-ink" d="M34 196.5H79" marker-start="url(#acdc-a)" marker-end="url(#acdc-a)"/>
  <path class="thin st-ink" d="M32 193v7M81 193v7"/>
  <text x="81" y="212">תחנת כוח כל 1.5 ק״מ</text>

  <!-- זרם חילופין: תחנה אחת, שנאי מעלה, קו מתח גבוה, שנאי מוריד, עיר שלמה -->
  <path class="thin" d="M166 186H314"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="172" y="156" width="4" height="13"/><rect class="fl-dark st-ink" stroke-width="1.5" x="180" y="156" width="4" height="13"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="169" y="168" width="18" height="18" rx="1"/>
  <path class="fl-elec" d="M178.5 170.5l-5 7h3.6l-1.8 6 5.6-8h-3.6l1.8-5z"/>
  <path class="wire st-warm" d="M187 180H193M275 180H280"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M197 173V167Q206 165 216 156Q233 167 250 156Q262 165 271 167V173"/>
  <path class="wire st-ink" style="stroke-width:1.6" d="M211 186L216 151L221 186M209 156H223M213.5 170H218.5M250 151L245 186M250 151L255 186M243 156H257M247.5 170H252.5"/>
  <rect class="fl-bg st-dark" stroke-width="2.5" x="193" y="173" width="8" height="13" rx="1"/>
  <rect class="fl-bg st-dark" stroke-width="2.5" x="267" y="173" width="8" height="13" rx="1"/>
  <path class="wire st-hot" style="stroke-width:1.2" d="M199 176h4M199 179h4M199 182h4M265 176h4M265 179h4M265 182h4"/>
  <g class="fl-elec st-ink" stroke-width=".8">
    <circle r="2.6"><animateMotion dur="2.1s" begin="-0s" repeatCount="indefinite" path="M197 173V167Q206 165 216 156Q233 167 250 156Q262 165 271 167V173"/></circle><circle r="2.6"><animateMotion dur="2.1s" begin="-0.7s" repeatCount="indefinite" path="M197 173V167Q206 165 216 156Q233 167 250 156Q262 165 271 167V173"/></circle><circle r="2.6"><animateMotion dur="2.1s" begin="-1.4s" repeatCount="indefinite" path="M197 173V167Q206 165 216 156Q233 167 250 156Q262 165 271 167V173"/></circle>
  </g>
  <!-- העיר כולה מוארת -->
  <rect class="body" style="stroke-width:1.5" x="281" y="170" width="8" height="16"/>
  <rect class="body" style="stroke-width:1.5" x="289" y="157" width="10" height="29"/>
  <rect class="body" style="stroke-width:1.5" x="299" y="174" width="6" height="12"/>
  <rect class="body" style="stroke-width:1.5" x="305" y="164" width="8" height="22"/>
  <path class="fl-elec" d="M283.5 173h3v3h-3zM283.5 179h3v3h-3zM291.5 160h2.5v3h-2.5zM295.5 160h2v3h-2zM291.5 166h2.5v3h-2.5zM295.5 166h2v3h-2zM291.5 172h2.5v3h-2.5zM295.5 172h2v3h-2zM291.5 178h2.5v3h-2.5zM295.5 178h2v3h-2zM300.7 177h2.6v3h-2.6zM307.5 167h3v3h-3zM307.5 173h3v3h-3zM307.5 179h3v3h-3z"/>
  <text x="197" y="198" class="sm">שנאי מעלה</text>
  <text x="271" y="198" class="sm">שנאי מוריד</text>
  <text x="240" y="212">תחנה אחת לעיר שלמה</text>
</g>

<!-- ===== שלב 4: מהשקע (חילופין) דרך הממיר שבמטען אל הסוללה (ישר) ===== -->
<g class="from-4">
  <path class="wire st-violet" d="M47 182H122"/>
  <path class="wire st-warm" d="M178 182H264"/>
  <g><animateTransform attributeName="transform" type="translate" values="-4 0;4 0;-4 0" keyTimes="0;.5;1" calcMode="spline" keySplines=".364 0 .636 1;.364 0 .636 1" dur="2.4s" repeatCount="indefinite"/><circle class="fl-elec st-ink" stroke-width=".8" cx="57" cy="182" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="70" cy="182" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="83" cy="182" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="96" cy="182" r="2.6"/><circle class="fl-elec st-ink" stroke-width=".8" cx="109" cy="182" r="2.6"/></g>
  <g><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="5s" begin="-0s" repeatCount="indefinite" path="M180 182H262"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="5s" begin="-1s" repeatCount="indefinite" path="M180 182H262"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="5s" begin="-2s" repeatCount="indefinite" path="M180 182H262"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="5s" begin="-3s" repeatCount="indefinite" path="M180 182H262"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="5s" begin="-4s" repeatCount="indefinite" path="M180 182H262"/></circle></g>
  <!-- שקע -->
  <rect class="body" x="13" y="165" width="34" height="34" rx="6"/>
  <circle class="fl-soft st-ink" stroke-width="1.5" cx="30" cy="182" r="12"/>
  <circle class="fl-ink" cx="24.5" cy="178.5" r="1.9"/><circle class="fl-ink" cx="35.5" cy="178.5" r="1.9"/><circle class="fl-ink" cx="30" cy="187.5" r="1.9"/>
  <!-- מטען: שנאי קטן ומיישר -->
  <rect class="body" x="122" y="164" width="56" height="36" rx="6"/>
  <path class="wire st-violet" style="stroke-width:1.8" d="M128 182H134M134 171q-5 2.75 0 5.5q-5 2.75 0 5.5q-5 2.75 0 5.5q-5 2.75 0 5.5"/>
  <path class="thin st-ink" d="M137 171V193M139.5 171V193"/>
  <path class="wire st-warm" style="stroke-width:1.8" d="M142.5 174q5 2.75 0 5.5q5 2.75 0 5.5q5 2.75 0 5.5M146 182H154M165 182H172"/>
  <path class="fl-ink st-ink" stroke-width="1" stroke-linejoin="round" d="M154 175v14l10.5-7z"/>
  <path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M165.5 175v14"/>
  <!-- צורת הגל לפני ואחרי -->
  <rect class="fl-panel st-line" stroke-width="1.2" x="57" y="145" width="54" height="25" rx="5"/>
  <path class="thin" d="M61 157.5H107"/>
  <path class="wire st-violet" style="stroke-width:2" d="M61 157.5L62 155.34L63 153.34L64 151.65L65 150.4L66 149.67L67 149.52L68 149.96L69 150.96L70 152.45L71 154.31L72 156.41L73 158.59L74 160.69L75 162.55L76 164.04L77 165.04L78 165.48L79 165.33L80 164.6L81 163.35L82 161.66L83 159.66L84 157.5L85 155.34L86 153.34L87 151.65L88 150.4L89 149.67L90 149.52L91 149.96L92 150.96L93 152.45L94 154.31L95 156.41L96 158.59L97 160.69L98 162.55L99 164.04L100 165.04L101 165.48L102 165.33L103 164.6L104 163.35L105 161.66L106 159.66L107 157.5"/>
  <circle class="fl-violet st-ink" stroke-width=".8" r="2.3" cx="61" cy="157.5"><animate attributeName="cx" values="61;107" dur="4.8s" repeatCount="indefinite"/><animate attributeName="cy" values="157.5;149.5;157.5;165.5;157.5" keyTimes="0;.25;.5;.75;1" calcMode="spline" keySplines=".333 .524 .667 1;.333 0 .667 .476;.333 .524 .667 1;.333 0 .667 .476" dur="2.4s" repeatCount="indefinite"/></circle>
  <rect class="fl-panel st-line" stroke-width="1.2" x="194" y="145" width="54" height="25" rx="5"/>
  <path class="thin" d="M198 157.5H244"/>
  <path class="wire st-warm" style="stroke-width:2" d="M198 150.5H244"/>
  <circle class="fl-warm st-ink" stroke-width=".8" r="2.3" cx="198" cy="150.5"><animate attributeName="cx" values="198;244" dur="4.8s" repeatCount="indefinite"/></circle>
  <!-- טלפון וסוללה נטענת -->
  <rect class="fl-dark st-ink" stroke-width="2" x="264" y="150" width="30" height="54" rx="5"/>
  <rect class="fl-soft" x="267" y="155" width="24" height="43" rx="2"/>
  <rect class="fl-ink" x="276.5" y="163" width="5" height="3" rx="1"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="272" y="165.5" width="14" height="24" rx="2.5"/>
  <rect class="fl-green" x="274" y="171" width="10" height="16.5" rx="1"><animate attributeName="y" values="184.5;168;168" keyTimes="0;.8;1" dur="3.6s" repeatCount="indefinite"/><animate attributeName="height" values="3;19.5;19.5" keyTimes="0;.8;1" dur="3.6s" repeatCount="indefinite"/></rect>
</g>
<g class="only-4">
  <text x="160" y="138">1896 · מהניאגרה לבאפלו, 40 ק״מ בזרם חילופין</text>
  <text x="84" y="198" class="sm">חילופין</text>
  <text x="221" y="198" class="sm">ישר</text>
  <text x="150" y="213">ממיר בתוך המטען</text>
</g>
`;
