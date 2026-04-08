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

<section
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  <h2>
    Margin-based float grid with gutters via margins in children (Boostrap 1,
    960 grid etc.)
  </h2>
  <div>
    <h3>Classic approach</h3>
    <Row style="display: flow-root">
      {#each { length: numberOfColumns } as _, index}
        <Column
          style="
          inline-size: var(--size-of-column);
          margin-inline-start: {index === 0 ? '0' : 'var(--gutter-size)'};
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
