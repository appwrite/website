<script lang="ts">
    import { rect } from '$lib/actions';
    import { clamp } from '$lib/utils/clamp';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let percentage = 0;
    let easedPercentage = 0;

    const elRect = writable<DOMRect | null>(null);
    $: y = $elRect ? clamp(0, easedPercentage, 1) * $elRect.height : 0;

    onMount(() => {
        let frame: number | null = null;
        const ease = () => {
            easedPercentage += percentage - easedPercentage;
            frame = window.requestAnimationFrame(ease);
        };
        ease();

        return () => {
            frame && window.cancelAnimationFrame(frame);
        };
    });
</script>

<div
    class="scroll-indicator"
    use:rect={elRect}
    style:--y={`${y}px`}
    style:--percentage={`${easedPercentage * 100}%`}
>
    <div class="aw-dot" />
</div>

<style lang="scss">
    .scroll-indicator {
        position: relative;

        width: 1px;
        flex-shrink: 0;
        height: 100%;
        background: linear-gradient(
            to bottom,
            hsl(var(--aw-color-accent)) 0%,
            hsl(var(--aw-color-greyscale-700)) var(--percentage),
            hsl(var(--aw-color-greyscale-700)) 100%
        );
        border-radius: 100%;
    }

    .aw-dot {
        position: absolute;
        left: 50%;
        translate: -50% var(--y, 0);
        top: -8px;
    }
</style>
