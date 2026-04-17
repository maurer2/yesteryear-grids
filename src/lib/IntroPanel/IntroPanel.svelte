<script lang="ts">
  import { description } from "../Panel/Panel.svelte";
</script>

{#snippet descriptionContent()}
  <p>An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS.</p>
{/snippet}

<div class="card">
  <h1 class="section-headline">Grids of yesteryear</h1>

  {@render description(descriptionContent)}

  <!--
    <ul>
      <li></li>
    </ul>
    -->
</div>

<style>
  @layer components {
    .section-headline {
      margin-block-start: 0;
    }
  }
</style>
