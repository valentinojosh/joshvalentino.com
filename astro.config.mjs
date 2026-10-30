import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://joshvalentino.com',
  output: 'static',
  build: { format: 'directory' },
  compressHTML: true,
});
