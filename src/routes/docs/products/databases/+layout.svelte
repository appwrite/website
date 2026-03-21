<script lang="ts">
    import { page } from '$app/state';
    import Docs from '$lib/layouts/Docs.svelte';
    import { isNewUntil } from '$lib/utils/date';
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
                },
                {
                    label: 'Databases',
                    href: '/docs/products/databases/databases'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Permissions',
                    href: '/docs/products/databases/permissions'
                },
                {
                    label: 'Queries',
                    href: '/docs/products/databases/queries'
                },
                {
                    label: 'Order',
                    href: '/docs/products/databases/order'
                },
                {
                    label: 'Operators',
                    href: '/docs/products/databases/operators',
                    new: isNewUntil('31 Dec 2025')
                },
                {
                    label: 'Pagination',
                    href: '/docs/products/databases/pagination'
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/backups'
                }
            ]
        },
        {
            label: 'Tables DB',
            collapsible: true,
            initiallyCollapsed: false,
            items: [
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/tablesdb/quick-start'
                },
                {
                    label: 'Tables',
                    href: '/docs/products/databases/tables'
                },
                {
                    label: 'Rows',
                    href: '/docs/products/databases/rows'
                },
                {
                    label: 'Relationships',
                    href: '/docs/products/databases/tablesdb/relationships'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/tablesdb/transactions'
                },
                {
                    label: 'Bulk operations',
                    href: '/docs/products/databases/tablesdb/bulk-operations'
                },
                {
                    label: 'Atomic numeric operations',
                    href: '/docs/products/databases/tablesdb/atomic-numeric-operations'
                },
                {
                    label: 'Type generation',
                    href: '/docs/products/databases/tablesdb/type-generation'
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/tablesdb/timestamp-overrides'
                },
                {
                    label: 'Geo queries',
                    href: '/docs/products/databases/geo-queries'
                },
                {
                    label: 'CSV imports',
                    href: '/docs/products/databases/csv-imports'
                },
                {
                    label: 'CSV exports',
                    href: '/docs/products/databases/csv-exports'
                }
            ]
        },
        {
            label: 'Documents DB',
            collapsible: true,
            initiallyCollapsed: true,
            items: [
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/documentsdb/quick-start'
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
                    label: 'Relationships',
                    href: '/docs/products/databases/documentsdb/relationships'
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
                    label: 'Type generation',
                    href: '/docs/products/databases/documentsdb/type-generation'
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/documentsdb/timestamp-overrides'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'AI suggestions',
                    href: '/docs/products/databases/ai-suggestions',
                    new: isNewUntil('31 Dec 2025')
                },
                {
                    label: 'Offline sync',
                    href: '/docs/products/databases/offline'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'TablesDB API',
                    href: '/docs/references/cloud/client-web/tablesDB',
                    new: isNewUntil('31 Oct 2025')
                },
                {
                    label: 'DocumentsDB API',
                    href: '/docs/references/cloud/client-web/documentsDB'
                },
                {
                    label: 'Legacy API',
                    href: '/docs/references/cloud/client-web/databases'
                }
            ]
        }
    ];

    const legacyUrl = $derived(
        page.url.pathname
            .replace('/products/databases', '/products/databases/legacy')
            .replace('rows', 'documents')
            .replace('tables', 'collections')
    );
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
