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
					label: 'Providers',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Targets',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Topics',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Message types',
					href: '/docs/products/messaging/XXXXX'
				},
				
			]
		},
		{
			label: 'Journeys',
			items: [
				{
					label: 'Send push notifications',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Send email messages',
					href: '/docs/products/messaging/XXXXX'
				},
				{
					label: 'Send SMS messages',
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
