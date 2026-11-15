// שינה: 1 אדנוזין מצטבר ויוצר לחץ שינה, קפאין חוסם את הקולטן · 2 צלילה לשינה עמוקה: תאים יורים יחד וגלים גדולים ואיטיים · 3 שינה עמוקה: זיכרון עובר לקליפה ונוזל שוטף פסולת · 4 REM: מוח פעיל, עיניים זזות, שרירים משותקים, מחזור של כ־90 דקות שחוזר
export default `
<defs>
  <clipPath id="sleep-clip36"><rect x="218" y="26" width="42" height="20"/></clipPath>
  <clipPath id="sleep-clip58"><rect x="218" y="48" width="42" height="20"/></clipPath>
  <clipPath id="sleep-clip80"><rect x="218" y="70" width="42" height="20"/></clipPath>
  <clipPath id="sleep-clip102"><rect x="218" y="91" width="42" height="22"/></clipPath>
  <clipPath id="sleep-brain"><path transform="translate(16 136) scale(.42)" d="M18 98C6 76 8 42 34 24C58 8 104 6 128 20C148 32 156 58 152 84C150 100 144 110 134 114C124 118 112 116 104 114C90 112 80 118 66 120C46 122 26 114 18 98Z"/></clipPath>
  <marker id="sleep-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
</defs>
<!-- היפנוגרם: לילה אחד -->
<rect class="fl-panel st-line" style="stroke-width:1" x="10" y="26" width="300" height="88" rx="6"/>
<path class="thin" style="stroke-width:.8;stroke-dasharray:2 3" d="M22 36H206M22 58H206M22 80H206M22 102H206M212 26V114"/>
<!-- לחץ השינה יורד במהלך הלילה -->
<g class="hl-1"><path class="wire st-warm" style="stroke-width:2;stroke-dasharray:5 3" d="M22 31L27.8 36.5L33.5 41.6L39.3 46.3L45 50.6L50.8 54.6L56.5 58.3L62.3 61.8L68 64.9L73.8 67.9L79.5 70.6L85.3 73.1L91 75.4L96.8 77.6L102.5 79.5L108.3 81.4L114 83.1L119.8 84.7L125.5 86.1L131.3 87.5L137 88.7L142.8 89.8L148.5 90.9L154.3 91.9L160 92.8L165.8 93.6L171.5 94.4L177.3 95.1L183 95.8L188.8 96.4L194.5 97L200.3 97.5L206 98"/></g>
<!-- שינה עמוקה -->
<g class="hl-2 hl-3"><path class="pipe st-cold" style="stroke-width:7;stroke-linecap:butt" d="M30 102H47.3M63.4 102H79.5M104.8 102H111.7"/></g>
<!-- REM -->
<g class="hl-4"><path class="pipe st-violet" style="stroke-width:7;stroke-linecap:butt" d="M51.9 58H56.5M86.4 58H93.3M119.8 58H128.9M150.8 58H164.6M178.4 58H196.8"/></g>
<path class="wire st-ink" style="stroke-width:1.6;stroke-linecap:butt" d="M22 36H25.4V80H30V102H47.3V80H51.9V58H56.5V80H63.4V102H79.5V80H86.4V58H93.3V80H104.8V102H111.7V80H119.8V58H128.9V80H137V36H139.3V80H150.8V58H164.6V80H178.4V58H196.8V36H206"/>
<!-- הסמן נע לאורך הלילה -->
<circle r="3.6" class="fl-hot st-bg" style="stroke-width:1.2;stroke:var(--s-panel)"><animateMotion dur="14s" repeatCount="indefinite" path="M22 36H25.4V80H30V102H47.3V80H51.9V58H56.5V80H63.4V102H79.5V80H86.4V58H93.3V80H104.8V102H111.7V80H119.8V58H128.9V80H137V36H139.3V80H150.8V58H164.6V80H178.4V58H196.8V36H206"/></circle>
<text class="sm" x="22" y="124">23:00</text><text class="sm" x="114" y="124">03:00</text><text class="sm" x="206" y="124">07:00</text>
<!-- גלי EEG בכל שלב -->
<g class="hl-1">
  <g clip-path="url(#sleep-clip36)"><path class="wire st-ink" style="stroke-width:1.3" d="M218 35.2L218.5 34.5L219 34L219.5 33.7L220 33.8L220.5 34.4L221 35.4L221.5 36.6L222 37.7L222.5 38.3L223 38L223.5 37.1L224 36L224.5 35.1L225 35L225.5 35.6L226 36.5L226.5 37.2L227 37.2L227.5 36.4L228 35.2L228.5 34L229 33.6L229.5 34.2L230 35.5L230.5 37.1L231 38.2L231.5 38.4L232 37.7L232.5 36.5L233 35.2L233.5 34.4L234 34.3L234.5 34.7L235 35.4L235.5 36.1L236 36.5L236.5 36.7L237 36.8L237.5 36.8L238 36.8L238.5 36.7L239 36.4L239.5 36L240 35.5L240.5 35.3L241 35.4L241.5 35.7L242 36L242.5 36L243 35.6L243.5 34.9L244 34.3L244.5 34.2L245 35L245.5 36.5L246 38.2L246.5 39.4L247 39.6L247.5 38.6L248 36.8L248.5 34.9L249 33.6L249.5 33.3L250 33.8L250.5 34.9L251 35.8L251.5 36.2L252 36L252.5 35.6L253 35.2L253.5 35.3L254 36L254.5 36.9L255 37.8L255.5 38.3L256 38.2L256.5 37.6L257 36.8L257.5 35.9L258 35.2L258.5 34.5L259 34L259.5 33.7L260 33.8L260.5 34.4L261 35.4L261.5 36.6L262 37.7L262.5 38.3L263 38L263.5 37.1L264 36L264.5 35.1L265 35L265.5 35.6L266 36.5L266.5 37.2L267 37.2L267.5 36.4L268 35.2L268.5 34L269 33.6L269.5 34.2L270 35.5L270.5 37.1L271 38.2L271.5 38.4L272 37.7L272.5 36.5L273 35.2L273.5 34.4L274 34.3L274.5 34.7L275 35.4L275.5 36.1L276 36.5L276.5 36.7L277 36.8L277.5 36.8L278 36.8L278.5 36.7L279 36.4L279.5 36L280 35.5L280.5 35.3L281 35.4L281.5 35.7L282 36L282.5 36L283 35.6L283.5 34.9L284 34.3L284.5 34.2L285 35L285.5 36.5L286 38.2L286.5 39.4L287 39.6L287.5 38.6L288 36.8L288.5 34.9L289 33.6L289.5 33.3L290 33.8L290.5 34.9L291 35.8L291.5 36.2L292 36L292.5 35.6L293 35.2L293.5 35.3L294 36L294.5 36.9L295 37.8L295.5 38.3L296 38.2L296.5 37.6L297 36.8L297.5 35.9L298 35.2"><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="1s" repeatCount="indefinite"/></path></g>
  <text class="sm" x="283" y="39">ערות</text>
</g>
<g class="hl-4">
  <g clip-path="url(#sleep-clip58)"><path class="wire st-ink" style="stroke-width:1.3" d="M218 56.4L218.5 55.8L219 55.9L219.5 56.7L220 57.7L220.5 58.5L221 58.8L221.5 58.4L222 57.6L222.5 56.8L223 56.5L223.5 56.8L224 57.7L224.5 58.9L225 59.9L225.5 60.3L226 60L226.5 59.3L227 58.4L227.5 57.8L228 57.5L228.5 57.6L229 57.7L229.5 57.8L230 57.7L230.5 57.4L231 57L231.5 56.7L232 56.5L232.5 56.5L233 56.7L233.5 57.1L234 57.7L234.5 58.6L235 59.7L235.5 60.6L236 61.1L236.5 61L237 60.2L237.5 58.9L238 57.5L238.5 56.4L239 55.9L239.5 56L240 56.6L240.5 57.1L241 57.2L241.5 57L242 56.5L242.5 56.2L243 56.5L243.5 57.4L244 58.9L244.5 60.4L245 61.5L245.5 61.7L246 61.1L246.5 59.9L247 58.4L247.5 57.2L248 56.4L248.5 56.1L249 56.1L249.5 56.3L250 56.6L250.5 56.8L251 57L251.5 57.3L252 57.6L252.5 58L253 58.3L253.5 58.5L254 58.9L254.5 59.2L255 59.7L255.5 60L256 60L256.5 59.6L257 58.6L257.5 57.5L258 56.4L258.5 55.8L259 55.9L259.5 56.7L260 57.7L260.5 58.5L261 58.8L261.5 58.4L262 57.6L262.5 56.8L263 56.5L263.5 56.8L264 57.7L264.5 58.9L265 59.9L265.5 60.3L266 60L266.5 59.3L267 58.4L267.5 57.8L268 57.5L268.5 57.6L269 57.7L269.5 57.8L270 57.7L270.5 57.4L271 57L271.5 56.7L272 56.5L272.5 56.5L273 56.7L273.5 57.1L274 57.7L274.5 58.6L275 59.7L275.5 60.6L276 61.1L276.5 61L277 60.2L277.5 58.9L278 57.5L278.5 56.4L279 55.9L279.5 56L280 56.6L280.5 57.1L281 57.2L281.5 57L282 56.5L282.5 56.2L283 56.5L283.5 57.4L284 58.9L284.5 60.4L285 61.5L285.5 61.7L286 61.1L286.5 59.9L287 58.4L287.5 57.2L288 56.4L288.5 56.1L289 56.1L289.5 56.3L290 56.6L290.5 56.8L291 57L291.5 57.3L292 57.6L292.5 58L293 58.3L293.5 58.5L294 58.9L294.5 59.2L295 59.7L295.5 60L296 60L296.5 59.6L297 58.6L297.5 57.5L298 56.4"><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="1.2s" repeatCount="indefinite"/></path></g>
  <text class="sm" x="283" y="61">REM</text>
</g>
<g class="hl-2">
  <g clip-path="url(#sleep-clip80)"><path class="wire st-ink" style="stroke-width:1.3" d="M218 79.3L218.5 78.9L219 78.6L219.5 78.4L220 78.5L220.5 78.7L221 79L221.5 79.4L222 79.8L222.5 80.2L223 80.5L223.5 80.8L224 80.9L224.5 81L225 81L225.5 81L226 80.8L226.5 80.6L227 80.4L227.5 80.2L228 80L228.5 79.8L229 79.5L229.5 79.4L230 79.2L230.5 79L231 78.9L231.5 78.9L232 79.1L232.5 79.4L233 79.5L233.5 79.5L234 80L234.5 81L235 81.7L235.5 81.3L236 80.5L236.5 80.8L237 82.4L237.5 82.9L238 80.7L238.5 77.9L239 78L239.5 80.7L240 81.5L240.5 78.1L241 74.7L241.5 76L242 80.5L242.5 82.3L243 79.5L243.5 77.1L244 79.1L244.5 83.3L245 84.6L245.5 82.2L246 80.2L246.5 80.9L247 82.4L247.5 82L248 80L248.5 78.4L249 78.2L249.5 78.4L250 78.2L250.5 77.8L251 77.8L251.5 78.3L252 79.1L252.5 79.9L253 80.5L253.5 81.1L254 81.6L254.5 82L255 82L255.5 81.9L256 81.5L256.5 81L257 80.4L257.5 79.8L258 79.3L258.5 78.9L259 78.6L259.5 78.4L260 78.5L260.5 78.7L261 79L261.5 79.4L262 79.8L262.5 80.2L263 80.5L263.5 80.8L264 80.9L264.5 81L265 81L265.5 81L266 80.8L266.5 80.6L267 80.4L267.5 80.2L268 80L268.5 79.8L269 79.5L269.5 79.4L270 79.2L270.5 79L271 78.9L271.5 78.9L272 79.1L272.5 79.4L273 79.5L273.5 79.5L274 80L274.5 81L275 81.7L275.5 81.3L276 80.5L276.5 80.8L277 82.4L277.5 82.9L278 80.7L278.5 77.9L279 78L279.5 80.7L280 81.5L280.5 78.1L281 74.7L281.5 76L282 80.5L282.5 82.3L283 79.5L283.5 77.1L284 79.1L284.5 83.3L285 84.6L285.5 82.2L286 80.2L286.5 80.9L287 82.4L287.5 82L288 80L288.5 78.4L289 78.2L289.5 78.4L290 78.2L290.5 77.8L291 77.8L291.5 78.3L292 79.1L292.5 79.9L293 80.5L293.5 81.1L294 81.6L294.5 82L295 82L295.5 81.9L296 81.5L296.5 81L297 80.4L297.5 79.8L298 79.3"><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="2s" repeatCount="indefinite"/></path></g>
  <text class="sm" x="285" y="83">שינה קלה</text>
</g>
<g class="hl-2 hl-3">
  <g clip-path="url(#sleep-clip102)"><path class="wire st-ink" style="stroke-width:1.3" d="M218 94.5L218.5 94.2L219 94.2L219.5 94.4L220 94.8L220.5 95.5L221 96.4L221.5 97.5L222 98.7L222.5 100L223 101.3L223.5 102.5L224 103.6L224.5 104.6L225 105.4L225.5 106.1L226 106.5L226.5 106.9L227 107.1L227.5 107.3L228 107.3L228.5 107.3L229 107.1L229.5 106.9L230 106.5L230.5 106.1L231 105.4L231.5 104.6L232 103.6L232.5 102.5L233 101.3L233.5 100L234 98.7L234.5 97.5L235 96.4L235.5 95.5L236 94.8L236.5 94.4L237 94.2L237.5 94.2L238 94.5L238.5 94.9L239 95.5L239.5 96.2L240 97L240.5 97.9L241 98.7L241.5 99.7L242 100.6L242.5 101.6L243 102.7L243.5 103.8L244 105L244.5 106.2L245 107.4L245.5 108.6L246 109.6L246.5 110.5L247 111.1L247.5 111.6L248 111.7L248.5 111.6L249 111.1L249.5 110.5L250 109.6L250.5 108.6L251 107.4L251.5 106.2L252 105L252.5 103.8L253 102.7L253.5 101.6L254 100.6L254.5 99.7L255 98.7L255.5 97.9L256 97L256.5 96.2L257 95.5L257.5 94.9L258 94.5L258.5 94.2L259 94.2L259.5 94.4L260 94.8L260.5 95.5L261 96.4L261.5 97.5L262 98.7L262.5 100L263 101.3L263.5 102.5L264 103.6L264.5 104.6L265 105.4L265.5 106.1L266 106.5L266.5 106.9L267 107.1L267.5 107.3L268 107.3L268.5 107.3L269 107.1L269.5 106.9L270 106.5L270.5 106.1L271 105.4L271.5 104.6L272 103.6L272.5 102.5L273 101.3L273.5 100L274 98.7L274.5 97.5L275 96.4L275.5 95.5L276 94.8L276.5 94.4L277 94.2L277.5 94.2L278 94.5L278.5 94.9L279 95.5L279.5 96.2L280 97L280.5 97.9L281 98.7L281.5 99.7L282 100.6L282.5 101.6L283 102.7L283.5 103.8L284 105L284.5 106.2L285 107.4L285.5 108.6L286 109.6L286.5 110.5L287 111.1L287.5 111.6L288 111.7L288.5 111.6L289 111.1L289.5 110.5L290 109.6L290.5 108.6L291 107.4L291.5 106.2L292 105L292.5 103.8L293 102.7L293.5 101.6L294 100.6L294.5 99.7L295 98.7L295.5 97.9L296 97L296.5 96.2L297 95.5L297.5 94.9L298 94.5"><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="4s" repeatCount="indefinite"/></path></g>
  <text class="sm" x="283" y="105">עמוקה</text>
</g>
<g class="only-1"><text class="sm" x="62" y="20">לחץ השינה</text></g>
<g class="only-4"><path class="wire st-violet" style="stroke-width:1.4" d="M56.5 22V17H93.3V22"/><text class="sm" x="74.9" y="13">מחזור ≈ 90 דק׳</text></g>


<!-- המוח (חתך אורך, המצח משמאל) -->
<g transform="translate(16 136) scale(.42)">
  <path class="body" style="stroke-width:4" d="M96 108C98 130 100 150 102 172L116 172C114 150 114 130 112 108Z"/>
  <path class="body" style="stroke-width:4" d="M112 116C120 108 146 108 150 122C152 136 136 144 122 140C112 136 108 126 112 116Z"/>
  <path class="body" style="stroke-width:4.5" d="M18 98C6 76 8 42 34 24C58 8 104 6 128 20C148 32 156 58 152 84C150 100 144 110 134 114C124 118 112 116 104 114C90 112 80 118 66 120C46 122 26 114 18 98Z"/>
  <path class="thin" style="stroke-width:3" d="M44 70C62 48 106 46 122 66M30 50C40 44 48 48 56 40M76 30C84 38 96 34 104 28M126 44C134 52 140 60 146 66M24 82C34 78 40 86 48 82"/>
</g>
<!-- 1: אדנוזין וקפאין בקולטנים -->
<g class="only-1">
  <path class="wire st-ink" style="stroke-width:2" d="M100 196H228"/>
  <path class="wire st-ink" style="stroke-width:2" d="M118 196V186H122V191H134V186H138V196M152 196V186H156V191H168V186H172V196M186 196V186H190V191H202V186H206V196"/>
  <circle class="fl-green" cx="128" r="4.2"><animate attributeName="cy" values="146;186;186;186" keyTimes="0;.35;.9;1" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-green" cx="162" r="4.2"><animate attributeName="cy" values="146;186;186;186" keyTimes="0;.35;.9;1" dur="3s" begin="-1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" begin="-1.2s" repeatCount="indefinite"/></circle>
  <path class="fl-warm st-ink" style="stroke-width:1" d="M196 181l4.5 2.6v5.2l-4.5 2.6-4.5-2.6v-5.2z"/>
  <circle class="fl-green" cx="196" r="4.2"><animate attributeName="cy" values="146;172;150;150" keyTimes="0;.35;.6;1" dur="3s" begin="-2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.55;.7" dur="3s" begin="-2s" repeatCount="indefinite"/></circle>
  <circle class="fl-green" cx="250" cy="160" r="4"/><text class="sm" x="282" y="163">אדנוזין</text>
  <path class="fl-warm st-ink" style="stroke-width:1" d="M250 179l4.5 2.6v5.2l-4.5 2.6-4.5-2.6v-5.2z"/><text class="sm" x="284" y="188">קפאין חוסם</text>
</g>
<!-- 2: תאים יורים יחד -->
<g class="only-2">
  <g clip-path="url(#sleep-brain)"><rect class="fl-cold" x="0" y="130" width="14" height="80" opacity=".45"><animateTransform attributeName="transform" type="translate" values="10 0;90 0" dur="2s" repeatCount="indefinite"/></rect></g>
  <circle class="body" style="stroke-width:1.5" cx="118" cy="162" r="7"/><path class="thin" d="M125 162h8"/><circle class="fl-elec" cx="118" cy="162" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle><circle class="body" style="stroke-width:1.5" cx="148" cy="162" r="7"/><path class="thin" d="M155 162h8"/><circle class="fl-elec" cx="148" cy="162" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle><circle class="body" style="stroke-width:1.5" cx="178" cy="162" r="7"/><path class="thin" d="M185 162h8"/><circle class="fl-elec" cx="178" cy="162" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle><circle class="body" style="stroke-width:1.5" cx="133" cy="190" r="7"/><path class="thin" d="M140 190h8"/><circle class="fl-elec" cx="133" cy="190" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle><circle class="body" style="stroke-width:1.5" cx="163" cy="190" r="7"/><path class="thin" d="M170 190h8"/><circle class="fl-elec" cx="163" cy="190" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle><circle class="body" style="stroke-width:1.5" cx="193" cy="190" r="7"/><path class="thin" d="M200 190h8"/><circle class="fl-elec" cx="193" cy="190" r="5"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="2s" repeatCount="indefinite"/></circle>
  <text class="sm" x="266" y="170">יורים יחד</text><text class="sm" x="266" y="184">ושותקים יחד</text>
</g>
<!-- 3: זיכרון ופינוי פסולת -->
<g class="only-3">
  <path class="arrow st-warm" style="stroke-width:1.8" marker-end="url(#sleep-a)" d="M57 177C48 172 40 162 38 152"/>
  <path class="fl-warm" d="M53 176c4-3 10-3 13 1c-3 2-8 3-13-1z"/>
  <circle class="fl-warm" r="2"><animateMotion dur="1.4s" repeatCount="indefinite" path="M57 177C48 172 40 162 38 152"/></circle>
  <rect class="body" style="stroke-width:1.5" x="106" y="148" width="44" height="22" rx="9"/><rect class="body" style="stroke-width:1.5" x="154" y="148" width="44" height="22" rx="9"/><rect class="body" style="stroke-width:1.5" x="106" y="176" width="44" height="22" rx="9"/><rect class="body" style="stroke-width:1.5" x="154" y="176" width="44" height="22" rx="9"/>
  <path class="pipe st-cold" style="stroke-width:5" d="M100 173H206M152 146V202"/>
  <path class="flow" d="M100 173H206"/><path class="flow" d="M152 146V202"/>
  <circle class="fl-line" r="2.2"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M100 173H206"/></circle><circle class="fl-line" r="2.2"><animateMotion dur="2.4s" begin="-0.8s" repeatCount="indefinite" path="M100 173H206"/></circle><circle class="fl-line" r="2.2"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M100 173H206"/></circle>
  <circle class="fl-warm" cx="230" cy="160" r="3.5"/><text class="sm" x="270" y="163">זיכרון לקליפה</text>
  <circle class="fl-cold" cx="230" cy="186" r="3.5"/><text class="sm" x="270" y="189">נוזל שוטף פסולת</text>
</g>
<!-- 4: REM -->
<g class="only-4">
  <path class="pipe st-hot" style="stroke-width:3.5" d="M58 182V206"/>
  <path class="body" style="stroke-width:1.6" d="M104 162C116 148 138 148 150 162C138 176 116 176 104 162Z"/>
  <circle class="fl-ink" cy="162" r="5.5"><animate attributeName="cx" values="121;133;121" keyTimes="0;.5;1" dur=".7s" repeatCount="indefinite"/></circle>
  <path class="wire st-hot" style="stroke-width:2" d="M64 200H178"/><path class="flow" d="M64 200H150"/>
  <path class="wire st-hot" style="stroke-width:2.6" d="M152 191V205"/>
  <ellipse class="body" style="stroke-width:1.6" cx="200" cy="198" rx="22" ry="8"/>
  <path class="thin" d="M186 198H214M190 194H210M190 202H210"/>
  <text class="sm" x="266" y="165">עיניים זזות</text><text class="sm" x="266" y="201">שרירים משותקים</text>
</g>
<!-- מבט כולל -->
<g class="from-5">
  <path class="wire st-violet" style="stroke-width:1.2" d="M23.5 21V17H55V21"/><path class="wire st-violet" style="stroke-width:1.2" d="M58 21V17H91.8V21"/><path class="wire st-violet" style="stroke-width:1.2" d="M94.8 21V17H127.4V21"/><path class="wire st-violet" style="stroke-width:1.2" d="M130.4 21V17H163.1V21"/><path class="wire st-violet" style="stroke-width:1.2" d="M166.1 21V17H195.3V21"/>
  <rect class="body" style="stroke-width:1.5" x="110" y="150" width="40" height="20" rx="8"/><rect class="body" style="stroke-width:1.5" x="154" y="150" width="40" height="20" rx="8"/><rect class="body" style="stroke-width:1.5" x="110" y="176" width="40" height="20" rx="8"/><rect class="body" style="stroke-width:1.5" x="154" y="176" width="40" height="20" rx="8"/>
  <path class="pipe st-cold" style="stroke-width:4" d="M104 173H200M152 146V200"/><path class="flow" d="M104 173H200"/>
  <path class="body" style="stroke-width:1.6" d="M236 173C250 157 276 157 290 173C276 189 250 189 236 173Z"/>
  <circle class="fl-ink" cy="173" r="5.5"><animate attributeName="cx" values="256;270;256" dur=".7s" repeatCount="indefinite"/></circle>
</g>
`;
