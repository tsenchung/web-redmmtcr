<script lang="ts">
  import '$lib/css/FeaturedPost.scss';
  import type { Entry } from '$lib/types/Entry';

  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: ''
  };
</script>

<article class="featured">
  <h2>{entry.title}</h2>
  <p>{entry.author}</p>
  <p>{entry.date}</p>
  <p>{entry.path}</p>
</article>
