<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Security'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/advanced/security'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Compliance',
					href: '/docs/advanced/security/compliance'
				},
				{
					label: 'DPA',
					href: '/docs/advanced/security/dpa'
				},
				{
					label: 'Endpoint',
					href: '/docs/advanced/security/endpoint'
				},
				{
					label: 'Authentication',
					href: '/docs/products/auth/security'
				},
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
