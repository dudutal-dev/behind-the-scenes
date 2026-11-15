// זיכרון פלאש: 1 טרנזיסטור עם שער צף מוקף בידוד · 2 מתח גבוה דוחף אלקטרונים פנימה · 3 קריאה: כלוב ריק מעביר זרם, מלא חוסם · 4 הבידוד נשחק ודולף, והבקר מפזר כתיבות
export default `
<!-- מערך תאים ובקר; רמת המילוי של כל תא היא המידע -->
<g class="hl-3 hl-4">
  <path class="thin st-ink" d="M50 20H55V8H301M67 8V12M85 8V12M103 8V12M121 8V12M139 8V12M157 8V12M175 8V12M193 8V12M211 8V12M229 8V12M247 8V12M265 8V12M283 8V12M301 8V12M10 14h-4M10 20h-4M10 26h-4"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="10" y="8" width="40" height="24" rx="3"/>
  <rect fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2" x="18" y="13" width="24" height="14" rx="2"/>
  <rect class="body" style="stroke-width:1.3" x="60" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="62.5" y="19.4" width="9" height="10.6" rx="1"/><rect class="body" style="stroke-width:2.2" x="78" y="12" width="14" height="20" rx="2"/><rect class="body" style="stroke-width:1.3" x="96" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="98.5" y="24.7" width="9" height="5.3" rx="1"/><rect class="body" style="stroke-width:1.3" x="114" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="116.5" y="14.100000000000001" width="9" height="15.9" rx="1"/><rect class="body" style="stroke-width:1.3" x="132" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="134.5" y="19.4" width="9" height="10.6" rx="1"/><rect class="body" style="stroke-width:1.3" x="150" y="12" width="14" height="20" rx="2"/><rect class="body" style="stroke-width:1.3" x="168" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="170.5" y="14.100000000000001" width="9" height="15.9" rx="1"/><rect class="body" style="stroke-width:1.3" x="186" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="188.5" y="24.7" width="9" height="5.3" rx="1"/><rect class="body" style="stroke-width:1.3" x="204" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="206.5" y="19.4" width="9" height="10.6" rx="1"/><rect class="body" style="stroke-width:1.3" x="222" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="224.5" y="24.7" width="9" height="5.3" rx="1"/><rect class="body" style="stroke-width:2.2" x="240" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="242.5" y="14.100000000000001" width="9" height="15.9" rx="1"/><rect class="body" style="stroke-width:1.3" x="258" y="12" width="14" height="20" rx="2"/><rect class="body" style="stroke-width:1.3" x="276" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="278.5" y="19.4" width="9" height="10.6" rx="1"/><rect class="body" style="stroke-width:1.3" x="294" y="12" width="14" height="20" rx="2"/><rect class="fl-elec" x="296.5" y="24.7" width="9" height="5.3" rx="1"/>
</g>
<!-- שני תאים בהגדלה -->
<path class="thin" style="stroke-width:1" d="M78 32L8 40M92 32L152 40M240 32L168 40M254 32L312 40"/>
<rect class="thin" style="stroke-dasharray:3 4" x="8" y="40" width="144" height="144" rx="8"/>
<rect class="thin" style="stroke-dasharray:3 4" x="168" y="40" width="144" height="144" rx="8"/>
<g class="hl-1 hl-3">
  <path class="wire st-ink" style="stroke-width:2" d="M80 51V70M33 138V126M127 138V126"/>
  <circle class="body" style="stroke-width:1.5" cx="80" cy="48" r="3.2"/><circle class="body" style="stroke-width:1.5" cx="33" cy="123" r="2.8"/><circle class="body" style="stroke-width:1.5" cx="127" cy="123" r="2.8"/>
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M14 146H146V174Q146 180 140 180H20Q14 180 14 174Z"/>
  <path class="fl-line st-ink" style="fill-opacity:.5" stroke-width="1.2" d="M18 146H52V156Q52 164 44 164H26Q18 164 18 156ZM108 146H142V156Q142 164 134 164H116Q108 164 108 156Z"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="26" y="138" width="14" height="8"/><rect class="fl-line st-ink" stroke-width="1.2" x="120" y="138" width="14" height="8"/>
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="44" y="88" width="72" height="58"/>
  <rect class="body" x="52" y="102" width="56" height="36" rx="3"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="44" y="70" width="72" height="18" rx="2"/>
</g>
<g>
  <path class="wire st-ink" style="stroke-width:2" d="M240 51V70M193 138V126M287 138V126"/>
  <circle class="body" style="stroke-width:1.5" cx="240" cy="48" r="3.2"/><circle class="body" style="stroke-width:1.5" cx="193" cy="123" r="2.8"/><circle class="body" style="stroke-width:1.5" cx="287" cy="123" r="2.8"/>
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M174 146H306V174Q306 180 300 180H180Q174 180 174 174Z"/>
  <path class="fl-line st-ink" style="fill-opacity:.5" stroke-width="1.2" d="M178 146H212V156Q212 164 204 164H186Q178 164 178 156ZM268 146H302V156Q302 164 294 164H276Q268 164 268 156Z"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="186" y="138" width="14" height="8"/><rect class="fl-line st-ink" stroke-width="1.2" x="280" y="138" width="14" height="8"/>
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="204" y="88" width="72" height="58"/>
  <rect class="body" x="212" y="102" width="56" height="36" rx="3"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="204" y="70" width="72" height="18" rx="2"/>
</g>
<!-- אלקטרונים כלואים בשער הצף -->
<g class="from-2"><g class="fl-elec st-ink shake" stroke-width=".8"><circle cx="222" cy="114" r="3.4"/><circle cx="234" cy="114" r="3.4"/><circle cx="246" cy="114" r="3.4"/><circle cx="258" cy="114" r="3.4"/><circle cx="222" cy="127" r="3.4"/><circle cx="234" cy="127" r="3.4"/><circle cx="246" cy="127" r="3.4"/><circle cx="258" cy="127" r="3.4"/></g></g>

<!-- שלב 1 -->
<g class="only-1">
  <rect class="wire st-cold dash" x="48" y="97" width="64" height="45" rx="5"/><rect class="wire st-cold dash" x="208" y="97" width="64" height="45" rx="5"/>
  <text x="160" y="198">טרנזיסטור: מתג זעיר</text>
  <text x="160" y="212">ובתוכו כלוב מוקף בידוד</text>
</g>
<!-- שלב 2: כתיבה -->
<g class="only-2">
  <path class="wire st-hot" style="stroke-width:3" d="M240 51V70"/><path class="flow" d="M240 51V70"/>
  <g><rect class="wire st-hot fade" x="204" y="70" width="72" height="18" rx="2"/></g>
  <circle class="fl-elec st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.8s" begin="-0.00s" repeatCount="indefinite" path="M196 155H228V118"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.8s" begin="-0.45s" repeatCount="indefinite" path="M196 155H240V128"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.8s" begin="-0.90s" repeatCount="indefinite" path="M196 155H252V118"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.8s" begin="-1.35s" repeatCount="indefinite" path="M196 155H234V128"/></circle>
  <text x="276" y="60">מתח גבוה</text>
  <text x="160" y="198">אלקטרונים נדחפים דרך הבידוד</text>
  <text x="160" y="212">ונשארים כלואים בלי חשמל</text>
</g>
<!-- שלב 3: קריאה -->
<g class="from-3">
  <g class="hl-3"><rect class="fl-elec" x="52" y="146" width="56" height="5"/>
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="1.6s" begin="-0.0s" repeatCount="indefinite" path="M34 156H126"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="1.6s" begin="-0.4s" repeatCount="indefinite" path="M34 156H126"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="1.6s" begin="-0.8s" repeatCount="indefinite" path="M34 156H126"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="1.6s" begin="-1.2s" repeatCount="indefinite" path="M34 156H126"/></circle></g>
  <path class="wire st-hot" style="stroke-width:2.6" d="M234 151l12 10M246 151l-12 10"/>
</g>
<g class="only-3">
  <path class="wire st-green" style="stroke-width:3" d="M80 51V70M240 51V70"/><path class="flow" d="M80 51V70M240 51V70"/>
  <path class="wire st-elec" style="stroke-width:2.5" d="M33 126V138M127 138V126"/><path class="flow" d="M33 126V138M127 138V126"/>
  <text x="116" y="60">מתח נמוך</text><text x="276" y="60">מתח נמוך</text>
  <text x="80" y="198">כלוב ריק: זרם עובר</text>
  <text x="240" y="198">כלוב מלא: אין זרם</text>
  <text x="160" y="212">כמה רמות מילוי, כמה ביטים</text>
</g>
<!-- שלב 4: שחיקה ודליפה -->
<g class="from-4">
  <path class="wire st-hot" style="stroke-width:1.6" d="M222 138l2.5 3-3 2 2.5 3M240 138l-2 3 3 2-2 3M258 138l2.5 3-3 2 2.5 3"/>
  <circle class="fl-elec st-ink" stroke-width=".8" r="3"><animateMotion dur="4.5s" repeatCount="indefinite" path="M239 130V172"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="4.5s" repeatCount="indefinite"/></circle>
</g>
<g class="only-4">
  <path class="flow" d="M50 20H55V8H301"/>
  <rect class="wire st-hot" x="60" y="10.5" width="17" height="23" rx="3" transform="translate(-1.5 0)"><animate attributeName="x" calcMode="discrete" values="114;222;60;276;168;78;240;132;294;186;96;258;150;204" dur="7s" repeatCount="indefinite"/></rect>
  <text x="240" y="198">הבידוד נשחק ודולף</text>
  <text x="160" y="212">הבקר מפזר את הכתיבות</text>
</g>
`;
