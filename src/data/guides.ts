// Azerbaijani guides: practical articles aimed at what business owners in
// Azerbaijan search for. Served only under /az/guides.

export type Block = { h?: string; p?: string; ul?: string[] };

export interface Guide {
    slug: string;
    title: string;
    desc: string;
    tag: string;
    date: string; // ISO
    minutes: number;
    lead: string;
    blocks: Block[];
    faq?: { q: string; a: string }[];
}

export const guidesIntro = {
    title: 'Bələdçilər: sayt, onlayn mağaza və Google haqqında | WebCom',
    desc: 'Sayt sifarişi, onlayn mağaza açmaq, Google Xəritələrdə görünmək və Instagram ilə saytı birlikdə istifadə etmək haqqında sadə dildə praktik bələdçilər.',
    heading: 'Bələdçilər',
    sub: 'Saytınızı, onlayn mağazanızı və Google-da görünməyinizi düşünərkən işinizə yarayacaq praktik yazılar. Sadə dildə, reklamsız.',
    read: 'dəq oxu',
    back: 'Bütün bələdçilər',
    cta: 'Pulsuz təklif alın',
    faq: 'Tez-tez verilən suallar',
};

export const guides: Guide[] = [
    {
        slug: 'sayt-qiymeti',
        title: 'Sayt neçəyə başa gəlir? Qiymətə təsir edən 7 əsas amil',
        desc: 'Veb saytın qiyməti niyə bu qədər fərqlidir? Səhifə sayı, dizayn, onlayn ödəniş, dil sayı və digər amillər qiymətə necə təsir edir: sifarişdən əvvəl bilməli olduqlarınız.',
        tag: 'Sayt sifarişi',
        date: '2026-11-23',
        minutes: 5,
        lead: '“Sayt neçəyə olar?” sualının dürüst cavabı budur: nə istədiyinizdən asılıdır. Bir səhifəlik vizit kartı ilə yüzlərlə məhsulu olan onlayn mağaza arasında böyük fərq var. Bu yazıda qiyməti formalaşdıran amilləri sadə dillə izah edirik ki, təklif alanda nəyə pul ödədiyinizi biləsiniz.',
        blocks: [
            { h: '1. Səhifə sayı və məzmun' },
            { p: 'Ana səhifə, xidmətlər, haqqımızda və əlaqə: kiçik biznes üçün çox vaxt bu kifayətdir. Hər yeni səhifə əlavə dizayn, mətn və yoxlama deməkdir. Mətnləri və şəkilləri özünüz hazırlayırsınızsa, iş həm sürətlənir, həm də ucuzlaşır.' },
            { h: '2. Hazır şablon, yoxsa xüsusi dizayn' },
            { p: 'Hazır şablon tez və ucuz başa gəlir, amma minlərlə başqa sayta bənzəyir. Xüsusi dizayn brendinizə uyğun qurulur və rəqiblərdən fərqlənməyə kömək edir. Orta yol da var: yoxlanılmış bir struktur üzərində sizin rənglərinizlə və şəkillərinizlə hazırlanan sayt.' },
            { h: '3. Onlayn ödəniş və mağaza funksiyaları' },
            { p: 'Məhsul kataloqu, səbət, kartla ödəniş, stok izləmə və çatdırılma seçimləri saytı sadə “vitrin”dən tam onlayn mağazaya çevirir. Bu funksiyalar ən çox vaxt aparan hissədir. Bəzən başlanğıc üçün sifarişi WhatsApp ilə qəbul etmək kifayət edir, kartla ödəniş isə sonradan əlavə olunur.' },
            { h: '4. Dil sayı' },
            { p: 'Azərbaycan dilində sayt bir işdir; rus və ingilis dillərini əlavə etmək isə hər səhifənin tərcüməsi, yoxlanması və axtarış sistemləri üçün ayrıca qurulması deməkdir. Müştərilərinizin hansı dildə axtardığını əvvəlcədən düşünün.' },
            { h: '5. SEO və Google-da görünmə' },
            { p: 'Sayt hazır olanda Google onu avtomatik birinci sıraya qoymur. Düzgün başlıqlar, sürətli açılma, Google Biznes profili və müntəzəm faydalı məzmun lazımdır. Bəzi studiyalar bunu qiymətə daxil edir, bəziləri ayrıca xidmət kimi təklif edir; təklifdə bunu mütləq soruşun.' },
            { h: '6. Domen, hostinq və illik xərclər' },
            { p: 'Saytın hazırlanması bir dəfəlik iş olsa da, domen (məsələn, sizinbiznes.az) və hostinq hər il yenilənir. Təklif alarkən bu xərclərin illik nə qədər olacağını və kimin adına qeydiyyatdan keçdiyini öyrənin. Domen mütləq sizin adınıza olmalıdır.' },
            { h: '7. Açılışdan sonrakı dəstək' },
            { p: 'Qiymət dəyişikliyi, yeni məhsul, kampaniya: sayt yaşayan bir şeydir. Açılışdan sonra kiçik düzəlişlərin necə ediləcəyini və bunun pulsuz, yoxsa ödənişli olduğunu əvvəlcədən razılaşdırın.' },
            { h: 'Təklif alanda nələri soruşmalı?' },
            { ul: [
                'Qiymətə hansı səhifələr və funksiyalar daxildir?',
                'Saytın telefonda necə görünəcəyini əvvəlcədən görə biləcəyəm?',
                'Domen və hostinq kimin adına olacaq və illik nə qədərdir?',
                'Google-da görünmə üçün konkret olaraq nə edəcəksiniz?',
                'Açılışdan sonra düzəlişlər necə olacaq?',
            ] },
            { p: 'WebCom olaraq hər layihəyə biznesi dinləməklə başlayırıq və qiymətə nəyin daxil olduğunu yazılı şəkildə göndəririk. Saytınızın qiymətini öyrənmək üçün biznesinizi bir neçə cümlə ilə yazın; heç bir öhdəlik yoxdur.' },
        ],
        faq: [
            { q: 'Ən sadə sayt hansıdır?', a: 'Bir səhifəlik vizit kartı sayt: kim olduğunuz, nə etdiyiniz, ünvanınız və zəng, WhatsApp düymələri. Bir çox kiçik biznes üçün yaxşı başlanğıcdır və sonradan böyüdülə bilər.' },
            { q: 'Sayt neçə günə hazır olur?', a: 'Sadə sayt adətən bir neçə həftəyə, onlayn mağaza isə məhsul sayından asılı olaraq daha uzun müddətə hazır olur. Mətn və şəkillərin vaxtında hazır olması müddəti ən çox qısaldan amildir.' },
        ],
    },
    {
        slug: 'onlayn-magaza-acmaq',
        title: 'Onlayn mağaza necə açılır? Addım-addım bələdçi',
        desc: 'Instagram-dan sifariş qəbul edirsiniz və artıq öz onlayn mağazanızı istəyirsiniz? Məhsul hazırlığından ödənişə və çatdırılmaya qədər onlayn mağaza açmağın addımları.',
        tag: 'Onlayn mağaza',
        date: '2026-11-23',
        minutes: 6,
        lead: 'Bir çox biznes satışa Instagram və WhatsApp ilə başlayır. Bu yaxşı başlanğıcdır, amma sifarişlər artdıqca hər müştəriyə qiyməti ayrıca yazmaq, stoku yadda saxlamaq və ödənişləri izləmək çətinləşir. Onlayn mağaza bu işin böyük hissəsini sizin yerinizə görür.',
        blocks: [
            { h: '1. Nə satdığınızı və kimə satdığınızı müəyyənləşdirin' },
            { p: 'Məhsul siyahınızı, qiymətlərinizi və əsas müştərinizi yazın. Yalnız Bakı daxilində satırsınız, yoxsa bütün Azərbaycana göndəriş edirsiniz? Bu sualın cavabı çatdırılma və ödəniş seçimlərini müəyyən edir.' },
            { h: '2. Məhsul şəkilləri və təsvirləri' },
            { p: 'Onlayn mağazada müştəri məhsula toxuna bilmir; onun yerinə şəkil və mətn danışır. Hər məhsul üçün aydın, işıqlı şəkillər, ölçü, material və qiymət hazırlayın. Telefonla çəkilmiş, amma səliqəli şəkillər də yaxşı nəticə verir.' },
            { h: '3. Domen və mağaza platforması' },
            { p: 'Mağazanın adı (domen) qısa və yadda qalan olmalıdır. Platforma seçimi məhsul sayından və büdcədən asılıdır: hazır platformalar tez başlamağa imkan verir, xüsusi hazırlanmış mağaza isə dizaynda və funksiyalarda daha çevikdir.' },
            { h: '4. Ödəniş üsulları' },
            { p: 'Azərbaycanda müştərilər həm kartla, həm də qapıda nağd ödənişə öyrəşib. Başlanğıcda qapıda ödəniş və ya sifarişin WhatsApp ilə təsdiqi kifayət edə bilər; satış artdıqca bank kartı ilə onlayn ödəniş əlavə olunur. Onlayn ödəniş üçün bankınızla internet-ekvayrinq müqaviləsi bağlamaq lazım olacaq.' },
            { h: '5. Çatdırılma' },
            { p: 'Çatdırılmanın qiymətini və müddətini saytda açıq yazın; müştəri ödəniş səhifəsində sürprizlə qarşılaşmamalıdır. Müəyyən məbləğdən yuxarı sifarişlərə pulsuz çatdırılma səbətin dəyərini artırmağın sadə yoludur.' },
            { h: '6. Mobil görünüş' },
            { p: 'Müştərilərinizin böyük hissəsi mağazanı telefondan açacaq. Səbət, ödəniş və əlaqə düymələri barmaqla rahat basılmalı, səhifələr tez açılmalıdır. Mağazanı açmazdan əvvəl bir neçə dostunuzdan telefonla sifariş verməyi sınamalarını xahiş edin.' },
            { h: '7. Açılışdan sonra: insanlar mağazanı necə tapacaq?' },
            { p: 'Mağazanın linkini Instagram profilinizə, WhatsApp statusuna və vizit kartlarına əlavə edin. Google-da tapılmaq üçün məhsul səhifələrinin başlıqlarını insanların axtardığı sözlərlə yazın və Google Biznes profilinizi yaradın.' },
            { h: 'Açılışdan əvvəl yoxlama siyahısı' },
            { ul: [
                'Məhsul siyahısı və qiymətlər hazırdır',
                'Hər məhsul üçün şəkil və təsvir var',
                'Ödəniş və çatdırılma qaydaları saytda yazılıb',
                'Domen seçilib və sizin adınıza qeydiyyatdadır',
                'Qaytarma qaydaları və əlaqə məlumatları görünən yerdədir',
            ] },
            { p: 'Məsələn, Ankarada bir pet shop üçün hazırladığımız Pet Shop 6 mağazasında müştəri səbəti doldurur və sifarişi WhatsApp-da təsdiqləyir. Bu, kartla ödəniş inteqrasiyası olmadan tez başlamağın sadə yoludur. Sizin üçün hansı yolun uyğun olduğunu birlikdə müəyyən edə bilərik.' },
        ],
        faq: [
            { q: 'Neçə məhsulla başlamaq olar?', a: 'Bir neçə məhsulla da başlamaq olar. Əsas odur ki, hər məhsulun şəkli, qiyməti və təsviri tam olsun; yeni məhsulları sonra əlavə etmək asandır.' },
            { q: 'Instagram-dan satışı dayandırmalıyam?', a: 'Xeyr. Instagram müştəri cəlb etmək üçün qalır, onlayn mağaza isə sifarişi rahatlaşdırır. Profildəki link müştərini birbaşa mağazaya aparır.' },
        ],
    },
    {
        slug: 'google-xeritelerde-biznes',
        title: 'Biznesi Google Xəritələrə necə əlavə etmək olar?',
        desc: 'Yaxınlıqda axtaran müştərilər sizi tapsın: Google Biznes profilini yaratmaq, təsdiqləmək və düzgün doldurmaq üçün addım-addım bələdçi.',
        tag: 'Google və Xəritələr',
        date: '2026-11-23',
        minutes: 5,
        lead: '“Yaxınlıqda kafe”, “Nərimanovda bərbər”, “Bakıda çiçək mağazası”: insanlar belə axtarışlarda ilk növbədə xəritədəki nəticələrə baxır. Orada görünmək üçün pulsuz Google Biznes profili lazımdır. Bu yazıda onu necə yaratmağı və düzgün doldurmağı izah edirik.',
        blocks: [
            { h: '1. Profili yaradın' },
            { p: 'google.com/business ünvanına daxil olun, Google hesabınızla giriş edin və biznesinizin adını yazın. Ad lövhənizdə və sənədlərinizdə necədirsə, elə yazın; ada açar sözlər əlavə etmək Google qaydalarına ziddir və profilin dayandırılmasına səbəb ola bilər.' },
            { h: '2. Kateqoriya seçin' },
            { p: 'Əsas kateqoriya ən vacib seçimdir: “Restoran”, “Gözəllik salonu”, “Elektrik ustası” və s. Ən dəqiq uyğun gələni seçin, sonra əlavə kateqoriyalar da qeyd edə bilərsiniz.' },
            { h: '3. Ünvan və ya xidmət ərazisi' },
            { p: 'Müştərilər sizə gəlirsə, dəqiq ünvanı daxil edin və xəritədə nöqtəni düzgün yerə qoyun. Siz müştəriyə gedirsinizsə (usta, çatdırılma, səyyar xidmət), ünvanı gizlədib xidmət göstərdiyiniz şəhər və rayonları seçə bilərsiniz.' },
            { h: '4. Təsdiqləmə' },
            { p: 'Google biznesin həqiqətən mövcud olduğunu yoxlayır. Bu, telefon, e-poçt, video və ya poçt kartı ilə ola bilər; hansı üsulun təklif olunacağını Google özü müəyyən edir. Təsdiqdən sonra profil axtarışda və xəritədə görünməyə başlayır.' },
            { h: '5. Profili tam doldurun' },
            { ul: [
                'İş saatları (bayram günləri daxil)',
                'Telefon nömrəsi və WhatsApp',
                'Saytınızın linki',
                'Mağazanın içindən və çölündən real şəkillər',
                'Xidmətlər, qiymətlər və ya menyu',
                'Biznesinizi aydın izah edən qısa təsvir',
            ] },
            { h: '6. Rəylər toplayın və cavab verin' },
            { p: 'Rəylər xəritədə yuxarı çıxmağa ən çox təsir edən amillərdəndir. Razı qalan müştərilərdən rəy yazmağı xahiş edin və hər rəyə, mənfi olanlara da, nəzakətlə cavab verin. Saxta rəy almayın: Google bunu aşkar edir və profili cəzalandıra bilər.' },
            { h: '7. Profili saytla birləşdirin' },
            { p: 'Google həm profilinizə, həm də saytınıza baxır. Saytdakı ünvan, telefon və iş saatları profildəki ilə eyni olmalıdır. Sayt tez açılırsa və nə etdiyinizi aydın deyirsə, profil də güclənir.' },
            { p: 'Profilin qurulması, düzgün doldurulması və saytla birlikdə işləməsi WebCom-un “Google və Xəritələr” xidmətinə daxildir. Kömək lazımdırsa, bizə yazın.' },
        ],
        faq: [
            { q: 'Google Biznes profili pulludur?', a: 'Xeyr, profil tamamilə pulsuzdur. Ödəniş yalnız Google reklamlarından istifadə etmək istəsəniz tələb olunur.' },
            { q: 'Ünvanım yoxdursa, profil aça bilərəm?', a: 'Bəli. Müştərilərə öz yerlərində xidmət göstərirsinizsə, ünvanı gizlədə və yalnız xidmət ərazisini göstərə bilərsiniz.' },
        ],
    },
    {
        slug: 'instagram-ve-sayt',
        title: 'Instagram səhifəm var, sayta ehtiyac varmı?',
        desc: 'Instagram satış üçün güclüdür, amma kifayət edirmi? Sayt ilə Instagram-ın fərqləri, saytın verdiyi üstünlüklər və ikisini birlikdə necə istifadə etmək olar.',
        tag: 'Sayt sifarişi',
        date: '2026-11-23',
        minutes: 4,
        lead: 'Azərbaycanda bir çox biznes Instagram üzərindən böyüyür və bu təbiidir: müştərilər oradadır. Amma “qiymət?” sualına hər dəfə direktdə cavab vermək, Google-da tapılmamaq və hesab bloklananda hər şeyi itirmək riski də oradadır.',
        blocks: [
            { h: 'Instagram-ın güclü tərəfləri' },
            { p: 'Sürətli başlamaq, vizual məzmun və izləyicilərlə birbaşa ünsiyyət. Yeni məhsulları göstərmək, kampaniyaları elan etmək və müştərilərlə yaxın əlaqə qurmaq üçün əla kanaldır.' },
            { h: 'Instagram-ın məhdudiyyətləri' },
            { ul: [
                'Google axtarışında demək olar ki, görünmür',
                'Məhsulları axtarmaq, filtrləmək və müqayisə etmək çətindir',
                'Hər qiymət sualına əl ilə cavab verməlisiniz',
                'Hesab bloklansa və ya sındırılsa, müştəri bazanıza çıxışı itirə bilərsiniz',
                'Alqoritm dəyişəndə postlarınız daha az insana çatır',
            ] },
            { h: 'Saytın verdikləri' },
            { p: 'Sayt sizin öz ərazinizdir: heç bir platforma onu bağlaya bilməz. İnsanlar “Bakıda tort sifarişi” kimi sorğularla Google-da axtaranda sizi tapır. Qiymətlər, menyu, ünvan və iş saatları bir yerdə olur, eyni suala gündə on dəfə cavab vermək lazım gəlmir.' },
            { h: 'Ən yaxşı yol: ikisi birlikdə' },
            { p: 'Instagram diqqəti cəlb edir, sayt isə satışı və etibarı təmin edir. Bioda saytın linki, saytda isə Instagram-a və WhatsApp-a düymələr olsun: müştəri hansı yoldan gəlirsə gəlsin, sifarişə çatmaq asan olur.' },
            { h: 'Haradan başlamalı?' },
            { p: 'Böyük mağaza ilə başlamaq məcburi deyil. Bir səhifəlik sayt (kim olduğunuz, nə satdığınız, qiymətlər və WhatsApp düyməsi) çox vaxt ilk addım üçün kifayətdir. Ehtiyac artdıqca kataloq və onlayn ödəniş əlavə olunur.' },
        ],
        faq: [
            { q: 'Saytım olsa, Instagram-ı buraxmalıyam?', a: 'Xeyr. Sayt Instagram-ı əvəz etmir, onu tamamlayır: Instagram yeni müştəri gətirir, sayt isə onların sifariş verməsini asanlaşdırır.' },
        ],
    },
];
