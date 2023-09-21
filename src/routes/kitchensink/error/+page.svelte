<script lang="ts">
	import { page } from '$app/stores';
	import { Docs } from '$lib/layouts';
	import Sidebar from '$routes/docs/Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
	<Sidebar />

	<!-- error page here -->
</Docs>
