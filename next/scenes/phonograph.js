// פונוגרף גליל מכני: 1 הקול נכנס למשפך ומרעיד קרום ומחט · 2 המחט חורטת בגליל המסתובב חריץ בעומק משתנה · 3 בנגינה החריץ מרעיד את המחט, הקרום והמשפך · 4 דיסקה שטוחה עם חריץ מתפתל, שמטביעים ממנה עותקים
export default `
<defs>
  <marker id="phonograph-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="phonograph-cyl"><rect x="111" y="72" width="80" height="50"><animate attributeName="x" values="111;131" dur="12.8s" repeatCount="indefinite"/></rect></clipPath>
  <clipPath id="phonograph-fun"><path d="M122 10C136 20 145 36 146 50H158C159 36 168 20 182 10z"/></clipPath>
  <clipPath id="phonograph-lens"><rect x="227" y="10" width="82" height="54" rx="4"/></clipPath>
  <clipPath id="phonograph-dl"><circle cx="108" cy="180" r="18"/></clipPath>
</defs>

<!-- ===== בסיס עץ ותומכות ברזל ===== -->
<g class="hl-1 hl-2 hl-3">
  <rect class="fl-panel st-ink" stroke-width="2" x="40" y="140" width="244" height="12" rx="2"/>
  <rect class="fl-warm" opacity=".5" x="40" y="140" width="244" height="12" rx="2"/>
  <path class="thin st-ink" style="stroke-width:.8" opacity=".5" d="M48 144H120M150 148H230M240 144H276"/>
</g>

<!-- ===== הגליל על ציר מוברג, עם ידית סיבוב ===== -->
<g class="hl-2 hl-3">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;20 0" dur="12.8s" repeatCount="indefinite"/>
    <rect class="fl-line st-ink" stroke-width="1" x="50" y="94.6" width="214" height="4.8" rx="1"/>
    <path class="thin st-ink" style="stroke-width:.8" d="M52 94.6l1.6 4.8M54.5 94.6l1.6 4.8M57 94.6l1.6 4.8M59.5 94.6l1.6 4.8M62 94.6l1.6 4.8M64.5 94.6l1.6 4.8M67 94.6l1.6 4.8M69.5 94.6l1.6 4.8M72 94.6l1.6 4.8M74.5 94.6l1.6 4.8M77 94.6l1.6 4.8M79.5 94.6l1.6 4.8M82 94.6l1.6 4.8M84.5 94.6l1.6 4.8M87 94.6l1.6 4.8M89.5 94.6l1.6 4.8M92 94.6l1.6 4.8M94.5 94.6l1.6 4.8M97 94.6l1.6 4.8M99.5 94.6l1.6 4.8M102 94.6l1.6 4.8"/>
    <rect class="fl-soft st-ink" stroke-width="2" x="106" y="72" width="90" height="50" rx="3"/>
    <rect class="fl-elec" opacity=".6" x="107" y="73" width="4.5" height="48"/><rect class="fl-elec" opacity=".6" x="190.5" y="73" width="4.5" height="48"/>
    <path class="thin st-ink" style="stroke-width:1" d="M111.5 73V121M190.5 73V121"/>
    <path fill="none" stroke="#fff" stroke-width="1.6" stroke-opacity=".7" d="M112 0H190"><animateTransform attributeName="transform" type="translate" values="0 73;0 73.82;0 76.22;0 80.03;0 85;0 90.79;0 97;0 103.21;0 109;0 113.97;0 117.78;0 120.18;0 121;0 121" keyTimes="0;0.04;0.08;0.13;0.17;0.21;0.25;0.29;0.33;0.38;0.42;0.46;0.5;1" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.6s" repeatCount="indefinite"/></path>
    <!-- ידית -->
    <path class="wire st-ink" style="stroke-width:3" d="M264 97V110"><animate attributeName="d" values="M264 97V110;M264 97V97;M264 97V84;M264 97V97;M264 97V110" calcMode="spline" keyTimes="0;.25;.5;.75;1" keySplines=".333 0 .667 .476;.333 .524 .667 1;.333 0 .667 .476;.333 .524 .667 1" dur="1.6s" repeatCount="indefinite"/></path>
    <g><animateTransform attributeName="transform" type="translate" values="0 13;0 0;0 -13;0 0;0 13" calcMode="spline" keyTimes="0;.25;.5;.75;1" keySplines=".333 0 .667 .476;.333 .524 .667 1;.333 0 .667 .476;.333 .524 .667 1" dur="1.6s" repeatCount="indefinite"/>
      <rect class="fl-panel st-ink" stroke-width="1.5" x="263" y="94" width="17" height="6" rx="2.5"/><rect class="fl-warm" opacity=".55" x="263" y="94" width="17" height="6" rx="2.5"/>
    </g>
    <circle class="fl-dark st-ink" stroke-width="1" cx="264" cy="97" r="3"/>
  </g>
  <g clip-path="url(#phonograph-cyl)">
    <path class="st-ink fl-none" stroke-width=".7" opacity=".6" d="M152.5 73L151.5 121M155 73L154 121M157.5 73L156.5 121M160 73L159 121M162.5 73L161.5 121M165 73L164 121M167.5 73L166.5 121M170 73L169 121M172.5 73L171.5 121M175 73L174 121M177.5 73L176.5 121M180 73L179 121M182.5 73L181.5 121M185 73L184 121M187.5 73L186.5 121M190 73L189 121M192.5 73L191.5 121M195 73L194 121M197.5 73L196.5 121M200 73L199 121M202.5 73L201.5 121M205 73L204 121M207.5 73L206.5 121M210 73L209 121M212.5 73L211.5 121M215 73L214 121"/>
    <g class="from-3"><path class="st-ink fl-none" stroke-width=".7" opacity=".6" d="M107.5 73L106.5 121M110 73L109 121M112.5 73L111.5 121M115 73L114 121M117.5 73L116.5 121M120 73L119 121M122.5 73L121.5 121M125 73L124 121M127.5 73L126.5 121M130 73L129 121M132.5 73L131.5 121M135 73L134 121M137.5 73L136.5 121M140 73L139 121M142.5 73L141.5 121M145 73L144 121M147.5 73L146.5 121M150 73L149 121"/></g>
  </g>
</g>
<g class="hl-1 hl-2 hl-3">
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M79 140L81 90Q84 84 87 90L89 140zM227 140L229 90Q232 84 235 90L237 140z"/>
  <circle class="fl-line st-ink" stroke-width="1.2" cx="84" cy="97" r="4.2"/><circle class="fl-line st-ink" stroke-width="1.2" cx="232" cy="97" r="4.2"/>
</g>
<g class="hl-2 hl-3">
  <path class="arrow st-ink" style="stroke-width:1.5" d="M245 109A12 12 0 0 0 245 85" marker-end="url(#phonograph-a)"/>
</g>

<!-- ===== המשפך, הקרום והמחט ===== -->
<g class="hl-1 hl-2 hl-3">
  <path class="fl-panel" d="M122 10C136 20 145 36 146 50H158C159 36 168 20 182 10z"/>
  <path class="fl-elec st-ink" fill-opacity=".5" stroke-width="2" stroke-linejoin="round" d="M122 10C136 20 145 36 146 50H158C159 36 168 20 182 10z"/>
  <ellipse class="fl-soft st-ink" stroke-width="1.6" cx="152" cy="10" rx="30" ry="3.6"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="141" y="50" width="22" height="8.5" rx="1.5"/>
  <rect class="fl-dark" x="141.8" y="50.8" width="3.4" height="7"/><rect class="fl-dark" x="158.8" y="50.8" width="3.4" height="7"/>
  <path class="fl-none st-ink" stroke-width="1.8" stroke-linecap="round" d="M145 54Q152 54 159 54"><animate attributeName="d" values="M145 54Q152 52.39 159 54;M145 54Q152 52.38 159 54;M145 54Q152 52.64 159 54;M145 54Q152 52.91 159 54;M145 54Q152 53 159 54;M145 54Q152 52.94 159 54;M145 54Q152 52.87 159 54;M145 54Q152 52.95 159 54;M145 54Q152 53.24 159 54;M145 54Q152 53.61 159 54;M145 54Q152 53.88 159 54;M145 54Q152 53.9 159 54;M145 54Q152 53.71 159 54;M145 54Q152 53.51 159 54;M145 54Q152 53.6 159 54;M145 54Q152 54.16 159 54;M145 54Q152 55.14 159 54;M145 54Q152 56.24 159 54;M145 54Q152 57.03 159 54;M145 54Q152 57.16 159 54;M145 54Q152 56.52 159 54;M145 54Q152 55.32 159 54;M145 54Q152 53.98 159 54;M145 54Q152 52.92 159 54;M145 54Q152 52.39 159 54" dur="2s" repeatCount="indefinite"/></path>
  <path class="fl-ink" d="M150.5 55.5H153.5L152 71.6z"><animateTransform attributeName="transform" type="translate" values="0 -0.8;0 -0.81;0 -0.68;0 -0.55;0 -0.5;0 -0.53;0 -0.57;0 -0.52;0 -0.38;0 -0.19;0 -0.06;0 -0.05;0 -0.14;0 -0.24;0 -0.2;0 0.08;0 0.57;0 1.12;0 1.51;0 1.58;0 1.26;0 0.66;0 -0.01;0 -0.54;0 -0.8" dur="2s" repeatCount="indefinite"/></path>
</g>
<g class="only-1 only-2" clip-path="url(#phonograph-fun)">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 10" dur="1.1s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8" d="M108 -6Q152 3 196 -6M108 4Q152 13 196 4M108 14Q152 23 196 14M108 24Q152 33 196 24M108 34Q152 43 196 34M108 44Q152 53 196 44M108 54Q152 63 196 54"/></g>
</g>
<g class="hl-3"><g class="from-3" clip-path="url(#phonograph-fun)">
  <g><animateTransform attributeName="transform" type="translate" values="0 10;0 0" dur="1.1s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:1.8" d="M108 -6Q152 -15 196 -6M108 4Q152 -5 196 4M108 14Q152 5 196 14M108 24Q152 15 196 24M108 34Q152 25 196 34M108 44Q152 35 196 44M108 54Q152 45 196 54"/></g>
</g></g>

<!-- ===== מבט מוגדל: גל הקול מעל פרופיל החריץ ===== -->
<g class="hl-2 hl-3">
  <circle class="fl-none st-ink" stroke-width="1.2" cx="152" cy="71.5" r="4.5"/>
  <path class="thin st-ink" stroke-dasharray="3 3" d="M156 69L224 20M156.5 73L224 62"/>
  <rect class="fl-panel st-line" stroke-width="1.2" x="224" y="8" width="88" height="58" rx="6"/>
  <g clip-path="url(#phonograph-lens)">
    <g><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="2s" repeatCount="indefinite"/><path class="wire st-violet" style="stroke-width:2" d="M227 17.88L228 17.49L229 17.4L230 17.53L231 17.78L232 18.07L233 18.29L234 18.42L235 18.43L236 18.37L237 18.28L238 18.23L239 18.27L240 18.43L241 18.7L242 19.04L243 19.39L244 19.68L245 19.85L246 19.87L247 19.75L248 19.55L249 19.34L250 19.22L251 19.3L252 19.63L253 20.25L254 21.11L255 22.13L256 23.17L257 24.09L258 24.73L259 25L260 24.82L261 24.22L262 23.26L263 22.06L264 20.79L265 19.58L266 18.59L267 17.88L268 17.49L269 17.4L270 17.53L271 17.78L272 18.07L273 18.29L274 18.42L275 18.43L276 18.37L277 18.28L278 18.23L279 18.27L280 18.43L281 18.7L282 19.04L283 19.39L284 19.68L285 19.85L286 19.87L287 19.75L288 19.55L289 19.34L290 19.22L291 19.3L292 19.63L293 20.25L294 21.11L295 22.13L296 23.17L297 24.09L298 24.73L299 25L300 24.82L301 24.22L302 23.26L303 22.06L304 20.79L305 19.58L306 18.59L307 17.88L308 17.49L309 17.4L310 17.53L311 17.78L312 18.07L313 18.29L314 18.42L315 18.43L316 18.37L317 18.28L318 18.23L319 18.27L320 18.43L321 18.7L322 19.04L323 19.39L324 19.68L325 19.85L326 19.87L327 19.75L328 19.55L329 19.34L330 19.22L331 19.3L332 19.63L333 20.25L334 21.11L335 22.13L336 23.17L337 24.09L338 24.73L339 25L340 24.82L341 24.22L342 23.26L343 22.06L344 20.79L345 19.58L346 18.59L347 17.88L348 17.49L349 17.4"/></g>
    <rect class="fl-elec" opacity=".55" x="226" y="56" width="84" height="9"/>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;-40 0" dur="2s" repeatCount="indefinite"/><path class="fl-soft" d="M227 42.88L228 42.49L229 42.4L230 42.53L231 42.78L232 43.07L233 43.29L234 43.42L235 43.43L236 43.37L237 43.28L238 43.23L239 43.27L240 43.43L241 43.7L242 44.04L243 44.39L244 44.68L245 44.85L246 44.87L247 44.75L248 44.55L249 44.34L250 44.22L251 44.3L252 44.63L253 45.25L254 46.11L255 47.13L256 48.17L257 49.09L258 49.73L259 50L260 49.82L261 49.22L262 48.26L263 47.06L264 45.79L265 44.58L266 43.59L267 42.88L268 42.49L269 42.4L270 42.53L271 42.78L272 43.07L273 43.29L274 43.42L275 43.43L276 43.37L277 43.28L278 43.23L279 43.27L280 43.43L281 43.7L282 44.04L283 44.39L284 44.68L285 44.85L286 44.87L287 44.75L288 44.55L289 44.34L290 44.22L291 44.3L292 44.63L293 45.25L294 46.11L295 47.13L296 48.17L297 49.09L298 49.73L299 50L300 49.82L301 49.22L302 48.26L303 47.06L304 45.79L305 44.58L306 43.59L307 42.88L308 42.49L309 42.4L310 42.53L311 42.78L312 43.07L313 43.29L314 43.42L315 43.43L316 43.37L317 43.28L318 43.23L319 43.27L320 43.43L321 43.7L322 44.04L323 44.39L324 44.68L325 44.85L326 44.87L327 44.75L328 44.55L329 44.34L330 44.22L331 44.3L332 44.63L333 45.25L334 46.11L335 47.13L336 48.17L337 49.09L338 49.73L339 50L340 49.82L341 49.22L342 48.26L343 47.06L344 45.79L345 44.58L346 43.59L347 42.88L348 42.49L349 42.4L349 57L227 57z"/><path class="wire st-ink" style="stroke-width:1.5" d="M227 42.88L228 42.49L229 42.4L230 42.53L231 42.78L232 43.07L233 43.29L234 43.42L235 43.43L236 43.37L237 43.28L238 43.23L239 43.27L240 43.43L241 43.7L242 44.04L243 44.39L244 44.68L245 44.85L246 44.87L247 44.75L248 44.55L249 44.34L250 44.22L251 44.3L252 44.63L253 45.25L254 46.11L255 47.13L256 48.17L257 49.09L258 49.73L259 50L260 49.82L261 49.22L262 48.26L263 47.06L264 45.79L265 44.58L266 43.59L267 42.88L268 42.49L269 42.4L270 42.53L271 42.78L272 43.07L273 43.29L274 43.42L275 43.43L276 43.37L277 43.28L278 43.23L279 43.27L280 43.43L281 43.7L282 44.04L283 44.39L284 44.68L285 44.85L286 44.87L287 44.75L288 44.55L289 44.34L290 44.22L291 44.3L292 44.63L293 45.25L294 46.11L295 47.13L296 48.17L297 49.09L298 49.73L299 50L300 49.82L301 49.22L302 48.26L303 47.06L304 45.79L305 44.58L306 43.59L307 42.88L308 42.49L309 42.4L310 42.53L311 42.78L312 43.07L313 43.29L314 43.42L315 43.43L316 43.37L317 43.28L318 43.23L319 43.27L320 43.43L321 43.7L322 44.04L323 44.39L324 44.68L325 44.85L326 44.87L327 44.75L328 44.55L329 44.34L330 44.22L331 44.3L332 44.63L333 45.25L334 46.11L335 47.13L336 48.17L337 49.09L338 49.73L339 50L340 49.82L341 49.22L342 48.26L343 47.06L344 45.79L345 44.58L346 43.59L347 42.88L348 42.49L349 42.4"/></g>
    <g class="only-2"><rect class="fl-soft" x="268" y="39.2" width="44" height="17.8"/><path class="wire st-ink" style="stroke-width:1.5" d="M268 40H312"/></g>
    <path class="thin st-ink" style="stroke-width:1" d="M226 57H310"/>
    <path class="fl-ink" d="M264 31H272L268 45z"><animateTransform attributeName="transform" type="translate" values="0 -2.51;0 -2.53;0 -2.12;0 -1.71;0 -1.56;0 -1.66;0 -1.77;0 -1.64;0 -1.19;0 -0.61;0 -0.19;0 -0.15;0 -0.45;0 -0.76;0 -0.62;0 0.25;0 1.78;0 3.5;0 4.73;0 4.93;0 3.93;0 2.06;0 -0.03;0 -1.68;0 -2.51" dur="2s" repeatCount="indefinite"/></path>
  </g>
</g>

<g class="only-1">
  <text x="58" y="26" class="lg">1877</text>
  <text x="58" y="42" class="sm">פונוגרף יריעת הבדיל</text>
  <text x="160" y="176">המשפך מרכז את הקול אל קרום דק</text>
  <text x="160" y="194">והקרום מרעיד את המחט</text>
</g>
<g class="only-2">
  <text x="203" y="23" class="sm">גל הקול</text>
  <text x="203" y="49" class="sm">החריץ</text>
  <text x="160" y="176">המחט חורטת חריץ ביריעת בדיל</text>
  <text x="160" y="194">עמוק או רדוד, לפי הקול</text>
</g>
<g class="only-3">
  <text x="203" y="23" class="sm">גל הקול</text>
  <text x="203" y="49" class="sm">החריץ</text>
  <text x="160" y="176">עכשיו החריץ מרעיד את המחט</text>
  <text x="160" y="194">והמשפך מגביר, בלי חשמל</text>
</g>

<!-- ===== שלב 4: דיסקה שטוחה, חריץ מתפתל, הטבעה ועותקים ===== -->
<g class="from-4">
  <ellipse class="fl-dark st-ink" stroke-width="1.5" cx="46" cy="180" rx="36" ry="15"/>
  <g fill="none" stroke="#fff" stroke-opacity=".4" stroke-width=".8"><ellipse cx="46" cy="180" rx="30.5" ry="12.6"/><ellipse cx="46" cy="180" rx="25" ry="10.3"/><ellipse cx="46" cy="180" rx="19.5" ry="8"/><ellipse cx="46" cy="180" rx="14" ry="5.7"/></g>
  <ellipse class="fl-hot st-ink" stroke-width="1" cx="46" cy="180" rx="9" ry="3.7"/>
  <ellipse class="fl-panel" cx="46" cy="180" rx="1.6" ry=".8"/>
  <circle fill="#fff" r="1.3"><animateMotion dur="1.6s" repeatCount="indefinite" path="M52 180A6 2.4 0 1 1 40 180A6 2.4 0 1 1 52 180"/></circle>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="72" cy="180" r="4"/>
  <path class="thin st-ink" stroke-dasharray="3 3" d="M75 177L93 168M75 183L93 192"/>
  <circle class="fl-dark" cx="108" cy="180" r="18"/>
  <g clip-path="url(#phonograph-dl)">
    <g><animateTransform attributeName="transform" type="translate" values="0 0;-30 0" dur="2s" repeatCount="indefinite"/>
      <path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2" d="M89 168.9L90 168.66L91 168.68L92 168.85L93 169.04L94 169.16L95 169.19L96 169.14L97 169.08L98 169.1L99 169.22L100 169.44L101 169.68L102 169.87L103 169.94L104 169.87L105 169.73L106 169.61L107 169.63L108 169.9L109 170.42L110 171.11L111 171.82L112 172.37L113 172.6L114 172.43L115 171.88L116 171.07L117 170.19L118 169.42L119 168.9L120 168.66L121 168.68L122 168.85L123 169.04L124 169.16L125 169.19L126 169.14L127 169.08L128 169.1L129 169.22L130 169.44L131 169.68L132 169.87L133 169.94L134 169.87L135 169.73L136 169.61L137 169.63L138 169.9L139 170.42L140 171.11L141 171.82L142 172.37L143 172.6L144 172.43L145 171.88L146 171.07L147 170.19L148 169.42L149 168.9L150 168.66L151 168.68L152 168.85L153 169.04L154 169.16L155 169.19L156 169.14L157 169.08L158 169.1"/>
      <path fill="none" stroke="#fff" stroke-opacity=".95" stroke-width="1.6" d="M89 178.9L90 178.66L91 178.68L92 178.85L93 179.04L94 179.16L95 179.19L96 179.14L97 179.08L98 179.1L99 179.22L100 179.44L101 179.68L102 179.87L103 179.94L104 179.87L105 179.73L106 179.61L107 179.63L108 179.9L109 180.42L110 181.11L111 181.82L112 182.37L113 182.6L114 182.43L115 181.88L116 181.07L117 180.19L118 179.42L119 178.9L120 178.66L121 178.68L122 178.85L123 179.04L124 179.16L125 179.19L126 179.14L127 179.08L128 179.1L129 179.22L130 179.44L131 179.68L132 179.87L133 179.94L134 179.87L135 179.73L136 179.61L137 179.63L138 179.9L139 180.42L140 181.11L141 181.82L142 182.37L143 182.6L144 182.43L145 181.88L146 181.07L147 180.19L148 179.42L149 178.9L150 178.66L151 178.68L152 178.85L153 179.04L154 179.16L155 179.19L156 179.14L157 179.08L158 179.1"/>
      <path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2" d="M89 188.9L90 188.66L91 188.68L92 188.85L93 189.04L94 189.16L95 189.19L96 189.14L97 189.08L98 189.1L99 189.22L100 189.44L101 189.68L102 189.87L103 189.94L104 189.87L105 189.73L106 189.61L107 189.63L108 189.9L109 190.42L110 191.11L111 191.82L112 192.37L113 192.6L114 192.43L115 191.88L116 191.07L117 190.19L118 189.42L119 188.9L120 188.66L121 188.68L122 188.85L123 189.04L124 189.16L125 189.19L126 189.14L127 189.08L128 189.1L129 189.22L130 189.44L131 189.68L132 189.87L133 189.94L134 189.87L135 189.73L136 189.61L137 189.63L138 189.9L139 190.42L140 191.11L141 191.82L142 192.37L143 192.6L144 192.43L145 191.88L146 191.07L147 190.19L148 189.42L149 188.9L150 188.66L151 188.68L152 188.85L153 189.04L154 189.16L155 189.19L156 189.14L157 189.08L158 189.1"/>
    </g>
    <circle class="fl-hot" stroke="#fff" stroke-width="1" cx="108" cy="180" r="2.6"><animateTransform attributeName="transform" type="translate" values="0 -0.1;0 0.58;0 1.47;0 2.26;0 2.6;0 2.32;0 1.5;0 0.41;0 -0.58;0 -1.19;0 -1.35;0 -1.2;0 -0.96;0 -0.82;0 -0.83;0 -0.91;0 -0.9;0 -0.73;0 -0.44;0 -0.17;0 -0.06;0 -0.16;0 -0.35;0 -0.39;0 -0.1" dur="2s" repeatCount="indefinite"/></circle>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="108" cy="180" r="18"/>
  <!-- מכבש הטבעה -->
  <path class="arrow st-ink" style="stroke-width:1.6" d="M130 180H137" marker-end="url(#phonograph-a)"/>
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M142 160H200V165H197V196H201V200H141V196H145V165H142z"/>
  <rect class="fl-bg" x="147.5" y="165.8" width="47" height="29.4"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 11;0 11;0 0;0 0" keyTimes="0;.3;.5;.8;1" dur="2.4s" repeatCount="indefinite"/>
    <rect class="fl-line st-ink" stroke-width="1" x="168.5" y="152" width="5" height="16"/>
    <rect class="fl-line st-ink" stroke-width="1.2" x="151" y="167" width="40" height="5.5" rx="1"/>
    <rect class="fl-elec st-ink" stroke-width=".8" x="153" y="172.5" width="36" height="2.5"/>
  </g>
  <rect class="fl-dark st-ink" stroke-width="1" x="152" y="186" width="38" height="4" rx="1.5"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="149" y="190" width="44" height="5.5" rx="1"/>
  <!-- עותקים -->
  <ellipse class="fl-dark st-ink" stroke-width="1.1" cx="268" cy="195" rx="30" ry="7"/><ellipse class="fl-dark st-ink" stroke-width="1.1" cx="268" cy="190" rx="30" ry="7"/><ellipse class="fl-dark st-ink" stroke-width="1.1" cx="268" cy="185" rx="30" ry="7"/><ellipse class="fl-dark st-ink" stroke-width="1.1" cx="268" cy="180" rx="30" ry="7"/>
  <ellipse class="fl-hot st-ink" stroke-width=".8" cx="268" cy="180" rx="7" ry="1.7"/>
  <g><animateMotion dur="2.4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.52;.95;1" keyPoints="0;0;1;1" path="M171 186Q220 150 268 172"/><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.52;.6;.9;1" dur="2.4s" repeatCount="indefinite"/>
    <ellipse class="fl-dark st-ink" stroke-width="1" rx="19" ry="3.2"/><ellipse class="fl-hot" rx="4.5" ry="1"/>
  </g>
</g>
<g class="only-4">
  <text x="58" y="26" class="lg">1887</text>
  <text x="58" y="42" class="sm">התקליט השטוח של ברלינר</text>
  <text x="96" y="212" class="sm">חריץ שמתפתל לצדדים</text>
  <text x="171" y="212" class="sm">תבנית</text>
  <text x="268" y="212" class="sm">אלפי עותקים</text>
</g>
`;
