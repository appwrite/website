<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Terraform'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/terraform'
                }
            ]
        },
        {
            label: 'Guides',
            items: [
                {
                    label: 'Provider configuration',
                    href: '/docs/tooling/terraform/provider'
                },
                {
                    label: 'Database resources',
                    href: '/docs/tooling/terraform/databases'
                },
                {
                    label: 'Data sources',
                    href: '/docs/tooling/terraform/data-sources'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
