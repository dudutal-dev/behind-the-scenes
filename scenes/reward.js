// מערכת התגמול: 1 מסלול הדופמין מה־VTA לאקומבנס ולקליפת המצח · 2 פרס מפתיע: פרץ ירי ברגע הפרס · 3 אחרי למידה הפרץ עובר לרמז, ופרס שלא הגיע גורם לצניחה · 4 פרס לא ודאי שומר על ההפתעה, והפעולה עוברת לסטריאטום ונעשית הרגל
export default `
<defs><marker id="reward-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker></defs>
<!-- המוח בחתך אורך, המצח משמאל -->
<g transform="translate(4 22)">
  <path class="body" d="M96 108C98 130 100 150 102 172L116 172C114 150 114 130 112 108Z"/>
  <path class="body" d="M112 116C120 108 146 108 150 122C152 136 136 144 122 140C112 136 108 126 112 116Z"/>
  <path class="thin" style="stroke-width:1" d="M118 124C126 120 140 120 146 126M116 132C126 128 138 130 144 134"/>
  <path class="body" d="M18 98C6 76 8 42 34 24C58 8 104 6 128 20C148 32 156 58 152 84C150 100 144 110 134 114C124 118 112 116 104 114C90 112 80 118 66 120C46 122 26 114 18 98Z"/>
  <path class="fl-violet" opacity=".22" d="M18 98C6 76 8 42 34 24C40 21 46 19 52 18C46 34 42 52 40 66C38 80 34 92 30 104C24 102 20 101 18 98Z"/>
  <path class="thin" d="M44 70C62 48 106 46 122 66M30 50C40 44 48 48 56 40M76 30C84 38 96 34 104 28M126 44C134 52 140 60 146 66M128 86C136 90 142 96 146 98"/>
  <ellipse class="fl-soft st-line" style="stroke-width:1" cx="98" cy="82" rx="11" ry="7"/>
  <g class="hl-4"><path class="fl-soft st-ink" style="stroke-width:1.4" d="M60 88C56 72 66 60 84 62C90 63 92 68 86 70C76 70 70 78 70 90Z"/></g>
  <g class="only-4"><path class="fl-warm" opacity=".55" d="M60 88C56 72 66 60 84 62C90 63 92 68 86 70C76 70 70 78 70 90Z"><animate attributeName="opacity" values=".25;.7;.25" dur="1.6s" repeatCount="indefinite"/></path>
    <path class="pipe st-warm" style="stroke-width:3" d="M106 104C100 90 92 80 82 76"/><path class="flow" style="stroke-width:1.5" d="M106 104C100 90 92 80 82 76"/></g>
  <!-- מסלולי הדופמין -->
  <path class="pipe st-warm" style="stroke-width:4" d="M104 107C92 105 78 101 66 98"/>
  <path class="pipe st-warm" style="stroke-width:4" d="M103 104C92 94 70 92 54 86C42 80 36 70 32 60"/>
  <ellipse class="fl-warm st-ink" style="stroke-width:1.4" cx="62" cy="97" rx="7" ry="5"/>
  <ellipse class="fl-hot st-ink" style="stroke-width:1.4" cx="106" cy="107" rx="5.5" ry="4.5"/>
  <g class="only-1">
    <path class="flow" style="stroke-width:1.6" d="M104 107C92 105 78 101 66 98"/><path class="flow" style="stroke-width:1.6" d="M103 104C92 94 70 92 54 86C42 80 36 70 32 60"/>
    <circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="1.5s" begin="-0s" repeatCount="indefinite" path="M104 107C92 105 78 101 66 98"/></circle><circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="2.2s" begin="-0s" repeatCount="indefinite" path="M103 104C92 94 70 92 54 86C42 80 36 70 32 60"/></circle><circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M104 107C92 105 78 101 66 98"/></circle><circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="2.2s" begin="-0.7s" repeatCount="indefinite" path="M103 104C92 94 70 92 54 86C42 80 36 70 32 60"/></circle><circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M104 107C92 105 78 101 66 98"/></circle><circle class="fl-elec st-ink" style="stroke-width:.6" r="2.2"><animateMotion dur="2.2s" begin="-1.5s" repeatCount="indefinite" path="M103 104C92 94 70 92 54 86C42 80 36 70 32 60"/></circle>
    <circle class="ring st-hot" cx="106" cy="107" r="10"/>
  </g>
  <g class="only-2 only-3"><circle class="fl-elec" cx="106" cy="107" r="3"><animate attributeName="opacity" values="0;1;0" dur=".9s" repeatCount="indefinite"/></circle></g>
</g>
<!-- תוויות המבנים -->
<path class="thin" style="stroke-width:1" d="M34 23L32 52M52 160L64 124M94 176L108 133"/>
<text class="sm" x="40" y="19">קליפת המצח</text>
<text class="sm" x="46" y="170">אקומבנס</text>
<text class="sm" x="86" y="186">VTA</text>
<g class="only-1"><text x="62" y="210">מסלול הדופמין</text></g>
<g class="only-4"><path class="thin" style="stroke-width:1" d="M108 24L84 82"/><text x="122" y="19">הרגל: סטריאטום</text></g>

<!-- ירי תאי הדופמין לאורך זמן -->
<rect class="fl-panel st-line" style="stroke-width:1" x="168" y="8" width="146" height="204" rx="8"/>
<path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M206 40V206M268 40V206"/>
<circle class="fl-elec st-ink" style="stroke-width:1.2" cx="206" cy="30" r="5"/><path class="thin st-ink" style="stroke-width:1.2;stroke:var(--s-ink)" d="M198 30h-2.5M216.5 30h-2.5M206 21v-3M199.6 23.6l-2-2M212.4 23.6l2-2"/>
<text class="sm" x="183" y="33">רמז</text>
<path class="fl-cold st-ink" d="M268 24C271 28 272.5 30 272.5 32A4.5 4.5 0 0 1 263.5 32C263.5 30 265 28 268 24Z"/>
<text class="sm" x="290" y="33">מיץ</text>
<g class="hl-2">
  <path class="thin" style="stroke-width:.8" d="M176 66H308"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M176 65.2L177.5 66.7L179 65.7L180.5 65.5L182 66.4L183.5 66.1L185 65.7L186.5 66.4L188 66.4L189.5 66.1L191 66.3L192.5 66.2L194 66.5L195.5 65.6L197 65.8L198.5 66.3L200 66.3L201.5 65.3L203 66.3L204.5 65.9L206 66.7L207.5 66.5L209 65.4L210.5 66L212 66.7L213.5 66.3L215 66.2L216.5 66.1L218 66.7L219.5 66.7L221 65.8L222.5 65.7L224 66.5L225.5 65.7L227 65.4L228.5 65.7L230 65.9L231.5 65.7L233 66.7L234.5 66.1L236 66.4L237.5 66.6L239 65.3L240.5 65.6L242 66.1L243.5 66L245 65.9L246.5 65.5L248 66.7L249.5 65.3L251 65.8L252.5 65.8L254 66.3L255.5 66.7L257 66L258.5 65.3L260 65.1L261.5 63.6L263 61.1L264.5 57.1L266 52.6L267.5 50.2L269 50.9L270.5 53.8L272 59.3L273.5 62.3L275 65.1L276.5 65.7L278 66.1L279.5 66L281 66L282.5 66.3L284 66.7L285.5 65.8L287 66.3L288.5 65.6L290 66.1L291.5 65.8L293 65.7L294.5 65.8L296 66.5L297.5 66.6L299 65.4L300.5 66.5L302 65.3L303.5 65.9L305 65.4L306.5 65.3L308 66.8"/>
  <text class="sm" x="203.4" y="79">פרס מפתיע</text>
</g>
<g class="hl-3">
  <path class="thin" style="stroke-width:.8" d="M176 106H308"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M176 105.6L177.5 106.2L179 105.4L180.5 105.9L182 106.1L183.5 105.4L185 106.7L186.5 106.6L188 106.6L189.5 106.6L191 106.7L192.5 106.4L194 105.6L195.5 105.1L197 105.3L198.5 104.3L200 102.4L201.5 100.2L203 95.3L204.5 92.1L206 90L207.5 92L209 95.3L210.5 100.7L212 102.8L213.5 104.8L215 106.3L216.5 105.3L218 106L219.5 105.2L221 106.7L222.5 106.2L224 106.7L225.5 105.2L227 106.6L228.5 105.5L230 106.7L231.5 106.1L233 106.3L234.5 105.6L236 105.6L237.5 105.5L239 106.1L240.5 105.3L242 106.4L243.5 106.3L245 106.3L246.5 106L248 105.3L249.5 105.4L251 106.7L252.5 105.4L254 106.3L255.5 106.6L257 105.3L258.5 106.6L260 106.6L261.5 106.8L263 106.7L264.5 106.4L266 105.9L267.5 105.6L269 106.4L270.5 106.6L272 105.8L273.5 105.6L275 105.8L276.5 106.6L278 106.1L279.5 105.8L281 106.2L282.5 106.4L284 105.7L285.5 106.4L287 105.9L288.5 105.5L290 105.7L291.5 106.8L293 106.8L294.5 106.2L296 106.6L297.5 106.7L299 105.5L300.5 106.2L302 105.4L303.5 106L305 106.1L306.5 106.4L308 106.7"/>
  <text class="sm" x="206" y="119">אחרי למידה</text>
</g>
<g class="hl-3">
  <path class="thin" style="stroke-width:.8" d="M176 146H308"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M176 146L177.5 145.5L179 145.9L180.5 145.5L182 146.3L183.5 146L185 146.1L186.5 146L188 146.4L189.5 145.8L191 146.4L192.5 145.2L194 145.7L195.5 146L197 145.2L198.5 145.3L200 142.9L201.5 139.6L203 135.9L204.5 131.6L206 129.3L207.5 132.1L209 136.2L210.5 140.7L212 143.9L213.5 145.3L215 146.4L216.5 145.2L218 146.4L219.5 146.2L221 146.4L222.5 146.6L224 145.3L225.5 145.4L227 145.3L228.5 145.4L230 145.3L231.5 145.2L233 146.2L234.5 146.7L236 145.5L237.5 145.4L239 145.5L240.5 146.3L242 145.6L243.5 145.9L245 146.8L246.5 145.9L248 146.3L249.5 146.4L251 145.9L252.5 145.9L254 145.4L255.5 145.9L257 147.1L258.5 147.9L260 147.4L261.5 149.7L263 150.3L264.5 150.9L266 152L267.5 153.1L269 152.3L270.5 151.5L272 150.7L273.5 150.1L275 148.7L276.5 147.6L278 147.7L279.5 145.8L281 146.1L282.5 145.8L284 145.2L285.5 145.2L287 145.9L288.5 145.3L290 145.6L291.5 146.7L293 146.4L294.5 146.4L296 145.9L297.5 146.6L299 146.7L300.5 146.5L302 146.3L303.5 146.1L305 145.8L306.5 145.9L308 146"/>
  <text class="sm" x="211.2" y="159">הפרס לא הגיע</text>
</g>
<g class="hl-4">
  <path class="thin" style="stroke-width:.8" d="M176 186H308"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M176 186L177.5 186.1L179 186.4L180.5 186.3L182 186.2L183.5 186.4L185 186.6L186.5 186.6L188 186.8L189.5 185.9L191 186L192.5 186.7L194 186.8L195.5 185.7L197 185.1L198.5 185.1L200 184.9L201.5 182.6L203 179.9L204.5 177.8L206 176.5L207.5 176.6L209 179.1L210.5 182.8L212 183.6L213.5 186L215 186.3L216.5 186.2L218 186.3L219.5 186.1L221 185.9L222.5 186.6L224 186.1L225.5 186.6L227 185.6L228.5 186.3L230 185.9L231.5 185.8L233 185.5L234.5 186.1L236 185.6L237.5 186.6L239 186.5L240.5 185.7L242 186.3L243.5 186.6L245 185.4L246.5 185.7L248 186.7L249.5 185.2L251 185.4L252.5 185.8L254 185.2"/><path class="wire st-ink" style="stroke-width:1.5" d="M281 186.3L282.5 186.6L284 185.5L285.5 185.5L287 186.7L288.5 186.3L290 185.5L291.5 185.4L293 186.2L294.5 185.2L296 186.5L297.5 186.1L299 186.4L300.5 185.4L302 185.7L303.5 186.3L305 186.7L306.5 186.1L308 186.1"/>
  <g><animate attributeName="opacity" calcMode="discrete" values="1;0;0;1;1" keyTimes="0;.25;.5;.75;1" dur="12s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.5" d="M254 186.4L255.5 186.3L257 186.3L258.5 186L260 184.9L261.5 184L263 183.2L264.5 180.1L266 177.9L267.5 175.7L269 176L270.5 178.8L272 181.6L273.5 184.2L275 184.7L276.5 186.4L278 185.2L279.5 186.3L281 185.8"/><path class="fl-cold" d="M286 167C289 171 290.5 173 290.5 175A4.5 4.5 0 0 1 281.5 175C281.5 173 283 171 286 167Z"/></g>
  <g><animate attributeName="opacity" calcMode="discrete" values="0;1;1;0;0" keyTimes="0;.25;.5;.75;1" dur="12s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.5" d="M254 186.6L255.5 186.5L257 186.9L258.5 186.2L260 188.1L261.5 188.1L263 189.5L264.5 189.8L266 191.2L267.5 191.4L269 191.3L270.5 191.1L272 190.2L273.5 188.2L275 188.2L276.5 186.6L278 186.1L279.5 187.1L281 186.9"/></g>
  <text class="sm" x="208.6" y="199">פרס לא ודאי</text>
</g>

<!-- סמן הזמן -->
<g class="hl-2 hl-3 hl-4"><path class="wire st-hot" style="stroke-width:1.2;stroke-dasharray:3 2" d="M176 42V200"><animateTransform attributeName="transform" type="translate" values="0 0;132 0" dur="3s" repeatCount="indefinite"/></path></g>
<g class="hl-2"><circle class="fl-hot" cx="268" cy="50" r="3.2" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.7;0.8;1" dur="3s" repeatCount="indefinite"/></circle></g>
<g class="hl-3"><circle class="fl-hot" cx="206" cy="90" r="3.2" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.2;0.2;0.3;1" dur="3s" repeatCount="indefinite"/></circle><circle class="fl-hot" cx="206" cy="130" r="3.2" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.2;0.2;0.3;1" dur="3s" repeatCount="indefinite"/></circle></g>
<g class="hl-4"><circle class="fl-hot" cx="206" cy="176" r="3.2" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.2;0.2;0.3;1" dur="3s" repeatCount="indefinite"/></circle></g>
<g class="only-2"><text class="sm" x="232" y="56">יותר מהצפוי</text></g>
<g class="only-3"><text class="sm" x="244" y="139">פחות מהצפוי</text></g>
`;
