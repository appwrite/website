<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import {
        allFrameworkStrip,
        type QuickStartStripItem
    } from '$routes/(marketing)/(components)/quick-start-strip-items';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import { trackEvent } from '$lib/actions/analytics';
    import { isInDocs, isInTutorialDocs } from '$lib/layouts/Docs.svelte';
    import { themeInUse } from '$routes/+layout.svelte';

    const useLightPlatformSvgs = $derived(
        (isInDocs() || isInTutorialDocs()) && $themeInUse === 'light'
    );

    interface DocsPlatformsGridProps {
        class?: string;
        padded?: boolean;
    }

    const { class: className, padded = true }: DocsPlatformsGridProps = $props();

    let gridEl: HTMLDivElement | undefined = $state();
    /** Per-tile `side`: first row → above (`top`), last row → below (`bottom`), middle → `top`. */
    let tileTooltipSide = $state(new Map<string, 'top' | 'bottom'>());

    /** Matches `lg:grid-cols-[repeat(15,...)]` — fillers only apply at that breakpoint (hidden below `lg`). */
    const GRID_COLS_LG = 15;

    const trailingPlaceholderCount = $derived(
        (GRID_COLS_LG - (allFrameworkStrip.length % GRID_COLS_LG)) % GRID_COLS_LG
    );

    function trackLogo(name: string) {
        trackEvent(`technologies-${name.replace(/\s+/g, '-').toLowerCase()}-click`);
    }

    const gridFrameClass = cn(
        'border-smooth grid w-full min-w-0 border-l border-t border-dashed',
        'grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]',
        'lg:grid-cols-[repeat(15,minmax(0,1fr))]'
    );

    function cellStyle(platform: QuickStartStripItem, platformIndex: number) {
        return `--primary-color:${platform.primary};--secondary-color:${platform.secondary};--animation-delay:${platformIndex * 12}ms`;
    }

    function sameSideMap(
        a: Map<string, 'top' | 'bottom'>,
        b: Map<string, 'top' | 'bottom'>
    ): boolean {
        if (a.size !== b.size) return false;
        for (const [k, v] of a) {
            if (b.get(k) !== v) return false;
        }
        return true;
    }

    function tooltipVerticalSide(r: DOMRect, gridRect: DOMRect, rowPx: number): 'top' | 'bottom' {
        const firstRowBottom = gridRect.top + rowPx;
        const lastRowTop = gridRect.bottom - rowPx;
        const inTopRow = r.top < firstRowBottom - 0.5;
        const inBottomRow = r.bottom > lastRowTop - 0.5;
        if (inTopRow && inBottomRow) return 'top';
        if (inBottomRow) return 'bottom';
        return 'top';
    }

    function updateTooltipSides() {
        if (!gridEl || typeof window === 'undefined') return;
        const gridRect = gridEl.getBoundingClientRect();
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        const rowPx = 3.5 * rem;
        const next = new Map<string, 'top' | 'bottom'>();
        for (const el of gridEl.querySelectorAll('[data-docs-platform-tile]')) {
            const href = el.getAttribute('data-docs-platform-tile');
            if (!href) continue;
            const r = el.getBoundingClientRect();
            next.set(href, tooltipVerticalSide(r, gridRect, rowPx));
        }
        if (!sameSideMap(tileTooltipSide, next)) tileTooltipSide = next;
    }

    $effect(() => {
        allFrameworkStrip.length;
        gridEl;
        if (!gridEl || typeof ResizeObserver === 'undefined') return;

        const run = () => queueMicrotask(() => updateTooltipSides());
        run();

        const ro = new ResizeObserver(run);
        ro.observe(gridEl);
        window.addEventListener('resize', run);

        return () => {
            ro.disconnect();
            window.removeEventListener('resize', run);
        };
    });
</script>

<div class={cn('relative z-10', className)}>
    <div class="border-smooth border-y border-dashed">
        <div
            class={cn('container py-0', {
                'px-0!': !padded
            })}
        >
            <div class="w-full" role="region" aria-label="Quick-start frameworks and languages">
                <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                    <div bind:this={gridEl} class={gridFrameClass}>
                        {#each allFrameworkStrip as platform, platformIndex (platform.href)}
                            <Tooltip.Root>
                                <div class="contents" style={cellStyle(platform, platformIndex)}>
                                    <Tooltip.Trigger
                                        data-docs-platform-tile={platform.href}
                                        class={cn(
                                            'border-smooth group relative flex h-14 min-h-14 cursor-pointer overflow-hidden border-r border-b border-dashed',
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
                                            onclick={() => trackLogo(platform.name)}
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
                                            side={tileTooltipSide.get(platform.href) ?? 'top'}
                                            class={cn(
                                                'text-greyscale-900 relative z-[10000] rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium',
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
                        {#each Array.from({ length: trailingPlaceholderCount }) as _, i (i)}
                            <div
                                class={cn(
                                    'max-lg:hidden',
                                    'border-smooth border-primary/8 h-14 min-h-14 border-r border-b border-dashed bg-transparent'
                                )}
                                aria-hidden="true"
                            ></div>
                        {/each}
                    </div>
                </Tooltip.Provider>
            </div>
        </div>
    </div>
</div>
