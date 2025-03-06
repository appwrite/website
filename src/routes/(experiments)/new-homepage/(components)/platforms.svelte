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

    const platforms = [
        { name: 'js', icon: Javascript, href: '/quickstarts/javascript', primary: '#FFCA28' },
        {
            name: 'flutter',
            icon: Flutter,
            href: '/quickstarts/flutter',
            primary: '#00569E',
            secondary: '#47C5FB'
        },
        { name: 'node', icon: Node, href: '/quickstarts/node', primary: '#8CC84B' },
        {
            name: 'python',
            icon: Python,
            href: '/quickstarts/python',
            primary: '#F9C600',
            secondary: '#327EBD'
        },
        { name: 'ios', icon: Apple, href: '/quickstarts/ios' },
        { name: 'android', icon: Android, href: '/quickstarts/android', primary: '#3DDC84' },
        {
            name: 'dart',
            icon: Dart,
            href: '/quickstarts/dart',
            primary: '#01579B',
            secondary: '#29B6F6'
        },
        { name: 'php', icon: Php, href: '/quickstarts/php', primary: '#8892BF' },
        {
            name: 'ruby',
            icon: Ruby,
            href: '/quickstarts/ruby',
            primary: '#791C12',
            secondary: '#9E120B'
        },
        { name: 'deno', icon: Deno, href: '/quickstarts/deno', primary: '#fff' },
        { name: '.net', icon: Net, href: '/quickstarts/dotnet', primary: '#512BD4' },
        { name: 'go', icon: Go, href: '/quickstarts/go', primary: '#fff' },
        {
            name: 'swift',
            icon: Swift,
            href: '/quickstarts/swift',
            primary: '#F88A36',
            secondary: '#FD2020'
        },
        { name: 'react', icon: React, href: '/quickstarts/react', primary: '#53C1DE' },
        {
            name: 'kotlin',
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
                'w-full overflow-clip',
                'backdrop-blur-3xl [mask-mode:alpha] max-md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)]'
            )}
        >
            <div
                class="divide-smooth animate-marquee flex w-max flex-1 grow flex-nowrap divide-dashed [animation-duration:80s] md:w-full md:divide-x md:[animation-play-state:paused]"
            >
                {#each Array.from({ length: 2 }) as _}
                    {#each platforms as platform, i}
                        <button
                            class="first-of-type:border-smooth group animate-fade-in last-of-type:border-smooth relative flex h-16 w-16 items-center justify-center first-of-type:border-l first-of-type:border-dashed last-of-type:border-r last-of-type:border-dashed md:w-full"
                            style:--primary-color={platform.primary}
                            style:--secondary-color={platform.secondary}
                            style:animation-delay="{i * 25}ms"
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
                                    'hover:from-[var(--primary-color,_#fff)]/4 hover:to-[var(--secondary-color,_transparent)]/10'
                                )}
                            >
                                <Noise opacity={0.1} />
                            </div>
                        </button>
                    {/each}
                {/each}
            </div>
        </div>
    </div>
</div>
