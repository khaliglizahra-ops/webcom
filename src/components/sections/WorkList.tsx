import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import classes from './WorkList.module.css';

/**
 * All projects as a large list. On desktop a preview of the hovered site
 * follows the pointer and tilts with its speed; on phones each row shows
 * its own screenshot.
 */
export default function WorkList() {
    const { t } = useTranslation();
    const wrapRef = useRef<HTMLDivElement>(null);
    const floatRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        const wrap = wrapRef.current, fl = floatRef.current;
        if (!wrap || !fl) return;
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let tx = 0, ty = 0, x = 0, y = 0, raf = 0, running = false;
        const tick = () => {
            const nx = x + (tx - x) * (reduce ? 1 : 0.14);
            const vx = nx - x;
            x = nx;
            y += (ty - y) * (reduce ? 1 : 0.14);
            const tilt = Math.max(-10, Math.min(10, vx * 0.6));
            fl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`;
            raf = running ? requestAnimationFrame(tick) : 0;
        };
        const onMove = (e: PointerEvent) => {
            const r = wrap.getBoundingClientRect();
            tx = e.clientX - r.left;
            ty = e.clientY - r.top;
            if (!running) { running = true; x = tx; y = ty; raf = requestAnimationFrame(tick); }
        };
        const onLeave = () => { running = false; cancelAnimationFrame(raf); setActive(null); };
        wrap.addEventListener('pointermove', onMove);
        wrap.addEventListener('pointerleave', onLeave);
        return () => {
            cancelAnimationFrame(raf);
            wrap.removeEventListener('pointermove', onMove);
            wrap.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return (
        <div ref={wrapRef} className={classes.wrap}>
            <ul className={classes.list}>
                {projects.map((p, i) => (
                    <li key={p.id} data-reveal="up" style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${classes.row} ${active === i ? classes.on : ''} ${active !== null && active !== i ? classes.dim : ''}`}
                            onPointerEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onBlur={() => setActive(null)}
                            data-cursor={t('work.visit')}
                        >
                            <span className={classes.num}>{String(i + 1).padStart(2, '0')}</span>
                            <span className={classes.name}>
                                {p.name}
                                {p.demo && <span className={classes.demo}>{t('work.demo')}</span>}
                            </span>
                            <span className={classes.type}>{t(`work.items.${p.id}.type`)}</span>
                            <span className={classes.place}>{t(`work.items.${p.id}.place`)}</span>
                            <span className={classes.arrow} aria-hidden="true"><ArrowUpRight size={20} /></span>
                            <span className={classes.desc}>{t(`work.items.${p.id}.desc`)}</span>
                            <img className={classes.thumb} src={p.image} alt="" loading="lazy" width={1200} height={750} />
                        </a>
                    </li>
                ))}
            </ul>

            {/* floating preview: desktop only */}
            <div ref={floatRef} className={`${classes.float} ${active !== null ? classes.floatOn : ''}`} aria-hidden="true">
                {projects.map((p, i) => (
                    <div
                        key={p.id}
                        className={`${classes.floatItem} ${active === i ? classes.floatItemOn : ''}`}
                        style={{ background: p.tint }}
                    >
                        <img src={p.image} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
