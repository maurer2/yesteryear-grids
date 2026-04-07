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

<section>
  <h2>Padding-based float grid with gutters in children (Boostrap 2 and 3)</h2>
  <div>
    <h3>Classic approach</h3>
    <Row style="display: flow-root; margin-inline: -0.5rem">
      {#each { length: numberOfColumns } as _, index}
        <Column
          style={`
            width: ${100 / numberOfColumns}%;
            float: left;
            padding-inline: 0.5rem;
            background-clip: content-box;
          `}
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
