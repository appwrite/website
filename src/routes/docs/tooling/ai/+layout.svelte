<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'AI'
    };

    const navigation: NavTree = [
        {
            label: 'Explore',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/ai/'
                },
                {
                    label: 'AI dev tools',
                    href: '/docs/tooling/ai/ai-dev-tools'
                },
                {
                    label: 'Quick start prompts',
                    href: '/docs/tooling/ai/quickstart-prompts'
                },
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
                    label: 'Appwrite Arena',
                    href: '/docs/tooling/ai/arena'
                },
                {
                    label: 'Assistant',
                    href: '/docs/tooling/ai/assistant'
                },
                {
                    label: 'Docs as Markdown',
                    href: '/docs/tooling/ai/docs-as-markdown'
                },
                {
                    label: 'Responsible AI',
                    href: '/docs/tooling/ai/responsible-ai'
                }
            ]
        },
        {
            label: 'Integrate with AI Tools',
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
                },
                {
                    label: 'Claude Desktop',
                    href: '/docs/tooling/ai/ai-dev-tools/claude-desktop'
                },
                {
                    label: 'Zenflow',
                    href: '/docs/tooling/ai/ai-dev-tools/zenflow'
                },
                {
                    label: 'Imagine',
                    href: '/docs/tooling/ai/ai-dev-tools/imagine'
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
                }
            ]
        },
        {
            label: 'Quick start prompts',
            collapsible: true,
            initiallyCollapsed: true,
            items: [
                {
                    label: 'Next.js',
                    href: '/docs/tooling/ai/quickstart-prompts/nextjs'
                },
                {
                    label: 'React',
                    href: '/docs/tooling/ai/quickstart-prompts/react'
                },
                {
                    label: 'Vue',
                    href: '/docs/tooling/ai/quickstart-prompts/vue'
                },
                {
                    label: 'SvelteKit',
                    href: '/docs/tooling/ai/quickstart-prompts/sveltekit'
                },
                {
                    label: 'Angular',
                    href: '/docs/tooling/ai/quickstart-prompts/angular'
                },
                {
                    label: 'Nuxt',
                    href: '/docs/tooling/ai/quickstart-prompts/nuxt'
                },
                {
                    label: 'Solid',
                    href: '/docs/tooling/ai/quickstart-prompts/solid'
                },
                {
                    label: 'Refine',
                    href: '/docs/tooling/ai/quickstart-prompts/refine'
                },
                {
                    label: 'TanStack Start',
                    href: '/docs/tooling/ai/quickstart-prompts/tanstack-start'
                },
                {
                    label: 'Web',
                    href: '/docs/tooling/ai/quickstart-prompts/web'
                },
                {
                    label: 'React Native',
                    href: '/docs/tooling/ai/quickstart-prompts/react-native'
                },
                {
                    label: 'Flutter',
                    href: '/docs/tooling/ai/quickstart-prompts/flutter'
                },
                {
                    label: 'Android (Kotlin)',
                    href: '/docs/tooling/ai/quickstart-prompts/android-kotlin'
                },
                {
                    label: 'Android (Java)',
                    href: '/docs/tooling/ai/quickstart-prompts/android-java'
                },
                {
                    label: 'Apple (Swift)',
                    href: '/docs/tooling/ai/quickstart-prompts/apple'
                },
                {
                    label: 'Node.js',
                    href: '/docs/tooling/ai/quickstart-prompts/node'
                },
                {
                    label: 'Python',
                    href: '/docs/tooling/ai/quickstart-prompts/python'
                },
                {
                    label: 'PHP',
                    href: '/docs/tooling/ai/quickstart-prompts/php'
                },
                {
                    label: 'Dart',
                    href: '/docs/tooling/ai/quickstart-prompts/dart'
                },
                {
                    label: 'Ruby',
                    href: '/docs/tooling/ai/quickstart-prompts/ruby'
                },
                {
                    label: 'Deno',
                    href: '/docs/tooling/ai/quickstart-prompts/deno'
                },
                {
                    label: 'Go',
                    href: '/docs/tooling/ai/quickstart-prompts/go'
                },
                {
                    label: '.NET',
                    href: '/docs/tooling/ai/quickstart-prompts/dotnet'
                },
                {
                    label: 'Swift',
                    href: '/docs/tooling/ai/quickstart-prompts/swift'
                },
                {
                    label: 'Kotlin',
                    href: '/docs/tooling/ai/quickstart-prompts/kotlin'
                },
                {
                    label: 'Rust',
                    href: '/docs/tooling/ai/quickstart-prompts/rust'
                }
            ]
        },
        {
            label: 'MCP Servers',
            collapsible: true,
            initiallyCollapsed: true,
            items: [
                {
                    label: 'API server',
                    href: '/docs/tooling/ai/mcp-servers/api'
                },
                {
                    label: 'Docs server',
                    href: '/docs/tooling/ai/mcp-servers/docs'
                }
            ]
        },
        {
            label: 'AI Implementation',
            collapsible: true,
            initiallyCollapsed: true,
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
