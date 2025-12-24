<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Avatars'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/avatars'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/avatars/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'User initials',
                    href: '/docs/products/avatars/initials'
                },
                {
                    label: 'QR codes',
                    href: '/docs/products/avatars/qr-codes'
                },
                {
                    label: 'Country flags',
                    href: '/docs/products/avatars/flags'
                },
                {
                    label: 'Browser icons',
                    href: '/docs/products/avatars/browsers'
                },
                {
                    label: 'Payment methods',
                    href: '/docs/products/avatars/payment-methods'
                },
                {
                    label: 'Favicons',
                    href: '/docs/products/avatars/favicons'
                },
                {
                    label: 'Image proxy',
                    href: '/docs/products/avatars/image-manipulation'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Avatars API',
                    href: '/docs/references/cloud/client-web/avatars'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
