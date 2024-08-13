<script lang="ts">
    import illustration from '../(assets)/day-5/mock-numbers-announcement.svg';
    import mockNumbers from '../(assets)/day-5/mock-numbers.svg';
    import mockNumbersMobile from '../(assets)/day-5/mock-numbers-mobile.svg';
    import contributors from '../(assets)/day-5/contributors.svg';
    import contributorsMobile from '../(assets)/day-5/contributors-mobile.svg';
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
            title="Mock numbers"
            description="Streamline phone authentication testing and app review processes."
            {illustration}
            url="/"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Mock numbers for phone sign-in"
            illustration={mockNumbers}
            mobileIllustration={mockNumbersMobile}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Celebrating 1.6 contributors"
            illustration={contributors}
            mobileIllustration={contributorsMobile}
            url="/blog/post/simplify-messaging-twilio"
        />
    </Grid.Cell>

    <Grid.Cell columns={3}>
        <Article url="/blog/post/simplify-messaging-twilio" title="Designing Init" />
    </Grid.Cell>
    <Grid.Cell columns={3}>
        <Article url="/blog/post/simplify-messaging-twilio" title="Docs: Mock numbers" />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Discord Stage: Day 4" url="https://discord.com">
            <DayCard
                day={{
                    title: 'Closing party',
                    release,
                    subtitle: format(release, 'MMM dd')
                }}
                --p-aspect-ratio="2.35/1"
            >
                <svelte:component this={Animations.Numbers} />
            </DayCard>
        </Media>
    </Grid.Cell>
</Grid.Root>
