<script lang="ts">
	import { getContext, hasContext } from 'svelte';

	export let src: string;
	export let alt: string;
	export let title: string;

	const inTable = hasContext('in-table') ? getContext('in-table') : false;
</script>

{#if inTable}
	<img {src} {alt} {title} loading="lazy" />
{:else}
	<div class="aw-media">
		<img {src} {alt} {title} loading="lazy" />
	</div>
{/if}
