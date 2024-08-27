<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Migrations'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/advanced/migrations'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'From Firebase',
                    href: '/docs/advanced/migrations/firebase'
                },
                {
                    label: 'From Supabase',
                    href: '/docs/advanced/migrations/supabase'
                },
                {
                    label: 'From Nhost',
                    href: '/docs/advanced/migrations/nhost'
                },
                {
                    label: 'From Cloud',
                    href: '/docs/advanced/migrations/cloud'
                },
                {
                    label: 'From self-hosted',
                    href: '/docs/advanced/migrations/self-hosted'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
