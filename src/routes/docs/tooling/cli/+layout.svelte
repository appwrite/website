<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		backlink: '/docs',
		href: '/docs/tooling/cli',
		label: 'CLI',
		icon: 'icon-terminal'
	};

	const navigation: NavTree = [
		{
			label: 'Guides',
			items: [
				{
					label: 'Installation',
					href: '/docs/tooling/cli/installation'
				},
				{
					label: 'Deployment',
					href: '/docs/tooling/cli/deployment'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
