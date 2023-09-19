<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		backlink: '/docs',
		href: '/docs/advanced/platform',
		label: 'Platform',
		icon: 'icon-play'
	};

	const navigation: NavTree = [
		{
			label: 'Guides',
			items: []
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
