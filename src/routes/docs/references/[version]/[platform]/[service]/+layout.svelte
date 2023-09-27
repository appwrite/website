<script lang="ts">
	import { onMount } from 'svelte';
	import { getReferencesContext } from '$routes/docs/references/+layout.svelte';

	const expandable = getReferencesContext();

	onMount(() => {
		expandable.set(true);

		return () => {
			expandable.set(false);
		};
	});
</script>

<slot />
