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
                    href: '/docs/advanced/self-hosting/'
                },
                {
                    label: 'Installation',
                    href: '/docs/advanced/self-hosting/installation'
                }
            ]
        },
        {
            label: 'Platform deployment',
            items: [
                {
                    label: 'AWS',
                    href: '/docs/advanced/self-hosting/platforms/aws'
                },
                {
                    label: 'DigitalOcean',
                    href: '/docs/advanced/self-hosting/platforms/digitalocean'
                },
                {
                    label: 'Google Cloud',
                    href: '/docs/advanced/self-hosting/platforms/google-cloud'
                },
                {
                    label: 'Azure',
                    href: '/docs/advanced/self-hosting/platforms/azure'
                },
                {
                    label: 'Coolify',
                    href: '/docs/advanced/self-hosting/platforms/coolify'
                }
            ]
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Environment variables',
                    href: '/docs/advanced/self-hosting/configuration/environment-variables'
                },
                {
                    label: 'Email delivery',
                    href: '/docs/advanced/self-hosting/configuration/email'
                },
                {
                    label: 'SMS delivery',
                    href: '/docs/advanced/self-hosting/configuration/sms'
                },
                {
                    label: 'Functions',
                    href: '/docs/advanced/self-hosting/configuration/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/advanced/self-hosting/configuration/sites'
                },
                {
                    label: 'Storage',
                    href: '/docs/advanced/self-hosting/configuration/storage'
                },
                {
                    label: 'TLS certificates',
                    href: '/docs/advanced/self-hosting/configuration/tls-certificates'
                },
                {
                    label: 'Version Control',
                    href: '/docs/advanced/self-hosting/configuration/version-control'
                }
            ]
        },
        {
            label: 'Production',
            items: [
                {
                    label: 'Preparation',
                    href: '/docs/advanced/self-hosting/production'
                },
                {
                    label: 'Scaling',
                    href: '/docs/advanced/self-hosting/production/scaling'
                },
                {
                    label: 'Rate limits',
                    href: '/docs/advanced/self-hosting/production/rate-limits'
                },
                {
                    label: 'Email delivery',
                    href: '/docs/advanced/self-hosting/production/emails'
                },
                {
                    label: 'Error monitoring',
                    href: '/docs/advanced/self-hosting/production/errors'
                },
                {
                    label: 'Security',
                    href: '/docs/advanced/self-hosting/production/security'
                },
                {
                    label: 'Backups',
                    href: '/docs/advanced/self-hosting/production/backups'
                },
                {
                    label: 'Updates and migrations',
                    href: '/docs/advanced/self-hosting/production/updates'
                },
                {
                    label: 'Debugging',
                    href: '/docs/advanced/self-hosting/production/debugging'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
