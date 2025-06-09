<script lang="ts">
    import { clamp } from '$lib/utils/clamp';
    import FloatingHead from './FloatingHead.svelte';

    type Head = {
        src: string;
        display: [number, number, number];
    };

    const headPositions: Array<Head['display']> = [
        [120, -25, 40],
        [120, 20, -40],
        [64, -40, 20],
        [64, 25, 35],
        [64, 10, 45],
        [64, 40, 55],
        [64, 40, -20],
        [64, 10, -55],
        [40, -45, 50],
        [40, -40, -40]
    ];

    export let images: Array<string>;
</script>

<div class="web-u-hide-mobile root absolute">
    {#each headPositions as [size, top, left], i}
        {@const image = clamp(0, images.length - 1, i % images.length)}
        <FloatingHead
            --top={`calc(50% - ${size / 2}px + ${top}%)`}
            --left={`calc(50% - ${size / 2}px + ${left}%)`}
            src={images[image]}
            {size}
        />
        <div style:margin-block-end="0" style:padding="10%">
            <img style:border-radius="50%" class="block" alt="" />
        </div>
    {/each}
</div>

<style lang="scss">
    .root {
        inline-size: 100vw;
        block-size: 100%;
        top: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        max-inline-size: 1280px;
    }
</style>
