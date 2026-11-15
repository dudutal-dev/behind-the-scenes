// מנוע חיפוש: 1 זחלנים עוברים מקישור לקישור ואוספים דפים · 2 אינדקס: לכל מילה רשימת הדפים, והשאילתה נשלפת מיד · 3 קישורים כהצבעות מעלים דף לראש · 4 מקום, שפה ועדכניות מזיזים את הסדר, ושרתים רבים עונים במקביל
export default `
<defs>
  <marker id="search-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-line"/></marker>
  <marker id="search-b" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
</defs>

<!-- הרשת: דפים וקישורים ביניהם -->
<g class="hl-1 hl-3">
  <path class="thin" d="M30.2 63.4L42.0 85.5" marker-end="url(#search-a)"/><path class="thin" d="M77.4 61.2L62.7 85.9" marker-end="url(#search-a)"/><path class="thin" d="M85.4 112.7L72.3 109.3" marker-end="url(#search-a)"/><path class="thin" d="M28.3 146.6L41.8 122.4" marker-end="url(#search-a)"/><path class="thin" d="M77.7 150.6L62.1 122.4" marker-end="url(#search-a)"/><path class="thin" d="M37.0 51.6L69.0 50.5" marker-end="url(#search-a)"/><path class="thin" d="M95.3 103.3L87.1 64.7" marker-end="url(#search-a)"/><path class="thin" d="M35.0 158.8L69.0 161.0" marker-end="url(#search-a)"/>
  <rect class="body" style="stroke-width:1.5" x="16" y="42" width="16" height="20" rx="2"/><rect class="fl-line" x="17.5" y="43.5" width="13" height="5" rx="1"/><path class="thin" style="stroke-width:1.2" d="M19 52h10M19 56h7"/>
  <rect class="body" style="stroke-width:1.5" x="76" y="40" width="16" height="20" rx="2"/><rect class="fl-cold" x="77.5" y="41.5" width="13" height="5" rx="1"/><path class="thin" style="stroke-width:1.2" d="M79 50h10M79 54h7"/>
  <rect class="body" style="stroke-width:1.5" x="90" y="106" width="16" height="20" rx="2"/><rect class="fl-violet" x="91.5" y="107.5" width="13" height="5" rx="1"/><path class="thin" style="stroke-width:1.2" d="M93 116h10M93 120h7"/>
  <rect class="body" style="stroke-width:1.5" x="41" y="90" width="22" height="28" rx="2"/><rect class="fl-warm" x="42.5" y="91.5" width="19" height="6" rx="1"/><path class="thin" style="stroke-width:1.2" d="M44 104h16M44 108h13M44 112h16"/>
  <rect class="body" style="stroke-width:1.5" x="14" y="148" width="16" height="20" rx="2"/><rect class="fl-hot" x="15.5" y="149.5" width="13" height="5" rx="1"/><path class="thin" style="stroke-width:1.2" d="M17 158h10M17 162h7"/>
  <rect class="body" style="stroke-width:1.5" x="76" y="152" width="16" height="20" rx="2"/><rect class="fl-green" x="77.5" y="153.5" width="13" height="5" rx="1"/><path class="thin" style="stroke-width:1.2" d="M79 162h10M79 166h7"/>
</g>

<!-- האינדקס: מילה ולצדה הדפים שהיא מופיעה בהם -->
<g class="hl-1 hl-2 hl-4">
  <path class="thin" d="M112 86H122" marker-end="url(#search-a)"/>
</g>
<g class="hl-2">
  <rect class="body" x="124" y="44" width="84" height="84" rx="4"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M124 65H208M124 86H208M124 107H208M166 44V128"/>
  <text x="187" y="58.5" style="stroke:none">חתול</text><g transform="translate(154 54.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-line" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(141 54.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-violet" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(128 54.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-hot" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g>
  <text x="187" y="79.5" style="stroke:none">פיצה</text><g transform="translate(154 75.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(141 75.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(128 75.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g>
  <text x="187" y="100.5" style="stroke:none">מתכון</text><g transform="translate(154 96.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(141 96.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-hot" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g>
  <text x="187" y="121.5" style="stroke:none">חיפה</text><g transform="translate(154 117.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-line" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><g transform="translate(141 117.5)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g>
  <path class="thin" d="M208 76H214V46H220" marker-end="url(#search-a)"/>
  <path class="thin" d="M208 96H214V102H220" marker-end="url(#search-a)"/>
</g>
<!-- האינדקס שמור על שרתים רבים -->
<g class="hl-4">
  <path class="thin" d="M166 128V136M134 144V136H198V144M155 136V144M177 136V144"/>
  <rect class="body" style="stroke-width:1.5" x="126" y="144" width="16" height="28" rx="2"/><path class="thin st-ink" style="stroke-width:1.2" d="M129 151h10M129 157h10M129 163h10"/><circle class="fl-green blink d1" cx="134" cy="168" r="1.6"/>
  <rect class="body" style="stroke-width:1.5" x="147" y="144" width="16" height="28" rx="2"/><path class="thin st-ink" style="stroke-width:1.2" d="M150 151h10M150 157h10M150 163h10"/><circle class="fl-green blink d2" cx="155" cy="168" r="1.6"/>
  <rect class="body" style="stroke-width:1.5" x="169" y="144" width="16" height="28" rx="2"/><path class="thin st-ink" style="stroke-width:1.2" d="M172 151h10M172 157h10M172 163h10"/><circle class="fl-green blink d3" cx="177" cy="168" r="1.6"/>
  <rect class="body" style="stroke-width:1.5" x="190" y="144" width="16" height="28" rx="2"/><path class="thin st-ink" style="stroke-width:1.2" d="M193 151h10M193 157h10M193 163h10"/><circle class="fl-green blink d4" cx="198" cy="168" r="1.6"/>
</g>

<!-- תיבת החיפוש והתוצאות -->
<g class="hl-2 hl-3 hl-4">
  <rect class="body" x="224" y="34" width="86" height="18" rx="9"/>
  <circle class="fl-none st-ink" stroke-width="1.8" cx="236" cy="42.5" r="4"/><path class="wire st-ink" style="stroke-width:1.8" d="M239 45.5l3.5 3.5"/>
  <text x="278" y="47" style="stroke:none">פיצה</text>
</g>
<g class="thin" stroke-dasharray="3 3"><rect x="224" y="60" width="86" height="24" rx="5"/><rect x="224" y="90" width="86" height="24" rx="5"/><rect x="224" y="120" width="86" height="24" rx="5"/></g>
<g class="only-2">
  <g transform="translate(224 60)"><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/></g><g transform="translate(224 90)"><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/></g><g transform="translate(224 120)"><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/></g>
</g>
<g class="only-3" transform="translate(224 0)">
  <g><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/><animateTransform attributeName="transform" type="translate" values="0 60;0 60;0 90;0 90" keyTimes="0;.3;.55;1" dur="3.6s" repeatCount="indefinite"/></g>
  <g transform="translate(0 120)"><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/></g>
  <g><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/><rect class="fl-none st-warm" stroke-width="2.5" width="86" height="24" rx="5"/><animateTransform attributeName="transform" type="translate" values="0 90;0 90;0 60;0 60" keyTimes="0;.3;.55;1" dur="3.6s" repeatCount="indefinite"/></g>
</g>
<g class="from-4" transform="translate(224 0)">
  <g transform="translate(0 60)"><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/></g>
  <g><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/><animateTransform attributeName="transform" type="translate" values="0 90;0 90;0 120;0 120" keyTimes="0;.3;.55;1" dur="3.6s" repeatCount="indefinite"/></g>
  <g><rect class="body" style="stroke-width:1.5" width="86" height="24" rx="5"/><g transform="translate(74 12)"><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/></g><path class="thin" d="M8 9h52M22 16h38"/><rect class="fl-none st-green" stroke-width="2.5" width="86" height="24" rx="5"/><animateTransform attributeName="transform" type="translate" values="0 120;0 120;0 90;0 90" keyTimes="0;.3;.55;1" dur="3.6s" repeatCount="indefinite"/></g>
</g>
<!-- סימנים אישיים: מקום, שפה, עדכניות -->
<g class="hl-4">
  <path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M240 178c-6-8-8-11-8-14a8 8 0 0 1 16 0c0 3-2 6-8 14z"/><circle class="fl-panel" cx="240" cy="164" r="2.8"/>
  <rect class="body" style="stroke-width:1.5" x="257" y="157" width="20" height="18" rx="4"/><text class="sm" x="267" y="169.5" style="stroke:none;font-weight:700">עב</text>
  <circle class="body" style="stroke-width:1.5" cx="296" cy="166" r="9.5"/><path class="wire st-ink" style="stroke-width:1.8" d="M296 160.5V166l4 2.5"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <g><ellipse class="fl-violet st-ink" stroke-width="1.2" rx="5" ry="4"/><path class="thin st-ink" style="stroke-width:1.2" d="M-4 -3l-3-3M0 -4v-4M4 -3l3-3M-4 3l-3 3M0 4v4M4 3l3 3"/><circle fill="#fff" cx="-1.8" cy="-.5" r="1"/><circle fill="#fff" cx="1.8" cy="-.5" r="1"/><animateMotion dur="3.6s" repeatCount="indefinite" path="M24 52L84 50L52 104L52 104"/></g>
  <g><ellipse class="fl-violet st-ink" stroke-width="1.2" rx="5" ry="4"/><path class="thin st-ink" style="stroke-width:1.2" d="M-4 -3l-3-3M0 -4v-4M4 -3l3-3M-4 3l-3 3M0 4v4M4 3l3 3"/><circle fill="#fff" cx="-1.8" cy="-.5" r="1"/><circle fill="#fff" cx="1.8" cy="-.5" r="1"/><animateMotion dur="3.6s" begin="-1.5s" repeatCount="indefinite" path="M22 158L84 162L52 104L52 104"/></g>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.4s" repeatCount="indefinite" path="M84 50Q110 60 124 84"/></g>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M52 104Q90 80 124 86"/></g>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M84 162Q116 130 124 90"/></g>
  <text x="60" y="20">זחלנים אוספים דפים</text>
  <text x="160" y="204">עוברים מקישור לקישור, בלי הפסקה</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <rect class="fl-elec" opacity=".35" x="125" y="66" width="82" height="19"/>
  <rect class="fl-none st-elec pulse" stroke-width="2.5" x="124" y="65" width="84" height="21" rx="2"/>
  <circle class="fl-elec st-ink" stroke-width="1" r="3.5"><animateMotion dur="2.2s" repeatCount="indefinite" path="M224 43H216V75H208"/></circle>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-cold" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.2s" begin="-0.4s" repeatCount="indefinite" path="M154 75.5H214V72H298"/></g>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-warm" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.2s" begin="-0.9s" repeatCount="indefinite" path="M141 75.5H214V102H298"/></g>
  <g><rect class="fl-panel st-ink" stroke-width="1" x="-4.5" y="-5.5" width="9" height="11" rx="1.5"/><rect class="fl-green" x="-3.5" y="-4.5" width="7" height="3.5" rx=".8"/><animateMotion dur="2.2s" begin="-1.4s" repeatCount="indefinite" path="M128 75.5H214V132H298"/></g>
  <text x="166" y="24">לכל מילה: הדפים שלה</text>
  <text x="160" y="204">החיפוש רק מציץ באינדקס מוכן</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <path class="wire st-warm dash" style="stroke-width:1.8" d="M30.2 63.4L42.0 85.5" marker-end="url(#search-b)"/><path class="wire st-warm dash" style="stroke-width:3.4" d="M77.4 61.2L62.7 85.9" marker-end="url(#search-b)"/><path class="wire st-warm dash" style="stroke-width:1.8" d="M85.4 112.7L72.3 109.3" marker-end="url(#search-b)"/><path class="wire st-warm dash" style="stroke-width:1.8" d="M28.3 146.6L41.8 122.4" marker-end="url(#search-b)"/><path class="wire st-warm dash" style="stroke-width:1.8" d="M77.7 150.6L62.1 122.4" marker-end="url(#search-b)"/>
  <rect class="fl-none st-warm pulse" stroke-width="2.5" x="38" y="87" width="28" height="34" rx="4"/>
  <text x="60" y="20">קישור הוא הצבעה</text>
  <text x="160" y="204">דף שמקשרים אליו הרבה עולה לראש</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <circle class="fl-green" r="2.6"><animateMotion dur="1.5s" begin="0s" repeatCount="indefinite" path="M240 154V132"/></circle><circle class="fl-green" r="2.6"><animateMotion dur="1.5s" begin="-0.5s" repeatCount="indefinite" path="M267 154V132"/></circle><circle class="fl-green" r="2.6"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M296 154V132"/></circle>
  <circle class="fl-elec st-ink" stroke-width="1" r="3"><animateMotion dur="1.2s" begin="0s" repeatCount="indefinite" path="M134 144V136H166V128"/></circle><circle class="fl-elec st-ink" stroke-width="1" r="3"><animateMotion dur="1.2s" begin="-0.3s" repeatCount="indefinite" path="M155 144V136H166V128"/></circle><circle class="fl-elec st-ink" stroke-width="1" r="3"><animateMotion dur="1.2s" begin="-0.6s" repeatCount="indefinite" path="M177 144V136H166V128"/></circle><circle class="fl-elec st-ink" stroke-width="1" r="3"><animateMotion dur="1.2s" begin="-0.8999999999999999s" repeatCount="indefinite" path="M198 144V136H166V128"/></circle>
  <text x="266" y="20">מותאם אליך</text>
  <text x="120" y="204">אלפי מחשבים במקביל, פחות משנייה</text>
</g>
`;
