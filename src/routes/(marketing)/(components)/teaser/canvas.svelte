<script lang="ts">
    import { Canvas } from '@threlte/core';
    import type { Snippet } from 'svelte';
    import { NoToneMapping } from 'three';

    interface CanvasProps {
        children: Snippet;
    }

    const { children }: CanvasProps = $props();
</script>

<div
    style="width: 100%; height: 100%; contain: layout style paint; transform: translate3d(0,0,0); backface-visibility: hidden;"
>
    <Canvas toneMapping={NoToneMapping} dpr={1}>
        {@render children()}
    </Canvas>
</div>
