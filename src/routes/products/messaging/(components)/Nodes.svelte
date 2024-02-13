<script lang="ts">
    import { onMount } from 'svelte';

    /* Variables & Contstants */
    const width = 2000;
    const height = 1000;

    /* Entities */
    type Circle = {
        pos: [number, number];
    };
    const circles = [
        { pos: [100, 500] },
        { pos: [500, 100] },
        { pos: [1500, 100] },
        { pos: [1500, 900] },
        { pos: [500, 900] },
        { pos: [1900, 500] },
        { pos: [450, 450] },
        { pos: [1570, 700] },
        { pos: [1300, 450] }
    ] as const satisfies Circle[];

    type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
        ? Acc[number]
        : Enumerate<N, [...Acc, Acc['length']]>;

    type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

    type Line = {
        from: IntRange<0, typeof circles.length>;
        to: IntRange<0, typeof circles.length>;
    };

    const lines: Line[] = [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 4 },
        { from: 0, to: 7 },
        { from: 7, to: 6 },
        { from: 6, to: 8 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 1 },
        { from: 5, to: 3 },
        { from: 5, to: 2 }
    ];
    $: console.log(lines);

    let selected = [] as boolean[];
</script>

{#each circles as circle, i}
    <div>
        <label>
            <input type="checkbox" bind:checked={selected[i]} />
            Circle {i} ({circle.pos[0]}, {circle.pos[1]})
        </label>
    </div>
{/each}

<svg viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
    {#each lines as line}
        <line
            x1={circles[line.from].pos[0]}
            y1={circles[line.from].pos[1]}
            x2={circles[line.to].pos[0]}
            y2={circles[line.to].pos[1]}
            stroke={selected[line.from] && selected[line.to] ? '#ff0000' : '#ffffff50'}
        />
    {/each}

    {#each circles as circle, i}
        <circle
            cx={circle.pos[0]}
            cy={circle.pos[1]}
            r="10"
            fill={selected[i] ? '#ff0000' : '#ffffff'}
        />
    {/each}
</svg>

<style>
    svg {
        border: 1px dashed #fff;
        width: 100%;
        margin-block-start: 2rem;
    }
</style>
