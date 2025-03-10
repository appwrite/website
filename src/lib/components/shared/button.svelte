<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
    import { cva, type VariantProps } from 'cva';
    import InlineTag from '../ui/InlineTag.svelte';

    const button = cva(
        [
            'flex w-fit justify-center px-[0.875rem] h-10 transition-all text-center no-underline select-none min-w-10 bg-origin-border text-white font-medium items-center gap-2 rounded-lg border border-transparent button duration-200'
        ],
        {
            variants: {
                variant: {
                    primary: [
                        'bg-[linear-gradient(135deg,_var(--color-accent)_0%,_var(--color-accent)_61%,_var(--color-secondary-100)_100%)]',
                        'hover:shadow-[0_0_2rem_var(--color-accent-200)] active:not:disabled:shadow-[0_0_2rem_var(--color-accent-200)]'
                    ],
                    secondary: [
                        'bg-[#fd366e0a] relative',
                        'hover:shadow-[0_-6px_10px_0px_rgba(253,54,110,0.08)_inset]'
                    ],
                    text: [
                        'bg-transparent border-transparent text-white',
                        'hover:backdrop-blur-md hover:bg-[linear-gradient(135deg,_rgba(255,_255,_255,_0.06)_0%,_rgba(255,_255,_255,_0.10)_54.74%,_rgba(255,_255,_255,_0.06)_100%)]'
                    ]
                }
            }
        }
    );

    type ButtonProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type $$Props = ButtonProps & VariantProps<typeof button>;

    export let href: $$Props['href'] = undefined;
    export let variant: $$Props['variant'] = 'primary';
    const { class: classes, ...props } = $$restProps;

    const buttonClasses = classNames(button({ variant }), classes, {
        secondary: variant === 'secondary',
        'leading-tight': $$slots.icon
    });
</script>

{#if href}
    <a {...props} {href} class={buttonClasses}>
        {#if $$slots.icon}
            <slot name="icon" />
        {/if}
        <slot />
        {#if $$slots.tag}
            <InlineTag>
                <slot name="tag" />
            </InlineTag>
        {/if}
    </a>
{:else}
    <button {...props} class={buttonClasses}>
        {#if $$slots.icon}
            <slot name="icon" />
        {/if}
        <slot />
        {#if $$slots.tag}
            <InlineTag>
                <slot name="tag" />
            </InlineTag>
        {/if}
    </button>
{/if}
