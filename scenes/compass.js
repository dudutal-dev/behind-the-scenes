// מצפן: 1 שפשוף באבן שואבת מיישר את התחומים המגנטיים במחט · 2 מחט צפה במים מסתובבת בחופשיות · 3 זרמי ברזל נוזלי בליבה יוצרים שדה, והמחטים מתיישרות לאורכו · 4 הקוטב המגנטי אינו הקוטב הגאוגרפי ונודד, ומכאן הסטייה
export default `
<defs>
  <clipPath id="compass-left"><rect x="4" y="12" width="186" height="200"/></clipPath>
</defs>
<path class="thin" style="stroke-dasharray:2 5" d="M196 14V206"/>

<!-- 3 קווי השדה -->
<g class="hl-3" clip-path="url(#compass-left)"><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M142.8 154.2L144 154L145.1 153.7L146.2 153.4L147.3 153L148.4 152.7L149.4 152.2L150.5 151.8L151.5 151.3L152.5 150.8L153.4 150.2L154.4 149.6L155.3 149L156.1 148.3L157 147.7L157.8 146.9L158.6 146.2L159.3 145.4L160 144.6L160.7 143.8L161.3 143L161.9 142.1L162.5 141.2L163 140.3L163.5 139.4L163.9 138.4L164.3 137.5L164.7 136.5L165 135.5L165.2 134.5L165.5 133.5L165.6 132.5L165.8 131.5L165.9 130.4L165.9 129.4L165.9 128.3L165.8 127.3L165.7 126.3L165.6 125.2L165.4 124.2L165.2 123.2L164.9 122.1L164.6 121.1L164.2 120.1L163.8 119.1L163.4 118.2L162.9 117.2L162.4 116.2L161.8 115.3L161.2 114.4L160.6 113.5L159.9 112.6L159.2 111.8L158.4 110.9L157.6 110.1L156.8 109.3L155.9 108.6L155.1 107.9L154.2 107.2L153.2 106.5L152.2 105.8"/><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M39.8 134.2L38.8 133.5L37.8 132.8L36.9 132.1L36.1 131.4L35.2 130.7L34.4 129.9L33.6 129.1L32.8 128.2L32.1 127.4L31.4 126.5L30.8 125.6L30.2 124.7L29.6 123.8L29.1 122.8L28.6 121.8L28.2 120.9L27.8 119.9L27.4 118.9L27.1 117.9L26.8 116.8L26.6 115.8L26.4 114.8L26.3 113.7L26.2 112.7L26.1 111.7L26.1 110.6L26.1 109.6L26.2 108.5L26.4 107.5L26.5 106.5L26.8 105.5L27 104.5L27.3 103.5L27.7 102.5L28.1 101.6L28.5 100.6L29 99.7L29.5 98.8L30.1 97.9L30.7 97L31.3 96.2L32 95.4L32.7 94.6L33.4 93.8L34.2 93.1L35 92.3L35.9 91.7L36.7 91L37.6 90.4L38.6 89.8L39.5 89.2L40.5 88.7L41.5 88.2L42.6 87.8L43.6 87.3L44.7 87L45.8 86.6L46.9 86.3L48 86L49.2 85.8"/><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M136.1 161.9L138.1 162.3L140.2 162.5L142.2 162.7L144.3 162.8L146.3 162.8L148.3 162.7L150.4 162.5L152.4 162.3L154.3 161.9L156.3 161.4L158.2 160.9L160.1 160.3L161.9 159.6L163.6 158.8L165.4 157.9L167 156.9L168.6 155.8L170.1 154.7L171.5 153.5L172.9 152.3L174.2 150.9L175.4 149.5L176.5 148.1L177.5 146.6L178.4 145L179.2 143.4L179.9 141.7L180.5 140.1L181 138.3L181.4 136.6L181.7 134.8L181.9 133.1L181.9 131.3L181.9 129.5L181.7 127.7L181.5 125.9L181.1 124.1L180.6 122.4L180.1 120.6L179.4 118.9L178.6 117.2L177.7 115.6L176.7 114L175.7 112.4L174.5 110.9L173.2 109.4L171.9 108L170.5 106.7L169 105.4L167.4 104.2L165.8 103L164.1 101.9L162.3 100.9L160.5 100L158.7 99.2L156.8 98.4L154.8 97.7L152.9 97.1L150.9 96.6L148.9 96.2"/><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M43.1 143.8L41.1 143.4L39.1 142.9L37.2 142.3L35.2 141.6L33.3 140.8L31.5 140L29.7 139.1L27.9 138.1L26.2 137L24.6 135.8L23 134.6L21.5 133.3L20.1 132L18.8 130.6L17.5 129.1L16.3 127.6L15.3 126L14.3 124.4L13.4 122.8L12.6 121.1L11.9 119.4L11.4 117.6L10.9 115.9L10.5 114.1L10.3 112.3L10.1 110.5L10.1 108.7L10.1 106.9L10.3 105.2L10.6 103.4L11 101.7L11.5 99.9L12.1 98.3L12.8 96.6L13.6 95L14.5 93.4L15.5 91.9L16.6 90.5L17.8 89.1L19.1 87.7L20.5 86.5L21.9 85.3L23.4 84.2L25 83.1L26.6 82.1L28.4 81.2L30.1 80.4L31.9 79.7L33.8 79.1L35.7 78.6L37.7 78.1L39.6 77.7L41.6 77.5L43.7 77.3L45.7 77.2L47.7 77.2L49.8 77.3L51.8 77.5L53.9 77.7L55.9 78.1"/><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M130.4 166.7L133.1 168L136 169.1L138.9 170L141.8 170.9L144.8 171.6L147.8 172.1L150.9 172.5L154 172.7L157 172.8L160.1 172.7L163.1 172.5L166 172L169 171.4L171.9 170.7L174.7 169.8L177.4 168.7L180 167.5L182.5 166.1L184.9 164.6L187.2 163L189.4 161.2L191.4 159.3L193.2 157.2L194.9 155.1L196.4 152.8L197.8 150.5L198.9 148.1L199.9 145.6L200.7 143.1L201.3 140.5L201.7 137.8L202 135.2L202 132.5L201.8 129.8L201.4 127.2L200.8 124.5L200.1 121.9L199.1 119.3L198 116.8L196.7 114.3L195.2 111.9L193.5 109.6L191.7 107.4L189.7 105.3L187.6 103.3L185.3 101.4L182.9 99.6L180.4 98L177.8 96.5L175.1 95.1L172.3 93.9L169.5 92.8L166.6 91.9L163.6 91.1L160.6 90.5L157.5 90L154.5 89.7L151.4 89.5L148.4 89.4L145.4 89.5"/><path class="wire st-violet dash slow" style="stroke-width:1.5" d="M46.6 150.5L43.6 150.6L40.6 150.5L37.5 150.3L34.5 150L31.4 149.5L28.4 148.9L25.4 148.1L22.5 147.2L19.7 146.1L16.9 144.9L14.2 143.5L11.6 142L9.1 140.4L6.7 138.6L4.4 136.7L2.3 134.7L0.3 132.6L-1.5 130.4L-3.2 128.1L-4.7 125.7L-6 123.2L-7.1 120.7L-8.1 118.1L-8.8 115.5L-9.4 112.8L-9.8 110.2L-10 107.5L-10 104.8L-9.7 102.2L-9.3 99.5L-8.7 96.9L-7.9 94.4L-6.9 91.9L-5.8 89.5L-4.4 87.2L-2.9 84.9L-1.2 82.8L0.6 80.7L2.6 78.8L4.8 77L7.1 75.4L9.5 73.9L12 72.5L14.6 71.3L17.3 70.2L20.1 69.3L23 68.6L26 68L28.9 67.5L31.9 67.3L35 67.2L38 67.3L41.1 67.5L44.2 67.9L47.2 68.4L50.2 69.1L53.1 70L56 70.9L58.9 72L61.6 73.3"/></g>

<!-- כדור הארץ בחתך -->
<circle class="fl-cold-soft st-ink" stroke-width="2" cx="96" cy="120" r="58"/>
<circle class="fl-soft" cx="96" cy="120" r="53"/>
<g class="hl-3">
  <circle class="fl-warm st-ink" stroke-width="1.5" cx="96" cy="120" r="34"/>
  <path class="wire st-hot dash" style="stroke-width:1.4" d="M68.5 110a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1 -11 0"/><path class="wire st-hot dash rev" style="stroke-width:1.4" d="M112.5 110a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1 -11 0"/><path class="wire st-hot dash" style="stroke-width:1.4" d="M70.5 134a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1 -11 0"/><path class="wire st-hot dash rev" style="stroke-width:1.4" d="M110.5 134a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1 -11 0"/>
  <circle class="fl-hot st-ink" stroke-width="1.5" cx="96" cy="120" r="12"/>
</g>
<g class="hl-3"><g transform="translate(181.4 136.6)"><g><animateTransform attributeName="transform" type="rotate" values="-19.1;24.9;4.9;10.9;10.9" keyTimes="0;.2;.4;.6;1" dur="4s" begin="-0s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -8L2.6 0H-2.6Z"/><path class="fl-panel st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 8L2.6 0H-2.6Z"/></g></g><g transform="translate(31 67.4)"><g><animateTransform attributeName="transform" type="rotate" values="55.8;99.8;79.8;85.8;85.8" keyTimes="0;.2;.4;.6;1" dur="4s" begin="-0.7s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -8L2.6 0H-2.6Z"/><path class="fl-panel st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 8L2.6 0H-2.6Z"/></g></g><g transform="translate(157.7 110.2)"><g><animateTransform attributeName="transform" type="rotate" values="-75.1;-31.1;-51.1;-45.1;-45.1" keyTimes="0;.2;.4;.6;1" dur="4s" begin="-1.4s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -8L2.6 0H-2.6Z"/><path class="fl-panel st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 8L2.6 0H-2.6Z"/></g></g><g transform="translate(42.7 143.7)"><g><animateTransform attributeName="transform" type="rotate" values="-108.4;-64.4;-84.4;-78.4;-78.4" keyTimes="0;.2;.4;.6;1" dur="4s" begin="-2.0999999999999996s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -8L2.6 0H-2.6Z"/><path class="fl-panel st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 8L2.6 0H-2.6Z"/></g></g><g transform="translate(161 172.6)"><g><animateTransform attributeName="transform" type="rotate" values="55.7;99.7;79.7;85.7;85.7" keyTimes="0;.2;.4;.6;1" dur="4s" begin="-2.8s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -8L2.6 0H-2.6Z"/><path class="fl-panel st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 8L2.6 0H-2.6Z"/></g></g></g>

<!-- 4 קטבים -->
<g class="hl-4">
  <path class="thin st-ink" style="stroke-width:1.2;stroke-dasharray:3 3" d="M96 48V186"/>
  <path class="wire st-hot" style="stroke-width:1.4;stroke-dasharray:3 3" d="M109.7 49.3L83.4 184.8"/>
  <circle class="fl-ink" cx="96" cy="62" r="3"/>
  <circle class="fl-hot st-ink" stroke-width="1" cx="107.1" cy="63.1" r="3.2"><animate attributeName="opacity" values="1;.5;1" dur="1.6s" repeatCount="indefinite"/></circle>
</g>

<!-- 1 אבן שואבת ומחט -->
<g class="hl-1">
  <path class="fl-dark st-ink" stroke-width="2" stroke-linejoin="round" d="M202 84L210 70L226 64L244 68L252 80L246 92L222 96L206 94Z"/>
  <path class="thin" style="stroke-width:1" d="M214 76L222 72M232 84L240 80M216 88L224 86"/>
  <g><animateTransform attributeName="transform" type="translate" values="-10 0;12 0;-10 0" dur="1.6s" repeatCount="indefinite"/>
    <path class="fl-line st-ink" stroke-width="1" stroke-linejoin="round" d="M206 59L226 56.5L246 59L226 61.5Z"/>
  </g>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="262" y="22" width="48" height="44" rx="4"/>
  <g transform="translate(272 34)"><g><animateTransform attributeName="transform" type="rotate" values="140;140;90;90;140" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(287 34)"><g><animateTransform attributeName="transform" type="rotate" values="-60;-60;90;90;-60" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(302 34)"><g><animateTransform attributeName="transform" type="rotate" values="200;200;90;90;200" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(272 48)"><g><animateTransform attributeName="transform" type="rotate" values="30;30;90;90;30" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(287 48)"><g><animateTransform attributeName="transform" type="rotate" values="-150;-150;90;90;-150" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(302 48)"><g><animateTransform attributeName="transform" type="rotate" values="95;95;90;90;95" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(272 62)"><g><animateTransform attributeName="transform" type="rotate" values="250;250;90;90;250" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(287 62)"><g><animateTransform attributeName="transform" type="rotate" values="-20;-20;90;90;-20" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g><g transform="translate(302 62)"><g><animateTransform attributeName="transform" type="rotate" values="170;170;90;90;170" keyTimes="0;.2;.55;.9;1" dur="4s" repeatCount="indefinite"/><path class="wire st-ink" style="stroke-width:1.3" d="M0 5V-3"/><path class="fl-hot" d="M0 -6L3 -1H-3Z"/></g></g>
  <path class="thin st-ink" style="stroke-width:1;stroke-dasharray:2 3" d="M246 56L262 44"/>
</g>

<!-- 2 קערה עם מחט צפה -->
<g class="hl-2 hl-4">
  <circle class="fl-panel st-ink" stroke-width="2" cx="255" cy="156" r="34"/>
  <circle class="fl-cold-soft st-cold" stroke-width="1" cx="255" cy="156" r="28"/>
  <g transform="translate(255 156)"><g>
    <animateTransform attributeName="transform" type="rotate" values="75;-18;26;7;12;12" keyTimes="0;.18;.36;.52;.66;1" dur="5s" repeatCount="indefinite"/>
    <path class="fl-hot st-ink" stroke-width="1" stroke-linejoin="round" d="M0 -22L3 0H-3Z"/>
    <path class="fl-panel st-ink" stroke-width="1" stroke-linejoin="round" d="M0 22L3 0H-3Z"/>
    <circle class="fl-warm st-ink" stroke-width="1" r="2.5"/>
  </g></g>
</g>

<!-- שלב 1 -->
<g class="only-1">
  <text x="255" y="102">שפשוף מיישר תחומים</text>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <circle class="ring st-cold" cx="255" cy="156" r="30"/>
  <text x="255" y="206">מחט צפה ומסתובבת</text>
</g>

<!-- שלב 3 -->
<g class="only-3">
  <text x="96" y="22">ברזל נוזלי בליבה</text>
  <text x="96" y="38">והמחטים לאורך השדה</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <path class="thin st-ink" style="stroke-width:1.2;stroke-dasharray:3 3" d="M255 156V124"/>
  <path class="fl-none st-hot" stroke-width="1.6" d="M255 138A18 18 0 0 1 258.7 138.4"/>
  <path class="fl-none st-hot" stroke-width="1.2" stroke-dasharray="1 3" d="M97.1 65.1Q103.1 57.1 107.1 63.1"/>
  <circle class="ring st-hot" cx="107.1" cy="63.1" r="9"/>
  <text x="96" y="22">הקוטב המגנטי</text>
  <text x="96" y="38">אינו הקוטב, והוא נודד</text>
  <text x="255" y="206">סטייה מהצפון האמיתי</text>
</g>
`;
