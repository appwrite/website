<script lang="ts">
	export let ordered: boolean;
</script>

<svelte:element this={ordered ? 'ol' : 'ul'} class="aw-list"><slot /></svelte:element>
