// הוריקן בחתך: 1 ים חם ואידוי · 2 אוויר לח עולה בחומת העין ומשחרר חום · 3 קוריוליס מסחרר נגד כיוון השעון · 4 העין, חומת העין, ונחלש ביבשה
export default `
<defs>
  <marker id="hurricane-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="hurricane-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <marker id="hurricane-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
  <clipPath id="hurricane-lens"><circle cx="40" cy="62" r="29"/></clipPath>
</defs>

<!-- ים -->
<g class="hl-1 hl-2">
  <path class="fl-cold-soft" d="M60 186H320V220H60z"/>
  <path class="st-cold fl-none" stroke-width="1.5" d="M64 186q8-3 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0"/>
</g>
<g class="hl-1"><rect class="fl-warm" opacity=".5" x="66" y="188" width="254" height="7"/></g>
<!-- יבשה -->
<g class="hl-4">
  <path class="fl-soft st-ink" stroke-width="2" stroke-linejoin="round" d="M-2 176Q28 170 52 174Q66 177 74 192L80 222H-2z"/>
  <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M22 173Q20 164 23 156"/><path class="fl-green" d="M23 156q-9-3-13 3q7-3 13-3zM23 156q9-4 14 2q-8-2-14-2zM23 156q-3-7 3-10q-3 5-3 10z"/>
</g>

<!-- ענני הסופה: חומת העין, השוליים הנפרשים בגובה ופסי גשם -->
<g class="hl-2 hl-3 hl-4">
  <g class="st-ink fl-ink" style="stroke-width:4"><circle class="" cx="158" cy="162" r="13"/><circle class="" cx="174" cy="162" r="13"/><circle class="" cx="155" cy="144" r="13"/><circle class="" cx="174" cy="142" r="13"/><circle class="" cx="157" cy="124" r="13"/><circle class="" cx="175" cy="120" r="12"/><circle class="" cx="159" cy="102" r="13"/><circle class="" cx="176" cy="98" r="12"/><circle class="" cx="161" cy="80" r="13"/><circle class="" cx="177" cy="76" r="11"/><circle class="" cx="164" cy="58" r="13"/><circle class="" cx="179" cy="54" r="10"/><circle class="" cx="150" cy="46" r="10"/><circle class="" cx="134" cy="40" r="9"/><circle class="" cx="118" cy="39" r="8"/><circle class="" cx="104" cy="41" r="7"/><circle class="" cx="170" cy="44" r="11"/><circle class="" cx="144" cy="36" r="8"/><circle class="" cx="242" cy="162" r="13"/><circle class="" cx="226" cy="162" r="13"/><circle class="" cx="245" cy="144" r="13"/><circle class="" cx="226" cy="142" r="13"/><circle class="" cx="243" cy="124" r="13"/><circle class="" cx="225" cy="120" r="12"/><circle class="" cx="241" cy="102" r="13"/><circle class="" cx="224" cy="98" r="12"/><circle class="" cx="239" cy="80" r="13"/><circle class="" cx="223" cy="76" r="11"/><circle class="" cx="236" cy="58" r="13"/><circle class="" cx="221" cy="54" r="10"/><circle class="" cx="250" cy="46" r="10"/><circle class="" cx="266" cy="40" r="9"/><circle class="" cx="282" cy="39" r="8"/><circle class="" cx="296" cy="41" r="7"/><circle class="" cx="230" cy="44" r="11"/><circle class="" cx="256" cy="36" r="8"/><circle class="" cx="112" cy="164" r="9"/><circle class="" cx="127" cy="164" r="9"/><circle class="" cx="113" cy="149" r="9"/><circle class="" cx="127" cy="147" r="9"/><circle class="" cx="120" cy="133" r="10"/><circle class="" cx="119" cy="119" r="8"/><circle class="" cx="288" cy="164" r="9"/><circle class="" cx="273" cy="164" r="9"/><circle class="" cx="287" cy="149" r="9"/><circle class="" cx="273" cy="147" r="9"/><circle class="" cx="280" cy="133" r="10"/><circle class="" cx="281" cy="119" r="8"/></g>
  <g class="only-4"><g class="st-hot fl-hot" style="stroke-width:6"><animate attributeName="opacity" values=".3;1;.3" dur="1.4s" repeatCount="indefinite"/><circle class="" cx="158" cy="162" r="13"/><circle class="" cx="174" cy="162" r="13"/><circle class="" cx="155" cy="144" r="13"/><circle class="" cx="174" cy="142" r="13"/><circle class="" cx="157" cy="124" r="13"/><circle class="" cx="175" cy="120" r="12"/><circle class="" cx="159" cy="102" r="13"/><circle class="" cx="176" cy="98" r="12"/><circle class="" cx="161" cy="80" r="13"/><circle class="" cx="177" cy="76" r="11"/><circle class="" cx="164" cy="58" r="13"/><circle class="" cx="179" cy="54" r="10"/><circle class="" cx="150" cy="46" r="10"/><circle class="" cx="134" cy="40" r="9"/><circle class="" cx="118" cy="39" r="8"/><circle class="" cx="104" cy="41" r="7"/><circle class="" cx="170" cy="44" r="11"/><circle class="" cx="144" cy="36" r="8"/><circle class="" cx="242" cy="162" r="13"/><circle class="" cx="226" cy="162" r="13"/><circle class="" cx="245" cy="144" r="13"/><circle class="" cx="226" cy="142" r="13"/><circle class="" cx="243" cy="124" r="13"/><circle class="" cx="225" cy="120" r="12"/><circle class="" cx="241" cy="102" r="13"/><circle class="" cx="224" cy="98" r="12"/><circle class="" cx="239" cy="80" r="13"/><circle class="" cx="223" cy="76" r="11"/><circle class="" cx="236" cy="58" r="13"/><circle class="" cx="221" cy="54" r="10"/><circle class="" cx="250" cy="46" r="10"/><circle class="" cx="266" cy="40" r="9"/><circle class="" cx="282" cy="39" r="8"/><circle class="" cx="296" cy="41" r="7"/><circle class="" cx="230" cy="44" r="11"/><circle class="" cx="256" cy="36" r="8"/></g></g>
  <g class="fl-panel"><circle class="" cx="158" cy="162" r="13"/><circle class="" cx="174" cy="162" r="13"/><circle class="" cx="155" cy="144" r="13"/><circle class="" cx="174" cy="142" r="13"/><circle class="" cx="157" cy="124" r="13"/><circle class="" cx="175" cy="120" r="12"/><circle class="" cx="159" cy="102" r="13"/><circle class="" cx="176" cy="98" r="12"/><circle class="" cx="161" cy="80" r="13"/><circle class="" cx="177" cy="76" r="11"/><circle class="" cx="164" cy="58" r="13"/><circle class="" cx="179" cy="54" r="10"/><circle class="" cx="150" cy="46" r="10"/><circle class="" cx="134" cy="40" r="9"/><circle class="" cx="118" cy="39" r="8"/><circle class="" cx="104" cy="41" r="7"/><circle class="" cx="170" cy="44" r="11"/><circle class="" cx="144" cy="36" r="8"/><circle class="" cx="242" cy="162" r="13"/><circle class="" cx="226" cy="162" r="13"/><circle class="" cx="245" cy="144" r="13"/><circle class="" cx="226" cy="142" r="13"/><circle class="" cx="243" cy="124" r="13"/><circle class="" cx="225" cy="120" r="12"/><circle class="" cx="241" cy="102" r="13"/><circle class="" cx="224" cy="98" r="12"/><circle class="" cx="239" cy="80" r="13"/><circle class="" cx="223" cy="76" r="11"/><circle class="" cx="236" cy="58" r="13"/><circle class="" cx="221" cy="54" r="10"/><circle class="" cx="250" cy="46" r="10"/><circle class="" cx="266" cy="40" r="9"/><circle class="" cx="282" cy="39" r="8"/><circle class="" cx="296" cy="41" r="7"/><circle class="" cx="230" cy="44" r="11"/><circle class="" cx="256" cy="36" r="8"/><circle class="" cx="112" cy="164" r="9"/><circle class="" cx="127" cy="164" r="9"/><circle class="" cx="113" cy="149" r="9"/><circle class="" cx="127" cy="147" r="9"/><circle class="" cx="120" cy="133" r="10"/><circle class="" cx="119" cy="119" r="8"/><circle class="" cx="288" cy="164" r="9"/><circle class="" cx="273" cy="164" r="9"/><circle class="" cx="287" cy="149" r="9"/><circle class="" cx="273" cy="147" r="9"/><circle class="" cx="280" cy="133" r="10"/><circle class="" cx="281" cy="119" r="8"/></g>
</g>

<!-- שלב 1: אידוי מהים החם -->
<g class="only-1">
  <g class="fl-cold">
    <circle r="2.2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M92 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M122 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-.8s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M160 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-1.6s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.4s" repeatCount="indefinite" path="M200 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-.4s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M240 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-1.2s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-2s" repeatCount="indefinite" path="M278 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-2s" repeatCount="indefinite"/></circle>
    <circle r="2.2"><animateMotion dur="2.4s" begin="-.6s" repeatCount="indefinite" path="M308 186v-20"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-.6s" repeatCount="indefinite"/></circle>
  </g>
  <text x="42" y="112" class="lg">ים חם</text>
  <text x="42" y="128">26.5° ומעלה</text>
  <text x="42" y="144">מים מתאדים</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M48 152Q66 160 82 182" marker-end="url(#hurricane-a)"/>
</g>

<!-- שלב 2: זרימה פנימה, עלייה ושחרור חום -->
<g class="from-2"><g class="hl-2">
  <path class="wire st-cold" d="M84 179H180" marker-end="url(#hurricane-c)"/>
  <path class="wire st-cold" d="M316 179H220" marker-end="url(#hurricane-c)"/>
  <path class="flow" d="M84 179H180M316 179H220"/>
  <path class="wire st-warm" style="stroke-width:2" d="M174 166C172 120 170 80 168 52Q150 38 112 40" marker-end="url(#hurricane-w)"/>
  <path class="wire st-warm" style="stroke-width:2" d="M226 166C228 120 230 80 232 52Q250 38 288 40" marker-end="url(#hurricane-w)"/>
</g></g>
<g class="only-2">
  <g class="fl-warm">
    <circle r="2.6"><animateMotion dur="3s" repeatCount="indefinite" path="M174 166C172 120 170 80 168 52Q150 38 112 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" repeatCount="indefinite"/></circle>
    <circle r="2.6"><animateMotion dur="3s" begin="-1s" repeatCount="indefinite" path="M174 166C172 120 170 80 168 52Q150 38 112 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" begin="-1s" repeatCount="indefinite"/></circle>
    <circle r="2.6"><animateMotion dur="3s" begin="-2s" repeatCount="indefinite" path="M174 166C172 120 170 80 168 52Q150 38 112 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" begin="-2s" repeatCount="indefinite"/></circle>
    <circle r="2.6"><animateMotion dur="3s" begin="-.5s" repeatCount="indefinite" path="M226 166C228 120 230 80 232 52Q250 38 288 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" begin="-.5s" repeatCount="indefinite"/></circle>
    <circle r="2.6"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M226 166C228 120 230 80 232 52Q250 38 288 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle>
    <circle r="2.6"><animateMotion dur="3s" begin="-2.5s" repeatCount="indefinite" path="M226 166C228 120 230 80 232 52Q250 38 288 40"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="3s" begin="-2.5s" repeatCount="indefinite"/></circle>
  </g>
  <text x="42" y="76">אדים מתעבים</text>
  <text x="42" y="90">והחום משתחרר</text>
  <text x="42" y="136">אוויר לח</text>
  <text x="42" y="150">נשאב פנימה</text>
  <text x="200" y="208">לחץ נמוך</text>
</g>

<!-- שלב 3: הסחרור. טבעת סביב הסופה ומבט מלמעלה -->
<g class="only-3">
  <ellipse class="st-violet fl-none" stroke-width="2" cx="200" cy="124" rx="80" ry="11" style="stroke-dasharray:5 5"><animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite"/></ellipse>
  <path class="arrow st-violet" d="M184 135H214" marker-end="url(#hurricane-a)"/>
  <circle class="fl-cold-soft st-ink" stroke-width="2" cx="40" cy="62" r="30"/>
  <g clip-path="url(#hurricane-lens)">
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 40 62;-360 40 62" dur="7s" repeatCount="indefinite"/>
      <path class="fl-panel st-line" stroke-width="1" d="M40 55Q60 50 62 70Q58 86 34 88Q54 80 54 68Q52 58 40 55zM40 69Q20 74 18 54Q22 38 46 36Q26 44 26 56Q28 66 40 69z"/>
      <path class="fl-panel st-line" stroke-width="1" d="M50 62Q48 82 28 82Q16 76 14 66Q22 78 34 76Q46 72 50 62zM30 62Q32 42 52 42Q64 48 66 58Q58 46 46 48Q34 52 30 62z"/>
    </g>
    <circle class="fl-cold-soft st-ink" stroke-width="1" cx="40" cy="62" r="4"/>
  </g>
  <path class="arrow st-violet" d="M68 44A30 30 0 0 0 52 34" marker-end="url(#hurricane-a)"/>
  <text x="40" y="22">מבט מלמעלה</text>
  <text x="42" y="112">קוריוליס:</text>
  <text x="42" y="126">נגד כיוון השעון</text>
</g>

<!-- שלב 4: העין, חומת העין, והיבשה -->
<g class="only-4">
  <path class="arrow st-warm dash" d="M200 30V150" marker-end="url(#hurricane-w)"/>
  <text x="200" y="16">העין: אוויר שוקע ורגוע</text>
  <text x="42" y="80">חומת העין:</text>
  <text x="42" y="94">הרוח החזקה</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M68 90Q110 92 142 100" marker-end="url(#hurricane-a)"/>
  <text x="42" y="140">על היבשה</text>
  <text x="42" y="154">הסופה נחלשת</text>
</g>
`;
