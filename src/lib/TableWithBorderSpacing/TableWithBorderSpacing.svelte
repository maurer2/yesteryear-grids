<script lang="ts">
  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid } from "../Panel/Panel.svelte";

  type TableWithBorderSpacingProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: TableWithBorderSpacingProps = $props();
</script>

{#snippet descriptionContent()}
  <p>Todo</p>
{/snippet}

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
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
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
