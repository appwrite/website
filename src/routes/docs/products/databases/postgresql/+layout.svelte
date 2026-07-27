<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    let { children } = $props();

    const parent: NavParent = {
        href: '/docs/products/databases',
        label: 'PostgreSQL'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/databases/postgresql'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/databases/postgresql/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Tables and data types',
                    href: '/docs/products/databases/postgresql/concepts/tables'
                },
                {
                    label: 'Querying rows',
                    href: '/docs/products/databases/postgresql/concepts/queries'
                },
                {
                    label: 'Joins and relationships',
                    href: '/docs/products/databases/postgresql/concepts/joins'
                },
                {
                    label: 'Indexes',
                    href: '/docs/products/databases/postgresql/concepts/indexes'
                },
                {
                    label: 'Transactions',
                    href: '/docs/products/databases/postgresql/concepts/transactions'
                },
                {
                    label: 'Data modeling',
                    href: '/docs/products/databases/postgresql/concepts/data-modeling'
                },
                {
                    label: 'Security and access control',
                    href: '/docs/products/databases/postgresql/concepts/access-control'
                }
            ]
        },
        {
            label: 'Connecting',
            items: [
                {
                    label: 'Connections',
                    href: '/docs/products/databases/postgresql/connections'
                },
                {
                    label: 'Connection pooling',
                    href: '/docs/products/databases/postgresql/connection-pooling'
                }
            ]
        },
        {
            label: 'Manage',
            items: [
                {
                    label: 'Extensions',
                    href: '/docs/products/databases/postgresql/extensions'
                },
                {
                    label: 'Backups',
                    href: '/docs/products/databases/postgresql/backups'
                },
                {
                    label: 'Branches',
                    href: '/docs/products/databases/postgresql/branches'
                },
                {
                    label: 'High availability',
                    href: '/docs/products/databases/postgresql/high-availability'
                },
                {
                    label: 'Scaling',
                    href: '/docs/products/databases/postgresql/scaling'
                },
                {
                    label: 'Network security',
                    href: '/docs/products/databases/postgresql/network-security'
                },
                {
                    label: 'Monitoring',
                    href: '/docs/products/databases/postgresql/monitoring'
                },
                {
                    label: 'Maintenance',
                    href: '/docs/products/databases/postgresql/maintenance'
                }
            ]
        },
        {
            label: 'Integrations',
            items: [
                {
                    label: 'Node.js drivers',
                    href: '/docs/products/databases/postgresql/integrations/drivers'
                },
                {
                    label: 'Prisma',
                    href: '/docs/products/databases/postgresql/integrations/prisma'
                },
                {
                    label: 'Drizzle',
                    href: '/docs/products/databases/postgresql/integrations/drizzle'
                },
                {
                    label: 'Auth.js',
                    href: '/docs/products/databases/postgresql/integrations/auth-js'
                },
                {
                    label: 'Better Auth',
                    href: '/docs/products/databases/postgresql/integrations/better-auth'
                },
                {
                    label: 'Laravel',
                    href: '/docs/products/databases/postgresql/integrations/laravel'
                },
                {
                    label: 'Rails',
                    href: '/docs/products/databases/postgresql/integrations/rails'
                },
                {
                    label: 'Django',
                    href: '/docs/products/databases/postgresql/integrations/django'
                },
                {
                    label: 'FastAPI',
                    href: '/docs/products/databases/postgresql/integrations/fastapi'
                },
                {
                    label: 'Spring Boot',
                    href: '/docs/products/databases/postgresql/integrations/spring-boot'
                },
                {
                    label: 'EF Core',
                    href: '/docs/products/databases/postgresql/integrations/ef-core'
                },
                {
                    label: 'GORM',
                    href: '/docs/products/databases/postgresql/integrations/gorm'
                },
                {
                    label: 'Next.js',
                    href: '/docs/products/databases/postgresql/integrations/nextjs'
                },
                {
                    label: 'dbt',
                    href: '/docs/products/databases/postgresql/integrations/dbt'
                },
                {
                    label: 'Metabase',
                    href: '/docs/products/databases/postgresql/integrations/metabase'
                },
                {
                    label: 'Grafana',
                    href: '/docs/products/databases/postgresql/integrations/grafana'
                },
                {
                    label: 'Retool',
                    href: '/docs/products/databases/postgresql/integrations/retool'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />

    {@render children()}
</Docs>
