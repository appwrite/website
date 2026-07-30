<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    let { children } = $props();

    const parent: NavParent = {
        href: '/docs/products/databases',
        label: 'VectorsDB'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases/vectorsdb'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/vectorsdb/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Databases',
                    href: '/docs/products/databases/vectorsdb/databases'
                },
                {
                    label: 'Collections',
                    href: '/docs/products/databases/vectorsdb/collections'
                },
                {
                    label: 'Documents',
                    href: '/docs/products/databases/vectorsdb/documents'
                },
                {
                    label: 'Embeddings',
                    href: '/docs/products/databases/vectorsdb/embeddings'
                },
                {
                    label: 'Permissions',
                    href: '/docs/products/databases/vectorsdb/permissions'
                },
                {
                    label: 'Queries',
                    href: '/docs/products/databases/vectorsdb/queries'
                },
                {
                    label: 'Order',
                    href: '/docs/products/databases/vectorsdb/order'
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/vectorsdb/backups'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Pagination',
                    href: '/docs/products/databases/vectorsdb/pagination'
                },
                {
                    label: 'Vector search',
                    href: '/docs/products/databases/vectorsdb/vector-search'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/vectorsdb/transactions'
                },
                {
                    label: 'Bulk operations',
                    href: '/docs/products/databases/vectorsdb/bulk-operations'
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/vectorsdb/timestamp-overrides'
                },
                {
                    label: 'CSV imports',
                    href: '/docs/products/databases/vectorsdb/csv-imports'
                },
                {
                    label: 'CSV exports',
                    href: '/docs/products/databases/vectorsdb/csv-exports'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
