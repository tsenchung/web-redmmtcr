<script lang="ts">
  import { navigating } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

{#if $navigating}
  <div transition:fade={{ duration: 300 }} class="progress" />
{/if}
