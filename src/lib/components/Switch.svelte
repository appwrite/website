<script lang="ts">
    import { createSwitch, melt } from '@melt-ui/svelte';

    export let checked = false;

    const {
        elements: { root },
        states: { checked: meltChecked }
    } = createSwitch({
        onCheckedChange({ next }) {
            checked = next;
            return next;
        }
    });

    $: meltChecked.set(checked);
</script>

<div class="melt-switch">
    <button use:melt={$root}>
        <span class="thumb"></span>
    </button>
</div>

<style lang="scss">
    .melt-switch {
        display: flex;
        align-items: center;
    }

    button {
        --padding: 0.125rem;
        --width: 2.25rem;

        position: relative;
        height: 1.5rem;
        width: var(--width);
        cursor: default;
        border-radius: 9999px;
        background-color: hsl(var(--web-color-smooth));
        transition: ease 150ms;
    }

    .melt-switch :global([data-state='checked']) {
        background-color: #fd366e;
    }

    .thumb {
        --thumb-size: 1.25rem;

        position: absolute;
        top: 50%;

        display: block;
        height: var(--thumb-size);
        width: var(--thumb-size);
        border-radius: 9999px;
        background-color: #ffffff;
        transform: translateX(var(--padding)) translateY(-50%);

        transition: ease 150ms;
    }

    :global(button[data-state='checked']) .thumb {
        --x: calc(var(--width) - var(--thumb-size) - var(--padding));
        transform: translateX(var(--x)) translateY(-50%);
    }
</style>
