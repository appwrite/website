<script lang="ts">
    import illustration from '../(assets)/day-3/functions-announcement.svg';
    import Video from '../(components)/shared/Video.svelte';
    import thumbnail from '../(assets)/mock-thumb.png';
    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
    import Article from '../(components)/shared/Article.svelte';
    import functionComparison from '../(assets)/day-3/function-comparison.svg';
    import dynamicKeys from '../(assets)/day-3/dynamic-keys.svg';
    import DayCard from '../(components)/DayCard.svelte';
    import { Animations } from '../(animations)';
    import { format } from 'date-fns';

    export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
    <Grid.Cell columns={7} rows={2}>
        <Announcement
            title="Function ecosystem"
            description="New features are being added to vastly improve your Appwrite Functions experience."
            {illustration}
            url="/"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Comparing serverless functions: Appwrite vs. Supabase vs. Firebase"
            illustration={functionComparison}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="How to leverage Appwrite Dynamic Keys for enhanced security"
            illustration={dynamicKeys}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>

    <Grid.Cell columns={4}>
        <Article url="/blog/post/simplify-messaging-twilio" title="Docs: Binary executions" />
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <Article url="/blog/post/simplify-messaging-twilio" title="Docs: Dynamic keys" />
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <Article url="/blog/post/simplify-messaging-twilio" title="Docs: Delayed executions" />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Product demo" label="Watch">
            <Video
                src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
                title="Product demo"
                {thumbnail}
                --p-aspect-ratio="2.35/1"
            />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 2" url="https://discord.com">
            <DayCard
                day={{
                    title: 'Day 2',
                    release,
                    subtitle: format(release, 'MMM dd')
                }}
                --p-aspect-ratio="2.35/1"
            >
                <svelte:component this={Animations.Functions} />
            </DayCard>
        </Media>
    </Grid.Cell>
</Grid.Root>
