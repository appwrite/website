<script lang="ts">
	import { page } from '$app/stores';
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar from '../Sidebar.svelte';
</script>

<Docs variant={$page.url.pathname.endsWith('/quick-starts') ? 'default' : 'two-side-navs'}>
	<Sidebar />
	<slot />
</Docs>
