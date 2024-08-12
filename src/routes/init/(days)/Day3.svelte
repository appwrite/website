<script lang="ts">
  import illustration from "../(assets)/functions-illustration.svg";
  import Video from "../(components)/shared/Video.svelte";
  import thumbnail from "../(assets)/thumbnail-localdev.png";
  import messaging from "../(assets)/messaging-1.png";
  import { Grid } from "../(components)/grid";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Media from "../(components)/shared/Media.svelte";
  import Article from "../(components)/shared/Article.svelte";
</script>

<Grid.Root columns={12} rows={2}>
  <Grid.Cell columns={7} rows={2}>
    <Announcement
      title="Function ecosystem"
      description="New features are being added to vastly improve your Appwrite Functions
                        experience."
      {illustration}
    />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Article
      title="Serverless functions 101: best practices"
      illustration={messaging}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Article
      title="How to leverage Appwrite Dynamic Keys for enhanced security"
      illustration={messaging}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>

  <Grid.Cell columns={4}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Docs: Binary executions"
    />
  </Grid.Cell>
  <Grid.Cell columns={4}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Docs: Dynamic keys"
    />
  </Grid.Cell>
  <Grid.Cell columns={4}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Docs: Delayed executions"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Video
      src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
      title="Product demo"
      {thumbnail}
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Media title="Discord Stage: Day 2" url="https://discord.com">
      <img
        src={thumbnail}
        alt=""
        style="aspect-ratio:16/6;border-radius: 0.75rem;width:100%;height:100%;"
      />
    </Media>
  </Grid.Cell>
</Grid.Root>
