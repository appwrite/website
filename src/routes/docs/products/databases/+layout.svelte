<script lang="ts">
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';
    import type { HeaderSectionInfoAlert } from '$lib/layouts/DocsArticle.svelte';

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

    const legacyUrl = $derived(
        page.url.pathname
            .replace('/products/databases', '/products/databases/legacy')
            .replace('rows', 'documents')
            .replace('tables', 'collections')
    );

    const shouldShowSubtitle = $derived(
        // offline doesn't mention legacy
        !page.url.pathname.includes('offline') &&
            // backups doesn't mention legacy
            !page.url.pathname.includes('backups') &&
            // root layout page doesn't mention legacy
            !page.url.pathname.endsWith('products/databases')
    );

    const headerSectionInfoAlert = writable<HeaderSectionInfoAlert | null>(null);

    $effect(() => {
        if (shouldShowSubtitle) {
            headerSectionInfoAlert.set({
                title: 'New API',
                description: `This is a relatively new API. For details on the previous version and its terminology, see the legacy <a class="web-link underline" href="${legacyUrl}">Collections API documentation</a>.`
            });
        } else {
            headerSectionInfoAlert.set(null);
        }
    });

    setContext('headerSectionInfoAlert', headerSectionInfoAlert);
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
