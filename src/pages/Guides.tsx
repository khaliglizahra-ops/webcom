import { ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import Link from '../components/ui/LangLink';
import PageHero from '../components/layout/PageHero';
import { guides, guidesIntro } from '../data/guides';
import { SITE } from '../i18n/lang';
import classes from './Blog.module.css';

const AZ_MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
const fmt = { format: (d: Date) => `${d.getDate()} ${AZ_MONTHS[d.getMonth()]} ${d.getFullYear()}` };

/** /az/guides: list of the Azerbaijani articles */
export default function Guides() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: guidesIntro.heading,
        description: guidesIntro.desc,
        url: `${SITE}/az/guides`,
        inLanguage: 'az',
        hasPart: guides.map(g => ({ '@type': 'Article', headline: g.title, url: `${SITE}/az/guides/${g.slug}` })),
    };

    return (
        <main>
            <Seo title={guidesIntro.title} description={guidesIntro.desc} single jsonLd={jsonLd} />
            <PageHero eyebrow="WebCom" title={guidesIntro.heading} subtitle={guidesIntro.sub} />

            <section className={classes.section}>
                <div className="container">
                    <div className={classes.list}>
                        {guides.map((g, i) => (
                            <Link key={g.slug} to={`/guides/${g.slug}`} className={classes.row} data-reveal="up" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                                <span className={classes.num}>{String(i + 1).padStart(2, '0')}</span>
                                <span className={classes.cat}>{g.tag} · {g.minutes} {guidesIntro.read}</span>
                                <span className={classes.text}>
                                    <span className={classes.title}>{g.title}</span>
                                    <span className={classes.rowExcerpt}>{g.desc}</span>
                                </span>
                                <span className={classes.date}>{fmt.format(new Date(g.date))}</span>
                                <span className={classes.arrow} aria-hidden="true"><ArrowUpRight size={18} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
