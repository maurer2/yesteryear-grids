<script lang="ts">
  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid, markup } from "../Panel/Panel.svelte";
  import css from "./svg.css?raw";

  type TableWithBorderSpacingProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: TableWithBorderSpacingProps = $props();
</script>

{#snippet gridContent()}
  <div class="wrapper">
    <Row class="row">
      {#each { length: numberOfColumns }}
        <Column class="column" />
      {/each}
    </Row>
  </div>
{/snippet}

<section class="card">
  {@render title(
    "Table with border spacing and table-layout fixed grid (mdo/table-grid)",
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
        :global(.wrapper) {
          margin-inline: calc(var(--gutter-size) * -1);
        }
        :global(.row) {
          display: table;
          border-collapse: separate;
          width: 100%;
          table-layout: fixed;
          border-spacing: var(--gutter-size) 0;
        }

        :global(.column) {
          display: table-cell;
        }
      }
    }
  }
</style>
