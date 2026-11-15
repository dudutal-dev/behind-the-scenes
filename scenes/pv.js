// תא סולארי בחתך: 1 שתי שכבות סיליקון · 2 שדה קבוע בצומת · 3 פוטון מנתק אלקטרון והשדה דוחף אותו · 4 מעגל חיצוני, ממיר ומנורה
export default `
<defs>
  <marker id="pv-a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" class="fl-violet"/>
  </marker>
</defs>

<!-- שמש -->
<g class="spin" style="animation-duration:14s">
  <path class="wire st-warm" d="M30 7v5M30 44v5M9 28h5M46 28h5M15.2 13.2l3.5 3.5M41.3 39.3l3.5 3.5M15.2 42.8l3.5-3.5M41.3 16.7l3.5-3.5"/>
</g>
<circle class="fl-elec st-warm" stroke-width="2" cx="30" cy="28" r="11"/>

<!-- התא: שכבה עליונה עם עודף אלקטרונים, שכבה תחתונה עם חוסר -->
<rect class="fl-cold-soft" x="14" y="84" width="156" height="24" />
<rect class="fl-soft" x="14" y="108" width="156" height="38"/>
<rect class="fl-violet hl-2" style="fill-opacity:.3" x="14" y="103" width="156" height="10"/>
<rect class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" x="14" y="84" width="156" height="62"/>
<!-- מגעים: אצבעות מתכת למעלה, לוח מתכת למטה -->
<g class="fl-dark st-ink" stroke-width="1">
  <rect x="20" y="79" width="10" height="5"/><rect x="58" y="79" width="10" height="5"/><rect x="96" y="79" width="10" height="5"/><rect x="134" y="79" width="10" height="5"/><rect x="160" y="79" width="10" height="5"/>
  <rect x="14" y="146" width="156" height="6"/>
</g>
<!-- אלקטרונים חופשיים בשכבה העליונה, חורים בתחתונה -->
<g class="hl-1 hl-3">
  <g class="fl-cold st-ink" stroke-width=".8">
    <circle class="bob" cx="26" cy="95" r="2.8"/><circle class="bob d2" cx="46" cy="91" r="2.8"/><circle class="bob d4" cx="76" cy="96" r="2.8"/>
    <circle class="bob d1" cx="90" cy="91" r="2.8"/><circle class="bob d3" cx="120" cy="96" r="2.8"/><circle class="bob d2" cx="132" cy="91" r="2.8"/><circle class="bob" cx="156" cy="95" r="2.8"/>
  </g>
  <g class="fl-bg st-hot" stroke-width="1.4">
    <circle cx="30" cy="128" r="2.8"/><circle cx="48" cy="137" r="2.8"/><circle cx="80" cy="124" r="2.8"/><circle cx="94" cy="137" r="2.8"/>
    <circle cx="124" cy="128" r="2.8"/><circle cx="134" cy="138" r="2.8"/><circle cx="158" cy="124" r="2.8"/>
  </g>
</g>

<!-- הצומת: מטענים קבועים משני הצדדים, והכיוון שאליו נדחף אלקטרון -->
<g class="hl-2">
  <path class="thin st-hot" d="M23 101h5M25.5 98.5v5M49 101h5M51.5 98.5v5M75 101h5M77.5 98.5v5M101 101h5M103.5 98.5v5M127 101h5M129.5 98.5v5M153 101h5M155.5 98.5v5"/>
  <path class="thin st-cold" d="M23 115h5M49 115h5M75 115h5M101 115h5M127 115h5M153 115h5"/>
  <g class="wire st-violet dash" style="stroke-width:2">
    <path d="M38 122V100" marker-end="url(#pv-a)"/><path d="M64 122V100" marker-end="url(#pv-a)"/><path d="M90 122V100" marker-end="url(#pv-a)"/>
    <path d="M116 122V100" marker-end="url(#pv-a)"/><path d="M142 122V100" marker-end="url(#pv-a)"/>
  </g>
</g>

<!-- פוטונים: כל פגיעה מנתקת אלקטרון; האלקטרון נדחף למעלה, החור למטה -->
<g class="hl-3">
  <g>
    <circle class="fl-elec st-warm" stroke-width="1.2" r="3.4"><animateMotion dur="3.3s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.4;1" path="M38 38L62 122"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.42;1" dur="3.3s" repeatCount="indefinite"/></circle>
    <circle class="fl-elec" cx="62" cy="122" r="7"><animate attributeName="opacity" values="0;0;.9;0;0" keyTimes="0;.38;.42;.6;1" dur="3.3s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".8" r="2.8"><animateMotion dur="3.3s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1" keyTimes="0;.42;1" path="M62 122V93H150"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.94;1" dur="3.3s" repeatCount="indefinite"/></circle>
    <circle class="fl-bg st-hot" stroke-width="1.4" r="2.8"><animateMotion dur="3.3s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.42;.7;1" path="M62 122V139"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.9;1" dur="3.3s" repeatCount="indefinite"/></circle>
  </g>
  <g>
    <circle class="fl-elec st-warm" stroke-width="1.2" r="3.4"><animateMotion dur="3.3s" begin="-1.1s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.4;1" path="M40 34L108 120"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.42;1" dur="3.3s" begin="-1.1s" repeatCount="indefinite"/></circle>
    <circle class="fl-elec" cx="108" cy="120" r="7"><animate attributeName="opacity" values="0;0;.9;0;0" keyTimes="0;.38;.42;.6;1" dur="3.3s" begin="-1.1s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".8" r="2.8"><animateMotion dur="3.3s" begin="-1.1s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1" keyTimes="0;.42;1" path="M108 120V93H160"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.94;1" dur="3.3s" begin="-1.1s" repeatCount="indefinite"/></circle>
    <circle class="fl-bg st-hot" stroke-width="1.4" r="2.8"><animateMotion dur="3.3s" begin="-1.1s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.42;.7;1" path="M108 120V138"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.9;1" dur="3.3s" begin="-1.1s" repeatCount="indefinite"/></circle>
  </g>
  <g>
    <circle class="fl-elec st-warm" stroke-width="1.2" r="3.4"><animateMotion dur="3.3s" begin="-2.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.4;1" path="M42 30L146 124"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.42;1" dur="3.3s" begin="-2.2s" repeatCount="indefinite"/></circle>
    <circle class="fl-elec" cx="146" cy="124" r="7"><animate attributeName="opacity" values="0;0;.9;0;0" keyTimes="0;.38;.42;.6;1" dur="3.3s" begin="-2.2s" repeatCount="indefinite"/></circle>
    <circle class="fl-cold st-ink" stroke-width=".8" r="2.8"><animateMotion dur="3.3s" begin="-2.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1" keyTimes="0;.42;1" path="M146 124V93H164"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.94;1" dur="3.3s" begin="-2.2s" repeatCount="indefinite"/></circle>
    <circle class="fl-bg st-hot" stroke-width="1.4" r="2.8"><animateMotion dur="3.3s" begin="-2.2s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.42;.7;1" path="M146 124V139"/>
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.42;.9;1" dur="3.3s" begin="-2.2s" repeatCount="indefinite"/></circle>
  </g>
</g>

<!-- מעגל חיצוני: זרם ישר מהתא לממיר וחזרה -->
<g class="hl-4">
  <path class="pipe st-cold" d="M170 81H212"/><path class="flow" d="M170 81H212"/>
  <path class="pipe st-cold" d="M232 116V149H170"/><path class="flow" d="M232 116V149H170"/>
  <!-- זרם חילופין מהממיר למנורה -->
  <g class="wire st-green" stroke-dasharray="4 5">
    <path d="M252 96H270V118H287V106"><animate attributeName="stroke-dashoffset" values="0;-9;0;9;0" dur="1s" repeatCount="indefinite"/></path>
    <path d="M252 104H264V124H293V106"><animate attributeName="stroke-dashoffset" values="0;9;0;-9;0" dur="1s" repeatCount="indefinite"/></path>
  </g>
</g>
<!-- ממיר -->
<g class="hl-4">
  <rect class="body" x="212" y="66" width="40" height="50" rx="6"/>
  <circle class="fl-green blink" cx="232" cy="74" r="2"/>
  <path class="wire st-cold" style="stroke-width:2" d="M218 89h8M218 95h8"/>
  <path class="thin st-ink" d="M229 92h4M231.5 89.5l2.5 2.5l-2.5 2.5"/>
  <path class="wire st-green" style="stroke-width:2" d="M236 92q2.5-7 5 0t5 0"/>
</g>
<!-- מנורה -->
<g class="hl-4">
  <rect class="fl-dark st-ink" stroke-width="1.5" x="284" y="95" width="12" height="11" rx="2"/>
  <circle class="body" cx="290" cy="82" r="13"/>
  <circle class="fl-elec fade from-4" cx="290" cy="82" r="10"/>
  <path class="thin st-ink" d="M286 95V86l2-4l2 4l2-4l2 4V95"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="92" y="174">למעלה: עודף אלקטרונים</text>
  <text x="92" y="190">למטה: חוסר</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <circle class="fl-cold st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" repeatCount="indefinite" path="M51 124V92"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="2.8"><animateMotion dur="1.4s" begin="-.7s" repeatCount="indefinite" path="M129 124V92"/></circle>
  <text x="92" y="174">שדה קבוע בגבול</text>
  <text x="92" y="190">מדרון חד־כיווני לאלקטרונים</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="92" y="174">אור מנתק אלקטרון</text>
  <text x="92" y="190">והשדה דוחף אותו למעלה</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <circle class="fl-cold st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.3s" repeatCount="indefinite" path="M170 81H212"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="3.2"><animateMotion dur="1.3s" begin="-.65s" repeatCount="indefinite" path="M170 81H212"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="3.2"><animateMotion dur="2.2s" repeatCount="indefinite" path="M232 116V149H170"/></circle>
  <circle class="fl-cold st-ink" stroke-width=".8" r="3.2"><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite" path="M232 116V149H170"/></circle>
  <path class="wire st-elec blink" style="stroke-width:2" d="M290 62v-6M306 70l5-4M274 70l-5-4M308 86h5"/>
  <text x="92" y="174">זרם ישר בחוט החיצוני</text>
  <text x="246" y="174">ממיר: לזרם חילופין</text>
</g>
`;
