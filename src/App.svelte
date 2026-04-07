<script lang="ts">
  import { LoremIpsum } from "lorem-ipsum";

  import Column from "./lib/Column/Column.svelte";
  import Row from "./lib/Row/Row.svelte";
  import FloatsPaddingBased from "./lib/FloatsPaddingBased/FloatsPaddingBased.svelte";
  import FloatsMarginBased from "./lib/FloatsMarginBased/FloatsMarginBased.svelte";

  const sections = [
    { label: "Basic float grid", id: "basic float-grid" },
  ] as const satisfies {
    label: string;
    id: string;
  }[];

  const columnText = new LoremIpsum().generateParagraphs(1);
  const numberOfColumns = 5;
</script>

<header>
  <h1>Grids</h1>

  <!-- <ul>
    <li></li>
  </ul> -->
</header>
<main class="main">
  <FloatsPaddingBased {numberOfColumns}>{columnText}</FloatsPaddingBased>
  <FloatsMarginBased {numberOfColumns}>{columnText}</FloatsMarginBased>

  <section>
    <h2>Container relative floats (Susy Grids)</h2>
  </section>
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
