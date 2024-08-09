<script lang="ts">
    import Day from './Day.svelte';
    import illustration from '../(assets)/local-development.svg';
    import Video from '../(components)/Video.svelte';
    import thumbnail from '../(assets)/thumbnail-localdev.png';
    import messaging from '../(assets)/messaging-1.png';
    import VideoWrapper from '../(components)/VideoWrapper.svelte';
    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="Function ecosystem"
            description="New features are being added to vastly improve your Appwrite Functions
                        experience."
            {illustration}
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                Serverless functions 101: best practices
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Article</span>
                <span class="web-icon-arrow-right" />
            </div>
            <img
                src={messaging}
                alt="Twilio"
                style="position: absolute; inset-block-start: 0; inset-inline-end: -2rem;"
            />
        </a>
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                How to leverage Appwrite Dynamic Keys for enhanced security
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Article</span>
                <span class="web-icon-arrow-right" />
            </div>
            <img
                src={messaging}
                alt="Twilio"
                style="position: absolute; inset-block-start: 0; inset-inline-end: -2rem;"
            />
        </a>
    </Grid.Cell>

    <Grid.Cell columns={4}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                Docs: Binary executions
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right" />
            </div>
        </a>
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                Docs: Dynamic keys
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right" />
            </div>
        </a>
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                Docs: Delayed executions
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Learn more</span>
                <span class="web-icon-arrow-right" />
            </div>
        </a>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <VideoWrapper let:openVideo>
            <button
                on:click={openVideo}
                class="web-card is-normal has-border-gradient u-overflow-hidden"
                style="padding: 0.5rem; display: flex; justify-content: space-between; "
            >
                <div style="padding: 0.75rem;">
                    <h3 class="web-label web-u-color-text-primary" style="max-width: 300px">
                        Product demo
                    </h3>
                    <div class="web-card-link u-flex u-cross-center">
                        <span class="text">Watch</span>
                        <span class="web-icon-arrow-right" />
                    </div>
                </div>
                <Video
                    {thumbnail}
                    --p-aspect-ratio="16/6"
                    --p-border-radius="0.75rem"
                    src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
                />
            </button>
        </VideoWrapper>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 2" {thumbnail} url="https://discord.com" />
    </Grid.Cell>
</Grid.Root>
