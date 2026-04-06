<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Properties } from "csstype";

  type ColumnProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
    style?: Properties;
    children: Snippet;
  };

  let { children, style, ...rest }: ColumnProps = $props();

  const styleString = $derived.by(() => {
    if (!style || Object.keys(style).length === 0) {
      return undefined;
    }

    return Object.entries(style)
      .map(([key, value]) => `${key}: ${value}`)
      .join("; ");
  });
</script>

<div class="column" style={styleString} {...rest}>
  {@render children?.()}
</div>

<style>
  @layer components {
    .column {
      background: var(--accent);
    }
  }
</style>
