/**
 * Language lives in the URL so each language has its own indexable pages:
 *   /            Turkish (default)
 *   /en/...      English
 *   /az/...      Azerbaijani
 */
export const LANGS = ['tr', 'en', 'az'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'tr';
export const SITE = 'https://webcomagency.com';

export const prefixFor = (lang: string) => (lang === DEFAULT_LANG || !LANGS.includes(lang as Lang) ? '' : `/${lang}`);

/** language named by the first path segment, or the default */
export function langFromPath(pathname: string): Lang {
    const seg = pathname.split('/')[1];
    return (LANGS as readonly string[]).includes(seg) && seg !== DEFAULT_LANG ? (seg as Lang) : DEFAULT_LANG;
}

/** path without its language prefix, always starting with "/" */
export function stripLang(pathname: string): string {
    const lang = langFromPath(pathname);
    if (lang === DEFAULT_LANG) return pathname || '/';
    const rest = pathname.slice(lang.length + 1);
    return rest === '' ? '/' : rest;
}

/** same page in another language */
export function localize(path: string, lang: string): string {
    const clean = path.startsWith('/') ? path : `/${path}`;
    const p = prefixFor(lang);
    if (!p) return clean;
    return clean === '/' ? `${p}/` : `${p}${clean}`;
}

export const OG_LOCALE: Record<Lang, string> = { tr: 'tr_TR', en: 'en_US', az: 'az_AZ' };
