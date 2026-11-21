// הפריה: 1 ביוץ — הביצית יוצאת מהשחלה אל החצוצרה · 2 מיליוני זרעונים יוצאים ומאות בודדות מגיעות · 3 האקרוזום נפתח, זרעון אחד נכנס והמעטפת מתקשה · 4 שני הגרעינים מתאחדים והזיגוטה מתחלקת בדרך לרחם
export default `
<defs>
  <g id="fertilization-sp">
    <path class="wire st-ink" style="stroke-width:1.2" d="M-4 0c-4 -3 -7 3 -11 0s-7 3 -11 0"><animate attributeName="d" values="M-4 0c-4 -3 -7 3 -11 0s-7 3 -11 0;M-4 0c-4 3 -7 -3 -11 0s-7 -3 -11 0;M-4 0c-4 -3 -7 3 -11 0s-7 3 -11 0" dur=".5s" repeatCount="indefinite"/></path>
    <ellipse class="fl-cold st-ink" stroke-width="1" cx="0" cy="0" rx="4.2" ry="2.7"/>
  </g>
  <clipPath id="fertilization-egg"><circle cx="140" cy="152" r="33"/></clipPath>
</defs>

<!-- איור אנטומי: רחם, חצוצרות ושחלה -->
<g class="hl-1 hl-2 hl-4">
  <path class="pipe st-ink" style="stroke-width:8" d="M26 31 L6 27"/><path class="pipe" style="stroke:var(--s-soft);stroke-width:5" d="M26 31 L6 27"/>
  <path class="pipe st-ink" style="stroke-width:8" d="M72 31 C110 22 150 24 180 27"/><path class="pipe" style="stroke:var(--s-soft);stroke-width:5" d="M72 31 C110 22 150 24 180 27"/>
  <path class="pipe st-ink" style="stroke-width:15;stroke-linecap:butt" d="M178 27 C200 28 222 30 240 38"/><path class="pipe" style="stroke:var(--s-soft);stroke-width:11;stroke-linecap:butt" d="M176 27 C200 28 222 30 241 38"/>
  <path class="thin st-ink" style="stroke-width:1.6" d="M240 31l9 -4M242 35l11 0M242 40l11 5M240 44l7 8"/>
  <path class="body" d="M26 24 Q50 12 74 24 L70 56 Q65 70 56 73 V86 H44 V73 Q35 70 30 56 Z"/>
  <path class="fl-hot" opacity=".14" d="M26 24 Q50 12 74 24 L70 56 Q65 70 56 73 V86 H44 V73 Q35 70 30 56 Z"/>
  <path class="fl-soft st-line" stroke-width="1" d="M36 30 H64 L54 62 H46 Z"/>
  <ellipse class="body" style="stroke-width:1.6" cx="284" cy="58" rx="24" ry="14"/>
  <g class="fl-warm" opacity=".5"><circle cx="292" cy="54" r="3"/><circle cx="298" cy="62" r="2.4"/><circle cx="281" cy="64" r="2.2"/></g>
</g>
<!-- הביצית במקום המפגש, בהגדלה -->
<g class="hl-2 hl-3 hl-4">
  <circle class="fl-none st-violet" stroke-width="1.4" style="stroke-dasharray:3 3" cx="212" cy="32" r="9"/>
  <path class="thin st-violet" style="stroke-dasharray:3 3;stroke-width:1.2" d="M204 37 L100 103 M220 38 L185 107"/>
  <circle class="fl-warm st-ink" stroke-width=".8" cx="212" cy="32" r="2.6"/>
</g>

<!-- שלב 1: זקיק בשל מתפקע והביצית נאספת אל החצוצרה -->
<g class="only-1">
  <circle class="fl-warm st-ink" stroke-width="1.4" cx="268" cy="50" r="7"/>
  <circle class="fl-warm st-ink" stroke-width=".8" r="2.6"><animateMotion path="M268 50 C258 44 252 40 244 37 C232 33 220 32 212 32" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" repeatCount="indefinite"/></circle>
  <text x="284" y="86">שחלה</text>
  <text x="146" y="13">חצוצרה</text>
</g>

<!-- שלב 2: הזרעונים עולים, ורובם נעצרים בדרך -->
<g class="only-2">
  <circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V60 Q52 40 72 31 C110 22 150 24 186 27 C200 28 208 30 212 32" dur="3.2s" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="3.2s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V60 Q52 40 72 31 C110 22 150 24 186 27 C200 28 208 30 212 32" dur="3.2s" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="3.2s" begin="-1.6s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V60 Q48 40 28 31 L8 27" dur="2.4s" begin="-0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="2.4s" begin="-0.4s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V60 Q48 40 28 31 L8 27" dur="2.4s" begin="-1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="2.4s" begin="-1.5s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V68" dur="1.6s" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="1.6s" begin="0s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V68" dur="1.6s" begin="-0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="1.6s" begin="-0.5s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V68" dur="1.6s" begin="-1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="1.6s" begin="-1.1s" repeatCount="indefinite"/></circle>
  <circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V58 Q54 48 62 44" dur="2s" begin="-0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="2s" begin="-0.3s" repeatCount="indefinite"/></circle><circle class="fl-cold" r="1.6"><animateMotion path="M50 84 V58 Q54 48 62 44" dur="2s" begin="-1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.08;0.90;1.00;1" dur="2s" begin="-1.2s" repeatCount="indefinite"/></circle>
  <text x="50" y="100">מאות מיליונים</text>
  <text x="50" y="114">יוצאים לדרך</text>
</g>

<!-- הביצית בהגדלה -->
<g class="hl-1 hl-2 hl-3 hl-4">
  <g class="fl-warm st-ink" stroke-width=".8" opacity=".55"><circle cx="188.0" cy="152.0" r="4.4"/><circle cx="189.7" cy="163.3" r="5"/><circle cx="183.2" cy="172.8" r="5"/><circle cx="179.9" cy="183.8" r="4.4"/><circle cx="169.9" cy="189.5" r="5"/><circle cx="162.1" cy="197.9" r="5"/><circle cx="150.7" cy="198.8" r="4.4"/><circle cx="140.0" cy="203.0" r="5"/><circle cx="129.3" cy="198.8" r="5"/><circle cx="117.9" cy="197.9" r="4.4"/><circle cx="110.1" cy="189.5" r="5"/><circle cx="100.1" cy="183.8" r="5"/><circle cx="96.8" cy="172.8" r="4.4"/><circle cx="90.3" cy="163.3" r="5"/><circle cx="92.0" cy="152.0" r="5"/><circle cx="90.3" cy="140.7" r="4.4"/><circle cx="96.8" cy="131.2" r="5"/><circle cx="100.1" cy="120.2" r="5"/><circle cx="110.1" cy="114.5" r="4.4"/><circle cx="117.9" cy="106.1" r="5"/><circle cx="129.3" cy="105.2" r="5"/><circle cx="140.0" cy="101.0" r="4.4"/><circle cx="150.7" cy="105.2" r="5"/><circle cx="162.1" cy="106.1" r="5"/><circle cx="169.9" cy="114.5" r="4.4"/><circle cx="179.9" cy="120.2" r="5"/><circle cx="183.2" cy="131.2" r="5"/><circle cx="189.7" cy="140.7" r="4.4"/></g>
  <circle class="fl-none" style="stroke:var(--s-soft)" stroke-width="7" cx="140" cy="152" r="37.5"/>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="140" cy="152" r="41"/>
  <circle class="fl-warm st-ink" stroke-width="1.6" cx="140" cy="152" r="34" fill-opacity=".35"/>
</g>

<!-- שלב 2: זרעונים שוחים אל הביצית -->
<g class="only-2">
  <g><use href="#fertilization-sp"/><animateMotion path="M4 138 C30 140 56 144 88 148" dur="2.6s" begin="0s" repeatCount="indefinite" rotate="auto"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="0s" repeatCount="indefinite"/></g>
  <g><use href="#fertilization-sp"/><animateMotion path="M2 182 C30 180 60 176 92 168" dur="2.6s" begin="-0.9s" repeatCount="indefinite" rotate="auto"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-0.9s" repeatCount="indefinite"/></g>
  <g><use href="#fertilization-sp"/><animateMotion path="M6 210 C34 206 70 200 100 188" dur="2.6s" begin="-1.7s" repeatCount="indefinite" rotate="auto"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="2.6s" begin="-1.7s" repeatCount="indefinite"/></g>
  <text x="268" y="128">מאות בודדות</text>
  <text x="268" y="142">מגיעות לביצית</text>
  <text x="268" y="166">ובדרך עוברות</text>
  <text x="268" y="180">הבשלה</text>
</g>

<!-- שלב 3: האקרוזום נפתח, זרעון אחד נכנס, המעטפת מתקשה -->
<g class="only-3">
  <circle class="fl-none st-violet" stroke-width="7" cx="140" cy="152" r="37.5" opacity="0"><animate attributeName="opacity" values="0;0;.85;.85;0" keyTimes="0;.35;.55;.9;1" dur="3s" repeatCount="indefinite"/></circle>
  <g><animateMotion path="M86 152 H98 L104 152" keyTimes="0;.3;1" keyPoints="0;.6;1" calcMode="linear" dur="3s" repeatCount="indefinite"/>
    <use href="#fertilization-sp"/>
    <circle class="fl-elec" cx="2.6" cy="0" r="2.2"><animate attributeName="r" values="1.5;5;1.5" dur=".8s" repeatCount="indefinite"/></circle>
  </g>
  <g transform="translate(170 108) rotate(130)"><use href="#fertilization-sp"/></g><g transform="translate(108 190) rotate(-62)"><g><animateTransform attributeName="transform" type="translate" values="0 0;-4 0;0 0" dur="1s" repeatCount="indefinite"/><use href="#fertilization-sp"/></g></g>
  <g transform="translate(186 170) rotate(200)"><g><animateTransform attributeName="transform" type="translate" values="0 0;-4 0;0 0" dur="1.2s" repeatCount="indefinite"/><use href="#fertilization-sp"/></g></g>
  <text x="268" y="122">האקרוזום נפתח</text>
  <text x="268" y="136">ופורץ דרך</text>
  <text class="sm" x="268" y="166" style="fill:var(--s-violet)">המעטפת מתקשה</text>
  <text class="sm" x="268" y="179" style="fill:var(--s-violet)">והשאר נשארים בחוץ</text>
</g>

<!-- משלב 4: המעטפת קשה -->
<g class="from-4"><circle class="fl-none st-violet" stroke-width="7" opacity=".7" cx="140" cy="152" r="37.5"/></g>

<!-- שלב 4: שני הגרעינים מתקרבים ומתאחדים -->
<g class="only-4">
  <g clip-path="url(#fertilization-egg)">
    <g><circle class="fl-cold st-ink" stroke-width="1" r="8" fill-opacity=".8"/><text class="sm" y="3" style="stroke:none;fill:#fff">23</text>
      <animateMotion path="M114 150 L133 152" keyTimes="0;.55;1" keyPoints="0;1;1" calcMode="linear" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.6;1" dur="4s" repeatCount="indefinite"/></g>
    <g><circle class="fl-hot st-ink" stroke-width="1" r="9" fill-opacity=".8"/><text class="sm" y="3" style="stroke:none;fill:#fff">23</text>
      <animateMotion path="M160 146 L147 152" keyTimes="0;.55;1" keyPoints="0;1;1" calcMode="linear" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.6;1" dur="4s" repeatCount="indefinite"/></g>
    <g opacity="0"><circle class="fl-violet st-ink" stroke-width="1" cx="140" cy="152" r="12"/><text x="140" y="156" style="stroke:none;fill:#fff">46</text>
      <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.55;.62;1" dur="4s" repeatCount="indefinite"/></g>
  </g>
  <!-- הזיגוטה נודדת חזרה אל הרחם -->
  <circle class="fl-violet st-ink" stroke-width=".8" r="3"><animateMotion path="M212 32 C200 29 186 27 160 25 C120 23 90 26 72 31 Q64 36 62 44" dur="4s" repeatCount="indefinite"/></circle>
  <text x="130" y="62">מתחלקת בדרך לרחם</text>
  <!-- חלוקות: יום 1, 3, 5 -->
  <g class="fl-violet st-ink" stroke-width="1" fill-opacity=".55">
    <circle cx="236" cy="118" r="5.5"/><circle cx="246" cy="118" r="5.5"/>
    <circle cx="270" cy="113" r="4.6"/><circle cx="279" cy="113" r="4.6"/><circle cx="270" cy="122" r="4.6"/><circle cx="279" cy="122" r="4.6"/>
  </g>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="300" cy="118" r="11"/>
  <g class="fl-violet" opacity=".55"><circle cx="294" cy="122" r="3.2"/><circle cx="297" cy="125" r="3.2"/><circle cx="292" cy="117" r="3.2"/></g>
  <circle class="fl-none st-violet" stroke-width="2.4" cx="300" cy="118" r="9.4" opacity=".7"/>
  <text class="sm" x="241" y="140">יום 1</text><text class="sm" x="275" y="140">יום 3</text><text class="sm" x="300" y="140">יום 5</text>
  <text x="268" y="166" direction="ltr">23 + 23 = 46</text>
  <text x="268" y="182">כרומוזומים</text>
</g>
`;
