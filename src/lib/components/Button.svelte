<script lang="ts">
  import { classNames } from "$lib/utils/classnames";
  import type { SvelteComponent } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type ButtonProps = {
    icon: SvelteComponent;
  } & HTMLButtonAttributes;

  type $$Props = ButtonProps;

  //export let icon: $$Props["icon"];
</script>

<button
  {...$$restProps}
  class={classNames(
    "flex items-center justify-center rounded-lg bg-pink-200 select-none",
  )}
>
  <slot />
</button>
