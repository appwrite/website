<script lang="ts">
	import { setContext } from 'svelte';

	export let ordered: boolean;

	setContext('no-paragraph', true);
</script>

<svelte:element
	this={ordered ? 'ol' : 'ul'}
	class:aw-numeric-list={ordered}
	class:aw-pink-dots={!ordered}><slot /></svelte:element
>
