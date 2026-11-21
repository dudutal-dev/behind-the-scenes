// הלידה: 1 אותות שמתחילים את הלידה — השליה, ריאות העובר, ושריר שמפסיק להגיב לפרוגסטרון · 2 משוב חיובי: לחץ על הצוואר מגביר אוקסיטוצין והצירים מתחזקים · 3 צוואר הרחם נפתח עד כעשרה סנטימטרים, ואחריו לחיצות והשליה · 4 בנשימה הראשונה הריאות מתנפחות, החור הסגלגל וצינור בוטאלו נסגרים
export default `
<!-- הרחם בסוף ההריון -->
<g class="hl-1 hl-2 hl-3">
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 2;0 0" keyTimes="0;.3;.6;1" dur="2.6s" repeatCount="indefinite"/>
    <path class="body" d="M18 70 C18 26 54 10 84 10 C114 10 150 26 150 70 C150 120 128 160 108 176 L104 206 H64 L60 176 C40 160 18 120 18 70Z"/>
    <path class="fl-hot" opacity=".22" d="M18 70 C18 26 54 10 84 10 C114 10 150 26 150 70 C150 120 128 160 108 176 L104 206 H64 L60 176 C40 160 18 120 18 70Z"/>
    <path class="fl-cold-soft st-line" stroke-width="1.2" d="M32 72 C32 38 58 24 84 24 C110 24 136 38 136 72 C136 116 116 150 98 166 H70 C52 150 32 116 32 72Z"/>
    <!-- השליה וחבל הטבור -->
    <path class="fl-hot st-ink" stroke-width="1.6" d="M34 64 C36 42 54 30 76 26 L78 38 C62 42 50 52 46 66 Z"/>
    <path class="pipe st-ink" style="stroke-width:6" d="M54 48 C64 62 56 76 66 84 C72 88 78 86 82 84"/>
    <path class="pipe st-cold" style="stroke-width:3.4" d="M54 48 C64 62 56 76 66 84 C72 88 78 86 82 84"/>
    <g transform="translate(86 106) rotate(186) scale(.86) translate(-56 -64)">
      <path class="body" style="fill:var(--s-warm)" d="M50 2 C70 2 84 18 82 36 C81 44 77 49 74 52 C78 54 80 58 78 62 C76 66 76 68 80 70 C92 72 100 80 98 90 C96 98 90 100 88 104 C88 110 92 116 98 118 C102 120 102 126 96 127 C80 128 60 128 44 124 C26 120 14 104 14 84 C14 66 18 54 22 46 C16 38 18 20 30 10 C36 5 43 2 50 2Z"/>
      <path class="thin st-ink" style="stroke-width:1.3" d="M46 114 C62 104 78 92 90 86 M58 60 C64 70 72 70 78 62 M40 26 a6 7 0 0 0 0 12"/>
      <circle class="fl-ink" cx="66" cy="30" r="2"/>
    </g>
  </g>
</g>

<!-- שלב 1: מקורות האות -->
<g class="only-1">
  <path class="fl-none st-elec" stroke-width="3" d="M34 64 C36 42 54 30 76 26 L78 38 C62 42 50 52 46 66 Z"><animate attributeName="opacity" values=".2;1;.2" dur="1.6s" repeatCount="indefinite"/></path>
  <g class="fl-violet st-ink" stroke-width="1" opacity=".85"><ellipse cx="86" cy="80" rx="5" ry="8"/><ellipse cx="98" cy="82" rx="5" ry="8"/></g>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M196 72 C150 60 110 44 76 40 M82 37 l-6 3 5 4"/>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M196 112 C150 112 120 100 104 90 M110 90 l-6 0 2 6"/>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M196 150 H146 M151 146 l-5 4 5 4"/>
  <path class="wire st-hot" style="stroke-width:5;opacity:.7" d="M146 100 C144 126 132 150 116 166"/>
  <text x="252" y="76">CRH מהשליה</text>
  <text x="252" y="116">אות מריאות העובר</text>
  <text x="252" y="146">השריר מפסיק</text>
  <text x="252" y="160">להגיב לפרוגסטרון</text>
  <text class="sm" x="240" y="196">ההסבר המלא עדיין לא ידוע</text>
</g>

<!-- המוח: יותרת המוח מפרישה אוקסיטוצין -->
<g class="only-2 from-9">
  <path class="body" style="stroke-width:1.6" d="M210 40 C206 22 226 12 244 14 C262 12 280 22 276 40 C274 52 262 56 248 54 C236 58 214 54 210 40Z"/>
  <path class="thin st-ink" style="stroke-width:1" d="M224 26 q6 6 0 12 M240 20 q-4 10 4 16 M258 22 q4 8 -2 14 M266 34 q-6 4 -4 10"/>
  <path class="wire st-ink" style="stroke-width:1.6" d="M244 54 V60"/><circle class="fl-violet st-ink" stroke-width="1" cx="244" cy="63" r="4"/>
  <!-- עצב: מהצוואר אל המוח -->
  <path class="wire st-elec" style="stroke-width:2" d="M106 192 H198 C214 192 214 182 214 170 V58"/>
  <path class="flow" style="stroke:var(--s-ink);stroke-opacity:.5" d="M106 192 H198 C214 192 214 182 214 170 V58"/>
  <!-- אוקסיטוצין בדם, מהמוח אל שריר הרחם -->
  <path class="thin st-violet" style="stroke-dasharray:2 4" d="M248 66 C250 90 200 40 150 46"/>
  <circle class="fl-violet" r="2.6"><animateMotion path="M248 66 C250 90 200 40 150 46" dur="2.1s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.6"><animateMotion path="M248 66 C250 90 200 40 150 46" dur="2.1s" begin="-0.7s" repeatCount="indefinite"/></circle><circle class="fl-violet" r="2.6"><animateMotion path="M248 66 C250 90 200 40 150 46" dur="2.1s" begin="-1.4s" repeatCount="indefinite"/></circle>
</g>
<g class="only-2">
  <path class="wire st-hot" style="stroke-width:6;stroke-dasharray:46 400;opacity:.85" d="M84 10 C54 10 18 26 18 70 C18 120 40 160 60 176"><animate attributeName="stroke-dashoffset" values="46;-220" dur="2.6s" begin="0s" repeatCount="indefinite"/></path><path class="wire st-hot" style="stroke-width:6;stroke-dasharray:46 400;opacity:.85" d="M84 10 C114 10 150 26 150 70 C150 120 128 160 108 176"><animate attributeName="stroke-dashoffset" values="46;-220" dur="2.6s" begin="0s" repeatCount="indefinite"/></path>
  <text x="268" y="88" style="fill:var(--s-violet)">אוקסיטוצין</text>
  <text x="262" y="132">משוב חיובי:</text>
  <text x="262" y="146">כל ציר מגביר</text>
  <text x="262" y="160">את הציר הבא</text>
  <text x="160" y="210">לחץ על הצוואר</text>
</g>

<!-- שלב 3: הצוואר נפתח -->
<g class="only-3">
  <rect class="fl-cold-soft" y="168" height="38" x="80" width="8"><animate attributeName="x" values="82;70;70;82" keyTimes="0;.6;.85;1" dur="3s" repeatCount="indefinite"/><animate attributeName="width" values="4;28;28;4" keyTimes="0;.6;.85;1" dur="3s" repeatCount="indefinite"/></rect>
  <circle class="fl-cold-soft st-ink" stroke-width="1.6" cx="244" cy="92" r="4"><animate attributeName="r" values="2;26;26;2" keyTimes="0;.6;.85;1" dur="3s" repeatCount="indefinite"/></circle>
  <path class="thin st-ink" style="stroke-width:1" d="M218 128 H270 M218 124 v8 M270 124 v8"/>
  <text x="244" y="144">0 עד 10 ס״מ</text>
  <text x="244" y="168">1 · פתיחה</text>
  <text x="244" y="184">2 · לחיצות ויציאה</text>
  <text x="244" y="200">3 · יציאת השליה</text>
</g>

<!-- שלב 4: התינוק נושם, מחזור הדם משנה מסלול -->
<g class="only-4">
  <ellipse class="fl-soft st-ink" stroke-width="1.6" cx="190" cy="120" rx="10" ry="30"><animate attributeName="rx" values="7;15;15;7" keyTimes="0;.3;.85;1" dur="3.4s" repeatCount="indefinite"/></ellipse>
  <ellipse class="fl-soft st-ink" stroke-width="1.6" cx="298" cy="120" rx="10" ry="30"><animate attributeName="rx" values="7;15;15;7" keyTimes="0;.3;.85;1" dur="3.4s" repeatCount="indefinite"/></ellipse>
  <!-- כלי הדם הגדולים -->
  <path class="pipe st-ink" style="stroke-width:9" d="M226 112 V82 H196 V96"/><path class="pipe st-cold" style="stroke-width:5.5" d="M226 112 V82 H196 V96"/>
  <path class="pipe st-ink" style="stroke-width:9" d="M258 112 V72 Q258 60 270 60 H280 V96"/><path class="pipe st-hot" style="stroke-width:5.5" d="M258 112 V72 Q258 60 270 60 H280 V96"/>
  <!-- צינור בוטאלו: נסגר -->
  <path class="pipe st-violet" style="stroke-width:6;stroke-linecap:butt" d="M231 88 H253"><animate attributeName="stroke-width" values="6;6;1;1;6" keyTimes="0;.2;.6;.9;1" dur="3.4s" repeatCount="indefinite"/></path>
  <!-- עליות וחדרים -->
  <rect class="fl-cold st-ink" stroke-width="1.6" x="212" y="112" width="28" height="22" rx="5"/>
  <rect class="fl-hot st-ink" stroke-width="1.6" x="244" y="112" width="28" height="22" rx="5"/>
  <rect class="fl-cold st-ink" stroke-width="1.6" x="212" y="136" width="28" height="28" rx="7"/>
  <rect class="fl-hot st-ink" stroke-width="1.6" x="244" y="136" width="28" height="28" rx="7"/>
  <rect class="fl-bg" x="239" y="117" width="6" height="10"/>
  <!-- הדש של החור הסגלגל -->
  <path class="wire st-violet" style="stroke-width:3" d="M244 128 V116"><animateTransform attributeName="transform" type="rotate" values="-50 244 128;-50 244 128;0 244 128;0 244 128;-50 244 128" keyTimes="0;.2;.35;.9;1" dur="3.4s" repeatCount="indefinite"/></path>
  <text x="242" y="184" style="fill:var(--s-violet)">החור הסגלגל נסגר</text>
  <text x="242" y="200" style="fill:var(--s-violet)">וצינור בוטאלו נסגר</text>
  <text class="sm" x="242" y="50">הריאות מתנפחות</text>
</g>
`;
