<script lang="ts">
  type IntroPanelProps = {
    sections: { id: string; label: string }[];
  };

  let { sections }: IntroPanelProps = $props();
</script>

<div class="intro-panel">
  <h1 class="section-headline">Yester&shy;year-grids</h1>

  <div class="description">
    <p>
      An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS with modern CSS syntax.
    </p>
  </div>

  <nav aria-label="Table of contents">
    <ol class="table-of-contents no-indent">
      {#each sections as section (section.id)}
        <li>
          <a class="table-of-contents-entry" href={`#${section.id}`}>{section.label}</a>
        </li>
      {/each}
    </ol>
  </nav>
</div>

<style>
  @layer components {
    .intro-panel {
      display: flex;
      padding-block: 2rem;
      flex-direction: column;
      gap: 1rem;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > p {
        margin: 0;
      }
    }

    .table-of-contents {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 2rem;
      list-style-type: ''; /* https://gomakethings.com/articles/semantic-inline-lists/ */
      column-rule: 2px solid var(--border);
      scroll-target-group: auto;
    }

    .table-of-contents-entry {
      &:not(:hover):target-current {
        color: var(--accent-secondary);
        text-decoration: underline dotted;
      }
    }
  }
</style>
