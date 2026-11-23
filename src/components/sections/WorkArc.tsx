import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedTitle from '../ui/AnimatedTitle';
import { projects } from '../../data/projects';
import { photo, type PhotoKey } from '../../data/photos';
import classes from './WorkArc.module.css';

const FILLERS: PhotoKey[] = ['bakery', 'barber', 'florist', 'barista', 'boutique', 'flowerShop', 'cafeOwner'];

/**
 * A ring of tiles turning slowly around a centred title: the client
 * sites (links) alternating with shop photos. Only the top of the ring
 * shows; scrolling nudges it round a little faster.
 */
export default function WorkArc() {
    const { t } = useTranslation();
    const ringRef = useRef<HTMLDivElement>(null);

    // interleave project tiles with photo tiles
    const tiles = projects.flatMap((p, i) => [
        { kind: 'project' as const, p },
        { kind: 'photo' as const, key: FILLERS[i % FILLERS.length] },
    ]);
    const n = tiles.length;

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let raf = 0, last = performance.now(), angle = 0, visible = true;
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(ring);
        let lastY = window.scrollY, boost = 0;
        const tick = (now: number) => {
            raf = requestAnimationFrame(tick);
            const dt = Math.min(64, now - last);
            last = now;
            if (!visible) return;
            const y = window.scrollY;
            boost += (y - lastY) * 0.02;
            lastY = y;
            boost *= 0.92;
            angle += dt * 0.006 + boost;
            ring.style.transform = `rotate(${angle}deg)`;
        };
        raf = requestAnimationFrame(tick);
        return () => { cancelAnimationFrame(raf); io.disconnect(); };
    }, []);

    return (
        <section className={classes.section} aria-labelledby="arc-title">
            <div className={classes.stage} aria-hidden="false">
                <div ref={ringRef} className={classes.ring}>
                    {tiles.map((tile, i) => {
                        const style = { '--a': `${(360 / n) * i}deg` } as React.CSSProperties;
                        if (tile.kind === 'project') {
                            const p = tile.p;
                            return (
                                <a
                                    key={p.id}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${classes.tile} ${classes.project}`}
                                    style={{ ...style, background: p.tint }}
                                    data-cursor={p.name}
                                    aria-label={`${p.name}: ${t('work.visit')}`}
                                >
                                    <img src={p.image} alt="" loading="lazy" />
                                </a>
                            );
                        }
                        return (
                            <div key={`ph-${i}`} className={classes.tile} style={style} aria-hidden="true">
                                <img src={photo(tile.key, 400)} alt="" loading="lazy" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={`container ${classes.center}`}>
                <span className={classes.badge}>{t('nav.work')}</span>
                <h2 id="arc-title" className={classes.title}>
                    <AnimatedTitle text={t('work.arcTitle')} accent={t('work.arcAccent')} onView />
                </h2>
                <p className={classes.sub} data-reveal="up">{t('work.arcSub')}</p>
                <div data-reveal="up" style={{ '--d': '150ms' } as React.CSSProperties}>
                    <Button to="/work" variant="accent">
                        {t('work.allLink')} <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
