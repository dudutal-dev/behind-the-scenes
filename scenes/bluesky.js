// למה השמיים כחולים. 1 אור לבן הוא כל הצבעים · 2 מולקולות האוויר מפזרות כחול לכל הכיוונים · 3 למה לא סגול · 4 שקיעה: דרך ארוכה באוויר, ענן לבן
export default `
<!-- החלל והאטמוספרה -->
<path class="fl-cold-soft" d="M0 116Q160 92 320 116V196Q160 180 0 196z"/>
<path class="thin" style="stroke-dasharray:3 4" d="M0 116Q160 92 320 116"/>
<text x="22" y="128" class="sm">אוויר</text>

<!-- גרף: כמה אור מתפזר בכל אורך גל, יחסי ל־1/λ⁴ -->
<g>
  <text x="240" y="12" class="sm">כמה מתפזר</text>
  <defs><linearGradient id="bluesky-spec" x1="0" x2="1">
    <stop offset="0" stop-color="#7b1fa2"/><stop offset=".17" stop-color="#1e88e5"/><stop offset=".33" stop-color="#00acc1"/>
    <stop offset=".5" stop-color="#43a047"/><stop offset=".67" stop-color="#fdd835"/><stop offset=".83" stop-color="#fb8c00"/><stop offset="1" stop-color="#e53935"/>
  </linearGradient></defs>
  <rect x="183" y="65" width="114" height="8" rx="2" fill="url(#bluesky-spec)"/>
  <text x="188" y="85" class="sm">400</text>
  <text x="246" y="85" class="sm">ננומטר</text>
  <text x="292" y="85" class="sm">700</text>
</g>
<g class="from-2">
  <path class="thin" d="M181 62H299"/>
    <rect x="183" y="20" width="10" height="42" rx="1.5" fill="#8e24aa"/>
    <rect x="200.3" y="35.8" width="10" height="26.2" rx="1.5" fill="#1e88e5"/>
    <rect x="217.7" y="44.8" width="10" height="17.2" rx="1.5" fill="#00acc1"/>
    <rect x="235" y="50.2" width="10" height="11.8" rx="1.5" fill="#43a047"/>
    <rect x="252.3" y="53.7" width="10" height="8.3" rx="1.5" fill="#fdd835"/>
    <rect x="269.7" y="56" width="10" height="6" rx="1.5" fill="#fb8c00"/>
    <rect x="287" y="57.5" width="10" height="4.5" rx="1.5" fill="#e53935"/>
</g>
<g class="only-3">
  <path fill="none" stroke-width="1.6" stroke-dasharray="3 2" class="st-ink" d="M188 62L191.5 61.9L194.9 61.8L198.4 61.5L201.9 61.1L205.3 60.2L208.8 58.9L212.3 56.9L215.7 53.9L219.2 50L222.7 45.1L226.1 39.5L229.6 33.8L233.1 28.6L236.5 24.6L240 22.4L243.5 22.4L246.9 24.6L250.4 28.6L253.9 33.8L257.3 39.5L260.8 45.1L264.3 50L267.7 53.9L271.2 56.9L274.7 58.9L278.1 60.2L281.6 61.1L285.1 61.5L288.5 61.8L292 61.9"/>
  <circle class="fl-ink" r="2.4"><animateMotion dur="3s" repeatCount="indefinite" path="M188 62L191.5 61.9L194.9 61.8L198.4 61.5L201.9 61.1L205.3 60.2L208.8 58.9L212.3 56.9L215.7 53.9L219.2 50L222.7 45.1L226.1 39.5L229.6 33.8L233.1 28.6L236.5 24.6L240 22.4L243.5 22.4L246.9 24.6L250.4 28.6L253.9 33.8L257.3 39.5L260.8 45.1L264.3 50L267.7 53.9L271.2 56.9L274.7 58.9L278.1 60.2L281.6 61.1L285.1 61.5L288.5 61.8L292 61.9"/><animate attributeName="opacity" values="1;.3;1" dur="3s" repeatCount="indefinite"/></circle>
  <text x="284" y="36" class="sm">רגישות העין</text>
  <circle class="ring st-hot" cx="188" cy="41" r="12"/>
</g>

<!-- שמש גבוהה וקרן לבנה -->
<g class="hl-1 hl-2 hl-3">
  <g class="spin" style="animation-duration:16s"><path class="wire st-warm" style="stroke-width:2" d="M42 14v6M42 52v6M20 36h6M58 36h6M26.5 20.5l4 4M53.5 47.5l4 4M26.5 51.5l4-4M53.5 24.5l4-4"/></g>
  <circle class="fl-elec st-warm" stroke-width="2" cx="42" cy="36" r="11"/>
  <g fill="none" stroke-width="1.5" stroke-linecap="round">
    <path stroke="#8e24aa" d="M53.5 47.7L119.2 155"/>
    <path stroke="#1e88e5" d="M52.3 48.5L117.9 155.8"/>
    <path stroke="#43a047" d="M51 49.3L116.6 156.6"/>
    <path stroke="#fdd835" d="M49.7 50L115.4 157.4"/>
    <path stroke="#fb8c00" d="M48.4 50.8L114.1 158.2"/>
    <path stroke="#e53935" d="M47.1 51.6L112.8 159"/>
  </g>
  <circle class="fl-ink" cx="87.9" cy="111" r="2.6"/>
  <circle class="fl-ink" cx="99.7" cy="130.4" r="2.6"/>
</g>
<g class="only-1">
  <circle r="2.3" fill="#8e24aa"><animateMotion dur="1.6s" begin="-0.00s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle r="2.3" fill="#1e88e5"><animateMotion dur="1.6s" begin="-0.27s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle r="2.3" fill="#43a047"><animateMotion dur="1.6s" begin="-0.54s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle r="2.3" fill="#fdd835"><animateMotion dur="1.6s" begin="-0.81s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle r="2.3" fill="#fb8c00"><animateMotion dur="1.6s" begin="-1.08s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle r="2.3" fill="#e53935"><animateMotion dur="1.6s" begin="-1.35s" repeatCount="indefinite" path="M50.3 49.6L116 157"/></circle>
  <circle class="ring st-warm" cx="42" cy="36" r="20"/>
  <text x="208" y="152">אור השמש: כל הצבעים</text>
  <text x="208" y="167">יחד הם נראים לבנים</text>
</g>
<g class="only-2">
  <path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M82.1 109.5l-25.2 -6.3"/><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M93.2 108.1l22.8 -12.5"/><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M92.4 115l19.5 17.2"/><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M83.4 115l-19.5 17.2"/><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M87.3 105l-2.6 -25.9"/>
  <circle r="2.2" fill="#1e88e5"><animateMotion dur="1.2s" begin="-0.00s" repeatCount="indefinite" path="M87.9 111l-31 -7.8"/></circle><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.2s" begin="-0.24s" repeatCount="indefinite" path="M87.9 111l28 -15.4"/></circle><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.2s" begin="-0.48s" repeatCount="indefinite" path="M87.9 111l24 21.1"/></circle><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.2s" begin="-0.72s" repeatCount="indefinite" path="M87.9 111l-24 21.1"/></circle><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.2s" begin="-0.96s" repeatCount="indefinite" path="M87.9 111l-3.2 -31.8"/></circle>
  <circle class="ring st-cold" cx="87.9" cy="111" r="14"/>
  
  <text x="208" y="152">מולקולות האוויר מפזרות</text>
  <text x="208" y="167">כחול פי 6 יותר מאדום</text>
</g>
<g class="only-3">
  <text x="208" y="152">סגול: השמש פולטת פחות</text>
  <text x="208" y="167">והעין פחות רגישה אליו</text>
</g>

<!-- שקיעה: שמש באופק, דרך ארוכה באוויר -->
<g class="hl-4">
  <circle class="fl-warm st-hot" stroke-width="2" cx="306" cy="192" r="12"/>
  <path class="wire" style="stroke:#fdd835;stroke-width:3" d="M294 184L243.6 176.8"/><path class="wire" style="stroke:#fb8c00;stroke-width:3" d="M243.6 176.8L184.8 168.4"/><path class="wire" style="stroke:#e53935;stroke-width:3" d="M184.8 168.4L126 160"/>
  <path fill="#f6f7fb" class="st-line" stroke-width="1.5" d="M250 138Q244 138 244 132Q244 126 251 126Q253 118 262 119Q268 113 276 118Q285 116 287 124Q295 125 295 131Q295 138 288 138z"/>
</g>
<g class="only-4">
  <circle r="2.6" fill="#e53935"><animateMotion dur="2.4s" repeatCount="indefinite" path="M294 184L126 160"/></circle>
  <circle r="2.6" fill="#fb8c00"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M294 184L126 160"/></circle>
  <path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M273.8 177.1l6 -12"/><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.4s" begin="-0.00s" repeatCount="indefinite" path="M273.8 177.1l8 -16"/></circle><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M236.9 171.8l-6 -12"/><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.4s" begin="-0.45s" repeatCount="indefinite" path="M236.9 171.8l-8 -16"/></circle><path class="arrow" stroke="#1e88e5" style="stroke-width:1.8" d="M199.9 166.6l6 -12"/><circle r="2.2" fill="#1e88e5"><animateMotion dur="1.4s" begin="-0.90s" repeatCount="indefinite" path="M199.9 166.6l8 -16"/></circle>
  <text x="178" y="132">דרך ארוכה באוויר:</text>
  <text x="178" y="147">הכחול מתפזר בדרך</text>
  <text x="268" y="154" class="sm">ענן: כל הצבעים</text>
</g>

<!-- קרקע וצופה -->
<path class="fl-soft" d="M0 196Q160 180 320 196V220H0z"/>
<path class="thin" d="M0 196Q160 180 320 196"/>
<path class="body" d="M112 189V176Q112 170 119 170Q126 170 126 176V189z"/>
<circle class="body" cx="119" cy="163" r="6"/>
`;
