import { useEffect, useRef } from 'react';

/**
 * A planet's edge rising from the bottom of the hero: a glowing blue→violet
 * rim with a light sweeping along it, and the surface drawn as halftone dots
 * that shimmer and brighten under the pointer. Canvas, paused off screen.
 */
export default function Horizon({ className }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = ref.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let w = 0, h = 0, dpr = 1, raf = 0, visible = true;
        let mx = -9999, my = -9999, sx = -9999, sy = -9999;

        const size = () => {
            const r = cv.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = Math.max(1, Math.round(r.width * dpr));
            h = Math.max(1, Math.round(r.height * dpr));
            cv.width = w;
            cv.height = h;
        };
        size();
        const ro = new ResizeObserver(size);
        ro.observe(cv);

        const onMove = (e: PointerEvent) => {
            const r = cv.getBoundingClientRect();
            mx = (e.clientX - r.left) * dpr;
            my = (e.clientY - r.top) * dpr;
        };
        window.addEventListener('pointermove', onMove, { passive: true });

        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(cv);

        const draw = (t: number) => {
            raf = requestAnimationFrame(draw);
            if (!visible) return;
            sx += (mx - sx) * 0.08;
            sy += (my - sy) * 0.08;

            ctx.clearRect(0, 0, w, h);
            // planet: a huge circle whose top edge sits ~38% down the canvas
            const R = Math.max(w * 0.95, h * 1.6);
            const cx = w / 2;
            const cy = h * 0.38 + R;
            const time = reduce ? 0 : t / 1000;

            // halftone surface: dots inside the circle, biggest just under the rim
            const step = Math.round((w < 900 * dpr ? 9 : 11) * dpr);
            const band = h * 0.62;
            const maxR = step * 0.42;
            for (let y = Math.floor((cy - R) / step) * step; y < h; y += step) {
                for (let x = (Math.floor(y / step) % 2) * step / 2; x < w; x += step) {
                    const d = Math.hypot(x - cx, y - cy);
                    const depth = R - d;                // distance below the rim
                    if (depth < 0 || depth > band) continue;
                    const fall = 1 - depth / band;      // 1 at the rim → 0 deep down
                    const shimmer = 0.75 + 0.25 * Math.sin(time * 1.6 + x * 0.012 + y * 0.02);
                    const near = Math.max(0, 1 - Math.hypot(x - sx, y - sy) / (180 * dpr));
                    const r = maxR * Math.min(1, fall * fall * shimmer + near * 0.9);
                    if (r < 0.35) continue;
                    // colour drifts from blue (left) to violet (right), white under the pointer
                    const k = x / w;
                    const red = 47 + (168 - 47) * k, green = 164 + (85 - 164) * k, blue = 240 + (247 - 240) * k;
                    const a = 0.25 + 0.6 * fall + near * 0.5;
                    ctx.fillStyle = near > 0.15
                        ? `rgba(${255 - (255 - red) * (1 - near)}, ${255 - (255 - green) * (1 - near)}, 255, ${Math.min(1, a)})`
                        : `rgba(${red | 0}, ${green | 0}, ${blue | 0}, ${Math.min(1, a)})`;
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // rim glow: wide soft light, then a thin bright edge
            const rim = ctx.createLinearGradient(0, 0, w, 0);
            rim.addColorStop(0, 'rgba(47,164,240,0)');
            rim.addColorStop(0.2, 'rgba(47,164,240,0.9)');
            rim.addColorStop(0.5, 'rgba(124,108,255,1)');
            rim.addColorStop(0.8, 'rgba(168,85,247,0.9)');
            rim.addColorStop(1, 'rgba(168,85,247,0)');
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            for (const [lw, blur, alpha] of [[60, 80, 0.35], [18, 40, 0.6], [3, 12, 1]] as const) {
                ctx.beginPath();
                ctx.arc(cx, cy, R, Math.PI * 1.08, Math.PI * 1.92);
                ctx.strokeStyle = rim;
                ctx.globalAlpha = alpha;
                ctx.lineWidth = lw * dpr;
                ctx.shadowColor = 'rgba(124,108,255,0.9)';
                ctx.shadowBlur = blur * dpr;
                ctx.stroke();
            }
            // a light that travels along the rim
            const sweep = Math.PI * (1.15 + 0.7 * (0.5 + 0.5 * Math.sin(time * 0.45)));
            const lx = cx + R * Math.cos(sweep), ly = cy + R * Math.sin(sweep);
            const flare = ctx.createRadialGradient(lx, ly, 0, lx, ly, 160 * dpr);
            flare.addColorStop(0, 'rgba(255,255,255,0.85)');
            flare.addColorStop(0.15, 'rgba(190,180,255,0.45)');
            flare.addColorStop(1, 'rgba(124,108,255,0)');
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            ctx.fillStyle = flare;
            ctx.fillRect(lx - 160 * dpr, ly - 160 * dpr, 320 * dpr, 320 * dpr);
            ctx.restore();

            if (reduce) cancelAnimationFrame(raf);
        };
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            window.removeEventListener('pointermove', onMove);
        };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
