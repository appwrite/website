<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    let { children } = $props();

    const parent: NavParent = {
        href: '/docs/products/databases',
        label: 'DocumentsDB'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases/documentsdb'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/documentsdb/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Databases',
                    href: '/docs/products/databases/documentsdb/databases'
                },
                {
                    label: 'Collections',
                    href: '/docs/products/databases/documentsdb/collections'
                },
                {
                    label: 'Documents',
                    href: '/docs/products/databases/documentsdb/documents'
                },
                {
                    label: 'Permissions',
                    href: '/docs/products/databases/documentsdb/permissions'
                },
                {
                    label: 'Queries',
                    href: '/docs/products/databases/documentsdb/queries'
                },
                {
                    label: 'Order',
                    href: '/docs/products/databases/documentsdb/order'
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/documentsdb/backups'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Pagination',
                    href: '/docs/products/databases/documentsdb/pagination'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/documentsdb/transactions'
                },
                {
                    label: 'Bulk operations',
                    href: '/docs/products/databases/documentsdb/bulk-operations'
                },
                {
                    label: 'Atomic numeric operations',
                    href: '/docs/products/databases/documentsdb/atomic-numeric-operations'
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/documentsdb/timestamp-overrides'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
