<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    let { children } = $props();

    const parent: NavParent = {
        href: '/docs/products/databases',
        label: 'MySQL'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases/mysql'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/mysql/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Tables and data types',
                    href: '/docs/products/databases/mysql/concepts/tables'
                },
                {
                    label: 'Querying rows',
                    href: '/docs/products/databases/mysql/concepts/queries'
                },
                {
                    label: 'Joins and relationships',
                    href: '/docs/products/databases/mysql/concepts/joins'
                },
                {
                    label: 'Indexes',
                    href: '/docs/products/databases/mysql/concepts/indexes'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/mysql/concepts/transactions'
                },
                {
                    label: 'Data modeling',
                    href: '/docs/products/databases/mysql/concepts/data-modeling'
                },
                {
                    label: 'Security and access control',
                    href: '/docs/products/databases/mysql/concepts/access-control'
                }
            ]
        },
        {
            label: 'Connecting',
            items: [
                {
                    label: 'Connections',
                    href: '/docs/products/databases/mysql/connections'
                },
                {
                    label: 'Connection pooling',
                    href: '/docs/products/databases/mysql/connection-pooling'
                }
            ]
        },
        {
            label: 'Manage',
            items: [
                {
                    label: 'Backups',
                    href: '/docs/products/databases/mysql/backups'
                },
                {
                    label: 'Branches',
                    href: '/docs/products/databases/mysql/branches'
                },
                {
                    label: 'High availability',
                    href: '/docs/products/databases/mysql/high-availability'
                },
                {
                    label: 'Scaling',
                    href: '/docs/products/databases/mysql/scaling'
                },
                {
                    label: 'Network security',
                    href: '/docs/products/databases/mysql/network-security'
                },
                {
                    label: 'Monitoring',
                    href: '/docs/products/databases/mysql/monitoring'
                },
                {
                    label: 'Maintenance',
                    href: '/docs/products/databases/mysql/maintenance'
                }
            ]
        },
        {
            label: 'Integrations',
            items: [
                {
                    label: 'Node.js drivers',
                    href: '/docs/products/databases/mysql/integrations/drivers'
                },
                {
                    label: 'Prisma',
                    href: '/docs/products/databases/mysql/integrations/prisma'
                },
                {
                    label: 'Drizzle',
                    href: '/docs/products/databases/mysql/integrations/drizzle'
                },
                {
                    label: 'Auth.js',
                    href: '/docs/products/databases/mysql/integrations/auth-js'
                },
                {
                    label: 'Better Auth',
                    href: '/docs/products/databases/mysql/integrations/better-auth'
                },
                {
                    label: 'Laravel',
                    href: '/docs/products/databases/mysql/integrations/laravel'
                },
                {
                    label: 'Rails',
                    href: '/docs/products/databases/mysql/integrations/rails'
                },
                {
                    label: 'Django',
                    href: '/docs/products/databases/mysql/integrations/django'
                },
                {
                    label: 'FastAPI',
                    href: '/docs/products/databases/mysql/integrations/fastapi'
                },
                {
                    label: 'Spring Boot',
                    href: '/docs/products/databases/mysql/integrations/spring-boot'
                },
                {
                    label: 'EF Core',
                    href: '/docs/products/databases/mysql/integrations/ef-core'
                },
                {
                    label: 'GORM',
                    href: '/docs/products/databases/mysql/integrations/gorm'
                },
                {
                    label: 'Next.js',
                    href: '/docs/products/databases/mysql/integrations/nextjs'
                },
                {
                    label: 'dbt',
                    href: '/docs/products/databases/mysql/integrations/dbt'
                },
                {
                    label: 'Metabase',
                    href: '/docs/products/databases/mysql/integrations/metabase'
                },
                {
                    label: 'Grafana',
                    href: '/docs/products/databases/mysql/integrations/grafana'
                },
                {
                    label: 'Retool',
                    href: '/docs/products/databases/mysql/integrations/retool'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
