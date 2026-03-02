<script lang="ts">
    import Icon from '$lib/components/ui/icon/icon.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import McpAnimation from './(ai-animations)/mcp.svelte';
    import SkillsAnimation from './(ai-animations)/skills.svelte';

    const tools = [
        {
            name: 'VS Code',
            model: 'GPT-5.3 Codex',
            score: '99.2%',
            src: '/images/docs/mcp/logos/dark/vscode.svg',
            primary: '#0078D7'
        },
        {
            name: 'Cursor',
            model: 'GPT-5.3 Codex',
            score: '99.2%',
            src: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            primary: '#fff'
        },
        {
            name: 'Windsurf',
            model: 'Claude Opus 4.6',
            score: '99.9%',
            src: '/images/docs/mcp/logos/dark/windsurf.svg',
            primary: '#0EA5E9'
        },
        {
            name: 'Claude',
            model: 'Claude Opus 4.6',
            score: '99.9%',
            src: '/images/docs/mcp/logos/dark/claude.svg',
            primary: '#D97659'
        },
        {
            name: 'OpenCode',
            model: 'GPT-5.3 Codex',
            score: '99.2%',
            src: '/images/docs/mcp/logos/dark/opencode.svg',
            primary: '#fff'
        },
        {
            name: 'Google Antigravity',
            model: 'Gemini 3.1 Pro',
            score: '98.1%',
            src: '/images/docs/mcp/logos/dark/google-antigravity.svg',
            primary: '#4285F4'
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

<div class="border-smooth border-t border-dashed pb-16">
    <div class="container pt-16 pb-0">
        <h2 class="font-aeonik-pro text-subtitle text-primary mb-12">
            Streamline your AI workflows<span class="text-accent">_</span>
        </h2>

        <div
            class="border-smooth grid grid-cols-1 overflow-hidden border-t border-dashed sm:grid-cols-2"
        >
            <!-- MCP -->
            <div class="border-smooth flex flex-col border-dashed sm:border-r">
                <McpAnimation />
                <div class="px-5 pt-6 pb-10 sm:px-8">
                    <h3 class="font-aeonik-pro text-label text-primary">
                        Use MCP to connect AI agents to your Appwrite backend.
                        <span class="text-secondary">No custom integrations required.</span>
                    </h3>
                </div>
            </div>

            <!-- Agent Skills & Rules -->
            <div class="flex flex-col">
                <SkillsAnimation />
                <div class="px-5 pt-6 pb-10 sm:px-8">
                    <h3 class="font-aeonik-pro text-label text-primary">
                        Define what AI agents can do, and how they should behave,
                        <span class="text-secondary">before shipping them to production.</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Ecosystem strip — outside container so border-y spans full viewport width -->
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
                                    style="--primary-color:{tool.primary};--secondary-color:transparent"
                                >
                                    <Tooltip.Trigger
                                        class="border-smooth group relative flex h-16 w-full items-center justify-center border-r border-dashed {i ===
                                        0
                                            ? 'border-l'
                                            : ''}"
                                    >
                                        <div
                                            style="mask-image: url('{tool.src}'); -webkit-mask-image: url('{tool.src}'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;"
                                            class="h-9 w-9 bg-white/40 transition-colors duration-500 group-hover:bg-[var(--primary-color)]"
                                        ></div>
                                        <div
                                            class="absolute inset-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10 opacity-0 transition-opacity group-hover:opacity-100"
                                        >
                                            <Noise opacity={0.1} />
                                        </div>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            sideOffset={8}
                                            side="bottom"
                                            align="center"
                                            class="text-primary dark:bg-greyscale-900 data-[state='closed']:animate-menu-out data-[state='instant-open']:animate-menu-in data-[state='delayed-open']:animate-menu-in relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm"
                                        >
                                            <span
                                                class="relative z-10 flex flex-col items-center gap-0.5"
                                            >
                                                <span>{tool.name}</span>
                                                <span
                                                    class="flex items-center gap-1.5 text-xs opacity-70"
                                                >
                                                    <span>{tool.model}</span>
                                                    <span>•</span>
                                                    <span
                                                        >Compatibility: <span
                                                            class="rounded-[4px] bg-white/8 px-1 py-0.5 font-medium text-[#85DBD8]"
                                                            >{tool.score}</span
                                                        ></span
                                                    >
                                                </span>
                                            </span>
                                            <div
                                                class="absolute inset-0 rounded-md bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10"
                                            ></div>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </div>
                            </Tooltip.Root>
                        {/each}
                    </div>
                </Tooltip.Provider>
            </div>

            <!-- Mobile: tap to select, info bar below -->
            <div class="sm:hidden" bind:this={mobileStrip}>
                <div class="flex overflow-clip">
                    {#each tools as tool, i}
                        <button
                            onclick={(e) => handleMobileTap(e, i)}
                            class="border-smooth relative flex h-16 w-full items-center justify-center border-r border-dashed {i ===
                            0
                                ? 'border-l'
                                : ''}"
                            style="--primary-color:{tool.primary};--secondary-color:transparent"
                        >
                            <div
                                style="mask-image: url('{tool.src}'); -webkit-mask-image: url('{tool.src}'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;"
                                class="h-9 w-9 transition-colors duration-500 {activeMobileIndex ===
                                i
                                    ? 'bg-[var(--primary-color)]'
                                    : 'bg-white/40'}"
                            ></div>
                            {#if activeMobileIndex === i}
                                <div
                                    class="absolute inset-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10"
                                >
                                    <Noise opacity={0.1} />
                                </div>
                            {/if}
                        </button>
                    {/each}
                </div>
                <div
                    class="border-smooth flex flex-col items-center gap-0.5 border-t border-dashed py-3 text-sm {activeMobileIndex >=
                    0
                        ? 'visible'
                        : 'invisible'}"
                >
                    {#if activeMobileIndex >= 0}
                        {@const tool = tools[activeMobileIndex]}
                        <span class="text-primary">{tool.name}</span>
                        <span class="flex items-center gap-1.5 text-xs opacity-70">
                            <span>{tool.model}</span>
                            <span>•</span>
                            <span
                                >Compatibility: <span
                                    class="rounded-[4px] bg-white/8 px-1 py-0.5 font-medium text-[#85DBD8]"
                                    >{tool.score}</span
                                ></span
                            >
                        </span>
                    {:else}
                        <span class="text-primary">&nbsp;</span>
                        <span class="text-xs">&nbsp;</span>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
