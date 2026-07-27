<script lang="ts">
  type IntroPanelProps = {
    grids: { id: string; label: string }[];
  };

  let { grids }: IntroPanelProps = $props();
</script>

<div class="intro-panel">
  <h1 class="headline">Yester&shy;year-grids</h1>

  <div class="description">
    <p>
      An overview of pre-Flexbox and pre-CSS Grid layout techniques in CSS with modern CSS syntax.
    </p>
  </div>

  <nav aria-label="Table of contents">
    <ol class="table-of-contents no-indent">
      {#each grids as grid (grid.id)}
        <li>
          <a class="table-of-contents-entry" href={`#${grid.id}`}>{grid.label}</a>
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

    .headline {
      margin-block-end: 0;
      font-size: calc(var(--viewport-base-unit) * 2);
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
      gap: 0.5rem 1rem;
      list-style-type: ''; /* https://gomakethings.com/articles/semantic-inline-lists/ */
      column-rule: 1px solid var(--border);
      scroll-target-group: auto;
    }

    .table-of-contents-entry {
      &:target-current {
        color: var(--accent-secondary);
        text-decoration: underline dotted;
      }
    }
  }
</style>
