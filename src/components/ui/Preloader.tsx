import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hold, release } from '../../utils/gate';
import { getLenis } from '../../utils/lenis';
import classes from './Preloader.module.css';

/**
 * 0–100 loading screen. Counts up while the homepage reel and fonts load
 * (at least ~1.3 s, at most ~3 s), then the panel lifts like a curtain.
 */
export default function Preloader() {
    const { t } = useTranslation();
    const pctRef = useRef<HTMLSpanElement>(null);
    const [phase, setPhase] = useState<'count' | 'lift' | 'gone'>('count');
    const numRef = useRef<HTMLSpanElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        hold('preloader');
        document.documentElement.style.overflow = 'hidden';

        let loaded = false;
        const done = () => { loaded = true; };
        // "loaded" = fonts ready and the reel can play (or the timeout passes)
        const video = document.querySelector('video');
        Promise.all([
            document.fonts?.ready ?? Promise.resolve(),
            new Promise<void>(res => {
                if (!video || video.readyState >= 3) return res();
                video.addEventListener('canplay', () => res(), { once: true });
            }),
        ]).then(done);
        const hardStop = window.setTimeout(done, 3000);

        const t0 = performance.now();
        let shown = 0, raf = 0, stopped = false;
        const tick = (t: number) => {
            // Lenis scrolls by script, so pause it too (it mounts a moment after us)
            const lenis = getLenis();
            if (lenis && !stopped) { lenis.stop(); stopped = true; }
            const elapsed = t - t0;
            // creep toward 90 while loading, then race to 100
            const target = loaded && elapsed > 1300 ? 100 : Math.min(90, (elapsed / 1300) * 90);
            shown += (target - shown) * (reduce ? 1 : 0.12);
            const n = Math.min(100, Math.round(shown));
            if (numRef.current) numRef.current.textContent = String(n).padStart(2, '0');
            if (pctRef.current) pctRef.current.textContent = String(n).padStart(3, '0');
            if (barRef.current) barRef.current.style.transform = `scaleX(${n / 100})`;
            if (n >= 100) {
                setPhase('lift');
                document.documentElement.style.overflow = '';
                getLenis()?.start();
                release('preloader');
                window.setTimeout(() => setPhase('gone'), 1100);
                return;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.clearTimeout(hardStop);
            document.documentElement.style.overflow = '';
            getLenis()?.start();
            release('preloader');
        };
    }, []);

    if (phase === 'gone') return null;

    return (
        <div className={`${classes.loader} ${phase === 'lift' ? classes.lift : ''}`} aria-hidden="true">
            <div className={classes.top}>
                <img src="/logo.png?v=6" alt="" className={classes.logo} />
                <span className={classes.mono}>WEBCOM // v2026</span>
            </div>
            <div className={classes.center}>
                <span className={classes.mono}>{t('tech.preparing')} // [<span ref={pctRef}>000</span>%]<i className={classes.caret} /></span>
            </div>
            <div className={classes.bottom}>
                <span className={classes.track}><span ref={barRef} className={classes.bar} /></span>
                <span ref={numRef} className={classes.num}>00</span>
            </div>
        </div>
    );
}
