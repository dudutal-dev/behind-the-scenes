// יוני דואר: 1 מעבירים יונים בכלוב, והן חוזרות רק הביתה · 2 מצפן שמש עם שעון פנימי, ומצפן מגנטי · 3 ה״מפה״: ריחות ברוח או שדה מגנטי (השערות) · 4 ליד הבית: מסלול קבוע לאורך נקודות ציון
export default `
<defs>
  <marker id="pigeons-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<rect class="fl-soft" x="0" y="150" width="320" height="70"/>
<path class="thin" d="M0 150H320"/>

<!-- 4 כביש ומסלול קבוע -->
<g class="hl-1 hl-4">
  <path class="st-line fl-none" stroke-width="9" stroke-linecap="round" d="M70 192C130 192 150 170 200 172S270 192 312 178"/>
  <path class="fl-none" stroke="var(--s-bg)" stroke-width="1.4" stroke-dasharray="6 6" d="M70 192C130 192 150 170 200 172S270 192 312 178"/>
</g>

<!-- השובך -->
<g class="hl-1 hl-4">
  <rect class="fl-dark" x="49" y="156" width="6" height="36"/>
  <path class="body" d="M28 156V128H76V156Z"/>
  <path class="body" d="M24 128L52 110L80 128Z"/>
  <g class="fl-dark"><rect x="34" y="136" width="9" height="8" rx="4"/><rect x="48" y="136" width="9" height="8" rx="4"/><rect x="62" y="136" width="9" height="8" rx="4"/></g>
  <path class="st-ink fl-none" stroke-width="1.6" d="M32 146H72"/>
</g>

<!-- נקודת השחרור -->
<g class="hl-1">
  <path class="st-ink fl-none" stroke-width="1.2" stroke-dasharray="4 4" d="M272 140Q170 40 64 122" marker-end="url(#pigeons-a)"/>
  <g transform="translate(278 150)">
    <rect class="body" x="-14" y="-16" width="28" height="14" rx="2"/>
    <path class="thin" style="stroke-width:1" d="M-7 -16V-2M0 -16V-2M7 -16V-2"/>
  </g>
</g>

<!-- 1 עגלה עם כלוב, מהשובך אל נקודת השחרור -->
<g class="only-1">
  <g><animateMotion dur="5s" repeatCount="indefinite" path="M84 190C130 190 150 170 200 172S262 188 296 180"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="5s" repeatCount="indefinite"/>
    <g transform="translate(0 0)">
      <rect class="body" x="-16" y="-16" width="32" height="10" rx="2"/>
      <path class="thin" style="stroke-width:1" d="M-8 -16V-6M0 -16V-6M8 -16V-6"/>
      <circle class="fl-panel st-ink" stroke-width="1.6" cx="-9" cy="-3" r="4"/><circle class="fl-panel st-ink" stroke-width="1.6" cx="9" cy="-3" r="4"/>
    </g>
  </g>
</g>

<!-- 2 שמש, שעון פנימי, זווית; ענן ומצפן מגנטי -->
<g class="hl-2">
  <g class="st-elec" stroke-width="2" stroke-linecap="round"><path d="M290 14v-4M290 42v4M276 28h-4M304 28h4M280 18l-3-3M300 38l3 3M300 18l3-3M280 38l-3 3"/></g>
  <circle class="fl-elec st-ink" stroke-width="1.4" cx="290" cy="28" r="9"/>
  <circle class="body" cx="246" cy="28" r="10"/>
  <path class="st-ink fl-none" stroke-width="1.8" stroke-linecap="round" d="M246 28V21"><animateTransform attributeName="transform" type="rotate" values="0 246 28;360 246 28" dur="3s" repeatCount="indefinite"/></path>
  <path class="st-ink fl-none" stroke-width="1.8" stroke-linecap="round" d="M246 28H251"/>
  <path class="fl-panel st-line" stroke-width="1.4" d="M26 40a8 8 0 0 1 10-10a10 10 0 0 1 18 2a7 7 0 0 1 2 14H30a6 6 0 0 1-4-6z"/>
  <circle class="body" cx="42" cy="66" r="11"/>
  <g><animateTransform attributeName="transform" type="rotate" values="-12 42 66;10 42 66;-12 42 66" dur="2s" repeatCount="indefinite"/>
    <path class="fl-hot" d="M42 57L45 66H39Z"/><path class="fl-line" d="M42 75L45 66H39Z"/></g>
</g>
<g class="only-2">
  <path class="st-elec fl-none" stroke-width="1.4" stroke-dasharray="3 3" d="M272 140L288 40"/>
  <path class="st-hot fl-none" stroke-width="2" d="M275.5 118.2A22 22 0 0 0 256.4 124.6"/>
</g>

<!-- 3 השערות למפה: ריחות שנישאים ברוח, ושדה מגנטי -->
<g class="only-3">
  <g class="st-green fl-none" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="4 5">
    <path d="M310 100q-10-6-20 0t-20 0-20 0-20 0-20 0"><animate attributeName="stroke-dashoffset" values="0;-18" dur="1s" repeatCount="indefinite"/></path>
    <path d="M300 116q-10-6-20 0t-20 0-20 0-20 0"><animate attributeName="stroke-dashoffset" values="0;-18" dur="1s" repeatCount="indefinite"/></path>
  </g>
  <g class="st-violet fl-none" stroke-width="1.2" opacity=".85">
    <path d="M150 214Q230 194 312 210"/><path d="M150 206Q230 186 312 200"/><path d="M150 198Q230 178 312 190"/>
    <animate attributeName="opacity" values=".4;1;.4" dur="2s" repeatCount="indefinite"/>
  </g>
</g>

<!-- היונה בדרך הביתה -->
<g class="hl-1 hl-2 hl-3">
  <g><animateMotion dur="4s" begin="0s" repeatCount="indefinite" path="M272 140Q170 40 64 122"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.9;1" dur="4s" begin="0s" repeatCount="indefinite"/>
    <g transform="scale(1.5)"><ellipse class="fl-line st-ink" stroke-width="1" cx="0" cy="0" rx="7" ry="3.4"/>
    <circle class="fl-line st-ink" stroke-width="1" cx="-7" cy="-2" r="2.6"/>
    <path class="fl-ink" d="M-10 -2l-2 1 2 1z"/>
    <path class="fl-panel st-ink" stroke-width="1" stroke-linejoin="round" d="M-2 -2L3 -11L5 -2Z"><animate attributeName="d" values="M-2 -2L3 -11L5 -2Z;M-2 0L3 7L5 0Z;M-2 -2L3 -11L5 -2Z" dur=".35s" repeatCount="indefinite"/></path>
    <path class="fl-line st-ink" stroke-width="1" d="M6 -1L11 -3L11 2Z"/></g></g>
</g>
<!-- 4 היונה לאורך הכביש אל השובך -->
<g class="only-4">
  <g><animateMotion dur="4.5s" begin="0s" repeatCount="indefinite" path="M306 164C270 176 250 156 200 156S130 176 84 172L58 140"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.9;1" dur="4.5s" begin="0s" repeatCount="indefinite"/>
    <g transform="scale(1.5)"><ellipse class="fl-line st-ink" stroke-width="1" cx="0" cy="0" rx="7" ry="3.4"/>
    <circle class="fl-line st-ink" stroke-width="1" cx="-7" cy="-2" r="2.6"/>
    <path class="fl-ink" d="M-10 -2l-2 1 2 1z"/>
    <path class="fl-panel st-ink" stroke-width="1" stroke-linejoin="round" d="M-2 -2L3 -11L5 -2Z"><animate attributeName="d" values="M-2 -2L3 -11L5 -2Z;M-2 0L3 7L5 0Z;M-2 -2L3 -11L5 -2Z" dur=".35s" repeatCount="indefinite"/></path>
    <path class="fl-line st-ink" stroke-width="1" d="M6 -1L11 -3L11 2Z"/></g></g>
</g>

<!-- תוויות -->
<g class="only-1"><text x="170" y="62">חוזרת רק הביתה</text><text x="170" y="140">מעבירים בכלוב</text></g>
<g class="only-2"><text x="186" y="32">שמש ושעון פנימי</text><text x="222" y="112" class="sm">זווית לשמש</text><text x="42" y="96">מצפן מגנטי</text></g>
<g class="only-3"><text x="250" y="80">ריחות ברוח?</text><text x="104" y="206">שדה מגנטי?</text><text x="160" y="62">המפה: עדיין תעלומה</text></g>
<g class="only-4"><text x="196" y="212">מסלול קבוע לאורך כביש</text><text x="52" y="100">נכנסת לשובך</text></g>
`;
