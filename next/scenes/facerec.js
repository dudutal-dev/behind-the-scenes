// זיהוי פנים: 1 איתור פנים בתמונה · 2 נקודות ציון ויישור · 3 רשת הופכת את הפנים לרשימת מספרים · 4 מרחק מהרשימות השמורות מול סף
export default `
<defs>
  <clipPath id="facerec-clip"><rect x="209" y="11" width="102" height="116" rx="5"/></clipPath>
  <clipPath id="facerec-crop"><rect x="151" y="47" width="42" height="42" rx="3"/></clipPath>
  <marker id="facerec-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <g id="facerec-face">
    <ellipse class="body" cx="0" cy="0" rx="23" ry="28"/>
    <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M-23.500 -3Q-27 -31 0 -31Q27 -31 23.500 -3Q17 -17 0 -17Q-17 -17 -23.500 -3z"/>
    <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M-15 -9q5 -3 10 -.5M5 -9.500q5 -2.500 10 .5"/>
    <ellipse class="fl-bg st-ink" stroke-width="1.2" cx="-10" cy="-3" rx="4.6" ry="2.6"/><ellipse class="fl-bg st-ink" stroke-width="1.2" cx="10" cy="-3" rx="4.6" ry="2.6"/>
    <circle class="fl-ink" cx="-10" cy="-3" r="1.7"/><circle class="fl-ink" cx="10" cy="-3" r="1.7"/>
    <path class="st-ink fl-none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" d="M0 -1L-3 10H2.500"/>
    <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M-9 16Q0 22 9 16"/>
  </g>
  <g id="facerec-lm">
    <path class="wire st-elec" style="stroke-width:1.1" d="M-15 -3H-5L-.5 10L5 -3H15M-9 16L-.5 10L9 16L0 26z"/>
    <circle class="fl-elec st-ink" stroke-width=".9" cx="-15" cy="-3" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="-5" cy="-3" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="5" cy="-3" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="15" cy="-3" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="-0.5" cy="10" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="-9" cy="16" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="9" cy="16" r="2.1"/><circle class="fl-elec st-ink" stroke-width=".9" cx="0" cy="26" r="2.1"/>
  </g>
</defs>
<!-- התמונה -->
<g class="hl-1 hl-2">
  <rect class="body" x="208" y="10" width="104" height="118" rx="6"/>
  <g clip-path="url(#facerec-clip)">
    <rect class="fl-cold-soft" x="208" y="10" width="104" height="118"/>
    <rect class="fl-panel st-line" stroke-width="1.5" x="216" y="20" width="20" height="26" rx="1"/><path class="thin" d="M226 20V46M216 33H236"/>
    <path class="thin" d="M208 104H312"/>
    <g transform="rotate(-11 262 70)">
      <path class="fl-violet st-ink" stroke-width="2" stroke-linejoin="round" d="M218 146Q220 110 250 103H274Q304 110 306 146z"/>
      <rect class="body" x="254" y="88" width="16" height="18"/>
      <use href="#facerec-face" transform="translate(262 66)"/>
      <g class="from-2"><use href="#facerec-lm" transform="translate(262 66)"/></g>
    </g>
  </g>
  <rect class="fl-none st-ink" stroke-width="2" x="208" y="10" width="104" height="118" rx="6"/>
  <path class="wire st-green" d="M229 44V30H243M277 30H291V44M291 86V100H277M243 100H229V86"/>
</g>
<!-- הפנים החתוכות והמיושרות -->
<g class="hl-2 hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M206 68H198" marker-end="url(#facerec-a)"/>
  <rect class="body" x="150" y="46" width="44" height="44" rx="4"/>
</g>
<g class="only-1"><g opacity=".26" clip-path="url(#facerec-crop)"><g transform="translate(172 69) scale(.66) rotate(-11)"><use href="#facerec-face"/></g></g></g>
<g class="only-2"><g clip-path="url(#facerec-crop)"><g transform="translate(172 69) scale(.66)"><g>
  <animateTransform attributeName="transform" type="rotate" values="-11;-11;0;0;-11" keyTimes="0;.15;.5;.92;1" dur="3.2s" repeatCount="indefinite"/>
  <use href="#facerec-face"/><use href="#facerec-lm"/></g></g></g>
  <path class="thin st-hot" stroke-dasharray="3 3" d="M153 67H191"/>
</g>
<g class="from-3"><g class="hl-3" clip-path="url(#facerec-crop)"><g transform="translate(172 69) scale(.66)"><use href="#facerec-face"/><use href="#facerec-lm"/></g></g></g>
<g class="hl-2 hl-3"><rect class="fl-none st-ink" stroke-width="2" x="150" y="46" width="44" height="44" rx="4"/></g>
<!-- הרשת -->
<g class="hl-3">
  <path class="arrow st-ink" style="stroke-width:1.8" d="M148 68H140" marker-end="url(#facerec-a)"/>
  <path class="thin" style="stroke-width:.9" d="M100 52L116 44M100 52L116 60M100 52L116 76M100 52L116 92M100 68L116 44M100 68L116 60M100 68L116 76M100 68L116 92M100 84L116 44M100 84L116 60M100 84L116 76M100 84L116 92M116 44L132 52M116 44L132 68M116 44L132 84M116 60L132 52M116 60L132 68M116 60L132 84M116 76L132 52M116 76L132 68M116 76L132 84M116 92L132 52M116 92L132 68M116 92L132 84"/>
  <g class="fl-panel st-ink" stroke-width="1.6"><circle cx="100" cy="52" r="3.800"/><circle cx="100" cy="68" r="3.800"/><circle cx="100" cy="84" r="3.800"/><circle cx="116" cy="44" r="3.800"/><circle cx="116" cy="60" r="3.800"/><circle cx="116" cy="76" r="3.800"/><circle cx="116" cy="92" r="3.800"/><circle cx="132" cy="52" r="3.800"/><circle cx="132" cy="68" r="3.800"/><circle cx="132" cy="84" r="3.800"/></g>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M94 68H86" marker-end="url(#facerec-a)"/>
</g>
<!-- רשימת המספרים -->
<g class="hl-3 hl-4">
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="30" y="20" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="31" style="stroke:none">0.31</text>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="30" y="35" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="46" style="stroke:none">−0.72</text>
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="30" y="50" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="61" style="stroke:none">0.08</text>
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="30" y="65" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="76" style="stroke:none">0.55</text>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="30" y="80" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="91" style="stroke:none">−0.14</text>
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="30" y="95" width="50" height="15"/><text class="sm" direction="ltr" x="55" y="106" style="stroke:none">0.90</text>
  <rect class="fl-none st-ink" stroke-width="2" x="30" y="20" width="50" height="90" rx="2"/>
</g>
<!-- מרחב ההשוואה -->
<g class="hl-4">
  <rect class="body" x="10" y="130" width="160" height="80" rx="8"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M55 112V158" marker-end="url(#facerec-a)"/>
  <circle class="fl-green st-ink" stroke-width="1.5" cx="82" cy="180" r="4.500"/><text class="sm" x="96" y="194" style="stroke:none">דנה</text>
  <circle class="fl-violet st-ink" stroke-width="1.5" cx="140" cy="150" r="4.500"/><text class="sm" x="152" y="165" style="stroke:none">יואב</text>
  <circle class="fl-warm st-ink" stroke-width="1.5" cx="128" cy="194" r="4.500"/><text class="sm" x="150" y="198" style="stroke:none">מאיה</text>
</g>
<g class="from-4"><g class="hl-4">
  <path class="thin" stroke-dasharray="2 4" d="M61 166L135 151M61 170L123 192"/>
  <circle class="fl-none st-green" stroke-width="1.5" stroke-dasharray="3 3" cx="56" cy="168" r="27"/>
  <path class="wire st-green" d="M60 170L78 178"/>
  <circle class="fl-elec st-ink" stroke-width="1.5" cx="56" cy="168" r="5"/>
  <path class="wire st-green" d="M72 199l3.500 3.500l7 -8"/>
</g></g>

<g class="only-1">
  <path class="wire st-green" d="M211 0H309"><animateTransform attributeName="transform" type="translate" values="0 14;0 124;0 14" dur="2.800s" repeatCount="indefinite"/></path>
  <g class="pulse"><path class="wire st-green" style="stroke-width:4" d="M229 44V30H243M277 30H291V44M291 86V100H277M243 100H229V86"/></g>
  <text x="242" y="158">מאתרים פנים בתמונה</text>
  <text x="242" y="174">עדיין לא ידוע של מי</text>
</g>
<g class="only-2">
  <text x="242" y="158">נקודות ציון על הפנים</text>
  <text x="242" y="174">ויישור לפי העיניים</text>
</g>
<g class="only-3">
  <rect class="fl-elec st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.800s" repeatCount="indefinite" path="M150 68H132L116 60L100 68H80"/></rect>
  <rect class="fl-elec st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.800s" begin="-.6s" repeatCount="indefinite" path="M150 68H132L116 76L100 84H80"/></rect>
  <rect class="fl-elec st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.800s" begin="-1.2s" repeatCount="indefinite" path="M150 68H132L116 44L100 52H80"/></rect>
  <rect class="fl-none st-elec" stroke-width="3" x="30" y="20" width="50" height="15" rx="2"><animate attributeName="y" values="20;35;50;65;80;95" calcMode="discrete" dur="1.800s" repeatCount="indefinite"/></rect>
  <text x="242" y="158">הרשת הופכת את הפנים</text>
  <text x="242" y="174">לרשימת מספרים</text>
</g>
<g class="only-4">
  <circle class="ring st-green" cx="56" cy="168" r="27"/>
  <circle class="fl-green" r="2.600"><animateMotion dur="1.200s" repeatCount="indefinite" path="M56 168L82 180"/></circle>
  <text x="242" y="158">מודדים מרחק לכל רשימה</text>
  <text x="242" y="174">קרובה מהסף — התאמה</text>
</g>
`;
