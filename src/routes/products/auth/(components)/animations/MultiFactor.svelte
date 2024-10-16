<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    type AnimationState = {
        hovered: boolean;
        activeInputs: Array<number>;
        currentInput: number;
        animationComplete: boolean;
    };

    const DEFAULT_STATE: AnimationState = {
        hovered: false,
        activeInputs: [],
        currentInput: 0,
        animationComplete: false
    };

    const state = writable<AnimationState>(DEFAULT_STATE);

    export let animate: boolean = false;

    const animation = () => {
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
    };

    onMount(() => {
        if (!animate) return;
        animation();
    });
</script>

<div class="bg-greyscale-850/90 row-span-5 flex flex-col gap-4 rounded-2xl p-2" role="presentation">
    <div class="flex flex-1 flex-col items-center justify-center rounded-lg bg-white/[0.02] p-6">
        <div class="flex gap-1">
            {#each Array.from({ length: 6 }).map(() => Math.floor(Math.random() * 10)) as number, i}
                <!-- svelte-ignore a11y-autofocus -->
                <div
                    class={classNames(
                        'text-primary bg-greyscale-850 pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 outline-none transition-all duration-500',
                        {
                            'border-accent shadow-accent/10 shadow-md': $state.currentInput === i
                        }
                    )}
                >
                    <span
                        class={classNames('transition-opacity', {
                            'opacity-0': !$state.activeInputs.includes(i)
                        })}>{number}</span
                    >
                </div>{/each}
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Multi-factor authentication</span>
        <p class="text-secondary">
            Requiring users to verify their identity using a second authentication factor.
        </p>
    </div>
</div>
