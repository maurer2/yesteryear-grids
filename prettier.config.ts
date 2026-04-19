import type { Config } from 'prettier';

const config: Config = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  printWidth: 100,
  plugins: ['prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
};

export default config;
