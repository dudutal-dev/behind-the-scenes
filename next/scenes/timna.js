// תמנע: 1 כרייה של מלכיט ירוק באבן חול · 2 כבשן עם פחם ומפוח: הפחם לוקח את החמצן · 3 סיגים יוצאים, נחושת שוקעת · 4 מקדש חתחור למרגלות הצוקים ונחש הנחושת
export default `
<defs>
  <marker id="timna-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="timna-in"><path d="M124 176V132Q124 124 132 124H168Q176 124 176 132V176Z"/></clipPath>
</defs>
<rect class="fl-soft" x="0" y="176" width="320" height="44"/>
<path class="thin" d="M0 176H320"/>

<!-- 1 צוק אבן חול, פיר, מחילה ועפרה ירוקה -->
<g class="hl-1">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M0 176V46Q20 38 40 44T84 52L92 176Z"/>
  <path class="thin" style="stroke-width:1" d="M2 74Q40 68 86 80M2 104Q44 98 88 110M2 134Q46 128 90 140"/>
  <g class="fl-green st-ink" stroke-width=".8"><ellipse cx="14" cy="118" rx="4" ry="2.6"/><ellipse cx="70" cy="122" rx="4" ry="2.6"/><ellipse cx="20" cy="88" rx="3.6" ry="2.4"/><ellipse cx="76" cy="92" rx="3.4" ry="2.2"/><ellipse cx="58" cy="156" rx="3.6" ry="2.4"/></g>
  <path class="fl-dark" d="M36 46H48V146H36Z"/>
  <path class="fl-dark" d="M36 146H82Q86 146 86 152V166H36Z"/>
  <g transform="translate(70 166)"><circle class="fl-elec" cx="0" cy="-15" r="3"/><path class="st-elec fl-none" stroke-width="2.2" stroke-linecap="round" d="M0 -12V-5M0 -5L-3 0M0 -5L3 0"/>
    <g><animateTransform attributeName="transform" type="rotate" values="-30 0 -10;20 0 -10;-30 0 -10" keyTimes="0;.3;1" dur="1s" repeatCount="indefinite"/>
      <path class="st-elec fl-none" stroke-width="1.8" stroke-linecap="round" d="M0 -10L8 -6M6 -9L10 -3"/></g></g>
</g>
<g class="only-1">
  <path class="st-line fl-none dash" stroke-width="1.2" d="M42 40Q100 6 168 118"/>
  <g><animateMotion dur="3s" repeatCount="indefinite" path="M42 140V44Q100 6 168 118"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3s" repeatCount="indefinite"/>
    <ellipse class="fl-green st-ink" stroke-width="1" rx="4" ry="3"/></g>
</g>

<!-- הכבשן: עפרה ופחם בפנים -->
<g transform="translate(18 0)">
<g class="hl-2 hl-3">
  <g clip-path="url(#timna-in)">
    <rect class="fl-hot" fill-opacity=".25" x="120" y="120" width="60" height="60"><animate attributeName="fill-opacity" values=".15;.4;.15" dur="1.2s" repeatCount="indefinite"/></rect>
    <g class="fl-dark"><circle cx="134" cy="134" r="3"/><circle cx="150" cy="130" r="3"/><circle cx="164" cy="136" r="3"/><circle cx="142" cy="146" r="3"/><circle cx="158" cy="150" r="3"/><circle cx="132" cy="156" r="3"/><circle cx="168" cy="158" r="3"/></g>
    <g class="fl-green"><circle cx="144" cy="138" r="2.4"/><circle cx="160" cy="142" r="2.4"/><circle cx="136" cy="146" r="2.4"/><circle cx="150" cy="156" r="2.4"/></g>
  </g>
  <path class="st-ink fl-none" stroke-width="3" stroke-linejoin="round" d="M120 176V132Q120 120 132 120H168Q180 120 180 132V176"/>
  <path class="fl-hot" d="M150 120c-8-6-6-12-1-18 0 5 4 6 5 3 1-4 0-6 3-10 4 7 6 15-2 25z"><animate attributeName="opacity" values="1;.6;1" dur=".5s" repeatCount="indefinite"/></path>
</g>

</g>
<!-- 2 מפוח, צינור חרס, אוויר, ופחמן חד־חמצני -->
<g class="hl-2">
  <path class="pipe st-warm" style="stroke-width:5" d="M120 166H142"/>
  <path class="flow" d="M120 166H142"/>
  <path class="body" d="M98 176V168Q98 162 106 162H116Q122 162 122 168V176Z"/>
  <path class="fl-warm st-ink" stroke-width="1.6" fill-opacity=".6" d="M98 162Q110 152 122 162"><animate attributeName="d" values="M98 162Q110 150 122 162;M98 162Q110 166 122 162;M98 162Q110 150 122 162" dur=".8s" repeatCount="indefinite"/></path>
  <g><animateTransform attributeName="transform" type="translate" values="0 -3;0 2;0 -3" dur=".8s" repeatCount="indefinite"/>
    <circle class="fl-ink" cx="110" cy="122" r="3.6"/>
    <path class="st-ink fl-none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" d="M110 126V140M110 140L106 152M110 140L114 152M110 130L104 140M110 130L116 140"/>
    <path class="st-line fl-none" stroke-width="1" d="M104 140L104 156M116 140L116 156"/>
  </g>
</g>
<g class="only-2" transform="translate(18 0)">
  <g class="st-violet fl-none" stroke-width="1.6" stroke-linecap="round">
    <path d="M136 168V150" marker-end="url(#timna-a)"><animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/></path>
    <path d="M152 170V146" marker-end="url(#timna-a)"><animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="-.4s" repeatCount="indefinite"/></path>
    <path d="M166 168V150" marker-end="url(#timna-a)"><animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="-.8s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- 3 נחושת בתחתית, סיגים נוזלים יוצאים, ערמת סיגים -->
<g class="hl-3">
  <path class="fl-warm st-ink" stroke-width="1" d="M144 176V170Q168 164 192 170V176Z"/>
  <path class="pipe st-hot" style="stroke-width:4" d="M198 168Q206 168 210 174"/>
  <path class="flow" d="M198 168Q206 168 210 174"/>
  <path class="fl-dark st-ink" stroke-width="1.6" stroke-linejoin="round" d="M206 176Q214 156 226 154Q238 154 248 176Z"/>
  <path class="thin" style="stroke-width:1" d="M214 168Q226 162 240 168"/>
</g>

<!-- 4 עמודי הסלע, מקדש חתחור ונחש הנחושת -->
<g class="hl-4">
  <path class="fl-warm st-ink" stroke-width="2" stroke-linejoin="round" fill-opacity=".35" d="M256 176L258 100Q262 84 272 80Q280 70 290 74Q300 66 312 72V176Z"/>
  <path class="thin" style="stroke-width:1.2" d="M266 96V158M276 84V158M286 80V158M296 76V158M306 74V158"/>
  <path class="body" d="M254 176V158H312V176Z"/>
  <path class="body" d="M274 176V164H292V176Z"/>
  <circle class="fl-panel st-ink" stroke-width="1.6" cx="264" cy="164" r="3"/><circle class="fl-panel st-ink" stroke-width="1.6" cx="302" cy="164" r="3"/>
  <circle class="body" cx="214" cy="56" r="24"/>
  <path class="st-warm fl-none" stroke-width="4" stroke-linecap="round" d="M196 62Q204 50 212 60T228 54">
    <animate attributeName="d" values="M196 62Q204 50 212 60T228 54;M196 58Q204 66 212 56T228 54;M196 62Q204 50 212 60T228 54" dur="2.4s" repeatCount="indefinite"/></path>
  <circle class="fl-elec st-ink" stroke-width="1.2" cx="229" cy="53" r="3.6"/>
  <path class="st-ink fl-none" stroke-width="1" stroke-dasharray="2 3" d="M230 76L282 166"/>
</g>

<!-- תוויות -->
<g class="only-1"><text x="140" y="34">מלכיט ירוק</text><text x="140" y="48">בשכבות אבן חול</text><text x="140" y="196">פירים ומחילות</text><path class="arrow st-ink" style="stroke-width:1.4" d="M104 192H90" marker-end="url(#timna-a)"/></g>
<g class="only-2"><text x="140" y="70">מפוח וצינור חרס</text><text x="140" y="84">הפחם לוקח את החמצן</text></g>
<g class="only-3"><text x="196" y="196">סיגים יוצאים</text><text x="196" y="210">נחושת שוקעת</text></g>
<g class="only-4"><text x="120" y="40">נחש נחושת</text><text x="120" y="54">ראש מוזהב</text><text x="282" y="196">מקדש חתחור</text></g>
`;
