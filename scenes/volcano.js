// הר געש בחתך: 1 המעטפת נמסה חלקית והמאגמה עולה · 2 מאגר מאגמה עם גזים מומסים · 3 הלחץ יורד, בועות, פיצוץ · 4 ניטור: רעידות, התנפחות, גזים
export default `
<defs>
  <marker id="volcano-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <clipPath id="volcano-conduit"><path d="M163 150L166 56H174L177 150z"/></clipPath>
</defs>

<!-- קרום ומעטפת -->
<path class="fl-soft" d="M0 118H92Q130 96 152 56H188Q210 96 250 118H320V220H0z"/>
<g class="hl-1">
  <path class="fl-warm" opacity=".45" d="M0 192Q80 186 160 190T320 190V220H0z"/>
  <path class="st-warm fl-none" stroke-width="1.5" d="M0 192Q80 186 160 190T320 190"/>
</g>
<path class="fl-line" opacity=".3" d="M92 118Q130 96 152 56H188Q210 96 250 118z"/>
<!-- שכבות של אפר ולבה בתוך החרוט -->
<path class="thin" d="M104 112Q134 94 152 66M236 112Q206 94 188 66M118 116Q144 98 156 80M222 116Q196 98 184 80"/>
<!-- פני השטח -->
<path class="st-ink fl-none" stroke-width="2" stroke-linejoin="round" d="M0 118H92Q130 96 152 56H162L166 60M174 60L178 56H188Q210 96 250 118H320"/>

<!-- סדקים מהמעטפת אל המאגר -->
<g class="hl-1 hl-2">
  <path class="fl-hot" d="M150 192Q158 184 154 176L160 174Q164 184 158 192zM190 192Q182 184 186 176L180 174Q176 184 182 192z"/>
</g>
<!-- מאגר המאגמה והארובה -->
<g class="hl-2 hl-3">
  <path class="fl-hot st-ink" stroke-width="2" stroke-linejoin="round" d="M163 150L166 58H174L177 150"/>
  <ellipse class="fl-hot st-ink" stroke-width="2" cx="170" cy="162" rx="48" ry="16"/>
  <path class="fl-hot" d="M164.5 140H175.5V152H164.5z"/>
</g>

<!-- שלב 1: טיפות של סלע נמס עולות מהמעטפת -->
<g class="only-1">
  <g class="fl-hot">
    <ellipse rx="3" ry="2"><animateMotion dur="3s" repeatCount="indefinite" path="M130 216Q140 204 156 190"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="3s" repeatCount="indefinite"/></ellipse>
    <ellipse rx="3" ry="2"><animateMotion dur="3s" begin="-1s" repeatCount="indefinite" path="M100 214Q130 204 154 192"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="3s" begin="-1s" repeatCount="indefinite"/></ellipse>
    <ellipse rx="3" ry="2"><animateMotion dur="3s" begin="-2s" repeatCount="indefinite" path="M210 216Q200 204 184 190"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="3s" begin="-2s" repeatCount="indefinite"/></ellipse>
    <ellipse rx="3" ry="2"><animateMotion dur="3s" begin="-.5s" repeatCount="indefinite" path="M240 214Q210 204 186 192"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="3s" begin="-.5s" repeatCount="indefinite"/></ellipse>
    <ellipse rx="3" ry="2"><animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path="M172 218Q168 206 170 192"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="3s" begin="-1.5s" repeatCount="indefinite"/></ellipse>
  </g>
  <path class="arrow st-ink" d="M176 168V130" style="stroke-width:1.6;stroke-dasharray:3 3" marker-end="url(#volcano-a)"/>
  <text x="268" y="150">במעטפת הסלע</text>
  <text x="268" y="164">נמס חלקית</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M262 170Q256 184 240 198" marker-end="url(#volcano-a)"/>
  <text x="60" y="150">המאגמה קלה</text>
  <text x="60" y="164">ולכן עולה</text>
</g>

<!-- שלב 2: גזים מומסים במאגר -->
<g class="only-2">
  <g fill="#fff" opacity=".85">
    <circle cx="140" cy="160" r="1.2"/><circle cx="152" cy="168" r="1.2"/><circle cx="160" cy="156" r="1.2"/><circle cx="172" cy="166" r="1.2"/><circle cx="184" cy="157" r="1.2"/><circle cx="196" cy="166" r="1.2"/><circle cx="204" cy="159" r="1.2"/><circle cx="148" cy="154" r="1.2"/><circle cx="190" cy="170" r="1.2"/><circle cx="166" cy="172" r="1.2"/>
    <animate attributeName="opacity" values=".35;.95;.35" dur="1.6s" repeatCount="indefinite"/>
  </g>
  <text x="54" y="142" class="lg">מאגר מאגמה</text>
  <text x="54" y="158">כמה ק״מ מתחת</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M60 166Q90 176 118 168" marker-end="url(#volcano-a)"/>
  <text x="272" y="136">גזים מומסים</text>
  <text x="272" y="150">בלחץ הגבוה</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M266 156Q240 164 214 164" marker-end="url(#volcano-a)"/>
</g>

<!-- שלב 3: בועות שגדלות בעלייה, ופיצוץ של אפר -->
<g class="only-3">
  <g clip-path="url(#volcano-conduit)" fill="#fff" opacity=".9">
    <circle r="1"><animateMotion dur="1.6s" repeatCount="indefinite" path="M168 150V58"/><animate attributeName="r" values="1;3.6" dur="1.6s" repeatCount="indefinite"/></circle>
    <circle r="1"><animateMotion dur="1.6s" begin="-.4s" repeatCount="indefinite" path="M172 150V58"/><animate attributeName="r" values="1;3.6" dur="1.6s" begin="-.4s" repeatCount="indefinite"/></circle>
    <circle r="1"><animateMotion dur="1.6s" begin="-.8s" repeatCount="indefinite" path="M169 150V58"/><animate attributeName="r" values="1;3.6" dur="1.6s" begin="-.8s" repeatCount="indefinite"/></circle>
    <circle r="1"><animateMotion dur="1.6s" begin="-1.2s" repeatCount="indefinite" path="M171 150V58"/><animate attributeName="r" values="1;3.6" dur="1.6s" begin="-1.2s" repeatCount="indefinite"/></circle>
  </g>
  <!-- עמוד האפר -->
  <g class="fl-line st-ink" stroke-width="1.5">
    <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="1.4s" repeatCount="indefinite"/>
    <circle cx="130" cy="17" r="7"/><circle cx="210" cy="17" r="7"/><circle cx="143" cy="15" r="9"/><circle cx="197" cy="15" r="9"/>
    <circle cx="156" cy="16" r="11"/><circle cx="184" cy="16" r="11"/><circle cx="170" cy="21" r="12"/>
    <circle cx="164" cy="35" r="10"/><circle cx="177" cy="32" r="10"/></g>
    <circle cx="170" cy="45" r="8"><animate attributeName="opacity" values="1;.6;1" dur="1.2s" repeatCount="indefinite"/></circle>
  </g>
  <g class="fl-line">
    <circle r="2"><animateMotion dur="1.5s" repeatCount="indefinite" path="M170 54Q150 20 128 60"/></circle>
    <circle r="1.6"><animateMotion dur="1.3s" begin="-.6s" repeatCount="indefinite" path="M170 54Q196 16 216 66"/></circle>
    <circle r="1.8"><animateMotion dur="1.7s" begin="-1s" repeatCount="indefinite" path="M170 54Q186 10 236 84"/></circle>
  </g>
  <text x="62" y="30">מאגמה סמיכה:</text>
  <text x="62" y="44">הגז נלכד</text>
  <text x="62" y="58">ומתנפץ לאפר</text>
  <text x="270" y="132">הלחץ יורד</text>
  <text x="270" y="146">הבועות גדלות</text>
  <path class="arrow st-ink" style="stroke-width:1.5" d="M240 128Q210 112 180 104" marker-end="url(#volcano-a)"/>
</g>

<!-- שלב 4: ניטור לפני התפרצות -->
<g class="only-4">
  <!-- ההר מתפח -->
  <path class="st-hot fl-none" stroke-width="1.5" style="stroke-dasharray:3 3" d="M88 118Q126 92 150 50H190Q214 92 254 118"><animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite"/></path>
  <path class="arrow st-hot" style="stroke-width:2" d="M214 92L226 84" marker-end="url(#volcano-a)"/>
  <path class="arrow st-hot" style="stroke-width:2" d="M126 92L114 84" marker-end="url(#volcano-a)"/>
  <!-- תחנת GPS -->
  <path class="st-ink fl-none" stroke-width="1.6" d="M232 110V96"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="226" y="90" width="12" height="6" rx="1"/>
  <g class="ring st-elec"><circle cx="232" cy="86" r="8"/></g>
  <text x="276" y="80">GPS: ההר</text>
  <text x="276" y="94">מתנפח</text>
  <!-- סייסמומטר ורישום -->
  <rect class="body" style="stroke-width:1.5" x="30" y="110" width="16" height="8" rx="1.5"/>
  <rect class="body" style="stroke-width:1.5" x="10" y="54" width="70" height="34" rx="4"/>
  <path class="st-hot fl-none" stroke-width="1.3" d="M14 71H24l2-6 2 12 2-14 2 16 2-12 2 8 2-4H52l2-5 2 9 2-7 2 3H76"><animate attributeName="opacity" values=".5;1;.5" dur=".7s" repeatCount="indefinite"/></path>
  <path class="thin" d="M38 110V88"/>
  <text x="45" y="102">רעידות קטנות</text>
  <g class="st-elec fl-none" stroke-width="1.5"><g class="blink"><path d="M146 136h8M150 132v8M147 133l6 6M153 133l-6 6M192 130h8M196 126v8M193 127l6 6M199 127l-6 6"/></g></g>
  <!-- גזים -->
  <path class="st-line fl-none" stroke-width="3" stroke-linecap="round" d="M170 50Q164 38 172 28Q180 18 174 8" style="stroke-dasharray:4 6"><animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite"/></path>
  <text x="226" y="22">מודדים גזים</text>
</g>
`;
