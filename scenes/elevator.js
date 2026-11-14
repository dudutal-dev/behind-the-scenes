// מעלית: 1 תא ומשקולת נגד משני צדי הגלגל · 2 המנוע מזיז רק את ההפרש · 3 כמה כבלים · 4 בלם טריזים על המסילות
export default `
<defs>
  <clipPath id="elevator-shaft"><rect x="32" y="42" width="150" height="170"/></clipPath>
  <clipPath id="elevator-lens"><circle cx="250" cy="150" r="29"/></clipPath>
  <marker id="elevator-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>
<!-- פיר, חדר מכונות ומסילות -->
<rect class="fl-soft st-ink" stroke-width="2" x="32" y="6" width="150" height="204" rx="4"/>
<path class="thin" d="M32 72H182"/>
<path class="st-line fl-none" stroke-width="3" d="M56 72V209M120 72V209"/>
<path class="thin" d="M88 208v-2l-4-1.5 8-2-8-2 4-1.5M144 208v-2l-4-1.5 8-2-8-2 4-1.5"/>
<!-- וסת מהירות ובלם -->
<g class="hl-4">
  <path class="thin st-ink" stroke-width="1" d="M37 56V198M45 56V198"/>
  <circle class="body" stroke-width="1.5" cx="41" cy="56" r="5"/>
  <circle class="body" stroke-width="1.5" cx="41" cy="198" r="4"/>
</g>
<!-- מנוע -->
<g class="hl-2">
  <rect class="fl-line" x="116" y="39" width="42" height="6"/>
  <rect class="fl-dark st-ink" stroke-width="2" x="156" y="29" width="22" height="26" rx="4"/>
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="167" cy="42" r="7"/>
  <circle class="fl-ink" cx="167" cy="42" r="1.8"/>
  <g class="spin fast only-2"><path class="st-ink fl-none" stroke-width="1.8" stroke-linecap="round" d="M167 36.5v11M161.5 42h11"/></g>
</g>
<!-- גלגל ההנעה והכבלים שמעליו -->
<circle class="body" cx="116" cy="42" r="23"/>
<path class="st-dark fl-none" stroke-width="1.4" d="M85 42A31 31 0 0 1 147 42M88 42A28 28 0 0 1 144 42M91 42A25 25 0 0 1 141 42"/>
<path class="st-hot fl-none only-3 fade" stroke-width="2.4" d="M85 42A31 31 0 0 1 147 42"/>
<path class="st-hot fl-none only-3 fade d2" stroke-width="2.4" d="M88 42A28 28 0 0 1 144 42"/>
<path class="st-hot fl-none only-3 fade d4" stroke-width="2.4" d="M91 42A25 25 0 0 1 141 42"/>

<!-- מצב רגיל (שלבים 1-3 והמבט הכולל): התא והמשקולת נעים בכיוונים מנוגדים -->
<g class="hl-1 hl-2 hl-3"><g class="hl-1 hl-2 hl-3"><g class="hl-1 hl-2 hl-3">
  <g class="hl-1 hl-2"><animateTransform attributeName="transform" type="rotate" values="0 116 42;143 116 42;143 116 42;0 116 42;0 116 42" keyTimes="0;.4;.5;.9;1" calcMode="spline" keySplines=".45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1" dur="8s" begin="-2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.5" d="M116 21V63M95 42H137M101 27L131 57M131 27L101 57"/><circle class="fl-hot" cx="116" cy="26" r="2.6"/></g>
  <g clip-path="url(#elevator-shaft)">
    <g><animateTransform attributeName="transform" type="translate" values="0 150;0 80;0 80;0 150;0 150" keyTimes="0;.4;.5;.9;1" calcMode="spline" keySplines=".45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1" dur="8s" begin="-2s" repeatCount="indefinite"/>
  <path class="st-dark fl-none" stroke-width="1.4" d="M85 -150V-4"/><path class="st-hot fl-none only-3 fade" stroke-width="2.4" d="M85 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M88 -150V-4"/><path class="st-hot fl-none only-3 fade d2" stroke-width="2.4" d="M88 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M91 -150V-4"/><path class="st-hot fl-none only-3 fade d4" stroke-width="2.4" d="M91 -150V-4"/>
  <rect class="fl-dark" x="80" y="-6" width="16" height="6" rx="1.5"/>
  <g class="hl-1 hl-2">
    <rect class="body" x="66" y="0" width="44" height="44" rx="3"/>
    <rect class="fl-cold-soft" x="70" y="4" width="36" height="30" rx="2"/>
    <path class="thin" d="M88 4V34"/>
    <circle class="fl-ink" cx="79" cy="15" r="3.6"/><path class="fl-ink" d="M73 34v-8q0-6 6-6t6 6v8z"/>
    <circle class="fl-violet" cx="97" cy="17" r="3.2"/><path class="fl-violet" d="M92 34v-7q0-5 5-5t5 5v7z"/>
    <path class="fl-line" d="M58 2h8v5h-8zM110 2h8v5h-8z"/>
  </g>
  <g class="hl-4">
    <path class="st-dark fl-none" stroke-width="2" stroke-linejoin="round" d="M66 37H47V47H66M110 37H129V47H110"/>
    <path class="fl-hot" d="M49 46V38l4 8zM113 46V38l4 8z"></path>
    <path class="fl-hot" d="M63 46V38l-4 8zM127 46V38l-4 8z"></path>
  </g>
  </g>
    <g><animateTransform attributeName="transform" type="translate" values="0 86;0 156;0 156;0 86;0 86" keyTimes="0;.4;.5;.9;1" calcMode="spline" keySplines=".45 0 .55 1;0 0 1 1;.45 0 .55 1;0 0 1 1" dur="8s" begin="-2s" repeatCount="indefinite"/>
  <path class="st-dark fl-none" stroke-width="1.4" d="M141 -150V-4"/><path class="st-hot fl-none only-3 fade" stroke-width="2.4" d="M141 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M144 -150V-4"/><path class="st-hot fl-none only-3 fade d2" stroke-width="2.4" d="M144 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M147 -150V-4"/><path class="st-hot fl-none only-3 fade d4" stroke-width="2.4" d="M147 -150V-4"/>
  <g class="hl-1 hl-2">
    <rect class="fl-dark st-ink" stroke-width="2" x="134" y="0" width="20" height="40" rx="2"/>
    <path fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" d="M138 8h12M138 16h12M138 24h12M138 32h12"/>
  </g></g>
  </g>
</g></g></g>

<!-- שלב 4: ירידה מהירה מדי, הטריזים ננעלים על המסילות -->
<g class="only-4"><g>
  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.9;.94;.97;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/>
  <g><animateTransform attributeName="transform" type="rotate" values="0 116 42;0 116 42;-115 116 42;-115 116 42;0 116 42;0 116 42" keyTimes="0;.12;.34;.95;.96;1" calcMode="spline" keySplines="0 0 1 1;.6 0 1 .9;0 0 1 1;0 0 1 1;0 0 1 1" dur="5s" begin="-1.2s" repeatCount="indefinite"/><path class="st-ink fl-none" stroke-width="1.5" d="M116 21V63M95 42H137M101 27L131 57M131 27L101 57"/><circle class="fl-hot" cx="116" cy="26" r="2.6"/></g>
  <g><animateTransform attributeName="transform" type="rotate" values="0 41 56;0 41 56;-640 41 56;-640 41 56;0 41 56;0 41 56" keyTimes="0;.12;.34;.95;.96;1" calcMode="spline" keySplines="0 0 1 1;.6 0 1 .9;0 0 1 1;0 0 1 1;0 0 1 1" dur="5s" begin="-1.2s" repeatCount="indefinite"/><circle class="fl-hot" cx="41" cy="52.5" r="1.6"/></g>
  <g clip-path="url(#elevator-shaft)">
    <g><animateTransform attributeName="transform" type="translate" values="0 84;0 84;0 140;0 140;0 84;0 84" keyTimes="0;.12;.34;.95;.96;1" calcMode="spline" keySplines="0 0 1 1;.6 0 1 .9;0 0 1 1;0 0 1 1;0 0 1 1" dur="5s" begin="-1.2s" repeatCount="indefinite"/>
  <path class="st-dark fl-none" stroke-width="1.4" d="M85 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M88 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M91 -150V-4"/>
  <rect class="fl-dark" x="80" y="-6" width="16" height="6" rx="1.5"/>
  <g>
    <rect class="body" x="66" y="0" width="44" height="44" rx="3"/>
    <rect class="fl-cold-soft" x="70" y="4" width="36" height="30" rx="2"/>
    <path class="thin" d="M88 4V34"/>
    <circle class="fl-ink" cx="79" cy="15" r="3.6"/><path class="fl-ink" d="M73 34v-8q0-6 6-6t6 6v8z"/>
    <circle class="fl-violet" cx="97" cy="17" r="3.2"/><path class="fl-violet" d="M92 34v-7q0-5 5-5t5 5v7z"/>
    <path class="fl-line" d="M58 2h8v5h-8zM110 2h8v5h-8z"/>
  </g>
  <g>
    <path class="st-dark fl-none" stroke-width="2" stroke-linejoin="round" d="M66 37H47V47H66M110 37H129V47H110"/>
    <path class="fl-hot" d="M49 46V38l4 8zM113 46V38l4 8z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;1.5 -2;1.5 -2;0 0;0 0" keyTimes="0;.3;.34;.95;.96;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path>
    <path class="fl-hot" d="M63 46V38l-4 8zM127 46V38l-4 8z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-1.5 -2;-1.5 -2;0 0;0 0" keyTimes="0;.3;.34;.95;.96;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path>
  </g>
  <path class="st-elec fl-none" stroke-width="1.6" stroke-linecap="round" opacity="0" d="M50 50l-5 5M62 50l5 5M56 51v6M114 50l-5 5M126 50l5 5M120 51v6M51 35l-5-4M61 35l5-4M115 35l-5-4M125 35l5-4"><animate attributeName="opacity" values="0;0;1;.2;1;.2;1;0;0" keyTimes="0;.33;.35;.4;.45;.5;.56;.7;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path></g>
    <g><animateTransform attributeName="transform" type="translate" values="0 152;0 152;0 96;0 96;0 152;0 152" keyTimes="0;.12;.34;.95;.96;1" calcMode="spline" keySplines="0 0 1 1;.6 0 1 .9;0 0 1 1;0 0 1 1;0 0 1 1" dur="5s" begin="-1.2s" repeatCount="indefinite"/>
  <path class="st-dark fl-none" stroke-width="1.4" d="M141 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M144 -150V-4"/><path class="st-dark fl-none" stroke-width="1.4" d="M147 -150V-4"/>
  <g>
    <rect class="fl-dark st-ink" stroke-width="2" x="134" y="0" width="20" height="40" rx="2"/>
    <path fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" d="M138 8h12M138 16h12M138 24h12M138 32h12"/>
  </g></g>
  </g>
</g></g>
<circle class="fl-dark st-ink" stroke-width="1.5" cx="116" cy="42" r="5"/>

<!-- שלב 1 -->
<g class="only-1">
  <text x="258" y="24">גלגל בראש הפיר</text>
  <path class="arrow st-ink" stroke-width="1.8" d="M212 20H143" marker-end="url(#elevator-a)"/>
  <text x="254" y="120">משקולת נגד</text>
  <text x="254" y="134">מאזנת את התא</text>
  <path class="arrow st-ink" stroke-width="1.8" d="M210 124H160" marker-end="url(#elevator-a)"/>
</g>
<!-- שלב 2 -->
<g class="only-2">
  <path class="wire st-elec dash" d="M211 42H181"/>
  <path class="fl-elec st-ink blink" stroke-width="1.2" stroke-linejoin="round" d="M224 28l-9 14h6l-3 12 10-15h-6l3-11z"/>
  <text x="252" y="72">המנוע מזיז</text>
  <text x="252" y="86">רק את ההפרש</text>
</g>
<!-- שלב 3: מבט מקרוב על הכבלים -->
<g class="only-3">
  <path class="thin st-ink" stroke-width="1.2" d="M225 135L151 68"/>
  <circle class="fl-none st-ink" stroke-width="1.2" cx="144" cy="62" r="8"/>
  <circle class="body" cx="250" cy="150" r="30"/>
  <g clip-path="url(#elevator-lens)">
    <path class="st-dark fl-none" stroke-width="10" d="M234 116V184M250 116V184M266 116V184"/>
    <path fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="10" stroke-dasharray="2 4" d="M234 116V184M250 116V184M266 116V184"/>
    <path class="st-hot fl-none fade" stroke-width="10" stroke-opacity=".75" d="M234 116V184"/>
    <path class="st-hot fl-none fade d2" stroke-width="10" stroke-opacity=".75" d="M250 116V184"/>
    <path class="st-hot fl-none fade d4" stroke-width="10" stroke-opacity=".75" d="M266 116V184"/>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="250" cy="150" r="30"/>
  <text x="250" y="108">כמה כבלי פלדה</text>
  <text x="250" y="200">כל אחד מספיק לבדו</text>
</g>
<!-- שלב 4: מבט מקרוב על הטריזים -->
<g class="only-4">
  <path class="thin st-ink" stroke-width="1.2" d="M222 162L133 184"/>
  <circle class="body" cx="250" cy="150" r="30"/>
  <g clip-path="url(#elevator-lens)">
    <rect class="fl-line st-ink" stroke-width="1.5" x="245" y="110" width="10" height="80"/>
    <path class="st-ink fl-none" stroke-width="2" stroke-dasharray="3 5" d="M250 110V190"><animate attributeName="stroke-dashoffset" values="0;0;64;64;0;0" keyTimes="0;.12;.34;.95;.96;1" calcMode="spline" keySplines="0 0 1 1;.6 0 1 .9;0 0 1 1;0 0 1 1;0 0 1 1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path>
    <path class="fl-dark" d="M217 124H238L230 178H217zM283 124H262L270 178H283z"/>
    <path class="fl-hot st-ink" stroke-width="1.2" stroke-linejoin="round" d="M236 146H241V172H232z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;3.5 -20;3.5 -20;0 0;0 0" keyTimes="0;.3;.34;.95;.96;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path>
    <path class="fl-hot st-ink" stroke-width="1.2" stroke-linejoin="round" d="M264 146H259V172H268z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-3.5 -20;-3.5 -20;0 0;0 0" keyTimes="0;.3;.34;.95;.96;1" dur="5s" begin="-1.2s" repeatCount="indefinite"/></path>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="250" cy="150" r="30"/>
  <text x="250" y="94">טריזים ננעלים</text>
  <text x="250" y="108">על המסילות</text>
  <text x="250" y="200">בלי חשמל ובלי מחשב</text>
</g>
`;
