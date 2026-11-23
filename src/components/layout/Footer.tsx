import { useTranslation } from 'react-i18next';
import Link from '../ui/LangLink';
import { ArrowRight, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import AnimatedTitle from '../ui/AnimatedTitle';
import classes from './Footer.module.css';

export default function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.top}>
                    <p className={classes.big}>
                        <AnimatedTitle text={t('footer.big')} accent={t('footer.bigAccent')} onView />
                    </p>
                    <Link to="/strategy-call" className={classes.cta} data-magnetic>
                        {t('nav.bookCall')} <ArrowRight size={18} />
                    </Link>
                </div>

                <div className={classes.grid}>
                    <div className={classes.brand}>
                        <Link to="/" aria-label="WebCom">
                            <img src="/logo-dark.webp" width={353} height={72} alt="WebCom" className={classes.logo} />
                        </Link>
                        <p className={classes.tagline}>{t('footer.tag')}</p>
                    </div>

                    <div>
                        <h2 className={classes.heading}>{t('footer.links')}</h2>
                        <ul className={classes.linkList}>
                            <li><Link to="/work">{t('nav.work')}</Link></li>
                            <li><Link to="/services">{t('nav.services')}</Link></li>
                            <li><Link to="/process">{t('nav.process')}</Link></li>
                            <li><Link to="/blog">{t('nav.blog')}</Link></li>
                            {i18n.language === 'az' && <li><Link to="/guides">Bələdçilər</Link></li>}
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={classes.heading}>{t('nav.contact')}</h2>
                        <ul className={classes.linkList}>
                            <li>
                                <a href="mailto:khaliglizahra@gmail.com" className={classes.iconLink}>
                                    <Mail size={16} /> khaliglizahra@gmail.com
                                </a>
                            </li>
                            <li className={classes.iconLink}>
                                <MapPin size={16} /> {t('contact.officeDesc')}
                            </li>
                        </ul>
                        <div className={classes.socials}>
                            <a href="https://www.instagram.com/webcom.d/" target="_blank" rel="noopener noreferrer" className={classes.socialIcon} aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/in/zahra-khaligli-99aa1a2b3/" target="_blank" rel="noopener noreferrer" className={classes.socialIcon} aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className={classes.bottomBar}>
                    <span>&copy; {new Date().getFullYear()} WebCom. {t('footer.rights')}</span>
                    <span>Ankara</span>
                </div>
            </div>
        </footer>
    );
}
