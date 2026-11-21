// עוצי: 1 הקרח זורם מעל השקע ושומר את הגוף · 2 קיבה מלאה בסריקה · 3 ראש חץ בכתף ועורק קרוע · 4 קעקועים וחתימת העופרת בגרזן הנחושת
export default `
<!-- לוח שמאל: אתר הממצא בחתך -->
<g class="hl-1">
  <path class="fl-soft st-line" stroke-width="1.2" stroke-linejoin="round" d="M6 98V76L18 62L30 74L36 96ZM112 96L124 68L134 58L146 70V96Z"/>
  <path class="fl-panel" d="M18 62L13 68L19 67L23 70ZM134 58L128 66L134 64L139 66Z"/>
  <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M6 96Q48 86 90 94T146 90V146L120 156L104 176L64 178L46 158L6 148Z"/>
  <path class="wire st-cold dash" d="M140 108Q76 102 12 112"/>
  <path class="wire st-cold dash" d="M140 128Q90 122 40 130L12 134"/>
  <path class="wire st-cold dash" d="M140 141L118 150Q90 156 64 156L46 150L12 141"/>
  <path class="fl-line st-ink" fill-opacity=".55" stroke-width="2" stroke-linejoin="round" d="M6 148L46 158L64 178L104 176L120 156L146 146V206H6Z"/>
  <circle class="fl-warm st-ink" stroke-width="1.2" cx="71" cy="169" r="4"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="76" y="166" width="26" height="7" rx="3.5"/>
</g>
<path class="thin" style="stroke-dasharray:2 5" d="M153 14V206"/>

<!-- הגוף בסריקה -->
<g>
  <path class="st-ink fl-none" style="stroke-width:13;stroke-linecap:round" d="M170 64L163 128M226 64L233 128M188 140L186 202M208 140L210 202"/>
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M176 58Q198 51 220 58L222 100Q222 130 217 144H179Q174 130 174 100Z"/>
  <path class="st-soft fl-none" style="stroke:var(--s-soft);stroke-width:10;stroke-linecap:round" d="M170 64L163 128M226 64L233 128M188 140L186 202M208 140L210 202"/>
  <rect class="fl-soft st-ink" stroke-width="2" x="192" y="42" width="12" height="14" rx="3"/>
  <circle class="fl-soft st-ink" stroke-width="2" cx="198" cy="33" r="12"/>
  <path class="thin" style="stroke-width:1.2" d="M198 60V138M182 64Q190 60 197 64M199 64Q206 60 214 64M180 74Q198 68 216 74M180 82Q198 76 216 82M181 90Q198 84 215 90M183 98Q198 92 213 98"/>
</g>

<!-- 2 הקיבה -->
<g class="hl-2">
  <path class="fl-warm st-ink" fill-opacity=".45" stroke-width="1.5" d="M199 84Q214 79 217 91Q219 108 205 113Q193 116 191 106Q198 104 199 96Z"/>
  <circle class="fl-warm" cx="204" cy="90" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;-1 -1;0 0" dur="1.6s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="209" cy="94" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;0 1;0 0" dur="1.9s" repeatCount="indefinite"/></circle><circle class="fl-hot" cx="200" cy="99" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;1 -1;0 0" dur="2.2s" repeatCount="indefinite"/></circle><circle class="fl-elec" cx="206" cy="103" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;-1 1;0 0" dur="2.5s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="211" cy="100" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;0 -1;0 0" dur="1.6s" repeatCount="indefinite"/></circle><circle class="fl-elec" cx="198" cy="106" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;1 1;0 0" dur="1.9s" repeatCount="indefinite"/></circle><circle class="fl-hot" cx="203" cy="108" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;-1 -1;0 0" dur="2.2s" repeatCount="indefinite"/></circle><circle class="fl-elec" cx="212" cy="89" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;0 1;0 0" dur="2.5s" repeatCount="indefinite"/></circle><circle class="fl-hot" cx="207" cy="98" r="1.7"><animateTransform attributeName="transform" type="translate" values="0 0;1 -1;0 0" dur="1.6s" repeatCount="indefinite"/></circle>
</g>

<!-- 3 החץ והעורק -->
<g class="hl-3">
  <path class="wire st-hot" style="stroke-width:2" d="M199 72Q212 69 226 73L230 92"/>
  <path class="fl-line st-ink" stroke-width="1.2" stroke-linejoin="round" d="M224 62L211 70L222 74Z"/>
</g>

<!-- 4 קעקועים -->
<g class="hl-4"><path class="wire st-ink" style="stroke-width:1.2" d="M184 169h6M184 172h6M184 175h6"/><path class="wire st-ink" style="stroke-width:1.2" d="M206 169h6M206 172h6M206 175h6"/><path class="wire st-ink" style="stroke-width:1.2" d="M183 191h6M183 194h6M183 197h6"/><path class="wire st-ink" style="stroke-width:1.2" d="M207 191h6M207 194h6M207 197h6"/><path class="wire st-ink" style="stroke-width:1.2" d="M178 129v6M181 129v6M184 129v6"/><path class="wire st-ink" style="stroke-width:1.2" d="M212 129v6M215 129v6M218 129v6"/><path class="wire st-ink" style="stroke-width:1.2" d="M161 113h6M161 116h6M161 119h6"/></g>

<!-- 4 הגרזן -->
<g class="hl-4">
  <path class="fl-none st-ink" style="stroke-width:9;stroke-linecap:round" d="M258 202Q268 162 284 128"/>
  <path class="fl-none st-warm" style="stroke-width:6;stroke-linecap:round" d="M258 202Q268 162 284 128"/>
  <path class="fl-warm st-ink" fill-opacity=".55" stroke-width="1.5" stroke-linejoin="round" d="M278 132Q280 118 292 116L300 118V134L290 136Q282 138 278 132Z"/>
  <path class="fl-hot st-ink" fill-opacity=".75" stroke-width="1.5" stroke-linejoin="round" d="M298 120L312 113V141L298 133Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M290 117V136M294 117V135"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="76" y="40">הקרח זורם מעל</text>
  <text x="76" y="56">הגוף שמור בשקע</text>
  <path class="thin st-ink" style="stroke-width:1" d="M76 62L84 160"/>
  <circle class="fl-cold" r="2.2"><animateMotion dur="3s" repeatCount="indefinite" path="M140 141L118 150Q90 156 64 156L46 150L12 141"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M140 128Q90 122 40 130L12 134"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-warm" cx="205" cy="98" r="18"/>
  <text x="279" y="24">קיבה מלאה</text>
  <text x="279" y="40">יעל, צבי ודגן</text>
  <path class="thin st-ink" style="stroke-width:1" d="M246 30L218 88"/>
</g>

<!-- שלב 3 -->
<g class="only-3">
  <rect class="fl-cold" x="158" y="20" width="82" height="3" rx="1.5"><animate attributeName="y" values="20;204;20" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.8;.2" dur="1.6s" repeatCount="indefinite"/></rect>
  <circle class="ring st-hot" cx="218" cy="69" r="13"/>
  <circle class="fl-hot" cx="226" cy="76" r="3" opacity=".5"><animate attributeName="r" values="2;8;2" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;.15;.7" dur="2.4s" repeatCount="indefinite"/></circle>
  <text x="279" y="24">ראש חץ</text>
  <text x="279" y="38">מאבן צור</text>
  <text x="279" y="60">עורק נקרע</text>
  <path class="thin st-ink" style="stroke-width:1" d="M248 30L226 64M252 62L232 74"/>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <circle class="ring st-violet" cx="187" cy="172" r="8"/><circle class="ring st-violet d2" cx="209" cy="172" r="8"/><circle class="ring st-violet" cx="186" cy="194" r="8"/><circle class="ring st-violet d2" cx="210" cy="194" r="8"/><circle class="ring st-violet" cx="181" cy="132" r="8"/><circle class="ring st-violet d2" cx="215" cy="132" r="8"/><circle class="ring st-violet" cx="164" cy="116" r="8"/>
  <text x="279" y="24">61 קעקועים</text>
  <text x="279" y="40">נחושת מטוסקנה</text>
  <rect class="fl-hot" x="262" y="62" width="5.5" height="10" rx="1"/><rect class="fl-line" x="262" y="84" width="5.5" height="10" rx="1"><animate attributeName="height" values="5;14;10;10" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="89;80;84;84" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect><rect class="fl-hot" x="270.5" y="56" width="5.5" height="16" rx="1"/><rect class="fl-line" x="270.5" y="78" width="5.5" height="16" rx="1"><animate attributeName="height" values="12;7;16;16" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="82;87;78;78" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect><rect class="fl-hot" x="279" y="66" width="5.5" height="6" rx="1"/><rect class="fl-line" x="279" y="88" width="5.5" height="6" rx="1"><animate attributeName="height" values="14;10;6;6" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="80;84;88;88" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect><rect class="fl-hot" x="287.5" y="59" width="5.5" height="13" rx="1"/><rect class="fl-line" x="287.5" y="81" width="5.5" height="13" rx="1"><animate attributeName="height" values="6;15;13;13" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="88;79;81;81" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect><rect class="fl-hot" x="296" y="64" width="5.5" height="8" rx="1"/><rect class="fl-line" x="296" y="86" width="5.5" height="8" rx="1"><animate attributeName="height" values="12;5;8;8" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="82;89;86;86" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect><rect class="fl-hot" x="304.5" y="58" width="5.5" height="14" rx="1"/><rect class="fl-line" x="304.5" y="80" width="5.5" height="14" rx="1"><animate attributeName="height" values="7;9;14;14" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/><animate attributeName="y" values="87;85;80;80" keyTimes="0;.33;.6;1" dur="4.5s" repeatCount="indefinite"/></rect>
  <path class="thin" style="stroke-width:1" d="M260 72H312M260 94H312"/>
  <text class="sm" x="250" y="70">להב</text>
  <text class="sm" x="250" y="92">עפרה</text>
  <circle class="fl-elec" cx="305" cy="127" r="2.5"><animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite"/></circle>
</g>
`;
