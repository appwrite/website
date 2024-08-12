<script lang="ts">
  import illustration from "../(assets)/local-illustration.svg";
  import Video from "../(components)/shared/Video.svelte";
  import thumbnail from "../(assets)/thumbnail-localdev.png";
  import functions from "../(assets)/functions-thumb.svg";
  import swag from "../(assets)/swag-thumb.png";
  import serverless from "../(assets)/serverless-thumb.svg";
  import { Grid } from "../(components)/grid";
  import Media from "../(components)/shared/Media.svelte";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Article from "../(components)/shared/Article.svelte";
  import DayCard from "../(components)/DayCard.svelte";
  import { Animations } from "../(animations)";

  export let release: Date;
</script>

<Grid.Root columns={12} rows={2}>
  <Grid.Cell columns={7} rows={2}>
    <Announcement
      title="Local development"
      description="Run and test Appwrite Functions locally and deploy only when you’re ready."
      {illustration}
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
          title: "Kick off",
          release,
        }}
        --p-aspect-ratio="2.35/1"
        number={0}
      >
        <svelte:component this={Animations.LocalDev} />
      </DayCard>
    </Media>
  </Grid.Cell>
</Grid.Root>
