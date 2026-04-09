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
    <div class="wrapper">
      <Row class="row">
        {#each { length: numberOfColumns }}
          <Column class="column">
            {@render children?.()}</Column
          >
        {/each}
      </Row>
    </div>
  </div>
</section>

<style>
  @layer components {
    .wrapper {
      /* child component styles */
      & {
        :global(.row) {
          display: table;
          width: 100%;
          table-layout: fixed;
          letter-spacing: -1em;
        }

        & :global(.column) {
          display: inline-block;
          inline-size: var(--size-of-column);
          margin-inline-start: var(--gutter-size);
          letter-spacing: normal;

          &:first-child {
            margin-inline-start: 0;
          }
        }
      }
    }
  }
</style>
