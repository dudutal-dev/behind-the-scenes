// מטוס: למעלה המטוס וארבעת הכוחות, למטה חתך הכנף. 1 דחף המנוע וזרימה · 2 הכנף מטה את האוויר מטה · 3 פעולה ותגובה ולחצים · 4 עילוי, משקל, דחף, גרר
export default `
<defs>
  <marker id="airplane-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-green"/></marker>
  <marker id="airplane-h" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="airplane-c" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <marker id="airplane-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-violet"/></marker>
</defs>

<!-- המטוס (טס שמאלה) -->
<path class="body" d="M192 33L207 12H216L210 33z"/>
<path class="body" d="M96 41Q99 33 114 32H196L218 28L215 40Q204 47 184 47H112Q98 47 96 41z"/>
<path class="fl-cold" d="M101 38L106 34.5H112V38z"/>
<path class="st-cold fl-none" stroke-width="2.5" stroke-dasharray="3 4" d="M118 38H190"/>
<path class="fl-line" d="M200 37H221L217 41H203z"/>
<path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M150 42H176L194 55H172z"/>
<rect class="fl-dark st-ink" stroke-width="1.5" x="146" y="50" width="24" height="9" rx="4.5"/>

<!-- פליטת המנוע -->
<g class="hl-1">
  <circle class="fl-warm" r="2.6"><animateMotion dur=".7s" repeatCount="indefinite" path="M172 55H210"/><animate attributeName="opacity" values="1;0" dur=".7s" repeatCount="indefinite"/></circle>
  <circle class="fl-warm" r="2.6"><animateMotion dur=".7s" begin="-.23s" repeatCount="indefinite" path="M172 53H210"/><animate attributeName="opacity" values="1;0" dur=".7s" begin="-.23s" repeatCount="indefinite"/></circle>
  <circle class="fl-warm" r="2.6"><animateMotion dur=".7s" begin="-.46s" repeatCount="indefinite" path="M172 57H210"/><animate attributeName="opacity" values="1;0" dur=".7s" begin="-.46s" repeatCount="indefinite"/></circle>
</g>

<!-- ארבעת הכוחות: כל זוג מושך בכיוונים מנוגדים באותה עוצמה -->
<g class="hl-1 hl-4"><animateTransform attributeName="transform" type="translate" values="0 0;-3 0;0 0" dur="1.6s" repeatCount="indefinite"/>
  <path class="arrow st-green" stroke-width="3" d="M92 40H62" marker-end="url(#airplane-g)"/></g>
<g class="hl-4">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;3 0;0 0" dur="1.6s" repeatCount="indefinite"/>
    <path class="arrow st-hot" stroke-width="3" d="M222 37H252" marker-end="url(#airplane-h)"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.6s" begin="-.8s" repeatCount="indefinite"/>
    <path class="arrow st-cold" stroke-width="3" d="M134 31V9" marker-end="url(#airplane-c)"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 3;0 0" dur="1.6s" begin="-.8s" repeatCount="indefinite"/>
    <path class="arrow st-violet" stroke-width="3" d="M134 48V70" marker-end="url(#airplane-v)"/></g>
</g>

<!-- אזורי לחץ סביב הכנף -->
<g class="hl-3">
  <ellipse class="fl-cold" opacity=".3" cx="156" cy="124" rx="48" ry="12" transform="rotate(9 156 124)"/>
  <ellipse class="fl-hot" opacity=".3" cx="158" cy="166" rx="46" ry="8" transform="rotate(5 158 166)"/>
</g>

<!-- קווי זרימה: האוויר מגיע אופקי ויוצא מוטה כלפי מטה -->
<g class="hl-1 hl-2 hl-3">
  <path class="thin st-cold" d="M8 104C60 104 90 92 140 90S250 120 312 140"/>
  <path class="thin st-cold" d="M8 130C50 130 76 116 120 112C170 108 236 150 312 172"/>
  <path class="thin st-cold" d="M8 152C50 152 80 166 120 170C170 174 240 178 312 192"/>
  <path class="thin st-cold" d="M8 176C60 176 100 190 150 196S262 204 312 210"/>
  <g class="fl-cold">
    <circle r="2.8"><animateMotion dur="2.2s" repeatCount="indefinite" path="M8 104C60 104 90 92 140 90S250 120 312 140"/></circle>
    <circle r="2.8"><animateMotion dur="2.2s" begin="-.73s" repeatCount="indefinite" path="M8 104C60 104 90 92 140 90S250 120 312 140"/></circle>
    <circle r="2.8"><animateMotion dur="2.2s" begin="-1.46s" repeatCount="indefinite" path="M8 104C60 104 90 92 140 90S250 120 312 140"/></circle>
    <circle r="2.8"><animateMotion dur="2s" begin="-.3s" repeatCount="indefinite" path="M8 130C50 130 76 116 120 112C170 108 236 150 312 172"/></circle>
    <circle r="2.8"><animateMotion dur="2s" begin="-.97s" repeatCount="indefinite" path="M8 130C50 130 76 116 120 112C170 108 236 150 312 172"/></circle>
    <circle r="2.8"><animateMotion dur="2s" begin="-1.63s" repeatCount="indefinite" path="M8 130C50 130 76 116 120 112C170 108 236 150 312 172"/></circle>
    <circle r="2.8"><animateMotion dur="2.7s" begin="-.2s" repeatCount="indefinite" path="M8 152C50 152 80 166 120 170C170 174 240 178 312 192"/></circle>
    <circle r="2.8"><animateMotion dur="2.7s" begin="-1.1s" repeatCount="indefinite" path="M8 152C50 152 80 166 120 170C170 174 240 178 312 192"/></circle>
    <circle r="2.8"><animateMotion dur="2.7s" begin="-2s" repeatCount="indefinite" path="M8 152C50 152 80 166 120 170C170 174 240 178 312 192"/></circle>
    <circle r="2.8"><animateMotion dur="2.5s" begin="-.6s" repeatCount="indefinite" path="M8 176C60 176 100 190 150 196S262 204 312 210"/></circle>
    <circle r="2.8"><animateMotion dur="2.5s" begin="-1.43s" repeatCount="indefinite" path="M8 176C60 176 100 190 150 196S262 204 312 210"/></circle>
    <circle r="2.8"><animateMotion dur="2.5s" begin="-2.26s" repeatCount="indefinite" path="M8 176C60 176 100 190 150 196S262 204 312 210"/></circle>
  </g>
</g>

<!-- חתך הכנף -->
<path class="body" d="M96 146C96 130 132 124 164 130C192 136 214 154 226 166C200 166 160 163 130 160C108 158 96 154 96 146z"/>

<!-- שלב 1 -->
<g class="only-1">
  <text x="52" y="62">דחף קדימה</text>
  <text x="270" y="64">אוויר זורם מהר</text>
  <text x="270" y="79">על הכנף</text>
</g>
<!-- שלב 2: זווית הכנף והסטת האוויר -->
<g class="only-2">
  <path class="thin st-ink" stroke-dasharray="3 3" d="M102 147H176"/>
  <path class="thin st-ink" d="M102 147L220 164.5"/>
  <path class="arrow st-cold" stroke-width="3.5" d="M236 152Q262 158 286 176" marker-end="url(#airplane-c)"/>
  <text x="270" y="64">האוויר נאלץ</text>
  <text x="270" y="79">לפנות מטה</text>
</g>
<!-- שלב 3: פעולה ותגובה -->
<g class="only-3">
  <path class="st-cold fl-none" stroke-width="2.5" stroke-linecap="round" d="M148 119h9"/>
  <path class="st-hot fl-none" stroke-width="2.5" stroke-linecap="round" d="M146 168h9M150.500 163.500v9"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="1.2s" repeatCount="indefinite"/>
    <path class="arrow st-green" stroke-width="4" d="M122 142V102" marker-end="url(#airplane-g)"/></g>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 5;0 0" dur="1.2s" repeatCount="indefinite"/>
    <path class="arrow st-cold" stroke-width="4" d="M270 148V184" marker-end="url(#airplane-c)"/></g>
  <text x="180" y="104.500" style="fill:var(--s-cold)">לחץ נמוך</text>
  <text x="182" y="190" style="fill:var(--s-hot)">לחץ גבוה</text>
  <text x="270" y="64">אוויר למטה,</text>
  <text x="270" y="79">כנף למעלה</text>
</g>
<!-- שלב 4: הכוחות מאוזנים -->
<g class="only-4">
  <text x="110" y="20">עילוי</text>
  <text x="108" y="66">משקל</text>
  <text x="40" y="44">דחף</text>
  <text x="274" y="41">גרר</text>
</g>
`;
