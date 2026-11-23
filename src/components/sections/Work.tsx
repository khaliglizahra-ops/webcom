import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../ui/AnimatedTitle';
import { projects, type Project } from '../../data/projects';
import classes from './Work.module.css';

interface WorkProps {
    /** Show only the first N projects and a link to the full page. */
    limit?: number;
    /** Render the heading as the page's h1 (on /work). */
    asPage?: boolean;
}

function Card({ p, featured = false, index = 0 }: { p: Project; featured?: boolean; index?: number }) {
    const { t } = useTranslation();
    return (
        <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.card} ${featured ? classes.featured : ''}`}
            data-reveal="up"
            style={{ '--d': `${index * 120}ms` } as React.CSSProperties}
        >
            <div className={classes.panel} style={{ background: p.tint }}>
                <div className={`browser ${classes.shot}`}>
                    <div className="browserBar"><span /><span /><span /></div>
                    <img
                        src={p.image}
                        alt={`${p.name}: ${t(`work.items.${p.id}.type`)}`}
                        loading="lazy"
                        width={1200}
                        height={750}
                    />
                </div>
                {p.demo && <span className={classes.demo}>{t('work.demo')}</span>}
                <span className={classes.visit} aria-hidden="true"><ArrowUpRight size={20} /></span>
            </div>
            <div className={classes.info}>
                <div>
                    <h3 className={classes.name}>{p.name}</h3>
                    <p className={classes.meta}>{t(`work.items.${p.id}.type`)} · {t(`work.items.${p.id}.place`)}</p>
                </div>
                {featured && <p className={classes.desc}>{t(`work.items.${p.id}.desc`)}</p>}
                <ul className={classes.tags}>
                    {t(`work.items.${p.id}.tags`).split(' · ').map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        </a>
    );
}

export default function Work({ limit, asPage = false }: WorkProps) {
    const { t } = useTranslation();
    const list = limit ? projects.slice(0, limit) : projects;
    const [first, ...rest] = list;
    const Heading = asPage ? 'h1' : 'h2';

    return (
        <section className={`${classes.workSection} ${asPage ? classes.page : ''}`}>
            <div className="container">
                <div className="sectionHead">
                    <div>
                        <span className="eyebrow onDark">{asPage ? 'WebCom' : t('nav.work')}</span>
                        <Heading className={classes.headline}>
                            <AnimatedTitle
                                text={asPage ? t('work.pageTitle') : t('work.headline')}
                                accent={asPage ? undefined : t('work.accent')}
                                onView={!asPage}
                            />
                        </Heading>
                        {asPage && <p className={classes.subtitle}>{t('work.pageSubtitle')}</p>}
                    </div>
                    {limit && (
                        <Link to="/work" className={`textLink ${classes.allLink}`}>
                            {t('work.allLink')} <ArrowRight size={16} />
                        </Link>
                    )}
                </div>

                <Card p={first} featured />
                <div className={`${classes.grid} ${limit ? classes.three : ''}`}>
                    {rest.map((p, i) => <Card key={p.id} p={p} index={i} />)}
                </div>
            </div>
        </section>
    );
}
