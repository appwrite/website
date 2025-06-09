import { onMount } from 'svelte';

export function withRaf(callback: () => void): void {
    let raf: number | null = null;

    const loop = () => {
        callback();
        raf = requestAnimationFrame(loop);
    };

    onMount(() => {
        raf = requestAnimationFrame(loop);
        return () => {
            if (raf) {
                cancelAnimationFrame(raf);
            }
        };
    });
}
