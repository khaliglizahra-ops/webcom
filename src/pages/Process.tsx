import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';
import FinalCTA from '../components/sections/FinalCTA';
import { photo } from '../data/photos';
import classes from './Process.module.css';

export default function Process() {
    const { t } = useTranslation();
    const steps = [1, 2, 3, 4].map(n => ({
        title: t(`processPage.step${n}Title`),
        desc: t(`processPage.step${n}Desc`),
    }));
    const stepPhotos = ['cafeOwner', 'salonDesk', 'boutique', 'baristaPour'] as const;

    return (
        <main>
            <Seo title={t('meta.processTitle')} description={t('meta.processDesc')} />

            <PageHero
                eyebrow={t('nav.process')}
                title={`${t('processPage.titlePart1')}${t('processPage.titleHighlight')}`}
                accent={t('processPage.titleHighlight').replace(/\.$/, '')}
                subtitle={t('processPage.subtitle')}
            >
                <Button to="/strategy-call" size="lg">
                    {t('nav.bookCall')} <ArrowRight size={18} />
                </Button>
            </PageHero>

            <section className={classes.steps}>
                <div className="container">
                    {steps.map((s, i) => (
                        <article key={i} className={classes.step}>
                            <div className={classes.numCol} data-reveal="up">
                                <span className={`serif ${classes.num}`}>{i + 1}</span>
                            </div>
                            <div className={classes.text} data-reveal="up" style={{ '--d': '120ms' } as React.CSSProperties}>
                                <h2 className={classes.title}>{s.title}</h2>
                                <p className={classes.desc}>{s.desc}</p>
                            </div>
                            <div className={`photo ${classes.image}`} data-reveal="photo" style={{ '--d': '200ms' } as React.CSSProperties}>
                                <img src={photo(stepPhotos[i], 900)} alt="" loading="lazy" />
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
