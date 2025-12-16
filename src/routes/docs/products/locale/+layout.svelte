<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Locale'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/locale'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/locale/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'User locale',
                    href: '/docs/products/locale/user-locale'
                },
                {
                    label: 'Countries',
                    href: '/docs/products/locale/countries'
                },
                {
                    label: 'Continents',
                    href: '/docs/products/locale/continents'
                },
                {
                    label: 'Currencies',
                    href: '/docs/products/locale/currencies'
                },
                {
                    label: 'Phone codes',
                    href: '/docs/products/locale/phone-codes'
                },
                {
                    label: 'Languages',
                    href: '/docs/products/locale/languages'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Locale API',
                    href: '/docs/references/cloud/client-web/locale'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>


