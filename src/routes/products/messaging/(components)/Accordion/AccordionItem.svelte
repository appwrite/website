<script lang="ts">
    import { melt } from '@melt-ui/svelte';
    import { accordionCtx } from './Accordion.svelte';
    import { slide } from 'svelte/transition';

    export let index: number;

    const {
        elements: { item, trigger, content },
        helpers: { isSelected }
    } = accordionCtx.get();
</script>

<div use:melt={$item(index.toString())}>
    <button use:melt={$trigger(index.toString())}>
        <slot name="trigger" />
        <div class="web-icon-chevron-down text-primary"></div>
    </button>
    {#if $isSelected(index.toString())}
        <div use:melt={$content(index.toString())} transition:slide={{ duration: 250 }}>
            <slot />
        </div>
    {/if}
</div>

<style lang="scss">
    button {
        user-select: none;

        display: flex;
        align-items: center;
        justify-content: space-between;
        inline-size: 100%;

        .web-icon-chevron-down {
            transition: 200ms ease;

            :global([data-state='open']) & {
                transform: rotate(180deg);
            }
        }
    }
</style>
