<script lang="ts">
    import { portal } from '$lib/actions';
    import Code from '$lib/animations/CodeWindow/Code.svelte';
    import { fade } from 'svelte/transition';
    import { messagingController } from '.';

    let content = `
await messaging.createPush(  
 	ID.unique(),
	'New task assigned to you',
	'You were assigned a new task in your board. Tap to check it out.',
);`.trim();

    const { state } = messagingController;
</script>

<Code {content} />

<div use:portal={{ target: '#code-bottom' }} class="bottom">
    {#if $state.submit === 'loading'}
        <span in:fade>Sending push notification...</span>
        <div class="loader is-small" in:fade />
    {:else if $state.submit === 'success'}
        <span in:fade>Push notification sent!</span>
    {/if}
</div>

<style lang="scss">
    .bottom {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        height: 3rem;
        padding-inline: 1rem;

        color: var(--color-bw-white, #fff);
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.3125rem */
        letter-spacing: -0.00875rem;
    }
</style>
