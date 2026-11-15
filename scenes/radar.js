// מכ״ם: 1 האנטנה משדרת פולס צר · 2 ההד חוזר, וההשהיה על המסך היא המרחק · 3 האלומה סורקת, והכיוון שלה הוא כיוון המטרה · 4 מטרה מתקרבת מחזירה תדר גבוה יותר (דופלר)
export default `
<defs>
  <clipPath id="radar-wclip"><rect x="16" y="-20" width="178" height="40"/></clipPath>
  <clipPath id="radar-scr"><rect x="122" y="148" width="188" height="64" rx="8"/></clipPath>
  <marker id="radar-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- קרקע ובסיס האנטנה -->
<path class="thin" d="M6 196H112"/>
<path class="fl-soft st-ink" stroke-width="1.5" d="M18 196L28 174H62L72 196Z"/>
<path class="st-ink fl-none" stroke-width="2.5" d="M45 174V152"/>

<!-- האלומה הצרה (מבט כללי ושלבים 1-2) -->
<g class="hl-1 hl-2">
  <path class="fl-cold-soft" opacity=".75" transform="translate(55 139) rotate(-26.35)" d="M4 0L214 -16L214 16Z"/>
</g>

<!-- שלב 3: האלומה סורקת -->
<g class="only-3"><g transform="translate(55 139)">
  <animateTransform attributeName="transform" type="rotate" additive="sum" values="-52;-6;-52" dur="4s" repeatCount="indefinite"/>
  <path class="fl-cold-soft" opacity=".85" d="M4 0L214 -16L214 16Z"/>
  <path class="wire st-cold" style="stroke-width:1.2" stroke-dasharray="3 4" d="M8 0H214"/>
</g></g>

<!-- המטוס -->
<g class="hl-1 hl-2 hl-3 hl-4"><g>
  <g transform="translate(272 41) rotate(-26.35)">
    <g transform="rotate(26.35)">
      <path class="body" d="M-22 1Q-20 -4 -10 -4L14 -4L22 -14L27 -14L25 -3Q27 1 22 3L-12 4Q-20 4 -22 1Z"/>
      <path class="fl-dark" d="M-2 0L8 0L1 9L-5 9Z"/>
      <path class="fl-cold" d="M-17 -1Q-15 -3.500 -11 -3.500L-11 0Z"/>
    </g>
  </g>
</g></g>
<g class="only-4"><path class="arrow st-hot" marker-end="url(#radar-a)" d="M300 54L276 66"/></g>

<!-- האנטנה -->
<g transform="translate(44 144) rotate(-26.35)">
  <path class="body" d="M5 -20Q-17 0 5 20L8 17Q-8 0 8 -17Z"/>
  <path class="st-ink fl-none" stroke-width="1.6" d="M-1 0H11M-1 -6L11 0M-1 6L11 0"/>
  <circle class="fl-ink" cx="11" cy="0" r="2.2"/>
</g>
<circle class="fl-ink" cx="45" cy="152" r="2.5"/>

<!-- שלב 1: פולס יוצא -->
<g class="only-1"><g transform="translate(55 139) rotate(-26.35)">
  <g><animateTransform attributeName="transform" type="translate" values="8 0;206 0" dur="1.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.9;1" dur="1.6s" repeatCount="indefinite"/>
    <path class="wire st-cold" d="M0 -10Q6 0 0 10M-5 -9Q1 0 -5 9M-10 -8Q-4 0 -10 8"/>
  </g>
  <circle class="ring st-cold" cx="0" cy="0" r="16"/>
</g></g>

<!-- שלב 2: פולס יוצא ואחריו הד חלש חוזר -->
<g class="only-2"><g transform="translate(55 139) rotate(-26.35)">
  <g><animateTransform attributeName="transform" type="translate" values="8 0;206 0;206 0" keyTimes="0;.5;1" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.51;1" dur="3.2s" repeatCount="indefinite"/>
    <path class="wire st-cold" d="M0 -10Q6 0 0 10M-5 -9Q1 0 -5 9M-10 -8Q-4 0 -10 8"/>
  </g>
  <g><animateTransform attributeName="transform" type="translate" values="206 0;206 0;8 0" keyTimes="0;.5;1" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.49;.5;1" dur="3.2s" repeatCount="indefinite"/>
    <path class="wire st-warm" style="stroke-width:2" d="M0 -6Q-4 0 0 6M5 -5Q1 0 5 5"/>
  </g>
</g></g>

<!-- שלב 4: גל יוצא ארוך, גל חוזר דחוס -->
<g class="only-4"><g transform="translate(55 139) rotate(-26.35)"><g clip-path="url(#radar-wclip)">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;16 0" dur=".8s" repeatCount="indefinite"/>
    <path class="wire st-cold" style="stroke-width:1.8" d="M0 -9q4 -5 8 0t8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0 8 0"/>
  </g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-11 0" dur=".55s" repeatCount="indefinite"/>
    <path class="wire st-warm" style="stroke-width:1.8" d="M10 9q2.750 -5 5.500 0t5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0 5.500 0"/>
  </g>
</g></g></g>

<!-- המסך -->
<rect class="fl-dark st-ink" stroke-width="2" x="120" y="146" width="192" height="68" rx="9"/>
<g clip-path="url(#radar-scr)">
  <path class="st-line fl-none" stroke-width=".6" opacity=".6" d="M150 148V212M180 148V212M210 148V212M240 148V212M270 148V212M300 148V212M122 180H310"/>
  <!-- תצוגת הד מול זמן -->
  <g class="hl-2">
    <path class="st-green fl-none" stroke-width="1.6" stroke-linejoin="round" d="M126 204H136L138 172L141 204H160l1.500 -2 1.500 2H200l1 -1.500 1 1.500H248L250 186L253 204H274l1 -1.500 1 1.500H306"/>
    <path class="arrow st-elec" style="stroke-width:1.5" marker-start="url(#radar-a)" marker-end="url(#radar-a)" d="M142 166H248"/>
    <circle class="fl-elec" r="2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M126 204H306"/></circle>
    <text x="195" y="160" style="fill:#fff;stroke:var(--s-dark)">השהיה = מרחק</text>
    <text x="160" y="190" class="sm" style="fill:#fff;stroke:var(--s-dark)">שידור</text>
    <text x="268" y="181" class="sm" style="fill:#fff;stroke:var(--s-dark)">הד</text>
  </g>
  <!-- שלב 3: מסך סורק -->
  <g class="only-3">
    <rect class="fl-dark" x="122" y="148" width="188" height="64"/>
    <circle class="st-green fl-none" stroke-width="1.2" cx="262" cy="180" r="29"/>
    <circle class="st-green fl-none" stroke-width=".6" cx="262" cy="180" r="15"/>
    <g><animateTransform attributeName="transform" type="rotate" values="-52 262 180;-6 262 180;-52 262 180" dur="4s" repeatCount="indefinite"/>
      <path class="st-green" stroke-width="2" d="M262 180H291"/></g>
    <g><circle class="fl-elec" cx="282.6" cy="169.8" r="3"><animate attributeName="opacity" values=".3;1;.3" dur="1.3s" repeatCount="indefinite"/></circle></g>
    <text x="180" y="176" style="fill:#fff;stroke:var(--s-dark)">כיוון האנטנה</text>
    <text x="180" y="192" style="fill:#fff;stroke:var(--s-dark)">הוא כיוון ההד</text>
  </g>
  <!-- שלב 4: השוואת תדרים -->
  <g class="only-4">
    <rect class="fl-dark" x="122" y="148" width="188" height="64"/>
    <path class="wire st-cold" style="stroke-width:1.8" d="M130 166q5 -7 10 0t10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0"/>
    <path class="wire st-warm" style="stroke-width:1.8" d="M130 194q3.750 -7 7.500 0t7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0 7.500 0"/>
    <text x="280" y="170" style="fill:#fff;stroke:var(--s-dark)">משודר</text>
    <text x="280" y="198" style="fill:#fff;stroke:var(--s-dark)">חוזר</text>
  </g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="78" y="26">פולס קצר וחזק,</text><text x="78" y="40">ואז הקשבה</text><text x="250" y="110">אלומה צרה</text></g>
<g class="only-2"><text x="78" y="26">חלק זעיר חוזר:</text><text x="78" y="40">ההד</text><text x="250" y="110">הלוך ושוב</text><text x="250" y="124">במהירות האור</text></g>
<g class="only-3"><text x="78" y="26">האלומה סורקת,</text><text x="78" y="40">ההד חוזר רק ממנה</text></g>
<g class="only-4"><text x="78" y="26">מטרה מתקרבת:</text><text x="78" y="40">הגל החוזר דחוס</text><text x="250" y="110">התדר עלה</text><text x="250" y="124">לפי המהירות</text></g>
`;
