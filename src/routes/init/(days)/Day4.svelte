<script lang="ts">
    import illustration from '../(assets)/day-4/mock-numbers-announcement.svg';
    import mockNumbers from '../(assets)/day-4/mock-numbers.svg';
    import mockNumbersMobile from '../(assets)/day-4/mock-numbers-mobile.svg';
    import contributors from '../(assets)/day-4/contributors.svg';
    import contributorsMobile from '../(assets)/day-4/contributors-mobile.svg';
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
            url="/blog/post/announcing-mock-numbers-session-alerts"
        >
            <img src={illustration} alt="" style:margin="40px 0 -40px 0" />
        </Announcement>
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Mock numbers for phone sign-in"
            illustration={mockNumbers}
            mobileIllustration={mockNumbersMobile}
            url="/blog/post/mock-numbers-best-practices"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Media
            title="Discord Stage: Day 4"
            url="https://discord.gg/zzj9pTzB?event=1268848185422381118"
            label="Join"
        >
            <DayCard
                hasBorder={false}
                day={{
                    title: 'Closing party',
                    release,
                    subtitle: format(release, 'MMM dd')
                }}
            >
                <svelte:component this={Animations.Numbers} />
            </DayCard>
        </Media>
    </Grid.Cell>

    <Grid.Cell columns={6}>
        <Article
            url="/blog/post/designing-init-event-logo"
            title="Designing Init"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Article url="/docs/products/auth/phone-sms" title="Docs: Mock numbers" label="Read docs" />
    </Grid.Cell>
</Grid.Root>
