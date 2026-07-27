<script lang="ts">
  import Row from '../../Row/Row.svelte';
  import Column from '../../Column/Column.svelte';
  import Panel from '../../Panel/Panel.svelte';

  type InlineBlockWithTextAlignJustifyProps = {
    numberOfColumns: number;
    cssListing?: string;
  };
  let { numberOfColumns, cssListing }: InlineBlockWithTextAlignJustifyProps = $props();
</script>

{#snippet descriptionContent()}
  <p>
    This <em>inline-block-based</em> grid uses <code class="code">text-align: justify</code> and
    <code class="code">text-align-last: justify</code> to create gutters between columns. The latter
    avoids having to use a <em>spacer</em> element to make the former work as
    <code class="code">text-align: justify</code>
    isn't applied to the last line of a justified block.
  </p>
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns } as _, index}
      <Column class="column" />
      {#if index === numberOfColumns - 1}
        <span class="spacer"></span>
      {/if}
    {/each}
  </Row>
{/snippet}

<div
  class="grid"
  style:--gutter-size-total={'calc((var(--number-of-columns) - 1) * var(--gutter-size))'}
  style:--size-of-column={'calc((100% - var(--gutter-size-total)) / var(--number-of-columns))'}
>
  <Panel
    title="Justified inline-block grid with text-align-last"
    description={descriptionContent}
    grid={gridContent}
    markup={cssListing}
  />
</div>

<style>
  @layer components {
    .grid {
      & {
        :global(.row) {
          text-align: justify;
          text-align-last: justify;
        }

        :global(.column) {
          display: inline-block;
          inline-size: var(--size-of-column);
          text-align: center;
          text-align-last: center;
        }
      }
    }
  }
</style>
