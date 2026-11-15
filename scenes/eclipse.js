// ליקויים (לא בקנה מידה): 1 הירח בין השמש לכדור הארץ וצלו המלא נוגע ברצועה צרה · 2 משולשים דומים מהעין: הירח והשמש באותה זווית, ובתצוגה מהקרקע נשארת ההילה · 3 הירח בצל כדור הארץ ומאדים מאור שהתכופף באטמוספרה · 4 מסלול נטוי: הצל עובר מעל או מתחת
export default `
<defs>
  <clipPath id="eclipse-earth"><circle cx="226" cy="110" r="26"/></clipPath>
  <clipPath id="eclipse-inset"><rect x="98" y="158" width="76" height="54" rx="8"/></clipPath>
</defs>

<!-- השמש (חלקה מחוץ למסגרת) -->
<path class="wire st-warm" style="stroke-width:2.200" d="M50 92l6 -2.500M52 110h6.500M50 128l6 2.500M41 75l5 -4.500M41 145l5 4.500"/>
<circle class="fl-elec st-ink" stroke-width="2" cx="0" cy="110" r="46"/>

<!-- קווי הראייה מהעין אל שולי השמש: שני משולשים דומים -->
<g class="hl-2">
  <path class="wire st-violet" style="stroke-width:1.5" d="M10.6 65.2L200 110L10.6 154.8"/>
</g>

<!-- הצל של כדור הארץ -->
<g class="hl-3 hl-4"><path fill="#000" opacity=".32" d="M228 84.2L320 92.3V127.7L228 135.8z"/><path class="thin" style="stroke-width:1.2;stroke-dasharray:3 3" d="M228 84.2L320 92.3M228 135.8L320 127.7"/></g>

<!-- שלב 4: מסלול נטוי, החצי הרחוק מאחורי כדור הארץ -->
<g class="from-4">
  <path class="thin" style="stroke-dasharray:4 4" d="M64 110H196M256 110H318"/>
  <path class="thin st-ink" style="stroke-width:1.3" d="M163.1 79.3L163.4 81.7L166.2 85.1L171.3 89.5L178.4 94.7L187.4 100.4L197.9 106.6L209.4 112.8L221.6 119L234 124.8L246 130L257.3 134.5L267.4 138.1L275.9 140.5L282.4 141.8L286.9 141.8L288.9 140.7L288.6 138.3L285.8 134.9L280.7 130.5L273.6 125.3L264.6 119.6L254.1 113.4L242.6 107.2L230.4 101L218 95.2L206 90L194.7 85.5L184.6 81.9L176.1 79.5L169.6 78.2L165.1 78.2L163.1 79.3"/>
  <g>
    <g><animateMotion dur="12s" begin="-11.4s" repeatCount="indefinite" calcMode="linear" path="M163.1 79.3L163.4 81.7L166.2 85.1L171.3 89.5L178.4 94.7L187.4 100.4L197.9 106.6L209.4 112.8L221.6 119L234 124.8L246 130L257.3 134.5L267.4 138.1L275.9 140.5L282.4 141.8L286.9 141.8L288.9 140.7L288.6 138.3L285.8 134.9L280.7 130.5L273.6 125.3L264.6 119.6L254.1 113.4L242.6 107.2L230.4 101L218 95.2L206 90L194.7 85.5L184.6 81.9L176.1 79.5L169.6 78.2L165.1 78.2L163.1 79.3"/>
      <path class="thin" style="stroke-dasharray:2 3;stroke-width:1.2" d="M32 0h26"/>
      <path fill="#000" opacity=".5" d="M1 -7.2L32 0L1 7.2z"/>
      <g transform="translate(0 0)"><circle class="fl-line st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g><path fill="#000" opacity=".45" d="M0 -7.4A7.4 7.4 0 0 1 0 7.4z"/>
    </g></g>
</g>

<!-- שלב 1: חצי־צל, מתחת לכדור הארץ -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path fill="#000" opacity=".12" d="M165.7 103L227 82.5V137.5L165.7 117z"/><path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M165.7 103L227 82.5M165.7 117L227 137.5"/></g>
</g>
<g class="only-2"><path fill="#000" opacity=".12" d="M165.7 103L227 82.5V137.5L165.7 117z"/><path class="thin" style="stroke-width:1;stroke-dasharray:2 3" d="M165.7 103L227 82.5M165.7 117L227 137.5"/></g>

<!-- כדור הארץ -->
<circle class="fl-none st-cold" stroke-width="3" opacity=".45" cx="226" cy="110" r="27.5"/>
<circle class="fl-cold st-ink" stroke-width="2" cx="226" cy="110" r="26"/>
<g clip-path="url(#eclipse-earth)">
  <path class="fl-green" d="M213 102c4 -5 10 -3 10 2c0 5 4 7 2 12c-2 4 -8 3 -10 -1c-2 -4 -5 -8 -2 -13zM230 95c5 -2 9 1 9 5c0 4 -5 5 -8 3c-3 -2 -4 -6 -1 -8zM229 118c4 -2 8 1 7 5c-1 3 -6 4 -8 1c-1 -2 -1 -5 1 -6z"/>
  <path fill="#000" opacity=".42" d="M227 84A26 26 0 0 1 227 136z"/>
  <g class="only-1"><g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path fill="#000" opacity=".22" d="M165.7 103L227 82.5V137.5L165.7 117z"/><ellipse fill="#000" opacity=".8" cx="202.2" cy="110" rx="2.400" ry="3.400"/></g></g>
  <g class="only-2"><path fill="#000" opacity=".22" d="M165.7 103L227 82.5V137.5L165.7 117z"/><ellipse fill="#000" opacity=".8" cx="202.2" cy="110" rx="2.400" ry="3.400"/></g>
</g>
<circle class="fl-none st-ink" stroke-width="2" cx="226" cy="110" r="26"/>

<!-- שלב 1: הירח עובר בין השמש לכדור הארץ, והצל המלא נוגע בנקודה צרה -->
<g class="only-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 -8;0 8" dur="8s" begin="-3.2s" repeatCount="indefinite"/>
    <path fill="#000" opacity=".55" d="M169.7 102.8L200 110L169.7 117.2z"/>
    <g transform="translate(168 110)"><circle class="fl-line st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g><path fill="#000" opacity=".45" transform="translate(168 110)" d="M0 -7.4A7.4 7.4 0 0 1 0 7.4z"/>
  </g>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M168 130v10M164.5 136l3.500 4.500l3.500 -4.500"/>
  <text x="166" y="24">צל הירח נופל על כדור הארץ</text>
  <text x="166" y="40">ליקוי מלא רק ברצועה צרה</text>
</g>
<!-- שלב 2: הירח בדיוק בקו, והעין בקודקוד -->
<g class="only-2">
  <path fill="#000" opacity=".55" d="M169.7 102.8L200 110L169.7 117.2z"/>
  <g transform="translate(168 110)"><circle class="fl-line st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g><path fill="#000" opacity=".45" transform="translate(168 110)" d="M0 -7.4A7.4 7.4 0 0 1 0 7.4z"/>
  <path class="flow slow" style="stroke:var(--s-violet);stroke-opacity:1;stroke-width:2.400;stroke-dasharray:1 11" d="M10.6 65.2L200 110M10.6 154.8L200 110"/>
  <circle class="fl-hot st-ink" stroke-width="1.2" cx="200" cy="110" r="3"/>
  <text x="166" y="24">השמש רחבה פי 400 מהירח</text>
  <text x="166" y="40">אבל גם רחוקה פי 400</text>
  <text x="240" y="180">ולכן הירח מכסה</text>
  <text x="240" y="196">אותה בדיוק</text>
</g>

<!-- תצוגה מהקרקע: הירח מכסה את השמש ונשארת ההילה -->
<g class="hl-2">
  <rect class="fl-dark" x="98" y="158" width="76" height="54" rx="8"/><rect fill="#000" opacity=".4" x="98" y="158" width="76" height="54" rx="8"/>
  <g clip-path="url(#eclipse-inset)">
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.37;.73;.8;1" dur="9s" begin="-3.6s" repeatCount="indefinite"/>
      <circle class="fl-elec" opacity=".16" cx="136" cy="185" r="25"/><circle class="fl-elec" opacity=".22" cx="136" cy="185" r="20.500"/><circle fill="#fff" opacity=".5" cx="136" cy="185" r="16.500"/>
      <path class="wire st-elec" style="stroke-width:1.4" opacity=".7" d="M136 163v-4M136 207v4M112 185h-5M160 185h5M119 168l-3.500 -3.500M153 168l3.500 -3.500M119 202l-3.500 3.500M153 202l3.500 3.500"/>
    </g>
    <circle class="fl-elec" cx="136" cy="185" r="13"/>
    <g><animateTransform attributeName="transform" type="translate" values="40 0;0 0;0 0;-40 0" keyTimes="0;.35;.75;1" dur="9s" begin="-3.6s" repeatCount="indefinite"/>
      <circle class="fl-dark" cx="136" cy="185" r="13.400"/><circle fill="#000" opacity=".5" cx="136" cy="185" r="13.400"/></g>
  </g>
  <rect class="fl-none st-ink" stroke-width="1.5" x="98" y="158" width="76" height="54" rx="8"/>
</g>

<!-- שלב 3: ליקוי לבנה -->
<g class="only-3">
  <path class="wire st-warm" style="stroke-width:1.6" d="M92 75.5L224 82.4"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M224 82.4Q240 83 289 107"/>
  <path class="flow" style="stroke-width:1.4" d="M92 75.5L224 82.4Q240 83 289 107"/>
  <path class="wire st-warm" style="stroke-width:1.6" d="M92 144.5L224 137.6"/>
  <path class="wire st-hot" style="stroke-width:1.6" d="M224 137.6Q240 137 289 113"/>
  <path class="flow" style="stroke-width:1.4" d="M92 144.5L224 137.6Q240 137 289 113"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 -36;0 36" dur="10s" begin="-4s" repeatCount="indefinite"/>
    <g transform="translate(289 110)"><circle class="fl-line st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.12;.35;.65;.88;1" dur="10s" begin="-4s" repeatCount="indefinite"/><g transform="translate(289 110)"><circle class="fl-hot st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g></g>
  </g>
  <text x="166" y="24">כדור הארץ מטיל צל על הירח</text>
  <text x="166" y="40">ואור שהתכופף באטמוספרה מאדים אותו</text>
</g>

<!-- שלב 4: החצי הקרוב של המסלול, מעל כדור הארץ -->
<g class="from-4"><path class="thin st-ink" style="stroke-width:1.3" d="M163.1 79.3L163.4 81.7L166.2 85.1L171.3 89.5L178.4 94.7L187.4 100.4L197.9 106.6L209.4 112.8L221.6 119L234 124.8L246 130L257.3 134.5L267.4 138.1L275.9 140.5L282.4 141.8L286.9 141.8L288.9 140.7"/><g opacity="0"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.501;1" dur="12s" begin="-11.4s" repeatCount="indefinite"/>
    <g><animateMotion dur="12s" begin="-11.4s" repeatCount="indefinite" calcMode="linear" path="M163.1 79.3L163.4 81.7L166.2 85.1L171.3 89.5L178.4 94.7L187.4 100.4L197.9 106.6L209.4 112.8L221.6 119L234 124.8L246 130L257.3 134.5L267.4 138.1L275.9 140.5L282.4 141.8L286.9 141.8L288.9 140.7L288.6 138.3L285.8 134.9L280.7 130.5L273.6 125.3L264.6 119.6L254.1 113.4L242.6 107.2L230.4 101L218 95.2L206 90L194.7 85.5L184.6 81.9L176.1 79.5L169.6 78.2L165.1 78.2L163.1 79.3"/>
      <path class="thin" style="stroke-dasharray:2 3;stroke-width:1.2" d="M32 0h26"/>
      <path fill="#000" opacity=".5" d="M1 -7.2L32 0L1 7.2z"/>
      <g transform="translate(0 0)"><circle class="fl-line st-ink" stroke-width="1.6" r="7.4"/><circle class="fl-soft" opacity=".8" cx="-2" cy="-1.500" r="1.400"/><circle class="fl-soft" opacity=".8" cx="1.800" cy="2" r="1.100"/></g><path fill="#000" opacity=".45" d="M0 -7.4A7.4 7.4 0 0 1 0 7.4z"/>
    </g></g></g>
<g class="only-4">
  <path class="thin st-ink" style="stroke-width:1.3" d="M266 110A40 40 0 0 1 262 127.5"/>
  <text x="166" y="24">מסלול הירח נטוי בכ־5°</text>
  <text x="166" y="40">ולרוב הצל מחטיא</text>
  <text class="sm" x="250" y="200">הנטייה מוגזמת באיור</text>
</g>
`;
