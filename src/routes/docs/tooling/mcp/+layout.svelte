<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';
    import { isNewUntil } from '$lib/utils/date';

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
            label: 'Servers',
            items: [
                {
                    label: 'MCP for API',
                    href: '/docs/tooling/mcp/api'
                },
                {
                    label: 'MCP for Docs',
                    href: '/docs/tooling/mcp/docs',
                    new: isNewUntil('31 Oct 2025')
                }
            ]
        },
        {
            label: 'Integrations',
            items: [
                {
                    label: 'Claude Code',
                    href: '/docs/tooling/mcp/claude-code'
                },
                {
                    label: 'Codex',
                    href: '/docs/tooling/ai/ai-dev-tools/codex'
                },
                {
                    label: 'Cursor',
                    href: '/docs/tooling/mcp/cursor'
                },
                {
                    label: 'VS Code',
                    href: '/docs/tooling/mcp/vscode'
                },
                {
                    label: 'Claude Desktop',
                    href: '/docs/tooling/mcp/claude-desktop'
                },
                {
                    label: 'Zenflow',
                    href: '/docs/tooling/mcp/zenflow'
                },
                {
                    label: 'OpenCode',
                    href: '/docs/tooling/mcp/opencode'
                },
                {
                    label: 'Google Antigravity',
                    href: '/docs/tooling/mcp/antigravity'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
