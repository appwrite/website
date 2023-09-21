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
					href: '/docs/products/auth'
				},
				{
					label: 'Quick start',
					href: '/docs/products/auth/quick-start'
				}
			]
		},
		{
			label: 'Journeys',
			items: [
				{
					label: 'Email and password',
					href: '/docs/products/auth/email-password'
				},
				{
					label: 'Phone (SMS)',
					href: '/docs/products/auth/phone-sms'
				},
				{
					label: 'Magic URL',
					href: '/docs/products/auth/magic-url'
				},
				{
					label: 'OAuth 2',
					href: '/docs/products/auth/oauth2'
				},
				{
					label: 'Anonymous',
					href: '/docs/products/auth/anonymous'
				},
				{
					label: 'Server integrations',
					href: '/docs/products/auth/server-integrations'
				},
			]
		},
		{
			label: 'Concepts',
			items: [
				{
					label: 'Account vs. Users API',
					href: '/docs/products/auth/account-vs-users-api'
				},
				{
					label: 'Accounts',
					href: '/docs/products/auth/accounts'
				},
				{
					label: 'Teams',
					href: '/docs/products/auth/teams'
				},
				{
					label: 'Labels',
					href: '/docs/products/auth/labels'
				},
				{
					label: 'Security',
					href: '/docs/products/auth/security'
				}
			]
		},
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
