<script lang="ts">
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	const parent: NavParent = {
		href: '/docs',
		label: 'Command Center'
	};

	const navigation: NavTree = [
		{
			label: 'Guides',
			items: [
				{
					label: 'Command Center',
					href: '/docs/tooling/command-center/command-center'
				},{
					label: 'Keyboard Shortcuts',
					href: '/docs/tooling/command-center/keyboard-shortcuts'
				},{
					label: 'The Appwriter',
					href: '/docs/tooling/command-center/the-appwriter'
				}
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
