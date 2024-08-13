<script lang="ts">
    import announcement from '../(assets)/day-1/announcement.svg';
    import functions from '../(assets)/day-1/serverless-functions.svg';
    import mobileFunctions from '../(assets)/day-1/serverless-functions-mobile.svg';
    import serverless from '../(assets)/day-1/serverless-cli.svg';
    import swag from '../(assets)/day-1/swag-thumb.png';
    import thumbnail from '../(assets)/mock-thumb.png';

    import Video from '../(components)/shared/Video.svelte';
    import { Grid } from '../(components)/grid';
    import Media from '../(components)/shared/Media.svelte';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Article from '../(components)/shared/Article.svelte';
    import DayCard from '../(components)/DayCard.svelte';
    import { Animations } from '../(animations)';
    import { format } from 'date-fns';

    export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="Local development"
            description="Run and test Appwrite Functions locally and deploy only when you’re ready."
            illustration={announcement}
            url="/"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Serverless functions 101: best practices"
            illustration={functions}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Local serverless function development with the new Appwrite CLI"
            illustration={serverless}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Media title="Product demo" label="Watch">
            <Video
                src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
                title="Product demo"
                {thumbnail}
                --p-aspect-ratio="16/6"
            />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Article
            url="/docs/products/auth/server-side-rendering"
            title="Docs: Local Development"
            label="Read"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Media title="Init Swag" url="https://discord.com" label="Enter giveaway">
            <img src={swag} alt="" style:filter="grayscale(1)" />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 0" url="https://discord.com" label="Join">
            <DayCard
                day={{
                    title: 'Kick off',
                    subtitle: format(release, 'MMM dd'),
                    release
                }}
                --p-aspect-ratio="2.35/1"
            >
                <svelte:component this={Animations.LocalDev} />
            </DayCard>
        </Media>
    </Grid.Cell>
</Grid.Root>
