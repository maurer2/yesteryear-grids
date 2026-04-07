<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type FloatsMarginBasedProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: FloatsMarginBasedProps = $props();
</script>

<section>
  <h2>
    Margin-based float grid with gutters via margings in children (Boostrap 1,
    960 grid etc.
  </h2>
  <div>
    <h3>Classic approach</h3>
    <Row style="display: flow-root">
      {#each { length: numberOfColumns } as _, index}
        <Column
          style={{
            width: `calc((100% - ${numberOfColumns - 1}rem) / ${numberOfColumns})`,
            float: "left",
            // @ts-expect-error handling of camelCase properties in style objects not implemented
            "margin-left": index === 0 ? 0 : "1rem",
          }}
        >
          {@render children?.()}</Column
        >
      {/each}
    </Row>
  </div>
</section>

<style>
  @layer components {
  }
</style>
