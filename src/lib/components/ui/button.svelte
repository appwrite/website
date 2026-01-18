<script lang="ts" module>
    import { type VariantProps, cva } from 'cva';

    // TODO: replace _button.scss with Tailwind classes for long-term maintainability
    const button = cva(['web-button'], {
        variants: {
            variant: {
                primary: [''],
                secondary: ['is-secondary'],
                text: ['is-text'],
                transparent: ['is-transparent'],
                small: ['is-small'],
                icon: ['is-icon', 'is-text']
            }
        }
    });

    export type Variant = VariantProps<typeof button>['variant'];
    export type SplitPosition = 'first' | 'middle' | 'last' | 'only';
    export const BUTTON_SPLIT_CONTEXT = Symbol('button-split-context');
</script>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { Action } from 'svelte/action';
    import { getContext } from 'svelte';
    import { cn } from '$lib/utils/cn';
    import { trackEvent, type TrackEventArgs } from '$lib/actions/analytics';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    type ButtonOrAnchorProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type Props = {
        action?: Action;
        children: Snippet;
        event?: string | TrackEventArgs;
        splitPosition?: SplitPosition;
    } & VariantProps<typeof button> &
        ButtonOrAnchorProps;

    const {
        href,
        variant,
        action = () => {},
        children,
        class: classes,
        event,
        splitPosition,
        ...rest
    }: Props = $props();

    const isSplit = getContext<boolean>(BUTTON_SPLIT_CONTEXT);
    const splitClasses = isSplit
        ? splitPosition
            ? `is-split is-split-${splitPosition}`
            : 'is-split'
        : '';
    const buttonClasses = cn(button({ variant }), splitClasses, classes);
</script>

{#if href}
    <a
        use:action
        {href}
        class={buttonClasses}
        onclick={() => event && trackEvent(event)}
        {...rest as HTMLAnchorAttributes}
    >
        {@render children()}
    </a>
{:else}
    <button
        use:action
        class={buttonClasses}
        onclick={() => event && trackEvent(event)}
        {...rest as HTMLButtonAttributes}
    >
        {@render children()}
    </button>
{/if}
