<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import Python from '../(assets)/icons/python.svg';
    import Node from '../(assets)/icons/node.svg';
    import Javascript from '../(assets)/icons/javascript.svg';
    import Flutter from '../(assets)/icons/flutter.svg';
    import Kotlin from '../(assets)/icons/kotlin.svg';
    import Apple from '../(assets)/icons/apple.svg';
    import AppleLight from '../(assets)/icons/light/apple.svg';
    import Android from '../(assets)/icons/android.svg';
    import Dart from '../(assets)/icons/dart.svg';
    import Php from '../(assets)/icons/php.svg';
    import Ruby from '../(assets)/icons/ruby.svg';
    import Deno from '../(assets)/icons/deno.svg';
    import DenoLight from '../(assets)/icons/light/deno.svg';
    import Swift from '../(assets)/icons/swift.svg';
    import Net from '../(assets)/icons/net.svg';
    import Go from '../(assets)/icons/go.svg';
    import GoLight from '../(assets)/icons/light/go.svg';
    import React from '../(assets)/icons/react.svg';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import { trackEvent } from '$lib/actions/analytics';
    import { themeInUse } from '$routes/+layout.svelte';

    const platforms = [
        {
            name: 'JS',
            dark: Javascript,
            href: '/docs/quick-starts/web',
            primary: '#FFCA28'
        },
        {
            name: 'Flutter',
            dark: Flutter,
            href: '/docs/quick-starts/flutter',
            primary: '#00569E',
            secondary: '#47C5FB'
        },
        { name: 'Node.js', dark: Node, href: '/docs/quick-starts/node', primary: '#8CC84B' },
        {
            name: 'Python',
            dark: Python,
            href: '/docs/quick-starts/python',
            primary: '#F9C600',
            secondary: '#327EBD'
        },
        {
            name: 'iOS',
            dark: Apple,
            light: AppleLight,
            href: '/docs/quick-starts/apple',
            primary: '#fff'
        },
        { name: 'Android', dark: Android, href: '/docs/quick-starts/android', primary: '#3DDC84' },
        {
            name: 'Dart',
            dark: Dart,
            href: '/docs/quick-starts/dart',
            primary: '#01579B',
            secondary: '#29B6F6'
        },
        { name: 'PHP', dark: Php, href: '/docs/quick-starts/php', primary: '#8892BF' },
        {
            name: 'Ruby',
            dark: Ruby,
            href: '/docs/quick-starts/ruby',
            primary: '#791C12',
            secondary: '#9E120B'
        },
        {
            name: 'Deno',
            dark: Deno,
            light: DenoLight,
            href: '/docs/quick-starts/deno',
            primary: '#fff'
        },
        { name: '.NET', dark: Net, href: '/docs/quick-starts/dotnet', primary: '#512BD4' },
        { name: 'Go', dark: Go, light: GoLight, href: '/docs/quick-starts/go', primary: '#fff' },
        {
            name: 'Swift',
            dark: Swift,
            href: '/docs/quick-starts/swift',
            primary: '#F88A36',
            secondary: '#FD2020'
        },
        { name: 'React', dark: React, href: '/docs/quick-starts/react', primary: '#53C1DE' },
        {
            name: 'Kotlin',
            dark: Kotlin,
            href: '/docs/quick-starts/kotlin',
            primary: '#6D74E1',
            secondary: '#E1725C'
        }
    ];

    interface PlatformsProps {
        class?: string;
        headline?: string;
    }

    const { headline, class: className }: PlatformsProps = $props();
</script>

<div class={cn('border-smooth relative z-10 border-y border-dashed', className)}>
    <div class="container flex flex-col items-center md:flex-row">
        {#if headline}
            <GradientText>
                <span class="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px]"
                    >{headline}</span
                >
            </GradientText>
        {/if}

        <div
            class={cn(
                'flex w-full flex-nowrap overflow-clip md:overflow-visible',
                'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl md:mask-none'
            )}
        >
            {#each [1, 2] as _, i}
                <div
                    class={cn(
                        'divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]',
                        {
                            'md:hidden': i === 0
                        }
                    )}
                >
                    <Tooltip.Provider delayDuration={0} disableCloseOnTriggerClick>
                        {#each platforms as platform, i}
                            <Tooltip.Root>
                                <div
                                    class="contents"
                                    style="--primary-color:{platform.primary};--secondary-color:{platform.secondary};--animation-delay:{i *
                                        25}ms"
                                >
                                    <Tooltip.Trigger
                                        class={cn(
                                            'border-smooth group animate-fade-in /mt-4 relative flex h-16 w-16 items-center justify-center border-dashed md:mt-0 md:w-full lg:border-r',
                                            {
                                                'lg:border-l': i === 0
                                            }
                                        )}
                                        aria-hidden={i < platforms.length - 1}
                                    >
                                        <a
                                            href={platform.href}
                                            class="contents"
                                            onclick={() =>
                                                trackEvent(
                                                    `technologies-${platform.name.replace(' ', '-').toLowerCase()}-click`
                                                )}
                                        >
                                            <img
                                                src={$themeInUse === 'light' && platform.light
                                                    ? platform.light
                                                    : platform.dark}
                                                alt={platform.name}
                                                class={cn(
                                                    'h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0'
                                                )}
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
                                        </a>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            sideOffset={8}
                                            side="top"
                                            class={cn(
                                                'text-primary dark:bg-greyscale-900 relative rounded-md border-0! bg-[#EDEDF0] px-2.5 py-1 text-sm',
                                                'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                            )}
                                            >{platform.name}
                                            <div
                                                class="absolute inset-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/4 to-(--secondary-color,_transparent)/10"
                                            ></div>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </div>
                            </Tooltip.Root>
                        {/each}
                    </Tooltip.Provider>
                </div>
            {/each}
        </div>
    </div>
</div>
