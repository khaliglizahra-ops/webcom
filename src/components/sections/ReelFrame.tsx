import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pause, Play } from 'lucide-react';
import { projects } from '../../data/projects';
import classes from './ReelFrame.module.css';

const REEL = {
    desktop: { src: '/video/reel-desktop.mp4', poster: '/video/reel-desktop.jpg' },
    mobile: { src: '/video/reel-mobile.mp4', poster: '/video/reel-mobile.jpg' },
};

/** Showreel of client sites in a glowing frame that grows as it scrolls in. */
export default function ReelFrame() {
    const { t } = useTranslation();
    const frameRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mobile] = useState(() => window.matchMedia('(max-width: 700px)').matches);
    const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [playing, setPlaying] = useState(!reduce);
    const reel = mobile ? REEL.mobile : REEL.desktop;

    useEffect(() => {
        const f = frameRef.current;
        if (!f || reduce) return;
        let raf = 0;
        const update = () => {
            const r = f.parentElement!.getBoundingClientRect();
            const vh = window.innerHeight;
            const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
            f.style.setProperty('--p', p.toFixed(4));
        };
        const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
    }, [reduce]);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const io = new IntersectionObserver(([e]) => {
            if (!playing) return;
            if (e.isIntersecting) v.play().catch(() => {});
            else v.pause();
        });
        io.observe(v);
        return () => io.disconnect();
    }, [playing]);

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play().catch(() => {}); setPlaying(true); }
        else { v.pause(); setPlaying(false); }
    };

    return (
        <section className={classes.section}>
            <div className={classes.wrap}>
                <div
                    ref={frameRef}
                    className={`hud ${classes.frame}`}
                    onClick={toggle}
                    data-cursor={playing ? t('work.reelPause') : t('work.reelPlay')}
                >
                    <video
                        ref={videoRef}
                        className={classes.video}
                        src={reel.src}
                        poster={reel.poster}
                        muted
                        loop
                        playsInline
                        autoPlay={!reduce}
                        preload="auto"
                        aria-label={t('work.reelLabel')}
                    />
                    <div className={classes.shade} aria-hidden="true" />
                    <div className={classes.bar}>
                        <button
                            type="button"
                            className={classes.play}
                            onClick={(e) => { e.stopPropagation(); toggle(); }}
                            aria-label={playing ? t('work.reelPause') : t('work.reelPlay')}
                        >
                            {playing ? <Pause size={15} /> : <Play size={15} />}
                        </button>
                        <span>{t('work.reelLabel')} · {t('work.count', { count: projects.length })}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
