import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANG, langFromPath, localize, stripLang } from '../../i18n/lang';

const PREF = 'webcom-lang';

/**
 * Keeps i18next on the language the URL names. Azerbaijani visitors who
 * land on a Turkish URL for the first time are sent to the /az/ version;
 * once someone picks a language, that choice is remembered and respected.
 */
export default function LangSync() {
    const { pathname, search, hash } = useLocation();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const lang = langFromPath(pathname);

    useEffect(() => {
        let pref: string | null = null;
        try { pref = localStorage.getItem(PREF); } catch { /* storage blocked */ }
        if (!pref && lang === DEFAULT_LANG && /^az\b/i.test(navigator.language || '')) {
            navigate(localize(stripLang(pathname), 'az') + search + hash, { replace: true });
            return;
        }
        if (i18n.language !== lang) i18n.changeLanguage(lang);
        try { localStorage.setItem(PREF, lang); } catch { /* storage blocked */ }
    }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
}
