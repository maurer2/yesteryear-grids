<script lang="ts">
  import Row from '../../Row/Row.svelte';
  import Column from '../../Column/Column.svelte';
  import Panel, { type PanelLink } from '../../Panel/Panel.svelte';

  type FloatsPaddingBasedProps = {
    numberOfColumns: number;
    cssListing?: string;
  };
  let { numberOfColumns, cssListing }: FloatsPaddingBasedProps = $props();

  const links = [
    { href: 'https://getbootstrap.com/docs/3.3/css/#grid', label: 'Bootstrap 3' },
    { href: 'https://get.foundation/sites/docs/grid.html', label: 'Zurb Foundation' },
  ] satisfies PanelLink[];
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
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column class="column" />
    {/each}
  </Row>
{/snippet}

<div class="grid" style:--size-of-column={'calc(100% / var(--number-of-columns))'}>
  <Panel
    title="Padding-based float grid with gutters via padding"
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
