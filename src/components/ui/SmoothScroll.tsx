import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../../utils/lenis';

/**
 * Inertia ("smooth") scrolling for mouse and trackpad. Touch devices keep
 * native scrolling, and it is off for visitors who ask for reduced motion.
 * Lenis drives the real window scroll, so sticky sections and scroll
 * listeners keep working.
 */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const lenis = new Lenis({ duration: 1.15, easing: (t: number) => 1 - Math.pow(1 - t, 3.2), wheelMultiplier: 0.95 });
        setLenis(lenis);
        document.documentElement.classList.add('lenis');
        let raf = 0;
        const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            setLenis(null);
            document.documentElement.classList.remove('lenis');
        };
    }, []);
    return null;
}
