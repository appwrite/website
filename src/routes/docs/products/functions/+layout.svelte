<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Functions'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/functions'
				},
				{
					label: 'Quick Start',
					href: '/docs/products/functions/quick-start'
				},
			]
		},
		{
			label: 'Journeys',
			items: [
				{
					label: 'Development',
					href: '/docs/products/functions/development'
				},
				{
					label: 'Deployment',
					href: '/docs/products/functions/deployment'
				},
				{
					label: 'Execution',
					href: '/docs/products/functions/execution'
				},
				{
					label: 'Runtimes',
					href: '/docs/products/functions/runtimes'
				},
				{
					label: 'Examples',
					href: '/docs/products/functions/examples'
				}
			]
		},
		{
			label: 'References',
			items: [
				{
					label: 'Functions API',
					href: '/docs/references/cloud/client-web/functions'
				},
			]
		},
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
