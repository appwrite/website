<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
    import { cva, type VariantProps } from 'cva';
    import InlineTag from './InlineTag.svelte';

    const button = cva(
        [
            'flex w-fit cursor-pointer justify-center px-[0.875rem] h-10 transition-all text-center no-underline select-none min-w-10 bg-origin-border text-white font-medium items-center gap-2 rounded-lg border border-transparent'
        ],
        {
            variants: {
                variant: {
                    primary: [
                        'bg-[linear-gradient(135deg,_var(--color-pink-500)_0%,_var(--color-pink-500)_61%,_var(--color-secondary-100)_100%)]',
                        'hover:not:disabled:shadow-[0_0_2rem_var(--color-accent-200)] active:not:disabled:shadow-[0_0_2rem_var(--color-accent-200)]'
                    ]
                }
            },
            defaultVariants: {
                variant: 'primary'
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

    const buttonClasses = classNames(button({ variant }), classes);
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
