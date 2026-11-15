// אסלה וניאגרה: 1 מיכל מלא והמצוף סוגר את הברז · 2 הפקק מתרומם והמים נופלים לאסלה · 3 המפלס עובר את שיא העיקול והסיפון שואב · 4 אוויר שובר את הסיפון, נשאר מחסום מים והמיכל מתמלא
export default `
<defs>
  <clipPath id="toilet-tank"><rect x="152" y="28" width="80" height="81"/></clipPath>
  <clipPath id="toilet-bowl"><path d="M78 112C78 152 92 184 116 184C146 186 154 150 168 150V134C156 134 142 150 136 166H128L146 126V112z"/></clipPath>
  <clipPath id="toilet-trap"><path d="M168 150C176 150 180 160 180 172V192H318V178H194V168C194 146 184 134 168 134z"/><path d="M136 166C142 150 156 134 168 134V150C154 150 146 186 116 184L128 166z"/></clipPath>
  <clipPath id="toilet-pass"><path d="M146 118H160V108H172V126H146z"/></clipPath>
</defs>
<path class="thin" d="M24 196H316"/>

<!-- האסלה בחתך: קערה, עיקול (סיפון) וצינור הניקוז -->
<g class="hl-2 hl-3 hl-4">
  <path class="body" d="M66 112H206V196H106C104 189 99 187 93 184C76 175 64 152 62 122Q62 112 66 112z"/>
  <path class="fl-bg" d="M78 112C78 152 92 184 116 184C146 186 154 150 168 150C176 150 180 160 180 172V192H318V178H194V168C194 146 184 134 168 134C156 134 142 150 136 166H128L146 126H172V110H160V118H146V112z"/>

  <g class="only-1"><g clip-path="url(#toilet-bowl)"><rect class="fl-cold" fill-opacity=".8" x="60" y="150" width="120" height="60"></rect></g></g>

  <!-- שלב 2: המים מהמיכל ממלאים את הקערה עד שהם גולשים מעל השיא -->
  <g class="only-2"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.9;0.93;.985;1" dur="4.5s" repeatCount="indefinite"/>
    <g clip-path="url(#toilet-bowl)"><rect class="fl-cold" fill-opacity=".8" x="60" y="150" width="120" height="60"><animate attributeName="y" values="150;150;135;135" keyTimes="0;.12;.5;1" dur="4.5s" repeatCount="indefinite"/></rect></g>
    <g clip-path="url(#toilet-pass)"><rect class="fl-cold" fill-opacity=".8" x="140" y="104" width="40" height="26" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.1;.13;.6;.66;1" dur="4.5s" repeatCount="indefinite"/></rect></g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.11;.14;.6;.66;1" dur="4.5s" repeatCount="indefinite"/>
      <path class="pipe st-cold" style="stroke-width:5" d="M146 122C132 124 126 136 124 150"/><path class="flow" d="M146 122C132 124 126 136 124 150"/>
    </g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.46;.52;1" dur="4.5s" repeatCount="indefinite"/>
      <path class="pipe st-cold" style="stroke-width:4" d="M166 148C177 149 182 158 182 172V188"/><path class="flow" style="stroke-width:1.5" d="M166 148C177 149 182 158 182 172V188"/>
    </g>
  </g></g>

  <!-- שלב 3: העיקול מלא, המים הנופלים מושכים את כל הקערה -->
  <g class="only-3"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.9;0.93;.985;1" dur="4.5s" repeatCount="indefinite"/>
    <g clip-path="url(#toilet-bowl)"><rect class="fl-cold" fill-opacity=".8" x="60" y="135" width="120" height="60"><animate attributeName="y" values="135;135;169;169" keyTimes="0;.05;.6;1" dur="4.5s" repeatCount="indefinite"/></rect></g>
    <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.62;.7;1" dur="4.5s" repeatCount="indefinite"/>
      <g clip-path="url(#toilet-trap)"><rect class="fl-cold" fill-opacity=".8" x="110" y="130" width="210" height="66"></rect></g>
      <path class="flow" style="stroke-width:2.6;stroke-dasharray:3 9;animation-duration:.45s" d="M96 166C112 180 132 180 142 174C156 166 154 142 169 142C183 142 187 156 187 172V185H316"/>
      <g fill="#fff" fill-opacity=".9">
        <circle r="2.4"><animateMotion dur="1.1s" repeatCount="indefinite" path="M96 166C112 180 132 180 142 174C156 166 154 142 169 142C183 142 187 156 187 172V185H316"/></circle>
        <circle r="2.4"><animateMotion dur="1.1s" begin="-.37s" repeatCount="indefinite" path="M96 166C112 180 132 180 142 174C156 166 154 142 169 142C183 142 187 156 187 172V185H316"/></circle>
        <circle r="2.4"><animateMotion dur="1.1s" begin="-.73s" repeatCount="indefinite" path="M96 166C112 180 132 180 142 174C156 166 154 142 169 142C183 142 187 156 187 172V185H316"/></circle>
      </g>
    </g>
    <!-- אוויר נכנס מתחת לשפה ושובר את הסיפון -->
    <g class="fl-bg st-cold" stroke-width="1.2" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.58;.62;.8;.86;1" dur="4.5s" repeatCount="indefinite"/>
      <circle r="2.6"><animateMotion dur=".9s" repeatCount="indefinite" path="M124 168C136 176 146 168 152 156"/></circle>
      <circle r="2"><animateMotion dur=".9s" begin="-.45s" repeatCount="indefinite" path="M124 168C136 176 146 168 152 156"/></circle>
    </g>
  </g></g>

  <!-- שלב 4 והמבט הכולל: מחסום המים נשאר בעיקול; גזי הביוב נעצרים בו -->
  <g class="from-4">
    <g clip-path="url(#toilet-bowl)"><rect class="fl-cold" fill-opacity=".8" x="60" y="150" width="120" height="60"></rect></g>
    <path class="wire st-cold" style="stroke-width:2" d="M83 150H139M148 150H167"/>
    <g class="wire st-violet" style="stroke-width:2">
      <path d="M-5 0q2.5-4 5 0t5 0"><animateMotion dur="3.6s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear" path="M312 185H190C187 185 187 182 187 172C187 152 180 143 170 143"/></path>
      <path d="M-5 0q2.5-4 5 0t5 0"><animateMotion dur="3.6s" begin="-1.2s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear" path="M312 188H192C185 188 184 182 184 172C184 156 180 147 172 146"/></path>
      <path d="M-5 0q2.5-4 5 0t5 0"><animateMotion dur="3.6s" begin="-2.4s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear" path="M312 182H196C190 182 190 180 190 170C190 150 182 140 170 139"/></path>
    </g>
  </g>

  <path class="st-ink fl-none" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" d="M78 112C78 152 92 184 116 184C146 186 154 150 168 150C176 150 180 160 180 172V192H318M318 178H194V168C194 146 184 134 168 134C156 134 142 150 136 166H128L146 126H172V112M160 112V118H146V112"/>
</g>

<!-- המיכל (ניאגרה) -->
<g class="hl-1 hl-2 hl-4">
  <path class="pipe st-line" d="M236 37H318"/>
  <rect class="body" x="148" y="24" width="88" height="88" rx="3"/>
  <rect class="fl-bg st-ink" stroke-width="1.2" x="152" y="28" width="80" height="81"/>
  <rect class="fl-bg" x="160.8" y="106" width="10.4" height="8"/>
  <rect class="body" x="144" y="15" width="96" height="10" rx="3"/>

  <!-- שלב 1: המיכל מתמלא עד שהמצוף סוגר את הברז -->
  <g class="only-1"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.9;0.93;.985;1" dur="5s" repeatCount="indefinite"/>
    <g clip-path="url(#toilet-tank)"><rect class="fl-cold" fill-opacity=".8" x="150" y="57" width="84" height="70"><animate attributeName="y" values="57;46;46" keyTimes="0;.6;1" dur="5s" repeatCount="indefinite"/></rect></g>
    <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.6;.62;1" dur="5s" repeatCount="indefinite"/><path class="wire st-cold" style="stroke-width:3" d="M219 45V60"/><path class="flow" style="stroke-width:1.5" d="M219 45V60"/><path class="flow" d="M316 37H234"/></g>
    <g><animateTransform attributeName="transform" type="rotate" values="-32 224 36;0 224 36;0 224 36" keyTimes="0;.6;1" dur="5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M224 36L203 44"/><circle class="fl-warm st-ink" stroke-width="1.6" cx="203" cy="44" r="8"/><path fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round" d="M198 41q2-3 5-3"/></g>
  </g></g>

  <!-- שלב 2: הכפתור מרים את הפקק והמיכל מתרוקן -->
  <g class="only-2"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.9;0.93;.985;1" dur="4.5s" repeatCount="indefinite"/>
    <g clip-path="url(#toilet-tank)"><rect class="fl-cold" fill-opacity=".8" x="150" y="46" width="84" height="70"><animate attributeName="y" values="46;46;104;104" keyTimes="0;.1;.6;1" dur="4.5s" repeatCount="indefinite"/></rect></g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.22;.26;1" dur="4.5s" repeatCount="indefinite"/><g><path class="wire st-cold" style="stroke-width:3" d="M219 45V104"/><path class="flow" style="stroke-width:1.5" d="M219 45V104"/><path class="flow" d="M316 37H234"/></g></g>
    <g><animateTransform attributeName="transform" type="rotate" values="0 224 36;0 224 36;-40 224 36;-40 224 36" keyTimes="0;.1;.24;1" dur="4.5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M224 36L203 44"/><circle class="fl-warm st-ink" stroke-width="1.6" cx="203" cy="44" r="8"/><path fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round" d="M198 41q2-3 5-3"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -11;0 -11;0 0;0 0" keyTimes="0;.1;.6;.66;1" dur="4.5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.2" stroke-dasharray="2 2" d="M166 40V99"/><path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M156 109h20v-3q-10-9-20 0z"/></g>
    <g><animateTransform attributeName="transform" type="rotate" values="0 186 40;33 186 40;33 186 40;0 186 40;0 186 40" keyTimes="0;.1;.6;.66;1" dur="4.5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M166 40H193"/></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;0 4;0 4;0 0;0 0" keyTimes="0;.1;.6;.66;1" dur="4.5s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" d="M193 40V14"/><rect class="fl-line st-ink" stroke-width="1.5" x="186" y="8" width="14" height="7" rx="2"/></g>
    <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.1;.13;.6;.64;1" dur="4.5s" repeatCount="indefinite"/><path class="flow" style="stroke-width:2.4" d="M159 96V108M166 94V110M173 96V108"/></g>
  </g></g>

  <!-- שלב 3: מיכל ריק, המצוף ירד והברז נפתח -->
  <g class="only-3">
    <g clip-path="url(#toilet-tank)"><rect class="fl-cold" fill-opacity=".8" x="150" y="102" width="84" height="70"></rect></g>
    <g><path class="wire st-cold" style="stroke-width:3" d="M219 45V102"/><path class="flow" style="stroke-width:1.5" d="M219 45V102"/><path class="flow" d="M316 37H234"/></g>
    <g transform="rotate(-40 224 36)"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M224 36L203 44"/><circle class="fl-warm st-ink" stroke-width="1.6" cx="203" cy="44" r="8"/><path fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round" d="M198 41q2-3 5-3"/></g>
  </g>

  <!-- שלב 4 והמבט הכולל: מילוי מחדש -->
  <g class="from-4"><g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.93;0.95;.985;1" dur="7s" repeatCount="indefinite"/>
    <g clip-path="url(#toilet-tank)"><rect class="fl-cold" fill-opacity=".8" x="150" y="102" width="84" height="70"><animate attributeName="y" values="102;48;48" keyTimes="0;.82;1" dur="7s" repeatCount="indefinite"/></rect></g>
    <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.82;.84;1" dur="7s" repeatCount="indefinite"/><path class="wire st-cold" style="stroke-width:3" d="M219 45V104"/><path class="flow" style="stroke-width:1.5" d="M219 45V104"/><path class="flow" d="M316 37H234"/></g>
    <g><animateTransform attributeName="transform" type="rotate" values="-40 224 36;-40 224 36;-5 224 36;-5 224 36" keyTimes="0;.66;.82;1" dur="7s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M224 36L203 44"/><circle class="fl-warm st-ink" stroke-width="1.6" cx="203" cy="44" r="8"/><path fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round" d="M198 41q2-3 5-3"/></g>
  </g></g>

  <g class="only-1 only-3 from-4"><path class="st-ink fl-none" stroke-width="1.2" stroke-dasharray="2 2" d="M166 40V99"/><path class="fl-hot st-ink" stroke-width="1.5" stroke-linejoin="round" d="M156 109h20v-3q-10-9-20 0z"/><path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M166 40H193"/><path class="st-ink fl-none" stroke-width="2" d="M193 40V14"/><rect class="fl-line st-ink" stroke-width="1.5" x="186" y="8" width="14" height="7" rx="2"/></g>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="186" cy="40" r="2.6"/>
  <rect class="fl-line st-ink" stroke-width="1.5" x="219" y="29" width="13" height="16" rx="2"/>
  <circle class="fl-ink" cx="224" cy="36" r="2"/>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="74" y="50">המצוף עולה עם המים</text>
  <text x="74" y="66">וסוגר את ברז המילוי</text>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <text x="74" y="50">הפקק מתרומם</text>
  <text x="74" y="66">וכל המים נופלים יחד</text>
</g>
<!-- שלב 3 -->
<g class="only-3">
  <text x="74" y="50">המפלס עובר את השיא</text>
  <text x="74" y="66">והסיפון שואב הכול</text>
  <path class="arrow st-ink" style="stroke-width:1.6" d="M254 150L176 141" marker-end="url(#toilet-a)"/>
  <text x="272" y="158">שיא העיקול</text>
</g>
<!-- שלב 4 -->
<g class="only-4">
  <text x="74" y="50">אוויר שובר את הסיפון</text>
  <text x="74" y="66">ומחסום מים חוסם ריחות</text>
  <text x="262" y="166">ריח הביוב נחסם</text>
</g>
<defs><marker id="toilet-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker></defs>
`;
