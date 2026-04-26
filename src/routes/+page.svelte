<script lang="ts">
  import { innerWidth } from 'svelte/reactivity/window';
  import type { PageData } from './$types';

  import IntroPanel from '../lib/components/IntroPanel/IntroPanel.svelte';

  import FloatsPaddingBased from '../lib/components/FloatsPaddingBased/FloatsPaddingBased.svelte';
  import FloatsMarginBased from '../lib/components/FloatsMarginBased/FloatsMarginBased.svelte';
  import FloatsIsolated from '../lib/components/FloatsIsolated/FloatsIsolated.svelte';
  import InlineBlock from '../lib/components/InlineBlock/InlineBlock.svelte';
  import InlineBlockJustified from '../lib/components/InlineBlockJustified/InlineBlockJustified.svelte';
  import BorderSpacingTable from '../lib/components/BorderSpacingTable/BorderSpacingTable.svelte';

  type PageProps = {
    data: PageData;
  };

  const { data }: PageProps = $props();

  const numberOfColumns = $derived(
    innerWidth?.current !== undefined && innerWidth.current >= 600 ? 12 : 6,
  );
  const cssFilesWithSyntaxHighlighting = $derived(data.cssFilesWithSyntaxHighlighting);
  //$inspect(cssFilesWithSyntaxHighlighting);
</script>

<header class="header">
  <div class="panel-full-height">
    <IntroPanel />
  </div>
</header>
<main
  class="main"
  style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
  "
>
  <div class="panel-full-height">
    <FloatsPaddingBased
      cssListing={cssFilesWithSyntaxHighlighting.get('floatsPaddingBasedCSS')}
      {numberOfColumns}
    />
  </div>
  <div class="panel-full-height">
    <FloatsMarginBased
      cssListing={cssFilesWithSyntaxHighlighting.get('floatsMarginBasedCSS')}
      {numberOfColumns}
    />
  </div>
  <div class="panel-full-height">
    <FloatsIsolated
      cssListing={cssFilesWithSyntaxHighlighting.get('floatsIsolatedCSS')}
      {numberOfColumns}
    />
  </div>
  <div class="panel-full-height">
    <InlineBlock
      cssListing={cssFilesWithSyntaxHighlighting.get('inlineBlockCSS')}
      {numberOfColumns}
    />
  </div>
  <div class="panel-full-height">
    <InlineBlockJustified
      cssListing={cssFilesWithSyntaxHighlighting.get('inlineBlockJustifiedCSS')}
      {numberOfColumns}
    />
  </div>
  <div class="panel-full-height">
    <BorderSpacingTable
      cssListing={cssFilesWithSyntaxHighlighting.get('borderSpacingTableCSS')}
      {numberOfColumns}
    />
  </div>
</main>

<style>
  @layer components {
  }
</style>
