<script lang="ts">
  import { description } from '../Panel/Panel.svelte';
</script>

<div class="card">
  <h1 class="section-headline">Yester&shy;year-grids</h1>

  <div class="description">
    <p>
      An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS with modern CSS syntax.
    </p>
  </div>

  <!--
    <ul>
      <li></li>
    </ul>
    -->
</div>

<style>
  @layer components {
    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > p {
        margin: 0;
      }
    }
  }
</style>
