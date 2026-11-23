// Renders every page in every language to static HTML after `vite build`,
// so search engines and link previews get real content, titles and hreflang
// tags without running JavaScript. The app still boots normally on top.
//
// usage: node scripts/prerender.mjs   (after `npm run build`)
// CHROME_PATH can point at a Chrome/Chromium binary.
//
// Chrome is driven over the DevTools protocol so each page is captured only
// once its head tags (title, canonical) are actually in place: react-helmet
// applies them on an animation frame, which a plain --dump-dom can miss.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, mkdtempSync, rmSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';

const ROUTES = ['/', '/services', '/work', '/about', '/process', '/contact', '/strategy-call', '/blog'];
const LANGS = ['tr', 'en', 'az'];
// Azerbaijani-only pages
const EXTRA = ['/az/guides', '/az/guides/sayt-qiymeti', '/az/guides/onlayn-magaza-acmaq', '/az/guides/google-xeritelerde-biznes', '/az/guides/instagram-ve-sayt'];
const PORT = 4179;
const DEBUG_PORT = 9333;
const DIST = 'dist';

const localize = (r, l) => (l === 'tr' ? r : `/${l}${r === '/' ? '/' : r}`);
const sleep = ms => new Promise(r => setTimeout(r, ms));

function findChrome() {
    const c = [
        process.env.CHROME_PATH,
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium-browser',
        '/usr/bin/chromium',
    ].filter(Boolean);
    const hit = c.find(p => existsSync(p));
    if (!hit) throw new Error('Chrome not found; set CHROME_PATH');
    return hit;
}

async function waitFor(url, tries = 80) {
    for (let i = 0; i < tries; i++) {
        try { const r = await fetch(url); if (r.ok) return r; } catch { /* not up yet */ }
        await sleep(250);
    }
    throw new Error(`not reachable: ${url}`);
}

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
const profile = mkdtempSync(join(tmpdir(), 'prerender-chrome-'));
const chrome = spawn(findChrome(), [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--lang=tr-TR',
    `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' });
const out = mkdtempSync(join(tmpdir(), 'prerender-'));

try {
    await waitFor(`http://localhost:${PORT}/`);
    const targets = await (await waitFor(`http://127.0.0.1:${DEBUG_PORT}/json`)).json();
    const page = targets.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.addEventListener('open', res, { once: true }); ws.addEventListener('error', rej, { once: true }); });
    let id = 0;
    const pending = new Map();
    ws.addEventListener('message', e => {
        const m = JSON.parse(e.data);
        if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    });
    const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    const evaluate = async expression => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.result?.value;

    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await send('Page.enable');

    const paths = [...LANGS.flatMap(lang => ROUTES.map(route => localize(route, lang))), ...EXTRA];
    for (const path of paths) {
        await send('Page.navigate', { url: `http://localhost:${PORT}${path}` });
        // wait for the app to render and for helmet to write the head tags
        let ready = false;
        for (let i = 0; i < 100 && !ready; i++) {
            await sleep(100);
            ready = await evaluate(`!!(document.querySelector('#root main') && document.querySelector('link[rel=canonical]') && document.querySelector('link[rel=canonical]').href.endsWith(${JSON.stringify(path === '/' ? '/' : path)}))`);
        }
        if (!ready) throw new Error(`page did not finish rendering: ${path}`);
        await sleep(300);
        const html = await evaluate('document.documentElement.outerHTML');
        // /az/services → az/services.html, served by GitHub Pages at /az/services with no redirect
        const file = path.endsWith('/') ? join(out, path, 'index.html') : join(out, `${path}.html`);
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, `<!doctype html>\n${html}`);
        const title = (html.match(/<title[^>]*>([^<]*)/) || [])[1];
        console.log(`${path.padEnd(40)} ${title}`);
    }
    ws.close();
    cpSync(out, DIST, { recursive: true });
} finally {
    chrome.kill();
    server.kill();
    await sleep(500);
    rmSync(out, { recursive: true, force: true });
    try { rmSync(profile, { recursive: true, force: true }); } catch { /* chrome may still hold it */ }
}
