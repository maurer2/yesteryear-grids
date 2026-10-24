<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type ColumnProps = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
  };

  let { children, class: className, ...rest }: ColumnProps = $props();
</script>

<div class={['column', className]} {...rest}>
  <span class="label">Column</span>
</div>

<style>
  @layer components {
    .column {
      text-align: center;
      background: var(--bg);
      color: var(--text);
    }

    .label {
      padding-inline: 2rem; /* inline axis is now vertical as writing mode has changed */
      writing-mode: vertical-lr;
      /* text-orientation: upright; */
      text-orientation: sideways;
    }
  }
</style>
