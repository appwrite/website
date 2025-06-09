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
                    label: 'PCI',
                    href: '/docs/advanced/security/pci'
                },
                {
                    label: 'SOC 2',
                    href: '/docs/advanced/security/soc2'
                },
                {
                    label: 'HIPAA',
                    href: '/docs/advanced/security/hipaa'
                },
                {
                    label: 'CCPA',
                    href: '/docs/advanced/security/ccpa'
                }
            ]
        },
        {
            label: 'Measures',
            items: [
                {
                    label: 'Authentication',
                    href: '/docs/advanced/security/authentication'
                },
                {
                    label: 'Encryption',
                    href: '/docs/advanced/security/encryption'
                },
                {
                    label: 'Multi-Factor authentication',
                    href: '/docs/advanced/security/mfa'
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
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
