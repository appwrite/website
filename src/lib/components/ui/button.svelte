<script lang="ts">
    import { Icon, type IconType } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { type AnyMeltElement, emptyMeltElement, melt } from '@melt-ui/svelte';
    import { type VariantProps, cva } from 'cva';
    import type { Snippet } from 'svelte';
    import type { Action } from 'svelte/action';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import { InlineTag } from '$lib/components/ui';

    // TODO: replace _button.scss with Tailwind classes for long-term maintainability
    const button = cva(['web-button'], {
        variants: {
            variant: {
                primary: [''],
                secondary: ['is-secondary'],
                text: ['is-text'],
                transparent: ['is-transparent']
            }
        }
    });

    type ButtonProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type Props = ButtonProps &
        VariantProps<typeof button> & {
            action?: Action;
            element?: AnyMeltElement;
            icon?: Snippet;
            children: Snippet;
            tag?: Snippet;
        };

    const {
        href,
        variant,
        action = () => {},
        element,
        icon,
        children,
        tag,
        class: classes,
        ...rest
    }: Props = $props();

    const meltElement = element ?? emptyMeltElement;
    const buttonClasses = classNames(button({ variant }), classes);
</script>

{#if href}
    <a use:action {href} class={buttonClasses} {...rest as HTMLAnchorAttributes}>
        {#if icon}
            {@render icon()}
        {/if}
        {@render children()}
        {#if tag}
            {@render tag()}
        {/if}
    </a>
{:else}
    <button use:action class={buttonClasses} {...rest as HTMLButtonAttributes}>
        {#if icon}
            {@render icon()}
        {/if}
        {@render children()}
        {#if tag}
            <InlineTag>
                {@render tag()}
            </InlineTag>
        {/if}
    </button>
{/if}
