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
    import { isInDocs, isInTutorialDocs } from '$lib/layouts/Docs.svelte';
    import { themeInUse } from '$routes/+layout.svelte';
    import { Icon } from '$lib/components/ui';

    /** Light platform SVGs are for docs light theme only; marketing always uses dark console icons. */
    const useLightPlatformSvgs = $derived(
        (isInDocs() || isInTutorialDocs()) && $themeInUse === 'light'
    );

    type StripItem = QuickStartStripItem;

    type MarqueeMobileEntry = StripItem & {
        trackPrefix: 'technologies' | 'ai-tooling';
    };

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
        Array.from(
            { length: FRAMEWORKS_GALLERY_PAGE_SIZE },
            (_, i) => shownFrameworkStrip[i] ?? null
        )
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
            primary: '#D97659',
            secondary: '#8B4A2E'
        },
        {
            name: 'Codex',
            dark: '/images/docs/mcp/logos/dark/openai.svg',
            light: '/images/docs/mcp/logos/openai.svg',
            href: '/docs/tooling/ai/ai-dev-tools/codex',
            primary: '#10A37F',
            secondary: '#064E3B'
        },
        {
            name: 'Cursor',
            dark: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            light: '/images/docs/mcp/logos/cursor-ai.svg',
            href: '/docs/tooling/mcp/cursor',
            primary: '#141414',
            secondary: '#5B9BF8'
        },
        {
            name: 'Lovable',
            dark: '/images/docs/mcp/logos/dark/lovable.svg',
            light: '/images/docs/mcp/logos/lovable.svg',
            href: '/docs/tooling/ai/ai-dev-tools/lovable',
            primary: '#FF6355',
            secondary: '#C43D32'
        },
        {
            name: 'OpenCode',
            dark: '/images/docs/mcp/logos/dark/opencode.svg',
            light: '/images/docs/mcp/logos/opencode.svg',
            href: '/docs/tooling/mcp/opencode',
            primary: '#FFFFFF',
            secondary: '#6366F1'
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

    const platformsHeading = $derived(
        headline ?? 'Optimized for the frameworks, languages and agents you love'
    );

    function trackLogo(prefix: 'technologies' | 'ai-tooling', name: string) {
        trackEvent(`${prefix}-${name.replace(/\s+/g, '-').toLowerCase()}-click`);
    }

    function trackDoc(label: string) {
        trackEvent(`platforms-ai-doc-${label.toLowerCase().replace(/\s+/g, '-')}-click`);
    }

    function stepFrameworkStripBack() {
        if (frameworkBatchIndex > 0) {
            frameworkBatchIndex -= 1;
            trackEvent('technologies-framework-strip-back-click');
        }
    }

    function stepFrameworkStripForward() {
        if (hasMoreFrameworks) {
            frameworkBatchIndex += 1;
            trackEvent('technologies-framework-strip-advance-click');
        }
    }
</script>

{#snippet frameworkStripPagerBack()}
    <div class="-mr-1.5 flex h-14 shrink-0 items-center pr-0.5 pl-0 sm:-mr-2 lg:-mr-3">
        <button
            type="button"
            class={cn(
                'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent',
                'text-secondary hover:text-primary transition-colors',
                'dark:text-greyscale-300 dark:hover:text-white',
                'disabled:hover:text-secondary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-35',
                'dark:disabled:hover:text-greyscale-300'
            )}
            aria-controls="platforms-framework-strip-icons"
            aria-label="Show previous quick-start frameworks"
            disabled={frameworkBatchIndex === 0}
            onclick={stepFrameworkStripBack}
        >
            <Icon
                name="chevron-left"
                width={18}
                height={18}
                class="shrink-0 opacity-90"
                aria-hidden="true"
            />
        </button>
    </div>
{/snippet}

{#snippet frameworkStripPagerForward()}
    <div class="-ml-1.5 flex h-14 shrink-0 items-center pr-0.5 pl-0 sm:-ml-2 lg:-ml-3">
        <button
            type="button"
            class={cn(
                'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent',
                'text-secondary hover:text-primary transition-colors',
                'dark:text-greyscale-300 dark:hover:text-white',
                'disabled:hover:text-secondary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-35',
                'dark:disabled:hover:text-greyscale-300'
            )}
            aria-controls="platforms-framework-strip-icons"
            aria-label="Show next quick-start frameworks"
            disabled={!hasMoreFrameworks}
            onclick={stepFrameworkStripForward}
        >
            <Icon
                name="chevron-right"
                width={18}
                height={18}
                class="shrink-0 opacity-90"
                aria-hidden="true"
            />
        </button>
    </div>
{/snippet}

{#snippet aiToolingStripCells()}
    <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
        {#each marketingAiStrip as platform, platformIndex (platform.name)}
            <Tooltip.Root>
                <div
                    class="contents"
                    style="--primary-color:{platform.primary};--secondary-color:{platform.secondary};--animation-delay:{platformIndex *
                        12}ms"
                >
                    <Tooltip.Trigger
                        class={cn(
                            'border-smooth group relative flex h-14 min-h-14 min-w-0 flex-1 basis-0 cursor-pointer overflow-hidden border-r border-dashed',
                            'animate-fade-in [animation-delay:var(--animation-delay,0ms)]'
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
                            onclick={() => trackLogo('ai-tooling', platform.name)}
                        >
                            <img
                                src={useLightPlatformSvgs ? platform.light : platform.dark}
                                alt=""
                                class="size-7 max-h-7 min-h-7 max-w-7 min-w-7 shrink-0 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            sideOffset={6}
                            side="top"
                            class={cn(
                                'text-greyscale-900 relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium',
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
    </Tooltip.Provider>
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
                        class="border-smooth group animate-fade-in relative mt-4 flex h-16 w-16 shrink-0 items-center justify-center border-dashed [animation-delay:var(--animation-delay,0ms)]"
                        style="--primary-color:{platform.primary};--secondary-color:{platform.secondary};--animation-delay:{platformIndex *
                            25}ms"
                        aria-label={platform.name}
                        onclick={() => trackLogo(platform.trackPrefix, platform.name)}
                    >
                        <img
                            src={useLightPlatformSvgs ? platform.light : platform.dark}
                            alt=""
                            class="h-8 w-auto object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
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
    <div class="border-smooth border-y border-dashed">
        <div
            class={cn('container flex flex-col items-center py-0 max-lg:pt-4 lg:hidden', {
                'px-0!': !padded
            })}
        >
            <GradientText>
                <span
                    class={cn(
                        'text-primary mx-auto mb-3 block max-w-[22rem] px-4 text-center leading-snug font-medium text-pretty',
                        headline ? 'text-sm' : 'text-sub-body'
                    )}>{platformsHeading}</span
                >
            </GradientText>
            <div class="w-full" role="region" aria-label="Frameworks and AI development tools">
                {@render marqueeMobileRow(marketingCombinedMarqueeMobile)}
            </div>
        </div>
        <div
            class={cn('container hidden py-0 lg:block', {
                'px-0!': !padded
            })}
        >
            <div
                class="grid min-w-0 grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-[minmax(10rem,13.75rem)_minmax(0,1fr)] lg:items-center lg:gap-x-8 lg:gap-y-0"
            >
                <h2 class="m-0 hidden max-w-[13.75rem] min-w-0 lg:block lg:pr-1">
                    <GradientText
                        class="font-aeonik-pro text-[0.8125rem] leading-snug font-medium tracking-tight text-pretty lg:text-[0.875rem]"
                    >
                        <span class="block">{platformsHeading}</span>
                    </GradientText>
                </h2>
                <div
                    id="platforms-framework-strip"
                    role="region"
                    aria-label={platformsHeading}
                    class="flex w-full min-w-0 flex-nowrap items-stretch gap-x-1 sm:gap-x-1.5 lg:gap-x-2"
                >
                    {#if hasFrameworkStripPagination}
                        {@render frameworkStripPagerBack()}
                    {/if}
                    <div
                        id="platforms-framework-strip-icons"
                        class={cn(
                            'relative min-h-14 flex-[10] basis-0 overflow-x-auto overflow-y-hidden',
                            'mask-r-from-90% mask-r-to-100% mask-l-from-90% mask-l-to-100% mask-alpha lg:overflow-clip',
                            'scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                        )}
                    >
                        <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                            {#key frameworkBatchIndex}
                                <div
                                    class="flex h-14 min-h-14 w-full min-w-0 flex-nowrap items-stretch"
                                >
                                    {#each frameworkStripSlots as platform, platformIndex (`${frameworkBatchIndex}-${platformIndex}-${platform?.href ?? 'slot'}`)}
                                        {#if platform}
                                            <Tooltip.Root>
                                                <div
                                                    class="contents"
                                                    style="--primary-color:{platform.primary};--secondary-color:{platform.secondary};--animation-delay:{platformIndex *
                                                        12}ms"
                                                >
                                                    <Tooltip.Trigger
                                                        class={cn(
                                                            'border-smooth group relative flex h-14 min-h-14 cursor-pointer overflow-hidden border-r border-dashed',
                                                            'max-lg:w-11 max-lg:flex-none max-lg:shrink-0 lg:min-h-14 lg:min-w-0 lg:flex-1 lg:basis-0',
                                                            'animate-fade-in [animation-delay:var(--animation-delay,0ms)]'
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
                                                                trackLogo(
                                                                    'technologies',
                                                                    platform.name
                                                                )}
                                                        >
                                                            <img
                                                                src={useLightPlatformSvgs
                                                                    ? platform.light
                                                                    : platform.dark}
                                                                alt=""
                                                                class="size-7 max-h-7 min-h-7 max-w-7 min-w-7 shrink-0 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                                            />
                                                        </a>
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content
                                                            sideOffset={6}
                                                            side="top"
                                                            class={cn(
                                                                'text-greyscale-900 relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium',
                                                                'dark:bg-greyscale-850 dark:text-greyscale-50',
                                                                'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                                            )}
                                                        >
                                                            <div
                                                                class="pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/6 to-(--secondary-color,_transparent)/8 opacity-50 dark:from-white/5 dark:to-transparent"
                                                                aria-hidden="true"
                                                            ></div>
                                                            <span class="relative z-10"
                                                                >{platform.name}</span
                                                            >
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </div>
                                            </Tooltip.Root>
                                        {:else}
                                            <div
                                                class={cn(
                                                    'border-smooth border-primary/8 flex h-14 min-h-14 shrink-0 border-r border-dashed bg-transparent',
                                                    'max-lg:w-11 max-lg:flex-none lg:min-h-14 lg:min-w-0 lg:flex-1 lg:basis-0'
                                                )}
                                                aria-hidden="true"
                                            ></div>
                                        {/if}
                                    {/each}
                                </div>
                            {/key}
                        </Tooltip.Provider>
                    </div>
                    {#if hasFrameworkStripPagination}
                        {@render frameworkStripPagerForward()}
                    {/if}
                    <div
                        class="flex min-h-14 min-w-0 flex-[5] basis-0 flex-nowrap items-stretch"
                        role="region"
                        aria-label="AI tools and editors"
                    >
                        {@render aiToolingStripCells()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class={cn('container pt-3', {
            'px-0!': !padded
        })}
    >
        <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(10rem,13.75rem)_minmax(0,1fr)] lg:items-center lg:gap-x-8"
        >
            <div class="hidden min-w-0 lg:block" aria-hidden="true"></div>
            <div class="flex min-w-0 justify-center lg:justify-end">
                <nav
                    class="text-secondary flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-center text-[0.6875rem] leading-tight font-medium lg:text-xs"
                    aria-label="AI and MCP documentation"
                >
                    {#each aiDocLinks as link, i (link.href)}
                        {#if i > 0}
                            <span class="text-primary/25 px-0.5 select-none" aria-hidden="true"
                                >·</span
                            >
                        {/if}
                        <a
                            href={link.href}
                            class="text-secondary hover:text-primary underline-offset-4 transition-colors hover:underline"
                            target={link.href.startsWith('https://') ? '_blank' : undefined}
                            rel={link.href.startsWith('https://')
                                ? 'noopener noreferrer'
                                : undefined}
                            onclick={() => trackDoc(link.label)}
                        >
                            {link.label}
                        </a>
                    {/each}
                </nav>
            </div>
        </div>
    </div>
</div>
