<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    type Cell = {
        active: boolean;
        transitioning: boolean;
    };

    type Grid = Cell[][];

    const rows: number = 20;
    const cols: number = 40;

    let grid: Grid = [];

    function createInitialGrid(): Grid {
        return Array(rows)
            .fill(null)
            .map(() =>
                Array(cols)
                    .fill(null)
                    .map(
                        (): Cell => ({
                            active: Math.random() > 0.8,
                            transitioning: false
                        })
                    )
            );
    }

    onMount((): void => {
        grid = createInitialGrid();
    });

    let animationInterval: ReturnType<typeof setInterval>;

    onMount((): void => {
        animationInterval = setInterval(() => {
            const newGrid: Grid = grid.map((row) => row.map((cell): Cell => ({ ...cell })));

            for (let i = 0; i < 3; i++) {
                const randomRow: number = Math.floor(Math.random() * rows);
                const randomCol: number = Math.floor(Math.random() * cols);

                newGrid[randomRow][randomCol].transitioning = true;

                setTimeout(() => {
                    grid[randomRow][randomCol] = {
                        active: !grid[randomRow][randomCol].active,
                        transitioning: false
                    };
                    grid = grid;
                }, 500);
            }

            grid = newGrid;
        }, 100);
    });

    onDestroy((): void => {
        if (animationInterval) {
            clearInterval(animationInterval);
        }
    });
</script>

<div class="mx-auto w-full max-w-4xl p-4">
    <div class="grid" style:grid-template-columns={`repeat(${cols}, 1fr)`}>
        {#each grid as row}
            {#each row as cell}
                <div
                    class={`size-5 transition-all duration-500 ${cell.active ? 'bg-black' : 'bg-white'} ${cell.transitioning ? 'bg-yellow-500' : ''}`}
                ></div>
            {/each}
        {/each}
    </div>
</div>
