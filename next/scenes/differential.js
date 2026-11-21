// דיפרנציאל (מבט מלמעלה, פנייה שמאלה): 1 הגלגל החיצוני עובר דרך ארוכה · 2 גל ההנעה מסובב את גלגל השיניים הגדול והתושבת, הכל כגוש אחד · 3 בפנייה הלוויינים מסתובבים, הפנימי מאט והחיצוני מאיץ · 4 גלגל על קרח מסתובב מהר והשני עומד
export default `
<defs>
  <clipPath id="differential-c1"><rect x="21" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c2"><rect x="277" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c3"><rect x="43" y="159" width="99" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c4"><rect x="182" y="159" width="95" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c5"><polygon points="142,154 150,150 150,174 142,170"/></clipPath>
  <clipPath id="differential-c6"><polygon points="182,154 174,150 174,174 182,170"/></clipPath>
  <clipPath id="differential-c7"><polygon points="118,116 128,122 128,202 118,208"/></clipPath>
  <clipPath id="differential-c8"><polygon points="131,104 143,104 146,120 128,120"/></clipPath>
  <clipPath id="differential-c9"><rect x="21" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c10"><rect x="277" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c11"><rect x="43" y="159" width="99" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c12"><rect x="182" y="159" width="95" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c13"><polygon points="142,154 150,150 150,174 142,170"/></clipPath>
  <clipPath id="differential-c14"><polygon points="182,154 174,150 174,174 182,170"/></clipPath>
  <clipPath id="differential-c15"><polygon points="118,116 128,122 128,202 118,208"/></clipPath>
  <clipPath id="differential-c16"><polygon points="131,104 143,104 146,120 128,120"/></clipPath>
  <clipPath id="differential-c17"><rect x="21" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c18"><rect x="277" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c19"><rect x="43" y="159" width="99" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c20"><rect x="182" y="159" width="95" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c21"><polygon points="142,154 150,150 150,174 142,170"/></clipPath>
  <clipPath id="differential-c22"><polygon points="182,154 174,150 174,174 182,170"/></clipPath>
  <clipPath id="differential-c23"><polygon points="118,116 128,122 128,202 118,208"/></clipPath>
  <clipPath id="differential-c24"><polygon points="131,104 143,104 146,120 128,120"/></clipPath>
  <clipPath id="differential-c25"><rect x="21" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c26"><rect x="277" y="138" width="22" height="48" rx="4"/></clipPath>
  <clipPath id="differential-c27"><rect x="43" y="159" width="99" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c28"><rect x="182" y="159" width="95" height="6" rx="0"/></clipPath>
  <clipPath id="differential-c29"><polygon points="142,154 150,150 150,174 142,170"/></clipPath>
  <clipPath id="differential-c30"><polygon points="182,154 174,150 174,174 182,170"/></clipPath>
  <clipPath id="differential-c31"><polygon points="118,116 128,122 128,202 118,208"/></clipPath>
  <clipPath id="differential-c32"><polygon points="131,104 143,104 146,120 128,120"/></clipPath>
  <marker id="differential-ar" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 1L9 5L0 9Z" fill="var(--s-violet)"/></marker>
</defs>
<!-- מסלולי הגלגלים בפנייה שמאלה -->
<g class="hl-1 hl-3">
  <path class="wire st-line" style="stroke-width:1.5" stroke-dasharray="4 5" d="M30.8 138A232 232 0 0 0 0.1 44.6"/>
  <path class="wire st-line" style="stroke-width:1.5" stroke-dasharray="4 5" d="M287.4 138A488 488 0 0 0 264.4 12"/>
  <path class="wire st-cold" style="stroke-width:3" d="M30.8 138A232 232 0 0 0 13.7 71.6"/>
  <path class="wire st-hot" style="stroke-width:3" d="M287.4 138A488 488 0 0 0 259.1 -3.5"/>
</g>
<g class="only-1 only-3">
  <circle class="fl-cold st-ink" stroke-width="1" r="4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M30.8 138A232 232 0 0 0 13.7 71.6"/></circle>
  <circle class="fl-hot st-ink" stroke-width="1" r="4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M287.4 138A488 488 0 0 0 259.1 -3.5"/></circle>
</g>
<g class="only-1">
  <text x="74" y="104">דרך קצרה</text>
  <text x="226" y="54">דרך ארוכה</text>
</g>

<!-- קרח מתחת לגלגל השמאלי -->
<g class="only-4">
  <ellipse class="fl-cold-soft st-cold" stroke-width="1.2" cx="32" cy="162" rx="22" ry="40"><animate attributeName="opacity" values=".55;1;.55" dur="1.4s" repeatCount="indefinite"/></ellipse>
</g>

<!-- גל ההנעה מתיבת ההילוכים -->
<g class="hl-2 hl-4">
  <rect class="fl-line st-ink" stroke-width="1.2" x="133" y="8" width="6" height="98"/>
  <path class="flow" d="M136 12V100"/>
</g>

<!-- צירי הגלגלים (רקע סטטי) -->
<rect class="fl-line st-ink" stroke-width="1.2" x="43" y="159" width="99" height="6"/>
<rect class="fl-line st-ink" stroke-width="1.2" x="182" y="159" width="95" height="6"/>
<!-- גלגלים (רקע סטטי) -->
<rect class="fl-dark st-ink" stroke-width="2" x="21" y="138" width="22" height="48" rx="4"/>
<rect class="fl-dark st-ink" stroke-width="2" x="277" y="138" width="22" height="48" rx="4"/>
<path fill="none" stroke="var(--s-line)" stroke-width="3" d="M21 150H43M21 162H43M21 174H43M277 150H299M277 162H299M277 174H299"/>

<!-- בית הדיפרנציאל -->
<rect class="fl-soft st-line" stroke-width="1.5" x="110" y="98" width="96" height="118" rx="14"/>
<!-- התושבת -->
<g class="hl-2 hl-3 hl-4">
  <rect class="body" x="128" y="128" width="68" height="68" rx="6"/>
  <polygon class="fl-warm st-ink" stroke-width="1.5" points="118,116 128,122 128,202 118,208"/>
  <polygon class="fl-warm st-ink" stroke-width="1.5" points="131,104 143,104 146,120 128,120"/>
  <rect class="fl-line st-ink" stroke-width="1" x="160" y="132" width="4" height="60"/>
</g>
<!-- גלגלי הצד (מחוברים לצירי הגלגלים) והלוויינים -->
<g class="hl-2 hl-3 hl-4">
  <polygon class="fl-cold st-ink" stroke-width="1.5" points="142,154 150,150 150,174 142,170"/>
  <polygon class="fl-cold st-ink" stroke-width="1.5" points="182,154 174,150 174,174 182,170"/>
</g>
<g class="hl-2 hl-3 hl-4">
  <polygon class="fl-green st-ink" stroke-width="1.5" points="154,142 170,142 174,150 150,150"/>
  <polygon class="fl-green st-ink" stroke-width="1.5" points="154,182 170,182 174,174 150,174"/>
</g>

<g class="only-1">
  <g clip-path="url(#differential-c1)"><rect class="fl-dark" x="21" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.714s" repeatCount="indefinite"/><rect class="fl-line" x="21" y="130" width="22" height="3"/><rect class="fl-line" x="21" y="138" width="22" height="3"/><rect class="fl-line" x="21" y="146" width="22" height="3"/><rect class="fl-line" x="21" y="154" width="22" height="3"/><rect class="fl-line" x="21" y="162" width="22" height="3"/><rect class="fl-line" x="21" y="170" width="22" height="3"/><rect class="fl-line" x="21" y="178" width="22" height="3"/><rect class="fl-line" x="21" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c2)"><rect class="fl-dark" x="277" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.385s" repeatCount="indefinite"/><rect class="fl-line" x="277" y="130" width="22" height="3"/><rect class="fl-line" x="277" y="138" width="22" height="3"/><rect class="fl-line" x="277" y="146" width="22" height="3"/><rect class="fl-line" x="277" y="154" width="22" height="3"/><rect class="fl-line" x="277" y="162" width="22" height="3"/><rect class="fl-line" x="277" y="170" width="22" height="3"/><rect class="fl-line" x="277" y="178" width="22" height="3"/><rect class="fl-line" x="277" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c3)"><rect class="fl-line" x="43" y="159" width="99" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.714s" repeatCount="indefinite"/><rect class="fl-ink" x="43" y="153" width="99" height="2"/><rect class="fl-ink" x="43" y="159" width="99" height="2"/><rect class="fl-ink" x="43" y="165" width="99" height="2"/></g></g>
  <g clip-path="url(#differential-c4)"><rect class="fl-line" x="182" y="159" width="95" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.385s" repeatCount="indefinite"/><rect class="fl-ink" x="182" y="153" width="95" height="2"/><rect class="fl-ink" x="182" y="159" width="95" height="2"/><rect class="fl-ink" x="182" y="165" width="95" height="2"/></g></g>
  <g clip-path="url(#differential-c5)"><polygon class="fl-cold" points="142,154 150,150 150,174 142,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.714s" repeatCount="indefinite"/><rect class="fl-ink" x="142" y="146" width="8" height="1.5"/><rect class="fl-ink" x="142" y="150" width="8" height="1.5"/><rect class="fl-ink" x="142" y="154" width="8" height="1.5"/><rect class="fl-ink" x="142" y="158" width="8" height="1.5"/><rect class="fl-ink" x="142" y="162" width="8" height="1.5"/><rect class="fl-ink" x="142" y="166" width="8" height="1.5"/><rect class="fl-ink" x="142" y="170" width="8" height="1.5"/><rect class="fl-ink" x="142" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c6)"><polygon class="fl-cold" points="182,154 174,150 174,174 182,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.385s" repeatCount="indefinite"/><rect class="fl-ink" x="174" y="146" width="8" height="1.5"/><rect class="fl-ink" x="174" y="150" width="8" height="1.5"/><rect class="fl-ink" x="174" y="154" width="8" height="1.5"/><rect class="fl-ink" x="174" y="158" width="8" height="1.5"/><rect class="fl-ink" x="174" y="162" width="8" height="1.5"/><rect class="fl-ink" x="174" y="166" width="8" height="1.5"/><rect class="fl-ink" x="174" y="170" width="8" height="1.5"/><rect class="fl-ink" x="174" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c7)"><polygon class="fl-warm" points="118,116 128,122 128,202 118,208"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -5" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="118" y="111" width="10" height="1.5"/><rect class="fl-ink" x="118" y="116" width="10" height="1.5"/><rect class="fl-ink" x="118" y="121" width="10" height="1.5"/><rect class="fl-ink" x="118" y="126" width="10" height="1.5"/><rect class="fl-ink" x="118" y="131" width="10" height="1.5"/><rect class="fl-ink" x="118" y="136" width="10" height="1.5"/><rect class="fl-ink" x="118" y="141" width="10" height="1.5"/><rect class="fl-ink" x="118" y="146" width="10" height="1.5"/><rect class="fl-ink" x="118" y="151" width="10" height="1.5"/><rect class="fl-ink" x="118" y="156" width="10" height="1.5"/><rect class="fl-ink" x="118" y="161" width="10" height="1.5"/><rect class="fl-ink" x="118" y="166" width="10" height="1.5"/><rect class="fl-ink" x="118" y="171" width="10" height="1.5"/><rect class="fl-ink" x="118" y="176" width="10" height="1.5"/><rect class="fl-ink" x="118" y="181" width="10" height="1.5"/><rect class="fl-ink" x="118" y="186" width="10" height="1.5"/><rect class="fl-ink" x="118" y="191" width="10" height="1.5"/><rect class="fl-ink" x="118" y="196" width="10" height="1.5"/><rect class="fl-ink" x="118" y="201" width="10" height="1.5"/><rect class="fl-ink" x="118" y="206" width="10" height="1.5"/><rect class="fl-ink" x="118" y="211" width="10" height="1.5"/></g></g>
  <g clip-path="url(#differential-c8)"><polygon class="fl-warm" points="131,104 143,104 146,120 128,120"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="4 0" dur="0.167s" repeatCount="indefinite"/><rect class="fl-ink" x="124" y="104" width="1.5" height="16"/><rect class="fl-ink" x="128" y="104" width="1.5" height="16"/><rect class="fl-ink" x="132" y="104" width="1.5" height="16"/><rect class="fl-ink" x="136" y="104" width="1.5" height="16"/><rect class="fl-ink" x="140" y="104" width="1.5" height="16"/><rect class="fl-ink" x="144" y="104" width="1.5" height="16"/><rect class="fl-ink" x="148" y="104" width="1.5" height="16"/></g></g>
  </g><g class="only-2">
  <g clip-path="url(#differential-c9)"><rect class="fl-dark" x="21" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.500s" repeatCount="indefinite"/><rect class="fl-line" x="21" y="130" width="22" height="3"/><rect class="fl-line" x="21" y="138" width="22" height="3"/><rect class="fl-line" x="21" y="146" width="22" height="3"/><rect class="fl-line" x="21" y="154" width="22" height="3"/><rect class="fl-line" x="21" y="162" width="22" height="3"/><rect class="fl-line" x="21" y="170" width="22" height="3"/><rect class="fl-line" x="21" y="178" width="22" height="3"/><rect class="fl-line" x="21" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c10)"><rect class="fl-dark" x="277" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.500s" repeatCount="indefinite"/><rect class="fl-line" x="277" y="130" width="22" height="3"/><rect class="fl-line" x="277" y="138" width="22" height="3"/><rect class="fl-line" x="277" y="146" width="22" height="3"/><rect class="fl-line" x="277" y="154" width="22" height="3"/><rect class="fl-line" x="277" y="162" width="22" height="3"/><rect class="fl-line" x="277" y="170" width="22" height="3"/><rect class="fl-line" x="277" y="178" width="22" height="3"/><rect class="fl-line" x="277" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c11)"><rect class="fl-line" x="43" y="159" width="99" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="43" y="153" width="99" height="2"/><rect class="fl-ink" x="43" y="159" width="99" height="2"/><rect class="fl-ink" x="43" y="165" width="99" height="2"/></g></g>
  <g clip-path="url(#differential-c12)"><rect class="fl-line" x="182" y="159" width="95" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="182" y="153" width="95" height="2"/><rect class="fl-ink" x="182" y="159" width="95" height="2"/><rect class="fl-ink" x="182" y="165" width="95" height="2"/></g></g>
  <g clip-path="url(#differential-c13)"><polygon class="fl-cold" points="142,154 150,150 150,174 142,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="142" y="146" width="8" height="1.5"/><rect class="fl-ink" x="142" y="150" width="8" height="1.5"/><rect class="fl-ink" x="142" y="154" width="8" height="1.5"/><rect class="fl-ink" x="142" y="158" width="8" height="1.5"/><rect class="fl-ink" x="142" y="162" width="8" height="1.5"/><rect class="fl-ink" x="142" y="166" width="8" height="1.5"/><rect class="fl-ink" x="142" y="170" width="8" height="1.5"/><rect class="fl-ink" x="142" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c14)"><polygon class="fl-cold" points="182,154 174,150 174,174 182,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="174" y="146" width="8" height="1.5"/><rect class="fl-ink" x="174" y="150" width="8" height="1.5"/><rect class="fl-ink" x="174" y="154" width="8" height="1.5"/><rect class="fl-ink" x="174" y="158" width="8" height="1.5"/><rect class="fl-ink" x="174" y="162" width="8" height="1.5"/><rect class="fl-ink" x="174" y="166" width="8" height="1.5"/><rect class="fl-ink" x="174" y="170" width="8" height="1.5"/><rect class="fl-ink" x="174" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c15)"><polygon class="fl-warm" points="118,116 128,122 128,202 118,208"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -5" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="118" y="111" width="10" height="1.5"/><rect class="fl-ink" x="118" y="116" width="10" height="1.5"/><rect class="fl-ink" x="118" y="121" width="10" height="1.5"/><rect class="fl-ink" x="118" y="126" width="10" height="1.5"/><rect class="fl-ink" x="118" y="131" width="10" height="1.5"/><rect class="fl-ink" x="118" y="136" width="10" height="1.5"/><rect class="fl-ink" x="118" y="141" width="10" height="1.5"/><rect class="fl-ink" x="118" y="146" width="10" height="1.5"/><rect class="fl-ink" x="118" y="151" width="10" height="1.5"/><rect class="fl-ink" x="118" y="156" width="10" height="1.5"/><rect class="fl-ink" x="118" y="161" width="10" height="1.5"/><rect class="fl-ink" x="118" y="166" width="10" height="1.5"/><rect class="fl-ink" x="118" y="171" width="10" height="1.5"/><rect class="fl-ink" x="118" y="176" width="10" height="1.5"/><rect class="fl-ink" x="118" y="181" width="10" height="1.5"/><rect class="fl-ink" x="118" y="186" width="10" height="1.5"/><rect class="fl-ink" x="118" y="191" width="10" height="1.5"/><rect class="fl-ink" x="118" y="196" width="10" height="1.5"/><rect class="fl-ink" x="118" y="201" width="10" height="1.5"/><rect class="fl-ink" x="118" y="206" width="10" height="1.5"/><rect class="fl-ink" x="118" y="211" width="10" height="1.5"/></g></g>
  <g clip-path="url(#differential-c16)"><polygon class="fl-warm" points="131,104 143,104 146,120 128,120"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="4 0" dur="0.167s" repeatCount="indefinite"/><rect class="fl-ink" x="124" y="104" width="1.5" height="16"/><rect class="fl-ink" x="128" y="104" width="1.5" height="16"/><rect class="fl-ink" x="132" y="104" width="1.5" height="16"/><rect class="fl-ink" x="136" y="104" width="1.5" height="16"/><rect class="fl-ink" x="140" y="104" width="1.5" height="16"/><rect class="fl-ink" x="144" y="104" width="1.5" height="16"/><rect class="fl-ink" x="148" y="104" width="1.5" height="16"/></g></g>
  </g><g class="only-3">
  <g clip-path="url(#differential-c17)"><rect class="fl-dark" x="21" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.714s" repeatCount="indefinite"/><rect class="fl-line" x="21" y="130" width="22" height="3"/><rect class="fl-line" x="21" y="138" width="22" height="3"/><rect class="fl-line" x="21" y="146" width="22" height="3"/><rect class="fl-line" x="21" y="154" width="22" height="3"/><rect class="fl-line" x="21" y="162" width="22" height="3"/><rect class="fl-line" x="21" y="170" width="22" height="3"/><rect class="fl-line" x="21" y="178" width="22" height="3"/><rect class="fl-line" x="21" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c18)"><rect class="fl-dark" x="277" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.385s" repeatCount="indefinite"/><rect class="fl-line" x="277" y="130" width="22" height="3"/><rect class="fl-line" x="277" y="138" width="22" height="3"/><rect class="fl-line" x="277" y="146" width="22" height="3"/><rect class="fl-line" x="277" y="154" width="22" height="3"/><rect class="fl-line" x="277" y="162" width="22" height="3"/><rect class="fl-line" x="277" y="170" width="22" height="3"/><rect class="fl-line" x="277" y="178" width="22" height="3"/><rect class="fl-line" x="277" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c19)"><rect class="fl-line" x="43" y="159" width="99" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.714s" repeatCount="indefinite"/><rect class="fl-ink" x="43" y="153" width="99" height="2"/><rect class="fl-ink" x="43" y="159" width="99" height="2"/><rect class="fl-ink" x="43" y="165" width="99" height="2"/></g></g>
  <g clip-path="url(#differential-c20)"><rect class="fl-line" x="182" y="159" width="95" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.385s" repeatCount="indefinite"/><rect class="fl-ink" x="182" y="153" width="95" height="2"/><rect class="fl-ink" x="182" y="159" width="95" height="2"/><rect class="fl-ink" x="182" y="165" width="95" height="2"/></g></g>
  <g clip-path="url(#differential-c21)"><polygon class="fl-cold" points="142,154 150,150 150,174 142,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.714s" repeatCount="indefinite"/><rect class="fl-ink" x="142" y="146" width="8" height="1.5"/><rect class="fl-ink" x="142" y="150" width="8" height="1.5"/><rect class="fl-ink" x="142" y="154" width="8" height="1.5"/><rect class="fl-ink" x="142" y="158" width="8" height="1.5"/><rect class="fl-ink" x="142" y="162" width="8" height="1.5"/><rect class="fl-ink" x="142" y="166" width="8" height="1.5"/><rect class="fl-ink" x="142" y="170" width="8" height="1.5"/><rect class="fl-ink" x="142" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c22)"><polygon class="fl-cold" points="182,154 174,150 174,174 182,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.385s" repeatCount="indefinite"/><rect class="fl-ink" x="174" y="146" width="8" height="1.5"/><rect class="fl-ink" x="174" y="150" width="8" height="1.5"/><rect class="fl-ink" x="174" y="154" width="8" height="1.5"/><rect class="fl-ink" x="174" y="158" width="8" height="1.5"/><rect class="fl-ink" x="174" y="162" width="8" height="1.5"/><rect class="fl-ink" x="174" y="166" width="8" height="1.5"/><rect class="fl-ink" x="174" y="170" width="8" height="1.5"/><rect class="fl-ink" x="174" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c23)"><polygon class="fl-warm" points="118,116 128,122 128,202 118,208"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -5" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="118" y="111" width="10" height="1.5"/><rect class="fl-ink" x="118" y="116" width="10" height="1.5"/><rect class="fl-ink" x="118" y="121" width="10" height="1.5"/><rect class="fl-ink" x="118" y="126" width="10" height="1.5"/><rect class="fl-ink" x="118" y="131" width="10" height="1.5"/><rect class="fl-ink" x="118" y="136" width="10" height="1.5"/><rect class="fl-ink" x="118" y="141" width="10" height="1.5"/><rect class="fl-ink" x="118" y="146" width="10" height="1.5"/><rect class="fl-ink" x="118" y="151" width="10" height="1.5"/><rect class="fl-ink" x="118" y="156" width="10" height="1.5"/><rect class="fl-ink" x="118" y="161" width="10" height="1.5"/><rect class="fl-ink" x="118" y="166" width="10" height="1.5"/><rect class="fl-ink" x="118" y="171" width="10" height="1.5"/><rect class="fl-ink" x="118" y="176" width="10" height="1.5"/><rect class="fl-ink" x="118" y="181" width="10" height="1.5"/><rect class="fl-ink" x="118" y="186" width="10" height="1.5"/><rect class="fl-ink" x="118" y="191" width="10" height="1.5"/><rect class="fl-ink" x="118" y="196" width="10" height="1.5"/><rect class="fl-ink" x="118" y="201" width="10" height="1.5"/><rect class="fl-ink" x="118" y="206" width="10" height="1.5"/><rect class="fl-ink" x="118" y="211" width="10" height="1.5"/></g></g>
  <g clip-path="url(#differential-c24)"><polygon class="fl-warm" points="131,104 143,104 146,120 128,120"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="4 0" dur="0.167s" repeatCount="indefinite"/><rect class="fl-ink" x="124" y="104" width="1.5" height="16"/><rect class="fl-ink" x="128" y="104" width="1.5" height="16"/><rect class="fl-ink" x="132" y="104" width="1.5" height="16"/><rect class="fl-ink" x="136" y="104" width="1.5" height="16"/><rect class="fl-ink" x="140" y="104" width="1.5" height="16"/><rect class="fl-ink" x="144" y="104" width="1.5" height="16"/><rect class="fl-ink" x="148" y="104" width="1.5" height="16"/></g></g>
  </g><g class="only-4">
  <g clip-path="url(#differential-c25)"><rect class="fl-dark" x="21" y="138" width="22" height="48" rx="4"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -8" dur="0.250s" repeatCount="indefinite"/><rect class="fl-line" x="21" y="130" width="22" height="3"/><rect class="fl-line" x="21" y="138" width="22" height="3"/><rect class="fl-line" x="21" y="146" width="22" height="3"/><rect class="fl-line" x="21" y="154" width="22" height="3"/><rect class="fl-line" x="21" y="162" width="22" height="3"/><rect class="fl-line" x="21" y="170" width="22" height="3"/><rect class="fl-line" x="21" y="178" width="22" height="3"/><rect class="fl-line" x="21" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c26)"><rect class="fl-dark" x="277" y="138" width="22" height="48" rx="4"/><g><rect class="fl-line" x="277" y="130" width="22" height="3"/><rect class="fl-line" x="277" y="138" width="22" height="3"/><rect class="fl-line" x="277" y="146" width="22" height="3"/><rect class="fl-line" x="277" y="154" width="22" height="3"/><rect class="fl-line" x="277" y="162" width="22" height="3"/><rect class="fl-line" x="277" y="170" width="22" height="3"/><rect class="fl-line" x="277" y="178" width="22" height="3"/><rect class="fl-line" x="277" y="186" width="22" height="3"/></g></g>
  <g clip-path="url(#differential-c27)"><rect class="fl-line" x="43" y="159" width="99" height="6" rx="0"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -6" dur="0.250s" repeatCount="indefinite"/><rect class="fl-ink" x="43" y="153" width="99" height="2"/><rect class="fl-ink" x="43" y="159" width="99" height="2"/><rect class="fl-ink" x="43" y="165" width="99" height="2"/></g></g>
  <g clip-path="url(#differential-c28)"><rect class="fl-line" x="182" y="159" width="95" height="6" rx="0"/><g><rect class="fl-ink" x="182" y="153" width="95" height="2"/><rect class="fl-ink" x="182" y="159" width="95" height="2"/><rect class="fl-ink" x="182" y="165" width="95" height="2"/></g></g>
  <g clip-path="url(#differential-c29)"><polygon class="fl-cold" points="142,154 150,150 150,174 142,170"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -4" dur="0.250s" repeatCount="indefinite"/><rect class="fl-ink" x="142" y="146" width="8" height="1.5"/><rect class="fl-ink" x="142" y="150" width="8" height="1.5"/><rect class="fl-ink" x="142" y="154" width="8" height="1.5"/><rect class="fl-ink" x="142" y="158" width="8" height="1.5"/><rect class="fl-ink" x="142" y="162" width="8" height="1.5"/><rect class="fl-ink" x="142" y="166" width="8" height="1.5"/><rect class="fl-ink" x="142" y="170" width="8" height="1.5"/><rect class="fl-ink" x="142" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c30)"><polygon class="fl-cold" points="182,154 174,150 174,174 182,170"/><g><rect class="fl-ink" x="174" y="146" width="8" height="1.5"/><rect class="fl-ink" x="174" y="150" width="8" height="1.5"/><rect class="fl-ink" x="174" y="154" width="8" height="1.5"/><rect class="fl-ink" x="174" y="158" width="8" height="1.5"/><rect class="fl-ink" x="174" y="162" width="8" height="1.5"/><rect class="fl-ink" x="174" y="166" width="8" height="1.5"/><rect class="fl-ink" x="174" y="170" width="8" height="1.5"/><rect class="fl-ink" x="174" y="174" width="8" height="1.5"/></g></g>
  <g clip-path="url(#differential-c31)"><polygon class="fl-warm" points="118,116 128,122 128,202 118,208"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="0 -5" dur="0.500s" repeatCount="indefinite"/><rect class="fl-ink" x="118" y="111" width="10" height="1.5"/><rect class="fl-ink" x="118" y="116" width="10" height="1.5"/><rect class="fl-ink" x="118" y="121" width="10" height="1.5"/><rect class="fl-ink" x="118" y="126" width="10" height="1.5"/><rect class="fl-ink" x="118" y="131" width="10" height="1.5"/><rect class="fl-ink" x="118" y="136" width="10" height="1.5"/><rect class="fl-ink" x="118" y="141" width="10" height="1.5"/><rect class="fl-ink" x="118" y="146" width="10" height="1.5"/><rect class="fl-ink" x="118" y="151" width="10" height="1.5"/><rect class="fl-ink" x="118" y="156" width="10" height="1.5"/><rect class="fl-ink" x="118" y="161" width="10" height="1.5"/><rect class="fl-ink" x="118" y="166" width="10" height="1.5"/><rect class="fl-ink" x="118" y="171" width="10" height="1.5"/><rect class="fl-ink" x="118" y="176" width="10" height="1.5"/><rect class="fl-ink" x="118" y="181" width="10" height="1.5"/><rect class="fl-ink" x="118" y="186" width="10" height="1.5"/><rect class="fl-ink" x="118" y="191" width="10" height="1.5"/><rect class="fl-ink" x="118" y="196" width="10" height="1.5"/><rect class="fl-ink" x="118" y="201" width="10" height="1.5"/><rect class="fl-ink" x="118" y="206" width="10" height="1.5"/><rect class="fl-ink" x="118" y="211" width="10" height="1.5"/></g></g>
  <g clip-path="url(#differential-c32)"><polygon class="fl-warm" points="131,104 143,104 146,120 128,120"/><g><animateTransform attributeName="transform" type="translate" from="0 0" to="4 0" dur="0.167s" repeatCount="indefinite"/><rect class="fl-ink" x="124" y="104" width="1.5" height="16"/><rect class="fl-ink" x="128" y="104" width="1.5" height="16"/><rect class="fl-ink" x="132" y="104" width="1.5" height="16"/><rect class="fl-ink" x="136" y="104" width="1.5" height="16"/><rect class="fl-ink" x="140" y="104" width="1.5" height="16"/><rect class="fl-ink" x="144" y="104" width="1.5" height="16"/><rect class="fl-ink" x="148" y="104" width="1.5" height="16"/></g></g>
  </g>

<!-- קווי מתאר מעל הפסים הנעים -->
<g class="hl-2 hl-3 hl-4">
  <polygon class="fl-none st-ink" stroke-width="1.5" stroke-linejoin="round" points="118,116 128,122 128,202 118,208"/><polygon class="fl-none st-ink" stroke-width="1.5" stroke-linejoin="round" points="131,104 143,104 146,120 128,120"/><polygon class="fl-none st-ink" stroke-width="1.5" stroke-linejoin="round" points="142,154 150,150 150,174 142,170"/><polygon class="fl-none st-ink" stroke-width="1.5" stroke-linejoin="round" points="182,154 174,150 174,174 182,170"/>
  <polygon class="fl-green st-ink" stroke-width="1.5" points="154,142 170,142 174,150 150,150"/>
  <polygon class="fl-green st-ink" stroke-width="1.5" points="154,182 170,182 174,174 150,174"/>
</g>
<rect class="fl-none st-ink" stroke-width="2" x="21" y="138" width="22" height="48" rx="4"/>
<rect class="fl-none st-ink" stroke-width="2" x="277" y="138" width="22" height="48" rx="4"/>
<circle class="fl-elec" cx="137" cy="120" r="2"><animate attributeName="opacity" values=".3;1;.3" dur="1s" repeatCount="indefinite"/></circle>

<!-- הלוויינים מסתובבים על הפין -->
<g class="only-3 only-4">
  <g transform="translate(162 146)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-violet" style="stroke-width:1.8" marker-end="url(#differential-ar)" d="M-11 -6A12.5 12.5 0 0 1 9 -9"/></g></g>
  <g transform="translate(162 178)"><g><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="1.6s" repeatCount="indefinite"/><path class="arrow st-violet" style="stroke-width:1.8" marker-end="url(#differential-ar)" d="M-11 6A12.5 12.5 0 0 0 9 9"/></g></g>
</g>

<!-- תוויות -->
<g class="only-2">
  <text x="78" y="108">גלגל שיניים</text><text x="78" y="121">גדול</text>
  <text x="246" y="128">לוויינים</text>
  <path class="thin" d="M228 132L176 144"/>
  <text x="84" y="24">מתיבת ההילוכים</text>
</g>
<g class="only-3">
  <text x="66" y="206">פנימי: לאט</text>
  <text x="254" y="206">חיצוני: מהר</text>
  <text x="242" y="84">הלוויינים</text><text x="242" y="97">מסתובבים</text>
  <path class="thin" d="M232 102L176 140"/>
</g>
<g class="only-4">
  <text x="58" y="212">קרח: מסתובב מהר</text>
  <text x="256" y="206">אספלט: עומד</text>
  <text x="242" y="84">כוח שווה לשניים</text><text x="242" y="97">וקטן מדי</text>
</g>
`;
