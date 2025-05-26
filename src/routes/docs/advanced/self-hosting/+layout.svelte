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
                    label: 'Installation',
                    href: '/docs/advanced/self-hosting/'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Coolify',
                    href: '/docs/advanced/self-hosting/coolify'
                },
                {
                    label: 'Functions',
                    href: '/docs/advanced/self-hosting/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/advanced/self-hosting/sites'
                },
                {
                    label: 'Email delivery',
                    href: '/docs/advanced/self-hosting/email'
                },
                {
                    label: 'SMS delivery',
                    href: '/docs/advanced/self-hosting/sms'
                },
                {
                    label: 'Storage',
                    href: '/docs/advanced/self-hosting/storage'
                },
                {
                    label: 'Environment variables',
                    href: '/docs/advanced/self-hosting/environment-variables'
                },
                {
                    label: 'TLS Certificates',
                    href: '/docs/advanced/self-hosting/tls-certificates'
                },
                {
                    label: 'Debugging',
                    href: '/docs/advanced/self-hosting/debug'
                },
                {
                    label: 'Production',
                    href: '/docs/advanced/self-hosting/production'
                },
                {
                    label: 'Update',
                    href: '/docs/advanced/self-hosting/update'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
