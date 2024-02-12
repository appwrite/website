<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'AI'
	};

	const navigation: NavTree = [
		{
			label: 'Getting started',
			items: [
				{
					label: 'Overview',
					href: '/docs/products/ai'
				},
				{
					label: 'Quick start',
					href: '/docs/products/ai/quick-start'
				},
			]
		},
		{
			label: 'Concepts',
			items: [
				{
					label: 'Computer Vision',
					href: '/docs/products/ai/computer-vision'
				},
				{
					label: 'Natural Language Processing',
					href: '/docs/products/ai/natural-language-processing'
				},
				{
					label: 'Audio Processing',
					href: '/docs/products/ai/audio-processing'
				},
				{
					label: 'Video Processing',
					href: '/docs/products/ai/video-processing'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
