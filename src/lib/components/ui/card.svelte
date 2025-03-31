<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { cva, type VariantProps } from 'cva';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    const card = cva(
        [
            'flex w-fit min-h-10 items-center justify-center gap-2 rounded-2xl px-6 text-white transition-all select-none'
        ],
        {
            variants: {
                variant: {
                    primary: [
                        'to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500',
                        'hover:shadow-[0_0_2rem_#fd366e52]'
                    ],
                    secondary: ['bg-[#fd366e0a] relative'],
                    text: [
                        'bg-transparent border-transparent',
                        'hover:bg-gradient-to-b from-[#ffffff0f] via-[#ffffff1a] to-[#ffffff0f];'
                    ]
                }
            }
        }
    );

    type ButtonProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type $$Props = ButtonProps & VariantProps<typeof card>;

    export let href: $$Props['href'] = undefined;
    export let variant: $$Props['variant'] = 'primary';
    const { class: classes, ...props } = $$restProps;

    const buttonClasses = classNames(card({ variant }), classes);
</script>

{#if href}
    <a {...props} {href} class={buttonClasses} class:has-border-gradient={variant === 'secondary'}>
        <slot />
    </a>
{:else}
    <button {...props} class={buttonClasses} class:has-border-gradient={variant === 'secondary'}>
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
            content: '';
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
