<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import {
        allFrameworkStrip,
        FRAMEWORKS_GALLERY_PAGE_SIZE,
        type QuickStartStripItem
    } from './quick-start-strip-items';
    import Noise from '$lib/components/fancy/noise.svelte';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Tooltip } from 'bits-ui';
    import { trackEvent } from '$lib/actions/analytics';
    import { themeInUse } from '$routes/+layout.svelte';

    type StripItem = QuickStartStripItem;

    type MarqueeMobileEntry = StripItem & {
        trackPrefix: 'technologies' | 'ai-tooling';
    };

    /** Full list on small viewports (marquee); desktop `lg+` uses paginated strip. */
    const headlineMarqueeMobile: MarqueeMobileEntry[] = allFrameworkStrip.map((p) => ({
        ...p,
        trackPrefix: 'technologies' as const
    }));

    /** Which page of `FRAMEWORKS_GALLERY_PAGE_SIZE` icons is shown; `+` replaces the strip with the next page. */
    let frameworkBatchIndex = $state(0);

    const frameworkBatchStart = $derived(frameworkBatchIndex * FRAMEWORKS_GALLERY_PAGE_SIZE);
    const shownFrameworkStrip = $derived(
        allFrameworkStrip.slice(
            frameworkBatchStart,
            frameworkBatchStart + FRAMEWORKS_GALLERY_PAGE_SIZE
        )
    );

    /** Always `FRAMEWORKS_GALLERY_PAGE_SIZE` slots so row width stays even when the last page has fewer icons. */
    const frameworkStripSlots = $derived(
        Array.from({ length: FRAMEWORKS_GALLERY_PAGE_SIZE }, (_, i) => shownFrameworkStrip[i] ?? null)
    );

    const hasMoreFrameworks = $derived(
        frameworkBatchStart + FRAMEWORKS_GALLERY_PAGE_SIZE < allFrameworkStrip.length
    );
    const hasFrameworkStripPagination = $derived(
        allFrameworkStrip.length > FRAMEWORKS_GALLERY_PAGE_SIZE
    );

    const marketingFrameworkMarquee = $derived(
        allFrameworkStrip.map((p) => ({ ...p, trackPrefix: 'technologies' as const }))
    );

    const marketingAiStrip: StripItem[] = [
        {
            name: 'Claude Code',
            dark: '/images/docs/mcp/logos/dark/claude.svg',
            light: '/images/docs/mcp/logos/claude.svg',
            href: '/docs/tooling/mcp/claude-code',
            primary: '#D97659'
        },
        {
            name: 'Codex',
            dark: '/images/docs/mcp/logos/dark/openai.svg',
            light: '/images/docs/mcp/logos/openai.svg',
            href: '/docs/tooling/ai/ai-dev-tools/codex',
            primary: '#10A37F'
        },
        {
            name: 'Cursor',
            dark: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            light: '/images/docs/mcp/logos/cursor-ai.svg',
            href: '/docs/tooling/mcp/cursor',
            primary: '#fff'
        },
        {
            name: 'Lovable',
            dark: '/images/docs/mcp/logos/dark/lovable.svg',
            light: '/images/docs/mcp/logos/lovable.svg',
            href: '/docs/tooling/ai/ai-dev-tools/lovable',
            primary: '#FF6355'
        },
        {
            name: 'OpenCode',
            dark: '/images/docs/mcp/logos/dark/opencode.svg',
            light: '/images/docs/mcp/logos/opencode.svg',
            href: '/docs/tooling/mcp/opencode',
            primary: '#fff'
        },
        {
            name: 'Bolt',
            dark: '/images/docs/mcp/logos/dark/bolt.svg',
            light: '/images/docs/mcp/logos/bolt.svg',
            href: '/docs/tooling/ai/ai-dev-tools/bolt',
            primary: '#FCD34D',
            secondary: '#18181B'
        }
    ];

    const marketingCombinedMarqueeMobile = $derived([
        ...marketingFrameworkMarquee,
        ...marketingAiStrip.map((p) => ({ ...p, trackPrefix: 'ai-tooling' as const }))
    ]);

    const aiDocLinks = [
        { label: 'MCP servers', href: '/docs/tooling/ai/mcp-servers' },
        { label: 'Appwrite Skills', href: '/docs/tooling/ai/skills' },
        { label: 'AI Arena', href: 'https://arena.appwrite.io/' }
    ] as const;

    interface PlatformsProps {
        class?: string;
        padded?: boolean;
        headline?: string;
    }

    const { class: className, padded = true, headline }: PlatformsProps = $props();

    function trackLogo(prefix: 'technologies' | 'ai-tooling', name: string) {
        trackEvent(`${prefix}-${name.replace(/\s+/g, '-').toLowerCase()}-click`);
    }

    function trackDoc(label: string) {
        trackEvent(`platforms-ai-doc-${label.toLowerCase().replace(/\s+/g, '-')}-click`);
    }

    function advanceOrResetFrameworkStrip() {
        if (hasMoreFrameworks) {
            frameworkBatchIndex += 1;
            trackEvent('technologies-framework-strip-advance-click');
        } else {
            frameworkBatchIndex = 0;
            trackEvent('technologies-framework-strip-reset-click');
        }
    }
</script>

{#snippet frameworkStripPager()}
    <div class="border-smooth flex h-14 shrink-0 items-center pl-1 pr-0.5">
        <button
            type="button"
            class={cn(
                'inline-flex h-6 min-h-6 w-12 min-w-12 max-w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 px-0',
                'text-[0.625rem] font-semibold tabular-nums leading-none tracking-wide',
                'bg-black/[0.1] text-secondary transition-[color,background-color] hover:bg-black/[0.16] hover:text-primary',
                'dark:bg-white/[0.12] dark:text-greyscale-300 dark:hover:bg-white/[0.18] dark:hover:text-white'
            )}
            aria-controls="platforms-framework-strip-icons"
            aria-label={hasMoreFrameworks
                ? 'Show next quick-start frameworks'
                : 'Return to start of quick-start frameworks'}
            onclick={advanceOrResetFrameworkStrip}
        >
            {hasMoreFrameworks ? 'more' : 'start'}
        </button>
    </div>
{/snippet}

{#snippet logoStrip(items: StripItem[], prefix: 'technologies' | 'ai-tooling', regionLabel?: string)}
    <div
        role={regionLabel ? 'region' : undefined}
        aria-label={regionLabel}
        class={cn(
            'flex w-full min-w-0 flex-nowrap overflow-x-auto overflow-y-hidden lg:overflow-clip',
            'mask-r-from-90% mask-r-to-100% mask-l-from-90% mask-l-to-100% mask-alpha lg:mask-none',
            'scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        )}
    >
        <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
            <div
                class="flex min-w-0 flex-nowrap max-lg:w-max max-lg:min-w-min lg:w-full lg:min-w-0"
            >
                {#each items as platform, platformIndex (platform.name)}
                    <Tooltip.Root>
                        <div
                            class="contents"
                            style="--primary-color:{platform.primary};--secondary-color:{platform.secondary ??
                                'transparent'};--animation-delay:{platformIndex * 12}ms"
                        >
                            <Tooltip.Trigger
                                class={cn(
                                    'border-smooth group relative flex h-14 min-h-14 cursor-pointer overflow-hidden border-r border-dashed',
                                    'max-lg:w-11 max-lg:flex-none max-lg:shrink-0 lg:min-w-0 lg:flex-1 lg:basis-0',
                                    platformIndex === 0 && 'border-l border-dashed'
                                )}
                            >
                                <div
                                    class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10 opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <Noise opacity={0.1} />
                                </div>
                                <a
                                    href={platform.href}
                                    class="relative z-10 flex size-full min-h-0 min-w-0 items-center justify-center p-2"
                                    aria-label={platform.name}
                                    onclick={() => trackLogo(prefix, platform.name)}
                                >
                                    <img
                                        src={$themeInUse === 'light' && platform.light
                                            ? platform.light
                                            : platform.dark}
                                        alt=""
                                        class="size-7 max-h-7 min-h-7 max-w-7 min-w-7 shrink-0 object-contain opacity-90 brightness-110 grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0"
                                    />
                                </a>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    sideOffset={6}
                                    side="top"
                                    class={cn(
                                        'relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium text-greyscale-900',
                                        'dark:bg-greyscale-850 dark:text-greyscale-50',
                                        'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                    )}
                                >
                                    <div
                                        class="pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/6 to-(--secondary-color,_transparent)/8 opacity-50 dark:from-white/5 dark:to-transparent"
                                        aria-hidden="true"
                                    ></div>
                                    <span class="relative z-10">{platform.name}</span>
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </div>
                    </Tooltip.Root>
                {/each}
            </div>
        </Tooltip.Provider>
    </div>
{/snippet}

{#snippet marqueeMobileRow(items: MarqueeMobileEntry[])}
    <div
        class={cn(
            'flex w-full flex-nowrap overflow-clip',
            'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl'
        )}
    >
        {#each [0, 1] as copy (copy)}
            <div
                class="divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-x divide-dashed"
            >
                {#each items as platform, platformIndex (`${copy}-${platform.name}`)}
                    <a
                        href={platform.href}
                        class="border-smooth group animate-fade-in relative mt-4 flex h-16 w-16 shrink-0 items-center justify-center border-dashed"
                        style="--primary-color:{platform.primary};--secondary-color:{platform.secondary ??
                            'transparent'};--animation-delay:{platformIndex * 25}ms"
                        aria-label={platform.name}
                        onclick={() => trackLogo(platform.trackPrefix, platform.name)}
                    >
                        <img
                            src={$themeInUse === 'light' && platform.light
                                ? platform.light
                                : platform.dark}
                            alt=""
                            class="h-8 w-auto grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                        />
                        <div
                            class={cn(
                                'pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100',
                                'bg-gradient-to-tl from-transparent to-transparent',
                                'hover:from-(--primary-color,_#fff)/4 hover:to-(--secondary-color,_transparent)/10'
                            )}
                        >
                            <Noise opacity={0.1} />
                        </div>
                    </a>
                {/each}
            </div>
        {/each}
    </div>
{/snippet}

<div class={cn('relative z-10', className)}>
    {#if headline}
        <div class="border-smooth border-y border-dashed">
            <div
                class={cn(
                    'container flex flex-col items-center py-0 max-lg:pt-4 lg:hidden',
                    {
                        'px-0!': !padded
                    }
                )}
            >
                <GradientText>
                    <span
                        class="text-primary mb-3 flex items-center px-4 text-center text-sm font-medium"
                        >{headline}</span
                    >
                </GradientText>
                {@render marqueeMobileRow(headlineMarqueeMobile)}
            </div>
            <div
                class={cn('container hidden py-0 lg:block', {
                    'px-0!': !padded
                })}
            >
                <div class="flex max-w-none flex-col gap-1 lg:gap-2">
                    <h2
                        class="font-aeonik-pro text-primary text-pretty hidden text-[0.9375rem] leading-snug font-medium tracking-tight lg:block lg:text-base"
                    >
                        {headline}
                    </h2>
                    {@render logoStrip(
                        allFrameworkStrip.slice(0, FRAMEWORKS_GALLERY_PAGE_SIZE),
                        'technologies',
                        headline
                    )}
                </div>
            </div>
        </div>
    {:else}
        <div class="border-smooth border-y border-dashed">
            <div
                class={cn(
                    'container flex flex-col items-center py-0 max-lg:pt-4 lg:hidden',
                    {
                        'px-0!': !padded
                    }
                )}
            >
                <GradientText>
                    <span
                        class="text-sub-body text-primary mb-3 flex items-center px-4 text-center font-medium"
                    >
                        Optimized for your frameworks and AI agents
                    </span>
                </GradientText>
                <div
                    class="w-full"
                    role="region"
                    aria-label="Frameworks and AI development tools"
                >
                    {@render marqueeMobileRow(marketingCombinedMarqueeMobile)}
                </div>
            </div>
            <div
                class={cn('container hidden py-0 lg:block', {
                    'px-0!': !padded
                })}
            >
                <div class="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:items-start lg:gap-x-4 lg:gap-y-0">
                    <div
                        class="grid min-w-0 grid-cols-1 gap-1 sm:gap-2 lg:col-span-2 lg:grid-cols-[minmax(8.25rem,11rem)_minmax(0,1fr)] lg:items-center lg:gap-x-2"
                    >
                        <h2 class="m-0 hidden lg:max-w-[11rem] lg:block lg:pr-1">
                            <GradientText
                                class="font-aeonik-pro text-[0.8125rem] font-medium leading-[1.25] tracking-tight text-pretty lg:text-[0.875rem]"
                            >
                                <span class="block">Optimized for your frameworks and AI agents</span>
                            </GradientText>
                        </h2>
                        <div
                            id="platforms-framework-strip"
                            role="region"
                            aria-label="Optimized for your frameworks and AI agents"
                            class="flex w-full min-w-0 flex-nowrap items-stretch"
                        >
                            <div
                                id="platforms-framework-strip-icons"
                                class={cn(
                                    'min-w-0 flex-1 overflow-x-auto overflow-y-hidden',
                                    'mask-r-from-90% mask-r-to-100% mask-l-from-90% mask-l-to-100% mask-alpha lg:mask-none',
                                    'scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                                    'lg:overflow-clip'
                                )}
                            >
                                <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                                    <div
                                        class={cn(
                                            'flex min-h-0 min-w-0 flex-nowrap items-stretch',
                                            'w-full min-w-0 max-lg:w-max max-lg:min-w-min lg:w-full'
                                        )}
                                    >
                                        {#each frameworkStripSlots as platform, platformIndex (`${frameworkBatchIndex}-${platformIndex}-${platform?.href ?? 'slot'}`)}
                                            {#if platform}
                                                <Tooltip.Root>
                                                    <div
                                                        class="contents"
                                                        style="--primary-color:{platform.primary};--secondary-color:{platform.secondary ??
                                                            'transparent'};--animation-delay:{platformIndex * 12}ms"
                                                    >
                                                        <Tooltip.Trigger
                                                            class={cn(
                                                                'border-smooth group relative flex h-14 min-h-14 cursor-pointer overflow-hidden border-r border-dashed',
                                                                'max-lg:w-11 max-lg:flex-none max-lg:shrink-0 lg:min-w-0 lg:flex-1 lg:basis-0',
                                                                platformIndex === 0 && 'border-l border-dashed'
                                                            )}
                                                        >
                                                            <div
                                                                class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-(--primary-color)/4 to-(--secondary-color)/10 opacity-0 transition-opacity group-hover:opacity-100"
                                                            >
                                                                <Noise opacity={0.1} />
                                                            </div>
                                                            <a
                                                                href={platform.href}
                                                                class="relative z-10 flex size-full min-h-0 min-w-0 items-center justify-center p-2"
                                                                aria-label={platform.name}
                                                                onclick={() =>
                                                                    trackLogo('technologies', platform.name)}
                                                            >
                                                                <img
                                                                    src={$themeInUse === 'light' && platform.light
                                                                        ? platform.light
                                                                        : platform.dark}
                                                                    alt=""
                                                                    class="size-7 max-h-7 min-h-7 max-w-7 min-w-7 shrink-0 object-contain opacity-90 brightness-110 grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0"
                                                                />
                                                            </a>
                                                        </Tooltip.Trigger>
                                                        <Tooltip.Portal>
                                                            <Tooltip.Content
                                                                sideOffset={6}
                                                                side="top"
                                                                class={cn(
                                                                    'relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium text-greyscale-900',
                                                                    'dark:bg-greyscale-850 dark:text-greyscale-50',
                                                                    'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                                                )}
                                                            >
                                                                <div
                                                                    class="pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/6 to-(--secondary-color,_transparent)/8 opacity-50 dark:from-white/5 dark:to-transparent"
                                                                    aria-hidden="true"
                                                                ></div>
                                                                <span class="relative z-10">{platform.name}</span>
                                                            </Tooltip.Content>
                                                        </Tooltip.Portal>
                                                    </div>
                                                </Tooltip.Root>
                                            {:else}
                                                <div
                                                    class={cn(
                                                        'border-smooth flex h-14 min-h-14 shrink-0 border-r border-dashed border-primary/8 bg-transparent',
                                                        'max-lg:w-11 max-lg:flex-none lg:min-w-0 lg:flex-1 lg:basis-0',
                                                        platformIndex === 0 && 'border-l border-dashed'
                                                    )}
                                                    aria-hidden="true"
                                                ></div>
                                            {/if}
                                        {/each}
                                    </div>
                                </Tooltip.Provider>
                            </div>
                            {#if hasFrameworkStripPagination}
                                {@render frameworkStripPager()}
                            {/if}
                        </div>
                    </div>
                    <div class="flex min-w-0 flex-col lg:col-span-1">
                        {@render logoStrip(
                            marketingAiStrip,
                            'ai-tooling',
                            'AI tools and editors'
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div
            class={cn('container pt-3', {
                'px-0!': !padded
            })}
        >
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4">
                <div class="hidden lg:block lg:col-span-2" aria-hidden="true"></div>
                <div class="flex min-w-0 justify-center lg:col-span-1">
                    <nav
                        class="text-secondary flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-center text-[0.6875rem] font-medium leading-tight lg:text-xs"
                        aria-label="AI and MCP documentation"
                    >
                        {#each aiDocLinks as link, i (link.href)}
                            {#if i > 0}
                                <span class="text-primary/25 px-0.5 select-none" aria-hidden="true">·</span>
                            {/if}
                            <a
                                href={link.href}
                                class="text-secondary hover:text-primary underline-offset-4 transition-colors hover:underline"
                                target={link.href.startsWith('https://') ? '_blank' : undefined}
                                rel={link.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                                onclick={() => trackDoc(link.label)}
                            >
                                {link.label}
                            </a>
                        {/each}
                    </nav>
                </div>
            </div>
        </div>
    {/if}
</div>
