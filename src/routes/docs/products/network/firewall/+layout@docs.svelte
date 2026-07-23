<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs/products/network',
        label: 'Firewall'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/network/firewall'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/network/firewall/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Rules',
                    href: '/docs/products/network/firewall/rules'
                },
                {
                    label: 'Conditions',
                    href: '/docs/products/network/firewall/conditions'
                },
                {
                    label: 'Actions',
                    href: '/docs/products/network/firewall/actions'
                },
                {
                    label: 'Logs',
                    href: '/docs/products/network/firewall/logs'
                },
                {
                    label: 'Analytics',
                    href: '/docs/products/network/firewall/analytics'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Common rules',
                    href: '/docs/products/network/firewall/common-rules'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
