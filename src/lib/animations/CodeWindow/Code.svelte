<script lang="ts">
    import '$scss/shiki.css';

    import { getCodeHtml } from '$lib/utils/code';

    export let content: string;
    $: promise = getCodeHtml({ content, language: 'js' });
</script>

{#await promise then html}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html html}
{/await}
