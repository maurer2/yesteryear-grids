<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../Panel/Panel.svelte';
  import css from './svg.css?raw';

  type TableWithBorderSpacingProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: TableWithBorderSpacingProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>table-based</em> grid uses <em>border-spacing</em> to create gutters between columns
    when <code class="code">border-collapse: separate</code> is set. <em>border-spacing</em> also
    creates gutters between the first and last cell and the edge of the table. The gutters at the
    start and end must be compensated for via negative margins. Negative <em>margin-inline</em> on a table
    element are ignored in some browsers, so an additional wrapper is needed to apply the negative inline
    margins.
  </p>
  <ul class="new-column">
    <li>
      <a href="https://github.com/mdo/table-grid">Table grid</a>
    </li>
  </ul>
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
  {@render title('Border spacing grid')}
  {@render description(descriptionContent)}
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
          inline-size: 100%;
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
