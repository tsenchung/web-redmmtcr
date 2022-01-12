<script lang="ts">
  import type { Entry } from '$lib/types/Entry';
  import Readotron from '@untemps/svelte-readotron';
  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: ''
  };
</script>

<h2>{entry.title}</h2>
<hr class="title-divider" />
<section class="title-details">
  <p class="author">{entry.author}</p>
  <p class="date">{entry.date}</p>
  <p class="reading-time">
    <Readotron selector="article.article" lang="es" template="Tiempo de lectura: %time% minutos" />
  </p>
</section>
