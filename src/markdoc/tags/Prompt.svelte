<script lang="ts">
    import { getRoutePrompt } from '$lib/utils/routePrompts';
    import { parse } from '$lib/utils/markdown';

    interface Props {
        route: string;
    }

    const { route }: Props = $props();

    const promptContent = getRoutePrompt(route);
    const renderedHtml = promptContent ? parse(promptContent) : null;
</script>

{#if renderedHtml}
    <div class="prompt-content">
        {@html renderedHtml}
    </div>
{:else}
    <p class="text-secondary">No prompt found for route: {route}</p>
{/if}

<style lang="scss">
    .prompt-content {
        :global(h1),
        :global(h2),
        :global(h3),
        :global(h4),
        :global(h5),
        :global(h6) {
            margin-block-start: 1.5rem;
            margin-block-end: 0.5rem;
            font-weight: 600;
        }

        :global(h1) {
            font-size: 1.5rem;
        }

        :global(h2) {
            font-size: 1.25rem;
        }

        :global(h3) {
            font-size: 1.125rem;
        }

        :global(ul),
        :global(ol) {
            padding-inline-start: 1.5rem;
            margin-block: 0.5rem;
        }

        :global(li) {
            margin-block: 0.25rem;
        }

        :global(code) {
            background: hsl(var(--web-color-offset));
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
        }

        :global(pre) {
            background: hsl(var(--web-color-offset));
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-block: 1rem;
        }

        :global(pre code) {
            background: none;
            padding: 0;
        }
    }
</style>
