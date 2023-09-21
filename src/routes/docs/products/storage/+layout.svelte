<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Storage'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/storage'
				}
			]
		},
		{
			label: 'Guides',
			items: [
				{
					label: 'Quick start',
					href: '/docs/products/storage/quick-start'
				},
				{
					label: 'Buckets',
					href: '/docs/products/storage/buckets'
				},
				{
					label: 'Upload and download',
					href: '/docs/products/storage/upload-download'
				},
				{
					label: 'Images',
					href: '/docs/products/storage/images'
				},
				{
					label: 'Permissions',
					href: '/docs/products/storage/permissions'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
