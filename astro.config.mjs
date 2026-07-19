// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://axomiyaitlabs.vercel.app',
  base: '/',
  server: {
    host: true,
    port: 4321,
  },
  build: {
    outDir: 'dist',
  },
});
