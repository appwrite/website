<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'CLI'
    };

    const navigation: NavTree = [
        {
            label: 'Guides',
            items: [
                {
                    label: 'Installation',
                    href: '/docs/tooling/command-line/installation'
                },
                {
                    label: 'Commands',
                    href: '/docs/tooling/command-line/commands'
                },
                {
                    label: 'Non interactive',
                    href: '/docs/tooling/command-line/non-interactive'
                }
            ]
        },
        {
            label: 'Deployments',
            items: [
                {
                    label: 'Collections',
                    href: '/docs/tooling/command-line/collections'
                },
                {
                    label: 'Functions',
                    href: '/docs/tooling/command-line/functions'
                },
                {
                    label: 'Sites',
                    href: '/docs/tooling/command-line/sites'
                },
                {
                    label: 'Teams',
                    href: '/docs/tooling/command-line/teams'
                },
                {
                    label: 'Topics',
                    href: '/docs/tooling/command-line/topics'
                },
                {
                    label: 'Buckets',
                    href: '/docs/tooling/command-line/buckets'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
