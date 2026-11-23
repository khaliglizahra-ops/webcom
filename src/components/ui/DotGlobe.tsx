import { useEffect, useRef } from 'react';

/**
 * A slowly turning globe drawn from dots (Fibonacci sphere). Dots facing
 * the viewer are bright signal-green, the far side fades to grey. The
 * pointer tilts it slightly. Paused off screen; still for reduced motion.
 */
export default function DotGlobe({ className }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = ref.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let w = 0, h = 0, dpr = 1, raf = 0, visible = true, tilt = 0, tiltT = 0;

        const N = 1400;
        const pts = Array.from({ length: N }, (_, i) => {
            const y = 1 - (i / (N - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const th = Math.PI * (3 - Math.sqrt(5)) * i;
            return { x: Math.cos(th) * r, y, z: Math.sin(th) * r };
        });

        const size = () => {
            const r = cv.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = Math.max(1, Math.round(r.width * dpr));
            h = Math.max(1, Math.round(r.height * dpr));
            cv.width = w; cv.height = h;
        };
        size();
        const ro = new ResizeObserver(size);
        ro.observe(cv);
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(cv);
        const onMove = (e: PointerEvent) => { tiltT = (e.clientY / window.innerHeight - 0.5) * 0.6; };
        window.addEventListener('pointermove', onMove, { passive: true });

        const draw = (t: number) => {
            ctx.clearRect(0, 0, w, h);
            const R = Math.min(w, h) * 0.42;
            const cx = w / 2, cy = h / 2;
            const rot = t * 0.00018;
            tilt += (tiltT - tilt) * 0.05;
            const cr = Math.cos(rot), sr = Math.sin(rot), ct = Math.cos(0.35 + tilt), st = Math.sin(0.35 + tilt);

            // soft glow behind the globe
            const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.5);
            g.addColorStop(0, 'rgba(29,159,229,0.10)');
            g.addColorStop(1, 'rgba(29,159,229,0)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);

            for (const p of pts) {
                // rotate around Y, then tilt around X
                const x1 = p.x * cr - p.z * sr;
                const z1 = p.x * sr + p.z * cr;
                const y2 = p.y * ct - z1 * st;
                const z2 = p.y * st + z1 * ct;
                const depth = (z2 + 1) / 2; // 0 back → 1 front
                const size = (0.6 + depth * 1.6) * dpr;
                ctx.fillStyle = depth > 0.5
                    ? `rgba(29,159,229,${0.25 + (depth - 0.5) * 1.5})`
                    : `rgba(242,242,238,${0.05 + depth * 0.2})`;
                ctx.fillRect(cx + x1 * R - size / 2, cy + y2 * R - size / 2, size, size);
            }
            // equator ring
            ctx.strokeStyle = 'rgba(29,159,229,0.25)';
            ctx.lineWidth = 1 * dpr;
            ctx.beginPath();
            ctx.ellipse(cx, cy, R * 1.18, R * 1.18 * Math.abs(st) * 0.35 + R * 0.08, 0, 0, Math.PI * 2);
            ctx.stroke();
        };

        if (reduce) { draw(0); return () => { ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove); }; }
        const loop = (t: number) => { raf = requestAnimationFrame(loop); if (visible) draw(t); };
        raf = requestAnimationFrame(loop);
        return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove); };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
