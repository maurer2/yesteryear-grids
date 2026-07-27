<script lang="ts">
  import Row from '../../Row/Row.svelte';
  import Column from '../../Column/Column.svelte';
  import Panel, { type PanelLink } from '../../Panel/Panel.svelte';

  type TableWithBorderSpacingProps = {
    numberOfColumns: number;
    cssListing?: string;
  };
  let { numberOfColumns, cssListing }: TableWithBorderSpacingProps = $props();

  const links = [
    { href: 'https://github.com/mdo/table-grid', label: 'Table grid' },
  ] satisfies PanelLink[];
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

<div class="grid">
  <Panel
    title="Border spacing grid"
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
