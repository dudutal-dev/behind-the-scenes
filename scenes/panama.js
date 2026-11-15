// תעלת פנמה: 1 אגם גבוה שהגשם ממלא · 2 שלוש מדרגות של תאים בכל צד · 3 מילוי בכוח הכבידה דרך מנהרות ברצפה · 4 אגני חיסכון מדורגים לצד התא
export default `
<defs>
  <clipPath id="panama-b1"><rect x="206" y="150" width="30" height="20"/></clipPath>
  <clipPath id="panama-b2"><rect x="242" y="166" width="30" height="20"/></clipPath>
  <clipPath id="panama-b3"><rect x="278" y="182" width="30" height="20"/></clipPath>
  <clipPath id="panama-top"><rect x="0" y="30" width="320" height="74"/></clipPath>
  <clipPath id="panama-ch"><rect x="66" y="120" width="124" height="84"/></clipPath>
</defs>

<!-- ===== חתך לאורך התעלה ===== -->
<!-- ים משני הצדדים ואגם באמצע -->
<rect class="fl-cold-soft" x="0" y="100" width="30" height="10"/>
<rect class="fl-cold-soft" x="290" y="100" width="30" height="10"/>
<g class="hl-1">
  <rect class="fl-cold-soft" x="108" y="40" width="104" height="64"/>
  <path class="wire st-cold" style="stroke-width:2" d="M108 40H212"/>
</g>
<path class="wire st-cold" style="stroke-width:2" d="M0 100H30M290 100H320"/>

<!-- מפלסי המים בתאים עולים ויורדים עם הספינה -->
<g class="hl-2">
  <g class="fl-cold-soft" clip-path="url(#panama-top)">
    <rect x="30" y="100" width="26" height="70"><animate attributeName="y" values="100;100;80;80;100;100" keyTimes="0;.0864;.1332;.18;.40;1" dur="14s" repeatCount="indefinite"/></rect>
    <rect x="56" y="80" width="26" height="70"><animate attributeName="y" values="80;80;60;60;80;80" keyTimes="0;.1939;.2407;.30;.50;1" dur="14s" repeatCount="indefinite"/></rect>
    <rect x="82" y="60" width="26" height="70"><animate attributeName="y" values="60;60;40;40;60;60" keyTimes="0;.3014;.3481;.42;.60;1" dur="14s" repeatCount="indefinite"/></rect>
    <rect x="212" y="40" width="26" height="70"><animate attributeName="y" values="40;40;60;60;40;40" keyTimes="0;.6519;.6986;.76;.95;1" dur="14s" repeatCount="indefinite"/></rect>
    <rect x="238" y="60" width="26" height="70"><animate attributeName="y" values="60;60;80;80;60;60" keyTimes="0;.7593;.8061;.86;.99;1" dur="14s" repeatCount="indefinite"/></rect>
    <rect x="264" y="80" width="26" height="70"><animate attributeName="y" values="80;80;100;100;80" keyTimes="0;.8668;.9136;.95;1" dur="14s" repeatCount="indefinite"/></rect>
  </g>
</g>
<rect class="fl-soft" x="0" y="104" width="320" height="12"/>
<path class="wire st-ink" style="stroke-width:1.5" d="M0 104H320"/>
<!-- שערים -->
<g class="hl-2">
  <path class="st-dark fl-none" stroke-width="3" d="M30 104V86M56 104V66M82 104V46M108 104V36M212 104V36M238 104V46M264 104V66M290 104V86"/>
</g>
<!-- הספינה עולה במדרגות, חוצה את האגם ויורדת -->
<g>
  <animateMotion dur="14s" repeatCount="indefinite" path="M6 100H43V80H69V60H95V40H225V60H251V80H277V100H314"/>
  <path class="fl-hot st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-9 -3H9L6 2H-6z"/>
  <rect class="fl-panel st-ink" stroke-width="1" x="1" y="-8" width="6" height="5"/>
</g>

<!-- שלב 1: גשם ממלא את האגם -->
<g class="only-1">
  <g class="wire st-cold" style="stroke-width:1.5">
    <path d="M0 0v5"><animateMotion dur="1s" repeatCount="indefinite" path="M128 10V34"/></path>
    <path d="M0 0v5"><animateMotion dur="1s" begin="-.3s" repeatCount="indefinite" path="M148 12V34"/></path>
    <path d="M0 0v5"><animateMotion dur="1s" begin="-.6s" repeatCount="indefinite" path="M168 10V34"/></path>
    <path d="M0 0v5"><animateMotion dur="1s" begin="-.15s" repeatCount="indefinite" path="M188 12V34"/></path>
    <path d="M0 0v5"><animateMotion dur="1s" begin="-.45s" repeatCount="indefinite" path="M204 10V34"/></path>
  </g>
</g>

<!-- ===== מבט מקרוב על תא אחד ===== -->
<path class="thin" style="stroke-width:1" stroke-dasharray="3 4" d="M6 122H314"/>
<!-- מאגר עליון (האגם או התא שמעל) -->
<g class="hl-3">
  <rect class="fl-cold-soft" x="8" y="142" width="52" height="62"/>
  <path class="wire st-cold" style="stroke-width:2" d="M8 142H60"/>
</g>
<!-- מי התא -->
<g clip-path="url(#panama-ch)" class="hl-3 hl-4">
  <rect class="fl-cold-soft" x="66" y="186" width="124" height="80"><animate attributeName="y" values="186;144;144;186;186" keyTimes="0;.4;.5;.9;1" dur="6s" repeatCount="indefinite"/></rect>
</g>
<!-- קרקע, קירות ושערים של התא -->
<rect class="fl-soft" x="0" y="204" width="320" height="16"/>
<path class="fl-soft" d="M196 204V172H240V188H276V204z"/>
<path class="wire st-ink" style="stroke-width:2" d="M8 204H196"/>
<rect class="fl-dark st-ink" stroke-width="1.2" x="60" y="134" width="6" height="70"/>
<rect class="fl-dark st-ink" stroke-width="1.2" x="190" y="134" width="6" height="70"/>
<!-- ספינה בתוך התא -->
<g>
  <animateTransform attributeName="transform" type="translate" values="0 0;0 -42;0 -42;0 0;0 0" keyTimes="0;.4;.5;.9;1" dur="6s" repeatCount="indefinite"/>
  <path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M92 180H168L161 192H99z"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="146" y="170" width="14" height="10"/>
  <rect class="fl-warm st-ink" stroke-width="1" x="104" y="173" width="12" height="7"/><rect class="fl-cold st-ink" stroke-width="1" x="118" y="173" width="12" height="7"/>
</g>

<!-- שלב 3: מנהרה מתחת לרצפה, שסתום ופתחים -->
<g class="hl-3">
  <path class="pipe st-cold" d="M34 204V212H150M90 212V204M120 212V204M150 212V204"/>
  <path class="fl-ink" d="M40 208L52 216V208L40 216z"/>
</g>
<g class="only-3">
  <path class="flow" d="M34 200V212H90V204M120 212V204M150 212V204"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.42;1" dur="6s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 4: שלושה אגני חיסכון בגבהים מדורגים -->
<g class="hl-4">
  <path class="pipe st-cold" style="stroke-width:4" d="M196 166H206M196 182H242M196 198H278"/>
  <g clip-path="url(#panama-b1)"><rect class="fl-cold-soft" x="206" y="150" width="30" height="20"><animate attributeName="y" values="150;150;170;170;150;150" keyTimes="0;.27;.4;.5;.63;1" dur="6s" repeatCount="indefinite"/></rect></g>
  <g clip-path="url(#panama-b2)"><rect class="fl-cold-soft" x="242" y="166" width="30" height="20"><animate attributeName="y" values="166;166;186;186;166;166" keyTimes="0;.13;.27;.63;.77;1" dur="6s" repeatCount="indefinite"/></rect></g>
  <g clip-path="url(#panama-b3)"><rect class="fl-cold-soft" x="278" y="182" width="30" height="20"><animate attributeName="y" values="182;202;202;182;182" keyTimes="0;.13;.77;.9;1" dur="6s" repeatCount="indefinite"/></rect></g>
  <path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M206 148V170H236V148M242 164V186H272V164M278 180V202H308V180"/>
</g>
<g class="only-4">
  <path class="flow" d="M196 166H206M196 182H242M196 198H278"/>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="60" y="16">אגם גאטון:</text>
  <text x="60" y="30">26 מ׳ מעל הים</text>
  <text x="262" y="16">הגשם ממלא</text>
  <text x="262" y="30">את האגם</text>
</g>
<g class="only-2">
  <text x="160" y="16">שלוש מדרגות בכל צד</text>
  <text x="160" y="30">התאים עולים ויורדים</text>
</g>
<g class="only-3">
  <text x="160" y="16">מים יורדים מהאגם</text>
  <text x="160" y="30">בלי משאבות</text>
  <text x="268" y="134">מנהרה ברצפה</text>
  <text x="268" y="148">ושסתום</text>
</g>
<g class="only-4">
  <text x="160" y="16">אגני חיסכון</text>
  <text x="160" y="30">כ־60% מהמים חוזרים</text>
  <text x="258" y="136">שלושה אגנים</text>
</g>
`;
