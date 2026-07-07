<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Firewall'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/firewall'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/firewall/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Rules',
                    href: '/docs/products/firewall/rules'
                },
                {
                    label: 'Conditions',
                    href: '/docs/products/firewall/conditions'
                },
                {
                    label: 'Actions',
                    href: '/docs/products/firewall/actions'
                },
                {
                    label: 'Logs',
                    href: '/docs/products/firewall/logs'
                },
                {
                    label: 'Analytics',
                    href: '/docs/products/firewall/analytics'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Common rules',
                    href: '/docs/products/firewall/common-rules'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
