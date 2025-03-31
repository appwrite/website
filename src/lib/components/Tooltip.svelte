<script lang="ts">
    import { createTooltip, melt } from '@melt-ui/svelte';
    import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';
    import { fly, type FlyParams } from 'svelte/transition';

    export let placement: NonNullable<FloatingConfig>['placement'] = 'top';
    export let disabled = false;
    export let closeOnPointerDown = false;
    export let disableHoverableContent = false;

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

    $: flyParams = (function getFlyParams() {
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
    })();
</script>

<slot name="asChild" trigger={$trigger} />

{#if !$$slots.asChild}
    <span use:melt={$trigger}>
        <slot />
    </span>
{/if}

{#if $open && !disabled}
    <div use:melt={$content} class="web-tooltip text-sub-body" transition:fly={flyParams}>
        <div use:melt={$arrow}></div>
        <slot name="tooltip" />
    </div>
{/if}
