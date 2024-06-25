<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Command Line'
	};

	const navigation: NavTree = [
		{
			label: 'Guides',
			items: [
				{
					label: 'Installation',
					href: '/docs/tooling/command-line/installation'
				},
				{
					label: 'Commands',
					href: '/docs/tooling/command-line/commands'
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
		},
		{
			label: 'Deployments',
			items: [
				{
					label: 'Authentication',
					href: '/docs/tooling/command-line/authentication'
				},
				{
					label: 'Databases',
					href: '/docs/tooling/command-line/databases'
				},
				{
					label: 'Collections',
					href: '/docs/tooling/command-line/collections'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
