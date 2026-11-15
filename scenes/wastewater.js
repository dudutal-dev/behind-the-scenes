// טיהור שפכים: 1 מגוב, חול ושיקוע ראשוני · 2 אוורור וחיידקים · 3 שיקוע שני והחזרת בוצה · 4 סינון, חיטוי, השקיה ומעכל ביוגז
export default `
<defs><marker id="wastewater-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker></defs>
<path class="thin" d="M0 40H20M58 40H66M122 40H132M192 40H202M258 40H268M302 40H320"/>
<!-- כניסה, מגוב וחול -->
<g class="hl-1">
<path class="pipe st-line" style="stroke-width:5" d="M0 52H19"/><path class="flow" d="M0 52H19"/>
<path class="body" d="M20 40V79H42L47 91H51L56 79H58V40"/>
<path class="fl-cold-soft" d="M21 46H57V78H55.3L50.4 90H47.6L42.7 78H21z"/><path class="fl-line" opacity=".55" d="M21 46H57V78H55.3L50.4 90H47.6L42.7 78H21z"/>
<path class="st-ink fl-none" stroke-width="1.3" d="M26 78L34 37M29 78L37 37M32 78L40 37"/>
<rect class="fl-dark" x="22.5" y="57" width="5" height="2.4" rx="1" transform="rotate(-25 25 58)"/>
<rect class="fl-warm" x="23" y="50" width="6" height="2.4" rx="1" transform="rotate(15 26 51)"/>
<rect class="fl-dark" x="22" y="66" width="4.5" height="2.2" rx="1" transform="rotate(30 24 67)"/>
<path class="fl-dark" d="M47.7 89.6h2.6l1.7-4.4h-6z"/>
<path class="pipe st-line" style="stroke-width:5" d="M58 52H65"/><path class="flow" d="M58 52H65"/>
</g>
<g class="only-1">
<rect class="fl-dark" x="-2.5" y="-1.2" width="5" height="2.4" rx="1"><animateMotion dur="3.3s" begin="0s" repeatCount="indefinite" path="M2 52L22 54"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="3.3s" begin="0s" repeatCount="indefinite"/></rect><rect class="fl-warm" x="-2.5" y="-1.2" width="5" height="2.4" rx="1"><animateMotion dur="3.3s" begin="-1.1s" repeatCount="indefinite" path="M2 53L23 59"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="3.3s" begin="-1.1s" repeatCount="indefinite"/></rect><rect class="fl-dark" x="-2.5" y="-1.2" width="5" height="2.4" rx="1"><animateMotion dur="3.3s" begin="-2.2s" repeatCount="indefinite" path="M2 54L24 64"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="3.3s" begin="-2.2s" repeatCount="indefinite"/></rect>
<circle class="fl-dark" r="1.2"><animateMotion dur="2.1s" begin="0s" repeatCount="indefinite" path="M43 52Q46 66 48 86"/></circle><circle class="fl-dark" r="1.2"><animateMotion dur="2.1s" begin="-0.7s" repeatCount="indefinite" path="M45 52Q48 66 49 86"/></circle><circle class="fl-dark" r="1.2"><animateMotion dur="2.1s" begin="-1.4s" repeatCount="indefinite" path="M47 52Q50 66 50 86"/></circle>
</g>
<!-- שיקוע ראשוני -->
<g class="hl-1">
<path class="body" d="M66 40V98H71L75 108H85L89 98H122V40"/>
<path class="fl-cold-soft" d="M67 46H121V97H88.5L84.4 107H75.6L71.5 97H67z"/><path class="fl-line" opacity=".36" d="M67 46H121V97H88.5L84.4 107H75.6L71.5 97H67z"/>
<path class="fl-dark" opacity=".8" d="M67 92.5H121V97H88.5L84.4 107H75.6L71.5 97H67z"/>
<ellipse class="fl-warm" cx="74" cy="46.3" rx="4" ry="1.7"/><ellipse class="fl-warm" cx="86" cy="46.3" rx="3" ry="1.7"/><ellipse class="fl-warm" cx="98" cy="46.3" rx="4" ry="1.7"/><ellipse class="fl-warm" cx="112" cy="46.3" rx="3" ry="1.7"/>
<g><animateTransform attributeName="transform" type="translate" values="0 0;-22 0;0 0" keyTimes="0;.6;1" calcMode="spline" keySplines=".4 0 .6 1;.4 0 .6 1" dur="7s" repeatCount="indefinite"/>
<path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M106 36H122"/>
<path class="st-ink fl-none" stroke-width="1.3" d="M114 36V90"/>
<path class="st-ink fl-none" stroke-width="2.2" stroke-linecap="round" d="M116 87L112 96M116 43L112 49"/>
</g>
<path class="pipe st-line" style="stroke-width:5" d="M122 52H131"/><path class="flow" d="M122 52H131"/>
</g>
<g class="hl-1 hl-4"><path class="pipe st-dark" style="stroke-width:5" d="M80 109V137"/><path class="flow slow" d="M80 109V137"/></g>
<g class="only-1">
<circle class="fl-dark" r="1.5"><animateMotion dur="4s" begin="0s" repeatCount="indefinite" path="M78 52V91"/></circle><circle class="fl-dark" r="1.5"><animateMotion dur="4s" begin="-0.8s" repeatCount="indefinite" path="M90 52V91"/></circle><circle class="fl-dark" r="1.5"><animateMotion dur="4s" begin="-1.7s" repeatCount="indefinite" path="M100 52V91"/></circle><circle class="fl-dark" r="1.5"><animateMotion dur="4s" begin="-2.5s" repeatCount="indefinite" path="M108 52V91"/></circle><circle class="fl-dark" r="1.5"><animateMotion dur="4s" begin="-3.3s" repeatCount="indefinite" path="M95 52V91"/></circle>
<circle class="fl-warm" r="1.5"><animateMotion dur="3s" begin="0s" repeatCount="indefinite" path="M84 84V48"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="3s" begin="-1.2s" repeatCount="indefinite" path="M104 84V48"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="3s" begin="-2s" repeatCount="indefinite" path="M93 84V48"/></circle>
</g>
<!-- אוורור -->
<g class="hl-2">
<path class="body" d="M132 40V104H192V40"/>
<rect class="fl-cold-soft" x="133" y="46" width="58" height="57"/><rect class="fl-line" opacity=".2" x="133" y="46" width="58" height="57"/>
<rect class="fl-line" x="122" y="29" width="9" height="11"/>
<circle class="body" cx="126.5" cy="23" r="7"/>
<g class="spin fast"><path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M126.5 18v10M121.5 23h10"/></g>
<path class="wire st-line" d="M133.5 23H138V99H187"/><path class="flow" style="stroke-width:1.4" d="M133.5 23H138V99H187"/>
<rect class="fl-dark" x="141" y="96" width="6" height="3" rx="1"/><rect class="fl-dark" x="151" y="96" width="6" height="3" rx="1"/><rect class="fl-dark" x="169" y="96" width="6" height="3" rx="1"/><rect class="fl-dark" x="179" y="96" width="6" height="3" rx="1"/>
<circle fill="#fff" class="st-cold" stroke-width="1" r="1.6"><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite" path="M144 94q-3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="2.1"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M144 94q3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="1.6"><animateMotion dur="2.4s" begin="-0.55s" repeatCount="indefinite" path="M154 94q-3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="2.1"><animateMotion dur="2.4s" begin="-1.75s" repeatCount="indefinite" path="M154 94q3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="1.6"><animateMotion dur="2.4s" begin="-1.1s" repeatCount="indefinite" path="M172 94q-3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="2.1"><animateMotion dur="2.4s" begin="-2.3s" repeatCount="indefinite" path="M172 94q3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="1.6"><animateMotion dur="2.4s" begin="-1.6500000000000001s" repeatCount="indefinite" path="M182 94q-3 -12 0 -23t0 -23"/></circle><circle fill="#fff" class="st-cold" stroke-width="1" r="2.1"><animateMotion dur="2.4s" begin="-2.85s" repeatCount="indefinite" path="M182 94q3 -12 0 -23t0 -23"/></circle>
<g transform="rotate(0 147 62)"><rect class="fl-green pulse d1" x="143.5" y="60.2" width="7" height="3.6" rx="1.8"/></g><g transform="rotate(37 166 56)"><rect class="fl-green pulse d2" x="162.5" y="54.2" width="7" height="3.6" rx="1.8"/></g><g transform="rotate(74 180 70)"><rect class="fl-green pulse d3" x="176.5" y="68.2" width="7" height="3.6" rx="1.8"/></g><g transform="rotate(111 160 80)"><rect class="fl-green pulse d4" x="156.5" y="78.2" width="7" height="3.6" rx="1.8"/></g><g transform="rotate(148 176 88)"><rect class="fl-green pulse d1" x="172.5" y="86.2" width="7" height="3.6" rx="1.8"/></g><g transform="rotate(185 148 84)"><rect class="fl-green pulse d2" x="144.5" y="82.2" width="7" height="3.6" rx="1.8"/></g>
<path class="pipe st-line" style="stroke-width:5" d="M192 52H201"/><path class="flow" d="M192 52H201"/>
</g>
<g class="only-2">
<circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M138 56L147 62"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-0.9s" repeatCount="indefinite" path="M155 69L147 62"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-0.9s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-0.3s" repeatCount="indefinite" path="M157 50L166 56"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-0.3s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-1.2s" repeatCount="indefinite" path="M174 63L166 56"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-1.2s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-0.6s" repeatCount="indefinite" path="M171 64L180 70"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-0.6s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-1.5s" repeatCount="indefinite" path="M188 77L180 70"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-1.5s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-0.8999999999999999s" repeatCount="indefinite" path="M151 74L160 80"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-0.8999999999999999s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-1.7999999999999998s" repeatCount="indefinite" path="M168 87L160 80"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-1.7999999999999998s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-1.2s" repeatCount="indefinite" path="M167 82L176 88"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-1.2s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-2.1s" repeatCount="indefinite" path="M184 95L176 88"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-2.1s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-1.5s" repeatCount="indefinite" path="M139 78L148 84"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-1.5s" repeatCount="indefinite"/></circle><circle class="fl-warm" r="1.5"><animateMotion dur="1.8s" begin="-2.4s" repeatCount="indefinite" path="M156 91L148 84"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.75;1" dur="1.8s" begin="-2.4s" repeatCount="indefinite"/></circle>
</g>
<!-- שיקוע שני -->
<g class="hl-3">
<path class="body" d="M202 40V92L226 108H234L258 92V40"/>
<path class="fl-cold-soft" d="M203 46H257V91.5L233.7 107H226.3L203 91.5z"/>
<path class="fl-green" opacity=".22" d="M203 78H257V91.5L233.7 107H226.3L203 91.5z"/>
<path class="fl-green" opacity=".85" d="M208 94.5H252L233.7 107H226.3z"/>
<g class="fl-green"><circle r="2"/><circle cx="2.4" cy="1" r="1.6"/><circle cx="-1.6" cy="1.8" r="1.5"/><animateMotion dur="4.5s" begin="0s" repeatCount="indefinite" path="M212 52V90"/></g><g class="fl-green"><circle r="2"/><circle cx="2.4" cy="1" r="1.6"/><circle cx="-1.6" cy="1.8" r="1.5"/><animateMotion dur="4.5s" begin="-1.5s" repeatCount="indefinite" path="M224 52V96"/></g><g class="fl-green"><circle r="2"/><circle cx="2.4" cy="1" r="1.6"/><circle cx="-1.6" cy="1.8" r="1.5"/><animateMotion dur="4.5s" begin="-3s" repeatCount="indefinite" path="M236 52V96"/></g><g class="fl-green"><circle r="2"/><circle cx="2.4" cy="1" r="1.6"/><circle cx="-1.6" cy="1.8" r="1.5"/><animateMotion dur="4.5s" begin="-0.8s" repeatCount="indefinite" path="M247 52V90"/></g><g class="fl-green"><circle r="2"/><circle cx="2.4" cy="1" r="1.6"/><circle cx="-1.6" cy="1.8" r="1.5"/><animateMotion dur="4.5s" begin="-3.8s" repeatCount="indefinite" path="M230 52V98"/></g>
<path class="pipe st-green" style="stroke-width:5" d="M230 109V124H162V105"/><path class="flow" d="M230 109V124H162V105"/>
</g>
<g class="hl-4"><path class="pipe st-dark" style="stroke-width:5" d="M230 126V178H99"/><path class="flow slow" d="M230 126V178H99"/></g>
<!-- סינון, חיטוי ושדה -->
<g class="hl-3 hl-4"><path class="pipe st-cold" style="stroke-width:5" d="M258 52H267"/><path class="flow" d="M258 52H267"/></g>
<g class="hl-4">
<rect class="body" x="268" y="40" width="34" height="52" rx="2"/>
<rect class="fl-cold-soft" x="269" y="46" width="32" height="45"/>
<rect class="fl-warm" opacity=".55" x="269" y="52" width="32" height="16"/>
<path class="st-ink fl-none" stroke-width="1" stroke-dasharray="1 3" stroke-linecap="round" d="M271 56H300M272.5 60H300M271 64H300"/>
<path class="thin st-ink" style="stroke-width:1" d="M269 72H301"/>
<g class="fade"><path class="st-violet fl-none" stroke-width="7" stroke-linecap="round" opacity=".35" d="M276 82H294"/></g>
<path class="st-violet fl-none" stroke-width="3" stroke-linecap="round" d="M276 82H294"/>
<path class="pipe st-cold" style="stroke-width:4" d="M297 93V136H250"/><path class="flow" d="M297 93V136H250"/>
<path class="fl-soft" d="M240 197H316V212H240z"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M240 197H316"/>
<path class="wire st-green" style="stroke-width:1.8" d="M254 197V181M254 190q-5-1-6-6M254 187q5-1 6-6"/><path class="wire st-green" style="stroke-width:1.8" d="M268 197V181M268 190q-5-1-6-6M268 187q5-1 6-6"/><path class="wire st-green" style="stroke-width:1.8" d="M282 197V181M282 190q-5-1-6-6M282 187q5-1 6-6"/><path class="wire st-green" style="stroke-width:1.8" d="M296 197V181M296 190q-5-1-6-6M296 187q5-1 6-6"/><path class="wire st-green" style="stroke-width:1.8" d="M308 197V181M308 190q-5-1-6-6M308 187q5-1 6-6"/>
<circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="0s" repeatCount="indefinite" path="M254 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-0.7s" repeatCount="indefinite" path="M254 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-0.37s" repeatCount="indefinite" path="M268 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-1.0699999999999998s" repeatCount="indefinite" path="M268 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-0.74s" repeatCount="indefinite" path="M282 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-1.44s" repeatCount="indefinite" path="M282 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-1.1099999999999999s" repeatCount="indefinite" path="M296 140V178"/></circle><circle class="fl-cold" r="1.5"><animateMotion dur="1.4s" begin="-1.8099999999999998s" repeatCount="indefinite" path="M296 140V178"/></circle>
</g>
<!-- מעכל וגנרטור -->
<g class="hl-4">
<path class="body" d="M34 150A32 14 0 0 1 98 150V204H34z"/>
<rect class="fl-dark" opacity=".7" x="35" y="166" width="62" height="37"/>
<path class="fl-warm" opacity=".3" d="M35 165V150A31 13 0 0 1 97 150V165z"/>
<circle class="fl-warm" r="1.8"><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite" path="M46 198V160"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur="2.2s" begin="-1s" repeatCount="indefinite" path="M58 198V160"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur="2.2s" begin="-0.4s" repeatCount="indefinite" path="M70 198V160"/></circle><circle class="fl-warm" r="1.8"><animateMotion dur="2.2s" begin="-1.6s" repeatCount="indefinite" path="M84 198V160"/></circle>
<path class="wire st-warm dash" style="stroke-width:3" d="M90 141V131H136V137"/>
<rect class="body" x="116" y="138" width="40" height="27" rx="3"/>
<circle class="fl-dark st-ink" stroke-width="1.5" cx="129" cy="151.5" r="8"/>
<g class="spin fast"><path fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" d="M129 146v11M123.5 151.5h11"/></g>
<g class="blink"><path class="fl-elec st-ink" stroke-width="1" stroke-linejoin="round" d="M148 142l-6 9h4l-2 8 7-10h-4l2-7z"/></g>
</g>
<g class="only-1"><text x="38" y="18">מסננת</text><text x="92" y="18">שיקוע</text>
</g>
<g class="only-2"><text x="184" y="18">אוויר לחיידקים</text></g>
<g class="only-3"><text x="232" y="18">מים צלולים</text><path class="arrow st-ink" style="stroke-width:1.5" d="M232 24V43" marker-end="url(#wastewater-a)"/>
<text x="197" y="145">בוצה חוזרת</text></g>
<g class="only-4"><text x="276" y="18">סינון וחיטוי</text><text x="264" y="120">להשקיה</text><text x="172" y="200">ביוגז מפיק חשמל</text></g>
`;
