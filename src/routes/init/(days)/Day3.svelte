<script lang="ts">
    import illustration from '../(assets)/day-3/go-announcement.svg';
    import buildWithGo from '../(assets)/day-3/build-with-go.svg';
    import buildWithGoMobile from '../(assets)/day-3/build-with-go-mobile.svg';
    import useGo from '../(assets)/day-3/use-go.svg';
    import useGoMobile from '../(assets)/day-3/use-go-mobile.svg';

    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
    import Article from '../(components)/shared/Article.svelte';
    import DayCard from '../(components)/DayCard.svelte';
    import { Animations } from '../(animations)';
    import { format } from 'date-fns';

    export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="GO support"
            description="Appwrite now supports GO functions runtime."
            url="/blog/post/announcing-go-support"
        >
            <img src={illustration} alt="" />
        </Announcement>
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="3 things you can build with the GO runtime"
            illustration={buildWithGo}
            mobileIllustration={buildWithGoMobile}
            url="/blog/post/3-things-you-can-build-with-go-runtime"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Why should you use Golang in your app?"
            illustration={useGo}
            mobileIllustration={useGoMobile}
            url="/blog/post/what-is-golang"
            label="Learn more"
        />
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Article url="/docs/quick-starts/go" title="Docs: GO support" label="Read docs" />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media
            title="Discord Stage: Day 3"
            url="https://discord.gg/zzj9pTzB?event=1268848051007782963"
            label="Join"
        >
            <DayCard
                hasBorder={false}
                day={{
                    title: 'Day 3',
                    release,
                    subtitle: format(release, 'MMM dd')
                }}
                --p-aspect-ratio="2.35/1"
            >
                <svelte:component this={Animations.Go} />
            </DayCard>
        </Media>
    </Grid.Cell>
</Grid.Root>
