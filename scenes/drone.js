// רחפן: 1 ארבעה רוטורים דוחפים אוויר מטה · 2 זוגות באלכסון מסתובבים בכיוונים מנוגדים · 3 האחוריים מאיצים והרחפן נוטה קדימה · 4 חיישנים ובקר מתקנים את המנועים
export default `
<defs>
  <marker id="drone-c" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <marker id="drone-w" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
  <marker id="drone-g" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-green"/></marker>
  <marker id="drone-i" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- שלבים 1-2: ריחוף ישר -->
<g class="only-1 only-2"><g transform="translate(160 104) scale(1.22) translate(-160 -100)">
<path class="wire st-dark" style="stroke-width:5" d="M160 101L116 74"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L204 74"/>
<rect class="body" style="stroke-width:1.5" x="111" y="69" width="10" height="10" rx="2"/><g transform="translate(116 66)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin-rev fast"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-warm dash" style="stroke-width:2" d="M85.7 73A35 14 0 0 0 146.3 73" marker-end="url(#drone-w)"/></g>
<rect class="body" style="stroke-width:1.5" x="199" y="69" width="10" height="10" rx="2"/><g transform="translate(204 66)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin fast"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-cold dash" style="stroke-width:2" d="M234.3 73A35 14 0 0 1 173.7 73" marker-end="url(#drone-c)"/></g>
<path class="thin st-ink" d="M146 112l-5 14M174 112l5 14M135 126h12M173 126h12"/>
<rect class="body" x="137" y="88" width="46" height="26" rx="9"/><path class="thin" d="M141 106H179"/>
<circle class="fl-dark st-ink" stroke-width="1.5" cx="137" cy="103" r="5.500"/><circle fill="#fff" fill-opacity=".7" cx="135.500" cy="101.500" r="1.400"/><circle class="fl-hot" cx="178" cy="109.500" r="1.800"><animate attributeName="opacity" values="1;1;.15;.15" keyTimes="0;.5;.5;1" dur="1.200s" repeatCount="indefinite"/></circle>
<rect class="fl-green st-ink" stroke-width="1.2" x="152" y="92" width="16" height="10" rx="1.500"/><path class="st-ink fl-none" stroke-width="1" d="M155 92v-2.500M160 92v-2.500M165 92v-2.500M155 102v2.500M160 102v2.500M165 102v2.500"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L84 126"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L236 126"/>
<rect class="body" style="stroke-width:1.5" x="79" y="121" width="10" height="10" rx="2"/><g transform="translate(84 118)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin fast"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-cold dash" style="stroke-width:2" d="M119.5 126A41 16 0 0 1 48.5 126" marker-end="url(#drone-c)"/></g>
<rect class="body" style="stroke-width:1.5" x="231" y="121" width="10" height="10" rx="2"/><g transform="translate(236 118)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin-rev fast"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-warm dash" style="stroke-width:2" d="M200.5 126A41 16 0 0 0 271.5 126" marker-end="url(#drone-w)"/></g>
</g></g>

<!-- שלב 3: נטייה קדימה (שמאלה באיור) -->
<g class="only-3">
  <path class="thin dash" d="M24 180H296"/>
  <g transform="translate(160 104) scale(1.22) translate(-160 -100)"><g transform="rotate(-12 160 100)">
<path class="wire st-dark" style="stroke-width:5" d="M160 101L116 74"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L204 74"/>
<rect class="body" style="stroke-width:1.5" x="111" y="69" width="10" height="10" rx="2"/><g transform="translate(116 66)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin-rev"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><path class="arrow st-green" d="M116 60V51" marker-end="url(#drone-g)"/>
<rect class="body" style="stroke-width:1.5" x="199" y="69" width="10" height="10" rx="2"/><g transform="translate(204 66)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin fast"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><path class="arrow st-green" d="M204 60V40" marker-end="url(#drone-g)"/>
<path class="thin st-ink" d="M146 112l-5 14M174 112l5 14M135 126h12M173 126h12"/>
<rect class="body" x="137" y="88" width="46" height="26" rx="9"/><path class="thin" d="M141 106H179"/>
<circle class="fl-dark st-ink" stroke-width="1.5" cx="137" cy="103" r="5.500"/><circle fill="#fff" fill-opacity=".7" cx="135.500" cy="101.500" r="1.400"/><circle class="fl-hot" cx="178" cy="109.500" r="1.800"><animate attributeName="opacity" values="1;1;.15;.15" keyTimes="0;.5;.5;1" dur="1.200s" repeatCount="indefinite"/></circle>
<rect class="fl-green st-ink" stroke-width="1.2" x="152" y="92" width="16" height="10" rx="1.500"/><path class="st-ink fl-none" stroke-width="1" d="M155 92v-2.500M160 92v-2.500M165 92v-2.500M155 102v2.500M160 102v2.500M165 102v2.500"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L84 126"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L236 126"/>
<rect class="body" style="stroke-width:1.5" x="79" y="121" width="10" height="10" rx="2"/><g transform="translate(84 118)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><path class="arrow st-green" d="M84 112V103" marker-end="url(#drone-g)"/>
<rect class="body" style="stroke-width:1.5" x="231" y="121" width="10" height="10" rx="2"/><g transform="translate(236 118)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin-rev fast"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><path class="arrow st-green" d="M236 112V92" marker-end="url(#drone-g)"/>
  </g></g>
  <path class="arrow st-ink" d="M76 40H26" marker-end="url(#drone-i)"/>
  <text x="50" y="30">קדימה</text>
  <text x="264" y="26">האחוריים מאיצים</text>
  <text x="160" y="194">הרחפן כולו נוטה,</text>
  <text x="160" y="208">וחלק מהדחף מופנה קדימה</text>
</g>

<!-- שלב 4 והמבט הכולל: הפרעה קטנה ותיקון -->
<g class="from-4">
  <g transform="translate(160 104) scale(1.22) translate(-160 -100)"><g><animateTransform attributeName="transform" type="rotate" values="0 160 100;5 160 100;0 160 100;0 160 100" keyTimes="0;.18;.42;1" calcMode="spline" keySplines=".3 0 .7 1;.3 0 .7 1;0 0 1 1" dur="2.6s" repeatCount="indefinite"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L116 74"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L204 74"/>
<rect class="body" style="stroke-width:1.5" x="111" y="69" width="10" height="10" rx="2"/><g transform="translate(116 66)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin-rev fast"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-warm dash" style="stroke-width:2" d="M85.7 73A35 14 0 0 0 146.3 73" marker-end="url(#drone-w)"/></g>
<rect class="body" style="stroke-width:1.5" x="199" y="69" width="10" height="10" rx="2"/><g transform="translate(204 66)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="30" ry="10"/><g transform="scale(1 .33)"><g class="spin fast"><ellipse class="fl-ink" cx="-15" rx="14" ry="5"/><ellipse class="fl-ink" cx="15" rx="14" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-cold dash" style="stroke-width:2" d="M234.3 73A35 14 0 0 1 173.7 73" marker-end="url(#drone-c)"/></g>
<path class="thin st-ink" d="M146 112l-5 14M174 112l5 14M135 126h12M173 126h12"/>
<rect class="body" x="137" y="88" width="46" height="26" rx="9"/><path class="thin" d="M141 106H179"/>
<circle class="fl-dark st-ink" stroke-width="1.5" cx="137" cy="103" r="5.500"/><circle fill="#fff" fill-opacity=".7" cx="135.500" cy="101.500" r="1.400"/><circle class="fl-hot" cx="178" cy="109.500" r="1.800"><animate attributeName="opacity" values="1;1;.15;.15" keyTimes="0;.5;.5;1" dur="1.200s" repeatCount="indefinite"/></circle>
<rect class="fl-green st-ink" stroke-width="1.2" x="152" y="92" width="16" height="10" rx="1.500"/><path class="st-ink fl-none" stroke-width="1" d="M155 92v-2.500M160 92v-2.500M165 92v-2.500M155 102v2.500M160 102v2.500M165 102v2.500"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L84 126"/>
<path class="wire st-dark" style="stroke-width:5" d="M160 101L236 126"/>
<g class="only-4"><path class="wire st-elec dash" style="stroke-width:2" d="M160 101L84 126"/><path class="wire st-elec dash" style="stroke-width:2" d="M160 101L236 126"/><path class="wire st-elec dash" style="stroke-width:2" d="M160 101L116 74"/><path class="wire st-elec dash" style="stroke-width:2" d="M160 101L204 74"/></g>
<rect class="body" style="stroke-width:1.5" x="79" y="121" width="10" height="10" rx="2"/><g transform="translate(84 118)"><ellipse class="fl-cold-soft st-cold" fill-opacity="0.75" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin fast"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-cold dash" style="stroke-width:2" d="M119.5 126A41 16 0 0 1 48.5 126" marker-end="url(#drone-c)"/></g>
<rect class="body" style="stroke-width:1.5" x="231" y="121" width="10" height="10" rx="2"/><g transform="translate(236 118)"><ellipse class="fl-warm st-warm" fill-opacity="0.28" stroke-width="1.2" rx="36" ry="12"/><g transform="scale(1 .33)"><g class="spin-rev fast"><ellipse class="fl-ink" cx="-18" rx="17" ry="5"/><ellipse class="fl-ink" cx="18" rx="17" ry="5"/></g></g><circle class="fl-ink" r="2.2"/></g><g class="hl-2"><path class="arrow st-warm dash" style="stroke-width:2" d="M200.5 126A41 16 0 0 0 271.5 126" marker-end="url(#drone-w)"/></g>
  </g></g>
</g>

<g class="only-1">
  <g transform="translate(160 104) scale(1.22) translate(-160 -100)"><path class="wire st-cold dash" style="stroke-width:2" d="M66 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M84 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M102 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M218 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M236 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M254 136V166"/><path class="wire st-cold dash" style="stroke-width:2" d="M102 81V102"/><path class="wire st-cold dash" style="stroke-width:2" d="M116 81V102"/><path class="wire st-cold dash" style="stroke-width:2" d="M130 81V102"/><path class="wire st-cold dash" style="stroke-width:2" d="M190 81V102"/><path class="wire st-cold dash" style="stroke-width:2" d="M204 81V102"/><path class="wire st-cold dash" style="stroke-width:2" d="M218 81V102"/>
  <path class="arrow st-green" d="M160 84V52" marker-end="url(#drone-g)"/></g>
  <text x="160" y="24">התגובה מרימה את הרחפן</text>
  <text x="160" y="207">כל רוטור דוחף אוויר כלפי מטה</text>
</g>
<g class="only-2">
  <text x="67" y="166">עם השעון</text>
  <text x="253" y="166">נגד השעון</text>
  <text x="98" y="38">נגד השעון</text>
  <text x="222" y="38">עם השעון</text>
  <text x="160" y="206">הפיתולים מתבטלים, והגוף אינו מסתובב</text>
</g>
<g class="only-4">
  <g transform="translate(160 104) scale(1.22) translate(-160 -100)"><circle class="ring st-green" cx="160" cy="97" r="20"/><circle class="ring st-green d3" cx="160" cy="97" r="20"/></g>
  <path class="wire st-cold dash" style="stroke-width:2" d="M300 56L280 76M308 68L288 88M292 44L272 64"/>
  <text class="sm" x="290" y="36">משב רוח</text>
  <text x="150" y="24">חיישנים מודדים כל הטיה</text>
  <text x="160" y="206">הבקר מתקן כל מנוע מאות פעמים בשנייה</text>
</g>
`;
