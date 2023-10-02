<script lang="ts">
    import { createTooltip, melt } from '@melt-ui/svelte';
    import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';
    import { fly } from 'svelte/transition';

    export let placement: FloatingConfig['placement'] = 'top';
    export let disabled = false;

    const {
        elements: { trigger, content, arrow },
        states: { open }
    } = createTooltip({
        positioning: {
            placement
        },
        openDelay: 0,
        closeOnPointerDown: false,
        forceVisible: true
    });
</script>

<slot name="asChild" trigger={$trigger} />

{#if !$$slots.asChild}
    <span use:melt={$trigger}>
        <slot />
    </span>
{/if}

{#if $open && !disabled}
    <div
        use:melt={$content}
        class="aw-tooltip aw-sub-body-400"
        transition:fly={{ y: 4, duration: 150 }}
    >
        <div use:melt={$arrow} />
        <slot name="tooltip" />
    </div>
{/if}
