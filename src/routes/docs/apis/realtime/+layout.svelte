<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Realtime'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/apis/realtime'
                },
                {
                    label: 'Authentication',
                    href: '/docs/apis/realtime/authentication'
                },
                {
                    label: 'Subscribe',
                    href: '/docs/apis/realtime/subscribe'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Channels',
                    href: '/docs/apis/realtime/channels'
                },
                {
                    label: 'Queries',
                    href: '/docs/apis/realtime/queries'
                },
                {
                    label: 'Payload',
                    href: '/docs/apis/realtime/payload'
                }
            ]
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Custom endpoint',
                    href: '/docs/apis/realtime/custom-endpoint'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
