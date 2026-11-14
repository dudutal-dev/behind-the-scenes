// גשר מיתרים. 1 עומס על המיסעה · 2 כבלים במתיחה · 3 תורן בלחיצה · 4 איזון ויסודות
export default `
<!-- נהר, קרקעית וגדות -->
<rect class="fl-cold-soft" x="0" y="174" width="320" height="24"/>
<path class="wire st-cold" d="M46 183q5-3 10 0t10 0M92 190q5-3 10 0t10 0M204 184q5-3 10 0t10 0M246 191q5-3 10 0t10 0" style="stroke-width:1.5"/>
<rect class="fl-soft" x="0" y="196" width="320" height="24"/>
<path class="fl-soft" d="M0 147H24L38 196H0zM320 147H296L282 196H320z"/>
<path class="thin" d="M24 147L38 196H282L296 147"/>

<!-- יסודות -->
<g class="hl-3 hl-4">
  <path class="wire st-ink" d="M148 200V215M160 200V217M172 200V215" style="stroke-width:3.5"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="139" y="188" width="42" height="12" rx="2"/>
</g>

<!-- מיסעה -->
<rect class="body" x="-3" y="138" width="326" height="9"/>
<path class="thin" stroke-dasharray="6 6" d="M4 142.500H316"/>

<!-- תורן -->
<g class="hl-3 hl-4">
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M150.500 189L155.500 22H164.500L169.500 189z"/>
  <path class="fl-dark st-ink" stroke-width="1.500" stroke-linejoin="round" d="M154 22L156 15H164L166 22z"/>
  <path class="wire st-hot dash" d="M160 28V184"/>
</g>

<!-- כבלים: מהמיסעה ישר אל התורן -->
<g class="hl-2 hl-4">
  <path class="wire st-cold" d="M36 138L157 30M68 138L157 42M100 138L157 54M132 138L157 66M284 138L163 30M252 138L163 42M220 138L163 54M188 138L163 66" style="stroke-width:2"/>
  <g class="fl-cold">
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="2.400s" repeatCount="indefinite" rotate="auto" path="M36 138L157 30"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="2.400s" begin="-1.200s" repeatCount="indefinite" rotate="auto" path="M36 138L157 30"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.950s" begin="-.500s" repeatCount="indefinite" rotate="auto" path="M68 138L157 42"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.500s" begin="-.900s" repeatCount="indefinite" rotate="auto" path="M100 138L157 54"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.150s" begin="-.300s" repeatCount="indefinite" rotate="auto" path="M132 138L157 66"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="2.400s" repeatCount="indefinite" rotate="auto" path="M284 138L163 30"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="2.400s" begin="-1.200s" repeatCount="indefinite" rotate="auto" path="M284 138L163 30"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.950s" begin="-.500s" repeatCount="indefinite" rotate="auto" path="M252 138L163 42"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.500s" begin="-.900s" repeatCount="indefinite" rotate="auto" path="M220 138L163 54"/></path>
    <path d="M-4-3.200L4 0L-4 3.200z"><animateMotion dur="1.150s" begin="-.300s" repeatCount="indefinite" rotate="auto" path="M188 138L163 66"/></path>
  </g>
</g>
<g class="fl-ink">
  <circle cx="36" cy="138" r="2.200"/><circle cx="68" cy="138" r="2.200"/><circle cx="100" cy="138" r="2.200"/><circle cx="132" cy="138" r="2.200"/>
  <circle cx="284" cy="138" r="2.200"/><circle cx="252" cy="138" r="2.200"/><circle cx="220" cy="138" r="2.200"/><circle cx="188" cy="138" r="2.200"/>
</g>

<!-- כלי רכב נוסעים על המיסעה -->
<g>
  <animateMotion dur="13s" begin="-2.500s" repeatCount="indefinite" path="M-34 0H330"/>
  <path class="fl-hot st-ink" stroke-width="1.200" stroke-linejoin="round" d="M0 136v-5h5l4-5h10l5 5h6v5z"/>
  <path fill="#fff" opacity=".8" d="M10 127.500h4v3.500h-6.500zM15.500 127.500h3l3 3.500h-6z"/>
  <circle class="fl-ink" cx="7" cy="136" r="2.600"/><circle class="fl-ink" cx="23" cy="136" r="2.600"/>
</g>
<g>
  <animateMotion dur="13s" begin="-8.300s" repeatCount="indefinite" path="M-34 0H330"/>
  <rect class="fl-warm st-ink" stroke-width="1.200" x="0" y="122" width="21" height="14" rx="1.500"/>
  <path class="fl-cold st-ink" stroke-width="1.200" stroke-linejoin="round" d="M22 136v-9h6l4 4.500v4.500z"/>
  <circle class="fl-ink" cx="6" cy="136" r="2.600"/><circle class="fl-ink" cx="15" cy="136" r="2.600"/><circle class="fl-ink" cx="27" cy="136" r="2.600"/>
</g>

<!-- שלב 1: העומס מושך את המיסעה מטה -->
<g class="hl-1">
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 5;0 0" dur="1.200s" repeatCount="indefinite"/>
    <path class="arrow st-hot" d="M36 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M68 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M100 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M132 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M188 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M220 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M252 151V165" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M284 151V165" marker-end="url(#bridge-ah)"/>
  </g>
</g>

<g class="only-1">
  <text x="258" y="22">משקל הכביש והרכבים</text>
  <text x="62" y="22">מושך כלפי מטה</text>
</g>
<g class="only-2">
  <text x="258" y="22">כבלי פלדה במתיחה</text>
  <text x="62" y="22">מושכים אל התורן</text>
</g>
<g class="only-3">
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 4;0 0" dur="1s" repeatCount="indefinite"/>
    <path class="arrow st-hot" d="M160 2V11" marker-end="url(#bridge-ah)" style="stroke-width:3"/>
      </g>
  <text x="258" y="22">התורן נלחץ מטה</text>
  <text x="62" y="22">בטון חזק בלחיצה</text>
</g>
<g class="only-4">
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;-4 0;0 0" dur="1.400s" repeatCount="indefinite"/>
    <path class="arrow st-violet" d="M153 11H127" marker-end="url(#bridge-av)" style="stroke-width:3"/>
  </g>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;4 0;0 0" dur="1.400s" repeatCount="indefinite"/>
    <path class="arrow st-violet" d="M167 11H193" marker-end="url(#bridge-av)" style="stroke-width:3"/>
  </g>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 3;0 0" dur="1s" repeatCount="indefinite"/>
    <path class="arrow st-hot" d="M134 203L122 213" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M186 203L198 213" marker-end="url(#bridge-ah)"/><path class="arrow st-hot" d="M160 204V215" marker-end="url(#bridge-ah)"/>
  </g>
  <circle class="ring st-hot" cx="160" cy="196" r="26"/>
  <text x="258" y="22">הצדדים מתאזנים</text>
  <text x="62" y="22">היסוד מעביר לקרקע</text>
</g>
<defs>
  <marker id="bridge-ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.500" markerHeight="4.500" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-hot"/>
  </marker>
  <marker id="bridge-av" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-violet"/>
  </marker>
</defs>
`;
