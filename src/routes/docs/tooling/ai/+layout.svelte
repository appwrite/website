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
                    label: 'VS Code',
                    href: '/docs/tooling/ai/ai-dev-tools/vscode'
                },
                {
                    label: 'Cursor',
                    href: '/docs/tooling/ai/ai-dev-tools/cursor'
                },
                {
                    label: 'Windsurf',
                    href: '/docs/tooling/ai/ai-dev-tools/windsurf'
                },
                {
                    label: 'OpenCode',
                    href: '/docs/tooling/ai/ai-dev-tools/opencode'
                },
                {
                    label: 'Google Antigravity',
                    href: '/docs/tooling/ai/ai-dev-tools/antigravity'
                },
                {
                    label: 'Claude Code',
                    href: '/docs/tooling/ai/ai-dev-tools/claude-code'
                }
            ]
        },
        {
            label: 'Vibe coding',
            items: [
                {
                    label: 'Imagine',
                    href: '/docs/tooling/ai/ai-dev-tools/imagine'
                },
                {
                    label: 'Claude Desktop',
                    href: '/docs/tooling/ai/ai-dev-tools/claude-desktop'
                },
                {
                    label: 'Lovable',
                    href: '/docs/tooling/ai/ai-dev-tools/lovable'
                },
                {
                    label: 'Emergent',
                    href: '/docs/tooling/ai/ai-dev-tools/emergent'
                },
                {
                    label: 'Bolt',
                    href: '/docs/tooling/ai/ai-dev-tools/bolt'
                },
                {
                    label: 'Zenflow',
                    href: '/docs/tooling/ai/ai-dev-tools/zenflow'
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
