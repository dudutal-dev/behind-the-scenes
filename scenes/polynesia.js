// ניווט פולינזי: 1 מצפן כוכבים — זורח בבית קבוע ושוקע בבית המקביל · 2 גלים ארוכים בכיוון קבוע · 3 כוכב מעל הראש מסמן קו רוחב · 4 ענן מעל אי וציפורים שחוזרות אליו
export default `
<defs>
  <clipPath id="polynesia-sea"><rect x="0" y="128" width="320" height="92"/></clipPath>
</defs>
<rect class="fl-cold-soft" x="0" y="128" width="320" height="92"/>
<path class="thin st-cold" d="M0 128H320"/>
<circle class="fl-line" cx="24" cy="26" r="1.4"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="70" cy="18" r="1"><animate attributeName="opacity" values="1;.3;1" dur="2.6s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="118" cy="40" r="1"><animate attributeName="opacity" values="1;.3;1" dur="3.2s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="206" cy="58" r="1.4"><animate attributeName="opacity" values="1;.3;1" dur="3.8s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="252" cy="18" r="1"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="302" cy="40" r="1"><animate attributeName="opacity" values="1;.3;1" dur="2.6s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="16" cy="64" r="1.4"><animate attributeName="opacity" values="1;.3;1" dur="3.2s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="136" cy="70" r="1"><animate attributeName="opacity" values="1;.3;1" dur="3.8s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="304" cy="96" r="1"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="196" cy="18" r="1.4"><animate attributeName="opacity" values="1;.3;1" dur="2.6s" repeatCount="indefinite"/></circle><circle class="fl-line" cx="40" cy="44" r="1"><animate attributeName="opacity" values="1;.3;1" dur="3.2s" repeatCount="indefinite"/></circle>

<!-- 2 גלים -->
<g class="hl-2" clip-path="url(#polynesia-sea)">
  <path class="wire st-cold" style="stroke-width:1.3" opacity=".6" d="M-58.6 119.8Q-50 113.7 -39.6 113.3Q-29.1 113 -20.6 106.9Q-12 100.9 -1.6 100.5Q8.9 100.2 17.4 94.1Q26 88.1 36.4 87.7Q46.9 87.4 55.4 81.3Q64 75.3 74.4 74.9Q84.9 74.6 93.4 68.5Q102 62.5 112.4 62.1Q122.9 61.8 131.4 55.7Q140 49.7 150.4 49.3Q160.9 49 169.4 42.9Q178 36.9 188.4 36.5Q198.9 36.2 207.4 30.1Q216 24.1 226.4 23.7Q236.9 23.4 245.4 17.3Q254 11.3 264.4 10.9Q274.9 10.6 283.4 4.5Q292 -1.5 302.4 -1.9M-53.1 135.9Q-44.6 129.9 -34.1 129.5Q-23.7 129.2 -15.1 123.1Q-6.6 117 3.9 116.7Q14.3 116.3 22.9 110.3Q31.4 104.2 41.9 103.9Q52.3 103.5 60.9 97.5Q69.4 91.4 79.9 91.1Q90.3 90.7 98.9 84.7Q107.4 78.6 117.9 78.3Q128.3 77.9 136.9 71.9Q145.4 65.8 155.9 65.5Q166.3 65.1 174.9 59.1Q183.4 53 193.9 52.7Q204.3 52.3 212.9 46.3Q221.4 40.2 231.9 39.9Q242.3 39.5 250.9 33.5Q259.4 27.4 269.9 27.1Q280.3 26.7 288.9 20.7Q297.4 14.6 307.9 14.3M-47.7 152.1Q-39.2 146 -28.7 145.7Q-18.2 145.3 -9.7 139.3Q-1.2 133.2 9.3 132.8Q19.8 132.5 28.3 126.4Q36.8 120.4 47.3 120Q57.8 119.7 66.3 113.6Q74.8 107.6 85.3 107.2Q95.8 106.9 104.3 100.8Q112.8 94.8 123.3 94.4Q133.8 94.1 142.3 88Q150.8 82 161.3 81.6Q171.8 81.3 180.3 75.2Q188.8 69.2 199.3 68.8Q209.8 68.5 218.3 62.4Q226.8 56.4 237.3 56Q247.8 55.7 256.3 49.6Q264.8 43.6 275.3 43.2Q285.8 42.9 294.3 36.8Q302.8 30.8 313.3 30.4M-42.3 168.2Q-33.7 162.2 -23.3 161.8Q-12.8 161.5 -4.3 155.4Q4.3 149.4 14.7 149Q25.2 148.7 33.7 142.6Q42.3 136.6 52.7 136.2Q63.2 135.8 71.7 129.8Q80.3 123.7 90.7 123.4Q101.2 123 109.7 117Q118.3 110.9 128.7 110.6Q139.2 110.2 147.7 104.2Q156.3 98.1 166.7 97.8Q177.2 97.4 185.7 91.4Q194.3 85.3 204.7 85Q215.2 84.6 223.7 78.6Q232.3 72.5 242.7 72.2Q253.2 71.8 261.7 65.8Q270.3 59.7 280.7 59.4Q291.2 59 299.7 53Q308.3 46.9 318.7 46.6M-36.8 184.4Q-28.3 178.3 -17.8 178Q-7.4 177.6 1.2 171.6Q9.7 165.5 20.2 165.2Q30.6 164.8 39.2 158.8Q47.7 152.7 58.2 152.3Q68.6 152 77.2 145.9Q85.7 139.9 96.2 139.5Q106.6 139.2 115.2 133.1Q123.7 127.1 134.2 126.7Q144.6 126.4 153.2 120.3Q161.7 114.3 172.2 113.9Q182.6 113.6 191.2 107.5Q199.7 101.5 210.2 101.1Q220.6 100.8 229.2 94.7Q237.7 88.7 248.2 88.3Q258.6 88 267.2 81.9Q275.7 75.9 286.2 75.5Q296.6 75.2 305.2 69.1Q313.7 63.1 324.2 62.7M-31.4 200.5Q-22.8 194.5 -12.4 194.1Q-1.9 193.8 6.6 187.7Q15.2 181.7 25.6 181.3Q36.1 180.9 44.6 174.9Q53.2 168.8 63.6 168.5Q74.1 168.1 82.6 162.1Q91.2 156 101.6 155.7Q112.1 155.3 120.6 149.3Q129.2 143.2 139.6 142.9Q150.1 142.5 158.6 136.5Q167.2 130.4 177.6 130.1Q188.1 129.7 196.6 123.7Q205.2 117.6 215.6 117.3Q226.1 116.9 234.6 110.9Q243.2 104.8 253.6 104.5Q264.1 104.1 272.6 98.1Q281.2 92 291.6 91.7Q302.1 91.3 310.6 85.3Q319.2 79.2 329.6 78.9M-25.9 216.7Q-17.4 210.6 -6.9 210.3Q3.5 209.9 12.1 203.8Q20.6 197.8 31.1 197.4Q41.5 197.1 50.1 191Q58.6 185 69.1 184.6Q79.5 184.3 88.1 178.2Q96.6 172.2 107.1 171.8Q117.5 171.5 126.1 165.4Q134.6 159.4 145.1 159Q155.5 158.7 164.1 152.6Q172.6 146.6 183.1 146.2Q193.5 145.9 202.1 139.8Q210.6 133.8 221.1 133.4Q231.5 133.1 240.1 127Q248.6 121 259.1 120.6Q269.5 120.3 278.1 114.2Q286.6 108.2 297.1 107.8Q307.5 107.5 316.1 101.4Q324.6 95.4 335.1 95M-20.5 232.8Q-12 226.8 -1.5 226.4Q9 226.1 17.5 220Q26 214 36.5 213.6Q47 213.3 55.5 207.2Q64 201.2 74.5 200.8Q85 200.4 93.5 194.4Q102 188.3 112.5 188Q123 187.6 131.5 181.6Q140 175.5 150.5 175.2Q161 174.8 169.5 168.8Q178 162.7 188.5 162.4Q199 162 207.5 156Q216 149.9 226.5 149.6Q237 149.2 245.5 143.2Q254 137.1 264.5 136.8Q275 136.4 283.5 130.4Q292 124.3 302.5 124Q313 123.6 321.5 117.6Q330 111.5 340.5 111.2M-15.1 249Q-6.5 242.9 3.9 242.6Q14.4 242.2 22.9 236.2Q31.5 230.1 41.9 229.8Q52.4 229.4 60.9 223.3Q69.5 217.3 79.9 216.9Q90.4 216.6 98.9 210.5Q107.5 204.5 117.9 204.1Q128.4 203.8 136.9 197.7Q145.5 191.7 155.9 191.3Q166.4 191 174.9 184.9Q183.5 178.9 193.9 178.5Q204.4 178.2 212.9 172.1Q221.5 166.1 231.9 165.7Q242.4 165.4 250.9 159.3Q259.5 153.3 269.9 152.9Q280.4 152.6 288.9 146.5Q297.5 140.5 307.9 140.1Q318.4 139.8 326.9 133.7Q335.5 127.7 345.9 127.3M-9.6 265.1Q-1.1 259.1 9.4 258.7Q19.8 258.4 28.4 252.3Q36.9 246.3 47.4 245.9Q57.8 245.6 66.4 239.5Q74.9 233.5 85.4 233.1Q95.8 232.8 104.4 226.7Q112.9 220.7 123.4 220.3Q133.8 220 142.4 213.9Q150.9 207.9 161.4 207.5Q171.8 207.2 180.4 201.1Q188.9 195.1 199.4 194.7Q209.8 194.3 218.4 188.3Q226.9 182.3 237.4 181.9Q247.8 181.5 256.4 175.5Q264.9 169.4 275.4 169.1Q285.8 168.7 294.4 162.7Q302.9 156.6 313.4 156.3Q323.8 155.9 332.4 149.9Q340.9 143.8 351.4 143.5M-4.2 281.3Q4.4 275.2 14.8 274.9Q25.3 274.5 33.8 268.5Q42.4 262.4 52.8 262.1Q63.3 261.7 71.8 255.7Q80.4 249.6 90.8 249.3Q101.3 248.9 109.8 242.9Q118.4 236.8 128.8 236.5Q139.3 236.1 147.8 230.1Q156.4 224 166.8 223.7Q177.3 223.3 185.8 217.3Q194.4 211.2 204.8 210.9Q215.3 210.5 223.8 204.5Q232.4 198.4 242.8 198.1Q253.3 197.7 261.8 191.7Q270.4 185.6 280.8 185.3Q291.3 184.9 299.8 178.8Q308.4 172.8 318.8 172.4Q329.3 172.1 337.8 166Q346.4 160 356.8 159.6M1.3 297.4Q9.8 291.3 20.3 291Q30.7 290.7 39.3 284.6Q47.8 278.6 58.3 278.2Q68.7 277.9 77.3 271.8Q85.8 265.8 96.3 265.4Q106.7 265.1 115.3 259Q123.8 253 134.3 252.6Q144.7 252.3 153.3 246.2Q161.8 240.2 172.3 239.8Q182.7 239.5 191.3 233.4Q199.8 227.4 210.3 227Q220.7 226.7 229.3 220.6Q237.8 214.6 248.3 214.2Q258.7 213.9 267.3 207.8Q275.8 201.8 286.3 201.4Q296.7 201.1 305.3 195Q313.8 189 324.3 188.6Q334.7 188.3 343.3 182.2Q351.8 176.2 362.3 175.8M6.7 313.6Q15.2 307.5 25.7 307.2Q36.2 306.8 44.7 300.8Q53.2 294.7 63.7 294.4Q74.2 294 82.7 288Q91.2 281.9 101.7 281.6Q112.2 281.2 120.7 275.2Q129.2 269.1 139.7 268.8Q150.2 268.4 158.7 262.4Q167.2 256.3 177.7 256Q188.2 255.6 196.7 249.6Q205.2 243.5 215.7 243.2Q226.2 242.8 234.7 236.8Q243.2 230.7 253.7 230.4Q264.2 230 272.7 224Q281.2 217.9 291.7 217.6Q302.2 217.2 310.7 211.2Q319.2 205.1 329.7 204.8Q340.2 204.4 348.7 198.4Q357.2 192.3 367.7 192M12.1 329.7Q20.7 323.6 31.1 323.3Q41.6 323 50.1 316.9Q58.7 310.9 69.1 310.5Q79.6 310.2 88.1 304.1Q96.7 298.1 107.1 297.7Q117.6 297.4 126.1 291.3Q134.7 285.3 145.1 284.9Q155.6 284.6 164.1 278.5Q172.7 272.5 183.1 272.1Q193.6 271.8 202.1 265.7Q210.7 259.7 221.1 259.3Q231.6 259 240.1 252.9Q248.7 246.9 259.1 246.5Q269.6 246.2 278.1 240.1Q286.7 234.1 297.1 233.7Q307.6 233.4 316.1 227.3Q324.7 221.3 335.1 220.9Q345.6 220.6 354.1 214.5Q362.7 208.5 373.1 208.1"><animateTransform attributeName="transform" type="translate" values="0 0;5.4 16.1" dur="2.2s" repeatCount="indefinite"/></path>
</g>

<!-- 1 מצפן הכוכבים -->
<g class="hl-1">
  <ellipse class="fl-none st-elec" stroke-width="1.6" cx="160" cy="158" rx="135" ry="30"/>
  <path class="st-ink fl-none" stroke-width="1.2" stroke-linecap="round" d="M160 128L160 132.2M186.3 128.6L184.5 130.6M211.7 130.3L208 132.2M235 133.1L229.8 134.8M255.5 136.8L248.8 138.3M272.2 141.3L264.4 142.5M284.7 146.5L276 147.3M292.4 152.1L283.1 152.6M295 158L276.1 158M292.4 163.9L283.1 163.4M284.7 169.5L276 168.7M272.2 174.7L264.4 173.5M255.5 179.2L248.8 177.7M235 182.9L229.8 181.2M211.7 185.7L208 183.8M186.3 187.4L184.5 185.4M160 188L160 183.8M133.7 187.4L135.5 185.4M108.3 185.7L112 183.8M85 182.9L90.2 181.2M64.5 179.2L71.2 177.7M47.8 174.7L55.6 173.5M35.3 169.5L44 168.7M27.6 163.9L36.9 163.4M25 158L43.9 158M27.6 152.1L36.9 152.6M35.3 146.5L44 147.3M47.8 141.3L55.6 142.5M64.5 136.8L71.2 138.3M85 133.1L90.2 134.8M108.3 130.3L112 132.2M133.7 128.6L135.5 130.6"/>
</g>

<!-- 4 אי, ענן וציפורים -->
<g class="hl-4">
  <path class="fl-green st-ink" stroke-width="1.2" stroke-linejoin="round" d="M236 128Q244 121 250 122Q257 120 264 128Z"/>
  <path class="fl-panel st-line" stroke-width="1.2" d="M234 104Q232 94 242 94Q246 86 255 90Q264 86 268 95Q276 97 272 104Z"/>
  <path class="fl-green" opacity=".45" d="M236 104H271Q270 108 262 108H244Q236 108 236 104Z"/>
</g>

<!-- הסירה -->
<g class="bob">
  <path class="fl-warm st-ink" fill-opacity=".8" stroke-width="1.5" stroke-linejoin="round" d="M136 147Q164 154 196 146L193 151Q164 158 139 152Z"/>
  <path class="fl-warm st-ink" stroke-width="2" stroke-linejoin="round" d="M124 150Q160 160 198 150L194 157Q160 166 128 157Z"/>
  <path class="thin st-ink" style="stroke-width:1.4" d="M132 149H192M154 149V108M176 149V112"/>
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M154 108Q140 122 148 146L154 146Z"/>
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M154 106Q170 124 160 146H154Z"/>
  <path class="fl-panel st-ink" stroke-width="1.5" stroke-linejoin="round" d="M176 112Q190 126 184 146H176Z"/>
</g>

<!-- 3 הכוכב שמעל הראש -->
<g class="hl-3"><path class="fl-elec st-ink" stroke-width=".8" stroke-linejoin="round" d="M160 16L161.6 19.8L165.7 20.1L162.6 22.8L163.5 26.9L160 24.7L156.5 26.9L157.4 22.8L154.3 20.1L158.4 19.8Z"/></g>

<!-- שלב 1 -->
<g class="only-1">
  <path class="wire st-elec" style="stroke-width:1.5;stroke-dasharray:3 4" d="M168 150L286.9 147.7M152 150L33.1 147.7"/>
  <circle class="fl-elec st-ink" stroke-width="1" cx="286.9" cy="147.7" r="3.5"/>
  <circle class="fl-hot st-ink" stroke-width="1" cx="33.1" cy="147.7" r="3.5"/>
  <path class="thin st-elec" style="stroke-dasharray:2 4" d="M286.9 128Q272 64 222 30"/>
  <g><path class="fl-elec st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -5L1.3 -1.8L4.8 -1.5L2.1 0.7L2.9 4L0 2.3L-2.9 4L-2.1 0.7L-4.8 -1.5L-1.3 -1.8Z"/><animateMotion dur="5s" repeatCount="indefinite" path="M286.9 130Q272 64 222 30"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="5s" repeatCount="indefinite"/></g>
  <text x="88" y="94">כוכב זורח בבית קבוע</text>
  <text x="88" y="110">ושוקע בבית המקביל</text>
</g>

<!-- שלב 2 -->
<g class="only-2">
  <path class="arrow st-ink" d="M232 168L244 200"/>
  <path class="fl-ink" d="M246 206L239 198L248 196Z"/>
  <text x="88" y="94">גלים מרוח רחוקה</text>
  <text x="88" y="110">שומרים על כיוונם</text>
</g>

<!-- שלב 3 -->
<g class="only-3">
  <path class="thin st-elec" style="stroke-dasharray:2 4" d="M160 30V102"/>
  <path class="thin st-ink" style="stroke-width:1;stroke-dasharray:1 4" d="M224 39A128 128 0 0 0 166 22"/>
  <circle class="fl-line" cx="224" cy="39" r="1.6"/><circle class="fl-line" cx="204" cy="29" r="1.6"/><circle class="fl-line" cx="182" cy="24" r="1.6"/>
  <circle class="ring st-elec" cx="160" cy="22" r="16"/>
  <g><path class="fl-warm st-ink" stroke-width=".8" stroke-linejoin="round" d="M0 -4L1.1 -1.5L3.8 -1.2L1.7 0.6L2.4 3.2L0 1.8L-2.4 3.2L-1.7 0.6L-3.8 -1.2L-1.1 -1.5Z"/><animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.7;1" calcMode="linear" path="M224 39A128 128 0 0 0 160 22"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="4s" repeatCount="indefinite"/></g>
  <text x="88" y="94">כוכב מעל הראש</text>
  <text x="88" y="110">מסמן את קו הרוחב</text>
</g>

<!-- שלב 4 -->
<g class="only-4">
  <path class="fl-none st-ink" stroke-width="1.6" stroke-linecap="round" d="M-6 -1Q-3 -4 0 0Q3 -4 6 -1"><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M196 112Q222 96 250 108"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="3.2s" begin="0s" repeatCount="indefinite"/></path><path class="fl-none st-ink" stroke-width="1.6" stroke-linecap="round" d="M-6 -1Q-3 -4 0 0Q3 -4 6 -1"><animateMotion dur="3.2s" begin="-1.1s" repeatCount="indefinite" path="M196 112Q222 96 250 108"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="3.2s" begin="-1.1s" repeatCount="indefinite"/></path><path class="fl-none st-ink" stroke-width="1.6" stroke-linecap="round" d="M-6 -1Q-3 -4 0 0Q3 -4 6 -1"><animateMotion dur="3.2s" begin="-2.2s" repeatCount="indefinite" path="M196 112Q222 96 250 108"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="3.2s" begin="-2.2s" repeatCount="indefinite"/></path>
  <circle class="ring st-green" cx="250" cy="116" r="22"/>
  <text x="88" y="94">ענן עומד מעל אי</text>
  <text x="88" y="110">ציפורים חוזרות אליו</text>
</g>
`;
