<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Sites'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/sites'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/sites/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Rendering',
                    href: '/docs/products/sites/rendering'
                },
                {
                    label: 'Deployments',
                    href: '/docs/products/sites/deployments'
                },
                {
                    label: 'Previews',
                    href: '/docs/products/sites/previews'
                },
                {
                    label: 'Instant rollbacks',
                    href: '/docs/products/sites/instant-rollbacks'
                },
                {
                    label: 'Logs',
                    href: '/docs/products/sites/logs'
                },
                {
                    label: 'Domains',
                    href: '/docs/products/sites/domains'
                },
                {
                    label: 'Frameworks',
                    href: '/docs/products/sites/frameworks'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Templates',
                    href: '/docs/products/sites/templates'
                },
                {
                    label: 'Develop',
                    href: '/docs/products/sites/develop'
                },
                {
                    label: 'Deploy from Git',
                    href: '/docs/products/sites/deploy-from-git'
                },
                {
                    label: 'Deploy manually',
                    href: '/docs/products/sites/deploy-manually'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Sites API',
                    href: '/docs/references/cloud/server-nodejs/sites'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
