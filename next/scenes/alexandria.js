// ספריית אלכסנדריה: 1 ספר מספינה מועתק, המקור למדף (לפי הסיפור) · 2 ספר הוא גליל פפירוס · 3 קטלוג: סוגות ואז אלפבית · 4 המוזאיון: מלומדים שחוקרים ומחשבים
export default `
<defs>
  <marker id="alexandria-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="alexandria-sheet"><rect x="26" y="22" width="100" height="50"><animate attributeName="x" values="120;26;26;120" keyTimes="0;.45;.85;1" dur="5s" repeatCount="indefinite"/></rect></clipPath>
</defs>
<path class="thin" d="M8 206H312"/>

<!-- הבניין: גמלון, עמודים -->
<path class="body" d="M150 34L231 12L312 34Z"/>
<path class="body" d="M150 34H312V40H150Z"/>
<path class="body" d="M154 40H162V206H154Z"/>
<path class="body" d="M300 40H308V206H300Z"/>
<path class="thin" d="M162 104H300"/>

<!-- מדפים עם גלילים -->
<g class="hl-1 hl-2 hl-3">
  <rect class="body" x="198" y="110" width="96" height="92"/>
  <path class="thin" d="M198 133H294M198 156H294M198 179H294M230 110V202M262 110V202"/>
  <g class="fl-soft st-ink" stroke-width="1">
    <circle cx="206" cy="122" r="4"/><circle cx="215" cy="124" r="4"/><circle cx="223" cy="121" r="4"/><circle cx="238" cy="122" r="4"/><circle cx="247" cy="124" r="4"/><circle cx="255" cy="121" r="4"/><circle cx="270" cy="122" r="4"/><circle cx="279" cy="124" r="4"/><circle cx="287" cy="121" r="4"/>
    <circle cx="206" cy="145" r="4"/><circle cx="215" cy="147" r="4"/><circle cx="238" cy="145" r="4"/><circle cx="247" cy="147" r="4"/><circle cx="255" cy="144" r="4"/><circle cx="270" cy="145" r="4"/><circle cx="287" cy="146" r="4"/>
    <circle cx="206" cy="168" r="4"/><circle cx="215" cy="170" r="4"/><circle cx="223" cy="167" r="4"/><circle cx="247" cy="170" r="4"/><circle cx="270" cy="168" r="4"/><circle cx="279" cy="170" r="4"/><circle cx="287" cy="167" r="4"/>
    <circle cx="206" cy="191" r="4"/><circle cx="223" cy="190" r="4"/><circle cx="238" cy="191" r="4"/><circle cx="255" cy="190" r="4"/><circle cx="270" cy="191" r="4"/><circle cx="279" cy="193" r="4"/>
  </g>
</g>

<!-- 3 קטלוג: לוח עם סוגות ושמות, וצבע לכל סוגה במדפים -->
<g class="hl-3">
  <rect class="body" x="168" y="110" width="24" height="92" rx="2"/>
  <rect class="fl-green" x="172" y="115" width="16" height="4"/><path class="thin" style="stroke-width:1" d="M172 124H188M172 129H186M172 134H188"/>
  <rect class="fl-violet" x="172" y="141" width="16" height="4"/><path class="thin" style="stroke-width:1" d="M172 150H188M172 155H184M172 160H188"/>
  <rect class="fl-warm" x="172" y="167" width="16" height="4"/><path class="thin" style="stroke-width:1" d="M172 176H188M172 181H186M172 186H188M172 191H184"/>
</g>
<g class="only-3">
  <rect class="fl-elec" fill-opacity=".45" x="170" y="122" width="20" height="4"><animate attributeName="y" values="122;132;148;158;174;189;122" dur="3.5s" repeatCount="indefinite"/></rect>
  <g><circle class="fl-green" fill-opacity=".55" cx="206" cy="122" r="3"/><circle class="fl-green" fill-opacity=".55" cx="215" cy="124" r="3"/><circle class="fl-green" fill-opacity=".55" cx="223" cy="121" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="238" cy="122" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="247" cy="124" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="255" cy="121" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="270" cy="122" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="279" cy="124" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="287" cy="121" r="3"/><circle class="fl-green" fill-opacity=".55" cx="206" cy="145" r="3"/><circle class="fl-green" fill-opacity=".55" cx="215" cy="147" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="238" cy="145" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="247" cy="147" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="255" cy="144" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="270" cy="145" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="287" cy="146" r="3"/><circle class="fl-green" fill-opacity=".55" cx="206" cy="168" r="3"/><circle class="fl-green" fill-opacity=".55" cx="215" cy="170" r="3"/><circle class="fl-green" fill-opacity=".55" cx="223" cy="167" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="247" cy="170" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="270" cy="168" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="279" cy="170" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="287" cy="167" r="3"/><circle class="fl-green" fill-opacity=".55" cx="206" cy="191" r="3"/><circle class="fl-green" fill-opacity=".55" cx="223" cy="190" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="238" cy="191" r="3"/><circle class="fl-violet" fill-opacity=".55" cx="255" cy="190" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="270" cy="191" r="3"/><circle class="fl-warm" fill-opacity=".55" cx="279" cy="193" r="3"/></g>
  <g fill-opacity=".8"><rect class="fl-green" x="199" y="111" width="30" height="3"/><rect class="fl-violet" x="231" y="111" width="30" height="3"/><rect class="fl-warm" x="263" y="111" width="30" height="3"/></g>
</g>

<!-- 4 המוזאיון: שני מלומדים ולוח עם החישוב של ארטוסתנס -->
<g class="hl-4">
  <path class="body" d="M180 92H284V98H180Z"/>
  <path class="st-ink fl-none" stroke-width="2" d="M186 98V102M278 98V102"/>
  <g transform="translate(176 92)"><circle class="fl-ink" cx="0" cy="-30" r="4"/><path class="st-ink fl-none" stroke-width="2.6" stroke-linecap="round" d="M0 -25V-10M0 -20L8 -16M0 -10L-3 0M0 -10L4 0"/></g>
  <g transform="translate(288 92)"><circle class="fl-ink" cx="0" cy="-30" r="4"/><path class="st-ink fl-none" stroke-width="2.6" stroke-linecap="round" d="M0 -25V-10M0 -20L-8 -16M0 -10L-3 0M0 -10L4 0"/></g>
  <rect class="body" x="204" y="46" width="56" height="42" rx="2"/>
  <circle class="fl-cold-soft st-ink" stroke-width="1.4" cx="232" cy="70" r="13"/>
  <path class="st-ink fl-none" stroke-width="1.2" d="M232 70L232 57M232 70L240.4 60"/>
  <path class="st-elec fl-none" stroke-width="1.4" stroke-dasharray="3 3" d="M232 48V57M240.4 48V60"><animate attributeName="stroke-dashoffset" values="0;-12" dur=".8s" repeatCount="indefinite"/></path>
  <path class="st-hot fl-none" stroke-width="1.6" d="M232 64A6 6 0 0 1 235.9 65.4"/>
  <rect class="fl-warm st-ink" stroke-width="1" x="198" y="86" width="12" height="4" rx="2"/>
  <rect class="fl-soft st-ink" stroke-width="1" x="252" y="86" width="14" height="4" rx="2"/>
</g>

<!-- 2 גליל פפירוס נפתח -->
<g class="hl-2">
  <g clip-path="url(#alexandria-sheet)">
    <rect class="fl-panel st-line" stroke-width="1" x="26" y="26" width="100" height="42"/>
    <g class="st-line" stroke-width="1">
      <path d="M36 34H56M36 40H56M36 46H54M36 52H56M36 58H52M66 34H86M66 40H86M66 46H84M66 52H86M66 58H82M96 34H116M96 40H114M96 46H116M96 52H112"/></g>
  </g>
  <rect class="fl-soft st-ink" stroke-width="2" x="120" y="22" width="12" height="50" rx="6"/>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;-100 0;-100 0;0 0" keyTimes="0;.45;.85;1" dur="5s" repeatCount="indefinite"/>
    <rect class="fl-soft st-ink" stroke-width="2" x="120" y="22" width="12" height="50" rx="6"/></g>
</g>

<!-- נמל וספינה -->
<rect class="fl-cold-soft" x="0" y="184" width="80" height="22"/>
<path class="st-cold fl-none" stroke-width="1.4" d="M0 184q5-3 10 0t10 0 10 0 10 0 10 0 10 0 10 0 10 0"/>
<g class="hl-1">
  <path class="body" d="M10 176H70L62 190H18Z"/>
  <path class="st-ink fl-none" stroke-width="2" d="M40 176V138"/>
  <path class="fl-panel st-ink" stroke-width="1.4" d="M42 140Q60 154 42 170Z"/>
  <!-- שולחן מעתיק וסופר -->
  <path class="body" d="M92 160H146V166H92Z"/>
  <path class="st-ink fl-none" stroke-width="2.2" d="M98 166V206M140 166V206"/>
  <g transform="translate(130 160)"><circle class="fl-ink" cx="8" cy="-24" r="4"/><path class="st-ink fl-none" stroke-width="2.6" stroke-linecap="round" d="M8 -19V-4M8 -14L-2 -6"/></g>
  <rect class="fl-panel st-ink" stroke-width="1" x="100" y="154" width="14" height="6" rx="3"/>
  <rect class="fl-panel st-ink" stroke-width="1" x="116" y="154" width="12" height="6" rx="3"/>
</g>
<g class="only-1">
  <path class="st-ink fl-none" stroke-width="1.6" stroke-linecap="round" d="M124 150L130 144"><animateTransform attributeName="transform" type="translate" values="0 0;-3 1;0 0" dur=".4s" repeatCount="indefinite"/></path>
  <path class="st-line fl-none dash" stroke-width="1.2" d="M44 170Q70 130 106 150"/>
  <path class="st-line fl-none dash" stroke-width="1.2" d="M112 150Q150 96 210 118"/>
  <g><animateMotion dur="4s" repeatCount="indefinite" path="M44 170Q70 130 106 150Q150 96 210 118"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="4s" repeatCount="indefinite"/>
    <rect class="fl-warm st-ink" stroke-width="1" x="-7" y="-3" width="14" height="6" rx="3"/></g>
  <g><animateMotion dur="2.4s" begin="-1s" repeatCount="indefinite" path="M120 150Q86 124 52 168"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.4s" begin="-1s" repeatCount="indefinite"/>
    <rect class="fl-panel st-ink" stroke-width="1" x="-6" y="-3" width="12" height="6" rx="3"/></g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="62" y="100">מקור לספרייה</text><text x="62" y="114">העתק לבעלים</text><text x="62" y="128" class="sm">לפי סיפור עתיק</text></g>
<g class="only-2"><text x="72" y="94">ספר = גליל פפירוס</text><text x="72" y="108">חיבור ארוך: כמה גלילים</text></g>
<g class="only-3"><text x="72" y="96">פינקס: לפי סוגה</text><text x="72" y="110">ובתוכה לפי אלפבית</text></g>
<g class="only-4"><text x="72" y="96">מוזאיון: מכון מחקר</text><text x="72" y="110">מלומדים במשכורת</text></g>
`;
