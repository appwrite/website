<script lang="ts">
  import illustration from "../(assets)/cli-illustration.svg";
  import thumbnail from "../(assets)/discord-day-2.png";
  import ci from "../(assets)/ci-cd-thumb.svg";
  import { Grid } from "../(components)/grid";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Media from "../(components)/shared/Media.svelte";
  import Video from "../(components)/shared/Video.svelte";
  import Article from "../(components)/shared/Article.svelte";
  import DayCard from "../(components)/DayCard.svelte";
  import { Animations } from "../(animations)";
  import { format } from "date-fns";

  export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
  <Grid.Cell columns={7} rows={2}>
    <Announcement
      title="New Appwrite CLI"
      description="The new Appwrite CLI allows you to test your functions locally, easily
                        migrate databases and more."
      {illustration}
    />
  </Grid.Cell>
  <Grid.Cell columns={5} rows={1}>
    <Article
      title="CI/CD examples in Appwrite CLI"
      illustration={ci}
      url="/blog/post/simplify-messaging-twilio"
      label="Read article"
    />
  </Grid.Cell>
  <Grid.Cell columns={5} rows={1}>
    <Video
      {thumbnail}
      --p-aspect-ratio="2.35/1"
      src="https://www.youtube-nocookie.com/embed/w-izHSKXqtU?si=OV30JUel_Zoq10AU&controls=0"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Article
      title="Docs: New Appwrite CLI"
      url="/blog/post/simplify-messaging-twilio"
      label="Read"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Media title="Discord Stage: Day 1" url="https://discord.com" label="Join">
      <DayCard
        day={{
          title: "Day 1",
          release,
          subtitle: format(release, "MMM dd"),
        }}
        --p-aspect-ratio="2.35/1"
      >
        <svelte:component this={Animations.CLI} />
      </DayCard>
    </Media>
  </Grid.Cell>
</Grid.Root>
