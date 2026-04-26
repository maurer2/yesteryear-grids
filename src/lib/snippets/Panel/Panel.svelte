<script module lang="ts">
  import type { Snippet } from 'svelte';

  import { dummyText } from '../../../assets/lorem-ipsum';

  export { title, description, grid, markup };
</script>

{#snippet title(title: string)}
  <h2 class="section-subheadline">
    {title}
  </h2>
{/snippet}

{#snippet description(description?: Snippet)}
  <div class="description multi-column">
    {#if description}
      {@render description()}
    {:else}
      {#each dummyText as paragraph}
        <p>{paragraph}</p>
      {/each}
    {/if}
  </div>
{/snippet}

{#snippet grid(grid: Snippet)}
  <div class="grid">
    {@render grid()}
  </div>
{/snippet}

{#snippet markup(markup: string)}
  <div class="markup">
    {@html markup}
  </div>
{/snippet}
