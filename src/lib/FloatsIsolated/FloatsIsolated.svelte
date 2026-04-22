<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../Panel/Panel.svelte';
  import css from './svg.css?raw';

  type FloatsContainerRelativeProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsContainerRelativeProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>float-based</em> grid uses <em>inline-margins</em> to position components relative to the
    container. Each column is positioned independently from other columns to avoid rounding errors that
    could cause wrapping.
  </p>
  <p>
    Each column is floated to the left, taking it out of normal flow. A <em>margin-inline-end</em>
    value of
    <code class="code">-100%</code> pulls each column back to the left edge of the container and
    overrides the default float behaviour where each float follows the previous one. The actual
    positon of a column is then set via <em>margin-inline-start</em>.
  </p>
  <ul class="new-column">
    <li>
      <a href="https://susy.readthedocs.io/toolkit/#isolate">Susy — <em>isolate mixin</em></a>
    </li>
    <li>
      <a href="https://github.com/JohnAlbin/zen-grids/blob/master/sass/zen-grids/_grids.scss"
        >Zen Grids — <em>zen-grid-item mixin</em></a
      >
    </li>
  </ul>
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column />
    {/each}
  </Row>
{/snippet}

<section
  class="card"
  style:--gutter-size-total={'calc((var(--number-of-columns) - 1) * var(--gutter-size))'}
  style:--size-of-column={'calc((100% - var(--gutter-size-total)) / var(--number-of-columns))'}
>
  {@render title('Isolated floats')}
  {@render description(descriptionContent)}
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
