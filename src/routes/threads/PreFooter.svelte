<div class="wrapper">
    <img src="/images/bgs/pre-footer.png" alt="" class="aw-pre-footer-bg aw-u-z-index-1-negative" />
    <div class="aw-container">
        <h2 class="aw-display aw-u-color-text-primary">Need support?</h2>
        <div class="cards">
            <div class="cardy">
                <h3 class="aw-label aw-u-color-text-primary">Join our Discord</h3>
                <p class="aw-main-body-400 u-margin-block-start-16 aw-u-color-text-primary">
                    Get community support by joining our Discord server.
                </p>
                <a class="aw-button u-margin-block-start-24" href="https://appwrite.io/discord">
                    <span class="aw-icon-discord" />
                    <span class="text">Join Discord</span>
                </a>
            </div>
            <div class="cardy">
                <h3 class="aw-label aw-u-color-text-primary">Get premium support</h3>
                <p class="aw-main-body-400 u-margin-block-start-16 aw-u-color-text-primary">
                    Join Appwrite Pro and get email support from our team.
                </p>
                <a class="aw-button u-margin-block-start-24" href="https://appwrite.io/pricing">
                    <span class="text">Learn more</span>
                </a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
        padding-block: 7.5rem;
        overflow: hidden;
        position: relative;
    }

    h2 {
        text-align: center;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        justify-content: center;
        gap: 2.25rem;
        margin-block-start: 5rem;
    }

    .cardy {
        @include border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        --m-border-radius: 1rem;

        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(7.5px);
        padding: 1.5rem;
    }

    .aw-pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-58%, -72%);
        width: clamp(1200px, 200vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
    }
</style>
