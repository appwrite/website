<script lang="ts">
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

<div class="bg-greyscale-850/90 flex flex-col rounded-2xl p-2">
    <div
        class="font-aeonik-pro flex h-[250px] flex-1 flex-col items-center justify-center rounded-lg bg-white/[0.02] p-6"
    >
        <div class="flex gap-2">
            <div class="flex flex-col gap-1">
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-12 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-xl shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span>5</span>
                </div>
                <span class="font-fira-code text-center text-[0.625rem]">Minute</span>
            </div>
            <div class="flex flex-col gap-1">
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-12 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-2xl shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span class="block pt-[10px]">*</span>
                </div>
                <span class="font-fira-code text-center text-[0.625rem]">Hour</span>
            </div>
            <div class="flex flex-col gap-1">
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-12 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-2xl shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span class="block pt-[10px]">*</span>
                </div>
                <span class="font-fira-code text-center text-[0.625rem]">Day <br /> (month)</span>
            </div>
            <div class="flex flex-col gap-1">
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-12 items-center justify-center space-x-4 rounded-lg border border-white shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span class="h-[20px] w-px bg-white"></span>
                </div>
                <span class="font-fira-code text-center text-[0.625rem]">Month</span>
            </div>
            <div class="flex flex-col gap-1">
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-12 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-2xl shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span class="block pt-[10px]">*</span>
                </div>
                <span class="font-fira-code text-center text-[0.625rem]">Day <br /> (week)</span>
            </div>
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Scheduled functions</span>
        <p class="text-secondary">
            Appwrite supports scheduled function executions using cron expressions.
        </p>
    </div>
</div>
