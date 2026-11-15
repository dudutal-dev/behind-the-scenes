// משקפי מציאות מדומה: 1 תמונה נפרדת לכל עין · 2 עדשות מכופפות את האור · 3 חיישנים מודדים את תנועת הראש · 4 התמונה מצוירת מחדש ונעה נגד כיוון הראש
export default `
<defs>
  <clipPath id="vr-l"><rect x="42" y="22" width="116" height="62" rx="2"/></clipPath>
  <clipPath id="vr-r"><rect x="162" y="22" width="116" height="62" rx="2"/></clipPath>
</defs>

<!-- גוף המשקפיים והמסך -->
<rect class="fl-soft st-ink" stroke-width="2" x="26" y="10" width="268" height="116" rx="12"/>
<rect class="fl-dark" x="38" y="18" width="244" height="70" rx="4"/>
<path class="st-ink fl-none" stroke-width="2.500" d="M160 88V126"/>

<!-- שתי התמונות: שלבים 1-2 עומדות, משלב 3 נעות נגד כיוון הראש -->
<g class="hl-1 hl-4">
  <g class="only-1 only-2"><g clip-path="url(#vr-l)"><g transform="translate(42 22)"><g>
    <rect class="fl-cold-soft" x="-20" y="0" width="156" height="46"/>
    <circle class="fl-elec" cx="94" cy="13" r="6"/>
    <path class="fl-line" d="M-20 46L4 30L24 42L50 17L78 46Z"/><path class="fl-line" fill-opacity=".6" d="M60 46L92 26L136 46Z"/>
    <rect class="fl-green" fill-opacity=".5" x="-20" y="45" width="156" height="18"/>
    <rect class="fl-dark" x="64.5" y="38" width="5" height="17"/>
    <circle class="fl-green st-ink" stroke-width="1.500" cx="67" cy="31" r="11"/>
  </g></g></g><g clip-path="url(#vr-r)"><g transform="translate(162 22)"><g>
    <rect class="fl-cold-soft" x="-20" y="0" width="156" height="46"/>
    <circle class="fl-elec" cx="94" cy="13" r="6"/>
    <path class="fl-line" d="M-20 46L4 30L24 42L50 17L78 46Z"/><path class="fl-line" fill-opacity=".6" d="M60 46L92 26L136 46Z"/>
    <rect class="fl-green" fill-opacity=".5" x="-20" y="45" width="156" height="18"/>
    <rect class="fl-dark" x="46.5" y="38" width="5" height="17"/>
    <circle class="fl-green st-ink" stroke-width="1.500" cx="49" cy="31" r="11"/>
  </g></g></g></g>
  <g class="from-3"><g clip-path="url(#vr-l)"><g transform="translate(42 22)"><g><animateTransform attributeName="transform" type="translate" values="11 0;-11 0;11 0" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="3.2s" repeatCount="indefinite"/>
    <rect class="fl-cold-soft" x="-20" y="0" width="156" height="46"/>
    <circle class="fl-elec" cx="94" cy="13" r="6"/>
    <path class="fl-line" d="M-20 46L4 30L24 42L50 17L78 46Z"/><path class="fl-line" fill-opacity=".6" d="M60 46L92 26L136 46Z"/>
    <rect class="fl-green" fill-opacity=".5" x="-20" y="45" width="156" height="18"/>
    <rect class="fl-dark" x="64.5" y="38" width="5" height="17"/>
    <circle class="fl-green st-ink" stroke-width="1.500" cx="67" cy="31" r="11"/>
  </g></g></g><g clip-path="url(#vr-r)"><g transform="translate(162 22)"><g><animateTransform attributeName="transform" type="translate" values="11 0;-11 0;11 0" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="3.2s" repeatCount="indefinite"/>
    <rect class="fl-cold-soft" x="-20" y="0" width="156" height="46"/>
    <circle class="fl-elec" cx="94" cy="13" r="6"/>
    <path class="fl-line" d="M-20 46L4 30L24 42L50 17L78 46Z"/><path class="fl-line" fill-opacity=".6" d="M60 46L92 26L136 46Z"/>
    <rect class="fl-green" fill-opacity=".5" x="-20" y="45" width="156" height="18"/>
    <rect class="fl-dark" x="46.5" y="38" width="5" height="17"/>
    <circle class="fl-green st-ink" stroke-width="1.500" cx="49" cy="31" r="11"/>
  </g></g></g></g>
</g>

<!-- אלומות האור, העדשות והעיניים -->
<g class="hl-1 hl-2"><path class="fl-warm" fill-opacity=".22" d="M50 84H150L127 126L106 149H94L73 126Z"/><path class="fl-warm" fill-opacity=".22" d="M170 84H270L247 126L226 149H214L193 126Z"/></g>
<g class="hl-2">
  <ellipse class="fl-cold-soft st-ink" stroke-width="2" cx="100" cy="126" rx="31" ry="6.500"/>
  <ellipse class="fl-cold-soft st-ink" stroke-width="2" cx="220" cy="126" rx="31" ry="6.500"/>
  <path fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.200" stroke-linecap="round" d="M78 124.500Q90 122 104 122.500M198 124.500Q210 122 224 122.500"/>
</g>
<g class="hl-1 hl-2"><circle class="body" cx="100" cy="161" r="14"/><ellipse class="fl-cold" cx="100" cy="151" rx="7.500" ry="3.800"/><ellipse class="fl-ink" cx="100" cy="149.500" rx="3.600" ry="1.900"/><circle class="body" cx="220" cy="161" r="14"/><ellipse class="fl-cold" cx="220" cy="151" rx="7.500" ry="3.800"/><ellipse class="fl-ink" cx="220" cy="149.500" rx="3.600" ry="1.900"/></g>

<!-- חיישן התנועה והמעבד -->
<g class="hl-3 hl-4">
  <path class="thin" d="M160 150V114"/>
  <rect class="fl-green st-ink" stroke-width="1.500" x="148" y="99" width="24" height="15" rx="2"/>
  <path class="st-ink fl-none" stroke-width="1" d="M152 99v-3M160 99v-3M168 99v-3"/>
  <circle class="body" cx="160" cy="164" r="14"/>
  <path class="thin st-ink" style="stroke-width:1" d="M160 152v2.500M149.600 158l2.200 1.300M170.400 158l-2.200 1.300"/>
  <g class="only-1 only-2"><g><path class="st-hot fl-none" stroke-width="2.400" stroke-linecap="round" d="M160 164V153"/><path class="fl-hot" d="M156.500 155L160 149L163.500 155Z"/></g><circle class="fl-ink" cx="160" cy="164" r="1.800"/></g>
  <g class="from-3"><g><animateTransform attributeName="transform" type="rotate" values="-30 160 164;30 160 164;-30 160 164" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="3.2s" repeatCount="indefinite"/><path class="st-hot fl-none" stroke-width="2.400" stroke-linecap="round" d="M160 164V153"/><path class="fl-hot" d="M156.500 155L160 149L163.500 155Z"/></g><circle class="fl-ink" cx="160" cy="164" r="1.800"/></g>
</g>

<g class="only-1">
  <path class="wire st-warm dash" style="stroke-width:1.600" d="M64 84L80.2 126L95.68 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M88 84L93.4 126L98.56 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M112 84L106.6 126L101.44 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M136 84L119.8 126L104.32 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M184 84L200.2 126L215.68 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M208 84L213.4 126L218.56 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M232 84L226.6 126L221.44 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M256 84L239.8 126L224.32 149"/>
  <path class="thin st-ink dash" style="stroke-width:1.200" d="M100 24V82M220 24V82"/>
  <text class="sm" x="52" y="158">עין</text><text class="sm" x="52" y="169">שמאל</text>
  <text class="sm" x="268" y="158">עין</text><text class="sm" x="268" y="169">ימין</text>
  <text x="160" y="194">כל עין רואה תמונה משלה,</text>
  <text x="160" y="208">מנקודת מבט מעט שונה</text>
</g>
<g class="only-2">
  <path class="wire st-warm dash" style="stroke-width:1.600" d="M100 84L78 126L95.6 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M100 84L100 126L100 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M100 84L122 126L104.4 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M220 84L198 126L215.6 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M220 84L220 126L220 149"/><path class="wire st-warm dash" style="stroke-width:1.600" d="M220 84L242 126L224.4 149"/>
  <text x="160" y="194">העדשה מכופפת את האור, והתמונה</text>
  <text x="160" y="208">נראית רחוקה וגדולה</text>
</g>
<g class="only-3">
  <circle class="ring st-green" cx="160" cy="164" r="24"/><circle class="ring st-green d3" cx="160" cy="164" r="24"/>
  <path class="wire st-elec dash" style="stroke-width:2" d="M160 150V114"/>
  <text class="sm" x="268" y="158">חיישן</text><text class="sm" x="268" y="169">תנועה</text>
  <text x="160" y="194">חיישנים מודדים כל תנועה של הראש</text>
  <text x="160" y="208">ומדווחים למעבד</text>
</g>
<g class="only-4">
  <path class="wire st-elec dash" style="stroke-width:2" d="M160 150V114"/>
  <path class="wire st-elec dash" style="stroke-width:2" d="M160 99V88"/>
  <rect class="fl-none st-elec pulse" stroke-width="2" x="145" y="96" width="30" height="21" rx="4"/>
  <text x="160" y="194">התמונה מצוירת מחדש בתוך אלפיות שנייה,</text>
  <text x="160" y="208">והעולם המדומה נשאר במקומו</text>
</g>
`;
