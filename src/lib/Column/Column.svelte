<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type ColumnProps = HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
  };

  let { children, ...rest }: ColumnProps = $props();
</script>

<div class="column" {...rest}>
  {@render children?.()}
</div>

<style>
  @layer components {
    .column {
      background: var(--accent);
    }
  }
</style>
