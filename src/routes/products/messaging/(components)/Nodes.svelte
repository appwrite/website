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
    const circles: DrawCircleArgs[] = [
        { pos: [100, 500], radius: 3, color: '#ffffff' },
        { pos: [500, 100], radius: 3, color: '#ffffff' },
        { pos: [1500, 100], radius: 3, color: '#ffffff' },
        { pos: [1500, 900], radius: 3, color: '#ffffff' },
        { pos: [500, 900], radius: 3, color: '#ffffff' },
        { pos: [1900, 500], radius: 3, color: '#ffffff' },
        { pos: [450, 450], radius: 3, color: '#ffffff' },
        { pos: [1570, 700], radius: 3, color: '#ffffff' },
        { pos: [1300, 450], radius: 3, color: '#ffffff' }
    ];

    const lines: DrawLineArgs[] = [
        { from: circles[0].pos, to: circles[1].pos, color: '#ffffff20' },
        { from: circles[0].pos, to: circles[2].pos, color: '#ffffff20' },
        { from: circles[0].pos, to: circles[4].pos, color: '#ffffff20' },
        { from: circles[0].pos, to: circles[7].pos, color: '#ffffff20' },
        { from: circles[7].pos, to: circles[6].pos, color: '#ffffff20' },
        { from: circles[6].pos, to: circles[8].pos, color: '#ffffff20' },
        { from: circles[1].pos, to: circles[2].pos, color: '#ffffff20' },
        { from: circles[2].pos, to: circles[3].pos, color: '#ffffff20' },
        { from: circles[3].pos, to: circles[4].pos, color: '#ffffff20' },
        { from: circles[4].pos, to: circles[1].pos, color: '#ffffff20' },
        { from: circles[5].pos, to: circles[3].pos, color: '#ffffff20' },
        { from: circles[5].pos, to: circles[2].pos, color: '#ffffff20' }
    ];
    $: console.log(lines);

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
