<!-- https://svelte.dev/docs/svelte/typescript#Generic-$props -->
<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';

  // SvelteHTMLElements[T] restricts prop combinations to avoid invalid props for an element, e.g. button with href
  type CardProps = SvelteHTMLElements[T] & {
    children: Snippet;
    as?: T & keyof HTMLElementTagNameMap; // prevents unknown element names or element names with typos, e.g. batton
  };

  let { children, as, class: className, ...rest }: CardProps = $props();
</script>

<!-- const Component = as ?? 'div'; -->
<svelte:element this={as ?? 'div'} class={['card', className]} {...rest}>
  {@render children()}
</svelte:element>

<style>
  @layer components {
    .card {
      --card-padding: 2rem;
      --card-border-width: 1px;

      padding: var(--card-padding);
      background: var(--bg-soft);
      border: var(--card-border-width) solid var(--border);
      scroll-margin-block-start: 2rem;
      container: card / inline-size;
    }
  }
</style>
