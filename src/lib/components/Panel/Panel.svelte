<script lang="ts">
  import type { Snippet } from 'svelte';

  // import { dummyText } from '../../../assets/lorem-ipsum';

  export type PanelLink = {
    href: string;
    label: string;
  };

  type PanelProps = {
    id: string;
    title: string;
    grid: Snippet;
    description?: Snippet;
    markup?: string;
    links?: PanelLink[];
  };

  let { id, title, grid, description, markup, links = [] }: PanelProps = $props();
</script>

<div class="panel">
  <h2 class="headline" {id}>
    {title}
  </h2>

  <section class="section">
    <h3 class="section-headline">Description</h3>

    <div class="description multi-column">
      {#if description}
        {@render description()}
        <!-- {:else}
        {#each dummyText as paragraph}
          <p>{paragraph}</p>
        {/each} -->
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

      <div class="markup thin-scrollbars">
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
      gap: 1rem;
    }

    .headline {
      margin-block-end: 0;
      font-size: calc(var(--viewport-base-unit) * 1.5);
      /* 2rem space below header/gap between panels */
      scroll-margin-block-start: calc(2rem + var(--card-content-start-vertically, 0px));
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

    .markup {
      display: grid;
      grid-template-areas: 'stack'; /* can't use absolute postion inside scroll container */
      overflow-x: auto;
      overscroll-behavior-x: contain;
      container-type: scroll-state;

      :global(pre) {
        padding-block-end: 1rem;
        grid-area: stack;
      }

      /* overflow indicators */
      &::before,
      &::after {
        content: '';
        position: sticky;
        inline-size: 2rem;
        inset: 0;
        grid-area: stack;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.5s ease;

        @media (prefers-reduced-motion: reduce) {
          transition-duration: 0s;
        }
      }

      &::before {
        justify-self: start;
        background: linear-gradient(to right, var(--border), transparent);
      }

      &::after {
        justify-self: end;
        background: linear-gradient(to left, var(--border), transparent);
      }

      /* svelte doesn't support named scroll-state containers */
      @container scroll-state(scrollable: left) {
        &::before {
          opacity: 1;
        }
      }

      /* svelte doesn't support named scroll-state containers */
      @container scroll-state(scrollable: right) {
        &::after {
          opacity: 1;
        }
      }
    }
  }
</style>
