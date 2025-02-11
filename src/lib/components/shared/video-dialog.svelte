<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { createDialog, melt } from '@melt-ui/svelte';

    const {
        elements: { portalled, trigger, content, overlay },
        states: { open }
    } = createDialog({
        forceVisible: true
    });

    export let url: string = '';
    export let title: string = 'YouTube video player';
</script>

<button use:melt={$trigger} class="contents cursor-pointer" type="button">
    <slot />
</button>

{#if $open}
    <div use:melt={$portalled}>
        <div
            use:melt={$overlay}
            class="fixed inset-0 bg-black/50 transition ease-out"
            transition:fade={{ duration: 150 }}
        />

        <div
            class="web-media content fixed top-1/2 left-1/2 z-1000 block aspect-video max-h-[75vh] w-[80%] -translate-x-1/2 -translate-y-1/2 transform object-contain"
            use:melt={$content}
            transition:scale={{ duration: 250, start: 0.95 }}
        >
            <iframe
                src={url}
                {title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="block h-full w-full"
            />
        </div>
    </div>
{/if}
