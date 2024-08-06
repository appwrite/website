<script lang="ts">
  import { classNames } from "$lib/utils/classnames";
  import type {
    HTMLButtonAttributes,
    HTMLAnchorAttributes,
  } from "svelte/elements";

  type ButtonProps =
    | (HTMLButtonAttributes & { as?: "button" })
    | (HTMLAnchorAttributes & { as: "a" });

  type $$Props = ButtonProps;

  export let as: "a" | "button" = "button";
</script>

{#if as === "a"}
  <a
    {...$$restProps}
    href={$$restProps.href}
    class={classNames(
      "flex w-fit items-center justify-center gap-2 rounded-lg px-4 text-white transition-all select-none hover:shadow-[0_0_2rem_#fd366e52]",
      "to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500",
    )}
  >
    <slot />
  </a>
{:else}
  <button
    {...$$restProps}
    class={classNames(
      "flex w-fit items-center justify-center gap-2 rounded-lg px-4 text-white transition-all select-none hover:shadow-[0_0_2rem_#fd366e52]",
      "to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500",
    )}
  >
    <slot />
  </button>
{/if}
