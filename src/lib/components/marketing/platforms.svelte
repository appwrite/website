<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Node from './(assets)/icons/node.svg';
    import Javascript from './(assets)/icons/javascript.svg';
    import Flutter from './(assets)/icons/flutter.svg';
    import Nextjs from './(assets)/icons/nextjs.svg';
    import Svelte from './(assets)/icons/svelte.svg';
    import Remix from './(assets)/icons/remix.svg';
    import Lynx from './(assets)/icons/lynx.svg';
    import Astro from './(assets)/icons/astro.svg';
    import Vue from './(assets)/icons/vue.svg';
    import Deno from './(assets)/icons/deno.svg';
    import Angular from './(assets)/icons/angular.svg';
    import Nuxt from './(assets)/icons/nuxt.svg';
    import Vite from './(assets)/icons/vite.svg';
    import ReactNative from './(assets)/icons/react-native.svg';
    import React from './(assets)/icons/react.svg';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';
    import { Tooltip } from 'bits-ui';
    import type { SvelteHTMLElements } from 'svelte/elements';

    const platforms = [
        {
            name: 'JS',
            icon: Javascript,
            primary: '#FFCA28'
        },
        {
            name: 'Flutter',
            icon: Flutter,
            primary: '#00569E',
            secondary: '#47C5FB'
        },
        { name: 'Node.js', icon: Node, primary: '#8CC84B' },
        {
            name: 'React Native',
            icon: ReactNative,
            primary: '#53C1DE'
        },
        { name: 'Next.js', icon: Nextjs, primary: '#000000' },
        { name: 'Astro', icon: Astro, primary: '#ffffff' },
        {
            name: 'Vite',
            icon: Vite,
            primary: '#BD34FE'
        },
        { name: 'Svelte', icon: Svelte, primary: '#fc5732' },
        {
            name: 'Remix',
            icon: Remix,
            primary: '#ffffff'
        },
        { name: 'Deno', icon: Deno, primary: '#fff' },
        { name: 'Vue', icon: Vue, primary: '#41B883', secondary: '#35495E' },
        { name: 'Angular', icon: Angular, primary: '#C3002F' },
        {
            name: 'Nuxt',
            icon: Nuxt,
            primary: '#00DC82'
        },
        { name: 'React', icon: React, primary: '#53C1DE' },
        {
            name: 'Lynx',
            icon: Lynx,
            primary: '#78D9EA'
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

<div class={classNames('border-smooth relative z-10 border-y border-dashed', className)} {...rest}>
    <div class="container flex flex-col items-center max-md:pt-4 md:flex-row">
        <GradientText>
            <span class="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px]"
                >{headline}</span
            >
        </GradientText>
        <div
            class={classNames(
                'flex w-full flex-nowrap overflow-clip md:overflow-visible',
                'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl md:mask-none'
            )}
        >
            {#each [1, 2] as _, i}
                <div
                    class={classNames(
                        'divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]',
                        {
                            'md:hidden': i === 1
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
                                            'text-primary bg-greyscale-900 relative hidden rounded-md border-0! px-2.5 py-1 text-sm md:block',
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
            {/each}
        </div>
    </div>
</div>
