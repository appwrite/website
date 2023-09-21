<script>
	import { getContext, hasContext } from 'svelte';

	const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
</script>

{#if noParagraph}
	<slot />
{:else}
	<p class={`aw-paragraph-md${$$props.class ? ` ${$$props.class}` : ''}`}><slot /></p>
{/if}
