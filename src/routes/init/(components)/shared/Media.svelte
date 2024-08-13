<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    type $$Props = {
        url?: string;
        title: string;
        label?: string;
    };

    export let url: $$Props['url'] = '';
    export let title: $$Props['title'];
    export let label: $$Props['label'] = 'View';
</script>

{#if url}
    <a
        href={url}
        class="web-card is-normal has-border-gradient u-overflow-hidden"
        style="padding: 0.5rem;"
    >
        <div class="details" style="padding: 0.75rem;">
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
{:else}
    <div
        class="web-card is-normal has-border-gradient u-overflow-hidden"
        style="padding: 0.5rem;height:100%;"
    >
        <div class="details" style="padding: 0.75rem;">
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
    </div>
{/if}

<style lang="scss">
    .web-card {
        height: 100%;
        background-color: hsl(var(--web-color-subtle));
        gap: 48px;
        justify-content: center;

        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 1fr;
        }

        .details {
            grid-column: span 5;
        }

        .slot-wrapper {
            grid-column: span 7;
            border-radius: 12px;
            overflow: hidden;
            height: 100%;

            :global(img) {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>
