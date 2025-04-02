<script lang="ts">
    import { portal } from '$lib/actions';
    import Code from '$lib/animations/CodeWindow/Code.svelte';
    import { fade } from 'svelte/transition';
    import { functionsController } from '.';

    let content = `
const userId = req.headers['user-id'];

if (req.path === '/subscribe') {
	const session = await stripe.checkout(userId);
	return res.redirect(session.url, 303);
} 

if (req.path === '/webhook') {
	await appwrite.addSubscriberLabel(userId);
}

return res.json({ success: true });`.trim();

    const { state } = functionsController;
</script>

<Code {content} />

<div use:portal={{ target: '#code-bottom' }} class="bottom">
    {#if $state.submit !== 'idle'}
        <span class="web-icon-github" in:fade></span>
    {/if}
    {#if $state.submit === 'loading'}
        <span in:fade>Pushing to GitHub...</span>
        <div class="loader is-small" in:fade></div>
    {:else if $state.submit === 'success'}
        <span>Deployed to Appwrite Cloud</span>
        <span class="web-icon-check"></span>
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
