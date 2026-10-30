import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.env.PORTFOLIO_BUILD_DIR || 'dist');
const pages = new Map();
async function walk(dir = '') {
  for (const item of await readdir(path.join(root, dir), { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);
    else if (item.name.endsWith('.html')) pages.set('/' + file.replaceAll('\\', '/').replace(/index\.html$/, ''), await readFile(path.join(root, file), 'utf8'));
  }
}
await walk();
const routes = ['/', '/about/', '/projects/', '/contact/', '/experience/', '/datafydemo/', '/work/data-fy/', '/work/incident-management-system/', '/work/betterdates/', '/work/home-lab-network-security/', '/work/ai-driver/'];
const attributes = (html, name) => [...html.matchAll(new RegExp(`\\b${name}="([^"]*)"`, 'g'))].map(m => m[1].replaceAll('&amp;', '&'));

test('original routes and verified project details are real static pages', () => {
  for (const route of [...routes, '/404.html']) {
    const html = pages.get(route);
    assert.ok(html, `Missing ${route}`);
    assert.doesNotMatch(html, /http-equiv="refresh"/i, `${route} must not silently replace a real page`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one primary heading`);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.ok(attributes(html, 'href').includes(`https://joshvalentino.com${route}`), `${route}: canonical`);
  }
  assert.match(pages.get('/404.html'), /noindex, follow/);
});

test('slash navigation exposes native destinations, current states, and a skip link', () => {
  for (const [route, html] of pages) {
    const nav = html.match(/<nav\b[^>]*aria-label="Primary navigation"[^>]*>[\s\S]*?<\/nav>/)?.[0];
    assert.ok(nav, route);
    assert.deepEqual(attributes(nav, 'href'), ['/about', '/projects', '/experience', '/contact']);
    const active = [...nav.matchAll(/<a\b[^>]*>/g)].map(m => m[0]).filter(tag => tag.includes('aria-current="page"'));
    const destination = route === '/' ? '/about' : route.startsWith('/work/') || route === '/datafydemo/' ? '/projects' : route === '/404.html' ? undefined : route.replace(/\/$/, '');
    assert.deepEqual(active.map(tag => attributes(tag, 'href')[0]), destination ? [destination] : [], route);
    assert.match(html, /href="#main-content"[^>]*>Skip to content/);
    assert.match(html, /<main id="main-content" tabindex="-1"/);
    assert.doesNotMatch(html, /<astro-island\b|<footer\b/);
  }
});

test('every local page, image, script, stylesheet, and video link resolves', async () => {
  for (const [route, html] of pages) {
    for (const href of [...attributes(html, 'href'), ...attributes(html, 'src')]) {
      if (/^(https?:|mailto:|data:|#)/.test(href)) continue;
      const url = new URL(href, `https://joshvalentino.com${route}`);
      const pathname = decodeURIComponent(url.pathname);
      const file = pathname.endsWith('/') || !path.extname(pathname) ? `${pathname.replace(/\/$/, '')}/index.html` : pathname;
      await assert.doesNotReject(access(path.join(root, file)), `${route}: missing ${href}`);
      if (url.hash && !path.extname(pathname)) {
        const target = pages.get(pathname.endsWith('/') ? pathname : pathname + '/');
        assert.ok(target?.includes(`id="${url.hash.slice(1)}"`), `${route}: missing anchor ${href}`);
      }
    }
    for (const tag of html.match(/<a\b[^>]*>/g) || []) {
      if (attributes(tag, 'href')[0]?.startsWith('https://')) {
        assert.match(tag, /target="_blank"/); assert.match(tag, /rel="noopener noreferrer"/);
      }
    }
  }
});

test('contribution snapshot and demo recordings preserve the original asset bytes', async () => {
  const projectHtml = pages.get('/projects/');
  const src = attributes(projectHtml, 'src').find(src => /github\.[^.]+\.png/.test(src));
  assert.ok(src, 'Historical contribution screenshot');
  assert.deepEqual(await readFile(path.join(root, src)), await readFile('src/Assets/github.png'));
  assert.match(projectHtml, /Static full-year GitHub contribution activity screenshot/);
  assert.doesNotMatch(projectHtml, /Historical full-year snapshot, preserved from the original portfolio/);
  assert.match(projectHtml, /href="https:\/\/github\.com\/valentinojosh"/);
  const demo = pages.get('/datafydemo/');
  assert.equal((demo.match(/<video\b[^>]*controls/g) || []).length, 3);
  for (const name of ['BaseDemo', 'MobileDemo', 'ErrorDemo']) {
    const file = attributes(demo, 'src').find(src => src.includes(name));
    assert.ok(file, name);
    assert.deepEqual(await readFile(path.join(root, file)), await readFile(`src/Assets/${name}.mp4`));
  }
});

test('content distinguishes professional scope, historical deployments, and planned AI work', () => {
  const experience = pages.get('/experience/');
  assert.match(experience, /Aug 2022 – Jan 2026/);
  assert.match(experience, /DBA-controlled production execution/);
  assert.match(experience, /September 2026/);
  assert.match(experience, /Technical work in planning/);
  assert.match(pages.get('/work/data-fy/'), /original service is retired/);
  assert.match(pages.get('/work/incident-management-system/'), /four-person college/);
  const betterdates = pages.get('/work/betterdates/');
  assert.match(betterdates, /Self-hosted AI models/); assert.match(betterdates, /integration remains planned/);
  assert.doesNotMatch(betterdates, /href="https:\/\/github.com\/valentinojosh\/better-dates-ai/);
  for (const html of pages.values()) {
    assert.doesNotMatch(html, /400 million|eliminating form loss|TrainWise|ApplyPilot|resume\.pdf|C:\\Users\\|RxSense_Master_Dossier/);
    for (const src of attributes(html, 'src')) assert.ok(src.startsWith('/') || src.startsWith('data:'), `Unexpected remote resource ${src}`);
  }
});

test('reviewed content refinements preserve project order, useful links, and accurate experience', () => {
  const projects = pages.get('/projects/');
  assert.deepEqual([...projects.matchAll(/<h2\b[^>]*>([^<]+)<\/h2>/g)].map(match => match[1]), [
    'rxsense', 'AI Driver', 'Systems Lab', 'Data-fy', 'Incident Management System', 'BetterDates.ai', 'github',
  ]);
  assert.match(pages.get('/'), /I spent several years at RxSense/);
  assert.match(pages.get('/'), /C#\/\.NET, Python, SQL, APIs, and production troubleshooting/);
  assert.match(projects, /Several years of professional work/);
  assert.doesNotMatch(projects, /3\.5 years/);
  for (const html of [projects, ...['ai-driver', 'home-lab-network-security', 'data-fy', 'incident-management-system'].map(slug => pages.get(`/work/${slug}/`))]) {
    assert.doesNotMatch(html, /Experiment complete|Ongoing independent work|Retired deployment|Retired team project/);
  }
  assert.match(projects, /In development · Local prototype/);
  for (const html of [projects, pages.get('/work/incident-management-system/')]) {
    assert.doesNotMatch(html, /valentinojosh\.github\.io\/ims-documentation|Original project documentation/);
    assert.match(html, /href="https:\/\/github\.com\/valentinojosh\/ims"/);
  }
  assert.match(projects, /aria-label="Systems Lab: docs"/);
  assert.match(projects, /aria-label="AI Driver: code"/);
  assert.match(pages.get('/work/home-lab-network-security/'), /Read documentation on GitHub/);
  for (const html of [projects, pages.get('/work/data-fy/')]) {
    assert.match(html, /Google Cloud/);
    assert.match(html, /over two years without experiencing downtime or operational issues/);
  }
  const experience = pages.get('/experience/');
  assert.match(experience, /Food Safety in Relation to Religious Dietary Laws Working Group/);
  for (const name of ['Prof. Joe M. Regenstein', 'Prof. Quamrul Hasan', 'Prof. Dr. Jawad Alzeer']) assert.ok(experience.includes(name));
  assert.match(experience, /Volunteer technical contributor/);
  assert.match(experience, /accessible desktop- and mobile-friendly web forms/);
  assert.match(experience, /future academic data comparison, search, and analysis/);
  assert.doesNotMatch(experience, /<p>\s*I(?:\s|['’])/);
  assert.match(experience, /aria-label="Global Harmonization Initiative: site"/);
  assert.match(experience, /aria-label="Valentino Technology Solutions: site"/);
  assert.match(experience, /href="https:\/\/www\.globalharmonization\.net\/wg-religious-dietary-laws\/" target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(experience, /October 2026|Oct 2026/);
  assert.match(experience, /Founder · March 2025 – present/);
  assert.match(experience, /DeKalb, Illinois/);
  assert.match(experience, /href="https:\/\/valentinotechsolutions\.com\/" target="_blank" rel="noopener noreferrer"/);
  for (const heading of ['Internal data-transformation software', 'SQL workflows &amp; C# automation', 'Cross-layer application investigation']) assert.ok(experience.includes(heading));
});

test('Astro remains static with the existing minimal dependency set', async () => {
  const pkg = JSON.parse(await readFile('package.json', 'utf8'));
  assert.deepEqual(Object.keys(pkg.dependencies), ['astro']);
  assert.deepEqual(Object.keys(pkg.devDependencies), ['@astrojs/check', 'typescript']);
  const config = await readFile('astro.config.mjs', 'utf8');
  const netlify = await readFile('netlify.toml', 'utf8');
  assert.match(config, /output: 'static'/); assert.doesNotMatch(netlify, /\[\[redirects\]\]/);
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  for (const route of routes) assert.ok(sitemap.includes(`https://joshvalentino.com${route}`), route);
  assert.doesNotMatch(sitemap, /404\.html/);
});
