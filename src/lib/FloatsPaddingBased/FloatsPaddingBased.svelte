<script lang="ts">
  import type { Snippet } from "svelte";

  import Row from "../Row/Row.svelte";
  import Column from "../Column/Column.svelte";

  type FloatsPaddingBasedProps = {
    numberOfColumns: number;
    children: Snippet;
  };
  let { numberOfColumns, children }: FloatsPaddingBasedProps = $props();
</script>

<section style:--size-of-column={"calc(100% / var(--number-of-columns))"}>
  <h2>Padding-based float grid with gutters in children (Boostrap 2 and 3)</h2>
  <div>
    <h3>Classic approach</h3>
    <Row
      style="
        display: flow-root;
        margin-inline: calc(var(--gutter-size) / -2)
        "
    >
      {#each { length: numberOfColumns }}
        <Column
          style="
            inline-size: var(--size-of-column);
            padding-inline: calc(var(--gutter-size) / 2);
            float: inline-start;
            background-clip: content-box;
          "
        >
          {@render children?.()}</Column
        >
      {/each}
    </Row>
  </div>
</section>

<style>
  @layer components {
  }
</style>
