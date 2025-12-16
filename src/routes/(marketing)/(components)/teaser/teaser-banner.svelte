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
        class="banner-container group relative mx-auto flex cursor-pointer items-center bg-black px-4 py-3 sm:px-6 sm:py-4 md:h-[76px] md:px-0"
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
        <div
            class="relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-1 [max-inline-size:108rem] sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:gap-[1rem]"
        >
            <!-- Top Line: Introducing + Logo + Imagine -->
            <div
                class="flex flex-shrink-0 items-center justify-center gap-2 sm:justify-start sm:gap-3 md:basis-1/2 md:gap-4"
            >
                <span class="banner-text banner-text-introducing">{leftText}</span>
                <!-- Imagine Logo -->
                <div class="logo-container">
                    <img src="/images/logos/Imagine.png" alt="Imagine" class="h-auto w-auto" />
                </div>
            </div>

            <!-- Bottom Line: Build something real + Arrow -->
            <div
                class="flex items-center justify-center gap-1.5 sm:mr-0 sm:ml-auto sm:gap-2 sm:text-right"
            >
                <span class="banner-text banner-text-right">{rightText}</span>
                <svg
                    class="h-4 w-4 flex-shrink-0 transition group-hover:-translate-x-0.5 sm:h-5 sm:w-5"
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
    .banner-container {
        width: 360px;
        height: 110px;
    }

    @media (min-width: 640px) {
        .banner-container {
            width: 100%;
            height: auto;
        }
    }

    .banner-text {
        font-family: 'Neue Haas Grotesk Display Pro', Inter, sans-serif;
        letter-spacing: -0.1px;
    }

    .banner-text-introducing {
        font-family: 'Neue Haas Grotesk Display Pro', Inter, sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 450;
        line-height: 106%;
        letter-spacing: -0.2px;
        background: linear-gradient(180deg, #fafafb 0%, #828282 111.47%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
    }

    @media (min-width: 640px) {
        .banner-text-introducing {
            font-size: 18px;
        }
    }

    @media (min-width: 768px) {
        .banner-text-introducing {
            font-size: 20px;
        }
    }

    .banner-text-right {
        color: var(--primary, #e4e4e7);
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.072px;
        white-space: nowrap;
    }

    @media (min-width: 640px) {
        .banner-text-right {
            font-size: 15px;
            line-height: 20px;
        }
    }

    @media (min-width: 768px) {
        .banner-text-right {
            font-size: 16px;
            line-height: 22px;
        }
    }

    .logo-container {
        display: flex;
        width: 143.384px;
        height: 35.785px;
        padding: 1.348px 0.634px 1.348px 0;
        justify-content: center;
        align-items: flex-end;
        gap: 10.75px;
        flex-shrink: 0;
    }

    @media (min-width: 640px) {
        .logo-container {
            width: 120px;
            height: 30px;
        }
    }

    @media (min-width: 768px) {
        .logo-container {
            width: 143.384px;
            height: 35.785px;
        }
    }
</style>
