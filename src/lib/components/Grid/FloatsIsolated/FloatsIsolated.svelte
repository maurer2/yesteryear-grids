<script lang="ts">
  import Row from '../../Row/Row.svelte';
  import Column from '../../Column/Column.svelte';
  import Panel, { type PanelLink } from '../../Panel/Panel.svelte';

  type FloatsContainerRelativeProps = {
    id: string;
    numberOfColumns: number;
    cssListing?: string;
  };
  let { id, numberOfColumns, cssListing }: FloatsContainerRelativeProps = $props();

  const links = [
    { href: 'https://susy.readthedocs.io/toolkit/#isolate', label: 'Susy (isolate mixin)' },
    {
      href: 'https://github.com/JohnAlbin/zen-grids/blob/master/sass/zen-grids/_grids.scss',
      label: 'Zen Grids (zen-grid-item mixin)',
    },
  ] satisfies PanelLink[];
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
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns, index: 0 } as _, index}
      <Column style="--index-of-column: {index};" />
    {/each}
  </Row>
{/snippet}

<div
  class="panel-wrapper"
  style:--gutter-size-total={'calc((var(--number-of-columns) - 1) * var(--gutter-size))'}
  style:--size-of-column={'calc((100% - var(--gutter-size-total)) / var(--number-of-columns))'}
>
  <Panel
    {id}
    title="Isolated floats"
    description={descriptionContent}
    grid={gridContent}
    markup={cssListing}
    {links}
  />
</div>

<style>
  @layer components {
    .panel-wrapper {
      & {
        :global(.row) {
          display: flow-root;
        }

        :global(.column) {
          inline-size: var(--size-of-column);
          /* FF fallback */
          margin-inline-start: calc(
            (var(--size-of-column) + var(--gutter-size)) * var(--index-of-column)
          );
          margin-inline-end: -100%; /* move every column to the left edge of container */
          float: inline-start;

          @supports (z-index: sibling-index()) {
            margin-inline-start: calc(
              (var(--size-of-column) + var(--gutter-size)) * (sibling-index() - 1)
            );
          }
        }
      }
    }
  }
</style>
