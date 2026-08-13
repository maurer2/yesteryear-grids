import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      compilerOptions: {
        experimental: { async: true },
      },
      adapter: adapter({
        fallback: '404.html',
        pages: 'build',
        assets: 'build',
        precompress: false,
        strict: true,
      }),
      paths: {
        base: process.env.NODE_ENV === 'production' ? '/yesteryear-grids' : '',
      },
    }),
  ],
  // removes warning for :target-current
  css: { lightningcss: { drafts: { scrollNavigationControls: true } } },
});
