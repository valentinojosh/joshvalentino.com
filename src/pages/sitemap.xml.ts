import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET() {
  const projects = await getCollection('projects', ({ data }) => data.visible && data.detailPage);
  const paths = ['/', ...projects.map((project) => `/work/${project.id}/`)].sort();
  const urls = paths.map((path) => `<url><loc>${new URL(path, site.url).href}</loc></url>`).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
