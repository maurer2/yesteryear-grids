<script lang="ts">
  import { LoremIpsum } from "lorem-ipsum";

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

  const columnText = new LoremIpsum().generateParagraphs(1);
  const numberOfColumns = 5;
</script>

<header>
  <h1>Grids of yesteryear</h1>

  <!-- <ul>
    <li></li>
  </ul> -->
</header>
<main
  class="main"
  style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
  "
>
  <FloatsPaddingBased {numberOfColumns}>{columnText}</FloatsPaddingBased>
  <FloatsMarginBased {numberOfColumns}>{columnText}</FloatsMarginBased>
  <FloatsContainerRelative {numberOfColumns}
    >{columnText}</FloatsContainerRelative
  >
  <InlineBlock {numberOfColumns}>{columnText}</InlineBlock>
  <InlineBlockWithTextAlignJustify {numberOfColumns}
    >{columnText}</InlineBlockWithTextAlignJustify
  >
  <TableWithBorderSpacing {numberOfColumns}>{columnText}</TableWithBorderSpacing
  >
</main>

<style>
  @layer components {
    .main {
      display: flex;
      margin-block-end: 2rem;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
