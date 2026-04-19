<script lang="ts">
  import { innerWidth } from "svelte/reactivity/window";

  import IntroPanel from "./lib/IntroPanel/IntroPanel.svelte";
  import FloatsPaddingBased from "./lib/FloatsPaddingBased/FloatsPaddingBased.svelte";
  import FloatsMarginBased from "./lib/FloatsMarginBased/FloatsMarginBased.svelte";
  import FloatsContainerRelative from "./lib/FloatsContainerRelative/FloatsContainerRelative.svelte";
  import InlineBlock from "./lib/InlineBlock/InlineBlock.svelte";
  import InlineBlockWithTextAlignJustify from "./lib/InlineBlockWithTextAlignJustify/InlineBlockWithTextAlignJustify.svelte";
  import TableWithBorderSpacing from "./lib/TableWithBorderSpacing/TableWithBorderSpacing.svelte";

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
    <FloatsContainerRelative {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <InlineBlock {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <InlineBlockWithTextAlignJustify {numberOfColumns} />
  </div>
  <div class="panel-full-height">
    <TableWithBorderSpacing {numberOfColumns} />
  </div>
</main>

<style>
  @layer components {
  }
</style>
