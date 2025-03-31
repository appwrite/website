<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte';
    import { cva, type VariantProps } from 'cva';
    import type { Action } from 'svelte/action';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
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

    export let href: $$Props['href'] = undefined;
    export let variant: $$Props['variant'] = 'primary';
    export let use: $$Props['use'] = undefined;
    export let element: AnyMeltElement | undefined = undefined;
    $: meltElement = element ?? emptyMeltElement;

    const { class: classes, href: _, ...props } = $$restProps;

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
    <a
        {...props}
        {href}
        class={buttonClasses}
        use:melt={$meltElement}
        use:applyAction
        on:click
        on:dblclick
        on:mousedown
        on:mouseup
    >
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
    <button
        {...props}
        class={buttonClasses}
        use:melt={$meltElement}
        use:applyAction
        on:click
        on:dblclick
        on:mousedown
        on:mouseup
    >
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
