<script lang="ts">
    import { VARS } from '$lib/system';
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
        {
            name: 'Claude Opus 4.6',
            logo: '/images/docs/mcp/logos/dark/claude.svg',
            colorLogo: '/images/docs/mcp/logos/color/claude.svg',
            cost: '$5.00',
            overall: 99.9,
            categories: {
                Auth: 100,
                Databases: 100,
                Functions: 100,
                Storage: 99.5,
                Sites: 100,
                Messaging: 100
            }
        },
        {
            name: 'GPT 5.3 Codex',
            logo: '/images/docs/mcp/logos/dark/openai.svg',
            colorLogo: '/images/docs/mcp/logos/color/openai.svg',
            cost: '$1.75',
            overall: 99.2,
            categories: {
                Auth: 97.5,
                Databases: 99,
                Functions: 98.5,
                Storage: 100,
                Sites: 100,
                Messaging: 99.5
            }
        },
        {
            name: 'Kimi K2.5',
            logo: '/images/docs/mcp/logos/dark/kimi.svg',
            colorLogo: '/images/docs/mcp/logos/color/kimi.svg',
            cost: '$0.45',
            overall: 99.2,
            categories: {
                Auth: 98.5,
                Databases: 99.5,
                Functions: 99.5,
                Storage: 100,
                Sites: 100,
                Messaging: 97
            }
        },
        {
            name: 'Gemini 3.1 Pro',
            logo: '/images/docs/mcp/logos/dark/gemini.svg',
            colorLogo: '/images/docs/mcp/logos/color/gemini.svg',
            cost: '$2.00',
            overall: 98.1,
            categories: {
                Auth: 97,
                Databases: 98.5,
                Functions: 100,
                Storage: 99,
                Sites: 92,
                Messaging: 100
            }
        }
    ];
    type ModelCategory = keyof (typeof models)[0]['categories'];
    const categoryKeys = Object.keys(models[0].categories) as ModelCategory[];

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

        const targets = models.map((m) => m.overall);
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

<div class="border-smooth border-t pb-16">
    <div class="container pt-20 pb-0">
        <h2 class="font-aeonik-pro text-title text-primary sm:text-subtitle mb-12">
            Streamline your AI workflows<span class="text-accent">_</span>
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
    <div class="container pt-14 md:pt-20">
        <!-- Pitch -->
        <div
            class="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
            <h3 class="font-aeonik-pro text-label text-primary mb-0 max-w-[480px]">
                Works with every major LLM.
                <span class="text-secondary"
                    >Find out how well your model integrates with Appwrite.</span
                >
            </h3>
            <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                <Button href="/docs/tooling/skills" class="is-full-width-mobile"
                    >Install skill</Button
                >
                <Button
                    variant="secondary"
                    href={VARS.ARENA_ENDPOINT}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="is-full-width-mobile">View full benchmark</Button
                >
            </div>
        </div>

        <!-- Benchmark table -->
        <div class="border-smooth overflow-x-auto border border-dashed" bind:this={scoreSection}>
            <table class="w-full">
                <thead>
                    <tr class="border-smooth border-b border-dashed bg-[#232325]">
                        <td class="px-4 py-3 text-left text-xs text-white/50 sm:px-5">Model</td>
                        <td class="hidden px-5 py-3 text-left text-xs text-white/50 sm:table-cell"
                            >Cost/1M</td
                        >
                        <td class="px-4 py-3 text-right text-xs text-white/50 sm:px-5 sm:text-left"
                            >Overall</td
                        >
                        {#each categoryKeys as cat}
                            <td
                                class="hidden px-5 py-3 text-center text-xs text-white/50 md:table-cell"
                                >{cat}</td
                            >
                        {/each}
                    </tr>
                </thead>
                <tbody>
                    {#each models as model, i (model.name)}
                        {@const isLast = i === models.length - 1}
                        <tr class="group border-smooth {!isLast ? 'border-b border-dashed' : ''}">
                            <td class="px-4 py-3 sm:px-5">
                                <div class="flex items-center gap-3">
                                    <img
                                        src={model.colorLogo}
                                        alt=""
                                        class="h-5 w-5 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                    <span class="text-primary text-sm font-medium sm:text-base"
                                        >{model.name}</span
                                    >
                                </div>
                            </td>
                            <td class="hidden px-5 py-3 text-base text-white/40 sm:table-cell"
                                >{model.cost}</td
                            >
                            <td class="px-4 py-3 text-right sm:px-5 sm:text-left">
                                <span class="font-aeonik-pro text-lg font-medium text-[#85DBD8]"
                                    >{animatedScores[i].toFixed(1)}<span class="text-sm">%</span
                                    ></span
                                >
                            </td>
                            {#each categoryKeys as cat}
                                <td class="hidden px-5 py-3 text-center md:table-cell">
                                    <span
                                        class="text-sm text-white/60 transition-colors duration-300 group-hover:text-[#85DBD8]"
                                        >{model.categories[cat]}%</span
                                    >
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
