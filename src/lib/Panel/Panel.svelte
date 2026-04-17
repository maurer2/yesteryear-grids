<script module lang="ts">
  import type { Snippet } from "svelte";

  export { title, description, grid };
</script>

{#snippet title(title: string)}
  <h2>
    {title}
  </h2>
{/snippet}

{#snippet description(description: Snippet)}
  <div class="description">{@render description()}</div>
{/snippet}

{#snippet grid(grid: Snippet)}
  <div class="grid">
    {@render grid()}
  </div>
{/snippet}

{#snippet markup(markup: Snippet)}
  <div class="markup">
    {@render markup()}
  </div>
{/snippet}
