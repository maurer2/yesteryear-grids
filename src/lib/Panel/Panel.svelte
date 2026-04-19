<script module lang="ts">
  import type { Snippet } from "svelte";
  import { codeToHtml } from "shiki";

  import { dummyText } from "../../assets/lorem-ipsum";

  type CodeToHtmlOptions = Parameters<typeof codeToHtml>[1];

  const codeToHtmlOptions: CodeToHtmlOptions = {
    lang: "css",
    theme: "catppuccin-latte",
    colorReplacements: {
      "#eff1f5": "--bg-soft",
    },
  };

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
  {@const html = await codeToHtml(markup, codeToHtmlOptions)}
  <div class="markup">
    {@html html}
  </div>
{/snippet}
