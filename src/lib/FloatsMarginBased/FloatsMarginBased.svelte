<script lang="ts">
  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid } from "../Panel/Panel.svelte";

  type FloatsMarginBasedProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsMarginBasedProps = $props();
</script>

{#snippet descriptionContent()}
  <p>Todo</p>
{/snippet}

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
    "Margin-based float grid with gutters via margins in children (Boostrap 1, 960 grid etc.",
  )}
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
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
          margin-inline-start: var(--gutter-size);
          float: inline-start;

          &:first-child {
            margin-inline-start: 0;
          }
        }
      }
    }
  }
</style>
