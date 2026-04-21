<script lang="ts">
    import { getContext } from 'svelte';
    import { getRoutePrompt } from '$lib/utils/routePrompts';
    import SvelteMarkdown from 'svelte-markdown';
    import PromptCodeBlock from './PromptCodeBlock.svelte';

    export let path: string | undefined = undefined;

    const promptFrontmatter = getContext<string | undefined>('prompt_path');
    $: resolvedPath = path ?? promptFrontmatter;
    $: promptText = resolvedPath ? getRoutePrompt(resolvedPath) : null;
</script>

{#if promptText}
    <SvelteMarkdown
        source={promptText}
        renderers={{
            code: PromptCodeBlock
        }}
    />
{/if}
