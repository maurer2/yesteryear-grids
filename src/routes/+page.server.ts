import { SvelteMap } from 'svelte/reactivity';
import { codeToHtml } from 'shiki';

import FloatsPaddingBasedCSS from '../lib/components/Grid/FloatsPaddingBased/svg.css?raw';
import FloatsMarginBasedCSS from '../lib/components/Grid/FloatsMarginBased/svg.css?raw';
import FloatsIsolatedCSS from '../lib/components/Grid/FloatsIsolated/svg.css?raw';
import InlineBlockCSS from '../lib/components/Grid/InlineBlock/svg.css?raw';
import InlineBlockJustifiedCSS from '../lib/components/Grid/InlineBlockJustified/svg.css?raw';
import InlineBlockJustifiedTextAlignLastCSS from '../lib/components/Grid/InlineBlockJustifiedTextAlignLast/svg.css?raw';
import BorderSpacingTableCSS from '../lib/components/Grid/BorderSpacingTable/svg.css?raw';

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
