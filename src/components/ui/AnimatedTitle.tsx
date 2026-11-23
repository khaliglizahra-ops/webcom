import { Fragment } from 'react';

/**
 * Headline whose letters rise one after another (each word is a mask, so a
 * word never breaks across lines). `accent` (a substring of `text`) is set in
 * the italic serif. `onView`: wait until scrolled into view instead of
 * playing on page load. Screen readers get the plain sentence.
 */
export default function AnimatedTitle({ text, accent, delay = 0, onView = false, step = 22 }: {
    text: string;
    accent?: string;
    delay?: number;
    onView?: boolean;
    /** ms between letters */
    step?: number;
}) {
    const start = accent ? text.toLocaleLowerCase().indexOf(accent.toLocaleLowerCase()) : -1;
    const end = start >= 0 ? start + accent!.length : -1;

    const parts = text.split(' ');
    const offsets = parts.map((_, i) => parts.slice(0, i).reduce((n, p) => n + p.length + 1, 0));
    // running letter count so the stagger flows across words
    const letterIndex = parts.map((_, i) => parts.slice(0, i).reduce((n, p) => n + p.length, 0));

    return (
        <span className="split" data-reveal={onView ? 'split' : undefined}>
            <span className="srOnly">{text}</span>
            {parts.map((word, wi) => {
                const isAccent = start >= 0 && offsets[wi] >= start && offsets[wi] < end;
                return (
                    <Fragment key={wi}>
                        <span className={`splitWord${isAccent ? ' serif' : ''}`} aria-hidden="true">
                            {[...word].map((ch, ci) => {
                                const d = delay + (letterIndex[wi] + ci) * step;
                                return (
                                    <span
                                        key={ci}
                                        className="splitInner"
                                        style={{ animationDelay: `${d}ms`, transitionDelay: `${d}ms` }}
                                    >
                                        {ch}
                                    </span>
                                );
                            })}
                        </span>
                        {wi < parts.length - 1 && ' '}
                    </Fragment>
                );
            })}
        </span>
    );
}
