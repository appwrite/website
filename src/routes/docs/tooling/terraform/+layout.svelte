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
                },
                {
                    label: 'Provider configuration',
                    href: '/docs/tooling/terraform/provider'
                }
            ]
        },
        {
            label: 'Resources',
            items: [
                {
                    label: 'Databases',
                    href: '/docs/tooling/terraform/resources/databases'
                },
                {
                    label: 'Storage',
                    href: '/docs/tooling/terraform/resources/storage'
                },
                {
                    label: 'Messaging',
                    href: '/docs/tooling/terraform/resources/messaging'
                }
            ]
        },
        {
            label: 'Data sources',
            items: [
                {
                    label: 'Database',
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
