import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedTitle from '../ui/AnimatedTitle';
import RotatingWord from '../ui/RotatingWord';
import { buildShapes } from '../ui/ParticleField';
import classes from './Hero.module.css';

const CHAPTERS = 4; // shapes after the opening sphere

const smooth = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

/**
 * Home hero as a pinned scroll story. It opens on a centred headline over a
 * glowing sphere of dots; as you scroll, the dots regroup into a browser, a
 * shopping bag, a map pin and a rising chart, one per service, while the
 * matching line of copy takes over the bottom-left.
 */
export default function Hero() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const [chapter, setChapter] = useState(0);
    const words = t('hero.words').split('|');
    const before = t('hero.before');
    const after = t('hero.after');

    useEffect(() => {
        const section = sectionRef.current, canvas = canvasRef.current, heroEl = heroRef.current;
        if (!section || !canvas || !heroEl) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const small = window.matchMedia('(max-width: 700px)').matches;
        const N = small ? 1500 : 2600;
        const shapes = buildShapes(N);
        // per-dot traits: morph delay, scatter direction, colour group, size
        const delay = new Float32Array(N);
        const scat = new Float32Array(N * 3);
        const group = new Uint8Array(N);
        for (let i = 0; i < N; i++) {
            delay[i] = Math.random();
            scat[i * 3] = Math.random() - 0.5;
            scat[i * 3 + 1] = Math.random() - 0.5;
            scat[i * 3 + 2] = Math.random() - 0.5;
            const r = Math.random();
            group[i] = r < 0.8 ? 0 : r < 0.94 ? 1 : 2;
        }
        const sx = new Float32Array(N), sy = new Float32Array(N), sz = new Float32Array(N);

        let w = 0, h = 0, dpr = 1;
        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75);
            w = canvas.clientWidth; h = canvas.clientHeight;
            canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, nx: 0, ny: 0 };
        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top;
            mouse.nx = (mouse.tx / r.width) * 2 - 1; mouse.ny = (mouse.ty / r.height) * 2 - 1;
        };
        const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999; mouse.nx = 0; mouse.ny = 0; };
        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerleave', onLeave);

        let visible = true;
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(section);

        let raf = 0, last = -1, rotX = 0, rotY = 0;
        const t0 = performance.now();

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame);
            if (!visible) return;
            const time = reduce ? 0 : (now - t0) / 1000;

            // scroll progress through the pinned stretch → 0 … CHAPTERS
            const r = section.getBoundingClientRect();
            const travel = Math.max(1, r.height - window.innerHeight);
            const P = Math.min(1, Math.max(0, -r.top / travel)) * CHAPTERS;
            const a = Math.min(CHAPTERS - 1, Math.floor(P));
            const f = P - a;
            const ch = Math.round(P);
            if (ch !== last) { last = ch; setChapter(ch); }

            // the opening copy fades out on the first bit of scroll
            const heroOut = smooth(P / 0.45);
            heroEl.style.opacity = String(1 - heroOut);
            heroEl.style.transform = `translateY(${-heroOut * 60}px)`;
            heroEl.style.pointerEvents = heroOut > 0.5 ? 'none' : '';

            // where the shape sits: low-centre under the headline, then right of the copy
            const open = 1 - smooth(P);
            const cxA = w / 2, cyA = h * (small ? 0.7 : 0.69), RA = Math.min(w, h) * (small ? 0.3 : 0.24);
            const cxB = small ? w / 2 : w * 0.66, cyB = h * (small ? 0.4 : 0.46), RB = Math.min(w, h) * (small ? 0.44 : 0.4);
            const cx = cxB + (cxA - cxB) * open, cy = cyB + (cyA - cyB) * open, R = RB + (RA - RB) * open;

            mouse.x += (mouse.tx - mouse.x) * 0.12; mouse.y += (mouse.ty - mouse.y) * 0.12;
            rotX += (mouse.ny * 0.1 - rotX) * 0.04;
            rotY += (mouse.nx * 0.16 - rotY) * 0.04;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);

            // glow core: strongest on the opening sphere
            const glow = 0.25 + 0.75 * open;
            ctx.globalCompositeOperation = 'lighter';
            const pulse = 1;
            const blobs: [number, number, number, string][] = [
                [-0.18, -0.1, 1.15, '29,159,229'],
                [0.2, 0.08, 0.85, '53,212,222'],
            ];
            for (const [ox, oy, s, col] of blobs) {
                const gx = cx + ox * R, gy = cy + oy * R, gr = R * s * pulse;
                const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
                g.addColorStop(0, `rgba(${col},${0.16 * glow})`);
                g.addColorStop(1, `rgba(${col},0)`);
                ctx.fillStyle = g;
                ctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
            }

            // dots
            const A = shapes[a], B = shapes[a + 1];
            const spinA = a === 0 ? time * 0.1 : Math.sin(time * 0.25) * 0.18;
            const spinB = Math.sin(time * 0.25) * 0.18;
            const cA = Math.cos(spinA + rotY), sA = Math.sin(spinA + rotY);
            const cB = Math.cos(spinB + rotY), sB = Math.sin(spinB + rotY);
            const cX = Math.cos(rotX), sXr = Math.sin(rotX);
            const persp = 3.2;
            for (let i = 0; i < N; i++) {
                const k = i * 3;
                // staggered morph with a little scatter in the middle
                const ti = smooth((f - 0.18 - delay[i] * 0.34) / 0.32);
                // rotate both shapes, then blend
                const x1 = A[k] * cA + A[k + 2] * sA, z1 = -A[k] * sA + A[k + 2] * cA;
                const x2 = B[k] * cB + B[k + 2] * sB, z2 = -B[k] * sB + B[k + 2] * cB;
                const y1 = A[k + 1], y2 = B[k + 1];
                const bump = Math.sin(ti * Math.PI) * 0.22;
                const x = x1 + (x2 - x1) * ti + scat[k] * bump;
                let y = y1 + (y2 - y1) * ti + scat[k + 1] * bump;
                let z = z1 + (z2 - z1) * ti + scat[k + 2] * bump;
                // tilt toward the pointer
                const y3 = y * cX - z * sXr; z = y * sXr + z * cX; y = y3;
                const p = persp / (persp + z);
                let px = cx + x * R * p, py = cy + y * R * p;
                // dots step out of the pointer's way
                const dx = px - mouse.x, dy = py - mouse.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < 9000) {
                    const d = Math.sqrt(d2) || 1, push = (1 - d / 95) * 12;
                    px += (dx / d) * push; py += (dy / d) * push;
                }
                sx[i] = px; sy[i] = py; sz[i] = p;
            }
            ctx.globalCompositeOperation = 'source-over';
            const colours = ['255,255,255', '29,159,229', '53,212,222'];
            for (let gIdx = 0; gIdx < 3; gIdx++) {
                ctx.fillStyle = `rgb(${colours[gIdx]})`;
                for (let i = 0; i < N; i++) {
                    if (group[i] !== gIdx) continue;
                    const p = sz[i];
                    ctx.globalAlpha = Math.min(1, Math.max(0.15, (p - 0.6) * 2.4));
                    const s = (small ? 1.5 : 1.75) * p;
                    ctx.fillRect(sx[i] - s / 2, sy[i] - s / 2, s, s);
                }
            }
            ctx.globalAlpha = 1;

            // bright core on the sphere, like a small sun inside the dust
            if (open > 0.02) {
                const cr = 4.5 * open * pulse;
                const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 5);
                g.addColorStop(0, `rgba(255,255,255,${open})`);
                g.addColorStop(0.2, `rgba(255,255,255,${open})`);
                g.addColorStop(0.45, `rgba(140,220,245,${0.2 * open})`);
                g.addColorStop(1, 'rgba(29,159,229,0)');
                ctx.fillStyle = g;
                ctx.beginPath(); ctx.arc(cx, cy, cr * 5, 0, Math.PI * 2); ctx.fill();
            }
        };
        raf = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect(); io.disconnect();
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    const chapters = [1, 2, 3, 4].map(n => ({
        label: t(`tech.c${n}Label`),
        text: t(`tech.c${n}Text`),
        accent: t(`tech.c${n}Accent`),
    }));

    return (
        <section ref={sectionRef} className={classes.story}>
            <div className={classes.sticky}>
                <canvas ref={canvasRef} className={classes.canvas} aria-hidden="true" />

                {/* opening: centred headline */}
                <div ref={heroRef} className={`container ${classes.hero}`}>
                    <h1 className={classes.headline}>
                        {before && (
                            <span className={`${classes.line} ${classes.dim}`}>
                                <AnimatedTitle text={before} delay={120} step={20} onView />
                            </span>
                        )}
                        <span className={classes.line} data-reveal="up" style={{ '--d': before ? '450ms' : '120ms' } as React.CSSProperties}>
                            <RotatingWord words={words} className={classes.rot} startDelay={2200} />
                        </span>
                        {after && (
                            <span className={`${classes.line} ${classes.dim}`}>
                                <AnimatedTitle text={after} delay={420} step={20} onView />
                            </span>
                        )}
                    </h1>
                    <p className={classes.sub} data-reveal="up" style={{ '--d': '700ms' } as React.CSSProperties}>
                        {t('hero.subheadline')}
                    </p>
                    <div className={classes.ctas} data-reveal="up" style={{ '--d': '850ms' } as React.CSSProperties}>
                        <Button to="/strategy-call" variant="accent">
                            {t('hero.primaryCta')} <ArrowRight size={16} />
                        </Button>
                        <Button to="/work" variant="glass">
                            {t('hero.secondaryCta')}
                        </Button>
                    </div>
                </div>

                {/* one line per service */}
                <div className={`container ${classes.chapters}`}>
                    {chapters.map((c, i) => (
                        <div key={i} className={`${classes.chapter} ${chapter === i + 1 ? classes.on : ''}`} aria-hidden={chapter !== i + 1}>
                            <p className={classes.label}>{c.label}</p>
                            <p className={classes.text}>
                                {c.text} <span className={classes.accent}>{c.accent}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`mono ${classes.scroll} ${chapter > 0 ? classes.gone : ''}`} aria-hidden="true">
                    {t('tech.scroll')} ↓
                </div>
            </div>
        </section>
    );
}
