<script lang="ts">
  import { classNames } from "$lib/utils/classnames";
  import type {
    HTMLButtonAttributes,
    HTMLAnchorAttributes,
  } from "svelte/elements";
  import { cva, type VariantProps } from "cva";

  const button = cva(
    [
      "flex w-fit min-h-10 items-center justify-center gap-2 rounded-lg px-4 text-white transition-all select-none",
    ],
    {
      variants: {
        intent: {
          primary: [
            "to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500",
            "hover:shadow-[0_0_2rem_#fd366e52]",
          ],
          secondary: ["bg-[#fd366e0a] relative"],
          text: [
            "bg-transparent border-transparent",
            "hover:bg-gradient-to-b from-[#ffffff0f] via-[#ffffff1a] to-[#ffffff0f];",
          ],
        },
      },
    },
  );

  type ButtonProps =
    | (HTMLButtonAttributes & { href?: undefined })
    | (HTMLAnchorAttributes & { href: string });

  type $$Props = ButtonProps & VariantProps<typeof button>;

  export let href: $$Props["href"] = undefined;
  export let intent: $$Props["intent"] = "primary";
  const { class: classes, ...props } = $$restProps;

  const sharedClasses = classNames(button({ intent }), classes);
</script>

{#if href}
  <a
    {...props}
    {href}
    class={sharedClasses}
    class:has-border-gradient={intent === "secondary"}
  >
    <slot />
  </a>
{:else}
  <button
    {...props}
    class={sharedClasses}
    class:has-border-gradient={intent === "secondary"}
  >
    <slot />
  </button>
{/if}

<style>
  .has-border-gradient {
    --border-gradient-before: linear-gradient(
      to bottom,
      rgba(253, 54, 110, 0.48) 0%,
      rgba(253, 54, 110, 0) 180%
    );
    --border-gradient-after: radial-gradient(
      42.86% 42.86% at 50.55% -0%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    &::before {
      background: var(--border-gradient-before) border-box;
    }

    &::after {
      background: var(--border-gradient-after);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: var(--radius-lg);
      border: 1px solid transparent;
      mask:
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      pointer-events: none;
    }
  }
</style>
