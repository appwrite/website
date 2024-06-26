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
					label: 'Databases',
					href: '/docs/tooling/command-line/databases'
				},
				{
					label: 'Collections',
					href: '/docs/tooling/command-line/collections'
				},
				{
					label: 'Functions',
					href: '/docs/tooling/command-line/functions'
				},
				{
					label: 'Teams',
					href: '/docs/tooling/command-line/teams'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
