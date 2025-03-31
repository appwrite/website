<script lang="ts">
    import { createCheckbox, melt } from '@melt-ui/svelte';

    export let checked = false;

    const {
        elements: { root },
        states: { checked: localChecked },
        helpers: { isChecked }
    } = createCheckbox({
        onCheckedChange({ next }) {
            if (typeof next === 'boolean') {
                checked = next;
            }
            return next;
        }
    });

    $: localChecked.set(checked);
</script>

<div class="wrapper">
    <button use:melt={$root} class="anim-checkbox">
        {#if $isChecked}
            <span class="web-icon-check"></span>
        {/if}
    </button>
</div>

<style lang="scss">
    .wrapper {
        display: grid;
        place-items: center;
    }

    .anim-checkbox {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;

        border-radius: 0.125rem;
        border: 1.5px solid var(--greyscale-500, #818186);

        position: relative;

        &:global(.anim-checkbox[data-state='checked']) {
            background-color: #7c67fe;
            border-color: #7c67fe;
        }
    }

    [class*='icon-'] {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        color: white;
        font-size: 1rem;
    }
</style>
