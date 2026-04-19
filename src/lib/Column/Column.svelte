<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type ColumnProps = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
    class?: string;
    children?: Snippet;
  };

  let { children, class: className, ...rest }: ColumnProps = $props();
</script>

<div class={["column", className]} {...rest}>
  <span class="label">Column</span>
</div>

<style>
  @layer components {
    .column {
      position: relative;
      background: var(--bg);
      color: var(--text);
      block-size: 25dvi;

      @container (inline-size >= 600px) {
        block-size: 10dvi;
      }
    }

    .label {
      position: absolute;
      inset: 0;
      align-self: center;
      rotate: 90deg;
      transform-origin: center;
      text-align: center;
    }
  }
</style>
