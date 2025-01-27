<script lang="ts">
    import { onMount } from 'svelte';

    type Dot = {
        id: number;
        row: number;
        col: number;
        glowing: boolean;
    };

    let dots: Array<Dot> = [];
    let containerHeight: number;
    let containerWidth: number;

    $: GRID_ROWS = Math.floor(containerHeight / 200) || 1;
    $: GRID_COLS = Math.floor(containerWidth / 40) || 1;

    $: if (GRID_ROWS && GRID_COLS) {
        dots = Array.from({ length: GRID_ROWS * GRID_COLS }).map((_, index) => ({
            id: index,
            row: Math.floor(index / GRID_COLS),
            col: index % GRID_COLS,
            glowing: false
        }));
    }

    function animateRandomDots() {
        dots = dots.map((dot) => ({
            ...dot,
            glowing: Math.random() < 0.1
        }));
    }

    onMount(() => {
        const interval = setInterval(animateRandomDots, 2000);
        return () => clearInterval(interval);
    });
</script>

<div
    class="absolute inset-0 h-full"
    bind:clientHeight={containerHeight}
    bind:clientWidth={containerWidth}
>
    <div class="dot-grid" style="--cols: {GRID_COLS}; --rows: {GRID_ROWS};">
        {#each dots as dot (dot.id)}
            <div
                class="dot"
                class:glowing={dot.glowing}
                style="--offset: {dot.row % 2 === 0 ? '0' : '0.5'}"
            ></div>
        {/each}
    </div>
</div>

<style>
    :root {
        --dot-spacing: 4rem;
        --dot-size: 1px;
    }

    .dot-grid {
        display: grid;
        grid-template-columns: repeat(var(--cols), var(--dot-spacing));
        grid-template-rows: repeat(var(--rows), var(--dot-spacing));
        gap: var(--dot-spacing);
        padding: calc(var(--dot-spacing) / 2);
    }

    .dot {
        width: var(--dot-size);
        height: var(--dot-size);
        background-color: rgba(255, 255, 255, 1);
        border-radius: 50%;
        transition: all 0.5s ease;
        transform: translateX(calc(var(--offset) * var(--dot-spacing)));
    }

    .dot.glowing {
        background-color: rgba(255, 255, 255, 1);
        box-shadow:
            0 0 4px rgba(255, 255, 255, 0.8),
            0 0 8px rgba(255, 255, 255, 0.6),
            0 0 12px rgba(255, 255, 255, 0.4);
        transform: translateX(calc(var(--offset) * var(--dot-spacing))) scale(1.5);
    }
</style>
