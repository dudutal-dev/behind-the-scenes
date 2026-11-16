// המומיה: 1 הוצאת איברים לכדים והמוח דרך האף · 2 ייבוש בנטרון כ־40 יום · 3 שרף ועטיפת פשתן · 4 סריקת CT בלי לפרום
export default `
<defs>
  <marker id="mummy-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="mummy-body"><path d="M52 113a11 10 0 0 1 21-7Q90 101 112 104T152 105Q170 103 182 107L198 109Q203 98 209 100Q214 104 212 113V121Q206 125 196 124H72A11 10 0 0 1 52 113Z"/></clipPath>
  <clipPath id="mummy-ct"><circle cx="262" cy="52" r="34"/></clipPath>
</defs>

<!-- שולחן החניטה -->
<path class="body" d="M36 130H232V138H36Z"/>
<path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M48 138V200M220 138V200M40 200H56M212 200H228"/>
<path class="thin" d="M8 206H312"/>

<!-- הגוף, שוכב על הגב -->
<path class="body" d="M52 113a11 10 0 0 1 21-7Q90 101 112 104T152 105Q170 103 182 107L198 109Q203 98 209 100Q214 104 212 113V121Q206 125 196 124H72A11 10 0 0 1 52 113Z"/>
<path class="thin" style="stroke-width:1" d="M76 106V123M88 112Q120 117 150 113"/>
<path class="st-ink fl-none" stroke-width="1.4" stroke-linecap="round" d="M52 108l-4 3 4 2"/>

<!-- 1 חתך, איברים שיוצאים לכדים, המוח דרך האף, הלב נשאר -->
<g class="only-1">
  <path class="st-hot fl-none" stroke-width="2" stroke-linecap="round" d="M118 107Q128 104 138 107"/>
  <path class="fl-hot" d="M98 112c-2-3-6-1-4 2l4 4 4-4c2-3-2-5-4-2z"><animate attributeName="opacity" values="1;.5;1" dur="1s" repeatCount="indefinite"/></path>
  <path class="st-line fl-none dash" stroke-width="1.4" d="M130 104Q190 70 250 150"/>
  <path class="st-line fl-none dash" stroke-width="1.4" d="M50 106Q36 88 40 70"/>
  <g><animateMotion dur="2.2s" repeatCount="indefinite" path="M130 104Q190 70 250 150"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.2s" repeatCount="indefinite"/>
    <ellipse class="fl-hot st-ink" stroke-width="1" rx="5" ry="3.5"/></g>
  <g><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite" path="M130 104Q190 70 250 150"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.2s" begin="-1.1s" repeatCount="indefinite"/>
    <ellipse class="fl-warm st-ink" stroke-width="1" rx="4" ry="3"/></g>
  <g><animateMotion dur="1.8s" repeatCount="indefinite" path="M50 106Q36 88 40 70"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="1.8s" repeatCount="indefinite"/>
    <circle class="fl-violet" r="2.4"/></g>
</g>

<!-- כדים קנופיים -->
<g class="hl-1">
  <g transform="translate(240 160)"><path class="body" d="M-7 8Q-9 30 -5 40H5Q9 30 7 8Z"/><path class="fl-soft st-ink" stroke-width="1.6" d="M-6 8Q-6 -2 0 -2T6 8Z"/></g>
  <g transform="translate(258 160)"><path class="body" d="M-7 8Q-9 30 -5 40H5Q9 30 7 8Z"/><path class="fl-soft st-ink" stroke-width="1.6" d="M-6 8Q-6 -2 0 -2T6 8Z"/></g>
  <g transform="translate(276 160)"><path class="body" d="M-7 8Q-9 30 -5 40H5Q9 30 7 8Z"/><path class="fl-soft st-ink" stroke-width="1.6" d="M-6 8Q-6 -2 0 -2T6 8Z"/></g>
  <g transform="translate(294 160)"><path class="body" d="M-7 8Q-9 30 -5 40H5Q9 30 7 8Z"/><path class="fl-soft st-ink" stroke-width="1.6" d="M-6 8Q-6 -2 0 -2T6 8Z"/></g>
</g>

<!-- 2 ערמת נטרון מעל הגוף, ומים שנשאבים החוצה -->
<g class="only-2">
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M46 128Q54 96 90 92Q130 84 170 92Q214 96 226 128Z"/>
  <g class="fl-line"><circle cx="70" cy="114" r="1.2"/><circle cx="96" cy="104" r="1.2"/><circle cx="122" cy="98" r="1.2"/><circle cx="150" cy="104" r="1.2"/><circle cx="178" cy="100" r="1.2"/><circle cx="200" cy="114" r="1.2"/><circle cx="110" cy="118" r="1.2"/><circle cx="166" cy="118" r="1.2"/><circle cx="136" cy="112" r="1.2"/><circle cx="84" cy="122" r="1.2"/><circle cx="190" cy="124" r="1.2"/></g>
  <g class="fl-cold">
    <path d="M100 86q-3 4 0 6q3-2 0-6z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -36" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.8s" repeatCount="indefinite"/></path>
    <path d="M136 80q-3 4 0 6q3-2 0-6z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -36" dur="1.8s" begin="-.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-.6s" repeatCount="indefinite"/></path>
    <path d="M172 86q-3 4 0 6q3-2 0-6z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -36" dur="1.8s" begin="-1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="-1.2s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- 3-4 עטיפה: שרף ורצועות פשתן -->
<g class="from-3">
  <g clip-path="url(#mummy-body)">
    <rect class="fl-warm" fill-opacity=".35" x="40" y="100" width="190" height="30"/>
    <path class="st-line fl-none" stroke-width="1.2" d="M60 98l-12 30M72 98l-12 30M84 98l-12 30M96 98l-12 30M108 98l-12 30M120 98l-12 30M132 98l-12 30M144 98l-12 30M156 98l-12 30M168 98l-12 30M180 98l-12 30M192 98l-12 30M204 98l-12 30M216 98l-12 30M228 98l-12 30"/>
  </g>
  <path class="st-ink fl-none" stroke-width="2" d="M52 113a11 10 0 0 1 21-7Q90 101 112 104T152 105Q170 103 182 107L198 109Q203 98 209 100Q214 104 212 113V121Q206 125 196 124H72A11 10 0 0 1 52 113Z"/>
  <circle class="fl-cold st-ink" stroke-width="1" cx="112" cy="114" r="2.4"/>
  <circle class="fl-green st-ink" stroke-width="1" cx="168" cy="113" r="2.4"/>
</g>
<g class="only-3">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;120 0;0 0" dur="4s" repeatCount="indefinite"/>
    <path class="fl-panel st-ink" stroke-width="1" d="M88 88L80 104H86L94 90Z"/>
    <circle class="fl-panel st-ink" stroke-width="1.6" cx="94" cy="84" r="7"/><circle class="fl-soft st-ink" stroke-width="1" cx="94" cy="84" r="2.6"/>
  </g>
  <g transform="translate(36 60)"><path class="fl-warm st-ink" stroke-width="1.4" d="M-8 0H8L6 14H-6Z"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M4 -2L16 -16"/>
    <circle class="fl-warm" cx="0" cy="18" r="1.6"><animate attributeName="cy" values="16;30" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite"/></circle></g>
</g>

<!-- 4 סורק CT: טבעת שנעה לאורך הגוף, ופרוסה בתמונה -->
<g class="only-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;110 0;0 0" dur="5s" repeatCount="indefinite"/>
    <rect class="fl-none st-ink" stroke-width="2" x="72" y="84" width="16" height="64" rx="8"/>
    <path class="st-elec fl-none" stroke-width="2" stroke-dasharray="3 3" d="M80 90V142"><animate attributeName="opacity" values="1;.3;1" dur=".6s" repeatCount="indefinite"/></path>
  </g>
</g>
<g class="hl-4">
  <circle class="body" cx="262" cy="52" r="34"/>
  <g clip-path="url(#mummy-ct)">
    <ellipse class="fl-soft st-line" stroke-width="1" cx="262" cy="56" rx="26" ry="16"/>
    <ellipse class="fl-none st-line" stroke-width="1" cx="262" cy="56" rx="22" ry="13"/>
    <ellipse class="fl-panel st-ink" stroke-width="1" cx="262" cy="56" rx="18" ry="10"/>
    <circle class="fl-line st-ink" stroke-width="1" cx="262" cy="63" r="3.4"/><path class="fl-line" d="M248 60q4-5 8-1l-2 3zM276 60q-4-5-8-1l2 3z"/>
        <circle class="fl-elec st-ink" stroke-width=".8" cx="256" cy="48" r="2.4"/>
    <path class="st-elec fl-none" stroke-width="1.4" d="M228 52H296"><animateTransform attributeName="transform" type="rotate" values="0 262 52;180 262 52" dur="2s" repeatCount="indefinite"/></path>
  </g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="172" y="66">איברים לכדים</text><text x="267" y="215" class="sm">כדים קנופיים</text><text x="40" y="58">מוח דרך האף</text><text x="98" y="148" class="sm">הלב נשאר</text></g>
<g class="only-2"><text x="136" y="40">מים נשאבים</text><text x="136" y="160">נטרון, כ־40 יום</text></g>
<g class="only-3"><text x="148" y="160">שרף ורצועות פשתן</text><text x="36" y="96" class="sm">שרף</text></g>
<g class="only-4"><text x="262" y="104">פרוסת CT</text><text x="140" y="168">סריקה בלי לפרום</text></g>
`;
