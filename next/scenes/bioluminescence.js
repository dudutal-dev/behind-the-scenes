// אור ביולוגי. 1 לוציפרין וחמצן באנזים לוציפראז משחררים פוטון · 2 אור קר מול נורת להט · 3 גחליליות, גלים זוהרים ודגי מעמקים · 4 למה: חיזור, פיתיון והסוואה בתאורה נגדית
export default `
<!-- ===== התגובה ===== -->
<g class="hl-1">
  <path class="fl-warm st-ink" stroke-width="1.4" d="M29.6 24.8L24 21.5L18.4 24.8L18.4 31.3L24 34.5L29.6 31.3zM40.9 24.8L35.3 21.5L29.7 24.8L29.7 31.3L35.3 34.5L40.9 31.3z"/>
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="26.5" cy="74" r="4"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="33.5" cy="74" r="4"/>
  <path class="arrow st-line" d="M46 32L74 44M42 70L74 60"/>
  <!-- לוציפראז: אנזים עם כיס -->
  <path class="fl-green st-ink" stroke-width="2" opacity=".85" d="M78 52A22 22 0 1 1 118 65L102 52L118 39A22 22 0 0 0 78 52z" transform="rotate(180 100 52)"/>
  <path class="wire st-elec" style="stroke-width:2.2" d="M120 40q4-6 8 0t8 0t8 0t8 0"/>
  <path class="arrow st-elec" d="M152 34l8 6-8 6"/>
</g>
<g class="only-1">
  <g><path class="fl-warm st-ink" stroke-width="1.4" d="M-0.4 -3.2L-6 -6.5L-11.6 -3.2L-11.6 3.3L-6 6.5L-0.4 3.3zM10.9 -3.2L5.3 -6.5L-0.3 -3.2L-0.3 3.3L5.3 6.5L10.9 3.3z"/><animateMotion dur="2.4s" repeatCount="indefinite" path="M30 28L96 52"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.6;1" dur="2.4s" repeatCount="indefinite"/></g>
  <g><circle class="fl-hot st-ink" stroke-width="1.2" cx="-3.5" cy="0" r="4"/><circle class="fl-hot st-ink" stroke-width="1.2" cx="3.5" cy="0" r="4"/><animateMotion dur="2.4s" repeatCount="indefinite" path="M30 74L96 54"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.6;1" dur="2.4s" repeatCount="indefinite"/></g>
  <circle class="fl-elec" r="4"><animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.6;1" calcMode="linear" path="M106 46L164 40"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.58;.62;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle class="ring st-elec" cx="100" cy="52" r="26"/>
  <text x="30" y="50" class="sm">לוציפרין</text>
  <text x="30" y="92" class="sm">חמצן</text>
  <text x="100" y="90" class="sm">לוציפראז</text>
  <text x="140" y="26" class="sm">אור</text>
</g>
<!-- שלב 2: אור קר מול נורת להט -->
<g class="hl-2">
  <path class="body" style="stroke-width:1.6" d="M171 82a11 11 0 1 1 10 0v6h-10z"/>
  <path class="wire st-warm" style="stroke-width:1.3" d="M172 72q2-5 4 0t4 0"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M160 62q-3-4 0-8t0-8M192 62q3-4 0-8t0-8M176 56q-3-4 0-8"/>
  <rect class="body" style="stroke-width:1.4" x="140" y="58" width="6" height="28" rx="3"/>
  <circle class="fl-cold st-ink" stroke-width="1.4" cx="143" cy="88" r="5"/>
  <rect class="fl-cold" x="141.5" y="76" width="3" height="10"/>
</g>
<g class="only-2">
  <path class="wire st-hot" style="stroke-width:1.6" d="M160 62q-3-4 0-8t0-8M192 62q3-4 0-8t0-8"><animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="1.2s" repeatCount="indefinite"/></path>
  <circle class="ring st-cold" cx="143" cy="80" r="12"/>
</g>

<!-- ===== לילה ביבשה: גחליליות ===== -->
<rect fill="#141b33" x="200" y="6" width="114" height="90" rx="8"/>
<path class="wire st-green" style="stroke-width:1.5" d="M206 96q2-10 0-16M214 96q-2-8 2-14M228 96q2-12-2-18M276 96q-2-9 2-15M292 96q3-8 0-14M304 96q-2-10 1-16"/>
<g class="hl-3 hl-4">
  <g transform="translate(232 34) scale(1.5)"><circle class="fl-elec" opacity=".25" cx="4" cy=".5" r="7"/><path class="fl-line st-ink" stroke-width="1" d="M-7 0q3-4 8-2l2 2q-4 4-10 0z"/><path class="wire st-line" style="stroke-width:1" d="M-2 -2q-2-6 3-7M-4 -2q-6-5-1-8"/><circle class="fl-elec" cx="4" cy=".5" r="3.4"><animate attributeName="opacity" values=".15;.15;1;.15;1;.15" keyTimes="0;.5;.6;.7;.8;1" dur="2.4s" begin="0s" repeatCount="indefinite"/></circle></g><g transform="translate(282 52) scale(1.5)"><circle class="fl-elec" opacity=".25" cx="4" cy=".5" r="7"/><path class="fl-line st-ink" stroke-width="1" d="M-7 0q3-4 8-2l2 2q-4 4-10 0z"/><path class="wire st-line" style="stroke-width:1" d="M-2 -2q-2-6 3-7M-4 -2q-6-5-1-8"/><circle class="fl-elec" cx="4" cy=".5" r="3.4"><animate attributeName="opacity" values=".15;.15;1;.15;1;.15" keyTimes="0;.5;.6;.7;.8;1" dur="2.4s" begin="-0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(250 72) scale(1.5)"><circle class="fl-elec" opacity=".25" cx="4" cy=".5" r="7"/><path class="fl-line st-ink" stroke-width="1" d="M-7 0q3-4 8-2l2 2q-4 4-10 0z"/><path class="wire st-line" style="stroke-width:1" d="M-2 -2q-2-6 3-7M-4 -2q-6-5-1-8"/><circle class="fl-elec" cx="4" cy=".5" r="3.4"><animate attributeName="opacity" values=".15;.15;1;.15;1;.15" keyTimes="0;.5;.6;.7;.8;1" dur="2.4s" begin="-1.6s" repeatCount="indefinite"/></circle></g>
</g>

<!-- ===== הים ===== -->
<path fill="#141b33" d="M0 102q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0V220H0z"/>
<!-- שלב 3: אצות זוהרות בגל -->
<g class="hl-3">
  <circle class="fl-cold" cx="14" cy="101" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.0s" begin="-0.0s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="26" cy="99" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.3s" begin="-0.2s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="38" cy="102" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" begin="-0.4s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="52" cy="98" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.0s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="64" cy="101" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.3s" begin="-0.8s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="78" cy="99" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" begin="-1.0s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="92" cy="102" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.0s" begin="-1.2s" repeatCount="indefinite"/></circle><circle class="fl-cold" cx="104" cy="99" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.3s" begin="-1.4s" repeatCount="indefinite"/></circle>
</g>
<!-- דג חכאי עם פנס -->
<g class="hl-3 hl-4">
  <path class="fl-line st-ink" stroke-width="1.6" d="M24 190Q22 168 48 166Q74 164 84 176L92 172L88 184L92 196L82 192Q70 206 46 204Q26 202 24 190z" transform="scale(-1 1) translate(-116 0)"/>
  <path class="wire" stroke="#fff" style="stroke-width:1.2" d="M86 183L91 186L86 189L91 192L86 195"/>
  <circle fill="#fff" cx="76" cy="176" r="3"/>
  <path class="wire st-line" style="stroke-width:1.4" d="M68 166Q80 138 104 152"/>
  <circle class="fl-elec" cx="105" cy="156" r="4"><animate attributeName="opacity" values="1;.5;1" dur="1.6s" repeatCount="indefinite"/></circle>
  <path class="fl-line" d="M142 156l-8-4v8z M134 156q-6-5-12 0q6 5 12 0z"><animateTransform attributeName="transform" type="translate" values="0 0;-6 1;0 0" dur="2s" repeatCount="indefinite"/></path>
</g>
<!-- שלב 4: דג גרזן מאיר בבטן מול אור מלמעלה -->
<g class="hl-4">
  <path class="wire st-elec" style="stroke-width:1;stroke-dasharray:2 5;stroke-opacity:.7" d="M230 108V124M250 108V120M270 108V120M290 108V124"/>
  <path class="fl-line st-ink" stroke-width="1.6" d="M232 140Q240 126 262 126L286 136L296 130L294 142L296 154L286 148Q270 160 248 158Q234 154 232 140z"/>
  <circle fill="#fff" cx="244" cy="137" r="2.6"/>
  <circle class="fl-cold" cx="242" cy="152.8" r="1.8"/><circle class="fl-cold" cx="250" cy="154.4" r="1.8"/><circle class="fl-cold" cx="258" cy="156" r="1.8"/><circle class="fl-cold" cx="266" cy="154.4" r="1.8"/><circle class="fl-cold" cx="274" cy="152.8" r="1.8"/><circle class="fl-cold" cx="282" cy="151.2" r="1.8"/>
  <path class="wire st-cold" style="stroke-width:1.2;stroke-dasharray:1 3" d="M244 164L240 174M262 164V176M280 162L284 174"/>
  <path class="fl-line st-ink" stroke-width="1.2" d="M246 204q10-8 24-4l8-4v12l-8-4q-14 4-24 0z"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M252 198L262 166"/>
</g>

<!-- כיתובים -->
<g class="only-1" style="--s-bg:#141b33"><text fill="#fff" style="fill:#fff" x="170" y="182">חמצון מבוקר:</text><text fill="#fff" style="fill:#fff" x="170" y="197">האנרגיה יוצאת כאור</text></g>
<g class="only-2" style="--s-bg:#141b33"><text fill="#fff" style="fill:#fff" x="170" y="182">אור בלי חום,</text><text fill="#fff" style="fill:#fff" x="170" y="197">נורת להט: בעיקר חום</text></g>
<g class="only-3" style="--s-bg:#141b33"><text fill="#fff" style="fill:#fff" x="170" y="182">גחליליות ביבשה,</text><text fill="#fff" style="fill:#fff" x="170" y="197">ובים: אצות, דגים, מדוזות</text></g>
<g class="only-4" style="--s-bg:#141b33"><text fill="#fff" style="fill:#fff" x="170" y="182">לחזר, לפתות טרף,</text><text fill="#fff" style="fill:#fff" x="170" y="197">ולמחוק את הצללית</text></g>
`;
