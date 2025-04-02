<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { type VariantProps, cva } from 'cva';
    import type { Snippet } from 'svelte';
    import type { Action } from 'svelte/action';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import { trackEvent, type TrackEventArgs } from '$lib/actions/analytics';

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

    type ButtonOrAnchorProps =
        | (HTMLButtonAttributes & { href?: undefined })
        | (HTMLAnchorAttributes & { href: string });

    type Props = {
        action?: Action;
        children: Snippet;
        events?: TrackEventArgs;
    } & VariantProps<typeof button> &
        ButtonOrAnchorProps;

    const {
        href,
        variant,
        action = () => {},
        children,
        class: classes,
        events,
        ...rest
    }: Props = $props();

    const buttonClasses = classNames(button({ variant }), classes);
</script>

{#if href}
    <a use:action {href} class={buttonClasses} {...rest as HTMLAnchorAttributes}>
        {@render children()}
    </a>
{:else}
    <button use:action class={buttonClasses} {...rest as HTMLButtonAttributes}>
        {@render children()}
    </button>
{/if}
