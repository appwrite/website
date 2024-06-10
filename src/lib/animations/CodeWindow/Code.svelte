<script lang="ts">
	import '$scss/hljs.css';

	import { getCodeHtml } from '$lib/utils/code';

	export let content: string;

	$: codeHtml = getCodeHtml({ content, language: 'js' });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html codeHtml}
