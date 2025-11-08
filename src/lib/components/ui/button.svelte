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
</script>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { Action } from 'svelte/action';
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
    } & VariantProps<typeof button> &
        ButtonOrAnchorProps;

    const {
        href,
        variant,
        action = () => {},
        children,
        class: classes,
        event,
        ...rest
    }: Props = $props();

    const buttonClasses = cn(button({ variant }), classes);
</script>

{#if href}
    <a use:action {href} class={buttonClasses} onclick={() => event && trackEvent(event)} {...rest}>
        {@render children()}
    </a>
{:else}
    <button use:action class={buttonClasses} onclick={() => event && trackEvent(event)} {...rest}>
        {@render children()}
    </button>
{/if}
