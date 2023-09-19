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
					label: 'Installation',
					href: '/docs/advanced/self-hosting/installation'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Update',
					href: '/docs/advanced/self-hosting/update'
				},
				{
					label: 'Debug',
					href: '/docs/advanced/self-hosting/debug'
				},
				{
					label: 'E-Mail',
					href: '/docs/advanced/self-hosting/email'
				},
				{
					label: 'Functions',
					href: '/docs/advanced/self-hosting/functions'
				},
				{
					label: 'Production',
					href: '/docs/advanced/self-hosting/production'
				},
				{
					label: 'SMS',
					href: '/docs/advanced/self-hosting/sms'
				},
				{
					label: 'Storage',
					href: '/docs/advanced/self-hosting/storage'
				},
				{
					label: 'TLS Certificates',
					href: '/docs/advanced/self-hosting/tls-certificates'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
