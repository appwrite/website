<script lang="ts">
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

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
                    label: 'Quick start',
                    href: '/docs/products/databases/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Databases',
                    href: '/docs/products/databases/databases'
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
                    label: 'Permissions',
                    href: '/docs/products/databases/permissions'
                },
                {
                    label: 'Offline Sync',
                    href: '/docs/products/databases/offline'
                },
                {
                    label: 'Relationships',
                    href: '/docs/products/databases/relationships'
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/backups'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Queries',
                    href: '/docs/products/databases/queries'
                },
                {
                    label: 'Order',
                    href: '/docs/products/databases/order'
                },
                {
                    label: 'Pagination',
                    href: '/docs/products/databases/pagination'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Databases API',
                    href: '/docs/references/cloud/client-web/databases'
                }
            ]
        }
    ];

    const legacyUrl = page.url.pathname
        .replace('/products/databases', '/products/databases/legacy')
        .replace('rows', 'documents')
        .replace('tables', 'collections');

    const shouldShowSubtitle =
        !page.url.pathname.includes('offline') && !page.url.pathname.includes('backup');

    if (shouldShowSubtitle) {
        setContext(
            'docsSubtitle',

            writable<string>(`
            <strong>Note:</strong> This is a relatively new API.
            See the <a class="web-link underline" href="${legacyUrl}">legacy documentation</a> for the previous Collections API and its terminology.
        `)
        );
    }
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
