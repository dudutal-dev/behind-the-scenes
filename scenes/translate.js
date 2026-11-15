// תרגום מכונה: 1 מילה במילה לפי מילון, תוצאה שגויה · 2 קידוד כל מילה עם ההקשר שלה · 3 קשב: משקלים על מילות המקור · 4 התרגום נבנה בסדר של שפת היעד
export default `
<defs>
  <marker id="translate-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-line"/></marker><marker id="translate-i" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- משפט המקור -->
<rect class="body" x="31" y="10" width="62" height="21" rx="7"/><text direction="ltr" x="62" y="25" style="stroke:none">the</text>
<rect class="body" x="129" y="10" width="62" height="21" rx="7"/><text direction="ltr" x="160" y="25" style="stroke:none">river</text>
<rect class="body" x="227" y="10" width="62" height="21" rx="7"/><text direction="ltr" x="258" y="25" style="stroke:none">bank</text>

<!-- שלב 1: מילון, מילה במילה -->
<g class="only-1">
  <path class="wire st-line dash" d="M62 33V74"/><path class="wire st-line dash" d="M62 99V139" marker-end="url(#translate-a)"/><path class="body" style="stroke-width:1.5" d="M62 82q-6 -4 -12 -2v13q6 -2 12 2q6 -4 12 -2v-13q-6 -2 -12 2z"/><path class="thin st-ink" style="stroke-width:1" d="M62 82v13"/>
  <path class="wire st-line dash" d="M160 33V74"/><path class="wire st-line dash" d="M160 99V139" marker-end="url(#translate-a)"/><path class="body" style="stroke-width:1.5" d="M160 82q-6 -4 -12 -2v13q6 -2 12 2q6 -4 12 -2v-13q-6 -2 -12 2z"/><path class="thin st-ink" style="stroke-width:1" d="M160 82v13"/>
  <path class="wire st-line dash" d="M258 33V74"/><path class="wire st-line dash" d="M258 99V139" marker-end="url(#translate-a)"/><path class="body" style="stroke-width:1.5" d="M258 82q-6 -4 -12 -2v13q6 -2 12 2q6 -4 12 -2v-13q-6 -2 -12 2z"/><path class="thin st-ink" style="stroke-width:1" d="M258 82v13"/>
  <rect class="body" x="31" y="144" width="62" height="21" rx="7"/><text x="62" y="159" style="stroke:none">ה־</text>
  <rect class="body" x="129" y="144" width="62" height="21" rx="7"/><text x="160" y="159" style="stroke:none">נהר</text>
  <rect class="fl-panel st-hot" stroke-width="2.500" x="227" y="144" width="62" height="21" rx="7"/><text x="258" y="159" style="stroke:none">בנק</text>
  <g class="pulse"><circle class="fl-hot st-ink" stroke-width="1.5" cx="290" cy="144" r="7"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M287 141l6 6M293 141l-6 6"/></g>
  <text x="160" y="190">כל מילה מוחלפת לפי מילון</text>
  <text x="160" y="206">יוצא בנק במקום גדה, בסדר המקור</text>
</g>

<!-- קידוד: לכל מילה רשימת מספרים שמושפעת משכנותיה -->
<g class="from-2"><g class="hl-2 hl-3 hl-4">
  <path class="thin" d="M62 32V45M160 32V45M258 32V45"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="36" y="46" width="10" height="10" rx="2"/><rect class="fl-line st-ink" stroke-width="1.2" x="46.5" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="57" y="46" width="10" height="10" rx="2"/><rect class="fl-line st-ink" stroke-width="1.2" x="67.5" y="46" width="10" height="10" rx="2"/><rect class="fl-line st-ink" stroke-width="1.2" x="78" y="46" width="10" height="10" rx="2"/>
  <rect class="fl-cold st-ink" stroke-width="1.2" x="134" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="144.5" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="155" y="46" width="10" height="10" rx="2"/><rect class="fl-warm st-ink" stroke-width="1.2" x="165.5" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="176" y="46" width="10" height="10" rx="2"/>
  <rect class="fl-warm st-ink" stroke-width="1.2" x="232" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="242.5" y="46" width="10" height="10" rx="2"/><rect class="fl-warm st-ink" stroke-width="1.2" x="253" y="46" width="10" height="10" rx="2"/><rect class="fl-cold st-ink" stroke-width="1.2" x="263.5" y="46" width="10" height="10" rx="2"/><rect class="fl-warm st-ink" stroke-width="1.2" x="274" y="46" width="10" height="10" rx="2"/>
</g></g>
<g class="from-2"><g class="hl-2">
  <path class="wire st-line" style="stroke-width:1.8" d="M91 51H131"/>
  <path class="wire st-cold" style="stroke-width:4" d="M189 51H229"/>
</g></g>

<!-- קשב: מכל מילה בתרגום אל מילות המקור -->
<g class="from-3"><g class="hl-3 hl-4 wire st-green" stroke-opacity=".85">
  <path style="stroke-width:5" d="M258 59L236 143"/>
  <path style="stroke-width:2.400" d="M160 59L220 143"/>
  <path style="stroke-width:.9" d="M62 59L204 143"/>
</g></g>
<g class="from-4"><g class="hl-4 wire st-violet" stroke-opacity=".85">
  <path style="stroke-width:5" d="M160 59L104 143"/>
  <path style="stroke-width:3" d="M62 59L88 143"/>
  <path style="stroke-width:.9" d="M258 59L120 143"/>
</g></g>

<!-- התרגום -->
<g class="from-2">
  <rect class="thin" stroke-dasharray="3 3" x="187" y="145" width="68" height="22" rx="7"/>
  <rect class="thin" stroke-dasharray="3 3" x="63" y="145" width="68" height="22" rx="7"/>
</g>
<g class="from-3"><g class="hl-3 hl-4">
  <rect class="fl-green st-ink" stroke-width="2" x="187" y="145" width="68" height="22" rx="7"/><text x="221" y="160" style="stroke:none;fill:var(--s-panel)">גדת</text>
</g></g>
<g class="from-4"><g class="hl-4">
  <rect class="fl-violet st-ink" stroke-width="2" x="63" y="145" width="68" height="22" rx="7"/><text x="97" y="160" style="stroke:none;fill:var(--s-panel)">הנהר</text>
  <path class="arrow st-ink dash" style="stroke-width:1.8" d="M185 156H136" marker-end="url(#translate-i)"/>
</g></g>

<g class="only-2">
  <rect class="fl-cold st-ink" stroke-width=".8" x="-3.500" y="-3.500" width="7" height="7" rx="1.5"><animateMotion dur="1.400s" repeatCount="indefinite" path="M189 51H229"/></rect>
  <rect class="fl-warm st-ink" stroke-width=".8" x="-3.500" y="-3.500" width="7" height="7" rx="1.5"><animateMotion dur="1.400s" begin="-.7s" repeatCount="indefinite" path="M229 51H189"/></rect>
  <rect class="fl-cold st-ink" stroke-width=".8" x="-3" y="-3" width="6" height="6" rx="1.5"><animateMotion dur="1.800s" begin="-.3s" repeatCount="indefinite" path="M131 51H91"/></rect>
  <text x="160" y="108">כל מילה נעשית רשימת מספרים</text>
  <text x="160" y="124">והשכנות מעדכנות זו את זו</text>
</g>
<g class="only-3">
  <circle class="fl-green st-ink" stroke-width=".8" r="3.600"><animateMotion dur="1.300s" repeatCount="indefinite" path="M258 59L236 143"/></circle>
  <circle class="fl-green st-ink" stroke-width=".8" r="3.600"><animateMotion dur="1.300s" begin="-.65s" repeatCount="indefinite" path="M258 59L236 143"/></circle>
  <circle class="fl-green st-ink" stroke-width=".8" r="2.600"><animateMotion dur="1.300s" begin="-.3s" repeatCount="indefinite" path="M160 59L220 143"/></circle>
  <text x="160" y="190">לכל מילה בתרגום משקלים משלה</text>
  <text x="160" y="206">קו עבה — משקל גדול</text>
</g>
<g class="only-4">
  <circle class="fl-violet st-ink" stroke-width=".8" r="3.600"><animateMotion dur="1.300s" repeatCount="indefinite" path="M160 59L104 143"/></circle>
  <circle class="fl-violet st-ink" stroke-width=".8" r="3.600"><animateMotion dur="1.300s" begin="-.65s" repeatCount="indefinite" path="M160 59L104 143"/></circle>
  <circle class="fl-violet st-ink" stroke-width=".8" r="3"><animateMotion dur="1.300s" begin="-.3s" repeatCount="indefinite" path="M62 59L88 143"/></circle>
  <text x="160" y="190">התרגום נכתב מילה אחר מילה</text>
  <text x="160" y="206">בסדר של שפת היעד</text>
</g>
`;
