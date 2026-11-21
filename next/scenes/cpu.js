// המעבד: 1 השעון פועם וכל החלקים צועדים יחד · 2 מביא פקודה מהזיכרון, מפענח, מבצע, והמונה מתקדם · 3 פקודות פשוטות עם מספרים: טען 5, חבר 3, השווה, קפוץ · 4 כמה ליבות על שבב אחד, ומעליהן השכבות: אפליקציה, קוד, פקודות
export default `
<defs>
  <marker id="cpu-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="cpu-b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
  <clipPath id="cpu-c"><rect x="241" y="60" width="50" height="22"/></clipPath>
</defs>

<!-- ליבות נוספות על אותו שבב -->
<g class="from-4">
  <rect class="fl-soft st-ink" stroke-width="2" x="120" y="36" width="194" height="130" rx="8"/><circle class="fl-green blink d3" cx="307" cy="44" r="2.6"/>
  <rect class="fl-soft st-ink" stroke-width="2" x="116" y="40" width="194" height="130" rx="8"/><circle class="fl-green blink d2" cx="303" cy="48" r="2.6"/>
  <rect class="fl-soft st-ink" stroke-width="2" x="112" y="44" width="194" height="130" rx="8"/><circle class="fl-green blink d1" cx="299" cy="52" r="2.6"/>
</g>
<!-- השבב -->
<rect class="fl-soft st-ink" stroke-width="2" x="108" y="48" width="194" height="130" rx="8"/>
<g class="from-4"><circle class="fl-green blink d4" cx="295" cy="170" r="2.6"/></g>

<!-- זיכרון עם תוכנית קצרה -->
<g class="hl-2 hl-3 hl-4">
  <rect class="body" x="10" y="48" width="86" height="130" rx="5"/>
  <path class="thin" style="stroke-width:1.2" d="M10 82H96M10 104H96M10 126H96M10 148H96M28 60V148M10 60H96"/>
  <path class="thin" d="M36 157h50M36 165h36M18 157h4M18 165h4"/>
  <text class="sm" x="19" y="74.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;fill:var(--s-line)">0</text><text class="sm" x="62" y="74.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700">LOAD 5</text>
  <text class="sm" x="19" y="96.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;fill:var(--s-line)">1</text><text class="sm" x="62" y="96.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700">ADD 3</text>
  <text class="sm" x="19" y="118.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;fill:var(--s-line)">2</text><text class="sm" x="62" y="118.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700">CMP 8</text>
  <text class="sm" x="19" y="140.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;fill:var(--s-line)">3</text><text class="sm" x="62" y="140.5" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700">JMP 0</text>
</g>
<!-- שורת הפקודה הנוכחית -->
<g class="only-1 from-4"><rect class="fl-elec" opacity=".4" x="11" y="61" width="84" height="20"/></g>
<g class="only-2 only-3"><rect class="fl-elec" opacity=".45" x="11" y="61" width="84" height="20"><animate attributeName="y" calcMode="discrete" values="61;83;105;127" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></rect></g>

<!-- מונה התוכנית -->
<g class="hl-2 hl-3">
  <rect class="body" x="118" y="110" width="46" height="30" rx="4"/>
  <text class="sm" x="141" y="121" style="stroke:none">מונה</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M118 125H100" marker-end="url(#cpu-a)"/>
</g>
<g class="only-1 from-4"><g class="hl-2 hl-3"><text x="141" y="135" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">0</text></g></g>
<g class="only-2 only-3"><text x="141" y="135" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">0<animate attributeName="opacity" calcMode="discrete" values="1;0;0;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text x="141" y="135" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">1<animate attributeName="opacity" calcMode="discrete" values="0;1;0;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text x="141" y="135" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">2<animate attributeName="opacity" calcMode="discrete" values="0;0;1;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text x="141" y="135" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">3<animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text></g>

<!-- מפענח -->
<g class="hl-2 hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M96 71H114" marker-end="url(#cpu-a)"/>
  <rect class="body" x="118" y="58" width="74" height="26" rx="4"/>
  <text class="sm" x="172" y="74" style="stroke:none">מפענח</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M153 58V84"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M165 84V96H190V103" marker-end="url(#cpu-a)"/>
</g>
<g class="only-1 from-4"><g class="hl-2 hl-3"><text class="sm" x="136" y="74" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">LOAD</text></g></g>
<g class="only-2 only-3"><text class="sm" x="136" y="74" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">LOAD<animate attributeName="opacity" calcMode="discrete" values="1;0;0;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text class="sm" x="136" y="74" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">ADD<animate attributeName="opacity" calcMode="discrete" values="0;1;0;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text class="sm" x="136" y="74" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">CMP<animate attributeName="opacity" calcMode="discrete" values="0;0;1;0" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text><text class="sm" x="136" y="74" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">JMP<animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes="0;.25;.5;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text></g>

<!-- יחידת החישוב -->
<g class="hl-2 hl-3">
  <path class="body" d="M178 106H200L206 115L212 106H234L223 142H189z"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M214 142V156H267V140" marker-end="url(#cpu-a)"/>
</g>
<g class="only-1 only-2 from-4"><g class="hl-2 hl-3"><text class="sm" x="206" y="134" style="stroke:none">חישוב</text></g></g>

<!-- אוגר: המספר שבעבודה -->
<g class="hl-3">
  <rect class="body" x="246" y="106" width="46" height="30" rx="4"/>
  <text class="sm" x="269" y="117" style="stroke:none">אוגר</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M256 106V98H223V103" marker-end="url(#cpu-a)"/>
</g>
<g class="only-1 from-4"><g class="hl-3"><text x="269" y="131" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">8</text></g></g>
<g class="only-2"><g class="hl-3"><text x="269" y="131" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">8</text></g></g>
<g class="only-3">
  <text class="lg" x="269" y="132" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">5<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.15;.4" dur="8s" begin="-2s" repeatCount="indefinite"/></text>
  <text class="lg" x="269" y="132" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">8<animate attributeName="opacity" calcMode="discrete" values="1;0;1" keyTimes="0;.15;.4" dur="8s" begin="-2s" repeatCount="indefinite"/></text>
</g>
<!-- דגל ההשוואה, ומשם קפיצה אל המונה -->
<g class="hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M196 142V162H154" marker-end="url(#cpu-a)"/>
  <circle class="body" cx="141" cy="162" r="9"/>
  <text x="141" y="166" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;">=</text>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M141 153V144" marker-end="url(#cpu-a)"/>
</g>

<!-- שעון וקו השעון -->
<g class="hl-1">
  <path class="thin st-elec" style="stroke-width:1.8" stroke-dasharray="3 3" d="M266 84V93H135V84M141 93V110M278 93V106"/>
  <rect class="body" x="240" y="58" width="52" height="26" rx="4"/>
  <g class="only-2 only-3 from-4" clip-path="url(#cpu-c)"><path class="wire st-elec" style="stroke-width:2" d="M234 77h6v-12h6v12h6v-12h6v12h6v-12h6v12h6v-12h6v12h6v-12h6v12h6"/></g>
</g>

<!-- השכבות שמעל: אפליקציה, קוד, פקודות פשוטות -->
<g class="from-4">
  <rect class="body" x="244" y="8" width="64" height="20" rx="10"/><text x="276" y="22" style="stroke:none">אפליקציה</text>
  <rect class="body" x="140" y="8" width="80" height="20" rx="10"/><text x="180" y="22" style="stroke:none">שפת תכנות</text>
  <rect class="body" x="12" y="8" width="104" height="20" rx="10"/><text x="64" y="22" style="stroke:none">פקודות פשוטות</text>
  <path class="arrow st-violet dash" d="M242 18H226" marker-end="url(#cpu-b)"/>
  <path class="arrow st-violet dash" d="M138 18H122" marker-end="url(#cpu-b)"/>
  <path class="arrow st-violet dash" d="M53 29V43" marker-end="url(#cpu-b)"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <g clip-path="url(#cpu-c)"><path class="wire st-elec" style="stroke-width:2.5" d="M222 77h6v-12h6v12h6v-12h6v12h6v-12h6v12h6v-12h6v12h6v-12h6v12h6v-12h6v12h6"><animateTransform attributeName="transform" type="translate" values="0 0;12 0" dur=".8s" repeatCount="indefinite"/></path></g>
  <g class="fl-none st-elec blink" stroke-width="3">
    <rect x="118" y="110" width="46" height="30" rx="4"/><rect x="118" y="58" width="74" height="26" rx="4"/><rect x="246" y="106" width="46" height="30" rx="4"/><rect x="10" y="48" width="86" height="130" rx="5"/>
  </g>
  <rect class="fl-elec st-ink" stroke-width="1" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.1s" repeatCount="indefinite" path="M266 84V93H135V84"/></rect><rect class="fl-elec st-ink" stroke-width="1" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.1s" repeatCount="indefinite" path="M266 84V93H141V110"/></rect><rect class="fl-elec st-ink" stroke-width="1" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.1s" repeatCount="indefinite" path="M266 84V93H278V106"/></rect>
  <text x="160" y="30">מיליארדי פעימות בשנייה</text>
  <text x="160" y="202">השעון פועם, וכל החלקים צועדים יחד</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="fl-elec st-ink" stroke-width="1" r="4" opacity="0"><animateMotion dur="2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.3;1" path="M96 71H118"/><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3" dur="2s" repeatCount="indefinite"/></circle>
  <rect class="fl-none st-elec" stroke-width="3.5" x="118" y="58" width="74" height="26" rx="4" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;0.3;0.6" dur="2s" repeatCount="indefinite"/></rect>
  <path class="fl-none st-elec" stroke-width="3.5" stroke-linejoin="round" d="M178 106H200L206 115L212 106H234L223 142H189z" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;0.6;0.97" dur="2s" repeatCount="indefinite"/></path>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.5" opacity="0"><animateMotion dur="2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.3;.6;1" path="M165 84V96H190V104"/><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;0.3;0.6" dur="2s" repeatCount="indefinite"/></circle>
  <rect class="fl-none st-elec" stroke-width="3" x="118" y="110" width="46" height="30" rx="4" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;0.85;0.99" dur="2s" repeatCount="indefinite"/></rect>
  <text x="107" y="42">1</text><text x="160" y="42">2</text><text x="206" y="42">3</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M107 46V64M160 46V56M206 46V104"/>
  <text x="160" y="202">1 מביא · 2 מפענח · 3 מבצע · וחוזר חלילה</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text class="sm" x="206" y="134" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">5+3<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.3;.5" dur="8s" begin="-2s" repeatCount="indefinite"/></text>
  <text class="sm" x="206" y="134" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;font-weight:700" opacity="0">8=8<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.55;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></text>
  <path class="fl-none st-elec" stroke-width="3" stroke-linejoin="round" d="M178 106H200L206 115L212 106H234L223 142H189z" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;1;0" keyTimes="0;.3;.5;.55;.75" dur="8s" begin="-2s" repeatCount="indefinite"/></path>
  <rect class="fl-none st-elec" stroke-width="3" x="246" y="106" width="46" height="30" rx="4" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;1;0" keyTimes="0;.15;.25;.4;.5" dur="8s" begin="-2s" repeatCount="indefinite"/></rect>
  <circle class="fl-green st-ink" stroke-width="2" cx="141" cy="162" r="9" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1" keyTimes="0;.65" dur="8s" begin="-2s" repeatCount="indefinite"/></circle>
  <text x="141" y="166" style="stroke:none;direction:ltr;font-family:ui-monospace,Menlo,Consolas,monospace;" opacity="0">=<animate attributeName="opacity" calcMode="discrete" values="0;1" keyTimes="0;.65" dur="8s" begin="-2s" repeatCount="indefinite"/></text>
  <circle class="fl-green st-ink" stroke-width="1" r="3.5" opacity="0"><animateMotion dur="8s" begin="-2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1" keyTimes="0;.85;1" path="M141 153V142"/><animate attributeName="opacity" calcMode="discrete" values="0;1" keyTimes="0;.85" dur="8s" begin="-2s" repeatCount="indefinite"/></circle>
  <text x="160" y="30">פעולות זעירות, מהר מאוד</text>
  <text x="160" y="202">טען 5 · חבר 3 · השווה ל־8 · קפוץ להתחלה</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="160" y="202">כמה ליבות על שבב אחד, עובדות במקביל</text>
</g>
`;
