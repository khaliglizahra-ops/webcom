import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isReady, READY_EVENT } from '../utils/gate';

/**
 * Scroll-reveal for any element with a `data-reveal` attribute.
 * Adds `is-in` once the element enters the viewport. Watches the DOM so
 * elements that mount later (route changes, lazy sections) are picked up too.
 */
export default function useReveal() {
    const { pathname } = useLocation();

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const io = new IntersectionObserver(
            entries => {
                if (!isReady()) return; // the ready event sweeps once the intro/preloader is gone
                for (const e of entries) {
                    if (e.isIntersecting || e.boundingClientRect.top < 0) {
                        e.target.classList.add('is-in');
                        io.unobserve(e.target);
                    }
                }
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0 }
        );

        const scan = (root: ParentNode) => {
            root.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach(el => {
                if (reduce) el.classList.add('is-in');
                else io.observe(el);
            });
        };

        scan(document);
        const mo = new MutationObserver(muts => {
            for (const m of muts) m.addedNodes.forEach(n => { if (n instanceof HTMLElement) scan(n.parentElement ?? n); });
        });
        mo.observe(document.body, { childList: true, subtree: true });

        // Fallback for fast jumps (End key, anchor links) where the observer can
        // miss an element: reveal anything that is already above the fold line.
        let raf = 0;
        const sweep = () => {
            if (!isReady()) return;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const limit = window.innerHeight * 0.95;
                document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach(el => {
                    if (el.getBoundingClientRect().top < limit) {
                        el.classList.add('is-in');
                        io.unobserve(el);
                    }
                });
            });
        };
        window.addEventListener('scroll', sweep, { passive: true });
        window.addEventListener('resize', sweep);
        window.addEventListener(READY_EVENT, sweep);
        const settle = window.setTimeout(sweep, 300);

        return () => {
            io.disconnect();
            mo.disconnect();
            window.removeEventListener('scroll', sweep);
            window.removeEventListener('resize', sweep);
            window.removeEventListener(READY_EVENT, sweep);
            window.clearTimeout(settle);
            cancelAnimationFrame(raf);
        };
    }, [pathname]);
}
