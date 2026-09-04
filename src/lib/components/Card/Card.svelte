<!-- https://svelte.dev/docs/svelte/typescript#Generic-$props -->
<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

  // SvelteHTMLElements[T] restricts prop combinations to avoid invalid props for an element, e.g. button with href
  type CardProps = SvelteHTMLElements[T] & {
    children: Snippet;
    // SvelteHTMLElements uses any-typed index signature for props of generic elements (`[name: string]: any`) when T is not narrowed to a specific tag
    class?: HTMLAttributes<HTMLElement>['class'];
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
      border: var(--card-border-width) solid var(--border);
      scroll-margin-block-start: 2rem;
      background: var(--bg-soft);
      container: card / inline-size;
    }
  }
</style>
