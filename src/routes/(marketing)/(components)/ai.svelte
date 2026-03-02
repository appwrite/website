<script lang="ts">
    import { Button } from '$lib/components/ui';
    import Icon from '$lib/components/ui/icon/icon.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import McpAnimation from './(ai-animations)/mcp.svelte';
    import SkillsAnimation from './(ai-animations)/skills.svelte';

    const tools = [
        { name: 'VS Code', src: '/images/docs/mcp/logos/dark/vscode.svg', primary: '#0078D7' },
        { name: 'Cursor', src: '/images/docs/mcp/logos/dark/cursor-ai.svg', primary: '#fff' },
        {
            name: 'Windsurf',
            src: '/images/docs/mcp/logos/dark/windsurf.svg',
            primary: '#0EA5E9'
        },
        { name: 'Claude', src: '/images/docs/mcp/logos/dark/claude.svg', primary: '#D97659' },
        { name: 'OpenCode', src: '/images/docs/mcp/logos/dark/opencode.svg', primary: '#fff' },
        {
            name: 'Google Antigravity',
            src: '/images/docs/mcp/logos/dark/google-antigravity.svg',
            primary: '#4285F4'
        }
    ];

    const models = [
        { name: 'Claude Opus 4.6', provider: 'Anthropic', score: '99.9%' },
        { name: 'GPT-5.3 Codex', provider: 'OpenAI', score: '99.2%' },
        { name: 'Gemini 3.1 Pro', provider: 'Google', score: '98.1%' },
        { name: 'Claude Sonnet 4.6', provider: 'Anthropic', score: '97.8%' },
        { name: 'GPT-5.3', provider: 'OpenAI', score: '96.5%' },
        { name: 'Llama 4 Maverick', provider: 'Meta', score: '94.2%' }
    ];

    // Score count-up animation
    const START_VALUE = 90;
    let scoreSection: HTMLElement;
    let hasAnimated = $state(false);
    let animatedScores = $state(models.map(() => START_VALUE));

    function easeOutCubic(t: number): number {
        return 1 - Math.pow(1 - t, 3);
    }

    function animateScores() {
        if (hasAnimated) return;
        hasAnimated = true;

        const targets = models.map((m) => parseFloat(m.score));
        const duration = 1000;
        const stagger = 100;

        models.forEach((_, i) => {
            const delay = i * stagger;
            const start = performance.now() + delay;

            function tick(now: number) {
                const elapsed = now - start;
                if (elapsed < 0) {
                    requestAnimationFrame(tick);
                    return;
                }
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutCubic(progress);
                animatedScores[i] = START_VALUE + (targets[i] - START_VALUE) * eased;

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            }

            requestAnimationFrame(tick);
        });
    }

    $effect(() => {
        if (!scoreSection) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateScores();
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(scoreSection);
        return () => observer.disconnect();
    });

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
                                            <span class="relative z-10">{tool.name}</span>
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
    <div class="container pt-10 md:pt-16">
        <div class="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2 md:gap-8">
            <!-- Left: Skill pitch -->
            <div class="flex flex-col px-5 py-6 sm:px-6 md:px-0">
                <h3 class="font-aeonik-pro text-label text-primary mb-0">
                    Boost compatibility across AI models
                </h3>
                <p class="text-secondary mt-3 mb-0 max-w-[420px] text-base font-medium">
                    Install the Appwrite Agent Skill to teach AI models how to work with your
                    backend.
                </p>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <Button href="/docs/agents/skills" class="is-full-width-mobile"
                        >Install skill</Button
                    >
                    <Button
                        variant="secondary"
                        href="https://arena.appwrite.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="is-full-width-mobile">View full benchmark</Button
                    >
                </div>
            </div>

            <!-- Right: Score proof -->
            <div
                class="border-smooth flex flex-col overflow-hidden border border-dashed"
                bind:this={scoreSection}
            >
                <div
                    class="border-smooth flex items-center justify-between border-b border-dashed px-4 py-2.5 sm:px-5"
                >
                    <span class="text-xs text-white/40">Model</span>
                    <span class="text-xs text-white/40">Compatibility</span>
                </div>
                <div class="flex flex-1 flex-col">
                    {#each models.slice(0, 3) as model, i (model.name)}
                        {@const isLast = i === 2}
                        <div
                            class="border-smooth flex items-center justify-between px-4 sm:px-5 {!isLast
                                ? 'border-b border-dashed'
                                : ''}"
                        >
                            <span class="flex items-baseline gap-1.5 py-4">
                                <span class="text-primary text-sm font-medium">{model.name}</span>
                                <span class="text-xs text-white/40">{model.provider}</span>
                            </span>
                            <span class="font-aeonik-pro text-lg font-medium text-[#85DBD8]"
                                >{animatedScores[i].toFixed(1)}<span class="text-sm">%</span></span
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
