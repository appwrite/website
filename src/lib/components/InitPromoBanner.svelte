<script lang="ts">
    import { page } from '$app/state';
    import InitHeroBackground from '$lib/components/init/InitHeroBackground.svelte';
    import InitWordmark from '$lib/components/init/InitWordmark.svelte';
    import { Icon } from '$lib/components/ui';
    import { getInitPromoBannerContent } from '$lib/init/promo-banner';

    const content = getInitPromoBannerContent();
    const hideOnPage = $derived(page.url.pathname.startsWith('/init'));
</script>

{#if content && !hideOnPage}
    <a
        href="/init"
        class="init-promo-banner group block border-b border-[hsl(var(--web-color-border))] no-underline transition-opacity hover:opacity-90"
    >
        <div class="init-promo-banner__inner relative min-h-[56px] overflow-hidden">
            <InitHeroBackground compact active />

            <div
                class="relative z-10 mx-auto flex min-h-[56px] w-full max-w-7xl items-center justify-center gap-2 px-4 py-2.5 sm:gap-3 sm:px-6"
            >
                <InitWordmark
                    class="shrink-0 text-[20px] text-[hsl(var(--web-color-primary))] sm:text-[24px]"
                />
                <span
                    class="hidden min-w-0 truncate text-[13px] text-[hsl(var(--web-color-secondary))] sm:inline"
                >
                    {content.tagline}
                </span>
                {#if content.message}
                    <span
                        class="truncate text-[13px] font-medium text-[hsl(var(--web-color-primary))]"
                    >
                        {content.message}
                    </span>
                {/if}
                <span
                    class="init-promo-banner__cta flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-[hsl(var(--web-color-primary))]"
                >
                    {content.ctaLabel}
                    <Icon
                        name="arrow-right"
                        class="transition group-hover:-translate-x-0.5"
                        aria-hidden="true"
                    />
                </span>
            </div>
        </div>
    </a>
{/if}
