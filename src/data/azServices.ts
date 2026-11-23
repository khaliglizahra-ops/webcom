// Azerbaijani service landing pages, one per main service, each aimed at the
// search terms people in Azerbaijan use. Served at /az/services/<slug>.

export interface AzService {
    slug: string;
    /** matching servicesMenu.s<k> key, so cards and lists can link here */
    k: number;
    title: string;
    desc: string;
    h1: string;
    intro: string;
    forWho: string[];
    included: string[];
    steps: [string, string][];
    work: string[]; // project ids
    faq: { q: string; a: string }[];
    guides: string[]; // guide slugs
}

export const azServiceLabels = {
    eyebrow: 'Xidmət',
    forWho: 'Kimlər üçündür?',
    included: 'Nə daxildir?',
    steps: 'Necə işləyirik?',
    work: 'Nümunə işlərimiz',
    faq: 'Tez-tez verilən suallar',
    guides: 'Faydalı bələdçilər',
    others: 'Digər xidmətlər',
    quote: 'Pulsuz təklif alın',
    whatsapp: 'WhatsApp ilə yazın',
    visit: 'Sayta keç',
};

export const azServices: AzService[] = [
    {
        slug: 'sayt-sifarisi',
        k: 1,
        title: 'Sayt sifarişi və hazırlanması | WebCom',
        desc: 'Biznesiniz üçün telefonda sürətli açılan, Google-da tapılan və müştəri gətirən veb sayt. Xüsusi dizayn, aydın qiymət, açılışdan sonra dəstək.',
        h1: 'Sayt sifarişi: biznesiniz üçün işləyən veb sayt',
        intro: 'Müştəriləriniz sizi çox vaxt ilk dəfə telefon ekranında görür. Saytınız tez açılmalı, nə etdiyinizi bir baxışda izah etməli və zəng etməyi, yazmağı asanlaşdırmalıdır. Biz saytı hazır şablondan yox, işinizə uyğun olaraq sıfırdan hazırlayırıq.',
        forWho: [
            'Hələ saytı olmayan və yalnız Instagram ilə işləyən bizneslər',
            'Köhnə, telefonda pis görünən saytını yeniləmək istəyənlər',
            'Xidmət göstərən şirkətlər: usta, klinika, salon, hüquq bürosu və s.',
            'Restoran, kafe və mağazalar: menyu, ünvan və iş saatları bir yerdə',
        ],
        included: [
            'Biznesinizə xüsusi dizayn, hazır şablon yox',
            'Telefon, planşet və kompüterdə düzgün görünüş',
            'Zəng, WhatsApp və xəritə düymələri',
            'Azərbaycan dilində, istəyə görə rus və ingilis dillərində',
            'Google üçün əsas SEO quruluşu: başlıqlar, təsvirlər, sürət',
            'Əlaqə forması: sorğular birbaşa e-poçtunuza gəlir',
            'Domen və hostinqin qurulmasında kömək',
            'Açılışdan sonra dəstək və düzəlişlər',
        ],
        steps: [
            ['Tanışlıq', 'Biznesinizi, müştərilərinizi və saytdan gözləntinizi dinləyir, sonra yazılı təklif göndəririk.'],
            ['Dizayn', 'Saytın görünüşünü əvvəlcə sizə göstəririk; dəyişiklikləri birlikdə edirik.'],
            ['Hazırlanma və yoxlama', 'Saytı qurur, telefonda və kompüterdə ətraflı yoxlayırıq.'],
            ['Açılış və dəstək', 'Saytı yayımlayır, Google-a təqdim edir və sonra da yanınızda oluruq.'],
        ],
        work: ['blackinkart', 'bagizza', 'zet'],
        faq: [
            { q: 'Saytın qiyməti nə qədərdir?', a: 'Qiymət səhifə sayından, dizayndan, dil sayından və əlavə funksiyalardan asılıdır. Biznesinizi qısaca yazın, nəyin daxil olduğunu göstərən aydın qiymət təklifi göndərək.' },
            { q: 'Sayt neçə günə hazır olur?', a: 'Sadə saytlar adətən bir neçə həftəyə hazır olur. Mətn və şəkillərin vaxtında hazır olması müddəti ən çox qısaldan amildir.' },
            { q: 'Domen kimin adına olacaq?', a: 'Domen sizin adınıza qeydiyyatdan keçir; sayt sizindir.' },
            { q: 'Uzaqdan necə işləyirik?', a: 'Bütün iş onlayn aparılır: telefon, WhatsApp və ya görüntülü zənglə danışırıq, qaralamaları linklə göndəririk ki, istənilən cihazdan baxa biləsiniz.' },
        ],
        guides: ['sayt-qiymeti', 'instagram-ve-sayt'],
    },
    {
        slug: 'onlayn-magaza',
        k: 5,
        title: 'Onlayn mağaza hazırlanması | WebCom',
        desc: 'Məhsullarınızı onlayn satın: kataloq, səbət, kartla və ya qapıda ödəniş, WhatsApp ilə sifariş. Telefona uyğun, Google-da tapılan onlayn mağaza.',
        h1: 'Onlayn mağaza hazırlanması',
        intro: 'Instagram-da hər müştəriyə qiyməti ayrıca yazmaq yorucudur. Onlayn mağazada müştəri məhsulu özü seçir, səbətə atır və sifariş verir; siz isə sifarişləri bir yerdən izləyirsiniz.',
        forWho: [
            'Instagram və WhatsApp ilə satış edən, sifarişləri artan bizneslər',
            'Bakı daxilində və ya bütün Azərbaycana çatdırılma edən mağazalar',
            'Kataloqu böyük olan, məhsul axtarışı və filtr lazım olan satıcılar',
            'Şirniyyat, gül və hədiyyə mağazaları kimi onlayn sifariş qəbul edənlər',
        ],
        included: [
            'Məhsul kataloqu, kateqoriyalar və axtarış',
            'Səbət və sadə sifariş prosesi',
            'Kartla onlayn ödəniş və ya qapıda ödəniş',
            'Sifarişin WhatsApp ilə təsdiqlənməsi imkanı',
            'Çatdırılma qiymətləri və qaydaları',
            'Telefona uyğun, sürətli dizayn',
            'Məhsul səhifələri üçün SEO quruluşu',
            'Açılışdan sonra dəstək',
        ],
        steps: [
            ['Plan', 'Məhsullarınızı, ödəniş və çatdırılma qaydalarınızı birlikdə müəyyən edirik.'],
            ['Dizayn', 'Mağazanın görünüşünü əvvəlcə sizə göstəririk.'],
            ['Qurulma', 'Məhsulları yükləyir, ödənişi və sifariş axınını sınayırıq.'],
            ['Açılış', 'Mağazanı açır, necə işlədiyini göstərir və sonra da dəstək veririk.'],
        ],
        work: ['petshop6', 'piercingland', 'balkabagi'],
        faq: [
            { q: 'Başlanğıc üçün kartla ödəniş mütləqdir?', a: 'Xeyr. Bir çox mağaza sifarişi WhatsApp ilə təsdiqləyib qapıda ödənişlə başlayır; kartla ödəniş sonradan əlavə oluna bilər.' },
            { q: 'Kartla onlayn ödəniş üçün nə lazımdır?', a: 'Adətən bankınızla internet-ekvayrinq müqaviləsi. Hansı ödəniş üsulunun sizə uyğun olduğunu birlikdə müəyyən edirik.' },
            { q: 'Məhsulları sonra necə dəyişəcəyəm?', a: 'Mağazanın necə idarə olunacağını əvvəlcədən razılaşdırırıq: dəyişiklikləri özünüz edə və ya bizdən istəyə bilərsiniz.' },
        ],
        guides: ['onlayn-magaza-acmaq', 'sayt-qiymeti'],
    },
    {
        slug: 'seo',
        k: 2,
        title: 'SEO xidməti: Google-da yuxarı çıxın | WebCom',
        desc: 'Saytınız və Google Biznes profiliniz üçün SEO: texniki yoxlama, açar sözlər, məzmun, sürət və Xəritələrdə görünmə. Saxta vədlər yox, ölçülən iş.',
        h1: 'SEO xidməti və Google Xəritələrdə görünmə',
        intro: 'İnsanlar xidmət axtaranda ilk baxdıqları yer Google-dur. SEO saytınızın və biznes profilinizin bu axtarışlarda görünməsi üçün görülən işdir. Heç kim “bir həftəyə birinci yer” vəd edə bilməz; biz nəyi niyə etdiyimizi açıq izah edir və nəticəni Search Console-da birlikdə izləyirik.',
        forWho: [
            'Saytı olan, amma Google-da tapılmayan bizneslər',
            'Yaxınlıqdakı müştərilərə xidmət göstərənlər: salon, kafe, usta, klinika',
            'Yeni sayt açan və onu başdan düzgün qurmaq istəyənlər',
            'Azərbaycan, rus və ingilis dillərində axtarışlarda görünmək istəyənlər',
        ],
        included: [
            'Saytın texniki SEO yoxlaması və düzəlişlər',
            'Sürətin və mobil görünüşün yaxşılaşdırılması',
            'İnsanların axtardığı açar sözlərin araşdırılması',
            'Səhifə başlıqları və təsvirlərinin yazılması',
            'Google Biznes profilinin qurulması və doldurulması',
            'Google Search Console qurulması və izləmə',
            'Faydalı məzmun və bələdçi yazıları',
            'Görülən işlər barədə müntəzəm, sadə hesabat',
        ],
        steps: [
            ['Yoxlama', 'Saytınıza və rəqiblərinizə baxır, əsas problemləri yazırıq.'],
            ['Plan', 'Hansı axtarışlarda görünmək istədiyinizi birlikdə seçirik.'],
            ['Tətbiq', 'Texniki düzəlişləri, mətnləri və Google profilini hazırlayırıq.'],
            ['İzləmə', 'Nəticələri Search Console-da izləyir və planı yeniləyirik.'],
        ],
        work: [],
        faq: [
            { q: 'SEO nə vaxt nəticə verir?', a: 'İlk dəyişikliklər adətən bir neçə həftədən sonra görünür, rəqabətli sözlərdə isə bir neçə ay çəkir. SEO birdəfəlik yox, davamlı işdir.' },
            { q: 'Birinci yerə zəmanət verirsiniz?', a: 'Xeyr. Google sıralamasına heç kim zəmanət verə bilməz; belə vəd verənlərdən ehtiyatlı olun. Biz nəyi etdiyimizi açıq göstəririk.' },
            { q: 'Saytımı başqası hazırlayıb, SEO edə bilərsiniz?', a: 'Bəli, əksər hallarda mövcud saytla işləyə bilirik. Əvvəlcə saytı yoxlayıb nəyin mümkün olduğunu deyirik.' },
        ],
        guides: ['google-xeritelerde-biznes', 'sayt-qiymeti'],
    },
    {
        slug: 'reklam',
        k: 3,
        title: 'Instagram və Google reklamı idarəetməsi | WebCom',
        desc: 'Instagram, Facebook və Google reklamlarınızı büdcənizə uyğun qurur və idarə edirik: hədəf auditoriya, reklam mətni və nəticələrin sadə hesabatı.',
        h1: 'Instagram və Google reklamlarının idarə edilməsi',
        intro: 'Reklam büdcəsi tez xərclənir; əsas sual onun geriyə nə qaytardığıdır. Reklamlarınızı düzgün auditoriyaya göstərir, nəyin işlədiyini ölçür və büdcəni işləməyəndən işləyənə keçiririk.',
        forWho: [
            'Instagram-da “boost” edən, amma nəticəsini bilməyənlər',
            'Yeni məhsul və ya kampaniya elan etmək istəyənlər',
            'Google-da “… sifarişi” kimi axtarışlarda dərhal görünmək istəyənlər',
            'Saytına və ya WhatsApp-a daha çox sorğu gətirmək istəyən bizneslər',
        ],
        included: [
            'Instagram və Facebook reklam kampaniyaları',
            'Google axtarış reklamları',
            'Hədəf auditoriya və büdcə planı',
            'Reklam mətnləri və vizual tövsiyələr',
            'Sorğuların və satışların ölçülməsi',
            'Müntəzəm, sadə dildə hesabat',
        ],
        steps: [
            ['Məqsəd', 'Reklamdan nə gözlədiyinizi və büdcənizi müəyyən edirik.'],
            ['Qurulma', 'Auditoriyanı, mətnləri və vizualları hazırlayıb kampaniyanı açırıq.'],
            ['Ölçmə', 'Hansı reklamın sorğu gətirdiyini izləyirik.'],
            ['Yaxşılaşdırma', 'İşləməyəni dayandırır, işləyəni gücləndiririk.'],
        ],
        work: [],
        faq: [
            { q: 'Minimum reklam büdcəsi nə qədərdir?', a: 'Bu, sahədən və məqsəddən asılıdır. Kiçik büdcə ilə başlayıb nəticəyə görə artırmağı tövsiyə edirik.' },
            { q: 'Reklam büdcəsi xidmət haqqına daxildir?', a: 'Adətən reklam büdcəsi birbaşa Meta və ya Google-a ödənilir, idarəetmə haqqı isə ayrıca razılaşdırılır.' },
        ],
        guides: ['instagram-ve-sayt'],
    },
];

export const azServiceSlugFor = (k: number) => azServices.find(s => s.k === k)?.slug;
