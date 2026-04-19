<script lang="ts">
  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid, markup } from "../Panel/Panel.svelte";
  import css from "./svg.css?raw";

  type FloatsContainerRelativeProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsContainerRelativeProps = $props();
</script>

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column />
    {/each}
  </Row>
{/snippet}

<section
  class="card"
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  {@render title(
    "Container relative floats (Zen grids, Susy Grids with isolate-mixin)",
  )}
  {@render description()}
  {@render grid(gridContent)}
  {@render markup(css)}

  <!-- {@render Panel(title, descriptionContent, gridContent)} -->
</section>

<style>
  @layer components {
    .card {
      /* child component styles */
      & {
        :global(.row) {
          display: flow-root;
        }

        :global(.column) {
          inline-size: var(--size-of-column);
          margin-inline-start: calc(
            (var(--size-of-column) + var(--gutter-size)) * (sibling-index() - 1)
          );
          margin-inline-end: -100%; /* move every column to the left edge of container */
          float: inline-start;
        }
      }
    }
  }
</style>
