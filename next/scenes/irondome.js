// כיפת ברזל: 1 המכ״ם מגלה ועוקב · 2 המחשב חוזה את נקודת הנפילה · 3 מיירטים רק מה שנופל באזור מוגן · 4 תמיר נפגש עם הרקטה ומתפוצץ בסמוך לה
export default `
<defs>
  <marker id="irondome-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <g id="irondome-rk"><path class="fl-dark st-ink" stroke-width="1" d="M-7 -2H4L8 0L4 2H-7Z"/><path class="fl-ink" d="M-7 -2L-10 -4V4L-7 2Z"/></g>
  <g id="irondome-tm"><path class="fl-panel st-ink" stroke-width="1" d="M-6 -1.600H4L7 0L4 1.600H-6Z"/><path class="fl-warm" d="M-6 -1.300L-12 0L-6 1.300Z"/></g>
</defs>
<!-- קרקע -->
<path class="thin" d="M4 197H316"/>
<!-- אזור מוגן מעל העיר -->
<g class="hl-3">
  <path class="fl-cold-soft st-cold" stroke-width="1.2" stroke-dasharray="4 3" d="M246 197V150Q281 128 316 150V197"/>
</g>
<!-- העיר -->
<g>
  <rect class="body" x="252" y="168" width="14" height="29"/>
  <rect class="body" x="268" y="156" width="16" height="41"/>
  <rect class="body" x="286" y="174" width="12" height="23"/>
  <rect class="body" x="300" y="162" width="12" height="35"/>
  <path class="st-line" stroke-width="2" d="M256 175h6M256 183h6M272 164h8M272 173h8M272 182h8M289 181h6M303 170h6M303 179h6"/>
</g>
<!-- שטח פתוח -->
<path class="fl-green" opacity=".45" d="M150 197q6-5 12 0q6-6 13 0q5-4 10 0z"/>

<!-- מסלול הרקטה (קשת בליסטית) -->
<path class="thin" style="stroke-width:1.2" stroke-dasharray="1 4" d="M14 196Q149 -116 284 196"/>
<!-- משגר הרקטות -->
<path class="fl-dark st-ink" stroke-width="1.5" d="M8 197L14 186L20 197Z"/>

<!-- מכ״ם -->
<g class="hl-1 hl-2">
  <path class="st-ink fl-none" stroke-width="2" d="M100 197V182M92 197H108"/>
  <rect class="fl-cold st-ink" stroke-width="2" x="88" y="160" width="24" height="22" rx="2" transform="rotate(-14 100 171)"/>
  <path fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1" transform="rotate(-14 100 171)" d="M94 162v18M100 162v18M106 162v18M90 167h20M90 174h20"/>
</g>
<!-- מחשב ניהול הקרב -->
<g class="hl-2 hl-3">
  <path class="wire st-line" style="stroke-width:1.5" d="M112 190H128"/>
  <rect class="body" x="128" y="178" width="30" height="19" rx="3"/>
  <rect class="fl-dark" x="132" y="181" width="22" height="11" rx="1.500"/>
  <path class="st-elec fl-none" stroke-width="1" d="M134 190Q142 178 152 190"/>
  <path class="wire st-line" style="stroke-width:1.5" stroke-dasharray="3 3" d="M158 190H222"/>
</g>
<!-- משגר המיירטים -->
<g class="hl-4">
  <path class="st-ink fl-none" stroke-width="2" d="M226 197L232 186M238 197L234 186"/>
  <rect class="fl-dark st-ink" stroke-width="1.5" x="224" y="172" width="22" height="13" rx="1.500" transform="rotate(-58 235 178)"/>
  <path stroke="#fff" stroke-opacity=".5" stroke-width="1" transform="rotate(-58 235 178)" d="M224 176.300H246M224 180.600H246"/>
</g>

<!-- שלב 1: גילוי ומעקב -->
<g class="hl-1 hl-2">
  <circle class="fl-elec st-ink" stroke-width=".8" cx="41" cy="139.8" r="2.4"/>
  <circle class="fl-elec st-ink" stroke-width=".8" cx="54.5" cy="116.4" r="2.4"/>
  <circle class="fl-elec st-ink" stroke-width=".8" cx="68" cy="96.2" r="2.4"/>
  <circle class="fl-elec st-ink" stroke-width=".8" cx="81.5" cy="79" r="2.4"/>
  <circle class="fl-elec st-ink" stroke-width=".8" cx="95" cy="65" r="2.4"/>
</g>
<g class="only-1">
  <circle class="ring st-cold" cx="100" cy="171" r="40"/><circle class="ring st-cold d3" cx="100" cy="171" r="40"/>
  <path class="wire st-cold dash" style="stroke-width:1.5" d="M96 160L68 98"/>
  <use href="#irondome-rk"><animateMotion dur="3s" repeatCount="indefinite" rotate="auto" keyPoints="0;.4" keyTimes="0;1" calcMode="linear" path="M14 196Q149 -116 284 196"/></use>
  <g><circle class="fl-elec" cx="108.5" cy="54" r="2.4"><animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/></circle></g>
  <text x="44" y="30">מכ״ם מגלה</text><text x="44" y="44">את הרקטה</text>
  <text x="168" y="124">כל נקודה: מדידה</text><text x="70" y="190">מכ״ם</text>
</g>

<!-- שלב 2: חיזוי -->
<g class="only-2">
  <path class="wire st-warm dash" style="stroke-width:2" d="M95 65Q189.5 -22.4 284 196"/>
  <circle class="ring st-hot" cx="284" cy="194" r="14"/>
  <path class="st-hot" stroke-width="3" stroke-linecap="round" d="M278 188l12 12M290 188l-12 12"/>
  <use href="#irondome-rk" transform="translate(108.5 54) rotate(-35)"/>
  <g><circle class="fl-elec" cx="142" cy="186" r="1.8"><animate attributeName="opacity" values="0;1;0" dur=".7s" repeatCount="indefinite"/></circle></g>
  <text x="44" y="30">חיזוי:</text><text x="44" y="44">היכן תיפול</text>
  <text x="205" y="140">נקודת פגיעה</text><text x="205" y="154">צפויה</text><text x="143" y="171" class="sm">מחשב</text>
</g>

<!-- שלב 3: החלטה -->
<g class="only-3">
  <path class="wire st-green" style="stroke-width:1.6" stroke-dasharray="4 3" d="M14 196Q92 40 170 196"/>
  <path class="st-green" stroke-width="3" stroke-linecap="round" d="M164 186l10 10M174 186l-10 10"/>
  <path class="wire st-hot" style="stroke-width:2" stroke-dasharray="5 4" d="M95 65Q189.5 -22.4 284 196"/>
  <g><path class="st-hot" stroke-width="3" stroke-linecap="round" d="M278 184l12 12M290 184l-12 12"><animate attributeName="opacity" values=".3;1;.3" dur="1s" repeatCount="indefinite"/></path></g>
  <text x="198" y="152" class="sm">שטח פתוח:</text><text x="198" y="164" class="sm">לא מיירטים</text>
  <text x="274" y="36">אזור מוגן:</text><text x="274" y="50">מיירטים</text>
  <text x="44" y="30">להחליט</text><text x="44" y="44">אם ליירט</text>
</g>

<!-- שלב 4: יירוט -->
<g class="only-4">
  <use href="#irondome-rk"><animateMotion dur="3s" repeatCount="indefinite" rotate="auto" keyPoints=".44;.686;.686" keyTimes="0;.6;1" calcMode="linear" path="M14 196Q149 -116 284 196"/>
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.6;.61;1" dur="3s" repeatCount="indefinite"/></use>
  <path class="wire st-line" style="stroke-width:1.2" stroke-dasharray="2 3" d="M238 176Q234 118 216.5 79"/>
  <use href="#irondome-tm"><animateMotion dur="3s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.2;.6;1" calcMode="linear" path="M238 176Q234 118 216.5 79"/>
    <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.19;.2;.6;.61;1" dur="3s" repeatCount="indefinite"/></use>
  <g><circle class="fl-warm" cx="216.5" cy="79" r="12"><animate attributeName="opacity" values="0;0;.95;0;0" keyTimes="0;.6;.64;.85;1" dur="3s" repeatCount="indefinite"/><animate attributeName="r" values="2;2;14;18;18" keyTimes="0;.6;.66;.85;1" dur="3s" repeatCount="indefinite"/></circle></g>
  <g><circle class="fl-hot" cx="216.5" cy="79" r="5"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.6;.62;.75;1" dur="3s" repeatCount="indefinite"/></circle></g>
  <text x="44" y="30">״תמיר״ נפגש</text><text x="44" y="44">עם הרקטה</text>
  <text x="272" y="56">מרעום קרבה</text>
  <text x="196" y="150">מיירט</text>
</g>
`;
