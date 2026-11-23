import { useEffect, useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../ui/AnimatedTitle';
import { projects } from '../../data/projects';
import classes from './WorkGallery.module.css';

/**
 * Homepage work: on desktop the section pins and the project cards slide
 * sideways as you scroll down. On phones (or with reduced motion) it is a
 * normal swipeable row.
 */
export default function WorkGallery() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const railRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const distRef = useRef(0);
    const n = projects.length;

    // measure how far the rail has to travel and size the section to match
    useLayoutEffect(() => {
        const section = sectionRef.current, rail = railRef.current;
        if (!section || !rail) return;
        const pinned = () =>
            window.matchMedia('(min-width: 900px)').matches &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const measure = () => {
            if (!pinned()) {
                section.style.height = '';
                rail.style.transform = '';
                distRef.current = 0;
                return;
            }
            const dist = Math.max(0, rail.scrollWidth - window.innerWidth);
            distRef.current = dist;
            section.style.height = `${window.innerHeight + dist}px`;
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(rail);
        window.addEventListener('resize', measure);
        return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
    }, []);

    useEffect(() => {
        let raf = 0;
        const update = () => {
            const section = sectionRef.current, rail = railRef.current, dist = distRef.current;
            if (!section || !rail) return;
            let p: number;
            if (dist > 0) {
                const top = section.getBoundingClientRect().top;
                p = Math.min(1, Math.max(0, -top / dist));
                rail.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
            } else {
                const max = rail.scrollWidth - rail.clientWidth;
                p = max > 0 ? rail.scrollLeft / max : 0;
            }
            if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
            if (countRef.current) {
                const i = Math.min(n, Math.floor(p * (n - 0.001)) + 1);
                countRef.current.textContent = `${String(i).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
            }
        };
        const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
        window.addEventListener('scroll', onScroll, { passive: true });
        railRef.current?.addEventListener('scroll', onScroll, { passive: true });
        update();
        const rail = railRef.current;
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
            rail?.removeEventListener('scroll', onScroll);
        };
    }, [n]);

    return (
        <section ref={sectionRef} className={classes.section} aria-labelledby="work-title">
            <div className={classes.sticky}>
                <div className={`container ${classes.head}`}>
                    <div>
                        <span className="eyebrow onDark">{t('nav.work')}</span>
                        <h2 id="work-title" className={classes.title}>
                            <AnimatedTitle text={t('work.headline')} accent={t('work.accent')} onView />
                        </h2>
                    </div>
                    <div className={classes.meta}>
                        <span ref={countRef} className={classes.count}>01 / {String(n).padStart(2, '0')}</span>
                        <span className={classes.track} aria-hidden="true"><span ref={barRef} className={classes.bar} /></span>
                        <Link to="/work" className={`textLink ${classes.all}`}>
                            {t('work.allLink')} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                <div ref={railRef} className={classes.rail}>
                    {projects.map((p, i) => (
                        <a
                            key={p.id}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.card}
                            data-cursor={t('work.visit')}
                        >
                            <div className={classes.panel} style={{ background: p.tint }}>
                                <span className={classes.index}>{String(i + 1).padStart(2, '0')}</span>
                                {p.demo && <span className={classes.demo}>{t('work.demo')}</span>}
                                <div className={`browser ${classes.shot}`}>
                                    <div className="browserBar"><span /><span /><span /></div>
                                    <img src={p.image} alt={`${p.name}: ${t(`work.items.${p.id}.type`)}`} loading="lazy" width={1200} height={750} />
                                </div>
                            </div>
                            <div className={classes.info}>
                                <h3 className={classes.name}>{p.name}</h3>
                                <p className={classes.type}>{t(`work.items.${p.id}.type`)} · {t(`work.items.${p.id}.place`)}</p>
                            </div>
                        </a>
                    ))}
                    <Link to="/work" className={`${classes.card} ${classes.endCard}`} data-cursor={t('work.allLink')}>
                        <span className="serif">{t('work.allLink')}</span>
                        <ArrowRight size={36} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
