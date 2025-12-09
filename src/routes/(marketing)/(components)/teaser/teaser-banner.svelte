<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
    import Imagination from './imagination.svelte';
    import Canvas from './canvas.svelte';

    interface TeaserBannerProps extends HTMLAttributes<HTMLDivElement> {
        class?: string;
        leftText?: string;
        logoText?: string;
        rightText?: string;
        showLabel?: boolean;
    }

    const {
        class: classNames,
        leftText = 'Introducing',
        logoText = 'Imagine',
        rightText = 'Build something real',
        showLabel = true,
        ...restProps
    }: TeaserBannerProps = $props();
</script>

<div class={cn('relative w-full', classNames)} {...restProps}>
    {#if showLabel}
        <!-- Label: Teaser Banner -->
        <div class="absolute -top-8 left-0 z-20 flex items-center gap-2">
            <span class="text-sm font-medium text-blue-400">Teaser Banner</span>
        </div>
        <!-- Code Icon -->
        <div class="absolute -top-8 right-0 z-20">
            <svg
                class="h-4 w-4 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        </div>
    {/if}

    <!-- Main Banner Container -->
    <a
        href="https://imagine.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative mx-auto flex w-full cursor-pointer items-center bg-black py-4 md:h-[76px]"
    >
        <!-- Animated Halftone Background with Left/Right Fade -->
        <div
            class="absolute inset-0"
            style="mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);"
        >
            <Canvas>
                <Imagination />
            </Canvas>
        </div>

        <!-- Content -->
        <div class="relative z-10 mx-auto flex w-full gap-[1rem] [max-inline-size:108rem]">
            <!-- Left Side: Introducing + Logo + Imagine -->
            <div class="flex items-center gap-4 md:basis-1/2">
                <span class="banner-text banner-text-introducing">{leftText}</span>
                <!-- Imagine Logo -->
                <div
                    style="display: flex; width: 143.384px; height: 35.785px; padding: 1.348px 0.634px 1.348px 0; justify-content: center; align-items: flex-end; gap: 10.75px; flex-shrink: 0;"
                >
                    <img src="/images/logos/Imagine.png" alt="Imagine" class="h-auto w-auto" />
                </div>
            </div>

            <!-- Right Side: Build something real + Arrow -->
            <div class="mr-0 ml-auto flex items-center gap-2 text-right">
                <span class="banner-text banner-text-right">{rightText}</span>
                <svg
                    class="h-5 w-5 transition group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </div>
    </a>
</div>

<style>
    .banner-text {
        font-family: 'Neue Haas Grotesk Display Pro', Inter, sans-serif;
        letter-spacing: -0.1px;
    }

    .banner-text-introducing {
        font-size: 20px;
        font-weight: 450;
        line-height: 106%;
        letter-spacing: -0.2px;
        background: linear-gradient(180deg, #fafafb 0%, #828282 111.47%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .banner-text-right {
        color: var(--primary, #e4e4e7);
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.072px;
    }
</style>
