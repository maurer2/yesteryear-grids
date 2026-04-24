<script lang="ts">
  import { innerWidth } from 'svelte/reactivity/window';

  import IntroPanel from './lib/IntroPanel/IntroPanel.svelte';
  import FloatsPaddingBased from './lib/FloatsPaddingBased/FloatsPaddingBased.svelte';
  import FloatsMarginBased from './lib/FloatsMarginBased/FloatsMarginBased.svelte';
  import FloatsIsolated from './lib/FloatsIsolated/FloatsIsolated.svelte';
  import InlineBlock from './lib/InlineBlock/InlineBlock.svelte';
  import InlineBlockJustified from './lib/InlineBlockJustified/InlineBlockJustified.svelte';
  import BorderSpacingTable from './lib/BorderSpacingTable/BorderSpacingTable.svelte';

  // const sections = [
  //   { label: "Basic float grid", id: "basic float-grid" },
  // ] as const satisfies {
  //   label: string;
  //   id: string;
  // }[];

  const numberOfColumns = $derived.by(() =>
    innerWidth?.current !== undefined && innerWidth?.current >= 600 ? 12 : 6,
  );
  const isSupportingGridLanes = $derived.by(() => CSS.supports('display: grid-lanes'));
  const panelClass = $derived.by(() => (isSupportingGridLanes ? '' : 'main'));
</script>

<div class="mason2-ry">
  <header class="header">
    <div class={panelClass}>
      <IntroPanel></IntroPanel>
    </div>
  </header>
  {#each { length: 5 }, rank}
    <main
      class="main"
      style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
  "
    >
      <img src="https://picsum.photos/600/300" alt="" class="test-image" />
      <div class={panelClass}>
        <FloatsPaddingBased {numberOfColumns} />
      </div>
      <div class={panelClass}>
        <FloatsMarginBased {numberOfColumns} />
      </div>
      <div class={panelClass}>
        <FloatsIsolated {numberOfColumns} />
      </div>
      <div class={panelClass}>
        <InlineBlock {numberOfColumns} />
      </div>
      <div class={panelClass}>
        <InlineBlockJustified {numberOfColumns} />
      </div>
      <div class={panelClass}>
        <BorderSpacingTable {numberOfColumns} />
      </div>
    </main>
  {/each}
</div>

<style>
  @layer components {
    .main {
      display: contents;
    }
  }
</style>
