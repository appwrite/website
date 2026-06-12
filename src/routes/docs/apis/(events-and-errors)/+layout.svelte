<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Events & errors'
    };

    const navigation: NavTree = [
        {
            label: 'Events & webhooks',
            items: [
                {
                    label: 'Events',
                    href: '/docs/apis/events'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/apis/webhooks'
                }
            ]
        },
        {
            label: 'Responses & errors',
            items: [
                {
                    label: 'Response codes',
                    href: '/docs/apis/response-codes'
                },
                {
                    label: 'Error handling',
                    href: '/docs/apis/error-handling'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
