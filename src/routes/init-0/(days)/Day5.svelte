<script lang="ts">
    import illustration from '../(assets)/integrations.png';
    import thumbnail from '../(assets)/thumbnail-runtimes-event.png';
    import Day from './Day.svelte';

    export let release: Date;
    export let date: string;
</script>

<Day day={date} {release}>
    <div class="mosaic">
        <a
            href="/blog/post/announcing-more-and-updated-runtimes"
            class="web-card is-normal has-border-gradient"
            style:padding="0"
        >
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="text-label text-primary">Updated runtimes</h3>
                <p style:margin-block-start="0.625rem">
                    The latest versions of Bun, Dart, Deno, PHP, Ruby, Kotlin, Java, Swift, and Node
                    were added to our Cloud runtime ecosystem.
                </p>
                <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img src={illustration} alt="" />
            <div class="circle"></div>
        </a>
        <a
            href="/docs/products/functions/runtimes#available-runtimes"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">Documentation</h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </a>

        <a
            href="https://discord.com/events/564160730845151244/1209117535723851776"
            rel="noopener noreferrer"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 0.5rem; display: flex; justify-content: space-between; "
        >
            <div style="padding: 0.75rem;">
                <h3 class="text-label text-primary" style="max-width: 300px">Closing party</h3>
                <div class="web-card-link u-flex u-cross-center">
                    <span class="text">Watch</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img
                src={thumbnail}
                alt=""
                style="aspect-ratio: 268 / 208; border-radius: 0.75rem; object-fit: cover;"
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
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(2, 224px);
        gap: 2rem;

        min-height: 660px;

        :nth-child(1) {
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

        :nth-child(2) {
            grid-column: 15 / 25;
            grid-row: 1 / 2;
        }

        :nth-child(3) {
            grid-column: 15 / 25;
            grid-row: 2 / 3;

            @media screen and (max-width: 1023px) {
                display: flex;
                // gap: 1rem;
            }
        }

        :nth-child(4) {
            grid-column: 1 / 25;
            grid-row: 3 / 4;
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
