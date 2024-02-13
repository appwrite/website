<script lang="ts">
    import { onMount } from 'svelte';

    /* Variables & Contstants */
    let canvas: HTMLCanvasElement;
    const width = 2000;
    const height = 1000;

    /* Helpers */
    type DrawCircleArgs = {
        pos: [number, number];
        radius: number;
        color: string;
    };
    function drawCircle(ctx: CanvasRenderingContext2D, { pos, radius, color }: DrawCircleArgs) {
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    type DrawLineArgs = {
        from: [number, number];
        to: [number, number];
        color: string;
    };
    function drawLine(ctx: CanvasRenderingContext2D, { from, to, color }: DrawLineArgs) {
        ctx.beginPath();
        ctx.moveTo(from[0], from[1]);
        ctx.lineTo(to[0], to[1]);
        ctx.strokeStyle = color;
        ctx.stroke();
    }

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

    function paintCanvas() {
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        ctx.reset();

        circles.forEach((circle, i) => {
            const color = selected[i] ? '#ff0000' : '#ffffff';
            drawCircle(ctx, { ...circle, radius: 8, color });
        });
        lines.forEach((line) => {
            let color = '#ffffff50';
            if (selected[line.from] && selected[line.to]) {
                color = '#ff0000';
            }
            drawLine(ctx, {
                from: circles[line.from].pos,
                to: circles[line.to].pos,
                color
            });
        });
    }

    onMount(paintCanvas);

    $: {
        selected;
        paintCanvas();
    }
</script>

{#each circles as circle, i}
    <div>
        <label>
            <input type="checkbox" bind:checked={selected[i]} />
            Circle {i} ({circle.pos[0]}, {circle.pos[1]})
        </label>
    </div>
{/each}

<canvas bind:this={canvas} {width} {height} />

<style>
    canvas {
        border: 1px dashed #fff;
        width: 100%;
        margin-block-start: 2rem;
    }
</style>
