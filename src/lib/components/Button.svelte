<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
    import { cva, type VariantProps } from 'cva';

    const button = cva(
        [
            'flex w-fit [min-block-size:2.5rem] items-center justify-center gap-2 rounded-lg px-4 text-white transition-all select-none'
        ],
        {
            variants: {
                intent: {
                    primary: [
                        'to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500',
                        'hover:shadow-[0_0_2rem_#fd366e52]'
                    ],
                    secondary: ['to-secondary-100 bg-gradient-to-br from-pink-500 via-pink-500'],
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

    type $$Props = ButtonProps & VariantProps<typeof button>;

    export let href: $$Props['href'] = undefined;
    export let intent: $$Props['intent'] = 'primary';
</script>

{#if href}
    <a {...$$restProps} {href} class={classNames(button({ intent }))}>
        <slot />
    </a>
{:else}
    <button {...$$restProps} class={classNames(button({ intent }))}>
        <slot />
    </button>
{/if}
