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
        variant: {
          primary: [
            "bg-gradient-to-br from-pink-500 via-pink-500 to-secondary-100",
            "hover:shadow-[0_0_2rem_#fd366e52] active:not:disabled:shadow-[0_0_2rem_#fd366e52]",
          ],
          secondary: [
            "bg-[#fd366e0a] relative",
            "hover:shadow-[0_-6px_10px_0px_rgba(253,54,110,0.08)_inset]",
          ],
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
  export let variant: $$Props["variant"] = "primary";
  const { class: classes, ...props } = $$restProps;

  const buttonClasses = classNames(button({ variant }), classes, {
    secondary: variant === "secondary",
    "leading-tight": $$slots.icon,
  });
</script>

{#if href}
  <a {...props} {href} class={buttonClasses}>
    <slot name="icon" />
    <slot />
  </a>
{:else}
  <button {...props} class={buttonClasses}>
    <slot name="icon" />
    <slot />
  </button>
{/if}

<style>
  .secondary {
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
