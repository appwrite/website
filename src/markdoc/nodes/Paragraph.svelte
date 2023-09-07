<script>
	import { getContext, hasContext } from 'svelte';

	const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
	const classes = (!noParagraph ? 'aw-paragraph-md' : '') + ($$props.class ? ` ${$$props.class}` : '');
</script>

<p class={classes}><slot /></p>
