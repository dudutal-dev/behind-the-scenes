// שעון המים: 1 כלי שמתרוקן עם שנתות · 2 הלחץ יורד והסילון מתקצר · 3 מצוף שסוגר את ההזנה ושומר מפלס קבוע (קטסיביוס) · 4 מצוף שמרים מחוג לאורך סולם שעות
export default `
<defs>
  <marker id="waterclock-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="waterclock-pot"><path d="M20 40H98L80 140H38Z"/></clipPath>
  <clipPath id="waterclock-rx"><rect x="252" y="130" width="36" height="74"/></clipPath>
</defs>
<path class="thin" d="M8 206H312"/>

<!-- 1-2 כלי שמתרוקן, בצורת עציץ כמו השעון מכרנך -->
<g class="hl-1 hl-2">
  <g clip-path="url(#waterclock-pot)">
    <rect class="fl-cold-soft" x="10" y="46" width="100" height="100">
      <animate attributeName="y" values="46;128;46" keyTimes="0;.92;1" dur="8s" repeatCount="indefinite"/></rect>
    <path class="st-cold fl-none" stroke-width="1.6" d="M10 46H110"><animateTransform attributeName="transform" type="translate" values="0 0;0 82;0 0" keyTimes="0;.92;1" dur="8s" repeatCount="indefinite"/></path>
  </g>
  <path class="body fl-none" style="fill:none" d="M16 36H102L82 142H36Z"/>
  <path class="thin" style="stroke-width:1" d="M25 54h8M28 70h8M30 86h8M33 102h8M36 118h8"/>
  <path class="st-cold fl-none" stroke-width="2.5" stroke-linecap="round" d="M80 134Q104 132 116 188">
    <animate attributeName="d" values="M80 134Q104 132 116 188;M80 134Q84 136 88 188;M80 134Q104 132 116 188" keyTimes="0;.92;1" dur="8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;.5;1" keyTimes="0;.92;1" dur="8s" repeatCount="indefinite"/></path>
  <path class="body" d="M82 186H128L122 200H88Z"/>
</g>
<g class="only-2">
  <path class="arrow st-hot" style="stroke-width:2" marker-end="url(#waterclock-a)" d="M58 52V126">
    <animate attributeName="d" values="M58 52V126;M58 128V136;M58 52V126" keyTimes="0;.92;1" dur="8s" repeatCount="indefinite"/></path>
</g>

<!-- 3 מיכל הזנה, צינור ומיכל ביניים עם מצוף -->
<g class="hl-3">
  <rect class="fl-cold-soft" x="142" y="30" width="52" height="30"/>
  <path class="body" style="fill:none" d="M140 20V62H196V20"/>
  <path class="pipe st-cold" d="M188 62V72H222V84"/>
  <path class="flow" d="M188 62V72H222V84"/>
  <path class="st-ink fl-none" stroke-width="2" d="M214 84H230"/>
  <rect class="fl-cold-soft" x="200" y="100" width="44" height="26">
    <animate attributeName="y" values="100;98;100" dur="1.6s" repeatCount="indefinite"/></rect>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="1.6s" repeatCount="indefinite"/>
    <path class="fl-warm st-ink" stroke-width="1.6" stroke-linejoin="round" d="M222 88L213 100H231Z"/>
    <rect class="fl-warm st-ink" stroke-width="1.6" x="210" y="99" width="24" height="6" rx="2"/>
  </g>
  <g class="fl-cold">
    <circle cx="219" cy="90" r="1.4"><animate attributeName="cy" values="88;98" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.1;.4;1" dur="1.6s" repeatCount="indefinite"/></circle>
  </g>
  <path class="body" style="fill:none" d="M198 80V128H246V80"/>
</g>

<!-- 4 יציאה בקצב קבוע, כלי מתמלא, מצוף ומחוג על סולם שעות -->
<g class="hl-3 hl-4">
  <path class="pipe st-cold" style="stroke-width:4" d="M246 122H262V128"/>
  <circle class="fl-cold" cx="262" cy="132" r="1.4"><animate attributeName="cy" values="132;196" dur=".9s" repeatCount="indefinite"/></circle>
</g>
<g class="hl-4">
  <g clip-path="url(#waterclock-rx)">
    <rect class="fl-cold-soft" x="250" y="196" width="40" height="80">
      <animate attributeName="y" values="196;140;196" keyTimes="0;.94;1" dur="10s" repeatCount="indefinite"/></rect>
  </g>
  <path class="body" style="fill:none" d="M250 130V206H290V130"/>
  <rect class="body" x="298" y="44" width="14" height="84" rx="2"/>
  <path class="thin" style="stroke-width:1" d="M298 56h6M298 68h6M298 80h6M298 92h6M298 104h6M298 116h6"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -56;0 0" keyTimes="0;.94;1" dur="10s" repeatCount="indefinite"/>
    <rect class="fl-warm st-ink" stroke-width="1.6" x="256" y="190" width="28" height="6" rx="2"/>
    <path class="st-ink fl-none" stroke-width="2" d="M270 190V120"/>
    <path class="arrow st-hot" style="stroke-width:2" d="M270 120H294" marker-end="url(#waterclock-a)"/>
  </g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="60" y="22">שנתות על הדופן</text><text x="44" y="166">חור ליד התחתית</text></g>
<g class="only-2"><text x="60" y="22">המפלס והלחץ יורדים</text><text x="44" y="166">הסילון מתקצר</text></g>
<g class="only-3"><text x="166" y="150">מצוף סוגר את ההזנה</text><text x="166" y="164">מפלס קבוע</text></g>
<g class="only-4"><text x="196" y="166">מצוף עולה</text><text x="196" y="180">ומרים מחוג</text><text x="262" y="30">סולם שעות</text></g>
`;
