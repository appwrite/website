<script lang="ts">
	import { Metadata } from '$lib/components';
	import { DEFAULT_HOST, setMetadata } from '$lib/components/Metadata.svelte';
	import { TITLE_SUFFIX } from '$routes/titles';

	setMetadata({
		title: 'Docs' + TITLE_SUFFIX,
		ogImage: DEFAULT_HOST + '/images/open-graph/docs.png'
	});
</script>

<slot />
