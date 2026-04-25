<script lang="ts">
  import { innerWidth } from 'svelte/reactivity/window';

  import IntroPanel from '../lib/components/IntroPanel/IntroPanel.svelte';
  import FloatsPaddingBased from '../lib/components/FloatsPaddingBased/FloatsPaddingBased.svelte';
  import FloatsMarginBased from '../lib/components/FloatsMarginBased/FloatsMarginBased.svelte';
  import FloatsIsolated from '../lib/components/FloatsIsolated/FloatsIsolated.svelte';
  import InlineBlock from '../lib/components/InlineBlock/InlineBlock.svelte';
  import InlineBlockJustified from '../lib/components/InlineBlockJustified/InlineBlockJustified.svelte';
  import BorderSpacingTable from '../lib/components/BorderSpacingTable/BorderSpacingTable.svelte';

  // const sections = [
  //   { label: "Basic float grid", id: "basic float-grid" },
  // ] as const satisfies {
  //   label: string;
  //   id: string;
  // }[];

  const numberOfColumns = $derived.by(() =>
    innerWidth?.current !== undefined && innerWidth?.current >= 600 ? 12 : 6,
  );
</script>

<header class="header">
  <div class="panel-full-height">
    <IntroPanel></IntroPanel>
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
    <FloatsPaddingBased {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <FloatsMarginBased {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <FloatsIsolated {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <InlineBlock {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <InlineBlockJustified {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <BorderSpacingTable {numberOfColumns} />
  </div>
</main>

<style>
  @layer components {
  }
</style>
