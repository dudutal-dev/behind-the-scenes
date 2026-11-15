// הפריה חוץ גופית: 1 זריקות הורמונים מבשילות כמה זקיקים · 2 מחט בהנחיית אולטרסאונד שואבת את הביציות · 3 הפריה במעבדה: הזרקת זרעון בודד לביצית (ICSI) · 4 העוברים גדלים חמישה ימים, אחד מוחזר לרחם והשאר מוקפאים
export default `
<defs><clipPath id="ivf-dish"><circle cx="162" cy="100" r="45"/></clipPath></defs>

<!-- השחלה והזקיקים -->
<g class="hl-1 hl-2">
  <ellipse class="body" cx="272" cy="62" rx="36" ry="26"/>
  <ellipse class="fl-hot" opacity=".14" cx="272" cy="62" rx="36" ry="26"/>
  <circle class="fl-cold-soft st-ink" stroke-width="1.2" cx="256" cy="56" r="7"><animate attributeName="r" values="2.8;7;7" keyTimes="0;.7;1" dur="3s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="257" cy="57" r="1.6"/><circle class="fl-cold-soft st-ink" stroke-width="1.2" cx="274" cy="48" r="6.5"><animate attributeName="r" values="2.6;6.5;6.5" keyTimes="0;.7;1" dur="3s" begin="-0.2s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="275" cy="49" r="1.6"/><circle class="fl-cold-soft st-ink" stroke-width="1.2" cx="290" cy="60" r="7"><animate attributeName="r" values="2.8;7;7" keyTimes="0;.7;1" dur="3s" begin="-0.4s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="291" cy="61" r="1.6"/><circle class="fl-cold-soft st-ink" stroke-width="1.2" cx="270" cy="70" r="6"><animate attributeName="r" values="2.4;6;6" keyTimes="0;.7;1" dur="3s" begin="-0.6000000000000001s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="271" cy="71" r="1.6"/><circle class="fl-cold-soft st-ink" stroke-width="1.2" cx="252" cy="72" r="5"><animate attributeName="r" values="2.0;5;5" keyTimes="0;.7;1" dur="3s" begin="-0.8s" repeatCount="indefinite"/></circle><circle class="fl-warm" cx="253" cy="73" r="1.6"/>
</g>
<g class="only-1">
  <rect class="body" style="stroke-width:1.6" x="226" y="14" width="40" height="11" rx="2"/>
  <rect class="fl-violet" opacity=".5" x="236" y="16" width="29" height="7"><animate attributeName="width" values="29;4;4" keyTimes="0;.7;1" dur="3s" repeatCount="indefinite"/></rect>
  <path class="wire st-ink" style="stroke-width:1.6" d="M226 19.5 H216 M266 19.5 H284 M284 14 V25"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M216 19.5 H200"/>
  <text x="180" y="23" style="fill:var(--s-violet)">FSH</text>
  <text x="272" y="106">כמה זקיקים</text>
  <text x="272" y="120">מבשילים יחד</text>
</g>

<!-- שאיבה: מחט מהזקיק אל המבחנה -->
<g class="hl-2">
  <path class="wire st-line" style="stroke-width:2" d="M290 64 L300 128"/>
  <path class="body" style="stroke-width:1.6" d="M290 128 H310 V190 a10 10 0 0 1 -20 0 Z"/>
  <path class="fl-warm" opacity=".35" d="M291.5 160 H308.5 V190 a8.5 8.5 0 0 1 -17 0 Z"/>
  <circle class="fl-warm st-ink" stroke-width=".8" cx="297" cy="180" r="2.2"/><circle class="fl-warm st-ink" stroke-width=".8" cx="303" cy="188" r="2.2"/>
</g>
<g class="only-2">
  <circle class="fl-warm st-ink" stroke-width=".6" r="2.2"><animateMotion path="M290 64 L300 150 L300 172" dur="2.4s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-warm st-ink" stroke-width=".6" r="2.2"><animateMotion path="M290 64 L300 150 L300 172" dur="2.4s" begin="-0.8s" repeatCount="indefinite"/></circle><circle class="fl-warm st-ink" stroke-width=".6" r="2.2"><animateMotion path="M290 64 L300 150 L300 172" dur="2.4s" begin="-1.6s" repeatCount="indefinite"/></circle>
  <text x="248" y="106">מחט דקה</text>
  <text x="248" y="120">בהנחיית</text>
  <text x="248" y="134">אולטרסאונד</text>
  <text class="sm" x="250" y="156">36 שעות אחרי</text><text class="sm" x="250" y="167">הזריקה האחרונה</text>
</g>

<!-- הצלחת במעבדה, במבט מיקרוסקופ -->
<path class="thin st-ink" style="stroke-dasharray:3 4;stroke-width:1.2" d="M290 200 C250 214 214 170 196 140"/>
<circle class="fl-cold-soft st-ink" stroke-width="2" cx="162" cy="100" r="46"/>
<g class="hl-3" clip-path="url(#ivf-dish)">
  <circle class="fl-none st-line" stroke-width="5" cx="162" cy="100" r="22"/>
  <circle class="fl-warm st-ink" stroke-width="1.4" cx="162" cy="100" r="19" fill-opacity=".35"/>
  <!-- פיפטה מחזיקה (משמאל) ומחט הזרקה (מימין) -->
  <path class="fl-panel st-ink" stroke-width="1.4" d="M110 92 H136 C138 96 138 104 136 108 H110 Z"/>
  <path class="fl-panel st-ink" stroke-width="1.2" d="M214 96 L186 99.6 L186 100.4 L214 104 Z"><animateTransform attributeName="transform" type="translate" values="0 0;-14 0;-14 0;0 0" keyTimes="0;.35;.6;1" dur="3.2s" repeatCount="indefinite"/></path>
</g>
<g class="only-3" clip-path="url(#ivf-dish)">
  <circle class="fl-cold st-ink" stroke-width=".6" r="2.2"><animateMotion path="M204 100 L190 100 L168 100" keyTimes="0;.35;.6;1" keyPoints="0;.39;1;1" calcMode="linear" dur="3.2s" repeatCount="indefinite"/></circle>
  <g opacity="0"><circle class="fl-cold st-ink" stroke-width=".8" cx="156" cy="100" r="5"/><circle class="fl-hot st-ink" stroke-width=".8" cx="168" cy="100" r="5"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.7;.78;1" dur="3.2s" repeatCount="indefinite"/></g>
</g>
<g class="only-3">
  <text x="162" y="164">ICSI: זרעון אחד</text>
  <text x="162" y="178">מוזרק לתוך הביצית</text>
  <text class="sm" x="162" y="196">למחרת: שני גרעינים, אחד מכל הורה</text>
</g>

<!-- גידול חמישה ימים, החזרה והקפאה -->
<g class="hl-4">
  <path class="thin st-ink" style="stroke-dasharray:3 4;stroke-width:1.2" d="M118 82 C108 70 104 62 100 52"/>
  <g class="fl-violet st-ink" stroke-width="1" fill-opacity=".45">
    <circle cx="22" cy="32" r="10"/><circle cx="49.5" cy="27.5" r="4.2"/><circle cx="58.5" cy="27.5" r="4.2"/><circle cx="49.5" cy="36.5" r="4.2"/><circle cx="58.5" cy="36.5" r="4.2"/><circle cx="54" cy="32" r="4.2"/>
  </g>
  <circle class="fl-none st-ink" stroke-width="1" cx="22" cy="32" r="12"/><circle class="fl-cold" cx="18" cy="32" r="2.6"/><circle class="fl-hot" cx="26" cy="32" r="2.6"/>
  <circle class="fl-none st-ink" stroke-width="1" cx="54" cy="32" r="12"/>
  <circle class="fl-panel st-ink" stroke-width="1.2" cx="86" cy="32" r="12"/>
  <path class="fl-violet" opacity=".55" d="M78 28 a9 9 0 0 1 10 -6 a7 7 0 0 0 -10 6z"/>
  <circle class="fl-none st-violet" stroke-width="2.6" cx="86" cy="32" r="10"/>
  <text class="sm" x="22" y="56">יום 1</text><text class="sm" x="54" y="56">יום 3</text><text class="sm" x="86" y="56">יום 5</text>
  <!-- רחם קטן וצנתר -->
  <path class="body" d="M14 132 C14 112 62 112 62 132 L58 160 Q54 172 46 174 V196 H30 V174 Q22 172 18 160 Z"/>
  <path class="fl-hot" opacity=".18" d="M14 132 C14 112 62 112 62 132 L58 160 Q54 172 46 174 V196 H30 V174 Q22 172 18 160 Z"/>
  <path class="wire st-line" style="stroke-width:2" d="M50 214 C42 206 38 200 38 186 V146"/>
  <!-- מכל הקפאה -->
  <rect class="body" x="76" y="128" width="28" height="60" rx="6"/>
  <rect class="fl-cold-soft" x="78" y="146" width="24" height="40" rx="4"/>
  <path class="wire st-cold" style="stroke-width:1.6" d="M90 154 v20 M81 159 l18 10 M81 169 l18 -10"/>
  <path class="thin st-ink" style="stroke-dasharray:3 4;stroke-width:1.2" d="M40 68 V110 M86 68 C90 90 90 110 90 124"/>
</g>
<g class="only-4">
  <circle class="fl-violet st-ink" stroke-width=".8" r="3.2"><animateMotion path="M86 46 C70 80 40 80 40 110 V150" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;1" keyTimes="0;.1;.9;1" dur="3s" repeatCount="indefinite"/></circle>
  <circle class="fl-violet" r="2.6"><animateMotion path="M86 46 C88 80 90 110 90 150" dur="3s" begin="-1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></circle>
  <text x="20" y="100">החזרה</text>
  <text x="96" y="204">הקפאה</text>
</g>
`;
