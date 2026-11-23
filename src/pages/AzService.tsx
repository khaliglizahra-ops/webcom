import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Seo from '../components/Seo';
import Link from '../components/ui/LangLink';
import Button from '../components/ui/Button';
import PageHero from '../components/layout/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { azServices, azServiceLabels as L } from '../data/azServices';
import { guides } from '../data/guides';
import { projects } from '../data/projects';
import { whatsappLink } from '../data/contact';
import { SITE } from '../i18n/lang';
import classes from './AzService.module.css';

/** /az/services/:slug: an Azerbaijani landing page for one service */
export default function AzService() {
    const { slug } = useParams();
    const s = azServices.find(x => x.slug === slug);
    if (!s) return <Navigate to="/az/services" replace />;

    const url = `${SITE}/az/services/${s.slug}`;
    const work = s.work.map(id => projects.find(p => p.id === id)!).filter(Boolean);
    const related = s.guides.map(g => guides.find(x => x.slug === g)!).filter(Boolean);
    const others = azServices.filter(x => x.slug !== s.slug);

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.h1,
            description: s.desc,
            url,
            inLanguage: 'az',
            areaServed: { '@type': 'Country', name: 'Azerbaijan' },
            provider: { '@type': 'ProfessionalService', '@id': `${SITE}/#studio`, name: 'WebCom', url: SITE },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: s.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'WebCom', item: `${SITE}/az/` },
                { '@type': 'ListItem', position: 2, name: 'Xidmətlər', item: `${SITE}/az/services` },
                { '@type': 'ListItem', position: 3, name: s.h1, item: url },
            ],
        },
    ];

    return (
        <main>
            <Seo title={s.title} description={s.desc} single jsonLd={jsonLd} />
            <PageHero eyebrow={L.eyebrow} title={s.h1} subtitle={s.intro}>
                <div className={classes.heroCtas}>
                    <Button to="/strategy-call" variant="accent">{L.quote} <ArrowRight size={16} /></Button>
                    <Button href={whatsappLink('az')} variant="glass">{L.whatsapp}</Button>
                </div>
            </PageHero>

            <section className={classes.section}>
                <div className={`container ${classes.two}`}>
                    <div>
                        <h2 className={classes.h2}>{L.forWho}</h2>
                        <ul className={classes.plain}>
                            {s.forWho.map(x => <li key={x}>{x}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className={classes.h2}>{L.included}</h2>
                        <ul className={classes.checks}>
                            {s.included.map(x => <li key={x}><Check size={16} aria-hidden="true" /> {x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={classes.section}>
                <div className="container">
                    <h2 className={classes.h2}>{L.steps}</h2>
                    <ol className={classes.steps}>
                        {s.steps.map(([t, d], i) => (
                            <li key={t}>
                                <span className={classes.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                                <h3>{t}</h3>
                                <p>{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {work.length > 0 && (
                <section className={classes.section}>
                    <div className="container">
                        <h2 className={classes.h2}>{L.work}</h2>
                        <div className={classes.work}>
                            {work.map(p => (
                                <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className={classes.workItem}>
                                    <span className={classes.workImg} style={{ background: p.tint }}>
                                        <img src={p.image} alt={p.name} loading="lazy" width={1200} height={750} />
                                    </span>
                                    <span className={classes.workName}>{p.name} <ArrowUpRight size={15} /></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className={classes.section}>
                <div className="container">
                    <h2 className={classes.h2}>{L.faq}</h2>
                    <div className={classes.narrow}>
                        {s.faq.map(f => (
                            <details key={f.q} className={classes.faq}>
                                <summary>{f.q}</summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className={classes.section}>
                <div className={`container ${classes.two}`}>
                    <div>
                        <h2 className={classes.h2}>{L.guides}</h2>
                        <ul className={classes.links}>
                            {related.map(g => <li key={g.slug}><Link to={`/guides/${g.slug}`}>{g.title}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className={classes.h2}>{L.others}</h2>
                        <ul className={classes.links}>
                            {others.map(o => <li key={o.slug}><Link to={`/services/${o.slug}`}>{o.h1}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
