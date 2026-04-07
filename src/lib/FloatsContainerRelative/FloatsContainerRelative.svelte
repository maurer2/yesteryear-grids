<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type FloatsContainerRelativeProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: FloatsContainerRelativeProps = $props();
</script>

<section
  style="
    --gutter-size-total: calc((var(--number-of-columns) - 1) * var(--gutter-size));
    --size-of-column: calc((100% - var(--gutter-size-total)) / var(--number-of-columns));
  "
>
  <h2>Container relative floats (Zen grids, Susy Grids with isolate-mixin)</h2>
  <div>
    <h3>Classic approach</h3>
    <Row style="display: flow-root;">
      {#each { length: numberOfColumns } as _, index}
        <Column
          style="
          --start-of-column: calc((var(--size-of-column) + var(--gutter-size)) * {index});

          inline-size: var(--size-of-column);
          margin-inline-start: var(--start-of-column);
          margin-inline-end: -100%;
          float: inline-start;
          "
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
