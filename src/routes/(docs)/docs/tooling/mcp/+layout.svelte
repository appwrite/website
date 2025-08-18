<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'MCP Server'
    };

    const navigation: NavTree = [
        {
            label: 'Getting Started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/mcp'
                }
            ]
        },
        {
            label: 'Integrations',
            items: [
                {
                    label: 'Claude Desktop',
                    href: '/docs/tooling/mcp/claude'
                },
                {
                    label: 'Cursor',
                    href: '/docs/tooling/mcp/cursor'
                },
                {
                    label: 'Windsurf Editor',
                    href: '/docs/tooling/mcp/windsurf'
                },
                {
                    label: 'VS Code',
                    href: '/docs/tooling/mcp/vscode'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
