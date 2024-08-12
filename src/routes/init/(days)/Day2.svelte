<script lang="ts">
  import illustration from "../(assets)/cli-illustration.svg";
  import thumbnail from "../(assets)/thumbnail-localdev.png";
  import messaging from "../(assets)/messaging-1.png";
  import { Grid } from "../(components)/grid";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Media from "../(components)/shared/Media.svelte";
  import Video from "../(components)/shared/Video.svelte";
  import Article from "../(components)/shared/Article.svelte";
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
      illustration={messaging}
      url="/blog/post/simplify-messaging-twilio"
      label="Read article"
    />
  </Grid.Cell>
  <Grid.Cell columns={5} rows={1}>
    <Video
      title="Appwrite CLI"
      {thumbnail}
      src="https://www.youtube-nocookie.com/embed/w-izHSKXqtU?si=OV30JUel_Zoq10AU&controls=0"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Article
      title="New Appwrite CLI"
      illustration={messaging}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Media title="Discord Stage: Day 1" url="https://discord.com">
      <img src={thumbnail} alt="" />
    </Media>
  </Grid.Cell>
</Grid.Root>
