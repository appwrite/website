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
                    href: '/docs/platforms/project'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Auth methods',
                    href: '/docs/platforms/project/auth-methods'
                },
                {
                    label: 'OAuth providers',
                    href: '/docs/platforms/project/oauth'
                },
                {
                    label: 'API keys',
                    href: '/docs/platforms/project/api-keys'
                },
                {
                    label: 'Platforms',
                    href: '/docs/platforms/project/platforms'
                },
                {
                    label: 'Protocols',
                    href: '/docs/platforms/project/protocols'
                },
                {
                    label: 'Services',
                    href: '/docs/platforms/project/services'
                },
                {
                    label: 'Policies',
                    href: '/docs/platforms/project/policies'
                },
                {
                    label: 'Mock phones',
                    href: '/docs/platforms/project/mock-phones'
                },
                {
                    label: 'Environment variables',
                    href: '/docs/platforms/project/environment-variables'
                },
                {
                    label: 'SMTP',
                    href: '/docs/platforms/project/smtp'
                },
                {
                    label: 'Email templates',
                    href: '/docs/platforms/project/email-templates'
                },
                {
                    label: 'Labels',
                    href: '/docs/platforms/project/labels'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Provisioning',
                    href: '/docs/platforms/project/provisioning'
                },
                {
                    label: 'Key rotation',
                    href: '/docs/platforms/project/key-rotation'
                },
                {
                    label: 'Branded emails',
                    href: '/docs/platforms/project/branded-emails'
                },
                {
                    label: 'Plan tiers',
                    href: '/docs/platforms/project/plan-tiers'
                },
                {
                    label: 'Offboarding',
                    href: '/docs/platforms/project/offboarding'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
