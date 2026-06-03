<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'API integration'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/advanced/api-integration'
                }
            ]
        },
        {
            label: 'Events and webhooks',
            items: [
                {
                    label: 'Events',
                    href: '/docs/advanced/api-integration/events'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/advanced/api-integration/webhooks'
                }
            ]
        },
        {
            label: 'Error reference',
            items: [
                {
                    label: 'Response codes',
                    href: '/docs/advanced/api-integration/response-codes'
                },
                {
                    label: 'Error handling',
                    href: '/docs/advanced/api-integration/error-handling'
                }
            ]
        },
        {
            label: 'Policies',
            items: [
                {
                    label: 'Release policy',
                    href: '/docs/advanced/api-integration/release-policy'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
