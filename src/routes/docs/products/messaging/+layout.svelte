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
					href: '/docs/products/messaging/providers'
				},
				{
					label: 'Targets',
					href: '/docs/products/messaging/targets'
				},
				{
					label: 'Topics',
					href: '/docs/products/messaging/topics'
				},
				{
					label: 'Message types',
					href: '/docs/products/messaging/message-types'
				},
				
			]
		},
		{
			label: 'Journeys',
			items: [
				{
					label: 'Send push notifications',
					href: '/docs/products/messaging/send-push-notifications'
				},
				{
					label: 'Send email messages',
					href: '/docs/products/messaging/send-email-messages'
				},
				{
					label: 'Send SMS messages',
					href: '/docs/products/messaging/send-sms-messages'
				},
			]
		},
		{
			label: 'References',
			items: [
				{
					label: 'API reference',
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
