<script lang="ts">
  import { LoremIpsum } from "lorem-ipsum";

  import FloatsPaddingBased from "./lib/FloatsPaddingBased/FloatsPaddingBased.svelte";
  import FloatsMarginBased from "./lib/FloatsMarginBased/FloatsMarginBased.svelte";
  import FloatsContainerRelative from "./lib/FloatsContainerRelative/FloatsContainerRelative.svelte";

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
<main class="main">
  <FloatsPaddingBased {numberOfColumns}>{columnText}</FloatsPaddingBased>
  <FloatsMarginBased {numberOfColumns}>{columnText}</FloatsMarginBased>
  <FloatsContainerRelative {numberOfColumns}
    >{columnText}</FloatsContainerRelative
  >
</main>

<style>
  @layer components {
    .main {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
