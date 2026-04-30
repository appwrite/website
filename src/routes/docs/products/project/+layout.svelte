<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Project'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/project'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Auth methods',
                    href: '/docs/products/project/auth-methods'
                },
                {
                    label: 'API keys',
                    href: '/docs/products/project/api-keys'
                },
                {
                    label: 'Platforms',
                    href: '/docs/products/project/platforms'
                },
                {
                    label: 'Protocols',
                    href: '/docs/products/project/protocols'
                },
                {
                    label: 'Services',
                    href: '/docs/products/project/services'
                },
                {
                    label: 'Policies',
                    href: '/docs/products/project/policies'
                },
                {
                    label: 'Mock phones',
                    href: '/docs/products/project/mock-phones'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
