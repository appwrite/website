<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    type $$Props = {
        url: string;
        title: string;
        label?: string;
    };

    export let url: $$Props['url'];
    export let title: $$Props['title'];
    export let label: $$Props['label'] = 'View';
</script>

<a
    href={url}
    class="web-card is-normal has-border-gradient u-overflow-hidden"
    style="padding: 0.5rem; display: flex; justify-content: space-between; "
>
    <div style="padding: 0.75rem;">
        <h3 class="web-label web-u-color-text-primary" style="width: 18.75rem">
            {title}
        </h3>
        <div class="web-card-link u-flex u-cross-center">
            <span class="text">{label}</span>
            <span class="web-icon-arrow-right" />
        </div>
    </div>
    <div class="slot-wrapper">
        <slot />
    </div>
</a>

<style lang="scss">
    .web-card {
        background-color: hsl(var(--web-color-subtle));

        .slot-wrapper {
            overflow: hidden;
            filter: grayscale(1);

            :global(img) {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0.75rem;
                overflow: hidden;
            }
        }
    }
</style>
