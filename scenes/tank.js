// הטנק: 1 זחל ארוך חוצה תעלה ומועך תיל · 2 הזחל פורס את המשקל, לעומת גלגל ששוקע · 3 שריון משופע והמנוע מלפנים (מרכבה) · 4 צריח מסתובב וקנה מיוצב על המטרה בזמן נסיעה
export default `
<defs>
  <marker id="tank-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="tank-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="tank-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-green"/></marker>
</defs>
<!-- קרקע, תעלה ותיל דוקרני -->
<path class="fl-soft" d="M8 172H34V204H76V172H312V180H82V210H28V180H8Z"/>
<path class="st-ink fl-none" stroke-width="2" stroke-linejoin="round" d="M8 172H34V204H76V172H312"/>
<path class="st-line fl-none" stroke-width="1.2" d="M86 172l4 -10l4 10l4 -10l4 10l4 -10l4 10M86 166H112"/>

<!-- שלב 1: הטנק נוסע ומגשר על התעלה -->
<g class="only-1"><g>
  <animateTransform attributeName="transform" type="translate" values="80 0;-150 0" dur="7s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.88;1" dur="7s" repeatCount="indefinite"/>
  <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M126 146H284Q294 146 294 157V160Q294 172 282 172H134Q122 172 117 161L114 154Q112 146 126 146Z"/>
  <path class="st-ink fl-none dash" style="stroke-width:3.5;stroke-dasharray:2 4" d="M126 146H284Q294 146 294 157V160Q294 172 282 172H134Q122 172 117 161L114 154Q112 146 126 146Z"/>
  <circle class="fl-line st-ink" stroke-width="1.5" cx="142" cy="162" r="8"/><circle class="fl-ink" cx="142" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="164" cy="162" r="8"/><circle class="fl-ink" cx="164" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="186" cy="162" r="8"/><circle class="fl-ink" cx="186" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="208" cy="162" r="8"/><circle class="fl-ink" cx="208" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="230" cy="162" r="8"/><circle class="fl-ink" cx="230" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="252" cy="162" r="8"/><circle class="fl-ink" cx="252" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="274" cy="162" r="8"/><circle class="fl-ink" cx="274" cy="162" r="1.6"/>
  <path class="body" d="M110 146L140 124H284L296 134V146Z"/>
  <path class="thin" d="M150 136H286"/>
  <rect class="fl-line st-ink" stroke-width="1.5" x="46" y="109" width="132" height="6" rx="1.5"/>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="44" y="107.500" width="8" height="9" rx="1.5"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="104" y="107.500" width="18" height="9" rx="3"/>
  <path class="body" d="M166 124L180 104H252L264 112V124Z"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="228" y="96" width="16" height="8" rx="2"/>
</g>
  <text x="160" y="28">זחל ארוך מגשר על התעלה</text>
  <text x="160" y="44">והמשקל מועך את התיל</text>
</g>

<!-- משלב 2: הטנק נוסע במקום, גוף מיטלטל וקנה יציב -->
<g class="from-2">
  <g class="hl-2 hl-3"><g>
    <animateTransform attributeName="transform" type="rotate" values="-1.6 214 150;1.6 214 150;-1.6 214 150" dur="2.4s" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" repeatCount="indefinite"/>
    <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M126 146H284Q294 146 294 157V160Q294 172 282 172H134Q122 172 117 161L114 154Q112 146 126 146Z"/>
  <path class="st-ink fl-none dash" style="stroke-width:3.5;stroke-dasharray:2 4" d="M126 146H284Q294 146 294 157V160Q294 172 282 172H134Q122 172 117 161L114 154Q112 146 126 146Z"/>
  <circle class="fl-line st-ink" stroke-width="1.5" cx="142" cy="162" r="8"/><circle class="fl-ink" cx="142" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="164" cy="162" r="8"/><circle class="fl-ink" cx="164" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="186" cy="162" r="8"/><circle class="fl-ink" cx="186" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="208" cy="162" r="8"/><circle class="fl-ink" cx="208" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="230" cy="162" r="8"/><circle class="fl-ink" cx="230" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="252" cy="162" r="8"/><circle class="fl-ink" cx="252" cy="162" r="1.6"/><circle class="fl-line st-ink" stroke-width="1.5" cx="274" cy="162" r="8"/><circle class="fl-ink" cx="274" cy="162" r="1.6"/>
  <path class="body" d="M110 146L140 124H284L296 134V146Z"/>
  <path class="thin" d="M150 136H286"/>
    <!-- מנוע מלפנים (מרכבה) -->
    <g class="hl-3"><rect class="fl-warm st-ink" stroke-width="1.5" x="142" y="127" width="34" height="8" rx="2"/></g>
    <!-- שריון משופע -->
    <g class="hl-3"><path class="st-hot fl-none" style="stroke-width:4" stroke-linecap="round" d="M112 145L140 125"/></g>
  </g></g>
  <g><rect class="fl-line st-ink" stroke-width="1.5" x="46" y="109" width="132" height="6" rx="1.5"/>
  <rect class="fl-dark st-ink" stroke-width="1.2" x="44" y="107.500" width="8" height="9" rx="1.5"/>
  <rect class="fl-line st-ink" stroke-width="1.2" x="104" y="107.500" width="18" height="9" rx="3"/>
  <path class="body" d="M166 124L180 104H252L264 112V124Z"/>
  <rect class="fl-soft st-ink" stroke-width="1.5" x="228" y="96" width="16" height="8" rx="2"/></g>
</g>

<!-- שלב 2: גלגל לעומת זחל -->
<g class="only-2">
  <path class="fl-soft st-ink" stroke-width="1.5" d="M16 56H38Q38 68 50 68Q62 68 62 56H86V70H16Z"/>
  <circle class="fl-line st-ink" stroke-width="2" cx="50" cy="54" r="13"><animate attributeName="cy" values="46;56;56" keyTimes="0;.6;1" dur="2.4s" repeatCount="indefinite"/></circle>
  <path class="arrow st-hot" style="stroke-width:3" d="M50 8V28" marker-end="url(#tank-h)"/>
  <text x="52" y="88">גלגל: לחץ מרוכז</text>
  <g class="st-green">
    <path class="arrow" style="stroke-width:1.8" marker-end="url(#tank-g)" d="M134 176v8M156 176v8M178 176v8M200 176v8M222 176v8M244 176v8M266 176v8M286 176v8"/>
  </g>
  <text x="208" y="200">זחל: המשקל נפרס על כל אורכו</text>
</g>

<!-- שלב 3: שריון משופע ומנוע מלפנים -->
<g class="only-3">
  <path class="arrow st-ink" style="stroke-width:2" d="M18 138H108" marker-end="url(#tank-a)"/>
  <path class="st-hot fl-none" stroke-width="1.5" stroke-dasharray="2 2" d="M110 138H122"/>
  <text x="54" y="130">שריון משופע:</text>
  <text x="54" y="156">דרך ארוכה יותר</text>
  <text x="168" y="74">מרכבה: המנוע מלפנים</text>
  <text x="168" y="88">מגן על הצוות</text>
  <path class="thin st-ink" d="M164 94L160 126"/>
</g>

<!-- שלב 4: צריח וקנה מיוצב -->
<g class="only-4">
  <circle class="fl-none st-hot" stroke-width="2" cx="22" cy="112" r="9"/>
  <circle class="fl-hot" cx="22" cy="112" r="3"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/></circle>
  <path class="st-hot fl-none dash" stroke-width="1.5" d="M42 112H32"/>
  <path class="arrow st-violet" style="stroke-width:2" d="M196 94Q216 82 236 90" marker-end="url(#tank-a)"/>
  <text x="216" y="74">צריח מסתובב</text>
  <text x="96" y="76">הקנה נשאר על המטרה</text>
  <text x="96" y="92">גם כשהגוף מיטלטל</text>
</g>
`;
