<script lang="ts">
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';

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
