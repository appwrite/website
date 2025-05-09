<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Python from '../(assets)/icons/python.svg';
    import Node from '../(assets)/icons/node.svg';
    import Javascript from '../(assets)/icons/javascript.svg';
    import Flutter from '../(assets)/icons/flutter.svg';
    import Kotlin from '../(assets)/icons/kotlin.svg';
    import Apple from '../(assets)/icons/apple.svg';
    import Android from '../(assets)/icons/android.svg';
    import Dart from '../(assets)/icons/dart.svg';
    import Php from '../(assets)/icons/php.svg';
    import Ruby from '../(assets)/icons/ruby.svg';
    import Deno from '../(assets)/icons/deno.svg';
    import Swift from '../(assets)/icons/swift.svg';
    import Net from '../(assets)/icons/net.svg';
    import Go from '../(assets)/icons/go.svg';
    import React from '../(assets)/icons/react.svg';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';

    const platforms = [
        {
            name: 'JS',
            icon: Javascript,
            href: '/quickstarts/javascript',
            primary: '#FFCA28'
        },
        {
            name: 'Flutter',
            icon: Flutter,
            href: '/quickstarts/flutter',
            primary: '#00569E',
            secondary: '#47C5FB'
        },
        { name: 'Node.js', icon: Node, href: '/quickstarts/node', primary: '#8CC84B' },
        {
            name: 'Python',
            icon: Python,
            href: '/quickstarts/python',
            primary: '#F9C600',
            secondary: '#327EBD'
        },
        { name: 'iOS', icon: Apple, href: '/quickstarts/ios', primary: '#fff' },
        { name: 'Android', icon: Android, href: '/quickstarts/android', primary: '#3DDC84' },
        {
            name: 'Dart',
            icon: Dart,
            href: '/quickstarts/dart',
            primary: '#01579B',
            secondary: '#29B6F6'
        },
        { name: 'PHP', icon: Php, href: '/quickstarts/php', primary: '#8892BF' },
        {
            name: 'Ruby',
            icon: Ruby,
            href: '/quickstarts/ruby',
            primary: '#791C12',
            secondary: '#9E120B'
        },
        { name: 'Deno', icon: Deno, href: '/quickstarts/deno', primary: '#fff' },
        { name: '.NET', icon: Net, href: '/quickstarts/dotnet', primary: '#512BD4' },
        { name: 'Go', icon: Go, href: '/quickstarts/go', primary: '#fff' },
        {
            name: 'Swift',
            icon: Swift,
            href: '/quickstarts/swift',
            primary: '#F88A36',
            secondary: '#FD2020'
        },
        { name: 'React', icon: React, href: '/quickstarts/react', primary: '#53C1DE' },
        {
            name: 'Kotlin',
            icon: Kotlin,
            href: '/quickstarts/kotlin',
            primary: '#6D74E1',
            secondary: '#E1725C'
        }
    ];
</script>

<div class="border-smooth relative z-10 border-y border-dashed">
    <div class="container flex flex-col items-center max-md:pt-4 md:flex-row">
        <GradientText>
            <span class="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px]"
                >Supporting the tools you work with</span
            >
        </GradientText>
        <div
            class={classNames(
                'w-full overflow-clip md:overflow-visible',
                'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl md:mask-none'
            )}
        >
            <div
                class="divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]"
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
                                    class={classNames(
                                        'border-smooth group animate-fade-in relative mt-4 flex h-16 w-16 items-center justify-center border-dashed md:mt-0 md:w-full lg:border-r',
                                        {
                                            'lg:border-l': i === 0
                                        }
                                    )}
                                    aria-hidden={i < platforms.length - 1}
                                >
                                    <img
                                        src={platform.icon}
                                        alt={platform.name}
                                        class="h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0"
                                    />

                                    <div
                                        class={classNames(
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
                                    class={classNames(
                                        'text-primary bg-greyscale-900 relative rounded-md border-0! px-2.5 py-1 text-sm',
                                        'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in'
                                    )}
                                    >{platform.name}
                                    <div
                                        class="absolute inset-0 rounded-md bg-gradient-to-tl from-(--primary-color,_#fff)/4 to-(--secondary-color,_transparent)/10"
                                    ></div>
                                    <Tooltip.Arrow class="text-(--primary-color)/4" />
                                </Tooltip.Content>
                            </div>
                        </Tooltip.Root>
                    {/each}
                </Tooltip.Provider>
            </div>
        </div>
    </div>
</div>
