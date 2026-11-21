// איך ספינה צפה, בחתך רוחב: 1 עילוי מול משקל, גוש פלדה טובע · 2 מטען נוסף, הספינה שוקעת עד שוויון · 3 הטיה: מרכז הציפה נודד ומיישר · 4 קו פלימסול וגובה רזרבי
export default `
<defs>
  <marker id="ship-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="ship-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-hot"/></marker>
  <marker id="ship-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-cold"/></marker>
  <clipPath id="ship-lens"><circle cx="60" cy="58" r="31"/></clipPath>
</defs>
<!-- מים וקרקעית -->
<path class="fl-cold-soft" d="M0 124H320V220H0z"/>
<path class="fl-soft st-line" stroke-width="1.5" d="M-2 212Q60 206 120 211T322 210V222H-2z"/>

<!-- גוש פלדה מלא: טובע -->
<g class="hl-1">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 46;0 46" keyTimes="0;.7;1" dur="3.4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;.08;.7;.9;1" dur="3.4s" repeatCount="indefinite"/>
    <rect class="fl-dark st-ink" stroke-width="1.5" x="28" y="138" width="18" height="12" rx="1"/>
    <path class="wire st-hot" style="stroke-width:2" d="M37 150V164" marker-end="url(#ship-h)"/>
    <path class="wire st-cold" style="stroke-width:2" d="M37 138V130" marker-end="url(#ship-c)"/>
  </g>
</g>

<!-- הספינה: מצב רגיל (שלב 1, שלב 4 והמבט הכולל) -->
<g class="only-1"><path class="body" d="M136 92L140 140Q142 152 156 154H236Q250 152 252 140L256 92z"/>
    <path class="st-hot fl-none" stroke-width="3" d="M139 128L140 140Q142 152 156 154H236Q250 152 252 140L253 128" opacity=".55"/>
    <path class="thin" d="M144 104H248"/>
    <rect class="body" style="stroke-width:1.5" x="172" y="66" width="48" height="26" rx="2"/>
    <path class="fl-cold-soft st-ink" stroke-width="1" d="M178 72h8v6h-8zM192 72h8v6h-8zM206 72h8v6h-8z"/>
    <path class="st-ink fl-none" stroke-width="2" d="M196 66V48M190 54h12"/>
    <rect class="fl-dark st-ink" stroke-width="1" x="146" y="80" width="22" height="12" rx="1"/>
    <path class="fl-hot" d="M139 117.5h4v3h-4z"/><path class="fl-cold" opacity=".5" d="M138.7 124L140 140Q142 152 156 154H236Q250 152 252 140L253.3 124z"/></g>
<g class="from-4"><g class="hl-4"><path class="body" d="M136 92L140 140Q142 152 156 154H236Q250 152 252 140L256 92z"/>
    <path class="st-hot fl-none" stroke-width="3" d="M139 128L140 140Q142 152 156 154H236Q250 152 252 140L253 128" opacity=".55"/>
    <path class="thin" d="M144 104H248"/>
    <rect class="body" style="stroke-width:1.5" x="172" y="66" width="48" height="26" rx="2"/>
    <path class="fl-cold-soft st-ink" stroke-width="1" d="M178 72h8v6h-8zM192 72h8v6h-8zM206 72h8v6h-8z"/>
    <path class="st-ink fl-none" stroke-width="2" d="M196 66V48M190 54h12"/>
    <rect class="fl-dark st-ink" stroke-width="1" x="146" y="80" width="22" height="12" rx="1"/>
    <path class="fl-hot" d="M139 117.5h4v3h-4z"/><path class="fl-cold" opacity=".5" d="M138.7 124L140 140Q142 152 156 154H236Q250 152 252 140L253.3 124z"/></g></g>

<!-- שלב 2: מוסיפים מטען, הספינה שוקעת מעט עד שוויון חדש -->
<g class="only-2">
  <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 6;0 6;0 0" keyTimes="0;.4;.55;.9;1" dur="4s" repeatCount="indefinite"/>
    <path class="body" d="M136 92L140 140Q142 152 156 154H236Q250 152 252 140L256 92z"/>
    <path class="st-hot fl-none" stroke-width="3" d="M139 128L140 140Q142 152 156 154H236Q250 152 252 140L253 128" opacity=".55"/>
    <path class="thin" d="M144 104H248"/>
    <rect class="body" style="stroke-width:1.5" x="172" y="66" width="48" height="26" rx="2"/>
    <path class="fl-cold-soft st-ink" stroke-width="1" d="M178 72h8v6h-8zM192 72h8v6h-8zM206 72h8v6h-8z"/>
    <path class="st-ink fl-none" stroke-width="2" d="M196 66V48M190 54h12"/>
    <rect class="fl-dark st-ink" stroke-width="1" x="146" y="80" width="22" height="12" rx="1"/>
    <path class="fl-hot" d="M139 117.5h4v3h-4z"/><path class="fl-cold" opacity=".5" d="M138.7 124L140 140Q142 152 156 154H236Q250 152 252 140L253.3 124z"/>
  </g>
  <g><animateTransform attributeName="transform" type="translate" values="0 -46;0 0;0 6;0 6;0 -46" keyTimes="0;.4;.55;.9;1" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;.1;.55;.9;1" dur="4s" repeatCount="indefinite"/>
    <rect class="fl-hot st-ink" stroke-width="1.5" x="224" y="78" width="26" height="14" rx="1"/>
    <path class="st-ink fl-none" stroke-width="1" d="M230 78v14M237 78v14M244 78v14"/>
  </g>
  <path class="wire st-cold" style="stroke-width:2" d="M134 130H112M258 130H280" marker-end="url(#ship-c)"/>
  <text x="62" y="30">עוד מטען:</text>
  <text x="62" y="44">שוקעת עוד</text>
  <text x="62" y="58">עד שוויון חדש</text>
  <text x="196" y="186">המים שנדחקו הצידה</text>
</g>

<!-- כוחות: משקל ועילוי שווים -->
<g class="only-1">
  <path class="wire st-hot" d="M196 106V136" marker-end="url(#ship-h)"/>
  <path class="wire st-cold" d="M196 196V162" marker-end="url(#ship-c)"/>
  <circle class="fl-hot st-ink" stroke-width="1" cx="196" cy="106" r="3"/>
  <text x="196" y="22">העילוי = משקל המים שנדחקו</text>
  <text x="284" y="108">משקל</text>
  <text x="222" y="184">עילוי</text>
  <text x="40" y="100">גוש פלדה מלא</text>
  <text x="40" y="114">טובע</text>
</g>

<!-- שלב 3: הספינה נוטה, מרכז הציפה נודד לצד הנמוך -->
<g class="only-3">
  <g><animateTransform attributeName="transform" type="rotate" values="-14 196 124;14 196 124;-14 196 124" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite"/>
    <path class="body" d="M136 92L140 140Q142 152 156 154H236Q250 152 252 140L256 92z"/>
    <path class="st-hot fl-none" stroke-width="3" d="M139 128L140 140Q142 152 156 154H236Q250 152 252 140L253 128" opacity=".55"/>
    <path class="thin" d="M144 104H248"/>
    <rect class="body" style="stroke-width:1.5" x="172" y="66" width="48" height="26" rx="2"/>
    <path class="fl-cold-soft st-ink" stroke-width="1" d="M178 72h8v6h-8zM192 72h8v6h-8zM206 72h8v6h-8z"/>
    <path class="st-ink fl-none" stroke-width="2" d="M196 66V48M190 54h12"/>
    <rect class="fl-dark st-ink" stroke-width="1" x="146" y="80" width="22" height="12" rx="1"/>
    <path class="fl-hot" d="M139 117.5h4v3h-4z"/>
  </g>
  <!-- מרכז הכובד 16 מעל נקודת הציר, המטצנטר 48 מעל. מרכז הציפה נמצא תמיד מתחת למטצנטר: הזזה אופקית 48·sin14°, הכובד 16·sin14° -->
  <g><animateTransform attributeName="transform" type="translate" values="-3.9 0;3.9 0;-3.9 0" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite"/>
    <path class="wire st-hot" d="M196 108V136" marker-end="url(#ship-h)"/>
    <circle class="fl-hot st-ink" stroke-width="1.5" cx="196" cy="108" r="3.5"/>
  </g>
  <g><animateTransform attributeName="transform" type="translate" values="-11.6 0;11.6 0;-11.6 0" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite"/>
    <path class="thin st-ink" style="stroke-dasharray:2 3" d="M196 79V136"/>
    <path class="wire st-cold" d="M196 180V147" marker-end="url(#ship-c)"/>
    <circle class="fl-cold st-ink" stroke-width="1.5" cx="196" cy="140" r="3.5"/>
    <circle class="fl-bg st-ink" stroke-width="1.5" cx="196" cy="76" r="3"/>
  </g>
  <circle class="fl-hot" cx="16" cy="22" r="4"/><text x="64" y="26">מרכז הכובד</text>
  <circle class="fl-cold" cx="16" cy="40" r="4"/><text x="62" y="44">מרכז הציפה</text>
  <circle class="fl-bg st-ink" stroke-width="1.5" cx="16" cy="58" r="3"/><text x="52" y="62">מטצנטר</text>
  <text x="60" y="96">הציפה נודדת</text>
  <text x="60" y="110">לצד הנמוך ומיישרת</text>
  <text x="196" y="198">זוג כוחות מחזיר אותה</text>
</g>

<!-- שלב 4: קו פלימסול בזכוכית מגדלת -->
<g class="only-4">
  <path class="thin st-ink" style="stroke-width:1.2" d="M84 78L136 116"/>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="140" cy="119" r="6"/>
  <circle class="fl-cold-soft" cx="60" cy="58" r="32"/>
  <g clip-path="url(#ship-lens)">
    <rect class="fl-panel" x="20" y="20" width="80" height="80"/>
    <path class="fl-dark" d="M20 20h80v6H20z"/>
    <circle class="fl-none st-hot" stroke-width="2" cx="54" cy="62" r="9"/>
    <path class="st-hot" stroke-width="2.5" d="M42 62H66"/>
    <path class="st-hot" stroke-width="2" d="M72 50V74M72 50H82M72 62H80M72 74H82"/>
    <path class="fl-cold-soft st-cold" stroke-width="1.5" d="M20 78q5-2.5 10 0t10 0 10 0 10 0 10 0 10 0 10 0 10 0V100H20z"><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3s" repeatCount="indefinite"/></path>
    <path class="st-ink fl-none" stroke-width="1.2" d="M30 29V75M27 32l3-3 3 3M27 72l3 3 3-3"/>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="60" cy="58" r="32"/>
  <text x="62" y="108">קו העמסה: המים</text>
  <text x="62" y="122">אסור שיעלו מעליו</text>
  <text x="290" y="58">גובה</text>
  <text x="290" y="72">רזרבי</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M264 92V122M264 92l-3 4M264 92l3 4M264 122l-3-4M264 122l3-4"/>
</g>
`;
