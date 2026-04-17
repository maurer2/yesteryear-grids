<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type ColumnProps = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
    class?: string;
    children: Snippet;
  };

  let { children, class: className, ...rest }: ColumnProps = $props();
</script>

<div class={["column", className]} {...rest}>
  {@render children?.()}
</div>

<style>
  @layer components {
    .column {
      background: black;
      color: white;
    }
  }
</style>
