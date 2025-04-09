<script lang="ts">
    import { browser } from '$app/environment';
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { createCheckbox, melt } from '@melt-ui/svelte';

    export let checked = false;
    export let onClick: () => void;
    export let tribe: string | null;

    const {
        elements: { root },
        states: { checked: localChecked }
    } = createCheckbox({
        name: 'tribe'
    });

    $: localChecked.set(checked);

    $: src = `/images/tribes/${tribe === null ? 'stop' : tribe.toLowerCase()}.svg`;
    $: alt = tribe === null ? 'No tribe' : tribe;
</script>

<Tooltip disableHoverableContent>
    <button
        class="web-icon-button web-box-icon has-border-gradient"
        use:melt={$root}
        on:m-click|preventDefault={onClick}
        disabled={!browser}
    >
        <img {src} {alt} />
    </button>
    {#snippet tooltip()}
        {alt}
    {/snippet}
</Tooltip>

<style lang="scss">
    button {
        width: 3.5rem;
        height: 3.5rem;

        display: grid;
        place-items: center;

        &:not(:hover):not(:active) {
            background: hsl(var(--web-color-card));
        }
    }

    :global([data-state='checked']):is(button) {
        --m-border-gradient-before: white;
    }

    :global([data-state='checked']):is(button) img {
        /* Filter to white */
        filter: brightness(0) invert(1);
    }
</style>
