<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type InlineBlockWithTextAlignJustifyProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: InlineBlockWithTextAlignJustifyProps =
    $props();
</script>

<section
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  <h2>Inline block grids (KayzenGS, Yahoo Pure, CSS Wizardry grid)</h2>
  <div>
    <h3>Classic approach</h3>
    <Row style="text-align: justify; line-height: 0;">
      {#each { length: numberOfColumns } as _, index}
        <Column
          style="
            display: inline-block;
            inline-size: var(--size-of-column);
            margin-block-end: -7px;
            line-height: normal;
            text-align: start;
          "
        >
          {@render children?.()}
        </Column>
        {#if index === numberOfColumns - 1}
          <span style="display: inline-block; inline-size: 100%; block-size: 0;"
          ></span>
        {/if}
      {/each}
    </Row>
  </div>
</section>

<style>
  @layer components {
  }
</style>
