<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Terraform provider'
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
                    label: 'Configuration',
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
                },
                {
                    label: 'Auth',
                    href: '/docs/tooling/terraform/resources/auth'
                },
                {
                    label: 'Functions',
                    href: '/docs/tooling/terraform/resources/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/tooling/terraform/resources/sites'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/tooling/terraform/resources/webhooks'
                },
                {
                    label: 'Backups',
                    href: '/docs/tooling/terraform/resources/backups'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
