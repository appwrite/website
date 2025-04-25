<script lang="ts">
    import enumPng from '../(assets)/enum.png';
    import twoFa from '../(assets)/2fa.png';
    import thumbnail from '../(assets)/thumbnail-2fa.png';
    import thumbnailEvent from '../(assets)/thumbnail-2fa-event.png';
    import VideoWrapper from '../(components)/VideoWrapper.svelte';
    import Day from './Day.svelte';
    import Video from '../(components)/Video.svelte';

    export let release: Date;
    export let date: string;
</script>

<Day day={date} {release}>
    <div class="mosaic">
        <a
            href="/blog/post/introducing-enum-sdk-support"
            class="web-card is-normal has-border-gradient"
            style:padding="0"
        >
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="text-label text-primary">Enum SDK support</h3>
                <p style:margin-block-start="0.625rem">
                    A new feature that enhances the experience across all Appwrite client and
                    server-side SDKs.
                </p>
                <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img src={enumPng} alt="" />
            <div class="circle"></div>
        </a>
        <a
            href="/blog/post/announcing-two-factor-authentication"
            class="web-card is-normal has-border-gradient"
            style:padding="0"
        >
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="text-label text-primary">Two-factor authentication</h3>
                <p style:margin-block-start="0.625rem">
                    Add an additional layer of protection to your end users accounts with 2FA.
                </p>
                <div class="web-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img src={twoFa} alt="" />
            <div class="circle"></div>
        </a>
        <a
            href="https://discord.com/events/564160730845151244/1209117412247609354"
            target="_blank"
            rel="noreferrer noopener"
            class="web-card is-normal has-border-gradient"
            style="padding: 0.5rem; display: flex; justify-content: space-between; "
        >
            <div style="padding: 0.75rem;">
                <h3 class="text-label text-primary">Event: Safety</h3>
                <div class="web-card-link u-flex u-cross-center">
                    <span class="text">Join</span>
                    <span class="web-icon-arrow-right"></span>
                </div>
            </div>
            <img
                src={thumbnailEvent}
                alt=""
                style="aspect-ratio: 268/110; border-radius: 0.75rem; object-fit: cover;"
            />
        </a>
        <VideoWrapper let:openVideo>
            <button
                on:click={openVideo}
                class="web-card is-normal has-border-gradient u-overflow-hidden"
                style="padding: 0.5rem; display: flex; justify-content: space-between; "
            >
                <div style="padding: 0.75rem;">
                    <h3 class="text-label text-primary" style="max-width: 300px">Release video</h3>
                    <div class="web-card-link u-flex u-cross-center">
                        <span class="text">Watch</span>
                        <span class="web-icon-arrow-right"></span>
                    </div>
                </div>
                <Video
                    src="https://www.youtube-nocookie.com/embed/hpdUXOFay4M?si=TPO8CistphsTOCas&amp;controls=0"
                    {thumbnail}
                    --p-aspect-ratio="268/110"
                    --p-border-radius="0.75rem"
                />
            </button>
        </VideoWrapper>

        <a
            href="/docs/sdks#enums"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">Enum Documentation</h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </a>
        <a
            href="/docs/products/auth/2fa"
            class="web-card is-normal has-border-gradient"
            style="padding: 1.25rem"
        >
            <h3 class="text-label text-primary">2FA Documentation</h3>
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
        grid-template-rows: 480px repeat(2, 120px) 60px;
        gap: 2rem;

        min-height: 660px;

        > :nth-child(1) {
            grid-column: 1 / 13;
            grid-row: 1;
        }

        > :nth-child(2) {
            grid-column: 13 / 25;
            grid-row: 1;
        }

        > :nth-child(1),
        > :nth-child(2) {
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

        > :nth-child(3) {
            grid-column: 1 / 13;
            grid-row: 2;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
            }
        }

        > :nth-child(4) {
            grid-column: 13 / 25;
            grid-row: 2;

            @media screen and (max-width: 1023px) {
                display: flex;
                flex-direction: column;
            }
        }

        > :nth-child(5) {
            grid-column: 1 / 13;
            grid-row: 3;
        }

        > :nth-child(6) {
            grid-column: 13 / 25;
            grid-row: 3;
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
