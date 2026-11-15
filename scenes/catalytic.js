// ממיר קטליטי: 1 כוורת קרמית מצופה מתכות יקרות · 2 חמצון: CO ושאריות דלק הופכים ל-CO2 ומים · 3 חיזור: תחמוצות חנקן הופכות לחנקן · 4 חיישן החמצן מדווח למחשב, שמתקן את התערובת סביב 14.7
export default `
<defs><marker id="catalytic-h" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-line"/></marker>
  <clipPath id="catalytic-end"><circle cx="170" cy="180" r="26"/></clipPath>
  <clipPath id="catalytic-plot"><rect x="44" y="160" width="180" height="40"/></clipPath></defs>

<!-- מנוע -->
<rect class="body" x="8" y="64" width="40" height="72" rx="5"/>
<path class="thin st-ink" d="M14 76H42M14 88H42M14 112H42M14 124H42"/>
<!-- צינור הפליטה -->
<path class="fl-soft st-ink" stroke-width="2" d="M48 92H94V108H48z"/>
<path class="fl-soft st-ink" stroke-width="2" d="M248 92H312V108H248z"/>
<path class="flow" style="stroke-width:3" d="M50 100H92"/>
<path class="flow" style="stroke-width:3" d="M250 100H310"/>

<!-- מעטפת הממיר בחתך -->
<path class="body" d="M92 90L112 60H228L250 90V110L228 140H112L92 110Z"/>
<rect class="fl-bg st-ink" stroke-width="1.5" x="118" y="66" width="108" height="68" rx="2"/>
<!-- תעלות הכוורת לאורכן, עם שכבת הזרז -->
<path class="thin st-ink" style="stroke-width:1.3" d="M118 68H226M118 76H226M118 84H226M118 92H226M118 100H226M118 108H226M118 116H226M118 124H226M118 132H226"/>
<g class="hl-1 hl-2 hl-3"><path class="wire st-elec" style="stroke-width:1" d="M118 68H226M118 76H226M118 84H226M118 92H226M118 100H226M118 108H226M118 116H226M118 124H226M118 132H226"/></g>

<!-- חיישן חמצן לפני הממיר, ומחשב המנוע -->
<g class="hl-4">
  <path class="wire st-violet" style="stroke-width:1.6" d="M72 80V36H100M40 30H28V64"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="67" y="80" width="10" height="12" rx="2"/>
  <rect class="body" x="40" y="18" width="60" height="24" rx="4"/>
  <path class="thin st-ink" d="M50 26h40M50 34h28"/>
  <path class="fl-dark st-ink" stroke-width="1" d="M24 64h8v6h-8z"/>
</g>

<!-- שלב 1: כוורת, חתך קצה ומתכות -->
<g class="only-1">
  <path class="wire st-elec" style="stroke-width:2.4" d="M118 68H226M118 76H226M118 84H226M118 92H226M118 100H226M118 108H226M118 116H226M118 124H226M118 132H226"/>
  <g class="fade"><path class="flow" style="stroke:var(--s-ink);stroke-width:1.5" d="M120 72H226M120 80H226M120 88H226M120 96H226M120 104H226M120 112H226M120 120H226M120 128H226"/></g>
  <circle class="fl-panel st-ink" stroke-width="2" cx="170" cy="180" r="26"/>
  <path class="thin st-ink" style="stroke-width:1" clip-path="url(#catalytic-end)" d="M140 152V208M146 152V208M152 152V208M158 152V208M164 152V208M170 152V208M176 152V208M182 152V208M188 152V208M194 152V208M200 152V208M140 152H200M140 158H200M140 164H200M140 170H200M140 176H200M140 182H200M140 188H200M140 194H200M140 200H200M140 206H200"/>
  <path class="thin" style="stroke-dasharray:2 3" d="M170 154V142"/>
  <text x="80" y="176">חתך: כוורת</text>
  <text x="80" y="191" class="sm">עשרות תעלות בכל סמ״ר</text>
  <text x="258" y="176">שכבת זרז דקה</text>
  <text x="258" y="191" class="sm">פלטינה · פלדיום · רודיום</text>
  <text x="170" y="40">כוורת קרמית</text>
</g>

<!-- שלב 2: חמצון -->
<g class="only-2">
  <g><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" path="M120 72H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="0s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-dark st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="0s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-0.9s" repeatCount="indefinite" path="M120 88H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-0.9s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-panel st-ink" stroke-width="0.8" cx="-6" cy="0" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="-4.5" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="4.5" r="2.2"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-0.9s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-1.7s" repeatCount="indefinite" path="M120 104H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-1.7s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-dark st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-1.7s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-0.4s" repeatCount="indefinite" path="M120 120H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-0.4s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-panel st-ink" stroke-width="0.8" cx="-6" cy="0" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="-4.5" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="4.5" r="2.2"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-0.4s" repeatCount="indefinite"/><g transform="scale(.82)"><g transform="translate(-5 -1)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g><g transform="translate(10 0)"><circle class="fl-panel st-ink" stroke-width="0.8" cx="-3.6" cy="3.2" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="3.6" cy="3.2" r="2.2"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="0" cy="-0.6" r="3.6"/></g></g></g>
    </g><g><animateMotion dur="2.6s" begin="-2.1s" repeatCount="indefinite" path="M120 128H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-2.1s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-dark st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-2.1s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g></g>
    </g>
  <text x="170" y="40" class="lg">חמצון</text>
  <text x="170" y="54" class="sm">על פלטינה ופלדיום</text>
  <g transform="translate(64 168)"><circle class="fl-dark st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g><path class="arrow st-line" d="M78 168H94" marker-end="url(#catalytic-h)"/><g transform="translate(112 168)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g>
  <text x="64" y="186" class="sm">CO</text><text x="112" y="186" class="sm">CO₂</text>
  <g transform="translate(196 168)"><circle class="fl-panel st-ink" stroke-width="0.8" cx="-6" cy="0" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="-4.5" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="2" cy="4.5" r="2.2"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/></g><path class="arrow st-line" d="M208 168H224" marker-end="url(#catalytic-h)"/><g transform="translate(242 168)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-6.4" cy="0" r="3.6"/><circle class="fl-dark st-ink" stroke-width="0.8" cx="0" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="6.4" cy="0" r="3.6"/></g><text x="258" y="171" class="sm">+</text><g transform="translate(272 168)"><circle class="fl-panel st-ink" stroke-width="0.8" cx="-3.6" cy="3.2" r="2.2"/><circle class="fl-panel st-ink" stroke-width="0.8" cx="3.6" cy="3.2" r="2.2"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="0" cy="-0.6" r="3.6"/></g>
  <text x="196" y="186" class="sm">דלק</text><text x="242" y="186" class="sm">CO₂</text><text x="272" y="186" class="sm">מים</text>
  <text x="160" y="208" class="sm">חמצן מהפליטה מתחבר לפחמן ולמימן</text>
</g>

<!-- שלב 3: חיזור -->
<g class="only-3">
  <g><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite" path="M120 80H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="0s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="0s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-cold st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-1.2s" repeatCount="indefinite" path="M120 96H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-1.2s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-1.2s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-cold st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-0.5s" repeatCount="indefinite" path="M120 112H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-0.5s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-0.5s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-cold st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
    </g><g><animateMotion dur="2.6s" begin="-1.9s" repeatCount="indefinite" path="M120 128H226"/>
      <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.46;.54;1" dur="2.6s" begin="-1.9s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.46;.54;.94;1" dur="2.6s" begin="-1.9s" repeatCount="indefinite"/><g transform="scale(.82)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-cold st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g></g>
    </g>
  <text x="170" y="40" class="lg">חיזור</text>
  <text x="170" y="54" class="sm">על רודיום</text>
  <g transform="translate(110 168)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g><text x="124" y="171" class="sm">+</text><g transform="translate(138 168)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g>
  <path class="arrow st-line" d="M152 168H170" marker-end="url(#catalytic-h)"/>
  <g transform="translate(188 168)"><circle class="fl-cold st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-cold st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g><text x="202" y="171" class="sm">+</text><g transform="translate(216 168)"><circle class="fl-hot st-ink" stroke-width="0.8" cx="-3.4" cy="0" r="3.6"/><circle class="fl-hot st-ink" stroke-width="0.8" cx="3.4" cy="0" r="3.6"/></g>
  <text x="124" y="186" class="sm">תחמוצות חנקן</text><text x="188" y="186" class="sm">חנקן</text><text x="216" y="186" class="sm">חמצן</text>
  <text x="170" y="206" class="sm">החמצן שמשתחרר משמש לחמצון</text>
</g>

<!-- שלב 4: חיישן החמצן והתיקון -->
<g class="only-4">
  <circle class="ring st-violet" cx="72" cy="86" r="12"/>
  <path class="flow" d="M72 80V36H100"/><path class="flow" d="M40 30H28V64"/>
  <text x="92" y="72" class="sm">חיישן</text>
  <text x="70" y="14" class="sm">מחשב המנוע</text>
  <text x="136" y="34" class="sm">מתקן את הדלק</text>
  <path class="thin" style="stroke-dasharray:3 3" d="M44 180H226"/>
  <g clip-path="url(#catalytic-plot)"><g>
    <animateTransform attributeName="transform" type="translate" values="10 0;-24 0" dur="1.4s" repeatCount="indefinite"/>
    <path class="wire st-violet" style="stroke-width:2" d="M0 180L2 172.7L4 170.1L6 169.4L8 169.3L10 169.3L12 169.6L14 171L16 175.8L18 184.2L20 189L22 190.4L24 190.7L26 190.7L28 190.6L30 189.9L32 187.3L34 180L36 172.7L38 170.1L40 169.4L42 169.3L44 169.3L46 169.6L48 171L50 175.8L52 184.2L54 189L56 190.4L58 190.7L60 190.7L62 190.6L64 189.9L66 187.3L68 180L70 172.7L72 170.1L74 169.4L76 169.3L78 169.3L80 169.6L82 171L84 175.8L86 184.2L88 189L90 190.4L92 190.7L94 190.7L96 190.6L98 189.9L100 187.3L102 180L104 172.7L106 170.1L108 169.4L110 169.3L112 169.3L114 169.6L116 171L118 175.8L120 184.2L122 189L124 190.4L126 190.7L128 190.7L130 190.6L132 189.9L134 187.3L136 180L138 172.7L140 170.1L142 169.4L144 169.3L146 169.3L148 169.6L150 171L152 175.8L154 184.2L156 189L158 190.4L160 190.7L162 190.7L164 190.6L166 189.9L168 187.3L170 180L172 172.7L174 170.1L176 169.4L178 169.3L180 169.3L182 169.6L184 171L186 175.8L188 184.2L190 189L192 190.4L194 190.7L196 190.7L198 190.6L200 189.9L202 187.3L204 180L206 172.7L208 170.1L210 169.4L212 169.3L214 169.3L216 169.6L218 171L220 175.8L222 184.2L224 189L226 190.4L228 190.7L230 190.7L232 190.6L234 189.9L236 187.3L238 180L240 172.7L242 170.1L244 169.4L246 169.3L248 169.3L250 169.6L252 171L254 175.8L256 184.2L258 189L260 190.4"/>
  </g></g>
  <text x="26" y="184" class="sm">14.7</text>
  <text x="252" y="170" class="sm">עשיר: מעט אוויר</text>
  <text x="252" y="196" class="sm">דל: עודף אוויר</text>
  <text x="134" y="212" class="sm">ק״ג אוויר לכל ק״ג בנזין</text>
</g>
`;
