import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../components/ui/AnimatedTitle';
import WorkList from '../components/sections/WorkList';
import FinalCTA from '../components/sections/FinalCTA';
import { projects } from '../data/projects';
import classes from './Work.module.css';

export default function WorkPage() {
    const { t } = useTranslation();
    return (
        <main>
            <Helmet>
                <title>{t('meta.workTitle')}</title>
                <meta name="description" content={t('meta.workDesc')} />
                <meta property="og:title" content={t('meta.workTitle')} />
                <meta property="og:description" content={t('meta.workDesc')} />
            </Helmet>

            <section className={classes.page}>
                <div className="container">
                    <div className={classes.head}>
                        <span className="eyebrow onDark">WebCom · {t('work.count', { count: projects.length })}</span>
                        <h1 className={classes.title}>
                            <AnimatedTitle text={t('work.pageTitle')} delay={80} step={40} />
                        </h1>
                        <p className={classes.sub} data-reveal="up" style={{ '--d': '450ms' } as React.CSSProperties}>
                            {t('work.pageSubtitle')}
                        </p>
                    </div>
                    <WorkList />
                </div>
            </section>

            <FinalCTA spaced />
        </main>
    );
}

