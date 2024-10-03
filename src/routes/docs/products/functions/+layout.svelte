<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Functions'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/functions'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/functions/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Functions',
                    href: '/docs/products/functions/functions'
                },
                {
                    label: 'Deployments',
                    href: '/docs/products/functions/deployments'
                },
                {
                    label: 'Executions',
                    href: '/docs/products/functions/executions'
                },
                {
                    label: 'Domains',
                    href: '/docs/products/functions/domains'
                },
                {
                    label: 'Runtimes',
                    href: '/docs/products/functions/runtimes'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Templates',
                    href: '/docs/products/functions/templates'
                },
                {
                    label: 'Develop',
                    href: '/docs/products/functions/develop'
                },
                {
                    label: 'Develop locally',
                    href: '/docs/products/functions/develop-locally'
                },
                {
                    label: 'Deploy from Git',
                    href: '/docs/products/functions/deploy-from-git'
                },
                {
                    label: 'Deploy manually',
                    href: '/docs/products/functions/deploy-manually'
                },
                {
                    label: 'Execute',
                    href: '/docs/products/functions/execute'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Functions API',
                    href: '/docs/references/cloud/client-web/functions'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
