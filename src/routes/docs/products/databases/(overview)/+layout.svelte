<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    let { children } = $props();

    const parent: NavParent = {
        href: '/docs',
        label: 'Databases'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases'
                }
            ]
        },
        {
            label: 'Appwrite databases',
            items: [
                {
                    label: 'TablesDB',
                    href: '/docs/products/databases/tablesdb',
                    isParent: true
                },
                {
                    label: 'DocumentsDB',
                    href: '/docs/products/databases/documentsdb',
                    isParent: true
                },
                {
                    label: 'VectorsDB',
                    href: '/docs/products/databases/vectorsdb',
                    isParent: true
                }
            ]
        },
        {
            label: 'Native databases',
            items: [
                {
                    label: 'PostgreSQL',
                    href: '/docs/products/databases/postgresql',
                    isParent: true
                },
                {
                    label: 'MySQL',
                    href: '/docs/products/databases/mysql',
                    isParent: true
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
