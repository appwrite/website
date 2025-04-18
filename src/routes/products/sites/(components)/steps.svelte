<script lang="ts">
    import type { Snippet } from 'svelte';
    import { scroll, animate } from 'motion';

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();

    let height = $state<number>(0);

    $effect(() => {
        scroll((progress) => (height = progress.y.current));
    });
</script>

<div class="relative flex gap-3">
    <div
        class="absolute inset-y-0 top-0 -left-[0.5px] -mt-1 flex h-full w-px justify-center bg-transparent"
    >
        <div
            class="from-accent absolute inset-y-0 left-0 mt-5 h-full w-px bg-gradient-to-b to-transparent"
            style:height={`${height}px`}
        ></div>
    </div>
    <div class="flex min-h-[100vh] w-full flex-col gap-24">
        {@render children()}
    </div>
</div>
