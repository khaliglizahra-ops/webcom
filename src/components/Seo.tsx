import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LANGS, OG_LOCALE, SITE, langFromPath, localize, stripLang, type Lang } from '../i18n/lang';

/**
 * Per-page head tags: title, description, canonical URL, hreflang links to
 * the same page in every language, Open Graph / Twitter tags and <html lang>.
 * Optional JSON-LD is passed through as-is.
 */
export default function Seo({ title, description, jsonLd, noindex, single, type = 'website' }: {
    title: string;
    description: string;
    jsonLd?: object | object[];
    noindex?: boolean;
    /** page exists in one language only: no hreflang alternates */
    single?: boolean;
    type?: 'website' | 'article';
}) {
    const { pathname } = useLocation();
    useTranslation(); // re-render on language change
    const lang: Lang = langFromPath(pathname);
    const base = stripLang(pathname);
    const url = SITE + localize(base, lang);
    const image = `${SITE}/og-image.jpg`;

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{title}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex, follow" />}
            <link rel="canonical" href={url} />
            {!single && LANGS.map(l => (
                <link key={l} rel="alternate" hrefLang={l} href={SITE + localize(base, l)} />
            ))}
            {!single && <link rel="alternate" hrefLang="x-default" href={SITE + localize(base, 'tr')} />}

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="WebCom" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={OG_LOCALE[lang]} />
            {!single && LANGS.filter(l => l !== lang).map(l => (
                <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
            ))}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
        </Helmet>
    );
}
