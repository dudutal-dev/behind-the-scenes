// סטונהנג': 1 גרירת אבן על מזחלת · 2 זקיפה לתוך בור משופע · 3 מפרקי שקע ושן ולשון וחריץ · 4 ציר ההיפוך והשמש
export default `
<defs>
  <marker id="stonehenge-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="stonehenge-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
  <clipPath id="stonehenge-sky"><rect x="0" y="0" width="320" height="160"/></clipPath>
</defs>

<!-- קרקע גיר -->
<rect class="fl-soft" x="0" y="160" width="320" height="60"/>
<path class="thin" style="stroke-width:1" d="M14 178h14M52 196h18M196 186h12M232 204h16M284 182h14M100 210h12M262 196h10"/>

<!-- שלב 4: השמש על האופק, אבן העקב והציר -->
<g class="hl-4">
  <g clip-path="url(#stonehenge-sky)">
    <circle class="fl-warm" cx="304" cy="160" r="14"><animate attributeName="opacity" values=".7;1;.7" dur="2.4s" repeatCount="indefinite"/></circle>
  </g>
  <path class="wire st-warm" style="stroke-width:1.6" d="M304 139v-8M290 146l-5-5M318 146l5-5"/>
  <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M272 160V138Q277 130 284 135L286 160z"/>
  <path class="wire st-warm dash" style="stroke-width:2.2" d="M296 150H232" marker-end="url(#stonehenge-s)"/>
</g>

<!-- שלב 1: אבן על מזחלת, נגררת על מסילת קורות -->
<g class="hl-1">
  <g class="fl-dark">
    <circle cx="16" cy="157" r="3"/><circle cx="36" cy="157" r="3"/><circle cx="56" cy="157" r="3"/><circle cx="76" cy="157" r="3"/><circle cx="96" cy="157" r="3"/>
  </g>
  <path class="wire st-ink" style="stroke-width:1.2" d="M6 154H100"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="10 0;-8 0" dur="3s" repeatCount="indefinite"/>
    <path class="st-ink fl-warm" stroke-width="1.5" stroke-linejoin="round" d="M44 154H88V149H44Q40 149 40 152z"/>
    <path class="fl-line st-ink" stroke-width="2" stroke-linejoin="round" d="M48 149L50 127Q66 121 84 126L86 149z"/>
    <path class="wire st-ink" style="stroke-width:1.2" d="M41 150L22 138"/>
  </g>
  <!-- צוות גוררים -->
  <g class="fl-ink">
    <circle cx="13" cy="127" r="3"/><path d="M10 131l-4 14h3l3-6 2 10h3l-1-12 4 4z"/>
    <circle cx="25" cy="127" r="3"/><path d="M22 131l-4 14h3l3-6 2 10h3l-1-12 4 4z"/>
  </g>
</g>

<!-- שלב 2: בור עם דופן משופעת; חבל ומסגרת עץ מושכים את האבן לזקיפות -->
<g class="hl-2">
  <path class="fl-bg st-ink" stroke-width="1.5" stroke-linejoin="round" d="M128 160V198H146L178 160"/>
  <path class="wire st-warm" style="stroke-width:3" d="M100 160L112 106L124 160M105 138H119"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="40 146 198;40 146 198;0 146 198;0 146 198" keyTimes="0;.15;.75;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1" dur="5s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="2" stroke-linejoin="round" d="M130 198L129 118Q138 110 146 116L146 198z"/>
  </g>
  <path class="wire st-ink" style="stroke-width:1.2" d="M112 106L130 116">
    <animate attributeName="d" values="M112 106L188 128;M112 106L188 128;M112 106L130 118;M112 106L130 118" keyTimes="0;.15;.75;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1" dur="5s" repeatCount="indefinite"/>
  </path>
  <path class="wire st-ink" style="stroke-width:1.2" d="M112 106L98 118" marker-end="url(#stonehenge-a)"/>
</g>

<!-- הטריליתון: שני עמודים ומשקוף -->
<g class="hl-3 hl-4">
  <path class="fl-line st-ink" stroke-width="2" stroke-linejoin="round" d="M204 160L206 92Q212 88 222 91L222 160z"/>
  <path class="fl-line st-ink" stroke-width="2" stroke-linejoin="round" d="M246 160L246 91Q256 88 264 92L266 160z"/>
  <path class="fl-line st-ink" stroke-width="2" stroke-linejoin="round" d="M200 78Q234 74 270 78V90Q234 87 200 90z"/>
  <path class="thin st-ink" style="stroke-width:1" stroke-dasharray="2 2" d="M210 90V86H218V90M251 90V86H259V90"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="60" y="30">סרסנים: כ־25 ק״מ</text>
  <text x="60" y="52">אבנים כחולות:</text>
  <text x="60" y="66">יותר מ־200 ק״מ</text>
  <text x="60" y="104">מזחלת עץ וחבלים</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="140" y="34">בור עם דופן משופעת</text>
  <text x="140" y="50">חבלים ומסגרת עץ</text>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M190 116Q182 96 158 98" marker-end="url(#stonehenge-a)"/>
</g>
<!-- שלב 3: מבט מפורק על המפרקים -->
<g class="only-3">
  <!-- שקע ושן: משקוף יורד על זיזי העמודים -->
  <path class="fl-line st-ink" stroke-width="1.6" stroke-linejoin="round" d="M146 62V46H151V42H157V46H178V42H184V46H189V62"/>
  <path class="thin st-ink" style="stroke-width:1" d="M167 46V62"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 -10;0 -10;0 0;0 0" keyTimes="0;.25;.6;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="1.6" stroke-linejoin="round" d="M142 28H193V42H184V38H178V42H157V38H151V42H142z"/>
  </g>
  <!-- לשון וחריץ: שני משקופים ננעלים בקצותיהם -->
  <path class="fl-line st-ink" stroke-width="1.6" stroke-linejoin="round" d="M212 34H248V40H254V46H248V52H212z"/>
  <g>
    <animateTransform attributeName="transform" type="translate" values="10 0;10 0;0 0;0 0" keyTimes="0;.25;.6;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1" dur="3s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="1.6" stroke-linejoin="round" d="M249 34H290V52H249V46H255V40H249z"/>
  </g>
  <text x="168" y="16">שקע ושן</text>
  <text x="252" y="16">לשון וחריץ</text>
  <text x="58" y="94">מפרקים של נגרים</text>
  <text x="58" y="108">באבן</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="236" y="26">זריחת אמצע הקיץ</text>
  <text x="236" y="42">ושקיעת אמצע החורף</text>
  <text x="236" y="58">על אותו ציר</text>
  <text class="sm" x="291" y="124">אבן העקב</text>
</g>
`;
