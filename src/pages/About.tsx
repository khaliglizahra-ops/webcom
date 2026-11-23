import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/layout/PageHero';
import AnimatedTitle from '../components/ui/AnimatedTitle';
import FinalCTA from '../components/sections/FinalCTA';
import { photo } from '../data/photos';
import classes from './About.module.css';

export default function About() {
    const { t } = useTranslation();
    const values = [1, 2, 3].map(n => ({ title: t(`about.value${n}Title`), desc: t(`about.value${n}Desc`) }));

    return (
        <main>
            <Seo title={t('meta.aboutTitle')} description={t('meta.aboutDesc')} />

            <PageHero
                eyebrow={t('nav.about')}
                title={`${t('about.titlePart1')}${t('about.titleHighlight')}`}
                accent={t('about.titleHighlight').replace(/\.$/, '')}
                subtitle={t('about.desc')}
                image={photo('baristaPour', 2000)}
            />

            {/* Story */}
            <section className={`section ${classes.story}`}>
                <div className={`container ${classes.storyGrid}`}>
                    <h2 className={classes.storyTitle}>
                        <AnimatedTitle text={t('about.storyTitle')} onView />
                    </h2>
                    <div className={classes.storyText} data-reveal="up">
                        <p className={classes.lead}>{t('about.storyDesc1')}</p>
                        <p>{t('about.storyDesc2')}</p>
                    </div>
                </div>
            </section>

            {/* Quote-style positioning statement */}
            <section className={classes.statement}>
                <div className="container">
                    <span className="eyebrow onDark">{t('about.positioningTitle')}</span>
                    <p className={classes.statementText} data-reveal="up">{t('about.positioningDesc')}</p>
                </div>
            </section>

            {/* Values */}
            <section className={`section ${classes.values}`}>
                <div className="container">
                    <div className="sectionHead">
                        <h2><AnimatedTitle text={t('about.valuesTitle')} onView /></h2>
                    </div>
                    <div className={classes.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={classes.value} data-reveal="up" style={{ '--d': `${i * 120}ms` } as React.CSSProperties}>
                                <span className={`serif ${classes.num}`}>{i + 1}</span>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
