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
    </button>
    {#if $isSelected(index.toString())}
        <div use:melt={$content(index.toString())} transition:slide={{ duration: 250 }}>
            <slot />
        </div>
    {/if}
</div>

<style>
    button {
        user-select: none;
    }
</style>
