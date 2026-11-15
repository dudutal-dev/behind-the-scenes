// גייזר בחתך: 1 מי גשם מחלחלים אל סלע שמחומם ממאגמה · 2 עמוד המים לוחץ ומונע רתיחה · 3 מעט רותח, הלחץ יורד והעמוד פורץ כקיטור · 4 הצנרת מתמלאת ומתחממת מחדש
export default `
<defs>
  <marker id="geyser-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="geyser-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <linearGradient id="geyser-t" x1="0" y1="56" x2="0" y2="186" gradientUnits="userSpaceOnUse">
    <stop offset="0" style="stop-color:var(--s-cold)"/><stop offset=".45" style="stop-color:var(--s-warm)"/><stop offset="1" style="stop-color:var(--s-hot)"/>
  </linearGradient>
  <clipPath id="geyser-e"><rect x="120" y="50" width="100" height="140"><animate attributeName="height" values="136;12;12;136" keyTimes="0;.8;.95;1" dur="5s" repeatCount="indefinite"/></rect></clipPath>
  <clipPath id="geyser-c"><rect x="120" y="50" width="100" height="140"/></clipPath>
</defs>

<!-- סלע, פני השטח והתל סביב הפתח -->
<path class="fl-soft" d="M0 64H320V220H0z"/>
<path class="thin" style="stroke-dasharray:6 6" d="M6 100H120M210 110H314M6 186H100"/>
<path class="fl-soft st-ink" style="stroke-width:2;stroke-linejoin:round" d="M0 64H132Q146 60 154 56H166Q174 60 188 64H320"/>

<!-- סדקים שדרכם מים מחלחלים -->
<g class="hl-1 hl-4">
  <path class="wire st-line" style="stroke-width:3" d="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><path class="wire st-line" style="stroke-width:3" d="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/>
  <path class="flow slow" style="stroke:var(--s-cold);stroke-opacity:1" d="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><path class="flow slow" style="stroke:var(--s-cold);stroke-opacity:1" d="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/>
</g>

<!-- המאגמה בעומק והחום שעולה ממנה -->
<path class="fl-hot st-hot" style="stroke-width:1.5;opacity:.9" d="M0 206Q40 200 80 206T160 204T240 206T320 204V220H0z"/>
<g class="hl-1 hl-2 hl-4">
  <path class="arrow st-hot dash" style="stroke-width:2" d="M150 202V190" marker-end="url(#geyser-h)"/>
  <path class="arrow st-hot dash" style="stroke-width:2" d="M178 202V188" marker-end="url(#geyser-h)"/>
  <path class="arrow st-hot dash" style="stroke-width:2" d="M206 202V190" marker-end="url(#geyser-h)"/>
</g>

<!-- הצנרת: צינור צר ושני תאים, מלאים מים -->
<g><path class="fl-none" style="stroke:var(--s-ink);stroke-width:13;stroke-linecap:round" d="M160 58C160 80 156 96 158 112C160 124 150 128 150 136M156 148C162 154 170 156 172 162"/><ellipse class="fl-ink st-ink" style="stroke-width:4" cx="146" cy="142" rx="22" ry="9"/><ellipse class="fl-ink st-ink" style="stroke-width:4" cx="178" cy="172" rx="30" ry="11"/></g>
<g><path class="fl-none" style="stroke:var(--s-cold);stroke-width:9;stroke-linecap:round" d="M160 58C160 80 156 96 158 112C160 124 150 128 150 136M156 148C162 154 170 156 172 162"/><ellipse class="fl-cold" cx="146" cy="142" rx="22" ry="9"/><ellipse class="fl-cold" cx="178" cy="172" rx="30" ry="11"/></g>

<!-- שלב 1: מים יורדים אל החום -->
<g class="only-1">
  <path class="body" style="stroke-width:1.5" d="M30 30Q22 30 22 23Q22 16 30 16Q32 8 42 9Q50 4 56 12Q66 11 66 20Q66 30 56 30Z"/>
  <g class="st-cold wire" style="stroke-width:1.5">
    <path d="M32 36L30 44"><animate attributeName="opacity" values="1;.2;1" dur=".8s" repeatCount="indefinite"/></path>
    <path d="M44 36L42 46"><animate attributeName="opacity" values=".2;1;.2" dur=".8s" repeatCount="indefinite"/></path>
    <path d="M56 36L54 44"><animate attributeName="opacity" values="1;.2;1" dur=".8s" begin="-.4s" repeatCount="indefinite"/></path>
  </g>
  <circle r="2" class="fl-cold"><animateMotion dur="3s" begin="0s" repeatCount="indefinite" path="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="3s" begin="0s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="3s" begin="-0.7s" repeatCount="indefinite" path="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="3s" begin="-0.7s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="3s" begin="-2.2s" repeatCount="indefinite" path="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="3s" begin="-2.2s" repeatCount="indefinite"/></circle>
  <text x="112" y="24">מי גשם מחלחלים</text>
  <text x="112" y="40">דרך סדקים בסלע</text>
  <rect class="body" style="stroke-width:1" x="226" y="176" width="80" height="18" rx="4"/>
  <text x="266" y="189">חום ממאגמה</text>
</g>

<!-- שלב 2: הלחץ של עמוד המים מעלה את נקודת הרתיחה -->
<g class="only-2">
  <g><path class="fl-none" style="stroke:url(#geyser-t);stroke-width:9;stroke-linecap:round" d="M160 58C160 80 156 96 158 112C160 124 150 128 150 136M156 148C162 154 170 156 172 162"/><ellipse style="fill:url(#geyser-t)" cx="146" cy="142" rx="22" ry="9"/><ellipse style="fill:url(#geyser-t)" cx="178" cy="172" rx="30" ry="11"/></g>
  <g class="arrow st-ink" style="stroke-width:1.6">
    <path d="M140 70V92" marker-end="url(#geyser-a)"/><path d="M134 100V122" marker-end="url(#geyser-a)"/>
  </g>
  <rect class="body" style="stroke-width:1" x="186" y="78" width="44" height="18" rx="4"/>
  <text x="208" y="91">100°</text>
  <rect class="body" style="stroke-width:1" x="226" y="132" width="78" height="32" rx="4"/>
  <text x="265" y="145">כ־140°</text>
  <text x="265" y="158" class="sm">ועדיין לא רותח</text>
  <path class="thin st-ink" d="M226 150L208 166"/>
  <text x="80" y="24">עמוד המים לוחץ</text>
  <text x="80" y="40">ומעלה את נקודת הרתיחה</text>
</g>

<!-- שלב 3: מעט רותח, מים נדחפים החוצה, הלחץ יורד והעמוד הופך לקיטור -->
<g class="only-3">
  <g clip-path="url(#geyser-c)">
    <circle r="2.4" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M178 170C172 160 162 154 154 146C150 138 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="0s" repeatCount="indefinite"/></circle><circle r="1.8" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.6s" begin="-0.4s" repeatCount="indefinite" path="M178 170C172 160 162 154 154 146C150 138 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-0.4s" repeatCount="indefinite"/></circle><circle r="2.8" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.6s" begin="-0.8s" repeatCount="indefinite" path="M178 170C172 160 162 154 154 146C150 138 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-0.8s" repeatCount="indefinite"/></circle><circle r="2" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.6s" begin="-1.2s" repeatCount="indefinite" path="M178 170C172 160 162 154 154 146C150 138 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.6s" begin="-1.2s" repeatCount="indefinite"/></circle><circle r="2.2" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.2s" begin="-0.2s" repeatCount="indefinite" path="M150 142C152 132 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.2s" begin="-0.2s" repeatCount="indefinite"/></circle><circle r="1.6" style="fill:#fff;stroke:var(--s-cold);stroke-width:1"><animateMotion dur="1.2s" begin="-0.8s" repeatCount="indefinite" path="M150 142C152 132 160 124 158 112C156 96 160 80 160 60"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.2s" begin="-0.8s" repeatCount="indefinite"/></circle>
  </g>
  <path class="fl-cold st-cold" style="stroke-width:1.5;fill-opacity:.55"><animate attributeName="d" values="M157 56C157 55 157 54 158 53C159 53 161 53 162 53C163 54 163 55 163 56Z;M157 56C150 38 144 26 146 18C154 13 166 13 174 18C176 26 170 38 163 56Z;M157 56C150 38 144 26 146 18C154 13 166 13 174 18C176 26 170 38 163 56Z;M157 56C157 55 157 54 158 53C159 53 161 53 162 53C163 54 163 55 163 56Z" keyTimes="0;.3;.8;1" dur="2.4s" repeatCount="indefinite"/></path>
  <g class="fl-panel st-line" style="stroke-width:1"><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.3;.7;1" dur="2.4s" repeatCount="indefinite"/>
    <circle cx="146" cy="18" r="6"/><circle cx="174" cy="18" r="6"/><circle cx="160" cy="13" r="6"/>
  </g>
  <text x="76" y="24">הלחץ יורד בבת אחת,</text>
  <text x="76" y="40">והמים הופכים לקיטור</text>
  <text x="252" y="24">בועות דוחפות</text>
  <text x="252" y="40">מים החוצה</text>
</g>

<!-- שלב 4: הצנרת מתרוקנת ומתמלאת מחדש -->
<g class="only-4">
  <g clip-path="url(#geyser-e)"><g><path class="fl-none" style="stroke:var(--s-panel);stroke-width:9;stroke-linecap:round" d="M160 58C160 80 156 96 158 112C160 124 150 128 150 136M156 148C162 154 170 156 172 162"/><ellipse class="fl-panel" cx="146" cy="142" rx="22" ry="9"/><ellipse class="fl-panel" cx="178" cy="172" rx="30" ry="11"/></g></g>
  <circle r="2" class="fl-cold"><animateMotion dur="2.5s" begin="0s" repeatCount="indefinite" path="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="2.5s" begin="0s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="2.5s" begin="-1.2s" repeatCount="indefinite" path="M34 64C40 90 60 110 86 130C108 146 126 160 150 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="2.5s" begin="-1.2s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="2.5s" begin="-0.6s" repeatCount="indefinite" path="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="2.5s" begin="-0.6s" repeatCount="indefinite"/></circle><circle r="2" class="fl-cold"><animateMotion dur="2.5s" begin="-1.8s" repeatCount="indefinite" path="M292 64C284 96 268 120 246 140C232 152 220 162 206 168"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.8;1" dur="2.5s" begin="-1.8s" repeatCount="indefinite"/></circle>
  <text x="80" y="24">מים קרירים ממלאים</text>
  <text x="80" y="40">ומתחממים מחדש</text>
  <circle class="body" style="stroke-width:1.5" cx="232" cy="30" r="12"/>
  <path class="thin st-ink" style="stroke-width:1.6" d="M232 30V22"><animateTransform attributeName="transform" type="rotate" values="0 232 30;360 232 30" dur="5s" repeatCount="indefinite"/></path>
  <text x="282" y="26">כל כ־90</text>
  <text x="282" y="40">דקות</text>
</g>
`;
