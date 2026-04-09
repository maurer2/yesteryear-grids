<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type FloatsContainerRelativeProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: FloatsContainerRelativeProps = $props();
</script>

<section
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  <h2>Container relative floats (Zen grids, Susy Grids with isolate-mixin)</h2>
  <div>
    <h3>Classic approach</h3>
    <div class="wrapper">
      <Row class="row">
        {#each { length: numberOfColumns }}
          <Column>
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
