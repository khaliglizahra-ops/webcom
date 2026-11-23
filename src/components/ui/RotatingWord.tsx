import { useEffect, useState } from 'react';

/**
 * Cycles through `words`: the current word slides up and out while the next
 * one rises in. The slot is as wide as the longest word so the line never
 * jumps. Screen readers get all words once; reduced motion shows the first.
 */
export default function RotatingWord({ words, className, interval = 2600, startDelay = 1400 }: {
    words: string[];
    className?: string;
    interval?: number;
    startDelay?: number;
}) {
    const [i, setI] = useState(0);
    const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

    useEffect(() => {
        if (words.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let timer = 0;
        const start = window.setTimeout(() => {
            timer = window.setInterval(() => setI(n => (n + 1) % words.length), interval);
        }, startDelay);
        return () => { window.clearTimeout(start); window.clearInterval(timer); };
    }, [words.length, interval, startDelay]);

    return (
        <span className={`rotWord ${className ?? ''}`}>
            <span className="srOnly">{words.join(', ')}</span>
            {/* invisible sizer keeps the slot as wide as the longest word */}
            <span className="rotSizer" aria-hidden="true">{longest}</span>
            {words.map((w, k) => (
                <span
                    key={w}
                    aria-hidden="true"
                    className={`rotItem ${k === i ? 'isOn' : ''} ${k === (i - 1 + words.length) % words.length ? 'isOut' : ''}`}
                >
                    {w}
                </span>
            ))}
        </span>
    );
}
