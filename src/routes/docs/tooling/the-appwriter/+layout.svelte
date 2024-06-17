<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar from '$lib/layouts/Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
	<Sidebar />
	<slot />
</Docs>
