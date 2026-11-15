// Wi-Fi: 1 תמונה הופכת לביטים · 2 הביטים מאופננים על גל רדיו · 3 חבילות ממוענות · 4 קיר מחליש, 5 מול 2.4 גיגה־הרץ
export default `
<defs>
  <clipPath id="wifi-pre"><rect x="94" y="40" width="103" height="76"/></clipPath>
  <clipPath id="wifi-post"><rect x="213" y="40" width="101" height="76"/></clipPath>
  <linearGradient id="wifi-g" gradientUnits="userSpaceOnUse" x1="94" y1="0" x2="314" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient>
  <mask id="wifi-fade" maskUnits="userSpaceOnUse" x="90" y="38" width="230" height="80"><rect x="90" y="38" width="230" height="80" fill="url(#wifi-g)"/></mask>
</defs>
<!-- האינטרנט מגיע לנתב בכבל -->
<path class="pipe st-dark" stroke-width="5" d="M0 126H30"/>
<path class="flow" d="M0 126H30"/>
<!-- תמונה שהופכת לביטים -->
<g class="hl-1">
  <rect class="body" x="12" y="152" width="28" height="24" rx="3"/>
  <circle class="fl-elec" cx="32" cy="159" r="3"/>
  <path class="fl-green" d="M14 174l8-10 5 6 4-4 7 8z"/>
  <path class="fl-ink" d="M43 160l6.5 4-6.5 4z"/>
</g>
<g class="hl-1 hl-2">
  <rect class="fl-ink st-ink" stroke-width="1.2" x="52" y="158" width="12" height="12"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="64" y="158" width="12" height="12"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="76" y="158" width="12" height="12"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="88" y="158" width="12" height="12"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="100" y="158" width="12" height="12"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="112" y="158" width="12" height="12"/>
  <path class="fl-ink" d="M84 154.500l4-7.5 4 7.500z"/>
</g>
<!-- הנתב -->
<path class="fl-none st-ink" stroke-width="3" stroke-linecap="round" d="M44 112V56M86 112V50"/>
<circle class="fl-ink" cx="44" cy="56" r="2.5"/><circle class="fl-ink" cx="86" cy="50" r="2.5"/>
<path class="fl-ink" d="M38 140h8v4h-8zM82 140h8v4h-8z"/>
<rect class="body" x="30" y="112" width="68" height="28" rx="6"/>
<circle class="fl-green blink" cx="42" cy="126" r="2.5"/><circle class="fl-green" cx="52" cy="126" r="2.5"/><circle class="fl-elec blink d2" cx="62" cy="126" r="2.5"/>
<path class="thin" d="M74 121h14M74 126h14M74 131h14"/>

<!-- גלי הרדיו: 5 גיגה־הרץ למעלה, 2.4 למטה -->
<g class="hl-2 hl-4" mask="url(#wifi-fade)">
    <g clip-path="url(#wifi-pre)"><path class="fl-none st-violet" stroke-width="2.2" stroke-linecap="round" d="M-48 62q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -10.08 6 0q3 10.08 6 0q3 -10.08 6 0q3 10.08 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -10.08 6 0q3 10.08 6 0q3 -10.08 6 0q3 10.08 6 0q3 -10.08 6 0q3 10.08 6 0q3 -10.08 6 0q3 10.08 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -10.08 6 0q3 10.08 6 0q3 -10.08 6 0q3 10.08 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -24 6 0q3 24 6 0q3 -10.08 6 0"><animateTransform attributeName="transform" type="translate" from="0 0" to="144 0" dur="3.6s" repeatCount="indefinite"/></path></g>
    <g clip-path="url(#wifi-post)"><path class="fl-none st-violet" stroke-width="2.2" stroke-linecap="round" d="M48 62q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -1.85 6 0q3 1.85 6 0q3 -1.85 6 0q3 1.85 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0q3 4.4 6 0q3 -4.4 6 0"><animateTransform attributeName="transform" type="translate" from="0 0" to="144 0" dur="3.6s" repeatCount="indefinite"/></path></g>
    <g clip-path="url(#wifi-pre)"><path class="fl-none st-cold" stroke-width="2.2" stroke-linecap="round" d="M-48 94q6 -24 12 0q6 24 12 0q6 -10.08 12 0q6 10.08 12 0q6 -24 12 0q6 24 12 0q6 -24 12 0q6 24 12 0q6 -10.08 12 0q6 10.08 12 0q6 -10.08 12 0q6 10.08 12 0q6 -24 12 0q6 24 12 0q6 -10.08 12 0q6 10.08 12 0q6 -24 12 0q6 24 12 0q6 -24 12 0q6 24 12 0q6 -10.08 12 0"><animateTransform attributeName="transform" type="translate" from="0 0" to="144 0" dur="3.6s" repeatCount="indefinite"/></path></g>
    <g clip-path="url(#wifi-post)"><path class="fl-none st-cold" stroke-width="2.2" stroke-linecap="round" d="M48 94q6 -5.46 12 0q6 5.46 12 0q6 -5.46 12 0q6 5.46 12 0q6 -13 12 0q6 13 12 0q6 -5.46 12 0q6 5.46 12 0q6 -13 12 0q6 13 12 0q6 -13 12 0q6 13 12 0q6 -5.46 12 0q6 5.46 12 0q6 -5.46 12 0q6 5.46 12 0q6 -13 12 0q6 13 12 0q6 -5.46 12 0q6 5.46 12 0q6 -13 12 0q6 13 12 0q6 -13 12 0"><animateTransform attributeName="transform" type="translate" from="0 0" to="144 0" dur="3.6s" repeatCount="indefinite"/></path></g>
</g>
<circle class="fl-violet st-ink" stroke-width="1.2" cx="86" cy="62" r="3.5"/>
<circle class="fl-cold st-ink" stroke-width="1.2" cx="86" cy="94" r="3.5"/>

<!-- קיר -->
<g class="hl-4">
  <rect class="fl-warm st-ink" stroke-width="2" x="198" y="42" width="14" height="138" rx="1.5"/>
  <path class="fl-none st-ink" stroke-width="1" stroke-opacity=".55" d="M198 54h14M198 66.6h14M198 79.2h14M198 91.8h14M198 104.4h14M198 117h14M198 129.6h14M198 142.2h14M198 154.8h14M198 167.39999999999998h14M207.5 42v12M202.5 54v12.6M207.5 66.6v12.6M202.5 79.2v12.6M207.5 91.8v12.6M202.5 104.4v12.6M207.5 117v12.6M202.5 129.6v12.6M207.5 142.2v12.6M202.5 154.8v12.6M207.5 167.4v12.6"/>
</g>

<!-- מכשירים: מחשב לפני הקיר, טלפון אחריו -->
<rect class="body" x="142" y="128" width="38" height="26" rx="3"/>
<rect class="fl-cold-soft" x="145" y="131" width="32" height="20" rx="1.5"/>
<rect class="fl-green" x="148" y="134" width="11" height="6" rx="1.5"/>
<path class="body" d="M136 154h50l-3 6h-44z"/>
<rect class="body" x="254" y="124" width="22" height="40" rx="4"/>
<rect class="fl-cold-soft" x="257" y="129" width="16" height="28" rx="1.5"/>
<rect class="fl-hot" x="260" y="133" width="10" height="6" rx="1.5"/>
<g class="hl-4"><rect class="fl-violet" x="284" y="139" width="3.5" height="3" rx="1"/><rect class="fl-line" opacity=".45" x="289.5" y="136" width="3.5" height="6" rx="1"/><rect class="fl-line" opacity=".45" x="295" y="133" width="3.5" height="9" rx="1"/><rect class="fl-line" opacity=".45" x="300.5" y="130" width="3.5" height="12" rx="1"/><rect class="fl-cold" x="284" y="159" width="3.5" height="3" rx="1"/><rect class="fl-cold" x="289.5" y="156" width="3.5" height="6" rx="1"/><rect class="fl-cold" x="295" y="153" width="3.5" height="9" rx="1"/><rect class="fl-line" opacity=".45" x="300.5" y="150" width="3.5" height="12" rx="1"/></g>

<!-- שלב 1 -->
<g class="only-1">
  <text class="sm" x="58" y="183">1</text>
  <text class="sm" x="70" y="183">0</text>
  <text class="sm" x="82" y="183">1</text>
  <text class="sm" x="94" y="183">1</text>
  <text class="sm" x="106" y="183">0</text>
  <text class="sm" x="118" y="183">0</text>
  <path class="fl-none st-hot" stroke-width="1.5" d="M14 153V175"><animate attributeName="d" values="M14 153V175;M38 153V175;M14 153V175" dur="2.4s" repeatCount="indefinite"/></path>
  <g><rect class="fade fl-none st-hot" stroke-width="2" x="52" y="158" width="12" height="12"/></g>
  <g><rect class="fade d1 fl-none st-hot" stroke-width="2" x="64" y="158" width="12" height="12"/></g>
  <g><rect class="fade d2 fl-none st-hot" stroke-width="2" x="76" y="158" width="12" height="12"/></g>
  <g><rect class="fade d3 fl-none st-hot" stroke-width="2" x="88" y="158" width="12" height="12"/></g>
  <g><rect class="fade d4 fl-none st-hot" stroke-width="2" x="100" y="158" width="12" height="12"/></g>
  <g><rect class="fade fl-none st-hot" stroke-width="2" x="112" y="158" width="12" height="12"/></g>
  <text x="224" y="196">כל תמונה היא רצף</text>
  <text x="224" y="210">של אפסים ואחדות</text>
</g>
<!-- שלב 2: הביטים רוכבים על הגל -->
<g class="only-2">
  <circle class="ring st-violet" cx="86" cy="62" r="13"/>
  <circle class="ring st-cold d3" cx="86" cy="94" r="13"/>
  <g><rect class="fl-ink st-ink fade" stroke-width="1" x="143" y="116" width="6" height="6"/></g>
  <g><rect class="fl-panel st-ink fade d1" stroke-width="1" x="149" y="116" width="6" height="6"/></g>
  <g><rect class="fl-ink st-ink fade d2" stroke-width="1" x="155" y="116" width="6" height="6"/></g>
  <g><rect class="fl-ink st-ink fade d3" stroke-width="1" x="161" y="116" width="6" height="6"/></g>
  <g><rect class="fl-panel st-ink fade d4" stroke-width="1" x="167" y="116" width="6" height="6"/></g>
  <g><rect class="fl-panel st-ink fade" stroke-width="1" x="173" y="116" width="6" height="6"/></g>
  <text x="190" y="24">הנתב משנה את הגל לפי הביטים</text>
  <text x="224" y="202">והמכשיר מפענח אותם בחזרה</text>
</g>
<!-- שלב 3: חבילות עם כתובת -->
<g class="only-3">
  
  <g><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite" path="M102 122L156 140"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.93;1" dur="2.4s" begin="0s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.4" x="-9" y="-6.5" width="18" height="13" rx="2"/><rect class="fl-green" x="-6.5" y="-4" width="13" height="4.5" rx="1"/><path class="thin st-ink" stroke-width="1" d="M-5.5 3.500h11"/></g>
  
  <g><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M102 122L132 150"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.78;1" dur="2.4s" begin="-1.2s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.4" x="-9" y="-6.5" width="18" height="13" rx="2"/><rect class="fl-hot" x="-6.5" y="-4" width="13" height="4.5" rx="1"/><path class="thin st-ink" stroke-width="1" d="M-5.5 3.500h11"/></g>
  
  <g><animateMotion dur="2.4s" begin="-0.6s" repeatCount="indefinite" path="M102 122C150 186 215 182 262 146"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.93;1" dur="2.4s" begin="-0.6s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.4" x="-9" y="-6.5" width="18" height="13" rx="2"/><rect class="fl-hot" x="-6.5" y="-4" width="13" height="4.5" rx="1"/><path class="thin st-ink" stroke-width="1" d="M-5.5 3.500h11"/></g>
  
  <g><animateMotion dur="2.4s" begin="-1.8s" repeatCount="indefinite" path="M102 122C150 192 215 188 244 154"/>
    <animate attributeName="opacity" values="1;1;0" keyTimes="0;.78;1" dur="2.4s" begin="-1.8s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1.4" x="-9" y="-6.5" width="18" height="13" rx="2"/><rect class="fl-green" x="-6.5" y="-4" width="13" height="4.5" rx="1"/><path class="thin st-ink" stroke-width="1" d="M-5.5 3.500h11"/></g>
  <path class="fl-none st-hot" stroke-width="2.2" stroke-linecap="round" opacity="0" d="M124 148l8 8M132 148l-8 8"><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.74;.86;1" dur="2.4s" begin="-1.2s" repeatCount="indefinite"/></path>
  <path class="fl-none st-hot" stroke-width="2.2" stroke-linecap="round" opacity="0" d="M238 152l8 8M246 152l-8 8"><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.74;.86;1" dur="2.4s" begin="-1.8s" repeatCount="indefinite"/></path>
  <text x="190" y="24">המידע נשלח בחבילות עם כתובת</text>
  <text x="224" y="202">כל מכשיר לוקח רק את שלו</text>
</g>
<!-- שלב 4: קירות ומרחק -->
<g class="only-4">
  <rect class="fl-none st-hot shake" stroke-width="1.5" x="195" y="39" width="20" height="144" rx="3"/>
  <text x="190" y="24" style="fill:var(--s-violet)">גל של 5 גיגה־הרץ נבלע מהר בקיר</text>
  <text x="224" y="202" style="fill:var(--s-cold)">גל של 2.4 איטי יותר ומגיע רחוק</text>
</g>
`;
