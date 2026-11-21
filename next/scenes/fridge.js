// מקרר: מעגל הקירור. 1 מאייד בתוך התא · 2 מדחס · 3 מעבה בגב · 4 שסתום התפשטות
export default `
<!-- גוף המקרר -->
<rect class="body" x="36" y="16" width="134" height="188" rx="12"/>
<rect class="fl-cold-soft" x="46" y="26" width="114" height="168" rx="7"/>
<path class="thin" d="M46 100H138M46 150H138"/>
<rect class="fl-line" x="40" y="96" width="4" height="26" rx="2"/>
<!-- אוכל -->
<g>
  <circle class="fl-green" cx="70" cy="89" r="10"/><path class="thin st-ink" d="M70 79q2-6 6-6"/>
  <rect class="fl-warm" x="92" y="74" width="14" height="26" rx="4"/><rect class="fl-ink" x="96" y="68" width="6" height="7" rx="2"/>
  <rect class="fl-hot" x="58" y="132" width="34" height="18" rx="5"/>
  <circle class="fl-elec" cx="112" cy="140" r="10"/>
</g>

<!-- מעגל הקירור: מהשסתום דרך המאייד אל המדחס -->
<g class="hl-1 hl-4">
  <path class="pipe st-cold" d="M186 34H104V48H150V62H104"/>
  <path class="flow" d="M186 34H104V48H150V62H104"/>
</g>
<g class="hl-1 hl-2">
  <path class="pipe st-cold" style="stroke-opacity:.55" d="M104 62H150V180H198"/>
  <path class="flow" d="M104 62H150V180H198"/>
</g>
<!-- מהמדחס דרך המעבה חזרה לשסתום -->
<g class="hl-2 hl-3">
  <path class="pipe st-hot" d="M214 164V150H258V134H204V118H258V102H204V86H258V70H204"/>
  <path class="flow" d="M214 164V150H258V134H204V118H258V102H204V86H258V70H204"/>
</g>
<g class="hl-3 hl-4">
  <path class="pipe st-warm" d="M204 70V54H258V34H196"/>
  <path class="flow" d="M204 70V54H258V34H196"/>
</g>

<!-- מדחס -->
<g class="hl-2">
  <circle class="fl-dark st-ink" stroke-width="2" cx="214" cy="180" r="17"/>
  <g class="spin fast only-2"><path class="arrow" stroke="#fff" d="M214 170v20M204 180h20"/></g>
</g>
<!-- שסתום התפשטות -->
<g class="hl-4">
  <path class="fl-panel st-ink" stroke-width="2" stroke-linejoin="round" d="M182 26l18 16v-16l-18 16z"/>
</g>

<!-- שלב 1: חום עובר מהאוכל אל המאייד -->
<g class="only-1">
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.7s" repeatCount="indefinite" path="M72 80Q84 60 104 55"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.7s" begin="-.8s" repeatCount="indefinite" path="M100 72Q112 66 126 62"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="2.1s" begin="-.4s" repeatCount="indefinite" path="M112 130Q130 100 148 76"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="2.1s" begin="-1.4s" repeatCount="indefinite" path="M76 132Q100 96 118 64"/></circle>
  <text x="276" y="176">הנוזל מתאדה</text>
  <text x="276" y="191">וסופג חום</text>
  <path class="arrow st-ink" stroke-width="1.8" d="M246 164Q196 120 157 72" marker-end="url(#fr-a)"/>
</g>
<!-- שלב 2: דחיסה -->
<g class="only-2">
  <circle class="ring st-hot" cx="214" cy="180" r="28"/>
  <circle class="ring st-hot d3" cx="214" cy="180" r="28"/>
  <text x="270" y="176">המדחס דוחס</text>
  <text x="270" y="191">הגז מתחמם</text>
</g>
<!-- שלב 3: פליטת חום לחדר -->
<g class="only-3">
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.5s" repeatCount="indefinite" path="M262 134H306"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.5s" begin="-.5s" repeatCount="indefinite" path="M262 102H306"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.5s" begin="-1s" repeatCount="indefinite" path="M262 70H306"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.5s" begin="-.8s" repeatCount="indefinite" path="M262 118H306"/></circle>
  <circle class="fl-hot" r="3.2"><animateMotion dur="1.5s" begin="-.2s" repeatCount="indefinite" path="M262 86H306"/></circle>
  <text x="262" y="18">חום נפלט לחדר</text>
</g>
<!-- שלב 4: הלחץ צונח -->
<g class="only-4">
  <circle class="ring st-cold" cx="191" cy="34" r="20"/>
  <circle class="ring st-cold d3" cx="191" cy="34" r="20"/>
  <text x="250" y="14">שסתום: הלחץ צונח</text>
  <text x="262" y="214">והמחזור חוזר</text>
</g>
<defs>
  <marker id="fr-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-ink"/>
  </marker>
</defs>
`;
