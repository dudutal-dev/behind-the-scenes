// קוד QR: 1 משבצת היא ביט · 2 שלושה סמני מיקום · 3 משבצות עודפות משחזרות חלק פגום · 4 הטלפון סורק ומפענח
export default `
<defs><marker id="qr-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker></defs>
<!-- הדף והקוד -->
<rect class="body" x="8" y="22" width="163" height="163" rx="7"/>
<g class="hl-2 hl-4"><rect class="fl-ink" x="16" y="30" width="49" height="49"/><rect class="fl-panel" x="23" y="37" width="35" height="35"/><rect class="fl-ink" x="30" y="44" width="21" height="21"/><rect class="fl-ink" x="114" y="30" width="49" height="49"/><rect class="fl-panel" x="121" y="37" width="35" height="35"/><rect class="fl-ink" x="128" y="44" width="21" height="21"/><rect class="fl-ink" x="16" y="128" width="49" height="49"/><rect class="fl-panel" x="23" y="135" width="35" height="35"/><rect class="fl-ink" x="30" y="142" width="21" height="21"/></g>
<g class="hl-1 hl-3 hl-4"><path class="fl-ink" d="M72 30h7v7h-7zM100 30h7v7h-7zM79 37h28v7h-28zM86 44h14v7h-14zM72 51h7v7h-7zM86 51h21v7h-21zM86 58h21v7h-21zM79 65h14v7h-14zM100 65h7v7h-7zM72 72h7v7h-7zM86 72h7v7h-7zM100 72h7v7h-7zM72 79h7v7h-7zM86 79h21v7h-21zM23 86h7v7h-7zM51 86h21v7h-21zM79 86h7v7h-7zM93 86h14v7h-14zM121 86h7v7h-7zM135 86h7v7h-7zM156 86h7v7h-7zM51 93h7v7h-7zM72 93h7v7h-7zM93 93h21v7h-21zM142 93h14v7h-14zM23 100h14v7h-14zM44 100h7v7h-7zM58 100h14v7h-14zM86 100h14v7h-14zM114 100h14v7h-14zM142 100h7v7h-7zM30 107h21v7h-21zM65 107h7v7h-7zM79 107h14v7h-14zM100 107h7v7h-7zM114 107h7v7h-7zM142 107h21v7h-21zM16 114h7v7h-7zM30 114h7v7h-7zM44 114h7v7h-7zM58 114h49v7h-49zM121 114h28v7h-28zM156 114h7v7h-7zM72 121h7v7h-7zM107 121h7v7h-7zM121 121h7v7h-7zM149 121h14v7h-14zM72 128h7v7h-7zM100 128h35v7h-35zM100 135h21v7h-21zM135 135h7v7h-7zM149 135h7v7h-7zM79 142h14v7h-14zM107 142h7v7h-7zM128 142h7v7h-7zM142 142h14v7h-14zM100 149h28v7h-28zM142 149h7v7h-7zM86 156h7v7h-7zM100 156h7v7h-7zM114 156h7v7h-7zM128 156h28v7h-28zM93 163h7v7h-7zM114 163h21v7h-21zM149 163h7v7h-7zM86 170h42v7h-42z"/></g>
<!-- שלב 3: משבצות התיקון -->
<g class="only-3"><path class="fl-violet fade" d="M51 93h7v7h-7zM72 93h7v7h-7zM23 100h14v7h-14zM44 100h7v7h-7zM65 100h7v7h-7zM30 107h21v7h-21zM65 107h7v7h-7zM16 114h7v7h-7zM30 114h7v7h-7zM44 114h7v7h-7zM65 114h14v7h-14z"/></g>
<!-- כתם שמסתיר חלק מהקוד -->
<g class="from-3">
  <path class="fl-warm st-ink" stroke-width="1.5" stroke-linejoin="round" d="M134 124C133.9 128.3 128.6 133 125.3 136.9C122 140.7 118.3 146.5 114.1 147.1C109.9 147.8 104.7 143.4 100.3 140.9C95.8 138.4 89.1 136.2 87.4 132.2C85.8 128.2 88.2 121.1 90.3 116.8C92.4 112.6 96 109.3 100 106.7C104 104.1 109.7 100.7 114 101.3C118.3 102 122.4 107 125.7 110.8C129 114.6 134.1 119.7 134 124z"/>
  <path class="fl-none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" d="M98 114q5-7 13-6"/>
</g>
<g class="only-3"><path class="fl-green fade d2" d="M100 107h7v7h-7zM114 107h7v7h-7zM93 114h14v7h-14zM121 114h7v7h-7zM107 121h7v7h-7zM121 121h7v7h-7zM100 128h28v7h-28zM100 135h21v7h-21z"/></g>

<!-- הטלפון הסורק -->
<g class="hl-4">
  <rect class="body" x="224" y="98" width="74" height="114" rx="10"/>
  <rect class="fl-cold-soft" x="230" y="107" width="62" height="96" rx="4"/>
  <rect class="fl-line" x="253" y="101" width="16" height="2.5" rx="1.2"/>
  <rect class="fl-panel" x="241" y="114" width="40" height="40" rx="2"/>
  <rect class="fl-ink" x="244" y="117" width="10.2" height="10.2"/><rect class="fl-panel" x="246.6" y="119.5" width="5.1" height="5.1"/><rect class="fl-ink" x="267.8" y="117" width="10.2" height="10.2"/><rect class="fl-panel" x="270.4" y="119.5" width="5.1" height="5.1"/><rect class="fl-ink" x="244" y="140.8" width="10.2" height="10.2"/><rect class="fl-panel" x="246.6" y="143.4" width="5.1" height="5.1"/><path class="fl-ink" d="M261 123.8h3.4v3.4h-3.4zM261 127.2h3.4v3.4h-3.4zM254.2 130.6h3.4v3.4h-3.4zM267.8 130.6h3.4v3.4h-3.4zM274.6 130.6h3.4v3.4h-3.4zM244 134h3.4v3.4h-3.4zM247.4 134h3.4v3.4h-3.4zM264.4 134h3.4v3.4h-3.4zM267.8 134h3.4v3.4h-3.4zM274.6 134h3.4v3.4h-3.4zM261 137.4h3.4v3.4h-3.4zM274.6 137.4h3.4v3.4h-3.4zM261 140.8h3.4v3.4h-3.4zM264.4 140.8h3.4v3.4h-3.4zM267.8 140.8h3.4v3.4h-3.4zM271.2 140.8h3.4v3.4h-3.4zM274.6 140.8h3.4v3.4h-3.4zM267.8 144.2h3.4v3.4h-3.4zM271.2 144.2h3.4v3.4h-3.4zM261 147.6h3.4v3.4h-3.4zM264.4 147.6h3.4v3.4h-3.4zM271.2 147.6h3.4v3.4h-3.4zM274.6 147.6h3.4v3.4h-3.4z"/>
  <path class="fl-none st-hot" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M237 118v-8h8M277 110h8v8M285 150v8h-8M245 158h-8v-8"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="236" y="168" width="50" height="18" rx="9"/>
  <path class="fl-none st-cold" stroke-width="2" stroke-linecap="round" d="M245 179.500l-1.5 1.500a2.8 2.8 0 0 1-4-4l3-3a2.8 2.8 0 0 1 4 0M246 174.500l1.5-1.500a2.8 2.8 0 0 1 4 4l-3 3a2.8 2.8 0 0 1-4 0"/>
  <rect class="fl-cold" x="257" y="173" width="23" height="3" rx="1.5"/><rect class="fl-line" x="257" y="179" width="15" height="3" rx="1.5"/>
</g>

<!-- שלב 1: משבצות הן ביטים -->
<g class="only-1">
  <rect class="fl-none st-hot" stroke-width="1.2" x="77.5" y="84.5" width="59" height="10" rx="1.5"/>
  <rect class="fl-none st-hot" stroke-width="2.5" x="79" y="86" width="7" height="7"><animate attributeName="x" values="79;86;93;100;107;114;121;128" dur="4s" repeatCount="indefinite" calcMode="discrete"/></rect>
  <path class="thin st-hot" stroke-width="1.2" d="M137 88L196 58"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="196" y="46" width="13" height="13"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="209" y="46" width="13" height="13"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="222" y="46" width="13" height="13"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="235" y="46" width="13" height="13"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="248" y="46" width="13" height="13"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="261" y="46" width="13" height="13"/>
  <rect class="fl-ink st-ink" stroke-width="1.2" x="274" y="46" width="13" height="13"/>
  <rect class="fl-panel st-ink" stroke-width="1.2" x="287" y="46" width="13" height="13"/>
  <rect class="fl-none st-hot" stroke-width="2.5" x="196" y="46" width="13" height="13"><animate attributeName="x" values="196;209;222;235;248;261;274;287" dur="4s" repeatCount="indefinite" calcMode="discrete"/></rect>
  <text x="202.5" y="76">1</text>
  <text x="215.5" y="76">0</text>
  <text x="228.5" y="76">1</text>
  <text x="241.5" y="76">1</text>
  <text x="254.5" y="76">0</text>
  <text x="267.5" y="76">0</text>
  <text x="280.5" y="76">1</text>
  <text x="293.5" y="76">0</text>
  <text x="248" y="18">משבצת שחורה היא 1</text>
  <text x="248" y="32">משבצת לבנה היא 0</text>
</g>
<!-- שלב 2: שלושת סמני המיקום -->
<g class="only-2">
  <path class="arrow st-hot dash" d="M138.5 54.500H40.500V152.5"/>
  <rect class="fl-none st-hot pulse" stroke-width="2.5" x="12.5" y="26.5" width="56" height="56" rx="5"/>
  <rect class="fl-none st-hot pulse d2" stroke-width="2.5" x="110.5" y="26.5" width="56" height="56" rx="5"/>
  <rect class="fl-none st-hot pulse d4" stroke-width="2.5" x="12.5" y="124.5" width="56" height="56" rx="5"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 248 66;0 248 66;90 248 66;90 248 66;180 248 66;180 248 66;270 248 66;270 248 66;360 248 66" keyTimes="0;.15;.25;.4;.5;.65;.75;.9;1" dur="6s" repeatCount="indefinite"/>
    <rect class="body" x="231" y="49" width="34" height="34" rx="3"/>
    <rect class="fl-ink" x="234.5" y="52.5" width="8.100000000000001" height="8.100000000000001"/><rect class="fl-panel" x="236.5" y="54.5" width="4.050000000000001" height="4.050000000000001"/><rect class="fl-ink" x="253.4" y="52.5" width="8.100000000000001" height="8.100000000000001"/><rect class="fl-panel" x="255.4" y="54.5" width="4.050000000000001" height="4.050000000000001"/><rect class="fl-ink" x="234.5" y="71.4" width="8.100000000000001" height="8.100000000000001"/><rect class="fl-panel" x="236.5" y="73.4" width="4.050000000000001" height="4.050000000000001"/><path class="fl-ink" d="M245.3 55.2h2.7v2.7h-2.7zM248 55.2h2.7v2.7h-2.7zM245.3 60.6h2.7v2.7h-2.7zM234.5 63.3h2.7v2.7h-2.7zM239.9 63.3h2.7v2.7h-2.7zM242.6 63.3h2.7v2.7h-2.7zM245.3 63.3h2.7v2.7h-2.7zM250.7 63.3h2.7v2.7h-2.7zM253.4 63.3h2.7v2.7h-2.7zM256.1 63.3h2.7v2.7h-2.7zM258.8 63.3h2.7v2.7h-2.7zM239.9 66h2.7v2.7h-2.7zM242.6 66h2.7v2.7h-2.7zM248 66h2.7v2.7h-2.7zM253.4 66h2.7v2.7h-2.7zM258.8 66h2.7v2.7h-2.7zM248 68.7h2.7v2.7h-2.7zM250.7 68.7h2.7v2.7h-2.7zM253.4 68.7h2.7v2.7h-2.7zM258.8 68.7h2.7v2.7h-2.7zM248 71.4h2.7v2.7h-2.7zM258.8 71.4h2.7v2.7h-2.7zM245.3 74.1h2.7v2.7h-2.7zM248 74.1h2.7v2.7h-2.7zM250.7 74.1h2.7v2.7h-2.7zM253.4 74.1h2.7v2.7h-2.7zM256.1 74.1h2.7v2.7h-2.7zM245.3 76.8h2.7v2.7h-2.7zM248 76.8h2.7v2.7h-2.7zM258.8 76.8h2.7v2.7h-2.7z"/>
  </g>
  <text x="248" y="18">שלושה סמני מיקום</text>
  <text x="248" y="32">מגלים כיוון וגודל</text>
</g>
<!-- שלב 3: שחזור החלק הפגום -->
<g class="only-3">
  <rect class="fl-violet" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.8s" repeatCount="indefinite" path="M44 106Q72 84 102 116"/></rect>
  <rect class="fl-violet" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.8s" begin="-.6s" repeatCount="indefinite" path="M30 112Q70 150 100 130"/></rect>
  <rect class="fl-violet" x="-3" y="-3" width="6" height="6"><animateMotion dur="1.8s" begin="-1.2s" repeatCount="indefinite" path="M58 100Q84 96 108 124"/></rect>
  <text x="248" y="18">משבצות עודפות</text>
  <text x="248" y="32">משחזרות את הנזק</text>
  <text x="248" y="62">גם אם שליש</text>
  <text x="248" y="76">מהקוד נהרס</text>
</g>
<!-- שלב 4: סריקה ופענוח -->
<g class="only-4">
  <path class="thin st-hot" stroke-dasharray="3 4" d="M224 122L171 30M224 190L171 177"/>
  <rect class="fl-hot" opacity=".18" x="12" y="28" width="155" height="12"><animate attributeName="y" values="26;171;26" dur="2.6s" repeatCount="indefinite"/></rect>
  <path class="fl-none st-hot" stroke-width="2" stroke-linecap="round" d="M12 32H167"><animateTransform attributeName="transform" type="translate" values="0 0;0 145;0 0" dur="2.6s" repeatCount="indefinite"/></path>
  <path class="fl-none st-hot" stroke-width="1.5" stroke-linecap="round" d="M241 115H281"><animateTransform attributeName="transform" type="translate" values="0 0;0 38;0 0" dur="2.6s" repeatCount="indefinite"/></path>
  <g class="pulse"><circle class="fl-green st-ink" stroke-width="1.2" cx="287" cy="167" r="6.5"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M284 167l2.2 2.4 4-4.6"/></g>
  <text x="248" y="18">הטלפון מפענח לבד</text>
  <text x="248" y="32">בלי אינטרנט</text>
</g>
`;
