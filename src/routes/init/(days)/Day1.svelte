<script lang="ts">
    import illustration from '../(assets)/day-1/cli-illustration.svg';
    import thumbnail from '../(assets)/day-1/video-thumb.png';
    import ci from '../(assets)/day-1/ci-cd.svg';
    import ciMobile from '../(assets)/day-1/ci-cd-mobile.svg';
    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
    import Article from '../(components)/shared/Article.svelte';
    import DayCard from '../(components)/DayCard.svelte';
    import { Animations } from '../(animations)';
    import { format } from 'date-fns';
    import BigVideo from '../(components)/shared/BigVideo.svelte';

    export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="New Appwrite CLI"
            description="The new Appwrite CLI allows you to test your functions locally, easily migrate databases and more."
            url="/blog/post/introducing-new-appwrite-cli"
        >
            <img src={illustration} alt="" />
        </Announcement>
    </Grid.Cell>
    <Grid.Cell columns={5} rows={1}>
        <Article
            title="CI/CD examples in Appwrite CLI"
            illustration={ci}
            mobileIllustration={ciMobile}
            url="/blog/post/ci-cd-examples-in-appwrite"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={5} rows={1}>
        <BigVideo
            {thumbnail}
            title="Product demo"
            src="https://www.youtube-nocookie.com/embed/nlzFl3AHlog?si=kr3iBSKboEIf9TQi&amp;controls=0"
            label="Watch"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Article
            title="Docs: New Appwrite CLI"
            url="/docs/tooling/command-line/installation"
            label="Read docs"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media
            title="Discord Stage: Day 1"
            url="https://discord.gg/zzj9pTzB?event=1268847657296724011"
            label="Join"
        >
            <DayCard
                hasBorder={false}
                day={{
                    title: 'Day 1',
                    release,
                    subtitle: format(release, 'MMM dd')
                }}
                --p-aspect-ratio="2.35/1"
            >
                <svelte:component this={Animations.CLI} />
            </DayCard>
        </Media>
    </Grid.Cell>
</Grid.Root>
