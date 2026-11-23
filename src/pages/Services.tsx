import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';
import Process from '../components/sections/Process';
import FinalCTA from '../components/sections/FinalCTA';
import { photo, servicePhotos } from '../data/photos';
import classes from './Services.module.css';

export default function Services() {
    const { t } = useTranslation();
    const keys = ['s1', 's2', 's3', 's4', 's5', 's6'];

    return (
        <main>
            <Helmet>
                <title>{t('meta.servicesTitle')}</title>
                <meta name="description" content={t('meta.servicesDesc')} />
            </Helmet>

            <PageHero
                eyebrow={t('nav.services')}
                title={t('servicesMenu.headline')}
                accent={t('servicesMenu.accent')}
                subtitle={t('servicesPage.subtitle')}
            >
                <Button to="/strategy-call" size="lg">
                    {t('servicesPage.btn')} <ArrowRight size={18} />
                </Button>
            </PageHero>

            <section className={classes.list}>
                <div className="container">
                    {keys.map((key, idx) => (
                        <div key={key}>
                            <article className={`${classes.item} ${idx % 2 ? classes.flip : ''}`} id={`service-${idx + 1}`}>
                                <div className={`photo ${classes.image}`} data-reveal="photo">
                                    <img src={photo(servicePhotos[idx], 1200)} alt="" loading="lazy" />
                                </div>
                                <div className={classes.body} data-reveal="up" style={{ '--d': '150ms' } as React.CSSProperties}>
                                    <span className={`serif ${classes.num}`}>0{idx + 1}</span>
                                    <h2 className={classes.title}>{t(`servicesPage.${key}.title`)}</h2>
                                    <p className={classes.desc}>{t(`servicesPage.${key}.desc`)}</p>
                                    <ul className={classes.features}>
                                        {['f1', 'f2', 'f3'].map(f => (
                                            <li key={f}><Check size={18} /> {t(`servicesPage.${key}.${f}`)}</li>
                                        ))}
                                    </ul>
                                    <Button to="/strategy-call" variant="outline">
                                        {t('servicesPage.btn')} <ArrowRight size={16} />
                                    </Button>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </section>

            <Process />
            <FinalCTA />
        </main>
    );
}
