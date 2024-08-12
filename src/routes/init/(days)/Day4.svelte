<script lang="ts">
  import illustration from "../(assets)/go-announcement.svg";
  import buildWith from "../(assets)/build-with-go.svg";
  import useGo from "../(assets)/use-go.svg";
  import Video from "../(components)/shared/Video.svelte";
  import thumbnail from "../(assets)/thumbnail-localdev.png";
  import messaging from "../(assets)/messaging-1.png";
  import { Grid } from "../(components)/grid";
  import Announcement from "../(components)/shared/Announcement.svelte";
  import Media from "../(components)/shared/Media.svelte";
  import Article from "../(components)/shared/Article.svelte";
  import DayCard from "../(components)/DayCard.svelte";
  import { Animations } from "../(animations)";

  export let release: Date;
</script>

<Grid.Root columns={24} rows={2}>
  <Grid.Cell columns={14} rows={2}>
    <Announcement
      title="GO support"
      description="Appwrite now supports GO functions runtime."
      {illustration}
    />
  </Grid.Cell>
  <Grid.Cell columns={10}>
    <Article
      title="What you can build with the GO runtime"
      illustration={buildWith}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>
  <Grid.Cell columns={10}>
    <Article
      title="Why should you use Golang in your app?"
      illustration={useGo}
      url="/blog/post/simplify-messaging-twilio"
    />
  </Grid.Cell>

  <Grid.Cell columns={6}>
    <Article
      url="/blog/post/simplify-messaging-twilio"
      title="Docs: GO support"
    />
  </Grid.Cell>
  <Grid.Cell columns={9}>
    <Media title="Product demo" label="Watch">
      <Video
        src="https://www.youtube-nocookie.com/embed/7LN05c-ov_0?si=Gb0gS-k4M24F1AOg"
        title="Product demo"
        {thumbnail}
        --p-aspect-ratio="2.35/1"
      />
    </Media>
  </Grid.Cell>
  <Grid.Cell columns={9}>
    <Media title="Discord Stage: Day 2" url="https://discord.com">
      <DayCard
        day={{
          title: "Day 3",
          release,
        }}
        --p-aspect-ratio="2.35/1"
        number={3}
      >
        <svelte:component this={Animations.Go} />
      </DayCard>
    </Media>
  </Grid.Cell>
</Grid.Root>
