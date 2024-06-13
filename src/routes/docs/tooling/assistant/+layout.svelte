<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Assistant'
    };

    const navigation: NavTree = [
        {
            label: 'Guides',
            items: [
                {
                    label: 'Assistant',
                    href: '/docs/tooling/assistant/assistant'
                },
                {
                    label: 'Appwriter',
                    href: '/docs/tooling/assistant/appwriter'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
