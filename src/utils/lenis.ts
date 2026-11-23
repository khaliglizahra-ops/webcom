import type Lenis from 'lenis';

/** Shared handle to the running Lenis instance (null on touch / reduced motion). */
let instance: Lenis | null = null;

export const getLenis = () => instance;
export const setLenis = (l: Lenis | null) => { instance = l; };
