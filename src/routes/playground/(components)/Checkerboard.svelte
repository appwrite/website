<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { onMount, onDestroy } from 'svelte';

    type SquareState = 'off' | 'medium' | 'high' | 'clicked';

    const stateColors: Record<SquareState, string> = {
        off: 'bg-white',
        medium: 'bg-[#FFEEF3]/40',
        high: 'bg-[#FF81A4]/40',
        clicked: 'bg-[#FF81A4]'
    };

    export let rows = 8;
    export let cols = 8;
    export let intervalMs = 1000;
    export let flickerIntensity = 0.02;
    const MAX_HIGH_SQUARES = 3;

    let squares: SquareState[][] = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill('off' as SquareState));

    let interval: NodeJS.Timeout;

    function getAdjacentSquares(
        rowIndex: number,
        colIndex: number
    ): { row: number; col: number }[] {
        const adjacentOffsets = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ];

        return adjacentOffsets
            .map(([rowOffset, colOffset]) => ({
                row: rowIndex + rowOffset,
                col: colIndex + colOffset
            }))
            .filter(({ row, col }) => row >= 0 && row < rows && col >= 0 && col < cols);
    }

    const handleSquareClick = (rowIndex: number, colIndex: number) => {
        squares = squares.map((row, r) =>
            row.map((state, c) => (state === 'clicked' ? 'clicked' : 'off'))
        );

        squares[rowIndex][colIndex] = 'clicked';

        let potentialSquares = new Set<string>();
        getAdjacentSquares(rowIndex, colIndex).forEach(({ row, col }) => {
            potentialSquares.add(`${row},${col}`);
        });

        const selectedSquares: { row: number; col: number }[] = [];

        while (selectedSquares.length < MAX_HIGH_SQUARES && potentialSquares.size > 0) {
            const squaresArray = Array.from(potentialSquares).map((coord) => {
                const [row, col] = coord.split(',').map(Number);
                return { row, col };
            });

            const randomIndex = Math.floor(Math.random() * squaresArray.length);
            const selectedSquare = squaresArray[randomIndex];

            potentialSquares.delete(`${selectedSquare.row},${selectedSquare.col}`);

            selectedSquares.push(selectedSquare);

            getAdjacentSquares(selectedSquare.row, selectedSquare.col).forEach(({ row, col }) => {
                const coordStr = `${row},${col}`;
                if (
                    !selectedSquares.some((s) => s.row === row && s.col === col) &&
                    squares[row][col] !== 'clicked'
                ) {
                    potentialSquares.add(coordStr);
                }
            });
        }

        selectedSquares.forEach(({ row, col }) => {
            squares[row][col] = 'high';
        });
    };

    onMount(() => {
        interval = setInterval(() => {
            let highCount = 0;
            squares = squares.map((row) =>
                row.map((state) => {
                    if (state === 'high') highCount++;

                    if (Math.random() < flickerIntensity) {
                        const states: SquareState[] = ['off', 'medium', 'high'];
                        const currentIndex = states.indexOf(state);
                        const nextState = states[(currentIndex + 1) % states.length];

                        if (nextState === 'high' && highCount >= MAX_HIGH_SQUARES) {
                            return state;
                        }

                        if (state === 'high') highCount--;
                        if (nextState === 'high') highCount++;

                        return nextState;
                    }
                    return state;
                })
            );
        }, intervalMs);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="grid h-full w-full" style="grid-template-columns: repeat({cols}, 1fr);">
    {#each squares as row, rowIndex}
        {#each row as state, colIndex}
            <button
                on:click={() => handleSquareClick(rowIndex, colIndex)}
                class={classNames(
                    'aspect-square cursor-pointer transition-colors duration-200 hover:duration-100',
                    stateColors[state],
                    {
                        'duration-100': state === 'clicked',
                        'duration-800 hover:!bg-[#FF81A4]/40': state !== 'clicked'
                    }
                )}
            />
        {/each}
    {/each}
</div>
