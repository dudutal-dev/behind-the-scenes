// בורג' ח'ליפה: 1 רפסודה על כלונסאות שנאחזים בחיכוך · 2 גרעין משושה ושלוש כנפיים (מבט מלמעלה) · 3 נסיגות בגבהים שונים שוברות את המערבולות · 4 בטון מקורר נשאב בלילה לגובה
export default `
<defs>
  <marker id="burj-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="burj-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
</defs>

<!-- קרקע ומי תהום -->
<rect class="fl-soft" x="0" y="168" width="320" height="52"/>
<path class="wire st-ink" style="stroke-width:2" d="M0 168H320"/>
<path class="wire st-cold" style="stroke-width:1.2" stroke-dasharray="5 4" d="M6 188H24M128 188H168"/>

<!-- שלב 1: רפסודה וכלונסאות -->
<g class="hl-1">
  <g class="fl-line st-ink" stroke-width="1.2">
    <rect x="34" y="178" width="7" height="34"/><rect x="47" y="178" width="7" height="34"/><rect x="60" y="178" width="7" height="34"/>
    <rect x="73" y="178" width="7" height="34"/><rect x="86" y="178" width="7" height="34"/><rect x="99" y="178" width="7" height="34"/><rect x="112" y="178" width="7" height="34"/>
  </g>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="28" y="168" width="96" height="10"/>
</g>
<g class="only-1">
  <path class="flow" d="M37.5 180V210M50.5 180V210M63.5 180V210M76.5 180V210M89.5 180V210M102.5 180V210M115.5 180V210"/>
  <g class="fade"><path class="wire st-green" style="stroke-width:1.5" d="M44 208V196M44 196l-2 3M44 196l2 3M57 204V192M57 192l-2 3M57 192l2 3M70 208V196M70 196l-2 3M70 196l2 3M83 204V192M83 192l-2 3M83 192l2 3M96 208V196M96 196l-2 3M96 196l2 3M109 204V192M109 192l-2 3M109 192l2 3"/></g>
</g>

<!-- המגדל: נסיגות בגבהים שונים בכל צד, גרעין בפנים וצריח פלדה -->
<g class="hl-3">
  <path class="body" d="M53 168V132H57V102H61V74H65V50H69V28H81V38H85V60H89V86H93V116H97V168z"/>
  <path class="thin" style="stroke-width:.8" d="M57 132H97M61 102H97M65 74H93M69 50H89M69 38H85"/>
</g>
<g class="hl-2">
  <path class="wire st-violet" style="stroke-width:1.4" stroke-dasharray="3 3" d="M71 168V30M79 168V30"/>
</g>
<path class="wire st-line" style="stroke-width:2" d="M72 28L75 4L78 28"/>

<!-- שלב 2: מבט מלמעלה: גרעין משושה ושלוש כנפיים -->
<g class="hl-2">
  <g transform="translate(252 98)">
    <g class="body">
      <path d="M-8 -6V-44Q0 -50 8 -44V-6z"/>
      <path transform="rotate(120)" d="M-8 -6V-44Q0 -50 8 -44V-6z"/>
      <path transform="rotate(240)" d="M-8 -6V-44Q0 -50 8 -44V-6z"/>
    </g>
    <path class="fl-violet st-ink" stroke-width="1.5" d="M0 -11L9.5 -5.5V5.5L0 11L-9.5 5.5V-5.5z"/>
    <path class="thin" style="stroke-width:.8" d="M-4 -12V-42M4 -12V-42"/>
    <path class="thin" style="stroke-width:.8" transform="rotate(120)" d="M-4 -12V-42M4 -12V-42"/>
    <path class="thin" style="stroke-width:.8" transform="rotate(240)" d="M-4 -12V-42M4 -12V-42"/>
  </g>
</g>
<g class="only-2">
  <g transform="translate(252 98)">
    <path class="wire st-violet dash" style="stroke-width:1.6" d="M0 -40V-14" marker-end="url(#burj-a)"/>
    <path class="wire st-violet dash" style="stroke-width:1.6" transform="rotate(120)" d="M0 -40V-14" marker-end="url(#burj-a)"/>
    <path class="wire st-violet dash" style="stroke-width:1.6" transform="rotate(240)" d="M0 -40V-14" marker-end="url(#burj-a)"/>
  </g>
</g>

<!-- שלב 3: רוח ומערבולות שאינן מתואמות -->
<g class="only-3">
  <path class="wire st-cold dash" style="stroke-width:1.8" d="M8 62H58" marker-end="url(#burj-c)"/><path class="wire st-cold dash" style="stroke-width:1.8" d="M8 92H54" marker-end="url(#burj-c)"/><path class="wire st-cold dash" style="stroke-width:1.8" d="M8 122H50" marker-end="url(#burj-c)"/>
  <g transform="translate(120 52)"><g class="spin"><path class="wire st-cold" style="stroke-width:1.6" d="M-9 0A9 9 0 1 1 0 9A6 6 0 1 1 -6 0A3 3 0 1 1 0 3"/></g></g>
  <g transform="translate(128 92)"><g class="spin-rev"><path class="wire st-cold" style="stroke-width:1.6" d="M-12 0A12 12 0 1 1 0 12A8 8 0 1 1 -8 0A4 4 0 1 1 0 4"/></g></g>
  <g transform="translate(122 136)"><g class="spin d2"><path class="wire st-cold" style="stroke-width:1.6" d="M-7 0A7 7 0 1 1 0 7A4.5 4.5 0 1 1 -4.5 0A2 2 0 1 1 0 2"/></g></g>
  <g class="fl-hot"><circle cx="61" cy="102" r="2.6"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite"/></circle><circle cx="65" cy="74" r="2.6"><animate attributeName="opacity" values=".2;1;.2" dur="1.2s" repeatCount="indefinite"/></circle><circle cx="57" cy="132" r="2.6"><animate attributeName="opacity" values="1;.2;1" dur="1.7s" repeatCount="indefinite"/></circle></g>
</g>

<!-- שלב 4: משאבה, צינור לגובה, לילה -->
<g class="hl-4">
  <path class="pipe st-dark" style="stroke-width:4" d="M142 160H104V40H86"/>
  <rect class="body" x="142" y="146" width="40" height="18" rx="2"/>
  <path class="fl-warm st-ink" stroke-width="1.2" d="M148 146V138H170V146"/>
  <circle class="fl-dark st-ink" stroke-width="1.2" cx="150" cy="165" r="3.5"/><circle class="fl-dark st-ink" stroke-width="1.2" cx="174" cy="165" r="3.5"/>
</g>
<g class="only-4">
  <g class="fl-line st-ink" stroke-width=".8">
    <circle r="2.2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M142 160H104V40H88"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M142 160H104V40H88"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M142 160H104V40H88"/></circle>
  </g>
  <g class="fl-cold-soft st-cold" stroke-width="1.2"><rect class="bob" x="188" y="150" width="7" height="7" rx="1"/><rect class="bob d2" x="197" y="156" width="7" height="7" rx="1"/></g>
  <path class="fl-elec" d="M302 14A10 10 0 1 0 308 32A8 8 0 1 1 302 14z"><animate attributeName="opacity" values=".7;1;.7" dur="2.6s" repeatCount="indefinite"/></path>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="240" y="186">רפסודה על כלונסאות</text>
  <text x="240" y="202">נאחזים בחיכוך</text>
</g>
<g class="only-2">
  <text x="252" y="20">גרעין משושה</text>
  <text x="252" y="34">ושלוש כנפיים תומכות</text>
</g>
<g class="only-3">
  <text x="240" y="20">נסיגות בגבהים שונים</text>
  <text x="240" y="34">מבלבלות את הרוח</text>
  <text x="24" y="50">רוח</text>
</g>
<g class="only-4">
  <text x="232" y="20">שאיבה ליותר</text>
  <text x="232" y="34">מ־600 מטר, בלילה</text>
  <text x="240" y="186">קרח בתערובת</text>
  <text x="240" y="200">מקרר את הבטון</text>
</g>
`;
