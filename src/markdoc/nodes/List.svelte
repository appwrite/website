<script lang="ts">
	export let ordered: boolean;
</script>

<svelte:element
	this={ordered ? 'ol' : 'ul'}
	class:aw-numeric-list={ordered}
	class:aw-list={!ordered}><slot /></svelte:element
>
