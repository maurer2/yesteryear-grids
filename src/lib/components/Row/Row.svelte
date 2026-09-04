<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type RowProps = HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
  };

  let { children, class: className, ...rest }: RowProps = $props();
</script>

<div class={['row', className]} {...rest}>
  {@render children?.()}
</div>

<style>
  @layer components {
    /* .row {
      background: gainsboro;
    } */
  }
</style>
