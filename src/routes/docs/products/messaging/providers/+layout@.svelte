<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs/products/messaging',
		label: 'Providers'
	};

	const navigation: NavTree = [
		{
			label: 'Providers',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/messaging'
				},
			]
		},
		{
			label: 'Push notifications',
			items: [
				{
					label: 'FCM',
					href: '/docs/products/messaging/providers'
				},
				{
					label: 'APNs',
					href: '/docs/products/messaging/targets'
				},
			]
		},
		{
			label: 'Email',
			items: [
				{
					label: 'Mailgun',
					href: '/docs/products/messaging/providers/mailgun'
				},
				{
					label: 'Sendgrid',
					href: '/docs/products/messaging/providers/sendgrid'
				},
			]
		},
		{
			label: 'SMS',
			items: [
				{
					label: 'Twillio',
					href: '/docs/products/messaging/providers/twillio'
				},
				{
					label: 'MSG91',
					href: '/docs/products/messaging/providers/msg91'
				},
				{
					label: 'Telesign',
					href: '/docs/products/messaging/providers/telesign'
				},
				{
					label: 'TextMagic',
					href: '/docs/products/messaging/providers/textmagic'
				},
				{
					label: 'Vonage',
					href: '/docs/products/messaging/providers/vonage'
				},

			]
		},
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
