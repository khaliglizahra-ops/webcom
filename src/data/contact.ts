// Contact details shown on the site.
export const WHATSAPP_NUMBER = '905316117866'; // 0531 611 78 66, Türkiye
export const WHATSAPP_DISPLAY = '0531 611 78 66';

const GREETING: Record<string, string> = {
    tr: 'Merhaba, web siteniz üzerinden yazıyorum.',
    en: 'Hello, I am writing from your website.',
    az: 'Salam, saytınızdan yazıram.',
};

/** wa.me link that opens a chat with a short greeting in the visitor's language */
export const whatsappLink = (lang = 'tr') =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING[lang] ?? GREETING.tr)}`;
