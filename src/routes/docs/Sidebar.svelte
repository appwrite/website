<script lang="ts">
    import Sidebar, { type NavTree } from '$lib/layouts/Sidebar.svelte';
    import { isNewUntil } from '$lib/utils/date';

    const navigation: NavTree = [
        {
            items: [
                {
                    label: 'Home',
                    href: '/docs',
                    icon: 'icon-home'
                },
                {
                    label: 'Quick start',
                    href: '/docs/quick-starts',
                    icon: 'icon-play'
                },
                {
                    label: 'Tutorials',
                    href: '/docs/tutorials',
                    icon: 'icon-book-open'
                },
                {
                    label: 'SDKs',
                    href: '/docs/sdks',
                    icon: 'icon-cog'
                },
                {
                    label: 'Blog',
                    href: '/blog',
                    icon: 'icon-document-text',
                    openInNewTab: true
                },
                {
                    label: 'Changelog',
                    href: '/changelog',
                    icon: 'icon-clock',
                    openInNewTab: true
                },
                {
                    label: 'Integrations',
                    href: '/integrations',
                    icon: 'icon-puzzle',
                    openInNewTab: true
                },
                {
                    label: 'API references',
                    href: '/docs/references',
                    icon: 'icon-document',
                    isParent: true
                }
            ]
        },
        {
            label: 'Products',
            items: [
                {
                    label: 'Auth',
                    href: '/docs/products/auth',
                    icon: 'icon-user-group',
                    isParent: true
                },
                {
                    label: 'Databases',
                    href: '/docs/products/databases',
                    icon: 'icon-database',
                    isParent: true
                },
                {
                    label: 'Storage',
                    href: '/docs/products/storage',
                    icon: 'icon-folder',
                    isParent: true
                },
                {
                    label: 'Functions',
                    href: '/docs/products/functions',
                    icon: 'icon-lightning-bolt',
                    isParent: true
                },
                {
                    label: 'Messaging',
                    href: '/docs/products/messaging',
                    icon: 'icon-send',
                    isParent: true
                },
                {
                    label: 'Sites',
                    href: '/docs/products/sites',
                    icon: 'icon-globe-alt',
                    isParent: true,
                    new: isNewUntil('19 Jul 2025')
                }
            ]
        },
        {
            label: 'Partners',
            items: [
                {
                    label: 'Project',
                    href: '/docs/partners/project',
                    icon: 'icon-briefcase',
                    isParent: true
                },
                {
                    label: 'OAuth2 server',
                    href: '/docs/partners/oauth-server',
                    icon: 'icon-key',
                    isParent: true,
                    new: isNewUntil('31 Aug 2026')
                }
            ]
        },
        {
            label: 'Utilities',
            collapsible: true,
            initiallyCollapsed: true,
            items: [
                {
                    label: 'Avatars',
                    href: '/docs/products/avatars',
                    icon: 'icon-user-circle',
                    isParent: true,
                    new: isNewUntil('1 Jan 2026')
                }
            ]
        },
        {
            label: 'APIS',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/apis',
                    icon: 'icon-view-grid'
                },
                {
                    label: 'REST',
                    href: '/docs/apis/rest',
                    icon: 'web-icon-rest'
                },
                {
                    label: 'GraphQL',
                    href: '/docs/apis/graphql',
                    icon: 'icon-graphql'
                },
                {
                    label: 'Realtime',
                    href: '/docs/apis/realtime',
                    icon: 'icon-clock',
                    isParent: true
                }
            ]
        },
        {
            label: 'Tooling',
            items: [
                {
                    label: 'AI',
                    href: '/docs/tooling/ai',
                    icon: 'icon-sparkles',
                    isParent: true
                },
                {
                    label: 'CLI',
                    href: '/docs/tooling/command-line/installation',
                    icon: 'icon-terminal',
                    isParent: true
                },
                {
                    label: 'Terraform',
                    href: '/docs/tooling/terraform',
                    icon: 'web-icon-terraform',
                    isParent: true
                },
                {
                    label: 'Command Center',
                    href: '/docs/tooling/command-center',
                    icon: 'web-icon-command',
                    isParent: true
                },
                {
                    label: 'The Appwriter',
                    href: '/docs/tooling/appwriter',
                    icon: 'icon-text'
                }
            ]
        },
        {
            label: 'Advanced',
            items: [
                {
                    label: 'Billing',
                    href: '/docs/advanced/billing',
                    icon: 'icon-credit-card',
                    isParent: true
                },
                {
                    label: 'Network',
                    href: '/docs/products/network',
                    icon: 'icon-share',
                    isParent: true
                },
                {
                    label: 'Migrations',
                    href: '/docs/advanced/migrations',
                    icon: 'icon-refresh',
                    isParent: true
                },
                {
                    label: 'Security',
                    href: '/docs/advanced/security',
                    icon: 'icon-shield-check',
                    isParent: true
                },
                {
                    label: 'Self-hosting',
                    href: '/docs/advanced/self-hosting',
                    icon: 'icon-server',
                    isParent: true
                }
            ]
        }
    ];
</script>

<Sidebar {navigation} />
