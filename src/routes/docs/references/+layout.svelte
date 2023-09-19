<script lang="ts">
	import { page } from '$app/stores';
	import Docs from '$lib/layouts/Docs.svelte';
	import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

	$: expandable = $page.url.pathname.startsWith('/docs/references/');

	const parent: NavParent = {
		backlink: '/docs',
		href: '/docs/references',
		label: 'References',
		icon: 'icon-document'
	};
	const navigation: NavTree = [
		{
			label: 'Services',
			items: [
				{
					label: 'Account',
					icon: 'icon-user',
					href: '/docs/references/cloud/client-web/account'
				},
				{
					label: 'Users',
					icon: 'icon-user-group',
					href: '/docs/references/cloud/client-web/users'
				},
				{
					label: 'Teams',
					icon: 'icon-users',
					href: '/docs/references/cloud/client-web/teams'
				},
				{
					label: 'Databases',
					icon: 'icon-database',
					href: '/docs/references/cloud/client-web/databases'
				},
				{
					label: 'Storage',
					icon: 'icon-cloud',
					href: '/docs/references/cloud/client-web/storage'
				},
				{
					label: 'Functions',
					icon: 'icon-code',
					href: '/docs/references/cloud/client-web/functions'
				},
				{
					label: 'Localization',
					icon: 'icon-globe',
					href: '/docs/references/cloud/client-web/locale'
				},
				{
					label: 'Avatars',
					icon: 'icon-user',
					href: '/docs/references/cloud/client-web/avatars'
				}
			]
		}
	];
</script>

<Docs variant={expandable ? 'expanded' : 'two-side-navs'}>
	<Sidebar {navigation} {expandable} {parent} />
	<slot />
</Docs>
