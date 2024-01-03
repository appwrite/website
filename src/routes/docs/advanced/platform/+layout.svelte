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
			label: 'Integration',
			items: [
				{
					label: 'Events',
					href: '/docs/advanced/platform/events'
				},
				{
					label: 'Webhooks',
					href: '/docs/advanced/platform/webhooks'
				},
				{
					label: 'Response codes',
					href: '/docs/advanced/platform/response-codes',
				}
			]
		},
		{
			label: 'Access control',
			items: [
				{
					label: 'Permissions',
					href: '/docs/advanced/platform/permissions'
				},
				{
					label: 'Rate limits',
					href: '/docs/advanced/platform/rate-limits'
				},
				{
					label: 'API keys',
					href: '/docs/advanced/platform/api-keys'
				},
			]
		},
		{
			label: 'Plans',
			items: [
				{
					label: 'Billing',
					href: '/docs/advanced/platform/billing'
				},
				{
					label: 'Starter',
					href: '/docs/advanced/platform/starter'
				},
				{
					label: 'Pro',
					href: '/docs/advanced/platform/pro'
				},
				{
					label: 'Scale',
					href: '/docs/advanced/platform/scale'
				},
				{
					label: 'Enterprise',
					href: '/docs/advanced/platform/enterprise'
				},
				{
					label: 'Open source',
					href: '/docs/advanced/platform/oss'
				},
			]
		},
		{
			label: 'Configuration',
			items: [
				{
					label: 'Custom domains',
					href: '/docs/advanced/platform/custom-domains'
				},
				{	
					label: 'Email and SMS templates',
					href: '/docs/advanced/platform/message-templates'
				},
			]
		},
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
