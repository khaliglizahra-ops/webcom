import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import classes from './Manifesto.module.css';

/**
 * Centred statement that holds on screen while its words light up one by
 * one as you scroll. Without pinning (phones, reduced motion) the words
 * light up as the paragraph passes through the viewport.
 */
export default function Manifesto() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const words = t('manifesto.text').split(' ');

    useEffect(() => {
        const s = sectionRef.current, p = textRef.current;
        if (!s || !p) return;
        const spans = [...p.querySelectorAll<HTMLSpanElement>('span[data-w]')];
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            spans.forEach(sp => sp.classList.add(classes.lit));
            return;
        }
        let raf = 0;
        const update = () => {
            const r = s.getBoundingClientRect();
            const vh = window.innerHeight;
            const travel = Math.max(1, r.height - vh);
            // progress through the pinned stretch (or the viewport when not pinned)
            const prog = r.height > vh * 1.2
                ? Math.min(1, Math.max(0, -r.top / travel))
                : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
            const lit = Math.round(prog * 1.15 * spans.length);
            spans.forEach((sp, i) => sp.classList.toggle(classes.lit, i < lit));
        };
        const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
    }, [words.length]);

    return (
        <section ref={sectionRef} className={classes.section}>
            <div className={classes.sticky}>
                <div className={`container ${classes.inner}`}>
                    <span className={classes.badge}>{t('manifesto.badge')}</span>
                    <p ref={textRef} className={classes.text}>
                        <span className="srOnly">{t('manifesto.text')}</span>
                        {words.map((w, i) => (
                            <span key={i} data-w aria-hidden="true" className={classes.word}>{w} </span>
                        ))}
                    </p>
                    <Button to="/strategy-call" variant="accent">
                        {t('hero.primaryCta')} <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
