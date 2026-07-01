<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Project'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/partners/project'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Auth methods',
                    href: '/docs/partners/project/auth-methods'
                },
                {
                    label: 'OAuth providers',
                    href: '/docs/partners/project/oauth'
                },
                {
                    label: 'API keys',
                    href: '/docs/partners/project/api-keys'
                },
                {
                    label: 'Platforms',
                    href: '/docs/partners/project/platforms'
                },
                {
                    label: 'Protocols',
                    href: '/docs/partners/project/protocols'
                },
                {
                    label: 'Services',
                    href: '/docs/partners/project/services'
                },
                {
                    label: 'Policies',
                    href: '/docs/partners/project/policies'
                },
                {
                    label: 'Mock phones',
                    href: '/docs/partners/project/mock-phones'
                },
                {
                    label: 'Environment variables',
                    href: '/docs/partners/project/environment-variables'
                },
                {
                    label: 'SMTP',
                    href: '/docs/partners/project/smtp'
                },
                {
                    label: 'Email templates',
                    href: '/docs/partners/project/email-templates'
                },
                {
                    label: 'Labels',
                    href: '/docs/partners/project/labels'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Provisioning',
                    href: '/docs/partners/project/provisioning'
                },
                {
                    label: 'Key rotation',
                    href: '/docs/partners/project/key-rotation'
                },
                {
                    label: 'Branded emails',
                    href: '/docs/partners/project/branded-emails'
                },
                {
                    label: 'Plan tiers',
                    href: '/docs/partners/project/plan-tiers'
                },
                {
                    label: 'Offboarding',
                    href: '/docs/partners/project/offboarding'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
