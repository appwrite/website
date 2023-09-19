<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Command Line'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/tooling/command-line'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Installation',
					href: '/docs/tooling/command-line/installation'
				},
				{
					label: 'Deployment',
					href: '/docs/tooling/command-line/deployment'
				},
				{
					label: 'Non interactive',
					href: '/docs/tooling/command-line/non-interactive'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
