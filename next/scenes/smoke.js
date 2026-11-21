// גלאי עשן: 1 תא חשוך עם פתחים מפותלים · 2 הקרן חולפת על פני החיישן · 3 עשן מפזר את האור אל החיישן · 4 המעגל מפעיל צופר, וציוץ סוללה
export default `
<defs>
  <marker id="smoke-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
</defs>
<!-- תקרה -->
<rect class="fl-soft" x="0" y="0" width="320" height="10"/>
<path class="thin" style="stroke-width:1" d="M8 2l-6 6M20 2l-6 6M32 2l-6 6M44 2l-6 6M56 2l-6 6M68 2l-6 6M80 2l-6 6M92 2l-6 6M104 2l-6 6M116 2l-6 6M128 2l-6 6M140 2l-6 6M152 2l-6 6M164 2l-6 6M176 2l-6 6M188 2l-6 6M200 2l-6 6M212 2l-6 6M224 2l-6 6M236 2l-6 6M248 2l-6 6M260 2l-6 6M272 2l-6 6M284 2l-6 6M296 2l-6 6M308 2l-6 6"/>
<path class="wire st-ink" style="stroke-width:2" d="M0 10H320"/>
<!-- גוף הגלאי בחתך, עם חריצי אוורור בתחתית -->
<path class="body" d="M14 10H306V116Q306 150 272 150H48Q14 150 14 116Z"/>
<path class="fl-bg" d="M45 147h10v6h-10zM73 147h10v6h-10zM101 147h10v6h-10zM129 147h10v6h-10z"/>
<!-- התא האופטי החשוך -->
<circle class="fl-dark" cx="92" cy="80" r="54"/>
<circle fill="#000" fill-opacity=".55" cx="92" cy="80" r="54"/>
<path class="wire st-ink" style="stroke-width:3;stroke-linecap:butt" d="M126.3 121.7A54 54 0 0 1 110.9 130.6M100.9 133.3A54 54 0 0 1 83.1 133.3M73.1 130.6A54 54 0 0 1 57.7 121.7M50.3 114.3A54 54 0 0 1 50.3 45.7M57.7 38.3A54 54 0 0 1 73.1 29.4M83.1 26.7A54 54 0 0 1 100.9 26.7M110.9 29.4A54 54 0 0 1 126.3 38.3M133.7 45.7A54 54 0 0 1 133.7 114.3"/>
<path class="wire st-line" style="stroke-width:3" d="M126.8 105.3L127.4 115.4L117.3 114.8M109.5 119.3L104.9 128.3L96.5 122.8M87.5 122.8L79.1 128.3L74.5 119.3M66.7 114.8L56.6 115.4L57.2 105.3M57.2 54.7L56.6 44.6L66.7 45.2M74.5 40.7L79.1 31.7L87.5 37.2M96.5 37.2L104.9 31.7L109.5 40.7M117.3 45.2L127.4 44.6L126.8 54.7"/>
<!-- מלכודת אור ומחיצה בין הנורית לחיישן -->
<path class="wire st-line" style="stroke-width:3" d="M132 72L125 80L132 88M76 98L85 88"/>
<!-- הקרן -->
<g class="hl-2 hl-3 hl-4">
  <path class="pipe st-warm" style="stroke-width:5;stroke-opacity:.6;stroke-linecap:butt" d="M60 80H125"/>
  <path class="flow" d="M60 80H125"/>
</g>
<!-- נורית -->
<rect class="body" style="stroke-width:1.5" x="39" y="74" width="11" height="12" rx="2"/>
<path class="fl-hot st-ink" stroke-width="1.2" stroke-linejoin="round" d="M50 75.5H55Q62 80 55 84.5H50Z"/>
<!-- חיישן אור, מוצב בזווית -->
<g transform="translate(108 107.7) rotate(60) scale(1.3)">
  <rect class="body" style="stroke-width:1.5" x="-4" y="-4.5" width="8" height="9" rx="1.5"/>
  <path class="fl-cold-soft st-ink" stroke-width="1.2" stroke-linejoin="round" d="M-4 -4Q-9.5 0 -4 4Z"/>
  <g class="from-3"><path class="fl-warm st-ink fade" stroke-width="1.2" stroke-linejoin="round" d="M-4 -4Q-9.5 0 -4 4Z"/></g>
</g>
<!-- מעגל, צופר וסוללה -->
<g class="hl-4">
  <path class="wire st-elec" style="stroke-width:2" d="M110.6 112.2L120.5 129.4H158V42H176"/>
  <path class="wire st-elec" style="stroke-width:2" d="M216 42H258V58"/>
  <path class="thin st-ink" d="M180 96V54M200 96V54"/>
  <path class="thin st-ink" d="M184 30v-4M192 30v-4M200 30v-4M208 30v-4"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="176" y="30" width="40" height="24" rx="2"/>
  <circle fill="#fff" fill-opacity=".5" cx="182" cy="36" r="1.6"/>
  <circle class="body" cx="258" cy="84" r="26"/>
  <circle class="fl-soft st-ink" stroke-width="1.5" cx="258" cy="84" r="17"/>
  <circle class="fl-dark st-ink" stroke-width="1.5" cx="258" cy="84" r="5"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="176" y="96" width="8" height="5"/><rect class="fl-line st-ink" stroke-width="1.2" x="196" y="96" width="8" height="5"/>
  <rect class="body" x="168" y="100" width="44" height="32" rx="3"/>
  <rect class="thin" x="173" y="105" width="34" height="22" rx="1.5"/>
  <rect class="fl-hot blink" x="174.5" y="106.5" width="7" height="19" rx="1"/>
</g>

<!-- שלב 1: אוויר מתפתל פנימה, אור מבחוץ נעצר -->
<g class="only-1">
  <path class="wire st-cold dash" style="stroke-width:1.8" d="M106 164L106.5 135Q110 129 112 122Q112 110 106 100"/>
  <path class="wire st-cold dash" style="stroke-width:1.8" d="M78 164L77.5 135Q74 129 72 122Q72 110 78 100"/>
  <path class="wire st-elec dash" style="stroke-width:2" d="M38 174L52.5 122"/>
  <path class="wire st-hot" style="stroke-width:2" d="M49 117l7 7M56 117l-7 7"/>
  <text x="212" y="176">תא חשוך ומפותל</text>
  <text x="212" y="192">אוויר נכנס, אור לא</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <path class="arrow st-warm" style="stroke-width:2" d="M118 70H129" marker-end="url(#smoke-a)"/>
  <text x="160" y="178">הקרן חולפת על פני החיישן</text>
  <text x="160" y="194">באוויר נקי: חושך מוחלט</text>
</g>
<!-- שלב 3: עשן נכנס ומפזר את הקרן -->
<g class="from-3">
  <circle class="fl-line bob" cx="48" cy="188" r="8" opacity=".35"/>
  <circle class="fl-line bob d2" cx="78" cy="196" r="10" opacity=".3"/>
  <circle class="fl-line bob d3" cx="112" cy="186" r="9" opacity=".32"/>
  <circle class="fl-line bob d1" cx="140" cy="198" r="7" opacity=".3"/>
  <circle class="fl-line bob d4" cx="96" cy="170" r="6" opacity=".3"/>
  <circle class="fl-line" r="2.6" opacity=".9"><animateMotion dur="6s" begin="-0s" repeatCount="indefinite" path="M96 214C92 195 108 172 106 150L106.5 135Q110 129 112 122Q112 100 103 82"/></circle>
  <circle class="fl-line" r="3.2" opacity=".9"><animateMotion dur="6s" begin="-2s" repeatCount="indefinite" path="M96 214C92 195 108 172 106 150L106.5 135Q110 129 112 122Q112 100 103 82"/></circle>
  <circle class="fl-line" r="2.2" opacity=".9"><animateMotion dur="6s" begin="-4s" repeatCount="indefinite" path="M96 214C92 195 108 172 106 150L106.5 135Q110 129 112 122Q112 100 103 82"/></circle>
  <circle class="fl-line" r="2.6" opacity=".9"><animateMotion dur="6s" begin="-0.7s" repeatCount="indefinite" path="M60 214C70 192 80 170 78 150L77.5 135Q74 129 72 122Q72 100 86 82"/></circle>
  <circle class="fl-line" r="3.2" opacity=".9"><animateMotion dur="6s" begin="-2.7s" repeatCount="indefinite" path="M60 214C70 192 80 170 78 150L77.5 135Q74 129 72 122Q72 100 86 82"/></circle>
  <circle class="fl-line" r="2.2" opacity=".9"><animateMotion dur="6s" begin="-4.7s" repeatCount="indefinite" path="M60 214C70 192 80 170 78 150L77.5 135Q74 129 72 122Q72 100 86 82"/></circle>
  <circle class="fl-line" r="2.6" opacity=".9"><animateMotion dur="6s" begin="-1.4s" repeatCount="indefinite" path="M132 214C140 190 130 170 134 150L133 124Q134 112 129 104Q122 90 114 83"/></circle>
  <circle class="fl-line" r="3.2" opacity=".9"><animateMotion dur="6s" begin="-3.4s" repeatCount="indefinite" path="M132 214C140 190 130 170 134 150L133 124Q134 112 129 104Q122 90 114 83"/></circle>
  <circle class="fl-line" r="2.2" opacity=".9"><animateMotion dur="6s" begin="-5.4s" repeatCount="indefinite" path="M132 214C140 190 130 170 134 150L133 124Q134 112 129 104Q122 90 114 83"/></circle>
  <circle class="fl-line" cx="86" cy="81" r="2.4"/><circle class="fl-line" cx="96" cy="78" r="2.6"/><circle class="fl-line" cx="103" cy="82" r="2.4"/><circle class="fl-line" cx="113" cy="79" r="2.2"/>
  <path class="wire st-warm dash" style="stroke-width:1.3;stroke-dasharray:2 4" d="M96 78L90 62M96 78L103 60M86 81L74 70M113 79L120 66M86 81L84 94M113 79L122 90"/>
  <path class="wire st-warm dash" style="stroke-width:2.4;stroke-dasharray:3 3" d="M103 82L102.2 95"/>
</g>
<g class="only-3">
  <text x="234" y="176">עשן מפזר את האור</text>
  <text x="234" y="192">חלק מגיע אל החיישן</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <path class="flow" d="M110.6 112.2L120.5 129.4H158V42H176"/>
  <path class="flow" d="M216 42H258V58"/>
  <circle class="ring st-hot" cx="258" cy="84" r="40"/>
  <circle class="ring st-hot d2" cx="258" cy="84" r="40"/>
  <circle class="ring st-hot d4" cx="258" cy="84" r="40"/>
  <text x="234" y="176">צופר: כ־85 דציבלים</text>
  <text x="234" y="192">סוללה חלשה: ציוץ קצר</text>
</g>
`;
