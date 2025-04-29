<script lang="ts">
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
        class="web-card is-normal has-border-gradient overflow-hidden"
        style="padding: 0.5rem;"
    >
        <div class="details" style="padding: 0.75rem;">
            <h3 class="text-label text-primary">
                {title}
            </h3>
            <div class="web-card-link flex items-center" style:margin-top="8px">
                <span class="text">{label}</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </div>
        <div class="slot-wrapper">
            <slot />
        </div>
    </a>
{:else}
    <div class="web-card is-normal has-border-gradient overflow-hidden" style="padding: 0.5rem;">
        <div class="details" style="padding: 0.75rem;">
            <h3 class="text-label text-primary">
                {title}
            </h3>
            <div class="web-card-link flex items-center">
                <span class="text">{label}</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </div>
        <div class="slot-wrapper">
            <slot />
        </div>
    </div>
{/if}

<style lang="scss">
    .web-card {
        background-color: hsl(var(--web-color-subtle));
        display: flex;
        justify-content: space-between;
        height: 100%;
        gap: 16px;

        &:hover {
            background-color: hsl(var(--web-color-greyscale-800));
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        .details {
            flex-basis: 40%;
        }

        .slot-wrapper {
            flex-basis: 60%;
            border-radius: 12px;
            overflow: hidden;

            :global(img) {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
    }
</style>
