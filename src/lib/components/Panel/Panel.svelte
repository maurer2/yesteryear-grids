<script lang="ts">
  import type { Snippet } from 'svelte';

  import { dummyText } from '../../../assets/lorem-ipsum';

  export type PanelLink = {
    href: string;
    label: string;
  };

  type PanelProps = {
    title: string;
    grid: Snippet;
    description?: Snippet;
    markup?: string;
    links?: PanelLink[];
  };

  let { title, grid, description, markup, links = [] }: PanelProps = $props();
</script>

<div class="panel">
  <h2 class="headline">
    {title}
  </h2>

  <div class="description multi-column">
    {#if description}
      {@render description()}
    {:else}
      {#each dummyText as paragraph}
        <p>{paragraph}</p>
      {/each}
    {/if}

    {#if links.length}
      <ul class="new-column">
        {#each links as link (link.href)}
          <li>
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="grid">
    {@render grid()}
  </div>

  {#if markup}
    <div class="markup">
      {@html markup}
    </div>
  {/if}
</div>

<style>
  @layer components {
    .panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    .headline {
      margin-block-end: 0;
      font-size: calc(var(--viewport-base-unit) * 1.5);
    }
  }
</style>
