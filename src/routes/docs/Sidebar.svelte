<script lang="ts">
	import Sidebar, { type NavTree } from '$lib/layouts/Sidebar.svelte';

	const navigation: NavTree = [
		{
			items: [
				{
					label: 'Quick Start',
					href: '/docs/quick-starts',
					icon: 'icon-play'
				},
				{
					label: 'Tutorials',
					href: '/docs/tutorials',
					icon: 'icon-book-open'
				},
				{
					label: 'SDKs',
					href: '/docs/sdks',
					icon: 'icon-cog'
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
					href: '/docs/products/functions',
					icon: 'icon-lightning-bolt'
				},
				{
					label: 'Storage',
					href: '/docs/products/storage',
					icon: 'icon-folder'
				}
			]
		},
		{
			label: 'APIS',
			items: [
				{
					label: 'Realtime',
					href: '/docs/apis/realtime',
					icon: 'icon-clock'
				},
				{
					label: 'REST',
					href: '/docs/apis/rest',
					icon: 'icon-play'
				},
				{
					label: 'GraphQL',
					href: '/docs/apis/graphql',
					icon: 'icon-play'
				}
			]
		},
		{
			label: 'Tooling',
			items: [
				{
					label: 'Command Line',
					href: '/docs/tooling/command-line/installation',
					icon: 'icon-terminal'
				},
				{
					label: 'Assistant',
					href: '/docs/tooling/assistant',
					icon: 'icon-sparkles'
				}
			]
		},
		{
			label: 'Advanced',
			items: [
				{
					label: 'Integration',
					href: '/docs/advanced/integration',
					icon: 'icon-puzzle'
				},
				{
					label: 'Platform',
					href: '/docs/advanced/platform',
					icon: 'icon-play'
				},
				{
					label: 'Migrations',
					href: '/docs/advanced/migrations',
					icon: 'icon-refresh'
				},
				{
					label: 'Self-hosting',
					href: '/docs/advanced/self-hosting/installation',
					icon: 'icon-server'
				}
			]
		}
	];
</script>

<Sidebar {navigation} />
