// מהמוסקט לרובה: 1 מנעול צור מצית את המחבת · 2 כדור עגול בקנה חלק סוטה · 3 חריצים מסובבים קליע שטס ישר · 4 קליע מינייה מתרחב, תרמיל נטען מאחור
export default `
<defs>
  <marker id="rifle-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="rifle-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <clipPath id="rifle-bore"><rect x="92" y="104.500" width="124" height="7"/></clipPath>
</defs>

<!-- מטרה -->
<g class="hl-2 hl-3">
  <rect class="fl-panel st-ink" stroke-width="2" x="298" y="78" width="10" height="60" rx="2"/>
  <rect class="fl-hot" x="299" y="102" width="8" height="12"/>
</g>

<!-- הנשק: קת, קנה בחתך ומנעול -->
<path class="body" style="fill:var(--s-warm)" d="M12 108Q36 104 62 99H74V119H64Q40 122 16 132Q8 122 12 108Z"/>
<rect class="fl-line st-ink" stroke-width="2" x="70" y="101" width="146" height="14" rx="2"/>
<rect class="fl-bg" x="92" y="104.500" width="124" height="7"/>
<rect class="fl-dark" x="74" y="104.500" width="18" height="7"/>
<g class="hl-1">
  <!-- מחבת ופלדה -->
  <path class="fl-dark st-ink" stroke-width="1.5" d="M78 99H90L88 103H80Z"/>
  <path class="wire st-ink" style="stroke-width:2.5" d="M88 98V82L82 80"/>
  <!-- הנוקר עם הצור -->
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-28 58 98;-28 58 98;18 58 98;18 58 98;-28 58 98" keyTimes="0;.4;.48;.9;1" dur="2.4s" repeatCount="indefinite"/>
    <path class="body" style="fill:var(--s-line);stroke-width:1.8" d="M55 98L60 76H70L68 82H63L60 98Z"/>
    <rect class="fl-dark st-ink" stroke-width="1" x="68" y="76" width="9" height="6" rx="1"/>
  </g>
  <circle class="fl-ink" cx="58" cy="98" r="2"/>
</g>

<!-- שלב 1: ניצוצות, הבזק במחבת ובמטען -->
<g class="only-1">
  <g class="fl-elec">
    <circle r="1.800"><animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.48;.6;1" path="M85 84L80 98"/></circle>
    <circle r="1.800"><animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.48;.62;1" path="M86 85L86 98"/></circle>
    <circle r="1.800"><animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.48;.58;1" path="M85 84L92 94"/></circle>
    <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.47;.48;.6;.64;1" dur="2.4s" repeatCount="indefinite"/>
  </g>
  <g>
    <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.6;.64;.8;1" dur="2.4s" repeatCount="indefinite"/>
    <circle class="fl-warm" cx="84" cy="96" r="6"/>
    <rect class="fl-hot" x="74" y="104.500" width="18" height="7"/>
  </g>
  <text x="68" y="30">צור מכה בפלדה</text>
  <text x="68" y="44">והניצוצות מציתים</text>
  <text x="68" y="58">את אבק השריפה</text>
</g>

<!-- שלב 2: כדור עגול בקנה חלק -->
<g class="only-2">
  <g class="fl-none st-line" stroke-width="1.5" stroke-dasharray="3 4">
    <path d="M216 108Q260 98 312 70"/><path d="M216 108Q262 116 296 140"/><path d="M216 108Q258 108 296 126"/><path d="M216 108Q262 102 296 88"/>
  </g>
  <circle class="fl-line st-ink" stroke-width="1.2" r="3.300">
    <animateMotion dur="2s" repeatCount="indefinite" path="M96 108L110 105.800L124 110.200L138 105.800L152 110.200L166 105.800L180 110.200L196 105.800L216 108Q260 98 312 70"/>
  </circle>
  <text x="156" y="90">כדור עגול, קנה חלק</text>
  <text x="256" y="62">סטייה מקרית</text>
</g>

<!-- שלב 3: חריצים, קליע מסתובב שטס ישר -->
<g class="from-3">
  <g class="hl-3" clip-path="url(#rifle-bore)">
    <path class="thin st-ink" style="stroke-width:1.4" d="M96 104L102 112M108 104L114 112M120 104L126 112M132 104L138 112M144 104L150 112M156 104L162 112M168 104L174 112M180 104L186 112M192 104L198 112M204 104L210 112"/>
  </g>
</g>
<g class="only-3">
  <path class="fl-none st-hot" stroke-width="1.5" stroke-dasharray="3 4" d="M216 108H296"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;214 0;214 0" keyTimes="0;.55;1" dur="1.8s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="1.2" d="M82 104.800H92Q100 105.500 102 108Q100 110.500 92 111.200H82Z"/>
    <path class="wire st-ink" style="stroke-width:1.2" d="M86 104.800L90 111.200">
      <animate attributeName="d" values="M84 104.800L86 111.200;M90 104.800L92 111.200;M84 104.800L86 111.200" dur=".18s" repeatCount="indefinite"/>
    </path>
  </g>
  <g class="fl-ink"><circle cx="303" cy="106" r="1.500"/><circle cx="302" cy="110" r="1.500"/><circle cx="304" cy="108.500" r="1.500"/></g>
  <text x="160" y="90">חריצים לולייניים בדופן</text>
  <text x="256" y="94">טס ישר</text>
</g>

<!-- שלב 4: קליע מינייה ותרמיל -->
<g class="hl-4">
  <!-- דפנות הקנה עם חריצים, בהגדלה -->
  <path class="fl-none st-ink" stroke-width="2" d="M24 150H44V146H64V150H84V146H104V150H124V146H144V150H150M24 194H34V198H54V194H74V198H94V194H114V198H134V194H150"/>
  <path class="body" style="fill:var(--s-line)" d="M42 153H96Q130 157 142 172Q130 187 96 191H42Z">
    <animate attributeName="d" values="M42 153H96Q130 157 142 172Q130 187 96 191H42Z;M42 153H96Q130 157 142 172Q130 187 96 191H42Z;M42 147H96Q130 155 142 172Q130 189 96 197H42Z;M42 147H96Q130 155 142 172Q130 189 96 197H42Z" keyTimes="0;.35;.55;1" dur="2.4s" repeatCount="indefinite"/>
  </path>
  <path class="fl-bg st-ink" stroke-width="1.5" d="M42 160L76 172L42 184Z"/>
  <!-- תרמיל ותא ההכנסה מאחור -->
  <path class="fl-line st-ink" stroke-width="2" d="M262 156H312M262 188H312M262 156V164M262 180V188"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 0;36 0;36 0;0 0" keyTimes="0;.2;.55;.9;1" dur="3s" repeatCount="indefinite"/>
    <rect class="st-ink" stroke-width="1.5" style="fill:var(--s-warm)" x="196" y="165" width="36" height="14" rx="1.500"/>
    <rect class="fl-dark" x="192" y="163" width="4" height="18" rx="1"/>
    <circle class="fl-elec st-ink" stroke-width="1" cx="199" cy="172" r="2.500"/>
    <path class="fl-line st-ink" stroke-width="1.5" d="M232 165H240Q252 167 256 172Q252 177 240 179H232Z"/>
  </g>
</g>
<g class="only-4">
  <path class="arrow st-hot" d="M14 166H36" marker-end="url(#rifle-h)"/>
  <path class="arrow st-hot" d="M14 178H36" marker-end="url(#rifle-h)"/>
  <g class="pulse"><path class="arrow st-hot" d="M56 166V157" marker-end="url(#rifle-h)"/><path class="arrow st-hot" d="M56 178V187" marker-end="url(#rifle-h)"/></g>
  <text x="96" y="140">הגז מרחיב את הבסיס החלול</text>
  <text x="96" y="212">אל החריצים</text>
  <text x="236" y="146">תרמיל: נפץ, אבק וקליע</text>
  <text x="236" y="206">נטען מאחור</text>
</g>
`;
