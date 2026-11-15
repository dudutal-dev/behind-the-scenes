// היגוי (מבט מלמעלה): 1 ההגה מסובב גלגל שיניים שמזיז את המסילה · 2 אקרמן: הגלגל הפנימי פונה חד יותר וצירי הגלגלים נפגשים במרכז הסיבוב · 3 מנוע חשמלי מוסיף כוח למסילה · 4 קסטר: ציר ההיגוי נוטה לאחור והגלגלים מתיישרים
export default `
<defs>
  <clipPath id="steering-rk"><rect x="9.5" y="60" width="133" height="34"/></clipPath>
  <marker id="steering-ar" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 1L9 5L0 9Z" fill="var(--s-elec)"/></marker>
  <marker id="steering-arv" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 1L9 5L0 9Z" fill="var(--s-violet)"/></marker>
</defs>
<g transform="translate(36 0)">
<!-- מתאר המכונית -->
<path class="thin" style="stroke-width:1.2" stroke-dasharray="4 4" d="M164 22H226Q256 22 258 46V188Q256 208 228 208H162Q134 208 132 188V46Q134 22 164 22Z"/>
<!-- גלגלים אחוריים וציר -->
<path class="thin" d="M150 180H240"/>
<rect class="fl-dark st-ink" stroke-width="2" x="143" y="164" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M143 172h14M143 180h14M143 188h14"/><rect class="fl-dark st-ink" stroke-width="2" x="233" y="164" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M233 172h14M233 180h14M233 188h14"/>

<!-- גיאומטריית אקרמן: צירי הגלגלים נפגשים במרכז הסיבוב -->
<g class="only-2">
  <path class="wire st-violet" style="stroke-width:1.5" stroke-dasharray="5 4" d="M150 55L-20 180M240 55L-20 180M150 180H-20"/>
  <circle class="fl-violet" cx="-20" cy="180" r="4"><animate attributeName="opacity" values="1;.4;1" dur="1.4s" repeatCount="indefinite"/></circle>
  <text x="12" y="204">מרכז הסיבוב</text>
  <text x="142" y="29">⁦36°⁩</text>
  <text x="254" y="29">⁦26°⁩</text>
</g>

<!-- עמוד ההגה ובית המסילה -->
<path class="wire st-line" style="stroke-width:4" d="M176 132L182 72"/>
<g class="hl-1 hl-3">
  <rect class="fl-soft st-ink" stroke-width="1.5" x="172" y="67" width="46" height="10" rx="3"/>
</g>
<!-- מנוע העזר החשמלי -->
<g class="hl-3">
  <rect class="body" x="198" y="78" width="18" height="12" rx="2"/>
  <path class="wire st-elec" style="stroke-width:1.5" d="M202 84h10"/>
</g>

<!-- תנועה: מסובבים את ההגה ימינה ושמאלה -->
<g class="only-1">
  <path class="wire st-ink" style="stroke-width:2.5" d="M178 72L155.76 70.99M212 72L234.25 71"><animate attributeName="d" values="M178 72L155.76 70.99M212 72L234.25 71;M184 72L162.39 66.64M218 72L240.27 72;M178 72L155.76 70.99M212 72L234.25 71;M172 72L149.73 72M206 72L227.61 66.64;M178 72L155.76 70.99M212 72L234.25 71" keyTimes="0;.25;.5;.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/></path>
  <g><animateTransform attributeName="transform" type="translate" values="0 0;6 0;0 0;-6 0;0 0" keyTimes="0;.25;.5;.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/><rect class="fl-line st-ink" stroke-width="1.2" x="176" y="69.5" width="38" height="5" rx="1"/><path fill="none" stroke="var(--s-ink)" stroke-width="1" d="M182 72h26" stroke-dasharray="1.5 2"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="-0.01 150 55;-27 150 55;-0.01 150 55;20.7 150 55;-0.01 150 55" keyTimes="0;.25;.5;.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/><rect class="fl-dark st-ink" stroke-width="2" x="143" y="39" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M143 47h14M143 55h14M143 63h14"/><path class="wire st-ink" style="stroke-width:3" d="M150 55L155.76 71"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="-0.01 240 55;-20.7 240 55;-0.01 240 55;27 240 55;-0.01 240 55" keyTimes="0;.25;.5;.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/><rect class="fl-dark st-ink" stroke-width="2" x="233" y="39" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M233 47h14M233 55h14M233 63h14"/><path class="wire st-ink" style="stroke-width:3" d="M240 55L234.24 71"/></g>
  <g transform="translate(176 132)"><g><animateTransform attributeName="transform" type="rotate" values="-0.21;-357.74;-0.21;357.74;-0.21" keyTimes="0;.25;.5;.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/><circle class="fl-none st-ink" stroke-width="3.5" r="13"/><path class="wire st-ink" style="stroke-width:2.5" d="M-13 0H13M0 0V13"/><circle class="fl-ink" r="3"/></g></g></g>
<!-- סטטי בפנייה שמאלה -->
<g class="from-2">
  <path class="wire st-ink" style="stroke-width:2.5" d="M185.93 72L164.11 64.48M219.93 72L241.74 71.91"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="183.93" y="69.5" width="38" height="5" rx="1"/>
  <g transform="rotate(-36.33 150 55)"><rect class="fl-dark st-ink" stroke-width="2" x="143" y="39" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M143 47h14M143 55h14M143 63h14"/><path class="wire st-ink" style="stroke-width:3" d="M150 55L155.76 71"/></g>
  <g transform="rotate(-25.68 240 55)"><rect class="fl-dark st-ink" stroke-width="2" x="233" y="39" width="14" height="32" rx="3"/><path fill="none" stroke="var(--s-line)" stroke-width="1.5" d="M233 47h14M233 55h14M233 63h14"/><path class="wire st-ink" style="stroke-width:3" d="M240 55L234.24 71"/></g>
  <g transform="translate(176 132)"><g transform="rotate(-465.03)"><circle class="fl-none st-ink" stroke-width="3.5" r="13"/><path class="wire st-ink" style="stroke-width:2.5" d="M-13 0H13M0 0V13"/><circle class="fl-ink" r="3"/></g></g></g>
<circle class="fl-panel st-ink" stroke-width="1.5" cx="182" cy="72" r="4.5"/>

<g class="only-3">
  <path class="arrow st-elec" marker-end="url(#steering-ar)" d="M200 96H226"><animate attributeName="opacity" values=".3;1;.3" dur="1s" repeatCount="indefinite"/></path>
  <text x="226" y="114">מנוע עוזר</text>
  <path class="flow" d="M176 132L182 72"/>
</g>


<g class="only-4">
  <path class="arrow st-violet" style="stroke-width:2" marker-end="url(#steering-arv)" d="M132 33A26 26 0 0 1 154 27"/>
  <path class="arrow st-violet" style="stroke-width:2" marker-end="url(#steering-arv)" d="M226 29A26 26 0 0 1 248 27"/>
  <text x="100" y="184">הגלגלים</text><text x="100" y="197">מתיישרים</text>
</g>
</g>
<g class="only-3">
  <rect class="fl-panel st-line" stroke-width="1.5" x="8" y="8" width="136" height="112" rx="10"/>
  <text x="76" y="28">כוח על המסילה</text>
  <text x="118" y="54" class="sm">הנהג</text>
  <rect class="fl-warm st-ink" stroke-width="1" x="24" y="46" width="22" height="12" rx="2"/>
  <text x="118" y="84" class="sm">מנוע העזר</text>
  <rect class="fl-elec st-ink" stroke-width="1" x="24" y="76" width="66" height="12" rx="2"><animate attributeName="width" values="20;66;66;20" keyTimes="0;.3;.8;1" dur="2.4s" repeatCount="indefinite"/></rect>
  <text x="76" y="108" class="sm">בחניה: עוזר הרבה</text>
</g>
<!-- תמונה מוגדלת: גלגל השיניים והמסילה -->
<g class="only-1">
  <rect class="fl-panel st-line" stroke-width="1.5" x="8" y="8" width="136" height="112" rx="10"/>
  <g transform="translate(76 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;-60;0;60;0" keyTimes="0;.25;.5;.75;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/>
    <path class="fl-warm st-ink" stroke-width="1.5" stroke-linejoin="round" d="M16.27 -2.75L20.94 -1.54L20.94 1.54L16.27 2.75L15.47 5.75L18.91 9.14L17.37 11.8L12.71 10.52L10.52 12.71L11.8 17.37L9.14 18.91L5.75 15.47L2.75 16.27L1.54 20.94L-1.54 20.94L-2.75 16.27L-5.75 15.47L-9.14 18.91L-11.8 17.37L-10.52 12.71L-12.71 10.52L-17.37 11.8L-18.91 9.14L-15.47 5.75L-16.27 2.75L-20.94 1.54L-20.94 -1.54L-16.27 -2.75L-15.47 -5.75L-18.91 -9.14L-17.37 -11.8L-12.71 -10.52L-10.52 -12.71L-11.8 -17.37L-9.14 -18.91L-5.75 -15.47L-2.75 -16.27L-1.54 -20.94L1.54 -20.94L2.75 -16.27L5.75 -15.47L9.14 -18.91L11.8 -17.37L10.52 -12.71L12.71 -10.52L17.37 -11.8L18.91 -9.14L15.47 -5.75Z"/><circle class="body" r="5"/><path class="wire st-ink" style="stroke-width:2" d="M0 -5V-12"/></g></g>
  <g clip-path="url(#steering-rk)"><g><animateTransform attributeName="transform" type="translate" values="0 0;19.9 0;0 0;-19.9 0;0 0" keyTimes="0;.25;.5;.75;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1" dur="4s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="1.5" stroke-linejoin="round" d="M-30 94V76H-28L-26 71H-24L-22 76H-18L-16 71H-14L-12 76H-8L-6 71H-4L-2 76H2L4 71H6L8 76H12L14 71H16L18 76H22L24 71H26L28 76H32L34 71H36L38 76H42L44 71H46L48 76H52L54 71H56L58 76H62L64 71H66L68 76H72L74 71H76L78 76H82L84 71H86L88 76H92L94 71H96L98 76H102L104 71H106L108 76H112L114 71H116L118 76H122L124 71H126L128 76H132L134 71H136L138 76H142L144 71H146L148 76H152L154 71H156L158 76H162L164 71H166L168 76H172L174 71H176L178 76H180V94Z"/></g></g>
  <text x="120" y="30" class="sm">גלגל שיניים</text>
  <text x="76" y="112" class="sm">מסילה</text>
</g>
<!-- תמונה מוגדלת מהצד: זווית הקסטר -->
<g class="only-4">
  <rect class="fl-panel st-line" stroke-width="1.5" x="8" y="8" width="136" height="112" rx="10"/>
  <path class="thin" d="M14 96H138"/>
  <path class="wire st-line" style="stroke-width:1.5" stroke-dasharray="6 6" d="M14 101H138"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur=".6s" repeatCount="indefinite"/></path>
  <circle class="fl-dark st-ink" stroke-width="2" cx="66" cy="70" r="26"/><circle class="body" cx="66" cy="70" r="9"/>
  <path class="wire st-violet" style="stroke-width:2.5" d="M57.96 96L87.65 14"/>
  <circle class="fl-violet" cx="57.96" cy="96" r="3"/>
  <circle class="fl-hot" cx="66" cy="96" r="3"><animate attributeName="opacity" values="1;.35;1" dur="1.2s" repeatCount="indefinite"/></circle>
  <text x="114" y="42" class="sm">ציר ההיגוי</text>
  <text x="76" y="114" class="sm">המגע נגרר מאחור</text>
  <path class="arrow st-ink" style="stroke-width:1.8" marker-end="url(#steering-arv)" d="M40 22H18"/>
  <text x="30" y="40" class="sm">נסיעה</text>
</g>

`;
