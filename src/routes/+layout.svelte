<script lang="ts">
	import '@fontsource/inter/100.css';
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/inter/900.css';
	import '$scss/index.scss';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	{#if !dev}
		<script defer data-domain="appwrite.io" src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<slot />
