// נורת להט בחתך: 1 זרם בחוט דק, אלקטרונים מתנגשים באטומים · 2 החוט מתלהט מאדום ללבן, כ־2,500 מעלות · 3 האוויר נשאב מהבועה, ובאוויר הפתוח החוט נשרף · 4 במבוק מפוחם מול טונגסטן, 5% אור ו־95% חום
export default `
<defs>
  <linearGradient id="bulb-heat" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" style="stop-color:var(--s-dark)"/><stop offset=".22" style="stop-color:var(--s-hot)"/><stop offset=".5" style="stop-color:var(--s-warm)"/><stop offset=".78" style="stop-color:var(--s-elec)"/><stop offset="1" stop-color="#fff"/>
  </linearGradient>
  <clipPath id="bulb-lens"><circle cx="238" cy="62" r="42"/></clipPath>
  <marker id="bulb-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
</defs>

<!-- ===== מעגל פשוט: סוללה, חוטים ===== -->
<g class="hl-1">
  <path class="wire st-ink" d="M26 160V150H82M100 171V206H26V194"/>
</g>

<!-- ===== הנורה ===== -->
<circle class="fl-elec" cx="100" cy="68" r="43" opacity=".2"><animate attributeName="opacity" values="0;0;.3;.3;0" keyTimes="0;.16;.46;.93;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></circle>
<path class="fl-cold-soft" opacity=".45" d="M84 138C84 120 56 104 56 70A44 44 0 0 1 95.5 26.23Q97 20 100 17Q103 20 104.5 26.23A44 44 0 0 1 144 70C144 104 116 120 116 138z"/>
<path class="fl-cold-soft st-line" stroke-width="1.5" stroke-linejoin="round" d="M92 138L94 110Q94 102 100 102Q106 102 106 110L108 138z"/>
<path class="thin" d="M100 102V46"/><circle class="fl-none st-line" stroke-width="1.3" cx="100" cy="43" r="3"/>
<path class="wire st-ink" style="stroke-width:1.6" d="M96 138V108L88 90M104 138V108L112 90"/>
<path class="fl-none st-warm" stroke-width="9" stroke-linecap="round" opacity="0" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"><animate attributeName="opacity" values="0;0;.32;.32;0" keyTimes="0;.16;.46;.93;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
<path class="fl-none st-dark" stroke-width="2.2" stroke-linecap="round" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"/>
<g><animate attributeName="opacity" values="1;1;0" keyTimes="0;.93;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/>
  <path class="fl-none st-hot" stroke-width="2.2" stroke-linecap="round" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.06;.16;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
  <path class="fl-none st-warm" stroke-width="2.2" stroke-linecap="round" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.16;.28;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
  <path class="fl-none st-elec" stroke-width="2.2" stroke-linecap="round" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.28;.4;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
  <path fill="none" stroke="#fff" stroke-width=".8" stroke-linecap="round" d="M88 90C84 66 86 40 100 40C114 40 116 66 112 90"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.36;.46;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
</g>
<rect class="fl-line st-ink" stroke-width=".8" x="86" y="88.5" width="4" height="4"/><rect class="fl-line st-ink" stroke-width=".8" x="110" y="88.5" width="4" height="4"/>
<path class="fl-none st-ink" stroke-width="2" stroke-linejoin="round" d="M84 138C84 120 56 104 56 70A44 44 0 0 1 95.5 26.23Q97 20 100 17Q103 20 104.5 26.23A44 44 0 0 1 144 70C144 104 116 120 116 138z"/>
<path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7" d="M66 56Q70 42 82 35"/>
<!-- בסיס הברגה -->
<rect class="fl-panel" x="82" y="137" width="36" height="25" rx="3"/>
<rect class="fl-elec st-ink" fill-opacity=".55" stroke-width="2" x="82" y="137" width="36" height="25" rx="3"/>
<path class="thin st-ink" style="stroke-width:1.2" d="M82.5 144L117.5 142M82.5 149.5L117.5 147.5M82.5 155L117.5 153M82.5 160L117.5 158.5"/>
<path class="fl-dark st-ink" stroke-width="1.5" stroke-linejoin="round" d="M86 162L95 168.5H105L114 162z"/>
<rect class="fl-line st-ink" stroke-width="1.2" x="95.5" y="168.5" width="9" height="3.5" rx="1"/>
<g class="hl-1">
  <circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-0s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-1s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-2s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-3s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-4s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-5s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-6s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-7s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-8s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-9s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-10s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-11s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-12s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-13s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-14s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle><circle class="fl-elec st-ink" stroke-width=".8" r="2.4"><animateMotion dur="16s" begin="-15s" repeatCount="indefinite" path="M26 160V150H86L96 138V108L88 90C84 66 86 40 100 40C114 40 116 66 112 90L104 108V138L100 170V206H26V194"/></circle>
  <rect class="fl-ink" x="21" y="155" width="10" height="6" rx="1.5"/>
  <rect class="body" x="13" y="160" width="26" height="34" rx="4"/>
  <path class="fl-hot" d="M14 172V164a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v8z"/>
  <path class="thin st-ink" d="M13 172H39"/>
  <rect class="fl-none st-ink" stroke-width="2" x="13" y="160" width="26" height="34" rx="4"/>
  <path fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" d="M22.5 166.5h7M26 163v7"/>
  <path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M21.5 184h9"/>
</g>

<!-- ===== שלב 1 (וגם בתמונה המלאה): מבט מקרוב על החוט ===== -->
<g class="only-1 from-1">
  <circle class="fl-none st-ink" stroke-width="1.3" cx="86.4" cy="62" r="5.5"/>
  <path class="thin st-ink" stroke-dasharray="3 3" d="M91.5 60L196.5 54M91.5 64.5L197 71"/>
  <circle class="fl-panel" cx="238" cy="62" r="42"/>
  <g clip-path="url(#bulb-lens)">
    <rect class="fl-warm" opacity=".28" x="190" y="40" width="100" height="44"><animate attributeName="opacity" values=".16;.36;.16" dur="1.6s" repeatCount="indefinite"/></rect>
    <path class="thin st-ink" style="stroke-width:1.6" d="M190 40H290M190 84H290"/>
    <circle class="fl-line st-ink shake d2" stroke-width=".8" cx="181" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="196" cy="50" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="211" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="226" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="241" cy="50" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="256" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="271" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="286" cy="50" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="301" cy="50" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="188.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="203.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="218.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="233.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="248.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="263.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="278.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="293.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="308.5" cy="62" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="181" cy="74" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="196" cy="74" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="211" cy="74" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="226" cy="74" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="241" cy="74" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="256" cy="74" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="271" cy="74" r="4.6"/><circle class="fl-line st-ink shake d2" stroke-width=".8" cx="286" cy="74" r="4.6"/><circle class="fl-line st-ink shake" stroke-width=".8" cx="301" cy="74" r="4.6"/>
    <circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M190 56L205 56L211 68L226 68L233 56L248 56L255 68L270 68L277 56L290 56"/></circle><circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="2.4s" begin="-1.25s" repeatCount="indefinite" path="M190 56L205 56L211 68L226 68L233 56L248 56L255 68L270 68L277 56L290 56"/></circle><circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="2.6999999999999997s" begin="-0.5s" repeatCount="indefinite" path="M190 68L204 68L196 68L211 56L218 56L226 68L240 68L248 56L263 56L270 68L290 68"/></circle><circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="2.6999999999999997s" begin="-1.75s" repeatCount="indefinite" path="M190 68L204 68L196 68L211 56L218 56L226 68L240 68L248 56L263 56L270 68L290 68"/></circle><circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="3s" begin="-1s" repeatCount="indefinite" path="M190 56L198 56L203 44L218 44L225 56L233 56L240 44L255 44L263 56L270 80L290 80"/></circle><circle class="fl-elec st-ink" stroke-width=".9" r="2.8"><animateMotion dur="3s" begin="-2.25s" repeatCount="indefinite" path="M190 56L198 56L203 44L218 44L225 56L233 56L240 44L255 44L263 56L270 80L290 80"/></circle>
  </g>
  <circle class="fl-none st-ink" stroke-width="2" cx="238" cy="62" r="42"/>
</g>
<g class="only-1">
  <text x="238" y="124">אלקטרונים מתנגשים באטומים</text>
  <text x="238" y="140">והחוט הדק מתחמם</text>
  <text x="238" y="180" class="sm">הנורה של אדיסון · מנלו פארק</text>
  <text x="238" y="197" class="lg">1879</text>
</g>

<!-- ===== שלב 2: סולם הטמפרטורה ===== -->
<g class="only-2">
  <rect x="178" y="22" width="14" height="130" rx="7" fill="url(#bulb-heat)"/>
  <rect class="fl-none st-ink" stroke-width="1.5" x="178" y="22" width="14" height="130" rx="7"/>
  <path class="thin st-ink" d="M192 36H198M192 81.5H198M192 113.5H198"/>
  <path class="fl-ink" d="M164 144L175 149L164 154z"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -113;0 -113;0 0" keyTimes="0;.06;.46;.93;1" dur="6s" begin="-2.9s" repeatCount="indefinite"/></path>
  <text x="221" y="40" class="lg">2,500°</text><text x="277" y="40">לבן־צהבהב</text>
  <text x="217" y="85">1,500°</text><text x="256" y="85">כתום</text>
  <text x="212" y="117">800°</text><text x="256" y="117">אדום עמום</text>
  <text x="240" y="180">ככל שהחוט חם יותר</text>
  <text x="240" y="196">האור חזק ולבן יותר</text>
</g>

<!-- ===== שלב 3: שואבים את האוויר; בחוץ החוט נשרף ===== -->
<g class="only-3">
  <rect class="fl-bg" x="96.6" y="0" width="6.8" height="25"/>
  <path class="fl-none st-ink" stroke-width="1.6" d="M96.8 26V0M103.2 26V0"/>
  <circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-0s" repeatCount="indefinite" path="M72 60Q86 42 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-0.36s" repeatCount="indefinite" path="M128 64Q114 46 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-0.72s" repeatCount="indefinite" path="M78 96Q89 78 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-1.08s" repeatCount="indefinite" path="M122 98Q111 80 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-1.44s" repeatCount="indefinite" path="M66 78Q83 60 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-1.8s" repeatCount="indefinite" path="M134 82Q117 64 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-2.16s" repeatCount="indefinite" path="M84 44Q92 26 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-2.52s" repeatCount="indefinite" path="M118 46Q109 28 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-2.88s" repeatCount="indefinite" path="M100 112Q100 94 100 30V-6"/></circle><circle class="fl-cold st-ink" stroke-width=".6" r="2.3"><animateMotion dur="3.6s" begin="-3.24s" repeatCount="indefinite" path="M100 64Q100 46 100 30V-6"/></circle>
  <path class="arrow st-ink" style="stroke-width:1.8" d="M88 24V8" marker-end="url(#bulb-a)"/>
  <text x="50" y="18">האוויר נשאב</text>
  <rect class="fl-panel st-line" stroke-width="1.2" x="172" y="12" width="136" height="106" rx="6"/>
  <rect class="fl-panel st-ink" stroke-width="1.5" x="208" y="96" width="64" height="12" rx="2"/><rect class="fl-warm" opacity=".5" x="208" y="96" width="64" height="12" rx="2"/>
  <path class="wire st-ink" style="stroke-width:1.8" d="M222 96V66M258 96V66"/>
  <path class="fl-none st-dark" stroke-width="2" stroke-linecap="round" d="M222 66C221 61 221 57 222 53M258 66C259 61 259 57 258 53"/>
  <g><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.58;1" dur="4s" repeatCount="indefinite"/>
    <path class="fl-none st-warm" stroke-width="7" opacity=".3" stroke-linecap="round" d="M222 66C218 48 228 30 240 30C252 30 262 48 258 66"/>
    <path class="fl-none st-elec" stroke-width="2.2" stroke-linecap="round" d="M222 66C218 48 228 30 240 30C252 30 262 48 258 66"/>
    <path class="fl-none st-hot" stroke-width="2.6" stroke-linecap="round" d="M222 66C218 48 228 30 240 30C252 30 262 48 258 66"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.38;.5;1" dur="4s" repeatCount="indefinite"/></path>
  </g>
  <g><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.42;.52;.66;1" dur="4s" repeatCount="indefinite"/>
    <path class="fl-warm st-hot" stroke-width="1.5" stroke-linejoin="round" d="M240 20C246 30 254 34 252 46C250 54 244 57 240 57C236 57 230 54 228 46C226 36 236 32 240 20z"/>
    <path class="fl-elec" d="M240 34C243 40 246 43 245 48C244 52 242 53 240 53C238 53 236 52 235 48C234 43 238 40 240 34z"/>
  </g>
  <g class="fl-none st-line" stroke-width="1.4">
    <circle cx="238" cy="38" r="3"><animate attributeName="cy" values="40;40;20" keyTimes="0;.6;1" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;.9;0" keyTimes="0;.6;.72;1" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="244" cy="44" r="4"><animate attributeName="cy" values="46;46;24" keyTimes="0;.64;1" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;.9;0" keyTimes="0;.64;.78;1" dur="4s" repeatCount="indefinite"/></circle>
  </g>
  <g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M190 40L226 46"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M292 36L254 44"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M184 78L224 60"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M296 80L256 60"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M240 104L240 40"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M206 22L234 32"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g><g><animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" keyTimes="0;.48;1" keyPoints="0;1;1" path="M276 22L247 32"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.47;.54;1" dur="4s" repeatCount="indefinite"/><circle class="fl-cold st-ink" stroke-width=".6" cx="-2" r="2.5"/><circle class="fl-cold st-ink" stroke-width=".6" cx="2" r="2.5"/></g>
  <text x="240" y="134">באוויר הפתוח: נשרף בשנייה</text>
  <text x="240" y="178">בבועה אין חמצן,</text>
  <text x="240" y="194">ולכן החוט מחזיק מעמד</text>
</g>

<!-- ===== שלב 4: החומר של החוט, ולאן הולכת האנרגיה ===== -->
<g class="only-4">
  <rect class="fl-panel st-line" stroke-width="1.2" x="165" y="10" width="68" height="80" rx="6"/>
  <rect class="fl-panel st-line" stroke-width="1.2" x="241" y="10" width="68" height="80" rx="6"/>
  <!-- סיב במבוק מפוחם -->
  <rect class="fl-cold-soft st-line" stroke-width="1.2" x="187" y="72" width="24" height="12" rx="2"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M192 72V62M206 72V62"/>
  <path class="fl-none st-dark" stroke-width="3.2" stroke-linecap="round" d="M192 62C187 44 190 20 199 20C208 20 211 44 206 62"/>
  <path class="fl-none st-ink" stroke-width=".8" d="M188.6 50H191.8M189.2 36H192.4M205.6 36H208.8M206.2 50H209.4"/>
  <!-- סליל טונגסטן -->
  <rect class="fl-cold-soft st-line" stroke-width="1.2" x="263" y="72" width="24" height="12" rx="2"/>
  <path class="wire st-ink" style="stroke-width:1.5" d="M268 72L256 46M282 72L294 46"/>
  <path class="thin" d="M275 72V58M275 58L275 51"/>
  <path class="fl-none st-warm" stroke-width="6" opacity=".3" stroke-linecap="round" d="M256 46H294"><animate attributeName="opacity" values=".18;.4;.18" dur="1.6s" repeatCount="indefinite"/></path>
  <path class="fl-none st-ink" stroke-width="2.4" stroke-linejoin="round" d="M256 51L257.26 50.62L258.36 49.54L259.19 47.91L259.65 46L259.71 44.09L259.41 42.46L258.83 41.38L258.1 41L257.37 41.38L256.79 42.46L256.49 44.09L256.55 46L257.01 47.91L257.84 49.54L258.94 50.62L260.2 51L261.46 50.62L262.56 49.54L263.39 47.91L263.85 46L263.91 44.09L263.61 42.46L263.03 41.38L262.3 41L261.57 41.38L260.99 42.46L260.69 44.09L260.75 46L261.21 47.91L262.04 49.54L263.14 50.62L264.4 51L265.66 50.62L266.76 49.54L267.59 47.91L268.05 46L268.11 44.09L267.81 42.46L267.23 41.38L266.5 41L265.77 41.38L265.19 42.46L264.89 44.09L264.95 46L265.41 47.91L266.24 49.54L267.34 50.62L268.6 51L269.86 50.62L270.96 49.54L271.79 47.91L272.25 46L272.31 44.09L272.01 42.46L271.43 41.38L270.7 41L269.97 41.38L269.39 42.46L269.09 44.09L269.15 46L269.61 47.91L270.44 49.54L271.54 50.62L272.8 51L274.06 50.62L275.16 49.54L275.99 47.91L276.45 46L276.51 44.09L276.21 42.46L275.63 41.38L274.9 41L274.17 41.38L273.59 42.46L273.29 44.09L273.35 46L273.81 47.91L274.64 49.54L275.74 50.62L277 51L278.26 50.62L279.36 49.54L280.19 47.91L280.65 46L280.71 44.09L280.41 42.46L279.83 41.38L279.1 41L278.37 41.38L277.79 42.46L277.49 44.09L277.55 46L278.01 47.91L278.84 49.54L279.94 50.62L281.2 51L282.46 50.62L283.56 49.54L284.39 47.91L284.85 46L284.91 44.09L284.61 42.46L284.03 41.38L283.3 41L282.57 41.38L281.99 42.46L281.69 44.09L281.75 46L282.21 47.91L283.04 49.54L284.14 50.62L285.4 51L286.66 50.62L287.76 49.54L288.59 47.91L289.05 46L289.11 44.09L288.81 42.46L288.23 41.38L287.5 41L286.77 41.38L286.19 42.46L285.89 44.09L285.95 46L286.41 47.91L287.24 49.54L288.34 50.62L289.6 51L290.86 50.62L291.96 49.54L292.79 47.91L293.25 46L293.31 44.09L293.01 42.46L292.43 41.38L291.7 41L290.97 41.38L290.39 42.46L290.09 44.09L290.15 46L290.61 47.91L291.44 49.54L292.54 50.62L293.8 51"/>
  <path class="fl-none st-elec" stroke-width="1.1" stroke-linejoin="round" d="M256 51L257.26 50.62L258.36 49.54L259.19 47.91L259.65 46L259.71 44.09L259.41 42.46L258.83 41.38L258.1 41L257.37 41.38L256.79 42.46L256.49 44.09L256.55 46L257.01 47.91L257.84 49.54L258.94 50.62L260.2 51L261.46 50.62L262.56 49.54L263.39 47.91L263.85 46L263.91 44.09L263.61 42.46L263.03 41.38L262.3 41L261.57 41.38L260.99 42.46L260.69 44.09L260.75 46L261.21 47.91L262.04 49.54L263.14 50.62L264.4 51L265.66 50.62L266.76 49.54L267.59 47.91L268.05 46L268.11 44.09L267.81 42.46L267.23 41.38L266.5 41L265.77 41.38L265.19 42.46L264.89 44.09L264.95 46L265.41 47.91L266.24 49.54L267.34 50.62L268.6 51L269.86 50.62L270.96 49.54L271.79 47.91L272.25 46L272.31 44.09L272.01 42.46L271.43 41.38L270.7 41L269.97 41.38L269.39 42.46L269.09 44.09L269.15 46L269.61 47.91L270.44 49.54L271.54 50.62L272.8 51L274.06 50.62L275.16 49.54L275.99 47.91L276.45 46L276.51 44.09L276.21 42.46L275.63 41.38L274.9 41L274.17 41.38L273.59 42.46L273.29 44.09L273.35 46L273.81 47.91L274.64 49.54L275.74 50.62L277 51L278.26 50.62L279.36 49.54L280.19 47.91L280.65 46L280.71 44.09L280.41 42.46L279.83 41.38L279.1 41L278.37 41.38L277.79 42.46L277.49 44.09L277.55 46L278.01 47.91L278.84 49.54L279.94 50.62L281.2 51L282.46 50.62L283.56 49.54L284.39 47.91L284.85 46L284.91 44.09L284.61 42.46L284.03 41.38L283.3 41L282.57 41.38L281.99 42.46L281.69 44.09L281.75 46L282.21 47.91L283.04 49.54L284.14 50.62L285.4 51L286.66 50.62L287.76 49.54L288.59 47.91L289.05 46L289.11 44.09L288.81 42.46L288.23 41.38L287.5 41L286.77 41.38L286.19 42.46L285.89 44.09L285.95 46L286.41 47.91L287.24 49.54L288.34 50.62L289.6 51L290.86 50.62L291.96 49.54L292.79 47.91L293.25 46L293.31 44.09L293.01 42.46L292.43 41.38L291.7 41L290.97 41.38L290.39 42.46L290.09 44.09L290.15 46L290.61 47.91L291.44 49.54L292.54 50.62L293.8 51"/>
  <text x="199" y="104">במבוק מפוחם</text>
  <text x="199" y="118" class="sm">1880 · אלף שעות</text>
  <text x="275" y="104">סליל טונגסטן</text>
  <text x="275" y="118" class="sm">ניתך רק ב־3,400°</text>
  <text x="234" y="205">95% חום</text>
  <text x="294" y="205">5% אור</text>
</g>
<g class="from-4">
  <rect class="fl-hot" x="168" y="174" width="133" height="15"/>
  <rect class="fl-elec" x="301" y="174" width="7" height="15"/>
  <rect class="fl-none st-ink" stroke-width="1.6" x="168" y="174" width="140" height="15" rx="2"/>
  <path class="thin st-ink" d="M301 174V189"/>
  <path class="wire st-hot dash" style="stroke-width:2" d="M196 170q-4-4 0-8q4-4 0-8q-4-4 0-8M234 170q-4-4 0-8q4-4 0-8q-4-4 0-8M272 170q-4-4 0-8q4-4 0-8q-4-4 0-8"/>
  <path class="wire st-elec" style="stroke-width:1.8" d="M304.5 170V158M299 169L295 160M310 169L313 161"><animate attributeName="opacity" values="1;.35;1" dur="1.6s" repeatCount="indefinite"/></path>
</g>
`;
