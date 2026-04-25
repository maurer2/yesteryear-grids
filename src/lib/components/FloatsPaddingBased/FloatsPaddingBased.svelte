<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../../snippets/Panel/Panel.svelte';
  import css from './svg.css?raw';

  type FloatsPaddingBasedProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsPaddingBasedProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>float-based</em> grid uses <em>inline-padding</em> to create gutters between columns. Each
    column is floated tot the left and positioned immediately after the previous column. In some cases,
    the last column wraps to the next line due to rounding errors.
  </p>
  <p>
    Because the background color also extends into the padding-area,
    <code class="code">background-clip:content-box</code> is required to limit the background color rendering
    the content-box area. To add inner spacing without making content touch the edges of the column, each
    column uses a nested child element that applies its own padding.
  </p>
  <p>
    Each column has padding equal to half the gutter width to create the gutters. The parent row
    compensates for this by using negative inline-margins, that are equal to half the gutter width.
  </p>
  <ul class="new-column">
    <li>
      <a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap 3</a>
    </li>
    <li>
      <a href="https://get.foundation/sites/docs/grid.html">Zurb Foundation</a>
    </li>
  </ul>
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column class="column" />
    {/each}
  </Row>
{/snippet}

<section class="card" style:--size-of-column={'calc(100% / var(--number-of-columns))'}>
  {@render title('Padding-based float grid with gutters via padding')}
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
  {@render markup(css)}
</section>

<style>
  @layer components {
    .card {
      /* child component styles */
      & {
        :global .row {
          display: flow-root;
          margin-inline: calc(var(--gutter-size) / -2);
        }

        :global .column {
          inline-size: var(--size-of-column);
          padding-inline: calc(var(--gutter-size) / 2);
          float: inline-start;
          background-clip: content-box;
        }
      }
    }
  }
</style>
