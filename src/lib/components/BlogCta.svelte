<script lang="ts">
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    let {
        heading = 'Start building with Appwrite today',
        label = 'Get started',
        description = undefined,
        href = getAppwriteDashboardUrl(),
        event = 'blog-cta-get_started_btn-click'
    }: {
        heading?: string;
        label?: string;
        description?: string;
        href?: string;
        event?: string;
    } = $props();
</script>

<div
    class="bg relative mt-12 -mb-6 overflow-hidden border-t border-[hsl(var(--web-color-subtle))] py-10 md:py-12"
>
    <div class="container">
        <div class="not-prose flex flex-col items-center gap-6 text-center md:gap-8">
            <div class="w-full max-w-5xl">
                <h2 class="text-title font-aeonik-pro text-primary text-pretty">{heading}</h2>
                {#if description}
                    <p class="text-main-body text-secondary mt-3 text-pretty md:mt-4">
                        {description}
                    </p>
                {/if}
            </div>
            <div class="flex w-full justify-center">
                <Button {href} {event} class={cn('blog-footer-promo__btn')}>{label}</Button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .bg {
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            height: 170%;
            z-index: -1;
            background-image: radial-gradient(
                ellipse at center,
                rgba(253, 54, 110, 0.09),
                transparent 85%
            );
        }
    }

    /* Match inline blog promo: visible focus + hover on dark pink wash */
    :global(a.web-button.blog-footer-promo__btn:focus-visible) {
        outline: 2px solid rgb(255 255 255);
        outline-offset: 3px;
    }

    :global(a.web-button.blog-footer-promo__btn:hover) {
        filter: brightness(1.12);
        box-shadow: 0 0 0 1px rgb(255 255 255 / 0.45);
    }

    :global(a.web-button.blog-footer-promo__btn:active) {
        filter: brightness(0.96);
    }
</style>
