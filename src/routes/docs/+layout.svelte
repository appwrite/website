<script lang="ts">
	import { Metadata } from '$lib/components';
	import { DEFAULT_HOST } from '$lib/components/Metadata.svelte';
	import { TITLE_SUFFIX } from '$routes/titles';
</script>

<svelte:head>
	<Metadata title={'Docs' + TITLE_SUFFIX} ogImage={DEFAULT_HOST + '/images/open-graph/docs.png'} />
</svelte:head>

<slot />
