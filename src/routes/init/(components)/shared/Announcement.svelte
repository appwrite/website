<script lang="ts">
    type $$Props = {
        url: string;
        title: string;
        description: string;
    };

    export let url: $$Props['url'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
</script>

<a href={url} class="web-card is-normal has-border-gradient" style:padding="0">
    <div style:padding="1.25rem" style:padding-block-end="0" style:max-width="32rem">
        <h3 class="text-label text-primary">{title}</h3>
        <p style:margin-block-start="0.625rem">
            {description}
        </p>
        <div
            class="web-card-link flex items-center"
            style:margin-block-start="1.25rem"
            style:color="#fff"
        >
            <span class="text">Announcement</span>
            <span class="web-icon-arrow-right"></span>
        </div>
    </div>
    <div class="illustration">
        <slot />
    </div>
</a>

<style lang="scss">
    .web-card {
        display: flex;
        flex-direction: column;
        background-color: hsl(var(--web-color-subtle));
        background-image: linear-gradient(
            150deg,
            hsl(var(--web-color-subtle)) 0%,
            hsl(var(--web-color-subtle)) 30%,
            rgba(255, 255, 255, 0.02) 50%,
            hsl(var(--web-color-subtle)) 70%,
            hsl(var(--web-color-subtle)) 100%
        );
        backdrop-filter: blur(2px);
        height: 100%;
        overflow: hidden;

        &:hover {
            background-color: hsl(var(--web-color-greyscale-800));
        }

        .illustration {
            z-index: 0;
            margin: auto 0 0 auto;

            :global(img) {
                height: 100%;
                display: block;
            }
        }

        p {
            text-wrap: pretty;
        }
    }
</style>
