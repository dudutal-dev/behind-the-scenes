// פס הייצור: 1 חלקים זהים שמתאימים לכל מכונית · 2 המכונית נעה על הפס והעובדים עומדים · 3 הקצב: זמן שווה בכל עמדה · 4 היום: רובוט מרתך וחלקים מגיעים בדיוק בזמן
export default `
<defs>
  <g id="assemblyline-frame"><rect class="fl-line st-ink" stroke-width="1.5" x="-30" y="157" width="60" height="6" rx="1.5"/><circle class="fl-ink" cx="-20" cy="166" r="2"/><circle class="fl-ink" cx="20" cy="166" r="2"/></g>
  <g id="assemblyline-wheels"><circle class="fl-dark st-ink" stroke-width="1.5" cx="-20" cy="167" r="9"/><circle class="fl-dark st-ink" stroke-width="1.5" cx="20" cy="167" r="9"/><circle class="fl-soft" cx="-20" cy="167" r="3.5"/><circle class="fl-soft" cx="20" cy="167" r="3.5"/></g>
  <g id="assemblyline-engine"><rect class="fl-warm st-ink" stroke-width="1.5" x="10" y="143" width="18" height="14" rx="2"/><path class="thin st-ink" style="stroke-width:1" d="M14 143v-3M19 143v-3M24 143v-3"/></g>
  <g id="assemblyline-body"><path class="fl-cold st-ink" stroke-width="1.8" stroke-linejoin="round" d="M-32 158V147Q-32 141 -26 140L-15 139L-7 126H12L21 138L29 140Q32 141 32 147V158H28A9 9 0 0 0 11 158H-11A9 9 0 0 0 -28 158Z"/><path class="fl-panel st-ink" stroke-width="1" d="M-12 138L-6 129H1V138ZM4 138V129H11L17 138Z"/></g>
  <g id="assemblyline-done"><circle class="fl-elec st-ink" stroke-width="1" cx="30" cy="145" r="2.5"/><path class="wire st-green" style="stroke-width:2.5" d="M-6 116L-1 121L8 111"/></g>
  <g id="assemblyline-worker"><path class="fl-none st-ink" stroke-width="9" stroke-linecap="round" d="M0 126V176"/><path class="fl-none" style="stroke:var(--s-violet)" stroke-width="5.5" stroke-linecap="round" d="M0 126V176"/><circle class="body" cx="0" cy="113" r="7"/><path class="fl-dark" d="M-7 111A7 7 0 0 1 7 111Z"/></g>
</defs>

<!-- מסילה עילית ותקרה -->
<path class="thin st-ink" style="stroke-width:2" d="M8 48H312"/>

<!-- עובדים מאחורי הפס, כל אחד בעמדה קבועה -->
<g class="hl-2 hl-3">
  <use href="#assemblyline-worker" transform="translate(56 0)"/>
  <use href="#assemblyline-worker" transform="translate(132 0)"/>
  <use href="#assemblyline-worker" transform="translate(284 0)"/>
  <g class="fl-none st-ink" stroke-width="4" stroke-linecap="round">
    <path d="M52 130L40 146"><animateTransform attributeName="transform" type="rotate" values="0 52 130;-14 52 130;0 52 130;0 52 130" keyTimes="0;.25;.5;1" dur="4s" repeatCount="indefinite"/></path>
    <path d="M128 130L118 146"><animateTransform attributeName="transform" type="rotate" values="0 128 130;-14 128 130;0 128 130;0 128 130" keyTimes="0;.25;.5;1" dur="4s" repeatCount="indefinite"/></path>
    <path d="M280 130L270 140"/>
  </g>
</g>

<!-- רובוט מרתך תלוי מהמסילה -->
<g class="hl-4">
  <rect class="body" x="186" y="44" width="24" height="10" rx="2"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 198 54;-6 198 54;6 198 54;0 198 54;0 198 54" keyTimes="0;.15;.35;.5;1" dur="4s" repeatCount="indefinite"/>
    <path class="fl-none st-ink" stroke-width="8" stroke-linecap="round" d="M198 54L216 86L200 112"/>
    <path class="fl-none" style="stroke:var(--s-warm)" stroke-width="4.5" stroke-linecap="round" d="M198 54L216 86L200 112"/>
    <circle class="fl-dark st-ink" stroke-width="1.5" cx="216" cy="86" r="4.5"/>
    <path class="wire st-ink" style="stroke-width:3" d="M200 112L196 122"/>
  </g>
  <g class="fl-elec"><animate attributeName="opacity" values="0;1;0;1;0;0" keyTimes="0;.1;.2;.3;.45;1" dur="4s" repeatCount="indefinite"/>
    <path d="M196 125l3-6 1 5 5-2-3 5 5 2-6 1-1 5-2-5-5 1 3-4z" class="st-ink" stroke-width=".6"/>
  </g>
</g>

<!-- פס ההרכבה -->
<g class="hl-2">
  <rect class="body fl-soft" x="4" y="176" width="312" height="10" rx="5"/>
  <path class="flow" style="stroke:var(--s-ink);stroke-opacity:.6;stroke-width:2.5;stroke-dasharray:3 9" d="M10 181H312"/>
  <g class="fl-dark"><circle cx="20" cy="181" r="2"/><circle cx="60" cy="181" r="2"/><circle cx="100" cy="181" r="2"/><circle cx="140" cy="181" r="2"/><circle cx="180" cy="181" r="2"/><circle cx="220" cy="181" r="2"/><circle cx="260" cy="181" r="2"/><circle cx="300" cy="181" r="2"/></g>
  <path class="thin st-ink" style="stroke-width:3" d="M16 186V198M160 186V198M304 186V198"/>
  <path class="thin st-ink" d="M6 198H314"/>
</g>

<!-- המכוניות: מחכות בעמדה, מקבלות חלק, ונעות לעמדה הבאה -->
<g class="hl-1 hl-2 hl-4">
<g transform="translate(-30 0)"><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 0;76 0" keyTimes="0;.6;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-frame"/></g>
<g transform="translate(46 0)"><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 0;76 0" keyTimes="0;.6;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-frame"/><g><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.22;.38;1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-wheels"/></g></g>
<g transform="translate(122 0)"><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 0;76 0" keyTimes="0;.6;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-frame"/><use href="#assemblyline-wheels"/><g><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.22;.38;1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-engine"/></g></g>
<g transform="translate(198 0)"><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 0;76 0" keyTimes="0;.6;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-frame"/><use href="#assemblyline-wheels"/><use href="#assemblyline-engine"/><g><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.22;.38;1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-body"/></g></g>
<g transform="translate(274 0)"><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 0;76 0" keyTimes="0;.6;1" calcMode="spline" keySplines="0 0 1 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-frame"/><use href="#assemblyline-wheels"/><use href="#assemblyline-engine"/><use href="#assemblyline-body"/><g><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.22;.38;1" dur="4s" repeatCount="indefinite"/><use href="#assemblyline-done"/></g></g>
</g>

<!-- שלב 1: מדף של חלקים זהים -->
<g class="only-1">
  <rect class="body" x="14" y="62" width="92" height="34" rx="3"/>
  <circle class="fl-dark st-ink" stroke-width="1.5" cx="34" cy="79" r="9"/><circle class="fl-soft" cx="34" cy="79" r="3.5"/><circle class="fl-dark st-ink" stroke-width="1.5" cx="60" cy="79" r="9"/><circle class="fl-soft" cx="60" cy="79" r="3.5"/><circle class="fl-dark st-ink" stroke-width="1.5" cx="86" cy="79" r="9"/><circle class="fl-soft" cx="86" cy="79" r="3.5"/>
  <path class="thin st-ink" d="M25 58H43M51 58H69M77 58H95M25 55v6M43 55v6M51 55v6M69 55v6M77 55v6M95 55v6"/>
  <text x="160" y="16">כל חלק במידה מדויקת וזהה</text>
  <text x="160" y="32">ומתאים לכל מכונית בלי שיופים</text>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <path class="arrow st-ink" style="stroke-width:2.5" d="M120 208H200" marker-end="url(#assemblyline-ah)"/>
  <text x="160" y="16">המכונית נעה אל העובד</text>
  <text x="160" y="32">והוא חוזר על אותה פעולה</text>
</g>

<!-- שלב 3: שעונים זהים בכל עמדה -->
<g class="only-3">
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="56" cy="86" r="9"/><path class="fl-cold" d="M56 86V77A9 9 0 0 1 65 86Z" opacity=".5"/><path class="wire st-hot" style="stroke-width:1.8" d="M56 86V79"><animateTransform attributeName="transform" type="rotate" from="0 56 86" to="360 56 86" dur="4s" repeatCount="indefinite"/></path><circle class="fl-panel st-ink" stroke-width="1.5" cx="132" cy="86" r="9"/><path class="fl-cold" d="M132 86V77A9 9 0 0 1 141 86Z" opacity=".5"/><path class="wire st-hot" style="stroke-width:1.8" d="M132 86V79"><animateTransform attributeName="transform" type="rotate" from="0 132 86" to="360 132 86" dur="4s" repeatCount="indefinite"/></path><circle class="fl-panel st-ink" stroke-width="1.5" cx="284" cy="86" r="9"/><path class="fl-cold" d="M284 86V77A9 9 0 0 1 293 86Z" opacity=".5"/><path class="wire st-hot" style="stroke-width:1.8" d="M284 86V79"><animateTransform attributeName="transform" type="rotate" from="0 284 86" to="360 284 86" dur="4s" repeatCount="indefinite"/></path>
  <text x="160" y="16">אותו זמן קצוב לכל עמדה</text>
  <text x="160" y="32">מודל T: מ־12.5 שעות ל־93 דקות</text>
</g>

<!-- שלב 4: חלקים מגיעים בדיוק בזמן -->
<g class="only-4">
  <g class="fl-warm st-ink" stroke-width="1.2">
    <rect x="-6" y="51" width="12" height="9" rx="1"><animateMotion dur="4s" repeatCount="indefinite" path="M10 0H130"/></rect>
    <rect x="-6" y="51" width="12" height="9" rx="1"><animateMotion dur="4s" begin="-2s" repeatCount="indefinite" path="M10 0H130"/></rect>
  </g>
  <text x="80" y="16">חלקים מגיעים</text>
  <text x="80" y="32">בדיוק כשצריך</text>
  <text x="262" y="16">רובוט מרתך</text>
</g>
<defs><marker id="assemblyline-ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker></defs>
`;
