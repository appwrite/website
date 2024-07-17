<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Self-hosting'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/advanced/self-hosting'
				},
				{
					label: 'Install',
					href: '/docs/advanced/self-hosting/'
				},
				{
					label: 'Upgrade',
					href: '/docs/advanced/self-hosting/update'
				},
			]
		},
		{
			label: 'Configuration',
			items: [
				{
					label: 'Email adapter',
					href: '/docs/advanced/self-hosting/email'
				},
				{
					label: 'SMS adapter',
					href: '/docs/advanced/self-hosting/sms'
				},
				{
					label: 'Storage adapter',
					href: '/docs/advanced/self-hosting/storage'
				},
				{
					label: 'VCS adapter',
					href: '/docs/advanced/self-hosting/functions'
				},
				{
					label: 'Error logs adapter',
					href: '/docs/advanced/self-hosting/functions'
				},
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Env. variables',
					href: '/docs/advanced/self-hosting/environment-variables'
				},
				{
					label: 'TLS Certificates',
					href: '/docs/advanced/self-hosting/tls-certificates'
				},
				{
					label: 'Production',
					href: '/docs/advanced/self-hosting/production'
				},
				{
					label: 'Debugging',
					href: '/docs/advanced/self-hosting/debug'
				},
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
