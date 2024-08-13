<script lang="ts">
    type $$Props = {
        url: string;
        illustration?: string;
        title: string;
        label?: string;
    };

    export let url: $$Props['url'];
    export let illustration: $$Props['illustration'] = undefined;
    export let title: $$Props['title'];
    export let label: $$Props['label'] = 'Read article';
</script>

<a href={url} class="web-card is-normal has-border-gradient u-overflow-hidden" style:padding="0">
    <div style:padding="1.25rem">
        <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem;">
            {title}
        </h3>
        <div class="web-card-link u-flex u-cross-center">
            <span class="text">{label}</span>
            <span class="web-icon-arrow-right" />
        </div>
    </div>
    {#if illustration}
        <img src={illustration} alt="{title} illustration" class="illustration" />
    {/if}
</a>

<style lang="scss">
    .web-card {
        display: flex;
        justify-content: space-between;
        height: 100%;
        background-color: hsl(var(--web-color-subtle));

        .illustration {
            max-width: 50%;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
</style>
