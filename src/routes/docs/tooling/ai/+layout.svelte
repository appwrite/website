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
            label: 'Quickstart Prompts',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/ai/quickstart-prompts'
                },
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
                }
            ]
        },
        {
            label: 'AI Dev Tools',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/tooling/ai/ai-dev-tools'
                },
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
                    label: 'Antigravity',
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
                }
            ]
        },
        {
            label: 'AI Implementation',
            items: [
                {
                    label: 'Vector DB and Embeddings',
                    href: '/docs/tooling/ai/vector-db-and-embeddings'
                },
                {
                    label: 'RAG',
                    href: '/docs/tooling/ai/rag'
                },
                {
                    label: 'AI in Functions',
                    href: '/docs/tooling/ai/ai-in-functions'
                },
                {
                    label: 'Persistent Agents with Realtime',
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
