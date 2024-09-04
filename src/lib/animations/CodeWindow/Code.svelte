<script lang="ts">
    import '$scss/shiki.css';
    import { getCodeHtml } from '$lib/utils/code';

    export let content: string;
    $: html = getCodeHtml({ content, language: 'js' });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html html}
