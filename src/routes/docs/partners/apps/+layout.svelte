<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Apps'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/partners/apps'
                },
                {
                    label: 'Quick start',
                    href: '/docs/partners/apps/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Registration',
                    href: '/docs/partners/apps/registration'
                },
                {
                    label: 'Scopes',
                    href: '/docs/partners/apps/scopes'
                },
                {
                    label: 'Consent',
                    href: '/docs/partners/apps/consent'
                },
                {
                    label: 'Tokens',
                    href: '/docs/partners/apps/tokens'
                },
                {
                    label: 'Device flow',
                    href: '/docs/partners/apps/device-flow'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
