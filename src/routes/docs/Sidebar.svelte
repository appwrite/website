<script lang="ts">
	import Sidebar, { type NavTree } from '$lib/layouts/Sidebar.svelte';

	const navigation: NavTree = [
		{
			items: [
				{
					label: 'Home',
					href: '/docs',
					icon: 'icon-home'
				},
				{
					label: 'Quick start',
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
					label: 'API reference',
					href: '/docs/references',
					icon: 'icon-document',
					isParent: true
				}
			]
		},
		{
			label: 'Products',
			items: [
				{
					label: 'Auth',
					href: '/docs/products/auth',
					icon: 'icon-user-group',
					isParent: true
				},
				{
					label: 'Databases',
					href: '/docs/products/databases',
					icon: 'icon-database',
					isParent: true
				},
				{
					label: 'Functions',
					href: '/docs/products/functions',
					icon: 'icon-lightning-bolt',
					isParent: true
				},
				{
					label: 'Messaging',
					href: '/docs/products/messaging',
					icon: 'icon-send',
					isParent: true
				},
				{
					label: 'Storage',
					href: '/docs/products/storage',
					icon: 'icon-folder',
					isParent: true
				},
				{
					label: 'AI',
					href: '/docs/products/ai',
					icon: 'icon-academic-cap', // Temp, replace with icon design wants
					isParent: true
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
					icon: 'aw-icon-rest'
				},
				{
					label: 'GraphQL',
					href: '/docs/apis/graphql',
					icon: 'icon-graphql'
				}
			]
		},
		{
			label: 'Tooling',
			items: [
				{
					label: 'Command Line',
					href: '/docs/tooling/command-line/installation',
					icon: 'icon-terminal',
					isParent: true
				},
				{
					label: 'Command Center',
					href: '/docs/tooling/command-center',
					icon: 'aw-icon-command'
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
					label: 'Platform',
					href: '/docs/advanced/platform',
					icon: 'aw-icon-platform',
					isParent: true
				},
				{
					label: 'Migrations',
					href: '/docs/advanced/migrations',
					icon: 'icon-refresh',
					isParent: true
				},
				{
					label: 'Security',
					href: '/docs/advanced/security',
					icon: 'icon-shield-check',
					isParent: true
				},
				{
					label: 'Self-hosting',
					href: '/docs/advanced/self-hosting',
					icon: 'icon-server',
					isParent: true
				}
			]
		}
	];
</script>

<Sidebar {navigation} />
