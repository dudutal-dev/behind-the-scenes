// טורבו: 1 הפליטה מסובבת טורבינה · 2 מדחס על אותו ציר דוחס אוויר צח אל המנוע · 3 מצנן ביניים מקרר את האוויר הדחוס · 4 השהיית טורבו, ושסתום עקיפה שמסיט פליטה בלחץ מרבי
export default `
<!-- צינורות: קודם הצבע, אחר כך הזרימה -->
<g class="hl-2 hl-3"><path class="pipe st-warm" d="M122 72V82H42V92"/></g>
<g class="hl-3"><path class="pipe st-cold" d="M42 168V188H98V164H110"/></g>
<g class="hl-2"><path class="pipe st-cold" d="M14 46H112"/></g>
<g class="hl-1 hl-4"><path class="pipe st-hot" d="M210 160H232V86Q232 72 218 72H196"/><path class="pipe st-hot" d="M206 44H304"/></g>
<g class="hl-4"><path class="pipe st-line" style="stroke-width:5" d="M232 104H262V44"/></g>

<!-- מסנן אוויר -->
<g class="hl-2"><rect class="body" x="8" y="34" width="20" height="24" rx="4"/><path class="thin st-ink" d="M13 38v16M18 38v16M23 38v16"/></g>

<!-- מצנן ביניים: רדיאטור עם צלעות -->
<g class="hl-3">
  <rect class="body" x="22" y="92" width="40" height="76" rx="4"/>
  <path class="thin" d="M26 100H58M26 108H58M26 116H58M26 124H58M26 132H58M26 140H58M26 148H58M26 156H58"/>
</g>

<!-- המנוע -->
<rect class="body" x="110" y="124" width="100" height="80" rx="6"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="122" y="132" width="20" height="40" rx="2"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="150" y="132" width="20" height="40" rx="2"/>
<rect class="fl-soft st-ink" stroke-width="1.5" x="178" y="132" width="20" height="40" rx="2"/>
<rect class="fl-line st-ink" stroke-width="1.2" x="124" y="146" width="16" height="12"><animate attributeName="y" values="146;156;146" dur=".45s" repeatCount="indefinite"/></rect>
<rect class="fl-line st-ink" stroke-width="1.2" x="152" y="156" width="16" height="12"><animate attributeName="y" values="156;146;156" dur=".45s" repeatCount="indefinite"/></rect>
<rect class="fl-line st-ink" stroke-width="1.2" x="180" y="150" width="16" height="12"><animate attributeName="y" values="150;160;150;146;150" dur=".45s" repeatCount="indefinite"/></rect>
<circle class="fl-soft st-ink" stroke-width="1.5" cx="160" cy="188" r="9"/>
<g class="spin fast"><path class="st-ink fl-none" stroke-width="2" stroke-linecap="round" d="M160 181v14"/></g>

<!-- הטורבו: מדחס (קר) וטורבינה (חמה) על ציר אחד -->
<g class="hl-1 hl-2"><rect class="fl-soft st-ink" stroke-width="1.5" x="146" y="45" width="28" height="14" rx="3"/>
  <path class="st-ink fl-none" stroke-width="3" d="M144 52H176"/></g>
<g class="hl-2">
  <path class="fl-cold-soft st-ink" stroke-width="2" d="M122 74A24 24 0 1 1 146 50V70Q140 76 122 76Z"/>
  <circle class="fl-panel st-cold" stroke-width="1.5" cx="128" cy="52" r="16"/>
  <g class="spin fast"><path class="fl-none st-cold" style="stroke-width:1.6" d="M132 52Q139.1 53.7 140.8 59.8M130.8 54.8Q134.7 61.1 131.5 66.6M128 56Q126.3 63.1 120.2 64.8M125.2 54.8Q118.9 58.7 113.4 55.5M124 52Q116.9 50.3 115.2 44.2M125.2 49.2Q121.3 42.9 124.5 37.4M128 48Q129.7 40.9 135.8 39.2M130.8 49.2Q137.1 45.3 142.6 48.5"/></g>
  <circle class="fl-ink" cx="128" cy="52" r="2.4"/>
</g>
<g class="hl-1 hl-4">
  <path class="st-ink" style="fill:var(--s-soft)" stroke-width="2" d="M198 74A24 24 0 1 0 174 50V70Q180 76 198 76Z"/>
  <circle class="fl-panel st-hot" stroke-width="1.5" cx="192" cy="52" r="16"/>
  <g class="spin fast"><path class="fl-none st-hot" style="stroke-width:1.6" d="M196 52Q203.1 53.7 204.8 59.8M194.8 54.8Q198.7 61.1 195.5 66.6M192 56Q190.3 63.1 184.2 64.8M189.2 54.8Q182.9 58.7 177.4 55.5M188 52Q180.9 50.3 179.2 44.2M189.2 49.2Q185.3 42.9 188.5 37.4M192 48Q193.7 40.9 199.8 39.2M194.8 49.2Q201.1 45.3 206.6 48.5"/></g>
  <circle class="fl-ink" cx="192" cy="52" r="2.4"/>
</g>

<!-- שלב 1: פליטה מסובבת את הטורבינה -->
<g class="only-1">
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0.3s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0.6s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0.8s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-1.1s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.2s" begin="-0s" repeatCount="indefinite" path="M206 44H304"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.2s" begin="-0.3s" repeatCount="indefinite" path="M206 44H304"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.2s" begin="-0.6s" repeatCount="indefinite" path="M206 44H304"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.2s" begin="-0.9s" repeatCount="indefinite" path="M206 44H304"/></circle>
  <text x="192" y="20">טורבינה</text>
  <text x="270" y="134">פליטה חמה</text>
  <text x="272" y="30" class="sm">אל האגזוז</text>
</g>

<!-- שלב 2: המדחס דוחס אוויר צח -->
<g class="only-2">
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.4s" begin="-0s" repeatCount="indefinite" path="M14 46H112"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.4s" begin="-0.3s" repeatCount="indefinite" path="M14 46H112"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.4s" begin="-0.6s" repeatCount="indefinite" path="M14 46H112"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.4s" begin="-0.8s" repeatCount="indefinite" path="M14 46H112"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.4s" begin="-1.1s" repeatCount="indefinite" path="M14 46H112"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-0s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-0.3s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-0.7s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-1s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-1.4s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-1.7s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="2.4s" begin="-2.1s" repeatCount="indefinite" path="M122 72V82H42V92V168V188H98V164H110"/></circle>
  <path class="flow" d="M210 160H232V86Q232 72 218 72H196"/>
  <text x="128" y="20">מדחס</text>
  <text x="62" y="32" class="sm">אוויר צח</text>
  <path class="thin st-ink" d="M160 92V62"/><text x="160" y="104">ציר משותף</text>
  <text x="270" y="140">יותר אוויר</text>
  <text x="270" y="156">יותר דלק</text>
  <text x="270" y="172">יותר כוח</text>
</g>

<!-- שלב 3: מצנן הביניים -->
<g class="only-3">
  <circle class="fl-warm" r="2.6"><animateMotion dur="1s" begin="-0s" repeatCount="indefinite" path="M122 72V82H42V92"/></circle><circle class="fl-warm" r="2.6"><animateMotion dur="1s" begin="-0.3s" repeatCount="indefinite" path="M122 72V82H42V92"/></circle><circle class="fl-warm" r="2.6"><animateMotion dur="1s" begin="-0.7s" repeatCount="indefinite" path="M122 72V82H42V92"/></circle>
  <circle class="fl-cold" r="2.6"><animateMotion dur="1.3s" begin="-0s" repeatCount="indefinite" path="M42 168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.3s" begin="-0.3s" repeatCount="indefinite" path="M42 168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.3s" begin="-0.7s" repeatCount="indefinite" path="M42 168V188H98V164H110"/></circle><circle class="fl-cold" r="2.6"><animateMotion dur="1.3s" begin="-1s" repeatCount="indefinite" path="M42 168V188H98V164H110"/></circle>
  <path class="flow" d="M26 112H58M26 128H58M26 144H58"/>
  <text x="101" y="99" class="sm">חם אחרי הדחיסה</text>
  <text x="86" y="126">מצנן</text>
  <text x="86" y="140">ביניים</text>
  <text x="70" y="212" class="sm">קר וצפוף יותר</text>
</g>

<!-- שלב 4: השהיה ושסתום עקיפה -->
<g class="only-4">
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0.3s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-0.7s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.4s" begin="-1s" repeatCount="indefinite" path="M210 160H232V86Q232 72 218 72H196"/></circle>
  <circle class="fl-hot" r="2.6"><animateMotion dur="1.1s" begin="-0s" repeatCount="indefinite" path="M232 104H262V44"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.1s" begin="-0.4s" repeatCount="indefinite" path="M232 104H262V44"/></circle><circle class="fl-hot" r="2.6"><animateMotion dur="1.1s" begin="-0.7s" repeatCount="indefinite" path="M232 104H262V44"/></circle>
  <path class="flow" d="M206 44H304"/>
  <!-- השסתום נפתח ונסגר -->
  <g><animateTransform attributeName="transform" type="rotate" values="0 262 80;-50 262 80;-50 262 80;0 262 80" keyTimes="0;.3;.7;1" dur="2.4s" repeatCount="indefinite"/>
    <path class="st-ink fl-none" stroke-width="3" stroke-linecap="round" d="M256 80H268"/></g>
  <text x="290" y="108" class="sm">שסתום</text>
  <text x="290" y="120" class="sm">עקיפה</text>
  <!-- מד לחץ הגדישה: עולה באיחור -->
  <circle class="fl-panel st-ink" stroke-width="1.5" cx="276" cy="168" r="18"/>
  <path class="thin st-ink" d="M263 175A14 14 0 1 1 289 175"/>
  <g><animateTransform attributeName="transform" type="rotate" values="-70 276 168;-70 276 168;60 276 168;60 276 168;-70 276 168" keyTimes="0;.25;.6;.9;1" dur="3s" repeatCount="indefinite"/>
    <path class="st-hot fl-none" stroke-width="2.5" stroke-linecap="round" d="M276 168V156"/></g>
  <circle class="fl-ink" cx="276" cy="168" r="2"/>
  <text x="276" y="201" class="sm">לחץ עולה באיחור</text>
</g>
`;
