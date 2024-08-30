<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const state = writable<{
        activeInputs: Array<number>;
        currentInput: number;
        animationComplete: boolean;
    }>({
        activeInputs: [],
        currentInput: 0,
        animationComplete: false
    });

    onMount(() => {
        setInterval(() => {
            if ($state.animationComplete) {
                return;
            }
            if ($state.activeInputs.length === 5) {
                state.set({ ...$state, animationComplete: true });
            }
            state.set({
                ...$state,
                activeInputs: [...$state.activeInputs, $state.activeInputs.length],
                currentInput: Math.min($state.currentInput + 1, 5)
            });
        }, 600);
    });
</script>

<div class="row-span-5 rounded-2xl flex flex-col gap-4 p-2 bg-greyscale-850/90">
    <div class="bg-white/[0.02] rounded-lg flex-1 flex flex-col items-center justify-center p-6">
        <div class="flex gap-1">
            {#each Array.from({ length: 6 }).map(() => Math.floor(Math.random() * 10)) as number, i}
                <!-- svelte-ignore a11y-autofocus -->
                <div
                    class={classNames(
                        'relative flex items-center justify-center outline-none duration-500 pointer-events-none text-center text-primary text-lg space-x-4 size-10 bg-greyscale-850 rounded-lg border transition-all duration-500 border-white/10 shadow-lg shadow-black/5',
                        {
                            'border-white delay-200': $state.currentInput === i
                        }
                    )}
                >
                    <span
                        class={classNames('transition-opacity', {
                            'opacity-0': !$state.activeInputs.includes(i)
                        })}>{number}</span
                    >
                </div>
            {/each}
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Multi-factor authentication</span>
        <p class="text-secondary">
            Requiring users to verify their identity using a second authentication factor.
        </p>
    </div>
</div>
