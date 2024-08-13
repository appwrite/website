<script lang="ts">
    type $$Props = {
        illustration?: string;
        title: string;
        description: string;
    };

    export let illustration: $$Props['illustration'] = undefined;
    export let title: $$Props['title'];
    export let description: $$Props['description'];
</script>

<a
    href="/blog/post/announcing-appwrite-messaging"
    class="web-card is-normal has-border-gradient"
    style:padding="0"
    style:overflow="hidden"
>
    <div style:padding="2rem" style:padding-block-end="0">
        <h3 class="web-label web-u-color-text-primary">{title}</h3>
        <p style:margin-block-start="0.625rem">
            {description}
        </p>
        <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
            <span class="text">Announcement</span>
            <span class="web-icon-arrow-right" />
        </div>
    </div>
    <div class="illustration">
        <img src={illustration} alt="" />
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
            rgba(255, 255, 255, 0.025) 50%,
            hsl(var(--web-color-subtle)) 70%,
            hsl(var(--web-color-subtle)) 100%
        );
        backdrop-filter: blur(2px);

        .illustration {
            position: relative;
            z-index: 0;
            width: 100%;
            height: 100%;

            img {
                width: auto;
                height: 100%;
                margin-bottom: -6px;
            }
        }

        p {
            text-wrap: pretty;
        }
    }
</style>
