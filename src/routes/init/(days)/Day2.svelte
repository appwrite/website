<script lang="ts">
    import illustration from '../(assets)/local-development.svg';
    import thumbnail from '../(assets)/thumbnail-localdev.png';
    import messaging from '../(assets)/messaging-1.png';
    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
    import Video from '../(components)/shared/Video.svelte';
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="New Appwrite CLI"
            description="The new Appwrite CLI allows you to test your functions locally, easily
                        migrate databases and more."
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
                CI/CD examples in Appwrite CLI
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Read article</span>
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
        <Video
            title="Appwrite CLI"
            {thumbnail}
            src="https://www.youtube-nocookie.com/embed/w-izHSKXqtU?si=OV30JUel_Zoq10AU&controls=0"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <a
            href="/blog/post/simplify-messaging-twilio"
            class="web-card is-normal has-border-gradient u-overflow-hidden"
            style="padding: 1.25rem; --p-aspect-ratio: 0;"
        >
            <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
                Docs: New Appwrite CLI
            </h3>
            <div class="web-card-link u-flex u-cross-center">
                <span class="text">Read</span>
                <span class="web-icon-arrow-right" />
            </div>
        </a>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 1" url="https://discord.com">
            <img src={thumbnail} alt="" />
        </Media>
    </Grid.Cell>
</Grid.Root>
