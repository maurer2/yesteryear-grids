<script lang="ts">
  import Row from '../../Row/Row.svelte';
  import Column from '../../Column/Column.svelte';
  import Panel, { type PanelLink } from '../../Panel/Panel.svelte';

  type FloatsMarginBasedProps = {
    numberOfColumns: number;
    cssListing?: string;
  };
  let { numberOfColumns, cssListing }: FloatsMarginBasedProps = $props();

  // 960 grid uses margins in two directions
  const links = [
    { href: 'https://getbootstrap.com/1.0.0/#grid-system', label: 'Bootstrap 1' },
    { href: 'https://getbootstrap.com/2.3.2/scaffolding.html#gridSystem', label: 'Bootstrap 2' },
    { href: 'https://github.com/joshuaclayton/blueprint-css/', label: 'Blueprint CSS' },
    { href: 'https://github.com/dhg/Skeleton', label: 'Skeleton' },
  ] satisfies PanelLink[];
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
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column class="column" />
    {/each}
  </Row>
{/snippet}

<div
  class="grid"
  style:--gutter-size-total={'calc((var(--number-of-columns) - 1) * var(--gutter-size))'}
  style:--size-of-column={'calc((100% - var(--gutter-size-total)) / var(--number-of-columns))'}
>
  <Panel
    title="Margin-based float grid with gutters (single direction margins)"
    description={descriptionContent}
    grid={gridContent}
    markup={cssListing}
    {links}
  />
</div>

<style>
  @layer components {
    .grid {
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
