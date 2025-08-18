<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { animate } from 'motion';
    import { type Snippet } from 'svelte';

    interface AnimatedLogoProps {
        children: Snippet;
        delay: number;
        repeatDelay: number;
        class?: string;
    }

    let element: HTMLElement;

    const { children, delay, repeatDelay, class: className }: AnimatedLogoProps = $props();

    $effect(() => {
        animate(
            element,
            {
                filter: ['blur(5px)', 'blur(0px)', 'blur(0px)', 'blur(5px)'],

                y: [10, 0, 0, -10],
                opacity: [0, 1, 1, 0]
            },
            {
                delay,
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay,
                repeatType: 'loop',
                times: [0, 0.1, 0.9, 1]
            }
        );
    });
</script>

<div
    bind:this={element}
    style:transform="translateY(10px)"
    style:opacity="0"
    style:filter="blur(5px)"
    class={cn('transition-opacity will-change-transform', className)}
>
    {@render children()}
</div>
