import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import AnimatedTitle from '../components/ui/AnimatedTitle';
import FinalCTA from '../components/sections/FinalCTA';
import classes from './BlogPost.module.css';

export default function BlogPost() {
    const { id } = useParams();
    const { t } = useTranslation();
    const barRef = useRef<HTMLDivElement>(null);
    const articleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // reading progress bar
    useEffect(() => {
        let raf = 0;
        const update = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const el = articleRef.current;
                if (!el || !barRef.current) return;
                const r = el.getBoundingClientRect();
                const total = r.height - window.innerHeight;
                const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
                barRef.current.style.transform = `scaleX(${p})`;
            });
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
            cancelAnimationFrame(raf);
        };
    }, [id]);

    // Map the URL ID to the translation key index
    let postIndex = 1;
    if (id === 'maximizing-b2b-conversion-rates' || id === 'rebranding-ai-company') postIndex = 1;
    if (id === 'future-of-saas-overcomplicating' || id === '100-hour-workweek') postIndex = 2;
    if (id === 'why-generic-templates-are-better' || id === 'agile-scrums-pizza') postIndex = 3;
    if (id === 'microservices-trap') postIndex = 4;
    if (id === 'vague-verbs-landing-page') postIndex = 5;
    if (id === 'gamifying-layoffs') postIndex = 6;
    if (id === 'ghosting-customer-success') postIndex = 7;
    if (id === 'hard-pivot-startup') postIndex = 8;
    if (id === 'why-you-should-not-have-website' || id === 'neden-bir-web-siteniz-olmamali') postIndex = 9;

    const k = (s: string) => t(`blogPage.articles.p${postIndex}${s}`);

    return (
        <main className={classes.page}>
            <Helmet>
                <title>{t(`blogPage.posts.p${postIndex}Title`)} | WebCom</title>
                <meta name="description" content={t(`blogPage.posts.p${postIndex}Desc`)} />
            </Helmet>

            <div className={classes.progress} aria-hidden="true"><div ref={barRef} className={classes.progressBar} /></div>

            <article ref={articleRef} className={`container ${classes.articleContainer}`}>
                <Link to="/blog" className={classes.backLink}>
                    <ArrowLeft size={16} /> {t('nav.blog')}
                </Link>

                <header className={classes.articleHeader}>
                    <span className={classes.category}>{t(`blogPage.posts.p${postIndex}Cat`)}</span>
                    <h1 className={classes.title}>
                        <AnimatedTitle text={t(`blogPage.posts.p${postIndex}Title`)} delay={80} />
                    </h1>
                    <p className={classes.excerpt} data-reveal="up" style={{ '--d': '400ms' } as React.CSSProperties}>
                        {t(`blogPage.posts.p${postIndex}Desc`)}
                    </p>
                </header>

                <div className={classes.articleBody} data-reveal="up" style={{ '--d': '550ms' } as React.CSSProperties}>
                    <p className={classes.lead}>{k('p1')}</p>
                    <p>{k('p2')}</p>
                    <h2>{k('h1')}</h2>
                    <p>{k('p3')}</p>
                    <p>{k('p4')}</p>
                </div>
            </article>

            <FinalCTA />
        </main>
    );
}
