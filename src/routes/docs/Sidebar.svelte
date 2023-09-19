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
			label: 'Advanced',
			items: [
				{
					label: 'Integration',
					href: '#',
					icon: 'icon-puzzle'
				},
				{
					label: 'Platform',
					href: '/docs/platform',
					icon: 'icon-play',
					items: [
						{
							label: 'API keys',
							href: '/docs/platform/api-keys'
						},
						{
							label: 'Events',
							href: '/docs/platform/events'
						},
						{
							label: 'Custom domains',
							href: '/docs/platform/custom-domains'
						},
						{
							label: 'Response codes',
							href: '/docs/platform/response-codes'
						},
						{
							label: 'Permissions',
							href: '/docs/platform/permissions'
						},
						{
							label: 'Webhooks',
							href: '/docs/platform/webhooks'
						}
					]
				},
				{
					label: 'Migrations',
					href: '/docs/advanced/migrations',
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

<Sidebar {navigation} />
