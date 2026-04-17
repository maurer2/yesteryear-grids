<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";
  import { title, description, grid } from "../Panel/Panel.svelte";

  type InlineBlockWithTextAlignJustifyProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: InlineBlockWithTextAlignJustifyProps =
    $props();
</script>

{#snippet descriptionContent()}
  <p>Todo</p>
{/snippet}

{#snippet gridContent()}
  <Row class="row">
    {#each { length: numberOfColumns } as _, index}
      <Column class="column">
        {@render children?.()}
      </Column>
      {#if index === numberOfColumns - 1}
        <span class="spacer"></span>
      {/if}
    {/each}
  </Row>
{/snippet}

<section
  class="card"
  style:--gutter-size-total={"calc((var(--number-of-columns) - 1) * var(--gutter-size))"}
  style:--size-of-column={"calc((100% - var(--gutter-size-total)) / var(--number-of-columns))"}
>
  {@render title("Inline block grids with text align justify")}
  {@render description(descriptionContent)}
  {@render grid(gridContent)}
</section>

<style>
  @layer components {
    .card {
      /* child component styles */
      & {
        :global(.row) {
          text-align: justify;
          line-height: 0;
        }

        :global(.column) {
          display: inline-block;
          inline-size: var(--size-of-column);
          margin-block-end: -7px;
          line-height: normal;
          text-align: start;
        }

        /* neccessary as "&::after" on row doesn't work; it needs to be a real element */
        :global(.spacer) {
          display: inline-block;
          inline-size: 100%;
          block-size: 0;
        }
      }
    }
  }
</style>
