<script lang="ts">
  import type { Component } from 'svelte';
  import { innerWidth } from 'svelte/reactivity/window';
  import type { PageData } from './$types';

  import IntroPanel from '../lib/components/IntroPanel/IntroPanel.svelte';

  import FloatsPaddingBased from '../lib/components/FloatsPaddingBased/FloatsPaddingBased.svelte';
  import FloatsMarginBased from '../lib/components/FloatsMarginBased/FloatsMarginBased.svelte';
  import FloatsIsolated from '../lib/components/FloatsIsolated/FloatsIsolated.svelte';
  import InlineBlock from '../lib/components/InlineBlock/InlineBlock.svelte';
  import InlineBlockJustified from '../lib/components/InlineBlockJustified/InlineBlockJustified.svelte';
  import InlineBlockJustifiedTextAlignLast from '../lib/components/InlineBlockJustifiedTextAlignLast/InlineBlockJustifiedTextAlignLast.svelte';
  import BorderSpacingTable from '../lib/components/BorderSpacingTable/BorderSpacingTable.svelte';

  type PageProps = {
    data: PageData;
  };
  // https://stackoverflow.com/questions/72349213/is-it-possible-to-extract-map-keys-as-type-in-typescript
  type CSSKeys = Parameters<(typeof data)['cssFilesWithSyntaxHighlighting']['get']>[0];

  type SectionComponent = Component<{ numberOfColumns: number; cssListing?: string }>;
  type Section = {
    id: string;
    label: string;
    component: SectionComponent;
    cssKey: CSSKeys;
  };

  const { data }: PageProps = $props();

  const sections = [
    {
      id: 'padding-floats',
      label: 'Padding floats',
      component: FloatsPaddingBased,
      cssKey: 'floatsPaddingBasedCSS',
    },
    {
      id: 'margin-floats',
      label: 'Margin floats',
      component: FloatsMarginBased,
      cssKey: 'floatsMarginBasedCSS',
    },
    {
      id: 'isolated-floats',
      label: 'Isolated floats',
      component: FloatsIsolated,
      cssKey: 'floatsIsolatedCSS',
    },
    {
      id: 'inline-block',
      label: 'Inline block',
      component: InlineBlock,
      cssKey: 'inlineBlockCSS',
    },
    {
      id: 'justified-inline',
      label: 'Justified inline',
      component: InlineBlockJustified,
      cssKey: 'inlineBlockJustifiedCSS',
    },
    {
      id: 'justified-last-line',
      label: 'Justified last-line',
      component: InlineBlockJustifiedTextAlignLast,
      cssKey: 'inlineBlockJustifiedTextAlignLastCSS',
    },
    {
      id: 'border-spacing',
      label: 'Border spacing',
      component: BorderSpacingTable,
      cssKey: 'borderSpacingTableCSS',
    },
  ] as const satisfies Section[];

  const numberOfColumns = $derived(
    innerWidth?.current !== undefined && innerWidth.current >= 600 ? 12 : 6,
  );
  const cssFilesWithSyntaxHighlighting = $derived(data.cssFilesWithSyntaxHighlighting);
  //$inspect(cssFilesWithSyntaxHighlighting);
</script>

<header class="masthead grid-container">
  <div class="masthead-row grid-container-row-full-bleed">
    <div class="grid-container-row">
      <IntroPanel {sections} />
    </div>
  </div>
</header>
<main
  class="main"
  style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
  "
>
  {#each sections as section (section.id)}
    {const SectionComponent = section.component}
    <div id={section.id} class="panel">
      <SectionComponent
        cssListing={cssFilesWithSyntaxHighlighting.get(section.cssKey)}
        {numberOfColumns}
      />
    </div>
  {/each}
</main>

<style>
  @layer components {
    .masthead {
      position: sticky;
      inset-block-start: 0;
      z-index: 10;
    }

    .masthead-row {
      background: var(--bg-soft);
      border-block-end: 1px solid var(--border);
    }

    .main {
      display: flex;
      margin-block: 2rem;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
