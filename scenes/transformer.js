// שנאי: 1 שני סלילים מבודדים על ליבת ברזל אחת · 2 זרם חילופין יוצר בליבה שדה מתהפך · 3 השדה המשתנה משרה מתח בסליל השני · 4 יחס הליפופים קובע את יחס המתחים
export default `
<defs>
  <clipPath id="transformer-in"><rect x="13" y="169" width="80" height="40"/></clipPath>
  <clipPath id="transformer-out"><rect x="227" y="169" width="80" height="40"/></clipPath>
</defs>
<!-- ליבת ברזל עשויה פחים -->
<path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" fill-rule="evenodd" d="M104 46H216V154H104zM128 70V130H192V70z"/>
<path class="thin" style="stroke-width:1" d="M110 52H210V148H110zM116 58H204V142H116zM122 64H198V136H122z"/>

<!-- שדה מגנטי בליבה: מתחזק, נחלש ומתהפך -->
<g class="from-2"><g class="hl-2 hl-3">
  <path class="wire st-violet" style="stroke-width:3.4" stroke-dasharray="7 9" d="M124 58H196Q204 58 204 66V134Q204 142 196 142H124Q116 142 116 134V66Q116 58 124 58z">
    <animate attributeName="stroke-dashoffset" dur="3s" repeatCount="indefinite" values="16;15.8;15;13.9;12.3;10.3;8;5.5;2.8;0;-2.8;-5.5;-8;-10.3;-12.3;-13.9;-15;-15.8;-16;-15.8;-15;-13.9;-12.3;-10.3;-8;-5.5;-2.8;0;2.8;5.5;8;10.3;12.3;13.9;15;15.8;16"/><animate attributeName="stroke-opacity" dur="3s" repeatCount="indefinite" values="0.18;0.322;0.46;0.59;0.7070000000000001;0.8079999999999999;0.89;0.951;0.988;1;0.988;0.951;0.89;0.8079999999999999;0.7070000000000001;0.59;0.46;0.322;0.18;0.322;0.46;0.59;0.7070000000000001;0.8079999999999999;0.89;0.951;0.988;1;0.988;0.951;0.89;0.8079999999999999;0.7070000000000001;0.59;0.46;0.322;0.18"/></path>
  <g class="arrow st-violet" style="stroke-width:3"><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;0.174;0.342;0.5;0.643;0.7659999999999999;0.866;0.94;0.985;1;0.985;0.94;0.866;0.7659999999999999;0.643;0.5;0.342;0.174;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"/>
    <path transform="translate(160 58) rotate(0)" d="M-4 -5L4 0L-4 5"/><path transform="translate(204 100) rotate(90)" d="M-4 -5L4 0L-4 5"/><path transform="translate(160 142) rotate(180)" d="M-4 -5L4 0L-4 5"/><path transform="translate(116 100) rotate(270)" d="M-4 -5L4 0L-4 5"/></g>
  <g class="arrow st-violet" style="stroke-width:3" opacity="0"><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.174;0.342;0.5;0.643;0.7659999999999999;0.866;0.94;0.985;1;0.985;0.94;0.866;0.7659999999999999;0.643;0.5;0.342;0.174;0"/>
    <path transform="translate(160 58) rotate(180)" d="M-4 -5L4 0L-4 5"/><path transform="translate(204 100) rotate(270)" d="M-4 -5L4 0L-4 5"/><path transform="translate(160 142) rotate(0)" d="M-4 -5L4 0L-4 5"/><path transform="translate(116 100) rotate(90)" d="M-4 -5L4 0L-4 5"/></g>
</g></g>

<!-- סליל ראשון: מעט ליפופים, חוט עבה -->
<g class="hl-1 hl-2 hl-4">
  <path class="wire st-warm" style="stroke-width:4" d="M28 88V70H90Q99 70 99 84M99 122Q99 134 90 134H28V112"/>
  <path fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 10" d="M28 88V70H90Q99 70 99 84"><animate attributeName="stroke-dashoffset" dur="3s" repeatCount="indefinite" values="16;15.8;15;13.9;12.3;10.3;8;5.5;2.8;0;-2.8;-5.5;-8;-10.3;-12.3;-13.9;-15;-15.8;-16;-15.8;-15;-13.9;-12.3;-10.3;-8;-5.5;-2.8;0;2.8;5.5;8;10.3;12.3;13.9;15;15.8;16"/></path><path fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 10" d="M99 122Q99 134 90 134H28V112"><animate attributeName="stroke-dashoffset" dur="3s" repeatCount="indefinite" values="16;15.8;15;13.9;12.3;10.3;8;5.5;2.8;0;-2.8;-5.5;-8;-10.3;-12.3;-13.9;-15;-15.8;-16;-15.8;-15;-13.9;-12.3;-10.3;-8;-5.5;-2.8;0;2.8;5.5;8;10.3;12.3;13.9;15;15.8;16"/></path>
  <path class="wire st-ink" style="stroke-width:8;stroke-linecap:round" d="M99 85L133 79M99 97L133 91M99 109L133 103M99 121L133 115"/>
  <path class="wire st-warm" style="stroke-width:5.4" d="M99 85L133 79M99 97L133 91M99 109L133 103M99 121L133 115"/>
  <circle class="body" cx="28" cy="100" r="12"/>
  <path class="wire st-ink" style="stroke-width:2" d="M20 100q4 -8 8 0t8 0"/>
</g>
<!-- סליל שני: פי שלושה ליפופים, חוט דק -->
<g class="hl-1 hl-3 hl-4">
  <path class="wire st-hot" style="stroke-width:2.6" d="M221 71Q221 60 230 60H292V89M292 111V140H230Q221 140 221 125"/>
  <path class="wire st-ink" style="stroke-width:4.4;stroke-linecap:round" d="M187 75L221 71M187 79.9L221 75.9M187 84.8L221 80.8M187 89.7L221 85.7M187 94.6L221 90.6M187 99.5L221 95.5M187 104.4L221 100.4M187 109.3L221 105.3M187 114.2L221 110.2M187 119.1L221 115.1M187 124L221 120M187 128.9L221 124.9"/>
  <path class="wire st-hot" style="stroke-width:2.6" d="M187 75L221 71M187 79.9L221 75.9M187 84.8L221 80.8M187 89.7L221 85.7M187 94.6L221 90.6M187 99.5L221 95.5M187 104.4L221 100.4M187 109.3L221 105.3M187 114.2L221 110.2M187 119.1L221 115.1M187 124L221 120M187 128.9L221 124.9"/>
  <path class="fl-dark st-ink" stroke-width="1.5" d="M287 109h10v7h-10z"/>
  <circle class="body" cx="292" cy="98" r="12"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M288 109V101l2.5-4 1.500 4 1.500-4 2.500 4V109"/>
</g>
<g class="from-3">
  <path fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 10" d="M221 71Q221 60 230 60H292V89"><animate attributeName="stroke-dashoffset" dur="3s" repeatCount="indefinite" values="0;-2.1;-4.1;-6;-7.7;-9.2;-10.4;-11.3;-11.8;-12;-11.8;-11.3;-10.4;-9.2;-7.7;-6;-4.1;-2.1;0;2.1;4.1;6;7.7;9.2;10.4;11.3;11.8;12;11.8;11.3;10.4;9.2;7.7;6;4.1;2.1;0"/></path><path fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 10" d="M292 111V140H230Q221 140 221 125"><animate attributeName="stroke-dashoffset" dur="3s" repeatCount="indefinite" values="0;-2.1;-4.1;-6;-7.7;-9.2;-10.4;-11.3;-11.8;-12;-11.8;-11.3;-10.4;-9.2;-7.7;-6;-4.1;-2.1;0;2.1;4.1;6;7.7;9.2;10.4;11.3;11.8;12;11.8;11.3;10.4;9.2;7.7;6;4.1;2.1;0"/></path>
  <circle class="fl-elec" cx="292" cy="98" r="10.500" opacity="0"><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1;0.97;0.883;0.75;0.5870000000000001;0.413;0.25;0.11699999999999999;0.03;0;0.03;0.11699999999999999;0.25;0.413;0.5870000000000001;0.75;0.883;0.97;1;0.97;0.883;0.75;0.5870000000000001;0.413;0.25;0.11699999999999999;0.03;0;0.03;0.11699999999999999;0.25;0.413;0.5870000000000001;0.75;0.883;0.97;1"/></circle>
  <path class="thin st-ink" style="stroke-width:1.3" d="M288 109V101l2.5-4 1.500 4 1.500-4 2.500 4V109"/>
</g>
<g class="only-3"><path class="wire st-elec" style="stroke-width:2.6" d="M187 128.9L221 124.9"><animate attributeName="opacity" dur="1.8s" begin="-1.8s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 124L221 120"><animate attributeName="opacity" dur="1.8s" begin="-1.65s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 119.1L221 115.1"><animate attributeName="opacity" dur="1.8s" begin="-1.5s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 114.2L221 110.2"><animate attributeName="opacity" dur="1.8s" begin="-1.35s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 109.3L221 105.3"><animate attributeName="opacity" dur="1.8s" begin="-1.2s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 104.4L221 100.4"><animate attributeName="opacity" dur="1.8s" begin="-1.05s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 99.5L221 95.5"><animate attributeName="opacity" dur="1.8s" begin="-0.9s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 94.6L221 90.6"><animate attributeName="opacity" dur="1.8s" begin="-0.75s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 89.7L221 85.7"><animate attributeName="opacity" dur="1.8s" begin="-0.6s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 84.8L221 80.8"><animate attributeName="opacity" dur="1.8s" begin="-0.45s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 79.9L221 75.9"><animate attributeName="opacity" dur="1.8s" begin="-0.3s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path><path class="wire st-elec" style="stroke-width:2.6" d="M187 75L221 71"><animate attributeName="opacity" dur="1.8s" begin="-0.15s" repeatCount="indefinite" values=".1;1;.1;.1" keyTimes="0;.2;.45;1"/></path></g>

<!-- מתח הכניסה ומתח היציאה: אותו קצב, משרעת פי שלושה -->
<g class="from-2">
  <rect class="fl-dark st-ink" stroke-width="2" x="10" y="166" width="86" height="46" rx="5"/>
  <path fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1" d="M14 189H92"/>
  <g clip-path="url(#transformer-in)"><g><animateTransform attributeName="transform" type="translate" dur="3s" repeatCount="indefinite" values="0 0;-40 0"/>
    <path class="wire st-warm" style="stroke-width:2" d="M6 184L7 184.1L8 184.2L9 184.5L10 185L11 185.5L12 186.1L13 186.7L14 187.5L15 188.2L16 189L17 189.8L18 190.5L19 191.3L20 191.9L21 192.5L22 193L23 193.5L24 193.8L25 193.9L26 194L27 193.9L28 193.8L29 193.5L30 193L31 192.5L32 191.9L33 191.3L34 190.5L35 189.8L36 189L37 188.2L38 187.5L39 186.7L40 186.1L41 185.5L42 185L43 184.5L44 184.2L45 184.1L46 184L47 184.1L48 184.2L49 184.5L50 185L51 185.5L52 186.1L53 186.7L54 187.5L55 188.2L56 189L57 189.8L58 190.5L59 191.3L60 191.9L61 192.5L62 193L63 193.5L64 193.8L65 193.9L66 194L67 193.9L68 193.8L69 193.5L70 193L71 192.5L72 191.9L73 191.3L74 190.5L75 189.8L76 189L77 188.2L78 187.5L79 186.7L80 186.1L81 185.5L82 185L83 184.5L84 184.2L85 184.1L86 184L87 184.1L88 184.2L89 184.5L90 185L91 185.5L92 186.1L93 186.7L94 187.5L95 188.2L96 189L97 189.8L98 190.5L99 191.3L100 191.9L101 192.5L102 193L103 193.5L104 193.8L105 193.9L106 194L107 193.9L108 193.8L109 193.5L110 193L111 192.5L112 191.9L113 191.3L114 190.5L115 189.8L116 189L117 188.2L118 187.5L119 186.7L120 186.1L121 185.5L122 185L123 184.5L124 184.2L125 184.1L126 184L127 184.1L128 184.2L129 184.5L130 185L131 185.5L132 186.1L133 186.7L134 187.5"/></g></g>
  <circle class="fl-warm" cx="86" r="2.8"><animate attributeName="cy" dur="3s" repeatCount="indefinite" values="184;184.1;184.3;184.7;185.2;185.8;186.5;187.3;188.1;189;189.9;190.7;191.5;192.2;192.8;193.3;193.7;193.9;194;193.9;193.7;193.3;192.8;192.2;191.5;190.7;189.9;189;188.1;187.3;186.5;185.8;185.2;184.7;184.3;184.1;184"/></circle>
</g>
<g class="from-3">
  <rect class="fl-dark st-ink" stroke-width="2" x="224" y="166" width="86" height="46" rx="5"/>
  <path fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1" d="M228 189H306"/>
  <g clip-path="url(#transformer-out)"><g><animateTransform attributeName="transform" type="translate" dur="3s" repeatCount="indefinite" values="0 0;-40 0"/>
    <path class="wire st-hot" style="stroke-width:2" d="M220 174L221 174.2L222 174.7L223 175.6L224 176.9L225 178.4L226 180.2L227 182.2L228 184.4L229 186.7L230 189L231 191.3L232 193.6L233 195.8L234 197.8L235 199.6L236 201.1L237 202.4L238 203.3L239 203.8L240 204L241 203.8L242 203.3L243 202.4L244 201.1L245 199.6L246 197.8L247 195.8L248 193.6L249 191.3L250 189L251 186.7L252 184.4L253 182.2L254 180.2L255 178.4L256 176.9L257 175.6L258 174.7L259 174.2L260 174L261 174.2L262 174.7L263 175.6L264 176.9L265 178.4L266 180.2L267 182.2L268 184.4L269 186.7L270 189L271 191.3L272 193.6L273 195.8L274 197.8L275 199.6L276 201.1L277 202.4L278 203.3L279 203.8L280 204L281 203.8L282 203.3L283 202.4L284 201.1L285 199.6L286 197.8L287 195.8L288 193.6L289 191.3L290 189L291 186.7L292 184.4L293 182.2L294 180.2L295 178.4L296 176.9L297 175.6L298 174.7L299 174.2L300 174L301 174.2L302 174.7L303 175.6L304 176.9L305 178.4L306 180.2L307 182.2L308 184.4L309 186.7L310 189L311 191.3L312 193.6L313 195.8L314 197.8L315 199.6L316 201.1L317 202.4L318 203.3L319 203.8L320 204L321 203.8L322 203.3L323 202.4L324 201.1L325 199.6L326 197.8L327 195.8L328 193.6L329 191.3L330 189L331 186.7L332 184.4L333 182.2L334 180.2L335 178.4L336 176.9L337 175.6L338 174.7L339 174.2L340 174L341 174.2L342 174.7L343 175.6L344 176.9L345 178.4L346 180.2L347 182.2L348 184.4"/></g></g>
  <circle class="fl-hot" cx="300" r="2.8"><animate attributeName="cy" dur="3s" repeatCount="indefinite" values="174;174.2;174.9;176;177.5;179.4;181.5;183.9;186.4;189;191.6;194.1;196.5;198.6;200.5;202;203.1;203.8;204;203.8;203.1;202;200.5;198.6;196.5;194.1;191.6;189;186.4;183.9;181.5;179.4;177.5;176;174.9;174.2;174"/></circle>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="70" y="98">סליל</text><text x="70" y="112">ראשון</text>
  <text x="251" y="98">סליל</text><text x="251" y="112">שני</text>
  <text x="160" y="30">ליבת ברזל משותפת</text>
  <text x="160" y="186">אין חיבור חשמלי</text>
  <text x="160" y="200">בין הסלילים</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="70" y="98">זרם</text><text x="70" y="112">חילופין</text>
  <text x="160" y="30">שדה מגנטי מתהפך בברזל</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="251" y="98">מתח</text><text x="251" y="112">מושרה</text>
  <text x="160" y="30">כל ליפוף מוסיף מתח</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="70" y="98">4</text><text x="70" y="112">ליפופים</text>
  <text x="251" y="98">12</text><text x="251" y="112">ליפופים</text>
  <text x="160" y="16">פי 3 ליפופים:</text>
  <text x="160" y="32">פי 3 מתח, שליש מהזרם</text>
  <!-- מטען טלפון: הרבה ליפופים בכניסה, מעט ביציאה -->
  <text x="160" y="174">במטען טלפון להפך</text>
  <rect class="fl-none st-dark" stroke-width="4" x="150" y="183" width="20" height="24" rx="2"/>
  <path class="wire st-hot dash" style="stroke-width:1.2" d="M144 186.500h12M144 189.500h12M144 192.500h12M144 195.500h12M144 198.500h12M144 201.500h12M144 204.500h12"/>
  <path class="wire st-warm" style="stroke-width:3" d="M164 191h12M164 199h12"/>
  <text x="121" y="199">230V</text>
  <text x="191" y="199">5V</text>
  <rect class="body" style="stroke-width:1.5" x="203" y="181" width="13" height="26" rx="2.500"/>
  <rect class="fl-cold-soft" x="205" y="184" width="9" height="18" rx="1"/>
</g>
`;
