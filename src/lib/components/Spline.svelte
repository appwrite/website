<script lang="ts">
    import type { SplineViewer } from '@splinetool/viewer';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';

    export let url: SplineViewer['url'];
    export let width: SplineViewer['width'] = undefined;
    export let height: SplineViewer['height'] = undefined;
    export let loading: SplineViewer['loading'] = 'auto';

    let loaded = writable(false);
    let spline: SplineViewer;

    onMount(async () => {
        await import('@splinetool/viewer');
        const onLoad = () => {
            const shadowRoot = spline.shadowRoot;
            if (shadowRoot) {
                shadowRoot.querySelector('#logo')?.remove(); // Remove Spline logo
                const canvas = shadowRoot.getElementById('spline');
                if (canvas) {
                    canvas.style.width = '100%';
                    canvas.style.height = '100%';
                }
            }

            setTimeout(() => {
                loaded.set(true);
            }, 150);
        };

        spline.addEventListener('load-complete', onLoad);
    });

    const ENABLED = false;
</script>

{#if ENABLED}
    <spline-viewer
        style="position: absolute;"
        {url}
        {width}
        {height}
        {loading}
        bind:this={spline}
    />
{/if}

{#if $$slots?.default && !$loaded}
    <div out:fade={{ duration: 50 }}>
        <slot />
    </div>
{/if}
