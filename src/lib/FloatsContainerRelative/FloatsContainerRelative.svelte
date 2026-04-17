<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid } from "../Panel/Panel.svelte";

  type FloatsContainerRelativeProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: FloatsContainerRelativeProps = $props();
</script>

{#snippet descriptionContent()}
  <p>Todo</p>
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column>
        {@render children?.()}</Column
      >
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
          margin-inline-start: calc(
            (var(--size-of-column) + var(--gutter-size)) * (sibling-index() - 1)
          );
          margin-inline-end: -100%;
          float: inline-start;
        }
      }
    }
  }
</style>
