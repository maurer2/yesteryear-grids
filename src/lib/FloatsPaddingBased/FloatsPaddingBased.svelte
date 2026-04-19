<script lang="ts">
  import Row from '../Row/Row.svelte';
  import Column from '../Column/Column.svelte';
  import { title, description, grid, markup } from '../Panel/Panel.svelte';
  import css from './svg.css?raw';

  type FloatsPaddingBasedProps = {
    numberOfColumns: number;
  };
  let { numberOfColumns }: FloatsPaddingBasedProps = $props();
</script>

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns }}
      <Column class="column" />
    {/each}
  </Row>
{/snippet}

<section class="card" style:--size-of-column={'calc(100% / var(--number-of-columns))'}>
  {@render title('Padding-based float grid with gutters in children (Boostrap 2 and 3)')}
  {@render description()}
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
