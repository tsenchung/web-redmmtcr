<script lang="ts">
  import FeaturedPost from '$lib/components/FeaturedPost.svelte';
  import { getEntries } from '$lib/Registry';

  // !! Vite specific!!
  const _ = import.meta.globEager('./articles/[!_]*');

  let featured = getEntries();

</script>

<main>
  {#each featured as entry}
    <FeaturedPost {entry} />{/each}
</main>
