import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from '../ui/LangLink';
import AnimatedTitle from '../ui/AnimatedTitle';
import { projects } from '../../data/projects';
import classes from './SelectedWork.module.css';

const PICK = ['piercingland', 'blackinkart', 'bagizza', 'balkabagi', 'petshop6', 'zet'];

/** Six live client sites, big and quiet: picture, name, one line. */
export default function SelectedWork() {
    const { t } = useTranslation();
    const items = PICK.map(id => projects.find(p => p.id === id)!).filter(Boolean);

    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.head}>
                    <div>
                        <span className={classes.badge}>{t('nav.work')}</span>
                        <h2 className={classes.title}>
                            <AnimatedTitle text={t('work.arcTitle')} accent={t('work.arcAccent')} onView />
                        </h2>
                    </div>
                    <Link to="/work" className={classes.all}>
                        {t('work.allLink')} <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={classes.grid}>
                    {items.map((p, i) => (
                        <a
                            key={p.id}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.item}
                            data-reveal="up"
                            style={{ '--d': `${(i % 2) * 120}ms`, '--tint': p.tint } as React.CSSProperties}
                        >
                            <span className={classes.media}>
                                <img src={p.image} alt={p.name} loading="lazy" width={1200} height={750} />
                            </span>
                            <span className={classes.meta}>
                                <span className={classes.name}>{p.name}</span>
                                <span className={classes.visit}>{t('work.visit')} <ArrowUpRight size={15} /></span>
                            </span>
                            <span className={classes.type}>{t(`work.items.${p.id}.type`)} · {t(`work.items.${p.id}.place`)}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
