<script lang="ts">
  import '$lib/css/index.scss';
  import FeaturedPost from '$lib/components/FeaturedPost.svelte';
  import RecentPost from '$lib/components/RecentPost.svelte';
  import { all } from '$lib/content';

  const featured = all
    .filter(({ placement }) => placement == 'featured')
    .sort((a, b) => b.date.localeCompare(a.date));

  const recent = all
    .filter(({ placement }) => placement == 'regular')
    .sort((a, b) => b.date.localeCompare(a.date));
</script>

<svelte:head>
  <title>Red MMT Costa Rica</title>
</svelte:head>

<main>
  <section class="list">
    {#each featured as entry}
      <FeaturedPost {entry} (entry.path) />{/each}

    {#each recent as entry}
      <RecentPost {entry} (entry.path) />{/each}
  </section>
</main>
