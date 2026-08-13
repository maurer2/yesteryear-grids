import { SvelteMap } from 'svelte/reactivity';
import { codeToHtml } from 'shiki';

import FloatsPaddingBasedCSS from '#grid/FloatsPaddingBased/svg.css?raw';
import FloatsMarginBasedCSS from '#grid/FloatsMarginBased/svg.css?raw';
import FloatsIsolatedCSS from '#grid/FloatsIsolated/svg.css?raw';
import InlineBlockCSS from '#grid/InlineBlock/svg.css?raw';
import InlineBlockJustifiedCSS from '#grid/InlineBlockJustified/svg.css?raw';
import InlineBlockJustifiedTextAlignLastCSS from '#grid/InlineBlockJustifiedTextAlignLast/svg.css?raw';
import BorderSpacingTableCSS from '#grid/BorderSpacingTable/svg.css?raw';

const cssFiles = {
  floatsPaddingBasedCSS: FloatsPaddingBasedCSS,
  floatsMarginBasedCSS: FloatsMarginBasedCSS,
  floatsIsolatedCSS: FloatsIsolatedCSS,
  inlineBlockCSS: InlineBlockCSS,
  inlineBlockJustifiedCSS: InlineBlockJustifiedCSS,
  inlineBlockJustifiedTextAlignLastCSS: InlineBlockJustifiedTextAlignLastCSS,
  borderSpacingTableCSS: BorderSpacingTableCSS,
} as const;
type CSSFilesKeys = keyof typeof cssFiles;

const codeToHtmlOptions: Parameters<typeof codeToHtml>[1] = {
  lang: 'css',
  theme: 'catppuccin-latte',
  colorReplacements: {
    '#eff1f5': 'var(--bg-soft)', // theme bg -> card bg
    '#8839ef': 'var(--accent-secondary)', // purple -> red
    '#fe640b': 'var(--accent-primary)', // orange -> blue
  },
};

// runs at built time -> prerendering
export async function load() {
  console.info('Compiling syntax highlight for CSS files');
  const cssFilesWithSyntaxHighlighting = new SvelteMap<CSSFilesKeys, string>();

  for await (const [fileKey, fileContent] of Object.entries(cssFiles) as [CSSFilesKeys, string][]) {
    const markupWithSyntaxHighlighting = await codeToHtml(fileContent, codeToHtmlOptions);

    cssFilesWithSyntaxHighlighting.set(fileKey, markupWithSyntaxHighlighting);
  }

  return {
    cssFilesWithSyntaxHighlighting,
  };
}

export const prerender = true;
