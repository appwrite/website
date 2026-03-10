<script lang="ts">
    import { onMount } from 'svelte';
    import { Button } from '$lib/components/ui';
    import { VARS } from '$lib/system';

    type ModelCategory = 'Auth' | 'Databases' | 'Functions' | 'Storage' | 'Sites' | 'Messaging';

    type ArenaModel = {
        name: string;
        logo: string;
        colorLogo: string;
        cost: string; // The API provides cost fields, but format it appropriately
        overall: number;
        categories: Record<ModelCategory, number>;
    };

    let models = $state<ArenaModel[]>([]);
    let categoryKeys = $state<ModelCategory[]>([
        'Auth',
        'Databases',
        'Functions',
        'Storage',
        'Sites',
        'Messaging'
    ]);

    const logoMap: Record<string, { dark: string; color: string }> = {
        OpenAI: {
            dark: '/images/docs/mcp/logos/dark/openai.svg',
            color: '/images/docs/mcp/logos/color/openai.svg'
        },
        Anthropic: {
            dark: '/images/docs/mcp/logos/dark/claude.svg',
            color: '/images/docs/mcp/logos/color/claude.svg'
        },
        MoonshotAI: {
            dark: '/images/docs/mcp/logos/dark/kimi.svg',
            color: '/images/docs/mcp/logos/color/kimi.svg'
        },
        Google: {
            dark: '/images/docs/mcp/logos/dark/gemini.svg',
            color: '/images/docs/mcp/logos/color/gemini.svg'
        }
    };

    onMount(async () => {
        try {
            const res = await fetch('/api/arena');
            const data = await res.json();

            // Map the parsed AI data to match the component's internal structure
            models = (data?.models || []).slice(0, 4).map((m: any) => ({
                name: m.modelName,
                logo: logoMap[m.provider]?.dark || '/images/docs/mcp/logos/dark/openai.svg', // Fallback icon
                colorLogo: logoMap[m.provider]?.color || '/images/docs/mcp/logos/color/openai.svg',
                cost: `$${(m.promptCostPerMillionTokens || 0).toFixed(2)}`,
                overall: m.overall,
                categories: {
                    Auth: m.scores?.auth ?? 0,
                    Databases: m.scores?.databases ?? 0,
                    Functions: m.scores?.functions ?? 0,
                    Storage: m.scores?.storage ?? 0,
                    Sites: m.scores?.sites ?? 0,
                    Messaging: m.scores?.messaging ?? 0
                }
            }));

            // Re-initialize animated scores once models are loaded dynamically
            animatedScores = models.map(() => START_VALUE);
            hasAnimated = false; // Reset so sequence animates once new data loads

            // Trigger animation if in view
            if (scoreSection) {
                const rect = scoreSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    animateScores();
                }
            }
        } catch (e) {
            console.error('Failed to load arena data:', e);
        }
    });

    // Score count-up animation
    const START_VALUE = 90;
    let scoreSection: HTMLElement;
    let hasAnimated = $state(false);
    let animatedScores = $state<number[]>([]);

    function easeOutCubic(t: number): number {
        return 1 - Math.pow(1 - t, 3);
    }

    type ScoreTier = 'high' | 'mid' | 'low';

    const SCORE_THRESHOLD_HIGH = 85;
    const SCORE_THRESHOLD_LOW = 50;

    function getScoreTier(score: number): ScoreTier {
        if (score >= SCORE_THRESHOLD_HIGH) return 'high';
        if (score >= SCORE_THRESHOLD_LOW) return 'mid';
        return 'low';
    }

    function getScoreColor(score: number): string {
        const tier = getScoreTier(score);
        if (tier === 'low') return '#FF453A';
        if (tier === 'mid') return '#FE9567';
        return '#85DBD8';
    }

    function getScoreClass(score: number): string {
        return `score-${getScoreTier(score)}`;
    }

    function getOverallColor(score: number): string {
        const tier = getScoreTier(score);
        if (tier === 'high') return '#85DBD8';
        if (tier === 'mid') return '#FE9567';
        return '#FF453A';
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
</script>

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
            <Button
                href="/docs/tooling/skills"
                target="_blank"
                rel="noopener noreferrer"
                class="is-full-width-mobile">Install skill</Button
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
                    <td class="min-w-[140px] shrink-0 px-4 py-3 text-left text-xs text-white/50 sm:px-5">Model</td>
                    <td class="hidden px-5 py-3 text-left text-xs text-white/50 sm:table-cell"
                        >Cost/1M</td
                    >
                    <td class="px-4 py-3 text-right text-xs text-white/50 sm:px-5 sm:text-left"
                        >Overall</td
                    >
                    {#each categoryKeys as cat}
                        <td class="hidden px-5 py-3 text-center text-xs text-white/50 md:table-cell"
                            >{cat}</td
                        >
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each models as model, i (model.name)}
                    {@const isLast = i === models.length - 1}
                    <tr class="group border-smooth {!isLast ? 'border-b border-dashed' : ''}">
                        <td class="min-w-[140px] shrink-0 px-4 py-3 sm:px-5">
                            <div class="flex min-w-0 items-center gap-3">
                                <img
                                    src={model.colorLogo}
                                    alt=""
                                    class="h-5 w-5 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                                <span class="whitespace-nowrap text-primary text-sm font-medium sm:text-base"
                                    >{model.name}</span
                                >
                            </div>
                        </td>
                        <td class="hidden px-5 py-3 text-base text-white/40 sm:table-cell"
                            >{model.cost}</td
                        >
                        <td class="px-4 py-3 text-right sm:px-5 sm:text-left">
                            <span
                                class="font-aeonik-pro text-lg font-medium"
                                style="color: {getOverallColor(animatedScores[i])}"
                                >{animatedScores[i].toFixed(1)}<span class="text-sm">%</span></span
                            >
                        </td>
                        {#each categoryKeys as cat}
                            <td class="hidden px-5 py-3 text-center md:table-cell">
                                <span
                                    class="text-sm text-white/60 transition-colors duration-300 group-hover:text-[color:var(--hover-color)]"
                                    style="--hover-color: {getScoreColor(model.categories[cat])};"
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
