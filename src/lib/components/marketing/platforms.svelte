<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import { isInDocs, isInTutorialDocs } from '$lib/layouts/Docs.svelte';
    import { themeInUse } from '$routes/+layout.svelte';

    const ICON = '/images/platforms';

    const useLightPlatformSvgs = $derived(
        (isInDocs() || isInTutorialDocs()) && $themeInUse === 'light'
    );

    type PlatformRow = {
        name: string;
        slug: string;
        primary: string;
        secondary: string;
    };

    const platforms: PlatformRow[] = [
        { name: 'JS', slug: 'javascript', primary: '#FFCA28', secondary: '#3E3E3E' },
        {
            name: 'Flutter',
            slug: 'flutter',
            primary: '#00569E',
            secondary: '#47C5FB'
        },
        { name: 'Node.js', slug: 'node', primary: '#8CC84B', secondary: '#3C873A' },
        {
            name: 'React Native',
            slug: 'react-native',
            primary: '#61DAFB',
            secondary: '#087EA4'
        },
        { name: 'Next.js', slug: 'nextjs', primary: '#000000', secondary: '#0070F3' },
        { name: 'Astro', slug: 'astro', primary: '#FF5D01', secondary: '#BC38E0' },
        {
            name: 'Vite',
            slug: 'vite',
            primary: '#BD34FE',
            secondary: '#FFC517'
        },
        { name: 'Svelte', slug: 'svelte', primary: '#FF3E00', secondary: '#FF8C42' },
        {
            name: 'Remix',
            slug: 'remix',
            primary: '#3992FF',
            secondary: '#121212'
        },
        { name: 'Deno', slug: 'deno', primary: '#70FFAF', secondary: '#000000' },
        { name: 'Vue', slug: 'vue', primary: '#41B883', secondary: '#35495E' },
        { name: 'Angular', slug: 'angular', primary: '#C3002F', secondary: '#9F1239' },
        {
            name: 'Nuxt',
            slug: 'nuxt',
            primary: '#00DC82',
            secondary: '#003737'
        },
        { name: 'React', slug: 'react', primary: '#53C1DE', secondary: '#087EA4' },
        {
            name: 'Lynx',
            slug: 'lynx',
            primary: '#78D9EA',
            secondary: '#1E8BC3'
        }
    ];

    type Props = {
        headline: string;
        class?: string;
    } & SvelteHTMLElements['div'];

    const {
        headline = 'Supporting the tools you work with',
        class: className = '',
        ...rest
    }: Props = $props();
</script>

<div class={cn('border-smooth relative z-10 border-y border-dashed', className)} {...rest}>
    <div class="container flex flex-col items-center max-md:pt-4 md:flex-row">
        <GradientText>
            <span
                class="text-sub-body flex items-center pr-4 font-medium md:w-full md:max-w-[175px]"
                >{headline}</span
            >
        </GradientText>
        <div
            class={cn(
                'flex w-full flex-nowrap overflow-clip md:overflow-visible',
                'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-md md:mask-none md:backdrop-blur-none'
            )}
        >
            {#each [1, 2] as _, rowIndex}
                <div
                    class={cn(
                        'divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed will-change-transform md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]',
                        {
                            'md:hidden': rowIndex === 1
                        }
                    )}
                    aria-hidden={rowIndex === 1 ? true : undefined}
                >
                    <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                        {#each platforms as platform, platformIndex}
                            <Tooltip.Root>
                                <div
                                    class="contents"
                                    style="--primary-color:{platform.primary};--secondary-color:{platform.secondary};--animation-delay:{platformIndex *
                                        25}ms"
                                >
                                    <Tooltip.Trigger
                                        class={cn(
                                            'border-smooth group animate-fade-in relative mt-4 flex h-16 w-16 items-center justify-center border-dashed md:mt-0 md:w-full lg:border-r',
                                            {
                                                'lg:border-l': platformIndex === 0
                                            }
                                        )}
                                    >
                                        <img
                                            src={`${ICON}/${useLightPlatformSvgs ? 'light' : 'dark'}/${platform.slug}.svg`}
                                            alt={platform.name}
                                            loading="lazy"
                                            decoding="async"
                                            fetchpriority="low"
                                            class="h-8 w-auto object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                        />

                                        <div
                                            class={cn(
                                                'absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100',
                                                'bg-gradient-to-tl from-transparent to-transparent',
                                                'hover:from-(--primary-color,_#fff)/4 hover:to-(--secondary-color,_transparent)/10'
                                            )}
                                        >
                                            <Noise opacity={0.1} />
                                        </div>
                                    </Tooltip.Trigger>
                                    <Tooltip.Content
                                        sideOffset={8}
                                        side="top"
                                        class={cn(
                                            'text-greyscale-900 relative hidden rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm font-medium md:block',
                                            'dark:bg-greyscale-850 dark:text-greyscale-50',
                                            'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                        )}
                                    >
                                        <div
                                            class="pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/6 to-(--secondary-color,_transparent)/8 opacity-50 dark:from-white/5 dark:to-transparent"
                                            aria-hidden="true"
                                        ></div>
                                        <span class="relative z-10">{platform.name}</span>
                                        <Tooltip.Arrow
                                            class="text-greyscale-300 dark:text-greyscale-600"
                                        />
                                    </Tooltip.Content>
                                </div>
                            </Tooltip.Root>
                        {/each}
                    </Tooltip.Provider>
                </div>
            {/each}
        </div>
    </div>
</div>
