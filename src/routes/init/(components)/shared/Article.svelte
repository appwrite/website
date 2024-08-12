<script lang="ts">
  type $$Props = {
    url: string;
    illustration?: string;
    title: string;
    label?: string;
  };

  export let url: $$Props["url"];
  export let illustration: $$Props["illustration"] = undefined;
  export let title: $$Props["title"];
  export let label: $$Props["label"] = "Read article";
</script>

<a
  href={url}
  class="web-card is-normal has-border-gradient u-overflow-hidden"
  style="padding: 1.25rem; --p-aspect-ratio: 0;"
>
  <h3 class="web-label web-u-color-text-primary" style="max-width: 18.75rem">
    {title}
  </h3>
  <div class="web-card-link u-flex u-cross-center">
    <span class="text">{label}</span>
    <span class="web-icon-arrow-right" />
  </div>
  {#if illustration}
    <img
      src={illustration}
      alt="{title} illustration"
      style="position: absolute; inset-block-start: 0; inset-inline-end: 0;"
    />
  {/if}
</a>

<style lang="scss">
  .web-card {
    height: 100%;
    background-color: hsl(var(--web-color-subtle));
  }
</style>
