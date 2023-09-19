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
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Email and Password',
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
					label: 'User Management',
					href: '/docs/products/auth/user-management'
				},
				{
					label: 'Server Integrations',
					href: '/docs/products/auth/server-integrations'
				},
				{
					label: 'Security',
					href: '/docs/products/auth/security'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
