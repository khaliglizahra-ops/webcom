import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';
import Link from '../components/ui/LangLink';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import classes from './Blog.module.css';

// slug + date per post; the text lives in i18n under blogPage.posts.p<n>
const POSTS = [
    { id: 'enhancing-b2b-conversion-rates', date: '2026-03-15' },
    { id: 'future-of-saas-overcomplicating', date: '2026-02-28' },
    { id: 'why-generic-templates-are-better', date: '2026-02-10' },
    { id: 'microservices-trap', date: '2026-01-19' },
    { id: 'vague-verbs-landing-page', date: '2026-01-05' },
    { id: 'gamifying-layoffs', date: '2025-12-12' },
    { id: 'ghosting-customer-success', date: '2025-11-30' },
    { id: 'hard-pivot-startup', date: '2025-11-15' },
    { id: 'why-you-should-not-have-website', date: '2025-10-28' },
];

export default function Blog() {
    const { t, i18n } = useTranslation();
    const fmt = new Intl.DateTimeFormat(i18n.language, { day: 'numeric', month: 'short', year: 'numeric' });

    const posts = POSTS.map((p, i) => ({
        ...p,
        n: i + 1,
        date: fmt.format(new Date(p.date)),
        category: t(`blogPage.posts.p${i + 1}Cat`),
        title: t(`blogPage.posts.p${i + 1}Title`),
        excerpt: t(`blogPage.posts.p${i + 1}Desc`),
    }));
    const [featured, ...rest] = posts;

    return (
        <main>
            <Seo title={t('meta.blogTitle')} description={t('blogPage.subtitle')} />

            <PageHero
                eyebrow={t('nav.blog')}
                title={`${t('blogPage.titlePart1')}${t('blogPage.titleHighlight')}`}
                accent={t('blogPage.titleHighlight').replace(/\.$/, '')}
                subtitle={t('blogPage.subtitle')}
            />

            <section className={classes.section}>
                <div className="container">
                    <Link to={`/blog/${featured.id}`} className={classes.featured} data-reveal="up">
                        <span className={`serif ${classes.bigNum}`}>01</span>
                        <div>
                            <p className={classes.meta}><span>{featured.category}</span> · {featured.date}</p>
                            <h2 className={classes.featuredTitle}>{featured.title}</h2>
                            <p className={classes.excerpt}>{featured.excerpt}</p>
                            <span className="textLink">{t('blogPage.readMore')} <ArrowUpRight size={16} /></span>
                        </div>
                    </Link>

                    <ul className={classes.list}>
                        {rest.map((post, i) => (
                            <li key={post.id} data-reveal="up" style={{ '--d': `${(i % 4) * 80}ms` } as React.CSSProperties}>
                                <Link to={`/blog/${post.id}`} className={classes.row}>
                                    <span className={classes.num}>{String(post.n).padStart(2, '0')}</span>
                                    <span className={classes.cat}>{post.category}</span>
                                    <span className={classes.text}>
                                        <span className={classes.title}>{post.title}</span>
                                        <span className={classes.rowExcerpt}>{post.excerpt}</span>
                                    </span>
                                    <span className={classes.date}>{post.date}</span>
                                    <span className={classes.arrow} aria-hidden="true"><ArrowUpRight size={18} /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
