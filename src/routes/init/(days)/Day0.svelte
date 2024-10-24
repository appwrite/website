<script lang="ts">
    import announcement from '../(assets)/day-0/announcement.svg';
    import functions from '../(assets)/day-0/serverless-functions.svg';
    import mobileFunctions from '../(assets)/day-0/serverless-functions-mobile.svg';
    import serverlessCli from '../(assets)/day-0/serverless-cli.svg';
    import mobileServerlessCli from '../(assets)/day-0/serverless-cli-mobile.svg';
    import swag from '../(assets)/day-0/swag-thumb.png';
    import thumbnail from '../(assets)/day-0/video-thumb.png';

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
            url="/blog/post/announcing-local-development"
        >
            <img src={announcement} alt="" />
        </Announcement>
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Serverless functions 101: best practices"
            illustration={functions}
            mobileIllustration={mobileFunctions}
            url="/blog/post/serverless-functions-best-practices"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Local serverless function development with the new Appwrite CLI"
            illustration={serverlessCli}
            mobileIllustration={mobileServerlessCli}
            url="/blog/post/functions-local-development-guide"
            label="Learn more"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Media title="Product demo" label="Watch">
            <Video
                src="https://www.youtube-nocookie.com/embed/GMwrHds4Oa8?si=Ijkg89IIBcAhT6TW"
                title="Product demo"
                {thumbnail}
            />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Article
            url="/docs/products/functions/develop-locally"
            title="Docs: Local Development"
            label="Read docs"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Media title="Init Swag" url="/init/tickets" label="Enter giveaway">
            <img src={swag} alt="" />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media
            title="Discord Stage: Day 0"
            url="https://discord.gg/zzj9pTzB?event=1268847435111862335"
            label="Join"
        >
            <DayCard
                hasBorder={false}
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
