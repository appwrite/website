<script lang="ts">
    import { page } from '$app/stores';
    import { getPageMarkdown } from '$lib/remote/markdown.remote';
    import { copyToClipboard } from '$lib/utils/copy';
    import { cn } from '$lib/utils/cn';
    import { writable } from 'svelte/store';

    interface CopyAsMarkdownProps {
        class?: string;
    }

    const { class: classNames }: CopyAsMarkdownProps = $props();

    const markdown = getPageMarkdown($page.route.id);
    const copied = writable(false);
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const copy = () => {
        if (timeout) clearTimeout(timeout);
        copyToClipboard(markdown.current ?? '');
        copied.set(true);
        timeout = setTimeout(() => copied.set(false), 2000);
    };
</script>

{#if !markdown.loading && markdown.current}
    <button
        class={cn(
            'text-caption hover:text-accent text-secondary ml-4 flex cursor-pointer items-center gap-2.5 rounded-md p-1.5 transition-colors',
            classNames
        )}
        onclick={copy}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 208 128"
            ><rect
                width="198"
                height="118"
                x="5"
                y="5"
                ry="10"
                stroke="currentColor"
                stroke-width="10"
                fill="none"
            /><path
                d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"
                fill="currentColor"
            />
        </svg>
        {#if $copied}
            Copied
        {:else}
            Copy page as markdown
        {/if}
    </button>
{/if}
