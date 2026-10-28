import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.env.PORTFOLIO_BUILD_DIR || 'dist');
const read = (file) => readFile(path.join(root, file), 'utf8');
const attributes = (html, name) => [...html.matchAll(new RegExp(`\\b${name}="([^"]*)"`, 'g'))].map((match) => match[1]);
const htmlFiles = [];
async function collect(directory = '') {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(relative);
    else if (entry.name.endsWith('.html')) htmlFiles.push(relative);
  }
}
await collect();
const pages = new Map(await Promise.all(htmlFiles.map(async (file) => [file, await read(file)])));
const routeFile = (pathname) => pathname.endsWith('.html') ? pathname.slice(1) : path.join(pathname.slice(1), 'index.html');

test('generated internal links, fragments and asset references resolve', async () => {
  for (const [file, html] of pages) {
    const pathname = `/${file.replaceAll(path.sep, '/').replace(/index\.html$/, '')}`;
    const references = [...attributes(html, 'href'), ...attributes(html, 'src')];
    for (const srcset of attributes(html, 'srcset')) references.push(...srcset.split(',').map((candidate) => candidate.trim().split(/\s+/)[0]));
    for (const reference of references) {
      if (/^(?:https?:|mailto:|data:|tel:)/.test(reference)) continue;
      const url = new URL(reference, `https://joshvalentino.com${pathname}`);
      if (url.pathname.startsWith('/_astro/') || path.extname(url.pathname)) {
        await access(path.join(root, decodeURIComponent(url.pathname.slice(1))));
      } else {
        const target = routeFile(url.pathname);
        assert.ok(pages.has(target), `${file}: missing route ${reference}`);
        if (url.hash) assert.ok(attributes(pages.get(target), 'id').includes(decodeURIComponent(url.hash.slice(1))), `${file}: missing fragment ${reference}`);
      }
    }
  }
});

test('content pages have one h1, unique ids, descriptions and canonical metadata', () => {
  for (const [file, html] of pages) {
    if (/http-equiv="refresh"/i.test(html)) continue;
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${file}: h1 count`);
    const ids = attributes(html, 'id');
    assert.equal(new Set(ids).size, ids.length, `${file}: duplicate IDs`);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/joshvalentino\.com\//);
    for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0], /\balt="[^"]+"/);
  }
  assert.match(pages.get('404.html'), /content="noindex, follow"/);
});

test('sitemap includes every published content page and excludes redirects and drafts', async () => {
  const sitemap = await read('sitemap.xml');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(urls).size, urls.length, 'duplicate sitemap URLs');
  const expected = [...pages].filter(([file, html]) => file !== '404.html' && !/http-equiv="refresh"/i.test(html)).map(([file]) => `https://joshvalentino.com/${file.replaceAll(path.sep, '/').replace(/index\.html$/, '')}`);
  assert.deepEqual(urls.sort(), expected.sort());
  assert.match(await read('robots.txt'), /Sitemap: https:\/\/joshvalentino\.com\/sitemap\.xml/);
  const contentPath = path.resolve('src/content/projects');
  for (const file of await readdir(contentPath)) {
    const content = await readFile(path.join(contentPath, file), 'utf8');
    if (!/^visible: false$/m.test(content)) continue;
    const slug = file.replace(/\.md$/, '');
    assert.ok(!urls.some((url) => url.includes(`/work/${slug}/`)), `${slug}: hidden in sitemap`);
    assert.ok(!pages.has(path.join('work', slug, 'index.html')), `${slug}: hidden route generated`);
  }
});

test('published output excludes local paths and private source markers', () => {
  for (const [file, html] of pages) {
    assert.doesNotMatch(html, /(?:[A-Z]:\\Users\\|file:\/\/|RxSense_Master_Dossier|Realm [AB] —|Career-fit signal)/i, file);
    assert.doesNotMatch(html, /(?:TrainWise AI|ApplyPilot AI|Agentic Code Review &amp; Test Generator|Regulated Domain Knowledge Assistant|github\.com\/valentinojosh\/better-dates-ai|DeKalb|Illinois)/i, file);
  }
});

test('featured cards and retained overviews link directly to their canonical repositories', () => {
  const destinations = {
    'ai-driver': 'ai-driver',
    'data-fy': 'data-fy',
    'home-lab-network-security': 'systems-lab',
    'incident-management-system': 'ims',
  };
  const home = pages.get('index.html');
  for (const [slug, repository] of Object.entries(destinations)) {
    const href = `https://github.com/valentinojosh/${repository}`;
    assert.ok(attributes(home, 'href').includes(href), `${repository}: missing homepage source`);
    const overview = pages.get(path.join('work', slug, 'index.html'));
    assert.ok(attributes(overview, 'href').includes(href), `${repository}: missing overview source`);
    assert.match(overview, /class="project-actions"/);
  }
  assert.ok(attributes(home, 'href').includes('https://github.com/valentinojosh/SAP-achievement-tracker'));
  for (const [file, html] of pages) assert.doesNotMatch(html, /valentinojosh\.github\.io\/ims-documentation/i, `${file}: retired documentation link`);
});

test('public output contains no resume page, link, download or document asset', async () => {
  for (const [file, html] of pages) {
    assert.doesNotMatch(file, /(?:resume|résumé|curriculum|\bcv\b)/i);
    assert.doesNotMatch(html, /(?:href|id)="[^"]*(?:resume|r%C3%A9sum%C3%A9|résumé|curriculum|\.pdf|\.docx)/i, file);
    assert.doesNotMatch(html, />\s*(?:résumé|resume|cv)(?:\s+download)?\s*</i, file);
  }
  async function inspect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.isDirectory()) await inspect(path.join(directory, entry.name));
      else assert.doesNotMatch(entry.name, /\.(?:pdf|docx?)$/i);
    }
  }
  await inspect(root);
});

test('approved contact, education and broader technical context are retained', () => {
  const home = pages.get('index.html');
  const decoded = home.replaceAll('&amp;', '&');
  assert.ok(home.includes('Have an interesting opportunity, project, or just want to chat? Feel free to shoot me an email.'));
  for (const text of ['Aurora University', 'Bachelor of Science in Computer Science', 'GPA: 3.88/4.0', 'International Studies', 'International College of Seville (ICS)', 'Spanish Language & Culture', 'Seville, Spain', 'College of DuPage', 'Valentino Technology Solutions', 'Hardware & diagnostics', 'Networking & infrastructure', 'Security-aware practices']) assert.ok(decoded.includes(text), `Missing public context: ${text}`);
  assert.doesNotMatch(home, /I’m a computer science graduate|supervisor-authored|Production SQL access was read-only/);
  const education = home.match(/<div class="education"[^>]*>[\s\S]*?<\/div>/)?.[0];
  assert.ok(education);
  assert.doesNotMatch(education, /2022|Study abroad|University of Seville/i);
});

test('private secondary work has an approved summary and status without a source action', () => {
  const home = pages.get('index.html');
  const entries = [...home.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)].map((match) => match[0]);
  const privateProject = entries.find((entry) => entry.includes('BetterDates.ai'));
  const publicProject = entries.find((entry) => entry.includes('SAP Achievement Tracker'));
  assert.ok(privateProject && publicProject);
  assert.ok(privateProject.includes('Private · In development'));
  assert.ok(privateProject.includes('optional AI-assisted research'));
  assert.equal(attributes(privateProject, 'href').length, 0);
  assert.ok(attributes(publicProject, 'href').includes('https://github.com/valentinojosh/SAP-achievement-tracker'));
  assert.ok(home.includes('Additional Work'));
});
