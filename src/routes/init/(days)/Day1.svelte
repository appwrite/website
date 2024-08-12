<script lang="ts">
  import illustration from "../(assets)/local-illustration.svg";
  import Video from "../(components)/shared/Video.svelte";
  import thumbnail from "../(assets)/thumbnail-localdev.png";
  import functions from "../(assets)/functions-thumb.svg";
  import swag from "../(assets)/swag-thumb.png";
  import discord from "../(assets)/discord-1.png";
  import serverless from "../(assets)/serverless-thumb.svg";
  import { Grid } from "../(components)/grid";
  import Media from "../(components)/shared/Media.svelte";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Article from "../(components)/shared/Article.svelte";
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
    <Video
      title="Product demo"
      {thumbnail}
      --p-aspect-ratio="16/6"
      --p-border-radius="0.75rem"
      src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
    />
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
      <img src={swag} alt="" />
    </Media>
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Media title="Discord Stage: Day 0" url="https://discord.com" label="Join">
      <img src={discord} alt="" />
    </Media>
  </Grid.Cell>
</Grid.Root>
