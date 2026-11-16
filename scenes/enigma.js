// מכונת האניגמה: 1 הזרם עובר בלוח התקעים ובשלושה רוטורים · 2 הרוטור הימני מתקדם בכל הקשה · 3 המחזיר מחזיר את הזרם, ואות לעולם אינה עצמה · 4 ניחוש מילה, פסילת מיקומים, והבומבה
export default `
<defs>
  <marker id="enigma-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="enigma-rc"><rect x="198" y="22" width="30" height="130" rx="6"/></clipPath>
</defs>

<!-- רוטורים -->
<g class="hl-1 hl-2 hl-3">
  <rect class="body" x="106" y="22" width="30" height="130" rx="6"/><path class="thin" style="stroke-width:1" d="M108 30H112M130 30H134M108 36H112M130 36H134M108 42H112M130 42H134M108 48H112M130 48H134M108 54H112M130 54H134M108 60H112M130 60H134M108 66H112M130 66H134M108 72H112M130 72H134M108 78H112M130 78H134M108 84H112M130 84H134M108 90H112M130 90H134M108 96H112M130 96H134M108 102H112M130 102H134M108 108H112M130 108H134M108 114H112M130 114H134M108 120H112M130 120H134M108 126H112M130 126H134M108 132H112M130 132H134M108 138H112M130 138H134M108 144H112M130 144H134"/><rect class="fl-soft st-ink" stroke-width="1.2" x="113.0" y="28" width="16" height="14" rx="2"/><rect class="body" x="152" y="22" width="30" height="130" rx="6"/><path class="thin" style="stroke-width:1" d="M154 30H158M176 30H180M154 36H158M176 36H180M154 42H158M176 42H180M154 48H158M176 48H180M154 54H158M176 54H180M154 60H158M176 60H180M154 66H158M176 66H180M154 72H158M176 72H180M154 78H158M176 78H180M154 84H158M176 84H180M154 90H158M176 90H180M154 96H158M176 96H180M154 102H158M176 102H180M154 108H158M176 108H180M154 114H158M176 114H180M154 120H158M176 120H180M154 126H158M176 126H180M154 132H158M176 132H180M154 138H158M176 138H180M154 144H158M176 144H180"/><rect class="fl-soft st-ink" stroke-width="1.2" x="159.0" y="28" width="16" height="14" rx="2"/>
</g>
<g class="hl-1 hl-2 hl-3"><rect class="body" x="198" y="22" width="30" height="130" rx="6"/><g clip-path="url(#enigma-rc)"><path class="thin" style="stroke-width:1" d="M200 30H204M222 30H226M200 36H204M222 36H226M200 42H204M222 42H226M200 48H204M222 48H226M200 54H204M222 54H226M200 60H204M222 60H226M200 66H204M222 66H226M200 72H204M222 72H226M200 78H204M222 78H226M200 84H204M222 84H226M200 90H204M222 90H226M200 96H204M222 96H226M200 102H204M222 102H226M200 108H204M222 108H226M200 114H204M222 114H226M200 120H204M222 120H226M200 126H204M222 126H226M200 132H204M222 132H226M200 138H204M222 138H226M200 144H204M222 144H226"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 6;0 6" keyTimes="0;.45;.55;1" dur="1.2s" repeatCount="indefinite"/></path></g><rect class="fl-soft st-ink" stroke-width="1.2" x="205.0" y="28" width="16" height="14" rx="2"/></g>
<!-- חלוניות האותיות -->
<g class="hl-1 hl-2 hl-3">
  <text class="sm" x="121" y="38.5">Q</text><text class="sm" x="167" y="38.5">D</text>
  <g><text class="sm" x="213" y="38.5">A<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="2.4s" repeatCount="indefinite"/></text>
     <text class="sm" x="213" y="38.5">B<animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.5;.5;1" dur="2.4s" repeatCount="indefinite"/></text></g>
</g>

<!-- מחזיר -->
<g class="hl-3">
  <path class="body" d="M90 22V152H76Q62 152 62 138V36Q62 22 76 22Z"/>
</g>

<!-- לוח תקעים -->
<g class="hl-1">
  <rect class="body" x="244" y="22" width="18" height="130" rx="3"/>
  <path class="st-ink fl-none" stroke-width="1.6" d="M262 126Q270 132 262 138"/>
  <path class="st-ink fl-none" stroke-width="1.6" d="M262 58Q270 64 262 70"/>
</g>

<!-- מקש ונורה -->
<g class="hl-1 hl-2">
  <g class="pulse"><circle class="fl-panel st-ink" stroke-width="2" cx="292" cy="138" r="11"/></g>
  <text x="292" y="142">A</text>
</g>
<g class="hl-3">
  <circle class="fl-elec st-ink" stroke-width="2" cx="292" cy="58" r="11"/>
  <circle class="ring st-elec" cx="292" cy="58" r="16"/>
  <text x="292" y="62">G</text>
</g>

<!-- מסלול הזרם -->
<g class="hl-1 hl-2 hl-3"><path class="wire st-hot" d="M279 138H262L244 126H228L198 102H182L152 142H136L106 90H90H82Q72 90 72 102Q72 114 82 114H90"/><path class="flow" d="M279 138H262L244 126H228L198 102H182L152 142H136L106 90H90H82Q72 90 72 102Q72 114 82 114H90"/></g>
<g class="hl-3"><path class="wire st-cold" d="M90 114H106L136 50H152L182 80H198L228 70H244L262 58H279"/><path class="flow" d="M90 114H106L136 50H152L182 80H198L228 70H244L262 58H279"/></g>
<g class="hl-1 hl-2 hl-3"><circle class="fl-ink" cx="106" cy="50" r="1.8"/><circle class="fl-ink" cx="136" cy="50" r="1.8"/><circle class="fl-ink" cx="106" cy="90" r="1.8"/><circle class="fl-ink" cx="136" cy="90" r="1.8"/><circle class="fl-ink" cx="106" cy="114" r="1.8"/><circle class="fl-ink" cx="136" cy="114" r="1.8"/><circle class="fl-ink" cx="106" cy="142" r="1.8"/><circle class="fl-ink" cx="136" cy="142" r="1.8"/><circle class="fl-ink" cx="152" cy="50" r="1.8"/><circle class="fl-ink" cx="182" cy="50" r="1.8"/><circle class="fl-ink" cx="152" cy="80" r="1.8"/><circle class="fl-ink" cx="182" cy="80" r="1.8"/><circle class="fl-ink" cx="152" cy="102" r="1.8"/><circle class="fl-ink" cx="182" cy="102" r="1.8"/><circle class="fl-ink" cx="152" cy="142" r="1.8"/><circle class="fl-ink" cx="182" cy="142" r="1.8"/><circle class="fl-ink" cx="198" cy="70" r="1.8"/><circle class="fl-ink" cx="228" cy="70" r="1.8"/><circle class="fl-ink" cx="198" cy="80" r="1.8"/><circle class="fl-ink" cx="228" cy="80" r="1.8"/><circle class="fl-ink" cx="198" cy="102" r="1.8"/><circle class="fl-ink" cx="228" cy="102" r="1.8"/><circle class="fl-ink" cx="198" cy="126" r="1.8"/><circle class="fl-ink" cx="228" cy="126" r="1.8"/></g>

<!-- תוויות שלבים 1-3 (בפס התחתון) -->
<g class="only-1"><text x="160" y="182">לחיצה סוגרת מעגל: לוח תקעים</text><text x="160" y="198">ושלושה רוטורים מחליפים אותיות</text></g>
<g class="only-2">
  <path class="arrow st-hot" d="M234 34V48" marker-end="url(#enigma-a)"/>
  <text x="160" y="182">הרוטור הימני מתקדם צעד</text><text x="160" y="198">לפני כל אות, והמסלול משתנה</text>
</g>
<g class="only-3"><text x="160" y="182">המחזיר שולח את הזרם בחזרה</text><text x="160" y="198">A הופכת ל־G, לעולם לא ל־A</text></g>

<!-- שלב 4: ניחוש WETTER ופסילת מיקומים -->
<g class="from-4"><g class="hl-4">
  <rect class="fl-soft" x="22" y="164" width="190" height="42" rx="5"/>
  <text x="34" y="178">N</text><text x="50" y="178">E</text><text x="66" y="178">Q</text><text x="82" y="178">O</text><text x="98" y="178">B</text><text x="114" y="178">G</text><text x="130" y="178">V</text><text x="146" y="178">X</text><text x="162" y="178">L</text><text x="178" y="178">D</text><text x="194" y="178">S</text>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;16 0" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/>
    <g class="st-violet fl-none"><text style="fill:var(--s-violet)" x="34" y="198">W</text><text style="fill:var(--s-violet)" x="50" y="198">E</text><text style="fill:var(--s-violet)" x="66" y="198">T</text><text style="fill:var(--s-violet)" x="82" y="198">T</text><text style="fill:var(--s-violet)" x="98" y="198">E</text><text style="fill:var(--s-violet)" x="114" y="198">R</text></g>
  </g>
  <rect class="fl-none st-hot" stroke-width="1.8" x="43" y="166" width="14" height="38" rx="3"><animate attributeName="opacity" values="1;0" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/></rect>
  <path class="st-green fl-none" stroke-width="2.4" stroke-linecap="round" d="M196 196l4 4 8-9"><animate attributeName="opacity" values="0;1" keyTimes="0;.5" calcMode="discrete" dur="4s" repeatCount="indefinite"/></path>
  <rect class="body" x="226" y="164" width="84" height="26" rx="4"/>
  <g class="spin"><circle class="fl-cold-soft st-ink" stroke-width="1.4" cx="244" cy="177" r="7"/><path class="st-ink" stroke-width="1.4" d="M244 170V174"/></g>
  <g class="spin d2"><circle class="fl-cold-soft st-ink" stroke-width="1.4" cx="268" cy="177" r="7"/><path class="st-ink" stroke-width="1.4" d="M268 170V174"/></g>
  <g class="spin d4"><circle class="fl-cold-soft st-ink" stroke-width="1.4" cx="292" cy="177" r="7"/><path class="st-ink" stroke-width="1.4" d="M292 170V174"/></g>
</g></g>
<g class="only-4"><text x="268" y="204">בומבה</text><text x="160" y="16">ניחוש: WETTER. אות מעל אותה אות? נפסל</text></g>
`;
