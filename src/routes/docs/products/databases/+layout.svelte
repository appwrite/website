<script lang="ts">
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import Docs from '$lib/layouts/Docs.svelte';
    import { isNewUntil } from '$lib/utils/date';
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
                    label: 'Relationships',
                    href: '/docs/products/databases/relationships'
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
                    label: 'Geo queries',
                    href: '/docs/products/databases/geo-queries',
                    new: isNewUntil('30 Sep 2025')
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
                    label: 'Pagination',
                    href: '/docs/products/databases/pagination'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/transactions',
                    new: isNewUntil('31 Oct 2025')
                },
                {
                    label: 'Type generation',
                    href: '/docs/products/databases/type-generation',
                    new: isNewUntil('31 Jul 2025')
                },
                {
                    label: 'Offline sync',
                    href: '/docs/products/databases/offline'
                },
                {
                    label: 'Bulk operations',
                    href: '/docs/products/databases/bulk-operations',
                    new: isNewUntil('31 Jul 2025')
                },
                {
                    label: 'Atomic numeric operations',
                    href: '/docs/products/databases/atomic-numeric-operations',
                    new: isNewUntil('31 Jul 2025')
                },
                {
                    label: 'CSV imports',
                    href: '/docs/products/databases/csv-imports',
                    new: isNewUntil('31 Jul 2025')
                },
                {
                    label: 'CSV exports',
                    href: '/docs/products/databases/csv-exports',
                    new: isNewUntil('28 Feb 2026')
                },
                {
                    label: 'AI suggestions',
                    href: '/docs/products/databases/ai-suggestions',
                    new: isNewUntil('31 Dec 2025')
                },
                {
                    label: 'Timestamp overrides',
                    href: '/docs/products/databases/timestamp-overrides'
                }
            ]
        },
        {
            label: 'Dedicated databases',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases/dedicated',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Specifications',
                    href: '/docs/products/databases/dedicated/specifications',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Connect',
                    href: '/docs/products/databases/dedicated/connect',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'High availability',
                    href: '/docs/products/databases/dedicated/high-availability',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Backups & PITR',
                    href: '/docs/products/databases/dedicated/backups',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Branches',
                    href: '/docs/products/databases/dedicated/branches',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Extensions',
                    href: '/docs/products/databases/dedicated/extensions',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Connection pooler',
                    href: '/docs/products/databases/dedicated/pooler',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'SQL API',
                    href: '/docs/products/databases/dedicated/sql-api',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Network',
                    href: '/docs/products/databases/dedicated/network',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Monitoring & insights',
                    href: '/docs/products/databases/dedicated/monitoring',
                    new: isNewUntil('31 Aug 2026')
                }
            ]
        },
        {
            label: 'Connect your stack',
            items: [
                {
                    label: 'Node.js drivers',
                    href: '/docs/products/databases/dedicated/drivers',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Prisma',
                    href: '/docs/products/databases/dedicated/prisma',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Drizzle',
                    href: '/docs/products/databases/dedicated/drizzle',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Auth.js',
                    href: '/docs/products/databases/dedicated/auth-js',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Better Auth',
                    href: '/docs/products/databases/dedicated/better-auth',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Laravel',
                    href: '/docs/products/databases/dedicated/laravel',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Rails',
                    href: '/docs/products/databases/dedicated/rails',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Django',
                    href: '/docs/products/databases/dedicated/django',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'FastAPI',
                    href: '/docs/products/databases/dedicated/fastapi',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Spring Boot',
                    href: '/docs/products/databases/dedicated/spring-boot',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'EF Core',
                    href: '/docs/products/databases/dedicated/ef-core',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'GORM',
                    href: '/docs/products/databases/dedicated/gorm',
                    new: isNewUntil('31 Aug 2026')
                }
            ]
        },
        {
            label: 'Deploy',
            items: [
                {
                    label: 'Next.js',
                    href: '/docs/products/databases/dedicated/nextjs',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Vercel',
                    href: '/docs/products/databases/dedicated/vercel',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Cloudflare',
                    href: '/docs/products/databases/dedicated/cloudflare',
                    new: isNewUntil('31 Aug 2026')
                }
            ]
        },
        {
            label: 'Analytics & BI',
            items: [
                {
                    label: 'Metabase',
                    href: '/docs/products/databases/dedicated/metabase',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Grafana',
                    href: '/docs/products/databases/dedicated/grafana',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'Retool',
                    href: '/docs/products/databases/dedicated/retool',
                    new: isNewUntil('31 Aug 2026')
                },
                {
                    label: 'dbt',
                    href: '/docs/products/databases/dedicated/dbt',
                    new: isNewUntil('31 Aug 2026')
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

    const hideSubtitleRoutes = ['offline', 'backups', 'csv-imports', 'csv-exports', 'dedicated'];

    const shouldShowSubtitle = $derived(
        !hideSubtitleRoutes.some((segment) => page.route.id?.includes(segment)) &&
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
