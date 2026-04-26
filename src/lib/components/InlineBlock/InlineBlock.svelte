<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../../snippets/Panel/Panel.svelte';

  type InlineBlockProps = {
    numberOfColumns: number;
    cssListing?: string;
  };
  let { numberOfColumns, cssListing }: InlineBlockProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>inline-block-based</em> grid uses <em>inline margins</em> to create gutters between
    columns. There are multiple approaches to remove the whitespace between inline-block columns.
    One approach is to set <code class="code">letter-spacing: -1em</code> on the parent row and
    reset it to <em>normal</em> in each column. Another is to set
    <code class="code">font-size: 0</code> on the parent row and reset it in each column. A third
    option is to strip the whitespace from the markup using HTML comments. Finally, setting the
    parent row to <code class="code">display: table</code> causes some browsers to ignore whitespace entirely.
  </p>
  <p>
    Each column except the first has an inline-start margin equal to the gutter width. This creates
    consistent spacing between columns while keeping the first column flush with the container edge.
  </p>
  <ul class="new-column">
    <li>
      <a href="https://github.com/esr360/Kayzen-GS"
        >KayzenGS (<em>letter-spacing</em> and <em>display-table</em>)</a
      >
    </li>
    <li>
      <a href="https://pure-css.github.io/grids/">Yahoo Pure (<em>letter-spacing</em>)</a>
    </li>
    <!-- <li>
    <a href="https://csswizardry.com/csswizardry-grids/"
      >csswizardry-grids (uses comment trick, padding for gutters)</a
    >
  </li>
  <li>
    <a href="https://github.com/daneden/toast"
      >Toast grid (uses comment trick, padding for gutters)</a
    >
  </li> -->
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
  {@render title('Inline block grids')}
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
  {#if cssListing}
    {@render markup(cssListing)}
  {/if}
</section>

<style>
  @layer components {
    .card {
      /* child component styles */
      & {
        :global(.row) {
          display: table;
          table-layout: fixed;
          inline-size: 100%;
          letter-spacing: -1em;
        }

        & :global(.column) {
          display: inline-block;
          inline-size: var(--size-of-column);
          margin-inline-start: var(--gutter-size);
          letter-spacing: normal;

          &:first-child {
            margin-inline-start: 0;
          }
        }
      }
    }
  }
</style>
