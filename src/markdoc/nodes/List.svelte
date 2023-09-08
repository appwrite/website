<script lang="ts">
	export let ordered: boolean;
</script>

<svelte:element
	this={ordered ? 'ol' : 'ul'}
	class:aw-numeric-list={ordered}
	class:aw-pink-dots={!ordered}><slot /></svelte:element
>
