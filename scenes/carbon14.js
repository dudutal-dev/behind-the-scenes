// פחמן 14: 1 נייטרון מהקרינה הקוסמית הופך חנקן לפחמן 14 · 2 צמחים ובעלי חיים קולטים אותו, ובמוות הקליטה נפסקת · 3 מחצית דועכת כל כ־5,700 שנה · 4 כיול בטבעות עצים
export default `
<defs>
  <marker id="carbon14-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <g id="carbon14-co2"><circle class="fl-dark" r="3"/><circle class="fl-hot" cx="-4.6" r="2.2"/><circle class="fl-hot" cx="4.6" r="2.2"/></g>
</defs>
<!-- אטמוספרה עליונה -->
<rect class="fl-cold-soft" x="0" y="0" width="172" height="52"/>
<path class="thin" style="stroke-width:1" stroke-dasharray="3 4" d="M0 52H172"/>
<!-- קרקע -->
<path class="st-line fl-none" stroke-width="2" d="M6 150H164"/>

<!-- 1 התנגשות -->
<g class="hl-1">
  <path class="arrow st-violet" style="stroke-width:2" d="M12 8L46 26" marker-end="url(#carbon14-a)"/>
  <circle class="fl-cold st-ink" stroke-width="1.4" cx="96" cy="30" r="8"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-green st-ink" stroke-width="1.4" cx="96" cy="30" r="8"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.5;.95;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-ink" r="2.6"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.45;1" path="M50 28L88 30"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.45;.46;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-hot" r="2.4"><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;0;1" keyTimes="0;.5;1" path="M104 26L146 12"/><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.49;.5;1" dur="3s" repeatCount="indefinite"/></circle>
</g>
<g class="only-1"><text class="sm" x="62" y="44">נייטרון</text><text class="sm" x="96" y="64">חנקן 14 ← פחמן 14</text><text class="sm" x="150" y="40">פרוטון</text></g>

<!-- 2 עץ שקולט, ועצם של בעל חיים שמת -->
<g class="hl-2 hl-4">
  <rect class="fl-warm st-ink" stroke-width="1.6" x="42" y="108" width="12" height="42"/>
  <circle class="fl-green st-ink" stroke-width="1.8" cx="48" cy="90" r="28"/>
</g>
<g class="only-2">
  <use href="#carbon14-co2"><animateMotion dur="2.6s" repeatCount="indefinite" path="M128 22Q100 50 62 84"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="2.6s" repeatCount="indefinite"/></use>
  <use href="#carbon14-co2"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path="M150 30Q110 54 70 92"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="2.6s" begin="-1.3s" repeatCount="indefinite"/></use>
  <path class="arrow st-line" style="stroke-width:1.6" stroke-dasharray="3 3" d="M170 58L146 104"/><path class="st-hot fl-none" stroke-width="2.4" stroke-linecap="round" d="M138 106l10 10M148 106l-10 10"/>
</g>
<g class="hl-2 hl-3">
  <path class="fl-panel st-ink" stroke-width="1.6" stroke-linejoin="round" d="M96 140Q90 134 96 130Q102 128 104 134H142Q144 128 150 130Q156 134 150 140Q156 146 150 150Q144 152 142 146H104Q102 152 96 150Q90 146 96 140Z"/>
</g>
<!-- אטומי פחמן 14 בעצם: נעלמים בהדרגה -->
<g class="hl-3">
  <circle class="fl-green" cx="110" cy="140" r="2.2"/>
  <circle class="fl-green" cx="124" cy="138" r="2.2"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.25;.26;1" dur="6s" repeatCount="indefinite"/></circle>
  <circle class="fl-green" cx="136" cy="141" r="2.2"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.51;1" dur="6s" repeatCount="indefinite"/></circle>
  <circle class="fl-green" cx="117" cy="143" r="2.2"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.25;.26;1" dur="6s" begin="-.01s" repeatCount="indefinite"/></circle>
</g>

<!-- 3 גרף דעיכה -->
<g class="hl-3">
  <path class="st-ink fl-none" stroke-width="1.6" d="M184 16V112H310"/>
  <path class="thin st-ink" style="stroke-width:1" stroke-dasharray="2 2" d="M214.5 112V67.0H184"/><circle class="fl-hot" cx="214.5" cy="67.0" r="2.6"/><path class="thin st-ink" style="stroke-width:1" stroke-dasharray="2 2" d="M245.0 112V89.5H184"/><circle class="fl-hot" cx="245.0" cy="89.5" r="2.6"/><path class="thin st-ink" style="stroke-width:1" stroke-dasharray="2 2" d="M275.5 112V100.8H184"/><circle class="fl-hot" cx="275.5" cy="100.8" r="2.6"/>
  <path class="wire st-green" d="M184.0 22.0L185.5 25.1L187.1 28.0L188.6 30.9L190.1 33.7L191.6 36.3L193.2 38.9L194.7 41.4L196.2 43.8L197.7 46.1L199.2 48.4L200.8 50.5L202.3 52.6L203.8 54.6L205.3 56.6L206.9 58.5L208.4 60.3L209.9 62.1L211.4 63.8L213.0 65.4L214.5 67.0L216.0 68.5L217.6 70.0L219.1 71.4L220.6 72.8L222.1 74.2L223.7 75.4L225.2 76.7L226.7 77.9L228.2 79.1L229.8 80.2L231.3 81.3L232.8 82.3L234.3 83.3L235.8 84.3L237.4 85.2L238.9 86.2L240.4 87.0L241.9 87.9L243.5 88.7L245.0 89.5L246.5 90.3L248.1 91.0L249.6 91.7L251.1 92.4L252.6 93.1L254.1 93.7L255.7 94.3L257.2 94.9L258.7 95.5L260.2 96.1L261.8 96.6L263.3 97.2L264.8 97.7L266.4 98.1L267.9 98.6L269.4 99.1L270.9 99.5L272.4 99.9L274.0 100.4L275.5 100.8L277.0 101.1L278.6 101.5L280.1 101.9L281.6 102.2L283.1 102.5L284.6 102.9L286.2 103.2L287.7 103.5L289.2 103.8L290.8 104.0L292.3 104.3L293.8 104.6L295.3 104.8L296.9 105.1L298.4 105.3L299.9 105.5L301.4 105.8L302.9 106.0L304.5 106.2L306.0 106.4"/>
  <text class="sm" x="176" y="26">1</text><text class="sm" x="176" y="70.0">½</text><text class="sm" x="176" y="92.5">¼</text>
  <text class="sm" x="214.5" y="123">5,700</text><text class="sm" x="245.0" y="123">11,400</text><text class="sm" x="275.5" y="123">17,100</text>
</g>
<g class="only-3"><circle class="fl-hot st-ink" stroke-width="1" r="3.6"><animateMotion dur="6s" repeatCount="indefinite" path="M184.0 22.0L185.5 25.1L187.1 28.0L188.6 30.9L190.1 33.7L191.6 36.3L193.2 38.9L194.7 41.4L196.2 43.8L197.7 46.1L199.2 48.4L200.8 50.5L202.3 52.6L203.8 54.6L205.3 56.6L206.9 58.5L208.4 60.3L209.9 62.1L211.4 63.8L213.0 65.4L214.5 67.0L216.0 68.5L217.6 70.0L219.1 71.4L220.6 72.8L222.1 74.2L223.7 75.4L225.2 76.7L226.7 77.9L228.2 79.1L229.8 80.2L231.3 81.3L232.8 82.3L234.3 83.3L235.8 84.3L237.4 85.2L238.9 86.2L240.4 87.0L241.9 87.9L243.5 88.7L245.0 89.5L246.5 90.3L248.1 91.0L249.6 91.7L251.1 92.4L252.6 93.1L254.1 93.7L255.7 94.3L257.2 94.9L258.7 95.5L260.2 96.1L261.8 96.6L263.3 97.2L264.8 97.7L266.4 98.1L267.9 98.6L269.4 99.1L270.9 99.5L272.4 99.9L274.0 100.4L275.5 100.8L277.0 101.1L278.6 101.5L280.1 101.9L281.6 102.2L283.1 102.5L284.6 102.9L286.2 103.2L287.7 103.5L289.2 103.8L290.8 104.0L292.3 104.3L293.8 104.6L295.3 104.8L296.9 105.1L298.4 105.3L299.9 105.5L301.4 105.8L302.9 106.0L304.5 106.2L306.0 106.4"/></circle></g>

<!-- 4 טבעות עצים ועקומת כיול -->
<g class="hl-4">
  <circle class="fl-warm st-ink" stroke-width="1.8" fill-opacity=".35" cx="54" cy="184" r="28"/>
  <circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="5"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="8"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="11"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="14"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="17"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="20"/><circle class="fl-none st-warm" stroke-width="1" cx="54" cy="184" r="23"/>
  <path class="st-ink fl-none" stroke-width="1.4" d="M108 160V204H310"/>
  <path class="wire st-violet" d="M108.0 204.0L113.0 205.8L117.9 203.1L122.8 202.0L127.8 200.1L132.8 195.8L137.7 196.3L142.7 198.1L147.6 196.7L152.6 197.2L157.5 195.9L162.4 190.9L167.4 189.9L172.3 190.3L177.3 189.0L182.2 190.9L187.2 191.1L192.2 186.8L197.1 185.1L202.1 183.8L207.0 181.2L211.9 183.3L216.9 184.7L221.8 182.0L226.8 181.0L231.8 178.9L236.7 174.7L241.7 175.6L246.6 177.1L251.6 175.7L256.5 176.3L261.4 174.7L266.4 169.8L271.4 169.0L276.3 169.3L281.2 168.0L286.2 170.1L291.1 170.0L296.1 165.6L301.1 164.1L306.0 162.7"/>
</g>
<g class="only-4">
  <circle class="fl-hot" r="2.4"><animateMotion dur="3s" repeatCount="indefinite" path="M54 184H82"/></circle>
  <path class="thin st-hot" style="stroke-width:1.4" stroke-dasharray="3 3" d="M108 181.0H226.8V204"/>
  <circle class="fl-hot" cx="226.8" cy="181.0" r="3"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/></circle>
</g>

<!-- תוויות -->
<g class="only-1"><text x="118" y="80">קרינה קוסמית</text><text x="118" y="94">יוצרת פחמן 14</text></g>
<g class="only-2"><text x="112" y="80">נקלט בחיים,</text><text x="112" y="94">ובמוות נפסק</text></g>
<g class="only-3"><text x="118" y="80">מחצית נעלמת</text><text x="118" y="94">כל כ־5,700 שנה</text><text class="sm" x="245" y="136">שנים מהמוות</text></g>
<g class="only-4"><text x="118" y="80">טבעות עצים</text><text x="118" y="94">מתרגמות לשנים</text><text class="sm" x="212" y="216">גיל לפי לוח השנה</text></g>
`;
