<script lang="ts">
    import { spring } from 'svelte/motion';
    let open = false;
    import NumberFlow from '@number-flow/svelte';

    let dimensions = spring(
        {
            target: { width: 220, height: 44 }
        },
        { stiffness: 0.05, damping: 0.2 }
    );

    const toggleOpen = () => {
        open = !open;
        dimensions.set({
            target: { width: open ? 332 : 220, height: open ? 240 : 44 }
        });
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            toggleOpen();
        }
    };

    export let progress: number = 0;
</script>

<svelte:window on:keydown={handleEscape} />

<div
    class="fixed top-20 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center overflow-hidden rounded-[32px] shadow-lg shadow-black/70"
>
    <div class="drop" />
    <div
        style:width="{$dimensions.target.width}px"
        style:height="{$dimensions.target.height}px"
        class="relative mx-auto flex items-center justify-center bg-black"
    >
        <button on:click={toggleOpen}><NumberFlow value={progress} suffix="%" /> </button>
    </div>
</div>

<style lang="scss">
    .drop {
        position: absolute;
        width: 100%;
        height: 40px;
        transform: translateX(-50%) translateY(-50%);
        z-index: -2;
        backdrop-filter: blur(6px);
        background-color: hsl(var(--web-color-background) / 50%);
        mask-composite: intersect;
        mask-image: linear-gradient(
            to top,
            transparent,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 1) 75%,
            transparent
        );
    }
</style>
