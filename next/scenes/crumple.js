// אזורי קריסה: 1 גרף כוח־זמן: אותו שינוי מהירות, יותר זמן, פחות כוח · 2 החזית מתקפלת כאקורדיון · 3 תא נוסעים קשיח נשאר שלם · 4 החגורה והמותחן מחזיקים את הנוסע
export default `
<defs>
  <marker id="crumple-ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- כביש וקיר -->
<path class="thin st-ink" style="stroke-width:2" d="M6 191H314"/>
<rect class="fl-line st-ink" stroke-width="2" x="6" y="78" width="13" height="113"/>
<path class="thin st-ink" style="stroke-width:1" d="M6 100h13M6 123h13M6 146h13M6 169h13M12 78v22M12 123v23M12 169v22"/>

<!-- גרף כוח־זמן -->
<g class="hl-1">
  <path class="thin st-ink" d="M196 18V86H310" />
  <path class="fl-hot" opacity=".18" d="M196 86Q210 86 213 24Q216 86 230 86Z"/>
  <path class="wire st-hot" d="M196 86Q210 86 213 24Q216 86 230 86"/>
  <path class="fl-green" opacity=".18" d="M196 86C206 52 286 52 298 86Z"/>
  <path class="wire st-green" d="M196 86C206 52 286 52 298 86"/>
  <text x="252" y="50" class="sm">עם קריסה</text>
  <text x="238" y="28" class="sm">בלי קריסה</text>
  <text x="290" y="98" class="sm">זמן</text>
  <text x="186" y="22" class="sm" style="text-anchor:end">כוח</text>
</g>
<g class="only-1">
  <circle class="fl-green st-ink" stroke-width="1" r="3"><animateMotion dur="2.4s" repeatCount="indefinite" path="M196 86C206 52 286 52 298 86"/></circle>
  <circle class="fl-hot st-ink" stroke-width="1" r="3"><animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.3;1" calcMode="linear" path="M196 86Q210 86 213 24Q216 86 230 86"/></circle>
  <text x="102" y="30">אותו שינוי מהירות</text>
  <text x="102" y="44">יותר זמן — פחות כוח</text>
  <text x="102" y="62" class="lg">F = m·Δv/Δt</text>
</g>

<!-- המכונית: נוסעת אל הקיר, מתקפלת, ומתאפסת -->
<g>
  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.86;.9;.96;1" dur="3.2s" repeatCount="indefinite"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="12 0;0 0;-30 0;-30 0;12 0" keyTimes="0;.3;.45;.9;1" calcMode="spline" keySplines="0 0 1 1;.2 .7 .4 1;0 0 1 1;0 0 1 1" dur="3.2s" repeatCount="indefinite"/>

    <!-- גוף אחורי ותא -->
    <path class="body" d="M100 176V134L110 133L146 104H236L264 132L292 136Q302 138 302 150V176H266A20 20 0 0 0 226 176Z"/>
    <path class="fl-cold-soft st-ink" stroke-width="1.2" stroke-linejoin="round" d="M118 130L148 109H186V130Z"/>
    <path class="fl-cold-soft st-ink" stroke-width="1.2" stroke-linejoin="round" d="M193 109H233L256 130H193Z"/>

    <!-- חזית שמתקפלת -->
    <path class="body">
      <animate attributeName="d" values="M100 134L72 136L44 138Q22 140 20 152V176H50A20 20 0 0 1 90 176H100Z;M100 134L72 136L44 138Q22 140 20 152V176H50A20 20 0 0 1 90 176H100Z;M100 134L82 121L62 140Q52 142 50 152V176H59A20 20 0 0 1 99 176H100Z;M100 134L82 121L62 140Q52 142 50 152V176H59A20 20 0 0 1 99 176H100Z;M100 134L72 136L44 138Q22 140 20 152V176H50A20 20 0 0 1 90 176H100Z" keyTimes="0;.3;.45;.9;1" dur="3.2s" repeatCount="indefinite"/>
    </path>
    <rect class="fl-dark st-ink" stroke-width="1.5" x="18" y="160" width="6" height="14" rx="2">
      <animate attributeName="x" values="18;18;48;48;18" keyTimes="0;.3;.45;.9;1" dur="3.2s" repeatCount="indefinite"/>
    </rect>
    <g class="hl-2">
      <path class="wire st-warm" style="stroke-width:3.5">
        <animate attributeName="d" values="M24 160L32 153L42 167L52 153L62 167L72 153L82 167L92 153L100 160;M24 160L32 153L42 167L52 153L62 167L72 153L82 167L92 153L100 160;M54 160L59 153L64 167L69 153L74 167L79 153L84 167L91 153L100 160;M54 160L59 153L64 167L69 153L74 167L79 153L84 167L91 153L100 160;M24 160L32 153L42 167L52 153L62 167L72 153L82 167L92 153L100 160" keyTimes="0;.3;.45;.9;1" dur="3.2s" repeatCount="indefinite"/>
      </path>
      <path class="wire st-warm" style="stroke-width:3" d="M266 160L272 154L278 166L284 154L290 166L296 160"/>
    </g>

    <!-- גלגלים -->
    <circle class="fl-dark st-ink" stroke-width="2" cx="70" cy="176" r="15"><animate attributeName="cx" values="70;70;80;80;70" keyTimes="0;.3;.45;.9;1" dur="3.2s" repeatCount="indefinite"/></circle>
    <circle class="fl-dark st-ink" stroke-width="2" cx="246" cy="176" r="15"/>
    <circle class="fl-soft" cx="246" cy="176" r="6"/>

    <!-- תא נוסעים קשיח -->
    <g class="hl-3"><path class="wire st-green" style="stroke-width:4" d="M104 176V134L110 133L146 104H236L264 132V176H104M189 104V176"/></g>

    <!-- נוסע, מושב וחגורה -->
    <path class="fl-none st-line" stroke-width="7" stroke-linecap="round" d="M178 166H206L212 124"/>
    <path class="wire st-ink" style="stroke-width:4" d="M136 128L142 148"/>
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 196 162;0 196 162;-16 196 162;-16 196 162;0 196 162" keyTimes="0;.3;.42;.9;1" dur="3.2s" repeatCount="indefinite"/>
      <path class="fl-none st-ink" stroke-width="11" stroke-linecap="round" d="M198 160L203 132"/>
      <path class="fl-none" style="stroke:var(--s-soft)" stroke-width="7" stroke-linecap="round" d="M198 160L203 132"/>
      <path class="fl-none st-ink" stroke-width="5" stroke-linecap="round" d="M201 136L178 146L154 140"/>
      <circle class="body" cx="203" cy="119" r="8"/>
      <g class="hl-4"><path class="wire st-hot" style="stroke-width:3" d="M209 130L194 160"/></g>
    </g>
    <path class="fl-none st-ink" stroke-width="7" stroke-linecap="round" d="M196 164L168 166L156 180"/>
  </g>
</g>

<!-- שלב 2: הלם הפגיעה -->
<g class="only-2">
  <g><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.3;.36;.5;1" dur="3.2s" repeatCount="indefinite"/>
    <path class="fl-elec st-ink" stroke-width="1" stroke-linejoin="round" d="M20 140l6 6 7-3-3 7 6 5-8 1-1 8-5-6-7 3 3-7-5-5 7-1z"/>
  </g>
  <text x="102" y="30">החזית מתקפלת</text>
  <text x="102" y="44">ובולעת את האנרגיה</text>
</g>
<g class="only-3">
  <text x="102" y="30">תא הנוסעים</text>
  <text x="102" y="44">נשאר שלם</text>
</g>
<g class="only-4">
  <text x="102" y="30">החגורה מחזיקה</text>
  <text x="102" y="44">את הנוסע בתוך התא</text>
</g>
`;
