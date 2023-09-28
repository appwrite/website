<script lang="ts">
	import { getContext, hasContext } from 'svelte';

	export let src: string;
	export let alt: string;
	export let title: string;

	const inTable = hasContext('in-table') ? getContext('in-table') : false;
</script>

{#if inTable}
	<img {src} {alt} {title} loading="lazy" style:vertical-align="middle" />
{:else}
	<div class="aw-media">
		<img {src} {alt} {title} loading="lazy" class="aw-u-media-ratio-16-9" />
	</div>
{/if}
