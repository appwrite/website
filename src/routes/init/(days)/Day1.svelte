<script lang="ts">
    import illustration from '../(assets)/local-development.svg';
    import Video from '../(components)/shared/Video.svelte';
    import thumbnail from '../(assets)/thumbnail-localdev.png';
    import messaging from '../(assets)/messaging-1.png';
    import { Grid } from '../(components)/grid';
    import Media from '../(components)/shared/Media.svelte';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Article from '../(components)/shared/Article.svelte';
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="Local development"
            description="Run and test Appwrite Functions locally and deploy only when you’re ready."
            {illustration}
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Serverless functions 101: best practices"
            illustration={messaging}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Local serverless function development with the new Appwrite CLI"
            illustration={messaging}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Video
            title="Appwrite CLI"
            {thumbnail}
            --p-aspect-ratio="16/6"
            --p-border-radius="0.75rem"
            src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Article url="/docs/products/auth/server-side-rendering" title="Docs: Local Development" />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Media title="Init swag" url="https://discord.com" label="View">
            <img src={thumbnail} alt="" />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 0" url="https://discord.com" label="Join">
            <img src={thumbnail} alt="" />
        </Media>
    </Grid.Cell>
</Grid.Root>
