import { useEffect, useRef } from 'react';

/**
 * Generative flow field: particles drift along an invisible, slowly
 * changing current and leave fading trails, like hair or wind lines.
 * The pointer stirs a soft vortex. Pauses off screen; a single still
 * frame for reduced motion.
 */
export default function FlowField({ className, color = '29, 159, 229' }: { className?: string; color?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = ref.current;
        if (!cv) return;
        const ctx = cv.getContext('2d', { alpha: false });
        if (!ctx) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let w = 0, h = 0, dpr = 1, raf = 0, visible = true;
        let mx = -1e4, my = -1e4;
        type P = { x: number; y: number; px: number; py: number; life: number; speed: number; tone: number };
        let ps: P[] = [];

        const spawn = (p?: P): P => {
            const x = Math.random() * w, y = Math.random() * h;
            const q = p ?? ({} as P);
            q.x = q.px = x; q.y = q.py = y;
            q.life = 80 + Math.random() * 220;
            q.speed = (0.6 + Math.random() * 1.1) * dpr;
            q.tone = Math.random();
            return q;
        };

        const size = () => {
            const r = cv.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 1.75);
            w = Math.max(1, Math.round(r.width * dpr));
            h = Math.max(1, Math.round(r.height * dpr));
            cv.width = w; cv.height = h;
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, w, h);
            const n = Math.round(Math.min(2600, (r.width * r.height) / 520));
            ps = Array.from({ length: n }, () => spawn());
        };
        size();
        const ro = new ResizeObserver(size);
        ro.observe(cv);

        const onMove = (e: PointerEvent) => {
            const r = cv.getBoundingClientRect();
            mx = (e.clientX - r.left) * dpr;
            my = (e.clientY - r.top) * dpr;
        };
        const onLeave = () => { mx = my = -1e4; };
        window.addEventListener('pointermove', onMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onLeave);
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(cv);

        // smooth, slowly evolving angle field built from layered waves
        const angle = (x: number, y: number, t: number) => {
            const f = 0.0016 / dpr;
            return (
                Math.sin(x * f + t * 0.00012) * 1.4 +
                Math.cos(y * f * 1.35 - t * 0.0001) * 1.2 +
                Math.sin((x + y) * f * 0.55 + t * 0.00007) * 0.9
            ) * Math.PI * 0.55;
        };

        const step = (t: number) => {
            // fade old trails toward black
            ctx.fillStyle = 'rgba(5, 5, 5, 0.07)';
            ctx.fillRect(0, 0, w, h);
            ctx.lineWidth = 1 * dpr;
            const R = 170 * dpr;
            for (const p of ps) {
                let a = angle(p.x, p.y, t);
                // pointer vortex: bend lines around the cursor
                const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
                if (d < R) {
                    const k = 1 - d / R;
                    a += k * 2.2;
                }
                p.px = p.x; p.py = p.y;
                const sp = p.speed * (d < R ? 1 + (1 - d / R) * 1.6 : 1);
                p.x += Math.cos(a) * sp;
                p.y += Math.sin(a) * sp;
                p.life--;
                if (p.life <= 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) { spawn(p); continue; }
                const alpha = 0.18 + p.tone * 0.4 + (d < R ? (1 - d / R) * 0.4 : 0);
                ctx.strokeStyle = p.tone > 0.92 ? `rgba(242, 242, 238, ${alpha})` : `rgba(${color}, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(p.px, p.py);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        };

        if (reduce) {
            for (let i = 0; i < 260; i++) step(i * 16);
            return () => { ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove); };
        }

        const loop = (t: number) => {
            raf = requestAnimationFrame(loop);
            if (visible) step(t);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            window.removeEventListener('pointermove', onMove);
            document.documentElement.removeEventListener('pointerleave', onLeave);
        };
    }, [color]);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
