<script lang="ts">
  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid, markup } from "../Panel/Panel.svelte";
  import css from "./svg.css?raw";

  type InlineBlockProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: InlineBlockProps = $props();
</script>

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column class="column" />
    {/each}
  </Row>
{/snippet}

<section
  class="card"
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  {@render title(
    "Inline block grids (KayzenGS, Yahoo Pure, CSSWizardry-grids)",
  )}
  {@render description()}
  {@render grid(gridContent)}
  {@render markup(css)}
</section>

<style>
  @layer components {
    .card {
      /* child component styles */
      & {
        :global(.row) {
          display: table;
          table-layout: fixed;
          inline-size: 100%;
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
