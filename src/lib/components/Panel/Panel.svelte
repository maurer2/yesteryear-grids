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

  <section class="section">
    <h3 class="section-headline">Description</h3>

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
  </section>

  <section class="section">
    <h3 class="section-headline">Grid</h3>

    <div class="grid">
      {@render grid()}
    </div>
  </section>

  {#if markup}
    <section class="section">
      <h3 class="section-headline">CSS</h3>

      <div class="markup">
        {@html markup}
      </div>
    </section>
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

    .section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .section-headline {
      margin-block-end: 0;
      font-size: calc(var(--viewport-base-unit) * 1.1);
    }
  }
</style>
