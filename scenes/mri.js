// MRI: 1 מגנט חזק מיישר את גרעיני המימן · 2 פולס רדיו מטה אותם · 3 הם חוזרים ומשדרים אות · 4 שינוי השדה לאורך הגוף מקודד מקום והמחשב בונה תמונה
export default `
<defs>
  <clipPath id="mri-zoom"><circle cx="258" cy="62" r="33"/></clipPath>
  <clipPath id="mri-scan"><rect x="227" y="119" width="66" height="0"><animate attributeName="height" values="0;42;42" keyTimes="0;.75;1" dur="4s" repeatCount="indefinite"/></rect></clipPath>
  <marker id="mri-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
</defs>

<!-- גוף הסורק בחתך לאורך: חצי עליון וחצי תחתון, והחלל שביניהם -->
<rect class="body" x="30" y="20" width="156" height="38" rx="8"/>
<rect class="body" x="30" y="112" width="156" height="38" rx="8"/>
<path class="thin" d="M30 58V112M186 58V70M186 104V112" stroke-dasharray="2 4"/>

<!-- המגנט הראשי -->
<g class="hl-1">
  <rect class="fl-cold-soft st-cold" stroke-width="1.500" x="38" y="26" width="140" height="14" rx="3"/>
  <rect class="fl-cold-soft st-cold" stroke-width="1.500" x="38" y="130" width="140" height="14" rx="3"/>
  <path class="st-cold fl-none" stroke-width="1" stroke-opacity=".6" d="M44 26v14M51 26v14M58 26v14M65 26v14M72 26v14M79 26v14M86 26v14M93 26v14M100 26v14M107 26v14M114 26v14M121 26v14M128 26v14M135 26v14M142 26v14M149 26v14M156 26v14M163 26v14M170 26v14M177 26v14M44 130v14M51 130v14M58 130v14M65 130v14M72 130v14M79 130v14M86 130v14M93 130v14M100 130v14M107 130v14M114 130v14M121 130v14M128 130v14M135 130v14M142 130v14M149 130v14M156 130v14M163 130v14M170 130v14M177 130v14"/>
  <path class="arrow st-cold" d="M40 66H170" marker-end="url(#mri-a)"/>
</g>
<!-- סלילי הגרדיאנט -->
<g class="hl-4"><rect class="fl-violet" x="38" y="43" width="140" height="4.500" rx="2"/><rect class="fl-violet" x="38" y="122.5" width="140" height="4.500" rx="2"/></g>
<!-- סליל הרדיו -->
<g class="hl-2 hl-3"><rect class="fl-warm" x="38" y="50.5" width="140" height="4.500" rx="2"/><rect class="fl-warm" x="38" y="115" width="140" height="4.500" rx="2"/></g>

<!-- המיטה והנבדק -->
<rect class="fl-dark" x="8" y="98" width="196" height="5" rx="2"/>
<path class="fl-line" d="M10 103h8v47h-8zM194 103h8v47h-8z"/>
<path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M20 98V83q0-2 2.500-2t2.500 2v5H72q1-6 8-6H110q9 0 9 9V98Z"/>
<path class="thin st-ink" style="stroke-width:1.200" d="M80 91H104"/>
<circle class="fl-soft st-ink" stroke-width="2" cx="130" cy="88.500" r="9"/>
<circle class="fl-none st-hot" stroke-width="1.500" cx="130" cy="88.500" r="4"><animate attributeName="opacity" values="1;.35;1" dur="2s" repeatCount="indefinite"/></circle>

<!-- הגדלה: גרעיני מימן ברקמה -->
<path class="thin" d="M134 85.500L232 41M134.500 92.500L238 89"/>
<circle class="fl-panel st-ink" stroke-width="2" cx="258" cy="62" r="34"/>

<!-- המחשב -->
<path class="thin" d="M186 138H222"/>
<path class="body" d="M252 166h16v7h-16z"/>
<rect class="fl-dark" x="242" y="172" width="36" height="4.500" rx="2"/>
<rect class="body" x="222" y="114" width="76" height="52" rx="6"/>
<rect class="fl-dark" x="227" y="119" width="66" height="42" rx="3"/>
<g class="from-4"><g clip-path="url(#mri-scan)">
  <ellipse class="fl-soft" cx="260" cy="140" rx="16" ry="19"/>
  <ellipse class="fl-line" cx="260" cy="140" rx="12.500" ry="15.500"/>
  <path class="fl-none st-dark" stroke-width="1.200" d="M260 125V155M252 131q4 3 0 7q-4 4 1 9M268 131q-4 3 0 7q4 4 -1 9"/>
  <ellipse class="fl-dark" cx="256" cy="140" rx="2" ry="4.500"/><ellipse class="fl-dark" cx="264" cy="140" rx="2" ry="4.500"/>
</g>
  <path class="wire st-green" style="stroke-width:1.500" d="M228 119H292"><animateTransform attributeName="transform" type="translate" values="0 0;0 42;0 42" keyTimes="0;.75;1" dur="4s" repeatCount="indefinite"/></path>
</g>

<!-- שלב 1: מגנט חזק מיישר -->
<g class="only-1">
  <path class="wire st-cold dash" style="stroke-width:1.600" d="M40 73H176M40 79H176"/>
  <g transform="translate(240 46)"><g><animateTransform attributeName="transform" type="rotate" values="140;140;0;0" keyTimes="0;.15;.6;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(274 44)"><g><animateTransform attributeName="transform" type="rotate" values="-70;-70;0;0" keyTimes="0;.15;.6;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(257 63)"><g><animateTransform attributeName="transform" type="rotate" values="65;65;0;0" keyTimes="0;.15;.6;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(240 82)"><g><animateTransform attributeName="transform" type="rotate" values="-150;-150;0;0" keyTimes="0;.15;.6;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(275 80)"><g><animateTransform attributeName="transform" type="rotate" values="100;100;0;0" keyTimes="0;.15;.6;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <text x="108" y="14">מגנט על־מוליך</text>
  <text x="160" y="193">שדה מגנטי חזק מיישר</text>
  <text x="160" y="207">את גרעיני המימן בכיוונו</text>
</g>

<!-- שלב 2: פולס רדיו -->
<g class="only-2">
  <circle class="ring st-warm" cx="131" cy="86" r="30"/><circle class="ring st-warm d3" cx="131" cy="86" r="30"/>
  <g clip-path="url(#mri-zoom)"><path class="wire st-warm dash" style="stroke-width:2" d="M222 63q3 -9 6 0t6 0t6 0t6 0t6 0t6 0t6 0t6 0t6 0t6 0t6 0t6 0"/></g>
  <g transform="translate(240 46)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-90;-74;-106;-74;-90" keyTimes="0;.12;.45;.58;.72;.86;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(274 44)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-90;-74;-106;-74;-90" keyTimes="0;.12;.45;.58;.72;.86;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(257 63)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-90;-74;-106;-74;-90" keyTimes="0;.12;.45;.58;.72;.86;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(240 82)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-90;-74;-106;-74;-90" keyTimes="0;.12;.45;.58;.72;.86;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(275 80)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-90;-74;-106;-74;-90" keyTimes="0;.12;.45;.58;.72;.86;1" dur="3.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <text x="108" y="14">סליל רדיו</text>
  <text x="160" y="193">פולס רדיו בתדר מדויק</text>
  <text x="160" y="207">מטה את הגרעינים הצידה</text>
</g>

<!-- שלב 3: חזרה ופליטת אות -->
<g class="only-3">
  <circle class="ring st-green" cx="131" cy="89" r="28"/><circle class="ring st-green d3" cx="131" cy="89" r="28"/>
  <circle class="ring st-green" cx="258" cy="62" r="46"/><circle class="ring st-green d3" cx="258" cy="62" r="46"/>
  <path class="wire st-green dash" style="stroke-width:2" d="M186 138H222"/>
  <g transform="translate(240 46)"><g><animateTransform attributeName="transform" type="rotate" values="-90;-90;0;0" keyTimes="0;.1;.45;1" dur="3.6s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(274 44)"><g><animateTransform attributeName="transform" type="rotate" values="-90;-90;0;0" keyTimes="0;.1;.85;1" dur="3.6s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(257 63)"><g><animateTransform attributeName="transform" type="rotate" values="-90;-90;0;0" keyTimes="0;.1;.45;1" dur="3.6s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(240 82)"><g><animateTransform attributeName="transform" type="rotate" values="-90;-90;0;0" keyTimes="0;.1;.85;1" dur="3.6s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(275 80)"><g><animateTransform attributeName="transform" type="rotate" values="-90;-90;0;0" keyTimes="0;.1;.45;1" dur="3.6s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <text x="108" y="14">הסליל קולט</text>
  <text x="160" y="193">הגרעינים חוזרים למקומם</text>
  <text x="160" y="207">ומשדרים אות רדיו חלש</text>
</g>

<!-- משלב 4: גרעינים מיושרים, שדה שמשתנה לאורך הגוף -->
<g class="from-4">
  <g transform="translate(240 46)"><g transform="rotate(0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(274 44)"><g transform="rotate(0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(257 63)"><g transform="rotate(0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(240 82)"><g transform="rotate(0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-cold st-ink" stroke-width="1.200" r="4.500"/></g>
  <g transform="translate(275 80)"><g transform="rotate(0)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M-10 0H8"/><path class="fl-ink" d="M7 -3.800L14 0L7 3.800Z"/></g><circle class="fl-hot st-ink" stroke-width="1.200" r="4.500"/></g>
  <path class="fl-violet" fill-opacity=".55" d="M40 110.500H176V104Z"/>
</g>
<g class="only-4">
  <g class="shake"><rect class="fl-violet" x="38" y="43" width="140" height="4.500" rx="2"/><rect class="fl-violet" x="38" y="122.5" width="140" height="4.500" rx="2"/></g>
  <path class="wire st-violet dash" style="stroke-width:1.600" d="M40 76q4.5 -4 9 0t9 0t9 0t9 0"/>
  <path class="wire st-violet dash" style="stroke-width:1.600" d="M86 76q3 -4 6 0t6 0t6 0t6 0t6 0t6 0"/>
  <path class="wire st-violet dash" style="stroke-width:1.600" d="M132 76q1.5 -4 3 0t3 0t3 0t3 0t3 0t3 0t3 0t3 0t3 0t3 0t3 0t3 0"/>
  <path class="wire st-green dash" style="stroke-width:2" d="M186 138H222"/>
  <text x="108" y="14">סלילי גרדיאנט</text>
  <text x="160" y="193">השדה משתנה מעט לאורך הגוף,</text>
  <text x="160" y="207">ותדר האות מגלה מאיפה הגיע</text>
</g>
`;
