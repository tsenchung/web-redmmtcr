<script lang="ts">
  import type { Entry } from '$lib/types/Entry';
  import '$lib/css/RecentPost.scss';

  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: '',
    thumbnail: '',
    placement: ''
  };
</script>

<article class="recent">
  <img src={entry.thumbnail} alt="" />
  <section class="detail">
    <a href={entry.path}>
      <h2>{entry.title}</h2>
      <p>{entry.author}</p>
      <p>{entry.date}</p>
    </a>
  </section>
</article>
