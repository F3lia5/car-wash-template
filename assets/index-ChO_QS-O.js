(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={brand:{name:`PITLINE Auto Studio`,shortName:`PITLINE`,tagline:`Auto Studio`},locale:`tr-TR`,currency:`TRY`,timezone:`Europe/Istanbul`,seo:{title:`PITLINE Auto Studio | Oto detailing, boya düzeltme ve seramik kaplama`,description:`PITLINE Auto Studio: dış yıkama, iç detaylandırma, boya düzeltme ve seramik kaplama hizmetleri. Demo şablon. WhatsApp üzerinden randevu talebi gönderin.`,ogImage:``},demoNotice:`Demo şablon: fiyatlar, telefon, adres ve saatler örnektir.`,whatsapp:{phone:`905550000000`,greeting:`Merhaba, PITLINE Auto Studio için randevu talebi iletmek istiyorum.`,baseUrl:`https://wa.me/`},contact:{phoneDisplay:`+90 555 000 00 00`,phoneHref:`tel:+905550000000`,email:``},location:{isDemo:!0,addressLines:[`Örnek Mahallesi, Örnek Sanayi Sitesi No: 8`,`İstanbul`],mapsUrl:`https://www.google.com/maps/search/?api=1&query=%C4%B0stanbul`},hours:[{label:`Pazartesi – Cuma`,days:[1,2,3,4,5],open:`09:00`,close:`19:00`},{label:`Cumartesi`,days:[6],open:`09:00`,close:`17:00`},{label:`Pazar`,days:[0],open:``,close:``}],appointment:{slotMinutes:60,vehicleTypes:[`Küçük sınıf / Hatchback`,`Sedan`,`SUV / Crossover`,`Station Wagon`,`Ticari / Minivan`,`Spor / Premium`]}},t={nav:{services:`Hizmetler`,packages:`Paketler`,gallery:`Galeri`,contact:`İletişim`,cta:`Randevu Talebi`},hero:{title:`Işıkta kusur saklanmaz.`,lead:`Her araç, kontrollü ışık altında ve ölçülü adımlarla elde detaylandırılır. Boya, iç mekân ve cam yüzeyleri temiz, net ve düzgün teslim edilir.`,primaryCta:`Randevu Talebi Gönder`,secondaryCta:`Hizmetlere Göz At`,alt:`Stüdyo ışığı altında duran koyu renkli spor coupe araç, yandan görünüm`},services:{title:`Hizmetler`,intro:`Yüzeyin durumuna göre seçilen, birbirini tamamlayan beş çalışma.`,from:`Başlangıç`,request:`Bu hizmeti talep et`,note:`Süreler ve başlangıç fiyatları örnektir. Kesin bilgi, araç görüldükten sonra paylaşılır.`},packages:{title:`Paketler`,intro:`Üç paket, aynı özenle. Hangi işlerin dahil olduğunu satır satır karşılaştırın.`,note:`Fiyatlar örnektir ve araç tipine göre değişebilir. Kesin fiyat, aracı görmeden verilmez.`,cta:`Bu paketi talep et`,included:`Dahil`,excluded:`Dahil değil`},gallery:{title:`Önce / sonra`,intro:`Kaydırıcıyı sürükleyin. Sol taraf işlem öncesini, sağ taraf işlem sonrasını gösterir.`,before:`Önce`,after:`Sonra`,sliderLabel:`Önce ve sonra karşılaştırma konumu`,note:`Görseller temsilidir. Gerçek müşteri çalışmalarının fotoğrafları eklenene kadar çizimler kullanılır.`,casesLabel:`Karşılaştırma örnekleri`},process:{title:`Nasıl çalışır?`,steps:[{title:`Talebinizi gönderin`,text:`Formdan hizmeti, araç tipini ve uygun olduğunuz gün ile saati seçin. Talebiniz hazır bir WhatsApp mesajına dönüşür.`},{title:`Stüdyo yanıtlasın`,text:`Stüdyo mesajınızı inceler, aracın durumuna göre süre ve fiyat bilgisini paylaşır. Randevu, ancak stüdyonun yazılı onayıyla kesinleşir.`},{title:`Birlikte kontrol edin`,text:`Teslimde araç, ışık altında sizinle birlikte gözden geçirilir. Soru ve notlarınız o anda ele alınır.`}]},about:{title:`Acele edilmeyen bir atölye.`,lead:`PITLINE Auto Studio, aracın yüzeyine tek tek bakılan, işin süresinden çok sonucuna önem verilen kurgusal bir detailing stüdyosudur.`,principles:[{term:`Kontrollü ışık`,text:`Boyadaki çizik ve hare bakış açısına göre görünür olur. Bu yüzden çalışma alanı sabit ve güçlü bir ışıkla kurulur.`},{term:`Ölçülü ürün`,text:`Her yüzeye uygun ürün, gerektiği kadar kullanılır. Daha fazlası daha iyi sonuç anlamına gelmez.`},{term:`Açık iletişim`,text:`Başlamadan önce yapılacak iş ve süre yazılı olarak paylaşılır.`}],demo:`Bu metin demo içeriktir; gerçek bir işletmeyi tanımlamaz.`,alt:`Boya yüzeyinde dönen polisaj pedini gösteren soyut çizim`},appointment:{title:`Randevu talebi`,intro:`Formu doldurun, WhatsApp mesajınız hazırlansın. Bu yalnızca bir taleptir; randevu stüdyonun onayıyla kesinleşir.`,submit:`WhatsApp ile Talep Gönder`,labels:{service:`Hizmet veya paket`,vehicle:`Araç tipi`,date:`Tercih edilen tarih`,time:`Tercih edilen saat`,note:`Not (isteğe bağlı)`},placeholders:{service:`Seçin`,vehicle:`Seçin`,timeNoDate:`Önce tarih seçin`,time:`Saat seçin`,note:`Aracın modeli, mevcut durumu veya özel isteğiniz`},hints:{note:`En fazla 400 karakter.`,slots:`Saatler, stüdyonun çalışma saatlerine göre listelenir.`},result:{title:`Mesajınız hazırlandı`,text:`WhatsApp yeni sekmede açıldı. Talebin iletilmesi için mesajı orada göndermeniz gerekir. Bu bir randevu onayı değildir; stüdyo yanıt verene kadar randevu kesinleşmiş sayılmaz.`,retry:`WhatsApp açılmadıysa buraya tıklayın`,preview:`Gönderilecek mesajı göster`},errors:{service:`Lütfen bir hizmet veya paket seçin.`,vehicle:`Lütfen araç tipini seçin.`,date:`Lütfen bir tarih seçin.`,datePast:`Geçmiş bir tarih seçilemez.`,dateInvalid:`Lütfen geçerli bir tarih girin.`,time:`Lütfen bir saat seçin.`,noSlots:`Bugün için uygun saat kalmadı. Lütfen başka bir gün seçin.`,note:`Not en fazla 400 karakter olabilir.`,summary:`Formda eksik veya hatalı alanlar var. Lütfen işaretli alanları düzeltin.`},message:{service:`Hizmet`,vehicle:`Araç tipi`,date:`Tarih`,time:`Saat`,note:`Not`,noNote:`(belirtilmedi)`,closing:`Bu bir randevu talebidir. Uygunluğu ve fiyat bilgisini paylaşırsanız teşekkür ederim.`}},contact:{title:`Stüdyo`,intro:`Sorularınız için arayabilir ya da randevu talebi gönderebilirsiniz.`,phone:`Telefon`,address:`Adres`,hours:`Çalışma saatleri`,closed:`Kapalı`,directions:`Yol Tarifi Al`,mapLabel:`Google Haritalar'da aç`,mapNote:`Harita çizimi örnektir. Gerçek adres eklendiğinde bağlantı güncellenir.`,demoNotice:`Demo adres ve telefon: gerçek bir işletmeyi göstermez.`},footer:{blurb:`Oto detailing ve araç bakımı için kurgusal bir stüdyo şablonu.`,legal:`Bu site bir demo şablondur. Marka, adres, telefon ve fiyatlar kurgusaldır.`}},n={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},r=(e=``)=>String(e).replace(/[&<>"']/g,e=>n[e]),i=new Intl.NumberFormat(e.locale,{style:`currency`,currency:e.currency,maximumFractionDigits:0}),a=e=>i.format(e),o=`(min-width: 56rem)`;function s(){let{nav:n}=t,i=`
    <li><a href="#hizmetler">${r(n.services)}</a></li>
    <li><a href="#paketler">${r(n.packages)}</a></li>
    <li><a href="#galeri">${r(n.gallery)}</a></li>
    <li><a href="#iletisim">${r(n.contact)}</a></li>`;return`
  <header class="site-header">
    <div class="wrap site-header__bar">
      <a class="brand" href="#top" aria-label="${r(e.brand.name)}, sayfanın başı">
        <svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M9 25V7h9.5a5.5 5.5 0 0 1 0 11H14" fill="none" stroke="currentColor" stroke-width="3"/>
          <path d="M2 28h28" stroke="var(--lime)" stroke-width="2.5"/>
        </svg>
        <span class="brand__name">${r(e.brand.shortName)}<span class="brand__sub">${r(e.brand.tagline)}</span></span>
      </a>

      <nav class="nav" aria-label="Ana gezinme">
        <ul class="nav__list">${i}</ul>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--primary btn--sm" href="#randevu">${r(n.cta)}</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Gezinme menüsünü aç">
          <span class="nav-toggle__bars" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobil gezinme" hidden>
      <ul class="wrap mobile-nav__list">${i}
        <li><a class="mobile-nav__cta" href="#randevu">${r(n.cta)}</a></li>
      </ul>
    </nav>
  </header>`}function c(){let e=document.querySelector(`.nav-toggle`),t=document.getElementById(`mobile-nav`),n=n=>{e.setAttribute(`aria-expanded`,String(n)),e.setAttribute(`aria-label`,n?`Gezinme menüsünü kapat`:`Gezinme menüsünü aç`),t.hidden=!n};e.addEventListener(`click`,()=>n(t.hidden)),t.addEventListener(`click`,e=>{e.target.closest(`a`)&&n(!1)}),document.addEventListener(`keydown`,r=>{r.key===`Escape`&&!t.hidden&&(n(!1),e.focus())}),document.addEventListener(`click`,e=>{!t.hidden&&!e.target.closest(`.site-header`)&&n(!1)}),window.matchMedia(o).addEventListener(`change`,e=>{e.matches&&n(!1)})}var l={hero:{src:``,art:`hero`,alt:`Stüdyo ışığı altında duran koyu renkli spor coupe araç, yandan görünüm`,w:1600,h:900},about:{src:``,art:`detail`,alt:`Boya yüzeyinde dönen polisaj pedini gösteren soyut çizim`,w:1e3,h:1200},map:{src:``,art:`map`,alt:`Stüdyonun konumunu gösteren örnek harita çizimi`,w:1e3,h:700},compare:[{id:`boya`,label:`Boya düzeltme`,caption:`Çizik, hare ve su lekesi görünen boya yüzeyi; düzeltme sonrası net yansıma.`,before:{src:``,art:`paint-before`,alt:`Çizik, hare ve su lekeleri görünen mat boya yüzeyi`},after:{src:``,art:`paint-after`,alt:`Aynı boya yüzeyi düzeltme sonrası: net ve parlak yansıma`}},{id:`jant`,label:`Jant temizliği`,caption:`Fren tozu ve çamurla kaplı jant; arındırma sonrası temiz yüzey.`,before:{src:``,art:`wheel-before`,alt:`Fren tozu ve çamurla kaplanmış kirli jant`},after:{src:``,art:`wheel-after`,alt:`Aynı jant temizlik sonrası: parlak ve düzgün yüzey`}}]},u=0,d=e=>`${e}-${u+=1}`,f=e=>{let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)},p=e=>Math.round(e*10)/10,m=`#c9f31d`;function h(){let e=d(`hero-body`),t=e=>`
    <g transform="translate(${e} 300)">
      <circle r="54" fill="#090a0b"/>
      <circle r="38" fill="#171a1d" stroke="#4a5057" stroke-width="2"/>
      ${[0,72,144,216,288].map(e=>`<line x1="0" y1="0" x2="0" y2="-34" stroke="#6b7178" stroke-width="5" stroke-linecap="round" transform="rotate(${e})"/>`).join(``)}
      <circle r="7" fill="${m}"/>
    </g>`;return`<svg viewBox="0 0 900 400" preserveAspectRatio="xMaxYMax meet" focusable="false" aria-hidden="true">
    <defs>
      <clipPath id="${e}"><path id="${e}-p" d="M40 290 C40 262 58 246 100 240 L238 224 C290 176 372 146 468 146 C566 146 648 172 700 222 L812 238 C858 244 872 262 872 290 L872 300 L742 300 A62 62 0 0 0 618 300 L297 300 A62 62 0 0 0 173 300 L40 300 Z"/></clipPath>
    </defs>
    <rect width="900" height="400" fill="#101214"/>
    <g stroke="#ecebe4" stroke-opacity=".06" stroke-width="1">
      ${[80,160,240,320].map(e=>`<line x1="0" y1="${e}" x2="900" y2="${e}"/>`).join(``)}
    </g>
    <ellipse cx="456" cy="357" rx="420" ry="12" fill="#000" fill-opacity=".6"/>
    <path d="M40 290 C40 262 58 246 100 240 L238 224 C290 176 372 146 468 146 C566 146 648 172 700 222 L812 238 C858 244 872 262 872 290 L872 300 L742 300 A62 62 0 0 0 618 300 L297 300 A62 62 0 0 0 173 300 L40 300 Z" fill="#1c2024" stroke="#3a4046" stroke-width="1.5"/>
    <g clip-path="url(#${e})">
      <path d="M262 222 C300 184 372 162 462 162 C548 162 612 182 656 222 Z" fill="#0d0f10"/>
      <path d="M468 162 L468 222" stroke="#2a2f34" stroke-width="2"/>
      <polygon points="560,120 640,120 520,310 440,310" fill="#ecebe4" fill-opacity=".07"/>
      <polygon points="660,120 690,120 570,310 540,310" fill="#ecebe4" fill-opacity=".05"/>
    </g>
    <path d="M296 188 C350 158 410 148 470 148 C536 148 600 164 650 200" fill="none" stroke="#ecebe4" stroke-opacity=".75" stroke-width="2.5" stroke-linecap="round"/>
    <path class="art-pitline" d="M70 262 L812 252" fill="none" stroke="${m}" stroke-width="3" stroke-linecap="round" pathLength="1"/>
    <path d="M836 256 L866 266 L868 276 L832 268 Z" fill="#eaff8a"/>
    <path d="M44 262 L60 258 L60 270 L42 272 Z" fill="#5a1f1a"/>
    ${t(235)}${t(680)}
    <line x1="0" y1="354" x2="900" y2="354" stroke="${m}" stroke-opacity=".9" stroke-width="2"/>
    <line x1="0" y1="368" x2="900" y2="368" stroke="#ecebe4" stroke-opacity=".18" stroke-dasharray="18 14"/>
  </svg>`}function g(e){let t=f(e?7:11),n=d(`paint-blur`),r=`<path d="M-20 430 C180 330 420 300 820 360" fill="none" stroke="#ecebe4" stroke-opacity="${e?.22:.08}" stroke-width="2"/>`,i=``;if(!e){for(let e=0;e<46;e+=1){let e=t()*800,n=t()*600,r=30+t()*150,a=t()*Math.PI*2,o=a+.8+t()*1.6,s=e+Math.cos(a)*r,c=n+Math.sin(a)*r,l=e+Math.cos(o)*r,u=n+Math.sin(o)*r;i+=`<path d="M${p(s)} ${p(c)} A${p(r)} ${p(r)} 0 0 1 ${p(l)} ${p(u)}" fill="none" stroke="#ecebe4" stroke-opacity="${p(.05+t()*.12)}" stroke-width="${p(.6+t())}"/>`}for(let e=0;e<26;e+=1){let e=t()*800,n=t()*600,r=40+t()*140,a=-.9+t()*1.8;i+=`<line x1="${p(e)}" y1="${p(n)}" x2="${p(e+Math.cos(a)*r)}" y2="${p(n+Math.sin(a)*r)}" stroke="#ecebe4" stroke-opacity="${p(.1+t()*.22)}" stroke-width="${p(.5+t()*.8)}"/>`}for(let e=0;e<22;e+=1){let e=t()*800,n=t()*600,r=3+t()*7;i+=`<circle cx="${p(e)}" cy="${p(n)}" r="${p(r)}" fill="#ecebe4" fill-opacity=".05" stroke="#ecebe4" stroke-opacity=".22" stroke-width="1"/>`}}let a=e?`<g transform="rotate(-9 400 300)">
         <rect x="-100" y="214" width="1000" height="30" fill="#ecebe4" fill-opacity=".95"/>
         <rect x="-100" y="262" width="1000" height="8" fill="#ecebe4" fill-opacity=".55"/>
         <rect x="-100" y="288" width="1000" height="3" fill="${m}" fill-opacity=".9"/>
       </g>`:`<g transform="rotate(-9 400 300)" filter="url(#${n})">
         <rect x="-100" y="200" width="1000" height="104" fill="#ecebe4" fill-opacity=".2"/>
       </g>`;return`<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <defs><filter id="${n}" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="${e?0:34}"/></filter></defs>
    <rect width="800" height="600" fill="${e?`#12171d`:`#1a2027`}"/>
    ${a}
    ${r}
    ${i}
    ${e?``:`<rect width="800" height="600" fill="#ecebe4" fill-opacity=".05"/>`}
  </svg>`}function _(e){let t=f(e?3:5),n=[0,72,144,216,288].map(t=>{let n=(t-90)*Math.PI/180,r=Math.cos(n+Math.PI/2),i=Math.sin(n+Math.PI/2),a=(e,t)=>`${p(400+Math.cos(n)*e+r*t)},${p(300+Math.sin(n)*e+i*t)}`;return`<polygon points="${a(46,11)} ${a(150,21)} ${a(150,-21)} ${a(46,-11)}" fill="${e?`#c6cacd`:`#6c6358`}"/>`}).join(``),r=``;if(!e){for(let e=0;e<160;e+=1){let e=t()*Math.PI*2,n=40+t()*190,i=400+Math.cos(e)*n,a=300+Math.sin(e)*n;r+=`<circle cx="${p(i)}" cy="${p(a)}" r="${p(1+t()*4.5)}" fill="${t()>.5?`#3b3024`:`#7a6a55`}" fill-opacity="${p(.35+t()*.4)}"/>`}for(let e=0;e<9;e+=1){let e=t()*Math.PI*2,n=150+t()*70;r+=`<ellipse cx="${p(400+Math.cos(e)*n)}" cy="${p(300+Math.sin(e)*n)}" rx="${p(24+t()*40)}" ry="${p(8+t()*14)}" fill="#4a3d2e" fill-opacity=".45" transform="rotate(${p(t()*180)} ${p(400+Math.cos(e)*n)} ${p(300+Math.sin(e)*n)})"/>`}}return`<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <rect width="800" height="600" fill="#101214"/>
    <circle cx="400" cy="300" r="250" fill="#0a0b0c"/>
    <circle cx="400" cy="300" r="232" fill="none" stroke="#202428" stroke-width="3"/>
    <circle cx="400" cy="300" r="172" fill="${e?`#aeb3b7`:`#554d44`}"/>
    <circle cx="400" cy="300" r="150" fill="${e?`#171a1d`:`#1a1a19`}"/>
    <path d="M400 300 m-138 0 a138 138 0 0 1 96 -131" fill="none" stroke="${e?m:`#6f7a3a`}" stroke-width="30" stroke-linecap="butt" transform="rotate(130 400 300)"/>
    ${n}
    <circle cx="400" cy="300" r="42" fill="${e?`#d4d8db`:`#6c6358`}"/>
    <circle cx="400" cy="300" r="12" fill="${e?`#0b0c0d`:`#2a2620`}"/>
    ${e?`<path d="M262 250 A150 150 0 0 1 340 168" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="4" stroke-linecap="round"/>`:``}
    ${r}
  </svg>`}function v(){let e=f(21),t=``;for(let n=0;n<18;n+=1){let r=40+n*14,i=e()*360;t+=`<circle cx="500" cy="600" r="${r}" fill="none" stroke="#ecebe4" stroke-opacity="${p(.06+e()*.12)}" stroke-width="${p(1+e())}" stroke-dasharray="${p(60+e()*220)} ${p(30+e()*90)}" transform="rotate(${p(i)} 500 600)"/>`}return`<svg viewBox="0 0 1000 1200" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <rect width="1000" height="1200" fill="#14171a"/>
    <rect y="620" width="1000" height="580" fill="#0f1113"/>
    <line x1="0" y1="620" x2="1000" y2="620" stroke="${m}" stroke-width="3"/>
    ${t}
    <circle cx="500" cy="600" r="210" fill="#1c2024" stroke="#3a4046" stroke-width="2"/>
    <circle cx="500" cy="600" r="150" fill="none" stroke="#2c3238" stroke-width="22"/>
    <circle cx="500" cy="600" r="56" fill="${m}"/>
    <circle cx="500" cy="600" r="18" fill="#0b0c0d"/>
  </svg>`}function y(){return`<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <rect width="1000" height="700" fill="#16191c"/>
    <rect x="70" y="80" width="250" height="170" fill="#1d2226"/>
    <rect x="640" y="420" width="290" height="190" fill="#1d2226"/>
    <g fill="none" stroke="#2c3238" stroke-linecap="round">
      <path d="M-10 330 H1010" stroke-width="22"/>
      <path d="M480 -10 V710" stroke-width="22"/>
      <path d="M-10 120 L1010 200" stroke-width="12"/>
      <path d="M200 -10 L260 710" stroke-width="12"/>
      <path d="M760 -10 L720 710" stroke-width="12"/>
      <path d="M-10 540 H1010" stroke-width="10"/>
    </g>
    <g transform="translate(480 330)">
      <ellipse cx="0" cy="4" rx="20" ry="6" fill="#000" fill-opacity=".5"/>
      <path d="M0 0 C-22 -26 -34 -44 -34 -60 A34 34 0 0 1 34 -60 C34 -44 22 -26 0 0Z" fill="${m}"/>
      <circle cx="0" cy="-60" r="12" fill="#0b0c0d"/>
    </g>
  </svg>`}var b={hero:h,detail:v,map:y,"paint-before":()=>g(!1),"paint-after":()=>g(!0),"wheel-before":()=>_(!1),"wheel-after":()=>_(!0)};function x(e,{eager:t=!1,className:n=``}={}){if(!e)return``;let i=b[e.art]?b[e.art]():``,a=!!e.src,o=r(e.alt||``);return`<div class="media ${n}" data-art="${r(e.art||``)}"${a?``:` role="img" aria-label="${o}"`}>
    <div class="media__art" aria-hidden="true">${i}</div>
    ${a?`<img class="media__img" src="${r(e.src)}" alt="${o}"
            ${e.w&&e.h?`width="${e.w}" height="${e.h}"`:``}
            ${t?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`:``}
  </div>`}function S(e=document){e.querySelectorAll(`.media__img`).forEach(e=>{let t=e.closest(`.media`),n=()=>t.classList.add(`is-loaded`),r=()=>{t.setAttribute(`role`,`img`),t.setAttribute(`aria-label`,e.alt),e.remove()};e.complete?e.naturalWidth>0?n():r():(e.addEventListener(`load`,n,{once:!0}),e.addEventListener(`error`,r,{once:!0}))})}var C=[`Pazar`,`Pazartesi`,`Salı`,`Çarşamba`,`Perşembe`,`Cuma`,`Cumartesi`],w=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],T=e=>{let[t,n]=e.split(`:`).map(Number);return t*60+n},E=e=>`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`;function D(t){let n=e.hours.find(e=>e.days.includes(t));return n&&n.open&&n.close?n:null}function O(t=new Date){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:e.timezone,weekday:`short`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).formatToParts(t),r=e=>n.find(t=>t.type===e).value;return{day:w.indexOf(r(`weekday`)),minutes:Number(r(`hour`))*60+Number(r(`minute`))}}function k(t=new Date){return new Intl.DateTimeFormat(`en-CA`,{timeZone:e.timezone}).format(t)}function A(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||``);if(!t)return null;let[n,r,i]=[Number(t[1]),Number(t[2]),Number(t[3])],a=new Date(Date.UTC(n,r-1,i,12));return a.getUTCFullYear()!==n||a.getUTCMonth()!==r-1||a.getUTCDate()!==i?null:{utc:a,day:a.getUTCDay()}}function j(t){let n=A(t);return n?new Intl.DateTimeFormat(e.locale,{timeZone:`UTC`,day:`numeric`,month:`long`,year:`numeric`,weekday:`long`}).format(n.utc):t}function M(t,n=new Date){let r=A(t);if(!r)return{closed:!1,invalid:!0,dayName:``,slots:[]};let i=C[r.day],a=D(r.day);if(!a)return{closed:!0,dayName:i,slots:[]};let o=e.appointment.slotMinutes,s=T(a.open),c=T(a.close),l=O(n).minutes,u=t===k(n),d=[];for(let e=s;e+o<=c;e+=o)(!u||e>l)&&d.push(E(e));return{closed:!1,dayName:i,slots:d}}function N(e=new Date){let{day:t,minutes:n}=O(e),r=D(t);if(r&&n>=T(r.open)&&n<T(r.close))return{isOpen:!0,day:t,text:`Şimdi açık. Kapanış saati ${r.close}.`};for(let e=0;e<8;e+=1){let r=(t+e)%7,i=D(r);if(i&&(e>0||n<T(i.open)))return{isOpen:!1,day:t,text:`Şu an kapalı. Sonraki açılış: ${e===0?`Bugün`:e===1?`Yarın`:C[r]} ${i.open}.`}}return{isOpen:!1,day:t,text:`Şu an kapalı.`}}function P(){let e=N();return`<p class="status" data-status data-open="${e.isOpen}">
    <span class="status__dot" aria-hidden="true"></span>
    <span data-status-text>${r(e.text)}</span>
  </p>`}function F(){let e=N();document.querySelectorAll(`[data-status]`).forEach(t=>{t.dataset.open=String(e.isOpen),t.querySelector(`[data-status-text]`).textContent=e.text}),document.querySelectorAll(`[data-hours-row]`).forEach(t=>{t.dataset.hoursRow.split(`,`).map(Number).includes(e.day)?t.setAttribute(`aria-current`,`date`):t.removeAttribute(`aria-current`)})}function I(){let n=t.hero,i=e.location.addressLines[e.location.addressLines.length-1];return`
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__stage">
      <div class="hero__art">${x({...l.hero,alt:n.alt},{eager:!0})}</div>
      <div class="wrap hero__inner">
        <div class="hero__copy">
          <h1 class="hero__title" id="hero-title">${r(n.title)}</h1>
          <p class="hero__lead">${r(n.lead)}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#randevu">${r(n.primaryCta)}</a>
            <a class="btn btn--ghost" href="#hizmetler">${r(n.secondaryCta)}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <dl class="hero__facts">
        <div><dt class="sr-only">Durum</dt><dd>${P()}</dd></div>
        <div><dt class="sr-only">Konum</dt><dd>${r(i)} <span class="hero__demo">(demo adres)</span></dd></div>
        <div><dt class="sr-only">Telefon</dt><dd><a href="${r(e.contact.phoneHref)}">${r(e.contact.phoneDisplay)}</a> <span class="hero__demo">(demo)</span></dd></div>
      </dl>
    </div>
  </section>`}var L=[{id:`dis-yikama`,name:`Dış Yıkama`,summary:`İki kovalı elde yıkama, jant ve çamurluk içi temizliği, kontrollü kurulama.`,duration:`Yaklaşık 1 saat`,from:650},{id:`ic-detay`,name:`İç Detaylandırma`,summary:`Döşeme, plastik ve cam yüzeylerin derinlemesine temizliği; koltuk altı ve dar köşeler dahil.`,duration:`Yaklaşık 3 saat`,from:1800},{id:`boya-duzeltme`,name:`Boya Düzeltme`,summary:`Çizik, hare ve matlaşmayı kademeli polisajla gideren, ışık altında kontrol edilen işlem.`,duration:`1–2 gün`,from:6500},{id:`seramik-kaplama`,name:`Seramik Kaplama`,summary:`Düzeltilmiş boyanın üzerine uygulanan, yüzeyi korumaya yönelik seramik koruma katmanı.`,duration:`2–3 gün`,from:9e3},{id:`kapsamli-detay`,name:`Kapsamlı Detay`,summary:`Dış, iç, boya ve cam yüzeyleri tek planda bir araya getiren, araca özel hazırlanan çalışma.`,duration:`2–4 gün`,from:12500}],R=[{id:`yikama`,label:`İki kademeli elde yıkama`},{id:`jant`,label:`Jant ve çamurluk içi temizliği`},{id:`cam`,label:`Cam iç ve dış temizliği`},{id:`ic-temel`,label:`İç mekân vakumlama ve silme`},{id:`kil`,label:`Kil ile yüzey arındırma`},{id:`doseme`,label:`Koltuk ve döşeme derin temizliği`},{id:`cila`,label:`Tek kademeli boya parlatma`},{id:`duzeltme`,label:`Çok kademeli boya düzeltme`},{id:`seramik`,label:`Seramik kaplama`},{id:`kontrol`,label:`Teslimde ışık altında birlikte kontrol`}],z=[{id:`pit-stop`,name:`Pit Stop`,lang:`en`,tagline:`Düzenli bakım için temiz ve hızlı başlangıç.`,price:1250,duration:`Yaklaşık 2 saat`,includes:[`yikama`,`jant`,`cam`,`ic-temel`]},{id:`showroom`,name:`Showroom`,lang:`en`,tagline:`Yüzeyi arındırıp parlatan, iç mekânı derinlemesine temizleyen denge.`,price:3900,duration:`Yaklaşık 5 saat`,highlight:`Dengeli seçenek`,includes:[`yikama`,`jant`,`cam`,`ic-temel`,`kil`,`doseme`,`cila`,`kontrol`]},{id:`concours`,name:`Concours`,lang:`en`,tagline:`Boyayı düzeltip koruma katmanıyla tamamlayan en kapsamlı paket.`,price:14500,duration:`2–3 gün`,includes:[`yikama`,`jant`,`cam`,`ic-temel`,`kil`,`doseme`,`duzeltme`,`seramik`,`kontrol`]}],B={id:`oneri`,name:`Emin değilim, önerinizi isterim`};function V(){let e=t.services,n=L.map(t=>`<li class="service" data-reveal>
        <div class="service__main">
          <h3 class="service__name">${r(t.name)}</h3>
          <p class="service__text">${r(t.summary)}</p>
        </div>
        <div class="service__meta">
          <p class="service__duration">${r(t.duration)}</p>
          <p class="service__price"><span class="service__from">${r(e.from)}</span> ${a(t.from)}</p>
          <a class="link" href="#randevu" data-service="service:${r(t.id)}">${r(e.request)}<span class="sr-only">: ${r(t.name)}</span></a>
        </div>
      </li>`).join(``);return`
  <section class="section services" id="hizmetler" aria-labelledby="hizmetler-title">
    <div class="wrap services__grid">
      <div class="services__head">
        <h2 id="hizmetler-title" data-reveal>${r(e.title)}</h2>
        <p data-reveal>${r(e.intro)}</p>
        <p class="note">${r(e.note)}</p>
      </div>
      <ul class="services__list">${n}</ul>
    </div>
  </section>`}var H=`<svg class="feat__icon" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg>`,U=`<svg class="feat__icon" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false"><path d="M5 10h10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;function W(){let e=t.packages,n=z.map(t=>{let n=R.map(n=>{let i=t.includes.includes(n.id);return`<li class="feat ${i?`feat--on`:`feat--off`}">
            ${i?H:U}
            <span>${r(n.label)}<span class="sr-only"> (${r(i?e.included:e.excluded)})</span></span>
          </li>`}).join(``);return`<article class="pack${t.highlight?` pack--lead`:``}" data-reveal aria-labelledby="pack-${r(t.id)}">
        <header class="pack__head">
          <p class="pack__flag">${t.highlight?r(t.highlight):`&nbsp;`}</p>
          <h3 class="pack__name" id="pack-${r(t.id)}"${t.lang?` lang="${r(t.lang)}"`:``}>${r(t.name)}</h3>
          <p class="pack__tagline">${r(t.tagline)}</p>
          <p class="pack__price">${a(t.price)}<span class="pack__duration">${r(t.duration)}</span></p>
        </header>
        <ul class="pack__feats">${n}</ul>
        <a class="btn ${t.highlight?`btn--primary`:`btn--ghost`} pack__cta" href="#randevu" data-service="package:${r(t.id)}">${r(e.cta)}<span class="sr-only">: ${r(t.name)}</span></a>
      </article>`}).join(``);return`
  <section class="section packages" id="paketler" aria-labelledby="paketler-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="paketler-title" data-reveal>${r(e.title)}</h2>
        <p data-reveal>${r(e.intro)}</p>
      </div>
      <div class="packs">${n}</div>
      <p class="note packages__note">${r(e.note)}</p>
    </div>
  </section>`}var G=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
  <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
</svg>`;function K(){let e=t.gallery,n=l.compare,i=n[0],a=n.map((e,t)=>`<button class="case" type="button" data-case="${r(e.id)}" aria-pressed="${t===0}">${r(e.label)}</button>`).join(``);return`
  <section class="section gallery" id="galeri" aria-labelledby="galeri-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="galeri-title" data-reveal>${r(e.title)}</h2>
        <p data-reveal>${r(e.intro)}</p>
      </div>

      <div class="gallery__layout">
        <div class="compare" data-compare style="--pos: 50%">
          <div class="compare__layer" data-layer="after">${x(i.after)}</div>
          <div class="compare__layer compare__layer--before" data-layer="before">${x(i.before)}</div>
          <span class="compare__tag compare__tag--before">${r(e.before)}</span>
          <span class="compare__tag compare__tag--after">${r(e.after)}</span>
          <div class="compare__line">
            <button class="compare__handle" type="button" role="slider"
              aria-label="${r(e.sliderLabel)}" aria-orientation="horizontal"
              aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
              aria-valuetext="%50 ${r(e.before)}, %50 ${r(e.after)}">${G}</button>
          </div>
        </div>

        <div class="gallery__side">
          <div class="cases" role="group" aria-label="${r(e.casesLabel)}">${a}</div>
          <p class="gallery__caption" data-caption aria-live="polite">${r(i.caption)}</p>
          <p class="note">${r(e.note)}</p>
        </div>
      </div>
    </div>
  </section>`}function q(){let e=t.gallery,n=document.querySelector(`[data-compare]`);if(!n)return;let r=n.querySelector(`.compare__handle`),i=document.querySelector(`[data-caption]`),a=50,o=!1,s=t=>{a=Math.min(100,Math.max(0,t));let i=Math.round(a);n.style.setProperty(`--pos`,`${a}%`),r.setAttribute(`aria-valuenow`,String(i)),r.setAttribute(`aria-valuetext`,`%${i} ${e.before}, %${100-i} ${e.after}`)},c=e=>{let t=n.getBoundingClientRect();s((e.clientX-t.left)/t.width*100)};n.addEventListener(`pointerdown`,e=>{if(e.pointerType!==`mouse`||e.button===0){o=!0,n.classList.add(`is-dragging`);try{n.setPointerCapture(e.pointerId)}catch{}c(e),r.focus({preventScroll:!0})}}),n.addEventListener(`pointermove`,e=>{o&&c(e)});let u=()=>{o=!1,n.classList.remove(`is-dragging`)};n.addEventListener(`pointerup`,u),n.addEventListener(`pointercancel`,u),n.addEventListener(`lostpointercapture`,u),r.addEventListener(`keydown`,e=>{let t=e.shiftKey?10:4,n=null;e.key===`ArrowLeft`||e.key===`ArrowDown`?n=a-t:e.key===`ArrowRight`||e.key===`ArrowUp`?n=a+t:e.key===`Home`?n=0:e.key===`End`?n=100:e.key===`PageDown`?n=a-10:e.key===`PageUp`&&(n=a+10),n!==null&&(e.preventDefault(),s(n))}),document.querySelector(`.cases`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-case]`);if(!t)return;let r=l.compare.find(e=>e.id===t.dataset.case);r&&(document.querySelectorAll(`[data-case]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===t))),n.querySelector(`[data-layer="after"]`).innerHTML=x(r.after),n.querySelector(`[data-layer="before"]`).innerHTML=x(r.before),i.textContent=r.caption,S(n))}),s(50)}function J(){let e=t.process,n=e.steps.map((e,t)=>`<li class="step" data-reveal>
        <span class="step__no" aria-hidden="true">${t+1}</span>
        <h3 class="step__title"><span class="sr-only">${t+1}. adım: </span>${r(e.title)}</h3>
        <p class="step__text">${r(e.text)}</p>
      </li>`).join(``);return`
  <section class="section process" id="surec" aria-labelledby="surec-title">
    <div class="wrap">
      <h2 id="surec-title" data-reveal>${r(e.title)}</h2>
      <ol class="steps">${n}</ol>
    </div>
  </section>`}function Y(){let e=t.about,n=e.principles.map(e=>`<div class="principle">
        <dt>${r(e.term)}</dt>
        <dd>${r(e.text)}</dd>
      </div>`).join(``);return`
  <section class="section about" id="hakkinda" aria-labelledby="hakkinda-title">
    <div class="wrap about__grid">
      <div class="about__media">${x({...l.about,alt:e.alt})}</div>
      <div class="about__copy">
        <h2 id="hakkinda-title" data-reveal>${r(e.title)}</h2>
        <p class="about__lead">${r(e.lead)}</p>
        <dl class="principles">${n}</dl>
        <p class="note">${r(e.demo)}</p>
      </div>
    </div>
  </section>`}var X=400;function Z(){return[{group:`Hizmetler`,items:L.map(e=>({value:`service:${e.id}`,label:e.name}))},{group:`Paketler`,items:z.map(e=>({value:`package:${e.id}`,label:`${e.name} paketi`}))},{group:``,items:[{value:`other:${B.id}`,label:B.name}]}]}var Q=e=>Z().flatMap(e=>e.items).find(t=>t.value===e)?.label||``;function $({service:n,vehicle:r,date:i,time:a,note:o}){let s=t.appointment.message,c=(o||``).replace(/\r\n/g,`
`).trim();return[e.whatsapp.greeting,``,`${s.service}: ${Q(n)}`,`${s.vehicle}: ${r}`,`${s.date}: ${j(i)}`,`${s.time}: ${a}`,`${s.note}: ${c||s.noNote}`,``,s.closing].join(`
`)}function ee(t){let n=String(e.whatsapp.phone).replace(/\D/g,``);return`${e.whatsapp.baseUrl}${n}?text=${encodeURIComponent(t)}`}function te(){let n=t.appointment,i=Z().map(e=>{let t=e.items.map(e=>`<option value="${r(e.value)}">${r(e.label)}</option>`).join(``);return e.group?`<optgroup label="${r(e.group)}">${t}</optgroup>`:t}).join(``),a=e.appointment.vehicleTypes.map(e=>`<option value="${r(e)}">${r(e)}</option>`).join(``),o=(e,t,n,i=``)=>`
    <div class="field" data-field="${e}">
      <label class="field__label" for="f-${e}">${r(t)}</label>
      ${n}
      ${i?`<p class="field__hint" id="hint-${e}">${r(i)}</p>`:``}
      <p class="field__error" id="err-${e}" hidden></p>
    </div>`;return`
  <section class="section appointment" id="randevu" aria-labelledby="randevu-title">
    <div class="wrap appointment__grid">
      <div class="appointment__intro">
        <h2 id="randevu-title" data-reveal>${r(n.title)}</h2>
        <p>${r(n.intro)}</p>
      </div>

      <form class="form" data-form novalidate>
        <p class="form__summary" data-summary role="alert" hidden>${r(n.errors.summary)}</p>

        <div class="form__row">
          ${o(`service`,n.labels.service,`<select class="control" id="f-service" name="service" required aria-describedby="err-service">
              <option value="">${r(n.placeholders.service)}</option>${i}
            </select>`)}
          ${o(`vehicle`,n.labels.vehicle,`<select class="control" id="f-vehicle" name="vehicle" required aria-describedby="err-vehicle">
              <option value="">${r(n.placeholders.vehicle)}</option>${a}
            </select>`)}
        </div>

        <div class="form__row">
          ${o(`date`,n.labels.date,`<input class="control" id="f-date" name="date" type="date" required min="${k()}" aria-describedby="err-date">`)}
          ${o(`time`,n.labels.time,`<select class="control" id="f-time" name="time" required disabled aria-describedby="hint-time err-time">
              <option value="">${r(n.placeholders.timeNoDate)}</option>
            </select>`,n.hints.slots)}
        </div>

        ${o(`note`,n.labels.note,`<textarea class="control control--area" id="f-note" name="note" rows="4" maxlength="${X}"
            placeholder="${r(n.placeholders.note)}" aria-describedby="hint-note err-note"></textarea>`,n.hints.note)}

        <button class="btn btn--primary btn--block" type="submit">${r(n.submit)}</button>

        <div class="form__result" data-result role="status" hidden>
          <p class="form__result-title">${r(n.result.title)}</p>
          <p>${r(n.result.text)}</p>
          <p><a class="link" data-retry href="#" target="_blank" rel="noopener noreferrer">${r(n.result.retry)}</a></p>
          <details class="form__preview">
            <summary>${r(n.result.preview)}</summary>
            <pre data-preview></pre>
          </details>
        </div>
      </form>
    </div>
  </section>`}function ne(){let e=t.appointment,n=document.querySelector(`[data-form]`);if(!n)return;let i=e=>n.elements[e],a=n.querySelector(`[data-summary]`),o=n.querySelector(`[data-result]`),s=new Set,c=!1,l=(e,t)=>{let r=i(e),a=n.querySelector(`#err-${e}`);r.setAttribute(`aria-invalid`,t?`true`:`false`),n.querySelector(`[data-field="${e}"]`).classList.toggle(`has-error`,!!t),a.textContent=t,a.hidden=!t},u=()=>{let t=i(`time`),n=t.value,a=M(i(`date`).value),o=e.placeholders.timeNoDate,s=[];return!a.invalid&&!a.closed?(s=a.slots,o=s.length?e.placeholders.time:e.errors.noSlots.split(`.`)[0]):a.closed&&(o=`${a.dayName} günü kapalıyız`),t.innerHTML=`<option value="">${r(o)}</option>`+s.map(e=>`<option value="${e}">${e}</option>`).join(``),t.disabled=s.length===0,s.includes(n)&&(t.value=n),a},d={service:()=>i(`service`).value?``:e.errors.service,vehicle:()=>i(`vehicle`).value?``:e.errors.vehicle,date:()=>{let t=i(`date`).value;if(!t)return e.errors.date;if(!A(t))return e.errors.dateInvalid;if(t<k())return e.errors.datePast;let n=M(t);return n.closed?`${n.dayName} günü kapalıyız. Lütfen başka bir gün seçin.`:n.slots.length?``:e.errors.noSlots},time:()=>i(`time`).value?``:e.errors.time,note:()=>i(`note`).value.length>X?e.errors.note:``},f=e=>{let t=d[e]();return l(e,t),t===``},p=()=>{o.hidden=!0};n.addEventListener(`input`,e=>{let t=e.target.name;t&&(p(),t===`date`?(u(),f(`date`),(s.has(`time`)||c)&&f(`time`)):(s.has(t)||c)&&f(t))}),n.addEventListener(`change`,e=>{let t=e.target.name;t!==`date`&&t&&(s.add(t),f(t))}),n.addEventListener(`focusout`,e=>{let t=e.target.name;t&&d[t]&&(s.has(t)||i(t).value)&&(s.add(t),f(t))}),n.addEventListener(`submit`,e=>{e.preventDefault(),c=!0,p(),u();let t=[`service`,`vehicle`,`date`,`time`,`note`].filter(e=>!f(e));if(a.hidden=t.length===0,t.length){i(t[0]).focus();return}let r=$({service:i(`service`).value,vehicle:i(`vehicle`).value,date:i(`date`).value,time:i(`time`).value,note:i(`note`).value}),s=ee(r);n.querySelector(`[data-retry]`).href=s,n.querySelector(`[data-preview]`).textContent=r,o.hidden=!1,window.open(s,`_blank`,`noopener,noreferrer`)}),u()}function re(e){let t=document.getElementById(`f-service`);t&&[...t.options].some(t=>t.value===e)&&(t.value=e,t.dispatchEvent(new Event(`input`,{bubbles:!0})))}function ie(){let n=t.contact;return e.hours.map(e=>{let t=e.open&&e.close?`${r(e.open)} – ${r(e.close)}`:r(n.closed);return`<tr data-hours-row="${e.days.join(`,`)}"><th scope="row">${r(e.label)}</th><td>${t}</td></tr>`}).join(``)}function ae(){let n=t.contact,i=e.location;return`
  <section class="section contact" id="iletisim" aria-labelledby="iletisim-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="iletisim-title" data-reveal>${r(n.title)}</h2>
        <p data-reveal>${r(n.intro)}</p>
      </div>

      <div class="contact__grid">
        <div class="contact__info">
          <dl class="facts">
            <div class="fact">
              <dt>${r(n.phone)}</dt>
              <dd><a href="${r(e.contact.phoneHref)}">${r(e.contact.phoneDisplay)}</a></dd>
            </div>
            <div class="fact">
              <dt>${r(n.address)}</dt>
              <dd><address>${i.addressLines.map(r).join(`<br>`)}</address></dd>
            </div>
          </dl>
          ${i.isDemo?`<p class="demo-note"><strong>Demo bilgi.</strong> ${r(n.demoNotice)}</p>`:``}

          <table class="hours">
            <caption class="sr-only">${r(n.hours)}</caption>
            <tbody>${ie()}</tbody>
          </table>
          ${P()}

          <a class="btn btn--primary contact__cta" href="${r(i.mapsUrl)}" target="_blank" rel="noopener noreferrer">
            ${r(n.directions)}<span class="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>

        <div class="contact__map">
          <a class="map" href="${r(i.mapsUrl)}" target="_blank" rel="noopener noreferrer"
             aria-label="${r(n.mapLabel)} (yeni sekmede açılır)">
            ${x({...l.map,alt:l.map.alt})}
            <span class="map__label">${r(n.mapLabel)}</span>
          </a>
          <p class="note">${r(n.mapNote)}</p>
        </div>
      </div>
    </div>
  </section>`}function oe(){let{nav:n,footer:i}=t,{location:a,contact:o}=e,s=e.hours.map(e=>`<li><span>${r(e.label)}</span><span>${e.open&&e.close?`${r(e.open)} – ${r(e.close)}`:r(t.contact.closed)}</span></li>`).join(``);return`
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <p class="footer__name">${r(e.brand.name)}</p>
          <p>${r(i.blurb)}</p>
        </div>

        <nav aria-label="Alt gezinme">
          <h2 class="footer__title">Sayfa</h2>
          <ul class="footer__list">
            <li><a href="#hizmetler">${r(n.services)}</a></li>
            <li><a href="#paketler">${r(n.packages)}</a></li>
            <li><a href="#galeri">${r(n.gallery)}</a></li>
            <li><a href="#randevu">${r(n.cta)}</a></li>
            <li><a href="#iletisim">${r(n.contact)}</a></li>
          </ul>
        </nav>

        <div>
          <h2 class="footer__title">İletişim</h2>
          <address class="footer__address">${a.addressLines.map(r).join(`<br>`)}</address>
          ${a.isDemo?`<p class="footer__demo">Demo adres</p>`:``}
          <ul class="footer__list footer__contact">
            <li><a href="${r(o.phoneHref)}">${r(o.phoneDisplay)}</a></li>
            ${o.email?`<li><a href="mailto:${r(o.email)}">${r(o.email)}</a></li>`:``}
          </ul>
        </div>

        <div>
          <h2 class="footer__title">Çalışma saatleri</h2>
          <ul class="footer__list footer__hours">${s}</ul>
        </div>
      </div>

      <p class="footer__legal">
        <span>© ${new Date().getFullYear()} ${r(e.brand.name)}.</span>
        <span>${r(i.legal)}</span>
      </p>
    </div>
  </footer>`}function se(){if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window))return;document.documentElement.classList.add(`reveal-on`);let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`is-in`),e.unobserve(t.target))})},{rootMargin:`0px 0px -8% 0px`,threshold:.12});document.querySelectorAll(`[data-reveal]`).forEach(t=>e.observe(t))}document.getElementById(`app`).innerHTML=`
  ${s()}
  <main id="icerik" tabindex="-1">
    ${I()}
    ${V()}
    ${W()}
    ${K()}
    ${J()}
    ${Y()}
    ${te()}
    ${ae()}
  </main>
  ${oe()}
`,c(),q(),ne(),S(document),F(),window.setInterval(F,6e4),se(),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-service]`);t&&re(t.dataset.service)});