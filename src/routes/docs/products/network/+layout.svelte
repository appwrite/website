<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Network'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/network'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Regions',
                    href: '/docs/products/network/regions'
                },
                {
                    label: 'Edges',
                    href: '/docs/products/network/edges'
                },
                {
                    label: 'CDN',
                    href: '/docs/products/network/edges'
                },
                {
                    label: 'Compression',
                    href: '/docs/products/network/compression'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
