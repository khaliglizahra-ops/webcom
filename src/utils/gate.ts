/**
 * Entrance gate. While anything holds the gate (the glitch intro, the
 * preloader), <html> carries `is-loading` and scroll reveals wait, so the
 * hero's entrance plays when the visitor can actually see it.
 */
const holds = new Set<string>();

export const READY_EVENT = 'webcom:ready';

export function hold(name: string) {
    holds.add(name);
    document.documentElement.classList.add('is-loading');
}

export function release(name: string) {
    if (!holds.delete(name)) return;
    if (holds.size === 0) {
        document.documentElement.classList.remove('is-loading');
        window.dispatchEvent(new Event(READY_EVENT));
    }
}

export const isReady = () => holds.size === 0;
