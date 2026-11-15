// רכב היברידי (מפצל כוח): 1 שלוש דרכים לחבר בנזין וחשמל · 2 גלגל שיניים פלנטרי: נושא=בנזין, שמש=גנרטור, טבעת=גלגלים · 3 מחזור מצבים: חשמל, שיוט, האצה · 4 בלימה מחזירה חשמל לסוללה, ופלאג־אין נטען מהשקע
export default `
<!-- כביש -->
<path class="st-line fl-none" stroke-width="2" stroke-linecap="round" d="M112 206H208"/>

<!-- צירים ומסלולי כוח (מתחת לגלגל הפלנטרי) -->
<g class="hl-1 hl-2 hl-3"><path class="pipe st-warm" d="M240 84H160"/></g>
<g class="hl-1 hl-2 hl-3"><path class="pipe st-violet" d="M76 52L160 84"/></g>
<g class="hl-1 hl-3 hl-4"><path class="pipe st-green" d="M76 124L132 100"/></g>
<g class="hl-1 hl-3 hl-4"><path class="pipe st-green" d="M160 116V160"/></g>
<!-- חיווט חשמלי לסוללה -->
<g class="hl-1 hl-3 hl-4"><path class="wire st-elec" d="M58 144V172M34 172V62Q34 46 48 46"/></g>


  <!-- טבעת חיצונית (גלגלים ומנוע חשמלי) -->
  <g class="hl-2 hl-3 hl-4">
    <circle class="fl-soft st-ink" stroke-width="2" cx="160" cy="84" r="34"/>
    <circle class="fl-bg st-green" stroke-width="2" cx="160" cy="84" r="28"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0 160 84" to="360 160 84" dur="4.00s" repeatCount="indefinite"/><path class="thin st-green" style="stroke-width:1.6" d="M188 84L185.8 84M187.3 90.23L185.15 89.74M185.23 96.15L183.24 95.19M181.89 101.46L180.17 100.09M177.46 105.89L176.09 104.17M172.15 109.23L171.19 107.24M166.23 111.3L165.74 109.15M160 112L160 109.8M153.77 111.3L154.26 109.15M147.85 109.23L148.81 107.24M142.54 105.89L143.91 104.17M138.11 101.46L139.83 100.09M134.77 96.15L136.76 95.19M132.7 90.23L134.85 89.74M132 84L134.2 84M132.7 77.77L134.85 78.26M134.77 71.85L136.76 72.81M138.11 66.54L139.83 67.91M142.54 62.11L143.91 63.83M147.85 58.77L148.81 60.76M153.77 56.7L154.26 58.85M160 56L160 58.2M166.23 56.7L165.74 58.85M172.15 58.77L171.19 60.76M177.46 62.11L176.09 63.83M181.89 66.54L180.17 67.91M185.23 71.85L183.24 72.81M187.3 77.77L185.15 78.26"/>
      <path class="wire st-green" style="stroke-width:3" d="M160 50v6"/></g>
  </g>
  <!-- נושא הפלנטות (מנוע בנזין) -->
  <g class="hl-2 hl-3"><animateTransform attributeName="transform" type="rotate" from="0 160 84" to="360 160 84" dur="3.00s" repeatCount="indefinite"/>
    <path class="wire st-warm" style="stroke-width:4" d="M160 84L178.5 84M160 84L150.75 100.02M160 84L150.75 67.98"/>
    <g><animateTransform attributeName="transform" type="rotate" from="0 178.5 84" to="-360 178.5 84" dur="4.07s" repeatCount="indefinite"/>
      <circle class="fl-panel st-ink" stroke-width="1.5" cx="178.5" cy="84" r="8.5"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M187 84L188.6 84M185.38 89L186.67 89.94M181.13 92.08L181.62 93.61M175.87 92.08L175.38 93.61M171.62 89L170.33 89.94M170 84L168.4 84M171.62 79L170.33 78.06M175.87 75.92L175.38 74.39M181.13 75.92L181.62 74.39M185.38 79L186.67 78.06"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M178.5 79V89"/>
    </g><g><animateTransform attributeName="transform" type="rotate" from="0 150.75 100.02" to="-360 150.75 100.02" dur="4.07s" repeatCount="indefinite"/>
      <circle class="fl-panel st-ink" stroke-width="1.5" cx="150.75" cy="100.02" r="8.5"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M159.25 100.02L160.85 100.02M157.63 105.02L158.92 105.96M153.38 108.1L153.87 109.63M148.12 108.1L147.63 109.63M143.87 105.02L142.58 105.96M142.25 100.02L140.65 100.02M143.87 95.02L142.58 94.08M148.12 91.94L147.63 90.41M153.38 91.94L153.87 90.41M157.63 95.02L158.92 94.08"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M150.75 95.02V105.02"/>
    </g><g><animateTransform attributeName="transform" type="rotate" from="0 150.75 67.98" to="-360 150.75 67.98" dur="4.07s" repeatCount="indefinite"/>
      <circle class="fl-panel st-ink" stroke-width="1.5" cx="150.75" cy="67.98" r="8.5"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M159.25 67.98L160.85 67.98M157.63 72.98L158.92 73.92M153.38 76.06L153.87 77.59M148.12 76.06L147.63 77.59M143.87 72.98L142.58 73.92M142.25 67.98L140.65 67.98M143.87 62.98L142.58 62.04M148.12 59.9L147.63 58.37M153.38 59.9L153.87 58.37M157.63 62.98L158.92 62.04"/>
      <path class="thin st-ink" style="stroke-width:1.2" d="M150.75 62.98V72.98"/>
    </g>
  </g>
  <!-- גלגל השמש (גנרטור) -->
  <g class="hl-2"><animateTransform attributeName="transform" type="rotate" from="0 160 84" to="360 160 84" dur="1.69s" repeatCount="indefinite"/>
    <circle class="st-ink" style="fill:var(--s-violet)" stroke-width="1.5" cx="160" cy="84" r="8"/>
    <path class="thin st-ink" style="stroke-width:1.2" d="M168 84L169.8 84M166.13 89.14L167.51 90.3M161.39 91.88L161.7 93.65M156 90.93L155.1 92.49M152.48 86.74L150.79 87.35M152.48 81.26L150.79 80.65M156 77.07L155.1 75.51M161.39 76.12L161.7 74.35M166.13 78.86L167.51 77.7"/>
    <path class="thin" style="stroke:#fff;stroke-width:1.5" d="M160 78V84"/>
  </g>
  <circle class="fl-ink" cx="160" cy="84" r="1.6"/>

<!-- מנוע בנזין -->
<g class="hl-1 hl-3">
  <rect class="body" x="240" y="52" width="62" height="64" rx="5"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="250" y="62" width="14" height="30" rx="2"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="278" y="62" width="14" height="30" rx="2"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="251.5" y="72" width="11" height="8"><animate attributeName="y" values="72;82;72" dur=".5s" repeatCount="indefinite"/></rect>
  <rect class="fl-line st-ink" stroke-width="1.2" x="279.5" y="82" width="11" height="8"><animate attributeName="y" values="82;72;82" dur=".5s" repeatCount="indefinite"/></rect>
  <circle class="fl-soft st-ink" stroke-width="1.5" cx="271" cy="104" r="7"/>
</g>
<!-- גנרטור (MG1) -->
<g class="hl-1 hl-2">
  <circle class="body" cx="60" cy="46" r="17"/>
  <g class="spin fast"><path class="fl-hot" d="M52 46a8 8 0 0 1 16 0z"/><path class="fl-cold" d="M52 46a8 8 0 0 0 16 0z"/></g>
  <circle class="fl-ink" cx="60" cy="46" r="2"/>
</g>
<!-- מנוע חשמלי (MG2) -->
<g class="hl-1 hl-3 hl-4">
  <circle class="body" cx="60" cy="128" r="17"/>
  <g class="spin"><path class="fl-hot" d="M52 128a8 8 0 0 1 16 0z"/><path class="fl-cold" d="M52 128a8 8 0 0 0 16 0z"/></g>
  <circle class="fl-ink" cx="60" cy="128" r="2"/>
</g>
<!-- סוללה -->
<g class="hl-1 hl-3 hl-4">
  <rect class="body" x="22" y="172" width="74" height="26" rx="4"/>
  <rect class="fl-ink" x="96" y="180" width="4" height="10" rx="1"/>
  <g class="fl-green"><rect x="28" y="178" width="13" height="14" rx="2"/><rect x="44" y="178" width="13" height="14" rx="2"/><rect x="60" y="178" width="13" height="14" rx="2"/></g>
</g>
<g class="only-4 fl-green"><rect x="76" y="178" width="13" height="14" rx="2"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.5;.6;1" dur="2.4s" repeatCount="indefinite"/></rect></g>
<!-- גלגל -->
<circle class="fl-dark st-ink" stroke-width="2" cx="160" cy="182" r="22"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="160" cy="182" r="13"/>
<g class="spin"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M160 170v24M148 182h24"/></g>

<!-- שלב 1: שמות היחידות ושלוש התצורות -->
<g class="only-1">
  <text x="271" y="40">מנוע בנזין</text>
  <text x="60" y="20">גנרטור</text>
  <text x="104" y="152">מנוע חשמלי</text>
  <text x="59" y="211" class="sm">סוללה</text>
  <g transform="translate(0 0)">
    <text x="290" y="149">טורי</text>
    <rect class="fl-warm" x="200" y="140" width="10" height="10" rx="2"/><path class="thin st-ink" d="M211 145h5"/>
    <circle style="fill:var(--s-violet)" cx="222" cy="145" r="5"/><path class="thin st-elec" style="stroke-width:2" d="M228 145h5"/>
    <circle class="fl-green" cx="239" cy="145" r="5"/><path class="thin st-ink" d="M245 145h4"/>
    <circle class="fl-dark st-ink" cx="255" cy="145" r="5"/>
    <text x="290" y="175">מקבילי</text>
    <rect class="fl-warm" x="200" y="166" width="10" height="10" rx="2"/><path class="thin st-ink" d="M211 171h6"/>
    <circle class="fl-dark st-ink" cx="223" cy="171" r="5"/><path class="thin st-ink" d="M229 171h6"/>
    <circle class="fl-green" cx="241" cy="171" r="5"/>
    <text x="289" y="201">מפצל כוח</text>
    <rect class="fl-warm" x="200" y="192" width="10" height="10" rx="2"/><path class="thin st-ink" d="M211 197h4"/>
    <circle class="fl-soft st-green" stroke-width="2" cx="221" cy="197" r="5"/><path class="thin st-ink" d="M227 197h4M221 191v-4"/>
    <circle style="fill:var(--s-violet)" cx="221" cy="183" r="3.5"/>
    <circle class="fl-dark st-ink" cx="237" cy="197" r="5"/><path class="thin st-ink" d="M243 197h4"/>
    <circle class="fl-green" cx="253" cy="197" r="5"/>
  </g>
</g>

<!-- שלב 2: מקרא הגלגל הפלנטרי -->
<g class="only-2">
  <path class="flow" d="M240 84H196"/>
  <path class="flow" d="M132 72L78 52"/>
  <path class="flow" d="M160 118V160"/>
  <text x="200" y="28">גלגל שיניים פלנטרי</text>
  <rect class="fl-warm" x="292" y="140" width="12" height="10" rx="2"/><text x="252" y="149">נושא: בנזין</text>
  <rect style="fill:var(--s-violet)" x="292" y="164" width="12" height="10" rx="2"/><text x="252" y="173">שמש: גנרטור</text>
  <rect class="fl-green" x="292" y="188" width="12" height="10" rx="2"/><text x="252" y="197">טבעת: לגלגלים</text>
</g>

<!-- שלב 3: מחזור מצבים -->
<g class="only-3">
  <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.32;.34;1" dur="6s" repeatCount="indefinite"/>
    <path class="flow" d="M58 172V144"/><path class="flow" d="M76 124L132 100"/><path class="flow" d="M160 116V160"/>
    <rect class="fl-bg" x="244" y="56" width="54" height="56" rx="4" opacity=".7"/>
    <text x="250" y="160">יציאה וזחילה</text><text x="250" y="178">חשמל בלבד</text><text x="250" y="196" class="sm">מנוע הבנזין כבוי</text>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.34;0.36000000000000004;0.64;0.66;1" dur="6s" repeatCount="indefinite"/>
    <path class="flow" d="M240 84H196"/><path class="flow" d="M160 116V160"/>
    <path class="flow" d="M128 72L78 52"/><path class="flow" d="M34 62V172"/>
    <text x="250" y="160">שיוט</text><text x="250" y="178">בנזין דוחף</text><text x="250" y="196" class="sm">והעודף טוען את הסוללה</text>
  </g>
  <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.66;0.68;0.99;1.01;1" dur="6s" repeatCount="indefinite"/>
    <path class="flow" d="M240 84H196"/><path class="flow" d="M58 172V144"/><path class="flow" d="M76 124L132 100"/><path class="flow" d="M160 116V160"/>
    <text x="250" y="160">האצה חזקה</text><text x="250" y="178">שניהם דוחפים</text>
  </g>
</g>

<!-- שלב 4: בלימה מחזירה חשמל, ושקע לפלאג־אין -->
<g class="only-4">
  <path class="flow" d="M160 160V116"/>
  <path class="flow" d="M132 100L76 124"/>
  <path class="flow" d="M58 144V172"/>
  <path class="arrow st-hot" d="M196 168A40 40 0 0 0 196 196" style="stroke-width:3"/>
  <path class="fl-hot" d="M191 196.5l9 3-2-9z"/>
  <text x="252" y="160">בלימה: המנוע</text>
  <text x="252" y="176">הופך לגנרטור</text>
  <path class="wire st-ink" style="stroke-width:3" d="M8 210Q10 194 16 189"/>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="14" y="181" width="8" height="10" rx="1.5"/>
  <path class="flow" d="M10 206Q11 196 16 190"/>
  <text x="256" y="200" class="sm">פלאג־אין: נטען גם מהשקע</text>
</g>
`;
