<script lang="ts">
  type IntroPanelProps = {
    sections: { id: string; label: string }[];
  };

  let { sections }: IntroPanelProps = $props();
</script>

<div class="card">
  <h1 class="section-headline">Yester&shy;year-grids</h1>

  <div class="description">
    <p>
      An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS with modern CSS syntax.
    </p>
  </div>

  <nav class="section-nav" aria-label="Various grid techniques">
    <ul class="nav-items no-indent">
      {#each sections as section (section.id)}
        <li>
          <a class="nav-item" href={`#${section.id}`}>{section.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
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

    .nav-items {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 2rem;
      list-style-type: ''; /* https://gomakethings.com/articles/semantic-inline-lists/ */
      column-rule: 2px solid var(--border);
    }
  }
</style>
