<script lang="ts">
    import illustration from '../(assets)/day-2/functions-announcement.svg';
    import Video from '../(components)/shared/Video.svelte';
    import thumbnail from '../(assets)/day-2/video-thumb.png';
    import { Grid } from '../(components)/grid';
    import Announcement from '../(components)/shared/Announcement.svelte';
    import Media from '../(components)/shared/Media.svelte';
    import Article from '../(components)/shared/Article.svelte';
    import functionComparison from '../(assets)/day-2/function-comparison.svg';
    import functionComparisonMobile from '../(assets)/day-2/function-comparison-mobile.svg';
    import dynamicKeys from '../(assets)/day-2/dynamic-keys.svg';
    import dynamicKeysMobile from '../(assets)/day-2/dynamic-keys-mobile.svg';
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
            url="/blog/post/introducing-functions-ecosystem"
        >
            <div class="illustration-wrapper">
                <div class="illustration">
                    <img src={illustration} alt="" />
                </div>
            </div>
        </Announcement>
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="Comparing serverless functions: Appwrite vs. Supabase vs. Firebase"
            illustration={functionComparison}
            mobileIllustration={functionComparisonMobile}
            url="/blog/post/appwrite-vs-firebase-vs-supabase-functions-comparison"
            label="Learn more"
        />
    </Grid.Cell>
    <Grid.Cell columns={5}>
        <Article
            title="How to leverage Appwrite Dynamic Keys for enhanced security"
            illustration={dynamicKeys}
            mobileIllustration={dynamicKeysMobile}
            url="/blog/post/how-to-leverage-dynamic-api-keys-for-better-security"
            label="Learn more"
        />
    </Grid.Cell>

    <Grid.Cell columns={4}>
        <Article
            url="/docs/products/functions/execute"
            title="Docs: Binary executions"
            label="Read docs"
        />
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <Article
            url="/docs/products/functions/develop"
            title="Docs: Dynamic keys"
            label="Read docs"
        />
    </Grid.Cell>
    <Grid.Cell columns={4}>
        <Article
            url="/docs/products/functions/executions"
            title="Docs: Delayed executions"
            label="Read docs"
        />
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media title="Product demo" label="Watch">
            <Video
                src="https://www.youtube-nocookie.com/embed/G2UBTOBumII?si=2kMcQnu1SV0VcE1w&amp;controls=0"
                title="Product demo"
                {thumbnail}
                --p-aspect-ratio="2.35/1"
            />
        </Media>
    </Grid.Cell>
    <Grid.Cell columns={6}>
        <Media
            title="Discord Stage: Day 2"
            url="https://discord.gg/zzj9pTzB?event=1268847922590650378"
            label="Join"
        >
            <DayCard
                hasBorder={false}
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

<style lang="scss">
    .illustration-wrapper {
        min-height: 275px;

        @media screen and (max-width: 768px) {
            min-height: 200px;
        }

        .illustration {
            position: absolute;
            right: -100px;
            top: 50px;
            height: 500px;

            @media screen and (max-width: 768px) {
                height: 350px;
                top: 150px;
                right: -50px;
            }
        }
    }
</style>
