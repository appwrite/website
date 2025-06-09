<script lang="ts">
    import { createTooltip, melt } from '@melt-ui/svelte';
    import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';
    import { type Snippet } from 'svelte';
    import { fly, type FlyParams } from 'svelte/transition';

    interface Props {
        placement?: NonNullable<FloatingConfig>['placement'];
        disabled?: boolean;
        closeOnPointerDown?: boolean;
        disableHoverableContent?: boolean;
        asChild?: Snippet<[any]>;
        children?: Snippet;
        tooltip: Snippet;
    }

    const {
        placement = 'top',
        disabled = false,
        closeOnPointerDown = false,
        disableHoverableContent = false,
        asChild,
        children,
        tooltip
    }: Props = $props();

    const {
        elements: { trigger, content, arrow },
        states: { open }
    } = createTooltip({
        positioning: {
            placement
        },
        openDelay: 0,
        closeOnPointerDown,
        forceVisible: true,
        disableHoverableContent
    });

    let flyParams = $derived(
        (function getFlyParams() {
            const params: FlyParams = {
                duration: 150
            };

            switch (placement) {
                case 'top':
                case 'top-start':
                case 'top-end':
                    params.y = 4;
                    break;
                case 'bottom':
                case 'bottom-start':
                case 'bottom-end':
                    params.y = -4;
                    break;

                case 'left':
                case 'left-start':
                case 'left-end':
                    params.x = 4;
                    break;
                case 'right':
                case 'right-start':
                case 'right-end':
                    params.x = -4;
                    break;
            }

            return params;
        })()
    );
</script>

{#if asChild}
    {@render asChild({ trigger: $trigger })}
{:else if children}
    <span use:melt={$trigger}>
        {@render children()}
    </span>
{/if}

{#if tooltip && $open && !disabled}
    <div use:melt={$content} class="web-tooltip text-sub-body" transition:fly={flyParams}>
        <div use:melt={$arrow}></div>
        {@render tooltip()}
    </div>
{/if}
