<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import Icon from './ui/icon/icon.svelte';

    interface Props {
        href: string;
        title: string;
        duration?: string; // Duration in time format like "1:20" or "1:05:30"
        class?: string;
    }

    const { href, title, duration, class: className = '' }: Props = $props();
</script>

<a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class={cn(
        'video-card no-underline',
        'bg-white/90 dark:bg-white/[0.04]',
        'border-black/8 dark:border-white/[0.06]',
        'hover:bg-white/95 dark:hover:bg-white/[0.06]',
        className
    )}
>
    <div class="video-card-desktop">
        <div
            class="video-tutorial-label bg-greyscale-200 flex shrink-0 items-center gap-1.5 rounded-md px-2 py-0.5 dark:bg-[rgb(51,51,51)]"
        >
            <Icon
                name="play"
                class="video-tutorial-icon text-greyscale-900 dark:text-greyscale-100 h-5 w-5 shrink-0"
            />
            <span class="text-greyscale-900 dark:text-greyscale-100 whitespace-nowrap"
                >Video tutorial</span
            >
        </div>

        <!-- Main title -->
        <span class="video-card-title text-greyscale-900 dark:text-greyscale-100 flex-1">
            {title}
            {#if duration}
                <span class="video-card-duration-separator"> · </span>
                <span class="video-card-duration">{duration}</span>
            {/if}
        </span>

        <Icon
            name="ext-link"
            class={cn(
                'video-card-ext-link h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                'text-greyscale-900 dark:text-greyscale-100'
            )}
        />
    </div>

    <div class="video-card-mobile">
        <div class="video-card-header">
            <!-- video label  -->
            <div
                class="video-tutorial-label bg-greyscale-200 flex shrink-0 items-center gap-1.5 rounded-md px-2 py-0.5 dark:bg-[rgb(51,51,51)]"
            >
                <Icon
                    name="play"
                    class="video-tutorial-icon text-greyscale-900 dark:text-greyscale-100 h-5 w-5 shrink-0"
                />
                <span class="text-greyscale-900 dark:text-greyscale-100 whitespace-nowrap"
                    >Video tutorial</span
                >
            </div>

            <Icon
                name="ext-link"
                class={cn(
                    'video-card-ext-link h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                    'text-greyscale-900 dark:text-greyscale-100'
                )}
            />
        </div>

        <span class="video-card-title text-greyscale-900 dark:text-greyscale-100 flex-1">
            {title}
            {#if duration}
                <span class="video-card-duration-separator"> · </span>
                <span class="video-card-duration">{duration}</span>
            {/if}
        </span>
    </div>
</a>

<style>
    .video-card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        backdrop-filter: blur(7.5px);
        transition: background-color 0.2s;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
    }

    .video-card-desktop {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
    }

    .video-card-mobile {
        display: none;
    }

    .video-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 12px;
    }

    /* Tablet and below (max-width: 1023.9px) */
    @media (max-width: 1023.9px) {
        .video-card {
            flex-wrap: wrap;
        }
    }

    /* Mobile (max-width: 767.9px) */
    @media (max-width: 767.9px) {
        .video-card {
            width: 100%;
            max-width: 100%;
            padding: 12px;
            align-items: flex-start;
            gap: 12px;
            flex-direction: column;
        }

        .video-card-desktop {
            display: none;
        }

        .video-card-mobile {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
        }

        .video-card-header {
            width: 100%;
        }

        .video-card-title {
            width: 100%;
        }
    }

    /* Small mobile (max-width: 375px) */
    @media (max-width: 375px) {
        .video-card {
            padding: 10px;
            gap: 10px;
        }

        .video-card-mobile {
            gap: 10px;
        }
    }

    .video-card-title {
        font-family: var(--font-family-sansSerif, Inter);
        font-size: var(--font-size-small, 16px);
        font-style: normal;
        font-weight: 400;
        line-height: var(--line-height-xs, 22px);
        letter-spacing: -0.072px;
    }

    .video-tutorial-label span,
    .video-card-duration-separator,
    .video-card-duration {
        font-family: var(--font-family-sansSerif, Inter);
        font-size: var(--font-size-tiny, 14px);
        font-style: normal;
        font-weight: 400;
        line-height: var(--line-height-xs, 22px);
        letter-spacing: -0.063px;
    }

    .video-tutorial-label span {
        text-align: center;
    }

    .video-card-duration-separator,
    .video-card-duration {
        color: var(--secondary, var(--color-secondary));
    }
</style>
