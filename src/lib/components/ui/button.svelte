<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte';
    import { cva, type VariantProps } from 'cva';
    import type { Action } from 'svelte/action';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import InlineTag from './inline-tag.svelte';
    import type { Snippet } from 'svelte';
    import { type IconType, Icon } from '$lib/components/ui';

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

    type $$Props = ButtonProps &
        VariantProps<typeof button> & {
            use?:
                | Action<HTMLButtonElement | HTMLAnchorElement, any>
                | [Action<HTMLButtonElement | HTMLAnchorElement, any>, any];
        } & { element?: AnyMeltElement };

    type Props = $$Props & {
        variant?: $$Props['variant'];
        use?: $$Props['use'];
        element?: AnyMeltElement;
        icon?: IconType;
        children: Snippet;
        tag?: Snippet;
    };

    const {
        href,
        variant = 'primary',
        use = undefined,
        element,
        icon,
        children,
        tag,
        class: classes,
        ...rest
    }: Props = $props();

    let meltElement = $derived(element ?? emptyMeltElement);
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

{#snippet iconElement(type: IconType)}
    <Icon icon={type} />
{/snippet}

{#if href}
    <a
        {...rest as HTMLAnchorAttributes}
        {href}
        class={buttonClasses}
        use:melt={$meltElement}
        use:applyAction
    >
        {#if icon}
            {@render iconElement(icon)}
        {/if}
        {@render children()}
        {#if tag}
            <InlineTag>
                {@render tag()}
            </InlineTag>
        {/if}
    </a>
{:else}
    <button
        {...rest as HTMLButtonAttributes}
        class={buttonClasses}
        use:melt={$meltElement}
        use:applyAction
    >
        {#if icon}
            {@render iconElement(icon)}
        {/if}
        {@render children()}
        {#if tag}
            <InlineTag>
                {@render tag()}
            </InlineTag>
        {/if}
    </button>
{/if}
