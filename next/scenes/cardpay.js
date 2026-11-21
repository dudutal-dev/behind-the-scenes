// תשלום בכרטיס: 1 השבב מחשב קוד חד־פעמי · 2 טוקן בטלפון, רק הרשת מתרגמת · 3 הבקשה עוברת מסוף, סולק, רשת, מנפיק · 4 האישור חוזר, והכסף עובר אחר כך בסליקה
export default `
<defs>
  <marker id="cardpay-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="cardpay-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
  <marker id="cardpay-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-green"/></marker>
</defs>

<!-- נתיבי הבקשה (למעלה) והתשובה (למטה) -->
<g class="hl-3">
  <path class="wire st-violet" d="M256 114H218M170 114H142M102 114H76" marker-end="url(#cardpay-v)"/>
</g>
<g class="hl-4">
  <path class="wire st-green" d="M76 132H102M142 132H170M218 132H256" marker-end="url(#cardpay-g)"/>
</g>

<!-- המנפיק: בנק -->
<g class="hl-3 hl-4">
  <path class="body" d="M26 104L52 90L78 104z"/>
  <rect class="body" x="28" y="104" width="48" height="40" rx="1"/>
  <path class="st-ink fl-none" stroke-width="3" d="M36 110V138M46 110V138M58 110V138M68 110V138"/>
  <path class="thin st-ink" d="M26 144H78"/>
</g>
<!-- רשת הכרטיסים -->
<g class="hl-2 hl-3 hl-4">
  <circle class="body" cx="122" cy="123" r="19"/>
  <path class="thin" d="M103 123H141M122 104V142M108 111Q122 117 136 111M108 135Q122 129 136 135"/>
  <ellipse class="thin" cx="122" cy="123" rx="8" ry="19"/>
</g>
<!-- הסולק -->
<g class="hl-3 hl-4">
  <rect class="body" x="172" y="102" width="44" height="42" rx="3"/>
  <path class="thin" d="M178 114H210M178 126H210M178 138H210"/>
  <circle class="fl-green" cx="204" cy="108" r="1.8"/><circle class="fl-green" cx="204" cy="120" r="1.8"/><circle class="fl-green" cx="204" cy="132" r="1.8"/>
</g>
<!-- מסוף -->
<g class="hl-1 hl-3 hl-4">
  <path class="body" d="M260 104Q260 98 266 98H298Q304 98 304 104V152Q304 158 298 158H266Q260 158 260 152z"/>
  <rect class="fl-dark" x="266" y="104" width="32" height="18" rx="2"/>
  <g class="fl-line"><circle cx="272" cy="130" r="2.4"/><circle cx="282" cy="130" r="2.4"/><circle cx="292" cy="130" r="2.4"/><circle cx="272" cy="139" r="2.4"/><circle cx="282" cy="139" r="2.4"/><circle cx="292" cy="139" r="2.4"/><circle cx="272" cy="148" r="2.4"/><circle cx="282" cy="148" r="2.4"/><circle cx="292" cy="148" r="2.4"/></g>
</g>
<!-- טלפון עם רכיב מאובטח -->
<g class="hl-1 hl-2">
  <rect class="body" x="266" y="24" width="32" height="56" rx="5"/>
  <rect class="fl-cold-soft" x="270" y="30" width="24" height="40" rx="2"/>
  <rect class="fl-elec st-ink" stroke-width="1" x="276" y="56" width="12" height="10" rx="1.5"/>
  <path class="st-ink fl-none" stroke-width="1" d="M279 59h6M279 61h6M279 63h6"/>
  <path class="st-ink fl-none" stroke-width="1.5" d="M278 75h8"/>
</g>
<!-- שמות -->
<text x="52" y="160">מנפיק</text>
<text x="122" y="160">רשת כרטיסים</text>
<text x="194" y="160">סולק</text>
<text x="282" y="172">מסוף</text>

<!-- שלב 1: קוד חד־פעמי עובר מהשבב למסוף -->
<g class="only-1">
  <g class="st-cold fl-none" stroke-width="1.5" stroke-linecap="round"><g class="fade"><path d="M274 86q8 4 16 0"/></g><g class="fade d2"><path d="M270 91q12 5 24 0"/></g></g>
  <g class="pulse"><rect class="fl-none st-elec" stroke-width="2" x="273" y="53" width="18" height="16" rx="3"/></g>
  <g><animateMotion dur="2.2s" repeatCount="indefinite" path="M250 56C222 66 226 98 244 110"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="2.2s" repeatCount="indefinite"/>
    <rect class="fl-violet" x="-19" y="-7" width="38" height="14" rx="3"/>
    <text x="0" y="3" class="sm" style="fill:#fff;stroke:none">7F3A9C</text>
  </g>
  <text x="150" y="22">השבב מחשב קוד חד־פעמי</text>
  <text x="150" y="36">מהסכום, התאריך</text>
  <text x="150" y="50">ומספר אקראי מהמסוף</text>
  <text x="150" y="70">המפתח לא יוצא מהשבב</text>
</g>

<!-- שלב 2: טוקן בטלפון, תרגום רק ברשת -->
<g class="only-2">
  <rect class="fl-violet" x="271" y="34" width="22" height="14" rx="2"/>
  <path fill="#fff" d="M273 43h4v2h-4zM279 43h4v2h-4zM285 43h6v2h-6z"/>
  <text x="206" y="38">טוקן, לא</text>
  <text x="206" y="52">מספר הכרטיס</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M242 44H264" marker-end="url(#cardpay-a)"/>
  <rect class="body" style="stroke-width:1.5" x="104" y="64" width="36" height="26" rx="3"/>
  <path class="st-ink fl-none" stroke-width="1.6" d="M114 74v-3a8 8 0 0 1 16 0v3"/>
  <rect class="fl-elec st-ink" stroke-width="1.2" x="111" y="73" width="22" height="13" rx="2"/>
  <g class="blink"><circle class="fl-ink" cx="122" cy="79" r="2"/></g>
  <path class="thin" d="M122 90V104"/>
  <text x="122" y="36">רק הרשת יודעת</text>
  <text x="122" y="50">לתרגם את הטוקן</text>
</g>

<!-- שלב 3: הבקשה עוברת בשרשרת -->
<g class="only-3">
  <path class="flow" d="M256 114H76"/>
  <g><animateMotion dur="2.6s" repeatCount="indefinite" path="M276 114H44"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" repeatCount="indefinite"/>
    <rect class="fl-violet st-ink" stroke-width="1" x="-8" y="-6" width="16" height="12" rx="2"/>
    <path fill="#fff" d="M-5 -3h10v1.6h-10zM-5 0.5h7v1.6h-7z"/>
  </g>
  <text x="150" y="40">מסוף ← סולק ← רשת ← מנפיק</text>
  <text x="150" y="58">הבקשה עוברת בשרשרת</text>
  <text x="150" y="190">המנפיק בודק קוד, מסגרת והונאה</text>
</g>

<!-- שלב 4: האישור חוזר, הכסף עובר אחר כך -->
<g class="only-4">
  <path class="flow" d="M76 132H256"/>
  <g><animateMotion dur="2s" repeatCount="indefinite" path="M52 132H282"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2s" repeatCount="indefinite"/>
    <circle class="fl-green st-ink" stroke-width="1" r="7"/>
    <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M-3.5 0l2.5 2.5 4.5-5"/>
  </g>
  <path class="st-green fl-none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M276 113l4 4 8-8"/>
  <text x="150" y="40">״מאושר״ חוזר באותה דרך</text>
  <text x="150" y="58">תוך שנייה או שתיים</text>
</g>
<!-- סליקה: הכסף עובר מאוחר יותר -->
<g class="from-4">
  <path class="wire st-elec" style="stroke-dasharray:4 5" d="M52 182H282"/>
  <path class="st-elec fl-none" stroke-width="2.5" stroke-linecap="round" d="M52 172V182M282 182V178"/>
  <g class="fl-elec st-ink" stroke-width="1">
    <circle r="5"><animateMotion dur="5s" repeatCount="indefinite" path="M52 182H282"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="5s" repeatCount="indefinite"/></circle>
    <circle r="5"><animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite" path="M52 182H282"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="5s" begin="-2.5s" repeatCount="indefinite"/></circle>
  </g>
  <circle class="body" style="stroke-width:1.5" cx="30" cy="196" r="9"/>
  <path class="st-ink fl-none" stroke-width="1.5" stroke-linecap="round" d="M30 190v6l4 3"/>
  <text x="160" y="204">סליקה: הכסף עובר אחר כך</text>
</g>
`;
