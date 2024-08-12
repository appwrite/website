<script lang="ts">
  import illustration from "../(assets)/mock-numbers-announcement.svg";
  import thumbnail from "../(assets)/mock-numbers-thumb.svg";
  import contributors from "../(assets)/contributors.svg";
  import messaging from "../(assets)/messaging-1.png";
  import { Grid } from "../(components)/grid";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Media from "../(components)/shared/Media.svelte";
  import Article from "../(components)/shared/Article.svelte";
  import DayCard from "../(components)/DayCard.svelte";
  import { Animations } from "../(animations)";

  export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
  <Grid.Cell columns={7} rows={2}>
    <Announcement
      title="Mock numbers"
      description="Streamline phone authentication testing and app review processes."
      {illustration}
    />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Article
      title="Mock numbers for phone sign-in"
      illustration={thumbnail}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Article
      title="Celebrating 1.6 contributors"
      illustration={contributors}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>

  <Grid.Cell columns={3}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Designing Init"
    />
  </Grid.Cell>
  <Grid.Cell columns={3}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Docs: Mock numbers"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Media title="Discord Stage: Day 4" url="https://discord.com">
      <DayCard
        day={{
          title: "Closing party",
          release,
        }}
        --p-aspect-ratio="2.35/1"
        number={4}
      >
        <svelte:component this={Animations.Numbers} />
      </DayCard>
    </Media>
  </Grid.Cell>
</Grid.Root>
