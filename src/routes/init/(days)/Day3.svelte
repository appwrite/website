<script lang="ts">
    import enumPng from '../(assets)/enum.png';
    import twoFa from '../(assets)/2fa.png';
    import thumbnail from '../(assets)/thumbnail-2fa.png';
    import thumbnailProduct from '../(assets)/thumbnail-2fa-product.png';
    import VideoWrapper from '../(components)/VideoWrapper.svelte';
    import Day from './Day.svelte';
    import Video from '../(components)/Video.svelte';

    export let release: Date;
    export let date: string;
</script>

<Day day={date} {release}>
    <div class="mosaic">
        <a href="/blog/post/introducing-enums-sdk-support" class="aw-card is-normal has-border-gradient" style:padding="0">
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="aw-label aw-u-color-text-primary">Enum SDK support</h3>
                <p style:margin-block-start="0.625rem">
                    A new feature that enhances the experience across all Appwrite client and
                    server-side SDKs.
                </p>
                <div class="aw-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="aw-icon-arrow-right" />
                </div>
            </div>
            <img src={enumPng} alt="" />
            <div class="circle" />
        </a>
        <a href="/blog/post/announcing-two-factor-authentication" class="aw-card is-normal has-border-gradient" style:padding="0">
            <div style:padding="2rem" style:padding-block-end="0">
                <h3 class="aw-label aw-u-color-text-primary">Two-factor authentication</h3>
                <p style:margin-block-start="0.625rem">
                    Add an additional layer of protection to your end users accounts with 2FA.
                </p>
                <div class="aw-card-link u-flex u-cross-center" style:margin-block-start="1.25rem">
                    <span class="text">Announcement</span>
                    <span class="aw-icon-arrow-right" />
                </div>
            </div>
            <img src={twoFa} alt="" />
            <div class="circle" />
        </a>
        <a
            href="https://discord.com/events/564160730845151244/1209117412247609354"
            target="_blank"
            rel="noreferrer noopener"
            class="aw-card is-normal has-border-gradient"
            style="padding: 0.5rem; display: flex; justify-content: space-between; "
        >
            <div style="padding: 0.75rem;">
                <h3 class="aw-label aw-u-color-text-primary">Event: Safety</h3>
                <div class="aw-card-link u-flex u-cross-center">
                    <span class="text">Join</span>
                    <span class="aw-icon-arrow-right" />
                </div>
            </div>
            <img
                src="/images/community/events/init-2.png"
                alt=""
                style="aspect-ratio: 268/110; border-radius: 0.75rem; object-fit: cover;"
            />
        </a>
        <VideoWrapper let:openVideo>
            <button
                on:click={openVideo}
                class="aw-card is-normal has-border-gradient u-overflow-hidden"
                style="padding: 0.5rem; display: flex; justify-content: space-between; "
            >
                <div style="padding: 0.75rem;">
                    <h3 class="aw-label aw-u-color-text-primary" style="max-width: 300px">
                        Release video
                    </h3>
                    <div class="aw-card-link u-flex u-cross-center">
                        <span class="text">Watch</span>
                        <span class="aw-icon-arrow-right" />
                    </div>
                </div>
                <Video src="https://www.youtube-nocookie.com/embed/hpdUXOFay4M?si=TPO8CistphsTOCas&amp;controls=0" {thumbnail} --p-aspect-ratio="268/110" --p-border-radius="0.75rem" />
            </button>
        </VideoWrapper>

        <a href="/docs/sdks#enums" class="aw-card is-normal has-border-gradient" style="padding: 1.25rem">
            <h3 class="aw-label aw-u-color-text-primary">Enum Documentation</h3>
            <div class="aw-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="aw-icon-arrow-right" />
            </div>
        </a>
        <a href="/docs/products/auth/2fa" class="aw-card is-normal has-border-gradient" style="padding: 1.25rem">
            <h3 class="aw-label aw-u-color-text-primary">2FA Documentation</h3>
            <div class="aw-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="aw-icon-arrow-right" />
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
                background: hsl(var(--aw-color-accent));
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
        }

        > :nth-child(4) {
            grid-column: 13 / 25;
            grid-row: 2;
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

        .aw-card {
            .aw-card-link {
                color: var(--aw-color-primary);
            }

            &:hover {
                .aw-card-link {
                    color: hsl(var(--aw-color-accent-darker));
                }
            }
        }
    }
</style>
