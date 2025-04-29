<script lang="ts">
    import Day from './Day.svelte';
    import illustration from '../(assets)/messaging.png';
    import Video from '../(components)/Video.svelte';
    import thumbnail from '../(assets)/thumbnail-messaging.png';
    import thumbnailProduct from '../(assets)/thumbnail-messaging-product.png';
    import twillio from '../(assets)/messaging-1.png';
    import { Animations } from '../(animations)';
    import VideoWrapper from '../(components)/VideoWrapper.svelte';

    export let release: Date;
    export let date: string;
</script>

<Day day={date} {release}>
    <div class="mosaic">
        <a
            href="/blog/post/announcing-appwrite-messaging"
            class="web-card is-normal has-border-gradient"
            style:padding="0"
        >
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="text-label text-primary">Messaging</h3>
                <p style:margin-block-start="0.625rem">
                    Introducing multimedia messaging service to communicate to your users across
                    platforms.
                </p>
                <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img src={illustration} alt="" />
            <div class="circle"></div>
        </a>
        <div
            class="web-card is-normal has-border-gradient"
            style="padding: 0.5rem; --p-aspect-ratio: 0;"
        >
            <Video
                {thumbnail}
                src="https://www.youtube-nocookie.com/embed/w-izHSKXqtU?si=OV30JUel_Zoq10AU&controls=0"
            />
        </div>

        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="text-label text-primary" style="max-width: 18.75rem">
                How tools like Twilio can simplify messaging for developers
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Article</span>
                <span class="web-icon-arrow-right"></span>
            </div>
            <img
                src={twillio}
                alt="Twilio"
                style="position: absolute; inset-block-start: 0; inset-inline-end: -2rem;"
            />
        </a>
        <a
            href="/blog/post/push-notifications-best-practices"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 20px"
        >
            <h3 class="text-label text-primary" style="max-width: 300px">
                Best practices for sending push notifications
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Article</span>
                <span class="web-icon-arrow-right"></span>
            </div>
            <div>
                <Animations.Messaging />
            </div>
        </a>
        <VideoWrapper let:openVideo>
            <button
                on:click={openVideo}
                class="web-card is-normal has-border-gradient u-overflow-hidden"
                style="padding: 0.5rem; display: flex; justify-content: space-between; "
            >
                <div style="padding: 0.75rem;">
                    <h3 class="text-label text-primary" style="max-width: 300px">Product tour</h3>
                    <div class="web-card-link u-flex u-cross-center">
                        <span class="text">Watch</span>
                        <span class="web-icon-arrow-right"></span>
                    </div>
                </div>
                <Video
                    thumbnail={thumbnailProduct}
                    --p-aspect-ratio="16/9"
                    --p-border-radius="0.75rem"
                    src="https://www.youtube-nocookie.com/embed/QdDgPeuBZ1I?si=YDlxtt3nYe_FZnql&controls=0"
                />
            </button>
        </VideoWrapper>

        <a
            href="/docs/products/messaging"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">Documentation</h3>
            <span class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right"></span>
            </span>
        </a>
        <a
            href="/init-0/tickets"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">Win swag</h3>
            <span class="web-card-link u-flex u-cross-center">
                <span class="text">Enter giveaway</span>
                <span class="web-icon-arrow-right"></span>
            </span>
        </a>
        <a
            href="https://discord.com/events/564160730845151244/1209117134417035365"
            target="_blank"
            rel="noreferrer noopener"
            class="web-card is-normal has-border-gradient"
            style="padding: 0.5rem; display: flex; justify-content: space-between; "
        >
            <div style="padding: 0.75rem;">
                <h3 class="text-label text-primary">Event: Welcome to Init</h3>
                <div class="web-card-link u-flex u-cross-center">
                    <span class="text">Join</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img
                src="/images/community/events/init-0.png"
                alt=""
                style="aspect-ratio: 16/9; border-radius: 0.75rem;  object-fit: cover;"
            />
        </a>
    </div>
</Day>

<style lang="scss">
    p {
        text-wrap: balance;
    }

    .mosaic {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(2, 224px) repeat(2, 126px) 60px;
        gap: 2rem;

        min-height: 660px;

        > :nth-child(1) {
            grid-column: 1 / 8;
            grid-row: 1 / 3;

            position: relative;
            overflow: hidden;

            img {
                display: block;
                margin-block-start: 1rem;
                z-index: 10;
            }

            .circle {
                $size: 200px;
                width: $size;
                height: $size;
                background: hsl(var(--web-color-accent));
                filter: blur(200px);

                position: absolute;
                inset-block-end: calc(-1 * $size / 2);
                inset-inline-start: 50%;
                translate: -50%;
                z-index: 1;
            }
        }

        > :nth-child(2) {
            grid-column: 8 / 13;
            grid-row: 1 / 2;
        }

        > :nth-child(3) {
            grid-column: 8 / 13;
            grid-row: 2 / 3;
        }

        > :nth-child(4) {
            grid-column: 1 / 7;
            grid-row: 3 / 4;

            > div:last-child {
                position: absolute;
                inset-block-start: 1.5rem;
                inset-inline-end: -7rem;
            }

            @media screen and (max-width: 1023px) {
                height: 224px;

                > div:last-child {
                    inset-block-start: unset;
                    inset-block-end: 1rem;
                    inset-inline-start: 3rem;
                    inset-inline-end: unset;
                }
            }
        }

        > :nth-child(5) {
            grid-column: 7 / 13;
            grid-row: 3 / 4;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
            }
        }

        > :nth-child(6) {
            grid-column: 1 / 4;
            grid-row: 4 / 5;
        }

        > :nth-child(7) {
            grid-column: 4 / 7;
            grid-row: 4 / 5;
        }

        > :nth-child(8) {
            grid-column: 7 / 13;
            grid-row: 4 / 5;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
            }
        }

        > :nth-child(9) {
            grid-column: 1 / 13;
            grid-row: 5 / 6;
        }

        @media screen and (max-width: 1023px) {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .web-card {
            .web-card-link {
                color: var(--web-color-primary);
            }

            &:hover {
                .web-card-link {
                    color: hsl(var(--web-color-accent-darker));
                }
            }
        }
    }
</style>
