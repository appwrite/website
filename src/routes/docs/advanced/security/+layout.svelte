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
			label: 'Compliances',
			items: [
				{
					label: 'GDPR',
					href: '/docs/advanced/security/gdpr'
				},
				{
					label: 'SOC-2 (Coming soon)',
					href: '/docs/advanced/security/soc2'
				},
				{
					label: 'HIPPA (Coming soon)',
					href: '/docs/advanced/security/hippa'
				},
				{
					label: 'PCI',
					href: '/docs/advanced/security/pci'
				},
			]
		},
		{
			label: 'Measures',
			items: [
				{
					label: 'Authentication',
					href: '/docs/products/auth/security'
				},
				{
					label: 'Encryption',
					href: '/docs/advanced/security/encryption'
				},
				{
					label: 'HTTPS',
					href: '/docs/advanced/security/https'
				},
				{
					label: 'TLS',
					href: '/docs/advanced/security/tls'
				},
				{
					label: 'Backups',
					href: '/docs/advanced/security/backups'
				},
				{
					label: 'Penetration tests',
					href: '/docs/advanced/security/penetration-tests'
				},
				{
					label: 'Audit logs',
					href: '/docs/advanced/security/audit-logs'
				},
				{
					label: 'Abuse protection',
					href: '/docs/advanced/security/abuse-protection'
				},
			]
		}
	];
</script>

<Docs variant="two-side-navs">
	<Sidebar {navigation} {parent} />
	<slot />
</Docs>
