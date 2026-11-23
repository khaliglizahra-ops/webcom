import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import Link from '../components/ui/LangLink';
import Button from '../components/ui/Button';
import FinalCTA from '../components/sections/FinalCTA';
import { guides, guidesIntro } from '../data/guides';
import { azServices } from '../data/azServices';
import { SITE } from '../i18n/lang';
import classes from './BlogPost.module.css';

const AZ_MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
const fmt = { format: (d: Date) => `${d.getDate()} ${AZ_MONTHS[d.getMonth()]} ${d.getFullYear()}` };

/** /az/guides/:slug: one Azerbaijani article with Article + FAQ structured data */
export default function Guide() {
    const { slug } = useParams();
    const g = guides.find(x => x.slug === slug);
    if (!g) return <Navigate to="/az/guides" replace />;

    const url = `${SITE}/az/guides/${g.slug}`;
    const jsonLd: object[] = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: g.title,
            description: g.desc,
            inLanguage: 'az',
            datePublished: g.date,
            dateModified: g.date,
            mainEntityOfPage: url,
            image: `${SITE}/og-image.jpg`,
            author: { '@type': 'Organization', name: 'WebCom', url: SITE },
            publisher: { '@type': 'Organization', name: 'WebCom', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'WebCom', item: `${SITE}/az/` },
                { '@type': 'ListItem', position: 2, name: guidesIntro.heading, item: `${SITE}/az/guides` },
                { '@type': 'ListItem', position: 3, name: g.title, item: url },
            ],
        },
    ];
    if (g.faq?.length) {
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: g.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        });
    }
    const others = guides.filter(x => x.slug !== g.slug);

    return (
        <main className={classes.page}>
            <Seo title={`${g.title} | WebCom`} description={g.desc} single type="article" jsonLd={jsonLd} />

            <article className={`container ${classes.articleContainer}`}>
                <Link to="/guides" className={classes.backLink}>
                    <ArrowLeft size={16} /> {guidesIntro.back}
                </Link>

                <header className={classes.articleHeader}>
                    <span className={classes.category}>{g.tag} · {fmt.format(new Date(g.date))} · {g.minutes} {guidesIntro.read}</span>
                    <h1 className={classes.title}>{g.title}</h1>
                    <p className={classes.excerpt}>{g.desc}</p>
                </header>

                <div className={classes.articleBody}>
                    <p className={`${classes.lead} ${classes.noCap}`}>{g.lead}</p>
                    {g.blocks.map((b, i) => (
                        b.h ? <h2 key={i}>{b.h}</h2>
                            : b.ul ? <ul key={i}>{b.ul.map(li => <li key={li}>{li}</li>)}</ul>
                                : <p key={i}>{b.p}</p>
                    ))}

                    <p>
                        <Button to="/strategy-call" variant="accent">
                            {guidesIntro.cta} <ArrowRight size={16} />
                        </Button>
                    </p>

                    {g.faq?.length ? (
                        <>
                            <h2>{guidesIntro.faq}</h2>
                            {g.faq.map(f => (
                                <div key={f.q}>
                                    <h3>{f.q}</h3>
                                    <p>{f.a}</p>
                                </div>
                            ))}
                        </>
                    ) : null}

                    <h2>Xidmətlərimiz</h2>
                    <ul>
                        {azServices.map(sv => <li key={sv.slug}><Link to={`/services/${sv.slug}`}>{sv.h1}</Link></li>)}
                    </ul>

                    <h2>{guidesIntro.heading}</h2>
                    <ul>
                        {others.map(o => <li key={o.slug}><Link to={`/guides/${o.slug}`}>{o.title}</Link></li>)}
                    </ul>
                </div>
            </article>

            <FinalCTA />
        </main>
    );
}
