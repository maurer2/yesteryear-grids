<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type InlineBlockProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: InlineBlockProps = $props();
</script>

<section
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  <h2>Inline block grids (KayzenGS, Yahoo Pure, CSSWizardry-grids)</h2>
  <div>
    <h3>Classic approach</h3>
    <Row
      style="
        display: table;
        width: 100%;
        letter-spacing: -1em;
        table-layout: fixed;
      "
    >
      {#each { length: numberOfColumns } as _, index}
        <Column
          style="
            display: inline-block;
            margin-inline-start: {index === 0 ? '0' : 'var(--gutter-size)'};
            inline-size: var(--size-of-column);
            letter-spacing: normal;
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
