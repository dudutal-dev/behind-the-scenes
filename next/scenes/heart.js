// הלב: 1 צד ימין שולח דם דל בחמצן לריאות · 2 צד שמאל עב הדופן דוחף דם מחומצן לגוף · 3 ארבעה שסתומים חד־כיווניים נטרקים · 4 האות החשמלי מקוצב הסינוס לעליות ואז לחדרים
export default `
<defs>
  <linearGradient id="heart-lg" gradientUnits="userSpaceOnUse" x1="0" y1="56" x2="0" y2="92"><stop offset="0" style="stop-color:var(--s-cold)"/><stop offset="1" style="stop-color:var(--s-hot)"/></linearGradient>
  <clipPath id="heart-atria"><path d="M82 98C80 80 94 70 112 72L124 73H176C198 66 230 74 230 100V116H82z"/></clipPath>
</defs>
<g transform="translate(-53 6) scale(.95)">

<!-- ריאה (השמאלית של הגוף): הדם נטען בה בחמצן -->
<g class="hl-1 hl-2">
  <path class="body" style="stroke-width:1.6" d="M256 38C272 30 286 52 286 82C286 108 278 120 260 118C250 116 248 104 250 86C251 68 248 46 256 38z"/>
  <path class="fl-hot" fill-opacity=".12" d="M256 38C272 30 286 52 286 82C286 108 278 120 260 118C250 116 248 104 250 86C251 68 248 46 256 38z"/>
  <path class="pipe" style="stroke-width:6;stroke:url(#heart-lg)" d="M250 52H262C274 52 276 62 270 70C264 78 274 86 269 90C266 92 262 88 250 88"/>
  <path class="pipe" style="stroke-width:5;stroke:url(#heart-lg)" d="M270 70C282 84 274 102 250 102"/>
  <path class="flow" d="M250 52H262C274 52 276 62 270 70C264 78 274 86 269 90C266 92 262 88 250 88"/>
  <path class="flow" d="M270 70C282 84 274 102 250 102"/>
</g>

<!-- כלי דם שמאחורי הלב -->
<g class="hl-1 hl-3 hl-4">
  <path class="pipe st-ink" style="stroke-width:14;stroke-linecap:butt" d="M80 208V134C80 120 86 112 96 104"/><path class="pipe st-cold" style="stroke-width:10;stroke-linecap:butt" d="M80 208V134C80 120 86 112 96 104"/>
</g>
<g class="hl-2 hl-3 hl-4">
  <path class="pipe st-ink" style="stroke-width:9;stroke-linecap:butt" d="M178 36V12M190 32V12M202 36V12"/><path class="pipe st-hot" style="stroke-width:5;stroke-linecap:butt" d="M178 36V12M190 32V12M202 36V12"/>
  <path class="pipe st-ink" style="stroke-width:17;stroke-linecap:butt" d="M168 124V50C168 26 212 26 212 50V208"/><path class="pipe st-hot" style="stroke-width:13;stroke-linecap:butt" d="M168 124V50C168 26 212 26 212 50V208"/>
</g>

<!-- שריר הלב -->
<path class="body" d="M82 98C80 80 94 70 112 72L124 73H176C198 66 230 74 230 100C232 140 214 184 172 208C148 204 106 186 90 150C84 134 82 114 82 98z"/>
<path class="fl-hot" fill-opacity=".3" d="M82 98C80 80 94 70 112 72L124 73H176C198 66 230 74 230 100C232 140 214 184 172 208C148 204 106 186 90 150C84 134 82 114 82 98z"/>

<!-- צד ימין: עלייה וחדר, דם דל בחמצן -->
<g class="hl-1 hl-3 hl-4">
  <path class="pipe st-cold" style="stroke-width:10;stroke-linecap:butt" d="M83 118C86 112 90 108 97 104"/>
  <g transform="translate(106 80)"><g><animateTransform attributeName="transform" type="scale" values="1;.84;1;1" keyTimes="0;.16;.5;1" calcMode="spline" keySplines=".4 0 .6 1;.4 0 .6 1;.4 0 .6 1" dur="2.8s" repeatCount="indefinite"/><g transform="translate(-106 -80)"><path class="fl-cold" d="M90 96C89 84 100 79 112 79C121 79 124 86 124 96V102L121 108H97L91 102z"/></g></g></g>
  <rect class="fl-cold" x="97" y="106" width="24" height="19"/>
  <g transform="translate(119 124)"><g><animateTransform attributeName="transform" type="scale" values=".98;1;.78;.95;.98" keyTimes="0;.22;.52;.78;1" calcMode="spline" keySplines=".4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1" dur="2.8s" repeatCount="indefinite"/><g transform="translate(-119 -124)"><path class="fl-cold" d="M92 124H146C148 150 152 174 160 194C140 190 112 176 98 150C93 140 92 132 92 124z"/></g></g></g>
  <path class="pipe st-ink" style="stroke-width:16;stroke-linecap:butt" d="M136 68C136 56 128 52 118 52H62"/><path class="pipe st-ink" style="stroke-width:16;stroke-linecap:butt" d="M136 68C136 56 144 52 154 52H252"/><path class="pipe st-ink" style="stroke-width:16;stroke-linecap:butt" d="M136 124V66"/>
  <path class="pipe st-cold" style="stroke-width:12;stroke-linecap:butt" d="M136 68C136 56 128 52 118 52H62"/><path class="pipe st-cold" style="stroke-width:12;stroke-linecap:butt" d="M136 68C136 56 144 52 154 52H252"/><path class="pipe st-cold" style="stroke-width:12;stroke-linecap:butt" d="M136 125V66"/>
</g>
<g class="hl-1">
  <path class="flow" d="M136 124V68C136 56 128 52 118 52H64"/>
  <path class="flow" d="M136 68C136 56 144 52 154 52H250"/>
</g>

<!-- צד שמאל: עלייה וחדר עב דופן, דם עשיר בחמצן -->
<g class="hl-2 hl-3 hl-4">
  <g transform="translate(222 96)"><g><animateTransform attributeName="transform" type="scale" values="1;.84;1;1" keyTimes="0;.16;.5;1" calcMode="spline" keySplines=".4 0 .6 1;.4 0 .6 1;.4 0 .6 1" dur="2.8s" repeatCount="indefinite"/><g transform="translate(-222 -96)"><path class="fl-hot" d="M186 82C198 77 222 82 222 96V102L204 108H182C181 100 182 88 186 82z"/></g></g></g>
  <rect class="fl-hot" x="182" y="106" width="22" height="19"/>
  <g transform="translate(181 124)"><g><animateTransform attributeName="transform" type="scale" values=".98;1;.78;.95;.98" keyTimes="0;.22;.52;.78;1" calcMode="spline" keySplines=".4 0 .6 1;.4 0 .6 1;.4 0 .6 1;.4 0 .6 1" dur="2.8s" repeatCount="indefinite"/><g transform="translate(-181 -124)"><path class="fl-hot" d="M158 124H204C206 150 196 180 172 196C166 180 160 150 158 124z"/></g></g></g>
  <path class="pipe st-ink" style="stroke-width:17;stroke-linecap:butt" d="M168 125V46"/><path class="pipe st-hot" style="stroke-width:13;stroke-linecap:butt" d="M168 125V46"/>
  <path class="pipe st-ink" style="stroke-width:11;stroke-linecap:butt" d="M252 88H219M252 102H219"/><path class="pipe st-hot" style="stroke-width:7;stroke-linecap:butt" d="M252 88H219M252 102H219"/>
</g>
<g class="hl-1 hl-3 hl-4">
  <path class="pipe st-ink" style="stroke-width:16;stroke-linecap:butt" d="M106 14V81"/><path class="pipe st-cold" style="stroke-width:12;stroke-linecap:butt" d="M106 14V81"/>
</g>

<!-- זרימה -->
<g class="hl-1">
  <path class="flow" d="M106 16V96C106 108 109 112 109 124C109 150 116 170 126 170C134 170 136 150 136 126"/>
  <path class="flow slow" d="M80 206V134C80 120 86 112 96 104"/>
</g>
<g class="hl-2">
  <path class="flow" d="M250 88H206C196 88 193 100 193 124C193 150 186 174 178 174C170 174 168 150 168 124V50C168 26 212 26 212 50V70"/>
  <path class="flow" d="M212 192V206"/>
  <path class="flow" d="M250 102H214"/>
</g>

<!-- ארבעת השסתומים -->
<g>
  <path class="wire st-ink" style="stroke-width:2.6" d="M97 118h12"><animateTransform attributeName="transform" type="rotate" values="72 97 118;72 97 118;0 97 118;0 97 118;72 97 118;72 97 118" keyTimes="0;.19;.22;.6;.68;1" dur="2.8s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:2.6" d="M121 118h-12"><animateTransform attributeName="transform" type="rotate" values="-72 121 118;-72 121 118;0 121 118;0 121 118;-72 121 118;-72 121 118" keyTimes="0;.19;.22;.6;.68;1" dur="2.8s" repeatCount="indefinite"/></path>
  <path class="wire st-ink" style="stroke-width:2.6" d="M182 118h11"><animateTransform attributeName="transform" type="rotate" values="72 182 118;72 182 118;0 182 118;0 182 118;72 182 118;72 182 118" keyTimes="0;.19;.22;.6;.68;1" dur="2.8s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:2.6" d="M204 118h-11"><animateTransform attributeName="transform" type="rotate" values="-72 204 118;-72 204 118;0 204 118;0 204 118;-72 204 118;-72 204 118" keyTimes="0;.19;.22;.6;.68;1" dur="2.8s" repeatCount="indefinite"/></path>
  <path class="wire st-ink" style="stroke-width:2.4" d="M130 116h6"><animateTransform attributeName="transform" type="rotate" values="0 130 116;0 130 116;-72 130 116;-72 130 116;0 130 116;0 130 116" keyTimes="0;.25;.28;.53;.56;1" dur="2.8s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:2.4" d="M142 116h-6"><animateTransform attributeName="transform" type="rotate" values="0 142 116;0 142 116;72 142 116;72 142 116;0 142 116;0 142 116" keyTimes="0;.25;.28;.53;.56;1" dur="2.8s" repeatCount="indefinite"/></path>
  <path class="wire st-ink" style="stroke-width:2.4" d="M161.5 116h6.5"><animateTransform attributeName="transform" type="rotate" values="0 161.5 116;0 161.5 116;-72 161.5 116;-72 161.5 116;0 161.5 116;0 161.5 116" keyTimes="0;.25;.28;.53;.56;1" dur="2.8s" repeatCount="indefinite"/></path><path class="wire st-ink" style="stroke-width:2.4" d="M174.5 116h-6.5"><animateTransform attributeName="transform" type="rotate" values="0 174.5 116;0 174.5 116;72 174.5 116;72 174.5 116;0 174.5 116;0 174.5 116" keyTimes="0;.25;.28;.53;.56;1" dur="2.8s" repeatCount="indefinite"/></path>
</g>
<g class="only-3">
  <circle class="wire st-violet" style="stroke-width:1.6" cx="109" cy="118" r="13"/><circle class="wire st-violet" style="stroke-width:1.6" cx="193" cy="118" r="13"/><circle class="wire st-violet" style="stroke-width:1.6" cx="136" cy="116" r="9"/><circle class="wire st-violet" style="stroke-width:1.6" cx="168" cy="116" r="9"/>
  <circle class="fl-none st-violet" stroke-width="2.5" cx="109" cy="118" r="5" opacity="0"><animate attributeName="r" values="5;5;19;19" keyTimes="0;0.21;0.37;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.20;0.21;0.37;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-none st-violet" stroke-width="2.5" cx="193" cy="118" r="5" opacity="0"><animate attributeName="r" values="5;5;19;19" keyTimes="0;0.21;0.37;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.20;0.21;0.37;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-none st-violet" stroke-width="2.5" cx="136" cy="116" r="5" opacity="0"><animate attributeName="r" values="5;5;19;19" keyTimes="0;0.55;0.71;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.54;0.55;0.71;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-none st-violet" stroke-width="2.5" cx="168" cy="116" r="5" opacity="0"><animate attributeName="r" values="5;5;19;19" keyTimes="0;0.55;0.71;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.54;0.55;0.71;1" dur="2.8s" repeatCount="indefinite"/></circle>
</g>

<!-- מערכת ההולכה החשמלית -->
<g class="from-4">
  <g clip-path="url(#heart-atria)"><circle class="fl-none st-elec" stroke-width="3" cx="95" cy="87" r="4" opacity="0"><animate attributeName="r" values="4;150;150" keyTimes="0;.17;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.5;0;0" keyTimes="0;.12;.17;1" dur="2.8s" repeatCount="indefinite"/></circle></g>
  <path class="wire st-ink" style="stroke-width:4.4" d="M95 91C95 102 104 111 122 113C136 114 146 116 151 121M97 84C120 66 172 64 202 80M153 126L164 186M164 186C168 200 178 200 190 190C204 178 216 152 216 128M164 186C162 198 152 201 142 197C124 191 108 180 100 164C93 152 88 142 88 128"/>
  <path class="wire st-elec" style="stroke-width:2.2" d="M95 91C95 102 104 111 122 113C136 114 146 116 151 121M97 84C120 66 172 64 202 80M153 126L164 186M164 186C168 200 178 200 190 190C204 178 216 152 216 128M164 186C162 198 152 201 142 197C124 191 108 180 100 164C93 152 88 142 88 128"/>
  <ellipse class="fl-elec st-ink" stroke-width="1.5" cx="95" cy="87" rx="4.5" ry="6"/>
  <circle class="fl-elec st-ink" stroke-width="1.5" cx="152" cy="123" r="4.2"/>
  <circle class="fl-elec st-ink" stroke-width="1.2" r="4" opacity="0"><animateMotion path="M95 91C95 102 104 111 122 113C136 114 146 116 151 121" keyPoints="0;0;1;1" keyTimes="0;0.01;0.13;1" calcMode="linear" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.005;0.01;0.13;0.150;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-elec st-ink" stroke-width="1.2" r="4" opacity="0"><animateMotion path="M97 84C120 66 172 64 202 80" keyPoints="0;0;1;1" keyTimes="0;0.01;0.11;1" calcMode="linear" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.005;0.01;0.11;0.130;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-elec st-ink" stroke-width="1.2" r="4" opacity="0"><animateMotion path="M153 126L164 186" keyPoints="0;0;1;1" keyTimes="0;0.16;0.22;1" calcMode="linear" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.155;0.16;0.22;0.240;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-elec st-ink" stroke-width="1.2" r="4" opacity="0"><animateMotion path="M164 186C168 200 178 200 190 190C204 178 216 152 216 128" keyPoints="0;0;1;1" keyTimes="0;0.22;0.3;1" calcMode="linear" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.215;0.22;0.3;0.320;1" dur="2.8s" repeatCount="indefinite"/></circle><circle class="fl-elec st-ink" stroke-width="1.2" r="4" opacity="0"><animateMotion path="M164 186C162 198 152 201 142 197C124 191 108 180 100 164C93 152 88 142 88 128" keyPoints="0;0;1;1" keyTimes="0;0.22;0.3;1" calcMode="linear" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.215;0.22;0.3;0.320;1" dur="2.8s" repeatCount="indefinite"/></circle>
</g>
</g>

<!-- תוויות -->
<g class="only-1">
  <text x="268" y="60">דם דל בחמצן</text>
  <text x="268" y="76">נשלח לריאות</text>
</g>
<g class="only-2">
  <text x="268" y="60">דם מחומצן</text>
  <text x="268" y="76">נדחף לכל הגוף</text>
  <path class="thin st-ink" style="stroke-width:1.2" d="M226 158H153"/><circle class="fl-ink" cx="153" cy="158" r="1.8"/>
  <text x="268" y="162">דופן עבה פי 3</text>
</g>
<g class="only-3">
  <text class="lg" x="286" y="146" opacity=".25">לאב<animate attributeName="opacity" values=".25;.25;1;1;.25;.25" keyTimes="0;0.20;0.21;0.35;0.43;1" dur="2.8s" repeatCount="indefinite"/></text><text class="lg" x="250" y="146" opacity=".25">דאב<animate attributeName="opacity" values=".25;.25;1;1;.25;.25" keyTimes="0;0.54;0.55;0.69;0.77;1" dur="2.8s" repeatCount="indefinite"/></text>
  <text x="268" y="166">קול הטריקה</text>
</g>
<g class="only-4">
  <path class="thin" d="M228 104H310"/>
  <path class="wire st-elec" style="stroke-width:2" d="M228 104H231q4.500 -8 9 0H246l2 3l3 -24l3 28l2 -7H269q7 -11 14 0H310"/>
  <path class="wire st-ink" style="stroke-width:1.4" d="M0 76V110"><animateTransform attributeName="transform" type="translate" from="230 0" to="308 0" dur="2.8s" repeatCount="indefinite"/></path>
  <text x="268" y="146">קודם העליות</text>
  <text x="268" y="162">ואז החדרים</text>
</g>
`;
