<script lang="ts">
    import type { Snippet } from 'svelte';
    import { scroll, animate } from 'motion';

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
    let indicator: HTMLElement;

    $effect(() => {
        scroll(animate(indicator, { scaleY: [0, 1] }), {
            target: indicator,
            offset: ['start 160px', 'end end']
        });
    });
</script>

<div class="relative flex h-fit gap-3 md:container">
    <div
        class="absolute inset-y-0 top-0 -left-[0.5px] -mt-1 flex w-px justify-center bg-transparent md:left-4.75"
    >
        <div
            bind:this={indicator}
            style:transform="scaleY(0)"
            class="from-accent via-accent absolute inset-y-0 left-0 mt-5 h-full w-px origin-top bg-gradient-to-b via-80% to-transparent to-99%"
        ></div>
        <div
            class="from-smooth via-smooth absolute inset-y-0 left-0 mt-5 h-full w-px origin-top bg-gradient-to-b via-80% to-transparent to-99%"
        ></div>
    </div>
    <div class="flex min-h-[100vh] w-full flex-col gap-24">
        {@render children()}
    </div>
</div>
