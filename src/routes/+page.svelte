<script lang="ts">
  import type { Component } from 'svelte';
  import { innerWidth } from 'svelte/reactivity/window';
  import type { PageData } from './$types';

  import Card from '../lib/components/Card/Card.svelte';
  import IntroPanel from '../lib/components/IntroPanel/IntroPanel.svelte';

  import FloatsPaddingBased from '../lib/components/Grid/FloatsPaddingBased/FloatsPaddingBased.svelte';
  import FloatsMarginBased from '../lib/components/Grid/FloatsMarginBased/FloatsMarginBased.svelte';
  import FloatsIsolated from '../lib/components/Grid/FloatsIsolated/FloatsIsolated.svelte';
  import InlineBlock from '../lib/components/Grid/InlineBlock/InlineBlock.svelte';
  import InlineBlockJustified from '../lib/components/Grid/InlineBlockJustified/InlineBlockJustified.svelte';
  import InlineBlockJustifiedTextAlignLast from '../lib/components/Grid/InlineBlockJustifiedTextAlignLast/InlineBlockJustifiedTextAlignLast.svelte';
  import BorderSpacingTable from '../lib/components/Grid/BorderSpacingTable/BorderSpacingTable.svelte';

  type PageProps = {
    data: PageData;
  };
  // https://stackoverflow.com/questions/72349213/is-it-possible-to-extract-map-keys-as-type-in-typescript
  type CSSKeys = Parameters<(typeof data)['cssFilesWithSyntaxHighlighting']['get']>[0];

  type Grid = {
    id: string;
    label: string;
    component: Component<{ numberOfColumns: number; cssListing?: string }>;
    cssKey: CSSKeys;
  };

  const { data }: PageProps = $props();

  const grids = [
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
  ] as const satisfies Grid[];

  const numberOfColumns = $derived(
    innerWidth?.current !== undefined && innerWidth.current >= 600 ? 12 : 6,
  );
  const cssFilesWithSyntaxHighlighting = $derived(data.cssFilesWithSyntaxHighlighting);
  let headerBlockSize = $state(0);

  // $inspect(headerBlockSize);
</script>

<!-- bind:clientHeight uses Resize Observer -->
<header class="masthead grid-container-row-full-bleed" bind:clientHeight={headerBlockSize}>
  <div class="grid-container-row">
    <IntroPanel {grids} />
  </div>
</header>
<main
  class="main grid-container-row-full-bleed"
  style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
    --header-block-size: {headerBlockSize}px;
  "
>
  {#each grids as grid (grid.id)}
    {const GridComponent = grid.component}

    <Card as="article" id={grid.id} class="grid-container-row scroll-section fade-in">
      <GridComponent
        cssListing={cssFilesWithSyntaxHighlighting.get(grid.cssKey)}
        {numberOfColumns}
      />
    </Card>
  {/each}
</main>

<style>
  @layer components {
    .masthead {
      position: sticky;
      inset-block-start: 0;
      border-block-end: 1px solid var(--border);
      z-index: 10;
      background: var(--bg-soft);
    }

    .main {
      margin-block: 2rem;
      row-gap: 2rem;
    }
  }
</style>
