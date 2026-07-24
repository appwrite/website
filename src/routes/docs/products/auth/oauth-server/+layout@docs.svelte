<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs/products/auth',
        label: 'OAuth2 server'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/auth/oauth-server'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/auth/oauth-server/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Clients',
                    href: '/docs/products/auth/oauth-server/clients'
                },
                {
                    label: 'Authorization',
                    href: '/docs/products/auth/oauth-server/authorization'
                },
                {
                    label: 'Tokens',
                    href: '/docs/products/auth/oauth-server/tokens'
                },
                {
                    label: 'Scopes',
                    href: '/docs/products/auth/oauth-server/scopes'
                },
                {
                    label: 'Device flow',
                    href: '/docs/products/auth/oauth-server/device-flow'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Sign in with your product',
                    href: '/docs/products/auth/oauth-server/sign-in-with-your-product/step-1'
                },
                {
                    label: 'Custom scopes',
                    href: '/docs/products/auth/oauth-server/custom-scopes/step-1'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
