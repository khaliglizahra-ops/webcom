// 600bal sınaq: question bank.
// SAMPLE questions only. A content tutor should replace them before the real exam.
// Each question: subject, topic (used for "weak topics"), text, options, answer (index of correct option, 0-based).
// Note: this is a static page, so answers are visible in the source. Fine for a free practice test.
window.DERSIO_EXAM = {
  title: "Dersio 600bal sınağı",
  edition: "Nümunə sınaq",
  durationMinutes: 45,
  maxScore: 700,
  subjects: ["Riyaziyyat", "Azərbaycan dili", "İngilis dili"],
  questions: [
    // Riyaziyyat
    { subject: "Riyaziyyat", topic: "Tənliklər", text: "2x + 7 = 19 olarsa, x neçədir?", options: ["5", "6", "7", "13"], answer: 1 },
    { subject: "Riyaziyyat", topic: "Faiz", text: "240 ədədinin 15%-i neçədir?", options: ["24", "30", "36", "40"], answer: 2 },
    { subject: "Riyaziyyat", topic: "Həndəsə", text: "Üçbucağın iki bucağı 50° və 70°-dir. Üçüncü bucaq neçə dərəcədir?", options: ["50°", "60°", "70°", "80°"], answer: 1 },
    { subject: "Riyaziyyat", topic: "Kvadrat tənliklər", text: "x² − 5x + 6 = 0 tənliyinin köklərinin cəmi neçədir?", options: ["−5", "5", "6", "−6"], answer: 1 },
    { subject: "Riyaziyyat", topic: "Loqarifm", text: "log₂ 32 ifadəsinin qiyməti neçədir?", options: ["4", "5", "6", "16"], answer: 1 },
    { subject: "Riyaziyyat", topic: "Silsilələr", text: "Ədədi silsilədə a₁ = 3 və fərq d = 4-dür. a₁₀ neçədir?", options: ["39", "40", "43", "36"], answer: 0 },
    { subject: "Riyaziyyat", topic: "Üstlü ifadələr", text: "3⁴ : 3² ifadəsinin qiyməti neçədir?", options: ["3", "6", "9", "27"], answer: 2 },
    { subject: "Riyaziyyat", topic: "Kəsrlər", text: "1/2 + 1/3 cəmi neçədir?", options: ["2/5", "5/6", "1/6", "2/3"], answer: 1 },

    // Azərbaycan dili
    { subject: "Azərbaycan dili", topic: "Nitq hissələri", text: "Hansı söz isimdir?", options: ["gözəl", "qaçmaq", "dəniz", "tez"], answer: 2 },
    { subject: "Azərbaycan dili", topic: "Nitq hissələri", text: "Hansı söz feildir?", options: ["yazmaq", "yaşıl", "kitab", "çox"], answer: 0 },
    { subject: "Azərbaycan dili", topic: "Leksika", text: "\"Ağ\" sözünün antonimi hansıdır?", options: ["boz", "qara", "sarı", "açıq"], answer: 1 },
    { subject: "Azərbaycan dili", topic: "Leksika", text: "\"Cəsur\" sözünün sinonimi hansıdır?", options: ["qorxaq", "yavaş", "igid", "zəif"], answer: 2 },
    { subject: "Azərbaycan dili", topic: "Hal şəkilçiləri", text: "\"Evdən\" sözü hansı haldadır?", options: ["Yönlük", "Yerlik", "Çıxışlıq", "Təsirlik"], answer: 2 },
    { subject: "Azərbaycan dili", topic: "Hal şəkilçiləri", text: "\"Məktəbə\" sözü hansı haldadır?", options: ["Yönlük", "Yiyəlik", "Çıxışlıq", "Adlıq"], answer: 0 },
    { subject: "Azərbaycan dili", topic: "Sintaksis", text: "Hansı cümlə nida cümləsidir?", options: ["Sabah məktəbə gedəcəyəm.", "Nə gözəl gündür!", "Sən hara gedirsən?", "Kitabı stolun üstünə qoy."], answer: 1 },
    { subject: "Azərbaycan dili", topic: "Söz yaradıcılığı", text: "Hansı söz mürəkkəb sözdür?", options: ["ağsaqqal", "kitabçı", "gözəllik", "yazı"], answer: 0 },

    // İngilis dili
    { subject: "İngilis dili", topic: "Present Simple", text: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
    { subject: "İngilis dili", topic: "Past Simple", text: "They ___ football yesterday.", options: ["play", "plays", "played", "playing"], answer: 2 },
    { subject: "İngilis dili", topic: "Present Perfect", text: "I have lived here ___ 2020.", options: ["for", "since", "from", "at"], answer: 1 },
    { subject: "İngilis dili", topic: "Lüğət", text: "Choose the synonym of \"big\".", options: ["small", "large", "short", "thin"], answer: 1 },
    { subject: "İngilis dili", topic: "Şərt cümlələri", text: "If it rains tomorrow, we ___ at home.", options: ["stay", "stayed", "will stay", "would stayed"], answer: 2 },
    { subject: "İngilis dili", topic: "Sözönülər", text: "The book is ___ the table.", options: ["on", "at", "of", "to"], answer: 0 },
    { subject: "İngilis dili", topic: "Müqayisə dərəcələri", text: "He is ___ than his brother.", options: ["tall", "taller", "tallest", "more tall"], answer: 1 },
    { subject: "İngilis dili", topic: "Artikllər", text: "___ apple a day keeps the doctor away.", options: ["A", "An", "The", "—"], answer: 1 }
  ]
};
