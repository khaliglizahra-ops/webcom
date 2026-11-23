import { useEffect, useRef } from 'react';

/**
 * Desktop-only custom cursor plus magnetic pull.
 * - Any link/button: the dot grows into a soft ring.
 * - [data-cursor="Text"]: the dot becomes a dark bubble showing "Text".
 * - [data-magnetic]: the element leans toward the pointer while hovered.
 * Off on touch devices and for visitors who ask for reduced motion.
 */
export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)').matches;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dot = dotRef.current;
        if (!fine || reduce || !dot) return;

        document.documentElement.classList.add('has-cursor');
        let tx = -100, ty = -100, x = -100, y = -100, raf = 0;
        let magnet: HTMLElement | null = null;

        const onMove = (e: PointerEvent) => {
            tx = e.clientX;
            ty = e.clientY;
            dot.classList.remove('isHidden');

            if (magnet) {
                const r = magnet.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                magnet.style.transform = `translate(${dx * 0.25}px, ${dy * 0.3}px)`;
            }
        };

        const onOver = (e: PointerEvent) => {
            const el = e.target as HTMLElement;
            const labelled = el.closest<HTMLElement>('[data-cursor]');
            const link = el.closest('a, button, [role="button"], label');
            const mag = el.closest<HTMLElement>('[data-magnetic]');

            dot.classList.toggle('isLabel', !!labelled);
            dot.classList.toggle('isLink', !labelled && !!link);
            if (labelRef.current) labelRef.current.textContent = labelled?.dataset.cursor ?? '';

            if (mag !== magnet) {
                if (magnet) magnet.style.transform = '';
                magnet = mag;
            }
        };

        const onLeaveWindow = () => {
            dot.classList.add('isHidden');
            if (magnet) { magnet.style.transform = ''; magnet = null; }
        };

        const tick = () => {
            x += (tx - x) * 0.2;
            y += (ty - y) * 0.2;
            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerover', onOver);
        document.documentElement.addEventListener('pointerleave', onLeaveWindow);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerover', onOver);
            document.documentElement.removeEventListener('pointerleave', onLeaveWindow);
            document.documentElement.classList.remove('has-cursor');
        };
    }, []);

    return (
        <div ref={dotRef} className="cursor isHidden" aria-hidden="true">
            <span ref={labelRef} />
        </div>
    );
}
