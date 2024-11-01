<script lang="ts">
    export let cols = 80;
    export let rows = 40;

    // Calculate delay starting from bottom-left, moving toward top-right
    const getDelay = (col: number, row: number) => (rows - row + col) * 3;
</script>

<div class="relative flex h-full w-full items-center justify-center">
    <div
        class="absolute inset-0 z-100 grid"
        style:grid-template-columns="repeat({cols}, 1fr)"
        style:grid-template-rows="repeat({rows}, 1fr)"
        style="--cols:{cols};--rows:{rows}"
    >
        {#each Array.from({ length: cols * rows }) as _, i}
            <div
                class="cell h-full w-full bg-white"
                style:animation-delay="{getDelay(i % cols, Math.floor(i / cols))}ms"
            />
        {/each}
    </div>
    <slot />
</div>

<style>
    @keyframes poof {
        to {
            opacity: 0;
        }
    }

    @media screen and (prefers-reduced-motion: no-preference) {
        .cell {
            animation-name: poof;
            animation-duration: 0.6s;
            animation-fill-mode: forwards;
        }
    }
</style>
