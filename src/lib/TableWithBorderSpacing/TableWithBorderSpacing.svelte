<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type TableWithBorderSpacingProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: TableWithBorderSpacingProps = $props();
</script>

<section>
  <h2>
    Table with border spacing and table-layout fixed grid (mdo/table-grid)
  </h2>
  <div>
    <h3>Classic approach</h3>
    <div class="wrapper">
      <Row class="row">
        {#each { length: numberOfColumns }}
          <Column class="column">
            {@render children?.()}
          </Column>
        {/each}
      </Row>
    </div>
  </div>
</section>

<style>
  @layer components {
    .wrapper {
      margin-inline: calc(var(--gutter-size) * -1);

      /* child component styles */
      & {
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
