<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;

    const width = 2000;
    const height = 1000;

    type DrawCircleArgs = {
        x: number;
        y: number;
        radius: number;
        color: string;
    };
    function drawCircle(ctx: CanvasRenderingContext2D, { x, y, radius, color }: DrawCircleArgs) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
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

    const circles: DrawCircleArgs[] = [
        { x: 50, y: 400, radius: 3, color: '#ffffff' },
        { x: 1600, y: 800, radius: 3, color: '#ffffff' },
        { x: 400, y: 100, radius: 3, color: '#ffffff' }
    ];

    // Lines between all circles
    const lines: DrawLineArgs[] = circles.reduce((acc, circle, i) => {
        if (i === circles.length - 1) return acc;
        return circles
            .filter((_, j) => j > i)
            .reduce((acc, nextCircle) => {
                return [
                    ...acc,
                    {
                        from: [circle.x, circle.y],
                        to: [nextCircle.x, nextCircle.y],
                        color: '#ffffff50'
                    }
                ];
            }, acc);
    }, [] as DrawLineArgs[]);

    onMount(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        circles.forEach((circle) => drawCircle(ctx, circle));
        lines.forEach((line) => line && drawLine(ctx, line));
    });
</script>

<canvas bind:this={canvas} {width} {height} />

<style>
    canvas {
        border: 1px dashed #fff;
        width: 100%;
        margin-block-start: 2rem;
    }
</style>
