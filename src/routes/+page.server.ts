import { SvelteMap } from 'svelte/reactivity';
import { codeToHtml } from 'shiki';

import FloatsPaddingBasedCSS from '../lib/components/FloatsPaddingBased/svg.css?raw';
import FloatsMarginBasedCSS from '../lib/components/FloatsMarginBased/svg.css?raw';
import FloatsIsolatedCSS from '../lib/components/FloatsIsolated/svg.css?raw';
import InlineBlockCSS from '../lib/components/InlineBlock/svg.css?raw';
import InlineBlockJustifiedCSS from '../lib/components/InlineBlockJustified/svg.css?raw';
import BorderSpacingTableCSS from '../lib/components/BorderSpacingTable/svg.css?raw';

const cssFiles = {
  floatsPaddingBasedCSS: FloatsPaddingBasedCSS,
  floatsMarginBasedCSS: FloatsMarginBasedCSS,
  floatsIsolatedCSS: FloatsIsolatedCSS,
  inlineBlockCSS: InlineBlockCSS,
  inlineBlockJustifiedCSS: InlineBlockJustifiedCSS,
  borderSpacingTableCSS: BorderSpacingTableCSS,
} as const;
type CSSFilesKeys = keyof typeof cssFiles;

const codeToHtmlOptions: Parameters<typeof codeToHtml>[1] = {
  lang: 'css',
  theme: 'catppuccin-latte',
  colorReplacements: {
    '#eff1f5': 'var(--bg-soft)', // bg-color
  },
};

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
