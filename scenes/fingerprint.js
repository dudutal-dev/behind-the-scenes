// חיישן טביעת אצבע: 1 רכסים ועמקים בעור · 2 רכס שנוגע משנה את המטען בלוחית, ונבנית מפה · 3 נקודות ייחוד הופכות לתבנית · 4 השוואה בשבב נעול שמחזיר רק כן או לא
export default `
<defs>
  <clipPath id="fingerprint-map"><rect x="228" y="6" width="78" height="78" rx="6"/></clipPath>
  <marker id="fingerprint-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- חתך: עור האצבע על החיישן -->
<g class="hl-1 hl-2">
  <path style="fill:var(--s-warm);fill-opacity:.32" class="st-ink" stroke-width="2" stroke-linejoin="round" d="M8 42L12 42C17 42 20 54 25 54C30 54 33 42 38 42C43 42 46 54 51 54C56 54 59 42 64 42C69 42 72 54 77 54C82 54 85 42 90 42C95 42 98 54 103 54C108 54 111 42 116 42C121 42 124 54 129 54C134 54 137 42 142 42C147 42 150 54 155 54C160 54 163 42 168 42C173 42 176 54 181 54C186 54 189 42 194 42L198 42V6H8Z"/>
  <path class="thin" d="M8 31L12 31C17 31 20 38 25 38C30 38 33 31 38 31C43 31 46 38 51 38C56 38 59 31 64 31C69 31 72 38 77 38C82 38 85 31 90 31C95 31 98 38 103 38C108 38 111 31 116 31C121 31 124 38 129 38C134 38 137 31 142 31C147 31 150 38 155 38C160 38 163 31 168 31C173 31 176 38 181 38C186 38 189 31 194 31L198 31"/>
  <rect class="fl-cold-soft st-ink" stroke-width="1.2" x="8" y="54" width="190" height="6"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="8" y="60" width="190" height="26" rx="2"/>
  <path fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1" d="M25 68V78M38 68V78M51 68V78M64 68V78M77 68V78M90 68V78M103 68V78M116 68V78M129 68V78M142 68V78M155 68V78M168 68V78M181 68V78M25 78H198"/>
  <g class="fl-line"><rect x="21" y="63" width="8" height="5" rx="1"/><rect x="34" y="63" width="8" height="5" rx="1"/><rect x="47" y="63" width="8" height="5" rx="1"/><rect x="60" y="63" width="8" height="5" rx="1"/><rect x="73" y="63" width="8" height="5" rx="1"/><rect x="86" y="63" width="8" height="5" rx="1"/><rect x="99" y="63" width="8" height="5" rx="1"/><rect x="112" y="63" width="8" height="5" rx="1"/><rect x="125" y="63" width="8" height="5" rx="1"/><rect x="138" y="63" width="8" height="5" rx="1"/><rect x="151" y="63" width="8" height="5" rx="1"/><rect x="164" y="63" width="8" height="5" rx="1"/><rect x="177" y="63" width="8" height="5" rx="1"/></g>
  <path class="thin" d="M198 78H212V45H228"/>
</g>
<g class="from-2"><g class="fl-elec"><rect x="21" y="63" width="8" height="5" rx="1"/><rect x="47" y="63" width="8" height="5" rx="1"/><rect x="73" y="63" width="8" height="5" rx="1"/><rect x="99" y="63" width="8" height="5" rx="1"/><rect x="125" y="63" width="8" height="5" rx="1"/><rect x="151" y="63" width="8" height="5" rx="1"/><rect x="177" y="63" width="8" height="5" rx="1"/></g></g>
<!-- מפת הרכסים -->
<g class="hl-2 hl-3">
  <rect class="body" x="228" y="6" width="78" height="78" rx="6"/>
  <g clip-path="url(#fingerprint-map)"><path class="wire st-ink" style="stroke-width:2" d="M267 84V52M261 84V46A6 6 0 0 1 273 46V84M255 70V46A12 12 0 0 1 279 46V84M279 62Q280 71 285 76V84M249 84V46A18 18 0 0 1 285 46V58M237 70Q243 64 243 56V46A24 24 0 0 1 291 46V84M237 84V46A30 30 0 0 1 297 46V84M231 62V46A36 36 0 0 1 290.1 18.4M300.8 33.7A36 36 0 0 1 303 46V84M225 84V46A42 42 0 0 1 309 46V84"/></g>
  <rect class="fl-none st-ink" stroke-width="2" x="228" y="6" width="78" height="78" rx="6"/>
</g>
<!-- נקודות ייחוד ותבנית -->
<g class="from-3">
  <circle class="fl-none st-hot pulse d1" stroke-width="2" cx="267" cy="52" r="4"/><circle class="fl-none st-hot pulse d2" stroke-width="2" cx="285" cy="58" r="4"/><circle class="fl-none st-hot pulse d3" stroke-width="2" cx="237" cy="70" r="4"/><circle class="fl-none st-hot pulse d4" stroke-width="2" cx="255" cy="70" r="4"/><circle class="fl-none st-hot pulse d1" stroke-width="2" cx="279" cy="62" r="4"/><circle class="fl-none st-hot pulse d2" stroke-width="2" cx="231" cy="62" r="4"/><circle class="fl-none st-hot pulse d3" stroke-width="2" cx="290.1" cy="18.4" r="4"/><circle class="fl-none st-hot pulse d4" stroke-width="2" cx="300.8" cy="33.7" r="4"/>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M267 88V121" marker-end="url(#fingerprint-a)"/>
  <rect class="body" style="stroke-width:1.5;stroke-dasharray:4 3" x="236" y="126" width="62" height="62" rx="6"/>
  <path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M267 161.8l0 6"/><circle class="fl-hot" cx="267" cy="161.8" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M279.5 166l0 -6"/><circle class="fl-hot" cx="279.5" cy="166" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M246.2 174.3l0 6"/><circle class="fl-hot" cx="246.2" cy="174.3" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M258.7 174.3l0 -6"/><circle class="fl-hot" cx="258.7" cy="174.3" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M275.3 168.8l0 -6"/><circle class="fl-hot" cx="275.3" cy="168.8" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M242.1 168.8l0 -6"/><circle class="fl-hot" cx="242.1" cy="168.8" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M283 138.6l-4.6 -3.8"/><circle class="fl-hot" cx="283" cy="138.6" r="2.6"/><path class="st-hot fl-none" stroke-width="1.6" stroke-linecap="round" d="M290.4 149.2l2 5.6"/><circle class="fl-hot" cx="290.4" cy="149.2" r="2.6"/>
</g>
<!-- שבב מאובטח וטלפון -->
<g class="hl-4">
  <path class="wire st-hot" style="stroke-width:2" d="M236 158H186"/>
  <path class="wire st-green" style="stroke-width:2" d="M110 158H62"/>
  <path class="thin st-ink" d="M120 186v5M132 186v5M144 186v5M156 186v5M168 186v5M180 186v5M118 130v-5M128 130v-5M168 130v-5M178 130v-5"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="110" y="130" width="76" height="56" rx="4"/>
  <rect class="fl-panel" x="116" y="150" width="24" height="31" rx="2"/><rect class="fl-panel" x="156" y="150" width="24" height="31" rx="2"/>
  <circle class="fl-hot" cx="122" cy="158" r="1.8"/><circle class="fl-hot" cx="133" cy="156" r="1.8"/><circle class="fl-hot" cx="128" cy="166" r="1.8"/><circle class="fl-hot" cx="121" cy="175" r="1.8"/><circle class="fl-hot" cx="135" cy="176" r="1.8"/><circle class="fl-hot" cx="162" cy="158" r="1.8"/><circle class="fl-hot" cx="173" cy="156" r="1.8"/><circle class="fl-hot" cx="168" cy="166" r="1.8"/><circle class="fl-hot" cx="161" cy="175" r="1.8"/><circle class="fl-hot" cx="175" cy="176" r="1.8"/>
  <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M144 162h8M144 168h8"/>
  <path class="wire st-ink" style="stroke-width:2" d="M143.5 134v-5a4.5 4.5 0 0 1 9 0v5"/>
  <rect class="fl-elec st-ink" stroke-width="1.5" x="140" y="133" width="16" height="12" rx="2"/>
  <circle class="fl-ink" cx="148" cy="139" r="1.6"/>
  <rect class="body" x="22" y="124" width="40" height="72" rx="7"/>
  <rect class="fl-cold-soft" x="26" y="131" width="32" height="56" rx="2"/>
  <path class="thin st-ink" d="M37 191.5h10"/>
  <circle class="fl-green" cx="42" cy="159" r="11"/>
  <path fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" d="M36.5 159l4 4.5 7-8.5"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <path class="wire st-hot" style="stroke-width:3" d="M8 42L12 42C17 42 20 54 25 54C30 54 33 42 38 42C43 42 46 54 51 54C56 54 59 42 64 42C69 42 72 54 77 54C82 54 85 42 90 42C95 42 98 54 103 54C108 54 111 42 116 42C121 42 124 54 129 54C134 54 137 42 142 42C147 42 150 54 155 54C160 54 163 42 168 42C173 42 176 54 181 54C186 54 189 42 194 42L198 42"/>
  <circle class="fl-hot st-ink" stroke-width="1" r="4"><animateMotion dur="5s" repeatCount="indefinite" path="M8 42L12 42C17 42 20 54 25 54C30 54 33 42 38 42C43 42 46 54 51 54C56 54 59 42 64 42C69 42 72 54 77 54C82 54 85 42 90 42C95 42 98 54 103 54C108 54 111 42 116 42C121 42 124 54 129 54C134 54 137 42 142 42C147 42 150 54 155 54C160 54 163 42 168 42C173 42 176 54 181 54C186 54 189 42 194 42L198 42"/></circle>
  <text x="103" y="102">רכסים ועמקים בעור האצבע</text>
  <text x="103" y="117">דפוס שונה אצל כל אדם</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <path class="wire st-elec dash" style="stroke-width:1.4;stroke-dasharray:2 2" d="M22 55V63M25 55V63M28 55V63M48 55V63M51 55V63M54 55V63M74 55V63M77 55V63M80 55V63M100 55V63M103 55V63M106 55V63M126 55V63M129 55V63M132 55V63M152 55V63M155 55V63M158 55V63M178 55V63M181 55V63M184 55V63"/>
  <g class="fl-elec"><rect class="fade" x="21" y="63" width="8" height="5" rx="1"/><rect class="fade" x="47" y="63" width="8" height="5" rx="1"/><rect class="fade" x="73" y="63" width="8" height="5" rx="1"/><rect class="fade" x="99" y="63" width="8" height="5" rx="1"/><rect class="fade" x="125" y="63" width="8" height="5" rx="1"/><rect class="fade" x="151" y="63" width="8" height="5" rx="1"/><rect class="fade" x="177" y="63" width="8" height="5" rx="1"/></g>
  <path class="wire st-elec" style="stroke-width:2" d="M198 78H212V45H228"/><path class="flow" d="M198 78H212V45H228"/>
  <g clip-path="url(#fingerprint-map)"><rect class="fl-elec" x="228" y="6" width="4" height="78" opacity=".8"><animate attributeName="x" values="226;306" dur="2.2s" repeatCount="indefinite"/></rect></g>
  <text x="103" y="102">רכס נוגע: המטען משתנה</text>
  <text x="103" y="117">עמק רחוק: כמעט לא</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M267 52L267 161.8"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-0.3s" repeatCount="indefinite" path="M285 58L279.5 166"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-0.6s" repeatCount="indefinite" path="M237 70L246.2 174.3"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-0.9s" repeatCount="indefinite" path="M255 70L258.7 174.3"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M279 62L275.3 168.8"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-1.5s" repeatCount="indefinite" path="M231 62L242.1 168.8"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-1.8s" repeatCount="indefinite" path="M290.1 18.4L283 138.6"/></circle><circle class="fl-hot" r="2.2"><animateMotion dur="2.4s" begin="-2.1s" repeatCount="indefinite" path="M300.8 33.7L290.4 149.2"/></circle>
  <text x="140" y="108">מאתרים קצוות ופיצולים</text>
  <text x="267" y="205">רק נקודות נשמרות</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <path class="flow" d="M236 158H186"/><path class="flow" d="M110 158H62"/>
  <path class="blink" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M144 162h8M144 168h8"/>
  <circle class="ring st-green" cx="42" cy="159" r="20"/>
  <text x="148" y="210">השוואה בשבב נעול</text>
  <text x="48" y="210">רק כן או לא</text>
</g>
`;
