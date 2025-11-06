<script lang="ts">
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';

    export let heading: string = 'Start building with Appwrite today';
    export let label: string = 'Get started';
    export let description: string | undefined = undefined;
    export let href: string = getAppwriteDashboardUrl();
    export let event: string = 'blog-cta-get_started_btn-click';
</script>

<div
    class="bg relative mt-12 -mb-6 flex min-h-48 items-center justify-center overflow-hidden border-t border-[hsl(var(--web-color-subtle))] py-12"
>
    <div class="flex max-w-3xs flex-col items-center justify-center gap-5 text-center">
        <h2 class="text-label text-primary font-aeonik-pro">{heading}</h2>
        {#if description}
            <p class="text-main-body text-muted-foreground">{description}</p>
        {/if}
        <Button {href} {event}>{label}</Button>
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
</style>
