<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { createDialog, melt } from '@melt-ui/svelte';
    import type { Snippet } from 'svelte';

    type Props = {
        url: string;
        title?: string;
        children: Snippet;
        inlineVideo?: boolean;
    };

    const {
        elements: { trigger, content, overlay },
        states: { open }
    } = createDialog({
        forceVisible: true,
        preventScroll: true
    });

    const { url, title = 'YouTube video player', children, inlineVideo = true }: Props = $props();
</script>

{#if inlineVideo}
    <div class="contents cursor-pointer" use:melt={$trigger}>
        {@render children()}
    </div>
{:else}
    <a href={url} target="_blank" rel="noopener noreferrer" class="contents cursor-pointer">
        {@render children()}
    </a>
{/if}

{#if $open}
    <div class="fixed inset-0 z-1000 flex items-center justify-center">
        <div
            use:melt={$overlay}
            class="fixed inset-0 top-0 z-1000 bg-black/50 transition ease-out"
            transition:fade={{ duration: 150 }}
        ></div>

        <div
            class="web-media content fixed z-1000 block aspect-video max-h-[75vh] w-[80%] object-contain"
            use:melt={$content}
            transition:scale={{ duration: 250, start: 0.95 }}
        >
            <iframe
                src={url}
                {title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="block aspect-video h-full w-full"
            ></iframe>
        </div>
    </div>
{/if}
