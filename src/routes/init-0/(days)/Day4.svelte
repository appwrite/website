<script lang="ts">
    import { Animations } from '../(animations)';
    import illustration from '../(assets)/operators.png';
    import thumbnail from '../(assets)/thumbnail-db.png';
    import thumbnailProduct from '../(assets)/thumbnail-db-product.png';
    import thumbnailEvent from '../(assets)/thumbnail-db-event.png';
    import VideoWrapper from '../(components)/VideoWrapper.svelte';

    import Day from './Day.svelte';
    import Video from '../(components)/Video.svelte';

    export let release: Date;
    export let date: string;
</script>

<Day day={date} {release}>
    <div class="mosaic">
        <a
            href="blog/post/introducing-new-database-operators"
            class="web-card is-normal has-border-gradient"
            style:padding="0"
        >
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="text-label text-primary">Database operators</h3>
                <p style:margin-block-start="0.625rem">
                    Announcing a new set of query methods, array contains, string contains, and OR
                    operators.
                </p>
                <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
                <img src={illustration} alt="" />
                <div class="circle"></div>
            </div>
        </a>
        <div
            class="web-card is-normal has-border-gradient"
            style="padding: 0.5rem; --p-aspect-ratio: 0;"
        >
            <Video
                src="https://www.youtube-nocookie.com/embed/73flN6mZqAs?si=3hUI26G9DDVDzJG4&amp;controls=0"
                {thumbnail}
            />
        </div>

        <a
            href="https://discord.com/events/564160730845151244/1209117457294295121"
            target="_blank"
            rel="noopener noreferrer"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 0.5rem; display: flex; justify-content: space-between; "
        >
            <div style="padding: 0.75rem;">
                <h3 class="text-label text-primary" style="max-width: 300px">Event: Logic</h3>
                <div class="web-card-link u-flex u-cross-center">
                    <span class="text">Join</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img
                src={thumbnailEvent}
                alt=""
                style="aspect-ratio: 268 / 208; border-radius: 0.75rem; object-fit: cover;"
            />
        </a>

        <a
            href="/blog/post/understand-data-queries"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 20px"
        >
            <h3 class="text-label text-primary" style="max-width: 11.25rem">
                Understanding Data Queries
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Article</span>
                <span class="web-icon-arrow-right"></span>
            </div>
            <div>
                <Animations.Operators />
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
                    src="https://www.youtube-nocookie.com/embed/IMgl9f_iht4?si=2tpXRe_WXN7-3YzU&amp;controls=0"
                    thumbnail={thumbnailProduct}
                    --p-aspect-ratio="16/9"
                    --p-border-radius="0.75rem"
                />
            </button>
        </VideoWrapper>
        <a
            href="/docs/products/databases/queries"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">Documentation</h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </a>
    </div>
</Day>

<style lang="scss">
    p {
        text-wrap: balance;
    }

    .mosaic {
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(2, 224px) 126px 60px;
        gap: 2rem;

        min-height: 660px;

        > :nth-child(1) {
            grid-column: 1 / 15;
            grid-row: 1 / 3;

            position: relative;
            overflow: hidden;

            img {
                display: block;
                margin-block-start: 1rem;
                position: relative;
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
            grid-column: 15 / 25;
            grid-row: 1 / 2;
        }

        > :nth-child(3) {
            grid-column: 15 / 25;
            grid-row: 2 / 3;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
                // gap: 1rem;
            }
        }

        > :nth-child(4) {
            grid-column: 1 / 10;
            grid-row: 3 / 4;

            > div:last-child {
                position: absolute;
                inset-block-start: 0rem;
                inset-inline-end: -14rem;
                transform: scale(0.75);
            }

            @media screen and (max-width: 1023px) {
                height: 280px;

                > div:last-child {
                    transform: scale(1);
                    inset-block-start: unset;
                    inset-block-end: 1rem;
                    inset-inline-start: 2rem;
                    inset-inline-end: unset;
                }
            }
        }

        > :nth-child(5) {
            grid-column: 10 / 19;
            grid-row: 3 / 4;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
                // gap: 1rem;
            }
        }

        > :nth-child(6) {
            grid-column: 19 / 25;
            grid-row: 3 / 4;
        }
        > :nth-child(7) {
            grid-column: 1 / 25;
            grid-row: 4 / 5;
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
