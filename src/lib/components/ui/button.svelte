<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte';
    import { cva, type VariantProps } from 'cva';
    import type { Action } from 'svelte/action';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import { createBubbler } from 'svelte/legacy';
    import InlineTag from './inline-tag.svelte';

    // TODO: replace _button.scss with Tailwind classes for long-term maintainability
    const button = cva(['web-button'], {
        variants: {
            variant: {
                primary: [''],
                secondary: ['is-secondary'],
                text: ['is-text']
            }
        }
    });

    type ButtonProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type $$Props = ButtonProps &
        VariantProps<typeof button> & {
            use?:
                | Action<HTMLButtonElement | HTMLAnchorElement, any>
                | [Action<HTMLButtonElement | HTMLAnchorElement, any>, any];
        } & { element?: AnyMeltElement };

    interface Props {
        href?: $$Props['href'];
        variant?: $$Props['variant'];
        use?: $$Props['use'];
        element?: AnyMeltElement | undefined;
        icon?: import('svelte').Snippet;
        children: import('svelte').Snippet;
        tag?: import('svelte').Snippet;
        [key: string]: any;
    }

    const {
        href = undefined,
        variant = 'primary',
        use = undefined,
        element = undefined,
        icon,
        children,
        tag,
        ...rest
    }: Props = $props();
    let meltElement = $derived(element ?? emptyMeltElement);

    const { class: classes, href: _ } = rest;

    const buttonClasses = classNames(button({ variant }), classes);

    const applyAction = (node: HTMLButtonElement | HTMLAnchorElement) => {
        if (!use) return { destroy: () => {} };

        if (typeof use === 'function') {
            return use(node);
        } else if (Array.isArray(use)) {
            const [action, params] = use;
            return action(node, params);
        }

        return { destroy: () => {} };
    };
</script>

{#if href}
    <a {...rest} {href} class={buttonClasses} use:melt={$meltElement} use:applyAction>
        {#if icon}
            {@render icon()}
        {/if}
        {@render children()}
        {#if tag}
            <InlineTag>
                {@render tag()}
            </InlineTag>
        {/if}
    </a>
{:else}
    <button {...rest} class={buttonClasses} use:melt={$meltElement} use:applyAction>
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
