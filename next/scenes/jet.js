// מנוע סילון (טורבו־מניפה) בחתך: 1 המניפה ואוויר העוקף · 2 המדחס · 3 תא הבעירה · 4 הטורבינה מסובבת את הציר
export default `
<defs>
  <linearGradient id="jet-core" gradientUnits="userSpaceOnUse" x1="70" y1="0" x2="312" y2="0">
    <stop offset="0" style="stop-color:var(--s-cold-soft)"/><stop offset=".14" style="stop-color:var(--s-cold-soft)"/>
    <stop offset=".3" style="stop-color:var(--s-warm)"/><stop offset=".37" style="stop-color:var(--s-hot)"/>
    <stop offset=".66" style="stop-color:var(--s-hot)"/><stop offset=".8" style="stop-color:var(--s-warm)"/>
    <stop offset="1" style="stop-color:var(--s-warm);stop-opacity:0"/>
  </linearGradient>
  <marker id="jet-c" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
</defs>

<!-- אוויר קר: כונס ותעלת העוקף -->
<path class="fl-cold-soft" d="M24 58L44 59L120 62L170 63.5L208 65L208 175L170 176.5L120 178L44 181L24 182Z"/>
<!-- נתיב הגז בליבה: מתחמם מהמדחס אל תא הבעירה, ופליטה -->
<path fill="url(#jet-core)" d="M70 84L78 86L146 102L154 98L160 86L190 86L194 96L198 100L234 90L264 96L312 101L312 139L264 144L234 150L198 140L194 144L190 154L160 154L154 142L146 138L78 154L70 156Z"/>

<!-- מעטפת המנוע ומעטפת הליבה -->
<path class="body" d="M22 56 Q18 50 30 48 Q70 42 130 48 Q180 54 208 65 Q160 63 120 62 L44 59 Q26 59 22 56 Z"/><path class="body" d="M22 184 Q18 190 30 192 Q70 198 130 192 Q180 186 208 175 Q160 177 120 178 L44 181 Q26 181 22 184 Z"/>
<path class="body" d="M68 81 Q84 75 120 75 L184 76 Q230 80 264 94 L264 96 L234 90 L198 100 L194 96 L190 86 L160 86 L154 98 L146 102 L78 86 Q70 85 68 81 Z"/><path class="body" d="M68 159 Q84 165 120 165 L184 164 Q230 160 264 146 L264 144 L234 150 L198 140 L194 144 L190 154 L160 154 L154 142 L146 138 L78 154 Q70 155 68 159 Z"/>

<!-- תופי המדחס והטורבינה (רקע אטום) -->
<path class="fl-soft" d="M78 108L146 106L146 134L78 132Z"/><path class="fl-soft" d="M198 108L234 107L234 133L198 132Z"/>

<!-- מניפה -->
<g class="hl-1 hl-4">
  <rect class="fl-panel" x="46" y="61" width="11" height="118"/>
  <path class="wire st-ink dash" style="stroke-width:11;stroke-linecap:butt;stroke-dasharray:1.5 4.5" d="M51.5 179V61"/>
  <path class="thin st-ink" style="stroke-width:2;stroke-linecap:butt" d="M46 61V179M57 61V179M46 61h11M46 179h11"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="46" y="106" width="12" height="28"/>
  <path class="body" d="M26 120Q34 109 46 106V134Q34 131 26 120Z"/>
</g>

<!-- מדחס: שורות להבים מסתובבות (מקווקו נע) ושורות קבועות ביניהן -->
<g class="hl-2 hl-4">
  <path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M90 150.7V89.3"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M102 147.9V92.1"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M114 145V95"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M126 142.2V97.8"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M138 139.4V100.6"/>
  <path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M84 151.1V88.9"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M96 148.3V91.7"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M108 145.4V94.6"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M120 142.6V97.4"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M132 139.8V100.2"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M143 137.2V102.8"/>
  <path class="body fl-soft" d="M78 108L146 106L146 134L78 132Z"/>
</g>

<!-- תא בעירה -->
<rect class="fl-soft st-ink" stroke-width="1.5" x="150" y="111" width="46" height="18" rx="2"/>
<g class="hl-3">
  <path class="wire st-warm" style="stroke-width:3" d="M150 81 L150 92 L158 97"/><path class="wire st-warm" style="stroke-width:3" d="M150 159 L150 148 L158 143"/>
  <circle class="fl-warm st-ink" stroke-width="1.5" cx="150" cy="81" r="3.5"/><circle class="fl-warm st-ink" stroke-width="1.5" cx="150" cy="159" r="3.5"/>
  <g transform="translate(160 98)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.12 .86;.94 1.1;1.06 .95;1 1" dur=".6s" begin="0s" repeatCount="indefinite"/><path class="fl-warm" d="M0 0Q10 -10 22 -7Q32 -4 31 0Q32 4 22 7Q10 10 0 0Z"/><path fill="#fff" fill-opacity=".8" d="M3 0Q10 -5 18 -3Q23 -1 22 0Q23 1 18 3Q10 5 3 0Z"/></g></g><g transform="translate(160 142)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.12 .86;.94 1.1;1.06 .95;1 1" dur=".6s" begin="-0.3s" repeatCount="indefinite"/><path class="fl-warm" d="M0 0Q10 -10 22 -7Q32 -4 31 0Q32 4 22 7Q10 10 0 0Z"/><path fill="#fff" fill-opacity=".8" d="M3 0Q10 -5 18 -3Q23 -1 22 0Q23 1 18 3Q10 5 3 0Z"/></g></g>
  <path class="fl-dark st-ink" stroke-width="1.2" stroke-linejoin="round" d="M153 97 L160 100 L160 96 Z"/><path class="fl-dark st-ink" stroke-width="1.2" stroke-linejoin="round" d="M153 143 L160 140 L160 144 Z"/>
</g>

<!-- טורבינה וחרוט הפליטה -->
<g class="hl-4">
  <path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M199 139.8V100.2"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M211 143.1V96.9"/><path class="thin" style="stroke-width:2;stroke-linecap:butt" d="M223 146.4V93.6"/>
  <path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M205 140.4V99.6"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M217 143.8V96.2"/><path class="wire st-ink dash" style="stroke-width:5;stroke-linecap:butt;stroke-dasharray:2 2" d="M229 147.1V92.9"/>
  <path class="body fl-soft" d="M198 108L234 107L234 133L198 132Z"/>
</g>
<path class="body" d="M234 107L286 120L234 133Z"/>
<!-- ציר משותף: מהטורבינה דרך המדחס אל המניפה -->
<path class="wire st-dark" style="stroke-width:7;stroke-linecap:butt" d="M58 120H236"/>

<!-- זרימה: עוקף קר -->
<g class="hl-1">
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.27s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.53s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.8s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.07s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.33s" repeatCount="indefinite" path="M2 72 L60 72 Q120 70 200 73 L262 75"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.13s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.4s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.67s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.93s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.2s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.47s" repeatCount="indefinite" path="M2 168 L60 168 Q120 170 200 167 L262 165"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.07s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.33s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.6s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.87s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.13s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.4s" repeatCount="indefinite" path="M2 63 L60 64 L120 65 L204 68 L262 67"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.2s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.47s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-0.73s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.27s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.6s" begin="-1.53s" repeatCount="indefinite" path="M2 177 L60 176 L120 175 L204 172 L262 173"/></circle>
  <path class="arrow st-cold" marker-end="url(#jet-c)" d="M214 70 H246"/><path class="arrow st-cold" marker-end="url(#jet-c)" d="M214 170 H246"/>
</g>
<!-- זרימה: ליבה -->
<g class="hl-1 hl-2">
  <circle class="fl-cold" r="2.2"><animateMotion dur="0.8s" begin="-0s" repeatCount="indefinite" path="M2 94 L78 95"/></circle><circle class="fl-cold" r="2.2"><animateMotion dur="0.8s" begin="-0.4s" repeatCount="indefinite" path="M2 94 L78 95"/></circle>
  <circle class="fl-cold" r="2.2"><animateMotion dur="0.8s" begin="-0.2s" repeatCount="indefinite" path="M2 146 L78 145"/></circle><circle class="fl-cold" r="2.2"><animateMotion dur="0.8s" begin="-0.6s" repeatCount="indefinite" path="M2 146 L78 145"/></circle>
</g>
<g class="hl-2">
  <circle class="fl-ink" r="2"><animateMotion dur="0.5s" begin="-0s" repeatCount="indefinite" path="M78 95 L112 100"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.5s" begin="-0.25s" repeatCount="indefinite" path="M78 95 L112 100"/></circle>
  <circle class="fl-ink" r="2"><animateMotion dur="0.5s" begin="-0.13s" repeatCount="indefinite" path="M78 145 L112 140"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.5s" begin="-0.38s" repeatCount="indefinite" path="M78 145 L112 140"/></circle>
  <circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0s" repeatCount="indefinite" path="M112 100 L148 104"/></circle><circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0.17s" repeatCount="indefinite" path="M112 100 L148 104"/></circle><circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0.33s" repeatCount="indefinite" path="M112 100 L148 104"/></circle>
  <circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0.08s" repeatCount="indefinite" path="M112 140 L148 136"/></circle><circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0.25s" repeatCount="indefinite" path="M112 140 L148 136"/></circle><circle class="fl-ink" r="1.6"><animateMotion dur="0.5s" begin="-0.42s" repeatCount="indefinite" path="M112 140 L148 136"/></circle>
</g>
<g class="hl-3">
  <circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0s" repeatCount="indefinite" path="M148 104 L158 91 L192 91 L198 103"/></circle><circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.3s" repeatCount="indefinite" path="M148 104 L158 91 L192 91 L198 103"/></circle>
  <circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.15s" repeatCount="indefinite" path="M148 136 L158 149 L192 149 L198 137"/></circle><circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.45s" repeatCount="indefinite" path="M148 136 L158 149 L192 149 L198 137"/></circle>
  <circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0s" repeatCount="indefinite" path="M148 104 L158 105 L192 105 L198 103"/></circle><circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.3s" repeatCount="indefinite" path="M148 104 L158 105 L192 105 L198 103"/></circle>
  <circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.15s" repeatCount="indefinite" path="M148 136 L158 135 L192 135 L198 137"/></circle><circle class="fl-ink" r="1.8"><animateMotion dur="0.6s" begin="-0.45s" repeatCount="indefinite" path="M148 136 L158 135 L192 135 L198 137"/></circle>
</g>
<g class="hl-4">
  <circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0s" repeatCount="indefinite" path="M198 103 L234 98 L264 104 L312 106"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0.3s" repeatCount="indefinite" path="M198 103 L234 98 L264 104 L312 106"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0.6s" repeatCount="indefinite" path="M198 103 L234 98 L264 104 L312 106"/></circle>
  <circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0.15s" repeatCount="indefinite" path="M198 137 L234 142 L264 136 L312 134"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0.45s" repeatCount="indefinite" path="M198 137 L234 142 L264 136 L312 134"/></circle><circle class="fl-ink" r="2"><animateMotion dur="0.9s" begin="-0.75s" repeatCount="indefinite" path="M198 137 L234 142 L264 136 L312 134"/></circle>
</g>

<!-- שלב 3: דלק זורם למזרקים -->
<g class="only-3"><path class="flow" d="M150 81 L150 92 L158 97"/><path class="flow" d="M150 159 L150 148 L158 143"/></g>
<!-- שלב 4: הציר מעביר את הסיבוב קדימה -->
<g class="only-4"><path class="flow rev" style="stroke-width:3" d="M58 120H234"/></g>

<g class="only-1"><text x="160" y="16">המניפה שואבת אוויר</text><text x="160" y="30">ורובו עוקף את הליבה</text></g>
<g class="only-2"><text x="160" y="16">שורות להבים דוחסות</text><text x="160" y="30">את האוויר פי ארבעים</text></g>
<g class="only-3"><text x="160" y="16">דלק נשרף ברציפות</text><text x="160" y="30">ביותר מאלף מעלות</text></g>
<g class="only-4"><text x="160" y="16">הטורבינה מסובבת בציר אחד</text><text x="160" y="30">את המדחס ואת המניפה</text></g>
`;
