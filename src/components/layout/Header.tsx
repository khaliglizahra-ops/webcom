import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { localize, stripLang } from '../../i18n/lang';
import Link from '../ui/LangLink';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import classes from './Header.module.css';

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const basePath = stripLang(location.pathname);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    // Determine if the current page should start with a transparent/dark header
    const isDarkHeroPage = false; // header is always light: the logo is navy/blue

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Body scroll lock
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // switching language moves to the same page under that language's URL
    const changeLanguage = (lng: string) => {
        setLangOpen(false);
        navigate(localize(basePath, lng) + location.search + location.hash);
    };

    const languages = [
        { code: 'tr', label: 'TR', name: 'Türkçe' },
        { code: 'en', label: 'EN', name: 'English' },
        { code: 'az', label: 'AZ', name: 'Azərbaycanca' }
    ];
    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    // Construct the class string based on state and route
    const headerClass = `${classes.header} ${isDarkHeroPage && !scrolled ? classes.headerDarkArea : ''} ${scrolled ? classes.headerScrolled : ''} ${menuOpen ? classes.menuOpen : ''}`;

    return (
        <header className={headerClass}>
            <div className={`container ${classes.headerContainer}`}>
              <div className={classes.bar}>

                {/* Logo */}
                <Link to="/" className={classes.logo}>
                    <img src="/logo-dark.webp" width={353} height={72} alt="WebCom" className={classes.logoImage} />
                </Link>

                {/* Navigation */}
                <nav className={`${classes.nav} ${menuOpen ? classes.navMobileVisible : ''}`}>
                    {[
                        { to: '/work', label: t('nav.work') },
                        { to: '/services', label: t('nav.services') },
                        { to: '/process', label: t('nav.process') },
                        i18n.language === 'az' ? { to: '/guides', label: 'Bələdçilər' } : { to: '/blog', label: t('nav.blog') },
                        { to: '/about', label: t('nav.about') },
                        { to: '/contact', label: t('nav.contact') },
                    ].map((link, index) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`${classes.navLink} ${basePath.startsWith(link.to) ? classes.navLinkActive : ''}`}
                            aria-current={basePath.startsWith(link.to) ? 'page' : undefined}
                            style={{ '--index': index } as React.CSSProperties}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        to="/strategy-call"
                        className={classes.ctaButton}
                        data-magnetic
                        style={{ '--index': 6 } as React.CSSProperties}
                    >
                        {t('nav.bookCall')}
                    </Link>
                </nav>

                <div className={classes.headerActions}>
                    <Link to="/strategy-call" className={classes.ctaDesktop}>
                        {t('nav.bookCall')}
                    </Link>
                    {/* Language Toggle - Persistent on mobile */}
                    <div className={classes.langToggle} ref={langRef}>
                        <button
                            className={classes.langButton}
                            onClick={() => setLangOpen(!langOpen)}
                            aria-expanded={langOpen}
                        >
                            <Globe size={18} />
                            <span>{currentLang.label}</span>
                            <ChevronDown size={14} className={`${classes.langChevron} ${langOpen ? classes.langChevronOpen : ''}`} />
                        </button>

                        {langOpen && (
                            <div className={classes.langDropdown}>
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`${classes.langOption} ${i18n.language === lang.code ? classes.langActive : ''}`}
                                        onClick={() => changeLanguage(lang.code)}
                                    >
                                        <span className={classes.langOptionCode}>{lang.label}</span>
                                        <span className={classes.langOptionName}>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={classes.mobileToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
              </div>
            </div>
        </header>
    );
}
