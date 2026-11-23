import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Link from '../ui/LangLink';
import AnimatedTitle from '../ui/AnimatedTitle';
import { azServiceSlugFor } from '../../data/azServices';
import classes from './ServiceCards.module.css';

/**
 * The three main services as plain text cards, then the other services
 * as a quiet row of links.
 */
export default function ServiceCards() {
    const { t, i18n } = useTranslation();
    // in Azerbaijani, cards open the dedicated service page when there is one
    const hrefFor = (k: number) => (i18n.language === 'az' && azServiceSlugFor(k) ? `/services/${azServiceSlugFor(k)}` : '/services');

    const cards = [1, 2, 5];

    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.head}>
                    <span className={classes.badge}>{t('nav.services')}</span>
                    <h2 className={classes.title}>
                        <AnimatedTitle text={t('servicesMenu.headline')} accent={t('servicesMenu.accent')} onView />
                    </h2>
                </div>

                <div className={classes.cards}>
                    {cards.map((k, i) => (
                        <Link
                            key={k}
                            to={hrefFor(k)}
                            className={classes.card}
                            data-reveal="up"
                            style={{ '--d': `${i * 120}ms` } as React.CSSProperties}
                        >
                            <h3>{t(`servicesMenu.s${k}`)}</h3>
                            <p>{t(`servicesMenu.d${k}`)}</p>
                            <span className={classes.more2} aria-hidden="true"><ArrowRight size={18} /></span>
                        </Link>
                    ))}
                </div>

                <div className={classes.row}>
                    {[3, 4, 6].map((k, i) => (
                        <Link key={k} to={hrefFor(k)} className={classes.small} data-reveal="up" style={{ '--d': `${i * 100}ms` } as React.CSSProperties}>
                            <span className={classes.smallTitle}>{t(`servicesMenu.s${k}`)}</span>
                            <span className={classes.smallDesc}>{t(`servicesMenu.d${k}`)}</span>
                        </Link>
                    ))}
                    <Link to="/services" className={`${classes.small} ${classes.more}`} data-reveal="up" style={{ '--d': '300ms' } as React.CSSProperties}>
                        <span className={classes.smallTitle}>{t('servicesMenu.allLink')} <ArrowRight size={16} /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
