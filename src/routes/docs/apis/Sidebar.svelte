<script lang="ts">
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'APIs'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/apis'
                }
            ]
        },
        {
            label: 'Protocols',
            items: [
                {
                    label: 'REST',
                    href: '/docs/apis/rest'
                },
                {
                    label: 'GraphQL',
                    href: '/docs/apis/graphql'
                },
                {
                    label: 'Realtime',
                    href: '/docs/apis/realtime',
                    isParent: true
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Events',
                    href: '/docs/apis/events'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/apis/webhooks'
                },
                {
                    label: 'Response codes',
                    href: '/docs/apis/response-codes'
                }
            ]
        }
    ];
</script>

<Sidebar {navigation} {parent} />
