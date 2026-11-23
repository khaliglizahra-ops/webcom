import { useTranslation } from 'react-i18next';
import { whatsappLink } from '../../data/contact';
import classes from './WhatsAppButton.module.css';

const LABEL: Record<string, string> = {
    tr: 'WhatsApp ile yazın',
    en: 'Message us on WhatsApp',
    az: 'WhatsApp ilə yazın',
};

/** Round WhatsApp button pinned to the bottom-right corner of every page. */
export default function WhatsAppButton() {
    const { i18n } = useTranslation();
    const label = LABEL[i18n.language] ?? LABEL.tr;
    return (
        <a
            href={whatsappLink(i18n.language)}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.fab}
            aria-label={label}
            title={label}
        >
            <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" fill="currentColor">
                <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3Zm0 23.65c-1.97 0-3.9-.53-5.58-1.53l-.4-.24-3.97 1.04 1.06-3.86-.26-.41A10.6 10.6 0 0 1 5.4 16c0-5.87 4.77-10.64 10.65-10.64 5.86 0 10.63 4.77 10.63 10.64 0 5.88-4.77 10.65-10.64 10.65Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
            </svg>
        </a>
    );
}
