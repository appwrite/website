<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Platform'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/advanced/platform'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'API keys',
					href: '/docs/advanced/platform/api-keys'
				},
				{
					label: 'Custom domains',
					href: '/docs/advanced/platform/custom-domains'
				},
				{
					label: 'Events',
					href: '/docs/advanced/platform/events'
				},
				{
					label: 'Response codes',
					href: '/docs/advanced/platform/response-codes'
				},
				{
					label: 'Permissions',
					href: '/docs/advanced/platform/permissions'
				},
				{
					label: 'Rate limits',
					href: '/docs/advanced/platform/rate-limits'
				},
				{
					label: 'Webhooks',
					href: '/docs/advanced/platform/webhooks'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
