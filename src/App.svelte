<script lang="ts">
  import { LoremIpsum } from "lorem-ipsum";

  import Column from "./lib/Column/Column.svelte";
  import Row from "./lib/Row/Row.svelte";

  const sections = [
    { label: "Basic float grid", id: "basic float-grid" },
  ] as const satisfies {
    label: string;
    id: string;
  }[];

  const columnText = new LoremIpsum().generateParagraphs(5);
  const numberOfColumns = 5;
</script>

<header>
  <h1>Grids</h1>

  <!-- <ul>
    <li></li>
  </ul> -->
</header>
<main class="main">
  <section>
    <h2>
      Padding-based float grid with gutters in children (Boostrap 2 and 3)
    </h2>
    <div>
      <h3>Classic approach</h3>
      <Row style="margin-inline: -1rem">
        {#each { length: numberOfColumns } as _, index}
          <Column
            style={{
              width: `${100 / numberOfColumns}%`,
              float: "left",
              // @ts-expect-error handling of camelCase properties in style objects not implemented
              "padding-inline": "1rem",
            }}>{columnText}</Column
          >
        {/each}
      </Row>
    </div>
    <h3>Modern approach</h3>
  </section>
  <section>
    <h2>
      Margin-based float grid with gutters via margings in children (Boostrap 1,
      960 etc.)
    </h2>
  </section>
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
