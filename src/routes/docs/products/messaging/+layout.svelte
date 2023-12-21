<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Auth'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/XXXXX'
				},
				{
					label: 'Quick start',
					href: '/docs/products/XXXXX/quick-start'
				}
			]
		},
		{
			label: 'Concepts',
			items: [
				{
					label: 'Topics',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Providers',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'XXXXX',
					href: '/docs/products/messaging/XXXXX'
				},
				
			]
		},
		{
			label: 'Journeys',
			items: [
				{
					label: 'XXXXX',
					href: '/docs/products/messaging/XXXXX'
				},
			]
		},
		{
			label: 'References',
			items: [
				{
					label: 'XXXXX',
					href: '/docs/references/cloud/client-web/XXXXX'
				},
			]
		},
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
