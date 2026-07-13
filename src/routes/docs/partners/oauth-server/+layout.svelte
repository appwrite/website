<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'OAuth server'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/partners/oauth-server'
                },
                {
                    label: 'Quick start',
                    href: '/docs/partners/oauth-server/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Clients',
                    href: '/docs/partners/oauth-server/clients'
                },
                {
                    label: 'Authorization',
                    href: '/docs/partners/oauth-server/authorization'
                },
                {
                    label: 'Tokens',
                    href: '/docs/partners/oauth-server/tokens'
                },
                {
                    label: 'Scopes',
                    href: '/docs/partners/oauth-server/scopes'
                },
                {
                    label: 'Device flow',
                    href: '/docs/partners/oauth-server/device-flow'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Sign in with your product',
                    href: '/docs/partners/oauth-server/sign-in-with-your-product/step-1'
                },
                {
                    label: 'Custom scopes',
                    href: '/docs/partners/oauth-server/custom-scopes/step-1'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
