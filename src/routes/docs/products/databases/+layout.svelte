<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Databases'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/databases'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Quick Start',
					href: '/docs/products/databases/quick-start'
				},
				{
					label: 'Databases',
					href: '/docs/products/databases/databases'
				},
				{
					label: 'Collections',
					href: '/docs/products/databases/collections'
				},
				{
					label: 'Documents',
					href: '/docs/products/databases/documents'
				},
				{
					label: 'Queries',
					href: '/docs/products/databases/queries'
				},
				{
					label: 'Order',
					href: '/docs/products/databases/order'
				},
				{
					label: 'Pagination',
					href: '/docs/products/databases/pagination'
				},
				{
					label: 'Permissions',
					href: '/docs/products/databases/permissions'
				},
				{
					label: 'Relationships',
					href: '/docs/products/databases/relationships'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
