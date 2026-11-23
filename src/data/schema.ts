import type { TFunction } from 'i18next';
import i18n from '../i18n/config';
import { SITE, localize } from '../i18n/lang';

/**
 * Structured data for the home page: the studio as a ProfessionalService
 * serving Azerbaijan and Türkiye, its services, and the website itself.
 */
export function homeJsonLd(t: TFunction) {
    const lang = i18n.language;
    const url = SITE + localize('/', lang);
    const services = [1, 2, 5, 3, 4, 6].map(k => ({
        '@type': 'Offer',
        itemOffered: {
            '@type': 'Service',
            name: t(`servicesMenu.s${k}`),
            description: t(`servicesMenu.d${k}`),
        },
    }));

    return [
        {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': `${SITE}/#studio`,
            name: 'WebCom',
            url,
            logo: `${SITE}/logo.png`,
            image: `${SITE}/og-image.jpg`,
            description: t('meta.homeDesc'),
            email: 'khaliglizahra@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Ankara', addressCountry: 'TR' },
            areaServed: [
                { '@type': 'Country', name: 'Azerbaijan' },
                { '@type': 'Country', name: 'Türkiye' },
            ],
            availableLanguage: ['az', 'tr', 'en'],
            sameAs: ['https://www.instagram.com/webcom.d/'],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: t('nav.services'),
                itemListElement: services,
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE}/#website`,
            name: 'WebCom',
            url,
            inLanguage: lang,
            publisher: { '@id': `${SITE}/#studio` },
        },
    ];
}
