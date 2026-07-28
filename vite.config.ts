import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    lightningcss: {
      // removes warning for :target-current
      drafts: { scrollNavigationControls: true },
    },
  },
});
