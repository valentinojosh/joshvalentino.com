import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joshvalentino.com',
  output: 'static',
  redirects: {
    '/about': '/#about',
    '/projects': '/#projects',
    '/contact': '/#contact',
    '/datafydemo': '/work/data-fy/',
  },
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
