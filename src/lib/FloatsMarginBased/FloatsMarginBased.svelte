<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../Panel/Panel.svelte';
  import css from './svg.css?raw';

  type FloatsMarginBasedProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsMarginBasedProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>float-based</em> grid uses <em>inline-margins</em> to create gutters between columns. Each
    column is floated to the left and positioned immediately after the previous column. In some cases,
    the last column wraps to the next line due to rounding errors.
  </p>
  <p>
    Each column except the first one, has an inline-start margin equal to the gutter width. This
    creates consistent spacing between columns but also keeps the first column flush with the
    container edge.
  </p>
  <ul class="new-column">
    <!-- 960 grid uses margins in two directions -->
    <li>
      <a href="https://getbootstrap.com/1.0.0/#grid-system">Bootstrap 1</a>
    </li>
    <li>
      <a href="https://getbootstrap.com/2.3.2/scaffolding.html#gridSystem">Bootstrap 2</a>
    </li>
    <li>
      <a href="https://github.com/joshuaclayton/blueprint-css/">Blueprint CSS</a>
    </li>
    <li>
      <a href="https://github.com/dhg/Skeleton">Skeleton</a>
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

<section
  class="card"
  style:--gutter-size-total={'calc((var(--number-of-columns) - 1) * var(--gutter-size))'}
  style:--size-of-column={'calc((100% - var(--gutter-size-total)) / var(--number-of-columns))'}
>
  {@render title('Margin-based float grid with gutters (single direction margins)')}
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
  {@render markup(css)}
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
