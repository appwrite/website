<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import type { IconType } from '$lib/components/ui/icon/types';

    type Props = {
        title: string;
        href: string;
        icon?: Extract<IconType, 'mongo' | 'sparkle'> | 'claude' | 'presences' | 'init';
        class?: string;
    };

    const { title, href, icon = 'sparkle' }: Props = $props();
</script>

<a
    {href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    class="web-hero-banner-button relative mb-4 flex items-center!"
>
    {#if icon === 'mongo'}
        <span class="mongo-icon-badge shrink-0" aria-hidden="true">
            <Icon name="mongo" style="width: 0.75rem; height: 1.125rem;" />
        </span>
    {:else if icon === 'claude'}
        <span class="claude-icon-badge shrink-0" aria-hidden="true">
            <img
                src="/images/docs/mcp/logos/dark/claude.svg"
                alt=""
                width="14"
                height="14"
                class="claude-icon-badge-img"
            />
        </span>
    {:else if icon === 'presences'}
        <span class="icon-status-online presences-icon-glyph shrink-0" aria-hidden="true"></span>
    {:else if icon === 'init'}
        <svg
            class="init-icon-wordmark shrink-0"
            viewBox="-1 -82.4 185 92.4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M19.4 -62.6Q15.4 -62.6 12.9 -65.05Q10.4 -67.5 10.4 -71.3Q10.4 -75.6 13.4 -78.5Q16.4 -81.4 20.7 -81.4Q24.7 -81.4 27.2 -78.95Q29.7 -76.5 29.7 -72.7Q29.7 -68.4 26.7 -65.5Q23.7 -62.6 19.4 -62.6ZM0 -7.2 9.1 -58.8H26.5L17.4 -7.2Z"
            />
            <path
                fill="currentColor"
                transform="translate(24 0)"
                d="M39.3 -59.4Q46.9 -59.4 52.3 -55.15Q57.7 -50.9 57.7 -41.4Q57.7 -38 57 -34.2L52.2 -7.2H34.9L39.7 -34.3Q40.2 -37.3 40.2 -39.1Q40.2 -45.6 33.2 -45.6Q24.1 -45.6 21.9 -33.3L17.3 -7.2H0L9.1 -58.8H24.2L24.4 -53.3Q30.8 -59.4 39.3 -59.4Z"
            />
            <path
                fill="currentColor"
                transform="translate(82 0)"
                d="M19.4 -62.6Q15.4 -62.6 12.9 -65.05Q10.4 -67.5 10.4 -71.3Q10.4 -75.6 13.4 -78.5Q16.4 -81.4 20.7 -81.4Q24.7 -81.4 27.2 -78.95Q29.7 -76.5 29.7 -72.7Q29.7 -68.4 26.7 -65.5Q23.7 -62.6 19.4 -62.6ZM0 -7.2 9.1 -58.8H26.5L17.4 -7.2Z"
            />
            <path
                fill="currentColor"
                transform="translate(106 0)"
                d="M6.3 -23.3 10.1 -44.5H2L4.5 -58.8H12.6L15.2 -73.3H32.5L29.9 -58.8H41L38.5 -44.5H27.4L24.1 -26.2Q23.9 -25 23.9 -24.2Q23.9 -21.5 27.5 -21.5H34.4L31.9 -7.2H20.5Q13.6 -7.2 9.75 -10.3Q5.9 -13.4 5.9 -19.4Q5.9 -20.5 6.3 -23.3Z"
            />
            <path fill="#FD366E" transform="translate(141.7 0)" d="M38.5 9H-2.9L-0.1 -6.6H41.3Z" />
        </svg>
    {:else}
        <Icon name="sparkle" class="shrink-0" aria-hidden="true" />
    {/if}
    <div class="web-hero-banner-button-sep"></div>
    <span class="text-caption web-u-trim-1">{title}</span>
    <Icon name="arrow-right" class="shrink-0" aria-hidden="true" />
</a>

<style>
    .mongo-icon-badge {
        width: 1.375rem;
        height: 1.375rem;
        padding: 0.0625rem;
        border-radius: 9999px;
        background-color: #001e2b;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .claude-icon-badge {
        width: 1.375rem;
        height: 1.375rem;
        padding: 0.125rem;
        border-radius: 9999px;
        background-color: hsl(20 45% 12%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .claude-icon-badge-img {
        display: block;
        width: 0.875rem;
        height: 0.875rem;
    }

    .presences-icon-glyph {
        color: #fd366e;
        font-size: 1rem;
        line-height: 1;
    }

    .init-icon-wordmark {
        height: 0.875rem;
        width: auto;
        display: block;
    }
</style>
