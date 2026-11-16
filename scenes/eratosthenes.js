// ארטוסתנס: 1 בסוונה השמש מעל הראש ואין צל · 2 באלכסנדריה צל של 7.2 מעלות · 3 המרחק בין הערים · 4 הזווית במרכז היא חמישים מהמעגל, ולכן ההיקף פי 50
export default `
<defs>
  <marker id="eratosthenes-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-ink"/></marker>
  <marker id="eratosthenes-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fl-warm"/></marker>
</defs>

<!-- כדור הארץ (חתך) -->
<circle class="fl-cold-soft st-ink" stroke-width="2" cx="96" cy="204" r="124"/>
<circle class="fl-ink" cx="96" cy="204" r="2.6"/>

<!-- קרני שמש מקבילות -->
<g class="hl-1 hl-2"><path class="arrow st-warm" style="stroke-width:1.8" d="M163.7 8.0L117.5 81.9" marker-end="url(#eratosthenes-w)"/><path class="arrow st-warm" style="stroke-width:1.8" d="M190.6 8.0L140.4 88.2" marker-end="url(#eratosthenes-w)"/></g>
<g class="hl-1"><path class="arrow st-warm" style="stroke-width:1.8" d="M218.5 8.0L153.8 111.6"/></g>
<g class="hl-2"><path class="arrow st-warm" style="stroke-width:1.8" d="M126.0 8.0L96.0 56.0"/><path class="st-warm fl-none" stroke-width="1.4" stroke-dasharray="3 3" d="M96.0 56.0L81.0 80.0"/></g>

<!-- סוונה: באר -->
<g class="hl-1 hl-3 hl-4">
  <path class="fl-bg st-ink" stroke-width="1.6" stroke-linejoin="round" d="M157.5 96.2L147.9 111.5L156.4 116.8L166.0 101.5"/>
  <circle class="fl-ink" cx="161.7" cy="98.8" r="2.4"/>
</g>
<g class="only-1"><circle class="fl-elec" cx="153.8" cy="111.6" r="3.2"><animate attributeName="opacity" values=".3;1;.3" dur="1.4s" repeatCount="indefinite"/></circle></g>

<!-- אלכסנדריה: מחוג וצל -->
<g class="hl-2 hl-3 hl-4">
  <path class="st-ink fl-none" stroke-width="2.4" stroke-linecap="round" d="M96.0 80.0L96.0 56.0"/>
  <circle class="fl-ink" cx="96.0" cy="80.0" r="2.4"/>
</g>
<g class="hl-2"><path class="st-dark fl-none" stroke-width="3" stroke-linecap="round" d="M96.0 80.0L81.0 80.0"/></g>
<g class="only-2"><path class="st-hot fl-none" stroke-width="1.8" d="M96.0 69.0A13 13 0 0 1 89.1 67.0"/></g>

<!-- המרחק על פני השטח -->
<g class="hl-3"><path class="wire st-green" style="stroke-width:3" d="M96.0 80.0A124 124 0 0 1 161.7 98.8"/></g>
<g class="only-3"><g class="fl-ink"><circle r="3.2"><animateMotion dur="3s" repeatCount="indefinite" path="M96.0 73.0A131 131 0 0 1 165.4 92.9"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="3s" repeatCount="indefinite"/></circle></g></g>

<!-- הזווית במרכז -->
<g class="hl-4">
  <path class="thin st-ink" style="stroke-width:1.4" stroke-dasharray="4 3" d="M96 204L96.0 80.0M96 204L161.7 98.8"/>
  <path class="st-hot fl-none" stroke-width="2" d="M96.0 164.0A40 40 0 0 1 117.2 170.1"/>
</g>
<g class="only-4"><path class="flow" style="stroke:var(--s-hot);stroke-opacity:1" d="M96.0 164.0A40 40 0 0 1 117.2 170.1"/></g>

<!-- שמות הערים -->
<g class="only-1 "><text x="186" y="104">סוונה</text></g>
<g class="only-2"><text x="48" y="66">אלכסנדריה</text></g>
<g class="only-3"><text x="186" y="104">סוונה</text><text x="48" y="66">אלכסנדריה</text></g>

<!-- תוויות -->
<g class="only-1"><text x="268" y="140">שמש בזנית:</text><text x="268" y="154">אין צל, האור</text><text x="268" y="168">מגיע לקרקעית</text><text x="268" y="182">הבאר</text></g>
<g class="only-2"><text x="268" y="140">אותן קרניים,</text><text x="268" y="154">אבל כאן יש צל</text><text class="lg" style="direction:ltr" x="268" y="176">7.2°</text><text x="268" y="194">חמישים מהמעגל</text></g>
<g class="only-3"><text class="lg" x="268" y="146">5,000</text><text x="268" y="162">סטדיונים</text><text x="268" y="180">בין שתי הערים</text></g>
<g class="only-4"><text x="268" y="132">הזווית במרכז</text><text x="268" y="146">גם היא <tspan style="direction:ltr;unicode-bidi:embed">7.2°</tspan></text><text class="lg" style="direction:ltr" x="268" y="170">50 × 5,000</text><text style="direction:ltr" x="268" y="188">= 250,000</text><text x="268" y="202">סטדיונים</text></g>
<g class="only-2 only-4"><text class="sm" x="268" y="214">הזווית מוגדלת באיור</text></g>
`;
