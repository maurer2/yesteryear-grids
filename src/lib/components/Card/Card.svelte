<!-- https://svelte.dev/docs/svelte/typescript#Generic-$props -->
<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';

  type CardProps = SvelteHTMLElements[T] & {
    children: Snippet;
    as?: T;
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
      display: flex;
      flex-direction: column;
      padding: 2rem;
      justify-content: center;
      gap: 1rem;
      background: var(--bg-soft);
      border: 1px solid var(--border);
      container-type: inline-size;
    }
  }
</style>
