// Renders every page in every language to static HTML after `vite build`,
// so search engines and link previews get real content, titles and hreflang
// tags without running JavaScript. The app still boots normally on top.
//
// usage: node scripts/prerender.mjs   (after `npm run build`)
// CHROME_PATH can point at a Chrome/Chromium binary.
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, mkdtempSync, rmSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';

const ROUTES = ['/', '/services', '/work', '/about', '/process', '/contact', '/strategy-call', '/blog'];
const LANGS = ['tr', 'en', 'az'];
const PORT = 4179;
const DIST = 'dist';

const localize = (r, l) => (l === 'tr' ? r : `/${l}${r === '/' ? '/' : r}`);

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

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitFor(url, tries = 60) {
    for (let i = 0; i < tries; i++) {
        try { if ((await fetch(url)).ok) return; } catch { /* not up yet */ }
        await sleep(250);
    }
    throw new Error(`server did not start: ${url}`);
}

const chrome = findChrome();
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
const out = mkdtempSync(join(tmpdir(), 'prerender-'));
const profile = mkdtempSync(join(tmpdir(), 'prerender-chrome-'));

try {
    await waitFor(`http://localhost:${PORT}/`);
    for (const lang of LANGS) {
        for (const route of ROUTES) {
            const path = localize(route, lang);
            // headless dumps occasionally fire before the page settles; retry
            let html = '';
            for (let attempt = 1; attempt <= 3 && !html.includes('rel="canonical"'); attempt++) html = execFileSync(chrome, [
                '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
                `--user-data-dir=${profile}`, '--lang=tr-TR',
                `--virtual-time-budget=${6000 + 4000 * attempt}`, '--dump-dom',
                `http://localhost:${PORT}${path}`,
            ], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, timeout: 60000 });
            if (!html.includes('rel="canonical"')) throw new Error(`no SEO tags rendered for ${path}`);
            const file = join(out, path.endsWith('/') ? path : `${path}/`, 'index.html');
            mkdirSync(dirname(file), { recursive: true });
            writeFileSync(file, `<!doctype html>\n${html}`);
            const title = (html.match(/<title[^>]*>([^<]*)/) || [])[1];
            console.log(`${path.padEnd(22)} ${title}`);
        }
    }
    cpSync(out, DIST, { recursive: true });
} finally {
    server.kill();
    rmSync(out, { recursive: true, force: true });
    try { rmSync(profile, { recursive: true, force: true }); } catch { /* chrome may still hold it */ }
}
