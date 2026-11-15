// העוזר הקולי: 1 מיקרופון ודגימה · 2 ספקטרוגרמה, זמן מול תדר · 3 רשת הופכת את המפה לטקסט · 4 חילוץ כוונה, פעולה ותשובה בקול
export default `
<defs>
  <marker id="speech-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker><marker id="speech-e" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-elec"/></marker>
</defs>
<!-- מיקרופון וגל הקול -->
<g class="hl-1">
  <path class="wire st-cold" d="M307 31Q312 40 307 49M312 25Q320 40 312 55"/>
  <path class="wire st-ink" d="M279 44a12 12 0 0 0 24 0M291 56V66M282 66H300"/>
  <rect class="body" x="284" y="20" width="14" height="30" rx="7"/>
  <path class="thin st-ink" style="stroke-width:1" d="M287 28H295M287 33H295M287 38H295"/>
  <path class="wire st-elec dash" d="M279 36H268"/>
</g>
<g class="hl-1 hl-2">
  <rect class="body" x="178" y="14" width="88" height="54" rx="6"/>
  <path class="thin" style="stroke-width:1" d="M182 41H262"/>
  <path class="wire st-cold" style="stroke-width:1.6" d="M182 41L182.5 40.6L183 40.1L183.5 39.7L184 39.5L184.5 39.8L185 40.6L185.5 41.9L186 43.5L186.5 44.8L187 45.4L187.5 45L188 43.2L188.5 40.4L189 36.9L189.5 33.7L190 31.5L190.5 31.2L191 33.2L191.5 37.2L192 42.7L192.5 48.6L193 53.6L193.5 56.6L194 57L194.5 54.4L195 49.4L195.5 42.9L196 36L196.5 29.8L197 25.5L197.5 23.5L198 24L198.5 26.8L199 31.2L199.5 36.4L200 41.6L200.5 46.1L201 49.4L201.5 51.3L202 51.8L202.5 51.1L203 49.4L203.5 47.3L204 44.9L204.5 42.7L205 40.8L205.5 39.4L206 38.5L206.5 38L207 37.9L207.5 38.1L208 38.5L208.5 38.9L209 39.4L209.5 39.9L210 40.4L210.5 40.9L211 41.5L211.5 42.2L212 42.9L212.5 43.6L213 44.4L213.5 45L214 45.3L214.5 45.2L215 44.6L215.5 43.3L216 41.3L216.5 38.8L217 36L217.5 33.1L218 30.6L218.5 29L219 28.7L219.5 29.9L220 32.6L220.5 36.8L221 41.8L221.5 47L222 51.6L222.5 54.7L223 55.9L223.5 54.8L224 51.7L224.5 47.1L225 42L225.5 37.1L226 33.5L226.5 31.6L227 31.6L227.5 33.3L228 36.1L228.5 39.3L229 42.1L229.5 44.1L230 45.1L230.5 44.9L231 44.1L231.5 42.8L232 41.4L232.5 40.3L233 39.5L233.5 39.1L234 39.1L234.5 39.5L235 40.2L235.5 41.2L236 42.4L236.5 43.4L237 44.2L237.5 44.1L238 43.2L238.5 41.2L239 38.6L239.5 36L240 34.1L240.5 33.7L241 35.4L241.5 39L242 43.9L242.5 48.9L243 52.6L243.5 54L244 52.3L244.5 47.6L245 41L245.5 33.9L246 27.9L246.5 24.5L247 24.5L247.5 27.9L248 33.8L248.5 40.9L249 47.7L249.5 53L250 55.8L250.5 55.9L251 53.6L251.5 49.6L252 44.7L252.5 40L253 36.2L253.5 33.7L254 32.6L254.5 32.9L255 34.1L255.5 36L256 38L256.5 39.9L257 41.4L257.5 42.5L258 43.1L258.5 43.3L259 43.2L259.5 42.9L260 42.4L260.5 42L261 41.6L261.5 41.2L262 41"/>
</g>
<!-- ספקטרוגרמה -->
<g class="hl-2 hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M176 41H167" marker-end="url(#speech-a)"/>
  <rect class="body" x="66" y="11" width="99" height="61" rx="6"/>
  <g class="fl-soft"><rect x="70.4" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="23" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="70.4" y="61" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="61" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="23" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="100.8" y="61" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="23" width="6.600" height="6.600" rx="1"/><rect x="116" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="116" y="23" width="6.600" height="6.600" rx="1"/><rect x="116" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="23" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="123.6" y="61" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="23" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="154" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="154" y="23" width="6.600" height="6.600" rx="1"/><rect x="154" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="154" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="154" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="154" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="154" y="61" width="6.600" height="6.600" rx="1"/></g>
  <g class="fl-violet" fill-opacity=".7"><rect x="78" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="78" y="61" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="61" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="23" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="93.2" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="131.2" y="61" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="23" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="15.4" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="45.8" width="6.600" height="6.600" rx="1"/></g>
  <g class="fl-hot"><rect x="78" y="23" width="6.600" height="6.600" rx="1"/><rect x="78" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="78" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="108.4" y="61" width="6.600" height="6.600" rx="1"/><rect x="116" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="116" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="116" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="116" y="61" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="38.2" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="23" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="53.4" width="6.600" height="6.600" rx="1"/><rect x="146.4" y="61" width="6.600" height="6.600" rx="1"/></g>
  <g class="fl-elec"><rect x="78" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="78" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="23" width="6.600" height="6.600" rx="1"/><rect x="85.6" y="45.8" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="30.6" width="6.600" height="6.600" rx="1"/><rect x="138.8" y="61" width="6.600" height="6.600" rx="1"/></g>
</g>
<!-- הרשת והטקסט -->
<g class="hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M78 73V88H38V101" marker-end="url(#speech-a)"/>
  <rect class="body" x="12" y="104" width="52" height="56" rx="8"/>
  <path class="thin" style="stroke-width:.8" d="M24 120L38 114M24 120L38 126M24 120L38 138M24 120L38 150M24 132L38 114M24 132L38 126M24 132L38 138M24 132L38 150M24 144L38 114M24 144L38 126M24 144L38 138M24 144L38 150M38 114L52 120M38 114L52 132M38 114L52 144M38 126L52 120M38 126L52 132M38 126L52 144M38 138L52 120M38 138L52 132M38 138L52 144M38 150L52 120M38 150L52 132M38 150L52 144"/>
  <g class="fl-panel st-ink" stroke-width="1.5"><circle cx="24" cy="120" r="3.200"/><circle cx="24" cy="132" r="3.200"/><circle cx="24" cy="144" r="3.200"/><circle cx="38" cy="114" r="3.200"/><circle cx="38" cy="126" r="3.200"/><circle cx="38" cy="138" r="3.200"/><circle cx="38" cy="150" r="3.200"/><circle cx="52" cy="120" r="3.200"/><circle cx="52" cy="132" r="3.200"/><circle cx="52" cy="144" r="3.200"/></g>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M66 132H75" marker-end="url(#speech-a)"/>
</g>
<g class="hl-3 hl-4">
  <rect class="body" x="78" y="118" width="94" height="28" rx="10"/>
  <g class="from-3"><text x="125" y="136" style="stroke:none">הדלק אור בסלון</text></g>
</g>
<!-- כוונה, פעולה ותשובה -->
<g class="hl-4">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M174 132H183" marker-end="url(#speech-a)"/>
  <rect class="body" x="186" y="108" width="66" height="48" rx="6"/>
  <path class="thin" d="M190 132H248"/>
  <g class="from-4"><text class="sm" x="219" y="124" style="stroke:none">פעולה: הדלקה</text><text class="sm" x="219" y="147" style="stroke:none">מקום: סלון</text></g>
  <path class="wire st-elec dash" d="M254 120H272" marker-end="url(#speech-e)"/>
  <path class="wire st-elec dash" d="M254 146H262V162H272" marker-end="url(#speech-e)"/>
  <rect class="fl-line st-ink" stroke-width="1.5" x="284" y="127" width="10" height="8" rx="1.5"/>
  <circle class="body" cx="289" cy="117" r="10.500"/>
  <g class="from-4"><circle class="fl-elec st-ink" stroke-width="2" cx="289" cy="117" r="10.500"/></g>
  <path class="body" d="M277 158h5l6 -5v18l-6 -5h-5z"/>
  <g class="from-4"><path class="wire st-cold" style="stroke-width:2" d="M293 157q4 5 0 10M298 153q7 9 0 18"/></g>
</g>

<g class="only-1">
  <g class="fade"><path class="wire st-cold" style="stroke-width:3.500" d="M307 31Q312 40 307 49"/></g>
  <g class="fade d2"><path class="wire st-cold" style="stroke-width:3.500" d="M312 25Q320 40 312 55"/></g>
  <g class="fl-elec st-ink" stroke-width=".7"><circle cx="182" cy="41" r="1.300"/><circle cx="185.1" cy="40.8" r="1.300"/><circle cx="188.2" cy="42.5" r="1.300"/><circle cx="191.2" cy="34.8" r="1.300"/><circle cx="194.3" cy="55.7" r="1.300"/><circle cx="197.4" cy="23.7" r="1.300"/><circle cx="200.5" cy="45.8" r="1.300"/><circle cx="203.5" cy="47.1" r="1.300"/><circle cx="206.6" cy="38" r="1.300"/><circle cx="209.7" cy="40.1" r="1.300"/><circle cx="212.8" cy="44" r="1.300"/><circle cx="215.8" cy="42" r="1.300"/><circle cx="218.9" cy="28.6" r="1.300"/><circle cx="222" cy="51.6" r="1.300"/><circle cx="225.1" cy="41.2" r="1.300"/><circle cx="228.2" cy="37.1" r="1.300"/><circle cx="231.2" cy="43.5" r="1.300"/><circle cx="234.3" cy="39.3" r="1.300"/><circle cx="237.4" cy="44.2" r="1.300"/><circle cx="240.5" cy="33.7" r="1.300"/><circle cx="243.5" cy="54" r="1.300"/><circle cx="246.6" cy="24.2" r="1.300"/><circle cx="249.7" cy="54.4" r="1.300"/><circle cx="252.8" cy="37.8" r="1.300"/><circle cx="255.8" cy="37.4" r="1.300"/><circle cx="258.9" cy="43.2" r="1.300"/><circle cx="262" cy="41" r="1.300"/></g>
  <path class="thin st-hot" d="M0 18V64"><animateTransform attributeName="transform" type="translate" values="182 0;262 0" dur="2.400s" repeatCount="indefinite"/></path>
  <text x="160" y="190">המיקרופון הופך קול למתח</text>
  <text x="160" y="206">והמתח נדגם אלפי פעמים בשנייה</text>
</g>
<g class="only-2">
  <rect class="fl-none st-hot" stroke-width="2" x="0" y="17" width="7" height="48" rx="2"><animate attributeName="x" values="182;255" dur="3s" repeatCount="indefinite"/></rect>
  <rect class="fl-none st-ink" stroke-width="2" x="0" y="14" width="8.600" height="55" rx="2"><animate attributeName="x" values="69.400;153" dur="3s" repeatCount="indefinite"/></rect>
  <text class="sm" x="48" y="44">תדר</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M48 33V19" marker-end="url(#speech-a)"/>
  <text class="sm" x="122" y="86">זמן</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M134 83H152" marker-end="url(#speech-a)"/>
  <text x="160" y="190">כל פרוסת זמן מפורקת לתדרים</text>
  <text x="160" y="206">צבע בהיר — עוצמה גבוהה</text>
</g>
<g class="only-3">
  <rect class="fl-elec st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.600s" repeatCount="indefinite" path="M78 73V88H38V104"/></rect>
  <rect class="fl-elec st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.600s" begin="-.8s" repeatCount="indefinite" path="M78 73V88H38V104"/></rect>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.600"><animateMotion dur="1.400s" repeatCount="indefinite" path="M24 132L38 126L52 132H76"/></circle>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.600"><animateMotion dur="1.400s" begin="-.7s" repeatCount="indefinite" path="M24 144L38 138L52 132H76"/></circle>
  <rect class="fl-panel" x="83" y="124" height="17" width="84"><animate attributeName="width" values="84;84;0;0" keyTimes="0;.1;.65;1" dur="3s" repeatCount="indefinite"/></rect>
  <text x="160" y="190">הרשת קוראת את מפת התדרים</text>
  <text x="160" y="206">ומוציאה ממנה טקסט</text>
</g>
<g class="only-4">
  <g class="blink"><path class="wire st-elec" d="M289 101V96M276 106L272 102M302 106L306 102M273 118H268M305 118H310"/></g>
  <g class="fade"><path class="wire st-cold" style="stroke-width:3.500" d="M298 153q7 9 0 18"/></g>
  <text x="150" y="190">מהטקסט מחלצים כוונה ופרטים</text>
  <text x="150" y="206">המכשיר פועל, והתשובה נאמרת בקול</text>
</g>
`;
