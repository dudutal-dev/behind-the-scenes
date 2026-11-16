// אמת המים הרומית: 1 תעלה קבורה בשיפוע זעיר · 2 גשר קשתות רק כדי לחצות עמק · 3 סיפון הפוך בעמק עמוק · 4 אגן שיקוע ומכל חלוקה בעיר
export default `
<defs>
  <marker id="aqueduct-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- פני השטח -->
<path class="fl-soft st-line" stroke-width="1.5" stroke-linejoin="round" d="M0 46L90 50Q100 54 104 74L108 150H150L154 76Q158 58 168 58L180 62Q188 66 194 92L204 202H246L254 98Q262 98 272 98H320V220H0Z"/>
<!-- מעיין -->
<ellipse class="fl-cold-soft st-cold" stroke-width="1.4" cx="14" cy="62" rx="8" ry="4"><animate attributeName="opacity" values="1;.6;1" dur="2s" repeatCount="indefinite"/></ellipse>

<!-- 2 גשר קשתות -->
<g class="hl-2">
  <path class="body" d="M104 66.4L152 71.8V150H104Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M104 112H152M104 116H152"/>
  <path class="fl-bg st-ink" stroke-width="1.4" d="M107 150V128A7 7 0 0 1 121 128V150Z"/><path class="fl-bg st-ink" stroke-width="1.4" d="M124 150V128A7 7 0 0 1 138 128V150Z"/><path class="fl-bg st-ink" stroke-width="1.4" d="M141 150V128A7 7 0 0 1 155 128V150Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M107 110V98A3.5 3.5 0 0 1 114 98V110Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M115 110V98A3.5 3.5 0 0 1 122 98V110Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M123 110V98A3.5 3.5 0 0 1 130 98V110Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M131 110V98A3.5 3.5 0 0 1 138 98V110Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M139 110V98A3.5 3.5 0 0 1 146 98V110Z"/><path class="fl-bg st-ink" stroke-width="1.2" d="M147 110V98A3.5 3.5 0 0 1 154 98V110Z"/>
</g>

<!-- 1 תעלה קבורה -->
<g class="hl-1 hl-2 hl-4">
  <path class="thin st-ink" style="stroke-width:1" d="M18 56.8L104 66.4M18 66.8L104 76.4M152 71.8L180 74.9M152 81.8L180 84.9"/>
  <path class="wire st-cold" style="stroke-width:5" d="M18 61.8L180 79.9"/>
  <path class="flow" d="M18 61.8L180 79.9"/>
</g>
<g class="only-1">
  <path class="st-hot fl-none" stroke-width="1.4" d="M30 77.1H90V83.8"/>
  <path class="st-hot fl-none" stroke-width="1.4" stroke-dasharray="3 3" d="M30 77.1L90 83.8"/>
</g>

<!-- 3 סיפון הפוך -->
<g class="hl-3">
  <rect class="body" x="180" y="74" width="12" height="16" rx="1.5"/>
  <rect class="body" x="258" y="82" width="12" height="16" rx="1.5"/>
  <path class="pipe st-dark" d="M186 86C192 88 194 150 202 194H248C256 150 254 96 262 92"/>
  <path class="wire st-cold" style="stroke-width:3" d="M186 86C192 88 194 150 202 194H248C256 150 254 96 262 92"/>
  <path class="flow" d="M186 86C192 88 194 150 202 194H248C256 150 254 96 262 92"/>
  <path class="st-hot fl-none" stroke-width="1.2" stroke-dasharray="2 3" d="M176 78H276"/>
</g>

<!-- 4 אגן שיקוע ומכל חלוקה -->
<g class="hl-4">
  <rect class="fl-cold-soft st-ink" stroke-width="1.5" x="158" y="73.5" width="16" height="16"/>
  <path class="fl-line" d="M159 87.5h14v1.6h-14z"/>
  <path class="wire st-cold" style="stroke-width:4" d="M270 90L286 90"/>
  <rect class="body" x="284" y="82" width="22" height="16" rx="2"/>
  <path class="wire st-cold" style="stroke-width:2" d="M288 98V124M295 98V128M302 98V124"/>
</g>
<g class="only-4">
  <g class="fl-dark"><circle r="1.4" cx="163"><animate attributeName="cy" values="76.5;86.5" dur="1.6s" repeatCount="indefinite"/></circle>
  <circle r="1.4" cx="169"><animate attributeName="cy" values="76.5;86.5" dur="1.6s" begin="-.8s" repeatCount="indefinite"/></circle></g>
  <path class="flow" d="M288 98V124M295 98V128M302 98V124"/>
</g>

<!-- מבט מלמעלה על הקסטלום -->
<g class="hl-4">
  <rect class="body" x="232" y="8" width="80" height="56" rx="5"/>
  <path class="wire st-cold" style="stroke-width:4" d="M238 36H260"/>
  <circle class="fl-cold-soft st-ink" stroke-width="1.6" cx="274" cy="36" r="14"/>
  <path class="st-cold fl-none" stroke-width="1.6" d="M277.6 22.5L280.7 10.9M281.3 24.1L287.6 13.9M284.5 26.7L293.4 18.7M286.7 30.1L297.6 25.0M287.9 34.0L299.7 32.2M287.9 38.0L299.7 39.8M286.7 41.9L297.6 47.0M284.5 45.3L293.4 53.3M281.3 47.9L287.6 58.1M277.6 49.5L280.7 61.1"/>
  <circle class="fl-ink" cx="270" cy="38" r="1.2"/><circle class="fl-ink" cx="276" cy="32" r="1.2"/><circle class="fl-ink" cx="278" cy="40" r="1.2"/>
</g>

<!-- תוויות -->
<g class="only-1"><text x="66" y="18">תעלה קבורה שיורדת</text><text x="66" y="32">מעט וקבוע (מוגדל)</text></g>
<g class="only-2"><text x="66" y="18">קשתות רק במקום</text><text x="66" y="32">שבו חוצים עמק</text></g>
<g class="only-3"><text x="66" y="18">סיפון הפוך: לחץ המים</text><text x="66" y="32">דוחף אותם במעלה העמק</text></g>
<g class="only-4"><text x="66" y="18">אגן שיקוע, ובעיר</text><text x="66" y="32">מכל שמחלק לצינורות</text><text class="sm" x="272" y="76">קסטלום</text></g>
`;
