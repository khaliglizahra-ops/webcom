// Dersio landing page settings. Fill in the real values before going live.
window.DERSIO_CONFIG = {
  // Coordinator's WhatsApp number, digits only with country code, e.g. "994501234567".
  // While empty, forms show the message to copy instead of opening WhatsApp.
  whatsappNumber: "",

  // Next 600bal mock exam. Leave empty to show "Tarix tezliklə".
  nextExamDate: "",      // e.g. "14 dekabr 2026"
  nextExamTime: "11:00",

  // Mock exam page (exam.html). Set to false outside the exam window to show "not open yet".
  examOpen: true,

  // Package prices shown on the page (manat). Test these with real parents.
  packages: [
    { id: "dim-math", title: "DİM Riyaziyyat", detail: "Ayda 8 dərs · 60 dəq", price: 160, tag: "Məktəblilər" },
    { id: "dim-az", title: "DİM Azərbaycan dili", detail: "Ayda 8 dərs · 60 dəq", price: 160, tag: "Məktəblilər" },
    { id: "uni", title: "Universitet fənni", detail: "Kollokvium və imtahan hazırlığı", price: null, priceText: "Tək dərs 25 ₼-dan", tag: "Tələbələr" },
    { id: "ielts", title: "IELTS 8 həftə", detail: "Həftədə 2 dərs · onlayn", price: null, priceText: "Qiyməti soruşun", tag: "Böyüklər" }
  ],

  // Fill in once @dersio is claimed, e.g. "https://instagram.com/dersio"
  instagram: "",
  telegram: ""
};

window.DERSIO_CONFIG.static = true;
