<script lang="ts">
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import McpAnimation from './(ai-animations)/mcp.svelte';
    import SkillsAnimation from './(ai-animations)/skills.svelte';
    import AiTable from './ai-table.svelte';
    import { themeInUse } from '$routes/+layout.svelte';

    type AiStripTool = {
        name: string;
        href: string;
        dark: string;
        light: string;
        primary: string;
        secondary: string;
    };

    /** Monotone MCP glyphs; subtle brand tint only on hover gradient (matches `platforms.svelte` strip). */
    const tools: AiStripTool[] = [
        {
            name: 'Claude Code',
            href: '/docs/tooling/ai/ai-dev-tools/claude-code',
            dark: '/images/docs/mcp/logos/dark/claude.svg',
            light: '/images/docs/mcp/logos/claude.svg',
            primary: '#D97659',
            secondary: '#8B4A2E'
        },
        {
            name: 'Codex',
            href: '/docs/tooling/ai/ai-dev-tools/codex',
            dark: '/images/docs/mcp/logos/dark/openai.svg',
            light: '/images/docs/mcp/logos/openai.svg',
            primary: '#10A37F',
            secondary: '#064E3B'
        },
        {
            name: 'Cursor',
            href: '/docs/tooling/ai/ai-dev-tools/cursor',
            dark: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            light: '/images/docs/mcp/logos/cursor-ai.svg',
            primary: '#141414',
            secondary: '#5B9BF8'
        },
        {
            name: 'VS Code',
            href: '/docs/tooling/ai/ai-dev-tools/vscode',
            dark: '/images/docs/mcp/logos/dark/vscode.svg',
            light: '/images/docs/mcp/logos/vscode.svg',
            primary: '#0078D7',
            secondary: '#005A9E'
        },
        {
            name: 'OpenCode',
            href: '/docs/tooling/ai/ai-dev-tools/opencode',
            dark: '/images/docs/mcp/logos/dark/opencode.svg',
            light: '/images/docs/mcp/logos/opencode.svg',
            primary: '#FFFFFF',
            secondary: '#6366F1'
        },
        {
            name: 'Google Antigravity',
            href: '/docs/tooling/ai/ai-dev-tools/antigravity',
            dark: '/images/docs/mcp/logos/dark/google-antigravity.svg',
            light: '/images/docs/mcp/logos/google-antigravity.svg',
            primary: '#4285F4',
            secondary: '#1967D2'
        }
    ];
</script>

<div class="border-smooth border-t pb-16">
    <div class="container pt-20 pb-0">
        <h2 class="font-aeonik-pro text-title text-primary sm:text-subtitle mb-12">
            Built for the AI agents in your workflow<span class="text-accent">_</span>
        </h2>

        <div class="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
            <!-- MCP -->
            <a
                href="/docs/tooling/ai/mcp-servers"
                class="border-smooth group relative flex cursor-pointer flex-col border border-dashed no-underline outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style="--tile-primary:#FD366E;--tile-secondary:#6366F1"
                aria-label="MCP servers — Appwrite documentation"
            >
                <div
                    class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--tile-primary)/4 to-(--tile-secondary)/10 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                    aria-hidden="true"
                >
                    <Noise opacity={0.1} />
                </div>
                <div class="relative z-10 flex flex-col">
                    <McpAnimation />
                    <div class="px-5 pt-6 pb-10 sm:px-8">
                        <h3 class="font-aeonik-pro text-label text-primary">
                            MCP - Connect AI agents to your Appwrite backend.
                            <span class="text-secondary">No custom integrations required.</span>
                        </h3>
                    </div>
                </div>
            </a>

            <!-- Appwrite Skills -->
            <a
                href="/docs/tooling/ai/skills"
                class="border-smooth group relative flex cursor-pointer flex-col border border-t-0 border-dashed no-underline outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:border-t sm:border-l-0"
                style="--tile-primary:#6366F1;--tile-secondary:#FD366E"
                aria-label="Appwrite agent skills — documentation"
            >
                <div
                    class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--tile-primary)/4 to-(--tile-secondary)/10 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                    aria-hidden="true"
                >
                    <Noise opacity={0.1} />
                </div>
                <div class="relative z-10 flex flex-col">
                    <SkillsAnimation />
                    <div class="px-5 pt-6 pb-10 sm:px-8">
                        <h3 class="font-aeonik-pro text-label text-primary">
                            Skills - Teach AI agents your backend,
                            <span class="text-secondary">so they always make the right call.</span>
                        </h3>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <!-- Ecosystem strip: each tile links to the matching AI dev tools doc -->
    <div class="border-smooth border-y border-dashed">
        <div class="container">
            <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                <div class="flex overflow-clip">
                    {#each tools as tool, i}
                        <Tooltip.Root>
                            <div
                                class="contents"
                                style="--primary-color:{tool.primary};--secondary-color:{tool.secondary}"
                            >
                                <Tooltip.Trigger
                                    class="border-smooth group relative flex h-16 w-full items-center justify-center border-r border-dashed {i ===
                                    0
                                        ? 'border-l'
                                        : ''}"
                                >
                                    <div
                                        class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <Noise opacity={0.1} />
                                    </div>
                                    <a
                                        href={tool.href}
                                        class="relative z-10 flex size-full min-h-0 min-w-0 items-center justify-center"
                                        aria-label={`${tool.name} — Appwrite docs`}
                                    >
                                        <img
                                            src={$themeInUse === 'light' ? tool.light : tool.dark}
                                            alt=""
                                            class="h-9 w-9 shrink-0 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </a>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content
                                        sideOffset={8}
                                        side="bottom"
                                        align="center"
                                        class="data-[state='closed']:animate-menu-out data-[state='instant-open']:animate-menu-in data-[state='delayed-open']:animate-menu-in text-greyscale-900 dark:bg-greyscale-850 dark:text-greyscale-50 relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium"
                                    >
                                        <div
                                            class="pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tl from-(--primary-color)/6 to-(--secondary-color)/8 opacity-50 dark:from-white/5 dark:to-transparent"
                                            aria-hidden="true"
                                        ></div>
                                        <span class="relative z-10">{tool.name}</span>
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </div>
                        </Tooltip.Root>
                    {/each}
                </div>
            </Tooltip.Provider>
        </div>
    </div>

    <!-- Agent Skill + LLM Compatibility -->
    <AiTable />
</div>
