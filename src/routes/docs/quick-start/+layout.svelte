<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavTree } from '$lib/layouts/Sidebar.svelte';

	const navigation: NavTree = [
		{
			items: [
				{
					label: 'Quick Start',
					href: '/docs/quick-start',
					icon: 'icon-play'
				},
				{
					label: 'Tutorials',
					href: '/docs/tutorials',
					icon: 'icon-book-open'
				},
				{
					label: 'SDKs',
					href: '#',
					icon: 'icon-cog'
				},
				{
					label: 'Command Line',
					href: '#',
					icon: 'icon-terminal'
				},
				{
					label: 'References',
					href: '/docs/references',
					icon: 'icon-document'
				}
			]
		},
		{
			label: 'Products',
			items: [
				{
					label: 'Auth',
					href: '/docs/products/auth',
					icon: 'icon-user-group'
				},
				{
					label: 'Databases',
					href: '/docs/products/databases',
					icon: 'icon-database'
				},
				{
					label: 'Functions',
					href: '#',
					icon: 'icon-lightning-bolt'
				},
				{
					label: 'Storage',
					href: '#',
					icon: 'icon-folder'
				}
			]
		},
		{
			label: 'APIS',
			items: [
				{
					label: 'Realtime',
					href: '#',
					icon: 'icon-clock'
				},
				{
					label: 'REST',
					href: '#',
					icon: 'icon-play'
				},
				{
					label: 'GraphQL',
					href: '#',
					icon: 'icon-play'
				}
			]
		},
		{
			label: 'Advanced',
			items: [
				{
					label: 'Integration',
					href: '#',
					icon: 'icon-puzzle'
				},
				{
					label: 'Platform',
					href: '#',
					icon: 'icon-play'
				},
				{
					label: 'Migrations',
					href: '#',
					icon: 'icon-refresh'
				},
				{
					label: 'Self-hosting',
					href: '#',
					icon: 'icon-server'
				}
			]
		}
	];
</script>

<Docs variant='two-side-navs'>
	<Sidebar {navigation} />
	<slot />
</Docs>
