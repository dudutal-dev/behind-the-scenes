// המוח: 1 ארבע אונות בקליפה ופס התנועה · 2 מבנים עמוקים: תלמוס, היפוקמפוס, מוח קטן וגזע המוח · 3 שתי מחציות וכפיס המוח · 4 רשת: מראה כוס, זיהוי, החלטה ופקודה ליד
export default `
<defs>
<clipPath id="brain-c"><path d="M22 92C18 60 40 30 80 26C110 20 150 22 178 36C204 48 220 70 220 96C219 114 210 128 196 133C182 138 168 136 158 134C140 150 110 156 86 150C70 146 60 140 56 128C52 120 44 118 36 116C26 112 22 104 22 92Z"/></clipPath>
<marker id="brain-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- גזע המוח וחוט השדרה -->
<g class="hl-2 hl-4">
<path class="body" d="M140 128C146 146 147 170 148 212H162C161 186 162 160 168 136Z"/>
<path class="fl-soft st-ink" stroke-width="1.5" d="M141 138C150 134 160 136 166 140C166 150 162 158 152 160C145 159 142 152 141 138Z"/>
</g>
<!-- המוח הקטן -->
<g class="hl-2 hl-4">
<path class="body" d="M156 138C168 128 196 128 208 138C216 146 212 162 198 168C182 174 162 170 156 160C152 152 152 144 156 138Z"/>
<path class="thin" style="stroke-width:1.1" d="M160 146C176 140 196 140 210 146M158 153C176 148 196 149 211 154M160 160C176 157 192 158 206 162M166 166C178 165 190 166 198 167"/>
</g>
<!-- קליפת המוח: אונות -->
<path class="body" d="M22 92C18 60 40 30 80 26C110 20 150 22 178 36C204 48 220 70 220 96C219 114 210 128 196 133C182 138 168 136 158 134C140 150 110 156 86 150C70 146 60 140 56 128C52 120 44 118 36 116C26 112 22 104 22 92Z"/>
<g clip-path="url(#brain-c)">
<g class="hl-1 hl-3 hl-4">
<path class="fl-violet" fill-opacity=".26" d="M0 0H121L120 23C116 48 110 76 102 106L100 106C78 112 56 121 56 121L0 150Z"/>
<path class="fl-green" fill-opacity=".26" d="M121 0H183L182 39L177 104C168 101 156 99 140 100C120 102 110 104 102 106C110 76 116 48 120 23Z"/>
<path class="fl-warm" fill-opacity=".3" d="M0 150L56 121C78 112 100 106 140 100C156 99 168 101 177 104L176 220H0Z"/>
<path class="fl-cold" fill-opacity=".28" d="M183 0H320V220H176L177 104L182 39Z"/>
</g>
<path class="thin" style="stroke-width:1.1;stroke-opacity:.7" d="M40 64C52 58 62 62 72 56M34 84C48 80 60 86 76 80M50 104C60 98 74 100 86 94M78 40C86 50 92 44 100 54M132 34C140 44 150 40 160 50M128 62C140 70 152 64 166 72M136 84C150 90 160 84 172 92M190 60C196 68 200 76 206 80M186 112C194 108 200 114 206 110M80 132C96 128 110 132 126 126M100 144C114 142 126 144 140 138"/>
</g>
<path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M22 92C18 60 40 30 80 26C110 20 150 22 178 36C204 48 220 70 220 96C219 114 210 128 196 133C182 138 168 136 158 134C140 150 110 156 86 150C70 146 60 140 56 128C52 120 44 118 36 116C26 112 22 104 22 92Z"/>
<path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M120 23C116 48 110 76 102 106"/>
<path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M56 121C78 112 100 106 140 100C156 99 168 101 178 105"/>
<path class="st-line fl-none" stroke-width="1.2" stroke-dasharray="3 3" d="M182 39L176 106"/>
<!-- פס התנועה -->
<g class="hl-1 hl-4"><path class="wire st-hot" style="stroke-width:5;stroke-opacity:.55" d="M113 23C109 48 103 76 95 107"/><path class="flow slow" d="M113 23C109 48 103 76 95 107"/></g>
<!-- שלב 1: כל אונה עובדת על חלק אחר -->
<g class="only-1">
<circle class="fl-violet" cx="58" cy="70" r="9" opacity="0"><animate attributeName="opacity" values="0;.6;0" dur="2.4s" repeatCount="indefinite"/></circle>
<circle class="fl-green" cx="152" cy="64" r="9" opacity="0"><animate attributeName="opacity" values="0;.6;0" dur="2.4s" begin="-.6s" repeatCount="indefinite"/></circle>
<circle class="fl-warm" cx="114" cy="128" r="9" opacity="0"><animate attributeName="opacity" values="0;.6;0" dur="2.4s" begin="-1.2s" repeatCount="indefinite"/></circle>
<circle class="fl-cold" cx="199" cy="104" r="8" opacity="0"><animate attributeName="opacity" values="0;.6;0" dur="2.4s" begin="-1.8s" repeatCount="indefinite"/></circle>
<text x="58" y="78">מצחית</text>
<text x="152" y="72">קודקודית</text>
<text x="114" y="146">רקתית</text>
<text x="199" y="94">עורפית</text>
</g>
<!-- מבנים עמוקים (נראים כמו מבעד לקליפה) -->
<g class="hl-2">
<ellipse class="fl-elec st-ink" stroke-width="1.5" stroke-dasharray="3 2" cx="130" cy="90" rx="13" ry="8"/>
<path class="wire st-ink" style="stroke-width:7" d="M80 134C94 132 110 128 122 122C134 116 142 110 147 102"/>
<path class="wire st-hot" style="stroke-width:4.6" d="M80 134C94 132 110 128 122 122C134 116 142 110 147 102"/>
<ellipse class="fl-hot st-ink" stroke-width="1.5" cx="73" cy="134" rx="6" ry="4.5"/>
</g>
<!-- שלב 2: ממסר בתלמוס, דופק ונשימה בגזע המוח -->
<g class="only-2">
<path class="wire st-elec dash" style="stroke-width:1.8" d="M155 205L152 150L130 98"/>
<path class="wire st-elec dash" style="stroke-width:1.8" d="M140 86L194 100M126 82L156 50M117 88L60 70"/>
<circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M155 205L152 150L130 92L194 100"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="2.4s" begin="-0.8s" repeatCount="indefinite" path="M155 205L152 150L130 92L156 50"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.6"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M155 205L152 150L130 92L60 70"/></circle>
<circle class="ring st-hot" cx="152" cy="148" r="11"/>
<text x="174" y="80">תלמוס</text>
<path class="thin" d="M96 136L90 163"/><text x="90" y="174">היפוקמפוס</text>
<text x="252" y="153">המוח הקטן</text><path class="thin" d="M216 150H226"/>
<text x="196" y="200">גזע המוח</text><path class="thin" d="M165 196H172"/>
</g>
<!-- שלב 3: כפיס המוח (מבעד לקליפה) -->
<g class="only-3">
<path class="wire st-ink" style="stroke-width:7.5" d="M86 86C94 66 150 60 168 78C174 86 168 94 160 92"/>
<path class="wire st-elec" style="stroke-width:5" d="M86 86C94 66 150 60 168 78C174 86 168 94 160 92"/>
</g>
<g class="only-3">
<circle class="fl-hot st-ink" stroke-width="1" cx="72" cy="106" r="4.2"/><circle class="fl-hot st-ink" stroke-width="1" cx="158" cy="113" r="4.2"/>
<circle class="ring st-hot" cx="72" cy="106" r="9"/><circle class="ring st-hot d2" cx="158" cy="113" r="9"/>
<text x="118" y="15">מחצית שמאל, מהצד</text>
</g>
<!-- תצוגה מלמעלה: שתי מחציות וגשר -->
<g class="hl-3">
<path class="body" d="M272 12C252 12 240 32 240 54C240 78 252 96 272 96Z"/>
<path class="body" d="M278 12C298 12 310 32 310 54C310 78 298 96 278 96Z"/>
<path class="thin" style="stroke-width:1" d="M248 30C256 34 262 30 268 36M244 52C252 56 260 50 268 56M248 76C256 72 262 78 268 72M302 30C294 34 288 30 282 36M306 52C298 56 290 50 282 56M302 76C294 72 288 78 282 72"/>
<rect class="fl-elec st-ink" stroke-width="1.3" stroke-dasharray="3 2" x="260" y="44" width="30" height="16" rx="5"/>
<path class="flow" d="M262 49H288"/><path class="flow rev" d="M262 55H288"/>
<text x="255" y="110">שמאל</text><text x="295" y="110">ימין</text>
</g>
<g class="only-3"><text x="275" y="128">כפיס המוח</text><path class="thin" d="M275 117V64"/></g>
<!-- שלב 4: עין, כוס ויד -->
<g class="hl-4">
<path class="body" style="stroke-width:1.6" d="M14 133C20 125 32 125 38 133C32 141 20 141 14 133Z"/><circle class="fl-ink" cx="20" cy="133" r="3.4"/>
<path class="body" d="M22 184H42V204C42 207 40 209 37 209H27C24 209 22 207 22 204Z"/><path class="fl-none st-ink" stroke-width="2" d="M22 189C15 189 15 200 22 200"/>
<path class="fl-cold" fill-opacity=".5" d="M24 189H40V192H24Z"/>
<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-14 -2;-14 -2;0 0" keyTimes="0;0.84;0.9;.97;1" dur="7s" repeatCount="indefinite"/>
<rect class="body" x="76" y="189" width="64" height="12" rx="6"/>
<path class="body" style="stroke-width:1.4" d="M57 189.5H70V193.5H57A2 2 0 0 1 57 189.5ZM55 194H70V198H55A2 2 0 0 1 55 194ZM57 198.5H70V202.5H57A2 2 0 0 1 57 198.5Z"/>
<path class="body" d="M82 186C74 185 68 186 66 189V201C68 205 74 206 82 205Z"/>
<path class="body" style="stroke-width:1.4" d="M72 188L63 182.5A2.2 2.2 0 0 1 65.5 179L76 185Z"/>
<path class="wire st-hot" style="stroke-width:1.4;stroke-opacity:.7" d="M138 195H72"/>
</g>
</g>
<g class="only-4"><path class="wire st-elec" style="stroke-width:1.8;stroke-opacity:.85" stroke-dasharray="2 3" d="M30 133L128 92L198 100L146 128L160 58L56 70L112 36L100 100L151 146L155 198L80 195"/></g>
<g class="hl-4">
<circle class="fl-cold" cx="198" cy="100" r="10" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.18;0.22;0.3;0.36;1" dur="7s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="146" cy="128" r="10" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.25;0.29;0.37;0.43;1" dur="7s" repeatCount="indefinite"/></circle><circle class="fl-green" cx="160" cy="58" r="10" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.33;0.37;0.45;0.51;1" dur="7s" repeatCount="indefinite"/></circle><circle class="fl-violet" cx="56" cy="70" r="11" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.45;0.49;0.57;0.63;1" dur="7s" repeatCount="indefinite"/></circle><circle class="fl-hot" cx="112" cy="36" r="10" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.52;0.56;0.64;0.7;1" dur="7s" repeatCount="indefinite"/></circle><circle class="fl-elec" cx="151" cy="146" r="9" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;0.68;0.72;0.8;0.86;1" dur="7s" repeatCount="indefinite"/></circle>
<circle class="fl-elec st-ink" stroke-width="1" r="3.6"><animateMotion dur="7s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0.14;0.24;0.32;0.42;0.56;0.65;0.73;0.83;0.9;1;1" keyTimes="0;0.12;0.2;0.27;0.35;0.47;0.54;0.62;0.7;0.75;0.84;1" path="M30 133L128 92L198 100L146 128L160 58L56 70L112 36L100 100L151 146L155 198L80 195"/></circle>
</g>
<g class="only-4">
<circle class="fl-panel st-ink" stroke-width="1.2" cx="208" cy="88" r="6"/><text class="sm" style="font-weight:700" x="208" y="91">1</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="134" cy="138" r="6"/><text class="sm" style="font-weight:700" x="134" y="141">2</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="170" cy="50" r="6"/><text class="sm" style="font-weight:700" x="170" y="53">2</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="44" cy="60" r="6"/><text class="sm" style="font-weight:700" x="44" y="63">3</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="124" cy="48" r="6"/><text class="sm" style="font-weight:700" x="124" y="51">4</text>
<circle class="fl-panel st-ink" stroke-width="1.2" cx="304" cy="146" r="6"/><text class="sm" style="font-weight:700" x="304" y="149">1</text><text style="text-anchor:start" x="294" y="150">רואה</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="304" cy="163" r="6"/><text class="sm" style="font-weight:700" x="304" y="166">2</text><text style="text-anchor:start" x="294" y="167">מזהה ומאתר</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="304" cy="180" r="6"/><text class="sm" style="font-weight:700" x="304" y="183">3</text><text style="text-anchor:start" x="294" y="184">מחליט</text><circle class="fl-panel st-ink" stroke-width="1.2" cx="304" cy="197" r="6"/><text class="sm" style="font-weight:700" x="304" y="200">4</text><text style="text-anchor:start" x="294" y="201">שולח פקודה</text>
</g>
`;
