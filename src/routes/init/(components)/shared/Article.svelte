<script lang="ts">
    type $$Props = {
        url: string;
        illustration?: string;
        mobileIllustration?: string;
        title: string;
        label?: string;
    };

    export let url: $$Props['url'];
    export let illustration: $$Props['illustration'] = '';
    export let mobileIllustration: $$Props['mobileIllustration'] = '';
    export let title: $$Props['title'];
    export let label: $$Props['label'] = 'Read article';
</script>

<a href={url} class="web-card is-normal has-border-gradient overflow-hidden" style:padding="0">
    <div style:padding="1.25rem">
        <h3 class="text-label text-primary" style="max-width: 18.75rem;text-wrap:pretty;">
            {title}
        </h3>
        <div class="web-card-link flex items-center" style:margin-top="8px">
            <span class="text">{label}</span>
            <span class="web-icon-arrow-right"></span>
        </div>
    </div>

    {#if illustration}
        <div style:position="absolute" style:max-width="75%" style:height="100%" style:right="0">
            <img
                src={illustration}
                alt="{title} illustration"
                class="illustration"
                class:web-is-only-desktop={mobileIllustration}
            />
        </div>
    {/if}
    {#if mobileIllustration}
        <img
            src={mobileIllustration}
            alt="{title} illustration "
            class="illustration web-is-only-mobile"
        />
    {/if}
</a>

<style lang="scss">
    .web-card {
        display: flex;
        justify-content: space-between;
        height: 100%;
        gap: 32px;
        background-color: hsl(var(--web-color-subtle));

        &:hover {
            background-color: hsl(var(--web-color-greyscale-800));
        }

        h3 {
            text-wrap: pretty;
        }

        .illustration {
            object-fit: cover;
            height: 100%;

            @media screen and (max-width: 768px) {
                max-height: 150px;
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            max-height: 375px;
        }
    }
</style>
