<script lang="ts">
  import type { Entry } from '$lib/types/Entry';
  import '$lib/css/RecentPost.scss';

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

<article class="recent">
  <a href={entry.path} aria-hidden="true">
    <img src={entry.thumbnail} alt="" />
  </a>
  <section class="detail">
    <a href={entry.path}>
      <h2>{entry.title}</h2>
      <p>{entry.author}</p>
      <p>{formatDate(entry.date)}</p>
    </a>
  </section>
</article>
