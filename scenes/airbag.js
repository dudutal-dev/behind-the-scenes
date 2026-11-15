// כרית אוויר: 1 חיישן האטה בחזית · 2 יחידת הבקרה שולחת זרם למצת · 3 גז מנפח את השק · 4 השק מתרוקן דרך פתחים ובולם את הראש
export default `
<!-- כביש וקיר -->
<path class="thin" d="M6 201H314"/>
<rect class="fl-line st-ink" stroke-width="2" x="6" y="64" width="13" height="137"/>
<path class="thin st-ink" style="stroke-width:1" d="M6 86h13M6 109h13M6 132h13M6 155h13M6 178h13M12 64v22M12 109v23M12 155v23"/>

<!-- מרכב בחתך: חזית, רצפה, שמשה, גג -->
<path class="body" d="M24 176V150Q24 138 38 134L110 120V176H104A24 24 0 0 0 56 176Z"/>
<rect class="fl-dark st-ink" stroke-width="2" x="20" y="150" width="8" height="24" rx="3"/>
<rect class="body fl-soft" x="110" y="170" width="204" height="8"/>
<path class="body fl-soft" d="M148 62Q156 50 180 50H314V57H182Q164 57 156 66Z"/>
<path class="wire st-cold" style="stroke-width:3.5" d="M111 119L151 62"/>
<path class="body fl-soft" d="M110 120L148 121Q162 122 161 132L158 142Q156 148 146 148H110Z"/>
<circle class="fl-dark st-ink" stroke-width="2" cx="80" cy="181" r="20"/>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="80" cy="181" r="9"/><circle class="fl-ink" cx="80" cy="181" r="2.5"/>

<!-- מושב -->
<path fill="none" stroke-linecap="round" class="st-ink" stroke-width="14" d="M240 164H286M286 160L293 96M295 82L296 68"/>
<path fill="none" stroke-linecap="round" class="st-line" stroke-width="10" d="M240 164H286M286 160L293 96M295 82L296 68"/>
<path class="thin st-ink" style="stroke-width:2" d="M294 90v-6"/>
<circle class="fl-ink" cx="285" cy="70" r="3"/>

<!-- רגליים -->
<path fill="none" stroke-linecap="round" stroke-linejoin="round" class="st-ink" stroke-width="15" d="M262 152L216 146L184 164L171 159"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--s-soft)" stroke-width="11" d="M262 152L216 146L184 164L171 159"/>
<path class="wire st-ink" style="stroke-width:4;stroke-linecap:butt" d="M256 140L250 157"/>

<!-- חיישן האטה: מסה קטנה על קפיץ -->
<g class="hl-1">
  <rect class="body fl-bg" x="30" y="145" width="27" height="16" rx="3"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M45 153l1.5-3 2 6 2-6 2 6 1.5-3h3"/>
</g>
<g class="from-2"><rect class="fl-elec st-ink" stroke-width="1.2" x="38" y="149" width="7" height="8" rx="1"/></g>
<g class="only-1">
  <rect class="fl-elec st-ink" stroke-width="1.2" x="38" y="149" width="7" height="8" rx="1"><animate attributeName="x" values="38;33;33;38;38" keyTimes="0;.15;.5;.7;1" dur="1.4s" repeatCount="indefinite"/></rect>
  <circle class="ring st-elec" cx="43" cy="153" r="24"/><circle class="ring st-elec d3" cx="43" cy="153" r="24"/>
  <g class="blink"><path class="fl-hot st-ink" stroke-width="1" stroke-linejoin="round" d="M20 138l4 5 6-3-2 6 5 4-6 1-1 6-4-5-6 3 3-6-5-4 6-1z"/></g>
  <text x="68" y="34">חיישן מרגיש</text>
  <text x="68" y="48">האטה חדה</text>
</g>

<!-- חיווט: חיישן ← יחידת בקרה ← מצת -->
<g class="hl-1 hl-2"><path class="wire st-elec" d="M57 152H104V160H118"/></g>
<g class="hl-2 hl-3"><path class="wire st-elec" d="M146 157Q154 150 155 136L156 123L195 104.6"/></g>

<!-- יחידת הבקרה -->
<g class="hl-2">
  <rect class="body" x="118" y="152" width="28" height="16" rx="2"/>
  <rect class="fl-dark" x="123" y="156" width="12" height="8" rx="1"/>
  <path class="thin st-ink" style="stroke-width:1.2" d="M122 152v-3M127 152v-3M132 152v-3M137 152v-3M142 152v-3"/>
</g>
<g class="hl-2"><g class="blink"><circle class="fl-green" cx="141" cy="160" r="2.2"/></g></g>

<!-- עמוד ההגה, ההגה ומודול הכרית -->
<g transform="rotate(-25.3 194 105)">
  <path fill="none" class="st-ink" stroke-width="9" d="M153 105H190"/><path fill="none" class="st-soft" style="stroke:var(--s-soft)" stroke-width="5" d="M152 105H190"/>
  <path class="wire st-ink" style="stroke-width:6" d="M194 79V131"/>
  <path class="body fl-soft" d="M206 92H192Q189 92 189 95V115Q189 118 192 118H206"/>
  <g class="only-1 only-2">
    <path class="thin st-ink" style="stroke-width:1.2" d="M202 94l3 2.5-3 2.5 3 2.5-3 2.5 3 2.5-3 2.5 3 2.5-3 2.5"/>
    <path class="wire st-ink" style="stroke-width:3" d="M206.5 91V119"/>
  </g>
  <g class="from-3"><path class="wire st-ink" style="stroke-width:3" d="M206 91l5-6M206 119l5 6"/></g>
</g>
<g class="hl-2 hl-3" transform="rotate(-25.3 194 105)">
  <circle class="fl-warm st-ink" stroke-width="1.5" cx="196" cy="105" r="5.5"/><circle class="fl-hot" cx="196" cy="105" r="2"/>
</g>

<!-- שלב 2: זרם אל המצת -->
<g class="only-2">
  <g class="fl-elec st-ink" stroke-width=".8">
    <circle r="3"><animateMotion dur="1.1s" repeatCount="indefinite" path="M57 152H104V160H118"/></circle>
    <circle r="3"><animateMotion dur="1.1s" begin="-.55s" repeatCount="indefinite" path="M57 152H104V160H118"/></circle>
    <circle r="3"><animateMotion dur="1.1s" repeatCount="indefinite" path="M146 157Q154 150 155 136L156 123L195 104.6"/></circle>
    <circle r="3"><animateMotion dur="1.1s" begin="-.55s" repeatCount="indefinite" path="M146 157Q154 150 155 136L156 123L195 104.6"/></circle>
  </g>
  <circle class="ring st-elec" cx="132" cy="160" r="22"/>
  <text x="68" y="34">המחשב מחליט</text>
  <text x="68" y="48">ושולח זרם למצת</text>
</g>

<!-- נהג זקוף: שלבים 1 עד 3 -->
<g class="only-1 only-2 only-3">
  <path class="wire st-ink" style="stroke-width:4" d="M287 72L267 100"/>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" class="st-ink" stroke-width="24" d="M262 150L268 108"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--s-soft)" stroke-width="20" d="M262 150L268 108"/><path class="wire st-ink" style="stroke-width:4;stroke-linecap:butt" d="M266 99L254 150"/>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" class="st-ink" stroke-width="12" d="M268 110L240 129L201 117"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--s-soft)" stroke-width="8" d="M268 110L240 129L201 117"/>
  <path class="body" d="M263 92l1 9h8l-1-9z"/><circle class="body" cx="266" cy="80" r="13"/>
</g>

<!-- שלב 3: השק מתנפח -->
<g class="only-3"><g>
  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.8;.86;.94;1" dur="2.8s" repeatCount="indefinite"/>
  <g transform="rotate(-25.3 194 105)"><g transform="translate(206 105)"><g><animateTransform attributeName="transform" type="scale" values=".1;1;1;.1;.1" keyTimes="0;.3;.86;.9;1" dur="2.8s" repeatCount="indefinite"/>
  <path class="body" d="M0 -9C6 -25 16 -30 24 -30C36 -30 42 -15 42 0C42 15 36 30 24 30C16 30 6 25 0 9Z"/><path class="thin" d="M10 -20Q20 0 10 20M26 -29Q34 0 26 29"/></g></g></g>
</g>
  <g transform="rotate(-25.3 194 105)" class="fl-warm">
    <circle r="2.2"><animateMotion dur=".7s" repeatCount="indefinite" path="M198 105L234 88"/></circle>
    <circle r="2.2"><animateMotion dur=".7s" begin="-.25s" repeatCount="indefinite" path="M198 105L240 105"/></circle>
    <circle r="2.2"><animateMotion dur=".7s" begin="-.5s" repeatCount="indefinite" path="M198 105L234 122"/></circle>
    <circle r="2.2"><animateMotion dur=".7s" begin="-.4s" repeatCount="indefinite" path="M198 105L226 96"/></circle>
    <circle r="2.2"><animateMotion dur=".7s" begin="-.1s" repeatCount="indefinite" path="M198 105L226 114"/></circle>
  </g>
  <text x="68" y="34">גז חנקן מנפח את השק</text>
  <text x="68" y="48">בתוך 30 אלפיות שנייה</text>
</g>

<!-- שלב 4: הגוף נע קדימה, השק מתרוקן ובולם -->
<g class="from-4"><g>
  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.82;.88;.94;1" dur="3.4s" repeatCount="indefinite"/>
  <path class="wire st-ink" style="stroke-width:4" d="M287 72L267 100"><animate attributeName="d" values="M287 72L267 100;M287 72L251 101;M287 72L251 101;M287 72L267 100;M287 72L267 100" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/></path>
  <g><animateTransform attributeName="transform" type="rotate" values="0 262 152;-18 262 152;-18 262 152;0 262 152;0 262 152" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" class="st-ink" stroke-width="24" d="M262 150L268 108"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--s-soft)" stroke-width="20" d="M262 150L268 108"/><path class="wire st-ink" style="stroke-width:4;stroke-linecap:butt" d="M266 99L254 150"/></g>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" class="st-ink" stroke-width="12" d="M268 110L240 129L201 117"><animate attributeName="d" values="M268 110L240 129L201 117;M254 109L231 131L201 117;M254 109L231 131L201 117;M268 110L240 129L201 117;M268 110L240 129L201 117" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--s-soft)" stroke-width="8" d="M268 110L240 129L201 117"><animate attributeName="d" values="M268 110L240 129L201 117;M254 109L231 131L201 117;M254 109L231 131L201 117;M268 110L240 129L201 117;M268 110L240 129L201 117" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/></path>
  <g transform="rotate(-25.3 194 105)"><g transform="translate(206 105)"><g><animateTransform attributeName="transform" type="scale" values="1;.92;.86;1;1" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/>
  <path class="body" d="M0 -9C6 -25 16 -30 24 -30C36 -30 42 -15 42 0C42 15 36 30 24 30C16 30 6 25 0 9Z"/><path class="thin" d="M10 -20Q20 0 10 20M26 -29Q34 0 26 29"/>
    <ellipse class="fl-ink" cx="7" cy="-21" rx="3" ry="1.8" transform="rotate(-55 7 -21)"/><ellipse class="fl-ink" cx="7" cy="21" rx="3" ry="1.8" transform="rotate(55 7 21)"/>
    <g class="fl-warm">
      <circle r="2"><animateMotion dur=".9s" repeatCount="indefinite" path="M6 -22L-10 -40"/><animate attributeName="opacity" values="1;0" dur=".9s" repeatCount="indefinite"/></circle>
      <circle r="2"><animateMotion dur=".9s" begin="-.45s" repeatCount="indefinite" path="M6 -22L-4 -44"/><animate attributeName="opacity" values="1;0" dur=".9s" begin="-.45s" repeatCount="indefinite"/></circle>
      <circle r="2"><animateMotion dur=".9s" begin="-.2s" repeatCount="indefinite" path="M6 22L-10 40"/><animate attributeName="opacity" values="1;0" dur=".9s" begin="-.2s" repeatCount="indefinite"/></circle>
      <circle r="2"><animateMotion dur=".9s" begin="-.65s" repeatCount="indefinite" path="M6 22L-4 44"/><animate attributeName="opacity" values="1;0" dur=".9s" begin="-.65s" repeatCount="indefinite"/></circle>
    </g></g></g></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 262 152;-18 262 152;-18 262 152;0 262 152;0 262 152" keyTimes="0;.45;.88;.9;1" dur="3.4s" repeatCount="indefinite"/><path class="body" d="M263 92l1 9h8l-1-9z"/><circle class="body" cx="266" cy="80" r="13"/></g>
</g></g>
<g class="only-4">
  <text x="68" y="34">הגז יוצא מפתחים בגב</text>
  <text x="68" y="48">והשק בולם ברכות</text>
</g>

`;
