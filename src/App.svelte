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

<header class="header">
  <div class="section-full-height">
    <h1 class="section-headline">Grids of yesteryear</h1>

    <p>An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS.</p>

    <!--
    <ul>
      <li></li>
    </ul>
    -->
  </div>
</header>
<main
  class="main"
  style="
    --number-of-columns: {numberOfColumns};
    --gutter-size: 1rem;
  "
>
  <div class="section-full-height">
    <FloatsPaddingBased {numberOfColumns}>{columnText}</FloatsPaddingBased>
  </div>
  <div class="section-full-height">
    <FloatsMarginBased {numberOfColumns}>{columnText}</FloatsMarginBased>
  </div>
  <div class="section-full-height">
    <FloatsContainerRelative {numberOfColumns}
      >{columnText}</FloatsContainerRelative
    >
  </div>
  <div class="section-full-height">
    <InlineBlock {numberOfColumns}>{columnText}</InlineBlock>
  </div>
  <div class="section-full-height">
    <InlineBlockWithTextAlignJustify {numberOfColumns}
      >{columnText}</InlineBlockWithTextAlignJustify
    >
  </div>
  <div class="section-full-height">
    <TableWithBorderSpacing {numberOfColumns}
      >{columnText}</TableWithBorderSpacing
    >
  </div>
</main>

<style>
  @layer components {
    .header {
      --background-angle: -135deg;
    }

    /* .main {
      display: flex;
      margin-block-end: 2rem;
      flex-direction: column;
      gap: 2rem;
    } */

    .main {
    }
  }
</style>
