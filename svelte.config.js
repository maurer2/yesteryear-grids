import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    experimental: {
      async: true,
    },
  },
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
      base: process.env.NODE_ENV === 'production' ? '/yesteryear-grids' : '',
    }),
  },
};

export default config;
