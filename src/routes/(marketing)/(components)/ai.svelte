<script lang="ts">
    import { Button } from '$lib/components/ui';
    import Icon from '$lib/components/ui/icon/icon.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import McpAnimation from './(ai-animations)/mcp.svelte';
    import SkillsAnimation from './(ai-animations)/skills.svelte';
    import AiTable from './ai-table.svelte';
    import { themeInUse } from '$routes/+layout.svelte';

    type AiStripTool = {
        name: string;
        dark: string;
        light: string;
        primary: string;
        secondary: string;
    };

    /** Monotone MCP glyphs; subtle brand tint only on hover gradient (matches `platforms.svelte` strip). */
    const tools: AiStripTool[] = [
        {
            name: 'Claude Code',
            dark: '/images/docs/mcp/logos/dark/claude.svg',
            light: '/images/docs/mcp/logos/claude.svg',
            primary: '#D97659',
            secondary: '#8B4A2E'
        },
        {
            name: 'Codex',
            dark: '/images/docs/mcp/logos/dark/openai.svg',
            light: '/images/docs/mcp/logos/openai.svg',
            primary: '#10A37F',
            secondary: '#064E3B'
        },
        {
            name: 'Cursor',
            dark: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            light: '/images/docs/mcp/logos/cursor-ai.svg',
            primary: '#141414',
            secondary: '#5B9BF8'
        },
        {
            name: 'VS Code',
            dark: '/images/docs/mcp/logos/dark/vscode.svg',
            light: '/images/docs/mcp/logos/vscode.svg',
            primary: '#0078D7',
            secondary: '#005A9E'
        },
        {
            name: 'OpenCode',
            dark: '/images/docs/mcp/logos/dark/opencode.svg',
            light: '/images/docs/mcp/logos/opencode.svg',
            primary: '#FFFFFF',
            secondary: '#6366F1'
        },
        {
            name: 'Google Antigravity',
            dark: '/images/docs/mcp/logos/dark/google-antigravity.svg',
            light: '/images/docs/mcp/logos/google-antigravity.svg',
            primary: '#4285F4',
            secondary: '#1967D2'
        }
    ];

    let activeMobileIndex = $state(-1);
    let mobileStrip: HTMLElement;

    function handleMobileTap(e: MouseEvent, i: number) {
        e.stopPropagation();
        activeMobileIndex = activeMobileIndex === i ? -1 : i;
    }

    function handleClickOutside(e: MouseEvent) {
        if (mobileStrip && !mobileStrip.contains(e.target as Node)) {
            activeMobileIndex = -1;
        }
    }

    $effect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    });
</script>

<div class="border-smooth border-t pb-16">
    <div class="container pt-20 pb-0">
        <h2 class="font-aeonik-pro text-title text-primary sm:text-subtitle mb-12">
            Built for the AI agents in your workflow<span class="text-accent">_</span>
        </h2>

        <div class="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
            <!-- MCP -->
            <div class="border-smooth flex flex-col border border-dashed">
                <McpAnimation />
                <div class="px-5 pt-6 pb-10 sm:px-8">
                    <h3 class="font-aeonik-pro text-label text-primary">
                        MCP - Connect AI agents to your Appwrite backend.
                        <span class="text-secondary">No custom integrations required.</span>
                    </h3>
                </div>
            </div>

            <!-- Appwrite Skills -->
            <div
                class="border-smooth flex flex-col border border-t-0 border-dashed sm:border-t sm:border-l-0"
            >
                <SkillsAnimation />
                <div class="px-5 pt-6 pb-10 sm:px-8">
                    <h3 class="font-aeonik-pro text-label text-primary">
                        Skills - Teach AI agents your backend,
                        <span class="text-secondary">so they always make the right call.</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Ecosystem strip -->
    <div class="border-smooth border-y border-dashed">
        <div class="container">
            <!-- Desktop: tooltips on hover -->
            <div class="hidden sm:block">
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
                                        <div
                                            class="relative z-10 flex size-full items-center justify-center"
                                        >
                                            <img
                                                src={$themeInUse === 'light'
                                                    ? tool.light
                                                    : tool.dark}
                                                alt=""
                                                class="h-9 w-9 shrink-0 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </div>
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

            <!-- Mobile: tap to select, tooltip below -->
            <div class="sm:hidden" bind:this={mobileStrip}>
                <div class="flex">
                    {#each tools as tool, i}
                        <button
                            onclick={(e) => handleMobileTap(e, i)}
                            class="border-smooth relative flex h-16 w-full items-center justify-center border-r border-dashed {i ===
                            0
                                ? 'border-l'
                                : ''}"
                            style="--primary-color:{tool.primary};--secondary-color:{tool.secondary}"
                        >
                            <div
                                class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10 opacity-0 transition-opacity {activeMobileIndex ===
                                i
                                    ? 'opacity-100'
                                    : ''}"
                            >
                                <Noise opacity={0.1} />
                            </div>
                            <img
                                src={$themeInUse === 'light' ? tool.light : tool.dark}
                                alt=""
                                class="relative z-10 h-9 w-9 shrink-0 object-contain opacity-90 transition-opacity duration-300 {activeMobileIndex ===
                                i
                                    ? 'opacity-100'
                                    : ''}"
                            />
                            {#if activeMobileIndex === i}
                                <div
                                    class="text-primary dark:bg-greyscale-900 absolute top-full z-10 mt-2 rounded-md border-0 bg-[#EDEDF0] px-2.5 py-1 text-sm whitespace-nowrap {i ===
                                    tools.length - 1
                                        ? 'right-0'
                                        : 'left-1/2 -translate-x-1/2'}"
                                >
                                    <span class="relative z-10">{tool.name}</span>
                                    <div
                                        class="absolute inset-0 rounded-md bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10"
                                    ></div>
                                </div>
                            {/if}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- Agent Skill + LLM Compatibility -->
    <AiTable />
</div>
