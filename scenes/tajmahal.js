// טאג' מהאל: 1 יסוד של בארות מלאות אבן וקשתות ליד הנהר · 2 ליבת לבנים בקליפת שיש · 3 צריחים נוטים החוצה · 4 כתב שגדל כלפי מעלה
export default `
<defs>
  <marker id="tajmahal-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- קרקע והנהר -->
<path class="fl-soft" d="M0 150H262L272 168V220H0z"/>
<path class="wire st-ink" style="stroke-width:1.5" d="M0 150H262L272 168"/>
<rect class="fl-cold-soft" x="272" y="168" width="48" height="52"/>
<g class="hl-1">
  <path class="wire st-cold dash" style="stroke-width:2" d="M314 180H282M306 194H276M316 208H286"><animate attributeName="opacity" values=".5;1;.5" dur="2.2s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 1: בארות מלאות אבן וקשתות מעליהן -->
<g class="hl-1">
  <path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M80 150H240V162H226Q219 154 212 162H198Q191 154 184 162H170Q163 154 156 162H142Q135 154 128 162H114Q107 154 100 162H94V162H80z"/>
  <g class="fl-dark st-ink" stroke-width="1.5">
    <rect x="80" y="162" width="14" height="44" rx="2"/><rect x="100" y="162" width="14" height="44" rx="2"/><rect x="128" y="162" width="14" height="44" rx="2"/>
    <rect x="156" y="162" width="14" height="44" rx="2"/><rect x="184" y="162" width="14" height="44" rx="2"/><rect x="212" y="162" width="14" height="44" rx="2"/><rect x="226" y="162" width="14" height="44" rx="2" opacity="0"/>
  </g>
  <g class="fl-line">
    <circle cx="84" cy="196" r="2.2"/><circle cx="90" cy="184" r="2"/><circle cx="85" cy="172" r="1.8"/>
    <circle cx="104" cy="194" r="2"/><circle cx="110" cy="178" r="2.2"/><circle cx="105" cy="168" r="1.6"/>
    <circle cx="132" cy="190" r="2.2"/><circle cx="138" cy="200" r="1.8"/><circle cx="134" cy="172" r="2"/>
    <circle cx="160" cy="198" r="2"/><circle cx="166" cy="182" r="2.2"/><circle cx="161" cy="170" r="1.6"/>
    <circle cx="188" cy="192" r="2.2"/><circle cx="194" cy="176" r="1.8"/><circle cx="190" cy="168" r="1.6"/>
    <circle cx="216" cy="196" r="1.8"/><circle cx="222" cy="182" r="2.2"/><circle cx="217" cy="170" r="1.6"/>
  </g>
  <g class="only-1">
    <path class="flow" d="M87 154V204M107 154V204M135 154V204M163 154V204M191 154V204M219 154V204"/>
  </g>
</g>

<!-- הבסיס, גוף הקבר והכיפה -->
<g class="hl-2 hl-4">
  <rect class="body" x="70" y="134" width="180" height="16"/>
  <rect class="body" x="108" y="84" width="104" height="50"/>
  <!-- כיפה -->
  <rect class="body" x="136" y="76" width="48" height="8"/>
  <path class="body" d="M134 76C126 58 146 46 160 30C174 46 194 58 186 76z"/>
  <path class="wire st-ink" style="stroke-width:1.6" d="M160 30V18"/><circle class="fl-ink" cx="160" cy="17" r="2"/>
  <path class="body" style="stroke-width:1.5" d="M115 84V76H127V84M193 84V76H205V84"/>
  <path class="body" style="stroke-width:1.5" d="M114 76Q121 64 128 76zM192 76Q199 64 206 76z"/>
  <!-- שער מרכזי וקשתות צד -->
  <rect class="fl-none st-ink" stroke-width="1.5" x="142" y="88" width="36" height="46"/>
  <path class="fl-soft st-ink" stroke-width="1.5" d="M149 134V110Q160 96 171 110V134z"/>
  <path class="fl-soft st-ink" stroke-width="1.2" d="M116 108V98Q122 90 128 98V108zM186 108V98Q192 90 198 98V108zM186 130V120Q192 112 198 120V130z"/>
</g>

<!-- שלב 2: חתך בפינה: לבנים בפנים, לוחות שיש בחוץ -->
<g class="hl-2">
  <rect class="fl-warm st-ink" stroke-width="1.2" x="114" y="112" width="24" height="20"/>
  <path class="thin st-ink" style="stroke-width:.8" d="M114 117H138M114 122H138M114 127H138M120 112V117M130 112V117M125 117V122M135 117V122M120 122V127M130 122V127M125 127V132M135 127V132"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="109" y="112" width="5" height="9"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="109" y="122" width="5" height="10"/>
</g>
<g class="only-2">
  <g>
    <animateTransform attributeName="transform" type="translate" values="-16 0;-16 0;0 0;0 0" keyTimes="0;.3;.7;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;1;0" keyTimes="0;.7;.95;1" dur="3s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.2" x="109" y="122" width="5" height="10"/>
  </g>
</g>

<!-- שלב 3: צריחים נוטים מעט החוצה -->
<g class="hl-3">
  <g transform="rotate(-3 81 134)">
    <path class="body" style="stroke-width:1.6" d="M76 134L78 50H84L86 134z"/>
    <path class="wire st-ink" style="stroke-width:1.4" d="M75 108H87M76 82H86M76 56H86"/>
    <path class="body" style="stroke-width:1.4" d="M76 50Q81 38 86 50z"/>
  </g>
  <g transform="rotate(3 239 134)">
    <path class="body" style="stroke-width:1.6" d="M234 134L236 50H242L244 134z"/>
    <path class="wire st-ink" style="stroke-width:1.4" d="M233 108H245M234 82H244M234 56H244"/>
    <path class="body" style="stroke-width:1.4" d="M234 50Q239 38 244 50z"/>
  </g>
</g>
<g class="only-3">
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-3 81 134;-3 81 134;-58 81 134;-58 81 134" keyTimes="0;.25;.7;1" calcMode="spline" keySplines="0 0 1 1;.7 0 1 1;0 0 1 1" dur="3.4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.25;.7;1" dur="3.4s" repeatCount="indefinite"/>
    <path class="fl-none st-hot" stroke-width="1.6" stroke-dasharray="3 3" d="M76 134L78 50H84L86 134z"/>
  </g>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M62 70Q44 92 40 118" marker-end="url(#tajmahal-a)"/>
</g>

<!-- שלב 4: כתב משובץ באבן כהה; האותיות גדלות כלפי מעלה -->
<g class="hl-4">
  <path fill="#f3f0e8" d="M143 89H177V97H143zM143 97H148.5V133H143zM171.5 97H177V133H171.5z"/>
  <path fill="none" stroke="#24201c" stroke-width="1" stroke-linecap="round" d="M144.1 130.0v-1.6M145.7 130.0q1.4 0 1.4-1.6M143.5 124.0v-2.2M145.7 124.0q2.0 0 2.0-2.2M143.0 117.0v-2.8M145.7 117.0q2.5 0 2.5-2.8M142.3 109.0v-3.5M145.7 109.0q3.1 0 3.1-3.5M141.6 100.0v-4.3M145.7 100.0q3.9 0 3.9-4.3M173.1 130.0v-1.6M174.7 130.0q1.4 0 1.4-1.6M172.5 124.0v-2.2M174.7 124.0q2.0 0 2.0-2.2M172.0 117.0v-2.8M174.7 117.0q2.5 0 2.5-2.8M171.3 109.0v-3.5M174.7 109.0q3.1 0 3.1-3.5M170.6 100.0v-4.3M174.7 100.0q3.9 0 3.9-4.3M150.0 95v-4.6M151.5 95q2.2 0 2.2-4.6M155.0 95v-4.6M156.5 95q2.2 0 2.2-4.6M160.0 95v-4.6M161.5 95q2.2 0 2.2-4.6M165.0 95v-4.6M166.5 95q2.2 0 2.2-4.6M170.0 95v-4.6M171.5 95q2.2 0 2.2-4.6"/>
</g>
<g class="only-4">
  <path class="wire st-violet dash" style="stroke-width:1.4" d="M288 140L178 99M288 140L178 128"/>
  <ellipse class="fl-panel st-ink" stroke-width="1.5" cx="294" cy="140" rx="8" ry="5"/>
  <circle class="fl-ink" cx="290" cy="140" r="2.5"/>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="36" y="168">בארות</text>
  <text x="36" y="182">מלאות אבן</text>
  <text x="277" y="17">קשתות מפזרות</text>
  <text x="277" y="31">את העומס</text>
  <text x="290" y="140">יאמונה</text>
</g>
<g class="only-2">
  <text x="44" y="96">ליבת לבנים</text>
  <text x="44" y="112">בקליפת שיש</text>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M84 108Q100 110 110 116" marker-end="url(#tajmahal-a)"/>
</g>
<g class="only-3">
  <text x="277" y="17">נוטים החוצה,</text>
  <text x="277" y="31">הרחק מהכיפה</text>
</g>
<g class="only-4">
  <text x="277" y="17">האותיות גדלות</text>
  <text x="277" y="31">כלפי מעלה</text>
  <text x="292" y="104">נראות</text>
  <text x="292" y="118">אחידות</text>
</g>
`;
