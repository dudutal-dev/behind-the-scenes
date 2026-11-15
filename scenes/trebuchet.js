// טרבושה: 1 מנוף עם זרועות לא שוות · 2 הקלע מצליף סביב קצה הזרוע · 3 הלולאה מחליקה מהוו ברגע השחרור · 4 פגיעה חוזרת בחומה
export default `
<defs>
  <marker id="trebuchet-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="trebuchet-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
</defs>

<!-- קרקע וחומה -->
<path class="thin st-ink" d="M6 204H314"/>
<g class="hl-4">
  <path class="body" style="fill:var(--s-soft)" d="M258 204V118H264V110H272V118H280V110H288V118H296V110H304V204Z"/>
  <path class="thin" style="stroke-width:1" d="M258 134H304M258 150H304M258 166H304M258 182H304M270 118V134M290 118V134M280 134V150M268 150V166M292 150V166M280 166V182M270 182V204M290 182V204"/>
</g>

<!-- שלב 1: הדרך של כל קצה בסיבוב -->
<g class="only-1">
  <path class="fl-none st-violet" stroke-width="2" stroke-dasharray="4 4" d="M64 171A72 72 0 1 1 146 54"/>
  <path class="fl-none st-hot" stroke-width="2.5" d="M124 99A22 22 0 1 1 99 135"/>
  <text x="36" y="24">הקצה עובר</text>
  <text x="36" y="38">דרך ארוכה</text>
  <text x="190" y="166">המשקולת יורדת</text>
  <text x="190" y="180">רק מעט</text>
</g>

<!-- שלב 2: מסלול האבן בתוך הקלע -->
<g class="only-2">
  <path class="dash st-violet fl-none" stroke-width="2" d="M103 181Q30 150 44 104Q58 52 126 19"/>
  <text x="196" y="160">הקלע מצליף</text>
  <text x="196" y="174">סביב הקצה</text>
</g>

<!-- מסגרת -->
<path class="body" d="M74 206L106 116H114L146 206H136L110 132L84 206Z"/>
<rect class="body" style="fill:var(--s-soft)" x="64" y="200" width="92" height="6" rx="2"/>

<!-- הקורה, המשקולת והקלע: סיבוב סביב הציר -->
<g>
  <animateTransform attributeName="transform" type="rotate" dur="4s" repeatCount="indefinite" keyTimes="0;.2;.36;.46;.56;.64;.8;1" values="-230 110 116;-230 110 116;-150 110 116;-60 110 116;-10 110 116;-25 110 116;-25 110 116;-230 110 116"/>
  <!-- משקולת הנגד תלויה ונשארת אנכית -->
  <g>
    <animateTransform attributeName="transform" type="rotate" dur="4s" repeatCount="indefinite" keyTimes="0;.2;.36;.46;.56;.64;.8;1" values="230 88 116;230 88 116;150 88 116;60 88 116;10 88 116;25 88 116;25 88 116;230 88 116"/>
    <path class="wire st-ink" style="stroke-width:2" d="M88 116V128"/>
    <rect class="body" style="fill:var(--s-dark)" x="75" y="128" width="26" height="26" rx="3"/>
    <path class="thin" style="stroke-width:1" d="M75 141H101M88 128V154"/>
  </g>
  <path class="body" style="fill:var(--s-warm)" d="M86 112L110 110L184 114V118L110 122L86 120Z"/>
  <path class="wire st-ink" style="stroke-width:2" d="M182 116L189 110"/>
  <!-- הקלע -->
  <g class="hl-2 hl-3">
    <animateTransform attributeName="transform" type="rotate" dur="4s" repeatCount="indefinite" keyTimes="0;.2;.36;.46;.56;.64;.8;1" values="245 182 116;245 182 116;210 182 116;300 182 116;310 182 116;475 182 116;475 182 116;605 182 116"/>
    <path class="wire st-ink" style="stroke-width:1.3" d="M182 116L215 112M182 116L215 120"/>
    <path class="fl-none st-ink" stroke-width="2" d="M214 111Q226 116 214 121"/>
    <circle class="fl-line st-ink" stroke-width="1.5" cx="220" cy="116" r="5.500">
      <animate attributeName="opacity" calcMode="discrete" values="1;0;1" keyTimes="0;.46;.97" dur="4s" repeatCount="indefinite"/>
    </circle>
  </g>
  <circle class="fl-ink" cx="110" cy="116" r="3.500"/>
</g>

<!-- מסלול האבן אל החומה -->
<g class="hl-3 hl-4">
  <path class="fl-none st-line" stroke-width="1.5" stroke-dasharray="3 4" d="M126 19Q180 -10 260 150"/>
  <circle class="fl-line st-ink" stroke-width="1.5" r="5.500">
    <animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.46;.66;1" calcMode="linear" path="M126 19Q180 -10 260 150"/>
    <animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;.46;.66" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle class="fl-none st-hot" stroke-width="2" cx="260" cy="150" r="4">
    <animate attributeName="r" values="4;4;18;18" keyTimes="0;.66;.8;1" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.659;.67;.8;1" dur="4s" repeatCount="indefinite"/>
  </circle>
</g>

<!-- שלב 3: השחרור, וו פתוח בקצה הזרוע -->
<g class="only-3">
  <circle class="ring st-violet" cx="126" cy="19" r="12"/>
  <path class="arrow st-violet" d="M132 15L148 7" marker-end="url(#trebuchet-v)"/>
  <text x="58" y="20">הלולאה מחליקה</text>
  <text x="58" y="34">מהוו והאבן עפה</text>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="200" cy="140" r="28"/>
  <path class="body" style="fill:var(--s-warm)" d="M174 150L204 140L208 148L178 158Z"/>
  <path class="wire st-ink" style="stroke-width:3" d="M205 144L216 126"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 0;12 -20;12 -20" keyTimes="0;.3;.7;1" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;1;0" keyTimes="0;.6;.8;1" dur="2s" repeatCount="indefinite"/>
    <ellipse class="fl-none st-hot" stroke-width="2.200" cx="207" cy="140" rx="5.500" ry="3" transform="rotate(-58 207 140)"/>
    <path class="wire st-hot" style="stroke-width:1.5" d="M203 136L184 124"/>
  </g>
  <text x="200" y="183">וו פתוח בקצה הזרוע</text>
</g>

<!-- שלב 4: אותו כוח בכל ירייה -->
<g class="only-4">
  <text x="196" y="160">אותה נפילה</text>
  <text x="196" y="174">בכל ירייה</text>
  <path class="thin st-hot" style="stroke-width:1.5" d="M262 144l6 -6l4 4l6 -8M262 156l7 5l5 -2l6 6"/>
</g>
`;
