<script lang="ts">
  import '$lib/css/FeaturedPost.scss';
  import type { Entry } from '$lib/types/Entry';
  import { formatDate } from '$lib/date';

  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: '',
    thumbnail: '',
    placement: '',
    linktitle: '',
    draft: false,
    readingTime: 1
  };
</script>

<article class="featured">
  <a href={entry.path}>
    <img src={entry.thumbnail} alt="" />
  </a>
  <section class="detail">
    <a href={entry.path}>
      <h1>{entry.title}</h1>
      <p>{entry.author}</p>
      <p>{formatDate(entry.date)}</p>
    </a>
  </section>
</article>
