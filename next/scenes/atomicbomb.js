// פצצת אטום: 1 נייטרון מבקע גרעין כבד · 2 תגובת שרשרת שמכפילה את עצמה · 3 בגוש קטן נייטרונים בורחים, מעל כמות מינימלית השרשרת נמשכת · 4 חום, הדף וקרינה
// איור עקרוני בלבד: אין בו מידות, כמויות או מבנה של נשק.
export default `
<defs>
  <marker id="atomicbomb-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
</defs>
<!-- מפריד בין האזורים -->
<path class="thin" stroke-dasharray="2 4" d="M206 10V212M10 132H200"/>

<!-- תגובת השרשרת -->
<g class="hl-1 hl-2">
  <path class="arrow st-cold" style="stroke-width:1.6" marker-end="url(#atomicbomb-a)" d="M10 72H29"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="37.5" cy="69" r="6.3"/><circle class="fl-warm st-ink" stroke-width=".8" cx="43" cy="75" r="5.6"/>
</g>
<g class="hl-2">
  <path class="wire st-cold" style="stroke-width:1.3" d="M47.2 68.4L84 50"/>
  <path class="wire st-cold" style="stroke-width:1.3" d="M47.2 75.6L84 94"/>
  <path class="wire st-cold" style="stroke-width:1.3" d="M99.7 44L137.3 34.3"/>
  <path class="wire st-cold" style="stroke-width:1.3" d="M99.8 47.7L137.2 56"/>
  <path class="wire st-cold" style="stroke-width:1.3" d="M99.8 96.3L137.2 88"/>
  <path class="wire st-cold" style="stroke-width:1.3" d="M99.7 100L137.3 109.7"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 30.6L186 25"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 33.4L186 39"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 56.6L186 51"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 59.4L186 65"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 84.6L186 79"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 87.4L186 93"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 110.6L186 105"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M153.9 113.4L186 119"/>
  <path class="wire st-cold" style="stroke-width:1.3" marker-end="url(#atomicbomb-a)" d="M47 79L62 116"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="89.5" cy="43" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="95" cy="49" r="4"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="89.5" cy="95" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="95" cy="101" r="4"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="143.5" cy="29" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="149" cy="35" r="4"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="143.5" cy="55" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="149" cy="61" r="4"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="143.5" cy="83" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="149" cy="89" r="4"/>
  <circle class="fl-hot st-ink" stroke-width=".8" cx="143.5" cy="109" r="4.5"/><circle class="fl-warm st-ink" stroke-width=".8" cx="149" cy="115" r="4"/>
</g>
<!-- שלב 1: הביקוע עצמו -->
<g class="only-1">
  <circle class="fl-cold st-ink" stroke-width=".8" r="3"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.3;1" calcMode="linear" path="M8 72H30"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.3;.31;1" dur="3s" repeatCount="indefinite"/></circle>
  <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.3;.31;1" dur="3s" repeatCount="indefinite"/><circle class="fl-warm st-ink" stroke-width="1" cx="40" cy="72" r="9"/><circle class="fl-hot" cx="37" cy="69" r="2"/><circle class="fl-hot" cx="43" cy="74" r="2"/><circle class="fl-hot" cx="38" cy="76" r="2"/></g>
  <g><animate attributeName="opacity" values=".0;.0;1;0;0" keyTimes="0;.3;.34;.6;1" dur="3s" repeatCount="indefinite"/>
    <circle class="fl-elec" cx="40" cy="72" r="16"/></g>
  <circle class="fl-cold st-ink" stroke-width=".8" r="2.6"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.32;1" calcMode="linear" path="M47.2 68.4L84 50"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="2.6"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.32;1" calcMode="linear" path="M47.2 75.6L84 94"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="2.6"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.32;1" calcMode="linear" path="M47 79L62 116"/></circle>
  <text x="104" y="18">נייטרון מפצל גרעין כבד</text>
  <text x="26" y="104" class="sm">שני שברים</text>
  <text x="26" y="115" class="sm">ואנרגיה</text>
</g>
<!-- שלב 2: השרשרת -->
<g class="only-2">
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="0.00s" repeatCount="indefinite" path="M47.2 68.4L84 50"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.24s" repeatCount="indefinite" path="M47.2 75.6L84 94"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.48s" repeatCount="indefinite" path="M99.7 44L137.3 34.3"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.72s" repeatCount="indefinite" path="M99.8 47.7L137.2 56"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.96s" repeatCount="indefinite" path="M99.8 96.3L137.2 88"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="0.00s" repeatCount="indefinite" path="M99.7 100L137.3 109.7"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.24s" repeatCount="indefinite" path="M153.9 30.6L186 25"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.48s" repeatCount="indefinite" path="M153.9 33.4L186 39"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.72s" repeatCount="indefinite" path="M153.9 56.6L186 51"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.96s" repeatCount="indefinite" path="M153.9 59.4L186 65"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="0.00s" repeatCount="indefinite" path="M153.9 84.6L186 79"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.24s" repeatCount="indefinite" path="M153.9 87.4L186 93"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.48s" repeatCount="indefinite" path="M153.9 110.6L186 105"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="1.2s" begin="-0.72s" repeatCount="indefinite" path="M153.9 113.4L186 119"/></circle>
  <g><circle class="fl-elec" cx="92" cy="46" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="0.0s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-elec" cx="92" cy="98" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="-0.3s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-elec" cx="146" cy="32" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="-0.6s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-elec" cx="146" cy="58" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="-0.9s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-elec" cx="146" cy="86" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="-1.2s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-elec" cx="146" cy="112" r="9" opacity="0"><animate attributeName="opacity" values="0;.85;0" dur="1.2s" begin="-1.5s" repeatCount="indefinite"/></circle></g>
  <text x="104" y="18">כל דור מכפיל את הקודם</text>
  <text x="40" y="126" class="sm">1</text><text x="92" y="126" class="sm">2</text><text x="146" y="126" class="sm">4</text><text x="186" y="126" class="sm">8</text>
</g>

<!-- הכמות המינימלית -->
<g class="hl-3">
  <circle class="fl-soft st-ink" stroke-width="2" cx="54" cy="178" r="17"/>
  <circle class="fl-warm" cx="48" cy="173" r="2.200"/><circle class="fl-warm" cx="60" cy="182" r="2.200"/><circle class="fl-warm" cx="53" cy="186" r="2.200"/>
  <circle class="fl-soft st-ink" stroke-width="2" cx="148" cy="182" r="26"/>
  <circle class="fl-warm" cx="132" cy="168" r="2.2"/><circle class="fl-warm" cx="146" cy="162" r="2.2"/><circle class="fl-warm" cx="160" cy="170" r="2.2"/><circle class="fl-warm" cx="138" cy="182" r="2.2"/><circle class="fl-warm" cx="152" cy="180" r="2.2"/><circle class="fl-warm" cx="166" cy="186" r="2.2"/><circle class="fl-warm" cx="130" cy="194" r="2.2"/><circle class="fl-warm" cx="144" cy="198" r="2.2"/><circle class="fl-warm" cx="158" cy="200" r="2.2"/><circle class="fl-warm" cx="150" cy="192" r="2.2"/><circle class="fl-warm" cx="142" cy="172" r="2.2"/>
</g>
<g class="only-3">
  <path class="arrow st-cold" style="stroke-width:1.4" marker-end="url(#atomicbomb-a)" d="M54 178L84 160"/>
  <path class="arrow st-cold" style="stroke-width:1.4" marker-end="url(#atomicbomb-a)" d="M54 178L22 196"/>
  <path class="arrow st-cold" style="stroke-width:1.4" marker-end="url(#atomicbomb-a)" d="M54 178L58 210"/>
  <circle class="fl-cold" r="2.400"><animateMotion dur="1.4s" repeatCount="indefinite" path="M54 178L84 160"/></circle>
  <circle class="fl-cold" r="2.400"><animateMotion dur="1.4s" begin="-.5s" repeatCount="indefinite" path="M54 178L22 196"/></circle>
  <circle class="fl-cold" r="2.400"><animateMotion dur="1.4s" begin="-.9s" repeatCount="indefinite" path="M54 178L58 210"/></circle>
  <path class="wire st-cold" style="stroke-width:1.3" d="M138 182L146 162L160 170L152 180L166 186L158 200"/>
  <circle class="fl-cold" r="2.400"><animateMotion dur="2.4s" repeatCount="indefinite" path="M138 182L146 162L160 170L152 180L166 186L158 200"/></circle>
  <g><circle class="fl-elec" cx="160" cy="170" r="6"><animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/></circle></g>
  <text x="54" y="146" class="sm">גוש קטן:</text><text x="54" y="156" class="sm">נייטרונים בורחים</text>
  <text x="104" y="18">נדרשת כמות מינימלית</text>
  <text x="148" y="142" class="sm">מעל המסה הקריטית:</text><text x="148" y="152" class="sm">השרשרת נמשכת</text>
</g>

<!-- ההשפעות -->
<g class="hl-4">
  <path class="thin" d="M212 204H314"/>
  <path class="fl-line" opacity=".7" d="M256 204Q258 150 256 112H270Q268 150 270 204Z"/>
  <ellipse class="fl-warm" cx="263" cy="96" rx="34" ry="20"/>
  <ellipse class="fl-hot" cx="263" cy="98" rx="22" ry="12"/>
  <ellipse class="fl-elec" cx="263" cy="100" rx="10" ry="6"/>
</g>
<g class="only-4">
  <ellipse class="ring st-ink" cx="263" cy="100" rx="48" ry="48"/><ellipse class="ring st-ink d3" cx="263" cy="100" rx="48" ry="48"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M228 140q-3 4 -6 0t-6 0"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M298 140q3 4 6 0t6 0"/>
  <circle class="fl-violet" r="2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M263 100L222 62"/></circle>
  <circle class="fl-violet" r="2"><animateMotion dur="1.6s" begin="-.6s" repeatCount="indefinite" path="M263 100L306 66"/></circle>
  <circle class="fl-violet" r="2"><animateMotion dur="1.6s" begin="-1.1s" repeatCount="indefinite" path="M263 100L300 170"/></circle>
  <text x="262" y="18">חום, הדף</text><text x="262" y="32">וקרינה</text>
  <text x="232" y="164" class="sm">חום</text><text x="296" y="164" class="sm">חום</text>
  <text x="300" y="188" class="sm">קרינה</text>
</g>
`;
