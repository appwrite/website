<script lang="ts">
  import { classNames } from "$lib/utils/classnames";

  const { class: classes, ...props } = $$restProps;
</script>

<div class={classNames("flex flex-col gap-8 md:flex-row", classes)} {...props}>
  <h1
    class="font-aeonik-pro flex-[1.3] text-[5.5rem] leading-[5.5rem] tracking-[-0.022em]"
  >
    <slot name="title" />
  </h1>
  <div class="flex-[1] self-end">
    <p class="text-secondary mt-5 text-xl font-medium">
      <slot name="description" />
    </p>
    <slot name="cta" />
  </div>
</div>
