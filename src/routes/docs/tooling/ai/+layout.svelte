<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'AI'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/ai/'
                },
                {
                    label: 'Quick start prompts',
                    href: '/docs/tooling/ai/quickstart-prompts'
                }
            ]
        },
        {
            label: 'Tooling',
            items: [
                {
                    label: 'MCP servers',
                    href: '/docs/tooling/ai/mcp-servers'
                },
                {
                    label: 'Agent skills',
                    href: '/docs/tooling/ai/skills'
                },
                {
                    label: 'AGENTS.md',
                    href: '/docs/tooling/ai/agents-md'
                },
                {
                    label: 'Assistant',
                    href: '/docs/tooling/ai/assistant'
                },
                {
                    label: 'Appwrite Arena',
                    href: '/docs/tooling/ai/arena'
                }
            ]
        },
        {
            label: 'IDEs',
            items: [
                {
                    label: 'Claude Code',
                    href: '/docs/tooling/ai/agents/claude-code'
                },
                {
                    label: 'Codex',
                    href: '/docs/tooling/ai/agents/codex'
                },
                {
                    label: 'Cursor',
                    href: '/docs/tooling/ai/agents/cursor'
                },
                {
                    label: 'VS Code',
                    href: '/docs/tooling/ai/agents/vscode'
                },
                {
                    label: 'Zed',
                    href: '/docs/tooling/ai/agents/zed'
                },
                {
                    label: 'OpenCode',
                    href: '/docs/tooling/ai/agents/opencode'
                },
                {
                    label: 'Google Antigravity',
                    href: '/docs/tooling/ai/agents/antigravity'
                }
            ]
        },
        {
            label: 'Vibe coding',
            items: [
                {
                    label: 'Claude Desktop',
                    href: '/docs/tooling/ai/vibe-coding/claude-desktop'
                },
                {
                    label: 'Lovable',
                    href: '/docs/tooling/ai/vibe-coding/lovable'
                },
                {
                    label: 'Emergent',
                    href: '/docs/tooling/ai/vibe-coding/emergent'
                },
                {
                    label: 'Bolt',
                    href: '/docs/tooling/ai/vibe-coding/bolt'
                },
                {
                    label: 'Zenflow',
                    href: '/docs/tooling/ai/vibe-coding/zenflow'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'AI in Functions',
                    href: '/docs/tooling/ai/ai-in-functions'
                },
                {
                    label: 'Vector DB and embeddings',
                    href: '/docs/tooling/ai/vector-db-and-embeddings'
                },
                {
                    label: 'Persistent agents with Realtime',
                    href: '/docs/tooling/ai/persistent-agents-with-realtime'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
